import { useState } from "react";
import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";
import { useUser } from "@/providers/UserProvider";
import { useCore } from "@/providers/CoreProvider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { encrypt, decryptToken, getAccessToken } from "@/utils/tools";
import errorHandler from "@/utils/errorHandler";
import config from "@/config/index";
import Web3 from "web3";

//not for original iHost 
import {useAppDispatch} from '../xtWallet/hooks/useAppDispatch';
import {useAppSelector} from '../xtWallet/hooks/useAppSelector';
import {useAppContext} from '../xtWallet/hooks/useAppContext';
import {actions, selectIsWalletConnected} from "../xtWallet/states/walletState";
import {Address} from '@signumjs/core' 
import {useNetworkMetadata} from '../xtWallet/hooks/useNetworkMetadata';
import {LedgerClientFactory} from '@signumjs/core'
import { Contract, ContractDataView } from "@signumjs/contracts";
import { useEffect, useState } from "react";
import { Http, HttpClientFactory, HttpResponse, HttpMockBuilder, HttpError } from "@signumjs/http"
import axios from "axios"
import { Address, LedgerClientFactory } from "@signumjs/core";
import { generateMasterKeys } from "@signumjs/crypto";
import Resizer from "react-image-file-resizer"
import { useAppContext } from '../../../xtWallet/hooks/useAppContext';
import { Amount, convertDecStringToHexString, convertHexStringToDecString} from "@signumjs/util";

import  {useDisclosure}  from '@chakra-ui/react'
import pRetry, { AbortError } from "p-retry";
import pThrottle from "p-throttle";
import GetStarted from "@/components/GetStarted";
import intervalToDuration from "date-fns/intervalToDuration";
function assertValidData(args) {
    let validator = InputValidationService();
    const { price = "0", auctionTimeout, royaltiesFee, status, dutchPriceDrop, } = args;
    validator.assertNumberLessOrEqualThan(constants_1.Constants.Contract.MaximumRoyaltyFee, royaltiesFee * 10);
    if (status !== "NotForSale") {
      validator.assertAmountGreaterOrEqualThan(Amount.fromSigna(constants_1.Constants.Contract.MinimumSellAmount), Amount.fromSigna(price));
    }
    if (dutchPriceDrop) {
      validator.assertAmountGreaterOrEqualThan(Amount.fromSigna(constants_1.Constants.Contract.MinimumPriceDrop), Amount.fromSigna(dutchPriceDrop));
    }
    if (status === "OnAuction") {
      validator.assertNumberBetween(constants_1.Constants.Contract.AuctionTimeoutMinimum, constants_1.Constants.Contract.AuctionTimeoutMaximum, auctionTimeout);
    }
  }
  function convertToContractBlockheight(blockheight) {
      if (blockheight < 0)
          throw new Error("Negative blockheight not allowed");
      const hexBlockHeight = convertDecStringToHexString(String(blockheight));
      return convertHexStringToDecString(hexBlockHeight + "00000000");
  }
  function calculateTimeoutValue(timeout, currentBlockHeight) {
      if (!timeout)
          return "0";
      const targetBlockHeight = currentBlockHeight + Math.floor(timeout / 4);
      return convertToContractBlockheight(targetBlockHeight);
  }
  function asStatusCode(status) {
      switch (status) {
          case "NotForSale":
              return 0;
          case "FixedPrice":
              return 1;
          case "OnAuction":
              return 2;
      }
  }
  async function createInitialDataStack(args, ledger, publicKey) {
    const { blocks } = await ledger.block.getBlocks(0, 1);
    const currentBlockHeight = blocks[0].height;
    const safeAmount = (amount = "0") => amount ? Amount.fromSigna(amount).getPlanck() : "0";
    /*
     * This creates the initial data stack based on this contract:
     * https://github.com/signum-network/signum-smartj/blob/master/src/main/java/bt/dapps/SignumArt2.java
     *
     * 0 - {Address} owner
     * 1 - {long} status
     * 2 - {long} currentPrice
     * 3 - {Address} platformAddress
     * 4 - {long} platformFee
     * 5 - {long} royaltiesFee
     * 6 - {Address} royaltiesOwner
     * 7 	 {Address} trackSetNotForSale;
     * 8 	 {Address} trackSetForSale;
     * 9 	 {Address} trackAuctionOpened;
     * 10 - {Address} trackNewAuctionBid;
     * 11 - {Address} trackNewOwner;
     * 12 	 {Address} trackOwnershipTransferred;
     * 13 	 {Address} trackDutchAuctionOpened;
     * 14 	 {Address} trackOfferReceived;
     * 15 	 {Address} trackOfferRemoved;
     * 16 	 {Address} trackLikeReceived;
     * 17 	 {Address} trackRoyaltiesTransfer;
     * 18 - {Address} auctionTimeout
     * 19 - {Address} highestBidder
     * 20 - {long} auctionMaxPrice
     * 21 - {Address} offerAddress
     * 22 - {long} offerPrice
     * 23 - {long} duchStartHeight
     * 24 - {long} startPrice
     * 25 - {long} priceDropPerBlock
     * 26 - {long} reservePrice
     */
    const { status, royaltiesFee, auctionTimeout = 0, price, auxPrice, dutchPriceDrop, } = args;
    const ownerId = Address.fromPublicKey(publicKey).getNumericId();
    const statusCode = asStatusCode(status);
    const currentPrice = safeAmount(price);
    const platformAddress = constants_1.Constants.Accounts.PlatformFee;
    const platformFee = constants_1.Constants.ServiceFee;
    const royaltiesOwner = ownerId;
    const royaltiesFeePromille = royaltiesFee * 10;
    const trackerAccountSetNotForSale = constants_1.Constants.Accounts.NftTrackSetNotForSale;
    const trackerAccountSetForSale = constants_1.Constants.Accounts.NftTrackSetForSale;
    const trackerAccountAuctionOpened = constants_1.Constants.Accounts.NftTrackAuctionOpened;
    const trackerAccountNewAuctionBid = constants_1.Constants.Accounts.NftTrackAuctionBid;
    const trackerAccountNewOwner = constants_1.Constants.Accounts.NftTrackNewOwner;
    const trackerAccountOwnershipTransferred = constants_1.Constants.Accounts.NftTrackOwnershipTransferred;
    const trackerAccountDutchAuctionOpened = constants_1.Constants.Accounts.NftTrackDutchAuctionOpened;
    const trackerAccountOfferReceived = constants_1.Constants.Accounts.NftTrackOfferReceived;
    const trackerAccountOfferRemoved = constants_1.Constants.Accounts.NftTrackOfferRemoved;
    const trackerAccountLikeReceived = constants_1.Constants.Accounts.NftTrackLikeReceived;
    const trackerAccountRoyaltiesTransfer = constants_1.Constants.Accounts.NftTrackRoyaltiesTransferred;
    // auction
    const auctionStopHeight = calculateTimeoutValue(auctionTimeout, currentBlockHeight);
    const auctionMaxPrice = safeAmount(dutchPriceDrop ? "0" : auxPrice);
    // dutch auction
    const dutchStartHeight = dutchPriceDrop ? currentBlockHeight : "0";
    const dutchStartPrice = dutchPriceDrop ? currentPrice : "0";
    const dutchMinPrice = safeAmount(dutchPriceDrop ? auxPrice : "0");
    const dutchPriceDropPerBlock = safeAmount(dutchPriceDrop);
    const SkipValue = 0;
    // order is important - DO NOT CHANGE
    return [
      ownerId,
      statusCode,
      currentPrice,
      platformAddress,
      platformFee,
      royaltiesFeePromille,
      royaltiesOwner,
      trackerAccountSetNotForSale,
      trackerAccountSetForSale,
      trackerAccountAuctionOpened,
      trackerAccountNewAuctionBid,
      trackerAccountNewOwner,
      trackerAccountOwnershipTransferred,
      trackerAccountDutchAuctionOpened,
      trackerAccountOfferReceived,
      trackerAccountOfferRemoved,
      trackerAccountLikeReceived,
      trackerAccountRoyaltiesTransfer,
      auctionStopHeight,
      SkipValue,
      auctionMaxPrice,
      SkipValue,
      SkipValue,
      dutchStartHeight,
      dutchStartPrice,
      dutchPriceDropPerBlock,
      dutchMinPrice,
    ];
  }
function imagePinResultToMediaArray(imagePinResult) {
    const media = [];
    for (let pinMap of imagePinResult) {
      const matches = /^\d{6}\.(.+)\..+$/gi.exec(pinMap.file.toLowerCase());
      if (!matches) {
        throw new Error(`Unexpected Format: ${pinMap.file}`);
      }
      const group = matches[1];
      const [index, type] = group.split("-");
      const i = +index - 1;
      if (!media[i]) {
        // @ts-ignore
        media.push({});
      }
      if (type !== "social" && type !== "thumb") {
        media[i][pinMap.hash] = getMimeTypeFromFilePath(pinMap.file);
      }
      else {
        media[i][type] = pinMap.hash;
      }
    }
  
    return media;
  }

const MimeTypes = {
    png: "image/png",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    webp: "image/webp",
    gif: "image/gif",
    svg: "image/svg+xml",
  };

function getMimeTypeFromFilePath(fileName) {
    const suffix = fileName.split(".");
    // @ts-ignore
    const mimeType = MimeTypes[suffix[(suffix.length - 1)]];
    if (!mimeType) {
      throw Error(`Unsupported Media Type: ${filePath}`);
    }
   
    return mimeType;
  }
  function getAttributesFromNftRecord(record) {
    const attributes = [];
    for (let i = 1; i <= 8; ++i) {
      // @ts-ignore
      const att = record[`attribute${i}`];
      if (att) {
        const [key, value] = att.split(":");
        attributes.push({ [key]: value });
      }
    }
  
    return attributes;

  }
export const InputValidationService = function() {
    const  validator = {
   assertURL(url) {
      if (!InputValidationService.isValidURL(url)) {
          throw new InvalidInputError("URLs with fragments or query parameters are not allowed");
      }
  },
   assertAmountGreaterThan(minimum, actual) {
      if (!actual.greater(minimum)) {
          throw new InvalidInputError(`Amount must be greater than ${minimum.getSigna()} Signa`);
      }
  },
   assertAmountGreaterOrEqualThan(minimum, actual) {
      if (!actual.greaterOrEqual(minimum)) {
          throw new InvalidInputError(`Amount must be greater or equal than ${minimum.getSigna()} Signa`);
      }
  },
   assertAmountBetween(minimum, maximum, actual) {
      if (actual.greaterOrEqual(minimum) && actual.lessOrEqual(minimum))
          return;
      throw new InvalidInputError(`Amount must be between ${minimum.getSigna()} and ${maximum.getSigna()} Signa`);
  },
   assertNumberBetween(minimum, maximum, actual) {
      if (minimum <= actual && actual <= maximum)
          return;
      throw new InvalidInputError(`Value must be between ${minimum} and ${maximum}`);
  },
   assertNumberGreaterOrEqualThan(minimum, actual) {
      if (actual < minimum) {
          throw new InvalidInputError(`Value must be greater or equal than ${minimum}`);
      }
  },
   assertNumberLessOrEqualThan(maximum, actual) {
      if (maximum < actual) {
          throw new InvalidInputError(`Value must be less or equal than ${maximum}`);
      }
  },
   isValidURL(url) {
      return (0, isURL_1.default)(url, {
          allow_fragments: false,
          allow_query_components: false,
          require_protocol: true,
      });
  },
   isTextGreaterThan(text, characters) {
      return text && text.length > characters ? true : false;
  },
  
  isTextLowerThan(text, characters) {
      return text && text.length < characters ? true : false;
  },
  isNumberGreaterThan(value, amount) {
      if (typeof value === "number") {
          return value > amount;
      }
      const n = parseFloat(value);
      if (Number.isNaN(n))
          return false;
      return n > amount;
  },
  isNumberLowerThan(value, amount) {
      if (typeof value === "number") {
          return value < amount;
      }
      const n = parseFloat(value);
      if (Number.isNaN(n))
          return false;
      return n < amount;
  },
    }
    return validator
  
}


export async function pinImageFiles(collectionId, files, ipfsServiceKey, ipfsService) {
    const promises = [];
    const filemapping = [];
    for (let file of files) {
      //to the log
      let x = 1;
      filemapping.push(file.name);
      promises.push(pinFile(file, {
        name: `signumart-collection-${collectionId}-${file.name}`,
        keyvalues: {
          engine: "signumart-massup",
          collection: collectionId,
        },
      }, ipfsServiceKey , ipfsService , "image/*"));
      x++;
    }
    const pinningResults = await Promise.all(promises);

    if (ipfsService === "1"){
    return pinningResults.map((pinningResult, index) => ({
      file: filemapping[index],
      hash: pinningResult.data.IpfsHash,
    }));
  } else {
    return pinningResults.map((pinningResult, index) => ({
      file: filemapping[index],
      hash: pinningResult,
    }));
  }
  }

export async function pinMetaData(collectionId, filePinResults, metaDataFile, ipfsServiceKey , ipfsService) {
    let ipfsHash;
    const nftRecord = metaDataFile//json file directly;
    const media = imagePinResultToMediaArray(filePinResults);
    const attributes = getAttributesFromNftRecord(nftRecord);
    const descriptor = {
      version: 1,
      collectionId,
      name: nftRecord.name,
      edition: nftRecord.edition,
      description: nftRecord.description,
      identifier: nftRecord.identifier,
      symbol: nftRecord.symbol,
      title: "",
      media,
      attributes,
    };
    //jsonValidator_1.jsonValidator.validateNft(descriptor);
    const descriptorPath = filePinResults[0].file.split(".").slice(0, 2).join(".").concat('-', "metadata.json");


    const prefix = `signumart-collection-${collectionId}`;
    const jsn = JSON.stringify(descriptor);
    const blob = new Blob([jsn], { type: 'application/json' });
    const file = new File([blob], prefix + descriptorPath);
    let descriptorFile = new File([JSON.stringify(descriptor)], prefix + descriptorPath, { type: 'application/json' });
    const res = await pinFile(file, {
      name: prefix + descriptorPath,
      keyvalues: {
        engine: "signumart-massup",
        collection: collectionId,
      },
    }, ipfsServiceKey , ipfsService , "application/json" );
    if (ipfsService === "1"){
    ipfsHash = res["data"]["IpfsHash"];
    }else{
      ipfsHash = res;
    }

    return {
      nftRecord,
      ipfsHash,
    };
}


function assertValidData(args) {
    let validator = InputValidationService();
    const { price = "0", auctionTimeout, royaltiesFee, status, dutchPriceDrop, } = args;
    validator.assertNumberLessOrEqualThan(constants_1.Constants.Contract.MaximumRoyaltyFee, royaltiesFee * 10);
    if (status !== "NotForSale") {
      validator.assertAmountGreaterOrEqualThan(Amount.fromSigna(constants_1.Constants.Contract.MinimumSellAmount), Amount.fromSigna(price));
    }
    if (dutchPriceDrop) {
      validator.assertAmountGreaterOrEqualThan(Amount.fromSigna(constants_1.Constants.Contract.MinimumPriceDrop), Amount.fromSigna(dutchPriceDrop));
    }
    if (status === "OnAuction") {
      validator.assertNumberBetween(constants_1.Constants.Contract.AuctionTimeoutMinimum, constants_1.Constants.Contract.AuctionTimeoutMaximum, auctionTimeout);
    }
  }

  async function createNft(args) {
    assertValidData(args);
 
    const { publicKey, signPrivateKey } = generateMasterKeys(args.passPhrase)
    const { ledger } = args;
    const { Contract } = constants_1.Constants;
    const referencedTransactionHash = Contract.Reference.MainNet;
    //profile.network === "Signum Main Net"
      //? Contract.Reference.MainNet
      //: Contract.Reference.Testnet;
    const activationAmountPlanck = Amount.fromSigna(Contract.ActivationCosts).getPlanck();
    const data = await createInitialDataStack(args, ledger, publicKey);
    const description = JSON.stringify({
      version: 1,
      descriptor: args.descriptorCid,
    });

    const { transaction } = await ledger.contract.publishContractByReference({
      senderPublicKey: publicKey,
      description,
      feePlanck: "40000000",
      referencedTransactionHash,
      activationAmountPlanck,
      name: Contract.BaseName,
      data,
      deadline: 1440,
      skipAdditionalSecurityCheck: false,
      senderPrivateKey: signPrivateKey,
    });
    // 
    return transaction;
  }
  async function mintNft(args) {
    const { metaData, ledger, passPhrase } = args;
    const nftData = metaData.nftRecord;
    return createNft({
      ledger: ledger,
      auctionTimeout: nftData.auctionEnd
        ? calculateTimeoutFromDate(nftData.auctionEnd)
        : undefined,
      auxPrice: String(nftData.offerPrice || ""),
      price: String(nftData.price || ""),
      royaltiesFee: nftData.royalties,
      status: nftData.listingMode,
      descriptorCid: metaData.ipfsHash,
      passPhrase: passPhrase,
    });
  }
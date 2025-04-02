import { useEffect, useState } from "react";
import { useUser } from "@/providers/UserProvider";
import {useGenerator} from "@/providers/GeneratorProvider"
import {Stack, Radio, RadioGroup, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, ButtonGroup, Input, Text, Image } from '@chakra-ui/react'
import { Progress } from '@chakra-ui/react'
import { Http, HttpClientFactory, HttpResponse, HttpMockBuilder, HttpError } from "@signumjs/http"
import axios from "axios"
import { Address, LedgerClientFactory } from "@signumjs/core";
import { generateMasterKeys } from "@signumjs/crypto";
import Resizer from "react-image-file-resizer"
import { useAppContext } from '../../../xtWallet/hooks/useAppContext';
import { Amount, convertDecStringToHexString, convertHexStringToDecString} from "@signumjs/util";
import CSVFileValidator from 'csv-file-validator';
import  {useDisclosure}  from '@chakra-ui/react'
import pRetry, { AbortError } from "p-retry";
import pThrottle from "p-throttle";
import GetStarted from "@/components/GetStarted";
import intervalToDuration from "date-fns/intervalToDuration";
// import {sharp_01} from "sharp";
const InputValidationService = function() {
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


const NFTuploader = () => {

  const {
    metadata,
    setMetadata,
    nftImages,
     setNftImages,
  isDownloadModal,
  setIsDownloadModal,
  setIsConfetti,
  isGenerated,
  generateSpeed,
  isAutoSave,
  isDownloading,
  downloadPercentage,
  isRandomizedMetadata,
  setIsRandomizedMetadata,
  isCsvEditModal,
  setIsCsvEditModal,
  isDeployNftModal,
  setDeployNftModal,
  csvData,
  setCsvData,
  uploadImages,
  setUploadImages,
  thumbImages,
  setThumbImages,
  socialImages,
  setSocialImages,
} = useGenerator();


  const [passPhrase, setPassPhrase] = useState('');
  const [ipfsServiceKey, setIpfsServiceKey] = useState('');
  const [ipfsService, setIpfsService] = useState('1');
  const [collectionIdInput, setCollectionId] = useState('')
  const handleCollectionIdChange = (event) => setCollectionId(event.target.value)
  const handlePassPhrase = (event) => setPassPhrase(event.target.value);
  const handleIpfsServiceKey = (event) => setIpfsServiceKey(event.target.value);
  const [src, setSrc] = useState("");
  const [selectedFiles, setSelectedFiles] = useState(nftImages);
  const [selectedUploads, setSelectedUploads] = useState(uploadImages);
  const [selectedSocial, setSelectedSocial] = useState(socialImages);
  const [selectedThumb, setSelectedThumb] = useState(thumbImages);
  const [selectedCsvArray, setCsvArray] = useState(metadata);
  const [progressNum, setProgressNum] = useState(0);
  const { Ledger, Wallet, DAppName } = useAppContext();
  const [isRunning, setIsRunning] = useState(false );
  const { isOpen:isOpenModal, onOpen:onOpenModal, onClose:onCloseModal} = useDisclosure()
  //object to check the csv file validate or not
  // useEffect(()=>{
  //   if (progressNum < 100 && isRunning) {
  //     setTimeout(
  //     () =>  setProgressNum(prev => prev += 2),50      )
  //   }
  // },[progressNum, isRunning ])
  const csvConfig = {
    headers: [
      {
        name: "name",
        inputName: "name",
        required: true,
        requiredError: function (headerName, rowNumber, columnNumber) {
          return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
        }
      },
      {
        name: "description",
        inputName: "description",
        required: true,
        requiredError: function (headerName, rowNumber, columnNumber) {
          return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
        }
      },
      {
        name: "symbol",
        inputName: "symbol",
        required: true,
        requiredError: function (headerName, rowNumber, columnNumber) {
          return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
        }
      },
      {
        name: "edition",
        inputName: "edition",
        required: true,
        requiredError: function (headerName, rowNumber, columnNumber) {
          return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
        }
      },
      {
        name: "royalties",
        inputName: "royalties",
        required: true,
        requiredError: function (headerName, rowNumber, columnNumber) {
          return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
        }
      },
      {
        name: "identifier",
        inputName: "identifier",
        required: true,
        requiredError: function (headerName, rowNumber, columnNumber) {
          return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
        }
      },
      {
        name: "image1",
        inputName: "image1",
        required: true,
        requiredError: function (headerName, rowNumber, columnNumber) {
          return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
        }
      },
      {
        name: "image2",
        inputName: "image2",
        required: false,
      },
      {
        name: "image3",
        inputName: "image3",
        required: false,
      },
      {
        name: "attribute1",
        inputName: "attribute1",
        required: false,

      },
      {
        name: "attribute2",
        inputName: "attribute2",
        required: false,

      },
      {
        name: "attribute3",
        inputName: "attribute3",
        required: false,

      },
      {
        name: "attribute4",
        inputName: "attribute4",
        required: false,

      },
      {
        name: "attribute5",
        inputName: "attribute5",
        required: false,

      },
      {
        name: "attribute6",
        inputName: "attribute6",
        required: false,

      },
      {
        name: "attribute7",
        inputName: "attribute7",
        required: false,

      },
      {
        name: "attribute8",
        inputName: "attribute8",
        required: false,

      },
      {
        name: "listingMode",
        inputName: "listingMode",
        required: true,
        requiredError: function (headerName, rowNumber, columnNumber) {
          return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
        }
      },
      {
        name: "price",
        inputName: "price",
        required: true,
        requiredError: function (headerName, rowNumber, columnNumber) {
          return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
        }
      },
      {
        name: "offerPrice",
        inputName: "offerPrice",
        required: true,
        requiredError: function (headerName, rowNumber, columnNumber) {
          return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
        }
      },
      {
        name: "auctionEnd",
        inputName: "auctionEnd",
        requiredError: function (headerName, rowNumber, columnNumber) {
          return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
        }

      },

    ]
  };
  
  const NftConstants = {
    Methods: {
      TransferRoyalties: "7174296962751784077",
    },
    Fees: {
      Interaction: Amount.fromSigna(0.01),
      Activation: Amount.fromSigna(0.3),
    },
  };
  //The object to check the type of image validate or not 
  const MimeTypes = {
    png: "image/png",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    webp: "image/webp",
    gif: "image/gif",
    svg: "image/svg+xml",
  };
  //The 
  const constants_1 = {
    Constants: {
      ServiceFee: 20,
      Accounts: {
        Collection: "1502073279564421257",
        PlatformFee: "8926959845844390999",
        NftTrackSetNotForSale: "14986235278515523967",
        NftTrackSetForSale: "12845950337514560867",
        NftTrackAuctionOpened: "2892883396191715547",
        NftTrackAuctionBid: "5402814080676359773",
        NftTrackNewOwner: "752572214749075641",
        NftTrackOwnershipTransferred: "1437517716086571749",
        NftTrackRoyaltiesTransferred: "14653783900473749918",
        NftTrackLikeReceived: "1235333885279400565",
        NftTrackDutchAuctionOpened: "14874413796446025648",
        NftTrackOfferReceived: "14297788612977302728",
        NftTrackOfferRemoved: "4028407282971252591",
      },
      Contract: {
        BaseName: "NFTSRC40",
        Reference: {
          Testnet: "2506608D961BF2CBFA275F63E3883104E0248096FEC2F86D6DA73CFF213B7D8C",
          MainNet: "4C840330C4352C62871D34CFBD0242F68F551FDBB9C12E013A1489A26009E16D",
        },
        InteractionFee: 0.02,
        ActivationCosts: 0.3,
        MinimumSellAmount: 0.01,
        MinimumPriceDrop: 0.001,
        MaximumRoyaltyFee: 250,
        AuctionTimeoutMinimum: 60,
        AuctionTimeoutMaximum: 44640,
      },
    },
  }
  // pin the file to ipfs
  const pinFile = async (file, metadata, jwtToken , ipfsService, contentType) => { 
   
    const pinByPinata = async () => {
    try {

      const formData = new FormData();
      formData.append("file", file);
      formData.append("pinataMetadata", JSON.stringify(metadata));
      const response = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        maxBodyLength: Infinity,
        maxContentLength: Infinity,
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          // @ts-ignore
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        },
      });

      return response;
    }
    catch (error) {
      if (error instanceof HttpError) {
        console.error("Pinata API Error", "Status:", error.status, "Reason:", error.data);
        if (error.status === 401 || error.status === 403) {
          throw new AbortError(error.data);
        }
        else {
          throw new Error(error.data);
        }
      }
      else {
        console.error("Pinata Pinning Service Error", error.message);
        throw error;
      }
    }
  }
  const pinByNftStorage = async () => {
    try {

    
      
      const formData = new FormData();
      formData.append("file", file);
      formData.append("pinataMetadata", JSON.stringify(metadata));
      const response = await fetch("https://api.nft.storage/upload", {
        method: "POST",
        body: file,
        headers: {
          Accept: "application/json",
          "Content-Type": contentType,
          Authorization: `Bearer ${jwtToken}`,
        },
      });

      if (!response.ok) {
        throw new HttpError(url, response.status, response.statusText, {
          filename,
        });
      }
      const data = await response.json();

      return data.value.cid;
    }
    catch (error) {
      if (error instanceof HttpError) {
        console.error("NFT.Storage API Error", "Status:", error.status, "Reason:", error.data);
        if (error.status === 401 || error.status === 403) {
          throw new AbortError(error.data);
        }
        else {
          throw new Error(error.data);
        }
      }
      else {
        console.error("NFT.Storage Pinning Service Error", error.message);
        throw error;
      }
    }
  }
  if (ipfsService === "1") {
  const throttleToPinata = pThrottle({ limit: 180, interval: 60_000 });
  const throttlePinPinata = throttleToPinata(pinByPinata);
  return pRetry(() => throttlePinPinata (), {
    retries: 5,
    onFailedAttempt: (error) => {
      if (error.retriesLeft) {
        console.log(
          `Attempt pinning Pinata failed. Retrying...`
        );
      }
    },
  });
}else{
  const throttleToNftStorage = pThrottle({ limit: 30, interval: 10_000 });
  const throttlePinNftStorage  = throttleToNftStorage(pinByNftStorage);
  return pRetry(() => throttlePinNftStorage(), {
    retries: 5,
    onFailedAttempt: (error) => {
      if (error.retriesLeft) {
        console.log(
          `Attempt pinning NftStorage failed. Retrying...`
        );
      }
    },
  });
}
};
  // function to get file type 
  function getMimeTypeFromFilePath(fileName) {
    const suffix = fileName.split(".");
    // @ts-ignore
    const mimeType = MimeTypes[suffix[(suffix.length - 1)]];
    if (!mimeType) {
      throw Error(`Unsupported Media Type: ${filePath}`);
    }
   
    return mimeType;
  }
  // function to get attributes's array
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
  //prepare the ipfs hash for the meta data
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

  //optimizeImageforNfts 
  const resizeNft01 = (file) => new Promise(resolve => {
    Resizer.imageFileResizer(file, 480, 9999, "WEBP", 50, 0,
      uri => {
        resolve(uri);
      }, 'blob');
  });
  const resizeNft02 = (file) => new Promise(resolve => {
    Resizer.imageFileResizer(file, 480, 9999, "WEBP", 50, 0,
      uri => {
        resolve(uri);
      }, 'blob');
  });

  //testing user info 
  //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI3N2FjNzkwYy03OGU5LTRlNmItOGZlYi03MDliYTY5YjZjY2UiLCJlbWFpbCI6InNodW53bWFuMTk1NEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiMjYxYjViNTI5OGMwYmQwODBlYTUiLCJzY29wZWRLZXlTZWNyZXQiOiI3YmVhMGJkOTMzNTc3NzYyZGFlN2ViZTg1NzIwNjFlNjAxNjZjMzE2YjE4NjIwMzFiYzc3N2MyZTgxMzU3NTgzIiwiaWF0IjoxNjk1NzkxNjU5fQ.z687eF2N1wEhFWmTCEPgXIBP8HGDUfdp0t_LV5dYF3o
  let testProfile = {
    seed: 'muscle waste foil antique salute damp corn grid aspect symbol spare fiber',//'snake chapter glass affair describe autumn twenty eight evolve fox verb open',
    pinningKey: '',
    address: 'TS-XZ9F-YD86-6JSG-DFU8P',//'TS-6XAX-8W2F-FZHN-HE2RN',
  }

  //pin the meta data to ipfs 
  async function pinMetaData(collectionId, filePinResults, metaDataFile, ipfsServiceKey , ipfsService) {
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
    //pin the image data to ipfs 
  async function pinImageFiles(collectionId, files, ipfsServiceKey, ipfsService) {
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
  
  const connectionToPinata = async (connection) => {
    try {
      const result = await connection.get("/data/testAuthentication");
      return result;
    }
    catch (error) {
      return false;
    }
  }
  const testAuthenticationPinata = async (pinningKey) => {
    let connection = HttpClientFactory.createHttpClient("https://api.pinata.cloud", {
      headers: {
        Authorization: `Bearer ${pinningKey}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    let connectionResult = await connectionToPinata(connection);
    if (connectionResult) {

      return true;
    }

  }


  async function testAuthenticationNftStorage(pinningKey){
    try {
      const response = await fetch(`https://api.nft.storage/?limit=1`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${pinningKey}`,
        },
      });

      return response.ok;
    } catch (error) {
      return false;
    }
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
  function calculateTimeoutFromDate(timeoutDate) {
    const duration = intervalToDuration({
      start: new Date(),
      end: new Date(timeoutDate),
    });
    return (duration.days || 0) * 24 * 60 + (duration.hours || 0) * 60;
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

  
  async function uploadTheNftsOnBlockchain() {
    setProgressNum(0);

    const ledger = LedgerClientFactory.createClient({
      nodeHost: Wallet.Extension.connection.currentNodeHost,
    })
    const { publicKey, signPrivateKey } = generateMasterKeys(passPhrase)
    if (publicKey != Wallet.Extension._connection.publicKey){
      console.log("pass phrase invalid");
      return;
    }
    if (ipfsService === '1') {
      let res = await testAuthenticationPinata(ipfsServiceKey)
      console.log("testAuthenticationPinata: ", res)
      if (!res){
        console.log("Ipfs service's Authentication not pass")
        return;
      }
    }
    if (ipfsService === "2"){
      let res = await testAuthenticationNftStorage(ipfsServiceKey)
      console.log("testAuthenticationNftStorage: ", res)
      if (!res){
        console.log("Ipfs service's Authentication not pass")
        return;
      }
    }
    let userTransactions = await ledger.account.getAccountTransactions({accountId: Wallet.Extension._connection.accountId});
    let userTransactionIds = userTransactions.transactions.map((transaction) => {
      return transaction.transaction;
    })
    if (!userTransactionIds.includes(collectionIdInput) || collectionIdInput === "" ){
      console.log("Your collectionId is invalid.")
      return;
    }
    console.log("UT", userTransactions)
    console.log("UT", userTransactionIds)
    //progress modal 
    onOpenModal();
    // for (let x = 0; x < selectedUploads.length; x++) {
    //   let arrayNum = selectedUploads.length - 1;
    //   let imageNum = '000000' ;
    //   imageNum = imageNum.slice(0, 6 - x.toString().length).concat('',x)
    //   let thumbPixel = await resizeNft01(selectedUploads[x]);
    //   let thumbFile = new File([thumbPixel], `${imageNum}.1-thumb.jpg`, { type: "image/webp" })
    //   let socialPixel = await resizeNft02(selectedUploads[x]);
    //   let socialFile = new File([socialPixel], `${imageNum}.1-social.jpg`, { type: "image/webp" })
    //   newFilesArray.push(newFile);
    //   socialFilesArray.push(socialFile);
    //   thumbFilesArray.push(thumbFile);

    // }
    // console.log(selectedCsvArray, selectedFiles);
    if (selectedCsvArray[0] && selectedFiles[0] && selectedUploads[0] && selectedThumb[0] && selectedSocial[0] && collectionIdInput) {
      if (selectedCsvArray.length === selectedFiles.length && selectedThumb.length === selectedFiles.length && selectedSocial.length === selectedThumb.length) {
  
        const metaDataArray = [];

        for (let x = 0; x < selectedCsvArray.length; x++) {
          // let count  = x + 1 ;
          let addProgress = (100/selectedCsvArray.length);
          const imagePinMap = await pinImageFiles(collectionIdInput, [selectedUploads[x], selectedSocial[x], selectedThumb[x]], ipfsServiceKey ,ipfsService);
          const metaData = await pinMetaData(collectionIdInput, imagePinMap, selectedCsvArray[x], ipfsServiceKey, ipfsService);
          metaDataArray.push(metaData);
          const  transaction = await mintNft({
                ledger,
                metaData,
                passPhrase
              });
              // console.log("createNftResponse: ", unsignedTransactionBytes)
              // const { transaction } = await Wallet.Extension.confirm(unsignedTransactionBytes)
              console.log("transaction: ", transaction )
              const address = Address.fromNumericId(transaction);
          console.log(`Minted NFT [${address.getNumericId()}] - ${address.getReedSolomonAddress()}`);
          if (transaction) {
            setTimeout(
                  () =>  {setProgressNum(prev => prev += addProgress) } ,x*100     )
             }
        }
        onCloseModal();
        // for (let y = 0; y < metaDataArray.length; y++) {
        //   const metaData = metaDataArray[y]
        //   const  transaction = await mintNft({
        //     ledger,
        //     metaData,
        //   });
        //   // console.log("createNftResponse: ", unsignedTransactionBytes)
        //   // const { transaction } = await Wallet.Extension.confirm(unsignedTransactionBytes)
        //   console.log("transaction: ", transaction )
        //   const address = Address.fromNumericId(transaction);
        //   console.log(`Minted NFT [${address.getNumericId()}] - ${address.getReedSolomonAddress()}`);
        // }
      } else {
        console.log("the number of csv data and the number of images is/are not match.");
      }
    } else {
      // for (let x = 0; x < 10; x++) {
      // let count  = x + 2 ;
      // let timeout =  setTimeout(
      //     () =>  {setProgressNum(prev => prev += 15)
      //             count = count * 10
      //             console.log(count);
      //             if (count > 109){
      //               onCloseModal();
      //               setProgressNum(0);
      //             }
      //           }
      //     ,x*100     )
      // // let countTimeout = (timeout) => {
      //   timeout;
      // //   return () => {
      // //     clearTimeout(timeout)
      // //   }
      // // }
      // // countTimeout(timeout);
     
      // }
      
      console.log("no input")
    }
  }


  const handleImageChange = async (e) => {
    if (e.target.files) {
      // let thumbPixel = await resizeNft01(nftImages02);
      // thumbPixel = new File([thumbPixel], "000002.1-thumb.webp", { type: "image/webp" })
      // console.log("thumbPixel.name: ", thumbPixel.name)
      // let socialPixel = await resizeNft02(nftImages02);
      // socialPixel = new File([socialPixel], "000002.1-social.webp", { type: "image/webp" })
      // console.log("socialPixel: ", socialPixel.name)
      // let originalPixel = new File([nftImages02], "000002.1.jpg", { type: "image/jpeg" })
      // console.log("originalPixel: ", originalPixel.name)
      // let files = [originalPixel, socialPixel, thumbPixel];
      const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
      let socialFilesArray = [];
      let newFilesArray = [];
      let thumbFilesArray = [];
      for (let x = 0; x < filesArray.length; x++) {
        let arrayNum = filesArray.length - 1;
        let imageNum = '000000' ;
        imageNum = imageNum.slice(0, 6 - x.toString().length).concat('',x)

        let blob = await fetch(filesArray[x]).then(r => r.blob());
        let newFile = new File([blob], `${imageNum}.1.jpg`, { type: "image/jpeg" })
        let thumbPixel = await resizeNft01(blob);
        let thumbFile = new File([thumbPixel], `${imageNum}.1-thumb.jpg`, { type: "image/webp" })
        let socialPixel = await resizeNft02(blob);
        let socialFile = new File([socialPixel], `${imageNum}.1-social.jpg`, { type: "image/webp" })
        newFilesArray.push(newFile);
        socialFilesArray.push(socialFile);
        thumbFilesArray.push(thumbFile);

      }

      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      setSelectedUploads((prevImages) => prevImages.concat(newFilesArray));
      setSelectedSocial((prevImages) => prevImages.concat(socialFilesArray));
      setSelectedThumb((prevImages) => prevImages.concat(thumbFilesArray));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };

  const renderPhotos = (source) => {
    return source.map((photo) => {
      return <Image boxSize='100px'
        objectFit='cover' src={photo} alt="" key={photo} />;
    });
  };

  const handleCsvFileChange = async (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      const csvFile = e.target.files[0];
      console.log(csvFile);
      const csvData = await CSVFileValidator(csvFile, csvConfig)
      console.log("csvFile: ", csvData)
      console.log("inValidData:", csvData.inValidData.length)
      if (csvData.inValidData.length === 0) {
        const dataArray = csvData.data;
        setCsvArray((prev) =>
          prev.filter((csvData) => false));
        setCsvArray((prev) => prev.concat(dataArray))
 
      }
    } else {
      setCsvArray([]);
    }
  }
  return (
    <>
      <div>            
        <style jsx>{`
          .result{
             display: flex;
            justify-content: left; 
            align-items: center;
          }
          .image-input{
            width: 95px !important ;
            margin-right : 20px;
          }
          `}</style>
          </div>
      {/* <GetStarted/> */}
      <Modal closeOnOverlayClick={false} isOpen={isOpenModal} onClose={onCloseModal} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Your Nfts is uploading. Don't close the window until the process complete</ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody pb={6}>
          <Progress value={progressNum} />
          </ModalBody>

          <ModalFooter>
            {/* <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onCloseModal}>Cancel</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Text mb='8px'>Your pass phrase:</Text>
      <Input
        value={passPhrase}
        onChange={handlePassPhrase}
        placeholder='Pass Phrase'
        size='sm'
      />
      <Text mb='8px'>Ipfs Service:</Text>      
    <RadioGroup onChange={setIpfsService} value={ipfsService}>
      <Stack direction='row'>
        <Radio value='1'>Pinata</Radio>
        <Radio value='2'>NFT storage</Radio>
      </Stack>
    </RadioGroup>
      <Text mb='8px'>Ipfs api key:</Text>
      <Input
        value={ipfsServiceKey}
        onChange={handleIpfsServiceKey}
        placeholder='Ipfs api key'
        size='sm'
      />
      <Text mb='8px'>Collection Id:</Text>
      <Input
        value={collectionIdInput}
        onChange={handleCollectionIdChange}
        placeholder='Collection Id'
        size='sm'
      />
      <Text mb='8px'>csv file:</Text>
      <Button
        onClick={() => {
          // uploadTheNftsOnBlockchain();
          // console.log(nftImages);
          setIsCsvEditModal(true)
          setDeployNftModal(false)
        }}
      >
        Edit Csv files
      </Button>


        <Text mb='8px'>Image:</Text>

      
      {/* <div className="result">

      <Input
        width="95px"
        type="file"
        name="images"
        accept="image/png, image/jpeg, image/webp"
        multiple
        onChange={handleImageChange}
        sx={{
          "::file-selector-button": {
            height: 10,
            padding: 0,
            mr: 4,
            background: "none",
            border: "none",
            fontWeight: "bold",
          },
        }}
      />
        <Button
          onClick={() => {
            setSelectedFiles([])
            setSelectedUploads([]);
            setSelectedSocial([]);
            setSelectedThumb([]);
          }}
        >
          Clear
        </Button>
      </div> */}
      <div className="result">
        {renderPhotos(selectedFiles)}
        <style jsx>{`
      .result{
        min-height: 100%;
        max-height: auto;
        width: 100%;
        background-color: #272c34;
        margin-top:1rem ;
         display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: left; 

      }
      `}</style>
      </div>
      <Button
        onClick={() => {
          
          
          // console.log(nftImages);
          console.log(uploadImages);
          console.log(socialImages);
          console.log(thumbImages);
          console.log(metadata); 
          uploadTheNftsOnBlockchain();
        }}
      >
        Upload NFTs
      </Button>
    </>
  )
};

export default NFTuploader;
import { useEffect, useState } from "react";
import { useUser } from "@/providers/UserProvider";
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
const MassUploader = () => {
  const [passPhrase, setPassPhrase] = useState('');
  const [ipfsServiceKey, setIpfsServiceKey] = useState('');
  const [ipfsService, setIpfsService] = useState('1');
  const [collectionIdInput, setCollectionId] = useState('')
  const handleCollectionIdChange = (event) => setCollectionId(event.target.value)
  const handlePassPhrase = (event) => setPassPhrase(event.target.value);
  const handleIpfsServiceKey = (event) => setIpfsServiceKey(event.target.value);
  const [src, setSrc] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedUploads, setSelectedUploads] = useState([]);
  const [selectedSocial, setSelectedSocial] = useState([]);
  const [selectedThumb, setSelectedThumb] = useState([]);
  const [selectedBase64, setSelectedBase64] = useState([]);
  const [selectedCsvArray, setCsvArray] = useState([]);
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
        name: "image",
        inputName: "image",
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
        name: "seller_fee_basis_points",
        inputName: "seller_fee_basis_points",
        required: true,
        requiredError: function (headerName, rowNumber, columnNumber) {
          return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
        }
      },
      {
        name: "collection_name",
        inputName: "collection_name",
        required: true,
        requiredError: function (headerName, rowNumber, columnNumber) {
          return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
        }
      }, 
      {
        name: "collection_family",
        inputName: "collection_family",
        required: true,
        requiredError: function (headerName, rowNumber, columnNumber) {
          return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
        }
      }, 
      {
        name: "symbol",
        inputName: "symbol",
        required: false,
      },
      {
        name: "properties_files",
        inputName: "properties_files",
        required: true,
        requiredError: function (headerName, rowNumber, columnNumber) {
          return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
        }
      },
      {
        name: "properties_category",
        inputName: "properties_category",
        required: true,
        requiredError: function (headerName, rowNumber, columnNumber) {
          return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
        }
      },
      {
        name: "properties_creators_address",
        inputName: "properties_creators_address",
        required: false,
      },
      {
        name: "properties_creators_share",
        inputName: "properties_creators_share",
        required: true,
        requiredError: function (headerName, rowNumber, columnNumber) {
          return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
        }
      },
      {
        name: "attribute1",
        inputName: "attribute1",
        required: true,
        requiredError: function (headerName, rowNumber, columnNumber) {
          return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
        }
      },
      {
        name: "attribute2",
        inputName: "attribute2",
        required: true,
        requiredError: function (headerName, rowNumber, columnNumber) {
          return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
        }
      },
      {
        name: "attribute3",
        inputName: "attribute3",
        required: true,
        requiredError: function (headerName, rowNumber, columnNumber) {
          return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
        }
      },
      {
        name: "attribute4",
        inputName: "attribute4",
        required: true,
        requiredError: function (headerName, rowNumber, columnNumber) {
          return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
        }
      },
      {
        name: "attribute5",
        inputName: "attribute5",
        required: true,
        requiredError: function (headerName, rowNumber, columnNumber) {
          return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
        }
      },
      {
        name: "attribute6",
        inputName: "attribute6",
        required: true,
        requiredError: function (headerName, rowNumber, columnNumber) {
          return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
        }
      },
      {
        name: "attribute7",
        inputName: "attribute7",
        required: true,
        requiredError: function (headerName, rowNumber, columnNumber) {
          return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
        }
      },
      {
        name: "attribute8",
        inputName: "attribute8",
        required: true,
        requiredError: function (headerName, rowNumber, columnNumber) {
          return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
        }
      },
      // {
      //   name: "attribute9",
      //   inputName: "attribute9",
      //   required: true,
      //   requiredError: function (headerName, rowNumber, columnNumber) {
      //     return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
      //   }
      // },
      

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
        Collection: "4525181713671311715",
        PlatformFee: "11145981443287436957",
        NftTrackSetNotForSale: "4525181713671311715",
        NftTrackSetForSale: "4525181713671311715",
        NftTrackAuctionOpened: "4525181713671311715",
        NftTrackAuctionBid: "4525181713671311715",
        NftTrackNewOwner: "4525181713671311715",
        NftTrackOwnershipTransferred: "4525181713671311715",
        NftTrackRoyaltiesTransferred: "4525181713671311715",
        NftTrackLikeReceived: "4525181713671311715",
        NftTrackDutchAuctionOpened: "4525181713671311715",
        NftTrackOfferReceived: "4525181713671311715",
        NftTrackOfferRemoved: "4525181713671311715",
        trackerAccountSetNotForSale : "4525181713671311715",
        trackerAccountSetForSale : "13636880872824998128",
        trackerAccountAuctionOpened : "14048238061583559578",
        trackerAccountNewAuctionBid : "13373357433668797830",
        trackerAccountNewOwner : "3784869428716826889",
        trackerAccountOwnershipTransferred :"11333345790002570011",
        trackerAccountDutchAuctionOpened :"1096222500133821647",
        trackerAccountOfferReceived :"3740044535452540695",
        trackerAccountOfferRemoved : "11935829515392783558",
        trackerAccountLikeReceived : "17941127494494421375",
        trackerAccountRoyaltiesTransfer : "2793578539919685550",
        trackerAccountCancelAuction : "3015781636270672911",
      },
      Contract: {
        BaseName: "SigdaoSC",
        Reference: {
        
          // now testonly
          MainNet: "",
        },
        InteractionFee: 0.02,
        ActivationCosts: 0.32,
        MinimumSellAmount: 0.01,
        MinimumPriceDrop: 0.001,
        MaximumRoyaltyFee: 250,
        AuctionTimeoutMinimum: 60,
        AuctionTimeoutMaximum: 44640,
      },
    },
  }
  // const constants_1 = {
  //   Constants: {
  //     ServiceFee: 20,
  //     Accounts: {
  //       Collection: "1502073279564421257",
  //       PlatformFee: "8926959845844390999",
  //       NftTrackSetNotForSale: "14986235278515523967",
  //       NftTrackSetForSale: "12845950337514560867",
  //       NftTrackAuctionOpened: "2892883396191715547",
  //       NftTrackAuctionBid: "5402814080676359773",
  //       NftTrackNewOwner: "752572214749075641",
  //       NftTrackOwnershipTransferred: "1437517716086571749",
  //       NftTrackRoyaltiesTransferred: "14653783900473749918",
  //       NftTrackLikeReceived: "1235333885279400565",
  //       NftTrackDutchAuctionOpened: "14874413796446025648",
  //       NftTrackOfferReceived: "14297788612977302728",
  //       NftTrackOfferRemoved: "4028407282971252591",
  //     },
  //     Contract: {
  //       BaseName: "NFTSRC40",
  //       Reference: {
  //         Testnet: "2506608D961BF2CBFA275F63E3883104E0248096FEC2F86D6DA73CFF213B7D8C",
  //         MainNet: "4C840330C4352C62871D34CFBD0242F68F551FDBB9C12E013A1489A26009E16D",
  //       },
  //       InteractionFee: 0.02,
  //       ActivationCosts: 0.3,
  //       MinimumSellAmount: 0.01,
  //       MinimumPriceDrop: 0.001,
  //       MaximumRoyaltyFee: 250,
  //       AuctionTimeoutMinimum: 60,
  //       AuctionTimeoutMaximum: 44640,
  //     },
  //   },
  // }
  // pin the file to ipfs
  async function storeToNFTStorage(file) {
    const options = {
      method: "POST",
      url: "https://api.nft.storage/upload",
      headers: {
        "Authorization": "Bearer " + NFT_STORAGE_KEY,
        "Content-Type": "image/*"
      },
      data: file
    };
  }

  const pinFile = async (file, metadata, jwtToken , ipfsService, contentType) => { 
    console.log("ipfsService", ipfsService)
    console.log(contentType)
    const pinByPinata = async () => {
    try {
      console.log("pinfile:", file)
      console.log("metadata:", metadata)
      console.log("jwtToken:", jwtToken)
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
      console.log("pinfile response:", response)
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

      console.log("pinfile:", file)
      console.log("metadata:", metadata)
      console.log("jwtToken:", jwtToken)
      console.log("contentType:",contentType)
      const formData = new FormData();
      formData.append("file", file);
      formData.append("pinataMetadata", JSON.stringify(metadata));
      console.log("contentType:",contentType)
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
      console.log("response nft data", data)
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
    console.log("mimeType: ", mimeType)
    return mimeType;
  }
  // function to get attributes's array
  function getAttributesFromNftRecord(record) {
    const attributes = [];
    for (let i = 1; i <= 9; ++i) {
      // @ts-ignore
      const att = record[`attribute${i}`];
      if (att) {
        const [key, value] = att.split(":");
        attributes.push({ trait_type: key, value: value });
      }
    }
    console.log("attributes: ", attributes);
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
    console.log("media: ", media)
    return media;
  }

  //optimizeImageforNfts 
  const resizeNft01 = (file) => new Promise(resolve => {
    Resizer.imageFileResizer(file, 240, 9999, "JPEG", 25, 0,
      uri => {
        resolve(uri);
      }, 'blob');
  });
  const resizeNft02 = (file) => new Promise(resolve => {
    Resizer.imageFileResizer(file, 240, 9999, "JPEG", 25, 0,
      uri => {
        resolve(uri);
      }, 'blob');
  });
  const resizeNft03 = (file) => new Promise(resolve => {
    Resizer.imageFileResizer(file, 400, 9999, "WEBP", 50, 0,
      uri => {
        resolve(uri);
      }, 'base64');
  });

  //testing user info 


  //pin the meta data to ipfs getAttributesFromNftRecord
  async function pinMetaData(collectionId, filePinResults, metaDataFile, ipfsServiceKey , ipfsService, base64Url) {
    let ipfsHash;
    const nftRecord = metaDataFile//json file directly;
    const media = imagePinResultToMediaArray(filePinResults);
    const attributes = getAttributesFromNftRecord(nftRecord);
    const descriptor = {
      name: nftRecord.name,
      description: nftRecord.description,
      image: nftRecord.image,
      edition: nftRecord.edition,
      seller_fee_basis_points: nftRecord.seller_fee_basis_points,
      collection: {name: nftRecord.collection_name, family: nftRecord.collection_family},
      symbol: nftRecord.symbol,
      properties: {files:[{url: nftRecord.image, type: media[0][filePinResults[0].hash]} ], category: nftRecord.properties_category, creators:[{address: nftRecord.properties_creators_address, share: nftRecord.properties_creators_share}] },
      attributes,
      media,
      base64: base64Url
    };
    //jsonValidator_1.jsonValidator.validateNft(descriptor);
    const descriptorPath = filePinResults[0].file.split(".").slice(0, 2).join(".").concat('-', "metadata.json");
    console.log(descriptorPath)
    console.log("pinMetaData",descriptor)

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
    console.log("nftRecord: ", nftRecord)
    console.log("ipfsHash: ", res)
    console.log("ipfsHash: ", ipfsHash)
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
    console.log(pinningResults);
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
      console.log("connection to Pinata!!!", connectionResult)
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
    console.log("createInitialDataStack");
    const empty= "0";
    //fixed distruber 
    const ownerId = Address.fromPublicKey("").getNumericId();
    const admin = "4572964086056463895";
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
    // const ownerId = Address.fromPublicKey(publicKey).getNumericId();
    // const statusCode = asStatusCode(status);
    const currentPrice = safeAmount(price);
    // const platformAddress = constants_1.Constants.Accounts.PlatformFee;
    // const platformFee = constants_1.Constants.ServiceFee;
    // const royaltiesOwner = ownerId;
    // const royaltiesFeePromille = royaltiesFee * 10;
    // const trackerAccountSetNotForSale = constants_1.Constants.Accounts.NftTrackSetNotForSale;
    // const trackerAccountSetForSale = constants_1.Constants.Accounts.NftTrackSetForSale;
    // const trackerAccountAuctionOpened = constants_1.Constants.Accounts.NftTrackAuctionOpened;
    // const trackerAccountNewAuctionBid = constants_1.Constants.Accounts.NftTrackAuctionBid;
    // const trackerAccountNewOwner = constants_1.Constants.Accounts.NftTrackNewOwner;
    // const trackerAccountOwnershipTransferred = constants_1.Constants.Accounts.NftTrackOwnershipTransferred;
    // const trackerAccountDutchAuctionOpened = constants_1.Constants.Accounts.NftTrackDutchAuctionOpened;
    // const trackerAccountOfferReceived = constants_1.Constants.Accounts.NftTrackOfferReceived;
    // const trackerAccountOfferRemoved = constants_1.Constants.Accounts.NftTrackOfferRemoved;
    // const trackerAccountLikeReceived = constants_1.Constants.Accounts.NftTrackLikeReceived;
    // const trackerAccountRoyaltiesTransfer = constants_1.Constants.Accounts.NftTrackRoyaltiesTransferred;
    const trackerAccountSetNotForSale = "9998305876488457803";
    const trackerAccountSetForSale = "9998305876488457803";
    const trackerAccountAuctionOpened = "9998305876488457803";
    const trackerAccountNewAuctionBid = "9998305876488457803";
    const trackerAccountNewOwner = "9998305876488457803";
    const trackerAccountOwnershipTransferred ="9998305876488457803";
    const trackerAccountDutchAuctionOpened ="9998305876488457803";
    const trackerAccountOfferReceived ="9998305876488457803";
    const trackerAccountOfferRemoved = "9998305876488457803";
    const trackerAccountLikeReceived = "9998305876488457803";
    const trackerAccountRoyaltiesTransfer = "9998305876488457803";
    const trackerAccountCancelAuction = "9998305876488457803";
    // auction
    // const auctionStopHeight = calculateTimeoutValue(auctionTimeout, currentBlockHeight);
    const auctionMaxPrice = safeAmount(dutchPriceDrop ? "0" : auxPrice);
    // dutch auction
    const dutchStartHeight = dutchPriceDrop ? currentBlockHeight : "0";
    const dutchStartPrice = dutchPriceDrop ? currentPrice : "0";
    const dutchMinPrice = safeAmount(dutchPriceDrop ? auxPrice : "0");
    const dutchPriceDropPerBlock = safeAmount(dutchPriceDrop);
    const SkipValue = 0;
    // order is important - DO NOT CHANGE
    // console.log([
    //   ownerId,
    //   statusCode,
    //   currentPrice,
    //   platformAddress,
    //   platformFee,
    //   royaltiesFeePromille,
    //   royaltiesOwner,
    //   trackerAccountSetNotForSale,
    //   trackerAccountSetForSale,
    //   trackerAccountAuctionOpened,
    //   trackerAccountNewAuctionBid,
    //   trackerAccountNewOwner,
    //   trackerAccountOwnershipTransferred,
    //   trackerAccountDutchAuctionOpened,
    //   trackerAccountOfferReceived,
    //   trackerAccountOfferRemoved,
    //   trackerAccountLikeReceived,
    //   trackerAccountRoyaltiesTransfer,
    //   auctionStopHeight,
    //   SkipValue,
    //   auctionMaxPrice,
    //   SkipValue,
    //   SkipValue,
    //   dutchStartHeight,
    //   dutchStartPrice,
    //   dutchPriceDropPerBlock,
    //   dutchMinPrice,
    // ]);
    // return [
    //   ownerId,
    //   statusCode,
    //   currentPrice,
    //   platformAddress,
    //   platformFee,
    //   royaltiesFeePromille,
    //   royaltiesOwner,
    //   trackerAccountSetNotForSale,
    //   trackerAccountSetForSale,
    //   trackerAccountAuctionOpened,
    //   trackerAccountNewAuctionBid,
    //   trackerAccountNewOwner,
    //   trackerAccountOwnershipTransferred,
    //   trackerAccountDutchAuctionOpened,
    //   trackerAccountOfferReceived,
    //   trackerAccountOfferRemoved,
    //   trackerAccountLikeReceived,
    //   trackerAccountRoyaltiesTransfer,
    //   auctionStopHeight,
    //   SkipValue,
    //   auctionMaxPrice,
    //   SkipValue,
    //   SkipValue,
    //   dutchStartHeight,
    //   dutchStartPrice,
    //   dutchPriceDropPerBlock,
    //   dutchMinPrice,
    // ];
    return [
      empty,    //0
      empty,    //1
      empty,    //2
      "1000000000",//3
      empty,    //4
      ownerId,  //5
     "416342944383657789",  //6
      "10",      //7
      "0",      //8
      "0",    //9
      "15",     //10
      empty,    //11
      empty,    //12
      empty,    //13
      empty,    //14
      empty,    //15
      empty,    //16
      empty,    //17
      empty,    //18
      empty,    //19
      empty,    //20
      "20",   //21
      "20",     //22
      "31000000",   //23
      "13116962758643420722",  //24
      empty,    //25
      empty,    //26
      empty,    //27
      empty,    //28
      empty,    //29
      empty,    //30
      empty,    //31
      empty,    //32
      empty,    //33
      empty,    //34
      empty,    //35
      empty,    //36
      empty,    //37
      empty,    //38
      admin,    //39
      trackerAccountSetNotForSale,  //40
      trackerAccountSetForSale,   //41
      trackerAccountAuctionOpened,  //42
      trackerAccountNewAuctionBid,  //43
      trackerAccountNewOwner,       //44
      trackerAccountOwnershipTransferred, //45
      trackerAccountDutchAuctionOpened,   //46
      trackerAccountOfferReceived,    //47
      trackerAccountOfferRemoved,   //48
      trackerAccountLikeReceived,   //49
      trackerAccountRoyaltiesTransfer,  //50
      trackerAccountCancelAuction,    //51
    ];
  }
  async function createNft(args) {
    console.log("createNft")
    console.log("args")
   const { publicKey, signPrivateKey } = generateMasterKeys("");
   console.log("publicKey", publicKey,"signPrivateKey:", signPrivateKey  )
   const { ledger } = args;
    const { Contract } = constants_1.Constants;
    const referencedTransactionHash = Contract.Reference.MainNet;
    console.log("ledger", ledger  )
    console.log("Contract.Reference.MainNet", Contract.Reference.MainNet  )
    //profile.network === "Signum Main Net"
      //? Contract.Reference.MainNet
      //: Contract.Reference.Testnet;
    const activationAmountPlanck = Amount.fromSigna(Contract.ActivationCosts).getPlanck();
    console.log("activationAmountPlanck", activationAmountPlanck  )
    const data = await createInitialDataStack(args, ledger, publicKey);
    const description = JSON.stringify({
      version: 1,
      descriptor: args.descriptorCid,
    });
    console.log(description);
    console.log("publishContractByReference")
    console.log({
      senderPublicKey: publicKey,  //user publicKey
      description, //ipfs Hash id 
      feePlanck: "40000000", //fee
      referencedTransactionHash, //referencedTransactionHash
      activationAmountPlanck, //ActivationCosts
      name: Contract.BaseName, //Contract Name
      data, //data for the contract 
      deadline: 1440,
      skipAdditionalSecurityCheck: false,
      senderPrivateKey: signPrivateKey,
    })
    const { transaction } = await ledger.contract.publishContractByReference({
      senderPublicKey: publicKey,  //user publicKey
      description, //ipfs Hash id 
      feePlanck: "40000000", //fee
      referencedTransactionHash, //referencedTransactionHash
      activationAmountPlanck, //ActivationCosts
      name: Contract.BaseName, //Contract Name
      data, //data for the contract 
      deadline: 1440,
      skipAdditionalSecurityCheck: false,
      senderPrivateKey: signPrivateKey,
    });
    console.log(transaction);
    return transaction;
  }
  async function mintNft(args) {
    console.log("mintNft")
    console.log("args")
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
    onOpenModal();
    setProgressNum(0);
    const ledger = LedgerClientFactory.createClient({
      nodeHost: Wallet.Extension.connection.currentNodeHost,
    })
    console.log("Ledger:",Ledger)
    console.log("Wallet:",Wallet)
    console.log("Wallet public key:",Wallet.Extension._connection.publicKey)
    console.log("DAppName:", DAppName)
    console.log("ipfsService:", ipfsService)
    const { publicKey, signPrivateKey } = generateMasterKeys(passPhrase)
    console.log(publicKey);
    // if (publicKey != Wallet.Extension._connection.publicKey){
    //   console.log("pass phrase invalid");
    //   return;
    // }
    if (ipfsService === '1') {
      let res = await testAuthenticationPinata(ipfsServiceKey)
      console.log("testAuthenticationPinata: ", res)
      if (!res){
        console.log("Ipfs service's Authentication not pass")
        onCloseModal();
        return;
      }
    }
    if (ipfsService === "2"){
      let res = await testAuthenticationNftStorage(ipfsServiceKey)
      console.log("testAuthenticationNftStorage: ", res)
      if (!res){
        console.log("Ipfs service's Authentication not pass")
        onCloseModal();
        return;
      }
    }

   
    // let userTransactions = await ledger.account.getAccountTransactions({accountId: Wallet.Extension._connection.accountId});
    // let userTransactionIds = userTransactions.transactions.map((transaction) => {
    //   return transaction.transaction;
    // })
    // if (!userTransactionIds.includes(collectionIdInput) || collectionIdInput === "" ){
    //   console.log("Your collectionId is invalid.")
    //   return;
    // }
    // console.log("UT", userTransactions)
    // console.log("UT", userTransactionIds)
    //progress modal 

    

    console.log(selectedCsvArray[0], selectedFiles);
    console.log("collectionId:", collectionIdInput)
    console.log("selectedCsvArray", selectedCsvArray)
    console.log("selectedFiles", selectedFiles)
    console.log("selectedThumb", selectedThumb)
    console.log("selectedSocial", selectedSocial)
    console.log("selectedUploads", selectedUploads)
    console.log("selectedCsvArray.length",selectedCsvArray.length)

    if (selectedCsvArray[0] && selectedFiles[0] && selectedUploads[0] && selectedThumb[0] && selectedSocial[0] && collectionIdInput) {
      if (selectedCsvArray.length === selectedFiles.length && selectedThumb.length === selectedFiles.length && selectedSocial.length === selectedThumb.length) {
        console.log("Ok")
        console.log("collectionId:", collectionIdInput)
        console.log("selectedCsvArray", selectedCsvArray)
        console.log("selectedFiles", selectedFiles)
        console.log("selectedThumb", selectedThumb)
        console.log("selectedSocial", selectedSocial)
        console.log("selectedUploads", selectedUploads)
        const metaDataArray = [];
       
        for (let x = 0; x < selectedCsvArray.length; x++) {
          // let count  = x + 1 ;
          let addProgress = (100/selectedCsvArray.length);
          const imagePinMap = await pinImageFiles(collectionIdInput, [selectedUploads[x], selectedSocial[x], selectedThumb[x]], ipfsServiceKey ,ipfsService);
          console.log(`imagePinMap0${x}: `, imagePinMap[0] );
          const metaData = await pinMetaData(collectionIdInput, imagePinMap, selectedCsvArray[x], ipfsServiceKey, ipfsService, selectedBase64[x]);
          console.log(`metaData0${x}: `, metaData);
          console.log(`passPhrase}: `, passPhrase);
          console.log(`ledger: `, ledger);
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
          console.log("Num of uploaded:", x)
          if (transaction) {
            setTimeout(
                  () =>  {setProgressNum(prev => prev += addProgress) } ,x*100     )
             }
        }

        setTimeout(
          () =>  onCloseModal() ,5000     )
        


        console.log("metaDataArray: ", metaDataArray);
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
        onCloseModal();
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
      onCloseModal();
    }
  }


  const handleImageChange = async (e) => {
    if (e.target.files) {
      console.log(e.target.files);
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
      let base64Array = [];
      for (let x = 0; x < filesArray.length; x++) {
        let arrayNum = filesArray.length - 1;
        let imageNum = '000000' ;
        imageNum = imageNum.slice(0, 6 - x.toString().length).concat('',x)

        // let blob = await fetch(filesArray[x]).then(r => r.blob());
        // let newFile = new File([blob], `${imageNum}.1.jpg`, { type: "image/jpeg" })
        // let thumbPixel = await resizeNft01(blob);
        // let thumbFile = new File([thumbPixel], `${imageNum}.1-thumb.jpg`, { type: "image/webp" })
        // let socialPixel = await resizeNft02(blob);
        // let socialFile = new File([socialPixel], `${imageNum}.1-social.jpg`, { type: "image/webp" })

        let blob = await fetch(filesArray[x]).then(r => r.blob());
        console.log("blob", blob)
        let newFile = new File([blob], `${imageNum}.1.png`, { type: "image/png" })
        let thumbPixel = await resizeNft01(blob);
        console.log("thumbPixel", thumbPixel)
        let base64Url = await resizeNft03(blob);
        console.log("base64Url", base64Url)
        let thumbFile = new File([thumbPixel], `${imageNum}.1-thumb.jpg`, { type: "image/jpeg" })
        let socialPixel = await resizeNft02(blob);
        let socialFile = new File([socialPixel], `${imageNum}.1-social.jpg`, { type: "image/jpeg" })
        newFilesArray.push(newFile);
        socialFilesArray.push(socialFile);
        thumbFilesArray.push(thumbFile);
        base64Array.push(base64Url);
      }

      console.log(newFilesArray);
      console.log("filesArray: ", filesArray);
      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      setSelectedUploads((prevImages) => prevImages.concat(newFilesArray));
      setSelectedSocial((prevImages) => prevImages.concat(socialFilesArray));
      setSelectedThumb((prevImages) => prevImages.concat(thumbFilesArray));
      setSelectedBase64((prevImages) => prevImages.concat(base64Array));
      console.log("new File:", selectedFiles);
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
    console.log()
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
        console.log("selectedCsvArray: ", selectedCsvArray);
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
      <Input
        accept=".csv"
        type="file"
        id='csvFileSelector'
        onChange={handleCsvFileChange}
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


        <Text mb='8px'>Image:</Text>

      
      <div className="result">

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
            setSelectedBase64([]);
          }}
        >
          Clear
        </Button>
      </div>
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
          
          uploadTheNftsOnBlockchain();
        }}
      >
        Upload NFTs
      </Button>
    </>
  )
};

export default MassUploader;
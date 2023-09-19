import { useEffect, useState } from "react";
import { useUser } from "@/providers/UserProvider";
import { Button, ButtonGroup,Input,Text,Image} from '@chakra-ui/react'
import { Http, HttpClientFactory, HttpResponse, HttpMockBuilder, HttpError } from "@signumjs/http"
import banner from "./demoBanner.jpg"
import pixel from "./pixel.jpg"
import pixel2 from "./pixel2.jpg"
import pixel3 from "./pixel3.jpg"
import axios from "axios"
import {isURL} from 'validator';
import { Address, LedgerClientFactory } from "@signumjs/core";
import {generateMasterKeys} from "@signumjs/crypto";
import Resizer from "react-image-file-resizer"
import {useAppContext} from '../../../xtWallet/hooks/useAppContext';
import {Amount} from "@signumjs/util";
import Papa from 'papaparse' ;
import CSVFileValidator from 'csv-file-validator' ;
// import {sharp_01} from "sharp";
const MassUploader = () => {
  const [collectionIdInput, setCollectionId] = useState('')
  const handleChange = (event) => setCollectionId(event.target.value)
  const [src, setSrc] = useState("");
  const [nftImages, setNftImages] = useState("");
  const [nftImages01, setNftImages01] = useState("");
  const [nftImages02, setNftImages02] = useState("");
  const [ selectedFiles, setSelectedFiles ] = useState([]);
  const [ selectedUploads, setSelectedUploads ] = useState([]);
  const [ selectedSocial, setSelectedSocial ] = useState([]);
  const [ selectedThumb, setSelectedThumb ] = useState([]);
  const [ selectedCsvArray, setCsvArray] = useState([]);
  const { Ledger, Wallet, DAppName } = useAppContext();
  async function fetchImage() {
    let image = await fetch("/demoBanner.jpg")
    let imageBlob = await image.blob();
    console.log(imageBlob)
    setSrc(imageBlob);
    let nftImages = await fetch("/pixel.jpg")
    let nftImagesBlob = await nftImages.blob();
    setNftImages(nftImagesBlob)
    console.log(nftImagesBlob)
    let nftImages01 = await fetch("/pixel2.jpg")
    let nftImages01Blob = await nftImages01.blob();
    setNftImages01(nftImages01Blob)
    console.log(nftImages01Blob)
    let nftImages02 = await fetch("/pixel3.jpg")
    let nftImages02Blob = await nftImages02.blob();
    setNftImages02(nftImages02Blob)
    console.log(nftImages02Blob)
  }
  const NftConstants = {
    Methods: {
        TransferRoyalties: "7174296962751784077",
    },
    Fees: {
        Interaction: Amount.fromSigna(0.01),
        Activation: Amount.fromSigna(0.3),
    },
  };
  const MimeTypes = {
    png: "image/png",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    webp: "image/webp",
    gif: "image/gif",
    svg: "image/svg+xml",
};
  const constants_1 = {Constants : {
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
  },}
  useEffect(() => {
    fetchImage();
  }
    , []);


      const pinFile = async (file, metadata, jwtToken) => {
          try {      
            console.log("pinfile:" ,file)
            console.log("metadata:" ,metadata)
            console.log("jwtToken:" ,jwtToken)
            const formData = new FormData();
            formData.append("file", file);
            formData.append("pinataMetadata", JSON.stringify(metadata));
              const  response  = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
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
          catch (e) {
              if (e instanceof HttpError) {
                  console.error("Pinata API Error", "Status:", e.status, "Reason:", e.data);
                  if (e.status === 401 || e.status === 403) {
                      throw new p_retry_1.AbortError(e.data);
                  }
                  else {
                      throw new Error(e.data);
                  }
              }
              else {
                  console.error("Pinata Pinning Service Error", e.message);
                  throw e;
              }
          }
      };
  
    function getMimeTypeFromFilePath(fileName) {
        const suffix = fileName.split(".");
        // @ts-ignore
        const mimeType = MimeTypes[suffix[(suffix.length-1)]];
        if (!mimeType) {
            throw Error(`Unsupported Media Type: ${filePath}`);
        }
        console.log("mimeType: ", mimeType)
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
        console.log("attributes: ", attributes);
        return attributes;

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
      console.log("media: ", media )
      return media;
  }

      // see: https://docs.pinata.cloud/rate-limits#api-rate-limits
      // const throttle = (0, p_throttle_1.default)({ limit: 180, interval: 60_000 });
      // const throttlePin = throttle(pin);
      // return (0, p_retry_1.default)(() => throttlePin(), {
      //     retries: 5,
      //     onFailedAttempt: (error) => {
      //         if (error.retriesLeft) {
      //             console.log(`Attempt pinning [${(0, path_1.basename)(filePath)}] failed. Retrying...`);
      //         }
      //     },
      // });
  
//   async function tryGetLocalHosts(networkName) {
//     const localHost = networkName === "Signum Test Net"
//         ? "http://localhost:6876"
//         : "http://localhost:8125";
//     const client = coreSignum.LedgerClientFactory.createClient({
//         nodeHost: localHost,
//     });
//     await client.network.getNetworkInfo();
//     return client;
// }
// const createNetworkClient = async (networkName) => {
//     let ledger;
//     try {
//         ledger = await tryGetLocalHosts(networkName);
//     }
//     catch (_) {
//         const hosts = getNetworkHosts(networkName);
//         ledger = coreSignum.LedgerClientFactory.createClient({
//             nodeHost: hosts[0],
//             reliableNodeHosts: hosts,
//         });
//         // this is not really reliable...
//         await ledger.service.selectBestHost(true);
//     }
//     return ledger;
// };









  // const fileToDataUri = (file) => new Promise((resolve, reject) => {
  //   const reader = new FileReader();
  //   reader.onload = (event) => {
  //     resolve(event.target.result)
  //   };
  //   reader.readAsDataURL(file);
  // })
  //optimizeImageforCollection
  const resizeFile = (file) => new Promise(resolve => {
    Resizer.imageFileResizer(file, 1600, 9999, "WEBP", 50, 0,
      uri => {
        resolve(uri);
      }, 'blob');
  });
  const resizeFile02 = (file) => new Promise(resolve => {
    Resizer.imageFileResizer(file, 800, 9999, "WEBP", 70, 0,
      uri => {
        resolve(uri);
      }, 'base64');
  });
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
  let socialMediaFile = {
    ipfsHash: "<try-run-banner-social>",
    mimeType: "image/webp",
  };
  let bannerFile = {
    ipfsHash: "<try-run-banner>",
    mimeType: "image/webp",
  };
  const { isLoggedIn } = useUser();

  //testing user info 
  const pinningKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIwNWQ4Njk5My0zMjgyLTQzYTAtOTUxNi02ZjYyZGM3ODY2MzciLCJlbWFpbCI6Im1hbnNodW53aW5nQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI2ZWM3Y2Q1YTdiNjY3MmE2MTA2MyIsInNjb3BlZEtleVNlY3JldCI6ImQyNzBjNDVlNTFkYmIzNjU3ZDA0YjIyMjQzYmY0NWIxNDAzZDg2ZWM5NzkwZTdjNmFkMzM1OTdiZGM1ZGNiYTIiLCJpYXQiOjE2ODg5Nzk1MTd9.pku1REnOB0GT4y5EiU38U7gtJO_mImGh-ud1UeAE76s";
  const testProfile = {
    seed: 'snake chapter glass affair describe autumn twenty eight evolve fox verb open',
    pinningService: 'Pinata',
    pinningKey: pinningKey,
    network: '',
    address: 'TS-6XAX-8W2F-FZHN-HE2RN',
    name: 'aaa',
    description: 'aaa'
  }
  const testCollectionInfo = {
    name : 'HAL',
    description : "2001",
    homepage : "",
    social : ''
  }
  
  async function createCollection(ledger, profile , name, description, socials, homePage, background, socialMediaImage) {
    const descriptor = {
      nc: name,
      ds: description,
      si: {
          [socialMediaImage.ipfsHash]: socialMediaImage.mimeType,
      },
      bg: { [background.ipfsHash]: background.mimeType },
      hp: homePage,
      sc: socials,
  };
  


   const {publicKey, signPrivateKey} = generateMasterKeys(profile.seed);
   const result = await ledger.message.sendMessage({
    feePlanck: Amount.fromSigna(0.06).getPlanck(),
    senderPublicKey: publicKey,
    senderPrivateKey: signPrivateKey,
    message: JSON.stringify(descriptor),
    messageIsText: true,
    recipientId: "1502073279564421257",
    deadline: 60,
});
    return result;
  }
  const pinningBanner = async () => {
    console.log(banner);
    const image = "/demoBanner.jpg";
    // let bannerBLob = await fileToDataUri(banner);
    // console.log(bannerBLob);  const image = "/logo.png";
    let originalBanner = await resizeFile(src);
    originalBanner = new File([originalBanner], "000000.banner", { type: "image/webp" })

    let socialBanner = await resizeFile02(src);
    socialBanner = new File([socialBanner], "000000.banner-social", { type: "image/webp" })
    console.log(originalBanner);
    const formData01 = new FormData();
    formData01.append("file", originalBanner)
    formData01.append("pinataMetadata", JSON.stringify({ name: '000000.banner.webp' }))
    const pinOriginal = async () => {
      try {
        const response = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData01, {
          maxBodyLength: Infinity,
          maxContentLength: Infinity,
          headers: {
            Authorization: `Bearer ${pinningKey}`,
            // @ts-ignore
            "Content-Type": `multipart/form-data; boundary=${formData01._boundary}`,
          },
        });
        console.log("IpfsHash:", response.data.IpfsHash)
        // return response.IpfsHash;
        return response.data.IpfsHash;
      } catch (e) {
        if (e instanceof HttpError) {
          console.error("Pinata API Error", "Status:", e.status, "Reason:", e.data);
          if (e.status === 401 || e.status === 403) {
            throw new p_retry_1.AbortError(e.data);
          }
          else {
            throw new Error(e.data);
          }
        }
        else {
          console.error("Pinata Pinning Service Error", e.message);
          throw e;
        }
      }
    }

    const formData02 = new FormData();
    formData02.append("file", socialBanner)
    formData02.append("pinataMetadata", JSON.stringify({ name: '000000.banner-social.webp' }))
    const pinSocial = async () => {
      try {
        const response = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData02, {
          maxBodyLength: Infinity,
          maxContentLength: Infinity,
          headers: {
            Authorization: `Bearer ${pinningKey}`,
            // @ts-ignore
            "Content-Type": `multipart/form-data; boundary=${formData02._boundary}`,
          },
        });
        console.log("IpfsHash:", response.data.IpfsHash)
        return response.data.IpfsHash;
        // return response.IpfsHash;
      } catch (e) {
        if (e instanceof HttpError) {
          console.error("Pinata API Error", "Status:", e.status, "Reason:", e.data);
          if (e.status === 401 || e.status === 403) {
            throw new p_retry_1.AbortError(e.data);
          }
          else {
            throw new Error(e.data);
          }
        }
        else {
          console.error("Pinata Pinning Service Error", e.message);
          throw e;
        }
      }
    }
    const originalHash = await pinOriginal();
    const socialHash = await pinSocial();
    console.log("IpfsHash01:", originalHash);
    console.log("IpfsHash02:", socialHash);
    socialMediaFile = {
      ipfsHash: socialHash,
    //use getMimeTypeFromFilePath to get 
      mimeType: "image/webp",
    };
    bannerFile = {
      ipfsHash: originalHash,
      mimeType: "image/webp",
    };

    console.log("=/=/=/=/=pushToChain=/=/=/=/=/=")
    const ledger = LedgerClientFactory.createClient({
      nodeHost: Wallet.Extension.connection.currentNodeHost,
    })
    let pushCollectionToBCData = {
      ledger: ledger,
      collectionInfo: testCollectionInfo,
      profile : testProfile,
      mediaFiles: {
        banner: bannerFile,
        bannerSocial: socialMediaFile 
      }
    }
    console.log("pushCollectionToBCData", pushCollectionToBCData)
    const pushToBCResult = await createCollection(ledger, testProfile,  testCollectionInfo.name, testCollectionInfo.description, testCollectionInfo.social, testCollectionInfo.homepage, bannerFile, socialMediaFile )
    console.log("pushToBCResult:", pushToBCResult);
    // const testCollectionInfo = {
    //   name : 'omega',
    //   description : "AtoZ",
    //   homepage : "",
    //   social : ''
    // }
    // transactionId = await pushCollectionToChain({
    //   collectionInfo: answers,
    //   profile,
    //   logger,
    //   mediaFiles: {
    //     banner: bannerFile,
    //     bannerSocial: socialMediaFile,
    //   },
    // });
  }
  async function pinMetaData(collectionId, filePinResults, metaDataFile, pinningKey) {
   
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
    const descriptorPath = filePinResults[0].file.split(".").slice(0,2).join(".").concat('-', "metadata.json");
    console.log(descriptorPath)
    console.log(descriptor)
    
    const prefix = `signumart-collection-${collectionId}`;
    const jsn = JSON.stringify(descriptor);
    const blob = new Blob([jsn], { type: 'application/json' });
    const file = new File([ blob ], prefix + descriptorPath);
    let descriptorFile = new File([ JSON.stringify(descriptor) ], prefix+descriptorPath, { type: 'application/json' });
    const res = await pinFile(file, {
        name: prefix + descriptorPath,
        keyvalues: {
            engine: "signumart-massup",
            collection: collectionId,
        },
    },  pinningKey);
    const ipfsHash = res["data"]["IpfsHash"];
    console.log("nftRecord: ", nftRecord)
    console.log("ipfsHash: ", res)
    console.log("ipfsHash: ", ipfsHash)
    return {
        nftRecord,
        ipfsHash ,
    };
}
  async function pinImageFiles(collectionId, files) {
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
        }, pinningKey));
        x++;
    }
    const pinningResults = await Promise.all(promises);
    console.log(pinningResults);
    return pinningResults.map((pinningResult, index) => ({
        file: filemapping[index],
        hash: pinningResult.data.IpfsHash,
    }));
}
async function createInitialDataStack(args, ledger, publicKey ) {
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
  const statusCode = 0;
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
  const auctionStopHeight = "0";
  const auctionMaxPrice = safeAmount(dutchPriceDrop ? "0" : auxPrice);
  // dutch auction
  const dutchStartHeight = dutchPriceDrop ? currentBlockHeight : "0";
  const dutchStartPrice = dutchPriceDrop ? currentPrice : "0";
  const dutchMinPrice = safeAmount(dutchPriceDrop ? auxPrice : "0");
  const dutchPriceDropPerBlock = safeAmount(dutchPriceDrop);
  const SkipValue = 0;
  // order is important - DO NOT CHANGE
  console.log([
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
]);
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
  console.log(args);
  const profile  = testProfile;
  const {publicKey, signPrivateKey} = generateMasterKeys(profile.seed)
  const {ledger} = args;
  const { Contract } = constants_1.Constants;
  const referencedTransactionHash = profile.network === "Signum Main Net"
      ? Contract.Reference.MainNet
      : Contract.Reference.Testnet;
  const activationAmountPlanck = Amount.fromSigna(Contract.ActivationCosts).getPlanck();
  const data = await createInitialDataStack(args, ledger, publicKey);
  const description = JSON.stringify({
      version: 1,
      descriptor: args.descriptorCid,
  });
  console.log(description);
  const transaction = await ledger.contract.publishContractByReference({
    senderPublicKey: publicKey,
    senderPrivateKey: signPrivateKey,
    description,
    feePlanck: "40000000",
    referencedTransactionHash,
    activationAmountPlanck,
    name: Contract.BaseName,
    data,
});
  return transaction; 
 
}
async function mintNft(args) {
  const { metaData, ledger} = args;
  const nftData = metaData.nftRecord;
  return createNft({
      ledger : ledger,
      auctionTimeout: nftData.auctionEnd
          ? 10//(0, calculateTimeoutFromDate_1.calculateTimeoutFromDate)(nftData.auctionEnd)
          : undefined,
      auxPrice: String(nftData.offerPrice || ""),
      price: String(nftData.price || ""),
      royaltiesFee: nftData.royalties,
      status: nftData.listingMode,
      descriptorCid: metaData.ipfsHash,
  });
}
  const demoMetaData = [{
    "name": "NFT #1",
    "description": "valuable NFT ever",
    "symbol": "AWESOME",
    "edition": "Summer",
    "royalties": 10,
    "identifier": 1,
    "image1": "00001.1.jpg",
    "image2": "",
    "image3": "",
    "attribute1": "key1:common",
    "attribute2": "ranking:1",
    "attribute3": "key3:value3",
    "attribute4": "",
    "attribute5": "",
    "attribute6": "",
    "attribute7": "",
    "attribute8": "",
    "listingMode": "NotForSale",
    "price": 0,
    "offerPrice": 0,
    "auctionEnd": ""
  }
]
  const totalNftCount = 3; 
  const collectionId = "17617481279089802625"
  async function uploadTheNftsOnBlockchain ()  {
    console.log(selectedCsvArray, selectedFiles);
    if (selectedCsvArray != undefined && selectedFiles != undefined) {
      if (selectedFiles.length !== 0 && selectedCsvArray.length !== 0){
        console.log("selected csv array:" , selectedCsvArray )
        console.log("selected files:" , selectedFiles )
      }else {
        console.log("num0 array")
      }
    }else{
      console.log("undefined csv array or selected files array");
    }
    // console.log(pixel);
    // let thumbPixel = await  resizeNft01(nftImages02);
    // thumbPixel = new File([thumbPixel], "000002.1-thumb.webp", { type: "image/webp" })
    // console.log("thumbPixel.name: ", thumbPixel.name)
    // let socialPixel = await resizeNft02(nftImages02);
    // socialPixel = new File([ socialPixel], "000002.1-social.webp", { type: "image/webp" })
    // console.log("socialPixel: ", socialPixel.name)
    // let originalPixel =  new File([nftImages02], "000002.1.jpg", { type: "image/jpeg" })
    // console.log("originalPixel: ", originalPixel.name)
    // let files = [originalPixel, socialPixel, thumbPixel];
    // const ledger = LedgerClientFactory.createClient({
    //   nodeHost: Wallet.Extension.connection.currentNodeHost,
    // })
    // const imagePinMap = await pinImageFiles(collectionId, files);
    // console.log(imagePinMap);
    // const metaRecordFile = {
    //   "name": "Testing NFT #1",
    //   "description": "Test the mass uploading function in the website.",
    //   "symbol": "AWESOME",
    //   "edition": "Summer",
    //   "royalties": 10,
    //   "identifier": 1,
    //   "image1": "000002.1.jpg",
    //   "image2": "",
    //   "image3": "",
    //   "attribute1": "key1:common",
    //   "attribute2": "ranking:1",
    //   "attribute3": "key3:value3",
    //   "attribute4": "",
    //   "attribute5": "",
    //   "attribute6": "",
    //   "attribute7": "",
    //   "attribute8": "",
    //   "listingMode": "NotForSale",
    //   "price": 0,
    //   "offerPrice": 0,
    //   "auctionEnd": ""
    // };
    // const metaData = await pinMetaData(collectionId, imagePinMap, metaRecordFile, pinningKey);
    // console.log("metaData: ", metaData);
    // const { transaction } = await mintNft({
    //   ledger,
    //   metaData,
    // });
    // console.log("transaction: ", transaction )
    // const address = Address.fromNumericId(transaction);
    // console.log(`Minted NFT [${address.getNumericId()}] - ${address.getReedSolomonAddress()}`);
}
//  uploadNftsToCollection = async () =>{
//   // prepare the use of testing nft
//   let originNFts =  new File([nftImages] , "signumart-collection-17617481279089802625-00001.1.jpg", { type: "image/jpg" })
//   let thumbImage = await resizeNft02(nftImages);
//   thumbImage = new File([thumbImage], "signumart-collection-17617481279089802625-00001.1-thumb.webp", { type: "image/webp" })
//   let socialImage = await resizeNft01(nftImages);
//   socialImage = new File([socialImage], "signumart-collection-17617481279089802625-00001.1-social.webp", { type: "image/webp" })
//   pinningMetaDataOrign = {
//   }
//   // pinning the files to pinata

//  }

const metaRecordFile = {
  "name": "Testing NFT #1",
  "description": "Test the mass uploading function in the website.",
  "symbol": "AWESOME",
  "edition": "Summer",
  "royalties": 10,
  "identifier": 1,
  "image1": "000002.1.jpg",
  "image2": "",
  "image3": "",
  "attribute1": "key1:common",
  "attribute2": "ranking:1",
  "attribute3": "key3:value3",
  "attribute4": "",
  "attribute5": "",
  "attribute6": "",
  "attribute7": "",
  "attribute8": "",
  "listingMode": "NotForSale",
  "price": 0,
  "offerPrice": 0,
  "auctionEnd": ""
};




 
  // const pinningBanner = async ( ) => {
  // console.log(banner);
  // let originalBanner = await sharp_01.sharp(banner)
  //                           .resize({width: 1600})
  //                             .webp({quality: 50,})
  //                             .toBuffer();
  // let socialBanner = await sharp_01.sharp(banner).resize({width:800}).webp({quality: 70,}).toBuffer();
  // let connection = HttpClientFactory.createHttpClient("https://api.pinata.cloud", {
  //   headers: {
  //       Authorization: `Bearer ${pinningKey}`,
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //   },
  // })
  // const formData01 = new FormData();
  // formData01.append("file", originalBanner)
  // formData01.append("pinataMetadata", JSON.stringify({ name: '00000.banner.webp' }))
  // const pinFile = async () => {
  //   try {
  //       const { response } = await connection.post("/pinning/pinFileToIPFS", formData01, {
  //           maxBodyLength: Infinity,
  //           maxContentLength: Infinity,
  //           headers: {
  //               Authorization: `Bearer ${connection.jwtToken}`,
  //               // @ts-ignore
  //               "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
  //           },
  //       });
  //       console.log("IpfsHash:",response.IpfsHash)
  //       return response.IpfsHash;
  //   }    catch (e) {
  //     if (e instanceof HttpError) {
  //         console.error("Pinata API Error", "Status:", e.status, "Reason:", e.data);
  //         if (e.status === 401 || e.status === 403) {
  //             throw new p_retry_1.AbortError(e.data);
  //         }
  //         else {
  //             throw new Error(e.data);
  //         }
  //     }
  //     else {
  //         console.error("Pinata Pinning Service Error", e.message);
  //         throw e;
  //     }
  // }}
  // pinFile();
  // return {originalBanner, socialBanner }
  // }

  const testAuth = async (connection) => {
    try {
      const result = await connection.get("/data/testAuthentication");
      return result;
    }
    catch (error) {
      return false;
    }
  }
  const connectToPinata = async (pinningKey) => {
    let connection = HttpClientFactory.createHttpClient("https://api.pinata.cloud", {
      headers: {
        Authorization: `Bearer ${pinningKey}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    let connectionResult = await testAuth(connection);
    if (connectionResult) {
      console.log("connection to Pinata!!!", connectionResult)
    }

  }
  

	const handleImageChange =async (e) => {
		// console.log(e.target.files[])
		if (e.target.files) {
      console.log(e.target.files);
          let thumbPixel = await  resizeNft01(nftImages02);
    thumbPixel = new File([thumbPixel], "000002.1-thumb.webp", { type: "image/webp" })
    console.log("thumbPixel.name: ", thumbPixel.name)
    let socialPixel = await resizeNft02(nftImages02);
    socialPixel = new File([ socialPixel], "000002.1-social.webp", { type: "image/webp" })
    console.log("socialPixel: ", socialPixel.name)
    let originalPixel =  new File([nftImages02], "000002.1.jpg", { type: "image/jpeg" })
    console.log("originalPixel: ", originalPixel.name)
    let files = [originalPixel, socialPixel, thumbPixel];
			const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
      // const newFilesArray = Array.from( filesArray ).map((file, index) => {
       
      //   let arrayOfFilename = file["name"].split('.')
        
      //   file.name = `${index}.${arrayOfFilename[-1]}`
      //   let newFile =  new File([file], `${index}.${arrayOfFilename[-1]}`, file.type)
      //   console.log(newFile);
      //   return newFile;
      // });
      let socialFileArray = [];
      let newFilesArray = [];
      let thumbFilesArray = [];
      for (let x = 0; x < filesArray.length ; x++){
        let blob = await fetch(filesArray[x]).then(r => r.blob());
        let newFile =  new File([blob], `00000${x}.1.jpg`, { type: "image/jpeg" })
        let thumbPixel = await  resizeNft01(blob);
        let thumbFile =  new File([thumbPixel], `00000${x}.1-thumb.jpg`, { type: "image/webp" })
        let socialPixel = await resizeNft02(blob);
        let socialFile =  new File([socialPixel], `00000${x}.1-social.jpg`, { type: "image/webp" })
        newFilesArray.push(newFile);
        socialFileArray.push(socialFile);
        thumbFileArray.push(thumbFile);

      }
    
    
      console.log(newFilesArray);
			console.log("filesArray: ", filesArray);
      
			setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      selectedUploads((prevImages) => prevImages.concat(newFilesArray));
      selectedUploads((prevImages) => prevImages.concat(newfilesArray));

      console.log("new File:", selectedFiles);
			Array.from(e.target.files).map(
				(file) => URL.revokeObjectURL(file) // avoid memory leak
			);
		}
	};

	const renderPhotos = (source) => {
		console.log('source: ', source);
		return source.map((photo) => {
			return <Image  boxSize='100px'
      objectFit='cover' src={photo} alt="" key={photo} />;
		});
	};
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
  const handleCsvFileChange = async (e) => {
    console.log(e.target.files[0]);
    const csvFile = e.target.files[0];
    console.log(csvFile); 
    const csvData = await CSVFileValidator(csvFile, csvConfig)
    console.log("csvFile: " , csvData)
    // .then(csvData => {
      
    //     csvData.data // Array of objects from file
    //     console.log("data:", csvData.data)
    //     csvData.inValidData // Array of error messages
    //     console.log("inValidData:", csvData.inValidData );
    //     console.log("inValidData:", csvData.inValidData );
    //     if (csvFile != undefined && csvFile != null) {
    //       if (csvData.inValidData.length === 0){
    //         setCsvArray([])
    //         setCsvArray((selectedCsvArray) => selectedCsvArray.concat(csvData.data))
    //       }else {
    //         console.log("error");
    //       }
    //     }
    // })
    // .then(()=> console.log(selectedCsvArray))
    // .catch(err => {})
  //   if (csvFile != undefined && csvFile != null) {
  //   Papa.parse(csvFile, {
  //     skipEmptyLines: true,
  //     header: true,
  //     complete: function(results ) {
  //       console.log("Finished", results.data);
  //     }
  //   })
  // } 
  console.log("inValidData:" , csvData.inValidData.length)
  if (csvData.inValidData.length === 0){
    const dataArray = csvData.data;
    setCsvArray((prev) =>
    prev.filter((csvData) => false));
    setCsvArray((prev) => prev.concat(dataArray))
    console.log("selectedCsvArray: ", selectedCsvArray);}
  }
  return (
    <>
      <Input
        value={collectionIdInput}
        onChange={handleChange}
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

  <div className="result">
    <style jsx>{`
      .result{
         display: flex;
        justify-content: left; 
        align-items: center;
      }
      `}</style>
 <Text mb='8px'>Image:</Text>
 <Button
      onClick={() => setSelectedFiles([])}
      >
        Clear
      </Button>
  </div>
  <Input
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
      onClick={() => uploadTheNftsOnBlockchain()}
      >
        Upload NFTs
      </Button>
    </>
  )};

export default MassUploader;

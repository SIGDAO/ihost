import { useState, useContext, createContext, useRef } from "react";
import { metadataStandardsArr } from "@/utils/json";

export const GeneratorContext = createContext({});
export const useGenerator = () => useContext(GeneratorContext);

export const GeneratorProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [storageURL, setStorageURL] = useState("");
  const [externalURL, setExternalURL] = useState("");
  const [standardType, setStandardType] = useState(metadataStandardsArr[0]);
  const [collectionSize, setCollectionSize] = useState(100);
  const [symbol, setSymbol] = useState("");
  const [creatorAddress, setCreatorAddress] = useState("");
  const [sellerFee, setSellerFee] = useState(1000);
  const [creatorShare, setCreatorShare] = useState(100);
  const [creators, setCreators] = useState([]);
  const [layers, setLayers] = useState([{ name: "Background", images: [] }]);
  const [currentLayer, setCurrentLayer] = useState(0);
  const [imageDimension, setImageDimension] = useState();
  const [isConfetti, setIsConfetti] = useState(false);
  const [isAutoSave, setIsAutoSave] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [autoSavePercentage, setAutoSavePercentage] = useState(0);
  const [downloadPercentage, setDownloadPercentage] = useState(0);
  const [metadata, setMetadata] = useState();
  const [curMetadata, setCurMetadata] = useState("");
  const [renderIndex, setRenderIndex] = useState(1);
  const [generateSpeed, setGenerateSpeed] = useState(0);
  const [isRarityModal, setIsRarityModal] = useState(false);
  const [isGenerateModal, setIsGenerateModal] = useState(false);
  const [isDownloadModal, setIsDownloadModal] = useState(false);
  const [isRandomizedMetadata, setIsRandomizedMetadata] = useState(false);
  const [previewLayers, setPreviewLayers] = useState();
  const [backgroundColor, setBackgroundColor] = useState("");
  const [animationURL, setAnimationURL] = useState("");
  const [youtubeURL, setYoutubeURL] = useState("");
  const [utilsTab, setUtilsTab] = useState("image");
  const [jsonFiles, setJsonFiles] = useState();
   //For signum metadata
   const [royalties, setRoyalties] = useState(0);
   const [nftTypes, setNftTypes] = useState([]);
   const [attribute1, setAttribute1] = useState("");
   const [attribute2, setAttribute2] = useState("");
   const [attribute3, setAttribute3] = useState("");
   const [attribute4, setAttribute4] = useState("");
   const [attribute5, setAttribute5] = useState("");
   const [attribute6, setAttribute6] = useState("");
   const [attribute7, setAttribute7] = useState("");
   const [attribute8, setAttribute8] = useState("");
   const [signumAttributes, setSignumAttributes] = useState([]);
   const [listingMode, setlistingMode] = useState("Not For Sale");
   const [price, setPrice] = useState(0);
   const [offerPrice, setOfferPrice] = useState(0);
   const [auctionEnd, setAuctionEnd] = useState("");
   const [edition,setEdition] = useState("");
   const [identifier,setIdentifier] = useState("");
   const [officialWeb,setOfficialWeb] = useState("");
   const [socialPlatform,setSocialPlatform] = useState("");
   const [numOfAttributes,updateNum] = useState(0);
   const [attributeType,setAttributeType] = useState("");
   const [attributeName,setAttributeName] = useState("");
  const canvasRef = useRef();
  const [attributes, setAttributes] = useState("");
  const controllers = {
    name,
    setName,
    description,
    setDescription,
    externalURL,
    setExternalURL,
    standardType,
    setStandardType,
    collectionSize,
    setCollectionSize,
    symbol,
    setSymbol,
    creatorAddress,
    setCreatorAddress,
    sellerFee,
    setSellerFee,
    creatorShare,
    setCreatorShare,
    creators,
    setCreators,
    layers,
    setLayers,
    currentLayer,
    setCurrentLayer,
    imageDimension,
    setImageDimension,
    isRarityModal,
    setIsRarityModal,
    isGenerateModal,
    setIsGenerateModal,
    isAutoSave,
    setIsAutoSave,
    isGenerating,
    setIsGenerating,
    isGenerated,
    setIsGenerated,
    isDownloading,
    setIsDownloading,
    autoSavePercentage,
    setAutoSavePercentage,
    downloadPercentage,
    setDownloadPercentage,
    metadata,
    setMetadata,
    curMetadata,
    setCurMetadata,
    renderIndex,
    setRenderIndex,
    generateSpeed,
    setGenerateSpeed,
    canvasRef,
    isConfetti,
    setIsConfetti,
    isDownloadModal,
    setIsDownloadModal,
    previewLayers,
    setPreviewLayers,
    isRandomizedMetadata,
    setIsRandomizedMetadata,
    storageURL,
    setStorageURL,
    animationURL,
    setAnimationURL,
    youtubeURL,
    setYoutubeURL,
    backgroundColor,
    setBackgroundColor,
    utilsTab,
    setUtilsTab,
    jsonFiles,
    setJsonFiles,
     //For signum metadata
     royalties,
     setRoyalties,
      attributes,
     setAttributes,
     nftTypes,
     setNftTypes,
     edition,
     setEdition,
     identifier,
     setIdentifier,
     officialWeb,
     setOfficialWeb,
     socialPlatform,
     setSocialPlatform,
     attribute1, 
     setAttribute1,
     attribute2,
     setAttribute2,
     attribute3, 
     setAttribute3,
     attribute4, 
     setAttribute4,
     attribute5, 
     setAttribute5,
     attribute6, 
     setAttribute6,
     attribute7, 
     setAttribute7,
     attribute8, 
     setAttribute8,
     signumAttributes,
     setSignumAttributes,
     listingMode, 
     setlistingMode,
     price, 
     setPrice,
     offerPrice, 
     setOfferPrice,
     auctionEnd, 
     setAuctionEnd,
     numOfAttributes, 
     updateNum,
     attributeType, 
     setAttributeType,
     attributeName,
     setAttributeName,
  };

  return (
    <GeneratorContext.Provider value={controllers}>
      {children}
    </GeneratorContext.Provider>
  );
};

import { Text, Flex, Image, Heading, Wrap, Box , Button } from "@chakra-ui/react";
import { useWebsite } from "@/providers/WebsiteProvider";
import Embed from "./Embed";
import Watermark from "./Watermark";
import ConnectWalletTag from "./ConnectWalletTag";
import { useAppContext } from '../../../../xtWallet/hooks/useAppContext';
import {getAliasByName, LedgerClientFactory} from '@signumjs/core';
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { useEffect,useState } from "react";
import { useRouter } from 'next/navigation';
import {resizeImage} from '@/hooks/services/certification/useCertification';
import nftCert from './nftCert.png';
const TemplateC = (memberId, userEmail, username, course, expiredDate) => {
  console.log("props:",  memberId, userEmail, username, course, expiredDate);
  const {push} = useRouter();
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [imageResizedUrl, setImageResizedUrl] = useState(null);
    const { Ledger, Wallet, DAppName } = useAppContext();
  const { userWebsite } = useWebsite();
  const [explorerLink, setExplorerLink] = useState();
  const [signumartLink, setSignumartLink] = useState();
  const [deployed, setDeployed] = useState(false);
  const [isDeploying, setIsDeploying] = useState(false);
  const [imageT, setImgT] = useState(async() => {
    let image = await fetch("/nftCertS.png")
let imageBlob = await image.blob();
console.log(imageBlob)
resizeImage(imageT, 250, 250, 'iacademy-admin').then((result) => {
  setImgT(result);
  return result
});
  });
 
  const handleChange = (e) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      setImagePreviewUrl(e.target.result);


      resizeImage(e.target.result, 250, 250).then((result) => {
        setImageResizedUrl(result);
      });
    };
    reader.readAsDataURL(e.target.files[0]);
  };


  const handleAliasFunction = () => {
    push(`/dashboard/alias`)
const ledger = LedgerClientFactory.createClient({
        nodeHost: Wallet.Extension.connection.currentNodeHost,
      })
    const result = ledger.c;  
    console.log("result:", result);
  };
  const handleClick = () => {
    setIsDeploying(true);
   
 
    setTimeout(() => {
      setDeployed(true)
        setIsDeploying(false);
    }, 4000);
  };
  async function fetchImages () {
    let image = await fetch("/nftCertS.png")
let imageBlob = await image.blob();
console.log(imageBlob)




const blobToBase64 = blob => {
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  return new Promise(resolve => {
    reader.onloadend = () => {
      resolve(reader.result);
    };
  });
};
blobToBase64(imageBlob).then(res => {
  // do what you wanna do
  console.log(res);
  resizeImage(res, 500, 500).then((result) => {
    setImgT(result)
    console.log(result);
  }); // res is base64 now


});
}
useEffect( () => {
  // let image = await fetch("/demoBanner.jpg")
  // let imageBlob = await image.blob();
  // console.log(imageBlob)
  // setSrc(imageBlob);
  // let nftImages = await fetch("/pixel.jpg")
  // let nftImagesBlob = await nftImages.blob();
  // setNftImages(nftImagesBlob)
  // console.log(nftImagesBlob)
  // let nftImages01 = await fetch("/pixel2.jpg")
  // let nftImages01Blob = await nftImages01.blob();
  // setNftImages01(nftImages01Blob)
  // console.log(nftImages01Blob)
  // let nftImages02 = await fetch("/pixel3.jpg")
  // let nftImages02Blob = await nftImages02.blob();
  // setNftImages02(nftImages02Blob)
  // console.log(nftImages02Blob)
  fetchImages();
}
  , []);
  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      p="3em"
      minH="100vh"
      position="relative"
    >
      {/* <Watermark position="absolute" bottom="4" right="4" /> */}
      <Wrap spacing="10em" p="3em" borderRadius="20px" justify="center">
        <Flex
          flexDir="column"
          alignItems="center"
          mb="1em"
          justifyContent="center"
        >
          <Heading as="h1" textAlign="center">
            {userWebsite?.components?.title}
          </Heading>
          <Box maxW="560px" mt=".5em">
            <Text textAlign="center" color="gray.400">
              {userWebsite?.components?.description}
            </Text>
          </Box>
          {/* <ConnectWalletTag isUserProfile isPayments isCopyAddress /> */}
          {/* <Embed mt="1em" /> */}
         {deployed ? (<><Link href='https://www.signumart.io/item/7752109053328848031' isExternal mt='5'>
          https://www.signumart.io/item/7752109053328848031 <ExternalLinkIcon mx='2px' />
          </Link>
          <Link href='https://explorer.signum.network/at/7752109053328848031' isExternal mt='5'>
          https://explorer.signum.network/at/7752109053328848031 <ExternalLinkIcon mx='2px' />
          </Link>
        <Button
          colorScheme='blue'  
          mt="3em"
          loadingText='isDeploying'
          variant='outline'
          onClick={handleAliasFunction}
       
          >Set the transaction link to your aliases</Button></>) : (<Button
            isLoading={isDeploying}
            colorScheme='blue'  
            mt=".5em"
            loadingText='isDeploying'
            variant='outline'
            onClick={handleClick}
           
            >Deploy my certification to blockchain</Button>)
}
        </Flex>
        <Image
          src= {imageT}
          alt={userWebsite?.components?.title}
          boxSize="350px"
          objectFit="scale-down"
        />
      </Wrap>
      {/* <p>Image resize using canvas</p>
      <div>
        <input type="file" accept="image/*" onChange={handleChange} />
        <h4>Original Image</h4>
        <div className="original_image_container">
          {imagePreviewUrl && <img src={imagePreviewUrl} />}
        </div>
        <h4>Resized Image</h4>
        <div className="resized_image_container">
          {imageResizedUrl && <img src={imageResizedUrl} />}
        </div>
      </div> */}


    </Flex>
  );
};


export default TemplateC;

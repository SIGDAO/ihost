import { Text, Flex, Image, Heading, Wrap, Box , Button } from "@chakra-ui/react";
import { useWebsite } from "@/providers/WebsiteProvider";
import Embed from "./Embed";
import Watermark from "./Watermark";
import ConnectWalletTag from "./ConnectWalletTag";
import {getAliasByName} from '@signumjs/core';

import { useState } from "react";
const TemplateC = () => {
  const { userWebsite } = useWebsite();
  const [isDeploying, setIsDeploying] = useState(false);
  const handleAliasFunction = () => {
    const result = getAliasByName("test");  
    console.log("result:", result);
  };
  const handleClick = () => {
    setIsDeploying(true);
  
  
    setTimeout(() => {
        setIsDeploying(false);
    }, 4000);
  };
  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      p="3em"
      minH="100vh"
      position="relative"
    >
      <Watermark position="absolute" bottom="4" right="4" />
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
          <ConnectWalletTag isUserProfile isPayments isCopyAddress />
          {/* <Embed mt="1em" /> */}
          <Button 
          isLoading={isDeploying}
          colorScheme='blue'  
          mt=".5em"
          loadingText='isDeploying'
          variant='outline'
          onClick={handleClick}
          >Deploy my certification to blockchain</Button>
        <Button 
          isLoading={isDeploying}
          colorScheme='blue'  
          mt=".5em"
          loadingText='isDeploying'
          variant='outline'
          onClick={handleAliasFunction}
          >Set the transaction link to your aliases</Button>
        </Flex>
        <Image
          src= 'http://localhost:3000/assets/images/NFTCert01.png'
          alt={userWebsite?.components?.title}
          boxSize="240px"
          objectFit="scale-down"
        />
      </Wrap>
    </Flex>
  );
};

export default TemplateC;

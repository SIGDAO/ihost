import { useState } from "react";
import { Text, Flex, VStack, Image, HStack, Heading } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";

const Features = () => {
  const [featureImage, setFeatureImage] = useState(
    "/assets/generator-mockup.png",
  );
  const isCollapse = useMediaQuery({ query: "(max-width: 980px)" });
  const isHideOrbit = useMediaQuery({ query: "(max-width: 400px)" });

  return (
    <Flex
      id="features"
      as="section"
      flexDir="column"
      minH="90vh"
      bgColor="#000616"
      bg="url(/assets/landing-bg-2.png) no-repeat center"
      bgSize="cover"
      alignItems="center"
      p="2em"
      overflow="hidden"
    >
      <HStack position="relative">
        <Heading as="h2" className="gradientPurple" fontSize="32pt">
          No-Code Tools
        </Heading>
        <Image
          position="absolute"
          left="105%"
          src="/assets/landing-effect-4.png"
          alt="Landing Effect - Bar"
          loading="lazy"
        />
      </HStack>
      <Text fontSize="18pt" mt=".75em">
        Powerful tools that will ensure your Web3 journey success.
      </Text>
      <Image
        src="/assets/landing-effect-5.png"
        alt="Landing Effect - Arc"
        my="1.5em"
        loading="lazy"
      />
      <Flex w="full" justifyContent={!isCollapse ? "space-between" : "center"}>
        <VStack spacing="1.5em" flex="1" alignItems="center" maxW="550px">
          <Flex
            maxW="380px"
            flexDir="column"
            flex="1"
            border="1px solid #6135ba"
            borderRadius="5px"
            p="1em"
            cursor="pointer"
            onClick={() => setFeatureImage("/assets/generator-mockup.png")}
          >
            <Flex alignItems="flex-start" gap="1.5em">
              <Image
                src="/assets/landing-icon-1.png"
                alt="Landing Icon - Generator"
                w="35px"
                loading="lazy"
              />
              <Text fontWeight="semibold" fontSize="16pt">
                Green Builder
              </Text>
            </Flex>
            <Text fontSize="10pt" mt="1em">
              In Green Builder, we provide basic functions for users. 
              You can generate unique images for new NFTs and then 
              deploy these images to Signum's blockchain through the mass uploader.
            </Text>
          </Flex>
          <Flex
            maxW="380px"
            flexDir="column"
            flex="1"
            border="1px solid #6135ba"
            borderRadius="5px"
            p="1em"
            cursor="pointer"
            onClick={() => setFeatureImage("/assets/website-mockup.png")}
          >
            <Flex alignItems="flex-start" gap="1.5em">
              <Image
                src="/assets/landing-icon-2.png"
                alt="Landing Icon - Generator"
                w="35px"
                loading="lazy"
              />
              <Text fontWeight="semibold" fontSize="16pt">
                Green Power Up
              </Text>
            </Flex>
            <Text fontSize="10pt" mt="1em">
              Green Power Up provides non-Web3 tools - Business Card and Certification 
              and a Web3 tool - Alias. You can connect your result from the non-Web3 tool to Signum Blockchain.
            </Text>
          </Flex>
          <Flex
            maxW="380px"
            flexDir="column"
            flex="1"
            border="1px solid #6135ba"
            borderRadius="5px"
            p="1em"
            cursor="pointer"
            onClick={() => setFeatureImage("/assets/metadata-mockup.png")}
          >
            <Flex alignItems="flex-start" gap="1.5em">
              <Image
                src="/assets/landing-icon-3.png"
                alt="Landing Icon - Generator"
                w="35px"
                loading="lazy"
              />
              <Text fontWeight="semibold" fontSize="16pt">
                Green Smart Contract
              </Text>
            </Flex>
            <Text fontSize="10pt" mt="1em">
            SmartC is designed for users of any knowledge level to develop smart contract, and as a learning lab for teaching and experimenting with Signum.
            </Text>
          </Flex>
        </VStack>
        {!isCollapse && (
          <Flex
            flex="1"
            position="relative"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              position="absolute"
              className="rotateAnimation"
              src="/assets/landing-effect-6.png"
              alt="Landing Animation - Ball"
              left="5%"
              loading="lazy"
            />
            <Image
              position="absolute"
              className="rotateAnimation2"
              src="/assets/landing-effect-7.png"
              alt="Landing Animation - Ball"
              loading="lazy"
            />
            <Image
              src={featureImage}
              alt="Generator Mockup"
              opacity=".5"
              border="1px solid #6135ba"
              boxShadow="2xl"
              maxW="1100px"
              w="full"
            />
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default Features;

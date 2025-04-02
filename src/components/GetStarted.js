import { useEffect } from "react";
import NextLink from "next/link";
import {
  Flex,
  Wrap,
  Button,
  Text,
  useColorModeValue,
  VStack,
  HStack,
  Link,
  Box,
  Image,
  Heading,
  Center,
  Badge,
} from "@chakra-ui/react";
import { AiOutlineRight } from "@react-icons/all-files/ai/AiOutlineRight";
import { FiExternalLink } from "@react-icons/all-files/fi/FiExternalLink";
import { useCoreControls } from "@/hooks/useCoreControls";
import { getStartedServicesArr } from "@/utils/json";
import { webColor } from "@/theme/index";
import config from "@/config/index";

const GetStarted = () => {
  const { featuredWebsites, getFeaturedWebsites } = useCoreControls();

  const containerColor = useColorModeValue(
    webColor.containerBg[0],
    webColor.containerBg[1],
  );

  const borderColor = useColorModeValue(
    webColor.borderColor[0],
    webColor.borderColor[1],
  );

  useEffect(() => {
    getFeaturedWebsites();
  }, []);

  return (
    <Flex flexDir="column" flex="1">
      <Flex flexDir="column" mt=".5em">
        <Flex>
          <Heading
            as="h1"
            fontSize="6xl"
            bgGradient="linear(to-l, #374782, #1C97E7)"
            bgClip="text"
          >
            Welcome
          </Heading>
        </Flex>
        <Text fontSize="10pt">
          Welcome to iHost! We created this page to guide you through your
          iHost journey.
        </Text>
        <Text fontSize="10pt">
        In this early stage, the guide of NFT Generator is 
          completed and the other guide are coming soon.
          </Text>
          
      </Flex>
      <Wrap spacing="2em" mt="3em">
        <VStack spacing="2em" alignItems="flex-start" maxW="760px" w="full">
          {getStartedServicesArr?.map((service, idx) => (
            <VStack
              spacing="1.5em"
              p="1em"
              bg={containerColor}
              borderRadius=".25em"
              boxShadow="0 0 2px 0 rgb(0 0 0 / 10%)"
              h="100%"
              w="full"
              key={idx}
              alignItems="flex-start"
              border={`1px solid ${borderColor}`}
            >
              <HStack spacing="1em" justifyContent="space-between" w="full">
                <HStack spacing="1em">
                  {service.icon}
                  <Text>{service.name}</Text>
                </HStack>
              </HStack>
              <Flex justifyContent="flex-end" w="full">
                <NextLink href={service.link} passHref shallow>
                  <Button
                    variant="primary"
                    rightIcon={<AiOutlineRight />}
                    maxW="120px"
                    w="full"
                    justifyContent="space-evenly"
                    size="sm"
                  >
                    {service.buttonText}
                  </Button>
                </NextLink>
              </Flex>
            </VStack>
          ))}
        </VStack>
        <VStack spacing="2.5em" alignItems="flex-start">
          <VStack spacing="1.25em" alignItems="flex-start">
            <Text fontSize="16pt">Tutorials</Text>
            <VStack spacing="1em" alignItems="flex-start">
              <Link
                href="https://www.youtube.com/watch?v=ITEEI2aBfRc"
                isExternal
              >
                <HStack>
                  <Text fontSize="10pt">How to Generate an NFT Collection</Text>
                  <FiExternalLink />
                </HStack>
              </Link>
              {/* <Link
                href="https://www.youtube.com/watch?v=Scw_NeGu6Sw"
                isExternal
              >
                <HStack>
                  <Text fontSize="10pt">How to Create a Mint Website</Text>
                  <FiExternalLink />
                </HStack>
              </Link>
              <Link
                href="https://www.youtube.com/watch?v=6R10ZTsLIeM"
                isExternal
              >
                <HStack>
                  <Text fontSize="10pt">How to Modify my json Metadata</Text>
                  <FiExternalLink />
                </HStack>
              </Link> */}
            </VStack>
          </VStack>

        </VStack>
      </Wrap>
      { featuredWebsites?.length > 0 && (
      <Flex mt="4em" flexDir="column">
        <Heading
          as="h1"
          fontSize="5xl"
          bgGradient="linear(to-l, #374782, #1C97E7)"
          bgClip="text"
        >
          Featured Website
        </Heading>
        <Text fontSize="10pt">
          Current featured website that users have created.
        </Text>
      </Flex>
      )}
      {featuredWebsites?.length > 0 && (
        <Flex justifyContent="flex-end" mt="1em">
          <Center flex="1" flexDir="column">
            <Heading fontSize="6xl">
              {featuredWebsites[0].components.title}
            </Heading>
            {featuredWebsites[0].isPremium && (
              <Badge colorScheme="yellow" fontSize="10pt">
                Premium
              </Badge>
            )}
            <Text mt="1em">{featuredWebsites[0].components.description}</Text>
            <Link
              href={`http${
                process.env.NODE_ENV === "production" ? "s" : ""
              }://${featuredWebsites[0]?.route}.${config?.frontendUrl}`}
              isExternal
              style={{ textDecoration: "none" }}
            >
              <Button mt="3em" leftIcon={<FiExternalLink />} variant="outline">
                Visit Website
              </Button>
            </Link>
          </Center>
          <Flex position="relative">
            <Box
              position="absolute"
              bgGradient="linear(to-r, #0C0C0E 0%, #0C0C0E 10%, rgba(0,0,0,0) 100%)"
              width="full"
              height="full"
            />
            <Image
              src={featuredWebsites[0].components.unrevealedImage}
              alt={featuredWebsites[0].route}
              maxW={680}
              maxH={530}
              borderRadius="10px"
              fallbackSrc="https://via.placeholder.com/680x530"
            />
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

export default GetStarted;

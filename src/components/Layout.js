import NextLink from "next/link";
import {
  Box,
  Text,
  useColorModeValue,
  VStack,
  HStack,
  Heading,
  IconButton,
  Button,
  useColorMode,
  Flex,
  Link,
  Image,
  GridItem
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
// import { BiSun } from "@react-icons/all-files/bi/BiSun";
// import { BiMoon } from "@react-icons/all-files/bi/BiMoon";
import { useCore } from "@/providers/CoreProvider";
import ConnectWalletTag from "./ConnectWalletTag";
import { sidebarArr } from "@/utils/json";
import { webColor } from "@/theme/index";

const Layout = ({ children, currentApp }) => {
  const { isSidebar, setIsSidebar } = useCore();
  // const { colorMode, toggleColorMode } = useColorMode();

  const sidebarBG = useColorModeValue(
    webColor.sidebarBg[0],
    webColor.sidebarBg[1],
  );
  const sidebarColor = useColorModeValue("#60677d", "#9097a7");
  const toolbarBG = useColorModeValue(
    webColor.toolbarBg[0],
    webColor.toolbarBg[1],
  );
  const defaultColor = useColorModeValue("rgba(0,0,0,0.7)", "white");

  return (
    <>
      <HStack
        position="fixed"
        top="0"
        w="full"
        bg={toolbarBG}
        h="70px"
        px="2em"
        justifyContent="space-between"
        zIndex="1337 !important"
        boxShadow="sm"
      >
        <HStack spacing="2em">
          <Link
            href="/dashboard"
            style={{ textDecoration: "none", color: "white" }}
          >
            <HStack spacing=".5em" cursor="pointer" flex="1">

              <Heading
                as="h1"
                fontWeight="bold"
                fontFamily="inter"
                fontSize="16pt"
                color="#68D391"
              >
                iHost
              </Heading>
            </HStack>
          </Link>
          <IconButton
            bg="transparent"
            color={defaultColor}
            fontSize="16pt"
            _hover={{ bg: "transparent", color: defaultColor }}
            onClick={() => setIsSidebar(!isSidebar)}
          >
            <GiHamburgerMenu color="#68D391"/>
          </IconButton>
        </HStack>
        <HStack spacing="2em">
          {/* <IconButton 
                        aria-label='Toggle Color Mode' 
                        bg='transparent'
                        color={defaultColor} 
                        _hover={{ bg: 'transparent', color: defaultColor }}
                        onClick={toggleColorMode}
                    >
                        {colorMode === 'light' ? <BiMoon /> : <BiSun />}
                    </IconButton> */}
          <ConnectWalletTag isUserProfile isPayments isCopyAddress />
        </HStack>
      </HStack>
      {isSidebar && (
        <VStack
          position="fixed"
          top="0"
          flexDir="column"
          bg={sidebarBG}
          w="245px"
          h="full"
          p="1.5em"
          alignItems="flex-start"
          mt="70px"
          boxShadow="sm"
          spacing="1em"
          color={sidebarColor}
          zIndex="1337 !important"
        >
          {sidebarArr?.map((item, idx) => (
            <VStack key={idx} spacing="1.5em" alignItems="flex-start" w="full">
            {(item.parent==="navigation")?(<Text fontSize="10pt">{item.parent.toUpperCase()}</Text>) :( <Text fontSize="10pt"><span className="green-text">GREEN </span> {item.parent.toUpperCase()}</Text>)}
              <VStack spacing=".25em" w="full">
                {item.items.map((nav, idx) => (
                  <Box key={idx} w="full">
                    {!nav.isExternal ? (
                      <NextLink href={`/dashboard${nav.link}`} shallow passHref>
                        <Button
                          borderRadius="0"
                          leftIcon={nav.icon}
                          w="full"
                          justifyContent="flex-start"
                          bg="transparent"
                          _hover={{
                            bg: "transparent",
                            color: "rgb(52,140,212)",
                          }}
                          _focus={{ bg: "transparent" }}
                          color={
                            currentApp ===
                            nav.name.replace(" ", "").toLowerCase()
                              ? "rgb(52,140,212)"
                              : null
                          }
                        >
                          {nav.name}
                        </Button>
                      </NextLink>
                    ) : (
                      <Link
                        href={nav.link}
                        isExternal
                        style={{ textDecoration: "none" }}
                        color="inherit"
                      >
                        <Button
                          borderRadius="0"
                          leftIcon={nav.icon}
                          w="full"
                          justifyContent="flex-start"
                          bg="transparent"
                          _hover={{
                            bg: "transparent",
                            color: "rgb(52,140,212)",
                          }}
                          _focus={{ bg: "transparent" }}
                          color={
                            currentApp ===
                            nav.name.replace(" ", "").toLowerCase()
                              ? "rgb(52,140,212)"
                              : null
                          }
                        >
                          {nav.name}
                        </Button>
                      </Link>
                    )}
                    <VStack spacing="0" pl="1.5em">
                      {nav.children.map((children, idx) => (
                        <NextLink
                          href={`/dashboard${children.link}`}
                          shallow
                          passHref
                          key={idx}
                          style={{ width: "100%" }}
                        >
                          <Button
                            borderRadius="0"
                            w="full"
                            justifyContent="flex-start"
                            bg="transparent"
                            fontSize="10pt"
                            _hover={{
                              bg: "transparent",
                              color: "rgb(52,140,212)",
                            }}
                            _focus={{ bg: "transparent" }}
                            color={
                              currentApp === children.name.toLowerCase()
                                ? "rgb(52,140,212)"
                                : null
                            }
                          >
                            {children.name}
                          </Button>
                        </NextLink>
                      ))}
                    </VStack>
                  </Box>
                ))}
              </VStack>
            </VStack>
          ))}
        </VStack>
      )}
      <Flex
        flexDir="column"
        pt="80px"
        pb="102px"
        ml={isSidebar ? "245px" : "0"}
        px="2rem"
        minH="100vh"
      >
        {children}
      </Flex>
    </>
  );
};

export default Layout;

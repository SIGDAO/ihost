// will error by  Objects are not valid as a React child (found: object with keys {children}). If you meant to render a collection of children, use an array instead.
// even the error is not actually from the reason above 
// Therefore, i prepare the pageForProd for development
"use client"
import AiCoder from "./aicoder";
import {
  useColorModeValue,
  Flex,
  Text,
  VStack,
  Box,
  HStack,
} from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";
import { FaLink } from "@react-icons/all-files/fa/FaLink";
import { useUser } from "@/providers/UserProvider";
import Layout from "@/components/LayoutAR";
import ConnectWalletTag from "@/components/ConnectWalletTagAR";
import ProfileModal from "@/components/ProfileModalAR";
import AreYouSureModal from "@/components/AreYouSureModal";
import { webColor } from "@/theme/index";

export default function PageClient() {
  const { isLoggedIn } = useUser();
  console.log("isLoggedIn", isLoggedIn);
  const app = ["Ai Code Editor"];
  const currentApp = "aicoder";
  
  console.log("currentApp", currentApp);

  const bgColor = useColorModeValue(
    webColor.dashboardBg[0],
    webColor.dashboardBg[1],
  );
  const isRemoveStepper = useMediaQuery({ query: "(max-width: 1300px)" });
  const isCollapse = useMediaQuery({ query: "(max-width: 990px)" });
  return (
    <main style={{ background: bgColor, minHeight: "100vh" }}>
      <Layout currentApp={currentApp}>
        {currentApp === "team" || currentApp === "partners" || isLoggedIn ? (
          <>
            <ProfileModal />  
            <AreYouSureModal />
            <Flex
              justifyContent="space-between"
              h="4em"
              alignItems="center"
              mb="1em"
            >
              <Text fontWeight="bold">{currentApp?.toUpperCase()}</Text>
              <HStack spacing="2em">
                {!isRemoveStepper && (
                  <Text>DASHBOARD &gt; {app.join(" > ").toUpperCase()}</Text>
                )}
              </HStack>
            </Flex>
            <AiCoder />
          </>
        ) : (
          <VStack flex="1">
            <Flex
              flexDir="column"
              justifyContent="center"
              alignItems="center"
              flex="1"
            >
              <FaLink fontSize="24pt" />
              <Flex flexDir="column" alignItems="center" mt=".5em">
                <Text fontWeight="bold" fontSize="10pt">
                  Connect
                </Text>
                <Text fontSize="10pt" variant="subtle">
                  Connect your wallet, to unlock dashboard.
                </Text>
              </Flex>
              <Box bg="rgb(112,62,221)" p=".25em" borderRadius="10px" mt="1em">
                <ConnectWalletTag borderColor="transparent" />
              </Box>
            </Flex>
          </VStack>
        )}
      </Layout>
    </main>
  );
}
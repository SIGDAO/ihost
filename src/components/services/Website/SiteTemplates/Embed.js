import { Text, Flex, Button, Box } from "@chakra-ui/react";
import { MdRefresh } from "@react-icons/all-files/md/MdRefresh";
import { useWebsite } from "@/providers/WebsiteProvider";
import { useWebsiteControls } from "@/hooks/services/website/useWebsiteControls";
import parse from "html-react-parser";

const isDevelopment = false;

const Embed = (styles) => {
  const { userWebsite } = useWebsite();
  const { getWebsiteByRoute } = useWebsiteControls();
  const isReveal =
    !userWebsite?.revealDate || new Date(userWebsite?.revealDate) <= new Date();

  return (
    <>
      {isReveal ? (
        <>
          {!isDevelopment ? (
            <Box {...styles}>
              {parse(userWebsite?.components?.embed, {
                replace: (val) => {
                  //TODO@: Auto Style Embeds ?
                },
              })}
            </Box>
          ) : (
            <Box {...styles}>
              <Flex
                bg="rgb(116,119,125)"
                borderRadius="10px"
                w="260px"
                justifyContent="center"
                alignItems="center"
                h="40px"
              >
                <Text color="white">Embed</Text>
              </Flex>
            </Box>
          )}
        </>
      ) : (
        <Flex
          borderRadius="10px"
          borderWidth="3px"
          p="2em"
          w="full"
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          {...styles}
        >
          <Text>Mint Button will be revealed at</Text>
          <Text fontSize="10pt">
            {userWebsite?.revealDate &&
              `${new Date(userWebsite?.revealDate).toString()}`}
          </Text>
          <Button
            mt="1em"
            leftIcon={<MdRefresh />}
            size="sm"
            onClick={() => {
              getWebsiteByRoute(userWebsite.route);
            }}
          >
            Refresh
          </Button>
        </Flex>
      )}
    </>
  );
};

export default Embed;

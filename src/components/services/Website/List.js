import {
  HStack,
  Text,
  Button,
  VStack,
  IconButton,
  Center,
  Spinner,
  useColorModeValue,
  Wrap,
  Avatar,
  AvatarBadge,
  Flex,
  Box,
  Toast,
  useToast,
} from "@chakra-ui/react";
import { MdRefresh } from "@react-icons/all-files/md/MdRefresh";
import { MdAdd } from "@react-icons/all-files/md/MdAdd";
import { useWebsite } from "@/providers/WebsiteProvider";
import { useWebsiteControls } from "@/hooks/services/website/useWebsiteControls";
import { webColor } from "@/theme/index";
import config from "@/config/index";

const List = ({ onCreateWebsiteOpen }) => {
  const toast = useToast({
    title: "Error",
    status: "error",
    duration: 3000,
    isClosable: true,
    position: "bottom",
  });
  const { websites, isGettingWebsites, editingWebsite, setWebsites } =
    useWebsite();
  const { getWebsites, editWebsite } = useWebsiteControls();

  const containerColor = useColorModeValue(
    webColor.containerBg[0],
    webColor.containerBg[1],
  );

  const borderColor = useColorModeValue(
    webColor.borderColor[0],
    webColor.borderColor[1],
  );

  return (
    <VStack
      alignItems="flex-start"
      spacing="1.5em"
      p="1em"
      borderRadius="5px"
      boxShadow="0 0 2px 0 rgb(0 0 0 / 10%)"
      h="100%"
      w="full"
    >
      <HStack spacing="2em" justifyContent="space-between" w="full">
        <VStack spacing="0" alignItems="flex-start">
          <Text fontWeight="bold" fontSize="10pt">
            Minting Websites
          </Text>
          <Text fontSize="10pt">List of your minting websites</Text>
        </VStack>
        <HStack>
          <Button
            leftIcon={<MdAdd />}
            color="white"
            variant="primary"
            size="sm"
            onClick={() => {
              const freeWebsiteCount =
                websites?.filter((web) => web.isPremium === false)?.length || 0;
              if (freeWebsiteCount >= 1) {
                toast({
                  description:
                    "You have used your 1 Free minting website. Upgrade your subscription to create more.",
                });
                return;
              }
              onCreateWebsiteOpen();
            }}
          >
            Create Website
          </Button>
          <IconButton
            size="sm"
            onClick={() => {
              setWebsites([]);
              getWebsites();
            }}
            disabled={isGettingWebsites}
          >
            <MdRefresh fontSize="12pt" />
          </IconButton>
        </HStack>
      </HStack>
      {!isGettingWebsites ? (
        <Wrap spacing="1.5em" w="full" overflow="visible">
          {websites?.map((web, idx) => (
            <Box
              key={idx}
              //cursor={editingWebsite?._id === web._id ? 'not-allowed' : 'pointer'}
            >
              <Flex
                flexDir="column"
                w="360px"
                h="210px"
                bg={containerColor}
                p="1.5em"
                borderRadius=".25em"
                className="scaleAnimation"
                onClick={() => {
                  editWebsite(web);
                }}
                border={`1px solid ${borderColor}`}
                cursor="pointer"
                // pointerEvents={editingWebsite?._id === web._id ? 'none' : 'all'}
              >
                <Flex flexDir="column" flex="1" w="full">
                  <HStack spacing="1em">
                    <Avatar
                      src={web.components.unrevealedImage}
                      name={`${web.components.title}'s logo`}
                      bg="transparent"
                      size="sm"
                    >
                      <AvatarBadge
                        boxSize="1em"
                        bg={web.isPublished ? "green.500" : "red.500"}
                        borderColor="white"
                        borderWidth="1px"
                      />
                    </Avatar>
                    <Flex flexDir="column" alignItems="flex-start">
                      <Text fontWeight="bold">{web.components.title}</Text>
                      <Text fontSize="10pt" variant="subtle">
                        {`${config?.frontendUrl}/mintingwebsite/${web.route}`}
                      </Text>
                    </Flex>
                  </HStack>
                  <Box flex="1" w="full">
                    <Text
                      fontSize="10pt"
                      mt="2em"
                      noOfLines={3}
                      textAlign="start"
                    >
                      {web.components.description}
                    </Text>
                  </Box>
                </Flex>
                <Flex>
                  <Text fontSize="9pt" variant="subtle">
                    {Math.floor(
                      (new Date() - Date.parse(web.createdAt)) / 86400000,
                    ).toString()}
                    d ago
                  </Text>
                </Flex>
              </Flex>
            </Box>
          ))}
        </Wrap>
      ) : (
        <Center w="full" h="210px">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="rgb(117,63,229)"
            size="lg"
          />
        </Center>
      )}
    </VStack>
  );
};

export default List;

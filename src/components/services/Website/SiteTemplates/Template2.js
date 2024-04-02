import { Text, Flex, Image, Heading, Wrap, Box } from "@chakra-ui/react";
import { useWebsite } from "@/providers/WebsiteProvider";
import Embed from "./Embed";
import Watermark from "./Watermark";

const Template2 = () => {
  const { userWebsite } = useWebsite();

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
          <Embed mt="1em" />
        </Flex>
        <Image
          src={userWebsite?.components?.unrevealedImage}
          alt={userWebsite?.components?.title}
          boxSize="240px"
          objectFit="scale-down"
        />
      </Wrap>
    </Flex>
  );
};

export default Template2;

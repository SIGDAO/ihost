import { Text, Flex, Image, Heading, Wrap } from "@chakra-ui/react";
import { useWebsite } from "@/providers/WebsiteProvider";
import Embed from "./Embed";
import Address from "./Address";
import Links from "./Links";
import ConnectWalletTag from "./ConnectWalletTag"
const Template5 = () => {
  const { userWebsite } = useWebsite();

  return (
    <Flex
      flexDir="column"
      minH="100vh"
      position="relative"
      bg="url(/assets/templates/components/bg5.png) no-repeat center center fixed"
      bgSize="cover"
    >
      <Flex
        p="1.5em"
        py="1em"
        w="full"
        justifyContent="center"
        bg="rgb(27,28,30)"
      >
        <Flex
          maxW="1500px"
          flex="1"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text
            fontSize="18pt"
            fontFamily="Orbitron"
            fontWeight="bold"
            color="blue.500"
          >
            {userWebsite?.components?.title}
          </Text>
          <Links bx={{ color: "white" }} />
          {/* <Address
            maxW="200px"
            bg="blue.500"
            color="black"
            size="sm"
            h="15px"
          /> */}
           <ConnectWalletTag/>
        </Flex>
      </Flex>
      <Flex flex="1" justifyContent="center" alignItems="center">
        <Wrap justify="center" spacing="6em" my="2em" mx="2em">
          <Heading
            as="h1"
            fontSize="64pt"
            textShadow="4px 4px 4px black"
            textAlign="center"
          >
            {userWebsite?.components?.title}
          </Heading>
          <Flex flexDir="column" justifyContent="center">
            <Flex
              flexDir="column"
              bg="rgba(27,28,30,.8)"
              border="1px solid #3182ce"
              p="2em"
              borderRadius="10px"
              maxW="500px"
              alignItems="center"
            >
              <Text fontSize="18pt" color="blue.500">
                Enter {userWebsite?.components?.title}&apos;s universe
              </Text>
              <Text color="white">{userWebsite?.components?.description}</Text>
              <Image
                src={userWebsite?.components?.unrevealedImage}
                alt={userWebsite?.components?.title}
                boxSize="150px"
                my="1.5em"
              />
              <Embed mt="1em" display="flex" justifyContent="center" />
            </Flex>
          </Flex>
        </Wrap>
      </Flex>
    </Flex>
  );
};

export default Template5;

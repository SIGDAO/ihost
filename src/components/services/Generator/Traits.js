import {
  Box,
  Text,
  Flex,
  VStack,
  IconButton,
  useColorModeValue,
  Wrap,
  Icon,
  Image,
  Button,
  HStack,
} from "@chakra-ui/react";
import { FaTrashAlt } from "@react-icons/all-files/fa/FaTrashAlt";
import { BsFillImageFill } from "@react-icons/all-files/bs/BsFillImageFill";
import { useCore } from "@/providers/CoreProvider";
import { useGenerator } from "@/providers/GeneratorProvider";
import { useTraits } from "@/hooks/services/generator/useTraits";
import Dropzone from "react-dropzone";
import { webColor } from "@/theme/index";

const Traits = () => {
  const { layers, currentLayer } = useGenerator();
  const { DeleteTrait, UploadAssets, DeleteAllTraits } = useTraits();
  const { setAreYouSureData, setIsAreYouSureModal } = useCore();

  const containerColor = useColorModeValue(
    webColor.containerBg[0],
    webColor.containerBg[1],
  );
  const dropContainerColor = useColorModeValue(
    "rgba(0,0,0,0.1)",
    "rgba(0,0,0,0.5)",
  );
  const itemColor = useColorModeValue("blackAlpha.100", "blackAlpha.400");
  const itemBorderColor = useColorModeValue("blackAlpha.300", "whiteAlpha.300");
  // functions 
  // const handleDrop = (acceptedFiles) => {
  //   const file = acceptedFiles[0];
  //   const reader = new FileReader();

  //   reader.onload = (e) => {
  //     const image = new Image();
  //     image.onload = () => {
  //       console.log('Image width:', image.width);
  //       console.log('Image height:', image.height);
  //     };
  //     image.src = e.target.result;
  //   };

  //   reader.readAsDataURL(file);
  // };

  return (
    <Flex
      p="1em"
      bg={containerColor}
      borderRadius=".25em"
      flex="1"
      minW="180px"
      flexDir="column"
      h="100%"
    >
      <Flex justifyContent="space-between">
        <Flex flexDir="column">
          <Text fontWeight="bold" fontSize="10pt">
            Traits
          </Text>
          <Text fontSize="10pt">
            Current Layer:{" "}
            <span style={{ color: "#08BDD4", fontWeight: "bold" }}>
              {layers[currentLayer]?.name}
            </span>
          </Text>
        </Flex>
        <HStack>
          <Button
            variant="danger"
            leftIcon={<FaTrashAlt />}
            onClick={() => {
              setAreYouSureData({
                item: "traits",
                action: "Clear",
                button: "danger",
                callback: () => {
                  DeleteAllTraits();
                },
              });
              setIsAreYouSureModal(true);
            }}
          >
            Clear
          </Button>
        </HStack>
      </Flex>
      {layers[currentLayer]?.images.length > 0 && (
        <Wrap spacing="1em" mt="1em" mb="2em" p="1em">
          {layers[currentLayer]?.images?.map((image, idx) => (
            <Box
              p="1em"
              key={idx}
              bg={itemColor}
              borderRadius="10px"
              position="relative"
              borderColor={itemBorderColor}
              borderStyle="dashed"
              borderWidth="3px"
            >
              <VStack>
                <Image src={image.preview} alt={image.name} w="85px" h="85px" />
                <Text fontSize="10pt" w="85px" noOfLines="1">
                  {image.name}
                </Text>
              </VStack>
              <IconButton
                aria-label="Delete Trait"
                position="absolute"
                top="-2.5"
                right="-2.5"
                isRound
                icon={<FaTrashAlt />}
                bg="rgb(52,140,212)"
                size="sm"
                onClick={() => DeleteTrait(image.name)}
              />
            </Box>
          ))}
        </Wrap>
      )}
      <Dropzone
        accept={{
          "image/png": [],
        }}
        multiple
        onDrop={(files) =>{
          console.log("on drop files: ", files[0].width);
          UploadAssets(files)} }
      >
        {({ getRootProps, getInputProps }) => (
          <Flex
            w="full"
            h="200px"
            mt="1em"
            bg={dropContainerColor}
            borderRadius="10px"
            justifyContent="center"
            alignItems="center"
            flexDir="column"
            cursor="pointer"
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            <VStack>
              <Icon as={BsFillImageFill} fontSize="18pt" />
              <Text>Drag and drop images here</Text>
              <Text>Please make sure the image ratio in 1:1</Text>
              <Text>and at least 512px:512px</Text>
              {/* <Text>Drag and drop images here</Text> */}
              <Text fontSize="10pt">Supported Format: .png</Text>
            </VStack>
          </Flex>
        )}
      </Dropzone>
    </Flex>
  );
};

export default Traits;

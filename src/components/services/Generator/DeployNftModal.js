import {
    HStack,
    Text,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Progress,
    Box,
    Flex,
    VStack,
    Checkbox,
  } from "@chakra-ui/react";
  import { useGenerator } from "@/providers/GeneratorProvider";
  import { useGenerate } from "@/hooks/services/generator/useGenerate";
  import { FaDownload } from "@react-icons/all-files/fa/FaDownload";
  import { AiOutlineArrowRight } from "@react-icons/all-files/ai/AiOutlineArrowRight";
  import TanstackTable from "./TanstackTable";
  import NFTuploader from "./NFTuploader";
  const DeployNftModal = () => {
    const {
        metadata,
        setMetadata,
        nftImages,
         setNftImages,
      isDownloadModal,
      setIsDownloadModal,
      setIsConfetti,
      isGenerated,
      generateSpeed,
      isAutoSave,
      isDownloading,
      downloadPercentage,
      isRandomizedMetadata,
      setIsRandomizedMetadata,
      isCsvEditModal,
      setIsCsvEditModal,
      isDeployNftModal,
      setDeployNftModal,
      csvData,
      setCsvData,
    } = useGenerator();
    // console.log("metadata", metadata);
    // console.log("nftImages", nftImages);
    const { DownloadCollection, DownloadMetadata } = useGenerate();
    return ( 
        <Modal
          onClose={() => {
            setIsConfetti(false);
            setDeployNftModal(false);
          }}
          isOpen={isDeployNftModal}
          isCentered
          size="4xl"
          closeOnOverlayClick={false}
          scrollBehavior="inside"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              Deploy your NFT to SignumArt
              <Text fontWeight="normal" fontSize="10pt">
                Before your deployment, you must make sure that prepare your profile and your collection. 
              </Text>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>

             <NFTuploader/>
            </ModalBody>
            <ModalFooter justifyContent="space-between">
              <Button
                size="sm"
                rightIcon={<AiOutlineArrowRight />}
                onClick={() => {
                  setDeployNftModal(false);
                }}
              >
                Finish
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      
    );
  };
  
  export default DeployNftModal;
  
import { useState,useEffect} from "react";
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
  const CsvEditModal = () => {
    const {
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
      nftImages,
    } = useGenerator();
    const renderPhotos = (source) => {
      return source.map((photo) => {
        return <Image boxSize='100px'
          objectFit='cover' src={photo} alt="" key={photo} />;
      });
    };
    const [selectedFiles, setSelectedFiles] = useState(nftImages);
    return ( 
        <Modal
          onClose={() => {
            setIsConfetti(false);
            setIsCsvEditModal(false);
          }}
          isOpen={isCsvEditModal}
          isCentered
          size="full"
          closeOnOverlayClick={false}
          scrollBehavior="inside"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              Edit the csv file
              <Text fontWeight="normal" fontSize="10pt">
                Please edit your csv file for the information of Nfts 
              </Text>
        
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <div className="result">
        {renderPhotos(selectedFiles)}
        <style jsx>{`
        .result{
        min-height: 100%;
        max-height: auto;
        width: 100%;
        background-color: #272c34;
        margin-top:1rem ;
         display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: left; 

      }
      `}</style>
      </div>
              {/* <Flex justifyContent="center" alignItems="center" my="3em">
                <HStack spacing="4em">
                  <VStack alignItems="flex-start">
                    <Text variant="content_subtitle">
                      {!isAutoSave ? "NFT Collection" : "Collection Metadata"}
                    </Text>
                    <Text fontSize="10pt" fontWeight="normal" mt=".5em">
                      {!isAutoSave
                        ? "Download your NFT Collection"
                        : "Download your NFT Collection Metadata"}
                    </Text>
                    {!isAutoSave ? (
                      <Button
                        isLoading={isDownloading}
                        loadingText="Downloading"
                        onClick={DownloadCollection}
                        rightIcon={<FaDownload />}
                        size="sm"
                        variant="primary"
                      >
                        Download Collection
                      </Button>
                    ) : (
                      <Button
                        isLoading={isDownloading}
                        loadingText="Downloading"
                        onClick={DownloadMetadata}
                        rightIcon={<FaDownload />}
                        size="sm"
                        variant="primary"
                      >
                        Download Metadata
                      </Button>
                    )}
                  </VStack>
                  <VStack alignItems="flex-start">
                    <Text fontSize="10pt">Options</Text>
                    <Checkbox
                      isChecked={isRandomizedMetadata}
                      onChange={(e) => setIsRandomizedMetadata(e.target.checked)}
                    >
                      <Text fontSize="10pt">
                        Shuffled (Randomized) metadata.json
                      </Text>
                    </Checkbox>
                  </VStack>
                </HStack>
              </Flex>
              {isDownloading && (
                <>
                  <Text textAlign="left" mt="1em" fontSize="14pt">
                    Downloading
                  </Text>
                  <Text textAlign="left" fontSize="10pt">
                    This may take awhile. Please do not refresh the page.
                  </Text>
                  <HStack w="full">
                    <Progress flex="1" hasStripe value={downloadPercentage} />
                    <Text fontSize="11pt">{downloadPercentage.toFixed(2)} %</Text>
                  </HStack>
                </>
              )} */}

              <TanstackTable/>
            </ModalBody>
            <ModalFooter justifyContent="space-between">
              {/* <Box mt="1em" opacity=".8">
                <Text fontSize="10pt">Generation Speed</Text>
                <Text fontSize="8pt">
                  Generation speed in hours, minutes, seconds, and milliseconds
                </Text>
                <Text fontSize="8pt">
                  It took{" "}
                  <span style={{ color: "rgb(52,140,212)" }}>
                    {(generateSpeed / 3600000).toFixed(2)} hours
                  </span>{" "}
                  or &nbsp;
                  <span style={{ color: "rgb(52,140,212)" }}>
                    {(generateSpeed / 60000).toFixed(2)} minutes
                  </span>{" "}
                  or &nbsp;
                  <span style={{ color: "rgb(52,140,212)" }}>
                    {(generateSpeed * 0.001).toFixed(2)} seconds
                  </span>{" "}
                  or &nbsp;
                  <span style={{ color: "rgb(52,140,212)" }}>
                    {generateSpeed.toFixed(2)} milliseconds
                  </span>{" "}
                  to generate your collection.
                </Text>
              </Box> */}
              <Button
                size="sm"
                rightIcon={<AiOutlineArrowRight />}
                onClick={() => {
                  setIsCsvEditModal(false);
                  setDeployNftModal(true);
                }}
              >
                Deploy NFTs
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      
    );
  };
  
  export default CsvEditModal;

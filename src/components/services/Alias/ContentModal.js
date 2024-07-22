import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    
  } from '@chakra-ui/react'

  const ContentModal = () => {
   

    return (
        <>
          initialFocusRef={initialRef}
        finalFocusRef={finalRef}
      <Modal
      
        isOpen={true}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>View The Content</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          <Text fontSize='lg'>Alias URL Content:</Text>
          <Text fontSize='md'>You can change the entire style of the text via props. For example, to change the font size, pass the fontSize prop. No need to write css or styled().</Text>
          </ModalBody>

          <ModalFooter>
   
            <Button onClick={onClose}>Exit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
    );
  };
  
  export default ContentModal;
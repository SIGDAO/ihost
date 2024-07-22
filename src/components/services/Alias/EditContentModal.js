import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Input,
    Button,
    Text
  } from '@chakra-ui/react'
  import { useState, useEffect,useRef} from 'react';
  import { useAppContext } from '../../../xtWallet/hooks/useAppContext';

  const EditContentModal = ({toast,isEditContentModal, setEditContentModal ,transactionID,aliasName,tld,handleSearch}) => {
    const { Ledger, Wallet, DAppName } = useAppContext();
    const contentInputRef = useRef(null);
    const editContent = async (aliasName,tld ) => {
      console.log(transactionID);
      const contentInput = contentInputRef.current.value;
      const publicKey = Wallet.Extension._connection.publicKey;
        console.log(Wallet.Extension._connection.publicKey)
         try {
 
           const res = await fetch(`https://europe2.signum.network/api?requestType=setAlias&aliasName=${aliasName}&aliasURI=${contentInput}&deadline=1440&feeNQT=20000000&publicKey=${publicKey}&tld=${tld}`)
           const resultData = await res.json();
           if (resultData.errorDescription){
             toast({
               title: `${resultData.errorDescription}`,
               status: 'error',
               isClosable: true,
             })
             return false;
           }
           console.log("createNftResponse: ", resultData)
           console.log("createNftResponse: ", resultData.unsignedTransactionBytes)
           const response = await Wallet.Extension.confirm(resultData.unsignedTransactionBytes)
           console.log("ok:",response);
           toast({
             title: `Your Alias is editing.Wait for confirmation and let the blockchain do everything for you 😀`,
             status: 'success',
             isClosable: true,
           })
           setEditContentModal(false)
           handleSearch(aliasName)
           return true;
         } catch (error) {
           toast({
             title: `${error.message}`,
             status: 'error',
             isClosable: true,
           })
           console.error('Error fetching search results:', error)
           return false;
         }
       }; 

    return (
        <>
      <Modal

        isOpen={isEditContentModal}
        onClose={()=> {setEditContentModal(false)}}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit  The Content</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          <Text fontSize='lg'>Edit Alias Content:</Text>
          <Input ref={contentInputRef} placeholder='Yours Content' type='text' />
          </ModalBody>

          <ModalFooter>
          <Button onClick={()=> {editContent(aliasName,tld)}}>Edit</Button>
            <Button onClick={()=> {setEditContentModal(false)}}>Exit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
    );
  };
  
  export default EditContentModal;
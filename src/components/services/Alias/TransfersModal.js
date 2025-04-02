import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Input,
    Button,
    Text
  } from '@chakra-ui/react'
  import { useState, useEffect,useRef} from 'react';
  import { useAppContext } from '../../../xtWallet/hooks/useAppContext';
  const TransfersModal = ({toast,isTransfersModal, setTransfersModal,transactionID,aliasName,tld,handleSearch}) => {
    const { Ledger, Wallet, DAppName } = useAppContext();
    const targetWalletInputRef = useRef(null);

    const transferAlias = async (transactionID) => {

    
      console.log(transactionID);
       const targetWallet = targetWalletInputRef.current.value;
      const publicKey = Wallet.Extension._connection.publicKey;
        console.log(Wallet.Extension._connection.publicKey)
         try {

           const res = await fetch(`https://europe2.signum.network/api?requestType=sellAlias&alias=${transactionID}&deadline=1440&feeNQT=1000000&publicKey=${publicKey}&priceNQT=0&recipient=${targetWallet}`)
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
             title: `Your Alias is selling.Wait for confirmation and let the blockchain do everything for you 😀`,
             status: 'success',
             isClosable: true,
           })
           setTransfersModal(false)
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
        isOpen={isTransfersModal}
        onClose={() => {setTransfersModal(false)}}
      >
        <ModalOverlay />
        <ModalContent>
        <ModalHeader>Transfer The Alias</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          <Text fontSize='lg'>Set the wallet you want to transfer:</Text>
          <Input ref={targetWalletInputRef} placeholder='Wallet Account' type='text'/>
          </ModalBody>

          
          <ModalFooter>
            <Button onClick={() => {transferAlias(transactionID)}}>Transfer</Button>  
            <Button onClick={() => {setTransfersModal(false)}}>Exit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
    );
  };
  
  export default TransfersModal;
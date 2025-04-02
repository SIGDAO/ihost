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

  const SubscriptionModal = ({toast,isSubscriptionModal, setSubscriptionModal,transactionId,aliasName,tld ,handleSearch }) => {
    const { Ledger, Wallet, DAppName } = useAppContext();
    
    const cancelSubscription = async (transactionId) => {
     console.log(transactionId);
    
     const publicKey = Wallet.Extension._connection.publicKey;
       console.log(Wallet.Extension._connection.publicKey)
        try {

          const res = await fetch(`https://europe2.signum.network/api?requestType=subscriptionCancel&subscription=${transactionId}&publicKey=${publicKey}&feeNQT=1000000&deadline=1440`)
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
            title: `Your Subscription of Alias is cancel.Wait for confirmation and let the blockchain do everything for you 😀`,
            status: 'success',
            isClosable: true,
          })
          setSubscriptionModal(false)
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
      
        isOpen={isSubscriptionModal}
        onClose={() => {
          setSubscriptionModal(false);
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cancel the subscription</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          <Text fontSize='md'>Are you sure to cancel the subscription of this Alias ?</Text>
          </ModalBody>

          <ModalFooter>
          <Button onClick={() => {
          cancelSubscription(transactionId)
        }}>Cancel the renew</Button>
            <Button onClick={() => {
          setSubscriptionModal(false);
        }}>Exit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
    );
  };
  
  export default SubscriptionModal;
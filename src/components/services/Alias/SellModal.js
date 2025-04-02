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

  const SellModal = ({toast,isSellModal,setSellModal,transactionId,aliasName,tld,handleSearch }) => {
    const { Ledger, Wallet, DAppName } = useAppContext();
      const sellInputRef = useRef(null);
      const sellAlias = async (transactionId) => {

       console.log("price setting:",(sellInputRef.current.value*100000000))
       console.log(transactionId);
        const priceNQT = sellInputRef.current.value*100000000
       const publicKey = Wallet.Extension._connection.publicKey;
         console.log(Wallet.Extension._connection.publicKey)
          try {

            const res = await fetch(`https://europe2.signum.network/api?requestType=sellAlias&alias=${transactionId}&deadline=1440&feeNQT=1000000&publicKey=${publicKey}&priceNQT=${priceNQT}`)
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
            setSellModal(false)
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
      
        isOpen={isSellModal}
        onClose={()=>{setSellModal(false)}}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sell The Alias</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          <Text fontSize='lg'>Set your selling price:</Text>
          <Input ref={sellInputRef} placeholder='Signa' type="number" />
          </ModalBody>

          <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={()=>{sellAlias(transactionId)}}>
              Sell
            </Button>
            <Button onClick={()=>{setSellModal(false)}}>Exit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
    );
  };
  
  export default SellModal;
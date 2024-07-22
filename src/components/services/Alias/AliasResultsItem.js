import { useState, useRef } from 'react';
import { Tag, 
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter,
  Heading,
  Stack,
  Text,
  Spacer,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Portal,
  Box,
 } from '@chakra-ui/react'
 import { MdBuild , MdCall } from "react-icons/md"
import { useAppContext } from '../../../xtWallet/hooks/useAppContext';
const AliasResultsItem = ({ result,
  setAlias,
  searchItem,
  buttonDisable,         
  isSellModal,
  setSellModal,
  isEditContentModal,
  setEditContentModal,
  isSubscriptionModal,
  setSubscriptionModal,
  isTransfersModal,
  setTransfersModal, 
  setTransactionId,
  setTld}) => {
  console.log(result);
  const initRef = useRef();
  const [isConfirming, setIsConfirming] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const { Ledger, Wallet, DAppName } = useAppContext();
    return (
          // <div key={result[0]} className="bg-white p-4 mb-2 shadow-md rounded-md">
          //   <h3 className="text-xl font-bold">{result[0]}</h3>
          //   <p>{result[1].status}</p>
          //   <p>{result[1].priceNQT}</p>
          // </div>
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  maxW="1000px"
  m={[2, 3]}
>


  <Stack w="1000px">
    <CardBody>
      <Heading size='lg'>{searchItem} 
      <Tag size="lg" key="lg" variant='solid' colorScheme='blue'>
      {result[0]}
      </Tag>
      </Heading>

      <Text py='2'>
      {searchItem}.{result[0]}
      </Text>
    </CardBody>

    <CardFooter>
      <Text py='2' color="blue.500" display={result[1].status === "Taken" ? 'none' : "md"}>
      {(result[1].priceNQT)/100000000} SIGNA
      </Text>
        <Spacer />
      
    {( result[1].status === "Self-Hosted" )&&(<Popover closeOnBlur={false} placement='left' initialFocusRef={initRef} >
      {({ isOpen, onClose }) => (
        <>
          <PopoverTrigger>
            <Button>Click to {isOpen ? 'close' : 'open'}</Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent  w="17rem">
              <PopoverHeader>Edit Yours Alias</PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody>
                <Button onClick={()=>{
                setTld(result[0])
                setTransactionId(result[1].aliasTransaction)
                setEditContentModal(true)
                }}
                rightIcon={<MdCall />} 
                colorScheme='blue' 
                variant='outline' 
                w="15rem">
                  Edit Alias Content
                </Button>
                <Button onClick={()=>{
                  setTld(result[0])
                  setTransactionId(result[1].aliasTransaction)
                  setSellModal(true)
                }}
                rightIcon={<MdCall />} 
                colorScheme='blue' 
                variant='outline' 
                w="15rem"
                >
                  Sell The Alias
                </Button>
                <Button 
                onClick={()=>{
                  setTld(result[0])
                  setTransactionId(result[1].aliasTransaction)
                  setTransfersModal(true)
                }}
                rightIcon={<MdCall />} 
                colorScheme='blue' 
                variant='outline' 
                w="15rem">
                  Transfer The Alias
                </Button>
                <Button 
                onClick={()=>{
                  setTld(result[0])
                  setTransactionId(result[1].aliasTransaction)
                  setSubscriptionModal(true)
   
                }}
                rightIcon={<MdCall />} 
                colorScheme='blue' 
                variant='outline' 
                w="15rem">
                  Cancel Your Renew
                </Button>
              </PopoverBody>
              {/* <PopoverFooter>This is the footer</PopoverFooter> */}
            </PopoverContent>
          </Portal>
        </>
      )}
    </Popover>)
    }
      <Button onClick={async ()=> {
        setIsConfirming(true);
        const res = await setAlias(result);
        console.log("The result of set Alias")
        if (!res){
        setIsConfirming(false);
        }
        if (res){
        setIsProcessing(true);
        }
        }} 
      isLoading={isConfirming}
      loadingText='Confirming'
      isDisabled={ (((result[1].status === "Taken")||(result[1].status === "Pending") || (result[1].status === "Self-Hosted"))  ? true : false) || buttonDisable || isProcessing} 
      variant='solid' 
      colorScheme={result[1].status === "Taken" ? "red" : "blue"}>
      {result[1].status}
      </Button>
    </CardFooter>
  </Stack>
</Card>
    );
  };
  
  export default AliasResultsItem;
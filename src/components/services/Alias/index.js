import { useState, useEffect} from 'react';
import AliasSearchBar from './AliasSearchBar';
import AliasResultsList from './AliasResultsList';
import { Http, HttpClientFactory, HttpResponse, HttpMockBuilder, HttpError } from "@signumjs/http"
import { Address, LedgerClientFactory } from "@signumjs/core";
import { useAppContext } from '../../../xtWallet/hooks/useAppContext';
import { useUser } from "@/providers/UserProvider";
import SellModal from './SellModal';
import EditContentModal from './EditContentModal';
import SubscriptionModal from './SubscriptionModal';
import TransfersModal from './TransfersModal';

import {
  useToast,
  Flex,
  Wrap,
  Button,
  Text,
  useColorModeValue,
  VStack,
  HStack,
  Link,
  Box,
  Image,
  Heading,
  Center,
  Badge,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
const Alias = () => {
    // const [accountData , setAccountData] = useState();
    // const [unconfirmedTransactions, setUnconfirmedTransactions] = useState();

    // useEffect(() => {
    //     //Implementing the setInterval method
    //     const interval = setInterval(() => {
    //         setCount(count + 1);
    //     }, 1000);
 
    //     //Clearing the interval
    //     return () => clearInterval(interval);
    // }, [accountData]);

    // useEffect(() => {
    //     //Implementing the setInterval method
    //     const interval = setInterval(() => {
    //         setCount(count + 1);
    //     }, 1200);
 
    //     //Clearing the interval
    //     return () => clearInterval(interval);
    // }, [unconfirmedTransactions]);
  const {address, user,isLoggedIn, wallet, isVIP} = useUser();
  const { Ledger, Wallet, DAppName } = useAppContext();
  const toast = useToast()
  const [isSellModal, setSellModal] = useState(false);
  const [isSubscriptionModal, setSubscriptionModal] = useState(false);
  const [isTransfersModal, setTransfersModal] = useState(false);
  const [isEditContentModal, setEditContentModal] = useState(false);
  const [isContentModel, setContentModal] = useState(false)
  const [transactionId, setTransactionId] = useState();
  const [aliasName, setAliasName] = useState();
  const [tld, setTld] = useState();
  const [userData,  setUserData ] = useState( async () => {
    const responses = await fetch(`https://europe2.signum.network/api?requestType=getAccount&account=${address}`);
    const data = await responses.json();
    console.log("responses:", data.publicKey)

   
        return data.publicKey
  }
  );
  const [tldsList , setTlds] = useState( async () => {
    const responses = await fetch(`https://europe2.signum.network/api?requestType=getTLDs&firstIndex=0&lastIndex=500`);
    const data = await responses.json();
    console.log("responses:", data)
    const result = data.tlds.map((response) =>{
   
        return [response.aliasName, 20000000, "Set","","","",response.alias]
     
    })

    console.log(result);
    const resultObj = result.reduce((acc, [key, price , available,id,transaction,accountId,aliasURL,alias ]) => {
        acc[key] = {"priceNQT":price, 
        "status": available,
        "aliasTransaction":transaction,
        "accountId": accountId, 
        "aliasURL":aliasURL,
        "alias": alias};
        return acc;
      }, {});
    console.log("result:", resultObj);

    return result;
  });
  const [searchTerm, setSearchTerm] = useState('');
 
  
  // console.log("check user's wallet :", Wallet);
  // console.log("Ledger: ", Ledger);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching , setIsSearching] = useState(false);
  const [buttonDisable , setButtonDisable] = useState(false);

  const validateInput = (input) => {
    const regex = /^[a-zA-Z0-9]{3,}$/;
  
    if (regex.test(input)) {
      console.log('Input is valid.');
      return true;
    } else {
      console.log('Invalid input. Input should be at least 3 characters and contain only English alphabet characters and numbers.');
      return false;
    }
  };
  const handleSearch = async (searchTerm) => {
    console.log(Wallet);
    try {

      const inputValid = validateInput(searchTerm);
      if (!inputValid) {
        
        toast({
        title: `Invalid input. Input should be at least 3 characters and contain only English alphabet characters and numbers.`,
        status: 'error',
        isClosable: true,
        })
        console.log("check user's wallet :", Wallet);
        console.log("Ledger: ", Ledger);
        setIsSearching(false);
        return false;
      }
      const response = await fetch(`https://europe2.signum.network/api?requestType=getAliases&aliasName=${searchTerm}&firstIndex=0&lastIndex=500`);
      const result = await response.json();
      const resultAlias = result.aliases;
      console.log("resultAlias",resultAlias)
      const newTldsList = await tldsList;
   
      console.log("newTldsList01:",newTldsList)
      const newTldsObject = newTldsList.reduce((acc, [key, price , available,aliasTransaction,accountId,aliasURL,alias ]) => {
        acc[key] = {"priceNQT":price, "status": available,"aliasTransaction":aliasTransaction,"accountId":accountId,"aliasURL":aliasURL,"alias":alias};
        console.log("alias", alias)
        return acc;
      }, {});

      const tldsReference = newTldsList.reduce((acc, [key, price , available,aliasTransaction,accountId,aliasURL,alias ]) => {
        acc[alias] = key;
        return acc;
      }, {});
    
      console.log("tldReference:", tldsReference)
      console.log("fetch:", resultAlias)
    //   const resultArray = [{"tlds": "signum", "priceNQT": 20000000 , "status": "sell"}];
    if (resultAlias.length > 0){
    for (let x = 0 ; x < resultAlias.length ; x++) {
        console.log(resultAlias[x]);
        if (Wallet.Extension._connection.accountId === resultAlias[x].account){
          newTldsObject[`${resultAlias[x].tldName}`].status = "Self-Hosted";
          newTldsObject[`${resultAlias[x].tldName}`].aliasTransaction = resultAlias[x].alias;
          newTldsObject[`${resultAlias[x].tldName}`].accountId = resultAlias[x].account
          newTldsObject[`${resultAlias[x].tldName}`].aliasURL = resultAlias[x].aliasURI
          newTldsObject[resultAlias[x].tldName]["priceNQT"] = parseInt(resultAlias[x].priceNQT);
        }


        if (Wallet.Extension._connection.accountId !== resultAlias[x].account) {
        if (!resultAlias[x].hasOwnProperty('priceNQT')) {
            newTldsObject[`${resultAlias[x].tldName}`].status = "Taken"; 
            newTldsObject[`${resultAlias[x].tldName}`].aliasTransaction = resultAlias[x].alias;
            newTldsObject[`${resultAlias[x].tldName}`].accountId = resultAlias[x].account
            newTldsObject[`${resultAlias[x].tldName}`].aliasURL = resultAlias[x].aliasURI
             // Output: false
          }else {
          console.log(resultAlias[x].tldName);
          newTldsObject[resultAlias[x].tldName]["priceNQT"] = parseInt(resultAlias[x].priceNQT);
          newTldsObject[`${resultAlias[x].tldName}`].status = "Buy"
          newTldsObject[`${resultAlias[x].tldName}`].aliasTransaction = resultAlias[x].alias;
          newTldsObject[`${resultAlias[x].tldName}`].accountId = resultAlias[x].account
          newTldsObject[`${resultAlias[x].tldName}`].aliasURL = resultAlias[x].aliasURI
        }
      }
    }
    const res = await fetch(`https://europe2.signum.network/api?requestType=getUnconfirmedTransactions`);
    const result = await res.json();
    if (result && result.unconfirmedTransactions.length > 0  ){
      let aliasAssignmentArray = result.unconfirmedTransactions.filter((unconfirmedTransaction) => {
      
        if (("version.AliasAssignment" in unconfirmedTransaction.attachment || "version.SubscriptionCancel" in unconfirmedTransaction.attachment || "version.AliasSell" in unconfirmedTransaction.attachment)) {

           return true
        }
       
      } )
      console.log("aliasAssignmentArray",aliasAssignmentArray);
      for (let x = 0 ; x < aliasAssignmentArray.length ; x ++){
        if (aliasAssignmentArray[x].attachment.alias === searchTerm){
            let tld = tldsReference[`${aliasAssignmentArray[x].attachment.tld}`]
            newTldsObject[`${tld}`].status = "Pending";
            
        }
        for (let z = 0 ; z < resultAlias.length ; z++) {
          console.log(resultAlias[z]);
          if (resultAlias[z].alias === aliasAssignmentArray[x].attachment.alias || resultAlias[z].alias === aliasAssignmentArray[x].attachment.alias){
            newTldsObject[`${resultAlias[z].tldName}`].status = "Pending";
          }
  
      }
      }
      console.log("find result")
    }else{
      console.log("no result")
    }
    }
    console.log("changedTldsList:", newTldsObject)
    const array = Object.entries(newTldsObject);
    const newsArray = array.filter((data) => data[0] === "signum").concat(array.filter((data) => data[0] !== "signum"))

    console.log("newArray:", newsArray )
    setSearchResults(newsArray);
    setSearchTerm(searchTerm);
    setAliasName(searchTerm);
    setIsSearching(false);
    return true;
    } catch (error) {

      console.error('Error fetching search results:', error);
      toast({
        title: `Error occurs during the searching`,
        status: 'error',
        isClosable: true,
      })
      setIsSearching(false);
    }
  };

  console.log("userInformation:", address, user,isLoggedIn, wallet, isVIP);

  return (
    <>
    <SellModal toast={toast}
    isSellModal={isSellModal} 
    setSellModal={setSellModal}
    transactionId={transactionId}
    aliasName={aliasName}
    tld={tld}
    handleSearch={handleSearch}
    />
    <EditContentModal  toast={toast} 
    isEditContentModal={isEditContentModal} 
    setEditContentModal={setEditContentModal} 
    transactionId={transactionId}
    aliasName={aliasName}
    tld={tld}
    handleSearch={handleSearch}
    />
    <SubscriptionModal  toast={toast}
    isSubscriptionModal={isSubscriptionModal} 
    setSubscriptionModal={setSubscriptionModal}
    transactionId={transactionId}
    aliasName={aliasName}
    tld={tld}
    handleSearch={handleSearch}
    />
    <TransfersModal  toast={toast}
    isTransfersModal={isTransfersModal} 
    setTransfersModal={setTransfersModal}
    transactionId={transactionId}
    aliasName={aliasName}
    tld={tld}
    handleSearch={handleSearch}
    />
    
    <div className="p-4">
            <Flex flexDir="column" mt=".5em">
        <Flex>
   
        </Flex>
        <Text fontSize="10pt">
          Connect your hosted business card or certification link to signum alias 
        </Text>
      </Flex>
      <p className="mt-4 py-2"></p>
      <AliasSearchBar onSearch={handleSearch} toast={toast} isSearching={isSearching} setIsSearching={setIsSearching}/>
      {searchResults.length > 0 ? (
        <AliasResultsList searchItem={searchTerm} 
        results={searchResults} 
        toast={toast} 
        buttonDisable={buttonDisable} 
        setButtonDisable={setButtonDisable}
        isSellModal={isSellModal} 
        setSellModal={setSellModal}
        isEditContentModal={isEditContentModal} 
        setEditContentModal={setEditContentModal}
        isSubscriptionModal={isSubscriptionModal} 
        setSubscriptionModal={setSubscriptionModal}
        isTransfersModal={isTransfersModal} 
        setTransfersModal={setTransfersModal}       
        transactionId={transactionId}
        setTransactionId={setTransactionId}
        setAliasName={setAliasName}
        setTld={setTld}
        />
      ) : (
        <p className="mt-4">No results found.</p>
      )}
    </div>
    </>
  );
};

export default Alias;
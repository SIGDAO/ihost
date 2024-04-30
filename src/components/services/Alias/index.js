import { useState, useEffect} from 'react';
import AliasSearchBar from './AliasSearchBar';
import AliasResultsList from './AliasResultsList';
import { Http, HttpClientFactory, HttpResponse, HttpMockBuilder, HttpError } from "@signumjs/http"
import { Address, LedgerClientFactory } from "@signumjs/core";
import { useAppContext } from '../../../xtWallet/hooks/useAppContext';
import {
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

  const [tldsList , setTlds] = useState( async () => {
    const responses = await fetch(`https://europe2.signum.network/api?requestType=getTLDs&firstIndex=0&lastIndex=500`);
    const data = await responses.json();
    // console.log("responses:", data)
    const result = data.tlds.map((response) =>{
   
        return [response.aliasName, 20000000, "Set","" ]
     
    } )

    console.log(result);
    const resultObj = result.reduce((acc, [key, price , available,id ]) => {
        acc[key] = {"priceNQT":price, "status": available,"id":id };
        return acc;
      }, {});
    console.log("result:", resultObj);

    return result;
  });
  const [searchTerm, setSearchTerm] = useState('');
  const { Ledger, Wallet, DAppName } = useAppContext();
  console.log("check user's wallet :", Wallet);
  console.log("Ledger: ", Ledger);
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = async (searchTerm) => {
    try {
        console.log("check user's wallet :", Wallet);
        console.log("Ledger: ", Ledger);
      const response = await fetch(`https://europe2.signum.network/api?requestType=getAliases&aliasName=${searchTerm}&firstIndex=0&lastIndex=500`);
      const result = await response.json();
      const resultAlias = result.aliases;
      const newTldsList = await tldsList;
      console.log("newTldsList:",newTldsList)
      const newTldsObject = newTldsList.reduce((acc, [key, price , available ]) => {
        acc[key] = {"priceNQT":price, "status": available};
        return acc;
      }, {});
      console.log("newTldsList:", newTldsObject)
      console.log("fetch:", resultAlias)
    //   const resultArray = [{"tlds": "signum", "priceNQT": 20000000 , "status": "sell"}];
    if (resultAlias.length > 0){
    for (let x = 0 ; x < resultAlias.length ; x++) {
        console.log(resultAlias[x]);
        if (!resultAlias[x].hasOwnProperty('priceNQT')) {
            newTldsObject[`${resultAlias[x].tldName}`].status = "Taken"; 
             break// Output: false
          }
          console.log(resultAlias[x].tldName);
          newTldsObject[resultAlias[x].tldName]["priceNQT"] = parseInt(resultAlias[x].priceNQT);
          newTldsObject[`${resultAlias[x].tldName}`].status = "Buy"
          newTldsObject[`${resultAlias[x].tldName}`].id = resultAlias[x].alias
          console.log(x);

    }
 
    }
    console.log("changedTldsList:", newTldsObject)
    const array = Object.entries(newTldsObject);
    const newsArray = array.filter((data) => data[0] === "signum").concat(array.filter((data) => data[0] !== "signum"))

    console.log("newArray:", newsArray )
    setSearchResults(newsArray);
    setSearchTerm(searchTerm);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    
    <div className="p-4">
            <Flex flexDir="column" mt=".5em">
        <Flex>
   
        </Flex>
        <Text fontSize="10pt">
          Connect your hosted business card or certification link to signum alias 
        </Text>
      </Flex>
      <p className="mt-4 py-2"></p>
      <AliasSearchBar onSearch={handleSearch} />
      {searchResults.length > 0 ? (
        <AliasResultsList searchItem={searchTerm} results={searchResults} />
      ) : (
        <p className="mt-4">No results found.</p>
      )}
    </div>
  );
};

export default Alias;
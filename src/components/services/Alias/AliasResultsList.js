// import { Tag, Card, CardHeader, CardBody, CardFooter,Heading,Stack,Text,Spacer,Button } from '@chakra-ui/react'

// const AliasResultsList = ({ results ,searchItem}) => {
//     return (
//       <div className="mt-4">
//         {results.map((result) => (
//           // <div key={result[0]} className="bg-white p-4 mb-2 shadow-md rounded-md">
//           //   <h3 className="text-xl font-bold">{result[0]}</h3>
//           //   <p>{result[1].status}</p>
//           //   <p>{result[1].priceNQT}</p>
//           // </div>
//           <Card
//   direction={{ base: 'column', sm: 'row' }}
//   overflow='hidden'
//   variant='outline'
//   maxW="1000px"
//   m={[2, 3]}
// >


//   <Stack w="1000px">
//     <CardBody>
//       <Heading size='lg'>{searchItem} 
//       <Tag size="lg" key="lg" variant='solid' colorScheme='blue'>
//       {result[0]}
//     </Tag>
//       </Heading>

//       <Text py='2'>
//       {searchItem}.{result[0]}
//       </Text>
//     </CardBody>

//     <CardFooter>
//       <Text py='2' color="blue.500">
//       {(result[1].priceNQT)/1000000000} SIGNA
//       </Text>
//         <Spacer />
//       <Button isDisabled={result[1].status === "Taken" ? true : false} variant='solid' colorScheme={result[1].status === "Taken" ? "red" : "blue"}>
//       {result[1].status === "Taken" ? "Taken" : "Buy"}
//       </Button>
//     </CardFooter>
//   </Stack>
// </Card>
//         ))}
//       </div>
//     );
//   };
  
//   export default AliasResultsList;


import { Tag, Card, CardHeader, CardBody, CardFooter,Heading,Stack,Text,Spacer,Button } from '@chakra-ui/react'
import { useAppContext } from '../../../xtWallet/hooks/useAppContext';
const AliasResultsList = ({ results ,searchItem}) => {
  const { Ledger, Wallet, DAppName } = useAppContext();
  const setAlias = async (result) => {
    //europe2.signum.network/api?requestType=buyAlias&alias=7883878831145103157&deadline=1440&feeNQT=1000000&amountNQT=50000000&publicKey=22645532422f0fcff3967591ab0288c97ba63f13956a22a5837a8855be36cf41
//europe2.signum.network/api?requestType=setAlias&aliasName=aaa&aliasURI=&deadline=1440&feeNQT=20000000&publicKey=22645532422f0fcff3967591ab0288c97ba63f13956a22a5837a8855be36cf41&tld=blockchain
   const publicKey = Wallet.Extension._connection.publicKey;
   console.log(Wallet.Extension._connection.publicKey)
    try {
    if (result[1].status === "Buy"){
      const res = await fetch(`https://europe2.signum.network/api?requestType=buyAlias&alias=${result[1].id}&deadline=1440&feeNQT=1000000&amountNQT=${result[1].priceNQT}&publicKey=${publicKey}`)
      const resultData = await res.json();
      console.log("createNftResponse: ", resultData)
      console.log("createNftResponse: ", resultData.unsignedTransactionBytes)
      const { transaction } = await Wallet.Extension.confirm(resultData.unsignedTransactionBytes)
    }
    if (result[1].status === "Set"){
      const res = await fetch(`https://europe2.signum.network/api?requestType=setAlias&aliasName=${searchItem}&aliasURI=&deadline=1440&feeNQT=20000000&publicKey=${publicKey}&tld=${result[0]}`)
      const resultData = await res.json();
      console.log("createNftResponse: ", resultData)
      console.log("createNftResponse: ", resultData.unsignedTransactionBytes)
      const { transaction } = await Wallet.Extension.confirm(resultData.unsignedTransactionBytes)
    }
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };
    return (
      <div className="mt-4">
        {results.map((result) => (
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
      {(result[1].priceNQT)/1000000000} SIGNA
      </Text>
        <Spacer />
      <Button onClick={()=> setAlias(result)} isDisabled={result[1].status === "Taken" ? true : false} variant='solid' colorScheme={result[1].status === "Taken" ? "red" : "blue"}>
      {result[1].status === "Taken" ? "Taken" : "Buy"}
      </Button>
    </CardFooter>
  </Stack>
</Card>
        ))}
      </div>
    );
  };
  
  export default AliasResultsList;
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
  Select,
} from "@chakra-ui/react";
import { CopyBlock, dracula,a11yLight } from "react-code-blocks";
import { useEffect, useState, useRef } from "react";
import { scDescriptionC,scCodeC } from "@/utils/sampleCodeC";

const SCSample = () => {
  const [isSmartC, setSmartC] = useState("SmartC");
  const [programLanguage, setProgramLanguage] = useState("c"); 
  const [selectedSC, setSelectedSC] = useState('configurableTimer');
  const [description, setDescription] = useState(scDescriptionC["configurableTimer"]);
  const [code, setCode] = useState(scCodeC['configurableTimer']);
    return (
<Flex flexDir="column" flex="1"  >

  <Flex flexDir="column" mt=".5em" w="60%" paddingBottom="20px">
        <Text fontSize="10pt" style={{paddingBottom: "10px"}}>
       Please select which smart contract compiler you use 
        </Text>
        <Select  value={isSmartC} // ...force the select's value to match the state variable...
          onChange={e => {
            setSmartC(e.target.value);
            if (e.target.value === "SmartC"){
              setProgramLanguage('c')
              setSelectedSC('configurableTimer')
              setCode(scCodeC['configurableTimer'])
              setDescription(scDescriptionC['configurableTimer'])
            }
            if (e.target.value === "SmartJ"){
              setProgramLanguage('java')
              setSelectedSC('AlwaysRunning')
              setCode(scCodeC['AlwaysRunning'])
              setDescription(scDescriptionC['AlwaysRunning'])
            }
          } }
         
       >
  <option value="SmartC">Smart C</option>
  <option value="SmartJ">Smart J</option>
  </Select>

  </Flex>

  {(isSmartC==="SmartC") ? (
  <Flex flexDir="column" mt=".5em" w="60%" paddingBottom="20px">
        <Text fontSize="10pt" style={{paddingBottom: "10px"}}>
       Please select smart Contracts' sample for reference 
        </Text>
        <Select  value={selectedSC} // ...force the select's value to match the state variable...
          onChange={e => {
            setDescription(scDescriptionC[e.target.value])
            setCode(scCodeC[e.target.value])
            setSelectedSC(e.target.value)
          } }
         
       >
          <option value='configurableTimer'>Configurable timer</option>
          <option value='liquidityPool'>Liquidity Pool</option>
          <option value='EchoAnySize'>Echo Any Size</option>
          <option value='GetATCreatorID'>Get AT Creator ID</option>
          <option value='PublicMethodsOnSmartC'>Public Methods On Smart</option>
          <option value='dropper'>Dropper</option>
          <option value='get3Random'>Get 3 Random</option>
          <option value='remoteControl'>Remote Control</option>
          <option value='GamevoteContract'>Gamevote Contract</option>
          <option value='PollContract'>Poll Contract</option>
          <option value='SolarSystemContract'>Solarsystem Contract</option>
          <option value='ZeptorlightContract'>Zeptorlight Contract</option>
  </Select>
  </Flex>
  ) : ( 
    <Flex flexDir="column" mt=".5em" w="60%" paddingBottom="20px">
    <Text fontSize="10pt" style={{paddingBottom: "10px"}}>
   Please select smart Contracts' sample for reference 
    </Text>
    <Select  value={selectedSC} // ...force the select's value to match the state variable...
      onChange={e => {
        setDescription(scDescriptionC[e.target.value])
        setCode(scCodeC[e.target.value])
        setSelectedSC(e.target.value)
      } }
     
   >
    <option value='AlwaysRunning'>AlwaysRunning</option>
  <option value='Auction'>Auction</option>
  <option value='AuctionNFT'>AuctionNFT</option>
  <option value='BurstGame'>BurstGame</option>
  <option value='Crowdfund'>Crowdfund</option>
  <option value='Echo'>Echo</option>
  <option value='Faucet'>Faucet</option>
  <option value='Forward'>Forward</option>
  <option value='ForwardMin'>ForwardMin</option>
  <option value='HappyCIP20'>HappyCIP20</option>
  <option value='HashLoop'>HashLoop</option>
  <option value='HashedTimeLock'>HashedTimeLock</option>
  <option value='Hello'>Hello</option>
  <option value='KohINoor'>KohINoor</option>
  <option value='MultiSigLock'>MultiSigLock</option>
  <option value='NFT2'>NFT2</option>
  <option value='OddsGame'>OddsGame</option>
  <option value='PaymentChannel'>PaymentChannel</option>
  <option value='ProofOfBurn'>ProofOfBurn</option>
  <option value='Refund'>Refund</option>
  <option value='Sha256_64'>Sha256_64</option>
  <option value='TXCounter'>TXCounter</option>
  <option value='TXCounter2'>TXCounter2</option>
  <option value='TipThanks'>TipThanks</option>
  <option value='UniqueToken'>UniqueToken</option>
  <option value='Will'>Will</option>
</Select>
</Flex>
  )
  }
      <VStack
              spacing="1.5em"
              p="1em"
              bg="black"
              borderRadius=".25em"
              boxShadow="0 0 2px 0 rgb(0 0 0 / 10%)"
              h="100%"
              w="80%"
              alignItems="flex-start"
              border={`1px solid white`}
             
            >
              <HStack spacing="1em" justifyContent="space-between" w="80%" >
                <HStack spacing="1em">
                  <Text>Description:</Text>
                 
                </HStack>
                
              </HStack>
                  <Text fontSize="10pt" style={{paddingBottom: "10px"}}>
                    {description}
                  </Text>
            </VStack>
         <div style={{width: "70vw", paddingTop: "2em"}}>       
         <CopyBlock
          language={programLanguage}
          text={code}
          showLineNumbers={true}
          theme={a11yLight}
          wrapLines={true}
          codeBlock
        /></div>
   
       
    </Flex >
         
    )};
  
  export default SCSample;
  
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
import { scDescription,scCode } from "@/utils/json";

const SCSample = () => {
  const [selectedSC, setSelectedSC] = useState('configurableTimer');
  const [description, setDescription] = useState(scDescription["configurableTimer"]);
  const [code, setCode] = useState(scCode['configurableTimer']);
    return (
<Flex flexDir="column" flex="1"  >
      <Flex flexDir="column" mt=".5em" w="60%" paddingBottom="20px">
        <Text fontSize="10pt" style={{paddingBottom: "10px"}}>
       Please select smart Contracts' sample for reference 
        </Text>
        <Select  value={selectedSC} // ...force the select's value to match the state variable...
          onChange={e => {
            setDescription(scDescription[e.target.value])
            setCode(scCode[e.target.value])
            setSelectedSC(e.target.value)
          } }
         
       >
  <option value='configurableTimer'>Configurable timer</option>
  <option value='liquidityPool'>Liquidity Pool</option>
  <option value='EchoAnySize'>Echo Any Size</option>
  <option value='GetATCreatorID'>Get AT Creator ID</option>
  <option value='PublicMethodsOnSmartC'>Public Methods On Smart</option>
  
</Select>

      </Flex>
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
          language={"c"}
          text={code}
          showLineNumbers={true}
          theme={a11yLight}
          wrapLines={true}
          codeBlock
        /></div>
   
       
    </Flex >
         
    )};
  
  export default SCSample;
  
// import { useEffect, useState } from "react";
// import { useUser } from "@/providers/UserProvider";
// import { Button, ButtonGroup } from '@chakra-ui/react'
// import { Http, HttpClientFactory, HttpResponse, HttpMockBuilder, HttpError } from "@signumjs/http"
// import banner from "./demoBanner.jpg"
// import pixel from "./pixel.jpg"
// import pixel2 from "./pixel2.jpg"
// import pixel3 from "./pixel3.jpg"
// import axios from "axios"
// import {isURL} from 'validator';
// import { Address, LedgerClientFactory } from "@signumjs/core";
// import {generateMasterKeys} from "@signumjs/crypto";
// import Resizer from "react-image-file-resizer"
// import {useAppContext} from '../../../xtWallet/hooks/useAppContext';
// import {Amount} from "@signumjs/util";
// import { Contract, ContractDataView } from "@signumjs/contracts";
// import {sharp_01} from "sharp";
import {
  Flex,
  Text,
  Heading,
  Link
} from "@chakra-ui/react";

const SmartC = () => {

  return (
    <>
       
        <Flex>
          <Heading
            as="h1"
            fontSize="6xl"
            bgGradient="linear(to-l, #374782, #1C97E7)"
            bgClip="text"
          >
            C Compiler for Signum - 2.3.0
          </Heading>
        </Flex>
        <Text fontSize="10pt">
        Write C smart contracts for signum network. Compile in your browser.
        </Text>
        <Text fontSize="10pt">
        Credited by <Link href="https://github.com/deleterium/SmartC/" >deleterium</Link>
          </Text>
  
      <div className="iframeDiv ">
        <iframe src="https://smartc-web-ui-ten.vercel.app/"></iframe>
        {/* <iframe allow="cross-origin-isolated" src="https://aicoder.liveandlearn.live/"></iframe> 
        <iframe src="https://aicoder-fortest.vercel.app/"></iframe>  */}
        {/* <style jsx>{`
        .iframeDiv {
          overflow: hidden;
        }
        iframe {
            width: 101%;
            height: 80vh;
        }
      `}</style> */}
  <style jsx>{`
        .iframeDiv {
          overflow: hidden;
        }
        iframe {
            width: 101%;
           height: 68vh;
        }
      `}</style>
      </div>

    </>
  )};

export default SmartC;

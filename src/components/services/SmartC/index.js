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
const SmartC = () => {
  return (
    <>
      <div className="iframeDiv">
        <iframe src="https://deleterium.info/SmartC/stable/"></iframe>
        <style jsx>{`
        .iframeDiv {
          overflow: hidden;
        }
        iframe {
            width: 101%;
            height: 75vh;
        }
      `}</style>

      </div>
    </>
  )};

export default SmartC;

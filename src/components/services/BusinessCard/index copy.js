import { useEffect, useState } from "react";
import { useUser } from "@/providers/UserProvider";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Http, HttpClientFactory, HttpResponse, HttpMockBuilder, HttpError } from "@signumjs/http"
import banner from "./demoBanner.jpg"
import pixel from "./pixel.jpg"
import pixel2 from "./pixel2.jpg"
import pixel3 from "./pixel3.jpg"
import axios from "axios"
import {isURL} from 'validator';
import { Address, LedgerClientFactory } from "@signumjs/core";
import {generateMasterKeys} from "@signumjs/crypto";
import Resizer from "react-image-file-resizer"
import {useAppContext} from '../../../xtWallet/hooks/useAppContext';
import {Amount} from "@signumjs/util";
import { Contract, ContractDataView } from "@signumjs/contracts";
import { businessCardActions } from "@/utils/json";
import {zip} from "jszip"
// import {sharp_01} from "sharp";
const BusinessCard = () => {
  let actions = businessCardActions;
  const [src, setSrc] = useState("");
  const [nftImages, setNftImages] = useState("");
  const { Ledger, Wallet, DAppName } = useAppContext();
  const [logo, setLogo] = useState();
  const [coverPhoto, setCoverPhoto] = useState();
  const [profilePhoto, setProfilePhoto] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [generPronouns, setGenderProuns] = useState();
  const [jobTitle, setJobTitle] = useState();
  const [businessName, setBusinessName] = useState();
  const [businessAddress, setBusinessAddress] = useState();
  const [businessDescription, setBusinessDescri] = useState();
  const [primaryActions, setPrimaryActions] = useState([]);
  const [filterPrimary, setFilterPrimary] = useState("");
  const [secondaryActions, setSecondaryActions] = useState([]);
  const [filterSecondary, setFilterSecondary] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [footerCredit, setFooterCredit] = useState(true);
  const [cardTheme, setCardTheme] = useState(1);
  const [headerColor, setHeaderColor] = useState("#059669");
  const [mainColor, setMainColor] = useState(`#ddd`);
  const [butttonColor, setButtonColor] = useState(`#059669`);
  const [featuredSectionColor, setfeaturedColor] = useState(`#fff`);
  const [downloadCheckItem01, setdownloadCheck01] = useState(false);
  const [downloadCheckItem02, setdownloadCheck02] = useState(false);
  const [downloadCheckItem03, setdownloadCheck03] = useState(false);
  // const downloadZip = () => {
    
  // }
  console.log(actions);
  return (
    <>
  <div
    ref="container"
    class="container relative bg-gray-900 mx-auto text-gray-100"
    style="max-width: 960px"
  >


  </div>
      {/* <div className="iframeDiv">
        <iframe src="https://business-card-shunwman.vercel.app/"></iframe>
        <style jsx>{`
        .iframeDiv {
          overflow: hidden;
        }
        iframe {
            width: 105%;
            height: 75vh;
        }
      `}</style>

      </div> */}

      <Button
        onClick={() => downloadZip()}
      >Download as ZIP 
      </ Button>
      {/* <Button
        onClick={() => pinningBanner()}
      >
        Create Demo Collection
      </Button>
      <Button
      onClick={() => uploadTheNftsOnBlockchain()}
      >
        Upload Demo NFTs
      </Button>
      <Button
      onClick={() => checkNFTsOwner()}
      >
        checkNFTsExistedInOtherCollection
      </Button> */}
    </>
  )};

export default BusinessCard;

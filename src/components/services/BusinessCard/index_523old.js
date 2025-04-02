import { useEffect, useState, useRef } from "react";
import TailwindModal from "./TailwindModal";
import {cssTheme} from '@/utils/json'
import {useAppContext} from '../../../xtWallet/hooks/useAppContext';
import { businessCardActions,svgImage } from "@/utils/json";
import JSZip from "jszip"
import {Flex,Stack, Radio, RadioGroup, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, ButtonGroup, Input, Text, Image, useDisclosure,IconButton, Toast,
  useToast,} from '@chakra-ui/react'
// for website 
import { useWebsite } from "@/providers/WebsiteProvider";
import { useUser } from "@/providers/UserProvider";
import { useWebsiteControls } from "@/hooks/services/website/useWebsiteControls";
import CreateBCWebsiteModal from "./CreateBCWebsiteModal";
import { MdAdd } from "@react-icons/all-files/md/MdAdd";
// import List from "../Website/List";
// import Settings from "./Website/Settings";

const BusinessCard = () => {
  const toast = useToast({
    title: "Error",
    status: "error",
    duration: 3000,
    isClosable: true,
    position: "bottom",
  });
  const { isLoggedIn } = useUser();
  const { getWebsites } = useWebsiteControls();
  const {
    isOpen: isCreateWebsiteOpen,
    onClose: onCreateWebsiteClose,
    onOpen: onCreateWebsiteOpen,
  } = useDisclosure();
  const { websites, isGettingWebsites, editingWebsite, setWebsites } =
  useWebsite();

  const { isOpen, onOpen, onClose } = useDisclosure()
  const style = {maxWidth: '960px'};
  const firstNameRef = useRef(undefined);
  const lastNameRef = useRef(undefined);
  const genderPronounsRef = useRef(undefined);
  const jobTitleRef = useRef(undefined);
  const businessNameRef = useRef(undefined);
  const businessAddressRef = useRef(undefined);
  const businessDescriptionRef = useRef(undefined);
  const refArr = useRef([firstNameRef,lastNameRef,genderPronounsRef,jobTitleRef,businessNameRef,businessAddressRef,businessDescriptionRef]);
  const btnRef = useRef(null)

  let actions = businessCardActions;
  const [src, setSrc] = useState("");
  const [nftImages, setNftImages] = useState("");
  const { Ledger, Wallet, DAppName } = useAppContext();
  const [logo, setLogo] = useState();
  const [coverPhoto, setCoverPhoto] = useState();
  const [profilePhoto, setProfilePhoto] = useState();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [genderPronouns, setGenderPronouns] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
  const [businessDescription, setBusinessDescri] = useState('');
  const [primaryActions, setPrimaryActions] = useState(actions.primaryActions);
  const [selectedPrimaries, setSelectedPrimary] = useState([]);
  const [filterPrimary, setFilterPrimary] = useState([]);
  const [secondaryActions, setSecondaryActions] = useState(actions.secondaryActions);
  const [filterSecondary, setFilterSecondary] = useState([]);
  const [selectedSecondaries, setSelectedSecondary] = useState([]);
  const [featuredSections, setFeatured] = useState([{ title: 'Section title', content: [], id: 1}]);
  const [footerCredit, setFooterCredit] = useState(true);
  const [cardTheme, setCardTheme] = useState(1);
  const [headerColor, setHeaderColor] = useState("#059669");
  const [mainColor, setMainColor] = useState("#ddd");
  const [butttonColor, setButtonColor] = useState("#059669");
  const [featuredSectionColor, setfeaturedColor] = useState("#fff");
  const [downloadCheckItem01, setdownloadCheck01] = useState(false);
  const [downloadCheckItem02, setdownloadCheck02] = useState(false);
  const [downloadCheckItem03, setdownloadCheck03] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen01, setModal01Open] = useState(false);
  const [modalOpen02, setModal02Open] = useState(false);
  const refContainer = useRef("feature");
  const id = useRef(2);
  const avatarUrl = useRef(
    "https://i.imgur.com/AXwrkfW.jpg"
  );
  const coverUrl = useRef(
    "https://i.imgur.com/MOOf4RV.jpg"
  );
  const profileUrl = useRef(
    "https://i.imgur.com/dTA02lI.jpg"
  );
  const updateAvatar = (imgSrc) => {
    avatarUrl.current = imgSrc;
  };
  const updateCover = (imgSrc) => {
    coverUrl.current = imgSrc;
  };
  const updateProfile = (imgSrc) => {
    profileUrl.current = imgSrc;
  };
  // const downloadZip = () => {

  // }
  const downloadPackage = () => {
        const dataSet = {}
      
        setTimeout(() => {
          const fullname = firstNameRef.current.value +" "+ lastNameRef.current.value
          const pronouns = genderPronounsRef.current.value
          const jobtitle = jobTitleRef.current.value
          const bizname = businessNameRef.current.value
          const bizaddr = businessAddressRef.current.value
          const sub = businessDescriptionRef.current.value
          // Create blobs
          let htmlContent = `<!DOCTYPE html>
          <html lang="en" style="background-color: rgb(5, 150, 105);">
          
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="robots" content="noindex, nofollow">
            <meta name="url" content="https://app.sigdao.io/">
            <meta property="og:title" content="${fullname}'s Digital Business Card">
            <meta property="twitter:title" content="${fullname}'s Digital Business Card">
            <script>
              "http" == window.location.href.substr(0, 4) && "/" != window.location.href.slice(-1) && window.location.replace(window.location.href + "/");
            </script> <!---->
            <title>${fullname}'s Digital Business Card</title>
            <style>
              #body {
                font-family: sans-serif;
              }
          
              input[type='range']::-moz-range-track {
                background: none;
              }
          
              input[type='range']::-moz-range-thumb {
                -moz-appearance: none;
                width: 1.5rem;
                height: 1.5rem;
                border-radius: 100%;
                border: none;
                background: #059669;
                z-index: 3;
                cursor: pointer;
              }
          
              input[type='range']::-webkit-slider-thumb {
                -webkit-appearance: none;
                width: 1.5rem;
                height: 1.5rem;
                border-radius: 100%;
                border: none;
                background: #059669;
                z-index: 3;
                cursor: pointer;
              }
          
              .closeColor {
                filter: invert(1)
              }
          
              .topAction {}
          
              .iconColor {
                color: #eee;
              }
          
              .cardColor {
                color: #222 !important
              }
          
              .textColor {
                color: #222 !important
              }
          
              .seekbarColor {
                background: #05966980 !important
              }
            </style> <!----> <!---->
            <link rel="stylesheet" href="./style.min.css">
          </head>
          
          <body id="body">
            <div id="modal" style="background-color: rgb(221, 221, 221); visibility: hidden; top: 2rem; opacity: 0;"><a id="close"
                class="closeColor">
                <div class="icon"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"
                    style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2">
                    <path style="fill:none" d="M0 0h24v24H0z"></path>
                    <path d="M18 6 6 18M6 6l12 12" style="fill:none;fill-rule:nonzero;stroke:#fff;stroke-width:2px"></path>
                  </svg></div>
              </a>
              <div id="keyView">
                <p class="textColor">
                  Use my public key to send me encrypted messages
                </p> <a download="" target="_blank" id="dlKey" rel="noreferrer" tabindex="-1"
                  style="background-color: rgb(5, 150, 105);" href="./joe man's public key.asc">
                  <div class="icon iconColor"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"
                      style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2">
                      <path style="fill:none" d="M0 0h24v24H0z"></path>
                      <path d="M21 15v4c0 1.097-.903 2-2 2H5c-1.097 0-2-.903-2-2v-4m4-5 5 5 5-5m-5 5V3"
                        style="fill:none;fill-rule:nonzero;stroke:#fff;stroke-width:2px"></path>
                    </svg></div> <span class="iconColor">Download Key</span>
                </a>
              </div>
              <div id="copyView">
                <p class="textColor">
                  Copy and send the URL to share my Business Card
                </p> <button id="copyURL" style="background-color: rgb(5, 150, 105);">
                  <div class="icon iconColor"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"
                      style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2">
                      <path style="fill:none" d="M0 0h24v24H0z"></path>
                      <path d="M22 11a2 2 0 0 0-2-2h-9a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9Z"
                        style="fill:none;stroke:#fff;stroke-width:2px"></path>
                      <path d="M5 15H4c-1.097 0-2-.903-2-2V4c0-1.097.903-2 2-2h9c1.097 0 2 .903 2 2v1"
                        style="fill:none;fill-rule:nonzero;stroke:#fff;stroke-width:2px"></path>
                    </svg></div> <span class="iconColor">Copy URL</span>
                </button>
              </div>
              <div id="qrView" class="textColor">
                <div id="qr"></div>
                <h3>Scan the QR Code</h3>
                <p>to view my Business Card on another device</p>
              </div>
            </div>
            <header>
              <div id="topActions" style="display: none;">
                <div><a id="share">
                    <div class="icon topAction"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"
                        style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-miterlimit:2">
                        <g>
                          <path style="fill:none" d="M0 0h24v24H0z"></path>
                          <clipPath id="a">
                            <path d="M0 0h24v24H0z"></path>
                          </clipPath>
                          <g clip-path="url(#a)">
                            <circle cx="17" cy="5" r="3" style="fill:none;stroke:#fff;stroke-width:2px"></circle>
                            <circle cx="5" cy="12" r="3" style="fill:none;stroke:#fff;stroke-width:2px"></circle>
                            <circle cx="17" cy="19" r="3" style="fill:none;stroke:#fff;stroke-width:2px"></circle>
                            <path d="m7.59 13.51 6.83 3.98m-.01-10.98-6.82 3.98" style="fill:none;stroke:#fff;stroke-width:2px">
                            </path>
                          </g>
                        </g>
                      </svg></div>
                  </a> <a id="showQR">
                    <div class="icon topAction"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"
                        style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2">
                        <path style="fill:none" d="M0 0h24v24H0z"></path>
                        <path d="M4 4h4v4H4V4Zm0 12h4v4H4v-4ZM16 4h4v4h-4V4Z" style="fill:none;stroke:#fff;stroke-width:2px">
                        </path>
                        <path d="M12 4v14c0 1.097.903 2 2 2h4c1.097 0 2-.903 2-2v-4c0-1.097-.903-2-2-2H4"
                          style="fill:none;stroke:#fff;stroke-width:2px;stroke-linejoin:miter"></path>
                        <path style="fill:#fff" d="M15 15h2v2h-2z"></path>
                      </svg></div>
                  </a></div> <!---->
              </div>
              <div class="headerImgC"><img id="cover" src="./cover.png" alt="Background Pattern"> <img id="logo"
                  src="./logo.png" alt="Logo" style="margin: 3rem 0px 6rem;"></div>
            </header>
            <main style="background-color: rgb(221, 221, 221); margin-top: 0px;"><img id="profilePhoto" src="./photo.png"
                alt="Photo">
              <div id="info" class="textColor">
                <p class="name">
                  ${fullname}
                </p>
                <p class="pronouns">
                  (${pronouns})
                </p>
                <p class="jobtitle">
                  ${jobtitle}
                </p>
                <p class="bizname">
                  ${bizname}
                </p>
                <p class="bizaddr">
                  ${bizaddr}
                </p>
              </div>
              <p class="sub textColor">
                ${sub}
              </p> 
              <div class="actions">`



              if (selectedPrimaries.length > 0){
                for (let index = 0; index < selectedPrimaries.length; index++) {
                  const element = selectedPrimaries[index];
                  if( selectedPrimaries[index].value ){
                    let href = selectedPrimaries[index].value;
                  if(selectedPrimaries[index].href){
                    href = selectedPrimaries[index].href + href;
                  }
                  htmlContent = htmlContent + `<div class="actionsC">
                  <div class="actionBtn"><a href=${href} target="_blank" rel="noopener noreferrer" aria-label=${selectedPrimaries[index].name}
                      style="background-color: rgb(5, 150, 105);">
                      <div class="icon iconColor">
                        ${svgImage[selectedPrimaries[index].icon]}
                      </div>
                    </a>
                    <p class="textColor">
                      ${selectedPrimaries[index].name}
                    </p>
                  </div>
                </div>`
              }
                }
              }
              
              htmlContent = htmlContent + `
              </div>

              <div class="actions secondary">`;
              if (selectedSecondaries.length > 0){
                for (let index = 0; index < selectedSecondaries.length; index++) {
                  const element = selectedSecondaries[index];
                  if( selectedSecondaries[index].value ){
                    let href = selectedSecondaries[index].value;
                  if(selectedSecondaries[index].href){
                    href = selectedSecondaries[index].href + href;
                  }
                  htmlContent = htmlContent + `<div class="actionsC">
                  <div class="actionBtn secBtn">
                  <a target="_blank" rel="noopener noreferrer" aria-label=${selectedSecondaries[index].name}
                      style="background: ${selectedSecondaries[index].color};" href=${href}>
                      <div class="icon">
                        ${svgImage[selectedSecondaries[index].icon]}
                      </div>
                    </a>
                    </div>
                </div>
                `
              }
                }
              }

              htmlContent = htmlContent + `</div>
              </main>
              <script>function QR8bitByte(t){this.mode=QRMode.MODE_8BIT_BYTE,this.data=t,this.parsedData=[];for(var e=0,r=this.data.length;e<r;e++){var o=[],n=this.data.charCodeAt(e);n>65536?(o[0]=240|(1835008&n)>>>18,o[1]=128|(258048&n)>>>12,o[2]=128|(4032&n)>>>6,o[3]=128|63&n):n>2048?(o[0]=224|(61440&n)>>>12,o[1]=128|(4032&n)>>>6,o[2]=128|63&n):n>128?(o[0]=192|(1984&n)>>>6,o[1]=128|63&n):o[0]=n,this.parsedData.push(o)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function QRCodeModel(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}QR8bitByte.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(var e=0,r=this.parsedData.length;e<r;e++)t.put(this.parsedData[e],8)}},QRCodeModel.prototype={addData:function(t){var e=new QR8bitByte(t);this.dataList.push(e),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var o=0;o<this.moduleCount;o++)this.modules[r][o]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=QRCodeModel.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},setupPositionProbePattern:function(t,e){for(var r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(var o=-1;o<=7;o++)e+o<=-1||this.moduleCount<=e+o||(this.modules[t+r][e+o]=0<=r&&r<=6&&(0==o||6==o)||0<=o&&o<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=o&&o<=4)},getBestMaskPattern:function(){for(var t=0,e=0,r=0;r<8;r++){this.makeImpl(!0,r);var o=QRUtil.getLostPoint(this);(0==r||t>o)&&(t=o,e=r)}return e},createMovieClip:function(t,e,r){var o=t.createEmptyMovieClip(e,r);this.make();for(var n=0;n<this.modules.length;n++)for(var i=1*n,a=0;a<this.modules[n].length;a++){var s=1*a;this.modules[n][a]&&(o.beginFill(0,100),o.moveTo(s,i),o.lineTo(s+1,i),o.lineTo(s+1,i+1),o.lineTo(s,i+1),o.endFill())}return o},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=QRUtil.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var o=t[e],n=t[r];if(null==this.modules[o][n])for(var i=-2;i<=2;i++)for(var a=-2;a<=2;a++)this.modules[o+i][n+a]=-2==i||2==i||-2==a||2==a||0==i&&0==a}},setupTypeNumber:function(t){for(var e=QRUtil.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var o=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=o}for(r=0;r<18;r++)o=!t&&1==(e>>r&1),this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=o},setupTypeInfo:function(t,e){for(var r=this.errorCorrectLevel<<3|e,o=QRUtil.getBCHTypeInfo(r),n=0;n<15;n++){var i=!t&&1==(o>>n&1);n<6?this.modules[n][8]=i:n<8?this.modules[n+1][8]=i:this.modules[this.moduleCount-15+n][8]=i}for(n=0;n<15;n++)i=!t&&1==(o>>n&1),n<8?this.modules[8][this.moduleCount-n-1]=i:n<9?this.modules[8][15-n-1+1]=i:this.modules[8][15-n-1]=i;this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var r=-1,o=this.moduleCount-1,n=7,i=0,a=this.moduleCount-1;a>0;a-=2)for(6==a&&a--;;){for(var s=0;s<2;s++)if(null==this.modules[o][a-s]){var h=!1;i<t.length&&(h=1==(t[i]>>>n&1)),QRUtil.getMask(e,o,a-s)&&(h=!h),this.modules[o][a-s]=h,-1==--n&&(i++,n=7)}if((o+=r)<0||this.moduleCount<=o){o-=r,r=-r;break}}}},QRCodeModel.PAD0=236,QRCodeModel.PAD1=17,QRCodeModel.createData=function(t,e,r){for(var o=QRRSBlock.getRSBlocks(t,e),n=new QRBitBuffer,i=0;i<r.length;i++){var a=r[i];n.put(a.mode,4),n.put(a.getLength(),QRUtil.getLengthInBits(a.mode,t)),a.write(n)}var s=0;for(i=0;i<o.length;i++)s+=o[i].dataCount;if(n.getLengthInBits()>8*s)throw new Error("code length overflow. ("+n.getLengthInBits()+">"+8*s+")");for(n.getLengthInBits()+4<=8*s&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(!1);for(;!(n.getLengthInBits()>=8*s||(n.put(QRCodeModel.PAD0,8),n.getLengthInBits()>=8*s));)n.put(QRCodeModel.PAD1,8);return QRCodeModel.createBytes(n,o)},QRCodeModel.createBytes=function(t,e){for(var r=0,o=0,n=0,i=new Array(e.length),a=new Array(e.length),s=0;s<e.length;s++){var h=e[s].dataCount,l=e[s].totalCount-h;o=Math.max(o,h),n=Math.max(n,l),i[s]=new Array(h);for(var u=0;u<i[s].length;u++)i[s][u]=255&t.buffer[u+r];r+=h;var g=QRUtil.getErrorCorrectPolynomial(l),d=new QRPolynomial(i[s],g.getLength()-1).mod(g);for(a[s]=new Array(g.getLength()-1),u=0;u<a[s].length;u++){var f=u+d.getLength()-a[s].length;a[s][u]=f>=0?d.get(f):0}}var c=0;for(u=0;u<e.length;u++)c+=e[u].totalCount;var R=new Array(c),p=0;for(u=0;u<o;u++)for(s=0;s<e.length;s++)u<i[s].length&&(R[p++]=i[s][u]);for(u=0;u<n;u++)for(s=0;s<e.length;s++)u<a[s].length&&(R[p++]=a[s][u]);return R};for(var QRMode={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},QRErrorCorrectLevel={L:1,M:0,Q:3,H:2},QRMaskPattern={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},QRUtil={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;QRUtil.getBCHDigit(e)-QRUtil.getBCHDigit(QRUtil.G15)>=0;)e^=QRUtil.G15<<QRUtil.getBCHDigit(e)-QRUtil.getBCHDigit(QRUtil.G15);return(t<<10|e)^QRUtil.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;QRUtil.getBCHDigit(e)-QRUtil.getBCHDigit(QRUtil.G18)>=0;)e^=QRUtil.G18<<QRUtil.getBCHDigit(e)-QRUtil.getBCHDigit(QRUtil.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return QRUtil.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case QRMaskPattern.PATTERN000:return(e+r)%2==0;case QRMaskPattern.PATTERN001:return e%2==0;case QRMaskPattern.PATTERN010:return r%3==0;case QRMaskPattern.PATTERN011:return(e+r)%3==0;case QRMaskPattern.PATTERN100:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case QRMaskPattern.PATTERN101:return e*r%2+e*r%3==0;case QRMaskPattern.PATTERN110:return(e*r%2+e*r%3)%2==0;case QRMaskPattern.PATTERN111:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new QRPolynomial([1],0),r=0;r<t;r++)e=e.multiply(new QRPolynomial([1,QRMath.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case QRMode.MODE_NUMBER:return 10;case QRMode.MODE_ALPHA_NUM:return 9;case QRMode.MODE_8BIT_BYTE:case QRMode.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case QRMode.MODE_NUMBER:return 12;case QRMode.MODE_ALPHA_NUM:return 11;case QRMode.MODE_8BIT_BYTE:return 16;case QRMode.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case QRMode.MODE_NUMBER:return 14;case QRMode.MODE_ALPHA_NUM:return 13;case QRMode.MODE_8BIT_BYTE:return 16;case QRMode.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,o=0;o<e;o++)for(var n=0;n<e;n++){for(var i=0,a=t.isDark(o,n),s=-1;s<=1;s++)if(!(o+s<0||e<=o+s))for(var h=-1;h<=1;h++)n+h<0||e<=n+h||0==s&&0==h||a==t.isDark(o+s,n+h)&&i++;i>5&&(r+=3+i-5)}for(o=0;o<e-1;o++)for(n=0;n<e-1;n++){var l=0;t.isDark(o,n)&&l++,t.isDark(o+1,n)&&l++,t.isDark(o,n+1)&&l++,t.isDark(o+1,n+1)&&l++,0!=l&&4!=l||(r+=3)}for(o=0;o<e;o++)for(n=0;n<e-6;n++)t.isDark(o,n)&&!t.isDark(o,n+1)&&t.isDark(o,n+2)&&t.isDark(o,n+3)&&t.isDark(o,n+4)&&!t.isDark(o,n+5)&&t.isDark(o,n+6)&&(r+=40);for(n=0;n<e;n++)for(o=0;o<e-6;o++)t.isDark(o,n)&&!t.isDark(o+1,n)&&t.isDark(o+2,n)&&t.isDark(o+3,n)&&t.isDark(o+4,n)&&!t.isDark(o+5,n)&&t.isDark(o+6,n)&&(r+=40);var u=0;for(n=0;n<e;n++)for(o=0;o<e;o++)t.isDark(o,n)&&u++;return r+Math.abs(100*u/e/e-50)/5*10}},QRMath={glog:function(t){if(t<1)throw new Error("glog("+t+")");return QRMath.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return QRMath.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},i=0;i<8;i++)QRMath.EXP_TABLE[i]=1<<i;for(i=8;i<256;i++)QRMath.EXP_TABLE[i]=QRMath.EXP_TABLE[i-4]^QRMath.EXP_TABLE[i-5]^QRMath.EXP_TABLE[i-6]^QRMath.EXP_TABLE[i-8];for(i=0;i<255;i++)QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]]=i;function QRPolynomial(t,e){if(null==t.length)throw new Error(t.length+"/"+e);for(var r=0;r<t.length&&0==t[r];)r++;this.num=new Array(t.length-r+e);for(var o=0;o<t.length-r;o++)this.num[o]=t[o+r]}function QRRSBlock(t,e){this.totalCount=t,this.dataCount=e}function QRBitBuffer(){this.buffer=[],this.length=0}QRPolynomial.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var o=0;o<t.getLength();o++)e[r+o]^=QRMath.gexp(QRMath.glog(this.get(r))+QRMath.glog(t.get(o)));return new QRPolynomial(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=QRMath.glog(this.get(0))-QRMath.glog(t.get(0)),r=new Array(this.getLength()),o=0;o<this.getLength();o++)r[o]=this.get(o);for(o=0;o<t.getLength();o++)r[o]^=QRMath.gexp(QRMath.glog(t.get(o))+e);return new QRPolynomial(r,0).mod(t)}},QRRSBlock.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],QRRSBlock.getRSBlocks=function(t,e){var r=QRRSBlock.getRsBlockTable(t,e);if(null==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var o=r.length/3,n=[],i=0;i<o;i++)for(var a=r[3*i+0],s=r[3*i+1],h=r[3*i+2],l=0;l<a;l++)n.push(new QRRSBlock(s,h));return n},QRRSBlock.getRsBlockTable=function(t,e){switch(e){case QRErrorCorrectLevel.L:return QRRSBlock.RS_BLOCK_TABLE[4*(t-1)+0];case QRErrorCorrectLevel.M:return QRRSBlock.RS_BLOCK_TABLE[4*(t-1)+1];case QRErrorCorrectLevel.Q:return QRRSBlock.RS_BLOCK_TABLE[4*(t-1)+2];case QRErrorCorrectLevel.H:return QRRSBlock.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},QRBitBuffer.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var QRCodeLimitLength=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];function QRCode(t){if(this.options={padding:4,width:256,height:256,typeNumber:4,color:"#000000",background:"#ffffff",ecl:"M"},"string"==typeof t&&(t={content:t}),t)for(var e in t)this.options[e]=t[e];if("string"!=typeof this.options.content)throw new Error("Expected 'content' as string!");if(0===this.options.content.length)throw new Error("Expected 'content' to be non-empty!");if(!(this.options.padding>=0))throw new Error("Expected 'padding' value to be non-negative!");if(!(this.options.width>0&&this.options.height>0))throw new Error("Expected 'width' or 'height' value to be higher than zero!");var r=this.options.content,o=function(t,e){for(var r=function(t){var e=encodeURI(t).toString().replace(/%[0-9a-fA-F]{2}/g,"a");return e.length+(e.length!=t?3:0)}(t),o=1,n=0,i=0,a=QRCodeLimitLength.length;i<=a;i++){var s=QRCodeLimitLength[i];if(!s)throw new Error("Content too long: expected "+n+" but got "+r);switch(e){case"L":n=s[0];break;case"M":n=s[1];break;case"Q":n=s[2];break;case"H":n=s[3];break;default:throw new Error("Unknwon error correction level: "+e)}if(r<=n)break;o++}if(o>QRCodeLimitLength.length)throw new Error("Content too long");return o}(r,this.options.ecl),n=function(t){switch(t){case"L":return QRErrorCorrectLevel.L;case"M":return QRErrorCorrectLevel.M;case"Q":return QRErrorCorrectLevel.Q;case"H":return QRErrorCorrectLevel.H;default:throw new Error("Unknwon error correction level: "+t)}}(this.options.ecl);this.qrcode=new QRCodeModel(o,n),this.qrcode.addData(r),this.qrcode.make()}QRCode.prototype.svg=function(t){var e=this.options||{},r=this.qrcode.modules;void 0===t&&(t={container:e.container||"svg"});for(var o=void 0===e.pretty||!!e.pretty,n=o?"  ":"",i=o?"":"",a=e.width,s=e.height,h=r.length,l=a/(h+2*e.padding),u=s/(h+2*e.padding),g=void 0!==e.join&&!!e.join,d=void 0!==e.swap&&!!e.swap,f=void 0===e.xmlDeclaration||!!e.xmlDeclaration,c=void 0!==e.predefined&&!!e.predefined,R=c?n+'<defs><path id="qrmodule" d="M0 0 h'+u+" v"+l+' H0 z" style="fill:'+e.color+';shape-rendering:crispEdges;" /></defs>'+i:"",p=n+'<rect x="0" y="0" width="'+a+'" height="'+s+'" style="fill:'+e.background+';shape-rendering:crispEdges;"/>'+i,m="",Q="",v=0;v<h;v++)for(var E=0;E<h;E++)if(r[E][v]){var M=E*l+e.padding*l,C=v*u+e.padding*u;if(d){var B=M;M=C,C=B}if(g){var w=l+M,L=u+C;M=Number.isInteger(M)?Number(M):M.toFixed(2),C=Number.isInteger(C)?Number(C):C.toFixed(2),w=Number.isInteger(w)?Number(w):w.toFixed(2),Q+="M"+M+","+C+" V"+(L=Number.isInteger(L)?Number(L):L.toFixed(2))+" H"+w+" V"+C+" H"+M+" Z "}else m+=c?n+'<use x="'+M.toString()+'" y="'+C.toString()+'" href="#qrmodule" />'+i:n+'<rect x="'+M.toString()+'" y="'+C.toString()+'" width="'+l+'" height="'+u+'" style="fill:'+e.color+';shape-rendering:crispEdges;"/>'+i}g&&(m=n+'<path x="0" y="0" style="fill:'+e.color+';shape-rendering:crispEdges;" d="'+Q+'" />');var T="";switch(t.container){case"svg":f&&(T+='<?xml version="1.0" standalone="yes"?>'+i),T+='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="'+a+'" height="'+s+'">'+i,T+=R+p+m,T+="</svg>";break;case"svg-viewbox":f&&(T+='<?xml version="1.0" standalone="yes"?>'+i),T+='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 '+a+" "+s+'">'+i,T+=R+p+m,T+="</svg>";break;case"g":T+='<g width="'+a+'" height="'+s+'">'+i,T+=R+p+m,T+="</g>";break;default:T+=(R+p+m).replace(/^s+/,"")}return T},QRCode.prototype.save=function(t,e){var r=this.svg();"function"!=typeof e&&(e=function(t,e){});try{require("fs").writeFile(t,r,e)}catch(t){e(t)}},"undefined"!=typeof module&&(module.exports=QRCode);</script>
              <script>let m = document.getElementById("modal"), c = document.getElementById("close"), ki = document.getElementById("keyView"), cv = document.getElementById("copyView"), curl = document.getElementById("copyURL"), qrv = document.getElementById("qrView"), qr = document.getElementById("qr"), s = document.getElementById("share"), sqr = document.getElementById("showQR"), sk = document.getElementById("showKey"); function tC(e) { "2rem" == e.style.top ? (e.style.visibility = "visible", e.style.top = "0px", e.style.opacity = 1) : (e.style.top = "2rem", e.style.opacity = 0, setTimeout(() => { e.style.visibility = "hidden" }, 200)) } function dN(e) { e.style.display = "none" } window.addEventListener("load", () => { document.querySelector("#topActions").style.display = "flex", qr.innerHTML = new QRCode({ content: window.location.href, container: "svg-viewbox", join: !0, ecl: "L", padding: 0 }).svg() }), navigator.canShare ? s.addEventListener("click", () => { navigator.share({ title: document.title, text: "You can view my Digital Business Card here:", url: window.location.href }) }) : s.addEventListener("click", () => { tC(m), cv.style.display = "flex", dN(qrv), ki && dN(ki) }), sqr.addEventListener("click", () => { tC(m), qrv.style.display = "block", dN(cv), ki && dN(ki) }), sk && sk.addEventListener("click", () => { tC(m), ki && (ki.style.display = "flex"), dN(cv), dN(qrv) }), c.addEventListener("click", () => tC(m)), curl.addEventListener("click", async () => { let e = curl.querySelectorAll(".iconColor")[1]; await navigator.clipboard.writeText(window.location.href).then(t => { e.innerText = "Copied", setTimeout(() => { e.innerText = "Copy URL" }, 1e3) }) });</script>
              <script>let pC = document.querySelectorAll(".pCtrl"), pP = document.querySelectorAll(".playPause"), srcs = document.querySelectorAll(".source"); srcs.forEach(e => { e.style.pointerEvents = "none", e.removeAttribute("controls") }), pC.forEach((e, l) => { e.style.display = "flex"; let r = e.querySelector(".currentTime"), s = e.querySelector(".seekBar"), t = e.querySelector(".playPause"), a = t.querySelector(".play"), c = t.querySelector(".pause"); srcs[l].addEventListener("timeupdate", () => { let e = srcs[l].currentTime, t = 100 / srcs[l].duration * e; s.value = t, 100 == t && (s.value = 0, a.style.display = "block", c.style.display = "none"); let o = Math.floor(e / 60), y = Math.floor(e % 60); o.toString().length < 2 && (o = "0" + o), y.toString().length < 2 && (y = "0" + y), r.value = o + ":" + y }), s.addEventListener("change", () => { srcs[l].currentTime = srcs[l].duration * (parseInt(s.value) / 100) }), t.addEventListener("click", () => { srcs[l].paused ? (srcs.forEach((e, r) => { l != r && (e.paused || e.pause()) }), pP.forEach((e, l) => { let r = e.querySelector(".play"), s = e.querySelector(".pause"); r.style.display = "block", s.style.display = "none" }), srcs[l].play(), a.style.display = "none", c.style.display = "block") : (srcs[l].pause(), c.style.display = "none", a.style.display = "block") }) });</script>
            </body>
            
            </html>`
          
          // [`<!DOCTYPE html>${el.documentElement.outerHTML}`],
          
          let html = new Blob(
            [htmlContent],
            {
              type: 'text/html',
            }
          )
          let theme = 1
          switch (theme) {
            case 1:
              theme = cssTheme.Theme1
              break
            case 2:
              theme = cssTheme.Theme2
              break
            case 3:
              theme = cssTheme.Theme3
              break
          }
          let css = new Blob([theme], {
            type: 'text/css',
          })
          // let vCard = new Blob([this.$refs.vCard.$refs.vCard.innerText], {
          //   type: 'text/plain',
          // })
          let guide = new Blob(
            [
              '<html><head><meta http-equiv="refresh" content="0; url=https://enbizcard.vishnuraghav.com/hosting-guide" /></head></html>',
            ],
            {
              type: 'text/html',
            }
          )
          let qrScript = new Blob([`function QR8bitByte(t){this.mode=QRMode.MODE_8BIT_BYTE,this.data=t,this.parsedData=[];for(var e=0,r=this.data.length;e<r;e++){var o=[],n=this.data.charCodeAt(e);n>65536?(o[0]=240|(1835008&n)>>>18,o[1]=128|(258048&n)>>>12,o[2]=128|(4032&n)>>>6,o[3]=128|63&n):n>2048?(o[0]=224|(61440&n)>>>12,o[1]=128|(4032&n)>>>6,o[2]=128|63&n):n>128?(o[0]=192|(1984&n)>>>6,o[1]=128|63&n):o[0]=n,this.parsedData.push(o)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function QRCodeModel(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}QR8bitByte.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(var e=0,r=this.parsedData.length;e<r;e++)t.put(this.parsedData[e],8)}},QRCodeModel.prototype={addData:function(t){var e=new QR8bitByte(t);this.dataList.push(e),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var o=0;o<this.moduleCount;o++)this.modules[r][o]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=QRCodeModel.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},setupPositionProbePattern:function(t,e){for(var r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(var o=-1;o<=7;o++)e+o<=-1||this.moduleCount<=e+o||(this.modules[t+r][e+o]=0<=r&&r<=6&&(0==o||6==o)||0<=o&&o<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=o&&o<=4)},getBestMaskPattern:function(){for(var t=0,e=0,r=0;r<8;r++){this.makeImpl(!0,r);var o=QRUtil.getLostPoint(this);(0==r||t>o)&&(t=o,e=r)}return e},createMovieClip:function(t,e,r){var o=t.createEmptyMovieClip(e,r);this.make();for(var n=0;n<this.modules.length;n++)for(var i=1*n,a=0;a<this.modules[n].length;a++){var s=1*a;this.modules[n][a]&&(o.beginFill(0,100),o.moveTo(s,i),o.lineTo(s+1,i),o.lineTo(s+1,i+1),o.lineTo(s,i+1),o.endFill())}return o},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=QRUtil.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var o=t[e],n=t[r];if(null==this.modules[o][n])for(var i=-2;i<=2;i++)for(var a=-2;a<=2;a++)this.modules[o+i][n+a]=-2==i||2==i||-2==a||2==a||0==i&&0==a}},setupTypeNumber:function(t){for(var e=QRUtil.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var o=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=o}for(r=0;r<18;r++)o=!t&&1==(e>>r&1),this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=o},setupTypeInfo:function(t,e){for(var r=this.errorCorrectLevel<<3|e,o=QRUtil.getBCHTypeInfo(r),n=0;n<15;n++){var i=!t&&1==(o>>n&1);n<6?this.modules[n][8]=i:n<8?this.modules[n+1][8]=i:this.modules[this.moduleCount-15+n][8]=i}for(n=0;n<15;n++)i=!t&&1==(o>>n&1),n<8?this.modules[8][this.moduleCount-n-1]=i:n<9?this.modules[8][15-n-1+1]=i:this.modules[8][15-n-1]=i;this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var r=-1,o=this.moduleCount-1,n=7,i=0,a=this.moduleCount-1;a>0;a-=2)for(6==a&&a--;;){for(var s=0;s<2;s++)if(null==this.modules[o][a-s]){var h=!1;i<t.length&&(h=1==(t[i]>>>n&1)),QRUtil.getMask(e,o,a-s)&&(h=!h),this.modules[o][a-s]=h,-1==--n&&(i++,n=7)}if((o+=r)<0||this.moduleCount<=o){o-=r,r=-r;break}}}},QRCodeModel.PAD0=236,QRCodeModel.PAD1=17,QRCodeModel.createData=function(t,e,r){for(var o=QRRSBlock.getRSBlocks(t,e),n=new QRBitBuffer,i=0;i<r.length;i++){var a=r[i];n.put(a.mode,4),n.put(a.getLength(),QRUtil.getLengthInBits(a.mode,t)),a.write(n)}var s=0;for(i=0;i<o.length;i++)s+=o[i].dataCount;if(n.getLengthInBits()>8*s)throw new Error("code length overflow. ("+n.getLengthInBits()+">"+8*s+")");for(n.getLengthInBits()+4<=8*s&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(!1);for(;!(n.getLengthInBits()>=8*s||(n.put(QRCodeModel.PAD0,8),n.getLengthInBits()>=8*s));)n.put(QRCodeModel.PAD1,8);return QRCodeModel.createBytes(n,o)},QRCodeModel.createBytes=function(t,e){for(var r=0,o=0,n=0,i=new Array(e.length),a=new Array(e.length),s=0;s<e.length;s++){var h=e[s].dataCount,l=e[s].totalCount-h;o=Math.max(o,h),n=Math.max(n,l),i[s]=new Array(h);for(var u=0;u<i[s].length;u++)i[s][u]=255&t.buffer[u+r];r+=h;var g=QRUtil.getErrorCorrectPolynomial(l),d=new QRPolynomial(i[s],g.getLength()-1).mod(g);for(a[s]=new Array(g.getLength()-1),u=0;u<a[s].length;u++){var f=u+d.getLength()-a[s].length;a[s][u]=f>=0?d.get(f):0}}var c=0;for(u=0;u<e.length;u++)c+=e[u].totalCount;var R=new Array(c),p=0;for(u=0;u<o;u++)for(s=0;s<e.length;s++)u<i[s].length&&(R[p++]=i[s][u]);for(u=0;u<n;u++)for(s=0;s<e.length;s++)u<a[s].length&&(R[p++]=a[s][u]);return R};for(var QRMode={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},QRErrorCorrectLevel={L:1,M:0,Q:3,H:2},QRMaskPattern={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},QRUtil={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;QRUtil.getBCHDigit(e)-QRUtil.getBCHDigit(QRUtil.G15)>=0;)e^=QRUtil.G15<<QRUtil.getBCHDigit(e)-QRUtil.getBCHDigit(QRUtil.G15);return(t<<10|e)^QRUtil.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;QRUtil.getBCHDigit(e)-QRUtil.getBCHDigit(QRUtil.G18)>=0;)e^=QRUtil.G18<<QRUtil.getBCHDigit(e)-QRUtil.getBCHDigit(QRUtil.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return QRUtil.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case QRMaskPattern.PATTERN000:return(e+r)%2==0;case QRMaskPattern.PATTERN001:return e%2==0;case QRMaskPattern.PATTERN010:return r%3==0;case QRMaskPattern.PATTERN011:return(e+r)%3==0;case QRMaskPattern.PATTERN100:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case QRMaskPattern.PATTERN101:return e*r%2+e*r%3==0;case QRMaskPattern.PATTERN110:return(e*r%2+e*r%3)%2==0;case QRMaskPattern.PATTERN111:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new QRPolynomial([1],0),r=0;r<t;r++)e=e.multiply(new QRPolynomial([1,QRMath.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case QRMode.MODE_NUMBER:return 10;case QRMode.MODE_ALPHA_NUM:return 9;case QRMode.MODE_8BIT_BYTE:case QRMode.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case QRMode.MODE_NUMBER:return 12;case QRMode.MODE_ALPHA_NUM:return 11;case QRMode.MODE_8BIT_BYTE:return 16;case QRMode.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case QRMode.MODE_NUMBER:return 14;case QRMode.MODE_ALPHA_NUM:return 13;case QRMode.MODE_8BIT_BYTE:return 16;case QRMode.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,o=0;o<e;o++)for(var n=0;n<e;n++){for(var i=0,a=t.isDark(o,n),s=-1;s<=1;s++)if(!(o+s<0||e<=o+s))for(var h=-1;h<=1;h++)n+h<0||e<=n+h||0==s&&0==h||a==t.isDark(o+s,n+h)&&i++;i>5&&(r+=3+i-5)}for(o=0;o<e-1;o++)for(n=0;n<e-1;n++){var l=0;t.isDark(o,n)&&l++,t.isDark(o+1,n)&&l++,t.isDark(o,n+1)&&l++,t.isDark(o+1,n+1)&&l++,0!=l&&4!=l||(r+=3)}for(o=0;o<e;o++)for(n=0;n<e-6;n++)t.isDark(o,n)&&!t.isDark(o,n+1)&&t.isDark(o,n+2)&&t.isDark(o,n+3)&&t.isDark(o,n+4)&&!t.isDark(o,n+5)&&t.isDark(o,n+6)&&(r+=40);for(n=0;n<e;n++)for(o=0;o<e-6;o++)t.isDark(o,n)&&!t.isDark(o+1,n)&&t.isDark(o+2,n)&&t.isDark(o+3,n)&&t.isDark(o+4,n)&&!t.isDark(o+5,n)&&t.isDark(o+6,n)&&(r+=40);var u=0;for(n=0;n<e;n++)for(o=0;o<e;o++)t.isDark(o,n)&&u++;return r+Math.abs(100*u/e/e-50)/5*10}},QRMath={glog:function(t){if(t<1)throw new Error("glog("+t+")");return QRMath.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return QRMath.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},i=0;i<8;i++)QRMath.EXP_TABLE[i]=1<<i;for(i=8;i<256;i++)QRMath.EXP_TABLE[i]=QRMath.EXP_TABLE[i-4]^QRMath.EXP_TABLE[i-5]^QRMath.EXP_TABLE[i-6]^QRMath.EXP_TABLE[i-8];for(i=0;i<255;i++)QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]]=i;function QRPolynomial(t,e){if(null==t.length)throw new Error(t.length+"/"+e);for(var r=0;r<t.length&&0==t[r];)r++;this.num=new Array(t.length-r+e);for(var o=0;o<t.length-r;o++)this.num[o]=t[o+r]}function QRRSBlock(t,e){this.totalCount=t,this.dataCount=e}function QRBitBuffer(){this.buffer=[],this.length=0}QRPolynomial.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var o=0;o<t.getLength();o++)e[r+o]^=QRMath.gexp(QRMath.glog(this.get(r))+QRMath.glog(t.get(o)));return new QRPolynomial(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=QRMath.glog(this.get(0))-QRMath.glog(t.get(0)),r=new Array(this.getLength()),o=0;o<this.getLength();o++)r[o]=this.get(o);for(o=0;o<t.getLength();o++)r[o]^=QRMath.gexp(QRMath.glog(t.get(o))+e);return new QRPolynomial(r,0).mod(t)}},QRRSBlock.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],QRRSBlock.getRSBlocks=function(t,e){var r=QRRSBlock.getRsBlockTable(t,e);if(null==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var o=r.length/3,n=[],i=0;i<o;i++)for(var a=r[3*i+0],s=r[3*i+1],h=r[3*i+2],l=0;l<a;l++)n.push(new QRRSBlock(s,h));return n},QRRSBlock.getRsBlockTable=function(t,e){switch(e){case QRErrorCorrectLevel.L:return QRRSBlock.RS_BLOCK_TABLE[4*(t-1)+0];case QRErrorCorrectLevel.M:return QRRSBlock.RS_BLOCK_TABLE[4*(t-1)+1];case QRErrorCorrectLevel.Q:return QRRSBlock.RS_BLOCK_TABLE[4*(t-1)+2];case QRErrorCorrectLevel.H:return QRRSBlock.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},QRBitBuffer.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var QRCodeLimitLength=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];function QRCode(t){if(this.options={padding:4,width:256,height:256,typeNumber:4,color:"#000000",background:"#ffffff",ecl:"M"},"string"==typeof t&&(t={content:t}),t)for(var e in t)this.options[e]=t[e];if("string"!=typeof this.options.content)throw new Error("Expected 'content' as string!");if(0===this.options.content.length)throw new Error("Expected 'content' to be non-empty!");if(!(this.options.padding>=0))throw new Error("Expected 'padding' value to be non-negative!");if(!(this.options.width>0&&this.options.height>0))throw new Error("Expected 'width' or 'height' value to be higher than zero!");var r=this.options.content,o=function(t,e){for(var r=function(t){var e=encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return e.length+(e.length!=t?3:0)}(t),o=1,n=0,i=0,a=QRCodeLimitLength.length;i<=a;i++){var s=QRCodeLimitLength[i];if(!s)throw new Error("Content too long: expected "+n+" but got "+r);switch(e){case"L":n=s[0];break;case"M":n=s[1];break;case"Q":n=s[2];break;case"H":n=s[3];break;default:throw new Error("Unknwon error correction level: "+e)}if(r<=n)break;o++}if(o>QRCodeLimitLength.length)throw new Error("Content too long");return o}(r,this.options.ecl),n=function(t){switch(t){case"L":return QRErrorCorrectLevel.L;case"M":return QRErrorCorrectLevel.M;case"Q":return QRErrorCorrectLevel.Q;case"H":return QRErrorCorrectLevel.H;default:throw new Error("Unknwon error correction level: "+t)}}(this.options.ecl);this.qrcode=new QRCodeModel(o,n),this.qrcode.addData(r),this.qrcode.make()}QRCode.prototype.svg=function(t){var e=this.options||{},r=this.qrcode.modules;void 0===t&&(t={container:e.container||"svg"});for(var o=void 0===e.pretty||!!e.pretty,n=o?"  ":"",i=o?"\r\n":"",a=e.width,s=e.height,h=r.length,l=a/(h+2*e.padding),u=s/(h+2*e.padding),g=void 0!==e.join&&!!e.join,d=void 0!==e.swap&&!!e.swap,f=void 0===e.xmlDeclaration||!!e.xmlDeclaration,c=void 0!==e.predefined&&!!e.predefined,R=c?n+'<defs><path id="qrmodule" d="M0 0 h'+u+" v"+l+' H0 z" style="fill:'+e.color+';shape-rendering:crispEdges;" /></defs>'+i:"",p=n+'<rect x="0" y="0" width="'+a+'" height="'+s+'" style="fill:'+e.background+';shape-rendering:crispEdges;"/>'+i,m="",Q="",v=0;v<h;v++)for(var E=0;E<h;E++)if(r[E][v]){var M=E*l+e.padding*l,C=v*u+e.padding*u;if(d){var B=M;M=C,C=B}if(g){var w=l+M,L=u+C;M=Number.isInteger(M)?Number(M):M.toFixed(2),C=Number.isInteger(C)?Number(C):C.toFixed(2),w=Number.isInteger(w)?Number(w):w.toFixed(2),Q+="M"+M+","+C+" V"+(L=Number.isInteger(L)?Number(L):L.toFixed(2))+" H"+w+" V"+C+" H"+M+" Z "}else m+=c?n+'<use x="'+M.toString()+'" y="'+C.toString()+'" href="#qrmodule" />'+i:n+'<rect x="'+M.toString()+'" y="'+C.toString()+'" width="'+l+'" height="'+u+'" style="fill:'+e.color+';shape-rendering:crispEdges;"/>'+i}g&&(m=n+'<path x="0" y="0" style="fill:'+e.color+';shape-rendering:crispEdges;" d="'+Q+'" />');var T="";switch(t.container){case"svg":f&&(T+='<?xml version="1.0" standalone="yes"?>'+i),T+='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="'+a+'" height="'+s+'">'+i,T+=R+p+m,T+="</svg>";break;case"svg-viewbox":f&&(T+='<?xml version="1.0" standalone="yes"?>'+i),T+='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 '+a+" "+s+'">'+i,T+=R+p+m,T+="</svg>";break;case"g":T+='<g width="'+a+'" height="'+s+'">'+i,T+=R+p+m,T+="</g>";break;default:T+=(R+p+m).replace(/^\s+/,"")}return T},QRCode.prototype.save=function(t,e){var r=this.svg();"function"!=typeof e&&(e=function(t,e){});try{require("fs").writeFile(t,r,e)}catch(t){e(t)}},"undefined"!=typeof module&&(module.exports=QRCode);`], {
            type: 'application/javascript',
          })

          // Prepare files
          let username = fullname
          let zip = new JSZip()
          zip.folder(username).file('logo.png', logo)
          zip.folder(username).file('cover.png', coverPhoto)
          zip.folder(username).file('photo.png', profilePhoto)
          zip.folder(username).file('index.html', html)
          zip.folder(username).file('style.min.css', css)
          zip.folder(username).file('qrcode.min.js', qrScript)
          zip.file('Hosting-Guide.html', guide)
          zip
            .generateAsync({
              type: 'blob',
            })
            .then(function (zip) {
              saveAs(zip, `${fullname}'s Digital Business Card.zip`)
            })
        }, 250)
      }

  function handleDelete(primaryAction,index){
    setSelectedPrimary([...selectedPrimaries, primaryAction])
    const newPrimary = [...primaryActions]
    newPrimary.splice(index, 1)
    setPrimaryActions(newPrimary)
  }

  function handleReleaseAction(selectedPrimary, index){
    setPrimaryActions([...primaryActions,  selectedPrimary])
    const newSelected =  [...selectedPrimaries]
    newSelected.splice(index, 1 )
    setSelectedPrimary(newSelected)

  }

  function handlePrimaryActionChange(e,selected, index){

    let newSelected = [...selectedPrimaries];
    newSelected[index].value = e.target.value;
    setSelectedPrimary(newSelected);
 
  }
  function handleAddActions(secondaryAction,index){
    setSelectedSecondary([...selectedSecondaries, secondaryAction])
    const newSecondary = [...secondaryActions]
    newSecondary.splice(index, 1)
    setSecondaryActions(newSecondary)
  }
  function handleReleaseSecondAction(selectedSecondary, index){
    setSecondaryActions([...secondaryActions,  selectedSecondary])
    const newSelected =  [...selectedSecondaries]
    newSelected.splice(index, 1 )
    setSelectedSecondary(newSelected)

  }
  function handleSecondaryActionChange(e,selected, index){

    let newSelected = [...selectedSecondaries];
    newSelected[index].value = e.target.value;
  }
  function addNewSection(){
    setFeatured([...featuredSections,{ title: 'Section title', content: [], id: id.current}]);
    id.current++;
  }
  function deleteSection(id) {
    // const newSections =  [...featuredSections];
    // newSections.splice(index, 1 );
    setFeatured(featuredSections.filter(section => section.id !== id));
  }
  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }
  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  function handleGenderPronounsChange(event) {
    setGenderPronouns(event.target.value);
  }
  function handleJobTitleChange(event) {
    setJobTitle(event.target.value);
  }
  function handleBusinessNameChange(event) {
    setBusinessName(event.target.value);
  }
  function handleBusinessAddressChange(event) {
    setBusinessAddress(event.target.value);
  }
  function handleBusinessDescriptionChange(event) {
    setBusinessDescri(event.target.value);
  }
  return (
    <div className="businessCard">

      <div className="mx-auto text-gray-100" style={{ style }}>

        {/*Step1  background&icon */}
        <div className="md:grid md:grid-cols-2">
          <div className="px-4">
            <div id="step-1" className="pt-8">
              <h2 className="font-extrabold text-2xl">Header attachments</h2>
              <div className="stepC">
             <div className="py-4"> <label  >Add logo <span className="text-gray-400">- suggested format: svg, png or gif</span></label></div>
             <div className="relative">
               <Button colorScheme='teal' size='md' onClick={()=> {setModalOpen(true);setModal01Open(false);setModal02Open(false);}}>
               Add logo
              </Button>
              <img
              
               src={avatarUrl.current}
              alt="Avatar"
              className="mt-4 w-[150px] h-[150px] border-2 border-gray-400"
              />
              {modalOpen && (
              <TailwindModal
              updateAvatar={updateAvatar}
              updateLogo={setLogo}
              closeModal={() => setModalOpen(false)}
              aspectRatio={1}
              minDimension={300}
              />
              )}
              </div>
                
              <div className="py-4"> <label >Add  cover photo <span className="text-gray-400">- suggested format: svg, jpeg, png or gif</span></label></div>
              <div className="relative">
              <Button colorScheme='teal' size='md'  onClick={()=> {setModalOpen(false); setModal01Open(true);setModal02Open(false);}} >
               Add cover photo
              </Button>
              {modalOpen01 && (
              <TailwindModal
              updateAvatar={updateCover}
              updateLogo={setCoverPhoto}
              closeModal={() => setModal01Open(false)}
              aspectRatio={3/2}
              minDimension={600}
              />
              )}
              </div>
              <img
               src={coverUrl.current}
              alt="Cover"
              className="mt-4 w-[450px] h-[300px] border-2 border-gray-400"
              />
                <p className="mt-6 border p-4 rounded border-gray-700 text-gray-400">
                  Recommended cover photo size is 960 x 640 pixels, with an aspect
                  ratio of 3:2
                </p>
              </div>

            </div>
            {/* step 2 */}
            <div id="step-2" className="mt-16">
              <h2 className="font-extrabold text-2xl">Contact information</h2>
              <div className="py-4"> <label  > Add profile photo <span className="text-gray-400">- suggested format: jpeg, png or gif</span></label></div>
              <Button colorScheme='teal' size='md' onClick={()=> {setModalOpen(false);setModal01Open(false);setModal02Open(true);}}>
               Add profile photo
              </Button>
              {modalOpen02 && (
              <TailwindModal
              updateAvatar={updateProfile}
              updateLogo={setProfilePhoto}
              closeModal={() => setModal02Open(false)}
              aspectRatio={1}
              minDimension={300}
              fileName={""}
              />
              )}
              <img
               src={profileUrl.current}
              alt="Profile"
              className="mt-4 w-[150px] h-[150px] border-2 border-gray-400"
              />

              <p className="mt-6 border p-4 rounded border-gray-700 text-gray-400">
                Recommended profile photo size is 320 x 320 pixels, with an aspect
                ratio of 1:1
              </p>
              <div className="stepC mt-6 grid grid-cols-2 gap-4">
                <div>
                  <label className="ml-4">First name</label>
                  <input
                    id="firstname"
                    name="firstname"
                    spellCheck="false"
                    type="text"
                    autoCapitalize="words"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    ref={firstNameRef}
                    className="
                  mt-2
                  px-4
                  w-full
                  h-12
                  bg-black
                  rounded
                  border border-transparent
                  transition-colors
                  duration-200
                  focus:outline-none focus:border-gray-600
                  hover:border-gray-600
                "
                  />
                </div>
                <div>
                  <label  className="ml-4">Last name</label>
                  <input
                    id="lastname"
                    name="lastname"
                    spellCheck="false"
                    type="text"
                    autoCapitalize="words"
                    value={lastName}
                    onChange={handleLastNameChange}
                    ref={lastNameRef}
                    className="
                  mt-2
                  px-4
                  w-full
                  h-12
                  bg-black
                  rounded
                  border border-transparent
                  transition-colors
                  duration-200
                  focus:outline-none focus:border-gray-600
                  hover:border-gray-600
                "
                  />
                </div>
              </div>
              <div className="stepC mt-6">
                <label  className="ml-4">Gender pronouns</label>
                <input
                  id="pronouns"
                  name="pronouns"
                  spellCheck="false"
                  type="text"
                  ref={genderPronounsRef}
                  value={genderPronouns}
                  onChange={handleGenderPronounsChange}
                  placeholder="He/Him/His"
                  autoCapitalize="words"
                  className="
                mt-2
                px-4
                w-full
                h-12
                bg-black
                placeholder-gray-600
                rounded
                border border-transparent
                transition-colors
                duration-200
                focus:outline-none focus:border-gray-600
                hover:border-gray-600
              "
                />
              </div>
              <div className="stepC mt-6">
                <label  className="ml-4">Job title</label>
                <input
                  id="job-title"
                  name="jobTitle"
                  type="text"
                  ref={jobTitleRef}
                  value={jobTitle}
                  onChange={handleJobTitleChange}
                  spellCheck="true"
                  autoCapitalize="words"
                  className="
                mt-2
                px-4
                w-full
                h-12
                bg-black
                rounded
                border border-transparent
                transition-colors
                duration-200
                focus:outline-none focus:border-gray-600
                hover:border-gray-600
              "
                />
              </div>
              <div className="stepC mt-6">
                <label className="ml-4">Business name</label>
                <input
                  id="business-name"
                  name="businessName"
                  spellCheck="false"
                  type="text"
                  ref={businessNameRef}
                  value={businessName}
                  onChange={handleBusinessNameChange}
                  autoCapitalize="words"
                  className="
                mt-2
                px-4
                w-full
                h-12
                bg-black
                rounded
                border border-transparent
                transition-colors
                duration-200
                focus:outline-none focus:border-gray-600
                hover:border-gray-600
              "
                />
              </div>
              <div className="stepC mt-6">
                <label  className="ml-4">Business address</label>
                <textarea
                  id="business-address"
                  name="businessAddress"
                  ref={businessAddressRef}
                  value={businessAddress}
                  onChange={handleBusinessAddressChange}
                  className="
                block
                mt-2
                px-4
                py-3
                w-full
                bg-black
                rounded
                border border-transparent
                transition-colors
                duration-200
                focus:outline-none focus:border-gray-600
                resize-none
                hover:border-gray-600
              "
                  rows="4"
                ></textarea>
              </div>
              <div className="stepC mt-6">
                <label className="ml-4"
                >Business description
                </label>
                <textarea
                  id="business-description"
                  name="businessDescription"
                  ref={businessDescriptionRef}
                  value={businessDescription}
                  onChange={handleBusinessDescriptionChange}
                  className="
                block
                mt-2
                px-4
                py-3
                w-full
                bg-black
                rounded
                border border-transparent
                transition-colors
                duration-200
                focus:outline-none focus:border-gray-600
                resize-none
                hover:border-gray-600
              "
                  rows="4"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        {/* step 3 */}
       
  
        
        <h2 className="font-extrabold text-2xl mt-6">Primary actions</h2>
           
          <div
            className="mt-6 border-gray-800"
          // :className="{ 'border-t pt-6': secondaryActions.length }"
          >
              {selectedPrimaries.map((selectedPrimary, index) => (
            <div className="stepC actions" key={index}>
              <div className="flex">
              <div className="flex-initial w-100">
              <button
                className="
                  p-3
                  flex
                  items-center
                  shrink-0
                  rounded
                  hover:brightness-125
                  focus:brightness-125
                  transition-all
                  duration-200
                  focus:outline-none
                "
                onClick={() =>handleReleaseAction(selectedPrimary , index)}
              >
                <div
                  className="w-6 h-6 mr-3 shrink-0"
                >
                <div className="icon">
        <svg
          viewBox="0 0 24 24"
          xmlns="https://www.w3.org/2000/svg"
          xmlSpace="preserve"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 2
          }}
        >
          <path style={{ fill: "none" }} d="M0 0h24v24H0z" />
          <path
            d="M18 6 6 18M6 6l12 12"
            style={{
              fill: "none",
              fillRule: "nonzero",
              stroke: "#fff",
              strokeWidth: 2
            }}
          />
        </svg>
      </div>

                </div>
        
                <p
                  className="whitespace-nowrap"
             
                >
                  {selectedPrimary.name}
           
                </p>
              </button>
              </div>
              <div className="flex-initial w-80 p-3
                  flex
                  items-center
                  shrink-0
                  rounded
                  hover:brightness-125
                  focus:brightness-125
                  transition-all
                  duration-200
                  focus:outline-none">
                 <input type="text" name="price" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-10 text-white-900 ring-1 ring-inset ring-gray-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder={selectedPrimary.placeholder}
                  value={selectedPrimary.value} 
                  onChange={event => handlePrimaryActionChange(event, selectedPrimary, index)}
                 />
              </div>
              </div>
            </div>
            ))}

            <p className="p-3" v-if="filteredSecondaryActions.length < 1">
              Can't find an action? Please 
              <a
                href="#help"
                className="
                  cursor-pointer
                  underline
                  font-extrabold
                  text-emerald-600
                  hover:text-emerald-500
                  focus:text-emerald-500
                  transition-colors
                  duration-200
                  px-2
                "
              >leave your suggestion</a>
              on Telegram
            </p>
           
            <div className="stepC actions" >
            {primaryActions.map((primaryAction, index) => (
              <button
                className="
                  p-3
                  flex
                  items-center
                  shrink-0
                  rounded
                  hover:brightness-125
                  focus:brightness-125
                  transition-all
                  duration-200
                  focus:outline-none
                  text-sm
                  
                "
                style={{backgroundColor:  "rgb(5, 150, 105)"}}
                key={index}
                onClick={() =>handleDelete(primaryAction, index)}
              >
                <div
                  className="w-6 h-6 mr-3 shrink-0"
                >
                <Image
                src={`/assets/icons/${primaryAction.icon}.svg`}
                alt={primaryAction.icon}
                />
                </div>
                <p
                  className="whitespace-nowrap"
                >
                  {primaryAction.name}

                </p>
              </button> 
              ))}
            </div>
           
          </div>
          
        {/* step 4 */}
        <div id="step-4" className="mt-16">
          <h2 className="font-extrabold text-2xl">Secondary actions</h2>
         
           <div
            className="mt-6 border-gray-800"
  
          >
                        {selectedSecondaries.map((selectedSecondary, index) => (
            <div className="stepC actions" key={index}>
              <div className="flex">
              <div className="flex-initial w-100">
              <button
                className="
                  p-3
                  flex
                  items-center
                  shrink-0
                  rounded
                  hover:brightness-125
                  focus:brightness-125
                  transition-all
                  duration-200
                  focus:outline-none
                "
                onClick={() =>handleReleaseSecondAction(selectedSecondary , index)}
              >
                <div
                  className="w-6 h-6 mr-3 shrink-0"
                >
                      <svg
          viewBox="0 0 24 24"
          xmlns="https://www.w3.org/2000/svg"
          xmlSpace="preserve"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 2
          }}
        >
          <path style={{ fill: "none" }} d="M0 0h24v24H0z" />
          <path
            d="M18 6 6 18M6 6l12 12"
            style={{
              fill: "none",
              fillRule: "nonzero",
              stroke: "#fff",
              strokeWidth: 2
            }}
          />
        </svg>
                </div>
                <p
                  className="whitespace-nowrap"
              
                >
                  {selectedSecondary.name}
      
                </p>
              </button>
              </div>
              <div className="flex-initial w-80 p-3
                  flex
                  items-center
                  shrink-0
                  rounded
                  hover:brightness-125
                  focus:brightness-125
                  transition-all
                  duration-200
                  focus:outline-none">
                 <input type="text" name="price" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-10 text-white-900 ring-1 ring-inset ring-gray-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder={selectedSecondary.placeholder}
                  value={selectedSecondary.value} 
                  onChange={event => handleSecondaryActionChange(event, selectedSecondary, index)}
                 />
              </div>
              </div>
            </div>
            ))}
         
            <p className="p-3" v-if="filteredSecondaryActions.length < 1">
              Can't find an action? Please
              <a
                href="#help"
                className="
                  cursor-pointer
                  underline
                  font-extrabold
                  text-emerald-600
                  hover:text-emerald-500
                  focus:text-emerald-500
                  transition-colors
                  duration-200
                  px-2
                "
              >leave your suggestion</a
              >
              on Telegram
            </p>

            
            <div className="stepC actions" >
              {secondaryActions.map((secondaryAction, index) => (
              <button

                className="
                  p-3
                  flex
                  items-center
                  shrink-0
                  rounded
                  hover:brightness-125
                  focus:brightness-125
                  transition-all
                  duration-200
                  focus:outline-none
                "
                style={{backgroundColor:  "rgb(5, 150, 105)"}}
                key={index}
                onClick={() =>handleAddActions(secondaryAction, index)}
              
              >
                <div
                  className="w-6 h-6 mr-3 shrink-0"
              
                >
                  <Image
                  src={`/assets/icons/${secondaryAction.icon}.svg`}
                   alt="My SVG"
                />
                </div>
                <p
                  className="whitespace-nowrap text-sm"
      
                >
                  {secondaryAction.name}
     
                </p>
              </button> 
              ))}
            </div>
           
          </div>
   
        </div>
       

      <div id="step-9" className="mt-16">
      <Button
         onClick={() => {
         downloadPackage()
        }}
      >Download as ZIP 
      </ Button>
      <Button
            leftIcon={<MdAdd />}
            color="white"
            variant="primary"
            size="sm"
            onClick={() => {
              const freeWebsiteCount =
                websites?.filter((web) => web.isPremium === false)?.length || 0;
              //Not to send error message after business card created 
              // if (freeWebsiteCount >= 1) {
              //   toast({
              //     description:
              //       "You have used your 1 Free minting website. Upgrade your subscription to create more.",
              //   });
              //   return;
              // }
              onCreateWebsiteOpen();
            }}
          >
            Create Website
          </Button>
     
      <div className="fixed bottom-0 right-0 w-16 h-16 mr-12 mb-8 cursor-pointer" id="box_btn">
      <Button
          size='lg'
          colorScheme='teal'
         ref={btnRef} onClick={onOpen}
      >Preview
      </ Button>
      </div>
      </div>
     
      <CreateBCWebsiteModal
        isOpen={isCreateWebsiteOpen}
        onClose={onCreateWebsiteClose}
        profilePhoto={profilePhoto}
        businessCardLogo={logo}
        coverPhoto={coverPhoto}
        firstName={firstName}
        lastName={lastName}
        genderPronouns={genderPronouns}
        jobTitle={jobTitle}
        businessName={businessName}
        businessAddress={businessAddress}
        businessDescription={businessDescription}
        selectedPrimaries={selectedPrimaries}
        selectedSecondaries={selectedSecondaries}
      />
       
      <Modal
      blockScrollOnMount={false} 
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior='inside'
        id="businessCardModal"
        closeOnOverlayClick={false}
        trapFocus={false}
        autoFocus={false}
        
      >
        {/* <ModalOverlay /> */}
        <ModalContent>
          <ModalHeader>Preview</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <>

{/*preview*/}
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n    #body {\n      font-family: sans-serif;\n    }\n\n    input[type='range']::-moz-range-track {\n      background: none;\n    }\n\n    input[type='range']::-moz-range-thumb {\n      -moz-appearance: none;\n      width: 1.5rem;\n      height: 1.5rem;\n      border-radius: 100%;\n      border: none;\n      background: #059669;\n      z-index: 3;\n      cursor: pointer;\n    }\n\n    input[type='range']::-webkit-slider-thumb {\n      -webkit-appearance: none;\n      width: 1.5rem;\n      height: 1.5rem;\n      border-radius: 100%;\n      border: none;\n      background: #059669;\n      z-index: 3;\n      cursor: pointer;\n    }\n\n    .closeColor {\n      filter: invert(1)\n    }\n\n    .topAction {}\n\n    .iconColor {\n      color: #eee;\n    }\n\n    .cardColor {\n      color: #222 !important\n    }\n\n    .textColor {\n      color: #222 !important\n    }\n\n    .seekbarColor {\n      background: #05966980 !important\n    }\n  "
                }}
              />{" "}
              {/**/} {/**/}
              <div id="previewBodyT1"  style={{
                  backgroundColor: "rgb(5, 150, 105)"
                }}>
              <div
                id="modal"
                style={{
                  backgroundColor: "rgb(221, 221, 221)",
                  visibility: "hidden",
                  top: "2rem",
                  opacity: 0
                }}
              >
                <a id="close" className="closeColor">
                  <div className="icon">
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlSpace="preserve"
                      style={{
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeMiterlimit: 2
                      }}
                    >
                      <path style={{ fill: "none" }} d="M0 0h24v24H0z" />
                      <path
                        d="M18 6 6 18M6 6l12 12"
                        style={{
                          fill: "none",
                          fillRule: "nonzero",
                          stroke: "#fff",
                          strokeWidth: 2
                        }}
                      />
                    </svg>
                  </div>
                </a>
                <div id="keyView">
                  <p className="textColor">
                    Use my public key to send me encrypted messages
                  </p>{" "}
                  <a
                    download=""
                    target="_blank"
                    id="dlKey"
                    rel="noreferrer"
                    tabIndex={-1}
                    style={{ backgroundColor: "rgb(5, 150, 105)" }}
                    href="./sdsf dfd's public key.asc"
                  >
                    <div className="icon iconColor">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlSpace="preserve"
                        style={{
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 2
                        }}
                      >
                        <path style={{ fill: "none" }} d="M0 0h24v24H0z" />
                        <path
                          d="M21 15v4c0 1.097-.903 2-2 2H5c-1.097 0-2-.903-2-2v-4m4-5 5 5 5-5m-5 5V3"
                          style={{
                            fill: "none",
                            fillRule: "nonzero",
                            stroke: "#fff",
                            strokeWidth: 2
                          }}
                        />
                      </svg>
                    </div>{" "}
                    <span className="iconColor">Download Key</span>
                  </a>
                </div>
                <div id="copyView">
                  <p className="textColor">
                    Copy and send the URL to share my Business Card
                  </p>{" "}
                  <button id="copyURL" style={{ backgroundColor: "rgb(5, 150, 105)" }}>
                    <div className="icon iconColor">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlSpace="preserve"
                        style={{
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 2
                        }}
                      >
                        <path style={{ fill: "none" }} d="M0 0h24v24H0z" />
                        <path
                          d="M22 11a2 2 0 0 0-2-2h-9a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9Z"
                          style={{ fill: "none", stroke: "#fff", strokeWidth: 2 }}
                        />
                        <path
                          d="M5 15H4c-1.097 0-2-.903-2-2V4c0-1.097.903-2 2-2h9c1.097 0 2 .903 2 2v1"
                          style={{
                            fill: "none",
                            fillRule: "nonzero",
                            stroke: "#fff",
                            strokeWidth: 2
                          }}
                        />
                      </svg>
                    </div>{" "}
                    <span className="iconColor">Copy URL</span>
                  </button>
                </div>
                <div id="qrView" className="textColor">
                  <div id="qr" />
                  <h3>Scan the QR Code</h3>
                  <p>to view my Business Card on another device</p>
                </div>
              </div>
              <header>
                <div id="topActions" style={{ display: "none" }}>
                  <div>
                    <a id="share">
                      <div className="icon topAction">
                        <svg
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlSpace="preserve"
                          style={{
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            strokeLinecap: "round",
                            strokeMiterlimit: 2
                          }}
                        >
                          <g>
                            <path style={{ fill: "none" }} d="M0 0h24v24H0z" />
                            <clipPath id="a">
                              <path d="M0 0h24v24H0z" />
                            </clipPath>
                            <g clipPath="url(#a)">
                              <circle
                                cx={17}
                                cy={5}
                                r={3}
                                style={{ fill: "none", stroke: "#fff", strokeWidth: 2 }}
                              />
                              <circle
                                cx={5}
                                cy={12}
                                r={3}
                                style={{ fill: "none", stroke: "#fff", strokeWidth: 2 }}
                              />
                              <circle
                                cx={17}
                                cy={19}
                                r={3}
                                style={{ fill: "none", stroke: "#fff", strokeWidth: 2 }}
                              />
                              <path
                                d="m7.59 13.51 6.83 3.98m-.01-10.98-6.82 3.98"
                                style={{ fill: "none", stroke: "#fff", strokeWidth: 2 }}
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </a>{" "}
                    <a id="showQR">
                      <div className="icon topAction">
                        <svg
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlSpace="preserve"
                          style={{
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeMiterlimit: 2
                          }}
                        >
                          <path style={{ fill: "none" }} d="M0 0h24v24H0z" />
                          <path
                            d="M4 4h4v4H4V4Zm0 12h4v4H4v-4ZM16 4h4v4h-4V4Z"
                            style={{ fill: "none", stroke: "#fff", strokeWidth: 2 }}
                          ></path>
                          <path
                            d="M12 4v14c0 1.097.903 2 2 2h4c1.097 0 2-.903 2-2v-4c0-1.097-.903-2-2-2H4"
                            style={{
                              fill: "none",
                              stroke: "#fff",
                              strokeWidth: 2,
                              strokeLinejoin: "miter"
                            }}
                          />
                          <path style={{ fill: "#fff" }} d="M15 15h2v2h-2z" />
                        </svg>
                      </div>
                    </a>
                  </div>{" "}
                  {/**/}
                </div>
                <div className="headerImgC">
                  {coverPhoto&&<img id="cover" src={coverUrl.current} alt="Background Pattern" />}{" "}
                { logo&&<img
                    id="logo"
                    src={avatarUrl.current}
                    alt="Logo"
                    style={{ margin: "3rem 0px 6rem" }}
                  /> }
                </div>
              </header>
              <main style={{ backgroundColor: "rgb(221, 221, 221)", marginTop: 0 }}>
                {profilePhoto&&<img id="profilePhoto" src={profileUrl.current} alt="Photo" />}
                <div id="info" className="textColor">
                  <p className="name">{firstName&&lastName ? (`${firstName} ${lastName}`) : ("Your Name")  }</p>
                  <p className="pronouns">{genderPronouns ? (genderPronouns) : (`Gender Pronouns`)}</p>
                  <p className="jobtitle">{jobTitle ? (jobTitle) : (`Job Title`)}</p>
                  <p className="bizname">{businessName ? (businessName) : (`Business Name`)}</p>
                  <p className="bizaddr">{businessAddress ? (businessAddress) : (`Business Address`)}</p>
                </div>
                <p className="sub textColor">{businessDescription ? (businessDescription) : (`Business Description`)}</p>{" "}
             
                 
                <div className="actions">
               {selectedPrimaries.map((selectedPrimary, index) => (
                  <div className="actionsC" key={index}>
                    <div className="actionBtn">
                      <a
                        href={selectedPrimary.href ?  (selectedPrimary.href + selectedPrimary.value) : (selectedPrimary.value)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={selectedPrimary.name}
                        style={{ backgroundColor: "rgb(5, 150, 105)" }}
                      >
                        <div className="icon iconColor">
                        <Image
                src={`/assets/icons/${selectedPrimary.icon}.svg`}
                alt={selectedPrimary.icon}
                />
                        </div>
                      </a>
                      <p className="textColor">{selectedPrimary.name}</p>
                    </div>
                  </div>
                   ))}

                </div>
                <div className="actions secondary">

                {selectedSecondaries.map((selectedSecondary, index) => (
                  <div className="actionsC" key={index}>
                    <div className="actionBtn secBtn">
                      <a
                        href={selectedSecondary.href ?  (selectedSecondary.href + selectedSecondary.value) : (selectedSecondary.value)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={selectedSecondary.name}
                        style={{ background: selectedSecondary.color }}
                      >
                        <div className="icon">
                        <Image
                        src={`/assets/icons/${selectedSecondary.icon}.svg`}
                        alt={selectedSecondary.icon}
                        />
                        </div>
                      </a>
                    </div>
                  </div> ))}

                </div>
              </main>
              </div>
              </>
            {/* Preview */}
          </ModalBody>
          <ModalFooter>
            <Button  onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </div>
      {/* step 9 */}
      {/* step 11  */}
    </div>
  )

};

export default BusinessCard;

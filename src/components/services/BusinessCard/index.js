import { useEffect, useState, useRef } from "react";
import TailwindModal from "./TailwindModal";
import Featured from "./freatured";
import { useUser } from "@/providers/UserProvider";
import { Http, HttpClientFactory, HttpResponse, HttpMockBuilder, HttpError } from "@signumjs/http"
import banner from "./demoBanner.jpg"
import pixel from "./pixel.jpg"
import pixel2 from "./pixel2.jpg"
import pixel3 from "./pixel3.jpg"
import {qrCode} from '@/utils/json'
import {cssTheme} from '@/utils/json'
import axios from "axios"
import {isURL} from 'validator';
import { Address, LedgerClientFactory } from "@signumjs/core";
import {generateMasterKeys} from "@signumjs/crypto";
import Resizer from "react-image-file-resizer"
import {useAppContext} from '../../../xtWallet/hooks/useAppContext';
import {Amount} from "@signumjs/util";
import { Contract, ContractDataView } from "@signumjs/contracts";
import { businessCardActions } from "@/utils/json";
import JSZip from "jszip"
import {Stack, Radio, RadioGroup, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, ButtonGroup, Input, Text, Image, useDisclosure,IconButton,} from '@chakra-ui/react'
// import {sharp_01} from "sharp";
const BusinessCard = () => {
  const style = {maxWidth: '960px'};
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
  const refContainer = useRef("feature");
  const id = useRef(2);
  const avatarUrl = useRef(
    "https://avatarfiles.alphacoders.com/161/161002.jpg"
  );

  const updateAvatar = (imgSrc) => {
    avatarUrl.current = imgSrc;
  };
  // const downloadZip = () => {
    
  // }
  const resizeNft01 = (file) => new Promise(resolve => {
    Resizer.imageFileResizer(file, 480, 480, "PNG", 50, 50,
      uri => {
        resolve(uri);
      }, 'blob');
  });
  const resizeNft02 = (file) => new Promise(resolve => {
    Resizer.imageFileResizer(file, 480, 480, "PNG", 50, 0,
      uri => {
        resolve(uri);
      }, 'blob');
  });
const handleImageChange = async (e) => {
    if (e.target.files) {
      console.log(e.target.files);
      // let thumbPixel = await resizeNft01(nftImages02);
      // thumbPixel = new File([thumbPixel], "000002.1-thumb.webp", { type: "image/webp" })
      // console.log("thumbPixel.name: ", thumbPixel.name)
      // let socialPixel = await resizeNft02(nftImages02);
      // socialPixel = new File([socialPixel], "000002.1-social.webp", { type: "image/webp" })
      // console.log("socialPixel: ", socialPixel.name)
      // let originalPixel = new File([nftImages02], "000002.1.jpg", { type: "image/jpeg" })
      // console.log("originalPixel: ", originalPixel.name)
      // let files = [originalPixel, socialPixel, thumbPixel];
      const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
      let socialFilesArray = [];
      let newFilesArray = [];
      let thumbFilesArray = [];
      for (let x = 0; x < filesArray.length; x++) {
        let arrayNum = filesArray.length - 1;
        let imageNum = '000000' ;
        imageNum = imageNum.slice(0, 6 - x.toString().length).concat('',x)

        let blob = await fetch(filesArray[x]).then(r => r.blob());
        let newFile = new File([blob], `${imageNum}.1.jpg`, { type: "image/jpeg" })
        let thumbPixel = await resizeNft01(blob);
        let thumbFile = new File([thumbPixel], `${imageNum}.1-thumb.jpg`, { type: "image/webp" })
        let socialPixel = await resizeNft02(blob);
        let socialFile = new File([socialPixel], `${imageNum}.1-social.jpg`, { type: "image/webp" })
        newFilesArray.push(newFile);
        socialFilesArray.push(socialFile);
        thumbFilesArray.push(thumbFile);

      }

      console.log(newFilesArray);
      console.log("filesArray: ", filesArray);

      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      setSelectedUploads((prevImages) => prevImages.concat(newFilesArray));
      setSelectedSocial((prevImages) => prevImages.concat(socialFilesArray));
      setSelectedThumb((prevImages) => prevImages.concat(thumbFilesArray));
      console.log("new File:", selectedFiles);
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };

  const downloadPackage = () => {
    
      
        setTimeout(() => {
          // take the preview div to outerHTML
          // let el = new DOMParser().parseFromString(
          //   this.$refs.html.$refs.html.outerHTML,
          //   'text/html'
          // )
  
          // Inject stylesheets
          // let styleLink = document.createElement('link')
          // styleLink.rel = 'stylesheet'
          // styleLink.href = './style.min.css'
          // el.querySelector('head').appendChild(styleLink)

          // Inject qrcode script
          // let qrcode = document.createElement('script')
          // qrcode.src = './qrcode.min.js'
          // el.querySelector('body').appendChild(qrcode)

          // Inject general script
          // let modals = document.createElement('script')
          // modals.innerText =
          //   'let m=document.getElementById("modal"),c=document.getElementById("close"),ki=document.getElementById("keyView"),cv=document.getElementById("copyView"),curl=document.getElementById("copyURL"),qrv=document.getElementById("qrView"),qr=document.getElementById("qr"),s=document.getElementById("share"),sqr=document.getElementById("showQR"),sk=document.getElementById("showKey");function tC(e){"2rem"==e.style.top?(e.style.visibility="visible",e.style.top="0px",e.style.opacity=1):(e.style.top="2rem",e.style.opacity=0,setTimeout(()=>{e.style.visibility="hidden"},200))}function dN(e){e.style.display="none"}window.addEventListener("load",()=>{document.querySelector("#topActions").style.display="flex",qr.innerHTML=new QRCode({content:window.location.href,container:"svg-viewbox",join:!0,ecl:"L",padding:0}).svg()}),navigator.canShare?s.addEventListener("click",()=>{navigator.share({title:document.title,text:"You can view my Digital Business Card here:",url:window.location.href})}):s.addEventListener("click",()=>{tC(m),cv.style.display="flex",dN(qrv),ki&&dN(ki)}),sqr.addEventListener("click",()=>{tC(m),qrv.style.display="block",dN(cv),ki&&dN(ki)}),sk&&sk.addEventListener("click",()=>{tC(m),ki&&(ki.style.display="flex"),dN(cv),dN(qrv)}),c.addEventListener("click",()=>tC(m)),curl.addEventListener("click",async()=>{let e=curl.querySelectorAll(".iconColor")[1];await navigator.clipboard.writeText(window.location.href).then(t=>{e.innerText="Copied",setTimeout(()=>{e.innerText="Copy URL"},1e3)})});'
          // el.querySelector('body').appendChild(modals)

          // Inject media script
          // let mediaHandler = document.createElement('script')
          // mediaHandler.innerText =
          //   'let pC=document.querySelectorAll(".pCtrl"),pP=document.querySelectorAll(".playPause"),srcs=document.querySelectorAll(".source");srcs.forEach(e=>{e.style.pointerEvents="none",e.removeAttribute("controls")}),pC.forEach((e,l)=>{e.style.display="flex";let r=e.querySelector(".currentTime"),s=e.querySelector(".seekBar"),t=e.querySelector(".playPause"),a=t.querySelector(".play"),c=t.querySelector(".pause");srcs[l].addEventListener("timeupdate",()=>{let e=srcs[l].currentTime,t=100/srcs[l].duration*e;s.value=t,100==t&&(s.value=0,a.style.display="block",c.style.display="none");let o=Math.floor(e/60),y=Math.floor(e%60);o.toString().length<2&&(o="0"+o),y.toString().length<2&&(y="0"+y),r.value=o+":"+y}),s.addEventListener("change",()=>{srcs[l].currentTime=srcs[l].duration*(parseInt(s.value)/100)}),t.addEventListener("click",()=>{srcs[l].paused?(srcs.forEach((e,r)=>{l!=r&&(e.paused||e.pause())}),pP.forEach((e,l)=>{let r=e.querySelector(".play"),s=e.querySelector(".pause");r.style.display="block",s.style.display="none"}),srcs[l].play(),a.style.display="none",c.style.display="block"):(srcs[l].pause(),c.style.display="none",a.style.display="block")})});'
          // if (this.featured.length)
          //   el.querySelector('body').appendChild(mediaHandler)

          // Inject tracking scripts
          // let tracker = this.getTrackingCode()
          // while (tracker.firstChild) el.head.appendChild(tracker.firstChild)
          let name = "Test"
          // Create blobs
          
          // [`<!DOCTYPE html>${el.documentElement.outerHTML}`],
          let html = new Blob(
            [`<!DOCTYPE html>`],
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
          let qrScript = new Blob([qrCode.script], {
            type: 'application/javascript',
          })

          // Prepare files
          let username = "thisusername"
          let zip = new JSZip()
          zip.folder(username).file('index.html', html)
          zip.folder(username).file('style.min.css', css)
          zip.folder(username).file('qrcode.min.js', qrScript)
          zip.file('Hosting-Guide.html', guide)

          // Image attachments
          // for (const key in this.images) {
          //   if (this.images[key].url) {
          //     zip
          //       .folder(username)
          //       .file(
          //         `${key}.${this.images[key].ext}`,
          //         this.images[key].resized
          //       )
          //   }
          // }

          // Featured content
          // let hasFeaturedContent = this.featured.filter(
          //   (e) => e.content.length
          // ).length
          // if (hasFeaturedContent) {
          //   this.featured.forEach((item) => {
          //     item.content.forEach((item) => {
          //       if (item.contentType == 'media') {
          //         zip
          //           .folder(username)
          //           .folder('media')
          //           .file(`${this.getTitle(item.title)}.${item.ext}`, item.file)
          //         if (item.type.match(/music|document/gi)) {
          //           if (!item.info) {
          //             zip
          //               .folder(username)
          //               .folder('media')
          //               .file(
          //                 `${this.getTitle(item.title)}.${item.coverExt}`,
          //                 item.cover
          //               )
          //           }
          //         }
          //       } else if (item.contentType == 'product' && item.image) {
          //         zip
          //           .folder(username)
          //           .folder('media')
          //           .file(
          //             `${this.getTitle(item.image.title)}.${item.image.ext}`,
          //             item.image.file
          //           )
          //       }
          //     })
          //   })
          // }

          //  Public key
          // let name = this.getFullname
          // if (this.pubKeyIsValid) {
          //   zip
          //     .folder(username)
          //     .file(`${name}'s public key.asc`, this.genInfo.key)
          // }

          // VCARD
          // zip.folder(username).file(`${username}.vcf`, vCard)

          // Final ZIP file
          zip
            .generateAsync({
              type: 'blob',
            })
            .then(function (zip) {
              saveAs(zip, `${name}'s Digital Business Card.zip`)
            })
        }, 250)
      }
    
  console.log(cssTheme);
  console.log(qrCode);
  console.log(actions);
  console.log(primaryActions);
  // return (
  //   <>
  // <div
  //   class="container relative bg-gray-900 mx-auto text-gray-100"
  //   style="max-width: 960px"
  // >
  //      <div class="px-4">
  //     <div class="flex items-start justify-between pt-8">
  //       <div
  //         class="logo w-24"
  //         title="EnBizCard - An Open-Source Digital Business Card Generator"
  //       ></div>
  //       <a
  //         class="
  //           font-extrabold
  //           tracking-wide
  //           leading-none
  //           shrink-0
  //           p-3
  //           border-2
  //           text-white
  //           border-gray-700
  //           rounded
  //           hover:bg-gray-700
  //           focus:bg-gray-700
  //           transition-colors
  //           duration-200
  //         "
  //         href="https://www.vishnuraghav.com/donate"
  //         target="_blank"

  //         >Donate</a>
  //     </div>
  //     <h1
  //       class="
  //         text-3xl
  //         md:text-5xl
  //         font-extrabold
  //         mt-24
  //         md:mt-48 md:leading-tight
  //       "
  //     >
  //       Why Pay When Your Website Can Host Your Digital Business Cards for Free!
  //     </h1>
  //     <p class="mt-8 text-lg md:text-xl w-full md:w-3/4 text-gray-200">
  //       EnBizCard helps you create beautiful, responsive HTML&#8209;based
  //       digital business cards that can be hosted on your website.
  //     </p>
  //     <ul class="mt-4 text-gray-400">
  //       <li>-&ensp;No sign-up required</li>
  //       <li>-&ensp;100% free and open-source</li>
  //       <li>-&ensp;No user tracking and data collection</li>
  //       <li>-&ensp;Works offline</li>
  //     </ul>
  //     <div class="mt-4 flex flex-wrap items-center">
  //       <button
  //         class="
  //           font-extrabold
  //           leading-none
  //           text-lg
  //           tracking-wide
  //           select-none
  //           shrink-0
  //           p-5
  //           mt-2
  //           mr-2
  //           text-white
  //           bg-emerald-600
  //           rounded
  //           hover:bg-emerald-500
  //           focus:bg-emerald-500
  //           transition-colors
  //           duration-200
  //           focus:outline-none
  //         "
        
  //       >
  //         Create your own
  //       </button>
  //       <a
  //         class="
  //           font-extrabold
  //           leading-none
  //           text-lg
  //           tracking-wide
  //           shrink-0
  //           p-5
  //           mt-2
  //           text-white
  //           bg-gray-700
  //           rounded
  //           hover:bg-gray-600
  //           focus:bg-gray-600
  //           transition-colors
  //           duration-200
  //         "
  //         href="/demo"
  //         target="_blank"
  //         >View demo</a>
  //     </div>
  //     <p class="mt-6">
  //       Read the
  //       <div
  //         class="
  //           cursor-pointer
  //           underline
  //           font-extrabold
  //           text-emerald-600
  //           hover:text-emerald-500
  //           focus:text-emerald-500
  //           transition-colors
  //           duration-200
  //         "
  //         >Hosting Guide</div>
  //     </p>
  //   </div>

  // </div>
  //     {/* <div className="iframeDiv">
  //       <iframe src="https://business-card-shunwman.vercel.app/"></iframe>
  //       <style jsx>{`
  //       .iframeDiv {
  //         overflow: hidden;
  //       }
  //       iframe {
  //           width: 105%;
  //           height: 75vh;
  //       }
  //     `}</style>

  //     </div> */}

  //     <Button
  //       onClick={() => downloadZip()}
  //     >Download as ZIP 
  //     </ Button>
  //     {/* <Button
  //       onClick={() => pinningBanner()}
  //     >
  //       Create Demo Collection
  //     </Button>
  //     <Button
  //     onClick={() => uploadTheNftsOnBlockchain()}
  //     >
  //       Upload Demo NFTs
  //     </Button>
  //     <Button
  //     onClick={() => checkNFTsOwner()}
  //     >
  //       checkNFTsExistedInOtherCollection
  //     </Button> */}
  //   </>
  // )
  function addProductToFeatured(){
    
  }
  function addTextToFeatured(){
    
  }
  function addEmbedCodeToFeatured(){

  }
  function addMediaToFeatured(){

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
    console.log(e);
    console.log(selected);
    console.log(index);
    let newSelected = [...selectedPrimaries];
    newSelected[index].value = e.target.value;
    setSelectedPrimary(newSelected);
    console.log(selectedPrimaries);
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
    console.log(e);
    console.log(selected);
    console.log(index);
    let newSelected = [...selectedSecondaries];
    newSelected[index].value = e.target.value;
    setSelectedSecondary(newSelected);
    console.log(selectedSecondaries);
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
  return (
    <>
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

      </div>

      <Button
        onClick={() => connectToPinata(pinningKey)}
      >Connect to Pinata
      </ Button>
      <Button
        onClick={() => pinningBanner()}
      >
        Create Demo Collection
      </Button>
      <Button
      onClick={() => uploadTheNftsOnBlockchain()}
      >
        Upload Demo NFTs
      </Button> */}
      <div className="mx-auto text-gray-100" style={{ style }}>
        {/* <div className="px-4">

          <div class="flex items-start justify-between pt-8">
            <div
              class="logo w-24"
              v-html="require(`~/assets/icons/logo.svg?include`)"
              title="EnBizCard - An Open-Source Digital Business Card Generator"
            ></div>
            <a
              class="
            font-extrabold
            tracking-wide
            leading-none
            shrink-0
            p-3
            border-2
            text-white
            border-gray-700
            rounded
            hover:bg-gray-700
            focus:bg-gray-700
            transition-colors
            duration-200
          "
              href="https://www.vishnuraghav.com/donate"
              target="_blank"
              rel="noreferrer"
            >Donate</a>

          </div>
          <h1
            class="
          text-3xl
          md:text-5xl
          font-extrabold
          mt-24
          md:mt-48 md:leading-tight
        "
          >
            Why Pay When Your Website Can Host Your Digital Business Cards for Free!
          </h1>
          <p class="mt-8 text-lg md:text-xl w-full md:w-3/4 text-gray-200">
            EnBizCard helps you create beautiful, responsive HTML&#8209;based
            digital business cards that can be hosted on your website.
          </p>
          <ul class="mt-4 text-gray-400">
            <li>-&ensp;No sign-up required</li>
            <li>-&ensp;100% free and open-source</li>
            <li>-&ensp;No user tracking and data collection</li>
            <li>-&ensp;Works offline</li>
          </ul>
          <div class="mt-4 flex flex-wrap items-center">
            <button
              class="
            font-extrabold
            leading-none
            text-lg
            tracking-wide
            select-none
            shrink-0
            p-5
            mt-2
            mr-2
            text-white
            bg-emerald-600
            rounded
            hover:bg-emerald-500
            focus:bg-emerald-500
            transition-colors
            duration-200
            focus:outline-none"
            >
              Create your own
            </button>
            <a
              class="
            font-extrabold
            leading-none
            text-lg
            tracking-wide
            shrink-0
            p-5
            mt-2
            text-white
            bg-gray-700
            rounded
            hover:bg-gray-600
            focus:bg-gray-600
            transition-colors
            duration-200
          "
              href="/demo"
              target="_blank"
            >View demo</a>
          </div>
          <p class="mt-6">
            Read the
            <a
              to="/hosting-guide"
              class="
            cursor-pointer
            underline
            font-extrabold
            text-emerald-600
            hover:text-emerald-500
            focus:text-emerald-500
            transition-colors
            duration-200
          "
            >Hosting Guide</a>
          </p>
        </div> */}
        {/*Step1  background&icon */}
        <div className="md:grid md:grid-cols-2">
          <div className="px-4 mt-32">
            <div id="step-1" className="pt-8">
              <h2 className="font-extrabold text-2xl">Header attachments</h2>
              <div className="stepC">
             <div class="py-4"> <label  >Add logo <span className="text-gray-400">- suggested format: svg, png or gif</span></label></div>
             <div className="relative">
               <Button colorScheme='teal' size='md' onClick={()=> {setModalOpen(true)}}>
               Add logo
              </Button>
              <img
               src={avatarUrl.current}
              alt="Avatar"
              className="w-[150px] h-[150px] rounded-full border-2 border-gray-400"
              />
              {modalOpen && (
              <TailwindModal
              updateAvatar={updateAvatar}
              updateLogo={setLogo}
              closeModal={() => setModalOpen(false)}
              />
              )}
              </div>
              <Input width="95px" type="file" name="images" accept="image/png, image/svg, image/gif"
                placeholder="addIcon"
                onChange={handleImageChange}
                sx={{
                "::file-selector-button": {
                height: 10,
                padding: 0,
                mr: 4,
                background: "none",
                border: "none",
                fontWeight: "bold",
                
                },
                }}/>

              <div class="py-4"> <label >Add  cover photo <span className="text-gray-400">- suggested format: svg, jpeg, png or gif</span></label></div>
              <Button colorScheme='teal' size='md'>
               Add cover photo
              </Button>
              <Input width="95px" type="file" name="images" accept="image/png, image/svg, image/gif, image/jpeg"
                placeholder="addIcon"
                sx={{
                "::file-selector-button": {
                height: 10,
                padding: 0,
                mr: 4,
                background: "none",
                border: "none",
                fontWeight: "bold",
                },
                }}/>
              
                {/* <Attachment
          
              type="logo"
       
              label="Add logo"
              description="suggested format: svg, png or gif"
          
            />
            <Attachment
       
              type="cover"
         
              label="Add cover photo"
              description="suggested format: svg, jpeg, png or gif"

            />  */}
                <p className="mt-6 border p-4 rounded border-gray-700 text-gray-400">
                  Recommended cover photo size is 960 x 640 pixels, with an aspect
                  ratio of 3:2
                </p>
              </div>

            </div>
            {/* step 2 */}
            <div id="step-2" class="mt-16">
              <h2 class="font-extrabold text-2xl">Contact information</h2>
              {/* <Attachment
            type="photo"
            label="Add profile photo"
            description="suggested format: jpeg, png or gif"
          /> */}
              <div class="py-4"> <label  > Add profile photo <span className="text-gray-400">- suggested format: jpeg, png or gif</span></label></div>
              <Button colorScheme='teal' size='md' >
               Add profile photo
              </Button>
              <Input width="95px" type="file" name="images" accept="image/png, image/svg, image/gif, image/jpeg"
                placeholder="addIcon"
                sx={{
                "::file-selector-button": {
                height: 10,
                padding: 0,
                mr: 4,
                background: "none",
                border: "none",
                fontWeight: "bold",
                },
                }}/>
              <p class="mt-6 border p-4 rounded border-gray-700 text-gray-400">
                Recommended profile photo size is 320 x 320 pixels, with an aspect
                ratio of 1:1
              </p>
              <div class="stepC mt-6 grid grid-cols-2 gap-4">
                <div>
                  <label class="ml-4">First name</label>
                  <input
                    id="firstname"
                    spellcheck="false"
                    type="text"
                    v-model="genInfo.fname"
                    autocapitalize="words"
                    class="
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
                  <label  class="ml-4">Last name</label>
                  <input
                    id="lastname"
                    spellcheck="false"
                    type="text"
                    v-model="genInfo.lname"
                    autocapitalize="words"
                    class="
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
              <div class="stepC mt-6">
                <label  class="ml-4">Gender pronouns</label>
                <input
                  id="pronouns"
                  spellcheck="false"
                  type="text"
                  v-model="genInfo.pronouns"
                  placeholder="He/Him/His"
                  autocapitalize="words"
                  class="
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
              <div class="stepC mt-6">
                <label  class="ml-4">Job title</label>
                <input
                  id="job-title"
                  type="text"
                  spellcheck="true"
                  autocapitalize="words"
                  v-model="genInfo.title"
                  class="
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
              <div class="stepC mt-6">
                <label class="ml-4">Business name</label>
                <input
                  id="business-name"
                  spellcheck="false"
                  type="text"
                  v-model="genInfo.biz"
                  autocapitalize="words"
                  class="
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
              <div class="stepC mt-6">
                <label  class="ml-4">Business address</label>
                <textarea
                  id="business-address"
                  class="
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
              <div class="stepC mt-6">
                <label class="ml-4"
                >Business description
                </label>
                <textarea
                  id="business-description"

                  class="
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
              <div class="stepC relative mt-6">
                <label class="flex justify-between ml-4"
                >OpenPGP public key<span
                  v-if="genInfo.key"
                  class="mr-4"></span>
                </label>
                <textarea
                  id="pgp-public-key"
                  v-model="genInfo.key"
                  class="
                block
                mt-2
                px-4
                py-3
                w-full
                bg-black
                placeholder-gray-600
                rounded
                border border-transparent
                transition-colors
                duration-200
                focus:outline-none focus:border-gray-600
                resize-none
                hover:border-gray-600
              "
                  rows="4"
                  spellcheck="false"
                  placeholder="Paste public key block here"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        {/* step 3 */}
       
  
        
        <h2 class="font-extrabold text-2xl">Primary actions</h2>
          {/* <draggable
            v-model="secondaryActions"
            handle=".drag"
            animation="1"
            ghostClass="ghost"
          >
            <transition-group type="transition" name="list">
              <Action
                v-for="(item, index) in secondaryActions"
                :key="'item' + index"
                name="secondaryActions"
                :type="secondaryActions"
                :item="item"
                :index="index"
                :removeAction="removeAction"
              /> </transition-group
          ></draggable> */}
           
          <div
            class="mt-6 border-gray-800"
          // :class="{ 'border-t pt-6': secondaryActions.length }"
          >
              {selectedPrimaries.map((selectedPrimary, index) => (
            <div class="stepC actions" key={index}>
              <div class="flex">
              <div class="flex-initial w-100">
              <button
                // v-for="(action, index) in filteredSecondaryActions"
                // :key="index"
                // @click="addAction('secondaryActions', action.name)"
                class="
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
                // onClick={() =>handleDelete(selectedPrimary, index)}
              // :style="{ background: action.color }"
              // :title="
              //   action.name.substr(0, 1).toUpperCase() + action.name.slice(1)
              // "
              >
                <div
                  class="w-6 h-6 mr-3 shrink-0"
                // v-html="require(`~/assets/icons/${action.icon}.svg?include`)"
                ></div>
                <p
                  class="whitespace-nowrap"
                // :class="{ 'text-gray-900': action.light }"
                >
                  {selectedPrimary.name}
                  {/* {{
                    action.name.substr(0, 1).toUpperCase() +
                    action.name.slice(1)
                  }} */}
                </p>
              </button>
              </div>
              <div class="flex-initial w-80 p-3
                  flex
                  items-center
                  shrink-0
                  rounded
                  hover:brightness-125
                  focus:brightness-125
                  transition-all
                  duration-200
                  focus:outline-none">
                 <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-10 text-white-900 ring-1 ring-inset ring-gray-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder={selectedPrimary.placeholder}
                  value={selectedPrimary.value} 
                  onChange={event => handlePrimaryActionChange(event, selectedPrimary, index)}
                 />
              </div>
              </div>
            </div>
            ))}
            <input
              spellcheck="false"
              type="text"
              v-model="filterSecondary"
              placeholder="Search an action"
              class="
                px-4
                mb-2
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
            // @keydown.esc="clearFilterActions"
            // @keypress.enter="
            //   filteredAction('filteredSecondaryActions', 'secondaryActions')
            // "
            />
            <p class="p-3" v-if="filteredSecondaryActions.length < 1">
              Can't find an action? Please
              <a
                href="#help"
                class="
                  cursor-pointer
                  underline
                  font-extrabold
                  text-emerald-600
                  hover:text-emerald-500
                  focus:text-emerald-500
                  transition-colors
                  duration-200
                "
              >leave your suggestion</a
              >
              on Telegram
            </p>
           
            <div class="stepC actions" >
            {primaryActions.map((primaryAction, index) => (
              <button
                // v-for="(action, index) in filteredSecondaryActions"
                // :key="index"
                // @click="addAction('secondaryActions', action.name)"
                class="
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
                key={index}
                onClick={() =>handleDelete(primaryAction, index)}
              // :style="{ background: action.color }"
              // :title="
              //   action.name.substr(0, 1).toUpperCase() + action.name.slice(1)
              // "
              >
                <div
                  class="w-6 h-6 mr-3 shrink-0"
                // v-html="require(`~/assets/icons/${action.icon}.svg?include`)"
                ></div>
                <p
                  class="whitespace-nowrap"
                // :class="{ 'text-gray-900': action.light }"
                >
                  {primaryAction.name}
                  {/* {{
                    action.name.substr(0, 1).toUpperCase() +
                    action.name.slice(1)
                  }} */}
                </p>
              </button> 
              ))}
            </div>
           
          </div>
          
        {/* step 4 */}
        <div id="step-4" class="mt-16">
          <h2 class="font-extrabold text-2xl">Secondary actions</h2>
          {/* <draggable
            v-model="secondaryActions"
            handle=".drag"
            animation="1"
            ghostClass="ghost"
          >
            <transition-group type="transition" name="list">
              <Action
                v-for="(item, index) in secondaryActions"
                :key="'item' + index"
                name="secondaryActions"
                :type="secondaryActions"
                :item="item"
                :index="index"
                :removeAction="removeAction"
              /> </transition-group
          ></draggable> */}
                        {selectedSecondaries.map((selectedSecondary, index) => (
            <div class="stepC actions" key={index}>
              <div class="flex">
              <div class="flex-initial w-100">
              <button
                // v-for="(action, index) in filteredSecondaryActions"
                // :key="index"
                // @click="addAction('secondaryActions', action.name)"
                class="
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
                // onClick={() =>handleDelete(selectedPrimary, index)}
              // :style="{ background: action.color }"
              // :title="
              //   action.name.substr(0, 1).toUpperCase() + action.name.slice(1)
              // "
              >
                <div
                  class="w-6 h-6 mr-3 shrink-0"
                // v-html="require(`~/assets/icons/${action.icon}.svg?include`)"
                ></div>
                <p
                  class="whitespace-nowrap"
                // :class="{ 'text-gray-900': action.light }"
                >
                  {selectedSecondary.name}
                  {/* {{
                    action.name.substr(0, 1).toUpperCase() +
                    action.name.slice(1)
                  }} */}
                </p>
              </button>
              </div>
              <div class="flex-initial w-80 p-3
                  flex
                  items-center
                  shrink-0
                  rounded
                  hover:brightness-125
                  focus:brightness-125
                  transition-all
                  duration-200
                  focus:outline-none">
                 <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-10 text-white-900 ring-1 ring-inset ring-gray-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder={selectedSecondary.placeholder}
                  value={selectedSecondary.value} 
                  onChange={event => handleSecondaryActionChange(event, selectedSecondary, index)}
                 />
              </div>
              </div>
            </div>
            ))}
          <div
            class="mt-6 border-gray-800"
          // :class="{ 'border-t pt-6': secondaryActions.length }"
          >
            <input
              spellcheck="false"
              type="text"
              v-model="filterSecondary"
              placeholder="Search an action"
              class="
                px-4
                mb-2
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
            // @keydown.esc="clearFilterActions"
            // @keypress.enter="
            //   filteredAction('filteredSecondaryActions', 'secondaryActions')
            // "
            />
            <p class="p-3" v-if="filteredSecondaryActions.length < 1">
              Can't find an action? Please
              <a
                href="#help"
                class="
                  cursor-pointer
                  underline
                  font-extrabold
                  text-emerald-600
                  hover:text-emerald-500
                  focus:text-emerald-500
                  transition-colors
                  duration-200
                "
              >leave your suggestion</a
              >
              on Telegram
            </p>

            
            <div class="stepC actions" >
              {secondaryActions.map((secondaryAction, index) => (
              <button
                // v-for="(action, index) in filteredSecondaryActions"
                // :key="index"
                // @click="addAction('secondaryActions', action.name)"
                class="
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
                key={index}
                onClick={() =>handleAddActions(secondaryAction, index)}
              // :style="{ background: action.color }"
              // :title="
              //   action.name.substr(0, 1).toUpperCase() + action.name.slice(1)
              // "
              >
                <div
                  class="w-6 h-6 mr-3 shrink-0"
                // v-html="require(`~/assets/icons/${action.icon}.svg?include`)"
                ></div>
                <p
                  class="whitespace-nowrap"
                // :class="{ 'text-gray-900': action.light }"
                >
                  {secondaryAction.name}
                  {/* {{
                    action.name.substr(0, 1).toUpperCase() +
                    action.name.slice(1)
                  }} */}
                </p>
              </button> 
              ))}
            </div>
           
          </div>
          {/* step 5 */}
          <div id="step-5" class="mt-16">
            <h2 class="font-extrabold text-2xl">Featured content</h2>
            <div class="stepC">
              {/* <draggable
              v-model="featured"
              handle=".drag"
              animation="1"
              ghostClass="ghost"
            >
              <transition-group type="transition" name="list">
                <Featured
                  v-for="(content, index) in featured"
                  :key="'content' + index"
                  :featured="featured"
                  :resizeImage="resizeImage"
                  :index="index"
                  mimetypes="image/jpeg, image/png, audio/mpeg, video/mp4, video/webm, application/pdf"
                  :showAlert="showAlert"
                /> </transition-group
            ></draggable> */}    
             {featuredSections.map((section, index) => (
              
             <Featured featuredSections={featuredSections} setFeatured={setFeatured} featuredContent={section} key={index} itemNum={index} handleDeleteSection={deleteSection}/>
            
             ))}
              <div class="flex mt-6">
        
                <div class="flex flex-wrap items-center">
                  <button
                    class="
                    p-3
                    rounded
                    bg-gray-700
                    hover:bg-gray-600
                    focus:bg-gray-600
                    transition-colors
                    duration-200
                    focus:outline-none
                  "
                    // @click="addFeature()"
                    aria-label="Add section"
                    onClick={() => addNewSection()}
                  >
                    <div
                      class="w-6 h-6"
                    // v-html="require(`~/assets/icons/add.svg?include`)"
                    ></div>
                  </button>
                  <p class="ml-3 leading-none">Add section</p>
                </div>
              </div>
              <p class="mt-6 border p-4 rounded border-gray-700 text-gray-400">
                Supported media formats: jpeg, png, mp3, mp4, webm and pdf
              </p>
            </div>
          </div>
          {/* <!-- class="stepC actions mt-6 border-gray-800"
            :class="{ 'border-t pt-6': secondaryActions.length }" --> */}
        </div>
        {/* step 6 */}
        <div id="step-6" class="mt-16">
          <h2 class="font-extrabold text-2xl">Footer credit</h2>
          <div class="stepC mt-6">
            <div class="flex items-center">
              <div
                class="
                  relative
                  group
                  inline-block
                  w-24
                  h-12
                  mr-3
                  align-middle
                  select-none
                  transition
                  duration-200
                  ease-in
                  bg-gray-700
                  rounded
                  hover:bg-gray-600
                  focus:bg-gray-600
                  cursor-pointer
                  focus:outline-none
                "
                // :class="{
                //   'bg-emerald-600 hover:bg-emerald-500 focus:bg-emerald-500':
                //     footerCredit,
                // }"
                tabindex="0"
              // @click="footerCredit = !footerCredit"
              // @keypress.space.enter.prevent="footerCredit = !footerCredit"
              >
                <transition name="slide">
                  <input
                    type="checkbox"
                    name="toggle"
                    aria-label="Toggle footer credit"
                    id="toggle"
                    v-model="footerCredit"
                    class="
                      toggle-switch
                      absolute
                      block
                      w-10
                      h-10
                      m-1
                      rounded
                      border-4 border-transparent
                      appearance-none
                      cursor-pointer
                      transition-colors
                      duration-200
                      focus:outline-none
                      bg-white
                    "
                    tabindex="-1"
                  />
                </transition>
              </div>
              {/* <p>{{ footerCredit ? 'Enabled' : 'Disabled' }}</p> */}
            </div>
            <p class="mt-6 border p-4 rounded border-gray-700 text-gray-400">
              By enabling the footer credit, you can help this project reach
              more people.
            </p>
          </div>
        </div>
        {/* step 7 */}
        <div id="step-7" class="mt-16">
          <h2 class="font-extrabold text-2xl">Themes</h2>
          <div class="stepC mt-3 flex flex-wrap">
            <button
              // @click="changeTheme(1)"
              class="
                w-12
                h-12
                rounded
                mt-3
                mr-3
                font-extrabold
                focus:outline-none
                transition-colors
                duration-200
              "
            // :class="
            //   theme == 1
            //     ? 'bg-emerald-600'
            //     : 'bg-gray-700 hover:bg-gray-600 focus:bg-gray-600'
            // "
            >
              A
            </button>
            <button
              // @click="changeTheme(2)"
              class="
                w-12
                h-12
                rounded
                mt-3
                mr-3
                font-extrabold
                focus:outline-none
                transition-colors
                duration-200
              "
            // :class="
            //   theme == 2
            //     ? 'bg-emerald-600'
            //     : 'bg-gray-700 hover:bg-gray-600 focus:bg-gray-600'
            // "
            >
              B
            </button>
            <button
              // @click="changeTheme(3)"
              class="
                w-12
                h-12
                rounded
                mt-3
                mr-3
                font-extrabold
                focus:outline-none
                transition-colors
                duration-200
              "
            // :class="
            //   theme == 3
            //     ? 'bg-emerald-600'
            //     : 'bg-gray-700 hover:bg-gray-600 focus:bg-gray-600'
            // "
            >
              C
            </button>
          </div>
        </div>
        {/* step 8 */}
        <div id="step-8" class="mt-16">
          <h2 class="font-extrabold text-2xl">Colours</h2>
          <div class="stepC">
            {/* <Colour name="logoBg" label="Header background" :colors="colors" />
            <Colour name="mainBg" label="Main background" :colors="colors" />
            <Colour
              name="buttonBg"
              label="Button background"
              :colors="colors"
            />
            <Colour
              name="cardBg"
              label="Featured content background"
              :colors="colors"
            /> */}
          </div>
        </div>
      <div id="step-9" class="mt-16">
      <Button
         onClick={() => {
          console.log(logo);
          // downloadPackage()
        }}
      >Download as ZIP 
      </ Button>
      </div>
      </div>
      {/* step 9 */}

      {/* step 11  */}

    </>
  )

};

export default BusinessCard;

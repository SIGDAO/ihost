import { CgWebsite } from "@react-icons/all-files/cg/CgWebsite";
import { CgRemove } from "@react-icons/all-files/cg/CgRemove";
import { AiFillIdcard } from "@react-icons/all-files/ai/AiFillIdcard";
import { CgSmartHomeWashMachine } from "@react-icons/all-files/cg/CgSmartHomeWashMachine";
import { BiSupport } from "@react-icons/all-files/bi/BiSupport";
import { VscOrganization } from "@react-icons/all-files/vsc/VscOrganization";
import { MdDashboard } from "@react-icons/all-files/md/MdDashboard";
import { MdPayment } from "@react-icons/all-files/md/MdPayment";
import { AiOutlineTeam } from "@react-icons/all-files/ai/AiOutlineTeam";
import { AiOutlinePlus } from "@react-icons/all-files/ai/AiOutlinePlus";
import { SiIpfs } from "@react-icons/all-files/si/SiIpfs";
import { FaTools } from "@react-icons/all-files/fa/FaTools";
import { GrCertificate } from "react-icons/gr";
import { RiNftFill } from "react-icons/ri";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { AiFillCode } from "react-icons/ai";
export const sidebarArr = [
  {
    parent: "navigation",
    items: [
      {
        name: "Get Started",
        link: "/getStarted",
        icon: <MdDashboard />,
        children: [],
        isExternal: false,
      },
      {
        name: "Payments",
        link: "/payments",
        icon: <MdPayment />,
        children: [],
        isExternal: false,
      },
      {
        name: "Related link",
         link: "/relatedlink",
         icon: <VscOrganization />,
         children: [],
         isExternal: false,
       },
    ],
  },
  {
    parent: "builder",
    items: [
      {
        name: "NFT Generator",
        link: "/generator",
        icon: <CgSmartHomeWashMachine />,
        children: [{ name: "Metadata", link: "/generator/metadata" }],
        isExternal: false,
      },
      // {
      //   name: "Utilities",
      //   link: "/utilities",
      //   icon: <FaTools />,
      //   children: [],
      //   isExternal: false,
      // },
      // {
      //   name: "Website",
      //   link: "/website",
      //   icon: <CgWebsite />,
      //   children: [
      //     { name: "Templates", link: "/website/templates" },
      //     // { name: 'Addons', link: '/website/addons' },
      //     // { name: "Analytics", link: "/website/analytics" },
      //     // { name: "Domain", link: "/website/domain" },
      //   ],
      //   isExternal: false,
      // },
     
      {
        name: "NFT Uploader",
        link: "/massuploader",
        icon: <RiNftFill />,
        children: [
        ],
        isExternal: false,
      },

    ],

  },
  {
    parent: "smart contract",
    items: [
      {
        name: "AI Coder (Test)",
        link: "/codeeditor",
        icon: <AiFillCode />,
        children: [{ name: "Project Template", link: "/codeeditor/projecttemplate" }],
        isExternal: false,
      },
      {
        name: "SmartC",
        link: "/smartc",
        icon: <AiFillCode />,
        // children: [{ name: "Sample Code", link: "/smartc/scsample" }],
         children: [],
        isExternal: false,
      },
      {
        name: "Sample Contracts",
        link: "/smartc/scsample",
        icon: <AiFillCode />,
        children: [],
        isExternal: false,
      },
    ],
  },
  {
    parent: "power-up",
    items: [
      {
        name: "Business Card",
        link: "/businesscard",
        icon: <AiFillIdcard />,
        children: [
        ],
        isExternal: false,
      },
      {
        name: "Certification",
        link: "/certification",
        icon: <GrCertificate />,
        children: [
        ],
        isExternal: false,
      },
      {
        name: "Alias",
        link: "/alias",
        icon: <MdOutlineDriveFileRenameOutline />,
        children: [
        ],
        isExternal: false,
      },
    ],
  },
 
  // {
  //   parent: "",
  //   items: [
      // {
      //   name: "Related link",
      //   link: "/partners",
      //   icon: <VscOrganization />,
      //   children: [],
      //   isExternal: false,
      // },
      // {
      //   name: "Credits",
      //   link: "/credits",
      //   icon: <AiOutlineTeam />,
      //   children: [],
      //   isExternal: false,
      // },
      // {
      //   name: "Support",
      //   link: "https://discord.gg/2BDzCvSTVc",
      //   icon: <BiSupport />,
      //   children: [],
      //   isExternal: true,
      // },
  //   ],
  // },
];

export const getStartedServicesArr = [
  {
    name: "NFT Collection Generator",
    icon: <CgSmartHomeWashMachine fontSize="32pt" />,
    buttonText: "Generate",
    link: "/dashboard/generator",
  },
  {
    name: "Business Card",
    icon: <AiFillIdcard fontSize="32pt" />,
    buttonText: "Create",
    link: "/dashboard/website",
  },
  {
    name: "CERTIFICATION",
    icon: <GrCertificate fontSize="32pt" />,
    buttonText: "Enter",
    link: "/dashboard/certification",
  },
  {
    name: "Smart Contract Complier",
    icon: <AiFillCode fontSize="32pt" />,
    buttonText: "Coding",
    link: "/dashboard/smartc",
  },
];

export const metadataStandardsArr = [
  {
    name: "Signum",
    image: "/assets/signumIcon.png",
    components: [
      "size",
      "name",
      "description",
      "symbol",
      "edition",
      "royalties",
      "identifier",
      "image",
      "signumAttributes",
      "attribute1",
      "attribute2",
      "attribute3",
      "attribute4",
      "attribute5",
      "attribute6",
      "attribute7",
      "attribute8",
      "listingMode",
      "price",
      "offerPrice",
      "auctionEnd",
          // "name",
      // "description",
      // "royalties",
      // "nftTypes",
      // "attributes",
      // "compiler",
      // "edition",
      // "symbol",
      // "identifier",
      // "officialWeb",
      // "socialPlatform",
    ],
  },
  // {
  //   name: "Ethereum",
  //   image: "/assets/ethereum.png",
  //   components: [
  //     "size",
  //     "name",
  //     "symbol",
  //     "description",
  //     "image",
  //     "external_url",
  //     "attributes",
  //     "background_color",
  //     "animation_url",
  //     "youtube_url",
  //     "compiler",
  //   ],
  // },
  // {
  //   name: "Solana",
  //   image: "/assets/solana.png",
  //   components: [
  //     "size",
  //     "name",
  //     "symbol",
  //     "description",
  //     "seller_fee_basis_points",
  //     "creators",
  //     "image",
  //     "animation_url",
  //     "external_url",
  //     "attributes",
  //     "compiler",
  //   ],
  // },
 
];

export const templatesArr = [
  {
    name: "Template1",
    key: "Template1",
    sub: "free",
    isAnimated: false,
    creator: "NFTHost",
    filterKey: "f_free",
  },
  {
    name: "Template2",
    key: "Template2",
    sub: "free",
    isAnimated: false,
    creator: "NFTHost",
    filterKey: "f_free",
  },
  {
    name: "Template3",
    key: "Template3",
    sub: "free",
    isAnimated: false,
    creator: "NFTHost",
    filterKey: "f_free",
  },
  {
    name: "Astro Orange",
    key: "Template4",
    sub: "premium",
    cisAnimated: false,
    reator: "NFTHost",
    filterKey: "f_premium",
  },
  {
    name: "Astro Blue",
    key: "Template5",
    sub: "premium",
    isAnimated: false,
    creator: "NFTHost",
    filterKey: "f_premium",
  },
  {
    name: "Tropical",
    key: "Template6",
    sub: "premium",
    isAnimated: false,
    creator: "NFTHost",
    filterKey: "f_premium",
  },
  {
    name: "City Night",
    key: "Template7",
    sub: "premium",
    isAnimated: false,
    creator: "NFTHost",
    filterKey: "f_premium",
  },
  {
    name: "Graffiti Green",
    key: "Template8",
    sub: "premium",
    isAnimated: false,
    creator: "NFTHost",
    filterKey: "f_premium",
  },
  {
    name: "Graffiti Blue",
    key: "Template9",
    sub: "premium",
    isAnimated: false,
    creator: "NFTHost",
    filterKey: "f_premium",
  },
  {
    name: "Fantasy",
    key: "Template10",
    sub: "premium",
    isAnimated: true,
    creator: "NFTHost",
    filterKey: "f_premium_animated",
  },
  {
    name: "Lofi Mario",
    key: "Template11",
    sub: "premium",
    isAnimated: true,
    creator: "NFTHost",
    filterKey: "f_premium_animated",
  },
];

export const addonsArr = [
  { key: "Navbar", sub: "premium", creator: "NFTHost" },
  { key: "Footer", sub: "premium", creator: "NFTHost" },
];

export const analyticsArr = [
  {
    title: "Unique Users",
    description: "Amount of unique users who have visited your websites",
    dataset: "Unique Visit Count",
    style: {
      border: "rgb(255, 99, 132)",
      bg: "rgba(255, 99, 132, 0.5)",
    },
    dataKey: "uniqueVisits",
  },
  {
    title: "Embed Clicks",
    description: "Amount of embed clicks of your websites",
    dataset: "Embed Click Count",
    style: {
      border: "rgb(255, 165, 0)",
      bg: "rgba(255, 165, 0, 0.5)",
    },
    dataKey: "clickedOnEmbed",
  },
];

export const websiteSettingsArr = [
  { name: "General" },
  { name: "Design" },
  { name: "Domain" },
  { name: "Advanced" },
];

export const utilsMenuArr = [
  { title: "Update Image Storage", icon: <SiIpfs />, key: "image" },
  { title: "Add/Edit Metadata Key", icon: <AiOutlinePlus />, key: "add" },
  { title: "Remove Metadata Key", icon: <CgRemove />, key: "remove" },
];

export const partnersArr = [
  {
    company: "Bettermi.io",
    image: "/assets/partners/bettermi.png",
    link: "https://www.bettermi.io/",
    description: "A web3 lifestyle dAPP that rewards users for their fitness journey",
  },
  {
    company: "Sigdao Web3store",
    image: "/assets/partners/logoWhite.svg",
    // for production 
    // link: "https://store.sigdao.io/",
     // for test 
    link: "https://web3store.vercel.app/",
    description:
      "A platform to register tools and applications for the Signum eco-system",
  },
  {
    company: "Signum Community",
    image: "/assets/partners/signum.png",
    link: "https://discord.com/invite/QHZkF4KHDS",
    description: "The community is actively involved in developing and promoting the Signum blockchain, contributing to its growth and evolution",
  },
  // {
  //   company: "Web3 Philippines",
  //   image: "/assets/partners/web3philippines.png",
  //   link: "https://web3philippines.org/discord",
  //   description:
  //     "Filipino-led community, helping Filipinos to build in Web3 space by providing free access to Web3 education.",
  // },
  // {
  //     company: 'SwiftNFT',
  //     image: '/assets/partners/swiftnft.png',
  //     link: 'https://swiftnft.io/',
  //     description: 'No-Code NFT generator to launch your NFT collection'
  // },
];

export const teamArr = [
  {
    name: "Stephen Asuncion",
    position: "CEO and Founder, Software Engineer",
    socials: {
      twitter: "https://twitter.com/Steb_01",
      linkedin: "https://www.linkedin.com/in/stephenasuncion",
      youtube: "https://www.youtube.com/c/stephenasuncion",
    },
  },
];



export const cssTheme = {
  Theme1 : `body{margin:0 auto;width:100%;padding:0;max-width:30rem;color:#eee;position:relative}p{line-height:1.5;margin:0}h2,h3{margin:0}.icon{width:1.5rem;height:1.5rem}a{text-decoration:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#modal{display:flex;flex-direction:column;position:absolute;z-index:1;width:100%;bottom:0;transition:top .2s ease-out,opacity .1s ease-out;transform:translateZ(0)}#close{align-self:end;padding:1rem;cursor:pointer;line-height:0}#keyView,#copyView,#qrView{display:flex;flex-direction:column;align-items:center;margin:0 1rem;text-align:center}#keyView p,#copyView p,#qrView p{margin:2rem;text-align:center}#copyURL,#dlKey{display:flex;width:100%;align-items:center;justify-content:center;border-radius:5rem;padding:1rem 1.5rem;border:none;outline:none;cursor:pointer;box-sizing:border-box}#copyURL span,#dlKey span{margin-left:.5rem}#qrView h3{margin:2rem 2rem 0}#qrView p{margin:.5rem 2rem 0}#qr{margin:2rem;padding:2rem;background:#fff;border-radius:.5rem}header{display:flex;justify-content:flex-start;flex-direction:column}.headerImgC{display:grid;grid-template-columns:auto;grid-template-rows:auto;overflow:hidden}#cover{grid-column:1;grid-row:1;width:100%;height:20rem;-o-object-position:top center;object-position:top center;-o-object-fit:cover;object-fit:cover}#logo{max-height:6rem;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;grid-column:1;grid-row:1;align-self:center;justify-self:center}#topActions{flex-direction:row-reverse;justify-content:space-between;align-items:flex-start}#topActions>div{display:flex}#topActions a{padding:1rem;cursor:pointer;line-height:0}main{padding:1rem;display:flex;flex-direction:column;align-items:center;text-align:center}#profilePhoto{width:10rem;height:10rem;border-radius:100%;box-sizing:content-box;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-top:-6rem}#info{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:1rem;line-height:1.25;word-break:break-word}.name{font-weight:bold;font-size:1.5rem;margin:0}.pronouns{display:block;font-size:.9rem;opacity:.8;font-weight:normal;margin:0 0 .5rem}.bizname{font-size:.9rem;margin:.5rem 0 0;opacity:.8}.bizaddr{font-size:.8rem;opacity:.6}.sub,.textC{font-size:1rem;white-space:pre-line;line-height:1.5}.sub{font-size:.9rem;margin:.5rem 0 0;opacity:.8}.textC{margin:1rem}#cta{display:flex;align-items:center;border-radius:5rem;margin-top:2rem;padding:1rem 1.5rem;cursor:pointer;line-height:0;width:100%;justify-content:center;box-sizing:border-box}#cta .icon{margin-right:.5rem}#cta p{margin:0}.actions{width:100%;margin-top:2rem;display:flex;flex-wrap:wrap;justify-content:center}.actionsC{width:33.33%}.actionBtn{padding:.5rem;display:flex;flex-direction:column;align-items:center;justify-content:center}.actionBtn a{border-radius:100%;padding:1rem;line-height:0}.actionBtn p{margin:.5rem 0 0;font-size:.9rem}.secBtn{padding:1rem}.featured{display:flex;flex-direction:column;justify-content:center;margin:2rem 0 0;width:100%}.section{font-weight:bold;text-align:center;font-size:1.3rem;padding:1rem 0}.media{overflow:hidden;border-radius:1rem;margin-top:1rem}.media img{display:block;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}.embedded{position:relative;padding-top:100%}.embedded iframe{position:absolute;top:0;left:0;width:100%;height:100%}.music,.video{width:100%}.mediaC{display:flex;flex-direction:column;justify-content:space-evenly;align-items:center}video{width:100%}.controls{padding:1rem;font-size:.9rem;text-align:center;width:100%;box-sizing:border-box}.pCtrl,.docDl{display:none;flex-direction:column;align-items:center;width:100%}.docDl{display:flex}.seekBar{width:100%;height:.5rem;margin:1.5rem 0 .5rem;border-radius:5rem;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer}.playPause,.dlBtn{margin:1rem 0 .5rem;padding:1rem;border-radius:5rem;line-height:0;cursor:pointer}.pause{display:none}.title{font-size:1rem;font-weight:bold;margin:0}.prodInfo .sub{margin:-1rem 0 0}.price{margin:1rem 0 0;font-size:1rem;font-weight:bold}.label{display:inline-block;font-size:1rem;margin:1rem 0 .5rem;border-radius:5rem;letter-spacing:1px;padding:1rem 1.5rem}.label p{margin:0}footer{padding:4rem 1rem 2rem;font-size:.9rem;text-align:center}footer a{text-decoration:underline;color:inherit}`,
  Theme2 : `body{margin:0 auto;width:100%;padding:0;max-width:30rem;color:#eee;position:relative}p{line-height:1.5;margin:0}h2,h3{margin:0}.icon{width:1.5rem;height:1.5rem}a{text-decoration:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#modal{display:flex;flex-direction:column;position:absolute;z-index:1;width:100%;bottom:0;transition:top .2s ease-out,opacity .1s ease-out;transform:translateZ(0)}#close{align-self:end;padding:1rem;cursor:pointer;line-height:0}#keyView,#copyView,#qrView{display:flex;flex-direction:column;align-items:center;margin:0 1rem;text-align:center}#keyView p,#copyView p,#qrView p{margin:2rem}#copyURL,#dlKey{display:flex;width:100%;align-items:center;justify-content:center;border-radius:.5rem;padding:1rem 1.5rem;border:none;outline:none;cursor:pointer;box-sizing:border-box}#copyURL span,#dlKey span{margin-left:.5rem}#qrView h3{margin:2rem 2rem 0}#qrView p{margin:.5rem 2rem 0}#qr{margin:2rem;padding:2rem;background:#fff;border-radius:.5rem}header{display:flex;justify-content:flex-start;flex-direction:column}.headerImgC{display:grid;grid-template-columns:auto;grid-template-rows:auto;overflow:hidden}#cover{grid-column:1;grid-row:1;width:100%;height:20rem;-o-object-position:top center;object-position:top center;-o-object-fit:cover;object-fit:cover}#logo{max-height:6rem;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;grid-column:1;grid-row:1;align-self:center;justify-self:center}#topActions{flex-direction:row-reverse;justify-content:space-between;align-items:flex-start}#topActions>div{display:flex}#topActions a{padding:1rem;cursor:pointer;line-height:0}main{padding:1rem;display:flex;flex-direction:column;align-items:center;text-align:center}#profilePhoto{width:10rem;height:10rem;border-radius:.5rem;box-sizing:content-box;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-top:-6rem}#info{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:1rem;line-height:1.25;word-break:break-word}.name{font-weight:bold;font-size:1.5rem;margin:0}.pronouns{display:block;font-size:.9rem;opacity:.8;font-weight:normal;margin:0 0 .5rem}.bizname{font-size:.9rem;margin:.5rem 0 0 0;opacity:.8}.bizaddr{font-size:.8rem;opacity:.6}.sub,.textC{font-size:1rem;white-space:pre-line;line-height:1.5}.sub{font-size:.9rem;margin:.5rem 0 0;opacity:.8}.textC{margin:1rem}#cta{display:flex;align-items:center;border-radius:.5rem;margin-top:2rem;padding:1rem 1.5rem;cursor:pointer;line-height:0;width:100%;justify-content:center;box-sizing:border-box}#cta .icon{margin-right:.5rem}#cta p{margin:0}.actions{width:100%;margin-top:2rem;display:flex;flex-wrap:wrap;justify-content:center}.actionsC{width:33.33%}.actionBtn{padding:.5rem;display:flex;flex-direction:column;align-items:center;justify-content:center}.actionBtn a{border-radius:.5rem;padding:1rem;line-height:0}.actionBtn p{margin:.5rem 0 0;font-size:.9rem}.secBtn{padding:1rem}.featured{display:flex;flex-direction:column;justify-content:center;margin:2rem 0 0;width:100%}.section{font-weight:bold;text-align:center;font-size:1.3rem;padding:1rem 0}.media{overflow:hidden;border-radius:.5rem;margin-top:1rem}.media img{display:block;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}.embedded{position:relative;padding-top:100%}.embedded iframe{position:absolute;top:0;left:0;width:100%;height:100%}.music,.video{width:100%}.mediaC{display:flex;flex-direction:column;justify-content:space-evenly;align-items:center}video{width:100%}.controls{padding:1rem;font-size:.9rem;text-align:center;width:100%;box-sizing:border-box}.pCtrl,.docDl{display:none;flex-direction:column;align-items:center;width:100%}.docDl{display:flex}.seekBar{width:100%;height:.5rem;margin:1.5rem 0 .5rem;border-radius:.5rem;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer}.playPause,.dlBtn{margin:1rem 0 .5rem;padding:1rem;border-radius:.5rem;line-height:0;cursor:pointer}.pause{display:none}.title{font-size:1rem;font-weight:bold;margin:0}.prodInfo .sub{margin:-1rem 0 0}.price{margin:1rem 0 0;font-size:1rem;font-weight:bold}.label{display:inline-block;font-size:1rem;margin:1rem 0 .5rem;border-radius:.5rem;letter-spacing:1px;padding:1rem 1.5rem}.label p{margin:0}footer{padding:4rem 1rem 2rem;font-size:.9rem;text-align:center}footer a{text-decoration:underline;color:inherit}`,
  Theme3 : `body{margin:0 auto;width:100%;padding:0;max-width:30rem;color:#eee;position:relative}p{line-height:1.5;margin:0}h2,h3{margin:0}.icon{width:1.5rem;height:1.5rem}a{text-decoration:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#modal{display:flex;flex-direction:column;position:absolute;z-index:1;width:100%;bottom:0;transition:top .2s ease-out,opacity .1s ease-out;transform:translateZ(0)}#close{align-self:end;padding:1rem;cursor:pointer;line-height:0}#keyView,#copyView,#qrView{display:flex;flex-direction:column;align-items:center;margin:0 1rem;text-align:center}#keyView p,#copyView p,#qrView p{margin:2rem}#copyURL,#dlKey{display:flex;width:100%;align-items:center;justify-content:center;border-radius:.5rem;padding:1rem 1.5rem;border:none;outline:none;cursor:pointer;box-sizing:border-box}#copyURL span,#dlKey span{margin-left:.5rem}#qrView h3{margin:2rem 2rem 0}#qrView p{margin:.5rem 2rem 0}#qr{margin:2rem;padding:2rem;background:#fff;border-radius:.5rem}header{display:flex;justify-content:flex-start;flex-direction:column}.headerImgC{display:grid;grid-template-columns:auto;grid-template-rows:auto;overflow:hidden}#cover{grid-column:1;grid-row:1;width:100%;height:20rem;-o-object-position:top center;object-position:top center;-o-object-fit:cover;object-fit:cover}#logo{max-height:6rem;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;grid-column:1;grid-row:1;align-self:center;justify-self:center}#topActions{flex-direction:row-reverse;justify-content:space-between;align-items:flex-start}#topActions>div{display:flex}#topActions a{padding:1rem;cursor:pointer;line-height:0}main{padding:1rem;display:flex;flex-direction:column;align-items:flex-start}#profilePhoto{width:10rem;height:10rem;border-radius:.5rem;box-sizing:content-box;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-top:-6rem}#info{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;margin-top:1rem;line-height:1.25;word-break:break-word;padding:.25rem 1rem}.name{font-weight:bold;font-size:1.5rem;margin:0}.pronouns{display:block;font-size:.9rem;opacity:.8;font-weight:normal;margin:0 0 .5rem}.bizname{font-size:.9rem;margin:.5rem 0 0 0;opacity:.8}.bizaddr{font-size:.8rem;opacity:.6}.sub,.textC{font-size:1rem;white-space:pre-line;line-height:1.5}.sub{font-size:.9rem;margin:.5rem 0 0;opacity:.8}.textC{margin:1rem}#cta{display:flex;align-items:center;border-radius:.5rem;margin-top:2rem;padding:1rem 1.5rem;cursor:pointer;line-height:0;justify-content:center;box-sizing:border-box}#cta .icon{margin-right:.5rem}#cta p{margin:0}.actions{width:100%;margin-top:2rem;display:grid;grid-gap:1rem;grid-template-columns:1fr 1fr}.actionBtn{display:flex;flex-direction:row;align-items:center;justify-content:flex-start}.actionBtn a{border-radius:.5rem;padding:1rem;line-height:0}.actionBtn p{margin:0 0 0 .75rem;font-size:.9rem;white-space:nowrap}.secondary{grid-template-columns:repeat(auto-fill, minmax(3.5rem, 1fr))}.featured{display:flex;flex-direction:column;justify-content:center;margin:3rem 0 0;width:100%}.section{font-weight:bold;font-size:1.3rem;padding:.5rem 1rem;margin-bottom:1rem}.media{overflow:hidden;border-radius:.5rem;margin-top:1rem}.media img{display:block;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}.embedded{position:relative;padding-top:100%}.embedded iframe{position:absolute;top:0;left:0;width:100%;height:100%}.music,.video{width:100%}.mediaC{display:flex;flex-direction:column;justify-content:space-evenly;align-items:center}video{width:100%}.controls{padding:1rem;font-size:.9rem;width:100%;box-sizing:border-box}.pCtrl,.docDl{display:none;align-items:center;justify-content:flex-start;width:100%;margin:1rem 0 0}.docDl{display:flex}.fileSize{margin:0 0 0 1rem}.currentTime{margin:0 .5rem 0 1rem}.seekBar{width:100%;height:.5rem;border-radius:.5rem;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer}.playPause,.dlBtn{padding:1rem;border-radius:.5rem;line-height:0;cursor:pointer;order:-1}.pause{display:none}.title{font-size:1rem;font-weight:bold;margin:0}.prodInfo .sub{margin:-1rem 0 0}.price{margin:1rem 0 0;font-size:1rem;font-weight:bold}.label{display:inline-block;font-size:1rem;margin:1rem 0 0;border-radius:.5rem;letter-spacing:1px;padding:1rem 1.5rem}.label p{margin:0}footer{padding:4rem 1rem 2rem;font-size:.9rem;text-align:center}footer a{text-decoration:underline;color:inherit}`,
}

export const qrCode = {script :`function QR8bitByte(t){this.mode=QRMode.MODE_8BIT_BYTE,this.data=t,this.parsedData=[];for(var e=0,r=this.data.length;e<r;e++){var o=[],n=this.data.charCodeAt(e);n>65536?(o[0]=240|(1835008&n)>>>18,o[1]=128|(258048&n)>>>12,o[2]=128|(4032&n)>>>6,o[3]=128|63&n):n>2048?(o[0]=224|(61440&n)>>>12,o[1]=128|(4032&n)>>>6,o[2]=128|63&n):n>128?(o[0]=192|(1984&n)>>>6,o[1]=128|63&n):o[0]=n,this.parsedData.push(o)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function QRCodeModel(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}QR8bitByte.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(var e=0,r=this.parsedData.length;e<r;e++)t.put(this.parsedData[e],8)}},QRCodeModel.prototype={addData:function(t){var e=new QR8bitByte(t);this.dataList.push(e),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var o=0;o<this.moduleCount;o++)this.modules[r][o]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=QRCodeModel.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},setupPositionProbePattern:function(t,e){for(var r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(var o=-1;o<=7;o++)e+o<=-1||this.moduleCount<=e+o||(this.modules[t+r][e+o]=0<=r&&r<=6&&(0==o||6==o)||0<=o&&o<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=o&&o<=4)},getBestMaskPattern:function(){for(var t=0,e=0,r=0;r<8;r++){this.makeImpl(!0,r);var o=QRUtil.getLostPoint(this);(0==r||t>o)&&(t=o,e=r)}return e},createMovieClip:function(t,e,r){var o=t.createEmptyMovieClip(e,r);this.make();for(var n=0;n<this.modules.length;n++)for(var i=1*n,a=0;a<this.modules[n].length;a++){var s=1*a;this.modules[n][a]&&(o.beginFill(0,100),o.moveTo(s,i),o.lineTo(s+1,i),o.lineTo(s+1,i+1),o.lineTo(s,i+1),o.endFill())}return o},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=QRUtil.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var o=t[e],n=t[r];if(null==this.modules[o][n])for(var i=-2;i<=2;i++)for(var a=-2;a<=2;a++)this.modules[o+i][n+a]=-2==i||2==i||-2==a||2==a||0==i&&0==a}},setupTypeNumber:function(t){for(var e=QRUtil.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var o=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=o}for(r=0;r<18;r++)o=!t&&1==(e>>r&1),this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=o},setupTypeInfo:function(t,e){for(var r=this.errorCorrectLevel<<3|e,o=QRUtil.getBCHTypeInfo(r),n=0;n<15;n++){var i=!t&&1==(o>>n&1);n<6?this.modules[n][8]=i:n<8?this.modules[n+1][8]=i:this.modules[this.moduleCount-15+n][8]=i}for(n=0;n<15;n++)i=!t&&1==(o>>n&1),n<8?this.modules[8][this.moduleCount-n-1]=i:n<9?this.modules[8][15-n-1+1]=i:this.modules[8][15-n-1]=i;this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var r=-1,o=this.moduleCount-1,n=7,i=0,a=this.moduleCount-1;a>0;a-=2)for(6==a&&a--;;){for(var s=0;s<2;s++)if(null==this.modules[o][a-s]){var h=!1;i<t.length&&(h=1==(t[i]>>>n&1)),QRUtil.getMask(e,o,a-s)&&(h=!h),this.modules[o][a-s]=h,-1==--n&&(i++,n=7)}if((o+=r)<0||this.moduleCount<=o){o-=r,r=-r;break}}}},QRCodeModel.PAD0=236,QRCodeModel.PAD1=17,QRCodeModel.createData=function(t,e,r){for(var o=QRRSBlock.getRSBlocks(t,e),n=new QRBitBuffer,i=0;i<r.length;i++){var a=r[i];n.put(a.mode,4),n.put(a.getLength(),QRUtil.getLengthInBits(a.mode,t)),a.write(n)}var s=0;for(i=0;i<o.length;i++)s+=o[i].dataCount;if(n.getLengthInBits()>8*s)throw new Error("code length overflow. ("+n.getLengthInBits()+">"+8*s+")");for(n.getLengthInBits()+4<=8*s&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(!1);for(;!(n.getLengthInBits()>=8*s||(n.put(QRCodeModel.PAD0,8),n.getLengthInBits()>=8*s));)n.put(QRCodeModel.PAD1,8);return QRCodeModel.createBytes(n,o)},QRCodeModel.createBytes=function(t,e){for(var r=0,o=0,n=0,i=new Array(e.length),a=new Array(e.length),s=0;s<e.length;s++){var h=e[s].dataCount,l=e[s].totalCount-h;o=Math.max(o,h),n=Math.max(n,l),i[s]=new Array(h);for(var u=0;u<i[s].length;u++)i[s][u]=255&t.buffer[u+r];r+=h;var g=QRUtil.getErrorCorrectPolynomial(l),d=new QRPolynomial(i[s],g.getLength()-1).mod(g);for(a[s]=new Array(g.getLength()-1),u=0;u<a[s].length;u++){var f=u+d.getLength()-a[s].length;a[s][u]=f>=0?d.get(f):0}}var c=0;for(u=0;u<e.length;u++)c+=e[u].totalCount;var R=new Array(c),p=0;for(u=0;u<o;u++)for(s=0;s<e.length;s++)u<i[s].length&&(R[p++]=i[s][u]);for(u=0;u<n;u++)for(s=0;s<e.length;s++)u<a[s].length&&(R[p++]=a[s][u]);return R};for(var QRMode={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},QRErrorCorrectLevel={L:1,M:0,Q:3,H:2},QRMaskPattern={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},QRUtil={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;QRUtil.getBCHDigit(e)-QRUtil.getBCHDigit(QRUtil.G15)>=0;)e^=QRUtil.G15<<QRUtil.getBCHDigit(e)-QRUtil.getBCHDigit(QRUtil.G15);return(t<<10|e)^QRUtil.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;QRUtil.getBCHDigit(e)-QRUtil.getBCHDigit(QRUtil.G18)>=0;)e^=QRUtil.G18<<QRUtil.getBCHDigit(e)-QRUtil.getBCHDigit(QRUtil.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return QRUtil.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case QRMaskPattern.PATTERN000:return(e+r)%2==0;case QRMaskPattern.PATTERN001:return e%2==0;case QRMaskPattern.PATTERN010:return r%3==0;case QRMaskPattern.PATTERN011:return(e+r)%3==0;case QRMaskPattern.PATTERN100:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case QRMaskPattern.PATTERN101:return e*r%2+e*r%3==0;case QRMaskPattern.PATTERN110:return(e*r%2+e*r%3)%2==0;case QRMaskPattern.PATTERN111:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new QRPolynomial([1],0),r=0;r<t;r++)e=e.multiply(new QRPolynomial([1,QRMath.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case QRMode.MODE_NUMBER:return 10;case QRMode.MODE_ALPHA_NUM:return 9;case QRMode.MODE_8BIT_BYTE:case QRMode.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case QRMode.MODE_NUMBER:return 12;case QRMode.MODE_ALPHA_NUM:return 11;case QRMode.MODE_8BIT_BYTE:return 16;case QRMode.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case QRMode.MODE_NUMBER:return 14;case QRMode.MODE_ALPHA_NUM:return 13;case QRMode.MODE_8BIT_BYTE:return 16;case QRMode.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,o=0;o<e;o++)for(var n=0;n<e;n++){for(var i=0,a=t.isDark(o,n),s=-1;s<=1;s++)if(!(o+s<0||e<=o+s))for(var h=-1;h<=1;h++)n+h<0||e<=n+h||0==s&&0==h||a==t.isDark(o+s,n+h)&&i++;i>5&&(r+=3+i-5)}for(o=0;o<e-1;o++)for(n=0;n<e-1;n++){var l=0;t.isDark(o,n)&&l++,t.isDark(o+1,n)&&l++,t.isDark(o,n+1)&&l++,t.isDark(o+1,n+1)&&l++,0!=l&&4!=l||(r+=3)}for(o=0;o<e;o++)for(n=0;n<e-6;n++)t.isDark(o,n)&&!t.isDark(o,n+1)&&t.isDark(o,n+2)&&t.isDark(o,n+3)&&t.isDark(o,n+4)&&!t.isDark(o,n+5)&&t.isDark(o,n+6)&&(r+=40);for(n=0;n<e;n++)for(o=0;o<e-6;o++)t.isDark(o,n)&&!t.isDark(o+1,n)&&t.isDark(o+2,n)&&t.isDark(o+3,n)&&t.isDark(o+4,n)&&!t.isDark(o+5,n)&&t.isDark(o+6,n)&&(r+=40);var u=0;for(n=0;n<e;n++)for(o=0;o<e;o++)t.isDark(o,n)&&u++;return r+Math.abs(100*u/e/e-50)/5*10}},QRMath={glog:function(t){if(t<1)throw new Error("glog("+t+")");return QRMath.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return QRMath.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},i=0;i<8;i++)QRMath.EXP_TABLE[i]=1<<i;for(i=8;i<256;i++)QRMath.EXP_TABLE[i]=QRMath.EXP_TABLE[i-4]^QRMath.EXP_TABLE[i-5]^QRMath.EXP_TABLE[i-6]^QRMath.EXP_TABLE[i-8];for(i=0;i<255;i++)QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]]=i;function QRPolynomial(t,e){if(null==t.length)throw new Error(t.length+"/"+e);for(var r=0;r<t.length&&0==t[r];)r++;this.num=new Array(t.length-r+e);for(var o=0;o<t.length-r;o++)this.num[o]=t[o+r]}function QRRSBlock(t,e){this.totalCount=t,this.dataCount=e}function QRBitBuffer(){this.buffer=[],this.length=0}QRPolynomial.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var o=0;o<t.getLength();o++)e[r+o]^=QRMath.gexp(QRMath.glog(this.get(r))+QRMath.glog(t.get(o)));return new QRPolynomial(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=QRMath.glog(this.get(0))-QRMath.glog(t.get(0)),r=new Array(this.getLength()),o=0;o<this.getLength();o++)r[o]=this.get(o);for(o=0;o<t.getLength();o++)r[o]^=QRMath.gexp(QRMath.glog(t.get(o))+e);return new QRPolynomial(r,0).mod(t)}},QRRSBlock.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],QRRSBlock.getRSBlocks=function(t,e){var r=QRRSBlock.getRsBlockTable(t,e);if(null==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var o=r.length/3,n=[],i=0;i<o;i++)for(var a=r[3*i+0],s=r[3*i+1],h=r[3*i+2],l=0;l<a;l++)n.push(new QRRSBlock(s,h));return n},QRRSBlock.getRsBlockTable=function(t,e){switch(e){case QRErrorCorrectLevel.L:return QRRSBlock.RS_BLOCK_TABLE[4*(t-1)+0];case QRErrorCorrectLevel.M:return QRRSBlock.RS_BLOCK_TABLE[4*(t-1)+1];case QRErrorCorrectLevel.Q:return QRRSBlock.RS_BLOCK_TABLE[4*(t-1)+2];case QRErrorCorrectLevel.H:return QRRSBlock.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},QRBitBuffer.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var QRCodeLimitLength=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];function QRCode(t){if(this.options={padding:4,width:256,height:256,typeNumber:4,color:"#000000",background:"#ffffff",ecl:"M"},"string"==typeof t&&(t={content:t}),t)for(var e in t)this.options[e]=t[e];if("string"!=typeof this.options.content)throw new Error("Expected 'content' as string!");if(0===this.options.content.length)throw new Error("Expected 'content' to be non-empty!");if(!(this.options.padding>=0))throw new Error("Expected 'padding' value to be non-negative!");if(!(this.options.width>0&&this.options.height>0))throw new Error("Expected 'width' or 'height' value to be higher than zero!");var r=this.options.content,o=function(t,e){for(var r=function(t){var e=encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return e.length+(e.length!=t?3:0)}(t),o=1,n=0,i=0,a=QRCodeLimitLength.length;i<=a;i++){var s=QRCodeLimitLength[i];if(!s)throw new Error("Content too long: expected "+n+" but got "+r);switch(e){case"L":n=s[0];break;case"M":n=s[1];break;case"Q":n=s[2];break;case"H":n=s[3];break;default:throw new Error("Unknwon error correction level: "+e)}if(r<=n)break;o++}if(o>QRCodeLimitLength.length)throw new Error("Content too long");return o}(r,this.options.ecl),n=function(t){switch(t){case"L":return QRErrorCorrectLevel.L;case"M":return QRErrorCorrectLevel.M;case"Q":return QRErrorCorrectLevel.Q;case"H":return QRErrorCorrectLevel.H;default:throw new Error("Unknwon error correction level: "+t)}}(this.options.ecl);this.qrcode=new QRCodeModel(o,n),this.qrcode.addData(r),this.qrcode.make()}QRCode.prototype.svg=function(t){var e=this.options||{},r=this.qrcode.modules;void 0===t&&(t={container:e.container||"svg"});for(var o=void 0===e.pretty||!!e.pretty,n=o?"  ":"",i=o?"\r\n":"",a=e.width,s=e.height,h=r.length,l=a/(h+2*e.padding),u=s/(h+2*e.padding),g=void 0!==e.join&&!!e.join,d=void 0!==e.swap&&!!e.swap,f=void 0===e.xmlDeclaration||!!e.xmlDeclaration,c=void 0!==e.predefined&&!!e.predefined,R=c?n+'<defs><path id="qrmodule" d="M0 0 h'+u+" v"+l+' H0 z" style="fill:'+e.color+';shape-rendering:crispEdges;" /></defs>'+i:"",p=n+'<rect x="0" y="0" width="'+a+'" height="'+s+'" style="fill:'+e.background+';shape-rendering:crispEdges;"/>'+i,m="",Q="",v=0;v<h;v++)for(var E=0;E<h;E++)if(r[E][v]){var M=E*l+e.padding*l,C=v*u+e.padding*u;if(d){var B=M;M=C,C=B}if(g){var w=l+M,L=u+C;M=Number.isInteger(M)?Number(M):M.toFixed(2),C=Number.isInteger(C)?Number(C):C.toFixed(2),w=Number.isInteger(w)?Number(w):w.toFixed(2),Q+="M"+M+","+C+" V"+(L=Number.isInteger(L)?Number(L):L.toFixed(2))+" H"+w+" V"+C+" H"+M+" Z "}else m+=c?n+'<use x="'+M.toString()+'" y="'+C.toString()+'" href="#qrmodule" />'+i:n+'<rect x="'+M.toString()+'" y="'+C.toString()+'" width="'+l+'" height="'+u+'" style="fill:'+e.color+';shape-rendering:crispEdges;"/>'+i}g&&(m=n+'<path x="0" y="0" style="fill:'+e.color+';shape-rendering:crispEdges;" d="'+Q+'" />');var T="";switch(t.container){case"svg":f&&(T+='<?xml version="1.0" standalone="yes"?>'+i),T+='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="'+a+'" height="'+s+'">'+i,T+=R+p+m,T+="</svg>";break;case"svg-viewbox":f&&(T+='<?xml version="1.0" standalone="yes"?>'+i),T+='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 '+a+" "+s+'">'+i,T+=R+p+m,T+="</svg>";break;case"g":T+='<g width="'+a+'" height="'+s+'">'+i,T+=R+p+m,T+="</g>";break;default:T+=(R+p+m).replace(/^\s+/,"")}return T},QRCode.prototype.save=function(t,e){var r=this.svg();"function"!=typeof e&&(e=function(t,e){});try{require("fs").writeFile(t,r,e)}catch(t){e(t)}},"undefined"!=typeof module&&(module.exports=QRCode);`};
export const businessCardActions = {
  primaryActions: [
    {
      name: 'Mobile',
      icon: 'call',
      href: 'tel:',
      placeholder: '+XX XXXXX XXXXX',
      value: null,
      label: 'Mobile number',
      order: 0,
      isURL: 0,
    },
    {
      name: 'Office',
      icon: 'call',
      href: 'tel:',
      placeholder: '+XX XXXXX XXXXX',
      value: null,
      label: 'Office number',
      order: 1,
      isURL: 0,
    },
    {
      name: 'Home',
      icon: 'call',
      href: 'tel:',
      placeholder: '+XX XXXXX XXXXX',
      value: null,
      label: 'Home number',
      order: 2,
      isURL: 0,
    },
    {
      name: 'SMS',
      icon: 'sms',
      href: 'sms:',
      placeholder: '+XX XXXXX XXXXX',
      value: null,
      label: 'SMS mobile number',
      order: 3,
      isURL: 0,
    },
    {
      name: 'Email',
      icon: 'email',
      href: 'mailto:',
      placeholder: 'info@example.com',
      value: null,
      label: 'Email address',
      order: 4,
    },
    {
      name: 'Website',
      icon: 'website',
      placeholder: 'https://example.com',
      value: null,
      label: 'Website URL',
      order: 5,
      isURL: 1,
    },
    {
      name: 'Store',
      icon: 'store',
      placeholder: 'https://example.com/storeID',
      value: null,
      label: 'Online Store URL',
      order: 6,
      isURL: 1,
    },
    {
      name: 'Location',
      icon: 'location',
      placeholder: 'https://osm.org/go/location',
      value: null,
      label: 'Map location URL',
      order: 7,
      isURL: 1,
    },
    {
      name: 'WhatsApp',
      icon: 'whatsapp',
      placeholder: 'https://wa.me/profileID',
      value: null,
      label: 'WhatsApp profile URL',
      order: 11,
      isURL: 1,
    },
    {
      name: 'Line',
      icon: 'line',
      href: 'https://line.me/ti/p/',
      placeholder: 'LINE ID',
      value: null,
      label: 'Line profile ID',
      order: 14,
      isURL: 1,
    },
    {
      name: 'Messenger',
      icon: 'messenger',
      href: 'https://m.me/',
      placeholder: 'username',
      value: null,
      label: 'Messenger username',
      order: 12,
      isURL: 1,
    },
    {
      name: 'WeChat',
      icon: 'wechat',
      href: 'weixin://dl/chat?',
      placeholder: 'WeChat ID',
      value: null,
      label: 'WeChat profile ID',
      order: 16,
      isURL: 1,
    },
    {
      name: 'Telegram',
      icon: 'telegram',
      href: 'https://t.me/',
      placeholder: 'username',
      value: null,
      label: 'Telegram username',
      order: 9,
      isURL: 1,
    },
    {
      name: 'Signal',
      icon: 'signal',
      href: 'https://signal.me/#p/',
      placeholder: '+XXXXXXXXXXXX',
      value: null,
      label: 'Signal number with country code (no spaces)',
      order: 8,
      isURL: 1,
    },
    
    {
      name: 'Matrix',
      icon: 'matrix',
      href: 'https://matrix.to/#/',
      placeholder: '@username:matrix.org',
      value: null,
      label: 'Matrix userID',
      order: 10,
      isURL: 1,
    },

    {
      name: 'Skype',
      icon: 'skype',
      href: 'skype:',
      hrefEnd: '?chat',
      placeholder: 'username',
      value: null,
      label: 'Skype username',
      order: 13,
      isURL: 1,
    },
    
    {
      name: 'Viber',
      icon: 'viber',
      href: 'viber://chat?number=',
      placeholder: 'XX XXXXX XXXXX',
      value: null,
      label: 'Viber mobile number',
      order: 15,
      isURL: 1,
    },
    {
      name: 'Calendar',
      icon: 'calendar',
      placeholder: 'https://example.com/calendarID',
      value: null,
      label: 'Calendar URL',
      order: 17,
      isURL: 1,
    },
    {
      name: 'XMPP',
      icon: 'xmpp',
      href: 'xmpp:',
      placeholder: 'XMPP ID',
      value: null,
      label: 'XMPP ID',
      order: 18,
      isURL: 1,
    },
    // {
    //   name: 'IRC',
    //   icon: 'irc',
    //   href: 'irc:',
    //   placeholder: 'IRC ID',
    //   value: null,
    //   label: 'IRC ID',
    //   order: 19,
    //   isURL: 1,
    // },
  ],
  secondaryActions: [
    // todo: Fix Instagram gradient icon preview
    {
      name: 'Facebook',
      icon: 'facebook',
      href: 'https://facebook.com/',
      placeholder: 'username or pagename',
      value: null,
      color: '#1877f2',
      label: 'Facebook username or pagename',
    },
    {
      name: 'Instagram',
      icon: 'instagram',
      href: 'https://instagram.com/',
      placeholder: 'username',
      value: null,
      color: '#ffffff',
      light: 1,
      gradientIcon: 1,
      label: 'Instagram username',
    },
    {
      name: 'X Twitter',
      icon: 'twitter',
      href: 'https://twitter.com/',
      placeholder: 'username',
      value: null,
      color: '#1da1f2',
      label: 'Twitter username',
    },
    {
      name: 'Threads',
      icon: 'threads',
      href: 'https://www.threads.net/',
      placeholder: '@username',
      value: null,
      color: '#000000',
      label: 'Threads username',
    },
    // {
    //   name: 'Pixelfed',
    //   icon: 'pixelfed',
    //   placeholder: 'https://pixelfed.social/username',
    //   value: null,
    //   color: '#8d59a8',
    //   label: 'Pixelfed profile URL',
    // },
    
    // {
    //   name: 'Diaspora',
    //   icon: 'diaspora',
    //   placeholder: 'https://diaspora.social/username',
    //   value: null,
    //   color: '#000000',
    //   label: 'Diaspora profile URL',
    // },
    // {
    //   name: 'Friendica',
    //   icon: 'friendica',
    //   placeholder: 'https://friendica.social/username',
    //   value: null,
    //   color: '#1d6e9a',
    //   label: 'Friendica profile URL',
    // },
    
    // {
    //   name: 'Mastodon',
    //   icon: 'mastodon',
    //   placeholder: 'https://mastodon.social/@username',
    //   value: null,
    //   color: '#2b90d9',
    //   label: 'Mastodon profile URL',
    // },
    {
      name: 'LinkedIn',
      icon: 'linkedin',
      href: 'https://linkedin.com/',
      placeholder: 'in/username or company/companyname',
      value: null,
      color: '#0077b5',
      label: 'Linkedin username or companyname',
    },
    {
      name: 'YouTube',
      icon: 'youtube',
      href: 'https://youtube.com/',
      placeholder: 'channel name or ID',
      value: null,
      color: '#ff0000',
      label: 'Youtube channel name or ID',
    },
    {
      name: 'Vimeo',
      icon: 'vimeo',
      href: 'https://vimeo.com/',
      placeholder: 'channelname',
      value: null,
      color: '#1ab7ea',
      label: 'Vimeo channelname',
    },
    {
      name: 'Twitch',
      icon: 'twitch',
      href: 'https://twitch.tv/',
      placeholder: 'username',
      value: null,
      color: '#9146ff',
      label: 'Twitch username',
    },
    {
      name: 'TikTok',
      icon: 'tiktok',
      href: 'https://tiktok.com/',
      placeholder: 'username',
      value: null,
      color: '#fff',
      light: 1,
      label: 'TikTok username',
    },
    // {
    //   name: 'Peertube',
    //   icon: 'peertube',
    //   placeholder: 'https://peertube.video/channelname',
    //   value: null,
    //   color: '#ffffff',
    //   light: 1,
    //   label: 'Peertube channel URL',
    // },
    {
      name: 'Pinterest',
      icon: 'pinterest',
      href: 'https://pinterest.com/',
      placeholder: 'username',
      value: null,
      color: '#bd081c',
      label: 'Pinterest username',
    },
    // {
    //   name: 'Behance',
    //   icon: 'behance',
    //   href: 'https://behance.net/',
    //   placeholder: 'username',
    //   value: null,
    //   color: '#1769ff',
    //   label: 'Behance username',
    // },
    {
      name: 'Dribbble',
      icon: 'dribbble',
      href: 'https://dribbble.com/',
      placeholder: 'username',
      value: null,
      color: '#ea4c89',
      label: 'Dribbble username',
    },
    {
      name: 'Reddit',
      icon: 'reddit',
      href: 'https://reddit.com/',
      placeholder: 'username',
      value: null,
      color: '#ff5700',
      label: 'Reddit username',
    },
    {
      name: 'VK',
      icon: 'vk',
      href: 'https://vk.com/',
      placeholder: 'pagename',
      value: null,
      color: '#4a76a8',
      label: 'VK page URL',
    },
    {
      name: 'Snapchat',
      icon: 'snapchat',
      href: 'https://www.snapchat.com/add/',
      placeholder: 'username',
      value: null,
      color: '#fffc00',
      light: 1,
      label: 'Snapchat username',
    },
    {
      name: 'Tumblr',
      icon: 'tumblr',
      href: 'https://',
      hrefEnd: '.tumblr.com/',
      placeholder: 'username',
      value: null,
      color: '#2c4762',
      label: 'Tumblr blog URL',
    },
    {
      name: 'Quora',
      icon: 'quora',
      href: 'https://quora.com/',
      placeholder: 'username',
      value: null,
      color: '#a82400',
      label: 'Quora username',
    },
    {
      name: 'Medium',
      icon: 'medium',
      placeholder: 'https://medium.com/publication_name',
      value: null,
      color: '#000000',
      label: 'Medium publication',
    },
    {
      name: 'Discord',
      icon: 'discord',
      placeholder: 'https://discord.gg/invitecode',
      value: null,
      color: '#7289da',
      label: 'Discord channel invite link',
    },
    {
      name: 'Spotify',
      icon: 'spotify',
      href: 'https://open.spotify.com/user/',
      placeholder: 'username',
      value: null,
      color: '#1ed760',
      label: 'Spotify username',
    },
    {
      name: 'Soundcloud',
      icon: 'soundcloud',
      href: 'https://soundcloud.com/',
      placeholder: 'username',
      value: null,
      color: '#ff3300',
      label: 'Soundcloud username',
    },
    {
      name: 'Patreon',
      icon: 'patreon',
      href: 'https://patreon.com/',
      placeholder: 'username',
      value: null,
      color: '#FF424D',
      label: 'Patreon URL',
    },
    // {
    //   name: 'Funkwhale',
    //   icon: 'funkwhale',
    //   placeholder: 'https://funkwhale.audio/username',
    //   value: null,
    //   color: '#ffffff',
    //   light: 1,
    //   label: 'Funkwhale username',
    // },
    {
      name: 'GitHub',
      icon: 'github',
      href: 'https://github.com/',
      placeholder: 'username',
      value: null,
      color: '#333',
      label: 'Github username',
    },
    {
      name: 'GitLab',
      icon: 'gitlab',
      href: 'https://gitlab.com/',
      placeholder: 'username',
      value: null,
      color: '#171321 ',
      label: 'Gitlab username',
    },
    // {
    //   name: 'Codeberg',
    //   icon: 'codeberg',
    //   href: 'https://codeberg.org/',
    //   placeholder: 'username',
    //   value: null,
    //   color: '#2185d0',
    //   label: 'Codeberg username',
    // },
    {
      name: 'Yelp',
      icon: 'yelp',
      href: 'https://yelp.com/',
      placeholder: 'bizname',
      value: null,
      color: '#fff',
      light: 1,
      label: 'Yelp pagename',
    },
    {
      name: 'PayPal',
      icon: 'paypal',
      href: 'https://paypal.me/',
      placeholder: 'username',
      value: null,
      color: '#003087',
      label: 'PayPal.me URL',
    },

    {
      name: 'Open-Collective',
      icon: 'opencollective',
      href: 'https://opencollective.com/',
      placeholder: 'projectname',
      value: null,
      color: '#fff',
      light: 1,
      label: 'Open Collective projectname',
    },
  
    // {
    //   name: 'Cash App',
    //   icon: 'cashapp',
    //   href: 'https://cash.app/',
    //   placeholder: '$username',
    //   value: null,
    //   color: '#fff',
    //   light: 1,
    //   label: 'Cash App username',
    // },
    {
      name: 'Siilo',
      icon: 'siilo',
      href: 'https://app.siilo.com/qr/',
      placeholder: 'userID',
      value: null,
      color: '#17233b',
      label: 'Siilo userID',
    },
    {
      name: 'App Store',
      icon: 'appstore',
      placeholder: 'https://apps.apple.com/in/app/appname/id',
      value: null,
      color: 'linear-gradient(#5fc9f8, #147efb)',
      label: 'App Store developer/app URL',
    },
    {
      name: 'Play Store',
      icon: 'playstore',
      placeholder: 'https://play.google.com/store/apps/details?id=',
      value: null,
      color: '#fff',
      light: 1,
      label: 'Play Store developer/app URL',
    },
    // {
    //   name: 'ArtStation',
    //   icon: 'artstation',
    //   href: 'https://www.artstation.com/',
    //   placeholder: 'username',
    //   value: null,
    //   color: '#171717',
    //   label: 'ArtStation username',
    // },
    {
      name: 'Buy me a coffee',
      icon: 'buymeacoffee',
      href: 'https://www.buymeacoffee.com/',
      placeholder: 'username',
      value: null,
      color: '#ffdd00',
      light: 1,
      label: 'Buy me a coffee username',
    },
  ],
}

export const svgImage = {
  youtube: `<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24"><path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"/></svg>`,
  yelp: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#af0606"><path d="M19.589 17.194c-.111.801-1.758 2.893-2.514 3.204a.7.7 0 0 1-.712-.078c-.134-.111-.267-.3-2.047-3.193l-.523-.856c-.2-.312-.167-.712.089-1.024.245-.3.612-.411.923-.29l1.335.446c2.982.979 3.082 1.012 3.215 1.112.19.156.278.39.234.668zM13.604 12.8c-.223-.323-.212-.701 0-.968l.834-1.135c1.836-2.48 1.936-2.614 2.058-2.703.212-.134.468-.145.723-.023.723.356 2.18 2.526 2.27 3.36v.022a.69.69 0 0 1-.278.668c-.145.078-.267.133-3.671.957l-1.002.267.023-.023c-.334.112-.712-.055-.935-.4zm-2.092-1.29c-.155.055-.656.2-1.268-.78 0 0-4.105-6.463-4.205-6.674a.723.723 0 0 1 .222-.668c.601-.645 3.927-1.569 4.784-1.357.29.067.49.256.556.5.056.279.445 6.286.512 7.632.056 1.146-.445 1.302-.6 1.346zm.545 6.574c0 3.148-.01 3.26-.066 3.404a.712.712 0 0 1-.568.445c-.8.134-3.304-.79-3.827-1.413a.823.823 0 0 1-.178-.411.556.556 0 0 1 .034-.29c.066-.155.155-.289 2.403-2.925l.667-.78c.223-.288.623-.377 1.001-.222.356.134.579.445.557.78v1.4zm-6.82-2.002a.7.7 0 0 1-.6-.4 2.681 2.681 0 0 1-.2-.846c-.111-1.08.033-2.715.356-3.227.156-.244.378-.367.623-.367.156 0 .3.056 3.526 1.38l.935.378c.334.111.556.467.534.868-.033.39-.256.69-.59.778l-1.335.423c-2.992.968-3.092 1.001-3.248.98ZM17.72 22Z" style="stroke-width:1.11249"/></svg>`,
  xmpp: `<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M7.778,17.504c-1.33,0.602 -2.321,0.785 -2.321,0.785c-0.474,0.086 -0.822,0.502 -0.822,0.984c0,0.549 0.452,1 1,1c0,0 0.001,0 0.001,0c1.781,0 3.498,-0.332 5.113,-0.91c-1.041,-0.534 -2.035,-1.156 -2.971,-1.859Zm10.586,2.769c0,0 0.001,0 0.001,0c0.548,0 1,-0.451 1,-1c-0,-0.482 -0.348,-0.898 -0.822,-0.984c-0.474,-0.086 -9.179,-1.698 -9.179,-11.744c-0,-0.445 -0.298,-0.839 -0.726,-0.961l-6.363,-1.818c-0.089,-0.026 -0.182,-0.039 -0.275,-0.039c-0.548,0 -1,0.452 -1,1c-0,2.294 1.216,5.285 3.353,8.028c3.141,4.029 8.238,7.518 14.011,7.518Zm-5.732,-6.729c1.168,-1.694 2.004,-3.966 2.004,-6.999c0,-0.445 0.298,-0.839 0.726,-0.961l6.363,-1.818c0.089,-0.026 0.182,-0.039 0.275,-0.039c0.548,0 1,0.452 1,1c-0,2.294 -1.216,5.285 -3.353,8.028c-1.037,1.328 -2.226,2.53 -3.543,3.581c-0.63,-0.324 -1.229,-0.706 -1.789,-1.14c1.411,-1.049 2.674,-2.284 3.754,-3.671c1.417,-1.817 2.404,-3.742 2.772,-5.427l-4.22,1.206c-0.136,3.336 -1.167,5.837 -2.542,7.703c-0.531,-0.437 -1.016,-0.927 -1.447,-1.463Zm-2.066,2.265c-1.769,-1.164 -3.335,-2.612 -4.635,-4.284c-1.417,-1.817 -2.404,-3.742 -2.772,-5.427l4.22,1.206c0.157,3.837 1.496,6.569 3.183,8.501l0.004,0.004Z" style="fill:#fff;"/></svg>`,
  x: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2"><path style="fill:none" d="M0 0h24v24H0z"/><path d="M18 6 6 18M6 6l12 12" style="fill:none;fill-rule:nonzero;stroke:#fff;stroke-width:2px"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2"><path style="fill:none" d="M0 0h24v24H0z"/><path d="M18 6 6 18M6 6l12 12" style="fill:none;fill-rule:nonzero;stroke:#fff;stroke-width:2px"/></svg>`,
  wechat: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2"><path style="fill:none" d="M0 0h24v24H0z"/><path d="M96 20c-.734 0-1.45-.071-2.138-.207L90 22v-3.801c-2.428-1.643-4-4.257-4-7.199 0-4.967 4.481-9 10-9s10 4.033 10 9c0 .461-.039.913-.113 1.356" style="fill:none;stroke:#fff;stroke-width:2.5px" transform="matrix(.8 0 0 .8 -66.8 .4)"/><path d="M90 18.199c-2.428-1.643-4-4.257-4-7.199 0-4.967 4.481-9 10-9s10 4.033 10 9-4.481 9-10 9c-.734 0-1.45-.071-2.138-.207L90 22v-3.801Z" style="fill:none;stroke:#fff;stroke-width:3.33px" transform="matrix(-.6 0 0 .6 73.6 8.8)"/><circle cx="131" cy="36" r="1" style="fill:#fff" transform="translate(-124 -29)"/><circle cx="131" cy="36" r="1" style="fill:#fff" transform="translate(-118 -29)"/><circle cx="131" cy="36" r="1" style="fill:#fff" transform="translate(-117 -22)"/><circle cx="131" cy="36" r="1" style="fill:#fff" transform="translate(-113 -22)"/></svg>`,
  website: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2"><g><path style="fill:none" d="M0 0h24v24H0z"/><clipPath id="a"><path d="M0 0h24v24H0z"/></clipPath><g clip-path="url(#a)"><circle cx="12" cy="12" r="10" style="fill:none;stroke:#fff;stroke-width:2px"/><ellipse cx="40" cy="40" rx="4" ry="10" style="fill:none;stroke:#fff;stroke-width:2px;stroke-linejoin:miter" transform="translate(-28 -28)"/><path d="M40 50s-2-4-2-10 2-10 2-10" style="fill:none;stroke:#fff;stroke-width:2px" transform="rotate(-90 11.5 39.5)"/></g></g></svg>`,
  vk: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path d="M21.079 6.855c.14-.465 0-.806-.662-.806h-2.193c-.558 0-.813.295-.953.619 0 0-1.115 2.719-2.695 4.482-.51.513-.743.675-1.021.675-.139 0-.341-.162-.341-.627V6.855c0-.558-.161-.806-.626-.806H9.142c-.348 0-.558.258-.558.504 0 .528.79.65.871 2.138v3.228c0 .707-.127.836-.407.836-.743 0-2.551-2.729-3.624-5.853-.209-.607-.42-.852-.98-.852H2.252c-.627 0-.752.295-.752.619 0 .582.743 3.462 3.461 7.271 1.812 2.601 4.363 4.011 6.687 4.011 1.393 0 1.565-.313 1.565-.853v-1.966c0-.626.133-.752.574-.752.324 0 .882.164 2.183 1.417 1.486 1.486 1.732 2.153 2.567 2.153h2.192c.626 0 .939-.313.759-.931-.197-.615-.907-1.51-1.849-2.569-.512-.604-1.277-1.254-1.51-1.579-.325-.419-.231-.604 0-.976.001.001 2.672-3.761 2.95-5.04z" fill="#fff" fill-rule="nonzero"/></svg>`,
  vimeo: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path d="M20.562 10.414c-2.036 4.349-6.949 10.267-10.054 10.267-3.06 0-3.501-6.527-5.173-10.869-.823-2.138-1.354-1.646-2.896-.567L1.5 8.031c2.248-1.976 4.499-4.272 5.88-4.399 1.559-.148 2.517.916 2.873 3.193.475 2.994 1.137 7.641 2.291 7.641.9 0 3.117-3.686 3.232-5.004.203-1.93-1.421-1.989-2.828-1.387 2.228-7.295 11.494-5.95 7.614 2.339z" fill="#fff" fill-rule="nonzero"/></svg>`,
  viber: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5"><path style="fill:none" d="M0 0h24v24H0z"/><path d="M16.5 16c-4.415 0-8-3.585-8-8" style="fill:none;stroke:#fff;stroke-width:2px" transform="translate(-1.5)"/><path d="M192 30c8.889 0 11.111 2.222 11.111 10 0 7.778-2.222 10-11.111 10l-4.444 2.148v-2.422c-5.332-.995-6.667-3.698-6.667-9.726 0-7.778 2.222-10 11.111-10Z" style="fill:none;stroke:#fff;stroke-width:2.22px;stroke-miterlimit:2" transform="matrix(.9 0 0 .9 -160.8 -25)"/><path d="M193 40.732a1.999 1.999 0 0 0 0-3.464" style="fill:none;stroke:#fff;stroke-width:1px;stroke-miterlimit:2" transform="rotate(-45 68.2 242.28)"/><path d="M193 40.732a1.999 1.999 0 0 0 0-3.464" style="fill:none;stroke:#fff;stroke-width:.4px;stroke-miterlimit:2" transform="scale(2.5) rotate(-45 56.634 247.67)"/></svg>`,
  twitter: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path d="M19.981 8.497c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22A8.073 8.073 0 0 0 22 6.414a8.645 8.645 0 0 1-2.019 2.083z" fill="#fff" fill-rule="nonzero"/></svg>`,
  twitch: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" fill="#fff"><path d="M7.43 3 3.858 6.572v12.856h4.285V23l3.572-3.572h2.857L21 13V3H7.43zm12.141 9.286-2.857 2.857h-2.856l-2.5 2.5v-2.5H8.143V4.429h11.428v7.857z" fill-rule="nonzero"/><path d="M14.917 7.042h1.167v3.5h-1.167zm-3.209 0h1.167v3.5h-1.167z"/></svg>`,
  tumble: `<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24"><path d="M14.078 20.953c-2.692 0-4.699-1.385-4.699-4.7v-5.308H6.931V8.07c2.694-.699 3.821-3.017 3.95-5.023h2.796v4.558h3.263v3.34h-3.263v4.622c0 1.386.699 1.864 1.813 1.864h1.58v3.522h-2.992z"/></svg>`,
  tiktok: `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 24 24"><path fill="#ff004f" d="M16.27 9.22a7.86 7.86 0 0 0 4.58 1.47V7.4a4.64 4.64 0 0 1-.96-.1v2.59a7.86 7.86 0 0 1-4.58-1.47v6.7a6.08 6.08 0 0 1-6.08 6.08 6.05 6.05 0 0 1-3.39-1.03A6.06 6.06 0 0 0 10.2 22a6.08 6.08 0 0 0 6.08-6.07V9.22Zm1.19-3.32a4.58 4.58 0 0 1-1.2-2.68V2.8h-.9a4.6 4.6 0 0 0 2.1 3.1zm-9.5 11.7a2.78 2.78 0 0 1 3.06-4.33V9.9a6.13 6.13 0 0 0-.96-.06v2.62a2.78 2.78 0 0 0-3.62 2.65c0 1.08.62 2.02 1.53 2.48z"/><path d="M15.3 8.42a7.86 7.86 0 0 0 4.59 1.47v-2.6a4.6 4.6 0 0 1-2.44-1.39 4.6 4.6 0 0 1-2.1-3.1h-2.39v13.13a2.78 2.78 0 0 1-5 1.67 2.78 2.78 0 0 1 2.1-5.13V9.85a6.08 6.08 0 0 0-4.21 10.32 6.05 6.05 0 0 0 3.38 1.03 6.08 6.08 0 0 0 6.07-6.07V8.42Z"/><path fill="#00f2ea" d="M19.89 7.3v-.7a4.58 4.58 0 0 1-2.44-.7 4.6 4.6 0 0 0 2.44 1.4zm-4.53-4.5a4.69 4.69 0 0 1-.05-.38V2H12v13.13a2.78 2.78 0 0 1-4.03 2.47 2.78 2.78 0 0 0 5-1.68V2.8Zm-5.3 7.05v-.74a6.08 6.08 0 0 0-4.21 11.06 6.08 6.08 0 0 1 4.21-10.32z"/></svg>`,
  threads: `<svg width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
  <g transform="matrix(0.02,0,0,0.02,3.221,2)">
      <path d="M447,1000L446.4,1000C297.2,999 182.5,949.8 105.4,853.8C36.9,768.3 1.5,649.4 0.3,500.4L0.3,499.7C1.5,350.6 36.9,231.8 105.5,146.3C182.5,50.2 297.3,1 446.4,0L447,0C561.4,0.8 657.1,30.2 731.4,87.4C801.3,141.2 850.5,217.8 877.6,315.2L792.6,338.9C746.6,173.9 630.2,89.6 446.6,88.3C325.4,89.2 233.7,127.3 174.1,201.5C118.4,271 89.6,371.4 88.5,500C89.6,628.6 118.4,729 174.2,798.5C233.8,872.8 325.5,910.9 446.7,911.7C556,910.9 628.3,885.4 688.4,826.5C757,759.3 755.8,676.8 733.8,626.6C720.9,597 697.4,572.4 665.7,553.7C657.7,610 639.8,655.6 612.2,690C575.3,735.9 523,761 456.8,764.6C406.7,767.3 358.4,755.5 321,731.2C276.7,702.5 250.8,658.7 248,607.7C245.3,558.1 265,512.5 303.4,479.3C340.1,447.6 391.7,429 452.7,425.5C497.6,423 539.7,425 578.5,431.4C573.3,400.5 562.9,375.9 547.3,358.2C525.9,333.8 492.8,321.4 449,321.1L447.8,321.1C412.6,321.1 364.8,330.8 334.4,376.1L261.2,327C302,266.4 368.2,233 447.8,233L449.6,233C582.7,233.8 662,315.3 669.9,457.5C674.4,459.4 678.9,461.4 683.3,463.4C745.4,492.6 790.8,536.8 814.7,591.3C847.9,667.2 851,790.9 750.2,889.6C673.1,965 579.6,999.1 447,1000ZM488.5,512.9C478.4,512.9 468.2,513.2 457.7,513.8C381.2,518.1 333.5,553.2 336.2,603.1C339,655.4 396.7,679.7 452.2,676.7C503.2,674 569.6,654.1 580.8,522.1C552.6,516 521.7,512.9 488.5,512.9Z" style="fill:#fff;fill-rule:nonzero;"/>
  </g>
</svg>
`,
  text: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2"><path style="fill:none" d="M0 0h24v24H0z"/><path d="M37 179h6M40 165v14M34 167v-2h12v2" style="fill:none;stroke:#fff;stroke-width:2px" transform="translate(-28 -160)"/></svg>`,
  telegram: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5"><path style="fill:none" d="M0 0h24v24H0z"/><path d="m10 14 3.636-4M1 12l19-9-2 18-5-4.375L8 19l-2-5.889L1 12Z" style="fill:none;stroke:#fff;stroke-width:2px"/></svg>`,
  spostify: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5"><path style="fill:none" d="M0 0h24v24H0z"/><path d="m10 14 3.636-4M1 12l19-9-2 18-5-4.375L8 19l-2-5.889L1 12Z" style="fill:none;stroke:#fff;stroke-width:2px"/></svg>`,
  soundcloud: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" fill="#fff"><path d="M.272 12.233c-.051 0-.09.039-.096.094L0 13.66l.176 1.311c.006.055.045.093.096.093.049 0 .088-.038.096-.093l.208-1.311-.208-1.333c-.008-.055-.047-.094-.096-.094zm.987-.728c-.009-.057-.049-.097-.099-.097-.053 0-.094.041-.101.097L.824 13.66l.235 2.108c.007.057.048.098.101.098.05 0 .09-.041.099-.097l.267-2.109-.267-2.155zm3.718-1.988a.184.184 0 0 0-.181.18l-.189 3.966.189 2.562c.004.1.084.179.181.179.096 0 .175-.08.182-.179l.213-2.562-.213-3.966a.188.188 0 0 0-.182-.18zm-1.925 1.379a.142.142 0 0 0-.14.137L2.7 13.661l.212 2.542c.005.08.066.138.14.138.073 0 .133-.058.141-.138l.24-2.542-.24-2.628c-.008-.078-.068-.137-.141-.137zm3.881 5.508c.12 0 .217-.096.221-.221l.186-2.519-.186-5.28a.224.224 0 0 0-.221-.221.225.225 0 0 0-.224.221l-.162 5.279.162 2.521c.003.123.103.22.224.22zm4.002.012a.31.31 0 0 0 .305-.304v.003-.003l.128-2.447-.128-6.097a.31.31 0 0 0-.305-.304.308.308 0 0 0-.304.304l-.116 6.095.116 2.452c.002.165.14.301.304.301zm-2.017-.01c.144 0 .26-.115.264-.263v.002l.156-2.481-.157-5.317a.264.264 0 0 0-.527 0l-.138 5.317.138 2.481a.265.265 0 0 0 .264.261zm-4.908-.023a.166.166 0 0 0 .162-.158l.225-2.564-.225-2.438a.165.165 0 0 0-.162-.158.162.162 0 0 0-.16.159l-.2 2.437.2 2.564c.005.09.074.158.16.158zm-1.909-.14c.063 0 .115-.05.121-.118l.254-2.465-.254-2.557c-.006-.068-.058-.118-.121-.118-.062 0-.112.05-.12.118l-.224 2.557.224 2.465c.007.068.058.118.12.118zm7.822-7.985a.284.284 0 0 0-.285.283l-.126 5.124.126 2.465a.285.285 0 0 0 .57-.001v.001l.14-2.465-.14-5.125a.286.286 0 0 0-.285-.282zm-3.972 8.151a.206.206 0 0 0 .202-.2l.197-2.546-.197-4.872a.206.206 0 0 0-.202-.2.204.204 0 0 0-.203.2l-.176 4.872.176 2.548c.004.11.094.198.203.198zm2.212-.241v-.001l.17-2.503-.17-5.457a.243.243 0 0 0-.242-.242.244.244 0 0 0-.243.242l-.152 5.457.153 2.504a.242.242 0 0 0 .484-.001v.001zm12.885-5.651c-.405 0-.79.083-1.141.23a5.21 5.21 0 0 0-7.077-4.395c-.221.087-.281.176-.285.347v9.37a.359.359 0 0 0 .32.349l8.183.005a2.952 2.952 0 0 0 0-5.906zm-9.105-3.826a.328.328 0 0 0-.326.325l-.133 6.651.134 2.413a.325.325 0 0 0 .325.321.327.327 0 0 0 .324-.324v.003l.145-2.413-.145-6.652a.327.327 0 0 0-.324-.324z"/></svg>`,
  snapchat: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round"><path d="M20.744 16.732c-3.156-1.528-3.659-3.887-3.681-4.062-.027-.212-.058-.378.176-.594.225-.208 1.225-.827 1.503-1.021.459-.321.661-.641.512-1.035-.104-.272-.358-.375-.625-.375-.084.001-.168.01-.25.028-.504.11-.994.362-1.277.431a.52.52 0 0 1-.104.014c-.151 0-.209-.068-.194-.249.035-.551.11-1.627.023-2.631-.119-1.382-.565-2.067-1.093-2.672C15.478 4.272 14.291 3.01 12 3.01S8.523 4.272 8.269 4.562c-.53.606-.975 1.29-1.094 2.672-.087 1.005-.008 2.08.024 2.631.01.173-.043.249-.194.249a.457.457 0 0 1-.104-.014c-.283-.068-.772-.321-1.276-.43a1.11 1.11 0 0 0-.251-.028c-.268 0-.52.104-.625.375-.149.393.052.713.513 1.034.277.194 1.278.813 1.503 1.021.233.216.203.383.176.594-.022.178-.526 2.537-3.681 4.062-.185.09-.5.279.055.585.87.481 1.45.43 1.9.72.383.246.157.777.435.969.341.236 1.351-.017 2.655.414 1.094.36 1.758 1.378 3.697 1.378 1.94 0 2.623-1.022 3.698-1.378 1.301-.431 2.313-.178 2.655-.414.278-.192.052-.723.434-.969.451-.29 1.03-.239 1.901-.72.554-.302.239-.492.054-.581z" fill="#fff" fill-rule="nonzero"/><path d="M6.145 8.775a14.229 14.229 0 0 1 .034-1.626c.144-1.68.693-2.509 1.338-3.246C7.823 3.554 9.241 2.01 12 2.01c2.76 0 4.18 1.545 4.487 1.898.642.736 1.192 1.565 1.337 3.244.047.551.05 1.123.036 1.626.098-.031.199-.058.3-.08.153-.035.309-.052.469-.053.682 0 1.293.322 1.56 1.021.307.81.07 1.549-.875 2.209-.211.147-.879.555-1.226.803.145.478.812 2.05 3.092 3.154.222.107.482.299.623.51.15.224.218.476.195.749-.024.268-.134.72-.825 1.098a5.57 5.57 0 0 1-1.331.521c-.123.033-.235.053-.337.085a2.614 2.614 0 0 1-.068.319 1.303 1.303 0 0 1-.514.711c-.213.147-.537.257-.978.287-.441.03-1.124-.014-1.931.253-.36.119-.661.339-1.005.546-.742.448-1.603.883-3.007.883-1.185 0-1.98-.311-2.647-.677-.488-.268-.873-.59-1.363-.751-.809-.268-1.493-.224-1.932-.254-.442-.03-.766-.14-.978-.287a1.31 1.31 0 0 1-.515-.711 2.834 2.834 0 0 1-.067-.319c-.102-.032-.215-.052-.337-.085a5.57 5.57 0 0 1-1.331-.521c-.691-.381-.802-.832-.825-1.1a1.133 1.133 0 0 1 .193-.748c.141-.212.402-.405.624-.513 2.281-1.103 2.947-2.675 3.092-3.154-.346-.247-1.015-.655-1.226-.802-.947-.661-1.182-1.399-.874-2.214.266-.692.874-1.016 1.561-1.016.157 0 .313.018.46.05.104.023.207.051.308.083zm14.599 7.957c-3.156-1.528-3.659-3.887-3.681-4.062-.027-.212-.058-.378.176-.594.225-.208 1.225-.827 1.503-1.021.459-.321.661-.641.512-1.035-.104-.272-.358-.375-.625-.375-.084.001-.168.01-.25.028-.504.11-.994.362-1.277.431a.52.52 0 0 1-.104.014c-.151 0-.209-.068-.194-.249.035-.551.11-1.627.023-2.631-.119-1.382-.565-2.067-1.093-2.672C15.478 4.272 14.291 3.01 12 3.01S8.523 4.272 8.269 4.562c-.53.606-.975 1.29-1.094 2.672-.087 1.005-.008 2.08.024 2.631.01.173-.043.249-.194.249a.457.457 0 0 1-.104-.014c-.283-.068-.772-.321-1.276-.43a1.11 1.11 0 0 0-.251-.028c-.268 0-.52.104-.625.375-.149.393.052.713.513 1.034.277.194 1.278.813 1.503 1.021.233.216.203.383.176.594-.022.178-.526 2.537-3.681 4.062-.185.09-.5.279.055.585.87.481 1.45.43 1.9.72.383.246.157.777.435.969.341.236 1.351-.017 2.655.414 1.094.36 1.758 1.378 3.697 1.378 1.94 0 2.623-1.022 3.698-1.378 1.301-.431 2.313-.178 2.655-.414.278-.192.052-.723.434-.969.451-.29 1.03-.239 1.901-.72.554-.302.239-.492.054-.581z"/></svg>`,
  sms: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2"><path style="fill:none" d="M0 0h24v24H0z"/><path d="M75.3 61c.477 0 .935.171 1.273.476.337.305.527.718.527 1.149v8.125c0 .897-.806 1.625-1.8 1.625h-8.975a9.7 9.7 0 0 0-4.992 1.365L60.9 74V62.625c0-.431.19-.844.527-1.149A1.904 1.904 0 0 1 62.7 61h12.6Z" style="fill:none;stroke:#fff;stroke-width:1.71px" transform="matrix(1.11111 0 0 1.23077 -64.667 -71.077)"/><path d="M36 13h4" style="fill:none;stroke:#fff;stroke-width:2px;stroke-linejoin:miter" transform="translate(-28)"/><path d="M36 9h8" style="fill:none;stroke:#fff;stroke-width:2px" transform="translate(-28)"/></svg>`,
  skype: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2"><path style="fill:none" d="M0 0h24v24H0z"/><path d="M3.177 10.218A4.963 4.963 0 0 1 2 7c0-2.76 2.24-5 5-5 1.226 0 2.35.442 3.218 1.177A9.02 9.02 0 0 1 12 3c4.967 0 9 4.033 9 9a9.02 9.02 0 0 1-.177 1.782A4.963 4.963 0 0 1 22 17c0 2.76-2.24 5-5 5a4.963 4.963 0 0 1-3.218-1.177A9.02 9.02 0 0 1 12 21c-4.967 0-9-4.033-9-9 0-.61.061-1.206.177-1.782Z" style="fill:none;stroke:#fff;stroke-width:2px"/><path d="M139 65.25s-6-2-6 2c0 3 6 1 6 4 0 4-6 2-6 2" style="fill:none;stroke:#fff;stroke-width:2px" transform="translate(-124 -57.25)"/></svg>`,
  siilo: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2">
	<path d="M32.771 81.653c0-9.075 8.571-13.36 18.402-13.36 10.336 0 19.159 4.537 23.696 14.369l22.94-12.857c-8.823-16.637-25.965-26.216-46.636-26.216-25.712 0-46.131 14.873-46.131 38.569 0 45.123 67.81 32.518 67.81 54.954 0 10.083-9.327 14.117-21.427 14.117-13.864 0-23.948-6.807-27.981-18.15L0 146.691c8.067 18.15 26.217 29.494 51.425 29.494 27.225 0 49.157-13.613 49.157-38.821 0-46.636-67.811-32.771-67.811-55.711Z" style="fill:#fff;fill-rule:nonzero" transform="translate(5 .398) scale(.10558)" />
	<circle cx="432.621" cy="159.17" r="17.356" style="fill:#fcf10c" transform="translate(-25.323 .95) scale(.1016)" />
</svg>`,
signal: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2"><path style="fill:none" d="M0 0h24v24H0z"/><path d="M5.43 4.93A9.969 9.969 0 0 1 12.5 2c5.519 0 10 4.481 10 10 0 2.76-1.12 5.26-2.93 7.07l.001.001-.003.001A9.97 9.97 0 0 1 12.5 22a9.835 9.835 0 0 1-5.005-1.354l-4.187.546.546-4.187A9.835 9.835 0 0 1 2.5 12a9.97 9.97 0 0 1 2.928-7.068l.001-.003.001.001Z" style="fill:none;stroke:#fff;stroke-width:2.86px" transform="matrix(.7 0 0 .7 3.75 3.6)"/><path d="M5.43 4.93A9.969 9.969 0 0 1 12.5 2c5.519 0 10 4.481 10 10 0 2.76-1.12 5.26-2.93 7.07l.001.001-.003.001A9.97 9.97 0 0 1 12.5 22a9.835 9.835 0 0 1-5.005-1.354l-4.187.546.546-4.187A9.835 9.835 0 0 1 2.5 12a9.97 9.97 0 0 1 2.928-7.068l.001-.003.001.001Z" style="fill:none;stroke:#fff;stroke-width:.91px;stroke-dasharray:2.73,2.73,0,0;stroke-dashoffset:1.82" transform="matrix(1.1 0 0 1.1 -1.25 -1.2)"/></svg>`,
share: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-miterlimit:2"><g><path style="fill:none" d="M0 0h24v24H0z"/><clipPath id="a"><path d="M0 0h24v24H0z"/></clipPath><g clip-path="url(#a)"><circle cx="17" cy="5" r="3" style="fill:none;stroke:#fff;stroke-width:2px"/><circle cx="5" cy="12" r="3" style="fill:none;stroke:#fff;stroke-width:2px"/><circle cx="17" cy="19" r="3" style="fill:none;stroke:#fff;stroke-width:2px"/><path d="m7.59 13.51 6.83 3.98m-.01-10.98-6.82 3.98" style="fill:none;stroke:#fff;stroke-width:2px"/></g></g></svg>`,
reddit: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path d="M22 11.586a2.199 2.199 0 0 0-2.197-2.197c-.598 0-1.125.229-1.511.616-1.494-1.072-3.568-1.776-5.853-1.863l1.002-4.693 3.252.686A1.564 1.564 0 1 0 18.256 2.5c-.614 0-1.141.352-1.388.879l-3.638-.774a.437.437 0 0 0-.298.053.434.434 0 0 0-.177.247l-1.107 5.237c-2.337.07-4.428.755-5.94 1.863a2.213 2.213 0 0 0-1.511-.616A2.199 2.199 0 0 0 2 11.586c0 .897.527 1.652 1.301 2.004a4.014 4.014 0 0 0-.053.667c0 3.375 3.919 6.098 8.769 6.098 4.851 0 8.77-2.723 8.77-6.098 0-.228-.017-.439-.052-.65A2.274 2.274 0 0 0 22 11.586zM6.974 13.15c0-.861.702-1.564 1.564-1.564.861 0 1.564.703 1.564 1.564 0 .862-.703 1.565-1.564 1.565a1.567 1.567 0 0 1-1.564-1.565zm8.734 4.13c-1.072 1.073-3.111 1.143-3.708 1.143s-2.654-.088-3.708-1.143a.414.414 0 0 1 0-.58.414.414 0 0 1 .58 0c.667.668 2.109.915 3.145.915 1.038 0 2.461-.247 3.147-.915a.414.414 0 0 1 .58 0 .454.454 0 0 1-.036.58zm-.281-2.565a1.567 1.567 0 0 1-1.564-1.565c0-.861.702-1.564 1.564-1.564.861 0 1.564.703 1.564 1.564 0 .862-.703 1.565-1.564 1.565z" fill="#fff" fill-rule="nonzero"/></svg>`,
quora: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" fill="#fff"><path d="M13.26 17.036c-.624-1.228-1.355-2.468-2.783-2.468-.272 0-.544.046-.795.16l-.485-.971c.591-.506 1.545-.909 2.773-.909 1.91 0 2.889.92 3.666 2.094.462-1.002.682-2.355.682-4.034 0-4.188-1.311-6.339-4.371-6.339-3.015 0-4.318 2.151-4.318 6.339 0 4.168 1.303 6.297 4.318 6.297a4.68 4.68 0 0 0 1.313-.169zm.748 1.461a7.994 7.994 0 0 1-2.061.276C7.932 18.773 4 15.568 4 10.908 4 6.205 7.932 3 11.947 3c4.083 0 7.977 3.182 7.977 7.908 0 2.63-1.227 4.767-3.01 6.148.576.863 1.169 1.437 1.996 1.437.901 0 1.265-.697 1.325-1.243h1.174c.069.727-.295 3.75-3.576 3.75-1.986 0-3.038-1.152-3.825-2.503z"/></svg>`,
qrcode: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2"><path style="fill:none" d="M0 0h24v24H0z"/><path d="M4 4h4v4H4V4Zm0 12h4v4H4v-4ZM16 4h4v4h-4V4Z" style="fill:none;stroke:#fff;stroke-width:2px"/><path d="M12 4v14c0 1.097.903 2 2 2h4c1.097 0 2-.903 2-2v-4c0-1.097-.903-2-2-2H4" style="fill:none;stroke:#fff;stroke-width:2px;stroke-linejoin:miter"/><path style="fill:#fff" d="M15 15h2v2h-2z"/></svg>`,
product: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2"><path style="fill:none" d="M0 0h24v24H0z"/><path d="m12 193 1.763 3.573 3.943.573-2.853 2.781.674 3.927L12 202l-3.527 1.854.674-3.927-2.853-2.781 3.943-.573L12 193Z" style="fill:none;stroke:#fff;stroke-width:1.33px" transform="matrix(1.5 0 0 1.5 -6 -286.5)"/></svg>`,
playstore: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M4.379 2.304c-.225.242-.354.614-.354 1.097v17.192c0 .483.129.855.363 1.089l.061.051 9.633-9.633v-.217L4.44 2.252l-.061.052Z" style="fill:#3bccff"/><path d="m17.286 15.324-3.213-3.215v-.224l3.215-3.215.069.043 3.801 2.161c1.089.613 1.089 1.624 0 2.246l-3.801 2.16-.071.044Z" style="fill:#ffd400"/><path d="m17.356 15.28-3.283-3.283-9.694 9.694c.354.38.95.423 1.616.052l11.361-6.463" style="fill:#f33"/><path d="M17.356 8.714 5.995 2.261c-.665-.381-1.262-.329-1.616.051l9.693 9.685 3.284-3.283Z" style="fill:#48ff48"/></svg>`,
play: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2"><path style="fill:none" d="M0 0h24v24H0z"/><path d="M7 6.663a1.998 1.998 0 0 1 3.082-1.682l8.301 5.337a2 2 0 0 1 0 3.364l-8.301 5.337A1.998 1.998 0 0 1 7 17.337V6.663Z" style="fill:none;stroke:#fff;stroke-width:2px"/></svg>`,
pixelfed: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" fill="#fff"><path d="M9.835 15.338h3.387C16.413 15.338 19 12.8 19 9.669S16.413 4 13.222 4H8.333C6.492 4 5 5.464 5 7.271V20l4.835-4.662z"/></svg>`,
pinterest: `<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24"><path d="M11.99 2C6.472 2 2 6.473 2 11.99c0 4.232 2.633 7.85 6.35 9.306-.088-.79-.166-2.006.034-2.868.182-.78 1.172-4.966 1.172-4.966s-.299-.599-.299-1.484c0-1.388.805-2.425 1.808-2.425.853 0 1.264.64 1.264 1.407 0 .858-.546 2.139-.827 3.327-.235.994.499 1.805 1.479 1.805 1.775 0 3.141-1.872 3.141-4.575 0-2.392-1.719-4.064-4.173-4.064-2.843 0-4.512 2.132-4.512 4.335 0 .858.331 1.779.744 2.28a.3.3 0 0 1 .069.286c-.076.315-.245.994-.277 1.133-.044.183-.145.222-.335.134-1.247-.581-2.027-2.405-2.027-3.871 0-3.151 2.289-6.045 6.601-6.045 3.466 0 6.159 2.469 6.159 5.77 0 3.444-2.171 6.213-5.184 6.213-1.013 0-1.964-.525-2.29-1.146l-.623 2.374c-.225.868-.834 1.956-1.241 2.62a10 10 0 0 0 2.958.445c5.517 0 9.99-4.473 9.99-9.99S17.507 2 11.99 2"/></svg>`,
peertube: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path d="M6.5 2v10L14 7" fill="#211f20"/><path d="M6.5 12v10l7.5-5" fill="#737373"/><path d="M14 7v10l7.5-5" fill="#f1680d"/></svg>`,
paypal: `<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="24" height="24"><path d="M19.554 9.488c.121.563.106 1.246-.04 2.051-.582 2.978-2.477 4.466-5.683 4.466h-.442a.666.666 0 0 0-.444.166.72.72 0 0 0-.239.427l-.041.189-.553 3.479-.021.151a.706.706 0 0 1-.247.426.666.666 0 0 1-.447.166H8.874a.395.395 0 0 1-.331-.15.457.457 0 0 1-.09-.363c.061-.373.148-.938.267-1.689.117-.75.206-1.314.267-1.689s.15-.938.272-1.685c.121-.748.212-1.31.271-1.685.033-.248.179-.371.433-.371h1.316c.893.013 1.682-.057 2.375-.211 1.172-.262 2.134-.744 2.886-1.449.685-.637 1.203-1.462 1.56-2.473.162-.47.277-.917.352-1.338.006-.041.014-.066.025-.074.008-.011.022-.014.035-.011a.378.378 0 0 1 .062.035c.524.398.854.941.98 1.632zm-1.728-2.836c0 .717-.154 1.508-.465 2.374-.537 1.562-1.547 2.618-3.037 3.168-.758.269-1.602.408-2.535.425 0 .006-.301.007-.904.007l-.903-.007c-.672 0-1.067.32-1.187.964-.013.053-.298 1.83-.855 5.329-.008.066-.048.102-.121.102H4.854a.473.473 0 0 1-.369-.165.469.469 0 0 1-.115-.39L6.702 3.664a.784.784 0 0 1 .276-.483.785.785 0 0 1 .519-.19h6.014c.228 0 .555.044.979.131.428.084.801.194 1.123.321.718.274 1.266.688 1.645 1.237.379.552.568 1.207.568 1.972z"/></svg>`,
pause: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2"><path style="fill:none" d="M0 0h24v24H0z"/><path d="M34 138a2 2 0 1 1 4 0v12a2 2 0 1 1-4 0v-12Z" style="fill:none;fill-rule:nonzero;stroke:#fff;stroke-width:2px" transform="translate(-28 -132)"/><path d="M34 138a2 2 0 1 1 4 0v12a2 2 0 1 1-4 0v-12Z" style="fill:none;fill-rule:nonzero;stroke:#fff;stroke-width:2px" transform="translate(-20 -132)"/></svg>`,
patreon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff"><circle cx="14.51" cy="9.83" r="6.5"/><path d="M3 3.33h3.17v17.33H3z"/></svg>`,
openCollective: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#b8d3f4" d="M19.69 12c0 1.5-.46 2.95-1.25 4.2l3.14 3.14A12.15 12.15 0 0 0 24 12.06c0-2.75-.92-5.24-2.48-7.27l-3.08 3.08A7.5 7.5 0 0 1 19.68 12z"/><path fill="#7fadf2" d="M11.97 19.74a7.74 7.74 0 0 1 0-15.48c1.57 0 3 .46 4.18 1.25l3.08-3.09A11.99 11.99 0 0 0 0 12c0 6.62 5.36 12 11.97 12 2.63 0 5.18-.87 7.26-2.5l-3.14-3.14a6.38 6.38 0 0 1-4.12 1.38z"/></svg>`,
monero: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M12 1.983c-5.53 0-10.022 4.491-10.015 10.016.001 1.105.178 2.168.508 3.163H5.49V6.736l6.51 6.51 6.509-6.51v8.426h2.998c.331-.995.506-2.058.508-3.163C22.025 6.468 17.53 1.984 12 1.984v-.001Z" style="fill:#f26821;fill-rule:nonzero"/><path d="m10.503 14.742-2.841-2.841v5.302H5.49l-2.05.001a10.018 10.018 0 0 0 17.12-.001h-4.223v-5.302l-2.841 2.841L12 16.239l-1.497-1.497Z" style="fill:#4d4d4d;fill-rule:nonzero"/></svg>`,
messenger: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2"><path style="fill:none" d="M0 0h24v24H0z"/><path d="M90 18.199c-2.428-1.643-4-4.257-4-7.199 0-4.967 4.481-9 10-9s10 4.033 10 9-4.481 9-10 9c-.734 0-1.45-.071-2.138-.207L90 22v-3.801ZM91 13l3-3 4 2 3-3" style="fill:none;stroke:#fff;stroke-width:2px" transform="translate(-84)"/></svg>`,
medium: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" fill="#fff"><path d="M13.278 11.995c0 3.135-2.525 5.677-5.639 5.677C4.524 17.672 2 15.13 2 11.994c0-3.135 2.524-5.677 5.639-5.677 3.114 0 5.639 2.542 5.639 5.678zm6.185.006c0 2.951-1.262 5.344-2.82 5.344-1.556 0-2.819-2.393-2.819-5.344 0-2.951 1.263-5.345 2.819-5.345 1.558 0 2.82 2.394 2.82 5.345zM22 11.994c0 2.644-.443 4.789-.991 4.789s-.992-2.145-.992-4.789c0-2.644.444-4.788.992-4.788S22 9.349 22 11.994z"/></svg>`,
matrix: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2"><path style="fill:none" d="M0 0h24v24H0z"/><path d="M218.5 38.917V41v-1.215c0-.23.094-.451.26-.614a.9.9 0 0 1 .629-.254c.236 0 .462.091.628.254a.858.858 0 0 1 .261.614V41v-1.215c0-.23.093-.451.26-.614a.9.9 0 0 1 .629-.254c.235 0 .462.091.628.254a.858.858 0 0 1 .261.614V41" style="fill:none;stroke:#fff;stroke-width:.7px" transform="matrix(2.8125 0 0 2.88 -607.531 -103.08)"/><path d="M170.5 60.714h2v14.572h-2" style="fill:none;stroke:#fff;stroke-width:.92px" transform="matrix(1 0 0 1.16667 -150 -67.333)"/><path d="M170.5 60.714h2v14.572h-2" style="fill:none;stroke:#fff;stroke-width:.92px" transform="matrix(-1 0 0 1.16667 174 -67.333)"/></svg>`,
mastodon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" fill="#fff"><path d="M20.93 13.99c-.274 1.411-2.455 2.955-4.961 3.254-1.307.156-2.594.299-3.966.236-2.243-.103-4.013-.535-4.013-.535 0 .218.013.426.04.621.291 2.214 2.195 2.346 3.999 2.408 1.82.063 3.441-.448 3.441-.448l.075 1.645s-1.274.684-3.542.81c-1.25.068-2.803-.032-4.612-.511-3.923-1.038-4.598-5.22-4.701-9.462-.031-1.26-.012-2.448-.012-3.441 0-4.339 2.842-5.611 2.842-5.611 1.434-.658 3.894-.935 6.45-.956h.063c2.557.021 5.018.298 6.452.956 0 0 2.842 1.272 2.842 5.611 0 0 .036 3.201-.397 5.423zm-2.956-5.087v5.253h-2.081V9.058c0-1.075-.453-1.621-1.357-1.621-1.001 0-1.501.647-1.501 1.927v2.791h-2.07V9.364c0-1.28-.501-1.927-1.501-1.927-.904 0-1.357.546-1.357 1.621v5.098H6.025V8.903c0-1.074.275-1.927.823-2.558.567-.632 1.308-.955 2.228-.955 1.066 0 1.872.409 2.405 1.228l.519.87.519-.87c.532-.819 1.339-1.228 2.404-1.228.921 0 1.662.323 2.228.955.549.631.823 1.484.823 2.558z"/></svg>`,
logo: `<svg xmlns="http://www.w3.org/2000/svg" fill="#10b981" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 512 412"><path d="M115.96 384.67a38.44 38.44 0 0 0 36.57 26.67 38.41 38.41 0 0 0 0-76.8 38.44 38.44 0 0 0-35.81 24.53H25.6V26.27h460.8v332.8h-93.26a38.43 38.43 0 0 0-35.81-24.53 38.41 38.41 0 0 0 0 76.8 38.44 38.44 0 0 0 36.57-26.67h105.3a12.8 12.8 0 0 0 12.8-12.8V13.47A12.8 12.8 0 0 0 499.2.67H12.8A12.8 12.8 0 0 0 0 13.47v358.4a12.8 12.8 0 0 0 12.8 12.8zm138.97-50.13a38.41 38.41 0 0 0 0 76.8 38.41 38.41 0 0 0 0-76.8zm-102.4 25.6a12.8 12.8 0 1 1-.01 25.6 12.8 12.8 0 0 1 .01-25.6zm102.4 0a12.8 12.8 0 1 1-.01 25.6 12.8 12.8 0 0 1 .01-25.6zm102.4 0a12.8 12.8 0 1 1-.01 25.6 12.8 12.8 0 0 1 .01-25.6zM153.6 128.67c-35.32 0-64 28.67-64 64 0 35.32 28.68 64 64 64s64-28.68 64-64c0-35.33-28.68-64-64-64zm204.8 76.8h-89.6a12.8 12.8 0 0 0 0 25.6h89.6a12.8 12.8 0 0 0 0-25.6zm-204.8-51.2a38.41 38.41 0 0 1 0 76.8 38.41 38.41 0 0 1 0-76.8zm115.2 25.6h139.93a12.8 12.8 0 0 0 0-25.6H268.8a12.8 12.8 0 0 0 0 25.6z"/></svg>`,
location: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2"><g><path style="fill:none" d="M0 0h24v24H0z"/><circle cx="12" cy="10" r="3" style="fill:none;stroke:#fff;stroke-width:2px"/><path d="M40 29c4.967 0 9 4.033 9 9 0 7-9 13-9 13s-9-6.033-9-13c0-4.967 4.033-9 9-9Z" style="fill:none;stroke:#fff;stroke-width:2px" transform="translate(-28 -28)"/></g></svg>`,
linkedin: `<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24"><path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"/></svg>`,
line: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2"><path style="fill:none" d="M0 0h24v24H0z"/><path d="M164 30c5.519 0 10 4.033 10 9 0 8-11 11-11 11v-2.045c-5.05-.452-9-4.291-9-8.955 0-4.967 4.481-9 10-9Z" style="fill:none;stroke:#fff;stroke-width:2px" transform="translate(-152 -28)"/><path d="M158 37v4h2" style="fill:none;stroke:#fff;stroke-width:1px;stroke-miterlimit:1" transform="translate(-152 -28.5)"/><path d="M168 38.5h1.5" style="fill:none;stroke:#fff;stroke-width:1px;stroke-miterlimit:1" transform="translate(-152 -28)"/><path d="M162 37v4" style="fill:none;stroke:#fff;stroke-width:1px;stroke-miterlimit:1" transform="translate(-152 -28.5)"/><path d="M164 40.5v-4l2 4v-4M170 36.5h-2v4h2" style="fill:none;stroke:#fff;stroke-width:1px;stroke-miterlimit:1" transform="translate(-152 -28)"/></svg>`,
key: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2"><path style="fill:none" d="M0 0h24v24H0z"/><circle cx="7" cy="148" r="5" style="fill:none;stroke:#fff;stroke-width:2px" transform="translate(0 -132)"/><path d="m16 139 3 3 3-3-3-3" style="fill:none;fill-rule:nonzero;stroke:#fff;stroke-width:2px" transform="translate(0 -132)"/><path d="m21 134-10.465 10.465" style="fill:none;stroke:#fff;stroke-width:2px" transform="translate(0 -132)"/></svg>`,
irc: `<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"><g><path d="M9,3.5l-2,17" style="fill:none;stroke:#fff;stroke-width:2px;"/><path d="M17,3.5l-2,17" style="fill:none;stroke:#fff;stroke-width:2px;"/><path d="M4,8l17,0" style="fill:none;stroke:#fff;stroke-width:2px;"/><path d="M3,16l17,0" style="fill:none;stroke:#fff;stroke-width:2px;"/></g></svg>`,
instagram: `<svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
<path d="M4.796,1.577C4.072,1.859 3.459,2.234 2.847,2.847C2.234,3.455 1.859,4.073 1.577,4.793C1.304,5.49 1.121,6.291 1.067,7.463C1.013,8.634 1,9.01 1,11.998C1,14.985 1.013,15.361 1.067,16.533C1.121,17.705 1.309,18.505 1.577,19.203C1.859,19.927 2.234,20.54 2.847,21.153C3.459,21.766 4.072,22.141 4.796,22.423C5.494,22.696 6.294,22.879 7.466,22.933C8.637,22.987 9.013,23 12,23C14.987,23 15.363,22.987 16.534,22.933C17.706,22.879 18.506,22.691 19.204,22.423C19.928,22.141 20.541,21.766 21.153,21.153C21.766,20.54 22.141,19.927 22.423,19.203C22.696,18.505 22.879,17.705 22.933,16.533C22.987,15.361 23,14.985 23,11.998C23,9.01 22.987,8.634 22.933,7.463C22.879,6.291 22.691,5.49 22.423,4.793C22.141,4.073 21.766,3.455 21.158,2.847C20.545,2.234 19.933,1.859 19.208,1.577C18.511,1.304 17.71,1.121 16.539,1.067C15.367,1.013 14.991,1 12.004,1C9.017,1 8.642,1.013 7.47,1.067C6.294,1.116 5.494,1.304 4.796,1.577ZM16.445,3.044C17.518,3.093 18.099,3.272 18.488,3.424C19.002,3.625 19.369,3.862 19.754,4.247C20.138,4.632 20.375,4.998 20.576,5.513C20.728,5.902 20.907,6.483 20.957,7.557C21.01,8.715 21.019,9.064 21.019,12.002C21.019,14.941 21.006,15.289 20.957,16.448C20.907,17.521 20.728,18.103 20.576,18.492C20.375,19.006 20.138,19.373 19.754,19.757C19.369,20.142 19.002,20.379 18.488,20.58C18.099,20.732 17.518,20.911 16.445,20.961C15.287,21.014 14.938,21.023 12,21.023C9.062,21.023 8.713,21.01 7.555,20.961C6.482,20.911 5.901,20.732 5.512,20.58C4.998,20.379 4.631,20.142 4.246,19.757C3.862,19.373 3.625,19.006 3.424,18.492C3.272,18.103 3.093,17.521 3.043,16.448C2.99,15.289 2.981,14.941 2.981,12.002C2.981,9.064 2.994,8.715 3.043,7.557C3.093,6.483 3.272,5.902 3.424,5.513C3.625,4.998 3.862,4.632 4.246,4.247C4.631,3.862 4.998,3.625 5.512,3.424C5.901,3.272 6.482,3.093 7.555,3.044C8.713,2.99 9.062,2.981 12,2.981C14.938,2.981 15.287,2.99 16.445,3.044ZM6.352,12.002C6.352,15.124 8.883,17.651 12,17.651C15.117,17.651 17.648,15.12 17.648,12.002C17.648,8.885 15.121,6.354 12,6.354C8.879,6.354 6.352,8.88 6.352,12.002ZM15.667,12.002C15.667,14.028 14.026,15.67 12,15.67C9.974,15.67 8.333,14.028 8.333,12.002C8.333,9.976 9.974,8.335 12,8.335C14.026,8.335 15.667,9.976 15.667,12.002ZM17.876,4.811C18.604,4.811 19.195,5.402 19.195,6.13C19.195,6.858 18.604,7.449 17.876,7.449C17.148,7.449 16.557,6.858 16.557,6.13C16.557,5.402 17.148,4.811 17.876,4.811Z" style="fill:url(#gradient1);fill-rule:nonzero;" />
<defs>
  <radialGradient id="gradient1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-22,22,-22,-22,23,1)">
    <stop offset="0" style="stop-color:#4c63d2;stop-opacity:1" />
    <stop offset="0.4" style="stop-color:#bc3081;stop-opacity:1" />
    <stop offset="0.75" style="stop-color:#f47133;stop-opacity:1" />
    <stop offset="1" style="stop-color:#fed576;stop-opacity:1" />
  </radialGradient>
</defs>
</svg>
`,
imo: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2"><path style="fill:none" d="M0 0h24v24H0z"/><path d="M162 37v3" style="fill:none;stroke:#fff;stroke-width:1.09px" transform="matrix(1 0 0 .83333 -154.5 -20.333)"/><circle cx="216.5" cy="37.5" r=".5" style="fill:#fff" transform="translate(-209 -28.5)"/><path d="M164 40v-1.875" style="fill:none;stroke:#fff;stroke-width:.85px" transform="matrix(1 0 0 1.33333 -154.5 -40.333)"/><circle cx="225" cy="40" r="1" style="fill:none;stroke:#fff;stroke-width:.8px" transform="matrix(1.25 0 0 1.25 -264.5 -38.25)"/><path d="M218.5 40.5v-1a1 1 0 0 1 2 0V41v-1.5a.997.997 0 0 1 1-1 .997.997 0 0 1 1 1V41" style="fill:none;stroke:#fff;stroke-width:1px" transform="translate(-209 -28)"/><path d="M212.809 45.074A9.447 9.447 0 0 1 211 39.5c0-5.243 4.257-9.5 9.5-9.5s9.5 4.257 9.5 9.5-4.257 9.5-9.5 9.5a9.453 9.453 0 0 1-4.847-1.329L211 49s1.309-1.309 1.809-3.926Z" style="fill:none;stroke:#fff;stroke-width:2px" transform="translate(-208 -28)"/></svg>`,
gitlab: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2"><path style="fill:none" d="M0 0h24v24H0z"/><path d="M162 37v3" style="fill:none;stroke:#fff;stroke-width:1.09px" transform="matrix(1 0 0 .83333 -154.5 -20.333)"/><circle cx="216.5" cy="37.5" r=".5" style="fill:#fff" transform="translate(-209 -28.5)"/><path d="M164 40v-1.875" style="fill:none;stroke:#fff;stroke-width:.85px" transform="matrix(1 0 0 1.33333 -154.5 -40.333)"/><circle cx="225" cy="40" r="1" style="fill:none;stroke:#fff;stroke-width:.8px" transform="matrix(1.25 0 0 1.25 -264.5 -38.25)"/><path d="M218.5 40.5v-1a1 1 0 0 1 2 0V41v-1.5a.997.997 0 0 1 1-1 .997.997 0 0 1 1 1V41" style="fill:none;stroke:#fff;stroke-width:1px" transform="translate(-209 -28)"/><path d="M212.809 45.074A9.447 9.447 0 0 1 211 39.5c0-5.243 4.257-9.5 9.5-9.5s9.5 4.257 9.5 9.5-4.257 9.5-9.5 9.5a9.453 9.453 0 0 1-4.847-1.329L211 49s1.309-1.309 1.809-3.926Z" style="fill:none;stroke:#fff;stroke-width:2px" transform="translate(-208 -28)"/></svg>`,
github: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff"><path fill-rule="evenodd" d="M12.03 2a9.97 9.97 0 0 0-3.16 19.44c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.91-.61.06-.6.06-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.33 1.08 2.9.83.1-.65.35-1.09.64-1.34-2.22-.25-4.55-1.1-4.55-4.93 0-1.08.4-1.98 1.03-2.67-.1-.26-.45-1.27.1-2.64 0 0 .83-.27 2.74 1.02a9.58 9.58 0 0 1 5 0c1.9-1.3 2.73-1.02 2.73-1.02.55 1.37.2 2.38.1 2.64.64.7 1.03 1.58 1.03 2.67 0 3.84-2.33 4.68-4.56 4.92.36.31.68.92.68 1.85l-.01 2.74c0 .26.18.57.68.48A9.98 9.98 0 0 0 12.03 2z" clip-rule="evenodd"/></svg>`,
funkwhale: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><g fill="#009fe3"><path d="M12 14.49a3.467 3.467 0 0 0 3.463-3.462.19.19 0 0 0-.184-.184h-1.305a.189.189 0 0 0-.183.184c0 .981-.799 1.79-1.791 1.79a1.793 1.793 0 0 1-1.791-1.79.189.189 0 0 0-.183-.184H8.721a.19.19 0 0 0-.184.184A3.46 3.46 0 0 0 12 14.49z"/><path d="M12 17.759c3.7 0 6.721-3.021 6.721-6.721a.19.19 0 0 0-.184-.183h-1.305a.188.188 0 0 0-.183.183 5.06 5.06 0 0 1-10.119 0 .189.189 0 0 0-.184-.183H5.463a.19.19 0 0 0-.184.183c-.021 3.7 2.999 6.721 6.721 6.721z"/><path d="M21.817 10.855h-1.306a.188.188 0 0 0-.183.183c0 4.596-3.754 8.339-8.339 8.339-4.595 0-8.339-3.732-8.339-8.339a.188.188 0 0 0-.183-.183H2.183a.188.188 0 0 0-.183.183c0 5.513 4.488 10 10 10s10-4.487 10-10a.188.188 0 0 0-.183-.183z"/></g><path d="M7.499 6.561c.669.345 1.391.41 2.039.787.42.248.69.518.949.928.41.615.388 1.391.388 1.391l.054.853s.324.852 1.047.852c.766 0 1.046-.852 1.046-.852l.054-.853s-.022-.765.388-1.391c.259-.41.518-.701.95-.928.647-.377 1.37-.442 2.038-.787.669-.346 1.317-.788 1.759-1.403.442-.615.647-1.434.41-2.157-1.273-.065-2.74.086-3.862.69-1.564.831-2.514.54-2.794 1.78h-.022c-.28-1.251-1.219-.949-2.794-1.78-1.122-.604-2.589-.755-3.862-.69-.248.723-.032 1.532.41 2.157.475.626 1.133 1.068 1.802 1.403z" fill="#3c3c3b"/></svg>`,
fackbook: `<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24"><path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"/></svg>`,
friendica: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5"><path d="M20.5 5.5a2 2 0 0 0-2-2h-13a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-13z" fill="none" stroke="#ffc019"/><path d="M14.906 3.5v4.533H9.167V12h5.687v3.967H9.167V20.5H5.5a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2h9.406z" fill="#ffc019"/></svg>`,
file: `fi<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2"><path style="fill:none" d="M0 0h24v24H0z"/><path d="M89 109a2 2 0 0 1 2-2h6l6 6v10a2 2 0 0 1-2 2H91a2 2 0 0 1-2-2v-14Z" style="fill:none;stroke:#fff;stroke-width:2px" transform="translate(-84 -104)"/><path d="M97 107v4a2 2 0 0 0 2 2h4" style="fill:none;stroke:#fff;stroke-width:2px" transform="translate(-84 -104)"/></svg>`,
dribbble: `<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24"><path d="M20.66 6.98a9.932 9.932 0 0 0-3.641-3.64C15.486 2.447 13.813 2 12 2s-3.486.447-5.02 1.34c-1.533.893-2.747 2.107-3.64 3.64S2 10.187 2 12s.446 3.487 1.34 5.02a9.924 9.924 0 0 0 3.641 3.64C8.514 21.553 10.187 22 12 22s3.486-.447 5.02-1.34a9.932 9.932 0 0 0 3.641-3.64C21.554 15.487 22 13.813 22 12s-.446-3.487-1.34-5.02zM12 3.66c2 0 3.772.64 5.32 1.919-.92 1.174-2.286 2.14-4.1 2.9-1.002-1.813-2.088-3.327-3.261-4.54A7.715 7.715 0 0 1 12 3.66zM5.51 6.8a8.116 8.116 0 0 1 2.711-2.22c1.212 1.201 2.325 2.7 3.34 4.5-2 .6-4.114.9-6.341.9-.573 0-1.006-.013-1.3-.04A8.549 8.549 0 0 1 5.51 6.8zM3.66 12c0-.054.003-.12.01-.2.007-.08.01-.146.01-.2.254.014.641.02 1.161.02 2.666 0 5.146-.367 7.439-1.1.187.373.381.793.58 1.26-1.32.293-2.674 1.006-4.061 2.14S6.4 16.247 5.76 17.5c-1.4-1.587-2.1-3.42-2.1-5.5zM12 20.34c-1.894 0-3.594-.587-5.101-1.759.601-1.187 1.524-2.322 2.771-3.401 1.246-1.08 2.483-1.753 3.71-2.02a29.441 29.441 0 0 1 1.56 6.62 8.166 8.166 0 0 1-2.94.56zm7.08-3.96a8.351 8.351 0 0 1-2.58 2.621c-.24-2.08-.7-4.107-1.379-6.081.932-.066 1.765-.1 2.5-.1.799 0 1.686.034 2.659.1a8.098 8.098 0 0 1-1.2 3.46zm-1.24-5c-1.16 0-2.233.047-3.22.14a27.053 27.053 0 0 0-.68-1.62c2.066-.906 3.532-2.006 4.399-3.3 1.2 1.414 1.854 3.027 1.96 4.84-.812-.04-1.632-.06-2.459-.06z"/></svg>`,
email: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2"><path style="fill:none" d="M0 0h24v24H0z"/><path d="M22 33.75c0-.966-.896-1.75-2-1.75H4c-1.104 0-2 .784-2 1.75v10.5c0 .966.896 1.75 2 1.75h16c1.104 0 2-.784 2-1.75v-10.5Z" style="fill:none;stroke:#fff;stroke-width:1.86px" transform="matrix(1 0 0 1.14286 0 -32.571)"/><path d="m18 7.042-6 2.625-6-2.625" style="fill:none;fill-rule:nonzero;stroke:#fff;stroke-width:1.86px" transform="matrix(1 0 0 1.14286 0 1.952)"/></svg>`,
ellipsis: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#edf2f7" stroke-width="2"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>`,
drag: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#4B5563"><path d="M8 4a2 2 0 1 0 0 4 2 2 0 1 0 0-4zm8 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4zm-8 6a2 2 0 1 0 0 4 2 2 0 1 0 0-4zm8 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4zm-8 6a2 2 0 1 0 0 4 2 2 0 1 0 0-4zm8 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4z"/></svg>`,
addImg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2"><path style="fill:none" d="M0 0h24v24H0z"/><path d="m31 89 4-3 2 1 4-3 5 3v-5a2 2 0 0 0-2-2H33a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6M46 91v6M43 94h6" style="fill:none;stroke:#fff;stroke-width:2px" transform="translate(-28 -76)"/></svg>`,
download: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2"><path style="fill:none" d="M0 0h24v24H0z"/><path d="M21 15v4c0 1.097-.903 2-2 2H5c-1.097 0-2-.903-2-2v-4m4-5 5 5 5-5m-5 5V3" style="fill:none;fill-rule:nonzero;stroke:#fff;stroke-width:2px"/></svg>`,
addUser: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2"><path style="fill:none" d="M0 0h24v24H0z"/><circle cx="8.5" cy="7" r="4" style="fill:none;stroke:#fff;stroke-width:2.29px" transform="matrix(.875 0 0 .875 4.563 -.625)"/><path d="M86 181c0-3.863 3.137-7 7-7s7 3.137 7 7" style="fill:none;stroke:#fff;stroke-width:2px" transform="translate(-81 -163)"/><path d="M104 168v6m3-3-3 3-3-3" style="fill:none;fill-rule:nonzero;stroke:#fff;stroke-width:2px" transform="translate(-92 -152)"/></svg>`,
add: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2"><path style="fill:none" d="M0 0h24v24H0z"/><path d="M12 81v14" style="fill:none;fill-rule:nonzero;stroke:#fff;stroke-width:2px" transform="translate(0 -76)"/><path d="M12 81v14" style="fill:none;fill-rule:nonzero;stroke:#fff;stroke-width:2px" transform="rotate(-90 -26 50)"/><path d="M12 81v14" style="fill:none;stroke:#fff;stroke-width:2px" transform="translate(0 -76)"/></svg>`,
discord: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" fill="#fff"><path d="M10.552 10.712c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888.008-.488-.36-.888-.816-.888zm2.92 0c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888s-.36-.888-.816-.888z"/><path d="M18.7 3H5.3c-1.13 0-2.05.92-2.05 2.06v13.52c0 1.14.92 2.06 2.05 2.06h11.34l-.53-1.85 1.28 1.19 1.21 1.12 2.15 1.9V5.06c0-1.14-.92-2.06-2.05-2.06zm-3.86 13.06s-.36-.43-.66-.81c1.31-.37 1.81-1.19 1.81-1.19-.41.27-.8.46-1.15.59-.5.21-.98.35-1.45.43-.96.18-1.84.13-2.59-.01-.57-.11-1.06-.27-1.47-.43-.23-.09-.48-.2-.73-.34-.03-.02-.06-.03-.09-.05-.02-.01-.03-.02-.04-.03-.18-.1-.28-.17-.28-.17s.48.8 1.75 1.18c-.3.38-.67.83-.67.83-2.21-.07-3.05-1.52-3.05-1.52 0-3.22 1.44-5.83 1.44-5.83 1.44-1.08 2.81-1.05 2.81-1.05l.1.12c-1.8.52-2.63 1.31-2.63 1.31s.22-.12.59-.29c1.07-.47 1.92-.6 2.27-.63.06-.01.11-.02.17-.02a8.152 8.152 0 0 1 5.03.94s-.79-.75-2.49-1.27l.14-.16s1.37-.03 2.81 1.05c0 0 1.44 2.61 1.44 5.83 0 0-.85 1.45-3.06 1.52z"/></svg>`,
appstore: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M6.172 18.238a2.2 2.2 0 0 0-1.61-.76h-.005a3.213 3.213 0 0 0-.74.069l-.386.659A1.193 1.193 0 0 0 4.458 20c.408 0 .807-.212 1.028-.589l.686-1.173Zm11.43-4.725h3.687c.658 0 1.191.528 1.191 1.179 0 .65-.533 1.178-1.191 1.178h-2.305l1.368 2.336a1.19 1.19 0 1 1-2.053 1.205l-4.742-8.09a3.272 3.272 0 0 1 .148-2.391l.606-1.034 3.291 5.617Zm-7.09-7.39-4.33 7.39H2.711c-.658 0-1.191.528-1.191 1.179 0 .65.533 1.178 1.191 1.178h10.634a2.142 2.142 0 0 0-.175-1.634l-.137-.229a3.159 3.159 0 0 0-.395-.494H8.942l5.695-9.719a1.19 1.19 0 0 0-2.054-1.204l-.691 1.178-.691-1.179a1.191 1.191 0 0 0-2.055 1.204l1.366 2.33Z" style="fill:#fff;fill-rule:nonzero"/></svg>`,
artstation: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="m2 16.073 1.682 2.911A2.032 2.032 0 0 0 5.478 20.1h11.21l-2.325-4.027H2Zm20 .019c0-.397-.113-.775-.321-1.096L15.1 3.578A2.002 2.002 0 0 0 13.323 2.5H9.845l10.151 17.581 1.607-2.779c.302-.529.397-.756.397-1.21ZM12.718 13.2 8.2 5.355 3.664 13.2h9.054Z" style="fill:#13aff0;fill-rule:nonzero"/></svg>`,
behance: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path d="M8.303 5.731c.589 0 1.119.051 1.605.155.483.103.895.273 1.243.508.343.235.611.547.804.939.187.387.28.871.28 1.443 0 .62-.14 1.138-.421 1.551-.283.414-.7.753-1.256 1.015.757.219 1.318.602 1.69 1.146.374.549.557 1.206.557 1.976 0 .625-.119 1.162-.358 1.613a3.11 3.11 0 0 1-.974 1.114 4.315 4.315 0 0 1-1.399.64 6.287 6.287 0 0 1-1.609.206H2.5V5.731h5.803zm-.351 4.972c.48 0 .878-.114 1.192-.345.312-.228.463-.604.463-1.119 0-.286-.051-.522-.151-.707a1.114 1.114 0 0 0-.417-.428 1.683 1.683 0 0 0-.597-.215 3.609 3.609 0 0 0-.697-.061H5.21v2.875h2.742zm.151 5.239c.267 0 .521-.023.76-.077.241-.052.455-.136.637-.261.182-.12.332-.283.44-.491.109-.206.162-.475.162-.798 0-.634-.179-1.085-.533-1.358-.355-.27-.831-.404-1.414-.404H5.21v3.39h2.893v-.001zm8.565-.041c.367.358.896.538 1.584.538.493 0 .919-.125 1.278-.373.354-.249.57-.515.653-.79h2.155c-.346 1.072-.871 1.838-1.589 2.299-.709.463-1.572.693-2.58.693-.702 0-1.334-.113-1.9-.337a4.033 4.033 0 0 1-1.439-.958 4.37 4.37 0 0 1-.905-1.485 5.433 5.433 0 0 1-.32-1.899c0-.666.111-1.289.329-1.864a4.376 4.376 0 0 1 .934-1.493c.405-.42.885-.751 1.444-.994a4.634 4.634 0 0 1 1.858-.362c.754 0 1.413.146 1.979.44a3.967 3.967 0 0 1 1.39 1.182c.363.493.622 1.058.783 1.691.161.632.217 1.292.171 1.983h-6.431c.001.704.238 1.371.606 1.729zm2.812-4.681c-.291-.322-.783-.496-1.385-.496-.391 0-.714.065-.974.199a1.97 1.97 0 0 0-.62.491 1.772 1.772 0 0 0-.328.628 2.82 2.82 0 0 0-.111.587h3.982c-.058-.624-.272-1.085-.564-1.409zm-3.918-4.663h4.989v1.215h-4.989V6.557z" fill="#fff" fill-rule="nonzero"/></svg>`,
bitcoin: `<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="24" height="24"><path d="M8 13v4H6v2h3v2h2v-2h2v2h2v-2.051c1.968-.249 3.5-1.915 3.5-3.949 0-1.32-.65-2.484-1.64-3.213A3.982 3.982 0 0 0 18 9c0-1.858-1.279-3.411-3-3.858V3h-2v2h-2V3H9v2H6v2h2v6zm6.5 4H10v-4h4.5c1.103 0 2 .897 2 2s-.897 2-2 2zM10 7h4c1.103 0 2 .897 2 2s-.897 2-2 2h-4V7z"/></svg>`,
brand: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#a0aec0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
buymeacoffee: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2">
<path d="M12.483 11.239c-.719.308-1.534.656-2.591.656a4.895 4.895 0 0 1-1.307-.18l.731 7.503a1.252 1.252 0 0 0 1.249 1.15s1.036.054 1.382.054c.372 0 1.488-.054 1.488-.054a1.252 1.252 0 0 0 1.249-1.15l.783-8.291a3.318 3.318 0 0 0-1.101-.199c-.688 0-1.243.237-1.883.511Z" style="fill:#fff;fill-rule:nonzero" />
<path d="m18.846 7.346-.11-.556c-.099-.498-.323-.968-.834-1.148-.164-.058-.35-.082-.475-.202-.126-.119-.163-.304-.192-.476-.054-.315-.105-.63-.16-.945-.047-.27-.085-.574-.209-.822-.162-.333-.497-.528-.83-.657a4.906 4.906 0 0 0-.521-.161c-.833-.22-1.708-.3-2.564-.346a21.44 21.44 0 0 0-3.083.051c-.763.069-1.567.153-2.292.417-.265.097-.538.213-.739.417-.248.252-.328.641-.148.955.129.223.346.38.577.484.3.134.614.236.935.305.896.198 1.824.275 2.74.309 1.014.041 2.03.007 3.04-.1.25-.027.499-.06.748-.098.293-.045.481-.429.394-.695-.103-.32-.381-.443-.695-.395l-.138.021-.033.004a17.43 17.43 0 0 1-.98.096 22.25 22.25 0 0 1-2.947.006 18.513 18.513 0 0 1-.964-.09l-.095-.012-.021-.003-.098-.014a10.318 10.318 0 0 1-.604-.108.088.088 0 0 1-.051-.031.094.094 0 0 1-.02-.057.09.09 0 0 1 .02-.057.095.095 0 0 1 .051-.032h.004c.173-.037.348-.068.522-.096l.176-.026h.001c.11-.008.22-.027.329-.04a20.767 20.767 0 0 1 2.854-.101 19.453 19.453 0 0 1 1.682.121l.113.014.077.011c.222.033.444.074.664.121.327.071.746.094.892.452.046.114.067.24.093.359l.032.152.002.008.231 1.077a.196.196 0 0 1-.031.154.203.203 0 0 1-.135.082h-.002l-.047.007-.046.006a31.973 31.973 0 0 1-1.318.14 30.764 30.764 0 0 1-2.635.106 30.896 30.896 0 0 1-4.02-.268 20.299 20.299 0 0 1-.243-.035c-.271-.041-.54-.091-.81-.135-.327-.054-.64-.027-.936.135a1.357 1.357 0 0 0-.563.584c-.127.263-.165.55-.222.834-.057.283-.146.588-.112.879.072.627.511 1.137 1.142 1.252a33.045 33.045 0 0 0 9.452.313.396.396 0 0 1 .328.115.402.402 0 0 1 .117.327l-.06.581-.361 3.519c-.125 1.232-.252 2.464-.379 3.696l-.107 1.04c-.035.342-.04.694-.105 1.031-.102.531-.461.857-.985.976-.48.109-.971.167-1.463.171-.546.003-1.092-.021-1.638-.018-.583.003-1.296-.051-1.746-.485-.395-.38-.45-.977-.504-1.493-.072-.683-.143-1.365-.213-2.048l-.396-3.796-.256-2.457-.012-.121c-.031-.293-.238-.58-.565-.565-.28.012-.598.25-.565.565l.189 1.821.393 3.767.334 3.21.064.616c.123 1.12.979 1.724 2.039 1.894.618.099 1.252.12 1.88.13.805.013 1.618.044 2.41-.102 1.174-.215 2.054-.999 2.18-2.214l.107-1.053.358-3.483.389-3.794.178-1.738a.399.399 0 0 1 .104-.231.399.399 0 0 1 .221-.124c.336-.065.656-.177.895-.433.38-.406.455-.936.321-1.47Zm-12.621.375c.005-.003-.004.041-.009.062 0-.031.001-.059.009-.062Zm.032.251c.003-.001.011.009.019.022-.012-.012-.02-.02-.019-.022Zm.032.043c.012.019.018.032 0 0Zm.064.052h.002c0 .002.003.004.004.006-.001-.003-.003-.004-.006-.006Zm11.261-.078c-.12.114-.302.168-.481.194-2.013.299-4.055.45-6.089.384-1.456-.05-2.897-.212-4.339-.416-.141-.02-.294-.045-.391-.149-.183-.197-.093-.592-.046-.83.044-.217.127-.507.386-.538.403-.047.872.123 1.271.184.481.073.964.132 1.448.176 2.067.188 4.168.159 6.226-.117.375-.05.749-.109 1.121-.175.332-.06.7-.171.9.172.138.234.156.547.135.812a.454.454 0 0 1-.141.303Z" style="fill:#0d0c22;fill-rule:nonzero" />
</svg>
`,
calendar: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2"><path style="fill:none" d="M0 0h24v24H0z"/><path d="M19 75.111a2.13 2.13 0 0 0 1.414-.521c.375-.333.586-.785.586-1.257V61.778c0-.472-.211-.924-.586-1.257A2.13 2.13 0 0 0 19 60H5a2.13 2.13 0 0 0-1.414.521A1.683 1.683 0 0 0 3 61.778v11.555c0 .472.211.924.586 1.257A2.13 2.13 0 0 0 5 75.111h14Z" style="fill:none;stroke:#fff;stroke-width:1.88px" transform="matrix(1 0 0 1.125 0 -63.5)"/><path d="M76 30v4" style="fill:none;stroke:#fff;stroke-width:2px" transform="translate(-60 -28)"/><path d="M76 30v4" style="fill:none;stroke:#fff;stroke-width:2px" transform="translate(-68 -28)"/><path d="M63 38h10" style="fill:none;stroke:#fff;stroke-width:2px" transform="translate(-56 -28)"/></svg>`,
call: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2"><path style="fill:none" d="M0 0h24v24H0z"/><path d="M11.5 22a.952.952 0 0 1-1.052.945c-4.358-.544-7.851-4.338-8.379-8.39a.938.938 0 0 1 .936-1.046c.399-.009.847-.009 1.202-.009.388 0 .738.237.882.597l.478 1.196a.95.95 0 0 1-.21 1.025l-.107.107a.951.951 0 0 0-.181 1.091c.495.825 1.59 1.92 2.425 2.396a.927.927 0 0 0 1.066-.177c.05-.02.086-.056.122-.092a.95.95 0 0 1 1.025-.21l1.196.478c.36.144.597.494.597.882V22Z" style="fill:none;stroke:#fff;stroke-width:.95px" transform="translate(-2.21 -26.421) scale(2.10526)"/></svg>`,
cashapp: `<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24">
<path fill="#00d632" d="M15.032 2c2 0 3 0 4.093.344a4.25 4.25 0 0 1 2.53 2.531C22 5.968 22 6.969 22 8.972v6.053c0 2.006 0 3.012-.344 4.093a4.25 4.25 0 0 1-2.531 2.532c-1.094.35-2.093.35-4.093.35H8.969c-2.007 0-3.012 0-4.094-.344a4.25 4.25 0 0 1-2.532-2.531C2 18.031 2 17.032 2 15.028V8.97c0-2.007 0-3.012.344-4.094a4.25 4.25 0 0 1 2.531-2.532C5.968 2 6.969 2 8.969 2Z" />
<path d="M15.272 9.437a.396.396 0 0 0 .562 0l.782-.812c.165-.156.156-.438-.02-.606a6.166 6.166 0 0 0-2.1-1.2l.247-1.187a.415.415 0 0 0-.4-.504h-1.511a.412.412 0 0 0-.4.331l-.22 1.057C10.2 6.619 8.493 7.64 8.493 9.734c0 1.813 1.41 2.591 2.9 3.125 1.41.538 2.157.738 2.157 1.494 0 .779-.743 1.234-1.843 1.234-1 0-2.05-.334-2.863-1.15a.407.407 0 0 0-.575 0l-.844.845a.425.425 0 0 0 0 .6c.657.646 1.487 1.115 2.435 1.375l-.232 1.115c-.052.26.138.5.398.503l1.515.012a.412.412 0 0 0 .406-.33l.219-1.06c2.421-.163 3.896-1.497 3.896-3.444 0-1.794-1.469-2.55-3.25-3.166-1.018-.378-1.9-.637-1.9-1.415 0-.756.822-1.056 1.647-1.056 1.05 0 2.06.434 2.72 1.028z" />
</svg>
`,
diaspora: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path d="M15.38 21.065c-.011 0-3.531-5.072-3.551-5.072-.021-.001-3.447 4.853-3.457 4.853-.026 0-3.374-2.45-3.383-2.476-.004-.012 3.372-5.129 3.372-5.156 0-.044-5.341-1.9-5.358-1.907-.025-.01.115-.495.593-2.063.344-1.127.633-2.059.643-2.07.009-.011 5.653 1.901 5.669 1.901.015 0 .033-.024.039-.054.006-.03.057-6.039.068-6.056.014-.024.449-.03 2.044-.03 1.113.001 2.036.009 2.05.019.018.012.186 6.315.237 6.315.02 0 5.418-1.885 5.427-1.875.03.035 1.242 4.135 1.227 4.151-.008.008-5.469 1.945-5.475 1.976-.004.023 3.218 4.96 3.214 4.973-.009.028-3.331 2.571-3.359 2.571z" fill="#fff" fill-rule="nonzero"/></svg>`,
code: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2"><path style="fill:none" d="M0 0h24v24H0z"/><path d="M13 110h3c3.311 0 6 2.689 6 6s-2.689 6-6 6h-3" style="fill:none;stroke:#fff;stroke-width:2.4px" transform="matrix(.83333 0 0 .83333 3.667 -84.667)"/><path d="M13 110h3c3.311 0 6 2.689 6 6s-2.689 6-6 6h-3" style="fill:none;stroke:#fff;stroke-width:2.4px" transform="matrix(-.83333 0 0 .83333 20.333 -84.667)"/><path d="M7 116h10" style="fill:none;stroke:#fff;stroke-width:2px" transform="translate(0 -104)"/></svg>`,
copy: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2"><path style="fill:none" d="M0 0h24v24H0z"/><path d="M22 11a2 2 0 0 0-2-2h-9a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9Z" style="fill:none;stroke:#fff;stroke-width:2px"/><path d="M5 15H4c-1.097 0-2-.903-2-2V4c0-1.097.903-2 2-2h9c1.097 0 2 .903 2 2v1" style="fill:none;fill-rule:nonzero;stroke:#fff;stroke-width:2px"/></svg>`,
codeberg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 6.349 6.349"><defs><linearGradient id="b" x1="42519.285" x2="42575.336" y1="-7078.789" y2="-6966.931" gradientUnits="userSpaceOnUse" xlink:href="#a"/><linearGradient id="a"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".495" stop-color="#fff"/><stop offset="1" stop-color="#fff"/></linearGradient></defs><g paint-order="stroke markers fill"><path style="font-variation-settings:normal;fill:url(#b)" fill="url(#b)" d="M42519.285-7078.79a.76.568 0 0 0-.738.675l33.586 125.888a87.182 87.182 0 0 0 39.381-33.763l-71.565-92.52a.76.568 0 0 0-.664-.28z" opacity=".5" transform="translate(-1066.143 180.113) scale(.02515)"/><path fill="#fff" d="M3.167 1.058A2.193 2.193 0 0 0 .982 3.251a2.193 2.193 0 0 0 .335 1.166l1.828-2.365a.034.026 0 0 1 .06 0l1.827 2.364a2.193 2.193 0 0 0 .335-1.166 2.193 2.193 0 0 0-2.192-2.19 2.193 2.193 0 0 0-.008 0z"/></g></svg>`,
check: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2"><path style="fill:none" d="M0 0h24v24H0z"/><path d="M21 5 8 18l-5-5" style="fill:none;fill-rule:nonzero;stroke:#fff;stroke-width:2px"/></svg>`,
clone: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2"><path style="fill:none" d="M0 0h24v24H0z"/><path d="M18 6 6 18M6 6l12 12" style="fill:none;fill-rule:nonzero;stroke:#fff;stroke-width:2px"/></svg>`,
store: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2"><path style="fill:none" d="M0 0h24v24H0z"/><path d="m59 37 .721-4.329A2.001 2.001 0 0 1 61.694 31h12.612c.977 0 1.812.707 1.973 1.671L77 37" style="fill:none;stroke:#fff;stroke-width:2px" transform="translate(-56 -28)"/><path d="M71 39a2 2 0 0 1-4 0" style="fill:none;stroke:#fff;stroke-width:1.33px" transform="matrix(1.5 0 0 1.5 -85.5 -49.5)"/><path d="M71 39a2 2 0 0 1-4 0" style="fill:none;stroke:#fff;stroke-width:1.33px" transform="matrix(1.5 0 0 1.5 -91.5 -49.5)"/><path d="M71 39a2 2 0 0 1-4 0" style="fill:none;stroke:#fff;stroke-width:1.33px" transform="matrix(1.5 0 0 1.5 -97.5 -49.5)"/><path d="M61 39.235V47c0 .53.184 1.039.513 1.414.328.375.773.586 1.237.586h10.5c.464 0 .909-.211 1.237-.586A2.15 2.15 0 0 0 75 47v-7.765" style="fill:none;stroke:#fff;stroke-width:1.86px" transform="matrix(1.14286 0 0 1 -65.714 -28)"/></svg>`,
facebook: `<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24"><path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"/></svg>`,
tumblr: `<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24"><path d="M14.078 20.953c-2.692 0-4.699-1.385-4.699-4.7v-5.308H6.931V8.07c2.694-.699 3.821-3.017 3.95-5.023h2.796v4.558h3.263v3.34h-3.263v4.622c0 1.386.699 1.864 1.813 1.864h1.58v3.522h-2.992z"/></svg>`,
spotify: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path d="M17.916 10.866C14.692 8.951 9.374 8.774 6.298 9.709a.935.935 0 0 1-.544-1.79c3.533-1.072 9.405-.866 13.116 1.338a.935.935 0 0 1-.954 1.609zM17.81 13.7a.78.78 0 0 1-1.072.258c-2.688-1.652-6.786-2.131-9.965-1.166A.78.78 0 1 1 6.32 11.3c3.631-1.102 8.147-.568 11.233 1.329a.778.778 0 0 1 .257 1.071zm-1.223 2.723a.624.624 0 0 1-.858.208c-2.348-1.435-5.303-1.76-8.785-.964a.624.624 0 0 1-.277-1.215c3.809-.871 7.076-.496 9.712 1.115a.623.623 0 0 1 .208.856zM12 2C6.478 2 2 6.477 2 12s4.478 10 10 10c5.523 0 10-4.477 10-10S17.523 2 12 2z" fill="#fff" fill-rule="nonzero"/></svg>`,
opencollective: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#b8d3f4" d="M19.69 12c0 1.5-.46 2.95-1.25 4.2l3.14 3.14A12.15 12.15 0 0 0 24 12.06c0-2.75-.92-5.24-2.48-7.27l-3.08 3.08A7.5 7.5 0 0 1 19.68 12z"/><path fill="#7fadf2" d="M11.97 19.74a7.74 7.74 0 0 1 0-15.48c1.57 0 3 .46 4.18 1.25l3.08-3.09A11.99 11.99 0 0 0 0 12c0 6.62 5.36 12 11.97 12 2.63 0 5.18-.87 7.26-2.5l-3.14-3.14a6.38 6.38 0 0 1-4.12 1.38z"/></svg>`,
}

// export const scDescription = {
//   configurableTimer: "The contract will act as a timer for any incoming transactions, dispatching all balance to target address on next block that is multiple of a configurable number. Creator must configure target address with a message.",
//   liquidityPool: `Implements a liquidity pool (constant product formula).
//   Includes measures to protect traders from sandwich attack: bots that monitor transactions to manipulate prices by changing transactions order.
//   Liquity providers receive liquitidy tokens (lpToken) to redeem the balance later.
//   Holders of lpTokens receive payments from trades fees.`,
//   EchoAnySize: `Simple contract that reads the incoming text message until a zero byte is found on last byte of last page read. Clears the rest of message buffer and then send the "same message" to sender. Smart contracts only can send 32 bytes each time, so expect the received message to be multiple of 32, padded with zero bytes. Online at tesnet TS-LZYH-PE75-JZTB-FJ88Y. Note that there is no API to get the message size, so the program must handle the input end in some way. Activation amount is huge because the fees to read/send info for a smart contract are much higher than sending manually and the contract must handle input text up the 1000 bytes, the current blockchain limit.`,
//   GetATCreatorID: `Simple contract that receives a message with some AT ID (text message in decimal representation) and return to sender a message with the creator's ID of that AT (also in text unsigned decimal representation). Online at tesnet TS-7MUA-SSZ8-W6QR-6M892`,
//   PublicMethodsOnSmartC: `SmartJ uses a simple concept to integrate Smart Contracts. It works by defining a public method that can be called by other classes and also imported in other projects. SmartC does not have this kind of java integration, but the same result can be achieved.

//   To be clear, skeleton codes for SmartC and SmartJ are shown. The main loop for processing messages is hidden in SmartJ, and this part calls the protected methods. Also the switch statement for routing transactions to the public methods is prepared. This is reached using magic numbers to make relationship between the message and the method.`,
//   remoteControl: `The contract will dispatch transactions according to instructions from its creator.`,
//   dropper: `Sends a fixed amount of signa to a defined account every N blocks. `,
//   get3Random: `When a message arrives, the program tries to parse a number
//   from message. Number must be bigger or equal 5 and lower or equal 9999999. If
//   found, then program mixes random hash for 3 blocks and send back a message
//   to the sender with the random numbers without repetition. When there is no  more
//   pending messages, all balance remaining is sent to program creator.`,
//   remoteControl: `The contract will dispatch transactions according to instructions from its creator.`,


// }

// export const scCode = {
//   configurableTimer: `#define MULTIPLE 5

//   #program name MultipleOf
//   #program description Creator deploys the contract and send a binary
//    message with target address. The contract will act as a timer for
//    any incoming transactions, dispatching all balance to target address on
//    next block that is multiple of MULTIPLE.
//   #program activationAmount 1_1000_0000
  
//   /* Do not change below here */
  
//   #include APIFunctions
//   #pragma version 1.0
  
//   const long multiple = MULTIPLE, n32 = 32;
//   long lastTimestamp, sleepBlocks, creator;
  
//   B_To_Address_Of_Creator();
//   creator = Get_B1();
  
//   // phase 1: wait to receive target address from creator
//   do {
//       A_To_Tx_After_Timestamp(lastTimestamp);
//       if (Get_A1() == 0) {
//           halt;
//           continue;
//       }
//       lastTimestamp = Get_Timestamp_For_Tx_In_A();
//       B_To_Address_Of_Tx_In_A();
//       if (Get_B1() == creator) {
//           Message_From_Tx_In_A_To_B();
//           break;
//       }
//   } while (true);
  
//   // phase 2: Endless timer transaction
//   do {
//       sleepBlocks = multiple - ((Get_Block_Timestamp() >> 32) % multiple);
//       if (sleepBlocks != multiple) {
//           sleep sleepBlocks;
//       }
//       Send_All_To_Address_In_B();
//   } while (true);`,
//   liquidityPool: `#program name TMGSignaLiquidityPool
//   #program description 1) Implements a liquidity pool (constant product formula).
//    2) Includes measures to protect traders from sandwich attack: bots that
//    monitor transactions to manipulate prices by changing transactions order.
//    3) Liquity providers receive liquitidy tokens (lcToken) to redeem the balance
//    later. 4) Holders of lcTokens receive payments from trades fees.
//   #define ACTIVATION_AMOUNT 4200_0000
//   #program activationAmount ACTIVATION_AMOUNT
  
//   // #pragma verboseAssembly
//   #pragma optimizationLevel 3
  
//   #pragma version 2.1.1
  
//   #define SIMULATOR
//   // Name for liquidity token (max 8, only letters and number)
//   #define LP_TICKER "lcTMG"
//   // Pool fee in parts per thousand for each trade
//   #define POOL_FEE 20
//   // Platform fee in percent for each distribution (only signa part)
//   #define PLATFORM_FEE 5
//   // If true, fees collected in asset will be traded inside the pool before
//   // distribution, so liquidity providers receive only Signa. If false, the
//   // distribution will have Signa and assets
//   #define DISTRIBUTE_ONLY_SIGNA false
  
//   #ifdef SIMULATOR
//     // Try distribution every block
//     #define DISTRIBUTION_INTERVAL 1
//     #define ASSET_ID 222333
//     #program codeHashId 12551049878178174318
//   #else
//     // Try distribution every day
//     #define DISTRIBUTION_INTERVAL 360
//     #define ASSET_ID 11955007191311588286
//     #program codeHashId 5997699537277718563
//   #endif
  
//   /* End of configurations */
  
//   #define FIELD_TRADE_AMOUNT 0
//   #define FIELD_TRADE_SENDER 1
//   #define FIELD_REMOVE_AMOUNT 2
//   #define FIELD_REMOVE_SENDER 3
  
//   #define sqrt(val) (powf(val,half))
  
//   const fixed half = 0.5;
//   const long assetId = ASSET_ID;
//   const long distributeOnlySigna = DISTRIBUTE_ONLY_SIGNA;
//   long liquidityToken;
  
//   struct TXINFO {
//       long txid;
//       long sender;
//       long amount;
//       long quantity;
//       long message[2];
//   } currentTX;
  
//   struct TOTAL {
//       long signaTotal;
//       long assetTotal;
//   } pool, block;
  
//   struct STATS {
//       long trades, volume;
//   } stats;
  
//   long currentLiquidity;
//   long enqueuedTrades, enqueuedRemovals;
//   long lastDistribution;
//   long i;
  
//   // Constructor
//   long owner = getCreator();
//   long newOwner = 0;
//   long shutdown = false;
//   liquidityToken = issueAsset(LP_TICKER, "", 0);
//   lastDistribution = getCurrentBlockheight();
//   // end Constructor
  
//   void main () {
//       enqueuedTrades = 0;
//       enqueuedRemovals = 0;
//       block.assetTotal = 0;
//       block.signaTotal = 0;
//       while ((currentTX.txid = getNextTx()) != 0) {
//           // get details
//           currentTX.sender = getSender(currentTX.txid);
//           currentTX.amount = getAmount(currentTX.txid);
//           readShortMessage(currentTX.txid, currentTX.message, currentTX.message.length);
//           currentTX.quantity = getQuantity(currentTX.txid, assetId);
//           if (shutdown != 0) {
//               refundTransaction();
//               continue;
//           }
//           // process command
//           switch (currentTX.message[0]) {
//           case 'add':
//               addLiquidity();
//               break;
//           case 'remove':
//               removeLiquidity();
//               break;
//           case 'trade':
//               processTrade();
//               break;
//           case "":
//               // No message, do not process
//               break;
//           case 'accept':
//               // new owner accepts ownership
//               if (currentTX.sender == newOwner) {
//                   owner = currentTX.sender;
//                   newOwner = 0;
//               }
//               break;
//           default:
//               // unknow command
//               if (currentTX.sender == owner) {
//                   processCreatorCommand();
//                   break;
//               }
//               refundTransaction();
//           }
//       }
//       // After all transactions processed
//       processEnqueuedTrades();
//       processEnqueuedRemovals();
//       shutdownHandler();
//   }
  
//   void refundTransaction() {
//       if (currentTX.quantity > 0) {
//           sendQuantityAndAmount(currentTX.quantity, assetId, currentTX.amount, currentTX.sender);
//       } else if (currentTX.amount > 0) {
//           sendAmount(currentTX.amount, currentTX.sender);
//       }
//   }
  
//   void addLiquidity() {
//       long operationAsset,  operationSigna;
//       long operationLiquidity, excessSigna;
//       if (currentTX.amount == 0 || currentTX.quantity == 0) {
//           refundTransaction();
//           return;
//       }
//       if (currentLiquidity == 0) {
//           excessSigna = 0;
//           operationSigna = currentTX.amount;
//           operationAsset = currentTX.quantity;
//           operationLiquidity = sqrt(operationAsset) * sqrt(operationSigna);
//       } else {
//           excessSigna = currentTX.amount - mdv(currentTX.quantity, pool.signaTotal, pool.assetTotal);
//           long excessAsset = currentTX.quantity - mdv(currentTX.amount, pool.assetTotal, pool.signaTotal);
//           if (excessSigna < 0) {
//               // Refund the excess of asset
//               sendQuantity(excessAsset, assetId, currentTX.sender);
//               operationAsset = currentTX.quantity - excessAsset;
//               operationSigna = currentTX.amount;
//           } else {
//               // Refund the excess of signa
//               operationAsset = currentTX.quantity;
//               operationSigna = currentTX.amount - excessSigna;
//           }
//           operationLiquidity = currentLiquidity * operationSigna / pool.signaTotal ;
//       }
//       // Issue/send liquidity token
//       mintAsset(operationLiquidity, liquidityToken);
//       sendQuantityAndAmount(operationLiquidity, liquidityToken, excessSigna, currentTX.sender);
//       // Update totals
//       pool.signaTotal += operationSigna;
//       pool.assetTotal += operationAsset;
//       currentLiquidity += operationLiquidity;
//   }
  
//   void removeLiquidity() {
//       long liquidityWithdraw = getQuantity(currentTX.txid, liquidityToken);
//       if (liquidityWithdraw == 0) {
//           return;
//       }
//       setMapValue(FIELD_REMOVE_AMOUNT, enqueuedRemovals, liquidityWithdraw);
//       setMapValue(FIELD_REMOVE_SENDER, enqueuedRemovals, currentTX.sender);
//       enqueuedRemovals++;
//   }
  
//   void processEnqueuedRemovals() {
//       for (i = 0; i < enqueuedRemovals; i++) {
//           long qty = getMapValue(FIELD_REMOVE_AMOUNT, i);
//           long sender = getMapValue(FIELD_REMOVE_SENDER, i);
//           long calculatedSigna = pool.signaTotal * qty / currentLiquidity;
//           long calculatedAsset = pool.assetTotal * qty / currentLiquidity;
//           // Burn liquidity token
//           sendQuantity(qty, liquidityToken, 0);
//           // Send withdraw
//           sendQuantityAndAmount(calculatedAsset, assetId, calculatedSigna, sender);
//           // Update totals
//           pool.signaTotal -= calculatedSigna;
//           pool.assetTotal -= calculatedAsset;
//           if (pool.signaTotal <= 0 || pool.assetTotal <= 0) {
//               pool.signaTotal = 0;
//               pool.assetTotal = 0;
//               currentLiquidity = 0;
//               return;
//           }
//           currentLiquidity -= qty;
//       }
//   }
  
//   void processTrade() {
//       if (currentTX.amount == 0 && currentTX.quantity == 0) {
//           return;
//       }
//       if (currentLiquidity == 0) {
//           refundTransaction();
//           return;
//       }
//       if (currentTX.quantity != 0) {
//           // User sending asset to get Signa
//           sendAmount(currentTX.amount, currentTX.sender);
//           setMapValue(FIELD_TRADE_AMOUNT, enqueuedTrades, -currentTX.quantity);
//           setMapValue(FIELD_TRADE_SENDER, enqueuedTrades, currentTX.sender);
//           block.assetTotal += currentTX.quantity;
//           enqueuedTrades++;
//           return;
//       }
//       // User sending Signa to get asset
//       setMapValue(FIELD_TRADE_AMOUNT, enqueuedTrades, currentTX.amount);
//       setMapValue(FIELD_TRADE_SENDER, enqueuedTrades, currentTX.sender);
//       block.signaTotal += currentTX.amount;
//       enqueuedTrades++;
//   }
  
//   void processEnqueuedTrades() {
//       struct TRADES {
//           long signa, quantity, sender;
//       } currTrade;
//       long opSigna, opAsset, deltaSigna, deltaAsset;
//       struct TOTAL newTotal;
  
//       if (enqueuedTrades == 0) {
//           return;
//       }
//       // Process the sum of all trades as only two trades.
//       // Avoid manipulation for trades order in blockchain.
//       // The order is choosed to reward traders that help pool stability.
//       block.signaTotal = mdv(block.signaTotal , 1000 - POOL_FEE, 1000);
//       block.assetTotal = mdv(block.assetTotal , 1000 - POOL_FEE, 1000);
//       long assetForSigna = pool.assetTotal * block.signaTotal / pool.signaTotal;
//       long signaForAsset = pool.signaTotal * block.assetTotal / pool.assetTotal;
//       if (assetForSigna > block.assetTotal) {
//           // more signa incoming than asset. Process signa trade first
//           deltaAsset = mdv(pool.signaTotal, pool.assetTotal, pool.signaTotal + block.signaTotal);
//           deltaSigna = pool.signaTotal + block.signaTotal;
//           newTotal.signaTotal = mdv(deltaAsset, deltaSigna, deltaAsset + block.assetTotal);
//           newTotal.assetTotal = deltaAsset + block.assetTotal;
//       } else {
//           // Process signa trade second
//           deltaSigna = mdv(pool.assetTotal, pool.signaTotal, pool.assetTotal + block.assetTotal);
//           deltaAsset = pool.assetTotal + block.assetTotal;
//           newTotal.assetTotal = mdv(deltaSigna, deltaAsset, deltaSigna + block.signaTotal);
//           newTotal.signaTotal = deltaSigna + block.signaTotal;
//       }
//       // process all trades with same price ratio
//       for (i = 0; i < enqueuedTrades; i++ ) {
//           long temp = getMapValue(FIELD_TRADE_AMOUNT, i);
//           currTrade.sender = getMapValue(FIELD_TRADE_SENDER, i);
//           if (temp < 0) {
//               currTrade.signa = 0;
//               currTrade.quantity = -temp;
//           } else {
//               currTrade.signa = temp;
//               currTrade.quantity = 0;
//           }
//           if (currTrade.quantity == 0) {
//               // User sending Signa to get asset
//               opSigna = mdv(currTrade.signa, 1000 - POOL_FEE, 1000);
//               opAsset = mdv(opSigna, pool.assetTotal, newTotal.signaTotal);
//               sendQuantity(opAsset, assetId, currTrade.sender);
//           } else {
//               // User sending asset to get Signa
//               opAsset = mdv(currTrade.quantity, 1000 - POOL_FEE, 1000);
//               opSigna = mdv(opAsset, pool.signaTotal, newTotal.assetTotal);
//               sendAmount(opSigna, currTrade.sender);
//           }
//           stats.volume += opSigna;
//       }
//       stats.trades += enqueuedTrades;
//       pool.signaTotal = newTotal.signaTotal;
//       pool.assetTotal = newTotal.assetTotal;
//   }
  
//   void shutdownHandler() {
//       switch (shutdown) {
//       case 0:
//           // regular distribution
//           distributeDividends();
//           break;
//       case 1:
//           // Return values to liquidity providers
//           do {
//               // Retry every block until distribution is done!
//               distributeToHolders(
//                   0,
//                   liquidityToken,
//                   getCurrentBalance() - ACTIVATION_AMOUNT,
//                   assetId,
//                   getAssetBalance(assetId)
//               );
//               if (getCurrentBalance() > ACTIVATION_AMOUNT) {
//                   sleep;
//                   continue;
//               }
//           } while (false);
//           pool.signaTotal = 0;
//           pool.assetTotal = 0;
//           currentLiquidity = 0;
//           shutdown = 2;
//           break;
//       default:
//           // burn excess
//           sendAmount(getCurrentBalance() - ACTIVATION_AMOUNT, 0);
//           shutdown++;
//       }
//   }
  
//   void distributeDividends() {
//       long thisBlock = getCurrentBlockheight();
//       if (thisBlock - lastDistribution >= DISTRIBUTION_INTERVAL) {
//           long feesBalance = getCurrentBalance() - pool.signaTotal - ACTIVATION_AMOUNT;
//           if (feesBalance < ACTIVATION_AMOUNT) {
//               // do not distribute dust
//               return;
//           }
//           long assetFeesBalance = getAssetBalance(assetId) - pool.assetTotal;
//           if (distributeOnlySigna) {
//               // Trade the asset fees to send only signa to liquidity providers
//               long tradeAmount = mdv(pool.signaTotal, assetFeesBalance, pool.assetTotal + assetFeesBalance);
//               pool.signaTotal -= tradeAmount;
//               pool.assetTotal += assetFeesBalance;
//               feesBalance += tradeAmount;
//               assetFeesBalance = 0;
//           }
//           long platformFee = mdv(feesBalance, PLATFORM_FEE, 100);
//           feesBalance -= platformFee;
//           sendAmount(platformFee, owner);
//           distributeToHolders(0, liquidityToken, feesBalance, assetId, assetFeesBalance);
//           lastDistribution = thisBlock;
//       }
//   }
  
//   void processCreatorCommand() {
//       switch (currentTX.message[0]) {
//       case 'extract':
//           if (currentTX.message[1] == 0 || currentTX.message[1] == assetId) {
//               // owner can get stuck tokens in the contract, but not signa or
//               // the pool asset.
//               // message = { 'extract', stuckAssetId }
//               return;
//           }
//           sendQuantity(0x7fffffffffffffff, currentTX.message[1], owner);
//           return;
//       case 'shutdown':
//           shutdown = 1;
//           return;
//       case 'newowner':
//           // prepare to change ownership.
//           newOwner = currentTX.message[1];
//           return;
//       }
//   }`,
//   EchoAnySize: `#program name EchoAnySize
//   #program description Reads the incoming message until a zero byte
//    is found on last byte of last page read. Clears the rest of buffer
//    and then send the same message to sender. Expect text messages.
//   #program activationAmount 5_0000_0000
  
//   struct TXINFO {
//      long txId;
//      long sender;
//      long amount;
//      long message[132];
//   } currentTX;
  
//   long zero;
  
//   while (true)
//   {
//       while ((currentTX.txId = getNextTx()) != 0) {
//           currentTX.sender = getSender(currentTX.txId);
//           currentTX.amount = getAmount(currentTX.txId);
//           readMessage(currentTX.txId, 0, currentTX.message);
  
//           processTX();
//       }
//       sendBalance(getCreator());
//   }
  
//   // just echoes a received message back to sender.
//   void processTX(void) {
  
//       long messagePage, currentLong;
  
//       // Last read on getNextTxDetails
//       currentLong = 4;
//       while (currentLong < currentTX.message.length) {
//           if (((currentTX.message[currentLong - 1]) >>  56) == 0) {
//              // Found a null byte at last byte of last page that was read.
//              break;
//           }
//           messagePage = currentLong / 4;
//           readMessage(currentTX.txId, messagePage,  currentTX.message + currentLong);
//           currentLong += 4;
//       }
//       while (currentLong < currentTX.message.length) {
//           // clear the rest of buffer.
//           currentTX.message[currentLong++] = zero;
//           currentTX.message[currentLong++] = zero;
//           currentTX.message[currentLong++] = zero;
//           currentTX.message[currentLong++] = zero;
//       }
//       currentLong = 0;
//       do {
//           // send message loop
//           sendMessage(currentTX.message + currentLong, currentTX.sender);
//           currentLong += 4;
//       } while (((currentTX.message[currentLong - 1]) >>  56) != 0 && currentLong < currentTX.message.length);
//   }`,
//   GetATCreatorID: `#program name GetATCreator
//   #program description Receives a message with some AT ID and return to sender a\
//    message with the creator${"`"}s ID of that AT.
//   #program activationAmount 1_5000_0000
  
//   struct TXINFO {
//      long txId;
//      long sender;
//      long amount;
//      long message[4];
//   } currentTX;
  
//   long messageToSend[4];
  
//   while (true)
//   {
//       while ((currentTX.txId = getNextTx()) != 0) {
//           currentTX.sender = getSender(currentTX.txId);
//           currentTX.amount = getAmount(currentTX.txId);
//           readMessage(currentTX.txId, 0, currentTX.message);
  
//           processTX();
//       }
//       sendBalance(getCreator());
//   }
  
//   // Return to sender the creator of a given AT.
//   void processTX(void) {
//       long atId = messageToId();
//       long creatorID = getCreatorOf(atId);
//       IdToMessage(creatorID);
//       sendMessage(messageToSend, currentTX.sender);
//   }
  
  
//   long i, auxDiv, auxShift, auxMask, auxNum;
//   const long n8 = 8, n10 = 10, n15 = 15, n48 = 48, n57 = 57, n255 = 255;
//   void IdToMessage(long id){
//       long currDiv = 10;
//       messageToSend[] = "00000000000000000000            ";
//       // using i as temp var;
//       i = (id >> 1) / 5;
//       messageToSend[2] |= (id - (i * 10)) << 24;
//       id = i;
  
//       for (i = 18; id != 0; i--) {
//           auxNum = id % currDiv;
//           id /= 10;
//           auxDiv = i/8;
//           auxShift = (i % 8) * 8;
//           auxMask = 0xff << auxShift;
//           messageToSend[i/8] |= auxNum << auxShift;
//       }
//   }
  
//   // Expects a numeric ID in currentTX.message[0] to [3]
//   // return its long representation
//   long messageToId(void) {
//       long currMul = 1;
//       long ret=0;
      
//       for (i = 19; i>=0; i--) {
//           auxDiv = i/8;
//           auxShift = (i % 8) * 8;
//           auxMask = 0xff << auxShift;
//           auxNum = (currentTX.message[i/8] & auxMask) >> auxShift;
//           if (auxNum == 0) {
//               continue;
//           }
//           if (auxNum < '0' || auxNum > '9' ) {
//               // invalid char
//               return 0;
//           }
//           auxNum &= 0xF;
//           auxNum *= currMul;
//           ret += auxNum;
//           currMul *= 10;
//       }
//       return ret;
//   }`,
//   PublicMethodsOnSmartC: `// global variables, will be available in all functions
//   long myVar;
  
//   // ****** This part of processing is hidden in SmartJ ******
  
//   // Set public functions magic numbers
//   #define GET_SNACKS 0xfc73947c1b89e15e
//   #define GET_DRINKS 0x2ad652b169fff962
  
//   struct TXINFO {
//       long txId,
//           timestamp,
//           sender,
//           amount,
//           message[4];
//   } currentTX;
  
//   constructor();
  
//   void main(void) {
//       blockStarted();
//       while ((currentTX.txId = getNextTx()) != 0) {
//           currentTX.sender = getSender(currentTX.txId);
//           currentTX.amount = getAmount(currentTX.txId);
//           readMessage(currentTX.txId, 0, currentTX.message);
  
//           switch (currentTX.message[0]) {
//           case GET_SNACKS:
//               GetSnacks(currentTX.message[1]);
//               break;
//           case GET_DRINKS:
//               GetDrinks(currentTX.message[1], currentTX.message[2]);
//               break;
//           default:
//               txReceived();
//           }
//       }
//       blockFinished();
//   }
//   // ****** end of hidden part ****** 
  
//   // ****** These are public methods in SmartJ ****** 
//   void GetSnacks(long bites) {
//       // Do your stuff
//       myPrivateMethod();
//   }
  
//   void GetDrinks(long type, long quantity) {
//       // Do your stuff
//   }
  
//   // ****** These are private methods in SmartJ ****** 
//   void myPrivateMethod() {
//       // Do your stuff
//   }
  
//   // ****** These are protected methods in SmartJ ****** 
//   void constructor(void) {
//       // this function will be called only once on first activation.
//   }
  
//   void txReceived(void) {
//       // Will handle any incoming message that is not direct to public methods
//   }
  
//   void blockStarted(void) {
//       // Run when contract is activated by a transaction, but before
//       // to get the currentTX details. currentTX will have details from last
//       // transaction received in a a previous block.
//   }
  
//   void blockFinished(void) {
//       // Run when all transactions were already processed. currentTX will
//       // keep the values of last transaction processed.
//   }`,
//   remoteControl: `#program name RemoteControl
//   #program description I just do what the boss tells me to.
//   #define ACTIVATION_AMOUNT 1010_0000
//   #program activationAmount ACTIVATION_AMOUNT
  
//   #pragma verboseAssembly
//   #pragma optimizationLevel 3
  
//   #pragma version 2.1.1
//   #pragma maxConstVars 4
  
//   #program codeHashId 0
  
//   /* End of configurations */
  
//   struct TXINFO {
//       long txid;
//       long sender;
//       long commands;
//       long currentPage;
//       long pageContent[4];
//   } currentTX;
  
//   // Constructor
//   long owner = getCreator();
//   // end Constructor
  
//   void main () {
//       while ((currentTX.txid = getNextTx()) != 0) {
//           // get details
//           currentTX.sender = getSender(currentTX.txid);
//           readShortMessage(currentTX.txid, &currentTX.commands, 1);
//           if (currentTX.sender != owner) {
//               break;
//           }
//           currentTX.currentPage = 1;
//           while ((currentTX.commands & 0x7) != 0) {
//               sendCommand();
//               currentTX.commands >>= 3;
//           }
//       }
//       // After all transactions processed
//   }
  
//   void sendCommand() {
//       // process command
//       readMessage(currentTX.txid, currentTX.currentPage, currentTX.pageContent);
//       ++currentTX.currentPage;
//       switch (currentTX.commands & 0x7) {
//           case 1: // Send amount
//               sendAmount(currentTX.pageContent[0], currentTX.pageContent[1]);
//               break;
//           case 2: // Send short message (16 bytes)
//               sendShortMessage(currentTX.pageContent + 2, 2, currentTX.pageContent[1]);
//               sendAmount(currentTX.pageContent[0], currentTX.pageContent[1]);
//               break;
//           case 3: // Send long message (up to 900 bytes)
//               long noOfPages = currentTX.pageContent[2];
//               long recipient = currentTX.pageContent[1];
//               sendAmount(currentTX.pageContent[0], recipient);
//               while (noOfPages > 0) {
//                   readMessage(currentTX.txid, currentTX.currentPage, currentTX.pageContent);
//                   ++currentTX.currentPage;
//                   --noOfPages;
//                   sendMessage(currentTX.pageContent, recipient);
//               }
//               break;
//           case 4: // Send quantity
//               sendQuantityAndAmount(currentTX.pageContent[2], currentTX.pageContent[3], currentTX.pageContent[0], currentTX.pageContent[1]);
//               break;
//       }
//   }`,
//   dropper: `#program name Dropper
//   #program description Sends a fixed amount of signa to a defined account every N blocks. 
//   #program activationAmount 0.2
  
//   // Configure how many blocks to sleep until next send. 
//   #define SLP_BLOCKS 2
//   // Configure balance to stay on contract
//   #define CONTRACT_MIN_BALANCE 1.0
//   // Configure the amount to send every time
//   #define EACH_BLOCK .2
//   // Set the desired account
//   #define RECIPIENT "S-3A2N-ZD7P-KZKU-FPWKQ"
  
//   // Endless loop
//   while (true) {
//      if (getCurrentBalanceFx() < CONTRACT_MIN_BALANCE) {
//          // Stops contracts before it hits end of balance
//          halt;
//      } else {
//          sendAmountFx(EACH_BLOCK, RECIPIENT);
//          sleep SLP_BLOCKS;
//      }
//   }`,
//   get3Random: `/* DEPRECATION NOTICE:
//   * This contract may be not compatible with SmartC version greater or equal 2
//   * because Signum Rainbow Hard Fork broke some compatibilities.  Test before
//   * use or convert the API calls to new built-in functions.
//   */
 
//  #program name Get3Random
//  #program description When a message arrives, the program tries to parse a number\
//   from message. Number must be bigger or equal 5 and lower or equal 9999999. If\
//   found, then program mixes random hash for 3 blocks and send back a message\
//   to the sender with the random numbers without repetition. When there is no  more\
//   pending messages, all balance remaining is sent to program creator.
//  #program activationAmount 1_0000_0000
 
//  #pragma version 0.2
//  #pragma maxAuxVars 2
//  #pragma maxConstVars 2
//  #pragma globalOptimization
 
//  #include APIFunctions
 
//  struct TXINFO
//  {
//     long timestamp;
//     long sender;
//     long amount;
//  } currentTX;
 
//  long i, userNumber, result_1, result_2, result_3, result_4;
//  const long n8=8, n10=10, n0xff=0xff;
 
//  B_To_Address_Of_Creator();
//  long CREATOR = Get_B1();
 
//  while (true) {
 
//      // Loop all incoming TX
//      for (A_To_Tx_After_Timestamp(currentTX.timestamp); Get_A1() != 0; A_To_Tx_After_Timestamp(currentTX.timestamp) ) {
 
//          // Get TX details
//          currentTX.amount = Get_Amount_For_Tx_In_A();
//          currentTX.timestamp = Get_Timestamp_For_Tx_In_A();
//          Message_From_Tx_In_A_To_B();
//          userNumber = atoi(Get_B1());
//          B_To_Address_Of_Tx_In_A();
//          currentTX.sender = Get_B1();
 
//          if (userNumber < 5) {
//              // Send an error message
//              Set_A1_A2("Please s","end a va");
//              Set_A3_A4("lue >= 5", 0);
//              Send_A_To_Address_In_B();
//              // Return any excess balance given
//              if (currentTX.amount > 0)
//                  Send_To_Address_In_B(currentTX.amount);
//              // Proceed to next message.
//              continue;
//          }
 
//          // Draw mixing randomness of 3 blocks
//          Clear_A_And_B();
//          i = 0;
//          do {
//              do {
//                  if (i != 0)
//                      sleep 1;
//                  Put_Last_Block_Hash_In_A();
//                  XOR_B_with_A();
//                  i++;
//              } while (i <= 2);
 
//              // Get 4 random numbers between 1 and userNumber
//              result_1 = ((Get_B1() >> 2 ) % userNumber) + 1;
//              result_2 = ((Get_B2() >> 2 ) % userNumber) + 1;
//              result_3 = ((Get_B3() >> 2 ) % userNumber) + 1;
//              result_4 = ((Get_B4() >> 2 ) % userNumber) + 1;
//              // Try to avoid a new round using 4th number
//              if (result_1 == result_2)
//                  result_1 = result_4;
//              else if (result_1 ==  result_3)
//                  result_1 = result_4;
//              else if (result_2 ==  result_3)
//                  result_2 =  result_4;
//          // Repeat process next block if still there are repeated numbers.
//          } while (result_1 == result_2 || result_1 == result_3 || result_2 == result_3);
 
//          // Send message with draw numbers
//          Set_B1(currentTX.sender);
//          Set_A1_A2("Draw:   ", itoa_plus(result_1));
//          Set_A3_A4(itoa_plus(result_2), itoa_plus(result_3));
//          Send_A_To_Address_In_B();
//          Send_To_Address_In_B(currentTX.amount);
 
//      }
 
//      // Send all remaining balance to creator and freeze contract until next message
//      Set_B1(CREATOR);
//      Send_All_To_Address_In_B();
//  }
 
 
//  /* **************   Library functions    **************************** */
 
//  // Iterative function to implement atoi() function in C
//  // Expects a long containing a string. If any byte is not a char numeric
//  // representation, then stop and return. Only positive numbers, decimal, 
//  // and integers are converted. Returns zero if no number was processed.
//  long atoi(long val)
//  {
//      long ret = 0, chr;
//      do {
//          chr = (0xff & val) - '0';
//          if (chr < 0 || chr >= n10)
//              break;
//          ret *= n10;
//          ret += chr;
//          val >>= n8;
//      } while (1);
//      return ret;
//  }
 
//  // Iterative function to implement itoa() function in C
//  // Expects a long. If number is negative or bigger than MAX_STRING
//  // (it will not fit in a long), returns long meaning "#error".
//  // Pad beginning with spaces to allow easy concatenation
//  long itoa_plus(long val)
//  {
//      long ret = "        ";
//      if (val == 0) {
//          return (ret << n8) + '0';
//      }
 
//      if (val > 0 && val <= 9999999) {
//          do {
//              if (val == 0) {
//                  return ret;
//              }
//              ret <<= n8;
//              ret += '0' + val % n10;
//              val /= n10;
//          } while (1);
//      }
//      return "  #error";
//  }`,
//  remoteControl: `#program name RemoteControl
//  #program description I just do what the boss tells me to.
//  #define ACTIVATION_AMOUNT 1010_0000
//  #program activationAmount ACTIVATION_AMOUNT
 
//  #pragma verboseAssembly
//  #pragma optimizationLevel 3
 
//  #pragma version 2.1.1
//  #pragma maxConstVars 4
 
//  #program codeHashId 0
 
//  /* End of configurations */
 
//  struct TXINFO {
//      long txid;
//      long sender;
//      long commands;
//      long currentPage;
//      long pageContent[4];
//  } currentTX;
 
//  // Constructor
//  long owner = getCreator();
//  // end Constructor
 
//  void main () {
//      while ((currentTX.txid = getNextTx()) != 0) {
//          // get details
//          currentTX.sender = getSender(currentTX.txid);
//          readShortMessage(currentTX.txid, &currentTX.commands, 1);
//          if (currentTX.sender != owner) {
//              break;
//          }
//          currentTX.currentPage = 1;
//          while ((currentTX.commands & 0x7) != 0) {
//              sendCommand();
//              currentTX.commands >>= 3;
//          }
//      }
//      // After all transactions processed
//  }
 
//  void sendCommand() {
//      // process command
//      readMessage(currentTX.txid, currentTX.currentPage, currentTX.pageContent);
//      ++currentTX.currentPage;
//      switch (currentTX.commands & 0x7) {
//          case 1: // Send amount
//              sendAmount(currentTX.pageContent[0], currentTX.pageContent[1]);
//              break;
//          case 2: // Send short message (16 bytes)
//              sendShortMessage(currentTX.pageContent + 2, 2, currentTX.pageContent[1]);
//              sendAmount(currentTX.pageContent[0], currentTX.pageContent[1]);
//              break;
//          case 3: // Send long message (up to 900 bytes)
//              long noOfPages = currentTX.pageContent[2];
//              long recipient = currentTX.pageContent[1];
//              sendAmount(currentTX.pageContent[0], recipient);
//              while (noOfPages > 0) {
//                  readMessage(currentTX.txid, currentTX.currentPage, currentTX.pageContent);
//                  ++currentTX.currentPage;
//                  --noOfPages;
//                  sendMessage(currentTX.pageContent, recipient);
//              }
//              break;
//          case 4: // Send quantity
//              sendQuantityAndAmount(currentTX.pageContent[2], currentTX.pageContent[3], currentTX.pageContent[0], currentTX.pageContent[1]);
//              break;
//      }
//  }`,
// }
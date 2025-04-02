import { useState, useRef, SelectHTMLAttributes } from 'react';
import JSZip from 'jszip';
import { generateBootstrap, generateTailwindCss, generateStyle05, generateStyle02 } from '@/utils/cssTemplate';
import { jsTemplate_script_1, jsTemplate_script_3, jsTemplate_script, jsTemplate_wowslider } from '@/utils/jsTemplate';
import config from "@/config/index";
// import { BookingFormConfigPanel } from '../components/bookingFormConfig';
import { encrypt, decryptToken, getAccessToken } from "@/utils/tools";


const defaultOpenTime = "09:00";
const defaultCloseTime = "17:00";
const iHostConfig = config;
const defaultBookingFormConfig = {
  branches: [
    { id: "1", name: "旺角店" },
    { id: "2", name: "元朗店" },
  ],
  minPeople: 1,
  maxPeople: 10,
  minTime: "11:00",
  maxTime: "21:00",
  timeInterval: 30,
  labels: {
    branch: "分店",
    people: "人數",
    name: "名稱",
    phone: "電話",
    date: "日期",
    time: "時間",
    submit: "訂位",
  },
  placeholders: {
    branch: "請選擇分店",
    name: "請輸入名稱",
    phone: "請輸入電話號碼",
  },
}
const defaultCouponType = { cashVouncher: '現金優惠', discount: '優惠折扣', freeGift: '免費禮物' };

export default function Home() {
  const [originalImage, setOriginalImage] = useState(null);
  const fileInputRef = useRef(null);
  const logoInputRef = useRef(null);
  const topCoverInputRef = useRef(null);
  const specialOfferInputRef = useRef(null);
  const faviconInputRef = useRef(null);
  const socialImageInputRef = useRef(null);
  const storyImageInputRef = useRef(null);
  const galleryInputRef = useRef(null);
  const [config, setConfig] = useState({
    galleryImages: [],
    showGallery: false,
    backgroundColor: '#F9F7F7',
    panelColor: '#DBE2EF',
    storySectionColor: '#DBE2EF',
    navbarColor: '#112D4E',
    buttonColor: '#3F72AF',
    textColor: '#000000',
    panelTextColor: '#000000',
    titleColor: '#000000',
    buttonTextColor: '#ffffff',
    imageFile: null,
    imagePreview: '/images/store-simple.jpg',
    logoFile: null,
    logoPreview: '/images/logo.png',
    topCoverFile: null,
    topCoverPreview: '/images/special-offer-simple-edited.jpg',
    specialOfferFile: null,
    specialOfferPreview: '/images/cashVouncher02.png',
    specialOfferType: 'cashVouncher',
    heading: ' ',
    subheading: `立刻換領
買三送一優惠卷`,
    term: `1. 活動期限XX月XX號 -XX號
（只限星期一至五）
2.價低產品享優惠
3.全線分店適用
4. 換購時請追蹤Instagram
5.⁠ 如有任何爭議，本店保留最終決定權`,
    storeName: 'Simple Store',
    address: `旺角朗豪坊 6樓
元朗Yoho Mix 2樓`,
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    openHours: `星期一至日
12:00 - 22:30`,
    officalWebsite: 'https://www.google.com',
    phone: '12345678',
    instagram: 'https://www.instagram.com/<youraccount>',
    facebook: 'https://www.facebook.com/<youraccount>',
    threads: 'https://www.threads.net/@<youraccount>',
    socialMediaX: 'https://x.com/<youraccount>',
    whatsapp: 'https://wa.me/<number>',
    showSearch: true,
    showOrderForm: true,
    faviconUrl: "/images/simple-favicon.png",
    faviconFile: null,
    title: "My Landing Page",
    description: "A custom landing page created with Next.js",
    keywords: "landing page, custom, generator",
    showNavbarButton: true,
    useXtWallet: false,
    contactLinkForNavbarButton: "https://wa.me/85212345678",
    storeHours: {
      showStoreHours: false,
      monday: { isOpen: true, openTime: defaultOpenTime, closeTime: defaultCloseTime },
      tuesday: { isOpen: true, openTime: defaultOpenTime, closeTime: defaultCloseTime },
      wednesday: { isOpen: true, openTime: defaultOpenTime, closeTime: defaultCloseTime },
      thursday: { isOpen: true, openTime: defaultOpenTime, closeTime: defaultCloseTime },
      friday: { isOpen: true, openTime: defaultOpenTime, closeTime: defaultCloseTime },
      saturday: { isOpen: true, openTime: "10:00", closeTime: "15:00" },
      sunday: { isOpen: false, openTime: defaultOpenTime, closeTime: defaultCloseTime }
    },
    bookingFormConfig: defaultBookingFormConfig,

    whatsappLinkForOrderForm: "85212345678",
    whatsappLinkForBookingFunction: "85212345678",

    storySectionTextColor: '#000000',
    storySectionTitleColor: '#000000',
    storySectionTitle: "品牌故事",
    storyImageFile: null,
    storyImagePreview: "/images/store-simple.jpg",
    storySectionParagarph01: `品牌的開始`,
    storySectionParagarph02: `克服挑戰`,
    storySectionParagarph03: "現在",
    storySectionContent01: "我開始品牌時，目標很簡單：創造有意義的工作，帶來改變。一開始只是閒暇時的項目，逐漸演變成更大的東西。",
    storySectionContent02: "在這個過程中，品牌面臨了許多挑戰，考驗了我們團隊決心。每一個障礙都成為一個進步，教會關於堅持和適應的寶貴經驗。",
    storySectionContent03: "今天，品牌繼續突破界限，探索新的可能性。經歷塑造了解決問題的方式，並激發了品牌對所做一切追求卓越的承諾。",

    imageAlt: "store image",
    logoAlt: "logo image",
    topCoverAlt: "top cover image",
    faviconAlt: "favicon image",
    specialOfferAlt: "special offer image",
    storyImageAlt: "story image",

    socialPreview: {
      title: 'My Landing Page',
      description: 'A custom landing page created with Next.js',
      imageFile: null,
      imagePreview: '/images/store-simple.jpg',
    },
    showAddresses: false,
    addresses:[{
      id: '1',
      name: '旺角朗豪坊 6樓',
      googleMapsUrl: 'https://maps.app.goo.gl/96mqkdYtYfyeHwMg9'
    },
    {
      id: '2',
      name: '元朗Yoho Mix 2樓',
      googleMapsUrl: 'https://maps.app.goo.gl/caBb445nfU3fYJqx8'
    }]
  });

  const handleBookingFormConfigChange = (config) => {
    setConfig((prev) => ({
      ...prev,
      bookingFormConfig: config,
    }))
  }
  const handleGalleryImagesChange = async (e) => {
    const files = Array.from(e.target.files || []);
    const newImages = await Promise.all(
      files.map(async (file) => ({
        file,
        preview: URL.createObjectURL(file)
      }))
    );

    setConfig(prev => ({
      ...prev,
      galleryImages: [...prev.galleryImages, ...newImages]
    }));
  };

  const removeGalleryImage = (index) => {
    setConfig(prev => ({
      ...prev,
      galleryImages: prev.galleryImages.filter((_, i) => i !== index)
    }));
  };
  const triggerGalleryUpload = () => {
    galleryInputRef.current?.click();
  };

  // const handleFileInput = async (e) => {
  //   const file = e.target.files?.[0];
  //   if (!file || !file.type.startsWith('image/')) {
  //     alert('Please select a valid image file');
  //     return;
  //   }

  //   const reader = new FileReader();
  //   reader.onload = async (event) => {
  //     const img = new Image();
  //     img.onload = () => {
  //       setOriginalImage(img)
  //       generatePreview(img);
  //     };
  //     img.src = event.target?.result ;
  //   };
  //   reader.readAsDataURL(file);
  // };

  const handleUpload = async (file) => {
    if (!file) {
      console.log("Please select a file to upload")
      return false
    }

    try {
      // Create a FormData object to send the file
      const formData = new FormData()
      formData.append("file", file)

      // Call our upload API route
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Upload failed")
      }

      const data = await response.json()
      return data.url
    } catch (err) {
      console.error("Error uploading file:", err)
      return false 
    }
  }

  const handleMultipleUpload = async (multipleFiles) => {
    if (multipleFiles.length === 0) {
      setError("Please select files to upload")
      return false
    }

    try {
      const uploadPromises = multipleFiles.map(async (file, index) => {
        const formData = new FormData()
        formData.append("file", file)

        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        })

        if (!response.ok) {
          throw new Error(`Failed to upload ${file.name}`)
        }

        // Update progress
        return response.json()
      })

      const responses = await Promise.all(uploadPromises)
      console.log("Upload responses:", responses)
      return responses.map((res) => res.url)
    } catch (err) {
      console.error("Error uploading files:", err)
      return false;
    }
  }

  const landingPageUpload = async () => {
    // if (!config.imageFile) {
    //   console.log("Error! Please select a your file or not use default simple image to upload")
    //   return 
    // }
    const accessToken = getAccessToken();
    console.log("config.imageFile", config.imageFile);
    console.log("config.logoFile", config.logoFile);
    console.log("config.topCoverFile", config.topCoverFile);
    console.log("config.specialOfferFile", config.specialOfferFile);
    console.log("config.faviconFile", config.faviconFile);
    console.log("config.storyImageFile", config.storyImageFile);
    console.log("config.galleryImages", config.galleryImages);
    console.log("config.socialPreview", config.socialPreview.imageFile);
    if (!config.imageFile || !config.logoFile || !config.topCoverFile || !config.specialOfferFile || !config.faviconFile || !config.storyImageFile || !config.socialPreview.imageFile) {
      console.log("Error! Please select a your file or not use default simple image to upload")
      return 
    }
    if (config.galleryImages.length === 0) {
      console.log("Error! Please select files to upload")
      return 
    }

    try {
      // Create a FormData object to send the file
      const imageFileUrl = await handleUpload(config.imageFile)
      const logoFileUrl = await handleUpload(config.logoFile)
      const topCoverFileUrl = await handleUpload(config.topCoverFile)
      const specialOfferFileUrl = await handleUpload(config.specialOfferFile)
      const faviconFileUrl = await handleUpload(config.faviconFile)
      const storyImageFileUrl = await handleUpload(config.storyImageFile)
      const socialPreviewFileUrl = await handleUpload(config.socialPreview.imageFile)
      const galleryFileUrls = await handleMultipleUpload(config.galleryImages.map((image) => image.file))
      if (!imageFileUrl || !logoFileUrl || !topCoverFileUrl || !specialOfferFileUrl || !galleryFileUrls || !faviconFileUrl || !storyImageFileUrl || !socialPreviewFileUrl) {
        console.log("Error! Please select a your file or not use default simple image to upload")
        return
      }
      console.log("imageFileUrl", imageFileUrl);
      console.log("logoFileUrl", logoFileUrl);
      console.log("topCoverFileUrl", topCoverFileUrl);
      console.log("specialOfferFileUrl", specialOfferFileUrl);
      console.log("faviconFileUrl", faviconFileUrl);
      console.log("storyImageFileUrl", storyImageFileUrl);
      console.log("galleryFileUrls", galleryFileUrls);
      console.log("socialPreviewFileUrl", socialPreviewFileUrl);
      // create a formData object that store all the data by replace the file url and post to appwrite database 
      const deepCopy = (obj) => {
        return JSON.parse(JSON.stringify(obj));
      };
      let newConfig = deepCopy(config);
      newConfig.imageFile = imageFileUrl;
      newConfig.logoFile = logoFileUrl;
      newConfig.topCoverFile = topCoverFileUrl;
      newConfig.specialOfferFile = specialOfferFileUrl;
      newConfig.faviconFile = faviconFileUrl;
      newConfig.storyImageFile = storyImageFileUrl;
      newConfig.socialPreview.imageFile = socialPreviewFileUrl;
      newConfig.galleryImages = galleryFileUrls.map((url, index) => ({
        file: url,
        preview: url
      }));
      console.log("accessToken", accessToken);

      const dataToAppwrite = { ...newConfig,
        route: "test"}
      console.log("newConfig", dataToAppwrite);

      const response = await fetch(`${iHostConfig.serverUrl}/api/landing/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,                                                                                         
        },
        body: JSON.stringify(dataToAppwrite),
      });
      if (!response.ok) {
        throw new Error("Upload failed");
      }
      const data = await response.json();
      console.log("Upload successful:", data);
      alert("Upload successful");
      // Optionally, you can reset the form or do something else after successful upload
    } catch (err) {
      console.error("Error uploading file:", err)  
    } 
  }
  const generatePreview = (img) => {
    const canvas = document.createElement('canvas');
    canvas.width = 64; // Larger preview size
    canvas.height = 64;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
    const x = (canvas.width - img.width * scale) / 2;
    const y = (canvas.height - img.height * scale) / 2;

    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    setConfig(prev => ({
      ...prev,
      faviconUrl: canvas.toDataURL('image/png'),
    }));
  };

  const generateFavicon = async (size) => {
    if (!originalImage) return null;

    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    const scale = Math.max(canvas.width / originalImage.width, canvas.height / originalImage.height);
    const x = (canvas.width - originalImage.width * scale) / 2;
    const y = (canvas.height - originalImage.height * scale) / 2;

    ctx.drawImage(originalImage, x, y, originalImage.width * scale, originalImage.height * scale);
    return canvas.toDataURL('image/png');
  };
  const handleConfigChange = (e) => {
    const { name, value, type } = e.target;
    setConfig(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target).checked : value
    }));
  };
  const handleConfigChangeForSelectElement = (e) => {
    const { name, value, type } = e.target;
    console.log('name', name);
    console.log('value', value);
    console.log('type', type);
    if (value === 'cashVouncher') {
      setConfig(prev => ({
        ...prev,
        specialOfferType: 'cashVouncher',
        specialOfferFile: null,
        specialOfferPreview: "images/cashVouncher02.png",
      }));
    }
    if (value === 'discount') {
      setConfig(prev => ({
        ...prev,
        specialOfferType: 'discount',
        specialOfferFile: null,
        specialOfferPreview: "images/discount02.png",
      }));
    }
    if (value === 'freeGift') {
      setConfig(prev => ({
        ...prev,
        specialOfferType: 'freeGift',
        specialOfferFile: null,
        specialOfferPreview: "images/freeGift02.png",
      }));
    }
  };
  const handleDayHoursChange = (day, field, value) => {
    setConfig(prev => ({
      ...prev,
      storeHours: {
        ...prev.storeHours,
        [day]: {
          ...prev.storeHours[day],
          [field]: value
        }
      }

    }));
    console.log(config.storeHours);
  };

  const handleImageChange = async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      // Create preview URL
      const previewUrl = URL.createObjectURL(file);
      setConfig(prev => ({
        ...prev,
        imageFile: file,
        imagePreview: previewUrl
      }));
    }
  };
  const handleLogoChange = async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      // Create preview URL
      const previewUrl = URL.createObjectURL(file);
      setConfig(prev => ({
        ...prev,
        logoFile: file,
        logoPreview: previewUrl
      }));
    }
  };
  const handleTopCoverChange = async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      // Create preview URL
      const previewUrl = URL.createObjectURL(file);
      setConfig(prev => ({
        ...prev,
        topCoverFile: file,
        topCoverPreview: previewUrl
      }));
    }
  };
  const handleSpecialOfferChange = async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      // Create preview URL
      const previewUrl = URL.createObjectURL(file);
      setConfig(prev => ({
        ...prev,
        specialOfferFile: file,
        specialOfferPreview: previewUrl
      }));
    }
  };
  const handleStoryImageChange = async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      // Create preview URL
      const previewUrl = URL.createObjectURL(file);
      setConfig(prev => ({
        ...prev,
        storyImageFile: file,
        storyImagePreview: previewUrl
      }));
    }
  };
  const handleFaviconChange = async (e) => { 1
    const file = e.target.files?.[0];
    if (file) {
      // Create preview URL
      const previewUrl = URL.createObjectURL(file);
      setConfig(prev => ({
        ...prev,
        faviconFile: file,
        faviconUrl: previewUrl
      }));
    }
  };
  const handleSocialPreviewChange = (e) => {
    const { name, value } = e.target;
    setConfig(prev => ({
      ...prev,
      socialPreview: {
        ...prev.socialPreview,
        [name]: value
      }
    }));
  };

  const handleSocialImageChange = async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setConfig(prev => ({
        ...prev,
        socialPreview: {
          ...prev.socialPreview,
          imageFile: file,
          imagePreview: previewUrl
        }
      }));
    }
  };
  const addAddress = () => {
    const newAddress = {
      id: Date.now().toString(),
      name: '',
      googleMapsUrl: ''
    };
    
    setConfig(prev => ({
      ...prev,
      addresses: [...prev.addresses, newAddress]
    }));
  };

  const removeAddress = (id) => {
    setConfig(prev => ({
      ...prev,
      addresses: prev.addresses.filter(address => address.id !== id)
    }));
  };
  const updateAddress = (id, field, value) => {
    setConfig(prev => ({
      ...prev,
      addresses: prev.addresses.map(address => 
        address.id === id ? { ...address, [field]: value } : address
      )
    }));
  };
  const triggerImageUpload = () => {
    fileInputRef.current?.click();
  };
  const triggerLogoUpload = () => {
    logoInputRef.current?.click();
  };

  const triggerTopCoverUpload = () => {
    topCoverInputRef.current?.click();
  };
  const triggerSpecialOfferUpload = () => {
    specialOfferInputRef.current?.click();
  };
  const triggerFaviconUpload = () => {
    faviconInputRef.current?.click();
  };
  const triggerStoryImageUpload = () => {
    storyImageInputRef.current?.click();
  };
  const triggerSocialImageUpload = () => {
    socialImageInputRef.current?.click();
  };
  //original genereateHTML
  //   const generateHTML = () => {
  //     return `<!DOCTYPE html>
  // <html lang="en">
  // <head>
  //     <meta charset="UTF-8">
  //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //     <title>${config.heading}</title>
  //     <link rel="stylesheet" href="css/styles.css">
  //     <script src="js/main.js" defer></script>
  // </head>
  // <body>
  //     <div class="landing-container">
  //         <img src="images/hero.jpg" alt="Landing page image" class="hero-image">
  //         <h1 class="heading">${config.heading}</h1>
  //         <p class="subheading">${config.subheading}</p>
  //     </div>
  // </body>
  // </html>`;
  //   };

  const generateHTML = () => {
    let carouselImagesComponent = ``;
    config.galleryImages.forEach((image, index) => {
      carouselImagesComponent += `<li>
      <img src="images/gallery-${index + 1}.jpg" alt="image-${index}" />
      </li>` ;
    });
    console.log('carouselImagesComponent', carouselImagesComponent);
    return `<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
   ${config.useXtWallet ? `<script src='https://cdn.jsdelivr.net/npm/@signumjs/core@1.0.0-rc.26/dist/signumjs.min.js'></script>
    <script src='https://cdn.jsdelivr.net/npm/@signumjs/util@1.0.0-rc.26/dist/signumjs.util.min.js'></script>
    <script src='https://cdn.jsdelivr.net/npm/@signumjs/wallets@1.0.0-rc.26/dist/signumjs.wallets.min.js'></script>
    <script src='https://cdn.jsdelivr.net/npm/@signumjs/contracts@1.0.0-rc.26/dist/signumjs.contracts.min.js'></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>` : ``}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=workspace_premium" />
    <script src="https://cdn.tailwindcss.com"></script>
   <title>${config.socialPreview.title}</title>
     <!-- Primary Meta Tags -->
    <meta name="title" content="${config.socialPreview.title}">
    <meta name="description" content="${config.socialPreview.description}">
     <meta name="keywords" content="${config.keywords}">
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="${config.socialPreview.title }">
    <meta property="og:description" content="${config.socialPreview.description }">
    <meta property="og:image" content="images/social-preview.jpg">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:title" content="${config.socialPreview.title }">
    <meta property="twitter:description" content="${config.socialPreview.description }">
    <meta property="twitter:image" content="images/social-preview.jpg">
   
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="icon" href="images/favicon.ico" type="image/x-icon" sizes="16x16">
    ${config.showGallery && (config.galleryImages.length > 0) ?
        `<link rel="stylesheet" href="css/bootstrap-grid.min.css">
    <link rel="stylesheet" href="css/style_5.css">
    <link rel="stylesheet" href="css/style_2.css">` : ``}
    <meta name="next-size-adjust">
<!--fontawesome-->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
    />
    
    <link rel="stylesheet" href="css/styles.css">
    <script src="js/main.js" defer></script>
    ${config.showGallery && (config.galleryImages.length > 0) ?
        `<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js" defer></script>
    <script src="js/wowslider.js" defer></script>
    <script src="js/script_1.js" defer></script>
    <script src="js/script.js" defer></script>
    <script async="" src="js/script_3.js" defer></script>` : ``}
</head>

<body><!--$-->
    <div class="root">
        <div class="root-container">
            <div class="WebPage-ROOT" id="ROOT">
                <div class="Pagnation-5ukyccm-T4" id="5ukyccm-T4">
                    <div id="Page-u7ZlrU8_9e" class="Page-u7ZlrU8_9e">
                        <div class="D8-JIf1V5m" id="D8-JIf1V5m">
                            <div id="ky52cFH6m7" class="Container-ky52cFH6m7">
                                <div class="div-wpGq93PEW-" id="wpGq93PEW-">
                                    <div>

                                        <img id="xpU7UGXY04"
                                            src="images/logo.png"
                                            alt="${config.logoAlt}" class="logo-xpU7UGXY04">
                                    </div>
                                </div>
  ${config.showNavbarButton ? ` <button id="xt-wallet" class="Button-navbar LzAysOOrVk" >
                                    <div id="P1_hvQIFrP" class="Container-P1_hvQIFrP">
                                        <div id="-i_o19aYCj" class="arial Text--i_o19aYCj">${config.useXtWallet ? `xtWallet` : `聯絡商家`}</div>
                                    </div>
                                   
                                </button>
                                <div style="display: none;" id="profile-dropdown">
                                </div>` : `<button style="opacity: 0;" id="xt-wallet" class="Button-navbar-disable LzAysOOrVk" disabled>
                                    <div id="P1_hvQIFrP" class="Container-P1_hvQIFrP">
                                        <div id="-i_o19aYCj" class="arial Text--i_o19aYCj">立刻預約</div>
                                    </div>
                                   
                                </button>`}
                            </div>
                        </div>
                        <div class="cover-section" id="h9ZBVxSQWf-hidden">
                            <div id="YeyccoTVCP-hidden" class="Container-YeyccoTVCP-hidden">
                                <div class="div-pvaJz1GlFM" id="pvaJz1GlFM">
                                    <div><img id="MdmBCjHatO" src="images/top-cover.jpg"
                                            alt="${config.topCoverAlt}" class="Image-MdmBCjHatO"></div>
                                </div>
                            </div>
                        </div>             
                        <div class="cover-section02" id="4wwpXWxUd2">
                            <div id="uMsxkfrobv" class="__className_cfd7f1 Text-uMsxkfrobv">${config.subheading.split('\n').join('<br class="Br-uMsxkfrobv">')}
                            </div>
                        </div>
                        <!-- <discount or special offer info> -->
                        <div id="0DGdGjdJJU" class="special-offer-section-0DGdGjdJJU">
                            <div id="N3OF6zdDDw" class="__className_cfd7f1 Text-N3OF6zdDDw"><b>限時優惠</b></div>
                            <!--$!--><template data-dgst="BAILOUT_TO_CLIENT_SIDE_RENDERING"></template><!--/$-->
                            <!-- count down timer -->
                            <div class="count-down-timer-container" id="pBfJzKR9z_">
                                <div class="timer-number days" id="days">
                                    00</div>
                                <div class="timer-unit" id="days-unit">
                                    天
                                </div>
                                <div class="timer-number hours" id="hours">
                                    00
                                </div>
                                <div class="timer-unit hours-unit" id="hours-unit">
                                    時
                                </div>
                                <div class="timer-number minutes" id="minutes">
                                    00
                                </div>
                                <div class="timer-unit minutes-unit" id="minutes-unit">
                                    分
                                </div>
                                <div class="timer-number seconds" id="seconds">
                                    00
                                </div>
                                <div class="timer-unit seconds-unit" id="seconds-unit">
                                    秒
                                </div>
                            </div>
                            <!-- terms and the order buttons -->
                            <div id="M2drNN9crj" class="Container-M2drNN9crj">
                                <div id="iG4Iz-3tgL" class="iG4Iz-3tgL">
                                    <div class="Container-iG4Iz-3tgL">
                                        <div id="fKPPwi-3LU" class="Container-fKPPwi-3LU">
                                            <div id="0aOTK66Bwf" class="Container-0aOTK66Bwf">
                                                <div id="BnkZsXBwiL" class="Container-BnkZsXBwiL"></div>
                                            </div>
                                            <div class="Container-2h6Rp2N6dK"><img id="2h6Rp2N6dK"
                                                    src="images/special-offer.png" alt="${config.specialOfferAlt}"
                                                    class="Image-2h6Rp2N6dK"></div>
                                             <div id="N3OF6zdDDw" class="__className_cfd7f1 Text-N3OF6zdDDw"><div><b>${defaultCouponType[config.specialOfferType]}</b></div>
                                            <div id="vjVGeFGLP5" class="Container-vjVGeFGLP5">
                                                <div id="Y7fpaobUoy" class="arial Text-Y7fpaobUoy">${config.term}
                                                </div>
                                            </div>
                                            <!-- 換領 button -->
                                            <!-- <button id="cmxv7Zgc63"
                                                style="id:AddToCartButton;color:#000000;width:100%;height:fit-content;margin:0px;padding:0px;font-size:16;font-style:normal;margin-top:0px;font-weight:normal;margin-left:0px;padding-top:0px;border-color:#000000;border-style:none;border-width:1px;margin-right:0px;padding-left:0px;border-radius:30px;margin-bottom:0px;padding-right:0px;padding-bottom:0px;text-decoration:none;background-color:#f1cb75;display:flex;flex-direction:row;cursor:pointer;opacity:1"
                                                class="Button-3600.6330313619305">
                                                <div id="WLVLGEhZtw"
                                                    style="gap:0px;top:0px;left:0px;width:100%;height:100%;margin:0px;display:flex;padding:0;position:relative;margin-top:5px;transform:none;align-items:flex-start;margin-left:0px;padding-top:5px;border-color:black;border-style:none;border-width:1px;margin-right:0px;padding-left:10px;border-radius:0px;margin-bottom:5px;padding-right:10px;flex-direction:row;padding-bottom:5px;justify-content:center;min-height:fit-content;max-height:100%;background-image:linear-gradient(rgba(64, 64, 64, 0), rgba(64, 64, 64, 0)), url();background-size:cover;background-position:center"
                                                    class="Container-WLVLGEhZtw">
                                                    <div id="sEcN0_Rjg8"
                                                        style="color:#000000;margin:0;font-size:16;margin-top:0;text-align:left;font-family:'Noto Sans TC';margin-left:0;margin-right:0;margin-bottom:0;on-click-functions-metadata:;display:flex;flex-direction:column;opacity:1"
                                                        class="__className_cfd7f1 Text-sEcN0_Rjg8"><span
                                                            style="font-size:18px;font-weight:700">點擊換領！</span></div>
                                                </div>
                                            </button> -->
                                             ${config.showOrderForm ? `<button id="toggleForm" class="toggle-btn">點擊換領！</button>` : ``}
                                        </div>
                                    </div>
                                </div>
                                <!-- <div xAT8OJOcow is deleted > -->
                            </div>

                        </div>
                    </div>
                </div>
                <!-- form section  -->
                ${config.showOrderForm ? ` <div id="OmpSotIOMQ" class="Page-OmpSotIOMQ">
                    <div id="formContainer" class="form-container hidden">
                        <h1>送貨地址</h1>
                        <form id="orderForm" novalidate>
                            <div class="form-group">
                                <label class="required">姓名</label>
                                <input type="text" id="name" required>
                                <span class="error-message"></span>
                            </div>

                            <div class="form-group">
                                <label class="required">地址(第一行)</label>
                                <input type="text" id="address1" required>
                                <span class="error-message"></span>
                            </div>

                            <div class="form-group">
                                <label>地址(第二行)</label>
                                <input type="text" id="address2">
                                <span class="error-message"></span>
                            </div>

                            <div class="form-group">
                                <label class="required">城市</label>
                                <input type="text" id="city" required>
                                <span class="error-message"></span>
                            </div>

                            <div class="form-group">
                                <label>省分/州</label>
                                <input type="text" id="state">
                                <span class="error-message"></span>
                            </div>

                            <div class="form-group">
                                <label class="required">郵遞區號</label>
                                <input type="text" id="zipcode" required>
                                <span class="error-message"></span>
                            </div>

                            <div class="form-group">
                                <label class="required">國家/地區</label>
                                <select id="country" required>
                                    <option value="">請選擇國家/地區</option>
                                    <option value="HK">香港</option>
                                    <option value="TW">台灣</option>
                                    <option value="CN">中國</option>
                                </select>
                                <span class="error-message"></span>
                            </div>

                            <div class="form-group">
                                <label>聯絡方式</label>
                                <div class="phone-input">
                                    <select id="phonePrefix" class="phone-prefix">
                                        <option value="+852">香港(+852)</option>
                                        <option value="+886">台灣(+886)</option>
                                        <option value="+86">中國(+86)</option>
                                    </select>
                                    <input type="tel" id="phone" placeholder="電話號碼">
                                </div>
                                <span class="error-message"></span>
                            </div>

                            <div class="form-group">
                                <label class="required">電郵地址</label>
                                <input type="email" id="email" required>
                                <span class="error-message"></span>
                            </div>

                            <button type="submit" class="checkout-btn" disabled>立即結帳</button>
                        </form>
                    </div>
                </div>`: ``}
               
              ${config.showSearch ?
        `<div class="container-search">


                    <form id="bookingForm">
                        <div class="form-group">
                            <select class="form-control" name="branch" required>
                                <option value="">分店*</option>
                                ${config.bookingFormConfig.branches.map((obj) => { return `<option value="${obj.name}">${obj.name}</option>` }).join("\n")}
                            </select>
                        </div>

                        <div class="form-group">
                            <select class="form-control" name="people" required>
                                    ${peopleOptions.map((obj) => { return `<option value="${obj}">${obj}人</option>` }).join("\n")}
                            </select>
                        </div>

                      <div class="form-group">
                          <input type="text" class="form-control" name="name" required placeholder="名稱*">
                      </div>
                    
                      <div class="form-group">
                         <input type="tel" class="form-control" name="phone" required placeholder="電話*">
                      </div>

                      <div class="form-group">
                            <input type="date" class="form-control" name="date" required placeholder="日期*">
                      </div>

                      <!-- <div class="form-group">
                        <input type="time" class="form-control" name="time" id="timeSelect" required placeholder="時間*" >
                    </div>
                     -->
                       <div class="form-group">
                        <select class="form-control" name="time" id="timeSelect" required>
                            <option value="">時間*</option>
                        </select>
                    </div>

                        <button type="submit" class="search-btn">訂位</button>
                    </form>
                </div>` : ''}
                <!-- <footer section> -->
                <div id="5QMrkBl5dE" class="Footer-5QMrkBl5dE">
                    <div id="csfXwJ_ewQ" class="Container-csfXwJ_ewQ">
                    <div id="N3OF6zdDDw" class="__className_cfd7f1 Text-N3OF6zdDDw"><b>${config.storeName}</b></div>
                        <div id="mtvRnpC47m" class="Container-mtvRnpC47m"></div>
                        <div><img id="YqYibvc-dA" src="images/store.jpg" alt="${config.imageAlt}"
                                class="Image-YqYibvc-dA"></div>
                         <!-- <div id="MHzhO0RGnw" class="arial Text-MHzhO0RGnw">
                            <div>
                            ${`<span class="address-name" class="address-name">📍` + config.address.split('\n').join(`</span><br class="address-name"><span class="address-name">📍`) + `</span><br class="address-name">`}
                            </div>
                        </div> -->
                        <div class="details">
                            <div class="detail-item">
                                <span class="material-icons">place</span>
                                <div class="detail-content-address">
                            
                                    ${config.addresses.map((obj) => { return `<a target="_blank" href="${obj.googleMapsUrl}"><p>${obj.name}</p></a>` }).join("\n")}
                                </div>
                            </div>
                            <div class="detail-item open-hours-info">
                                <span class="material-icons">schedule</span>
                                <div class="detail-content">
                                    <p class="open-status">營業中</p>
                                    <p class="open-status-quote">&nbsp;結束營業時間：18:00</p>
                                    <span class="material-icons dropdown">expand_more</span>
                                </div>
                            </div>

                            <div class="full-hours-list hidden">
                                <div class="detail-item">
                                    <span class="material-icons opacity-0">schedule</span>
                                    <div class="detail-content">
                                        <p>星期一  &nbsp;${config.storeHours.monday.isOpen ? (config.storeHours.monday.openTime + " – " + config.storeHours.monday.closeTime) : "Closed"}</p>

                                    </div>
                                </div>
                                <div class="detail-item">
                                    <span class="material-icons opacity-0">schedule</span>
                                    <div class="detail-content">
                                        <p>星期二 &nbsp;${config.storeHours.tuesday.isOpen ? (config.storeHours.tuesday.openTime + " – " + config.storeHours.tuesday.closeTime) : "Closed"}</p>

                                    </div>
                                </div>
                                <div class="detail-item">
                                    <span class="material-icons opacity-0">schedule</span>
                                    <div class="detail-content">
                                        <p>星期三 &nbsp;${config.storeHours.wednesday.isOpen ? (config.storeHours.wednesday.openTime + " – " + config.storeHours.wednesday.closeTime) : "Closed"}</p>

                                    </div>
                                </div>
                                <div class="detail-item">
                                    <span class="material-icons opacity-0">schedule</span>
                                    <div class="detail-content">
                                        <p>星期四 &nbsp;${config.storeHours.thursday.isOpen ? (config.storeHours.thursday.openTime + " – " + config.storeHours.thursday.closeTime) : "Closed"}</p>

                                    </div>
                                </div>
                                <div class="detail-item">
                                    <span class="material-icons opacity-0">schedule</span>
                                    <div class="detail-content">
                                        <p>星期五 &nbsp;${config.storeHours.friday.isOpen ? (config.storeHours.friday.openTime + " – " + config.storeHours.friday.closeTime) : "Closed"}</p>

                                    </div>
                                </div>
                                <div class="detail-item">
                                    <span class="material-icons opacity-0">schedule</span>
                                    <div class="detail-content">
                                        <p>星期六 &nbsp;${config.storeHours.saturday.isOpen ? (config.storeHours.saturday.openTime + " – " + config.storeHours.saturday.closeTime) : "Closed"}</p>

                                    </div>
                                </div>
                                <div class="detail-item">
                                    <span class="material-icons opacity-0">schedule</span>
                                    <div class="detail-content">
                                        <p>星期日 &nbsp;${config.storeHours.sunday.isOpen ? (config.storeHours.sunday.openTime + " – " + config.storeHours.sunday.closeTime) : "Closed"}</p>

                                    </div>
                                </div>

                            </div>

                            <div class="detail-item" href="${config.officalWebsite}">
                                <span class="material-icons">language</span>
                                <div class="detail-content">
                                    <a href="${config.officalWebsite}">${config.officalWebsite}</a>
                                </div>
                            </div>

                            <div class="detail-item" href="tel:${config.phone}">
                                <span class="material-icons">phone</span>
                                <div class="detail-content">
                                    <a href="tel:${config.phone}">${config.phone}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- old social-icons -->
                    <!-- <div id="RBmZ0o0RgA"
                        style="gap:0px;top:0px;left:0px;width:100%;height:18px;margin:0px;display:flex;padding:20px;position:relative;margin-top:0px;transform:none;align-items:start;margin-left:0px;padding-top:0px;border-color:black;border-style:none;border-width:1px;margin-right:0px;padding-left:20px;border-radius:0px;margin-bottom:0px;padding-right:20px;flex-direction:column;padding-bottom:0px;justify-content:center;min-height:fit-content;max-height:100%;background-image:linear-gradient(rgba(64, 64, 64, 0), rgba(64, 64, 64, 0)), url();background-size:cover;background-position:center"
                        class="Container-RBmZ0o0RgA"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                            viewBox="0 0 448 512" id="2EJjC_Vr7i" style="color:#000000;cursor:pointer;opacity:1"
                            height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                            </path>
                        </svg></div> -->
                 </div>

            </div>
        </div>
    </div>
</div>
   ${config.showGallery && (config.galleryImages.length > 0) ?
        `  <section
    class="mbr-wowslider-container mbr-section mbr-section__container carousel slide mbr-section-nopadding mbr-wowslider-container--elegant"
    data-ride="carousel" data-keyboard="false" data-wrap="true" data-interval="false" id="wowslider-7"
    data-rv-view="121" style="background-color: rgb(255,255,255);">
    <div class="mbr-wowslider">
      <div class="ws_images">
        <ul>
        ${carouselImagesComponent}
        </ul>
      </div>
      <div class="ws_shadow"></div>
      <div class="mbr-wowslider-options">
        <div class="params" data-paddingbottom="0" data-anim-type="photo" data-theme="elegant" data-autoplay="true"
          data-paddingtop="0" data-fullscreen="true" data-showbullets="true" data-timeout="2" data-duration="1.5"
          data-height="480" data-width="640" data-responsive="1" data-="false" data-captionseffect="slide"
          data-hidecontrols="false"></div>
      </div>
    </div>
  </section>` : ``}
 
  <div class="next-root">
    <div class="root-container">
                <div class="container-footer">
      <section id="story" class="story py-5 mb-5 rounded-2xl" >
        <div class="w-full px-4">
            <div class="text-center ">
                <h2 class="text-2xl font-bold mb-2 story-section-title-color">${config.storySectionTitle}</h2>
             
            </div>
             <div class="w-full lg:w-full order-1 lg:order-none">
                    <img src="images/storyImg.jpg" alt="${config.storyImageAlt}" alt="My journey" class="max-w-full h-auto mx-auto mb-2">
                </div>
            <div class="flex flex-col gap-8 items-center ">
               
                <div class="w-full lg:w-full">
                    <h3 class="text-2xl font-bold mb-4 story-section-title-color">${config.storySectionParagarph01}</h3>
                    <p class="story-section-text-color mb-6">${config.storySectionContent01}</p>
                    
                    <h3 class="text-2xl font-bold mb-4 story-section-title-color">${config.storySectionParagarph02}</h3>
                    <p class="story-section-text-color mb-6">${config.storySectionContent02}</p>
                    
                    <h3 class="text-2xl font-bold mb-4 story-section-title-color">${config.storySectionParagarph03}</h3>
                    <p class="tstory-section-text-color mb-6">${config.storySectionContent03}</p>
                </div>
            </div>
        </div>
    </section>
                    <div class="divider">
                        <div class="social-icons">
                        ${config.instagram ? `<a href="${config.instagram}" target="_blank"><svg href="${config.instagram}" class="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2">
                                <rect x="2" y="2" width="20" height="20" rx="5" />
                                <circle cx="12" cy="12" r="4" />
                                <circle cx="18" cy="6" r="1" />
                            </svg></a>` : ''}
                             ${config.facebook ? `<a href="${config.facebook}" target="_blank"><svg href="${config.facebook}" class="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                            </svg></a>` : ''}
                            ${config.threads ? `<a href="${config.threads}" target="_blank">  
                              <svg href="${config.threads}" class="social-icon" xmlns="http://www.w3.org/2000/svg"
                                shape-rendering="geometricPrecision" text-rendering="geometricPrecision"
                                image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
                                viewBox="0 0 439.999 511.429">
                                <path fill="${config.textColor}" fill-rule="nonzero"
                                    d="M342.382 237.037a175.843 175.843 0 00-6.707-3.045c-3.947-72.737-43.692-114.379-110.428-114.805-38.505-.256-72.972 15.445-94.454 48.041l36.702 25.178c15.265-23.159 39.221-28.097 56.864-28.097.203 0 .408 0 .61.003 21.973.139 38.555 6.528 49.287 18.987 7.81 9.071 13.034 21.606 15.62 37.425-19.482-3.312-40.552-4.329-63.077-3.039-63.449 3.656-104.24 40.661-101.5 92.081 1.39 26.083 14.384 48.522 36.586 63.18 18.773 12.391 42.95 18.451 68.078 17.08 33.183-1.819 59.214-14.48 77.376-37.631 13.793-17.579 22.516-40.362 26.368-69.068 15.814 9.543 27.535 22.103 34.007 37.2 11.007 25.665 11.648 67.84-22.764 102.222-30.15 30.121-66.392 43.151-121.164 43.554-60.757-.45-106.707-19.934-136.582-57.914-27.976-35.563-42.434-86.93-42.973-152.675.539-65.745 14.997-117.113 42.973-152.675 29.875-37.979 75.824-57.464 136.581-57.914 61.197.455 107.948 20.033 138.967 58.195 15.21 18.713 26.677 42.248 34.236 69.688l43.011-11.476c-9.163-33.775-23.581-62.881-43.203-87.017C357.031 25.59 298.872.519 223.935 0h-.3C148.851.518 91.343 25.683 52.709 74.794 18.331 118.498.598 179.308.002 255.534l-.002.18.002.18c.596 76.226 18.329 137.037 52.707 180.741 38.634 49.11 96.142 74.277 170.926 74.794h.3c66.487-.462 113.352-17.868 151.96-56.442 50.511-50.463 48.991-113.717 32.342-152.548-11.944-27.847-34.716-50.464-65.855-65.402zm-114.795 107.93c-27.809 1.566-56.7-10.917-58.124-37.652-1.056-19.823 14.108-41.942 59.83-44.577 5.237-.302 10.375-.45 15.422-.45 16.609 0 32.146 1.613 46.272 4.702-5.268 65.798-36.173 76.483-63.4 77.977z" />
                            </svg>  
                            </a>` : ''}
                               ${config.socialMediaX ? `<a href="${config.socialMediaX}" target="_blank">  
                                <svg href="${config.socialMediaX}" class="social-icon" xmlns="http://www.w3.org/2000/svg"
                                shape-rendering="geometricPrecision" text-rendering="geometricPrecision"
                                image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
                                viewBox="0 0 512 462.799">
                                <path fill="${config.textColor}" fill-rule="nonzero"
                                    d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z" />
                            </svg> 
                            </a>` : ''}
                             ${config.whatsapp ? `<a href="${config.whatsapp}" target="_blank">  
                            <svg href="${config.whatsapp}" class="social-icon" xmlns="http://www.w3.org/2000/svg"
                                shape-rendering="geometricPrecision" text-rendering="geometricPrecision"
                                image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
                                viewBox="0 0 510 512.459">
                                <path fill="${config.textColor}"
                                    d="M435.689 74.468C387.754 26.471 324 .025 256.071 0 116.098 0 2.18 113.906 2.131 253.916c-.024 44.758 11.677 88.445 33.898 126.946L0 512.459l134.617-35.311c37.087 20.238 78.85 30.891 121.345 30.903h.109c139.949 0 253.88-113.917 253.928-253.928.024-67.855-26.361-131.645-74.31-179.643v-.012zm-179.618 390.7h-.085c-37.868-.011-75.016-10.192-107.428-29.417l-7.707-4.577-79.886 20.953 21.32-77.889-5.017-7.987c-21.125-33.605-32.29-72.447-32.266-112.322.049-116.366 94.729-211.046 211.155-211.046 56.373.025 109.364 22.003 149.214 61.903 39.853 39.888 61.781 92.927 61.757 149.313-.05 116.377-94.728 211.058-211.057 211.058v.011zm115.768-158.067c-6.344-3.178-37.537-18.52-43.358-20.639-5.82-2.119-10.044-3.177-14.27 3.178-4.225 6.357-16.388 20.651-20.09 24.875-3.702 4.238-7.403 4.762-13.747 1.583-6.343-3.178-26.787-9.874-51.029-31.487-18.86-16.827-31.597-37.598-35.297-43.955-3.702-6.355-.39-9.789 2.775-12.943 2.849-2.848 6.344-7.414 9.522-11.116s4.225-6.355 6.343-10.581c2.12-4.238 1.06-7.937-.522-11.117-1.584-3.177-14.271-34.409-19.568-47.108-5.151-12.37-10.385-10.69-14.269-10.897-3.703-.183-7.927-.219-12.164-.219s-11.105 1.582-16.925 7.939c-5.82 6.354-22.209 21.709-22.209 52.927 0 31.22 22.733 61.405 25.911 65.642 3.177 4.237 44.745 68.318 108.389 95.812 15.135 6.538 26.957 10.446 36.175 13.368 15.196 4.834 29.027 4.153 39.96 2.52 12.19-1.825 37.54-15.353 42.824-30.172 5.283-14.818 5.283-27.529 3.701-30.172-1.582-2.641-5.819-4.237-12.163-7.414l.011-.024z" />
                            </svg>
                            </a>` : ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div><!--/$-->
</body>

</html>`;
  };

  const generateCSS = () => {
    return `
        /*for the section*/
        .Page-OmpSotIOMQ {
            gap: 0px;
            width: 100%;
            margin: 0px;
            display: flex;
            padding-left: 10px;
            padding-right: 10px;
            align-items: flex-start;
            border-color: black;
            border-style: none;
            border-width: 1px;
            border-radius: 0px;
            flex-direction: column;
            justify-content: center;
            position: relative;
            min-height: fit-content;
            height: 100%;
            background-color: ${config.backgroundColor};
            background-size: cover;
            background-position: center center;
        }

        /*for the  order form*/
        .form-container {
            background: white;
            padding: 40px;
            border-radius: 8px;
            width: 100%;
            max-width: 500px;
        }

        h1 {
            font-size: 18px;
            margin-bottom: 24px;
            color: #333;
        }

        .form-group {
            /* margin-bottom: 16px; */
            position: relative;
        }

        label {
            display: block;
            margin-bottom: 8px;
            color: #666;
            font-size: 14px;
        }

        input,
        select {
            width: 100%;
            padding: 8px 12px;
            border: none;
            border-bottom: 1px solid #ddd;
            font-size: 16px;
            outline: none;
            transition: all 0.3s;
        }

        /* Validation states */
        input.valid,
        select.valid {
            border-bottom-color: #4caf50;
        }

        input.invalid,
        select.invalid {
            border-bottom-color: #f44336;
        }

        .error-message {
            color: #f44336;
            font-size: 12px;
            margin-top: 4px;
            min-height: 16px;
            display: block;
        }

        .phone-input {
            display: flex;
            gap: 12px;
        }

        .phone-prefix {
            width: 120px;
        }

        .order-summary {
            margin-top: 32px;
            padding-top: 24px;
            border-top: 1px solid #eee;
        }

        .summary-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 12px;
            color: #666;
        }

        .total-row {
            font-weight: bold;
            color: #333;
            font-size: 18px;
            margin-top: 16px;
            padding-top: 16px;
            border-top: 1px solid #eee;
        }

        .checkout-btn {
            width: 100%;
            padding: 16px;
            background-color: #7895b7;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
            margin-top: 24px;
            transition: background-color 0.3s;
        }

        .checkout-btn:hover {
            background-color: #6785a7;
        }

        .checkout-btn:disabled {
            background-color: #cccccc;
            cursor: not-allowed;
        }

        .required::after {
            content: '*';
            color: #ff4d4f;
            margin-left: 4px;
        }

        /* for extra footer information  */
        .container-footer {
            max-width: 42rem;
            margin: 0 auto;
            padding: 1rem;
            text-align: center;
           background-color: ${config.backgroundColor}; 
           min-width: 500px;

        }

        .divider {
            border-top: 1px solid ${config.textColor};
            color: ${config.textColor};
            padding-top: 2rem;
            margin-bottom: 1rem;
        }

        .social-icons {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-top: 1rem;
        }

        .social-icon {
            width: 1.5rem;
            height: 1.5rem;
            color: ${config.textColor};
        }

        /* for search funtion  */
        .container-search {
            max-width: 500px;
            margin: 0 auto;
            padding: 20px;
            background-color: ${config.backgroundColor};
        }

        .form-control {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }

        .search-btn {
            width: 100%;
            background-color: ${config.buttonColor};
            color: ${config.buttonTextColor};
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }

        .form-group {
            margin-bottom: 15px;
        }

        /* .image-container {
            position: relative;
        } */


        .toggle-btn {
            margin-bottom: 20px;
            padding: 10px 20px;
            font-size: 16px;
            background-color: ${config.buttonColor};
            color: ${config.buttonTextColor};
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
            width: 100%
        }
        .root {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: auto;
            height: fit-content;
        }

        .root-container {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            width: 100%;
            max-width: 500px;
            height: fit-content;
            overflow: hidden;
        }

        .WebPage-ROOT {
            background-image: linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 1)), url();
            background-size: cover;
            background-position: center;
            /* Removed invalid property background-img-mask */
            height: 100%;
            padding: 0;
            background-color: #ffffff;
            width: 100%;
        }
        .Pagnation-5ukyccm-T4 {
            width: 100%;
            height: fit-content;
            current-page: 0;
            position: relative;
            min-height: fit-content;
        }

        .Page-u7ZlrU8_9e {
            gap: 0px;
            width: 100%;
            margin: 0px;
            display: flex;
            padding: 0px;
            margin-top: 0px;
            align-items: flex-start;
            margin-left: 0px;
            padding-top: 0px;
            border-color: black;
            border-style: none;
            border-width: 1px;
            margin-right: 0px;
            padding-left: 0px;
            border-radius: 0px;
            margin-bottom: 0px;
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: 0px;
            justify-content: center;
            position: relative;
            min-height: fit-content;
            height: 100%;
            background-image: linear-gradient(rgba(64, 64, 64, 0), rgba(64, 64, 64, 0)), url();
            background-size: cover;
            background-position: center;
        }

        /*navbar section*/
        .D8-JIf1V5m {
            position: fixed;
            top: 0;
            height: fit-content;
            width: 100%;
            max-width: 500px;
            z-index: 100;
        }

        .Container-ky52cFH6m7 {
            gap: 0px;
            top: 0px;
            left: 0px;
            width: 100%;
            height: fit-content;
            margin: 0px;
            display: flex;
            padding: 20px;
            position: relative;
            margin-top: 0px;
            transform: none;
            align-items: center;
            margin-left: 0px;
            padding-top: 20px;
            border-color: black;
            border-style: none;
            border-width: 1px;
            margin-right: 0px;
            padding-left: 20px;
            border-radius: 0px;
            margin-bottom: 0px;
            padding-right: 20px;
            flex-direction: row;
            padding-bottom: 20px;
            justify-content: space-between;
            min-height: 80px;
            max-height: 100%;
            background-color: ${config.navbarColor};
            background-size: cover;
            background-position: center;
        }

        /*logo section*/
        .logo-xpU7UGXY04 {
            width: 120px;
            height: 30px;
            margin: 0px;
            padding: 0px;
            margin-top: 0px;
            margin-left: 0px;
            padding-top: 0px;
            aspect-ratio: 4.481751824817518;
            border-color: black;
            border-style: none;
            border-width: 1px;
            margin-right: 0px;
            padding-left: 0px;
            border-radius: 0px;
            margin-bottom: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
        }

        /*navbar button section*/
        .Button-navbar {
            color: ${config.buttonTextColor};
            min-width: 142px;
            width: auto;
            height: 42px;
            margin: 0;
            padding: 5px;
            font-size: 16;
            font-style: normal;
            margin-top: 0;
            font-weight: normal;
            margin-left: 0;
            padding-top: 5px;
            border-color: #000000;
            border-style: none;
            border-width: 1px;
            margin-right: 0;
            padding-left: 5px;
            border-radius: 5px;
            margin-bottom: 0;
            padding-right: 5px;
            padding-bottom: 5px;
            text-decoration: none;
            background-color: ${config.buttonColor};
            display: flex;
            flex-direction: row;
            cursor: pointer;
            opacity: 1;
        }

        .Container-P1_hvQIFrP {
            gap: 0px;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            margin: 0px;
            display: flex;
            padding: 0;
            position: relative;
            margin-top: 0px;
            transform: none;
            align-items: flex-start;
            margin-left: 0px;
            padding-top: 5px;
            border-color: black;
            border-style: none;
            border-width: 1px;
            margin-right: 0px;
            padding-left: 10px;
            border-radius: 0px;
            margin-bottom: 0px;
            padding-right: 10px;
            flex-direction: row;
            padding-bottom: 5px;
            justify-content: center;
            min-height: fit-content;
            max-height: 100%;
            background-image: linear-gradient(rgba(64, 64, 64, 0), rgba(64, 64, 64, 0)), url();
            background-size: cover;
            background-position: center;
        }

        .Text--i_o19aYCj {
            color: ${config.buttonTextColor};
            width: auto;
            height: 25px;
            margin: 0;
            font-size: 16;
            margin-top: 0;
            text-align: center;
            font-family: Arial;
            font-weight: normal;
            margin-left: 0;
            margin-right: 0;
            margin-bottom: 0;
            display: flex;
            flex-direction: column;
            opacity: 1;
        }
        /*cover section*/
        .cover-section {
            position: relative;
            height: fit-content;
            width: 100%;
            visibility: hidden;
        }

        .Container-YeyccoTVCP-hidden {
            gap: 0px;
            top: 0px;
            left: 0px;
            width: 100%;
            height: fit-content;
            margin: 0px;
            display: flex;
            padding: 20px;
            position: relative;
            margin-top: 0px;
            transform: none;
            align-items: center;
            margin-left: 0px;
            padding-top: 20px;
            border-color: black;
            border-style: none;
            border-width: 1px;
            margin-right: 0px;
            padding-left: 20px;
            border-radius: 0px;
            margin-bottom: 0px;
            padding-right: 20px;
            flex-direction: row;
            padding-bottom: 20px;
            justify-content: space-between;
            min-height: fit-content;
            max-height: 100%;
            background-image: linear-gradient(rgb(255, 249, 232), rgb(255, 249, 232)), url();
            background-size: cover;
            background-position: center;
        }

        .Image-MdmBCjHatO {
            width: 100auto;
            height: 40px;
            margin: 0px;
            padding: 0px;
            margin-top: 0px;
            margin-left: 0px;
            padding-top: 0px;
            aspect-ratio: 2.627586206896552;
            border-color: black;
            border-style: none;
            border-width: 1px;
            margin-right: 0px;
            padding-left: 0px;
            border-radius: 0px;
            margin-bottom: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
        }

        .cover-section02 {
            gap: 0px;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 150px;
            margin: 0px;
            display: flex;
            padding: 20px;
            position: relative;
            margin-top: 0px;
            transform: none;
            align-items: flex-start;
            margin-left: 0px;
            padding-top: 20px;
            border-color: black;
            border-style: none;
            border-width: 1px;
            margin-right: 0px;
            padding-left: 20px;
            border-radius: 0px;
            margin-bottom: 0px;
            padding-right: 20px;
            flex-direction: column;
            padding-bottom: 20px;
            justify-content: center;
            min-height: fit-content;
            max-height: 100%;
            background-image: linear-gradient(rgba(50, 51, 54, 0.4), rgba(50, 51, 54, 0.4)), url("../images/top-cover.jpg");
            background-size: cover;
            background-position: center;
        }

        .Text-uMsxkfrobv {
            color: #ffffff;
            margin: 0;
            font-size: 25px;
            margin-top: 0;
            text-align: left;
            font-family: 'Noto Sans TC';
            font-weight: bold;
            margin-left: 0;
            margin-right: 0;
            margin-bottom: 0;
            display: flex;
            flex-direction: column;
            opacity: 1;
        }

        .Br-uMsxkfrobv {
            --tw-border-spacing-x: 0;
            --tw-border-spacing-y: 0;
            --tw-translate-x: 0;
            --tw-translate-y: 0;
            --tw-rotate: 0;
            --tw-skew-x: 0;
            --tw-skew-y: 0;
            --tw-scale-x: 1;
            --tw-scale-y: 1;
            --tw-scroll-snap-strictness: proximity;
            --tw-ring-offset-width: 0px;
            --tw-ring-offset-color: #fff;
            --tw-ring-color: rgba(59, 130, 246, .5);
            --tw-ring-offset-shadow: 0 0 #0000;
            --tw-ring-shadow: 0 0 #0000;
            --tw-shadow: 0 0 #0000;
            --tw-shadow-colored: 0 0 #0000;
        }

        /*speciall-offer-section*/
        .special-offer-section-0DGdGjdJJU {
            gap: 0px;
            top: 0px;
            left: 0px;
            width: 100%;
            height: fit-content;
            margin: 0px;
            display: flex;
            padding: 5px;
            position: relative;
            margin-top: 0px;
            transform: none;
            align-items: center;
            margin-left: 0px;
            padding-top: 15px;
            border-color: black;
            border-style: none;
            border-width: 1px;
            margin-right: 0px;
            padding-left: 5px;
            border-radius: 0px;
            margin-bottom: 0px;
            padding-right: 5px;
            flex-direction: column;
            padding-bottom: 5px;
            justify-content: center;
            min-height: fit-content;
            max-height: 100%;
            background-color: ${config.backgroundColor};
            background-size: cover;
            background-position: center;
        }

        .Text-N3OF6zdDDw {
            color: ${config.titleColor};
            margin: 0;
            font-size: 20px;
            margin-top: 0;
            text-align: left;
            font-family: 'Noto Sans TC';
            margin-left: 0;
            margin-right: 0;
            margin-bottom: 0;
            display: flex;
            flex-direction: column;
            opacity: 1;
              align-items: center;
            min-width: 100%;
        }

        .count-down-timer-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding-bottom: 20px;
        }

        .timer-number {
            background-color: ${config.panelColor};
            color: ${config.panelTextColor};
            border-width: 1px;
            border-color: rgb(241, 203, 117);
            border-style: none;
            border-radius: 5px;
            font-size: 16px;
            font-weight: normal;
            font-style: normal;
            text-decoration: none;
            padding: 13px;
            margin: 10px;
        }

        .timer-unit {
            color: ${config.textColor};
            font-size: 16px;
            font-weight: normal;
            font-style: normal;
        }

        .Container-M2drNN9crj {
            gap: 0px;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 474px;
            margin: 0px;
            display: flex;
            padding: 20px;
            position: relative;
            margin-top: 0px;
            transform: none;
            align-items: flex-start;
            margin-left: 0px;
            padding-top: 0px;
            border-color: black;
            border-style: none;
            border-width: 1px;
            margin-right: 0px;
            padding-left: 20px;
            border-radius: 0px;
            margin-bottom: 0px;
            padding-right: 20px;
            flex-direction: column;
            padding-bottom: 0px;
            justify-content: center;
            min-height: fit-content;
            max-height: 100%;
            background-color: ${config.backgroundColor};
            background-size: cover;
            background-position: center
        }

        .iG4Iz-3tgL {
            position: relative;
            width: 100%;
            height: fit-content;
        }

        .Container-iG4Iz-3tgL {
            white-space: pre-line;
            width: 100%;
            height: 100%;
            min-height: fit-content;
        }

        .Container-fKPPwi-3LU {
            gap: 0px;
            top: 0px;
            left: 0px;
            width: 100%;
            height: fit-content;
            margin: 0px;
            display: flex;
            padding: 0px;
            position: relative;
            margin-top: 0px;
            transform: none;
            align-items: flex-start;
            margin-left: 0px;
            padding-top: 0px;
            border-color: black;
            border-style: none;
            border-width: 1px;
            margin-right: 0px;
            padding-left: 0px;
            border-radius: 0px;
            margin-bottom: 0px;
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: 0px;
            justify-content: center;
            min-height: fit-content;
            max-height: 100%;
            background-image: linear-gradient(rgba(64, 64, 64, 0), rgba(64, 64, 64, 0)), url();
            background-size: cover;
            background-position: center;
        }

        .Container-0aOTK66Bwf {
            gap: 0px;
            top: 0px;
            left: 0px;
            width: 100%;
            height: fit-content;
            margin: 0px;
            display: flex;
            padding: 0px;
            position: relative;
            margin-top: 0px;
            transform: none;
            align-items: center;
            margin-left: 0px;
            padding-top: 0px;
            border-color: black;
            border-style: none;
            border-width: 1px;
            margin-right: 0px;
            padding-left: 0px;
            border-radius: 0px;
            margin-bottom: 10px;
            padding-right: 0px;
            flex-direction: row;
            padding-bottom: 0px;
            justify-content: space-between;
            min-height: fit-content;
            max-height: 100%;
            background-image: linear-gradient(rgba(64, 64, 64, 0), rgba(64, 64, 64, 0)), url();
            background-size: cover;
            background-position: center;
        }

        .Container-BnkZsXBwiL {
            gap: 0px;
            top: 0px;
            left: 0px;
            width: 60%;
            height: fit-content;
            margin: 0px;
            display: flex;
            padding: 0px;
            position: relative;
            margin-top: 0px;
            transform: none;
            align-items: center;
            margin-left: 0px;
            padding-top: 0px;
            border-color: black;
            border-style: none;
            border-width: 1px;
            margin-right: 0px;
            padding-left: 0px;
            border-radius: 0px;
            margin-bottom: 0px;
            padding-right: 0px;
            flex-direction: row;
            padding-bottom: 0px;
            justify-content: start;
            min-height: fit-content;
            max-height: 100%;
            background-image: linear-gradient(rgba(64, 64, 64, 0), rgba(64, 64, 64, 0)), url();
            background-size: cover;
            background-position: center;
        }

        .Image-2h6Rp2N6dK {
            width: 100%;
          
            margin: 0px;
            padding: 0px;
            margin-top: 0px;
            margin-left: 0px;
            padding-top: 0px;
            aspect-ratio: 1.6160220994475138;
            border-color: black;
            border-style: none;
            border-width: 100%;
            margin-right: 0px;
            padding-left: 0px;
            border-radius: 0px;
            margin-bottom: 0px;
            padding-right: 0px;
            padding-bottom: 0px;

        }

        .Container-vjVGeFGLP5 {
            gap: 0px;
            top: 0px;
            left: 0px;
            width: 100%;
            height: fit-content;
            margin: 0px;
            display: flex;
            padding: 6px;
            position: relative;
            margin-top: 0px;
            transform: none;
            align-items: start;
            margin-left: 0px;
            padding-top: 6px;
            border-color: ${config.panelColor};
            border-style: none;
            border-width: 1px;
            margin-right: 0px;
            padding-left: 6px;
            border-radius: 10px;
            margin-bottom: 15px;
            padding-right: 6px;
            flex-direction: column;
            padding-bottom: 6px;
            justify-content: center;
            min-height: fit-content;
            max-height: 100%;
            background-color: ${config.panelColor};
            background-size: cover;
            background-position: center;
        }

        .Text-Y7fpaobUoy {
            color: ${config.panelTextColor};
            width: 305px;
            height: auto;
            margin: 0;
            font-size: 14px;
            margin-top: 0;
            text-align: left;
            font-family: Arial;
            margin-left: 10px;
            margin-right: 0;
            margin-bottom: 0;
            display: flex;
            flex-direction: column;
            opacity: 1;
        }

        .Container-2h6Rp2N6dK {
            display: flex;
            align-content: center;
            align-items: center;
            width: 100%;
        }

        /*footer*/
        .Footer-5QMrkBl5dE {
            gap: 0px;
            width: 100%;
            margin: 0px;
            display: flex;
            padding: 20px;
            margin-top: auto;
            align-items: start;
            margin-left: 0px;
            padding-top: 0px;
            border-color: black;
            border-style: none;
            border-width: 1px;
            margin-right: 0px;
            padding-left: 20px;
            border-radius: 0px;
            margin-bottom: 0px;
            padding-right: 20px;
            flex-direction: column;
            padding-bottom: 20px;
            justify-content: start;
            position: relative;
            min-height: fit-content;
            max-height: 100%;
           background-color: ${config.backgroundColor};
            background-size: cover;
            background-position: center;
        }

        .Container-csfXwJ_ewQ {
            gap: 0px;
            top: 0px;
            left: 0px;
            width: 100%;
            height: fit-content;
            margin: 0px;
            display: flex;
            padding: 20px;
            position: relative;
            margin-top: 0px;
            transform: none;
            align-items: center;
            margin-left: 0px;
            padding-top: 20px;
            border-color: black;
            border-style: none;
            border-width: 1px;
            margin-right: 0px;
            padding-left: 20px;
            border-radius: 0px;
            margin-bottom: 0px;
            padding-right: 20px;
            flex-direction: column;
            padding-bottom: 20px;
            justify-content: center;
            min-height: fit-content;
            max-height: 100%;
            background-image: linear-gradient(rgba(64, 64, 64, 0), rgba(64, 64, 64, 0)), url();
            background-size: cover;
            background-position: center;
        }

        .Text-KA8CVb1FAG {
            color: #3d3d3d;
            width: 123px;
            height: 27px;
            margin: 0;
            font-size: 18px;
            margin-top: 0;
            text-align: center;
            font-family: Arial;
            font-weight: bold;
            margin-left: 0;
            margin-right: 0;
            margin-bottom: 0;
            display: flex;
            flex-direction: column;
            opacity: 1;
        }

        .Container-mtvRnpC47m {
            gap: 0px;
            top: 0px;
            left: 0px;
            width: 100%;
            height: fit-content;
            margin: 0px;
            display: flex;
            padding: 0px;
            position: relative;
            margin-top: 0px;
            transform: none;
            align-items: center;
            margin-left: 0px;
            padding-top: 0px;
            border-color: black;
            border-style: none;
            border-width: 1px;
            margin-right: 0px;
            padding-left: 0px;
            border-radius: 0px;
            margin-bottom: 10px;
            padding-right: 0px;
            flex-direction: row;
            padding-bottom: 0px;
            justify-content: center;
            min-height: fit-content;
            max-height: 100%;
            background-image: linear-gradient(rgba(64, 64, 64, 0), rgba(64, 64, 64, 0)), url();
            background-size: cover;
            background-position: center;
        }

        .Image-YqYibvc-dA {
            width: 279px;
            height: 197px;
            margin: 0px;
            padding: 0px;
            margin-top: 0px;
            margin-left: 0px;
            padding-top: 0px;
            aspect-ratio: 1.7777777777777777;
            border-color: black;
            border-style: none;
            border-width: 1px;
            margin-right: 0px;
            padding-left: 0px;
            border-radius: 0px;
            margin-bottom: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
        }

        .Text-MHzhO0RGnw {
            color: #3d3d3d;
            width: 293px;
            margin: 0;
            font-size: 14px;
            margin-top: 10px;
            text-align: left;
            font-family: Arial;
            margin-left: 0;
            margin-right: 0;
            margin-bottom: 10px;
            display: flex;
            flex-direction: column;
            opacity: 1;
        }

        .address-name {
            color: ${config.textColor};
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }
.dropdown-menu .dropdown-menu {
  left: 100%;
}

.dropdown-item + .dropdown-menu {
  display: none;
}

.dropdown-item:hover + .dropdown-menu,
.dropdown-menu:hover {
  display: block;
}

button {
  background-color: transparent;
  border-color: transparent;
}



.avatar {
  font-size: 16px;
  width: 3em;
  height: 3em;
  border-radius: 50%;
  background: #555555;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.avatar::after {
  content: attr(data-label);
  font-family: "Readex Pro", sans-serif;
  color: #ffffff;
}


/*new navbar */
:root {
  --primary: #eeeeee;
  --secondary: #b18161 ;
  --green: #b18161 ;
  --secondary-light: rgb(34, 124, 112, 0.2);
  --secondary-light-2: rgb(127, 183, 126, 0.1);
  --white: #fff;
  --black: #393e46;

  --shadow: 0px 2px 8px 0px var(--secondary-light);
}
.navbar0209 {
  display: flex;
  align-items: center;
  height: 70px;
  background-color: var(--white);
  padding: 0 8%;
  box-shadow: var(--shadow);
}

.navbar-logo0209 {
  cursor: pointer;
}

.navbar-list0209 {
  width: 100%;
  text-align: right;
  padding-right: 2rem;
}

.navbar-list0209 li {
  display: inline-block;
  margin: 0 1rem;
}

.navbar-list0209 li a {
  font-size: 1rem;
  font-weight: 500;
  color: var(--black);
  text-decoration: none;
}

.profile-dropdown0209 {
  position: relative;
  width: fit-content;
  padding-left: 10px;
  /* display: none; */
}

.profile-dropdown-btn0209 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  /* width: 150px; */
  border-radius: 50px;
  color: var(--black);
  /* background-color: white;
  box-shadow: var(--shadow); */

  cursor: pointer;
  border: 1px solid var(--secondary);
  transition: box-shadow 0.2s ease-in, background-color 0.2s ease-in,
    border 0.3s;
}



.profile-dropdown-btn0209:hover {
  background-color: var(--secondary-light-2);
  box-shadow: var(--shadow);
}

.profile-img0209 {
  position: relative;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: url(./assets/profile-pic.jpg);
  background-size: cover;
  
}

.profile-img0209 i {
  position: absolute;
  right: 0;
  bottom: 0.3rem;
  font-size: 0.5rem;
  color: var(--green);
}

.profile-dropdown-btn0209 span {
  margin: 0 0.5rem;
  margin-right: 0;
  
}

.profile-dropdown-list0209 {
  position: absolute;
  top: 68px;
  width: 280px;
  right: 0;
  background-color: var(--white);
  border-radius: 10px;
  max-height: 0;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: max-height 0.5s;
  padding-left: 0;
  z-index: 10000;
}

.profile-dropdown-list0209 hr {
  border: 0.5px solid var(--green);
}

.profile-dropdown-list0209.active {
  max-height: 500px;
}

.profile-dropdown-list-item0209 {
  padding: 0.5rem 0rem 0.5rem 1rem;
  transition: background-color 0.2s ease-in, padding-left 0.2s;
}

.profile-dropdown-list-item0209 a {
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--black);
}

.profile-dropdown-list-item0209 a i {
  margin-right: 0.8rem;
  font-size: 1.1rem;
  width: 2.3rem;
  height: 2.3rem;
  background-color: var(--secondary);
  color: var(--white);
  line-height: 2.3rem;
  text-align: center;
  margin-right: 1rem;
  border-radius: 50%;
  transition: margin-right 0.3s;
}

.profile-dropdown-list-item0209:hover {
  padding-left: 1.5rem;
  background-color: var(--secondary-light);
}
@media (max-width: 1200px) {
  .profile-dropdown-list0209 {
    position: absolute;
    background-color: var(--white);
    border-radius: 10px;
    max-height: 0;
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: max-height 0.5s;
    padding-left: 0;
    z-index: 100;
}
}
/* for new info*/
        .details {
            padding: 8px 0;
        }

        .detail-item {
            display: flex;
            /* padding: 12px 16px; */
            padding: 8px 8px;
            align-items: flex-start;
        }

        .detail-item .material-icons {
            margin-right: 16px;
            margin-top: 2px;
            color: ${config.textColor};
        }

        .detail-content {
            flex: 1;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: ${config.textColor};
        }

        .detail-content p {
            font-size: 14px;
        }

        .detail-content-address {
            flex: 1;

            justify-content: space-between;
            align-items: center;
            color: ${config.textColor};
        }

        .detail-content-address p {
            font-size: 14px;
            color: ${config.textColor};
        }

        .open-status {
            color: #188038;
        }
        .open-status.open {
            color: #188038;
        }
        .open-status.close {
            color: #d93025;
        }

        .opacity-0 {
            opacity: 0;
        }
        .root {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: auto;
            height: fit-content;
        }
        .next-root {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: fit-content;
        }
        .root-container {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            width: 100%;
            max-width: 500px;
            height: fit-content;
            overflow: hidden;
        }
        *,:after,:before{box-sizing:border-box;border:0 solid #e5e7eb}:after,:before{--tw-content:""}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.visible{visibility:visible}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.m-auto{margin:auto}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.table{display:table}.grid{display:grid}.hidden{display:none}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.resize{resize:both}.border{border-width:1px}.italic{font-style:italic}.underline{text-decoration-line:underline}.line-through{text-decoration-line:line-through}.outline{outline-style:solid}.blur{--tw-blur:blur(8px)}.blur,.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.anticon{&.anticon-delete{color:#aea59b!important}}.white{&.anticon{&.anticon-delete{color:#fff!important}}.ant-select-item{color:#fff!important}}.brownBackground{background-color:#372e30!important;border:none!important;color:#fff!important;.ant-select-selector{background-color:#372e30!important;border:none!important;color:#fff!important}.ant-select-selection-item{color:#fff!important;padding:0!important}.ant-select-arrow{display:none!important}&.ant-btn{background-color:#372e30!important;box-shadow:none!important}&.ant-btn,&.ant-btn:hover{border:none!important;color:#fff!important}&.ant-btn:hover{background-color:#4a3f41!important;box-shadow:2px 4px 4px rgba(0,0,0,.25)!important}input{color:#fff!important}}.noHighlight{.ant-select-item-option-selected{background-color:#372e30!important}}.noPadding{.ant-modal-content,.ant-select-selector{padding:0!important}}.hideDisabled{.ant-picker-time-panel-cell-disabled{display:none!important}}.transparentBg{background-color:transparent!important}.solidBtn{background-color:darkred!important;color:#fff!important;font-weight:600!important;outline:none!important;border-color:darkred!important;height:fit-content!important;&.grey{background-color:#bdbdbd;border-color:#bdbdbd;color:#000}&.green{background-color:#267f80;border-color:#267f80;color:#fff}&.blue{background-color:#5067df!important;border-color:#5067df!important;color:#fff!important}}.solidBtn:disabled{background-color:#e1e1e1!important;border-color:#e1e1e1!important;color:rgba(0,0,0,.25)!important}.solidBtn:not(:disabled):hover{background-color:#b62b2b!important;border-color:#b62b2b!important;color:#fff!important}.solidBtn.grey:not(:disabled):hover{background-color:#a8a8a8!important;border-color:#a8a8a8!important;color:#000!important}.solidBtn.green:not(:disabled):hover{background-color:#2d9fa1!important;border-color:#2d9fa1!important;color:#fff!important}.solidBtn.blue:not(:disabled):hover{background-color:#647bf3!important;border-color:#647bf3!important;color:#fff!important}.borderBtn{border:.15rem solid darkred!important;background-color:transparent!important;color:darkred!important;font-weight:600!important;height:fit-content!important;&.blue{border-color:#5067df!important;color:#5067df!important}&.grey{border-color:#bdbdbd!important;color:#bdbdbd!important}&.darkgrey{border-color:#767676!important;color:#767676!important}}.borderBtn:disabled{background-color:#e1e1e1!important;border-color:#e1e1e1!important;color:rgba(0,0,0,.25)!important}.borderBtn:not(:disabled):hover{border-color:#b62b2b!important;color:#b62b2b!important}.borderBtn.blue:not(:disabled):hover{border-color:#647bf3!important;color:#647bf3!important;background-color:#fff!important}.borderBtn.grey:not(:disabled):hover{border-color:#cfcfcf!important;color:#cfcfcf!important;background-color:#fff!important}.borderBtn.darkgrey:not(:disabled):hover{border-color:#999!important;color:#999!important;background-color:#fff!important}.overflow-visible{.slick-list{overflow:visible!important}}.bookingDatePicker{.ant-picker-input{input{font-size:16px!important;font-weight:600!important}}}.alignLeft{.ant-select-selection-item,.ant-select-selection-search{align-items:flex-start!important;display:flex!important}}
        }
        .story {
            background-color: ${config.storySectionColor};
        }
        #story {
            background-color: ${config.storySectionColor};
            color: ${config.storySectionTextColor};
        }
          .story-section-text-color {
            color: ${config.storySectionTextColor};
        }
         .story-section-title-color {
            color: ${config.storySectionTitleColor};
         }
        `;
  };

  const generateJS = () => {

    return `// time count down 
        const targetDate = new Date("${(config.endDate + "T23:59:59").toString()}").getTime();

        // Function to update the countdown
        function updateCountdown() {
            const now = new Date().getTime(); // Current time
            const timeRemaining = targetDate - now; // Time remaining in milliseconds

            // Calculate days, hours, minutes, and seconds
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            // Update the HTML elements
            document.getElementById("days").textContent = String(days).padStart(2, "0");
            document.getElementById("hours").textContent = String(hours).padStart(2, "0");
            document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
            document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");

            // If the countdown is over, display a message
            if (timeRemaining < 0) {
                clearInterval(countdownInterval);
                document.getElementById("countdown").innerHTML = "Time's up!";
            }
        }

        // Update the countdown every second
        const countdownInterval = setInterval(updateCountdown, 1000);

        // Initial call to display the countdown immediately
        updateCountdown();

// Order form
const form = document.getElementById('orderForm');
const submitButton = form.querySelector('button[type="submit"]');
const toggleButton = document.getElementById('toggleForm');
const formContainer = document.getElementById('formContainer');

// Set initial state
formContainer.classList.add('hidden');
toggleButton.textContent = '顯示表單';

// Toggle form visibility
toggleButton.addEventListener('click', () => {
    formContainer.classList.toggle('hidden');
    toggleButton.textContent = formContainer.classList.contains('hidden') ? '顯示表單' : '隱藏表單';
});

// Validation rules
 const validationRules = {
            name: {
                pattern: /^[\\u4e00-\\u9fa5a-zA-Z\\s]{3,}$/,
                message: '請輸入有效的姓名（至少2個字符，不含數字和特殊符號）'
            },
            address1: {
                pattern: /.{5,}/,
                message: '請輸入有效的地址（至少5個字符）'
            },
            city: {
                pattern: /^[\\u4e00-\\u9fa5a-zA-Z\\s]{2,}$/,
                message: '請輸入有效的城市名稱'
            },
            zipcode: {
                pattern: /^[0-9a-zA-Z-]{2,}$/,
                message: '請輸入有效的郵遞區號'
            },
            email: {
                pattern: /^[^\\s@]+@[^\\s@]+\.[^\\s@]+$/,
                message: '請輸入有效的電子郵件地址'
            },
            phone: {
                pattern: /^[0-9]{8,}$/,
                message: '請輸入有效的電話號碼',
                optional: true
            }
        };

// Validate single field
function validateField(field) {
    const rule = validationRules[field.id];
    if (!rule) return true;
    console.log('field', field.getAttribute('id'));
    console.log('field.parentElement', field.parentElement);
    if (field.getAttribute('id') !== "phone" && field.getAttribute('id') !== "phonePrefix") {
        const errorElement = field.parentElement.querySelector('.error-message');

        console.log('errorElement', errorElement);
        let isValid = true;

        // Clear previous validation state
        field.classList.remove('valid', 'invalid');
        errorElement.textContent = '';

        // Skip validation if field is optional and empty
        if (rule.optional && !field.value) {
            return true;
        }

        // Required field validation
        if (field.required && !field.value) {
            isValid = false;
            errorElement.textContent = '此欄位為必填';
        }
        // Pattern validation
        else if (field.value && !rule.pattern.test(field.value)) {
            isValid = false;
            errorElement.textContent = rule.message;
        }

        // Add validation state class
        field.classList.add(isValid ? 'valid' : 'invalid');
        return isValid;
    }
    else {
        const errorElement = field.parentElement.parentElement.querySelector('.error-message');

        console.log('errorElement', errorElement);
        let isValid = true;

        // Clear previous validation state
        field.classList.remove('valid', 'invalid');
        errorElement.textContent = '';

        // Skip validation if field is optional and empty
        if (rule.optional && !field.value) {
            return true;
        }

        // Required field validation
        if (field.required && !field.value) {
            isValid = false;
            errorElement.textContent = '此欄位為必填';
        }
        // Pattern validation
        else if (field.value && !rule.pattern.test(field.value)) {
            isValid = false;
            errorElement.textContent = rule.message;
        }

        // Add validation state class
        field.classList.add(isValid ? 'valid' : 'invalid');
        return isValid;
    }
}

// Validate all fields and update submit button state
function validateForm() {
    const fields = form.querySelectorAll('input, select');
    let isFormValid = true;

    fields.forEach(field => {
        if (field.id && (field.required || field.value)) {
            isFormValid = validateField(field) && isFormValid;
        }
    });

    submitButton.disabled = !isFormValid;
    return isFormValid;
}

// Add validation listeners to all fields
form.querySelectorAll('input, select').forEach(field => {
    field.addEventListener('input', () => {
        if (field.id) {
            validateField(field);
            validateForm();
        }
    });

    field.addEventListener('blur', () => {
        if (field.id) {
            validateField(field);
            validateForm();
        }
    });
});

// Form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) {
        // Collect form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        data.phone = document.getElementById('phonePrefix').value +
        document.getElementById('phone').value;
        data.name = document.getElementById('name').value;
        data.address1 = document.getElementById('address1').value;
        data.address2 = document.getElementById('address2').value;
        data.city = document.getElementById('city').value;
        data.zipcode = document.getElementById('zipcode').value;
        data.email = document.getElementById('email').value;
        data.state = document.getElementById('state').value;
        console.log('Form data:', data);
        const encodedData = Object.fromEntries(
            Object.entries(data).map(([key, value]) => [key, encodeURIComponent(value)])
        );

        console.log('URL encoded data:', encodedData);
        window.location.href = \`https://wa.me/${config.whatsappLinkForOrderForm}?text=%E4%BD%A0%E5%A5%BD%20%E6%88%91%E5%B0%8Dxx%E9%A0%81%E9%9D%A2%E6%8F%90%E4%BE%9B%E7%9A%84%E7%89%B9%E5%88%A5%E5%84%AA%E6%83%A0%E6%9C%89%E8%88%88%E8%B6%A3%0A%E5%B8%8C%E6%9C%9B%E6%8F%90%E4%BE%9B%E8%B3%87%E6%96%99%E4%BD%9C%E4%B8%8B%E8%A8%82%EF%BC%9A%0A%E5%A7%93%E5%90%8D%EF%BC%9A\${data.name}%0A%E5%9C%B0%E5%9D%80%EF%BC%88%E7%AC%AC%E4%B8%80%E8%A1%8C%EF%BC%89%EF%BC%9A\${data.address1}%0A%E5%9C%B0%E5%9D%80%28%E7%AC%AC%E4%BA%8C%E8%A1%8C%29%EF%BC%9A\${data.address2}%0A%E5%9F%8E%E5%B8%82%EF%BC%9A\${data.city}%0A%E7%9C%81%E5%88%86%2F%E5%B7%9E%EF%BC%9A\${data.state}%0A%E9%83%B5%E9%81%9E%E5%8D%80%E8%99%9F%EF%BC%9A\${data.zipcode}%0A%E5%9C%8B%E5%AE%B6%2F%E5%9C%B0%E5%8D%80%EF%BC%9A\${data.email}%0A%E8%81%AF%E7%B5%A1%E9%9B%BB%E8%A9%B1%EF%BC%9A\${data.phone}%0AEmail%EF%BC%9A\${data.email}\`;
    }
});

// Initial form validation
validateForm();
// xt-Wallet
${config.useXtWallet ? `
let walletListener = null;
const Networks = {
  MainNet: 'Signum',
  TestNet: 'Signum-TESTNET'
}

window.wallet = new sig$wallets.GenericExtensionWallet()
window.walletConnection = null
window.signumLedger = null
window.network = Networks.MainNet

function getReedSolomonAddress(publicKey) {
  return sig$.Address.fromPublicKey(publicKey, window.network === Networks.MainNet ? 'S' : 'TS').getReedSolomonAddress()
}

function createLedgerClient(nodeHost){
  window.signumLedger = sig$.LedgerClientFactory.createClient({
    nodeHost
  })
}


function dispatchWalletEvent(action, data){
  window.dispatchEvent(new CustomEvent('wallet-event', {detail: {
    action,
      payload: {...data}
    }}))
}

function onNetworkChange(args) {
  dispatchWalletEvent('networkChanged', {...args})
  if (args.networkName === window.network) {
    if (!window.walletConnection) {
      window.dispatchEvent(new Event("wallet-connect"));
    } else{
      createLedgerClient(args.nodeHost)
    }
  } else {
    Swal.fire({
      icon: "warning",
      title: "xt-Wallet 錢包變更到另一個節點",
      confirmButtonColor: "#b49b6a",
        cancelButtonColor: "#b6babe",
    });
    alert("Wallet changed to another network")
    window.dispatchEvent(new Event("wallet-disconnect"));
  }
}

function onAccountChange(args) {
  
  dispatchWalletEvent('accountChanged', {
    ...args,
    address: getReedSolomonAddress(args.accountPublicKey)
  })
}

function onPermissionOrAccountRemoval() {
  dispatchWalletEvent('permissionRemoved', {...args})
  Swal.fire({
    icon: "warning",
    title: "xt-wallet \`移除此 DApps 權限",
    confirmButtonColor: "#b49b6a",
        cancelButtonColor: "#b6babe",
  });
  document.getElementById('xt-wallet').innerHTML = '<strong>連接區塊鏈會員系統</strong>'
  // alert("Wallet removed this DApps permission")
  handleDisconnectWallet();
}



async function handleConnectWallet(appName) {
  if (window.walletConnection) return;
  document.getElementById('xt-wallet').innerHTML = \`<div id="P1_hvQIFrP" class="Container-P1_hvQIFrP"><div id="-i_o19aYCj" class="arial Text--i_o19aYCj"><span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
  <span role="status">Loading...</span></div></div>\`;
  try {
    const connection = await window.wallet.connect({
      appName,
      networkName: Networks.MainNet
    })

    if (walletListener) {
      walletListener.unlisten();
    }

    walletListener = connection.listen({
      onNetworkChanged: onNetworkChange,
      onAccountChanged: onAccountChange,
      onPermissionRemoved: onPermissionOrAccountRemoval,
      onAccountRemoved: onPermissionOrAccountRemoval,
    });

   
    window.walletConnection = connection;
    createLedgerClient(connection.currentNodeHost)
    dispatchWalletEvent('connected', {
      accountId: connection.accountId,
      publicKey: connection.publicKey,
      address: getReedSolomonAddress(connection.publicKey), // attention: address is not part of the connection!
      host: connection.currentNodeHost
    })


  } catch (e) {
    // alert(e.message)
  
    if (e.message === "Could not find a compatible wallet"){
      Swal.fire({
        title: "找不到xt-wallet",
        text: "您可以在 chrome web store 上安裝 XT-wallet",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#b49b6a",
        cancelButtonColor: "#b6babe",
        confirmButtonText: "進入 chrome web store"
      }).then((result) => {
        if (result.isConfirmed) {
          window.open("https://chromewebstore.google.com/detail/signum-xt-wallet/kdgponmicjmjiejhifbjgembdcaclcib", '_blank').focus();
        }
      });
      document.getElementById('xt-wallet').innerHTML = '<strong>連接區塊鏈會員系統</strong>'
    }else{
      if (e.message === \`The selected network/node of the wallet does not match the applications required network. Please select another network/node in your wallet\`){
        console.log("same");
        Swal.fire({
          icon: "warning",
          text: "xt-wallet 所選的網路/節點與應用程式所需的網路不匹配。請在 xt-wallet 中選擇其他網路/節點",
          confirmButtonColor: "#b49b6a",
          cancelButtonColor: "#b6babe",
        });
      }else{
      Swal.fire({
        icon: "warning",
        text: \`錯誤發生： \${e.message}\`,
        confirmButtonColor: "#b49b6a",
        cancelButtonColor: "#b6babe",
      });
    }
      document.getElementById('xt-wallet').innerHTML = '<strong>連接區塊鏈會員系統</strong>'
    }
  
    localStorage.removeItem("walletConnected");
  }
}

async function handleDisconnectWallet() {
  window.wallet = new sig$wallets.GenericExtensionWallet();
  window.walletConnection = null;
  window.signumLedger = null;
  dispatchWalletEvent('disconnected')
  walletListener.unlisten();
}

async function initWallet(appName) {
  window.addEventListener("wallet-connect", handleConnectWallet.bind(null, appName));
  window.addEventListener("wallet-disconnect", handleDisconnectWallet);
  
 
}

initWallet("${config.storeName}")
//Part 02
const pathname = window.location.pathname;
console.log("pathname: ", pathname);
async function checkNFTsOwner ()  {
   
  let vipNftsCreatorId = "12494127488416235118" //VIP data wallet
  let dataViews = [];
  let nftsOwnersLists = [];
  if (window.signumLedger){
    let nftStorages = await window.signumLedger.contract.getContractsByAccount({
      accountId: vipNftsCreatorId ,
      machineCodeHash: "15155055045342098571",
    });
   
    nftStorages = nftStorages.ats
    const promises = nftStorages.map((nftStorage) => window.signumLedger.contract.getContract(nftStorage.at))
    const results = await Promise.all(promises);

    dataViews = results.map(result => new sig$contracts.ContractDataView(result) );
    nftsOwnersLists = dataViews.map(dataView => dataView.getVariableAsDecimal(0));
   
    if (nftsOwnersLists.includes(window.walletConnection.accountId)){

     
      return true;
    }
    return false
   
  }

} 
function generateAvatarColor( ){
  const avatars = document.querySelectorAll(".avatar");

  avatars.forEach((a) => {
  const charCodeRed = a.dataset.label.charCodeAt(0);
  const charCodeGreen = a.dataset.label.charCodeAt(1) || charCodeRed;

  const red = Math.pow(charCodeRed, 7) % 200;
  const green = Math.pow(charCodeGreen, 7) % 200;
  const blue = (red + green) % 200;

  a.style.background = \`rgb(\${red}, \${green}, \${blue})\`;
  });


}
//xt-wallet
const connectButton = document.getElementById("xt-wallet");
connectButton.addEventListener('click', () => {
  window.dispatchEvent(new Event(!window.walletConnection ? "wallet-connect" : "wallet-disconnect"));
})

window.addEventListener('wallet-event',async (event) => {
    const {payload, action} = event.detail
  if (action === 'connected') {
    const haveNftpass = await checkNFTsOwner() ;
    const userComponents = document.getElementById('profile-dropdown')
    console.log("haveNftpass: ", haveNftpass);
    if (haveNftpass || window.walletConnection.accountId === "12494127488416235118" || window.walletConnection.accountId === "14679997900395732198" || window.walletConnection.accountId === "9633927829229740965"){
      document.getElementById('xt-wallet').innerHTML = \`<span class="material-symbols-outlined margin-right-5px">workspace_premium</span>\${payload.address}\`;                                                                                                                                                                                                                                                    
      userComponents.innerHTML =  \`<div class="profile-dropdown0209" id="profile-dropdown">
      <div class="profile-dropdown-btn0209" id="profile-dropdown-btn">
          <!-- <div class="profile-img"> -->
            <div class="avatar" data-label="\${payload.address[2]+payload.address[3]}">
      
            <!-- </div> -->
            <!-- <i class="fa-solid fa-circle"></i> -->
          </div>
      
          <span
            >
            <i class="fa-solid fa-angle-down"></i>
          </span>
                                     
            </a>
       </div>
      
        <ul class="profile-dropdown-list0209">
          <li class="profile-dropdown-list-item0209">
            <span class="material-symbols-outlined margin-right-5px">workspace_premium</span> \${payload.address} 
          </li>
          <li class="profile-dropdown-list-item0209">
            <a href="\${"https://explorer.signum.network/address/"+window.walletConnection.accountId}" >
              <i class="fa-solid fa-link"></i>
              區塊鏈用戶資訊                           
            </a>
          </li>
          
      
          
      
          <li class="profile-dropdown-list-item0209">
            <a id="logout-button">
              <i class="fa-solid fa-arrow-right-from-bracket"></i>
              登出
            </a>
          </li>
        </ul>
    </div>\`;
                
      }else {
      document.getElementById('xt-wallet').innerHTML = \`\${payload.address}\`; 
      userComponents.innerHTML =  \`<div class="profile-dropdown0209" id="profile-dropdown">

                        <div class="profile-dropdown-btn0209" id="profile-dropdown-btn">
                            <!-- <div class="profile-img"> -->
                              <div class="avatar" data-label="\${payload.address[2]+payload.address[3]}">
                        
                              <!-- </div> -->
                              <!-- <i class="fa-solid fa-circle"></i> -->
                            </div>
                        
                            <span
                              >
                              <i class="fa-solid fa-angle-down"></i>
                            </span>                      
                              </a>
                         </div>
                        
                          <ul class="profile-dropdown-list0209">
                        
                            <li class="profile-dropdown-list-item0209">
                              \${payload.address} 
                            </li>
                            <li class="profile-dropdown-list-item0209">
                              <a href="\${"https://explorer.signum.network/address/"+window.walletConnection.accountId}" >
                                <i class="fa-solid fa-link"></i>
                                區塊鏈用戶資訊                           
                              </a>
                            </li>
                            
                        
                            
                        
                            <li class="profile-dropdown-list-item0209">
                              <a id="logout-button">
                                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                                登出
                              </a>
                            </li>
                          </ul>
                      </div>\`;
      }
    localStorage.setItem("walletConnected", true)
  //set the user icon color
  generateAvatarColor();
  //select the profile  dropdown components and add the dropdown and logout functions
  let profileDropdownList = document.querySelector(".profile-dropdown-list0209");
  let btn = document.querySelector(".profile-dropdown-btn0209");
  let logoutBtn = document.querySelector("#logout-button");
  let classList = profileDropdownList.classList;
  btn.addEventListener("click", function (e){
    classList.toggle("active");
  })
  window.addEventListener("click", function (e) {
  if (!btn.contains(e.target)) classList.remove("active");
  });
  logoutBtn.addEventListener("click", function () {
    window.dispatchEvent(new Event("wallet-disconnect"));
    });
  connectButton.style.display = "none";
  userComponents.style.display = "inline";
  //dispatch disconnected event 
  } else if (action === 'disconnected') {
    document.getElementById('xt-wallet').innerHTML = \`<div id="P1_hvQIFrP" class="Container-P1_hvQIFrP">
                                        <div id="-i_o19aYCj" class="arial Text--i_o19aYCj">連接區塊鏈會員系統</div>
                                    </div>\`
   
    localStorage.removeItem("walletConnected")
    // for(let x = 0; x < membershipLink.length; x++ ){
    //   membershipLink[x].innerHTML = "";
    //   membershipLink[x].style.display = "none";
    // }
    const userComponents = document.getElementById('profile-dropdown')
    userComponents.innerHTML = "";
    connectButton.style.display = "inline";
    userComponents.style.display = "none";
   //Account changed 
  } else if (action === 'accountChanged') {
    document.getElementById('xt-wallet').innerText = "Account Changed"
    const userComponents = document.getElementById('profile-dropdown')
    userComponents.innerHTML = "";
    connectButton.style.display = "inline";
    userComponents.style.display = "none";
    
  }
  else if (action === 'permissionRemoved') {
    document.getElementById('xt-wallet').innerText = "Permission Removed"
    const userComponents = document.getElementById('profile-dropdown')
    userComponents.innerHTML = "";
    connectButton.style.display = "inline";
    userComponents.style.display = "none";
  }

})
if(localStorage.walletConnected){
    setTimeout(function(){window.dispatchEvent(new Event("wallet-connect"))}, 500);

}else {
  
    if(pathname === "/memberstore.html" || pathname.length > 20){
      const alertMessage = document.querySelector(".cid-u0QMahNPVm")
    
      alertMessage.style.display = "block";
    }
}
` : ``}
//for hours dropdown 
        const hoursItem = document.querySelector(".open-hours-info")
        const hoursDropdown = hoursItem.querySelector(".dropdown")

        hoursItem.addEventListener("click", function () {
            hoursDropdown.textContent = hoursDropdown.textContent === "expand_more" ? "expand_less" : "expand_more"
            // Here you would show/hide the full hours list
            if (hoursDropdown.textContent === "expand_less") {
                const fullHoursList = document.querySelector(".full-hours-list")
                fullHoursList.classList.toggle("hidden")
                // alert("Opening full hours list  ")
            }
            if (hoursDropdown.textContent === "expand_more") {
                const fullHoursList = document.querySelector(".full-hours-list")
                fullHoursList.classList.toggle("hidden")
                // alert("Opening full hours list  ")
            }
        })
//Open hours 
      const openHours = {
            Monday: {
            open: { hour: ${(config.storeHours.monday.isOpen ? (parseInt((config.storeHours.monday.openTime.split(":"))[0])) : "99")}, minute: ${(config.storeHours.monday.isOpen ? (parseInt((config.storeHours.monday.openTime.split(":"))[1])) : "99")} },
            close: { hour: ${(config.storeHours.monday.isOpen ? (parseInt((config.storeHours.monday.closeTime.split(":"))[0])) : "99")}, minute: ${(config.storeHours.monday.isOpen ? (parseInt((config.storeHours.monday.closeTime.split(":"))[1])) : "99")} },
            },
            Tuesday: {
                open: { hour: ${(config.storeHours.tuesday.isOpen ? (parseInt((config.storeHours.tuesday.openTime.split(":"))[0])) : "99")}, minute: ${(config.storeHours.tuesday.isOpen ? (parseInt((config.storeHours.tuesday.openTime.split(":"))[1])) : "99")} },
                close: { hour: ${(config.storeHours.tuesday.isOpen ? (parseInt((config.storeHours.tuesday.closeTime.split(":"))[0])) : "99")}, minute: ${(config.storeHours.tuesday.isOpen ? (parseInt((config.storeHours.tuesday.closeTime.split(":"))[1])) : "99")} },
            },
            Wednesday: {
                    open: { hour: ${(config.storeHours.wednesday.isOpen ? (parseInt((config.storeHours.wednesday.openTime.split(":"))[0])) : "99")}, minute: ${(config.storeHours.wednesday.isOpen ? (parseInt((config.storeHours.wednesday.openTime.split(":"))[1])) : "99")} },
                close: { hour: ${(config.storeHours.wednesday.isOpen ? (parseInt((config.storeHours.wednesday.closeTime.split(":"))[0])) : "99")}, minute: ${(config.storeHours.wednesday.isOpen ? (parseInt((config.storeHours.wednesday.closeTime.split(":"))[1])) : "99")} },
            },
            Thursday: {
                         open: { hour: ${(config.storeHours.thursday.isOpen ? (parseInt((config.storeHours.thursday.openTime.split(":"))[0])) : "99")}, minute: ${(config.storeHours.thursday.isOpen ? (parseInt((config.storeHours.thursday.openTime.split(":"))[1])) : "99")} },
                close: { hour: ${(config.storeHours.thursday.isOpen ? (parseInt((config.storeHours.thursday.closeTime.split(":"))[0])) : "99")}, minute: ${(config.storeHours.thursday.isOpen ? (parseInt((config.storeHours.thursday.closeTime.split(":"))[1])) : "99")} },
            },
            Friday: {
                        open: { hour: ${(config.storeHours.friday.isOpen ? (parseInt((config.storeHours.friday.openTime.split(":"))[0])) : "99")}, minute: ${(config.storeHours.friday.isOpen ? (parseInt((config.storeHours.friday.openTime.split(":"))[1])) : "99")} },
                close: { hour: ${(config.storeHours.friday.isOpen ? (parseInt((config.storeHours.friday.closeTime.split(":"))[0])) : "99")}, minute: ${(config.storeHours.friday.isOpen ? (parseInt((config.storeHours.friday.closeTime.split(":"))[1])) : "99")} },
            },
            Saturday: {
                open: { hour: ${(config.storeHours.saturday.isOpen ? (parseInt((config.storeHours.saturday.openTime.split(":"))[0])) : "99")}, minute: ${(config.storeHours.saturday.isOpen ? (parseInt((config.storeHours.saturday.openTime.split(":"))[1])) : "99")} },
                close: { hour: ${(config.storeHours.saturday.isOpen ? (parseInt((config.storeHours.saturday.closeTime.split(":"))[0])) : "99")}, minute: ${(config.storeHours.saturday.isOpen ? (parseInt((config.storeHours.saturday.closeTime.split(":"))[1])) : "99")} },
            },
            Sunday: {
                       open: { hour: ${(config.storeHours.sunday.isOpen ? (parseInt((config.storeHours.sunday.openTime.split(":"))[0])) : "99")}, minute: ${(config.storeHours.sunday.isOpen ? (parseInt((config.storeHours.sunday.openTime.split(":"))[1])) : "99")} },
                close: { hour: ${(config.storeHours.sunday.isOpen ? (parseInt((config.storeHours.sunday.closeTime.split(":"))[0])) : "99")}, minute: ${(config.storeHours.sunday.isOpen ? (parseInt((config.storeHours.sunday.closeTime.split(":"))[1])) : "99")} },
            }
        }
              function compareOpenHour(date, day, openHours = openHours) {
            const currentHour = date.getHours();
            const currentMinute = date.getMinutes();

            if (currentHour > openHours[day].close.hour ||
                (currentHour === openHours[day].close.hour && currentMinute >= openHours[day].close.minute)) {
                return 'close';
            }
            if (currentHour < openHours[day].open.hour ||
                (currentHour === openHours[day].open.hour && currentMinute < openHours[day].open.minute)) {
                return 'before open';
            }
            return 'open';
        }
        function checkDateTime() {
            const now = new Date();

            // Get local time information
            const localDay = now.toLocaleDateString('en-US', { weekday: 'long' });
            const localTime = now.toLocaleTimeString('en-US');

            // Options for Hong Kong time
            const hkOptions = {
                timeZone: 'Asia/Hong_Kong',
                hour12: false,
                weekday: 'long',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            };

            // Get Hong Kong date and time
            const hkDay = now.toLocaleDateString('en-US', {
                timeZone: 'Asia/Hong_Kong',
                weekday: 'long'
            });

            const hkTime = now.toLocaleTimeString('en-US', hkOptions);

            const openStatus = compareOpenHour(now, hkDay, openHours);
             
            return {
                day : hkDay,
                openStatus: openStatus};
        }
        const openStatus = checkDateTime();
        console.log(openStatus);
        if (openStatus.openStatus === 'open') {
            document.querySelector('.open-status').textContent = '營業中';
            document.querySelector('.open-status').classList.add('open');
            const extraZero =\`\${openHours[openStatus.day].close.minute}\`.length > 1 ? "" : "0";
              const extraZero02 =\`\${openHours[openStatus.day].close.hour}\`.length > 1 ? "" : "0";
            document.querySelector('.open-status-quote').innerHTML = \`\&nbsp;結束營業時間：\${extraZero02}\${openHours[openStatus.day].close.hour}:\${extraZero}\${openHours[openStatus.day].close.minute }\`;
        } else if (openStatus.openStatus === 'close') {
            document.querySelector('.open-status').textContent = '已結束營業';
            document.querySelector('.open-status').classList.add('close');
              const extraZero =\`\${openHours[openStatus.day].close.minute}\`.length > 1 ? "" : "0";
                const extraZero02 =\`\${openHours[openStatus.day].close.hour}\`.length > 1 ? "" : "0";
            document.querySelector('.open-status-quote').innerHTML = \`&nbsp;結束營業時間：\${extraZero02}\${openHours[openStatus.day].close.hour}:\${extraZero}\${openHours[openStatus.day].close.minute}\`;
        } else {
            document.querySelector('.open-status').textContent = '未開始營業';
            document.querySelector('.open-status').classList.add('close');
              const extraZero =\`\${openHours[openStatus.day].open.minute}\`.length > 1 ? "" : "0";
                const extraZero02 =\`\${openHours[openStatus.day].close.hour}\`.length > 1 ? "" : "0";
            if (openHours[openStatus.day].open.hour === 99) {
                document.querySelector('.open-status-quote').innerHTML = \`&nbsp;今日休息\`;
            } else {  
            document.querySelector('.open-status-quote').innerHTML = \`&nbsp;開業時間：\${extraZero02}\${openHours[openStatus.day].open.hour}:\${extraZero}\${openHours[openStatus.day].open.minute}\`;
                             }
        }
    //for time option of booking form 
        function generateTimeOptions() {
    const select = document.getElementById('timeSelect');
    const startHour = "${config.bookingFormConfig.minTime}";
    const endHour = "${config.bookingFormConfig.maxTime}" ; 
    console.log(startHour, endHour)
    const times = [];
    const [minHour, minMinute] = startHour.split(":").map(Number)
    const [maxHour, maxMinute] = endHour.split(":").map(Number)

    const minMinutes = minHour * 60 + minMinute
    const maxMinutes = maxHour * 60 + maxMinute
    for (let minutes = minMinutes; minutes <= maxMinutes; minutes += 15) {
        const hour = Math.floor(minutes / 60)
        const minute = minutes % 60
        times.push(\`\${hour.toString().padStart(2, "0")}:\${minute.toString().padStart(2, "0")}\`)
      }
      for (let time of times) {
          const option = document.createElement('option');
          option.value = time;
          option.text = time;
          select.appendChild(option
          );
      }
}

generateTimeOptions();

//for navbar button
${config.useXtWallet ? "" : `document.getElementById('xt-wallet').addEventListener('click', function() {
  window.open("${config.contactLinkForNavbarButton}", '_blank').focus();
  })`
      }

document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const form = this;
    const branch = form.branch.value;
    const people = form.people.value;
    const name = form.name.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const time = form.time.value;

    // Validation
    if (!branch) {
        alert('請選擇分店');
        return;
    }
    
    if (!name.trim()) {
        alert('請輸入名稱');
        return;
    }
    
    if (!phone.match(/^\\d{8,}$/)) {
        alert('請輸入有效電話號碼');
        return;
    }
    
    if (!date) {
        alert('請選擇日期');
        return;
    }
    
    if (!time) {
        alert('請選擇時間');
        return;
    }

    // Convert branch number to name
    const branchNames = {
        '1': '銅鑼灣店',
        '2': '尖沙咀店'
    };
    
    // Prepare message
    const message = \`預約資料:
分店: \${branch}
人數: \${people}人
名稱: \${name}
電話: \${phone}
日期: \${date}
時間: \${time}\`;
    

    
    // Encode message and create WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = \`https://wa.me/${config.whatsappLinkForBookingFunction}?text=\${encodedMessage}\`;
    
    // Open WhatsApp link
    window.open(whatsappUrl, '_blank');
}

);
`;
  };

  const downloadProject = async () => {
    const zip = new JSZip();

    // Create directory structure
    const css = zip.folder("css");
    const js = zip.folder("js");
    const images = zip.folder("images");

    // Add files to the zip
    zip.file("index.html", generateHTML());
    css.file("styles.css", generateCSS());
    css.file("bootstrap-grid.min.css", generateBootstrap());
    css.file("style_2.css", generateStyle02());
    css.file("style_5.css", generateStyle05());
    js.file("main.js", generateJS());
    js.file("wowslider.js", jsTemplate_wowslider());
    js.file("script_1.js", jsTemplate_script_1());
    js.file("script_3.js", jsTemplate_script_3());
    js.file("script.js", jsTemplate_script());

    // Add the image file
    if (config.topCoverFile) {
      images.file("top-cover.jpg", config.topCoverFile);
    } else {
      const topCoverImage = await fetch(config.topCoverPreview);
      if (topCoverImage.ok) {
        const blob = await topCoverImage.blob();
        images.file("top-cover.jpg", blob);
      }
    }
    if (config.imageFile) {
      images.file("store.jpg", config.imageFile);
    } else {
      const storeImage = await fetch(config.imagePreview);
      if (storeImage.ok) {
        const blob = await storeImage.blob();
        images.file("store.jpg", blob);
      }
    }
    if (config.specialOfferFile) {
      images.file("special-offer.png", config.specialOfferFile);
    } else {
      const specialOfferImage = await fetch(config.specialOfferPreview);
      if (specialOfferImage.ok) {
        const blob = await specialOfferImage.blob();
        images.file("special-offer.png", blob);
      }
    }
    if (config.logoFile) {
      images.file("logo.png", config.logoFile);
    } else {
      const logoImage = await fetch(config.logoPreview);
      if (logoImage.ok) {
        const blob = await logoImage.blob();
        images.file("logo.png", blob);
      }
    }
    if (config.storyImageFile) {
      images.file("storyImg.jpg", config.storyImageFile);
    } else {
      const storyImage = await fetch(config.storyImagePreview);
      if (storyImage.ok) {
        const blob = await storyImage.blob();
        images.file("storyImg.jpg", blob);
      }
    }
    // Add the social preview image
    if (config.socialPreview.imageFile) {
      images.file("social-preview.jpg", config.socialPreview.imageFile);
    } else {
      const socialPreviewImage = await fetch(config.socialPreview.imagePreview);
      if (socialPreviewImage.ok) {
        const blob = await socialPreviewImage.blob();
        images.file("social-preview.jpg", blob);
      }
    }

    config.galleryImages.forEach((image, index) => {
      images.file(`gallery-${index + 1}.jpg`, image.file);
    });
    // Add the button of caruosel
    const arrows = await fetch("images/arrows.png");
    const bullet = await fetch("images/bullet.png");
    const pause = await fetch("images/pause.png");
    const play = await fetch("images/play.png");
    images.file("arrows.png", arrows.blob());
    images.file("bullet.png", bullet.blob());
    images.file("pause.png", pause.blob());
    images.file("play.png", play.blob());
    // Add favicon
    if (config.faviconUrl) {
      const favicon = await fetch(config.faviconUrl);
      if (favicon.ok) {
        const blob = await favicon.blob();
        images.file("favicon.png", blob);
        images.file("favicon.ico", blob);
      }
    }
    // Add README
    zip.file("README.md", `# Landing Page Project

This landing page was generated using the Next.js Landing Page Generator.

## Structure
- \`index.html\` - The main HTML file
- \`css/styles.css\` - Styles for the landing page
- \`js/main.js\` - JavaScript animations and interactions
- \`images/\` - Contains the hero image and other assets

## Features
- Responsive design
- Smooth animations
- Mobile-friendly layout
- Optimized performance

## Getting Started
1. Upload all files to your web server
2. Open index.html in a web browser
3. That's it! Your landing page is ready to use

## Customization
Feel free to modify the CSS and JavaScript files to match your needs.`);

    // Generate the zip file
    const content = await zip.generateAsync({ type: "blob" });

    // Download the zip file
    const url = URL.createObjectURL(content);
    const link = document.createElement('a');
    link.href = url;
    link.download = "landing-page.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  const dayLabels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const peopleOptions = Array.from({ length: config.bookingFormConfig.maxPeople - config.bookingFormConfig.minPeople + 1 }, (_, i) => config.bookingFormConfig.minPeople + i)
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Configuration Panel */}
      <div className="w-full md:w-1/3 p-6 bg-gray-100 max-h-[100vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">Page Configuration</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Background Color</label>
            <input
              type="color"
              name="backgroundColor"
              value={config.backgroundColor}
              onChange={handleConfigChange}
              className="w-full h-10 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Panel Color</label>
            <input
              type="color"
              name="panelColor"
              value={config.panelColor}
              onChange={handleConfigChange}
              className="w-full h-10 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Story Section Color</label>
            <input
              type="color"
              name="storySectionColor"
              value={config.storySectionColor}
              onChange={handleConfigChange}
              className="w-full h-10 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Navbar Color</label>
            <input
              type="color"
              name="navbarColor"
              value={config.navbarColor}
              onChange={handleConfigChange}
              className="w-full h-10 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Button Color</label>
            <input
              type="color"
              name="buttonColor"
              value={config.buttonColor}
              onChange={handleConfigChange}
              className="w-full h-10 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Text Color</label>
            <input
              type="color"
              name="textColor"
              value={config.textColor}
              onChange={handleConfigChange}
              className="w-full h-10 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Title Color</label>
            <input
              type="color"
              name="titleColor"
              value={config.titleColor}
              onChange={handleConfigChange}
              className="w-full h-10 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Button Text Color</label>
            <input
              type="color"
              name="buttonTextColor"
              value={config.buttonTextColor}
              onChange={handleConfigChange}
              className="w-full h-10 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Panel Text Color</label>
            <input
              type="color"
              name="panelTextColor"
              value={config.panelTextColor}
              onChange={handleConfigChange}
              className="w-full h-10 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Story Section Text Color</label>
            <input
              type="color"
              name="storySectionTextColor"
              value={config.storySectionTextColor}
              onChange={handleConfigChange}
              className="w-full h-10 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Story Section Text Color</label>
            <input
              type="color"
              name="storySectionTitleColor"
              value={config.storySectionTitleColor}
              onChange={handleConfigChange}
              className="w-full h-10 rounded"
            />
          </div>
          <div className="space-y-4 pt-4 border-t border-gray-200">
            <h3 className="text-lg font-semibold">Navbar Section</h3>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Logo Image</label>
            <input
              type="file"
              ref={logoInputRef}
              onChange={handleLogoChange}
              accept="image/*"
              className="hidden"
            />
            <div className="flex flex-col items-center space-y-2 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 transition-colors">
              <img
                src={config.logoPreview}
                alt="Preview"
                className="w-32 h-32 object-contain rounded-lg mb-2"
              />
              <button
                onClick={triggerLogoUpload}
                className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Choose Image
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Logo Image Alt</label>
            <input
              type="text"
              name="logoALt"
              value={config.logoAlt}
              onChange={handleConfigChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="showNavbarButton"
                name="showNavbarButton"
                checked={config.showNavbarButton}
                onChange={handleConfigChange}
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label htmlFor="showNavbarButton" className="ml-2 block text-sm font-medium">
                Show Navbar Button
              </label>
            </div>
          </div>
          {config.showNavbarButton ? (<div className="space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="useXtWallet"
                name="useXtWallet"
                checked={config.useXtWallet}
                onChange={handleConfigChange}
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label htmlFor="showNavbarButton" className="ml-2 block text-sm font-medium">
                Use as Wallet Connection Button
              </label>
            </div>
          </div>) : ""}
          {config.showNavbarButton && !config.useXtWallet ? (
            <div>
              <label className="block text-sm font-medium mb-1">The contact link for navbar button</label>
              <input
                type="text"
                name="contactLinkForNavbarButton"
                value={config.contactLinkForNavbarButton}
                onChange={handleConfigChange}
                placeholder='85212345678'
                className="w-full p-2 border rounded"
              />
            </div>) : ""}

          <div className="space-y-4 pt-4 border-t border-gray-200">
            <h3 className="text-lg font-semibold">Heading Section</h3>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Top Cover Image</label>
            <input
              type="file"
              ref={topCoverInputRef}
              onChange={handleTopCoverChange}
              accept="image/*"
              className="hidden"
            />
            <div className="flex flex-col items-center space-y-2 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 transition-colors">
              <img
                src={config.topCoverPreview}
                alt="Preview"
                className="w-32 h-32 object-containrounded-lg mb-2"
              />
              <button
                onClick={triggerTopCoverUpload}
                className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Choose Image
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Top Cover Alt</label>
            <input
              type="text"
              name="topCoverALt"
              value={config.topCoverAlt}
              onChange={handleConfigChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Heading</label>
            <textarea
              name="subheading"
              value={config.subheading}
              onChange={handleConfigChange}
              className="w-full p-2 border rounded min-h-[100px] resize-y"
              placeholder="Enter your subheading text..."
            />
          </div>


          <div className="space-y-4 pt-4 border-t border-gray-200">
            <h3 className="text-lg font-semibold">Special Offer Section</h3>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">The type of special offer</label>
            <select name="specialOfferType" value={config.specialOfferType} onChange={handleConfigChangeForSelectElement} className="w-full p-2 border rounded">
              <option value="cashVouncher">Cash vouncher</option>
              <option value="freeGift">Free Gift</option>
              <option value="discount">discount</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Special Offer Image</label>
            <input
              type="file"
              ref={specialOfferInputRef}
              onChange={handleSpecialOfferChange}
              accept="image/*"
              className="hidden"
            />
            <div className="flex flex-col items-center space-y-2 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 transition-colors">
              <img
                src={config.specialOfferPreview}
                alt="Preview"
                className="w-32 h-32 object-contain rounded-lg mb-2"
              />
              <button
                onClick={triggerSpecialOfferUpload}
                className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Choose Image
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Special Offer Image Alt</label>
            <input
              type="text"
              name="specialOfferAlt"
              value={config.specialOfferAlt}
              onChange={handleConfigChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">End Date</label>
            <input
              type="date"
              name="endDate"
              value={config.endDate}
              onChange={handleConfigChange}
              min={new Date().toISOString().split('T')[0]}
              className="w-full p-2 border rounded"
            />
          </div>
       
          <div>
            <label className="block text-sm font-medium mb-1">Terms</label>
            <textarea
              name="term"
              value={config.term}
              onChange={handleConfigChange}
              className="w-full p-2 border rounded min-h-[100px] resize-y"
              placeholder="Enter your terms text..."
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="showOrderForm"
                name="showOrderForm"
                checked={config.showOrderForm}
                onChange={handleConfigChange}
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label htmlFor="showCountdown" className="ml-2 block text-sm font-medium">
                Show Order Form
              </label>
            </div>
          </div>

          {config.showOrderForm ? (<div><label className="block text-sm font-medium mb-1">The whatsapp number for order form</label>
            <input
              type="text"
              name="whatsappLinkForOrderForm"
              value={config.whatsappLinkForOrderForm}
              onChange={handleConfigChange}
              placeholder='852-12345678'
              className="w-full p-2 border rounded"
            />
          </div>) : ""}

          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="showSearch"
                name="showSearch"
                checked={config.showSearch}
                onChange={handleConfigChange}
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label htmlFor="showCountdown" className="ml-2 block text-sm font-medium">
                Show booking Function
              </label>
            </div>
          </div>
          {/* {config.showSearch && (
            <BookingFormConfigPanel
              config={config.bookingFormConfig}
              onChange={handleBookingFormConfigChange}
            />
          )} */}
          {config.showSearch && (
            <div>
              <label className="block text-sm font-medium mb-1">The whatsapp number for booking function</label>
              <input
                type="text"
                name="whatsappLinkForBookingFunction"
                value={config.whatsappLinkForBookingFunction}
                onChange={handleConfigChange}
                placeholder='85212345678'
                className="w-full p-2 border rounded"
              />
            </div>
          )}

          <div className="space-y-4 pt-4 border-t border-gray-200">
            <h3 className="text-lg font-semibold">Store Info Section</h3>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Store Image</label>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              accept="image/*"
              className="hidden"
            />
            <div className="flex flex-col items-center space-y-2 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 transition-colors">
              <img
                src={config.imagePreview}
                alt="Preview"
                className="w-32 h-32 object-contain rounded-lg mb-2"
              />
              <button
                onClick={triggerImageUpload}
                className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Choose Image
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Store Image Alt</label>
            <input
              type="text"
              name="imageAlt"
              value={config.imageAlt}
              onChange={handleConfigChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Store Name</label>
            <input
              type="text"
              name="storeName"
              value={config.storeName}
              onChange={handleConfigChange}
              className="w-full p-2 border rounded"
            />
          </div>
            {/* Address Configuration */}
            <div className="space-y-4 pt-4 ">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Store Locations</h3>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="showAddresses"
                  name="showAddresses"
                  checked={config.showAddresses}
                  onChange={(e) => setConfig(prev => ({
                    ...prev,
                    showAddresses: e.target.checked
                  }))}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <label htmlFor="showAddresses" className="ml-2 block text-sm font-medium">
                  Show Locations
                </label>
              </div>
            </div>

            {config.showAddresses && (
              <div className="space-y-4">
                <button
                  onClick={addAddress}
                  className="w-full px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                >
                  Add New Location
                </button>

                {config.addresses.map((address) => (
                  <div key={address.id} className="p-4 bg-white rounded-lg shadow space-y-3">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">Location Details</h4>
                      <button
                        onClick={() => removeAddress(address.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Location Name</label>
                      <input
                        type="text"
                        value={address.name}
                        onChange={(e) => updateAddress(address.id, 'name', e.target.value)}
                        className="w-full p-2 border rounded"
                        placeholder="Main Store"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Google Maps URL</label>
                      <input
                        type="url"
                        value={address.googleMapsUrl}
                        onChange={(e) => updateAddress(address.id, 'googleMapsUrl', e.target.value)}
                        className="w-full p-2 border rounded"
                        placeholder="https://goo.gl/maps/..."
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Store Hours Configuration */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="showStoreHours"
                name="showStoreHours"
                checked={config.storeHours.showStoreHours}
                onChange={(e) => setConfig(prev => ({
                  ...prev,
                  storeHours: {
                    ...prev.storeHours,
                    showStoreHours: e.target.checked
                  }
                }))}
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label htmlFor="showStoreHours" className="ml-2 block text-sm font-medium">
                Show Store Hours
              </label>
            </div>

            {config.storeHours.showStoreHours && (
              <div className="space-y-3 pl-2 border-l-2 border-purple-200">
                <h3 className="font-medium text-sm">Business Hours</h3>

                {days.map((day, index) => (
                  <div key={day} className="space-y-2 pb-2 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                      <label className="block text-sm font-medium">{dayLabels[index]}</label>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id={`${day}Open`}
                          checked={config.storeHours[day].isOpen}
                          onChange={(e) => handleDayHoursChange(day, 'isOpen', e.target.checked)}
                          className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                        />
                        <label htmlFor={`${day}Open`} className="ml-2 block text-xs">
                          Open
                        </label>
                      </div>
                    </div>

                    {config.storeHours[day].isOpen && (
                      <div className="flex space-x-2">
                        <div className="w-1/2">
                          <label className="block text-xs mb-1">Open</label>
                          <input
                            type="time"
                            value={config.storeHours[day].openTime}
                            onChange={(e) => handleDayHoursChange(day, 'openTime', e.target.value)}
                            className="w-full p-1 text-sm border rounded"
                          />
                        </div>
                        <div className="w-1/2">
                          <label className="block text-xs mb-1">Close</label>
                          <input
                            type="time"
                            value={config.storeHours[day].closeTime}
                            onChange={(e) => handleDayHoursChange(day, 'closeTime', e.target.value)}
                            className="w-full p-1 text-sm border rounded"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="showGallery"
                name="showGallery"
                checked={config.showGallery}
                onChange={handleConfigChange}
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label htmlFor="showGallery" className="ml-2 block text-sm font-medium">
                Show Carousel
              </label>
            </div>
            {config.showGallery && (
              <div className="space-y-4">
                <input
                  type="file"
                  ref={galleryInputRef}
                  onChange={handleGalleryImagesChange}
                  accept="image/*"
                  multiple
                  className="hidden"
                />
                <button
                  onClick={triggerGalleryUpload}
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Add Carousel Images <br />
                  Please input images in at 960x720 px size for best results.
                </button>
                {config.galleryImages.length > 0 && (
                  <div className="grid grid-cols-2 gap-2">
                    {config.galleryImages.map((image, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={image.preview}
                          alt={`Gallery preview ${index + 1}`}
                          className="w-full h-24 object-cover rounded"
                        />
                        <button
                          onClick={() => removeGalleryImage(index)}
                          className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
          {/* <div>
            <label className="block text-sm font-medium mb-1">Address</label>
            <textarea
              name="address"
              value={config.address}
              onChange={handleConfigChange}
              className="w-full p-2 border rounded min-h-[100px] resize-y"
              placeholder="Enter your subheading text..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Open hours</label>
            <textarea
              name="openHours"
              value={config.openHours}
              onChange={handleConfigChange}
              className="w-full p-2 border rounded min-h-[100px] resize-y"
              placeholder="Enter your subheading text..."
            />
          </div> */}
           <div className="space-y-4 pt-4 border-t border-gray-200">
            <h3 className="text-lg font-semibold">Story Section</h3>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">The Title of my story section</label>
            <input
              type="text"
              name="storySectionTitle"
              value={config.storySectionTitle}
              onChange={handleConfigChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Story Section Image</label>
            <input
              type="file"
              ref={storyImageInputRef}
              onChange={handleStoryImageChange}
              accept="image/*"
              className="hidden"
            />
            <div className="flex flex-col items-center space-y-2 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 transition-colors">
              <img
                src={config.storyImagePreview}
                alt="Preview"
                className="w-32 h-32 object-contain rounded-lg mb-2"
              />
              <button
                onClick={triggerStoryImageUpload}
                className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Choose Story Section Image
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Story Section Image Alt</label>
            <input
              type="text"
              name="storyImageAlt"
              value={config.storyImageAlt}
              onChange={handleConfigChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">The title of paragraph 01</label>
            <input
              type="text"
              name="storySectionParagarph01"
              value={config.storySectionParagarph01}
              onChange={handleConfigChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">The content of paragraph 01</label>
            <textarea
              name="storySectionContent01"
              value={config.storySectionContent01}
              onChange={handleConfigChange}
              className="w-full p-2 border rounded min-h-[100px] resize-y"
              placeholder="Enter your subheading text..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">The title of paragraph 02</label>
            <input
              type="text"
              name="storySectionParagarph02"
              value={config.storySectionParagarph02}
              onChange={handleConfigChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">The content of paragraph 02</label>
            <textarea
              name="storySectionContent02"
              value={config.storySectionContent02}
              onChange={handleConfigChange}
              className="w-full p-2 border rounded min-h-[100px] resize-y"
              placeholder="Enter your subheading text..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">The title of paragraph 03</label>
            <input
              type="text"
              name="storySectionParagarph03"
              value={config.storySectionParagarph03}
              onChange={handleConfigChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">The content of paragraph 03</label>
            <textarea
              name="storySectionContent03"
              value={config.storySectionContent03}
              onChange={handleConfigChange}
              className="w-full p-2 border rounded min-h-[100px] resize-y"
              placeholder="Enter your subheading text..."
            />
          </div>


          {/* <div>
            <label className="block text-sm font-medium mb-1">The end Date of special offer</label>
            <input
              type="text"
              name="heading"
              value={config.heading}
              onChange={handleConfigChange}
              className="w-full p-2 border rounded"
            />
          </div> */}
    
        
      <div className="space-y-4 pt-4 border-t border-gray-200">
            <h3 className="text-lg font-semibold">Footer's Link Address Section</h3>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">The link address of instagram</label>
            <input
              type="text"
              name="instagram"
              value={config.instagram}
              onChange={handleConfigChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">The link address of facebook</label>
            <input
              type="text"
              name="facebook"
              value={config.facebook}
              onChange={handleConfigChange}
              className="w-full p-2 border rounded"

            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">The link address of offical website</label>
            <input
              type="text"
              name="officalWebsite"
              value={config.officalWebsite}
              onChange={handleConfigChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">The phone number of store</label>
            <input
              type="text"
              name="phone"
              value={config.phone}
              onChange={handleConfigChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">The link address of threads</label>
            <input
              type="text"
              name="threads"
              value={config.threads}
              onChange={handleConfigChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">The link address of X</label>
            <input
              type="text"
              name="socialMediaX"
              value={config.socialMediaX}
              onChange={handleConfigChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">The link address of whatsapp</label>
            <input
              type="text"
              name="whatsapp"
              value={config.whatsapp}
              onChange={handleConfigChange}
              className="w-full p-2 border rounded"
            />
          </div>




          {/* <div>
            <label className="block text-sm font-medium mb-1">Page Title </label>
            <input
              type="text"
              name="title"
              value={config.title}
              onChange={handleConfigChange}
              className="w-full p-2 border rounded"
            />
          </div> */}
{/*         
          <div>
            <label className="block text-sm font-medium mb-1">Meta Description</label>
            <textarea
              name="description"
              value={config.description}
              onChange={handleConfigChange}
              className="w-full p-2 border rounded min-h-[100px] resize-y"
              placeholder="Enter your subheading text..."
            />
          </div> */}
         
          <div className="space-y-4 pt-4 border-t border-gray-200">
            <h3 className="text-lg font-semibold">SEO & Preview Configuration</h3>
            <div>
            <label className="block text-sm font-medium mb-1">Favicon Image</label>
            <input
              type="file"
              ref={faviconInputRef}
              onChange={handleFaviconChange}
              accept="image/*"
              className="hidden"
            />
            <div className="flex flex-col items-center space-y-2 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 transition-colors">
              <img
                src={config.faviconUrl}
                alt="Preview"
                className="w-32 h-32 object-contain rounded-lg mb-2"
              />
              <button
                onClick={triggerFaviconUpload}
                className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Choose Image
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Favicon Image Alt</label>
            <input
              type="text"
              name="faviconAlt"
              value={config.faviconAlt}
              onChange={handleConfigChange}
              className="w-full p-2 border rounded"
            />
          </div>
            <div>
              <label className="block text-sm font-medium mb-1">Preview Title</label>
              <input
                type="text"
                name="title"
                value={config.socialPreview.title}
                onChange={handleSocialPreviewChange}
                placeholder={config.heading}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Preview Description</label>
              <textarea
                name="description"
                value={config.socialPreview.description}
                onChange={handleSocialPreviewChange}
                placeholder={config.subheading}
                className="w-full p-2 border rounded min-h-[100px]"
              />
            </div>
          <div>
          <label className="block text-sm font-medium mb-1">Meta Keywords</label>
            <input
              type="text"
              name="keywords"
              value={config.keywords}
              onChange={handleConfigChange}
              className="w-full p-2 border rounded"
            />
          </div>
            <div>
              <label className="block text-sm font-medium mb-1">Preview Image</label>
              <input
                type="file"
                ref={socialImageInputRef}
                onChange={handleSocialImageChange}
                accept="image/*"
                className="hidden"
              />
              <div className="flex flex-col items-center space-y-2 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 transition-colors">
                <img
                  src={config.socialPreview.imagePreview}
                  alt="Social Preview"
                  className="w-full h-32 object-cover rounded-lg mb-2"
                />
                <button
                  onClick={triggerSocialImageUpload}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Choose Preview Image
                </button>
              </div>
            </div>
          </div>
         



          <div className="pt-6">
            <button
              onClick={landingPageUpload}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <span>Image deployment Complete Project</span>
            </button>
          </div>

          
          {/* Download Button */}
          <div className="pt-6">
            <button
              onClick={downloadProject}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <span>Download Complete Project</span>
            </button>
          </div>
        </div>
      </div>

      {/* Preview Panel */}
      <div className="w-full md:w-2/3">
        {/* <div 
          style={{ backgroundColor: config.backgroundColor }}
          className="min-h-screen flex flex-col items-center justify-center p-8"
        >
          <img
            src={config.imagePreview}
            alt="Landing page image"
            className="w-64 h-64 object-cover rounded-lg shadow-lg mb-8"
          />
          <h1 
            style={{ color: config.textColor }}
            className="text-4xl font-bold mb-4 text-center"
          >
            {config.heading}
          </h1>
          <p
            style={{ color: config.textColor }}
            className="text-xl text-center"
          >
            {config.subheading}
          </p>
        </div>
         */}
        <div className="border rounded-lg overflow-hidden">
          <iframe
            title="Landing Page Preview"
            className="w-full h-[100vh] "
            // srcDoc={`
            //   <html>
            //     <head>
            //       <style>
            //         body {
            //           font-family: Arial, sans-serif;
            //           margin: 0;
            //           padding: 0;
            //           display: flex;
            //           justify-content: center;
            //           align-items: center;
            //           height: 100vh;
            //           background-color: ${config.backgroundColor};
            //           color: #000000;
            //         }
            //         .container {
            //           text-align: center;
            //         }
            //         img {
            //           max-width: 100%;
            //           height: auto;
            //         }
            //       </style>
            //     </head>
            //     <body>
            //       <div class="container">
            //         <img src="${config.imageUrl}" alt="Landing page image">
            //         <h1>${config.textContent}</h1>
            //       </div>
            //     </body>
            //   </html>
            // `}
            srcDoc={`<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="preload" as="image"
        href="https://kolabstorageasia.blob.core.windows.net/store-img/_store/upload/fufuland/home-1732683483054-Logo%20(no%20bg).png">
    <link rel="preload" as="image"
        href="https://kolabstorageasia.blob.core.windows.net/store-img/_store/upload/fufuland/home-1732631488305-IMG_7467%202.PNG">
    <link rel="preload" as="image"
        href="https://kolabstorageasia.blob.core.windows.net/store-img/_store/upload/fufuland/home-1732632799359-IMG_7471.PNG">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
         <script src="https://cdn.tailwindcss.com"></script>
    <title>fufuland - 線上商店 powered by KOLab</title>
    <meta name="description" content="fufuland - 線上商店 powered by KOLab">
    <link rel="icon" href="images/favicon.ico" type="image/x-icon" sizes="16x16">
    <meta name="next-size-adjust">
<!--fontawesome-->
<link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
    />
    <style>
    *,:after,:before{box-sizing:border-box;border:0 solid #e5e7eb}:after,:before{--tw-content:""}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.visible{visibility:visible}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.m-auto{margin:auto}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.table{display:table}.grid{display:grid}.hidden{display:none}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.resize{resize:both}.border{border-width:1px}.italic{font-style:italic}.underline{text-decoration-line:underline}.line-through{text-decoration-line:line-through}.outline{outline-style:solid}.blur{--tw-blur:blur(8px)}.blur,.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.anticon{&.anticon-delete{color:#aea59b!important}}.white{&.anticon{&.anticon-delete{color:#fff!important}}.ant-select-item{color:#fff!important}}.brownBackground{background-color:#372e30!important;border:none!important;color:#fff!important;.ant-select-selector{background-color:#372e30!important;border:none!important;color:#fff!important}.ant-select-selection-item{color:#fff!important;padding:0!important}.ant-select-arrow{display:none!important}&.ant-btn{background-color:#372e30!important;box-shadow:none!important}&.ant-btn,&.ant-btn:hover{border:none!important;color:#fff!important}&.ant-btn:hover{background-color:#4a3f41!important;box-shadow:2px 4px 4px rgba(0,0,0,.25)!important}input{color:#fff!important}}.noHighlight{.ant-select-item-option-selected{background-color:#372e30!important}}.noPadding{.ant-modal-content,.ant-select-selector{padding:0!important}}.hideDisabled{.ant-picker-time-panel-cell-disabled{display:none!important}}.transparentBg{background-color:transparent!important}.solidBtn{background-color:darkred!important;color:#fff!important;font-weight:600!important;outline:none!important;border-color:darkred!important;height:fit-content!important;&.grey{background-color:#bdbdbd;border-color:#bdbdbd;color:#000}&.green{background-color:#267f80;border-color:#267f80;color:#fff}&.blue{background-color:#5067df!important;border-color:#5067df!important;color:#fff!important}}.solidBtn:disabled{background-color:#e1e1e1!important;border-color:#e1e1e1!important;color:rgba(0,0,0,.25)!important}.solidBtn:not(:disabled):hover{background-color:#b62b2b!important;border-color:#b62b2b!important;color:#fff!important}.solidBtn.grey:not(:disabled):hover{background-color:#a8a8a8!important;border-color:#a8a8a8!important;color:#000!important}.solidBtn.green:not(:disabled):hover{background-color:#2d9fa1!important;border-color:#2d9fa1!important;color:#fff!important}.solidBtn.blue:not(:disabled):hover{background-color:#647bf3!important;border-color:#647bf3!important;color:#fff!important}.borderBtn{border:.15rem solid darkred!important;background-color:transparent!important;color:darkred!important;font-weight:600!important;height:fit-content!important;&.blue{border-color:#5067df!important;color:#5067df!important}&.grey{border-color:#bdbdbd!important;color:#bdbdbd!important}&.darkgrey{border-color:#767676!important;color:#767676!important}}.borderBtn:disabled{background-color:#e1e1e1!important;border-color:#e1e1e1!important;color:rgba(0,0,0,.25)!important}.borderBtn:not(:disabled):hover{border-color:#b62b2b!important;color:#b62b2b!important}.borderBtn.blue:not(:disabled):hover{border-color:#647bf3!important;color:#647bf3!important;background-color:#fff!important}.borderBtn.grey:not(:disabled):hover{border-color:#cfcfcf!important;color:#cfcfcf!important;background-color:#fff!important}.borderBtn.darkgrey:not(:disabled):hover{border-color:#999!important;color:#999!important;background-color:#fff!important}.overflow-visible{.slick-list{overflow:visible!important}}.bookingDatePicker{.ant-picker-input{input{font-size:16px!important;font-weight:600!important}}}.alignLeft{.ant-select-selection-item,.ant-select-selection-search{align-items:flex-start!important;display:flex!important}}
    </style>
    <style>
        /*for the section*/
        .Page-OmpSotIOMQ {
            gap: 0px;
            width: 100%;
            margin: 0px;
            display: flex;
            padding-left: 10px;
            padding-right: 10px;
            align-items: flex-start;
            border-color: black;
            border-style: none;
            border-width: 1px;
            border-radius: 0px;
            flex-direction: column;
            justify-content: center;
            position: relative;
            min-height: fit-content;
            height: 100%;
            background-color: ${config.backgroundColor};
            background-size: cover;
            background-position: center center;
        }

        /*for the  order form*/
        .form-container {
            background: white;
            padding: 40px;
            border-radius: 8px;
            width: 100%;
            max-width: 500px;
        }

        h1 {
            font-size: 18px;
            margin-bottom: 24px;
            color: #333;
        }

        .form-group {
            /* margin-bottom: 16px; */
            position: relative;
        }

        label {
            display: block;
            margin-bottom: 8px;
            color: #666;
            font-size: 14px;
        }

        input,
        select {
            width: 100%;
            padding: 8px 12px;
            border: none;
            border-bottom: 1px solid #ddd;
            font-size: 16px;
            outline: none;
            transition: all 0.3s;
        }

        /* Validation states */
        input.valid,
        select.valid {
            border-bottom-color: #4caf50;
        }

        input.invalid,
        select.invalid {
            border-bottom-color: #f44336;
        }

        .error-message {
            color: #f44336;
            font-size: 12px;
            margin-top: 4px;
            min-height: 16px;
            display: block;
        }

        .phone-input {
            display: flex;
            gap: 12px;
        }

        .phone-prefix {
            width: 120px;
        }

        .order-summary {
            margin-top: 32px;
            padding-top: 24px;
            border-top: 1px solid #eee;
        }

        .summary-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 12px;
            color: #666;
        }

        .total-row {
            font-weight: bold;
            color: #333;
            font-size: 18px;
            margin-top: 16px;
            padding-top: 16px;
            border-top: 1px solid #eee;
        }

        .checkout-btn {
            width: 100%;
            padding: 16px;
            background-color: #7895b7;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
            margin-top: 24px;
            transition: background-color 0.3s;
        }

        .checkout-btn:hover {
            background-color: #6785a7;
        }

        .checkout-btn:disabled {
            background-color: #cccccc;
            cursor: not-allowed;
        }

        .required::after {
            content: '*';
            color: #ff4d4f;
            margin-left: 4px;
        }

        /* for extra footer information  */
        .container-footer {
            max-width: 42rem;
            margin: 0 auto;
            padding: 1rem;
            width: 100%;
            text-align: center;
           background-color: ${config.backgroundColor}; 
        }

        .divider {
            border-top: 1px solid ${config.textColor};
            color: ${config.textColor};
            padding-top: 2rem;
            margin-bottom: 1rem;
        }

        .social-icons {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-top: 1rem;
        }

        .social-icon {
            width: 1.5rem;
            height: 1.5rem;
            color: ${config.textColor};
        }

        /* for search funtion  */
        .container-search {
            max-width: 500px;
            margin: 0 auto;
            padding: 20px;
            background-color: ${config.backgroundColor};
        }

        .form-control {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }

        .search-btn {
            width: 100%;
            background-color: ${config.buttonColor};
            color: ${config.buttonTextColor};
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }

        .form-group {
            margin-bottom: 15px;
        }

        /* .image-container {
            position: relative;
        } */


        .toggle-btn {
            margin-bottom: 20px;
            padding: 10px 20px;
            font-size: 16px;
            background-color: ${config.buttonColor};
            color: ${config.buttonTextColor};
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
            width: 100%
        }

    </style>


    <style>
        .root {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: auto;
            height: fit-content;
        }

        .root-container {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            width: 100%;
            max-width: 500px;
            height: fit-content;
            overflow: hidden;
        }

        .WebPage-ROOT {
            background-image: linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 1)), url();
            background-size: cover;
            background-position: center;
            /* Removed invalid property background-img-mask */
            height: 100%;
            padding: 0;
            background-color: #ffffff;
            width: 100%;
        }
    </style>
    <style>
        .Pagnation-5ukyccm-T4 {
            width: 100%;
            height: fit-content;
            current-page: 0;
            position: relative;
            min-height: fit-content;
        }

        .Page-u7ZlrU8_9e {
            gap: 0px;
            width: 100%;
            margin: 0px;
            display: flex;
            padding: 0px;
            margin-top: 0px;
            align-items: flex-start;
            margin-left: 0px;
            padding-top: 0px;
            border-color: black;
            border-style: none;
            border-width: 1px;
            margin-right: 0px;
            padding-left: 0px;
            border-radius: 0px;
            margin-bottom: 0px;
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: 0px;
            justify-content: center;
            position: relative;
            min-height: fit-content;
            height: 100%;
            background-image: linear-gradient(rgba(64, 64, 64, 0), rgba(64, 64, 64, 0)), url();
            background-size: cover;
            background-position: center;
        }

        /*navbar section*/
        .D8-JIf1V5m {
            position: fixed;
            top: 0;
            height: fit-content;
            width: 100%;
            max-width: 500px;
            z-index: 100;
        }

        .Container-ky52cFH6m7 {
            gap: 0px;
            top: 0px;
            left: 0px;
            width: 100%;
            height: fit-content;
            margin: 0px;
            display: flex;
            padding: 20px;
            position: relative;
            margin-top: 0px;
            transform: none;
            align-items: center;
            margin-left: 0px;
            padding-top: 20px;
            border-color: black;
            border-style: none;
            border-width: 1px;
            margin-right: 0px;
            padding-left: 20px;
            border-radius: 0px;
            margin-bottom: 0px;
            padding-right: 20px;
            flex-direction: row;
            padding-bottom: 20px;
            justify-content: space-between;
            min-height: 80px;
            max-height: 100%;
            background-color: ${config.navbarColor};
            background-size: cover;
            background-position: center;
        }

        /*logo section*/
        .logo-xpU7UGXY04 {
            width: 120px;
            height: 30px;
            margin: 0px;
            padding: 0px;
            margin-top: 0px;
            margin-left: 0px;
            padding-top: 0px;
            aspect-ratio: 4.481751824817518;
            border-color: black;
            border-style: none;
            border-width: 1px;
            margin-right: 0px;
            padding-left: 0px;
            border-radius: 0px;
            margin-bottom: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
        }

        /*navbar button section*/
        .Button-navbar {
            color: ${config.buttonTextColor};
            min-width: 142px;
            width: auto;
            height: 42px;
            margin: 0;
            padding: 5px;
            font-size: 16;
            font-style: normal;
            margin-top: 0;
            font-weight: normal;
            margin-left: 0;
            padding-top: 5px;
            border-color: #000000;
            border-style: none;
            border-width: 1px;
            margin-right: 0;
            padding-left: 5px;
            border-radius: 5px;
            margin-bottom: 0;
            padding-right: 5px;
            padding-bottom: 5px;
            text-decoration: none;
            background-color: ${config.buttonColor};
            display: flex;
            flex-direction: row;
            cursor: pointer;
            opacity: 1;
        }

          .Button-navbar-disabled{
            color: ${config.buttonTextColor};
            min-width: 142px;
            width: auto;
            height: 42px;
            margin: 0;
            padding: 5px;
            font-size: 16;
            font-style: normal;
            margin-top: 0;
            font-weight: normal;
            margin-left: 0;
            padding-top: 5px;
            border-color: #000000;
            border-style: none;
            border-width: 1px;
            margin-right: 0;
            padding-left: 5px;
            border-radius: 5px;
            margin-bottom: 0;
            padding-right: 5px;
            padding-bottom: 5px;
            text-decoration: none;
            background-color: ${config.buttonColor};
            display: flex;
            flex-direction: row;
            opacity: 1;
        }


        .Container-P1_hvQIFrP {
            gap: 0px;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            margin: 0px;
            display: flex;
            padding: 0;
            position: relative;
            margin-top: 0px;
            transform: none;
            align-items: flex-start;
            margin-left: 0px;
            padding-top: 5px;
            border-color: black;
            border-style: none;
            border-width: 1px;
            margin-right: 0px;
            padding-left: 10px;
            border-radius: 0px;
            margin-bottom: 0px;
            padding-right: 10px;
            flex-direction: row;
            padding-bottom: 5px;
            justify-content: center;
            min-height: fit-content;
            max-height: 100%;
            background-image: linear-gradient(rgba(64, 64, 64, 0), rgba(64, 64, 64, 0)), url();
            background-size: cover;
            background-position: center;
        }

        .Text--i_o19aYCj {
            color: ${config.buttonTextColor};
            width: auto;
            height: 25px;
            margin: 0;
            font-size: 16;
            margin-top: 0;
            text-align: center;
            font-family: Arial;
            font-weight: normal;
            margin-left: 0;
            margin-right: 0;
            margin-bottom: 0;
            display: flex;
            flex-direction: column;
            opacity: 1;
        }
    </style>


    <style>
        /*cover section*/
        .cover-section {
            position: relative;
            height: fit-content;
            width: 100%;
            visibility: hidden;
        }

        .Container-YeyccoTVCP-hidden {
            gap: 0px;
            top: 0px;
            left: 0px;
            width: 100%;
            height: fit-content;
            margin: 0px;
            display: flex;
            padding: 20px;
            position: relative;
            margin-top: 0px;
            transform: none;
            align-items: center;
            margin-left: 0px;
            padding-top: 20px;
            border-color: black;
            border-style: none;
            border-width: 1px;
            margin-right: 0px;
            padding-left: 20px;
            border-radius: 0px;
            margin-bottom: 0px;
            padding-right: 20px;
            flex-direction: row;
            padding-bottom: 20px;
            justify-content: space-between;
            min-height: fit-content;
            max-height: 100%;
            background-image: linear-gradient(rgb(255, 249, 232), rgb(255, 249, 232)), url();
            background-size: cover;
            background-position: center;
        }

        .Image-MdmBCjHatO {
            width: 100auto;
            height: 40px;
            margin: 0px;
            padding: 0px;
            margin-top: 0px;
            margin-left: 0px;
            padding-top: 0px;
            aspect-ratio: 2.627586206896552;
            border-color: black;
            border-style: none;
            border-width: 1px;
            margin-right: 0px;
            padding-left: 0px;
            border-radius: 0px;
            margin-bottom: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
        }

        .cover-section02 {
            gap: 0px;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 150px;
            margin: 0px;
            display: flex;
            padding: 20px;
            position: relative;
            margin-top: 0px;
            transform: none;
            align-items: flex-start;
            margin-left: 0px;
            padding-top: 20px;
            border-color: black;
            border-style: none;
            border-width: 1px;
            margin-right: 0px;
            padding-left: 20px;
            border-radius: 0px;
            margin-bottom: 0px;
            padding-right: 20px;
            flex-direction: column;
            padding-bottom: 20px;
            justify-content: center;
            min-height: fit-content;
            max-height: 100%;
            background-image: linear-gradient(rgba(50, 51, 54, 0.4), rgba(50, 51, 54, 0.4)), url(${config.topCoverPreview});
            background-size: cover;
            background-position: center;
        }

        .Text-uMsxkfrobv {
            color: #ffffff;
            margin: 0;
            font-size: 25px;
            margin-top: 0;
            text-align: left;
            font-family: 'Noto Sans TC';
            font-weight: bold;
            margin-left: 0;
            margin-right: 0;
            margin-bottom: 0;
            display: flex;
            flex-direction: column;
            opacity: 1;
        }

        .Br-uMsxkfrobv {
            --tw-border-spacing-x: 0;
            --tw-border-spacing-y: 0;
            --tw-translate-x: 0;
            --tw-translate-y: 0;
            --tw-rotate: 0;
            --tw-skew-x: 0;
            --tw-skew-y: 0;
            --tw-scale-x: 1;
            --tw-scale-y: 1;
            --tw-scroll-snap-strictness: proximity;
            --tw-ring-offset-width: 0px;
            --tw-ring-offset-color: #fff;
            --tw-ring-color: rgba(59, 130, 246, .5);
            --tw-ring-offset-shadow: 0 0 #0000;
            --tw-ring-shadow: 0 0 #0000;
            --tw-shadow: 0 0 #0000;
            --tw-shadow-colored: 0 0 #0000;
        }
    </style>

    <style>
        /*speciall-offer-section*/
        .special-offer-section-0DGdGjdJJU {
            gap: 0px;
            top: 0px;
            left: 0px;
            width: 100%;
            height: fit-content;
            margin: 0px;
            display: flex;
            padding: 5px;
            position: relative;
            margin-top: 0px;
            transform: none;
            align-items: center;
            margin-left: 0px;
            padding-top: 15px;
            border-color: black;
            border-style: none;
            border-width: 1px;
            margin-right: 0px;
            padding-left: 5px;
            border-radius: 0px;
            margin-bottom: 0px;
            padding-right: 5px;
            flex-direction: column;
            padding-bottom: 5px;
            justify-content: center;
            min-height: fit-content;
            max-height: 100%;
            background-color: ${config.backgroundColor};
            background-size: cover;
            background-position: center;
        }

        .Text-N3OF6zdDDw {
            color: ${config.titleColor};
            margin: 0;
            font-size: 20px;
            margin-top: 0;
            text-align: left;
            font-family: 'Noto Sans TC';
            margin-left: 0;
            margin-right: 0;
            margin-bottom: 0;
            display: flex;
            flex-direction: column;
            opacity: 1;
            align-items: center;
            min-width: 100%;
        }

        .count-down-timer-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding-bottom: 20px;
        }

        .timer-number {
            background-color: ${config.panelColor};
            color: ${config.panelTextColor};
            border-width: 1px;
            border-color: rgb(241, 203, 117);
            border-style: none;
            border-radius: 5px;
            font-size: 16px;
            font-weight: normal;
            font-style: normal;
            text-decoration: none;
            padding: 13px;
            margin: 10px;
        }

        .timer-unit {
            color: ${config.textColor};
            font-size: 16px;
            font-weight: normal;
            font-style: normal;
        }

        .Container-M2drNN9crj {
            gap: 0px;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 474px;
            margin: 0px;
            display: flex;
            padding: 20px;
            position: relative;
            margin-top: 0px;
            transform: none;
            align-items: flex-start;
            margin-left: 0px;
            padding-top: 0px;
            border-color: black;
            border-style: none;
            border-width: 1px;
            margin-right: 0px;
            padding-left: 20px;
            border-radius: 0px;
            margin-bottom: 0px;
            padding-right: 20px;
            flex-direction: column;
            padding-bottom: 0px;
            justify-content: center;
            min-height: fit-content;
            max-height: 100%;
            background-color: ${config.backgroundColor};
            background-size: cover;
            background-position: center
        }

        .iG4Iz-3tgL {
            position: relative;
            width: 100%;
            height: fit-content;
        }

        .Container-iG4Iz-3tgL {
            white-space: pre-line;
            width: 100%;
            height: 100%;
            min-height: fit-content;
        }

        .Container-fKPPwi-3LU {
            gap: 0px;
            top: 0px;
            left: 0px;
            width: 100%;
            height: fit-content;
            margin: 0px;
            display: flex;
            padding: 0px;
            position: relative;
            margin-top: 0px;
            transform: none;
            align-items: flex-start;
            margin-left: 0px;
            padding-top: 0px;
            border-color: black;
            border-style: none;
            border-width: 1px;
            margin-right: 0px;
            padding-left: 0px;
            border-radius: 0px;
            margin-bottom: 0px;
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: 0px;
            justify-content: center;
            min-height: fit-content;
            max-height: 100%;
            background-image: linear-gradient(rgba(64, 64, 64, 0), rgba(64, 64, 64, 0)), url();
            background-size: cover;
            background-position: center;
        }

        .Container-0aOTK66Bwf {
            gap: 0px;
            top: 0px;
            left: 0px;
            width: 100%;
            height: fit-content;
            margin: 0px;
            display: flex;
            padding: 0px;
            position: relative;
            margin-top: 0px;
            transform: none;
            align-items: center;
            margin-left: 0px;
            padding-top: 0px;
            border-color: black;
            border-style: none;
            border-width: 1px;
            margin-right: 0px;
            padding-left: 0px;
            border-radius: 0px;
            margin-bottom: 10px;
            padding-right: 0px;
            flex-direction: row;
            padding-bottom: 0px;
            justify-content: space-between;
            min-height: fit-content;
            max-height: 100%;
            background-image: linear-gradient(rgba(64, 64, 64, 0), rgba(64, 64, 64, 0)), url();
            background-size: cover;
            background-position: center;
        }

        .Container-BnkZsXBwiL {
            gap: 0px;
            top: 0px;
            left: 0px;
            width: 60%;
            height: fit-content;
            margin: 0px;
            display: flex;
            padding: 0px;
            position: relative;
            margin-top: 0px;
            transform: none;
            align-items: center;
            margin-left: 0px;
            padding-top: 0px;
            border-color: black;
            border-style: none;
            border-width: 1px;
            margin-right: 0px;
            padding-left: 0px;
            border-radius: 0px;
            margin-bottom: 0px;
            padding-right: 0px;
            flex-direction: row;
            padding-bottom: 0px;
            justify-content: start;
            min-height: fit-content;
            max-height: 100%;
            background-image: linear-gradient(rgba(64, 64, 64, 0), rgba(64, 64, 64, 0)), url();
            background-size: cover;
            background-position: center;
        }

        .Image-2h6Rp2N6dK {
            width: 100%;
            margin: 0px;
            padding: 0px;
            margin-top: 0px;
            margin-left: 0px;
            padding-top: 0px;
            aspect-ratio: 1.6160220994475138;
            border-color: black;
            border-style: none;
            border-width: 100%;
            margin-right: 0px;
            padding-left: 0px;
            border-radius: 0px;
            margin-bottom: 0px;
            padding-right: 0px;
            padding-bottom: 0px;

        }

        .Container-vjVGeFGLP5 {
            gap: 0px;
            top: 0px;
            left: 0px;
            width: 100%;
            height: fit-content;
            margin: 0px;
            display: flex;
            padding: 6px;
            position: relative;
            margin-top: 0px;
            transform: none;
            align-items: start;
            margin-left: 0px;
            padding-top: 6px;
            border-color: ${config.panelColor};
            border-style: none;
            border-width: 1px;
            margin-right: 0px;
            padding-left: 6px;
            border-radius: 10px;
            margin-bottom: 15px;
            padding-right: 6px;
            flex-direction: column;
            padding-bottom: 6px;
            justify-content: center;
            min-height: fit-content;
            max-height: 100%;
            background-color: ${config.panelColor};
            background-size: cover;
            background-position: center;
        }

        .Text-Y7fpaobUoy {
            color: ${config.panelTextColor};
            width: 305px;
            height: auto;
            margin: 0;
            font-size: 14px;
            margin-top: 0;
            text-align: left;
            font-family: Arial;
            margin-left: 10px;
            margin-right: 0;
            margin-bottom: 0;
            display: flex;
            flex-direction: column;
            opacity: 1;
        }

        .Container-2h6Rp2N6dK {
            display: flex;
            align-content: center;
            align-items: center;
            width: 100%;
        }

        /*footer*/
        .Footer-5QMrkBl5dE {
            gap: 0px;
            width: 100%;
            margin: 0px;
            display: flex;
            padding: 20px;
            margin-top: auto;
            align-items: start;
            margin-left: 0px;
            padding-top: 0px;
            border-color: black;
            border-style: none;
            border-width: 1px;
            margin-right: 0px;
            padding-left: 20px;
            border-radius: 0px;
            margin-bottom: 0px;
            padding-right: 20px;
            flex-direction: column;
            padding-bottom: 20px;
            justify-content: start;
            position: relative;
            min-height: fit-content;
            max-height: 100%;
          \ background-color: ${config.backgroundColor};
            background-size: cover;
            background-position: center;
        }

        .Container-csfXwJ_ewQ {
            gap: 0px;
            top: 0px;
            left: 0px;
            width: 100%;
            height: fit-content;
            margin: 0px;
            display: flex;
            padding: 20px;
            position: relative;
            margin-top: 0px;
            transform: none;
            align-items: center;
            margin-left: 0px;
            padding-top: 20px;
            border-color: black;
            border-style: none;
            border-width: 1px;
            margin-right: 0px;
            padding-left: 20px;
            border-radius: 0px;
            margin-bottom: 0px;
            padding-right: 20px;
            flex-direction: column;
            padding-bottom: 20px;
            justify-content: center;
            min-height: fit-content;
            max-height: 100%;
            background-image: linear-gradient(rgba(64, 64, 64, 0), rgba(64, 64, 64, 0)), url();
            background-size: cover;
            background-position: center;
        }

        .Text-KA8CVb1FAG {
            color: #3d3d3d;
            width: 123px;
            height: 27px;
            margin: 0;
            font-size: 18px;
            margin-top: 0;
            text-align: center;
            font-family: Arial;
            font-weight: bold;
            margin-left: 0;
            margin-right: 0;
            margin-bottom: 0;
            display: flex;
            flex-direction: column;
            opacity: 1;
        }

        .Container-mtvRnpC47m {
            gap: 0px;
            top: 0px;
            left: 0px;
            width: 100%;
            height: fit-content;
            margin: 0px;
            display: flex;
            padding: 0px;
            position: relative;
            margin-top: 0px;
            transform: none;
            align-items: center;
            margin-left: 0px;
            padding-top: 0px;
            border-color: black;
            border-style: none;
            border-width: 1px;
            margin-right: 0px;
            padding-left: 0px;
            border-radius: 0px;
            margin-bottom: 10px;
            padding-right: 0px;
            flex-direction: row;
            padding-bottom: 0px;
            justify-content: center;
            min-height: fit-content;
            max-height: 100%;
            background-image: linear-gradient(rgba(64, 64, 64, 0), rgba(64, 64, 64, 0)), url();
            background-size: cover;
            background-position: center;
        }

        .Image-YqYibvc-dA {
            width: 279px;
            height: 197px;
            margin: 0px;
            padding: 0px;
            margin-top: 0px;
            margin-left: 0px;
            padding-top: 0px;
            aspect-ratio: 1.7777777777777777;
            border-color: black;
            border-style: none;
            border-width: 1px;
            margin-right: 0px;
            padding-left: 0px;
            border-radius: 0px;
            margin-bottom: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
        }

        .Text-MHzhO0RGnw {
            color: #3d3d3d;
            width: 293px;
            margin: 0;
            font-size: 14px;
            margin-top: 10px;
            text-align: left;
            font-family: Arial;
            margin-left: 0;
            margin-right: 0;
            margin-bottom: 10px;
            display: flex;
            flex-direction: column;
            opacity: 1;
        }

        .address-name {
            color: ${config.textColor};
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }
    </style>
    <style>
.dropdown-menu .dropdown-menu {
  left: 100%;
}

.dropdown-item + .dropdown-menu {
  display: none;
}

.dropdown-item:hover + .dropdown-menu,
.dropdown-menu:hover {
  display: block;
}

button {
  background-color: transparent;
  border-color: transparent;
}



.avatar {
  font-size: 16px;
  width: 3em;
  height: 3em;
  border-radius: 50%;
  background: #555555;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.avatar::after {
  content: attr(data-label);
  font-family: "Readex Pro", sans-serif;
  color: #ffffff;
}


/*new navbar */
:root {
  --primary: #eeeeee;
  --secondary: #b18161 ;
  --green: #b18161 ;
  --secondary-light: rgb(34, 124, 112, 0.2);
  --secondary-light-2: rgb(127, 183, 126, 0.1);
  --white: #fff;
  --black: #393e46;

  --shadow: 0px 2px 8px 0px var(--secondary-light);
}
.navbar0209 {
  display: flex;
  align-items: center;
  height: 70px;
  background-color: var(--white);
  padding: 0 8%;
  box-shadow: var(--shadow);
}

.navbar-logo0209 {
  cursor: pointer;
}

.navbar-list0209 {
  width: 100%;
  text-align: right;
  padding-right: 2rem;
}

.navbar-list0209 li {
  display: inline-block;
  margin: 0 1rem;
}

.navbar-list0209 li a {
  font-size: 1rem;
  font-weight: 500;
  color: var(--black);
  text-decoration: none;
}

.profile-dropdown0209 {
  position: relative;
  width: fit-content;
  padding-left: 10px;
  /* display: none; */
}

.profile-dropdown-btn0209 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  /* width: 150px; */
  border-radius: 50px;
  color: var(--black);
  /* background-color: white;
  box-shadow: var(--shadow); */

  cursor: pointer;
  border: 1px solid var(--secondary);
  transition: box-shadow 0.2s ease-in, background-color 0.2s ease-in,
    border 0.3s;
}



.profile-dropdown-btn0209:hover {
  background-color: var(--secondary-light-2);
  box-shadow: var(--shadow);
}

.profile-img0209 {
  position: relative;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: url(./assets/profile-pic.jpg);
  background-size: cover;
  
}

.profile-img0209 i {
  position: absolute;
  right: 0;
  bottom: 0.3rem;
  font-size: 0.5rem;
  color: var(--green);
}

.profile-dropdown-btn0209 span {
  margin: 0 0.5rem;
  margin-right: 0;
  
}

.profile-dropdown-list0209 {
  position: absolute;
  top: 68px;
  width: 220px;
  right: 0;
  background-color: var(--white);
  border-radius: 10px;
  max-height: 0;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: max-height 0.5s;
  padding-left: 0;
  z-index: 10000;
}

.profile-dropdown-list0209 hr {
  border: 0.5px solid var(--green);
}

.profile-dropdown-list0209.active {
  max-height: 500px;
}

.profile-dropdown-list-item0209 {
  padding: 0.5rem 0rem 0.5rem 1rem;
  transition: background-color 0.2s ease-in, padding-left 0.2s;
}

.profile-dropdown-list-item0209 a {
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--black);
}

.profile-dropdown-list-item0209 a i {
  margin-right: 0.8rem;
  font-size: 1.1rem;
  width: 2.3rem;
  height: 2.3rem;
  background-color: var(--secondary);
  color: var(--white);
  line-height: 2.3rem;
  text-align: center;
  margin-right: 1rem;
  border-radius: 50%;
  transition: margin-right 0.3s;
}

.profile-dropdown-list-item0209:hover {
  padding-left: 1.5rem;
  background-color: var(--secondary-light);
}


@media (max-width: 1200px) {
  .profile-dropdown-list0209 {
    position: absolute;
    /*top: -280px;
    width: 220px;
    right: -30px;*/
    background-color: var(--white);
    border-radius: 10px;
    max-height: 0;
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: max-height 0.5s;
    padding-left: 0;
    z-index: 100;
}

}

    </style>
    <style>
        /* for new info*/
        .details {
            padding: 8px 0;
        }

        .detail-item {
            display: flex;
            /* padding: 12px 16px; */
            padding: 8px 8px;
            align-items: flex-start;
        }

        .detail-item .material-icons {
            margin-right: 16px;
            margin-top: 2px;
            color: ${config.textColor};
        }

        .detail-content {
            flex: 1;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: ${config.textColor};
        }

        .detail-content p {
            font-size: 14px;
        }

        .detail-content-address {
            flex: 1;

            justify-content: space-between;
            align-items: center;
            color: ${config.textColor};
        }

        .detail-content-address p {
            font-size: 14px;
            color: ${config.textColor};
        }

        .open-status {
            color: #188038;
        }
        .open-status.open {
            color: #188038;
        }
        .open-status.close {
            color: #d93025;
        }

        .opacity-0 {
            opacity: 0;
        }
        
    </style>
    <style>
     */html{box-sizing:border-box;-ms-overflow-style:scrollbar}*,::after,::before{box-sizing:inherit}.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1140px}}.container-fluid{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=col-]{padding-right:0;padding-left:0}.col,.col-1,.col-10,.col-11,.col-12,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-auto,.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-auto,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-auto,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-auto{position:relative;width:100%;padding-right:15px;padding-left:15px}.col{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-first{-ms-flex-order:-1;order:-1}.order-last{-ms-flex-order:13;order:13}.order-0{-ms-flex-order:0;order:0}.order-1{-ms-flex-order:1;order:1}.order-2{-ms-flex-order:2;order:2}.order-3{-ms-flex-order:3;order:3}.order-4{-ms-flex-order:4;order:4}.order-5{-ms-flex-order:5;order:5}.order-6{-ms-flex-order:6;order:6}.order-7{-ms-flex-order:7;order:7}.order-8{-ms-flex-order:8;order:8}.order-9{-ms-flex-order:9;order:9}.order-10{-ms-flex-order:10;order:10}.order-11{-ms-flex-order:11;order:11}.order-12{-ms-flex-order:12;order:12}.offset-1{margin-left:8.333333%}.offset-2{margin-left:16.666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.333333%}.offset-5{margin-left:41.666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.333333%}.offset-8{margin-left:66.666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.333333%}.offset-11{margin-left:91.666667%}@media (min-width:576px){.col-sm{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-sm-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-sm-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-sm-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-sm-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-sm-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-sm-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-sm-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-sm-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-sm-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-sm-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-sm-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-sm-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-sm-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-sm-first{-ms-flex-order:-1;order:-1}.order-sm-last{-ms-flex-order:13;order:13}.order-sm-0{-ms-flex-order:0;order:0}.order-sm-1{-ms-flex-order:1;order:1}.order-sm-2{-ms-flex-order:2;order:2}.order-sm-3{-ms-flex-order:3;order:3}.order-sm-4{-ms-flex-order:4;order:4}.order-sm-5{-ms-flex-order:5;order:5}.order-sm-6{-ms-flex-order:6;order:6}.order-sm-7{-ms-flex-order:7;order:7}.order-sm-8{-ms-flex-order:8;order:8}.order-sm-9{-ms-flex-order:9;order:9}.order-sm-10{-ms-flex-order:10;order:10}.order-sm-11{-ms-flex-order:11;order:11}.order-sm-12{-ms-flex-order:12;order:12}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.333333%}.offset-sm-2{margin-left:16.666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.333333%}.offset-sm-5{margin-left:41.666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.333333%}.offset-sm-8{margin-left:66.666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.333333%}.offset-sm-11{margin-left:91.666667%}}@media (min-width:768px){.col-md{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-md-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-md-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-md-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-md-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-md-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-md-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-md-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-md-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-md-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-md-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-md-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-md-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-md-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-md-first{-ms-flex-order:-1;order:-1}.order-md-last{-ms-flex-order:13;order:13}.order-md-0{-ms-flex-order:0;order:0}.order-md-1{-ms-flex-order:1;order:1}.order-md-2{-ms-flex-order:2;order:2}.order-md-3{-ms-flex-order:3;order:3}.order-md-4{-ms-flex-order:4;order:4}.order-md-5{-ms-flex-order:5;order:5}.order-md-6{-ms-flex-order:6;order:6}.order-md-7{-ms-flex-order:7;order:7}.order-md-8{-ms-flex-order:8;order:8}.order-md-9{-ms-flex-order:9;order:9}.order-md-10{-ms-flex-order:10;order:10}.order-md-11{-ms-flex-order:11;order:11}.order-md-12{-ms-flex-order:12;order:12}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.333333%}.offset-md-2{margin-left:16.666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.333333%}.offset-md-5{margin-left:41.666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.333333%}.offset-md-8{margin-left:66.666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.333333%}.offset-md-11{margin-left:91.666667%}}@media (min-width:992px){.col-lg{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-lg-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-lg-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-lg-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-lg-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-lg-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-lg-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-lg-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-lg-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-lg-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-lg-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-lg-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-lg-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-lg-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-lg-first{-ms-flex-order:-1;order:-1}.order-lg-last{-ms-flex-order:13;order:13}.order-lg-0{-ms-flex-order:0;order:0}.order-lg-1{-ms-flex-order:1;order:1}.order-lg-2{-ms-flex-order:2;order:2}.order-lg-3{-ms-flex-order:3;order:3}.order-lg-4{-ms-flex-order:4;order:4}.order-lg-5{-ms-flex-order:5;order:5}.order-lg-6{-ms-flex-order:6;order:6}.order-lg-7{-ms-flex-order:7;order:7}.order-lg-8{-ms-flex-order:8;order:8}.order-lg-9{-ms-flex-order:9;order:9}.order-lg-10{-ms-flex-order:10;order:10}.order-lg-11{-ms-flex-order:11;order:11}.order-lg-12{-ms-flex-order:12;order:12}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.333333%}.offset-lg-2{margin-left:16.666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.333333%}.offset-lg-5{margin-left:41.666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.333333%}.offset-lg-8{margin-left:66.666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.333333%}.offset-lg-11{margin-left:91.666667%}}@media (min-width:1200px){.col-xl{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-xl-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-xl-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-xl-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-xl-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-xl-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-xl-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-xl-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-xl-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-xl-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-xl-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-xl-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-xl-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-xl-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-xl-first{-ms-flex-order:-1;order:-1}.order-xl-last{-ms-flex-order:13;order:13}.order-xl-0{-ms-flex-order:0;order:0}.order-xl-1{-ms-flex-order:1;order:1}.order-xl-2{-ms-flex-order:2;order:2}.order-xl-3{-ms-flex-order:3;order:3}.order-xl-4{-ms-flex-order:4;order:4}.order-xl-5{-ms-flex-order:5;order:5}.order-xl-6{-ms-flex-order:6;order:6}.order-xl-7{-ms-flex-order:7;order:7}.order-xl-8{-ms-flex-order:8;order:8}.order-xl-9{-ms-flex-order:9;order:9}.order-xl-10{-ms-flex-order:10;order:10}.order-xl-11{-ms-flex-order:11;order:11}.order-xl-12{-ms-flex-order:12;order:12}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.333333%}.offset-xl-2{margin-left:16.666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.333333%}.offset-xl-5{margin-left:41.666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.333333%}.offset-xl-8{margin-left:66.666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.333333%}.offset-xl-11{margin-left:91.666667%}}.d-none{display:none!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:-ms-flexbox!important;display:flex!important}.d-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}@media (min-width:576px){.d-sm-none{display:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:-ms-flexbox!important;display:flex!important}.d-sm-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:768px){.d-md-none{display:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:-ms-flexbox!important;display:flex!important}.d-md-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:992px){.d-lg-none{display:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:-ms-flexbox!important;display:flex!important}.d-lg-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:1200px){.d-xl-none{display:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:-ms-flexbox!important;display:flex!important}.d-xl-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media print{.d-print-none{display:none!important}.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:-ms-flexbox!important;display:flex!important}.d-print-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}.flex-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-fill{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-grow-0{-ms-flex-positive:0!important;flex-grow:0!important}.flex-grow-1{-ms-flex-positive:1!important;flex-grow:1!important}.flex-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-center{-ms-flex-align:center!important;align-items:center!important}.align-items-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}@media (min-width:576px){.flex-sm-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-sm-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-sm-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-sm-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-sm-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-sm-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-sm-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-sm-fill{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-sm-grow-0{-ms-flex-positive:0!important;flex-grow:0!important}.flex-sm-grow-1{-ms-flex-positive:1!important;flex-grow:1!important}.flex-sm-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-sm-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-sm-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-sm-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-sm-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-sm-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-sm-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-sm-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-sm-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-sm-center{-ms-flex-align:center!important;align-items:center!important}.align-items-sm-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-sm-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-sm-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-sm-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-sm-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-sm-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-sm-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-sm-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-sm-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-sm-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-sm-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-sm-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-sm-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-sm-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}}@media (min-width:768px){.flex-md-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-md-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-md-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-md-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-md-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-md-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-md-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-md-fill{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-md-grow-0{-ms-flex-positive:0!important;flex-grow:0!important}.flex-md-grow-1{-ms-flex-positive:1!important;flex-grow:1!important}.flex-md-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-md-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-md-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-md-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-md-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-md-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-md-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-md-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-md-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-md-center{-ms-flex-align:center!important;align-items:center!important}.align-items-md-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-md-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-md-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-md-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-md-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-md-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-md-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-md-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-md-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-md-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-md-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-md-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-md-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-md-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}}@media (min-width:992px){.flex-lg-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-lg-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-lg-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-lg-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-lg-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-lg-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-lg-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-lg-fill{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-lg-grow-0{-ms-flex-positive:0!important;flex-grow:0!important}.flex-lg-grow-1{-ms-flex-positive:1!important;flex-grow:1!important}.flex-lg-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-lg-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-lg-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-lg-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-lg-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-lg-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-lg-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-lg-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-lg-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-lg-center{-ms-flex-align:center!important;align-items:center!important}.align-items-lg-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-lg-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-lg-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-lg-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-lg-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-lg-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-lg-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-lg-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-lg-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-lg-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-lg-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-lg-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-lg-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-lg-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}}@media (min-width:1200px){.flex-xl-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-xl-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-xl-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-xl-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-xl-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-xl-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-xl-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-xl-fill{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-xl-grow-0{-ms-flex-positive:0!important;flex-grow:0!important}.flex-xl-grow-1{-ms-flex-positive:1!important;flex-grow:1!important}.flex-xl-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-xl-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-xl-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-xl-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-xl-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-xl-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-xl-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-xl-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-xl-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-xl-center{-ms-flex-align:center!important;align-items:center!important}.align-items-xl-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-xl-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-xl-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-xl-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-xl-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-xl-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-xl-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-xl-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-xl-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-xl-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-xl-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-xl-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-xl-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-xl-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}}.m-0{margin:0!important}.mt-0,.my-0{margin-top:0!important}.mr-0,.mx-0{margin-right:0!important}.mb-0,.my-0{margin-bottom:0!important}.ml-0,.mx-0{margin-left:0!important}.m-1{margin:.25rem!important}.mt-1,.my-1{margin-top:.25rem!important}.mr-1,.mx-1{margin-right:.25rem!important}.mb-1,.my-1{margin-bottom:.25rem!important}.ml-1,.mx-1{margin-left:.25rem!important}.m-2{margin:.5rem!important}.mt-2,.my-2{margin-top:.5rem!important}.mr-2,.mx-2{margin-right:.5rem!important}.mb-2,.my-2{margin-bottom:.5rem!important}.ml-2,.mx-2{margin-left:.5rem!important}.m-3{margin:1rem!important}.mt-3,.my-3{margin-top:1rem!important}.mr-3,.mx-3{margin-right:1rem!important}.mb-3,.my-3{margin-bottom:1rem!important}.ml-3,.mx-3{margin-left:1rem!important}.m-4{margin:1.5rem!important}.mt-4,.my-4{margin-top:1.5rem!important}.mr-4,.mx-4{margin-right:1.5rem!important}.mb-4,.my-4{margin-bottom:1.5rem!important}.ml-4,.mx-4{margin-left:1.5rem!important}.m-5{margin:3rem!important}.mt-5,.my-5{margin-top:3rem!important}.mr-5,.mx-5{margin-right:3rem!important}.mb-5,.my-5{margin-bottom:3rem!important}.ml-5,.mx-5{margin-left:3rem!important}.p-0{padding:0!important}.pt-0,.py-0{padding-top:0!important}.pr-0,.px-0{padding-right:0!important}.pb-0,.py-0{padding-bottom:0!important}.pl-0,.px-0{padding-left:0!important}.p-1{padding:.25rem!important}.pt-1,.py-1{padding-top:.25rem!important}.pr-1,.px-1{padding-right:.25rem!important}.pb-1,.py-1{padding-bottom:.25rem!important}.pl-1,.px-1{padding-left:.25rem!important}.p-2{padding:.5rem!important}.pt-2,.py-2{padding-top:.5rem!important}.pr-2,.px-2{padding-right:.5rem!important}.pb-2,.py-2{padding-bottom:.5rem!important}.pl-2,.px-2{padding-left:.5rem!important}.p-3{padding:1rem!important}.pt-3,.py-3{padding-top:1rem!important}.pr-3,.px-3{padding-right:1rem!important}.pb-3,.py-3{padding-bottom:1rem!important}.pl-3,.px-3{padding-left:1rem!important}.p-4{padding:1.5rem!important}.pt-4,.py-4{padding-top:1.5rem!important}.pr-4,.px-4{padding-right:1.5rem!important}.pb-4,.py-4{padding-bottom:1.5rem!important}.pl-4,.px-4{padding-left:1.5rem!important}.p-5{padding:3rem!important}.pt-5,.py-5{padding-top:3rem!important}.pr-5,.px-5{padding-right:3rem!important}.pb-5,.py-5{padding-bottom:3rem!important}.pl-5,.px-5{padding-left:3rem!important}.m-n1{margin:-.25rem!important}.mt-n1,.my-n1{margin-top:-.25rem!important}.mr-n1,.mx-n1{margin-right:-.25rem!important}.mb-n1,.my-n1{margin-bottom:-.25rem!important}.ml-n1,.mx-n1{margin-left:-.25rem!important}.m-n2{margin:-.5rem!important}.mt-n2,.my-n2{margin-top:-.5rem!important}.mr-n2,.mx-n2{margin-right:-.5rem!important}.mb-n2,.my-n2{margin-bottom:-.5rem!important}.ml-n2,.mx-n2{margin-left:-.5rem!important}.m-n3{margin:-1rem!important}.mt-n3,.my-n3{margin-top:-1rem!important}.mr-n3,.mx-n3{margin-right:-1rem!important}.mb-n3,.my-n3{margin-bottom:-1rem!important}.ml-n3,.mx-n3{margin-left:-1rem!important}.m-n4{margin:-1.5rem!important}.mt-n4,.my-n4{margin-top:-1.5rem!important}.mr-n4,.mx-n4{margin-right:-1.5rem!important}.mb-n4,.my-n4{margin-bottom:-1.5rem!important}.ml-n4,.mx-n4{margin-left:-1.5rem!important}.m-n5{margin:-3rem!important}.mt-n5,.my-n5{margin-top:-3rem!important}.mr-n5,.mx-n5{margin-right:-3rem!important}.mb-n5,.my-n5{margin-bottom:-3rem!important}.ml-n5,.mx-n5{margin-left:-3rem!important}.m-auto{margin:auto!important}.mt-auto,.my-auto{margin-top:auto!important}.mr-auto,.mx-auto{margin-right:auto!important}.mb-auto,.my-auto{margin-bottom:auto!important}.ml-auto,.mx-auto{margin-left:auto!important}@media (min-width:576px){.m-sm-0{margin:0!important}.mt-sm-0,.my-sm-0{margin-top:0!important}.mr-sm-0,.mx-sm-0{margin-right:0!important}.mb-sm-0,.my-sm-0{margin-bottom:0!important}.ml-sm-0,.mx-sm-0{margin-left:0!important}.m-sm-1{margin:.25rem!important}.mt-sm-1,.my-sm-1{margin-top:.25rem!important}.mr-sm-1,.mx-sm-1{margin-right:.25rem!important}.mb-sm-1,.my-sm-1{margin-bottom:.25rem!important}.ml-sm-1,.mx-sm-1{margin-left:.25rem!important}.m-sm-2{margin:.5rem!important}.mt-sm-2,.my-sm-2{margin-top:.5rem!important}.mr-sm-2,.mx-sm-2{margin-right:.5rem!important}.mb-sm-2,.my-sm-2{margin-bottom:.5rem!important}.ml-sm-2,.mx-sm-2{margin-left:.5rem!important}.m-sm-3{margin:1rem!important}.mt-sm-3,.my-sm-3{margin-top:1rem!important}.mr-sm-3,.mx-sm-3{margin-right:1rem!important}.mb-sm-3,.my-sm-3{margin-bottom:1rem!important}.ml-sm-3,.mx-sm-3{margin-left:1rem!important}.m-sm-4{margin:1.5rem!important}.mt-sm-4,.my-sm-4{margin-top:1.5rem!important}.mr-sm-4,.mx-sm-4{margin-right:1.5rem!important}.mb-sm-4,.my-sm-4{margin-bottom:1.5rem!important}.ml-sm-4,.mx-sm-4{margin-left:1.5rem!important}.m-sm-5{margin:3rem!important}.mt-sm-5,.my-sm-5{margin-top:3rem!important}.mr-sm-5,.mx-sm-5{margin-right:3rem!important}.mb-sm-5,.my-sm-5{margin-bottom:3rem!important}.ml-sm-5,.mx-sm-5{margin-left:3rem!important}.p-sm-0{padding:0!important}.pt-sm-0,.py-sm-0{padding-top:0!important}.pr-sm-0,.px-sm-0{padding-right:0!important}.pb-sm-0,.py-sm-0{padding-bottom:0!important}.pl-sm-0,.px-sm-0{padding-left:0!important}.p-sm-1{padding:.25rem!important}.pt-sm-1,.py-sm-1{padding-top:.25rem!important}.pr-sm-1,.px-sm-1{padding-right:.25rem!important}.pb-sm-1,.py-sm-1{padding-bottom:.25rem!important}.pl-sm-1,.px-sm-1{padding-left:.25rem!important}.p-sm-2{padding:.5rem!important}.pt-sm-2,.py-sm-2{padding-top:.5rem!important}.pr-sm-2,.px-sm-2{padding-right:.5rem!important}.pb-sm-2,.py-sm-2{padding-bottom:.5rem!important}.pl-sm-2,.px-sm-2{padding-left:.5rem!important}.p-sm-3{padding:1rem!important}.pt-sm-3,.py-sm-3{padding-top:1rem!important}.pr-sm-3,.px-sm-3{padding-right:1rem!important}.pb-sm-3,.py-sm-3{padding-bottom:1rem!important}.pl-sm-3,.px-sm-3{padding-left:1rem!important}.p-sm-4{padding:1.5rem!important}.pt-sm-4,.py-sm-4{padding-top:1.5rem!important}.pr-sm-4,.px-sm-4{padding-right:1.5rem!important}.pb-sm-4,.py-sm-4{padding-bottom:1.5rem!important}.pl-sm-4,.px-sm-4{padding-left:1.5rem!important}.p-sm-5{padding:3rem!important}.pt-sm-5,.py-sm-5{padding-top:3rem!important}.pr-sm-5,.px-sm-5{padding-right:3rem!important}.pb-sm-5,.py-sm-5{padding-bottom:3rem!important}.pl-sm-5,.px-sm-5{padding-left:3rem!important}.m-sm-n1{margin:-.25rem!important}.mt-sm-n1,.my-sm-n1{margin-top:-.25rem!important}.mr-sm-n1,.mx-sm-n1{margin-right:-.25rem!important}.mb-sm-n1,.my-sm-n1{margin-bottom:-.25rem!important}.ml-sm-n1,.mx-sm-n1{margin-left:-.25rem!important}.m-sm-n2{margin:-.5rem!important}.mt-sm-n2,.my-sm-n2{margin-top:-.5rem!important}.mr-sm-n2,.mx-sm-n2{margin-right:-.5rem!important}.mb-sm-n2,.my-sm-n2{margin-bottom:-.5rem!important}.ml-sm-n2,.mx-sm-n2{margin-left:-.5rem!important}.m-sm-n3{margin:-1rem!important}.mt-sm-n3,.my-sm-n3{margin-top:-1rem!important}.mr-sm-n3,.mx-sm-n3{margin-right:-1rem!important}.mb-sm-n3,.my-sm-n3{margin-bottom:-1rem!important}.ml-sm-n3,.mx-sm-n3{margin-left:-1rem!important}.m-sm-n4{margin:-1.5rem!important}.mt-sm-n4,.my-sm-n4{margin-top:-1.5rem!important}.mr-sm-n4,.mx-sm-n4{margin-right:-1.5rem!important}.mb-sm-n4,.my-sm-n4{margin-bottom:-1.5rem!important}.ml-sm-n4,.mx-sm-n4{margin-left:-1.5rem!important}.m-sm-n5{margin:-3rem!important}.mt-sm-n5,.my-sm-n5{margin-top:-3rem!important}.mr-sm-n5,.mx-sm-n5{margin-right:-3rem!important}.mb-sm-n5,.my-sm-n5{margin-bottom:-3rem!important}.ml-sm-n5,.mx-sm-n5{margin-left:-3rem!important}.m-sm-auto{margin:auto!important}.mt-sm-auto,.my-sm-auto{margin-top:auto!important}.mr-sm-auto,.mx-sm-auto{margin-right:auto!important}.mb-sm-auto,.my-sm-auto{margin-bottom:auto!important}.ml-sm-auto,.mx-sm-auto{margin-left:auto!important}}@media (min-width:768px){.m-md-0{margin:0!important}.mt-md-0,.my-md-0{margin-top:0!important}.mr-md-0,.mx-md-0{margin-right:0!important}.mb-md-0,.my-md-0{margin-bottom:0!important}.ml-md-0,.mx-md-0{margin-left:0!important}.m-md-1{margin:.25rem!important}.mt-md-1,.my-md-1{margin-top:.25rem!important}.mr-md-1,.mx-md-1{margin-right:.25rem!important}.mb-md-1,.my-md-1{margin-bottom:.25rem!important}.ml-md-1,.mx-md-1{margin-left:.25rem!important}.m-md-2{margin:.5rem!important}.mt-md-2,.my-md-2{margin-top:.5rem!important}.mr-md-2,.mx-md-2{margin-right:.5rem!important}.mb-md-2,.my-md-2{margin-bottom:.5rem!important}.ml-md-2,.mx-md-2{margin-left:.5rem!important}.m-md-3{margin:1rem!important}.mt-md-3,.my-md-3{margin-top:1rem!important}.mr-md-3,.mx-md-3{margin-right:1rem!important}.mb-md-3,.my-md-3{margin-bottom:1rem!important}.ml-md-3,.mx-md-3{margin-left:1rem!important}.m-md-4{margin:1.5rem!important}.mt-md-4,.my-md-4{margin-top:1.5rem!important}.mr-md-4,.mx-md-4{margin-right:1.5rem!important}.mb-md-4,.my-md-4{margin-bottom:1.5rem!important}.ml-md-4,.mx-md-4{margin-left:1.5rem!important}.m-md-5{margin:3rem!important}.mt-md-5,.my-md-5{margin-top:3rem!important}.mr-md-5,.mx-md-5{margin-right:3rem!important}.mb-md-5,.my-md-5{margin-bottom:3rem!important}.ml-md-5,.mx-md-5{margin-left:3rem!important}.p-md-0{padding:0!important}.pt-md-0,.py-md-0{padding-top:0!important}.pr-md-0,.px-md-0{padding-right:0!important}.pb-md-0,.py-md-0{padding-bottom:0!important}.pl-md-0,.px-md-0{padding-left:0!important}.p-md-1{padding:.25rem!important}.pt-md-1,.py-md-1{padding-top:.25rem!important}.pr-md-1,.px-md-1{padding-right:.25rem!important}.pb-md-1,.py-md-1{padding-bottom:.25rem!important}.pl-md-1,.px-md-1{padding-left:.25rem!important}.p-md-2{padding:.5rem!important}.pt-md-2,.py-md-2{padding-top:.5rem!important}.pr-md-2,.px-md-2{padding-right:.5rem!important}.pb-md-2,.py-md-2{padding-bottom:.5rem!important}.pl-md-2,.px-md-2{padding-left:.5rem!important}.p-md-3{padding:1rem!important}.pt-md-3,.py-md-3{padding-top:1rem!important}.pr-md-3,.px-md-3{padding-right:1rem!important}.pb-md-3,.py-md-3{padding-bottom:1rem!important}.pl-md-3,.px-md-3{padding-left:1rem!important}.p-md-4{padding:1.5rem!important}.pt-md-4,.py-md-4{padding-top:1.5rem!important}.pr-md-4,.px-md-4{padding-right:1.5rem!important}.pb-md-4,.py-md-4{padding-bottom:1.5rem!important}.pl-md-4,.px-md-4{padding-left:1.5rem!important}.p-md-5{padding:3rem!important}.pt-md-5,.py-md-5{padding-top:3rem!important}.pr-md-5,.px-md-5{padding-right:3rem!important}.pb-md-5,.py-md-5{padding-bottom:3rem!important}.pl-md-5,.px-md-5{padding-left:3rem!important}.m-md-n1{margin:-.25rem!important}.mt-md-n1,.my-md-n1{margin-top:-.25rem!important}.mr-md-n1,.mx-md-n1{margin-right:-.25rem!important}.mb-md-n1,.my-md-n1{margin-bottom:-.25rem!important}.ml-md-n1,.mx-md-n1{margin-left:-.25rem!important}.m-md-n2{margin:-.5rem!important}.mt-md-n2,.my-md-n2{margin-top:-.5rem!important}.mr-md-n2,.mx-md-n2{margin-right:-.5rem!important}.mb-md-n2,.my-md-n2{margin-bottom:-.5rem!important}.ml-md-n2,.mx-md-n2{margin-left:-.5rem!important}.m-md-n3{margin:-1rem!important}.mt-md-n3,.my-md-n3{margin-top:-1rem!important}.mr-md-n3,.mx-md-n3{margin-right:-1rem!important}.mb-md-n3,.my-md-n3{margin-bottom:-1rem!important}.ml-md-n3,.mx-md-n3{margin-left:-1rem!important}.m-md-n4{margin:-1.5rem!important}.mt-md-n4,.my-md-n4{margin-top:-1.5rem!important}.mr-md-n4,.mx-md-n4{margin-right:-1.5rem!important}.mb-md-n4,.my-md-n4{margin-bottom:-1.5rem!important}.ml-md-n4,.mx-md-n4{margin-left:-1.5rem!important}.m-md-n5{margin:-3rem!important}.mt-md-n5,.my-md-n5{margin-top:-3rem!important}.mr-md-n5,.mx-md-n5{margin-right:-3rem!important}.mb-md-n5,.my-md-n5{margin-bottom:-3rem!important}.ml-md-n5,.mx-md-n5{margin-left:-3rem!important}.m-md-auto{margin:auto!important}.mt-md-auto,.my-md-auto{margin-top:auto!important}.mr-md-auto,.mx-md-auto{margin-right:auto!important}.mb-md-auto,.my-md-auto{margin-bottom:auto!important}.ml-md-auto,.mx-md-auto{margin-left:auto!important}}@media (min-width:992px){.m-lg-0{margin:0!important}.mt-lg-0,.my-lg-0{margin-top:0!important}.mr-lg-0,.mx-lg-0{margin-right:0!important}.mb-lg-0,.my-lg-0{margin-bottom:0!important}.ml-lg-0,.mx-lg-0{margin-left:0!important}.m-lg-1{margin:.25rem!important}.mt-lg-1,.my-lg-1{margin-top:.25rem!important}.mr-lg-1,.mx-lg-1{margin-right:.25rem!important}.mb-lg-1,.my-lg-1{margin-bottom:.25rem!important}.ml-lg-1,.mx-lg-1{margin-left:.25rem!important}.m-lg-2{margin:.5rem!important}.mt-lg-2,.my-lg-2{margin-top:.5rem!important}.mr-lg-2,.mx-lg-2{margin-right:.5rem!important}.mb-lg-2,.my-lg-2{margin-bottom:.5rem!important}.ml-lg-2,.mx-lg-2{margin-left:.5rem!important}.m-lg-3{margin:1rem!important}.mt-lg-3,.my-lg-3{margin-top:1rem!important}.mr-lg-3,.mx-lg-3{margin-right:1rem!important}.mb-lg-3,.my-lg-3{margin-bottom:1rem!important}.ml-lg-3,.mx-lg-3{margin-left:1rem!important}.m-lg-4{margin:1.5rem!important}.mt-lg-4,.my-lg-4{margin-top:1.5rem!important}.mr-lg-4,.mx-lg-4{margin-right:1.5rem!important}.mb-lg-4,.my-lg-4{margin-bottom:1.5rem!important}.ml-lg-4,.mx-lg-4{margin-left:1.5rem!important}.m-lg-5{margin:3rem!important}.mt-lg-5,.my-lg-5{margin-top:3rem!important}.mr-lg-5,.mx-lg-5{margin-right:3rem!important}.mb-lg-5,.my-lg-5{margin-bottom:3rem!important}.ml-lg-5,.mx-lg-5{margin-left:3rem!important}.p-lg-0{padding:0!important}.pt-lg-0,.py-lg-0{padding-top:0!important}.pr-lg-0,.px-lg-0{padding-right:0!important}.pb-lg-0,.py-lg-0{padding-bottom:0!important}.pl-lg-0,.px-lg-0{padding-left:0!important}.p-lg-1{padding:.25rem!important}.pt-lg-1,.py-lg-1{padding-top:.25rem!important}.pr-lg-1,.px-lg-1{padding-right:.25rem!important}.pb-lg-1,.py-lg-1{padding-bottom:.25rem!important}.pl-lg-1,.px-lg-1{padding-left:.25rem!important}.p-lg-2{padding:.5rem!important}.pt-lg-2,.py-lg-2{padding-top:.5rem!important}.pr-lg-2,.px-lg-2{padding-right:.5rem!important}.pb-lg-2,.py-lg-2{padding-bottom:.5rem!important}.pl-lg-2,.px-lg-2{padding-left:.5rem!important}.p-lg-3{padding:1rem!important}.pt-lg-3,.py-lg-3{padding-top:1rem!important}.pr-lg-3,.px-lg-3{padding-right:1rem!important}.pb-lg-3,.py-lg-3{padding-bottom:1rem!important}.pl-lg-3,.px-lg-3{padding-left:1rem!important}.p-lg-4{padding:1.5rem!important}.pt-lg-4,.py-lg-4{padding-top:1.5rem!important}.pr-lg-4,.px-lg-4{padding-right:1.5rem!important}.pb-lg-4,.py-lg-4{padding-bottom:1.5rem!important}.pl-lg-4,.px-lg-4{padding-left:1.5rem!important}.p-lg-5{padding:3rem!important}.pt-lg-5,.py-lg-5{padding-top:3rem!important}.pr-lg-5,.px-lg-5{padding-right:3rem!important}.pb-lg-5,.py-lg-5{padding-bottom:3rem!important}.pl-lg-5,.px-lg-5{padding-left:3rem!important}.m-lg-n1{margin:-.25rem!important}.mt-lg-n1,.my-lg-n1{margin-top:-.25rem!important}.mr-lg-n1,.mx-lg-n1{margin-right:-.25rem!important}.mb-lg-n1,.my-lg-n1{margin-bottom:-.25rem!important}.ml-lg-n1,.mx-lg-n1{margin-left:-.25rem!important}.m-lg-n2{margin:-.5rem!important}.mt-lg-n2,.my-lg-n2{margin-top:-.5rem!important}.mr-lg-n2,.mx-lg-n2{margin-right:-.5rem!important}.mb-lg-n2,.my-lg-n2{margin-bottom:-.5rem!important}.ml-lg-n2,.mx-lg-n2{margin-left:-.5rem!important}.m-lg-n3{margin:-1rem!important}.mt-lg-n3,.my-lg-n3{margin-top:-1rem!important}.mr-lg-n3,.mx-lg-n3{margin-right:-1rem!important}.mb-lg-n3,.my-lg-n3{margin-bottom:-1rem!important}.ml-lg-n3,.mx-lg-n3{margin-left:-1rem!important}.m-lg-n4{margin:-1.5rem!important}.mt-lg-n4,.my-lg-n4{margin-top:-1.5rem!important}.mr-lg-n4,.mx-lg-n4{margin-right:-1.5rem!important}.mb-lg-n4,.my-lg-n4{margin-bottom:-1.5rem!important}.ml-lg-n4,.mx-lg-n4{margin-left:-1.5rem!important}.m-lg-n5{margin:-3rem!important}.mt-lg-n5,.my-lg-n5{margin-top:-3rem!important}.mr-lg-n5,.mx-lg-n5{margin-right:-3rem!important}.mb-lg-n5,.my-lg-n5{margin-bottom:-3rem!important}.ml-lg-n5,.mx-lg-n5{margin-left:-3rem!important}.m-lg-auto{margin:auto!important}.mt-lg-auto,.my-lg-auto{margin-top:auto!important}.mr-lg-auto,.mx-lg-auto{margin-right:auto!important}.mb-lg-auto,.my-lg-auto{margin-bottom:auto!important}.ml-lg-auto,.mx-lg-auto{margin-left:auto!important}}@media (min-width:1200px){.m-xl-0{margin:0!important}.mt-xl-0,.my-xl-0{margin-top:0!important}.mr-xl-0,.mx-xl-0{margin-right:0!important}.mb-xl-0,.my-xl-0{margin-bottom:0!important}.ml-xl-0,.mx-xl-0{margin-left:0!important}.m-xl-1{margin:.25rem!important}.mt-xl-1,.my-xl-1{margin-top:.25rem!important}.mr-xl-1,.mx-xl-1{margin-right:.25rem!important}.mb-xl-1,.my-xl-1{margin-bottom:.25rem!important}.ml-xl-1,.mx-xl-1{margin-left:.25rem!important}.m-xl-2{margin:.5rem!important}.mt-xl-2,.my-xl-2{margin-top:.5rem!important}.mr-xl-2,.mx-xl-2{margin-right:.5rem!important}.mb-xl-2,.my-xl-2{margin-bottom:.5rem!important}.ml-xl-2,.mx-xl-2{margin-left:.5rem!important}.m-xl-3{margin:1rem!important}.mt-xl-3,.my-xl-3{margin-top:1rem!important}.mr-xl-3,.mx-xl-3{margin-right:1rem!important}.mb-xl-3,.my-xl-3{margin-bottom:1rem!important}.ml-xl-3,.mx-xl-3{margin-left:1rem!important}.m-xl-4{margin:1.5rem!important}.mt-xl-4,.my-xl-4{margin-top:1.5rem!important}.mr-xl-4,.mx-xl-4{margin-right:1.5rem!important}.mb-xl-4,.my-xl-4{margin-bottom:1.5rem!important}.ml-xl-4,.mx-xl-4{margin-left:1.5rem!important}.m-xl-5{margin:3rem!important}.mt-xl-5,.my-xl-5{margin-top:3rem!important}.mr-xl-5,.mx-xl-5{margin-right:3rem!important}.mb-xl-5,.my-xl-5{margin-bottom:3rem!important}.ml-xl-5,.mx-xl-5{margin-left:3rem!important}.p-xl-0{padding:0!important}.pt-xl-0,.py-xl-0{padding-top:0!important}.pr-xl-0,.px-xl-0{padding-right:0!important}.pb-xl-0,.py-xl-0{padding-bottom:0!important}.pl-xl-0,.px-xl-0{padding-left:0!important}.p-xl-1{padding:.25rem!important}.pt-xl-1,.py-xl-1{padding-top:.25rem!important}.pr-xl-1,.px-xl-1{padding-right:.25rem!important}.pb-xl-1,.py-xl-1{padding-bottom:.25rem!important}.pl-xl-1,.px-xl-1{padding-left:.25rem!important}.p-xl-2{padding:.5rem!important}.pt-xl-2,.py-xl-2{padding-top:.5rem!important}.pr-xl-2,.px-xl-2{padding-right:.5rem!important}.pb-xl-2,.py-xl-2{padding-bottom:.5rem!important}.pl-xl-2,.px-xl-2{padding-left:.5rem!important}.p-xl-3{padding:1rem!important}.pt-xl-3,.py-xl-3{padding-top:1rem!important}.pr-xl-3,.px-xl-3{padding-right:1rem!important}.pb-xl-3,.py-xl-3{padding-bottom:1rem!important}.pl-xl-3,.px-xl-3{padding-left:1rem!important}.p-xl-4{padding:1.5rem!important}.pt-xl-4,.py-xl-4{padding-top:1.5rem!important}.pr-xl-4,.px-xl-4{padding-right:1.5rem!important}.pb-xl-4,.py-xl-4{padding-bottom:1.5rem!important}.pl-xl-4,.px-xl-4{padding-left:1.5rem!important}.p-xl-5{padding:3rem!important}.pt-xl-5,.py-xl-5{padding-top:3rem!important}.pr-xl-5,.px-xl-5{padding-right:3rem!important}.pb-xl-5,.py-xl-5{padding-bottom:3rem!important}.pl-xl-5,.px-xl-5{padding-left:3rem!important}.m-xl-n1{margin:-.25rem!important}.mt-xl-n1,.my-xl-n1{margin-top:-.25rem!important}.mr-xl-n1,.mx-xl-n1{margin-right:-.25rem!important}.mb-xl-n1,.my-xl-n1{margin-bottom:-.25rem!important}.ml-xl-n1,.mx-xl-n1{margin-left:-.25rem!important}.m-xl-n2{margin:-.5rem!important}.mt-xl-n2,.my-xl-n2{margin-top:-.5rem!important}.mr-xl-n2,.mx-xl-n2{margin-right:-.5rem!important}.mb-xl-n2,.my-xl-n2{margin-bottom:-.5rem!important}.ml-xl-n2,.mx-xl-n2{margin-left:-.5rem!important}.m-xl-n3{margin:-1rem!important}.mt-xl-n3,.my-xl-n3{margin-top:-1rem!important}.mr-xl-n3,.mx-xl-n3{margin-right:-1rem!important}.mb-xl-n3,.my-xl-n3{margin-bottom:-1rem!important}.ml-xl-n3,.mx-xl-n3{margin-left:-1rem!important}.m-xl-n4{margin:-1.5rem!important}.mt-xl-n4,.my-xl-n4{margin-top:-1.5rem!important}.mr-xl-n4,.mx-xl-n4{margin-right:-1.5rem!important}.mb-xl-n4,.my-xl-n4{margin-bottom:-1.5rem!important}.ml-xl-n4,.mx-xl-n4{margin-left:-1.5rem!important}.m-xl-n5{margin:-3rem!important}.mt-xl-n5,.my-xl-n5{margin-top:-3rem!important}.mr-xl-n5,.mx-xl-n5{margin-right:-3rem!important}.mb-xl-n5,.my-xl-n5{margin-bottom:-3rem!important}.ml-xl-n5,.mx-xl-n5{margin-left:-3rem!important}.m-xl-auto{margin:auto!important}.mt-xl-auto,.my-xl-auto{margin-top:auto!important}.mr-xl-auto,.mx-xl-auto{margin-right:auto!important}.mb-xl-auto,.my-xl-auto{margin-bottom:auto!important}.ml-xl-auto,.mx-xl-auto{margin-left:auto!important}}
    </style>
    <style>
    /*
 *	generated by WOW Slider 8.7
 *	template Elegant
 */
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro&subset=latin,latin-ext);
.mbr-wowslider-container--elegant .mbr-wowslider { 
	display: block;
	zoom: 1; 
	position: relative;
	width: 100%;
	max-width: 100%;
	max-height:none;
	margin:0px auto 0px;
	z-index:90;
	text-align:left; /* reset align=center */
	font-size: 10px;
	text-shadow: none; /* fix some user styles */

	/* reset box-sizing (to boostrap friendly) */
	-webkit-box-sizing: content-box;
	-moz-box-sizing: content-box;
	box-sizing: content-box; 
}
* html .mbr-wowslider-container--elegant .mbr-wowslider{ width:640px }
.mbr-wowslider-container--elegant .mbr-wowslider .ws_images ul{
	position:relative;
	width: 10000%; 
	height:100%;
	left:0;
	list-style:none;
	margin:0;
	padding:0;
	border-spacing:0;
	overflow: visible;
	/*table-layout:fixed;*/
}
.mbr-wowslider-container--elegant .mbr-wowslider .ws_images ul li{
	position: relative;
	width:1%;
	height:100%;
	line-height:0; /*opera*/
	overflow: hidden;
	float:left;
	/*font-size:0;*/
	padding:0 0 0 0 !important;
	margin:0 0 0 0 !important;
}

.mbr-wowslider-container--elegant .mbr-wowslider .ws_images{
	position: relative;
	left:0;
	top:0;
	height:100%;
	max-height:none;
	max-width: 100%;
	vertical-align: top;
	border:none;
	overflow: hidden;
}
.mbr-wowslider-container--elegant .mbr-wowslider .ws_images ul a{
	width:100%;
	height:100%;
	max-height:none;
	display:block;
	color:transparent;
}
.mbr-wowslider-container--elegant .mbr-wowslider img{
	max-width: none !important;
}
.mbr-wowslider-container--elegant .mbr-wowslider .ws_images .ws_list img,
.mbr-wowslider-container--elegant .mbr-wowslider .ws_images > div > img{
	width:100%;
	border:none 0;
	max-width: none;
	padding:0;
	margin:0;
}
.mbr-wowslider-container--elegant .mbr-wowslider .ws_images > div > img {
	max-height:none;
}

.mbr-wowslider-container--elegant .mbr-wowslider .ws_images iframe {
	position: absolute;
	z-index: -1;
}

.mbr-wowslider-container--elegant .mbr-wowslider .ws-title > div {
	display: inline-block !important;
}

.mbr-wowslider-container--elegant .mbr-wowslider a{ 
	text-decoration: none; 
	outline: none; 
	border: none; 
}

.mbr-wowslider-container--elegant .mbr-wowslider  .ws_bullets { 
	float: left;
	position:absolute;
	z-index:70;
}
.mbr-wowslider-container--elegant .mbr-wowslider  .ws_bullets div{
	position:relative;
	float:left;
	font-size: 0px;
}
/* compatibility with Joomla styles */
.mbr-wowslider-container--elegant .mbr-wowslider  .ws_bullets a {
	line-height: 0;
}

.mbr-wowslider-container--elegant .mbr-wowslider  .ws_script{
	display:none;
}
.mbr-wowslider-container--elegant .mbr-wowslider sound, 
.mbr-wowslider-container--elegant .mbr-wowslider object{
	position:absolute;
}

/* prevent some of users reset styles */
.mbr-wowslider-container--elegant .mbr-wowslider .ws_effect {
	position: static;
	width: 100%;
	height: 100%;
}

.mbr-wowslider-container--elegant .mbr-wowslider .ws_photoItem {
	border: 2em solid #fff;
	margin-left: -2em;
	margin-top: -2em;
}
.mbr-wowslider-container--elegant .mbr-wowslider .ws_cube_side {
	background: #A6A5A9;
}


.mbr-wowslider-container--elegant .mbr-wowslider.ws_gestures {
	cursor: -webkit-grab;
	cursor: -moz-grab;
	cursor: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAABwSURBVEjH7ZJBEsAgCAMT/v/n9NCOSqe2oD2yNx1JggB4BCEFWyFASP2KMQE7ywWhe/tTRGCGogLk02tFctiW/SUgaMyQG4PdPzDn31rQbMb8FiAXgvsEJNax1yVlVGAjA93apP3HFhZTGIqiKH7iADB6HxPlHdNVAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE0LTA3LTA3VDEzOjQ5OjEwKzAyOjAwm7WiFAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNC0wNy0wN1QxMzo0OToxMCswMjowMOroGqgAAAAASUVORK5CYII="), move;
}
.mbr-wowslider-container--elegant .mbr-wowslider.ws_gestures.ws_grabbing {
	cursor: -webkit-grabbing;
	cursor: -moz-grabbing;
	cursor: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAABaSURBVEjH7ZMxCkAhDEOT8u9/5TpJ+xWkFse8IYutJgEB8RCHL1qCc90BEFnT6QH7mwgFHBUf8wJyS1TDLuc3vmighx37LZdIth3E5hKj9n6O0HRh+oJCiFcMxRUUDxR1CTMAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTQtMDctMDdUMTM6NDk6MzgrMDI6MDDqf+sOAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE0LTA3LTA3VDEzOjQ5OjM4KzAyOjAwmyJTsgAAAABJRU5ErkJggg=="), move;
}

/* hide controls when video start play */
.mbr-wowslider-container--elegant .mbr-wowslider.ws_video_playing .ws_bullets,
.mbr-wowslider-container--elegant .mbr-wowslider.ws_video_playing .ws_fullscreen,
.mbr-wowslider-container--elegant .mbr-wowslider.ws_video_playing .ws_next,
.mbr-wowslider-container--elegant .mbr-wowslider.ws_video_playing .ws_prev {
	display: none;
}


/* youtube/vimeo buttons */
.mbr-wowslider-container--elegant .mbr-wowslider .ws_video_btn {
	position: absolute;
	display: none;
	cursor: pointer;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 55;
}
.mbr-wowslider-container--elegant .mbr-wowslider .ws_video_btn.ws_youtube,
.mbr-wowslider-container--elegant .mbr-wowslider .ws_video_btn.ws_vimeo {
	display: block;
}
.mbr-wowslider-container--elegant .mbr-wowslider .ws_video_btn div {
	position: absolute;
	background-image: url(../images/playvideo.png);
	background-size: 200%;
	top: 50%;
	left: 50%;
	width: 7em;
	height: 5em;
	margin-left: -3.5em;
	margin-top: -2.5em;
}
.mbr-wowslider-container--elegant .mbr-wowslider .ws_video_btn.ws_youtube div {
	background-position: 0 0;
}
.mbr-wowslider-container--elegant .mbr-wowslider .ws_video_btn.ws_youtube:hover div {
	background-position: 100% 0;
}
.mbr-wowslider-container--elegant .mbr-wowslider .ws_video_btn.ws_vimeo div {
	background-position: 0 100%;
}
.mbr-wowslider-container--elegant .mbr-wowslider .ws_video_btn.ws_vimeo:hover div {
	background-position: 100% 100%;
}

.mbr-wowslider-container--elegant .mbr-wowslider .ws_playpause.ws_hide {
	display: none !important;
}
.mbr-wowslider-container--elegant .mbr-wowslider  .ws_bullets { 
	padding: 10px; 
}
.mbr-wowslider-container--elegant .mbr-wowslider .ws_bullets a { 
	margin-left:6px;
	width:13px;
	height:13px;
	background: url(../images/bullet.png) left top;
	float: left; 
	text-indent: -4000px; 
	position:relative;
	color:transparent;
}
.mbr-wowslider-container--elegant .mbr-wowslider .ws_bullets a.ws_selbull, .mbr-wowslider-container--elegant .mbr-wowslider .ws_bullets a:hover{
	background-position: 0 100%;
}
.mbr-wowslider-container--elegant .mbr-wowslider a.ws_next, .mbr-wowslider-container--elegant .mbr-wowslider a.ws_prev {
	position:absolute;
	top:50%;
	margin-top:-2.1em;
	z-index:60;
	height: 3.2em;
	width: 3.2em;
	background-image: url(../images/arrows.png);
	background-size: 200%;
}
.mbr-wowslider-container--elegant .mbr-wowslider a.ws_next{
	background-position: 100% 0;
	right:0.5em;
}
.mbr-wowslider-container--elegant .mbr-wowslider a.ws_prev {
	left:0.5px;
	background-position: 0 0; 
}
.mbr-wowslider-container--elegant .mbr-wowslider a.ws_next:hover{
	background-position: 100% 100%;
}
.mbr-wowslider-container--elegant .mbr-wowslider a.ws_prev:hover {
	background-position: 0 100%; 
}

/*playpause*/
.mbr-wowslider-container--elegant .mbr-wowslider .ws_playpause {
    width: 3.2em;
    height: 3.2em;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -1.6em;
    margin-top: -1.6em;
    z-index: 59;
	background-size: 100%;
}

.mbr-wowslider-container--elegant .mbr-wowslider .ws_pause {
    background-image: url(../images/pause.png);
}

.mbr-wowslider-container--elegant .mbr-wowslider .ws_play {
    background-image: url(../images/play.png);
}

.mbr-wowslider-container--elegant .mbr-wowslider .ws_pause:hover, .mbr-wowslider-container--elegant .mbr-wowslider .ws_play:hover {
    background-position: 100% 100% !important;
}/* bottom center */
.mbr-wowslider-container--elegant .mbr-wowslider  .ws_bullets {
	bottom:-5px;
	left:50%;
}
.mbr-wowslider-container--elegant .mbr-wowslider  .ws_bullets div{
	left:-50%;
}
/* separate */
.mbr-wowslider-container--elegant .mbr-wowslider .ws-title{
	position: absolute;
	display:block; 
    font: 2.5em 'Source Sans Pro', Arial, sans-serif;
	bottom:1.1em;
	left:0;
	margin-right:0.1em;
	z-index: 50;
	color: #fff;	
	line-height: 1em;

}
.mbr-wowslider-container--elegant .mbr-wowslider .ws-title div,.mbr-wowslider-container--elegant .mbr-wowslider .ws-title span{ 
	display:inline-block; 
	margin-top:0.5em;
	background:#3399FF;
	font-weight: normal;	
	border-radius:0;
	opacity:0.8;
	filter:progid:DXImageTransform.Microsoft.Alpha(opacity=90);	

}
.mbr-wowslider-container--elegant .mbr-wowslider .ws-title div{ 
	display:block;
	margin-top:0.5em; 
	font-size: 0.72em;
	background:#fff;	
	color: #3399FF;
	padding:0.5em;
	line-height: 1.28em;
}
.mbr-wowslider-container--elegant .mbr-wowslider .ws-title span{
	padding:0.4em;
}.mbr-wowslider-container--elegant .mbr-wowslider .ws_images > ul{
	animation: wsBasic 16s infinite;
	-moz-animation: wsBasic 16s infinite;
	-webkit-animation: wsBasic 16s infinite;
}
@keyframes wsBasic{0%{left:-0%} 12.5%{left:-0%} 25%{left:-100%} 37.5%{left:-100%} 50%{left:-200%} 62.5%{left:-200%} 75%{left:-300%} 87.5%{left:-300%} }
@-moz-keyframes wsBasic{0%{left:-0%} 12.5%{left:-0%} 25%{left:-100%} 37.5%{left:-100%} 50%{left:-200%} 62.5%{left:-200%} 75%{left:-300%} 87.5%{left:-300%} }
@-webkit-keyframes wsBasic{0%{left:-0%} 12.5%{left:-0%} 25%{left:-100%} 37.5%{left:-100%} 50%{left:-200%} 62.5%{left:-200%} 75%{left:-300%} 87.5%{left:-300%} }

.mbr-wowslider-container--elegant .mbr-wowslider .ws_bullets  a img{
	text-indent:0;
	display:block;
	bottom:20px;
	left:-43px;
	visibility:hidden;
	position:absolute;
    border: 1px solid #FFFFFF;
	max-width:none;
}
.mbr-wowslider-container--elegant .mbr-wowslider .ws_bullets a:hover img{
	visibility:visible;
}

.mbr-wowslider-container--elegant .mbr-wowslider .ws_bulframe div div{
	height:48px;
	overflow:visible;
	position:relative;
}
.mbr-wowslider-container--elegant .mbr-wowslider .ws_bulframe div {
	left:0;
	overflow:hidden;
	position:relative;
	width:85px;
	background-color:#FFFFFF;
}
.mbr-wowslider-container--elegant .mbr-wowslider  .ws_bullets .ws_bulframe{
	display:none;
	bottom:20px;
	overflow:visible;
	position:absolute;
	cursor:pointer;
    border: 1px solid #FFFFFF;
}
.mbr-wowslider-container--elegant .mbr-wowslider .ws_bulframe span{
	display:block;
	position:absolute;
	bottom:-8px;
	margin-left:-1px;
	left:43px;
	background:url(../images/triangle.png);
	width:13px;
	height:7px;
}.mbr-wowslider-container--elegant .mbr-wowslider .ws_bulframe div div{
	height: auto;
}

@media all and (max-width:760px) {
	.mbr-wowslider-container--elegant .mbr-wowslider .ws_fullscreen {
		display: block;
	}
}
@media all and (max-width:400px){
	.mbr-wowslider-container--elegant .mbr-wowslider .ws_controls,
	.mbr-wowslider-container--elegant .mbr-wowslider .ws_bullets,
	.mbr-wowslider-container--elegant .mbr-wowslider .ws_thumbs{
		display: none
	}
}
    </style>
    <style>
    section {
  background-color: #eeeeee;
}

section,
.container,
.container-fluid {
  position: relative;
  word-wrap: break-word;
}

.form-control:focus {
  box-shadow: none;
}

:focus {
  outline: none;
}

a.mbr-iconfont:hover {
  text-decoration: none;
}

.article .lead p,
.article .lead ul,
.article .lead ol,
.article .lead pre,
.article .lead blockquote {
  margin-bottom: 0;
}

a {
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
}

a, a:hover {
  text-decoration: none;
}

figure {
  margin-bottom: 0;
}

body {
  color: #232323;
}

h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
.display-1,
.display-2,
.display-3,
.display-4 {
  line-height: 1;
  word-break: break-word;
  word-wrap: break-word;
}

b,
strong {
  font-weight: bold;
}

blockquote {
  padding: 10px 0 10px 20px;
  position: relative;
  border-left: 2px solid;
  border-color: #ff3366;
}

input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active {
  transition-delay: 9999s;
  transition-property: background-color, color;
}

textarea[type="hidden"] {
  display: none;
}

body {
  position: relative;
}

section {
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
}

section .mbr-background-video,
section .mbr-background-video-preview {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
}

.hidden {
  visibility: hidden;
}

.mbr-z-index20 {
  z-index: 20;
}

/*! Base colors */
.mbr-white {
  color: #ffffff;
}

.mbr-black {
  color: #000000;
}

.mbr-bg-white {
  background-color: #ffffff;
}

.mbr-bg-black {
  background-color: #000000;
}

/*! Text-aligns */
.align-left {
  text-align: left;
}

.align-center {
  text-align: center;
}

.align-right {
  text-align: right;
}

@media (max-width: 767px) {
  .align-left,
  .align-center,
  .align-right,
  .mbr-section-btn,
  .mbr-section-title {
    text-align: center;
  }
}

/*! Font-weight  */
.mbr-light {
  font-weight: 300;
}

.mbr-regular {
  font-weight: 400;
}

.mbr-semibold {
  font-weight: 500;
}

.mbr-bold {
  font-weight: 700;
}

/*! Media  */
.media-size-item {
  -moz-flex: 1 1 auto;
  -o-flex: 1 1 auto;
  flex: 1 1 auto;
}

.media-content {
  flex-basis: 100%;
}

.media-container-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: start;
}

.media-container-row .media-size-item {
  width: 400px;
}

.media-container-column {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: stretch;
}

.media-container-column > * {
  width: 100%;
}

@media (min-width: 992px) {
  .media-container-row {
    flex-wrap: nowrap;
  }
}

figure {
  overflow: hidden;
}

figure[mbr-media-size] {
  transition: width 0.1s;
}

.mbr-figure img,
.mbr-figure iframe {
  display: block;
  width: 100%;
}

.card {
  background-color: transparent;
  border: none;
}

.card-img {
  text-align: center;
  flex-shrink: 0;
  -webkit-flex-shrink: 0;
}

.media {
  max-width: 100%;
  margin: 0 auto;
}

.mbr-figure {
  -ms-grid-row-align: center;
  align-self: center;
}

.media-container > div {
  max-width: 100%;
}

.mbr-figure img,
.card-img img {
  width: 100%;
}

@media (max-width: 991px) {
  .media-size-item {
    width: auto !important;
  }
  .media {
    width: auto;
  }
  .mbr-figure {
    width: 100% !important;
  }
}

/*! Buttons */
.mbr-section-btn {
  margin-left: -.25rem;
  margin-right: -.25rem;
  font-size: 0;
}

nav .mbr-section-btn {
  margin-left: 0rem;
  margin-right: 0rem;
}

/*! Btn icon margin */
.btn .mbr-iconfont,
.btn.btn-sm .mbr-iconfont {
  cursor: pointer;
  margin-right: 0.5rem;
}

.btn.btn-md .mbr-iconfont,
.btn.btn-md .mbr-iconfont {
  margin-right: 0.8rem;
}

.mbr-regular {
  font-weight: 400;
}

.mbr-semibold {
  font-weight: 500;
}

.mbr-bold {
  font-weight: 700;
}

[type="submit"] {
  -webkit-appearance: none;
}

/*! Full-screen */
.mbr-fullscreen .mbr-overlay {
  min-height: 100vh;
}

.mbr-fullscreen {
  display: flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  align-items: center;
  -webkit-align-items: center;
  min-height: 100vh;
  padding-top: 3rem;
  padding-bottom: 3rem;
}

/*! Map */
.map {
  height: 25rem;
  position: relative;
}

.map iframe {
  width: 100%;
  height: 100%;
}

/* Form */
.form-asterisk {
  font-family: initial;
  position: absolute;
  top: -2px;
  font-weight: normal;
}

/*! Scroll to top arrow */
.mbr-arrow-up {
  bottom: 25px;
  right: 90px;
  position: fixed;
  text-align: right;
  z-index: 5000;
  color: #ffffff;
  font-size: 32px;
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
}

.mbr-arrow-up a {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  color: #fff;
  display: inline-block;
  height: 60px;
  width: 60px;
  outline-style: none !important;
  position: relative;
  text-decoration: none;
  transition: all .3s ease-in-out;
  cursor: pointer;
  text-align: center;
}

.mbr-arrow-up a:hover {
  background-color: rgba(0, 0, 0, 0.4);
}

.mbr-arrow-up a i {
  line-height: 60px;
}

.mbr-arrow-up-icon {
  display: block;
  color: #fff;
}

.mbr-arrow-up-icon::before {
  content: "\\203a";
  display: inline-block;
  font-family: serif;
  font-size: 32px;
  line-height: 1;
  font-style: normal;
  position: relative;
  top: 6px;
  left: -4px;
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
}

/*! Arrow Down */
.mbr-arrow {
  position: absolute;
  bottom: 45px;
  left: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
  background-color: rgba(80, 80, 80, 0.5);
  border-radius: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}

.mbr-arrow > a {
  display: inline-block;
  text-decoration: none;
  outline-style: none;
  -webkit-animation: arrowdown 1.7s ease-in-out infinite;
  animation: arrowdown 1.7s ease-in-out infinite;
}

.mbr-arrow > a > i {
  position: absolute;
  top: -2px;
  left: 15px;
  font-size: 2rem;
}

@keyframes arrowdown {
  0% {
    transform: translateY(0px);
    -webkit-transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
    -webkit-transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
    -webkit-transform: translateY(0px);
  }
}

@-webkit-keyframes arrowdown {
  0% {
    transform: translateY(0px);
    -webkit-transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
    -webkit-transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
    -webkit-transform: translateY(0px);
  }
}

@media (max-width: 500px) {
  .mbr-arrow-up {
    left: 50%;
    right: auto;
    transform: translateX(-50%) rotate(180deg);
    -webkit-transform: translateX(-50%) rotate(180deg);
  }
}

/*Gradients animation

use with:

background: linear-gradient(0deg, #2e3192, #1bffff);
background-size: 200% 200%;
animation: gradient-animation 4s infinite alternate;
-webkit-animation: gradient-animation 4s infinite alternate;
    */
@keyframes gradient-animation {
  from {
    background-position: 0% 100%;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
  to {
    background-position: 100% 0%;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
}

@-webkit-keyframes gradient-animation {
  from {
    background-position: 0% 100%;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
  to {
    background-position: 100% 0%;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
}

.bg-gradient {
  background-size: 200% 200%;
  animation: gradient-animation 5s infinite alternate;
  -webkit-animation: gradient-animation 5s infinite alternate;
}

.menu .navbar-brand {
  display: -webkit-flex;
}

.menu .navbar-brand span {
  display: flex;
  display: -webkit-flex;
}

.menu .navbar-brand .navbar-caption-wrap {
  display: -webkit-flex;
}

.menu .navbar-brand .navbar-logo img {
  display: -webkit-flex;
}

@media (max-width: 991px) {
  .menu .navbar-collapse {
    max-height: 94vh;
  }
  .menu .navbar-collapse.show {
    overflow: auto;
  }
}

@media (max-width: 767px) {
  .menu .navbar-collapse {
    max-height: 60vh;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .menu .navbar-toggleable-sm .navbar-nav {
    display: -ms-flexbox;
  }
}

@media (min-width: 992px) {
  .menu .navbar-nav.nav-dropdown {
    display: -webkit-flex;
  }
  .menu .navbar-toggleable-sm .navbar-collapse {
    display: -webkit-flex !important;
  }
  .menu .collapsed .navbar-collapse {
    max-height: 94vh;
  }
  .menu .collapsed .navbar-collapse.show {
    overflow: auto;
  }
}

.navbar {
  display: -webkit-flex;
  -webkit-flex-wrap: wrap;
  -webkit-align-items: center;
  -webkit-justify-content: space-between;
}

.navbar-collapse {
  -webkit-flex-basis: 100%;
  -webkit-flex-grow: 1;
  -webkit-align-items: center;
}

.nav-dropdown .link {
  padding: .667em 1.667em !important;
  margin: 0 !important;
}

.row {
  display: -webkit-flex;
  -webkit-flex-wrap: wrap;
}

.justify-content-center {
  -webkit-justify-content: center;
}

.card-wrapper {
  flex: 1;
  -webkit-flex: 1;
}

.form-group:focus {
  outline: none;
}

.jq-selectbox__select {
  padding: 1.07em .5em;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
}

.jq-selectbox__dropdown {
  position: absolute;
  top: 100%;
  left: 0 !important;
  width: 100% !important;
}

.jq-selectbox__trigger-arrow {
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
}

.jq-selectbox li {
  padding: 6px 12px;
}

input[type="range"] {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

.modal-dialog,
.modal-content {
  height: 100%;
}

.modal-dialog .carousel-inner {
  height: calc(100vh - 1.75rem);
}

@media (max-width: 575px) {
  .modal-dialog .carousel-inner {
    height: calc(100vh - 1rem);
  }
}

.carousel-item {
  text-align: center;
}

.carousel-item img {
  margin: auto;
}

body {
  font-style: normal;
  line-height: 1.5;
}

.mbr-section-title {
  font-style: normal;
  line-height: 1.2;
}

.mbr-section-subtitle {
  line-height: 1.3;
}

.mbr-text {
  font-style: normal;
  line-height: 1.6;
}

.btn {
  color: initial;
  border-radius: 0;
  font-weight: 600;
  border-width: 2px;
  font-style: normal;
  letter-spacing: 2px;
  margin: .4rem .8rem;
  white-space: normal;
  transition: all .3s ease-in-out;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  word-break: break-word;
}

.btn-sm {
  font-weight: 600;
  letter-spacing: 2px;
  transition: all .3s ease-in-out;
}

.btn-md {
  font-weight: 600;
  letter-spacing: 2px;
  margin: .4rem .8rem !important;
  transition: all .3s ease-in-out;
}

.btn-lg {
  font-weight: 600;
  letter-spacing: 2px;
  margin: .4rem .8rem !important;
  transition: all .3s ease-in-out;
}

@media (max-width: 767px) {
  .btn {
    font-size: .75rem !important;
  }
  .btn .mbr-iconfont {
    font-size: 1rem !important;
  }
}

#scrollToTop a {
  opacity: .5;
}

#scrollToTop a:hover {
  opacity: .7;
}

#scrollToTop a i:before {
  content: '';
  position: absolute;
  height: 40%;
  top: 25%;
  width: 2px;
  left: calc(50% - 1px);
}

#scrollToTop a i:after {
  content: '';
  position: absolute;
  display: block;
  width: 40%;
  height: 40%;
  left: 30%;
  bottom: 30%;
  -webkit-transform: rotate(135deg);
  transform: rotate(135deg);
}

/* Others*/
.note-check a[data-value=Rubik] {
  font-style: normal;
}

.mbr-arrow {
  opacity: .5;
  transition: .3s;
}

.mbr-arrow:hover {
  opacity: .7;
}

@media (max-width: 767px) {
  .mbr-arrow {
    display: none;
  }
}

.form-control-label {
  position: relative;
  cursor: pointer;
  margin-bottom: .357em;
  padding: 0;
}

.alert {
  color: #ffffff; 
  border-radius: 0;
  border: 0;
  font-size: .875rem;
  line-height: 1.5;
  margin-bottom: 1.875rem;
  padding: 1.25rem;
  position: relative;
}

.alert.alert-form::after {
  background-color: inherit;
  bottom: -7px;
  content: "";
  display: block;
  height: 14px;
  left: 50%;
  margin-left: -7px;
  position: absolute;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  width: 14px;
}

.form-control {
  background-color: #ffffff;
  box-shadow: none;
  color: #565656;
  line-height: 1.43;
  min-height: 2.5em;
  padding: 1.07em .5em;
}

.form-control, .form-control:focus {
  border: 1px solid #e8e8e8;
}

.form-active .form-control:invalid {
  border-color: red;
}

.mbr-overlay {
  background-color: #000;
  bottom: 0;
  left: 0;
  opacity: .5;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 0;
}

blockquote {
  font-style: italic;
  padding: 10px 0 10px 20px;
  font-size: 1.09rem;
  position: relative;
  border-width: 3px;
}

ul,
ol,
pre,
blockquote {
  margin-bottom: 2.3125rem;
}

pre {
  background: #f4f4f4;
  padding: 10px 24px;
  white-space: pre-wrap;
}

.inactive {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  pointer-events: none;
  -webkit-user-drag: none;
  user-drag: none;
}

.mbr-section__comments .row {
  justify-content: center;
}

.carousel-item.active,
.carousel-item-next,
.carousel-item-prev {
  display: flex;
}

.note-air-layout .dropup .dropdown-menu,
.note-air-layout .navbar-fixed-bottom .dropdown .dropdown-menu {
  bottom: initial !important;
}

html,
body {
  height: auto;
  min-height: 100vh;
}

.dropup .dropdown-toggle::after {
  display: none;
}
.engine {
	position: absolute;
	text-indent: -2400px;
	text-align: center;
	padding: 0;
	top: 0;
	left: -2400px;
}
    </style>
    <style>
    *,:after,:before{box-sizing:border-box;border:0 solid #e5e7eb}:after,:before{--tw-content:""}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.visible{visibility:visible}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.m-auto{margin:auto}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.table{display:table}.grid{display:grid}.hidden{display:none}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.resize{resize:both}.border{border-width:1px}.italic{font-style:italic}.underline{text-decoration-line:underline}.line-through{text-decoration-line:line-through}.outline{outline-style:solid}.blur{--tw-blur:blur(8px)}.blur,.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.anticon{&.anticon-delete{color:#aea59b!important}}.white{&.anticon{&.anticon-delete{color:#fff!important}}.ant-select-item{color:#fff!important}}.brownBackground{background-color:#372e30!important;border:none!important;color:#fff!important;.ant-select-selector{background-color:#372e30!important;border:none!important;color:#fff!important}.ant-select-selection-item{color:#fff!important;padding:0!important}.ant-select-arrow{display:none!important}&.ant-btn{background-color:#372e30!important;box-shadow:none!important}&.ant-btn,&.ant-btn:hover{border:none!important;color:#fff!important}&.ant-btn:hover{background-color:#4a3f41!important;box-shadow:2px 4px 4px rgba(0,0,0,.25)!important}input{color:#fff!important}}.noHighlight{.ant-select-item-option-selected{background-color:#372e30!important}}.noPadding{.ant-modal-content,.ant-select-selector{padding:0!important}}.hideDisabled{.ant-picker-time-panel-cell-disabled{display:none!important}}.transparentBg{background-color:transparent!important}.solidBtn{background-color:darkred!important;color:#fff!important;font-weight:600!important;outline:none!important;border-color:darkred!important;height:fit-content!important;&.grey{background-color:#bdbdbd;border-color:#bdbdbd;color:#000}&.green{background-color:#267f80;border-color:#267f80;color:#fff}&.blue{background-color:#5067df!important;border-color:#5067df!important;color:#fff!important}}.solidBtn:disabled{background-color:#e1e1e1!important;border-color:#e1e1e1!important;color:rgba(0,0,0,.25)!important}.solidBtn:not(:disabled):hover{background-color:#b62b2b!important;border-color:#b62b2b!important;color:#fff!important}.solidBtn.grey:not(:disabled):hover{background-color:#a8a8a8!important;border-color:#a8a8a8!important;color:#000!important}.solidBtn.green:not(:disabled):hover{background-color:#2d9fa1!important;border-color:#2d9fa1!important;color:#fff!important}.solidBtn.blue:not(:disabled):hover{background-color:#647bf3!important;border-color:#647bf3!important;color:#fff!important}.borderBtn{border:.15rem solid darkred!important;background-color:transparent!important;color:darkred!important;font-weight:600!important;height:fit-content!important;&.blue{border-color:#5067df!important;color:#5067df!important}&.grey{border-color:#bdbdbd!important;color:#bdbdbd!important}&.darkgrey{border-color:#767676!important;color:#767676!important}}.borderBtn:disabled{background-color:#e1e1e1!important;border-color:#e1e1e1!important;color:rgba(0,0,0,.25)!important}.borderBtn:not(:disabled):hover{border-color:#b62b2b!important;color:#b62b2b!important}.borderBtn.blue:not(:disabled):hover{border-color:#647bf3!important;color:#647bf3!important;background-color:#fff!important}.borderBtn.grey:not(:disabled):hover{border-color:#cfcfcf!important;color:#cfcfcf!important;background-color:#fff!important}.borderBtn.darkgrey:not(:disabled):hover{border-color:#999!important;color:#999!important;background-color:#fff!important}.overflow-visible{.slick-list{overflow:visible!important}}.bookingDatePicker{.ant-picker-input{input{font-size:16px!important;font-weight:600!important}}}.alignLeft{.ant-select-selection-item,.ant-select-selection-search{align-items:flex-start!important;display:flex!important}}
        .root {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: auto;
            height: fit-content;
        }
        .next-root {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: fit-content;
        }
        #wowslider-7 .mbr-wowslider.boxed {
            max-width: 500px !important;
        }
        .mbr-wowslider-container--elegant .mbr-wowslider .ws_images {
        max-height: 375px !important;
        }
        .root-container {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            width: 100%;
            max-width: 500px;
            height: fit-content;
            overflow: hidden;
        }
        #story {
            background-color: ${config.storySectionColor};
            color: ${config.storySectionTextColor};
        }
         .story-section-title-color {
            color: ${config.storySectionTitleColor};
         }
    </style>
</head>

<body><!--$-->
    <div class="root">
        <div class="root-container">
            <div class="WebPage-ROOT" id="ROOT">
                <div class="Pagnation-5ukyccm-T4" id="5ukyccm-T4">
                    <div id="Page-u7ZlrU8_9e" class="Page-u7ZlrU8_9e">
                        <div class="D8-JIf1V5m" id="D8-JIf1V5m">
                            <div id="ky52cFH6m7" class="Container-ky52cFH6m7">
                                <div class="div-wpGq93PEW-" id="wpGq93PEW-">
                                    <div>

                                        <img id="xpU7UGXY04"
                                            src=${config.logoPreview}
                                            alt="image" class="logo-xpU7UGXY04">
                                    </div>
                                </div>
                              ${config.showNavbarButton ? ` <button id="xt-wallet" class="Button-navbar LzAysOOrVk" >
                                    <div id="P1_hvQIFrP" class="Container-P1_hvQIFrP">
                                        <div id="-i_o19aYCj" class="arial Text--i_o19aYCj">${config.useXtWallet ? `xtWallet` : `聯絡商家`}</div>
                                    </div>
                                   
                                </button>
                                <div style="display: none;" id="profile-dropdown">
                                </div>` : `<button style="opacity: 0;" id="xt-wallet" class="Button-navbar-disable LzAysOOrVk" disabled>
                                    <div id="P1_hvQIFrP" class="Container-P1_hvQIFrP">
                                        <div id="-i_o19aYCj" class="arial Text--i_o19aYCj">立刻預約</div>
                                    </div>
                                   
                                </button>`}
                            </div>
                        </div>
                        <div class="cover-section" id="h9ZBVxSQWf-hidden">
                            <div id="YeyccoTVCP-hidden" class="Container-YeyccoTVCP-hidden">
                                <div class="div-pvaJz1GlFM" id="pvaJz1GlFM">
                                    <div><img id="MdmBCjHatO" src="images/special-offer-simple-edited.jpg"
                                            alt="image" class="Image-MdmBCjHatO"></div>
                                </div>
                            </div>
                        </div>
                        <div class="cover-section02" id="4wwpXWxUd2">
                            <div id="uMsxkfrobv" class="__className_cfd7f1 Text-uMsxkfrobv">${config.subheading.split('\n').join('<br class="Br-uMsxkfrobv">')}
                            </div>
                        </div>
                        <!-- <discount or special offer info> -->
                        <div id="0DGdGjdJJU" class="special-offer-section-0DGdGjdJJU">
                            <div id="N3OF6zdDDw" class="__className_cfd7f1 Text-N3OF6zdDDw"><b>限時優惠</b></div>
                            <!--$!--><template data-dgst="BAILOUT_TO_CLIENT_SIDE_RENDERING"></template><!--/$-->
                            <!-- count down timer -->
                            <div class="count-down-timer-container" id="pBfJzKR9z_">
                                <div class="timer-number days" id="days">
                                    00</div>
                                <div class="timer-unit" id="days-unit">
                                    天
                                </div>
                                <div class="timer-number hours" id="hours">
                                    00
                                </div>
                                <div class="timer-unit hours-unit" id="hours-unit">
                                    時
                                </div>
                                <div class="timer-number minutes" id="minutes">
                                    00
                                </div>
                                <div class="timer-unit minutes-unit" id="minutes-unit">
                                    分
                                </div>
                                <div class="timer-number seconds" id="seconds">
                                    00
                                </div>
                                <div class="timer-unit seconds-unit" id="seconds-unit">
                                    秒
                                </div>
                            </div>
                            <!-- terms and the order buttons -->
                            <div id="M2drNN9crj" class="Container-M2drNN9crj">
                                <div id="iG4Iz-3tgL" class="iG4Iz-3tgL">
                                    <div class="Container-iG4Iz-3tgL">
                                        <div id="fKPPwi-3LU" class="Container-fKPPwi-3LU">
                                            <div id="0aOTK66Bwf" class="Container-0aOTK66Bwf">
                                                <div id="BnkZsXBwiL" class="Container-BnkZsXBwiL"></div>
                                            </div>
                                            <div class="Container-2h6Rp2N6dK"><img id="2h6Rp2N6dK"
                                                    src="${config.specialOfferPreview}" alt="image"
                                                    class="Image-2h6Rp2N6dK"></div>
                                            <div id="N3OF6zdDDw" class="__className_cfd7f1 Text-N3OF6zdDDw"><div><b>${defaultCouponType[config.specialOfferType]}</b></div>
                                            <div id="vjVGeFGLP5" class="Container-vjVGeFGLP5">
                                                <div id="Y7fpaobUoy" class="arial Text-Y7fpaobUoy">${config.term}
                                                </div>
                                            </div>
                                            <!-- 換領 button -->
                                            <!-- <button id="cmxv7Zgc63"
                                                style="id:AddToCartButton;color:#000000;width:100%;height:fit-content;margin:0px;padding:0px;font-size:16;font-style:normal;margin-top:0px;font-weight:normal;margin-left:0px;padding-top:0px;border-color:#000000;border-style:none;border-width:1px;margin-right:0px;padding-left:0px;border-radius:30px;margin-bottom:0px;padding-right:0px;padding-bottom:0px;text-decoration:none;background-color:#f1cb75;display:flex;flex-direction:row;cursor:pointer;opacity:1"
                                                class="Button-3600.6330313619305">
                                                <div id="WLVLGEhZtw"
                                                    style="gap:0px;top:0px;left:0px;width:100%;height:100%;margin:0px;display:flex;padding:0;position:relative;margin-top:5px;transform:none;align-items:flex-start;margin-left:0px;padding-top:5px;border-color:black;border-style:none;border-width:1px;margin-right:0px;padding-left:10px;border-radius:0px;margin-bottom:5px;padding-right:10px;flex-direction:row;padding-bottom:5px;justify-content:center;min-height:fit-content;max-height:100%;background-image:linear-gradient(rgba(64, 64, 64, 0), rgba(64, 64, 64, 0)), url();background-size:cover;background-position:center"
                                                    class="Container-WLVLGEhZtw">
                                                    <div id="sEcN0_Rjg8"
                                                        style="color:#000000;margin:0;font-size:16;margin-top:0;text-align:left;font-family:'Noto Sans TC';margin-left:0;margin-right:0;margin-bottom:0;on-click-functions-metadata:;display:flex;flex-direction:column;opacity:1"
                                                        class="__className_cfd7f1 Text-sEcN0_Rjg8"><span
                                                            style="font-size:18px;font-weight:700">點擊換領！</span></div>
                                                </div>
                                            </button> -->
                                            ${config.showOrderForm ? `<button id="toggleForm" class="toggle-btn">點擊換領！</button>` : ``}
                                        </div>
                                    </div>
                                </div>
                                <!-- <div xAT8OJOcow is deleted > -->
                            </div>

                        </div>
                    </div>
                </div>
                <!-- form section  -->
                ${config.showOrderForm ? ` <div id="OmpSotIOMQ" class="Page-OmpSotIOMQ">
                    <div id="formContainer" class="form-container hidden">
                        <h1>送貨地址</h1>
                        <form id="orderForm" novalidate>
                            <div class="form-group">
                                <label class="required">姓名</label>
                                <input type="text" id="name" required>
                                <span class="error-message"></span>
                            </div>

                            <div class="form-group">
                                <label class="required">地址(第一行)</label>
                                <input type="text" id="address1" required>
                                <span class="error-message"></span>
                            </div>

                            <div class="form-group">
                                <label>地址(第二行)</label>
                                <input type="text" id="address2">
                                <span class="error-message"></span>
                            </div>

                            <div class="form-group">
                                <label class="required">城市</label>
                                <input type="text" id="city" required>
                                <span class="error-message"></span>
                            </div>

                            <div class="form-group">
                                <label>省分/州</label>
                                <input type="text" id="state">
                                <span class="error-message"></span>
                            </div>

                            <div class="form-group">
                                <label class="required">郵遞區號</label>
                                <input type="text" id="zipcode" required>
                                <span class="error-message"></span>
                            </div>

                            <div class="form-group">
                                <label class="required">國家/地區</label>
                                <select id="country" required>
                                    <option value="">請選擇國家/地區</option>
                                    <option value="HK">香港</option>
                                    <option value="TW">台灣</option>
                                    <option value="CN">中國</option>
                                </select>
                                <span class="error-message"></span>
                            </div>

                            <div class="form-group">
                                <label>聯絡方式</label>
                                <div class="phone-input">
                                    <select id="phonePrefix" class="phone-prefix">
                                        <option value="+852">香港(+852)</option>
                                        <option value="+886">台灣(+886)</option>
                                        <option value="+86">中國(+86)</option>
                                    </select>
                                    <input type="tel" id="phone" placeholder="電話號碼">
                                </div>
                                <span class="error-message"></span>
                            </div>

                            <div class="form-group">
                                <label class="required">電郵地址</label>
                                <input type="email" id="email" required>
                                <span class="error-message"></span>
                            </div>
                            <button type="submit" class="checkout-btn" disabled>立即結帳</button>
                        </form>
                    </div>
                </div>`: ``}
               
                ${config.showSearch ?
                `<div class="container-search">


                    <form id="bookingForm">
                        <div class="form-group">
                            <select class="form-control" name="branch" required>
                                <option value="">分店*</option>
                                ${config.bookingFormConfig.branches.map((obj) => { return `<option value="${obj.id}">${obj.name}</option>` }).join("\n")}
                            </select>
                        </div>

                        <div class="form-group">
                            <select class="form-control" name="people" required>
                                    ${peopleOptions.map((obj) => { return `<option value="${obj}">${obj}人</option>` }).join("\n")}
                            </select>
                        </div>

                      <div class="form-group">
                          <input type="text" class="form-control" name="name" required placeholder="名稱*">
                      </div>
                    
                      <div class="form-group">
                         <input type="tel" class="form-control" name="phone" required placeholder="電話*">
                      </div>

                      <div class="form-group">
                            <input type="date" class="form-control" name="date" required placeholder="日期*">
                      </div>

                      <!-- <div class="form-group">
                        <input type="time" class="form-control" name="time" id="timeSelect" required placeholder="時間*" >
                    </div>
                     -->
                       <div class="form-group">
                        <select class="form-control" name="time" id="timeSelect" required>
                            <option value="">時間*</option>
                        </select>
                    </div>

                        <button type="submit" class="search-btn">訂位</button>
                    </form>
                </div>` : ''}
                <!-- <footer section> -->
                <div id="5QMrkBl5dE" class="Footer-5QMrkBl5dE">
                    <div id="csfXwJ_ewQ" class="Container-csfXwJ_ewQ">
                    <div id="N3OF6zdDDw" class="__className_cfd7f1 Text-N3OF6zdDDw"><b>${config.storeName}</b></div>
                        <div id="mtvRnpC47m" class="Container-mtvRnpC47m"></div>
                        <div><img id="YqYibvc-dA" src="${config.imagePreview}" alt="image"
                                class="Image-YqYibvc-dA"></div>
                        <div class="details">
                            <div class="detail-item">
                                <span class="material-icons">place</span>
                                <div class="detail-content-address">
                                  
                                    ${config.addresses.map((obj) => { return `<a target="_blank" href="${obj.googleMapsUrl}"><p>${obj.name}</p></a>` }).join("\n")}
                                </div>
                            </div>
                            <div class="detail-item open-hours-info">
                                <span class="material-icons">schedule</span>
                                <div class="detail-content">
                                    <p class="open-status">營業中</p>
                                    <p class="open-status-quote">&nbsp;結束營業時間：18:00</p>
                                    <span class="material-icons dropdown">expand_more</span>
                                </div>
                            </div>

                            <div class="full-hours-list hidden">
                                <div class="detail-item">
                                    <span class="material-icons opacity-0">schedule</span>
                                    <div class="detail-content">
                                        <p>星期一  &nbsp;${config.storeHours.monday.isOpen ? (config.storeHours.monday.openTime + " – " + config.storeHours.monday.closeTime) : "Closed"}</p>

                                    </div>
                                </div>
                                <div class="detail-item">
                                    <span class="material-icons opacity-0">schedule</span>
                                    <div class="detail-content">
                                        <p>星期二 &nbsp;${config.storeHours.tuesday.isOpen ? (config.storeHours.tuesday.openTime + " – " + config.storeHours.tuesday.closeTime) : "Closed"}</p>

                                    </div>
                                </div>
                                <div class="detail-item">
                                    <span class="material-icons opacity-0">schedule</span>
                                    <div class="detail-content">
                                        <p>星期三 &nbsp;${config.storeHours.wednesday.isOpen ? (config.storeHours.wednesday.openTime + " – " + config.storeHours.wednesday.closeTime) : "Closed"}</p>

                                    </div>
                                </div>
                                <div class="detail-item">
                                    <span class="material-icons opacity-0">schedule</span>
                                    <div class="detail-content">
                                        <p>星期四 &nbsp;${config.storeHours.thursday.isOpen ? (config.storeHours.thursday.openTime + " – " + config.storeHours.thursday.closeTime) : "Closed"}</p>

                                    </div>
                                </div>
                                <div class="detail-item">
                                    <span class="material-icons opacity-0">schedule</span>
                                    <div class="detail-content">
                                        <p>星期五 &nbsp;${config.storeHours.friday.isOpen ? (config.storeHours.friday.openTime + " – " + config.storeHours.friday.closeTime) : "Closed"}</p>

                                    </div>
                                </div>
                                <div class="detail-item">
                                    <span class="material-icons opacity-0">schedule</span>
                                    <div class="detail-content">
                                        <p>星期六 &nbsp;${config.storeHours.saturday.isOpen ? (config.storeHours.saturday.openTime + " – " + config.storeHours.saturday.closeTime) : "Closed"}</p>

                                    </div>
                                </div>
                                <div class="detail-item">
                                    <span class="material-icons opacity-0">schedule</span>
                                    <div class="detail-content">
                                        <p>星期日 &nbsp;${config.storeHours.sunday.isOpen ? (config.storeHours.sunday.openTime + " – " + config.storeHours.sunday.closeTime) : "Closed"}</p>

                                    </div>
                                </div>

                            </div>

                            <div class="detail-item" href="${config.officalWebsite}">
                                <span class="material-icons">language</span>
                                <div class="detail-content">
                                    <a href="${config.officalWebsite}">${config.officalWebsite}</a>
                                </div>
                            </div>

                            <div class="detail-item" href="tel:${config.phone}">
                                <span class="material-icons">phone</span>
                                <div class="detail-content">
                                    <a href="tel:${config.phone}">${config.phone}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- old social-icons -->
                    <!-- <div id="RBmZ0o0RgA"
                        style="gap:0px;top:0px;left:0px;width:100%;height:18px;margin:0px;display:flex;padding:20px;position:relative;margin-top:0px;transform:none;align-items:start;margin-left:0px;padding-top:0px;border-color:black;border-style:none;border-width:1px;margin-right:0px;padding-left:20px;border-radius:0px;margin-bottom:0px;padding-right:20px;flex-direction:column;padding-bottom:0px;justify-content:center;min-height:fit-content;max-height:100%;background-image:linear-gradient(rgba(64, 64, 64, 0), rgba(64, 64, 64, 0)), url();background-size:cover;background-position:center"
                        class="Container-RBmZ0o0RgA"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                            viewBox="0 0 448 512" id="2EJjC_Vr7i" style="color:#000000;cursor:pointer;opacity:1"
                            height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                            </path>
                        </svg></div> -->
                    
                </div>

            </div>
        </div>
    </div>
</div>
   ${(config.galleryImages.length > 0 && config.showGallery) ? `<section class="mbr-wowslider-container mbr-section mbr-section__container carousel slide mbr-section-nopadding mbr-wowslider-container--elegant" data-ride="carousel" data-keyboard="false" data-wrap="true" data-interval="false" id="wowslider-7" data-rv-view="121" style="background-color: rgb(255,255,255);">
            <div class="mbr-wowslider" >
                <div class="ws_images">
                    <ul>
                       ${'<li><img src="' + config.galleryImages.map(obj => obj.preview).join('" alt="title 1" title="title 1"> text 1</li><li><img src="') + '" alt="title 1" title="title 1"> text 1</li>'}
                    </ul>
                </div>
            
                <div class="ws_shadow"></div>
                <div class="mbr-wowslider-options">
                    <div class="params" data-paddingbottom="0" data-anim-type="photo" data-theme="elegant" data-autoplay="true" data-paddingtop="0" data-fullscreen="true" data-showbullets="true" data-timeout="2" data-duration="1.5" data-height="480" data-width="640" data-responsive="1" data-="false" data-captionseffect="slide" data-hidecontrols="false"></div>
                </div>
        </div></section>`: ``}
               <div class="next-root">
            <div class="root-container">
                <div class="container-footer">
    <section id="story" class="py-5 mb-5 rounded-2xl">
        <div class="w-full px-4">
            <div class="text-center ">
                <h2 class="text-2xl font-bold mb-2 story-section-title-color">${config.storySectionTitle}</h2>
             
            </div>
             <div class="w-full lg:w-full order-1 lg:order-none">
                    <img src="${config.storyImagePreview}" alt="${config.storyImageAlt}" class="max-w-full h-auto mx-auto mb-2">
                </div>
            <div class="flex flex-col gap-8 items-center ">
               
                <div class="w-full lg:w-full">
                    <h3 class="text-2xl font-bold mb-4 story-section-title-color">${config.storySectionParagarph01}</h3>
                    <p class="story-section-text-color mb-6">${config.storySectionContent01}</p>
                    
                    <h3 class="text-2xl font-bold mb-4 story-section-title-color">${config.storySectionParagarph02}</h3>
                    <p class="story-section-text-color mb-6">${config.storySectionContent02}</p>
                    
                    <h3 class="text-2xl font-bold mb-4 story-section-title-color">${config.storySectionParagarph03}</h3>
                    <p class="story-section-text-color mb-6">${config.storySectionContent03}</p>
                </div>
            </div>
        </div>
    </section>


                    <div class="divider">
                        <!-- <div style="margin-bottom: 1rem;">fufuland</div> -->
                        <!-- <div style="margin-bottom: 0.5rem;">星期一至日</div>
                        <div style="margin-bottom: 0.5rem;">12:00 - 15:30</div>
                        <div style="margin-bottom: 1rem;">17:30 - 02:30</div> -->
                        <!-- <div style="margin-bottom: 1rem;">尖沙咀分店 銅鑼灣分店</div>
                     -->
                        <div class="social-icons">
                                      ${config.instagram ? `<a href="${config.instagram}" target="_blank"><svg href="${config.instagram}" class="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2">
                                <rect x="2" y="2" width="20" height="20" rx="5" />
                                <circle cx="12" cy="12" r="4" />
                                <circle cx="18" cy="6" r="1" />
                            </svg></a>` : ''}
                             ${config.facebook ? `<a href="${config.facebook}" target="_blank"><svg href="${config.facebook}" class="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                            </svg></a>` : ''}
                            ${config.threads ? `<a href="${config.threads}" target="_blank">  
                              <svg href="${config.threads}" class="social-icon" xmlns="http://www.w3.org/2000/svg"
                                shape-rendering="geometricPrecision" text-rendering="geometricPrecision"
                                image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
                                viewBox="0 0 439.999 511.429">
                                <path fill="${config.textColor}" fill-rule="nonzero"
                                    d="M342.382 237.037a175.843 175.843 0 00-6.707-3.045c-3.947-72.737-43.692-114.379-110.428-114.805-38.505-.256-72.972 15.445-94.454 48.041l36.702 25.178c15.265-23.159 39.221-28.097 56.864-28.097.203 0 .408 0 .61.003 21.973.139 38.555 6.528 49.287 18.987 7.81 9.071 13.034 21.606 15.62 37.425-19.482-3.312-40.552-4.329-63.077-3.039-63.449 3.656-104.24 40.661-101.5 92.081 1.39 26.083 14.384 48.522 36.586 63.18 18.773 12.391 42.95 18.451 68.078 17.08 33.183-1.819 59.214-14.48 77.376-37.631 13.793-17.579 22.516-40.362 26.368-69.068 15.814 9.543 27.535 22.103 34.007 37.2 11.007 25.665 11.648 67.84-22.764 102.222-30.15 30.121-66.392 43.151-121.164 43.554-60.757-.45-106.707-19.934-136.582-57.914-27.976-35.563-42.434-86.93-42.973-152.675.539-65.745 14.997-117.113 42.973-152.675 29.875-37.979 75.824-57.464 136.581-57.914 61.197.455 107.948 20.033 138.967 58.195 15.21 18.713 26.677 42.248 34.236 69.688l43.011-11.476c-9.163-33.775-23.581-62.881-43.203-87.017C357.031 25.59 298.872.519 223.935 0h-.3C148.851.518 91.343 25.683 52.709 74.794 18.331 118.498.598 179.308.002 255.534l-.002.18.002.18c.596 76.226 18.329 137.037 52.707 180.741 38.634 49.11 96.142 74.277 170.926 74.794h.3c66.487-.462 113.352-17.868 151.96-56.442 50.511-50.463 48.991-113.717 32.342-152.548-11.944-27.847-34.716-50.464-65.855-65.402zm-114.795 107.93c-27.809 1.566-56.7-10.917-58.124-37.652-1.056-19.823 14.108-41.942 59.83-44.577 5.237-.302 10.375-.45 15.422-.45 16.609 0 32.146 1.613 46.272 4.702-5.268 65.798-36.173 76.483-63.4 77.977z" />
                            </svg>  
                            </a>` : ''}
                               ${config.socialMediaX ? `<a href="${config.socialMediaX}" target="_blank">  
                                <svg href="${config.socialMediaX}" class="social-icon" xmlns="http://www.w3.org/2000/svg"
                                shape-rendering="geometricPrecision" text-rendering="geometricPrecision"
                                image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
                                viewBox="0 0 512 462.799">
                                <path fill="${config.textColor}" fill-rule="nonzero"
                                    d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z" />
                            </svg> 
                            </a>` : ''}
                             ${config.whatsapp ? `<a href="${config.whatsapp}" target="_blank">  
                            <svg href="${config.whatsapp}" class="social-icon" xmlns="http://www.w3.org/2000/svg"
                                shape-rendering="geometricPrecision" text-rendering="geometricPrecision"
                                image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
                                viewBox="0 0 510 512.459">
                                <path fill="${config.textColor}"
                                    d="M435.689 74.468C387.754 26.471 324 .025 256.071 0 116.098 0 2.18 113.906 2.131 253.916c-.024 44.758 11.677 88.445 33.898 126.946L0 512.459l134.617-35.311c37.087 20.238 78.85 30.891 121.345 30.903h.109c139.949 0 253.88-113.917 253.928-253.928.024-67.855-26.361-131.645-74.31-179.643v-.012zm-179.618 390.7h-.085c-37.868-.011-75.016-10.192-107.428-29.417l-7.707-4.577-79.886 20.953 21.32-77.889-5.017-7.987c-21.125-33.605-32.29-72.447-32.266-112.322.049-116.366 94.729-211.046 211.155-211.046 56.373.025 109.364 22.003 149.214 61.903 39.853 39.888 61.781 92.927 61.757 149.313-.05 116.377-94.728 211.058-211.057 211.058v.011zm115.768-158.067c-6.344-3.178-37.537-18.52-43.358-20.639-5.82-2.119-10.044-3.177-14.27 3.178-4.225 6.357-16.388 20.651-20.09 24.875-3.702 4.238-7.403 4.762-13.747 1.583-6.343-3.178-26.787-9.874-51.029-31.487-18.86-16.827-31.597-37.598-35.297-43.955-3.702-6.355-.39-9.789 2.775-12.943 2.849-2.848 6.344-7.414 9.522-11.116s4.225-6.355 6.343-10.581c2.12-4.238 1.06-7.937-.522-11.117-1.584-3.177-14.271-34.409-19.568-47.108-5.151-12.37-10.385-10.69-14.269-10.897-3.703-.183-7.927-.219-12.164-.219s-11.105 1.582-16.925 7.939c-5.82 6.354-22.209 21.709-22.209 52.927 0 31.22 22.733 61.405 25.911 65.642 3.177 4.237 44.745 68.318 108.389 95.812 15.135 6.538 26.957 10.446 36.175 13.368 15.196 4.834 29.027 4.153 39.96 2.52 12.19-1.825 37.54-15.353 42.824-30.172 5.283-14.818 5.283-27.529 3.701-30.172-1.582-2.641-5.819-4.237-12.163-7.414l.011-.024z" />
                            </svg>
                            </a>` : ''}
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
    <!--/$-->
 <script>
        const form = document.getElementById('orderForm');
        const submitButton = form.querySelector('button[type="submit"]');
        const toggleButton = document.getElementById('toggleForm');
        const formContainer = document.getElementById('formContainer');

        // Set initial state
        formContainer.classList.add('hidden');
        toggleButton.textContent = '顯示表單';

        // Toggle form visibility
        toggleButton.addEventListener('click', () => {
            formContainer.classList.toggle('hidden');
            toggleButton.textContent = formContainer.classList.contains('hidden') ? '顯示表單' : '隱藏表單';
        });

        // Validation rules
        const validationRules = {
            name: {
                pattern: /^[\\u4e00-\\u9fa5a-zA-Z\\s]{2,}$/,
                message: '請輸入有效的姓名（至少2個字符，不含數字和特殊符號）'
            },
            address1: {
                pattern: /.{5,}/,
                message: '請輸入有效的地址（至少5個字符）'
            },
            city: {
                pattern: /^[\\u4e00-\\u9fa5a-zA-Z\\s]{2,}$/,
                message: '請輸入有效的城市名稱'
            },
            zipcode: {
                pattern: /^[0-9a-zA-Z-]{4,}$/,
                message: '請輸入有效的郵遞區號'
            },
            email: {
                pattern: /^[^\\s@]+@[^\\s@]+\.[^\\s@]+$/,
                message: '請輸入有效的電子郵件地址'
            },
            phone: {
                pattern: /^[0-9]{8,}$/,
                message: '請輸入有效的電話號碼',
                optional: true
            }
        };

        // Validate single field
        function validateField(field) {
            const rule = validationRules[field.id];
            if (!rule) return true;
            console.log('field', field.getAttribute('id'));
            console.log('field.parentElement', field.parentElement);
            if (field.getAttribute('id') !== "phone" && field.getAttribute('id') !== "phonePrefix") {
                const errorElement = field.parentElement.querySelector('.error-message');

                console.log('errorElement', errorElement);
                let isValid = true;

                // Clear previous validation state
                field.classList.remove('valid', 'invalid');
                errorElement.textContent = '';

                // Skip validation if field is optional and empty
                if (rule.optional && !field.value) {
                    return true;
                }

                // Required field validation
                if (field.required && !field.value) {
                    isValid = false;
                    errorElement.textContent = '此欄位為必填';
                }
                // Pattern validation
                else if (field.value && !rule.pattern.test(field.value)) {
                    isValid = false;
                    errorElement.textContent = rule.message;
                }

                // Add validation state class
                field.classList.add(isValid ? 'valid' : 'invalid');
                return isValid;
            }
            else {
                const errorElement = field.parentElement.parentElement.querySelector('.error-message');

                console.log('errorElement', errorElement);
                let isValid = true;

                // Clear previous validation state
                field.classList.remove('valid', 'invalid');
                errorElement.textContent = '';

                // Skip validation if field is optional and empty
                if (rule.optional && !field.value) {
                    return true;
                }

                // Required field validation
                if (field.required && !field.value) {
                    isValid = false;
                    errorElement.textContent = '此欄位為必填';
                }
                // Pattern validation
                else if (field.value && !rule.pattern.test(field.value)) {
                    isValid = false;
                    errorElement.textContent = rule.message;
                }

                // Add validation state class
                field.classList.add(isValid ? 'valid' : 'invalid');
                return isValid;
            }
        }

        // Validate all fields and update submit button state
        function validateForm() {
            const fields = form.querySelectorAll('input, select');
            let isFormValid = true;

            fields.forEach(field => {
                if (field.id && (field.required || field.value)) {
                    isFormValid = validateField(field) && isFormValid;
                }
            });

            submitButton.disabled = !isFormValid;
            return isFormValid;
        }

        // Add validation listeners to all fields
        form.querySelectorAll('input, select').forEach(field => {
            field.addEventListener('input', () => {
                if (field.id) {
                    validateField(field);
                    validateForm();
                }
            });

            field.addEventListener('blur', () => {
                if (field.id) {
                    validateField(field);
                    validateForm();
                }
            });
        });

        // Form submission
        form.addEventListener('submit', (e) => {

        if (validateForm()) {
          // Collect form data
          const formData = new FormData(form);
          const data = Object.fromEntries(formData.entries());
          // Add phone number with prefix
  
          data.phone = document.getElementById('phonePrefix').value +
              document.getElementById('phone').value;
          data.name = document.getElementById('name').value;
          data.address1 = document.getElementById('address1').value;
          data.address2 = document.getElementById('address2').value;
          data.city = document.getElementById('city').value;
          data.zipcode = document.getElementById('zipcode').value;
          data.email = document.getElementById('email').value;
          data.state = document.getElementById('state').value;
          console.log('Form data:', data);
          const encodedData = Object.fromEntries(
              Object.entries(data).map(([key, value]) => [key, encodeURIComponent(value)])
          );
  
          console.log('URL encoded data:', encodedData);
                    const whatsappUrl =  \`https://wa.me/${config.whatsappLinkForOrderForm}?text=%E4%BD%A0%E5%A5%BD%20%E6%88%91%E5%B0%8Dxx%E9%A0%81%E9%9D%A2%E6%8F%90%E4%BE%9B%E7%9A%84%E7%89%B9%E5%88%A5%E5%84%AA%E6%83%A0%E6%9C%89%E8%88%88%E8%B6%A3%0A%E5%B8%8C%E6%9C%9B%E6%8F%90%E4%BE%9B%E8%B3%87%E6%96%99%E4%BD%9C%E4%B8%8B%E8%A8%82%EF%BC%9A%0A%E5%A7%93%E5%90%8D%EF%BC%9A\${data.name}%0A%E5%9C%B0%E5%9D%80%EF%BC%88%E7%AC%AC%E4%B8%80%E8%A1%8C%EF%BC%89%EF%BC%9A\${data.address1}%0A%E5%9C%B0%E5%9D%80%28%E7%AC%AC%E4%BA%8C%E8%A1%8C%29%EF%BC%9A\${data.address2}%0A%E5%9F%8E%E5%B8%82%EF%BC%9A\${data.city}%0A%E7%9C%81%E5%88%86%2F%E5%B7%9E%EF%BC%9A\${data.state}%0A%E9%83%B5%E9%81%9E%E5%8D%80%E8%99%9F%EF%BC%9A\${data.zipcode}%0A%E5%9C%8B%E5%AE%B6%2F%E5%9C%B0%E5%8D%80%EF%BC%9A\${data.email}%0A%E8%81%AF%E7%B5%A1%E9%9B%BB%E8%A9%B1%EF%BC%9A\${data.phone}%0AEmail%EF%BC%9A\${data.email}\`;
                      // Open WhatsApp link
                    window.open(whatsappUrl, '_blank');
                    }
        });

        // Initial form validation
        validateForm();
    </script>
       <script>
            const targetDate = new Date("${(config.endDate + "T23:59:59").toString()}").getTime();

        // Function to update the countdown
        function updateCountdown() {
            const now = new Date().getTime(); // Current time
            const timeRemaining = targetDate - now; // Time remaining in milliseconds

            // Calculate days, hours, minutes, and seconds
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            // Update the HTML elements
            document.getElementById("days").textContent = String(days).padStart(2, "0");
            document.getElementById("hours").textContent = String(hours).padStart(2, "0");
            document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
            document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");

            // If the countdown is over, display a message
            if (timeRemaining < 0) {
                clearInterval(countdownInterval);
                document.getElementById("countdown").innerHTML = "Time's up!";
            }
        }

        // Update the countdown every second
        const countdownInterval = setInterval(updateCountdown, 1000);

        // Initial call to display the countdown immediately
        updateCountdown();
    </script>
     <script>
        //for hours dropdown 
        const hoursItem = document.querySelector(".open-hours-info")
        const hoursDropdown = hoursItem.querySelector(".dropdown")

        hoursItem.addEventListener("click", function () {
            hoursDropdown.textContent = hoursDropdown.textContent === "expand_more" ? "expand_less" : "expand_more"
            // Here you would show/hide the full hours list
            if (hoursDropdown.textContent === "expand_less") {
                const fullHoursList = document.querySelector(".full-hours-list")
                fullHoursList.classList.toggle("hidden")
                // alert("Opening full hours list  ")
            }
            if (hoursDropdown.textContent === "expand_more") {
                const fullHoursList = document.querySelector(".full-hours-list")
                fullHoursList.classList.toggle("hidden")
                // alert("Opening full hours list  ")
            }
        })
    </script>
    <script>
      const openHours = {
            Monday: {
                open: { hour: ${(config.storeHours.monday.isOpen ? (parseInt((config.storeHours.monday.openTime.split(":"))[0])) : "99")}, minute: ${(config.storeHours.monday.isOpen ? (parseInt((config.storeHours.monday.openTime.split(":"))[1])) : "99")} },
                close: { hour: ${(config.storeHours.monday.isOpen ? (parseInt((config.storeHours.monday.closeTime.split(":"))[0])) : "99")}, minute: ${(config.storeHours.monday.isOpen ? (parseInt((config.storeHours.monday.closeTime.split(":"))[1])) : "99")} },
            },
            Tuesday: {
                open: { hour: ${(config.storeHours.tuesday.isOpen ? (parseInt((config.storeHours.tuesday.openTime.split(":"))[0])) : "99")}, minute: ${(config.storeHours.tuesday.isOpen ? (parseInt((config.storeHours.tuesday.openTime.split(":"))[1])) : "99")} },
                close: { hour: ${(config.storeHours.tuesday.isOpen ? (parseInt((config.storeHours.tuesday.closeTime.split(":"))[0])) : "99")}, minute: ${(config.storeHours.tuesday.isOpen ? (parseInt((config.storeHours.tuesday.closeTime.split(":"))[1])) : "99")} },
            },
            Wednesday: {
                    open: { hour: ${(config.storeHours.wednesday.isOpen ? (parseInt((config.storeHours.wednesday.openTime.split(":"))[0])) : "99")}, minute: ${(config.storeHours.wednesday.isOpen ? (parseInt((config.storeHours.wednesday.openTime.split(":"))[1])) : "99")} },
                close: { hour: ${(config.storeHours.wednesday.isOpen ? (parseInt((config.storeHours.wednesday.closeTime.split(":"))[0])) : "99")}, minute: ${(config.storeHours.wednesday.isOpen ? (parseInt((config.storeHours.wednesday.closeTime.split(":"))[1])) : "99")} },
            },
            Thursday: {
                         open: { hour: ${(config.storeHours.thursday.isOpen ? (parseInt((config.storeHours.thursday.openTime.split(":"))[0])) : "99")}, minute: ${(config.storeHours.thursday.isOpen ? (parseInt((config.storeHours.thursday.openTime.split(":"))[1])) : "99")} },
                close: { hour: ${(config.storeHours.thursday.isOpen ? (parseInt((config.storeHours.thursday.closeTime.split(":"))[0])) : "99")}, minute: ${(config.storeHours.thursday.isOpen ? (parseInt((config.storeHours.thursday.closeTime.split(":"))[1])) : "99")} },
            },
            Friday: {
                        open: { hour: ${(config.storeHours.friday.isOpen ? (parseInt((config.storeHours.friday.openTime.split(":"))[0])) : "99")}, minute: ${(config.storeHours.friday.isOpen ? (parseInt((config.storeHours.friday.openTime.split(":"))[1])) : "99")} },
                close: { hour: ${(config.storeHours.friday.isOpen ? (parseInt((config.storeHours.friday.closeTime.split(":"))[0])) : "99")}, minute: ${(config.storeHours.friday.isOpen ? (parseInt((config.storeHours.friday.closeTime.split(":"))[1])) : "99")} },
            },
            Saturday: {
                open: { hour: ${(config.storeHours.saturday.isOpen ? (parseInt((config.storeHours.saturday.openTime.split(":"))[0])) : "99")}, minute: ${(config.storeHours.saturday.isOpen ? (parseInt((config.storeHours.saturday.openTime.split(":"))[1])) : "99")} },
                close: { hour: ${(config.storeHours.saturday.isOpen ? (parseInt((config.storeHours.saturday.closeTime.split(":"))[0])) : "99")}, minute: ${(config.storeHours.saturday.isOpen ? (parseInt((config.storeHours.saturday.closeTime.split(":"))[1])) : "99")} },
            },
            Sunday: {
                       open: { hour: ${(config.storeHours.sunday.isOpen ? (parseInt((config.storeHours.sunday.openTime.split(":"))[0])) : "99")}, minute: ${(config.storeHours.sunday.isOpen ? (parseInt((config.storeHours.sunday.openTime.split(":"))[1])) : "99")} },
                close: { hour: ${(config.storeHours.sunday.isOpen ? (parseInt((config.storeHours.sunday.closeTime.split(":"))[0])) : "99")}, minute: ${(config.storeHours.sunday.isOpen ? (parseInt((config.storeHours.sunday.closeTime.split(":"))[1])) : "99")} },
            }
        }
              function compareOpenHour(date, day, openHours = openHours) {
            const currentHour = date.getHours();
            const currentMinute = date.getMinutes();

            if (currentHour > openHours[day].close.hour ||
                (currentHour === openHours[day].close.hour && currentMinute >= openHours[day].close.minute)) {
                return 'close';
            }
            if (currentHour < openHours[day].open.hour ||
                (currentHour === openHours[day].open.hour && currentMinute < openHours[day].open.minute)) {
                return 'before open';
            }
            return 'open';
        }
        function checkDateTime() {
            const now = new Date();

            // Get local time information
            const localDay = now.toLocaleDateString('en-US', { weekday: 'long' });
            const localTime = now.toLocaleTimeString('en-US');

            // Options for Hong Kong time
            const hkOptions = {
                timeZone: 'Asia/Hong_Kong',
                hour12: false,
                weekday: 'long',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            };

            // Get Hong Kong date and time
            const hkDay = now.toLocaleDateString('en-US', {
                timeZone: 'Asia/Hong_Kong',
                weekday: 'long'
            });

            const hkTime = now.toLocaleTimeString('en-US', hkOptions);

            const openStatus = compareOpenHour(now, hkDay, openHours);
             
            return {
                day : hkDay,
                openStatus: openStatus};
        }
        const openStatus = checkDateTime();
        console.log(openStatus);
        if (openStatus.openStatus === 'open') {
            document.querySelector('.open-status').textContent = '營業中';
            document.querySelector('.open-status').classList.add('open');
            const extraZero =\`\${openHours[openStatus.day].close.minute}\`.length > 1 ? "" : "0";
            document.querySelector('.open-status-quote').innerHTML = \`\&nbsp;結束營業時間：\${openHours[openStatus.day].close.hour}:\${extraZero}\${openHours[openStatus.day].close.minute }\`;
        } else if (openStatus.openStatus === 'close') {
            document.querySelector('.open-status').textContent = '已結束營業';
            document.querySelector('.open-status').classList.add('close');
              const extraZero =\`\${openHours[openStatus.day].close.minute}\`.length > 1 ? "" : "0";
            document.querySelector('.open-status-quote').innerHTML = \`&nbsp;結束營業時間：\${openHours[openStatus.day].close.hour}:\${extraZero}\${openHours[openStatus.day].close.minute}\`;
        } else {
            document.querySelector('.open-status').textContent = '未開始營業';
            document.querySelector('.open-status').classList.add('close');
              const extraZero =\`\${openHours[openStatus.day].open.minute}\`.length > 1 ? "" : "0";
            if (openHours[openStatus.day].open.hour === 99) {
                document.querySelector('.open-status-quote').innerHTML = \`&nbsp;今日休息\`;
            } else {  
            document.querySelector('.open-status-quote').innerHTML = \`&nbsp;開業時間：\${openHours[openStatus.day].open.hour}:\${extraZero}\${openHours[openStatus.day].open.minute}\`;
                             }
        }
    </script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js">
    </script>
    <script>

    (function (a) {
      function p(b) { b = a(b); var c = b.attr("ID") + "-carousel"; b.find(".carousel").attr("id", c); b.find(".carousel-controls a").attr("href", "#" + c); b.find(".carousel-indicators li").attr("data-target", "#" + c); a(b).find(".carousel-item:first").addClass("active") } function q(b) {
          b = a(b); var c = b.find(".carousel-item").length, d = b.find(".carousel-inner").attr("data-visible"); c < d && (d = c); b.find(".carousel-inner").attr("class", "carousel-inner slides" + d); b.find(".clonedCol").remove(); b.find(".carousel-item .col-md-12").each(function () {
              2 >
              d ? a(this).attr("class", "col-md-12") : "5" == d ? a(this).attr("class", "col-md-12 col-lg-15") : a(this).attr("class", "col-md-12 col-lg-" + 12 / d)
          }); b.find(".carousel-item").each(function () { for (var b = a(this), c = 1; c < d; c++) { b = b.next(); b.length || (b = a(this).siblings(":first")); var n = b.index(); b.find(".col-md-12:first").clone().addClass("cloneditem-" + c).addClass("clonedCol").attr("data-cloned-index", n).appendTo(a(this).children().eq(0)) } })
      } function r(b) {
          0 !== a(b).find(".nav-tabs").length && a(b).outerFind('section[id^="tabs"]').each(function () {
              var b =
                  a(this).attr("id"), d = a(this).find(".nav-tabs .nav-item"), e = a(this).find(".tab-pane"); e.removeClass("active").eq(0).addClass("active"); d.find("a").removeClass("active").removeAttr("aria-expanded").eq(0).addClass("active"); e.each(function () { a(this).attr("id", b + "_tab" + a(this).index()) }); d.each(function () { a(this).find("a").attr("href", "#" + b + "_tab" + a(this).index()) })
          })
      } var f = a("html").hasClass("is-builder"); a.extend(a.easing, {
          easeInOutCubic: function (a, c, d, e, h) {
              return 1 > (c /= h / 2) ? e / 2 * c * c * c + d : e / 2 * ((c -= 2) *
                  c * c + 2) + d
          }
      }); a.fn.outerFind = function (a) { return this.find(a).addBack(a) }; a.fn.scrollEnd = function (b, c) { a(this).scroll(function () { var d = a(this); d.data("scrollTimeout") && clearTimeout(d.data("scrollTimeout")); d.data("scrollTimeout", setTimeout(b, c)) }) }; a.fn.footerReveal = function () {
          function b() {
              !h && c.outerHeight() <= e.outerHeight() ? (c.css({ "z-index": -999, position: "fixed", bottom: 0 }), c.css({ width: d.outerWidth() }), d.css({ "margin-bottom": c.outerHeight() })) : (c.css({ "z-index": "", position: "", bottom: "" }), c.css({ width: "" }),
                  d.css({ "margin-bottom": "" }))
          } var c = a(this), d = c.prev(), e = a(window), h = !!document.documentMode; b(); e.on("load resize", function () { b() }); return this
      }; (function (a, c) { var d = function (a, b, c) { var d; return function () { var f = this, k = arguments; d ? clearTimeout(d) : c && a.apply(f, k); d = setTimeout(function () { c || a.apply(f, k); d = null }, b || 100) } }; jQuery.fn[c] = function (a) { return a ? this.bind("resize", d(a)) : this.trigger(c) } })(jQuery, "smartresize"); a.isMobile = function (b) {
          var c = [], d = {
              blackberry: "BlackBerry", android: "Android", windows: "IEMobile",
              opera: "Opera Mini", ios: "iPhone|iPad|iPod"
          }; b = "undefined" == a.type(b) ? "*" : b.toLowerCase(); "*" == b ? c = a.map(d, function (a) { return a }) : b in d && c.push(d[b]); return !(!c.length || !navigator.userAgent.match(new RegExp(c.join("|"), "i")))
      }; var t = function () { var b = a('<div style="height: 50vh; position: absolute; top: -1000px; left: -1000px;">').appendTo("body"), c = b[0], d = parseInt(window.innerHeight / 2, 10), c = parseInt((window.getComputedStyle ? getComputedStyle(c, null) : c.currentStyle).height, 10); b.remove(); return c == d }();
      a(function () {
          function b() { a(this).css("height", 9 * a(this).parent().width() / 16) } function c(b) { setTimeout(function () { a(b).outerFind(".mbr-parallax-background").jarallax({ speed: .6 }).css("position", "relative") }, 0) } function d(b) {
              a(b).outerFind("[data-bg-video]").each(function () {
                  var b = a(this).attr("data-bg-video"), 
    c = b.match(/(http:\\/\\/|https:\\/\\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\\/(video\\/|embed\\/|watch\?v=|v\\/)?([A-Za-z0-9._%-]*)(&\S+)?/), d = a('<div class="mbr-background-video-preview">').hide().css({
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                  }); a("> *:eq(0)", this).before(d); if (c && (/youtu\.?be/g.test(c[3]) || /vimeo/g.test(c[3]))) if (c && /youtu\.?be/g.test(c[3])) b = "http" + ("https:" === location.protocol ? "s" : "") + ":", b += "//img.youtube.com/vi/" + c[6] + "/maxresdefault.jpg", a("<img>").on("load", function () {
                      if (120 === (this.naturalWidth || this.width)) {
                          var a = this.src.split("/").pop(); switch (a) {
                              case "maxresdefault.jpg": this.src = this.src.replace(a, "sddefault.jpg"); break; case "sddefault.jpg": this.src = this.src.replace(a, "hqdefault.jpg");
                                  break; default: f && d.css("background-image", 'url("images/no-video.jpg")').show()
                          }
                      } else d.css("background-image", 'url("' + this.src + '")').show()
                  }).attr("src", b), !a.fn.YTPlayer || f || a.isMobile() || a("> *:eq(1)", this).before('<div class="mbr-background-video"></div>').prev().YTPlayer({ videoURL: c[6], containment: "self", showControls: !1, mute: !0 }); else {
                      if (c && /vimeo/g.test(c[3])) {
                          var k = new XMLHttpRequest; k.open("GET", "https://vimeo.com/api/v2/video/" + c[6] + ".json", !0); k.onreadystatechange = function () {
                              if (4 === this.readyState) if (200 <=
                                  this.status && 400 > this.status) { var a = JSON.parse(this.responseText); d.css("background-image", 'url("' + a[0].thumbnail_large + '")').show() } else f && d.css("background-image", 'url("images/no-video.jpg")').show()
                          }; k.send(); k = null; !a.fn.vimeo_player || f || a.isMobile() || a("> *:eq(1)", this).before('<div class="mbr-background-video"></div>').prev().vimeo_player({ videoURL: b, containment: "self", showControls: !1, mute: !0 })
                      }
                  } else f && d.css("background-image", 'url("images/video-placeholder.jpg")').show()
              })
          } a("html").addClass(a.isMobile() ?
              "mobile" : "desktop"); a(window).scroll(function () { a(".mbr-navbar--sticky").each(function () { var b = 10 < a(window).scrollTop() ? "addClass" : "removeClass"; a(this)[b]("mbr-navbar--stuck").not(".mbr-navbar--open")[b]("mbr-navbar--short") }) }); a.isMobile() && navigator.userAgent.match(/Chrome/i) ? function (b, c) { var d = [b, b]; d[c > b ? 0 : 1] = c; a(window).smartresize(function () { var b = a(window).height(); 0 > a.inArray(b, d) && (b = d[a(window).width() > b ? 1 : 0]); a(".mbr-section--full-height").css("height", b + "px") }) }(a(window).width(), a(window).height()) :
                  t || (a(window).smartresize(function () { a(".mbr-section--full-height").css("height", a(window).height() + "px") }), a(document).on("add.cards", function (b) { a("html").hasClass("mbr-site-loaded") && a(b.target).outerFind(".mbr-section--full-height").length && a(window).resize() })); a(window).smartresize(function () { a(".mbr-section--16by9").each(b) }); a(document).on("add.cards changeParameter.cards", function (c) {
                      var d = a(c.target).outerFind(".mbr-section--16by9"); d.length ? d.attr("data-16by9", "true").each(b) : a(c.target).outerFind("[data-16by9]").css("height",
                          "").removeAttr("data-16by9")
                  }); a.fn.jarallax && !a.isMobile() && (a(window).on("update.parallax", function (b) { setTimeout(function () { var b = a(".mbr-parallax-background"); b.jarallax("coverImage"); b.jarallax("clipContainer"); b.jarallax("onScroll") }, 0) }), f ? (a(document).on("add.cards", function (b) { c(b.target); a(window).trigger("update.parallax") }), a(document).on("changeParameter.cards", function (b, d, e, h) {
                      if ("bg" === d) switch (a(b.target).jarallax("destroy").css("position", ""), h) {
                          case "type": !0 === e.parallax && c(b.target);
                              break; case "value": "image" === e.type && !0 === e.parallax && c(b.target); break; case "parallax": !0 === e.parallax && c(b.target)
                      }a(window).trigger("update.parallax")
                  })) : c(document.body), a(window).on("shown.bs.tab", function (b) { a(window).trigger("update.parallax") })); var e, h, n = 0, g = null, l = !a.isMobile(); a(window).scroll(function () {
                      h && clearTimeout(h); var b = a(window).scrollTop(), c = b <= n || l; n = b; if (g) {
                          var d = b > g.breakPoint; c ? d != g.fixed && (l ? (g.fixed = d, a(g.elm).toggleClass("is-fixed")) : h = setTimeout(function () {
                              g.fixed = d;
                              a(g.elm).toggleClass("is-fixed")
                          }, 40)) : (g.fixed = !1, a(g.elm).removeClass("is-fixed"))
                      }
                  }); a(document).on("add.cards delete.cards", function (b) { e && clearTimeout(e); e = setTimeout(function () { g && (g.fixed = !1, a(g.elm).removeClass("is-fixed")); a(".mbr-fixed-top:first").each(function () { g = { breakPoint: a(this).offset().top + 3 * a(this).height(), fixed: !1, elm: this }; a(window).scroll() }) }, 650) }); a(window).smartresize(function () {
                      a(".mbr-embedded-video").each(function () {
                          a(this).height(a(this).width() * parseInt(a(this).attr("height") ||
                              315) / parseInt(a(this).attr("width") || 560))
                      })
                  }); a(document).on("add.cards", function (b) { a("html").hasClass("mbr-site-loaded") && a(b.target).outerFind("iframe").length && a(window).resize() }); if (f) a(document).on("add.cards", function (a) { d(a.target) }); else d(document.body); a(document).on("changeParameter.cards", function (b, c, e, h) {
                      if ("bg" === c) switch (h) {
                          case "type": a(b.target).find(".mbr-background-video-preview").remove(); "video" === e.type && d(b.target); break; case "value": "video" === e.type && (a(b.target).find(".mbr-background-video-preview").remove(),
                              d(b.target))
                      }
                  }); f || a("body > *:not(style, script)").trigger("add.cards"); a("html").addClass("mbr-site-loaded"); a(window).resize().scroll(); f || a(document).click(function (b) {
                      try {
                          var c = b.target; if (!a(c).parents().hasClass("carousel")) {
                              do if (c.hash) {
                                  var d = /#bottom|#top/g.test(c.hash); a(d ? "body" : c.hash).each(function () {
                                      b.preventDefault(); var d = a(c).parents().hasClass("navbar-fixed-top") ? 60 : 0, d = "#bottom" == c.hash ? a(this).height() - a(window).height() : a(this).offset().top - d; a(this).hasClass("panel-collapse") ||
                                          a(this).hasClass("tab-pane") || a("html, body").stop().animate({ scrollTop: d }, 800, "easeInOutCubic")
                                  }); break
                              } while (c = c.parentNode)
                          }
                      } catch (e) { }
                  }); a(".cols-same-height .mbr-figure").each(function () {
                      function b() { d.css({ width: "", maxWidth: "", marginLeft: "" }); if (f && h) { var a = f / h; c.addClass({ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }); var g = e.height() / e.width(); g > a && (a = 100 * (g - a) / a, d.css({ width: a + 100 + "%", maxWidth: a + 100 + "%", marginLeft: -a / 2 + "%" })) } } var c = a(this), d = c.children("img"), e = c.parent(), h = d[0].width,
                          f = d[0].height; d.one("load", function () { h = d[0].width; f = d[0].height; b() }); a(window).on("resize", b); b()
                  })
      }); if (!f) {
          if (a.fn.socialLikes) a(document).on("add.cards", function (b) { a(b.target).outerFind(".mbr-social-likes").on("counter.social-likes", function (b, d, e) { 999 < e && a(".social-likes__counter", b.target).html(Math.floor(e / 1E3) + "k") }).socialLikes({ initHtml: !1 }) }); a(document).on("add.cards", function (b) { a(b.target).hasClass("mbr-reveal") && a(b.target).footerReveal() }); a(document).ready(function () {
              if (!a.isMobile() &&
                  a("input[name=animation]").length) {
                      var b = function (a) { if ("none" !== a.parents(".carousel-item").css("display")) return !1; var b = a.parents(".carousel-item").parent(); if (b.find(".carousel-item.active .hidden.animated").lenght) return !1; if (1 < b.attr("data-visible")) { b = b.attr("data-visible"); if (a.parents().is(".cloneditem-" + (b - 1)) && a.parents(".cloneditem-" + (b - 1)).attr("data-cloned-index") >= b) return !0; a.removeClass("animated hidden"); return !1 } return !0 }, c = function (a) {
                          var b = 0; do b += a.offsetTop || 0, a = a.offsetParent;
                          while (a); return b
                      }; a("input[name=animation]").remove(); var d = a("p, h1, h2, h3, h4, h5, a, button, small, img, li, blockquote, .mbr-author-name, em, label, input, select, textarea, .input-group, .form-control, .iconbox, .btn-social, .mbr-figure, .mbr-map, .mbr-testimonial .card-block, .mbr-price-value, .mbr-price-figure, .dataTable, .dataTables_info").not(function () { return a(this).parents().is("a, p, .navbar, .mbr-arrow, footer, .iconbox, .mbr-slider, .mbr-gallery, .mbr-testimonial .card-block, #cookiesdirective, .mbr-wowslider, .accordion, .tab-content, .engine, #scrollToTop") }).not(function () {
                          return a(this).parents().is("form") &&
                              a(this).is("li")
                      }).addClass("hidden animated"), e = a(window); e.on("scroll resize", function () { var e = document.documentElement.scrollTop || document.body.scrollTop, f = e + window.innerHeight - 50; a.each(d, function () { var d = a(this), l = d[0], k = l.offsetHeight, l = c(l); if ((l + k >= e && l <= f || b(d)) && d.hasClass("hidden")) d.removeClass("hidden").addClass("fadeInUp").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () { d.removeClass("animated fadeInUp") }) }) }); e.trigger("scroll")
              }
          }); a(".nav-dropdown").length &&
              a(".nav-dropdown").swipe({ swipeLeft: function (b, c, d, e, f) { a(".navbar-close").click() } })
      } a(document).ready(function () { if (a(".mbr-arrow-up").length) { var b = a("#scrollToTop"), c = a("body,html"), d = a(window); b.css("display", "none"); d.scroll(function () { 0 < a(this).scrollTop() ? b.fadeIn() : b.fadeOut() }); b.click(function () { c.animate({ scrollTop: 0 }, 400); return !1 }) } }); if (!f) a(".mbr-arrow").on("click", function (b) {
          b = a(b.target).closest("section").next(); b.hasClass("engine") && (b = b.closest("section").next()); b = b.offset();
          a("html, body").stop().animate({ scrollTop: b.top }, 800, "linear")
      }); if (a("nav.navbar").length) { var m = a("nav.navbar").height(); a(".mbr-after-navbar.mbr-fullscreen").css("padding-top", m + "px") } if (!f && (0 < window.navigator.userAgent.indexOf("MSIE ") || navigator.userAgent.match(/Trident.*rv\:11\./))) a(document).on("add.cards", function (b) {
          var c = a(b.target); if (c.hasClass("mbr-fullscreen")) a(window).on("load resize", function () { c.css("height", "auto"); c.outerHeight() <= a(window).height() && c.css("height", "1px") });
          if (c.hasClass("mbr-slider") || c.hasClass("mbr-gallery")) c.find(".carousel-indicators").addClass("ie-fix").find("li").css({ display: "inline-block", width: "30px" }), c.hasClass("mbr-slider") && c.find(".full-screen .slider-fullscreen-image").css("height", "1px")
      }); a(document).ready(function () {
          if (!f) {
              var b = function (b) {
                  var d = a(b).parents("section").find("iframe")[0], e = a(d).attr("src"); b.parents("section").css("z-index", "5000"); -1 !== e.indexOf("youtu") && d.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',
                      "*"); if (-1 !== e.indexOf("vimeo")) { var f = new Vimeo.Player(a(d)); f.play() } a(b).parents("section").find(a(b).attr("data-modal")).css("display", "table").click(function () { -1 !== e.indexOf("youtu") && d.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*"); -1 !== e.indexOf("vimeo") && f.pause(); a(this).css("display", "none").off("click"); b.parents("section").css("z-index", "0") })
              }; a(".modalWindow-video iframe").each(function () {
                  var b = a(this).attr("data-src"); a(this).removeAttr("data-src");
                  var d = b.match(/(http:\\/\\/|https:\\/\\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\\/(video\\/|embed\\/|watch\?v=|v\\/)?([A-Za-z0-9._%-]*)(&\S+)?/); -1 !== b.indexOf("youtu") ? a(this).attr("src", "https://youtube.com/embed/" + d[6] + "?rel=0&enablejsapi=1") : -1 !== b.indexOf("vimeo") && a(this).attr("src", "https://player.vimeo.com/video/" + d[6] + "?autoplay=0&loop=0")
              }); a("[data-modal]").click(function () { b(a(this)) })
          }
      }); if (!f && !a.isMobile()) {
          var m = a("section.menu"), u = a(window).width(); !m.find(".navbar").hasClass("collapsed") &&
              991 < u && (m.find("ul.navbar-nav li.dropdown").hover(function () { a(this).hasClass("open") || a(this).find("a")[0].click() }, function () { a(this).hasClass("open") && a(this).find("a")[0].click() }), m.find("ul.navbar-nav li.dropdown .dropdown-menu .dropdown").hover(function () { a(this).hasClass("open") || a(this).find("a")[0].click() }, function () { a(this).hasClass("open") && a(this).find("a")[0].click() }))
      } a.fn.outerFind = function (a) { return this.find(a).addBack(a) }; f || ("undefined" === typeof window.initClientPlugin && 0 != a(document.body).find(".clients").length &&
          (window.initClientPlugin = !0, a(document.body).find(".clients").each(function (b, c) { a(this).attr("data-isinit") || (p(a(this)), q(a(this))) })), "undefined" === typeof window.initPopupBtnPlugin && 0 != a(document.body).find("section.popup-btn-cards").length && (window.initPopupBtnPlugin = !0, a("section.popup-btn-cards .card-wrapper").each(function (b, c) { a(this).addClass("popup-btn") })), "undefined" === typeof window.initTestimonialsPlugin && 0 != a(document.body).find(".testimonials-slider").length && (window.initTestimonialsPlugin =
              !0, a(".testimonials-slider").each(function () { p(this) })), "undefined" === typeof window.initSwitchArrowPlugin && (window.initSwitchArrowPlugin = !0, a(document).ready(function () { 0 != a(".accordionStyles").length && a('.accordionStyles .card-header a[role="button"]').each(function () { a(this).hasClass("collapsed") || a(this).addClass("collapsed") }) }), a('.accordionStyles .card-header a[role="button"]').click(function () {
                  var b = a(this).closest(".accordionStyles").attr("id"); a(this).closest(".card").find(".panel-collapse").hasClass("collapsing") ||
                      (-1 != b.indexOf("toggle") ? a(this).hasClass("collapsed") ? a(this).find("span.sign").removeClass("mbri-arrow-down").addClass("mbri-arrow-up") : a(this).find("span.sign").removeClass("mbri-arrow-up").addClass("mbri-arrow-down") : -1 != b.indexOf("accordion") && (a(this).closest(".accordionStyles ").children(".card").each(function () { a(this).find("span.sign").removeClass("mbri-arrow-up").addClass("mbri-arrow-down") }), a(this).hasClass("collapsed") && a(this).find("span.sign").removeClass("mbri-arrow-down").addClass("mbri-arrow-up")))
              })),
          "undefined" === typeof window.initTabsPlugin && (window.initTabsPlugin = !0, r(document.body)), 0 != a(".mbr-slider.carousel").length && a(".mbr-slider.carousel").each(function () {
              var b = a(this), c = b.find(".carousel-control"), d = b.find(".carousel-indicators li"); b.on("slide.bs.carousel", function () { c.bind("click", function (a) { a.stopPropagation(); a.preventDefault() }); d.bind("click", function (a) { a.stopPropagation(); a.preventDefault() }); b.carousel({ keyboard: !1 }) }).on("slid.bs.carousel", function () {
                  c.unbind("click"); d.unbind("click");
                  b.carousel({ keyboard: !0 }); 1 < b.find(".carousel-item.active").length && (b.find(".carousel-item.active").eq(1).removeClass("active"), b.find(".carousel-control li.active").eq(1).removeClass("active"))
              })
          })); if (f) a(document).on("add.cards", function (b) {
              a(b.target).find(".form-with-styler").length && (b = a(b.target).find(".form-with-styler"), a(b).find('select:not("[multiple]")').each(function () { a(this).styler() }), a(b).find("input[type=number]").each(function () { a(this).styler(); a(this).parent().parent().removeClass("form-control") }),
                  a(b).find("input[type=date]").each(function () { a(this).datetimepicker && a(this).datetimepicker({ format: "Y-m-d", timepicker: !1 }) }), a(b).find("input[type=time]").each(function () { a(this).datetimepicker && a(this).datetimepicker({ format: "H:i", datepicker: !1 }) }))
          }); else a("section .form-with-styler").each(function () {
              a(this).find('select:not("[multiple]")').each(function () { a(this).styler() }); a(this).find("input[type=number]").each(function () { a(this).styler(); a(this).parent().parent().removeClass("form-control") });
              var b; b = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) || navigator.userAgent.match(/Firefox/i) ? !0 : !1; !b && a(this).datetimepicker && (a(this).find("input[type=date]").each(function () { a(this).datetimepicker({ format: "Y-m-d", timepicker: !1 }) }), a(this).find("input[type=time]").each(function () {
                  a(this).datetimepicker({
                      format: "H:i",
                      datepicker: !1
                  })
              }))
          }); a(document).on("change", 'input[type="range"]', function (b) { a(b.target).parents(".form-group").find(".value")[0].innerHTML = b.target.value })
  })(jQuery);
  !function () { try { document.getElementsByClassName("engine")[0].getElementsByTagName("a")[0].removeAttribute("rel") } catch (b) { } if (!document.getElementById("top-1")) { var a = document.createElement("section"); a.id = "top-1"; a.className = "engine"; a.innerHTML = ''; document.body.insertBefore(a, document.body.childNodes[0]) } }();
  
    </script>
  <script>
  // options.imagesCount
  function ws_photo(g, h, l) {
    function m(a, c, b, d, h, l) {
        a[0].wowParams || (a[0].wowParams = {}); if (d && c) { var f = 80, e = 50 - f / 2, k = 50 - f / 2, m = 0; c = 5 } else f = 30, e = parseFloat(100 * Math.random() + -10), k = parseFloat(100 * Math.random() + -10), m = parseFloat(60 * Math.random() + -30), c = d ? c ? 5 : b ? 3 : 2 : c ? 3 : b ? 4 : 2; b = { top: a[0].wowParams.y || 0, left: a[0].wowParams.x || 0, width: a[0].wowParams.size || 0, height: a[0].wowParams.size || 0 }; d = { top: k, left: e, width: f, height: f }; if (g.support.transform) b = {
            translate: [50 - b.width / 2 - b.left + "%", 50 - b.width / 2 - b.top + "%", 0],
            rotate: a[0].wowParams.angle || 0, scale: b.width / 100
        }, d = { translate: [50 - d.width / 2 - d.left, 50 - d.width / 2 - d.top, 0], rotate: m || 0, scale: d.width / 100 }; else for (var n in b) b[n] += "%"; wowAnimate(a.css({ position: "absolute", zIndex: c }), b, d, h, "swing", l || 0); a[0].wowParams = { size: f, x: e, y: k, angle: m, zIndex: c }
    } function n() { if (g.support.transform) { var a = c(h[0]), a = { width: a.width(), height: a.height(), marginTop: parseFloat(a.css("marginTop")), marginLeft: parseFloat(a.css("marginLeft")) }; c(f).find("img").css(a) } else c(f).find("img").css({ width: "100%" }) }
    var c = jQuery, r = c(this), v = c(".ws_list", l), p = /iPhone|iPod|iPad|Android|BlackBerry/.test(navigator.userAgent), k = g.imagesCount || 30, q = []; l = c("<div>").addClass("ws_effect ws_photo").css({ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "hidden", backgroundColor: "#DDDDDD" }).appendTo(l); if (!p) var t = c("<div>").css({ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.6)", zIndex: 4 }).appendTo(l); for (var u = Math.max(k, h.length), e = k = 0; k < u; k++)e >= h.length &&
        (e -= h.length), c("<div>").addClass("ws_photoItem").css({ width: "100%", height: "100%", overflow: "hidden" }).append(c("<div>").css({ overflow: "hidden", position: "absolute" }).append(c(h[e]).clone())).appendTo(l), g.images && k < h.length && q.push(!g.images[e].noimage), e++; var f = l.children(".ws_photoItem"); f.each(function (a) { m(c(this), g.startSlide == a, !1, !0, 0) }); n(); c(window).on("load resize", n); this.go = function (a, e) {
            n(); if (g.images && !q[a]) {
                q[a] = !0; for (var b = a; ;) {
                    c(f[b]).find("img").attr("src", g.images[b % h.length].src);
                    if (b > u) break; b += h.length
                }
            } if (window.XMLHttpRequest) { var d = .5 * g.duration; f.each(function (b) { m(c(this), a == b, e == b, !1, d) }); p || wowAnimate(t, { opacity: 1 }, { opacity: 0 }, .7 * d, "swing"); setTimeout(function () { f.each(function (b) { m(c(this), a == b, e == b, !0, d, e == b ? function () { r.trigger("effectEnd") } : 0) }); p || wowAnimate(t, { opacity: 0 }, { opacity: 1 }, .7 * d, "swing") }, d) } else v.stop(!0).animate({ left: a ? -a + "00%" : /Safari/.test(navigator.userAgent) ? "0%" : 0 }, g.duration, "easeInOutExpo", function () { r.trigger("effectEnd") })
        }
};
  </script>
<script> 
// wowslider initialization
(function () {
    function m(b) { var d = {}; "anim-type hidecontrols theme fullscreen timeout autoplay duration paddingtop paddingbottom showbullets height width responsive showcaptions captionseffect".split(" ").map(function (a) { d[a] = b.attr("data-" + a) }); return d } $(document).on("add.cards change.cards", function (b) {
        if ($(b.target).hasClass("mbr-wowslider-container")) {
            $(b.target).find(".mbr-wowslider-options").css("display", "none"); var d = $(b.target).closest("html").hasClass("is-builder"), a = {}, a = m($(b.target).find(".params")),
                e = $(b.target).find(".mbr-wowslider"); "false" == a.showbullets && $(b.target).find(".ws_bullets").css("display", "none"); var g = !1; "true" != a.autoplay || d || (g = !0); var h = !1; "true" == a.showcaptions && (h = !0); var f = !1; if ("boundary" == a.theme || "dodgy" == a.theme) f = [], $(".ws_bullets img").each(function (a, b) { f.push($(this).attr("src")) }); "utter" == a.theme && (f = [], $(".ws_images img").each(function (a, b) { f.push($(this).attr("src")) })); e.css({ "padding-top": 1.5 * +a.paddingtop + "rem", "padding-bottom": 1.5 * +a.paddingbottom + "rem" });
            var k = 0, n = "ws_" + a["anim-type"], p = setInterval(function () {
                k++; if (10 < k || window[n]) clearInterval(p), $(b.target).find(".mbr-wowslider").wowSlider({
                    effect: a["anim-type"], prev: "", next: "", duration: 1E3 * +a.duration, delay: 1E3 * +a.timeout, width: +a.width, height: +a.height, autoPlay: g, autoPlayVideo: !1, playPause: !0, stopOnHover: !1, loop: !1, bullets: 1, caption: h, captionEffect: a.captionseffect, onStep: function (a) { e.attr("data-cur-slide", a) }, controls: !0, controlsThumb: f, responsive: +a.responsive, fullScreen: !1, gestures: 2, onBeforeStep: 0,
                    images: 0
                })
            }, 100), c = $(b.target).attr("id"), l = "style-" + c; $("head").find("#" + l).remove(); text = '<style id="' + l + '">'; 1 == a.responsive && (text += "#" + c + " .mbr-wowslider.boxed{max-width:" + a.width + "px;max-height:" + a.height + "px;margin:0 auto} \\n", e.addClass("boxed")); 2 == a.responsive && (text += "#" + c + " .mbr-wowslider.full-width{max-height:" + a.height + "px !important} \\n", text += "#" + c + " .mbr-wowslider.full-width .ws_images>div>img{max-height:" + a.height + "px !important} \\n", e.addClass("full-width")); "true" == a.hidecontrols &&
                (text += "#" + c + " .mbr-wowslider a.ws_next, #" + c + " a.ws_prev, #" + c + " .ws_playpause{display: none} \\n", text += "#" + c + " .mbr-wowslider:hover a.ws_next, #" + c + " .mbr-wowslider:hover a.ws_prev, #" + c + "  .mbr-wowslider:hover .ws_playpause{display: block} \\n"); text += "</style>"; $("head").append(text); d && (e.css("cursor", "pointer"), $(".ws_cover").on("click", function () { $(b.target).closest(".app-component").find(".component-params").click() }))
        }
    }); $(function () {
        function b(b) { return !1 } setTimeout(function () {
            $(".ui-sortable").on("click",
                ".ws_controls > .ws_next", b); $(".ui-sortable").on("click", ".ws_controls > .ws_prev", b)
        }, 0)
    }); $(document).on("sortstop", function (b) { $(b.target).closest("#edit-component-params").find('select[name="animType"]').trigger("change") })
})();

</script>
<script>
// wowslider plugin
/** WOWSlider version 3.1
  Created by WowSlider.com
  Modified 10:37 13.03.2013
  Using structure
  <div id=wowslider-container>
	  <div class=ws_images><ul>
			<li><a><img src="..." id=wows0 /></a></li>...
	  </ul></div>
	  <div class=ws_bullets>
			<a href="#wows0"></a>...
	  </div>
	  <div class=ws_bullets>
			<a href="#wows0"></a>...
	  </div>
	  <div class=ws_shadow></div>
  </div>

  z-index:
	  -1 = .ws_shadow
	  no = .images - basicaly no z-index
	  8  = .ws_effect, canvas or other overlap object
	  9  = .ws_frame
		10 = <cover frame> - between .ws_images||.ws_frame and arrows+bullets
	50 = .ws_title
		55 = .ws_video_btn - div with youtube/vimeo play button (must be above description, to be able to press play when big description)
		56 = .ws_logo (must be over play video button to prevent user click when on-demand loading)
	  60 = .ws_prev,.ws_next
	  60 = .ws_thumbs - if fullWidth filmstrips go to container and need to be under controls
	  61 = .ws_fullscreen - fullscreen button ower controls!
	  70 = .ws_bullets

 */
// exported functions:
//	.wsStart([index]) - start playing [from index] if autoPlay=true, or go to step if autoPlay=false
//	.wsStop() - stop playing
jQuery.fn.wowSlider = function (a) {
	function c(a) { return F.css({ left: -a + "00%" }) } function f(a) { return ((a || 0) + I) % I } function d(A) { if (window["ws_" + A]) { var b = new window["ws_" + A](a, L, C); b.name = "ws_" + A; B.push(b) } } function h(a, b) { u ? u.pause(a.curIndex, b) : b() } function l(a, b) { u ? u.play(a, 0, b) : b() } function k(a, b, g) { N || (isNaN(a) && (a = Aa(n, I)), a = f(a), n != a && (O ? O.load(a, function () { K(a, b, g) }) : K(a, b, g))) } function v(a) { for (var b = "", g = 0; g < a.length; g++)b += String.fromCharCode(a.charCodeAt(g) ^ 1 + (a.length - g) % 7); return b } function K(b,
		Fa, e) { if (!N) { if (Fa) void 0 != e && (aa = e ^ a.revers), c(b); else { if (N) return; (function (b, A, e) { ba = Math.floor(Math.random() * B.length); g(B[ba]).trigger("effectStart", { curIndex: b, nextIndex: A, cont: g("." + B[ba].name, t), start: function () { aa = void 0 != e ? e ^ a.revers : !!(A > b) ^ a.revers ? 1 : 0; B[ba].go(A, b, aa) } }) })(n, b, e); t.trigger(g.Event("go", { index: b })) } n = b; n != a.stopOn || --a.loop || (a.autoPlay = 0); if (a.onStep) a.onStep(b) } } function p() { t.find(".ws_effect").fadeOut(200); c(n).fadeIn(200).find("img").css({ visibility: "visible" }) } function E(a,
			b, g, e, c, r) { new H(a, b, g, e, c, r) } function H(b, e, c, r, p, f) {
				var d, k, m, h, x = 0, l = 0, y = 0; b[0] || (b = g(b)); b.on((e ? "mousedown " : "") + "touchstart", function (b) { var g = b.originalEvent.touches ? b.originalEvent.touches[0] : b; 2 == a.gestures && t.addClass("ws_grabbing"); x = 0; g ? (d = g.pageX, k = g.pageY, l = y = 1, r && (l = y = r(b))) : l = y = 0; b.originalEvent.touches || (b.preventDefault(), b.stopPropagation()) }); g(document).on((e ? "mousemove " : "") + "touchmove", b, function (a) {
					if (l) {
						var b = a.originalEvent.touches ? a.originalEvent.touches[0] : a; x = 1; m = b.pageX -
							d; h = b.pageY - k; c && c(a, m, h)
					}
				}); g(document).on((e ? "mouseup " : "") + "touchend", b, function (b) { 2 == a.gestures && t.removeClass("ws_grabbing"); l && (x && p && p(b, m, h), !x && f && f(b), x && (b.preventDefault(), b.stopPropagation()), l = x = 0) }); b.on("click", function (a) { y && (a.preventDefault(), a.stopPropagation()); y = 0 })
			} function e(b, e, c) {
				P.length && U(b); z.length && G(b); a.controlsThumb && a.controls && ca(b); if (a.caption) {
					var r = Ba(b); e = Ba(e); var p = a.captionEffect; (X[g.type(p)] || X[p] || X.none)(g.extend({ $this: t, curIdx: n, prevIdx: Y, noDelay: c },
						a), da, Ca, r, e, aa)
				} V && ((b = g("A", R.get(b)).get(0)) ? (V.setAttribute("href", b.href), V.setAttribute("target", b.target), V.style.display = "block") : V.style.display = "none"); a.responsive && ea()
			} function b() { fa && (fa = 0, setTimeout(function () { t.trigger(g.Event("stop", {})) }, a.duration)) } function r() { x(); b() } function m() { x(); a.autoPlay ? (ga = setTimeout(function () { pa || k(void 0, void 0, 1) }, a.delay), !fa && a.autoPlay && (fa = 1, t.trigger(g.Event("start", {})))) : b() } function x() { ga && clearTimeout(ga); ga = null } function y(b, a, g) {
				x();
				b && b.preventDefault(); k(a, void 0, g); m(); qa && w && w.play()
			} function ca(b) { var e = a.controlsThumb, c = e[b + 1] || e[0], r = e[(b || e.length) - 1]; Ga.attr("src", c); ra.css("transition", "none"); Ha.attr("src", r); sa.css("transition", "none"); wowAnimate(g.merge(ra, sa), { opacity: 1 }, { opacity: 0 }, 400, function () { ra.attr({ src: c, style: "" }); sa.attr({ src: r, style: "" }) }) } function ta() {
				function b(a) {
					if (!p) {
						clearTimeout(r); for (var A = 0; 2 > A; A++) {
							if (A) var f = e.find("> a"), f = ha ? e.width() : g(f.get(0)).outerWidth(!0) * f.length; else f = e.height();
							var d = z[A ? "width" : "height"](), m = d - f; if (0 > m) { d = (a[A ? "pageX" : "pageY"] - z.offset()[A ? "left" : "top"]) / d; if (c == d) break; c = d; var k = e.position()[A ? "left" : "top"]; e.css({ transition: "0ms linear", transform: "translate3d(" + k.left + "px," + k.top + "px,0)" }); e.stop(!0); if (0 < ia) { if (.2 < d && .8 > d) break; m = .5 > d ? 0 : m - 1; f = ia * Math.abs(k - m) / (Math.abs(d - .5) - .2) } else m *= Math.min(Math.max((d - .2) / .6, 0), 1), f = -ia * f / 2; e.animate(A ? { left: m } : { top: m }, f, 0 < ia ? "linear" : "easeOutCubic") } else e.css(A ? "left" : "top", m / 2)
						}
					}
				} t.find(".ws_bullets a,.ws_thumbs a").click(function (b) {
					y(b,
						g(this).index())
				}); if (z.length) {
					z.hover(function () { ua = 1 }, function () { ua = 0 }); var e = z.find(">div"); z.css({ overflow: "hidden" }); var c, r, p; ha = z.width() < t.width(); z.bind("mousemove mouseover", b); z.mouseout(function (b) { r = setTimeout(function () { e.stop() }, 100) }); z.trigger("mousemove"); if (a.gestures) {
						var f, d, m, k, x, h; E(z, 2 == a.gestures, function (b, a, g) { if (m > x || k > h) return !1; ha ? (b = Math.min(Math.max(d + g, k - h), 0), e.css("top", b)) : (b = Math.min(Math.max(f + a, m - x), 0), e.css("left", b)) }, function (b) {
							p = 1; b = e.find("> a"); m = z.width();
							k = z.height(); x = g(b.get(0)).outerWidth(!0) * b.length; h = e.height(); f = parseFloat(e.css("left")) || 0; d = parseFloat(e.css("top")) || 0; return !0
						}, function () { p = 0 }, function () { p = 0 })
					} t.find(".ws_thumbs a").each(function (b, a) { E(a, 0, 0, function (b) { return !!g(b.target).parents(".ws_thumbs").get(0) }, function (b) { p = 1 }, function (b) { y(b, g(a).index()) }) })
				} if (P.length) {
					var l = P.find(">div"), n = g("a", P), v = n.find("IMG"); if (v.length) {
						var H = function (b) {
							0 > b && (b = 0); O && O.loadTtip(b); g(n.get(U)).removeClass("ws_overbull"); g(n.get(b)).addClass("ws_overbull");
							q.show(); var a = { left: n.get(b).offsetLeft - q.width() / 2, "margin-top": n.get(b).offsetTop - n.get(0).offsetTop + "px", "margin-bottom": -n.get(b).offsetTop + n.get(n.length - 1).offsetTop + "px" }, e = v.get(b), e = { left: -e.offsetLeft + (g(e).outerWidth(!0) - g(e).outerWidth()) / 2 }; 0 > U ? (q.css(a), u.css(e)) : (document.all || (a.opacity = 1), q.stop().animate(a, "fast"), u.stop().animate(e, "fast")); U = b
						}, q = g('<div class="ws_bulframe"/>').appendTo(l), u = g("<div/>").css({ width: v.length + 1 + "00%" }).appendTo(g("<div/>").appendTo(q)); v.appendTo(u);
						g("<span/>").appendTo(q); var U = -1; n.hover(function () { H(g(this).index()) }); var w; l.hover(function () { w && (clearTimeout(w), w = 0); H(U) }, function () { n.removeClass("ws_overbull"); document.all ? w || (w = setTimeout(function () { q.hide(); w = 0 }, 400)) : q.stop().animate({ opacity: 0 }, { duration: "fast", complete: function () { q.hide() } }) }); l.click(function (b) { y(b, g(b.target).index()) })
					}
				}
			} function G(b) {
				g("A", z).each(function (a) {
					if (a == b) {
						if (a = g(this), a.addClass("ws_selthumb"), !ua) {
							var e = z.find(">div"), c = a.position() || {}, r; r = e.position() ||
								{}; for (var f = 0; 1 >= f; f++) { if (f) var d = e.find("> a"), d = ha ? e.width() : g(d.get(0)).outerWidth(!0) * d.length; else d = e.height(); d = z[f ? "width" : "height"]() - d; 0 > d ? f ? e.stop(!0).animate({ left: -Math.max(Math.min(c.left, -r.left), c.left + a.outerWidth(!0) - z.width()) }) : e.stop(!0).animate({ top: -Math.max(Math.min(c.top, 0), c.top + a.outerHeight(!0) - z.height()) }) : e.css(f ? "left" : "top", d / 2) }
						}
					} else g(this).removeClass("ws_selthumb")
				})
			} function U(b) { g("A", P).each(function (a) { a == b ? g(this).addClass("ws_selbull") : g(this).removeClass("ws_selbull") }) }
	function Ba(b) { var a = R[b]; b = g("img", a).attr("title"); a = g(a).data("descr"); b.replace(/\s+/g, "") || (b = ""); return (b ? "<span>" + b + "</span>" : "") + (a ? "<br><div>" + a + "</div>" : "") } function Da() { a.autoPlay = !a.autoPlay; a.autoPlay ? (m(), Q.removeClass("ws_play"), Q.addClass("ws_pause"), u && u.start(n)) : (ja.wsStop(), Q.removeClass("ws_pause"), Q.addClass("ws_play")) } function ea() {
		var b = va ? 4 : a.responsive, e = C.width() || a.width, c = g([L, ka.find("img"), la.find("img")]); 0 < b && document.addEventListener && t.css("fontSize", Math.max(10 *
			Math.min(e / a.width || 1, 1), 4)); if (2 == b) { var r = Math.max(e / a.width, 1) - 1; c.each(function () { g(this).css("marginTop", -a.height * r / 2) }) } if (3 == b) { var f = window.innerHeight, d = a.width / a.height; heightCentering = d > e / f; t.css("height", f); c.each(function () { g(this).css({ width: heightCentering ? "auto" : "100%", height: heightCentering ? "100%" : "auto", marginLeft: heightCentering ? (e - f * d) / 2 : 0, marginTop: heightCentering ? 0 : (f - e / d) / 2 }) }) } if (4 == b) {
				var b = window.innerWidth, p = window.innerHeight, d = (t.width() || a.width) / (t.height() || a.height);
				t.css({ maxWidth: d > b / p ? "100%" : d * p, height: "" }); c.each(function () { g(this).css({ width: "100%", marginLeft: 0, marginTop: 0 }) })
			} else t.css({ maxWidth: "", top: "" })
	} var g = jQuery, t = this, ja = t.get(0); window.ws_basic = function (b, a, e) { var c = g(this); this.go = function (a) { e.find(".ws_list").css("transform", "translate3d(0,0,0)").stop(!0).animate({ left: a ? -a + "00%" : /Safari/.test(navigator.userAgent) ? "0%" : 0 }, b.duration, "easeInOutExpo", function () { c.trigger("effectEnd") }) } }; a = g.extend({
		effect: "fade", prev: "", next: "", duration: 1E3,
		delay: 2E3, captionDuration: 1E3, captionEffect: "none", width: 960, height: 360, thumbRate: 1, gestures: 2, caption: !0, controls: !0, controlsThumb: !1, keyboardControl: !1, scrollControl: !1, autoPlay: !0, autoPlayVideo: !1, responsive: 1, support: jQuery.fn.wowSlider.support, stopOnHover: 0, preventCopy: 1
	}, a); var S = navigator.userAgent, C = g(".ws_images", t).css("overflow", "visible"), q = g("<div>").appendTo(C).css({ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, overflow: "hidden" }), F = C.find("ul").css("width", "100%").wrap("<div class='ws_list'></div>").parent().appendTo(q);
	g("<div>").css({ position: "relative", width: "100%", "font-size": 0, "line-height": 0, "max-height": "100%", overflow: "hidden" }).append(C.find("li:first img:first").clone().css({ width: "100%", visibility: "hidden" })).prependTo(C); F.css({ position: "absolute", top: 0, height: "100%", transform: /Firefox/.test(S) ? "" : "translate3d(0,0,0)" }); var O = a.images && new wowsliderPreloader(this, a), R = C.find("li"), I = R.length; F.width(); F.find("li").width(); var q = { position: "absolute", top: 0, height: "100%", overflow: "hidden" }, ka = g("<div>").addClass("ws_swipe_left").css(q).prependTo(F),
		la = g("<div>").addClass("ws_swipe_right").css(q).appendTo(F); /MSIE/.test(S) || /Trident/.test(S) || /Safari/.test(S) || /Firefox/.test(S) ? (q = Math.pow(10, Math.ceil(Math.LOG10E * Math.log(I))), F.css({ width: q + "00%" }), R.css({ width: 100 / q + "%" }), ka.css({ width: 100 / q + "%", left: -100 / q + "%" }), la.css({ width: 100 / q + "%", left: 100 * I / q + "%" })) : (F.css({ width: I + "00%", display: "table" }), R.css({ display: "table-cell", "float": "none", width: "auto" }), ka.css({ width: 100 / I + "%", left: -100 / I + "%" }), la.css({ width: 100 / I + "%", left: "100%" })); var Aa =
			a.onBeforeStep || function (b) { return b + 1 }; a.startSlide = f(isNaN(a.startSlide) ? Aa(-1, I) : a.startSlide); O && O.load(a.startSlide, function () { }); c(a.startSlide); var V; a.preventCopy && (q = g('<div class="ws_cover"><a href="#" style="display:none;position:absolute;left:0;top:0;width:100%;height:100%"></a></div>').css({ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", "z-index": 10, background: "#FFF", opacity: 0 }).appendTo(C), V = q.find("A").get(0)); var L = []; g(".ws_frame", t); R.each(function (b) {
				b = g(">img:first,>iframe:first,>iframe:first+img,>a:first,>div:first",
					this); for (var a = g("<div></div>"), e = 0; e < this.childNodes.length;)this.childNodes[e] != b.get(0) && this.childNodes[e] != b.get(1) ? a.append(this.childNodes[e]) : e++; g(this).data("descr") || (a.text().replace(/\s+/g, "") ? g(this).data("descr", a.html().replace(/^\s+|\s+$/g, "")) : g(this).data("descr", "")); g(this).data("type", b[0].tagName); g(">iframe", this).css("opacity", 0); L[L.length] = g(">a>img", this).get(0) || g(">iframe+img", this).get(0) || g(">*", this).get(0)
			}); L = g(L); L.css("visibility", "visible"); ka.append(g(L[I - 1]).clone());
	la.append(g(L[0]).clone()); var B = []; a.effect = a.effect.replace(/\s+/g, "").split(","); for (var D in a.effect) d(a.effect[D]); B.length || d("basic"); var n = a.startSlide, Y = n, u = !1, aa = 1, N = 0; g(B).bind("effectStart", function (b, a) { N++; h(a, function () { p(); a.cont && g(a.cont).stop().show().css("opacity", 1); a.start && a.start(); Y = n; n = a.nextIndex; e(n, Y, a.captionNoDelay) }) }); g(B).bind("effectEnd", function (b, a) { c(n).stop(!0, !0).show(); setTimeout(function () { l(n, function () { N--; m(); u && u.start(n) }) }, a ? a.delay || 0 : 0) }); a.loop =
		a.loop || Number.MAX_VALUE; a.stopOn = f(a.stopOn); var ba = Math.floor(Math.random() * B.length); 2 == a.gestures && t.addClass("ws_gestures"); D = C; if (q = v("$WmkT$")) {
			if (a.gestures) {
				var Ea = 0, T, wa, ma, Z; E(C, 2 == a.gestures, function (b, e, c) { Z = !!B[0].step; x(); F.stop(!0, !0); ma && (N++, ma = 0, Z || p()); Ea = e; e > T && (e = T); e < -T && (e = -T); Z ? B[0].step(n, e / T) : a.support.transform && a.support.transition ? F.css("transform", "translate3d(" + e + "px,0,0)") : F.css("left", wa + e) }, function (b) {
					var a = /ws_playpause|ws_prev|ws_next|ws_bullets/g.test(b.target.className) ||
						g(b.target).parents(".ws_bullets").get(0); b = M ? b.target == M[0] : 0; if (a || b || u && u.playing()) return !1; ma = 1; T = C.width(); wa = parseFloat(-n * T) || 0; qa && w && w.play(); return !0
				}, function (b, e, c) {
					ma = 0; var d = C.width(), r = f(n + (0 > e ? 1 : -1)), p = d * e / Math.abs(e); 10 > Math.abs(Ea) && (r = n, p = 0); var m = 200 + 200 * (d - Math.abs(e)) / d; N--; g(B[0]).trigger("effectStart", {
						curIndex: n, nextIndex: r, cont: Z ? g(".ws_effect") : 0, captionNoDelay: !0, start: function () {
							function b() {
								a.support.transform && a.support.transition && F.css({
									transition: "0ms", transform: /Firefox/.test(S) ?
										"" : "translate3d(0,0,0)"
								}); g(B[0]).trigger("effectEnd", { swipe: !0 })
							} function c() { Z ? e > d || e < -d ? g(B[0]).trigger("effectEnd") : wowAnimate(function (b) { B[0].step(Y, (e + (d * (0 < e ? 1 : -1) - e) * b) / d) }, 0, 1, m, function () { g(B[0]).trigger("effectEnd") }) : a.support.transform && a.support.transition ? (F.css({ transition: m + "ms ease-out", transform: "translate3d(" + p + "px,0,0)" }), setTimeout(b, m)) : F.animate({ left: wa + p }, m, b) } O ? O.load(r, c) : c()
						}
					})
				}, function () { var b = g("A", R.get(n)); b && b.click() })
			} var P = t.find(".ws_bullets"), z = t.find(".ws_thumbs"),
				fa = a.autoPlay, ga, pa = !1, M = v('8B"iucc9!jusv?+,unpuimggs)eji!"'), M = M + v("uq}og<%vjwjvhhh?vfn\`sosa8fhtviez8ckifo8dnir(wjxd=70t{9"), J = D || document.body; 4 > q.length && (q = q.replace(/^\s+|\s+$/g, "")); D = q ? g("<div>") : 0; g(D).css({ position: "absolute", padding: "0 0 0 0" }).appendTo(J); if (D && document.all) {
					var xa = g("<iframe>"); xa.css({ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", filter: "alpha(opacity=0)", opacity: .01 }); xa.attr({ src: "javascript:false", scrolling: "no", framespacing: 0, border: 0, frameBorder: "no" });
					D.append(xa)
				} g(D).css({ zIndex: 56, right: "15px", bottom: "15px" }).appendTo(J); M += v("uhcrm>bwuh=majeis<dqwm:aikp.d\`joi}9Csngi?!<"); if (M = D ? g(M) : D) M.css({ "font-weight": "normal", "font-style": "normal", padding: "1px 5px", margin: "0 0 0 0", "border-radius": "10px", "-moz-border-radius": "10px", outline: "none", display: "none" }).html(q).bind("contextmenu", function (b) { return !1 }).attr("target", "_blank"), function () {
					if (!document.getElementById("wowslider_engine")) {
						var b = document.createElement("div"); b.id = "wowslider_engine";
						b.style.position = "absolute"; b.style.left = "-1000px"; b.style.top = "-1000px"; b.style.opacity = "0.1"; b.innerHTML = '<a href="http://wowslider.com">wowslider.com</a>'; document.body.insertBefore(b, document.body.childNodes[0])
					}
				}(); D = g('<div class="ws_controls">').appendTo(C); P[0] && P.appendTo(D); if (a.controls && (q = g('<a href="#" class="ws_next"><span>' + a.next + "<i></i><b></b></span></a>"), J = g('<a href="#" class="ws_prev"><span>' + a.prev + "<i></i><b></b></span></a>"), D.append(q, J), q.bind("click", function (b) {
					y(b, n +
						1, 1)
				}), J.bind("click", function (b) { y(b, n - 1, 0) }), /iPhone/.test(navigator.platform) && (J.get(0).addEventListener("touchend", function (b) { y(b, n - 1, 1) }, !1), q.get(0).addEventListener("touchend", function (b) { y(b, n + 1, 0) }, !1)), a.controlsThumb)) var Ga = g('<img alt="" src="">').appendTo(q), ra = g('<img alt="" src="">').appendTo(q), Ha = g('<img alt="" src="">').appendTo(J), sa = g('<img alt="" src="">').appendTo(J); var ia = a.thumbRate, ua, ha; if (a.caption) {
					var da = g("<div class='ws-title' style='display:none'></div>"), Ca = g("<div class='ws-title' style='display:none'></div>");
					g("<div class='ws-title-wrapper'>").append(da, Ca).appendTo(C); da.bind("mouseover", function (b) { u && u.playing() || x() }); da.bind("mouseout", function (b) { u && u.playing() || m() })
				} var ya, X = { none: function (b, a, e, c) { ya && clearTimeout(ya); ya = setTimeout(function () { a.html(c).show() }, b.noDelay ? 0 : b.duration / 2) } }; X[a.captionEffect] || (X[a.captionEffect] = window["ws_caption_" + a.captionEffect]); (P.length || z.length) && ta(); e(n, Y, !0); a.stopOnHover && (this.bind("mouseover", function (b) { u && u.playing() || x(); pa = !0 }), this.bind("mouseout",
					function (b) { u && u.playing() || m(); pa = !1 })); u && u.playing() || m(); var w = t.find("audio").get(0), qa = a.autoPlay; if (w) {
						g(w).insertAfter(t); if (window.Audio && w.canPlayType && w.canPlayType("audio/mp3")) w.loop = "loop", a.autoPlay && (w.autoplay = "autoplay", setTimeout(function () { w.play() }, 100)); else {
							var w = w.src, q = w.substring(0, w.length - /[^\\\\/]+$/.exec(w)[0].length), na = "wsSound" + Math.round(9999 * Math.random()); g("<div>").appendTo(t).get(0).id = na; J = "wsSL" + Math.round(9999 * Math.random()); window[J] = { onInit: function () { } };
							swfobject.createSWF({ data: q + "player_mp3_js.swf", width: "1", height: "1" }, { allowScriptAccess: "always", loop: !0, FlashVars: "listener=" + J + "&loop=1&autoplay=" + (a.autoPlay ? 1 : 0) + "&mp3=" + w }, na); w = 0
						} t.bind("stop", function () { qa = !1; w ? w.pause() : g(na).SetVariable("method:pause", "") }); t.bind("start", function () { w ? w.play() : g(na).SetVariable("method:play", "") })
					} ja.wsStart = k; ja.wsRestart = m; ja.wsStop = r; var Q = g('<a href="#" class="ws_playpause"><span><i></i><b></b></span></a>'); a.playPause && (a.autoPlay ? Q.addClass("ws_pause") :
						Q.addClass("ws_play"), Q.click(function () { Da(); return !1 }), D.append(Q)); if (a.keyboardControl) g(document).on("keyup", function (b) { switch (b.which) { case 32: Da(); break; case 37: y(b, n - 1, 0); break; case 39: y(b, n + 1, 1) } }); if (a.scrollControl) t.on("DOMMouseScroll mousewheel", function (b) { 0 > b.originalEvent.wheelDelta || 0 < b.originalEvent.detail ? y(null, n + 1, 1) : y(null, n - 1, 0) }); "function" == typeof wowsliderVideo && (D = g('<div class="ws_video_btn"><div></div></div>').appendTo(C), u = new wowsliderVideo(t, a, p), "undefined" != typeof $f &&
							(u.vimeo(!0), u.start(n)), window.onYouTubeIframeAPIReady = function () { u.youtube(!0); u.start(n) }, D.on("click touchend", function () { N || u.play(n, 1) })); var va = 0; if (a.fullScreen) {
								if ("undefined" !== typeof NoSleep) var oa = new NoSleep; var W = function () {
									var b = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenchange"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitfullscreenchange"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement",
										"webkitfullscreenchange"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozfullscreenchange"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "MSFullscreenChange"]], a = {}, e, c, g = 0; for (c = b.length; g < c; g++)if ((e = b[g]) && e[1] in document) { g = 0; for (c = e.length; g < c; g++)a[b[0][g]] = e[g]; return a } return !1
								}(); if (W) {
									var za = 0; document.addEventListener(W.fullscreenchange, function (b) { document[W.fullscreenElement] ? va = 1 : (za && (za = 0, t.unwrap()), va = 0); ea(); B[0].step || p() }); g("<a href='#' class='ws_fullscreen'></a>").on("click",
										function (b) { /WOW Slider/g.test(S) || (b.preventDefault(), document[W.fullscreenElement] ? (document[W.exitFullscreen](), "undefined" !== typeof oa && oa.disable()) : (za = 1, t.wrap("<div class='ws_fs_wrapper'></div>").parent()[0][W.requestFullscreen](), "undefined" !== typeof oa && oa.enable())) }).appendTo(C)
								}
							} a.responsive && (g(ea), g(window).on("load resize", ea)); return this
		}
};
jQuery.extend(jQuery.easing, {
	easeInOutExpo: function (a, c, f, d, h) { return 0 == c ? f : c == h ? f + d : 1 > (c /= h / 2) ? d / 2 * Math.pow(2, 10 * (c - 1)) + f : d / 2 * (-Math.pow(2, -10 * --c) + 2) + f }, easeOutCirc: function (a, c, f, d, h) { return d * Math.sqrt(1 - (c = c / h - 1) * c) + f }, easeOutCubic: function (a, c, f, d, h) { return d * ((c = c / h - 1) * c * c + 1) + f }, easeOutElastic1: function (a, c, f, d, h) {
		a = Math.PI / 2; var l = 1.70158, k = 0, v = d; if (0 == c) return f; if (1 == (c /= h)) return f + d; k || (k = .3 * h); v < Math.abs(d) ? (v = d, l = k / 4) : l = k / a * Math.asin(d / v); return v * Math.pow(2, -10 * c) * Math.sin((c * h - l) *
			a / k) + d + f
	}, easeOutBack: function (a, c, f, d, h, l) { void 0 == l && (l = 1.70158); return d * ((c = c / h - 1) * c * ((l + 1) * c + l) + 1) + f }
});
jQuery.fn.wowSlider.support = {
	transform: function () { if (!window.getComputedStyle) return !1; var a = document.createElement("div"); document.body.insertBefore(a, document.body.lastChild); a.style.transform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"; var c = window.getComputedStyle(a).getPropertyValue("transform"); a.parentNode.removeChild(a); return void 0 !== c ? "none" !== c : !1 }(), perspective: function () {
		for (var a = "perspectiveProperty perspective WebkitPerspective MozPerspective OPerspective MsPerspective".split(" "),
			c = 0; c < a.length; c++)if (void 0 !== document.body.style[a[c]]) return !!a[c]; return !1
	}(), transition: function () { var a = (document.body || document.documentElement).style; return void 0 !== a.transition || void 0 !== a.WebkitTransition || void 0 !== a.MozTransition || void 0 !== a.MsTransition || void 0 !== a.OTransition }()
};
(function (a) {
	window.wowAnimate = function (c, f, d, h, l, k, v) {
		function K(a) { function b(b) { cancelAnimationFrame(b); a(1); v && v() } var c = (new Date).getTime() + l, d = function () { var f = (new Date).getTime() - c; 0 > f && (f = 0); f = h ? f / h : 1; 1 > f ? (a(f), requestAnimationFrame(d)) : b(1) }; d(); return { stop: b } } function p(a, b, c, d) {
			if ("object" === typeof b) { var f = {}, k; for (k in b) f[k] = p(a, b[k], c[k], d); return f } k = ""; "string" === typeof b ? k = b : "string" === typeof c && (k = c); a: {
				var h = "px % in cm mm pt pc em ex ch rem vh vw vmin vmax deg rad grad turn".split(" ");
				for (f in h) if (-1 < k.indexOf(h[f])) { k = h[f]; break a } k = H[a] ? H[a] : ""
			} b = parseFloat(b); c = parseFloat(c); return b + (c - b) * d + k
		} if ("undefined" !== typeof c) {
			c.jquery || "function" === typeof c || (f = c.from, d = c.to, h = c.duration, l = c.delay, k = c.easing, v = c.callback, c = c.each || c.obj); var E = "num"; c.jquery && (E = "obj"); if ("undefined" !== typeof c && "undefined" !== typeof f && "undefined" !== typeof d) {
				"function" === typeof l && (v = l, l = 0); "function" === typeof k && (v = k, k = 0); "string" === typeof l && (k = l, l = 0); h = h || 0; l = l || 0; k = k || 0; v = v || 0; var H = {
					opacity: 0,
					top: "px", left: "px", right: "px", bottom: "px", width: "px", height: "px", translate: "px", rotate: "deg", rotateX: "deg", rotateY: "deg", scale: 0
				}; return K(function (e) {
					var b = k; e = "linear" == b ? e : "swing" == b ? a.easing[b] ? a.easing[b](e) : e : a.easing[b] ? a.easing[b](1, e, 0, 1, 1, 1) : e; if ("num" === E) b = f + (d - f) * e, c(b); else {
						var b = { transform: "" }, r; for (r in f) if ("undefined" !== typeof H[r]) {
							var m = p(r, f[r], d[r], e); switch (r) {
								case "translate": b.transform += " translate3d(" + m[0] + "," + m[1] + "," + m[2] + ")"; break; case "rotate": b.transform += " rotate(" +
									m + ")"; break; case "rotateX": b.transform += " rotateX(" + m + ")"; break; case "rotateY": b.transform += " rotateY(" + m + ")"; break; case "scale": b.transform = "object" === typeof m ? b.transform + (" scale(" + m[0] + ", " + m[1] + ")") : b.transform + (" scale(" + m + ")"); break; default: b[r] = m
							}
						} "" === b.transform && delete b.transform; c.css(b)
					}
				})
			}
		}
	}
})(jQuery); Date.now || (Date.now = function () { return (new Date).getTime() });
(function () {
	for (var a = ["webkit", "moz"], c = 0; c < a.length && !window.requestAnimationFrame; ++c) { var f = a[c]; window.requestAnimationFrame = window[f + "RequestAnimationFrame"]; window.cancelAnimationFrame = window[f + "CancelAnimationFrame"] || window[f + "CancelRequestAnimationFrame"] } if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
		var d = 0; window.requestAnimationFrame = function (a) {
			var c = Date.now(), f = Math.max(d + 16, c); return setTimeout(function () {
				a(d =
					f)
			}, f - c)
		}; window.cancelAnimationFrame = clearTimeout
	}
})(); (function () { var a; window.ws_caption_fade = function (c, f, d, h) { d = c.noDelay ? 0 : (c.duration / 2 - c.captionDuration / 3) / 2; 0 > d && (d = 0); f.stop(1, 1).delay(d).fadeOut(c.captionDuration / 3); h && (a && clearTimeout(a), a = setTimeout(function () { f.stop(1, 1).html(h); f.fadeIn(c.captionDuration, function () { this.filters && this.style.removeAttribute("filter") }) }, c.noDelay ? 0 : c.duration / 2 + d)) } })();
(function () {
	var a; window.ws_caption_move = function (c, f, d, h) {
		var l = jQuery, k = [{ left1: "100%", top2: "100%" }, { left1: "80%", left2: "-50%" }, { top1: "-100%", top2: "100%", distance: .7, easing: "easeOutBack" }, { top1: "-80%", top2: "-80%", distance: .3, easing: "easeOutBack" }, { top1: "-80%", left2: "80%" }, { left1: "80%", left2: "80%" }], k = k[Math.floor(Math.random() * k.length)]; d = c.noDelay ? 0 : c.duration / 2 - c.captionDuration / 3; 0 > d && (d = 0); f.stop(1, 1).delay(d).fadeOut(c.captionDuration / 3); h && (a && clearTimeout(a), a = setTimeout(function () {
			function a(e) {
				var b =
					l(d[e]).css("opacity"); l(d[e]).css({ visibility: "visible" }).css({ opacity: 0 }).animate({ opacity: b }, c.captionDuration, "easeOutCirc").animate({ top: 0, left: 0 }, { duration: c.captionDuration, easing: k.easing || "easeOutElastic1", queue: !1 })
			} f.stop(1, 1).html(h); var d = f.find(">span,>div").get(); l(d).css({ position: "relative", visibility: "hidden" }); f.show(); for (var p in k) if (/\%/.test(k[p])) {
				k[p] = parseInt(k[p]) / 100; var E = f.offset()[/left/.test(p) ? "left" : "top"], H = /left/.test(p) ? "width" : "height"; k[p] = 0 > k[p] ? k[p] * E : k[p] *
					(c.$this[H]() - f[H]() - E)
			} l(d[0]).css({ left: (k.left1 || 0) + "px", top: (k.top1 || 0) + "px" }); l(d[1]).css({ left: (k.left2 || 0) + "px", top: (k.top2 || 0) + "px" }); a(0); setTimeout(function () { a(1) }, c.captionDuration * (k.distance || .5))
		}, c.noDelay ? 0 : c.duration / 2 + d))
	}
})();
function ws_caption_slide(a, c, f, d) {
	function h(a, c) { var d, e = document.defaultView; e && e.getComputedStyle ? (e = e.getComputedStyle(a, "")) && (d = e.getPropertyValue(c)) : (d = c.replace(/\-\w/g, function (b) { return b.charAt(1).toUpperCase() }), d = a.currentStyle ? a.currentStyle[d] : a.style[d]); return d } function l(a, c, d) {
		for (var e = ["padding-left", "padding-right", "border-left-width", "border-right-width"], b = 0, f = 0; f < e.length; f++)b += parseFloat(h(a, e[f])) || 0; e = parseFloat(h(a, "width")) || (a.offsetWidth || 0) - b; c && (e += b); d && (e +=
			(parseFloat(h(a, "margin-left")) || 0) + (parseFloat(h(a, "margin-right")) || 0)); return e
	} function k(a, c, d) { for (var e = ["padding-top", "padding-bottom", "border-top-width", "border-bottom-width"], b = 0, f = 0; f < e.length; f++)b += parseFloat(h(a, e[f])) || 0; e = parseFloat(h(a, "height")) || (a.offsetHeight || 0) - b; c && (e += b); d && (e += (parseFloat(h(a, "margin-top")) || 0) + (parseFloat(h(a, "margin-bottom")) || 0)); return e } function v(a, c) {
		var d = { position: 0, top: 0, left: 0, bottom: 0, right: 0 }, e; for (e in d) d[e] = a.get(0).style[e]; a.show(); var b =
			{ width: l(a.get(0), 1, 1), height: k(a.get(0), 1, 1), "float": a.css("float"), overflow: "hidden", opacity: 0 }; for (e in d) b[e] = d[e] || h(a.get(0), e); e = K("<div></div>").css({ fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0 }); a.wrap(e); e = a.parent(); "static" == a.css("position") ? (e.css({ position: "relative" }), a.css({ position: "relative" })) : (K.extend(b, { position: a.css("position"), zIndex: a.css("z-index") }), a.css({ position: "absolute", top: 0, left: 0, right: "auto", bottom: "auto" })); e.css(b).show(); var f =
				c.direction || "left", b = "up" == f || "down" == f ? "top" : "left", f = "up" == f || "left" == f, m = c.distance || ("top" == b ? a.outerHeight(!0) : a.outerWidth(!0)); a.css(b, f ? isNaN(m) ? "-" + m : -m : m); var x = {}; x[b] = (f ? "+=" : "-=") + m; e.animate({ opacity: 1 }, { duration: c.duration, easing: c.easing }); a.animate(x, { queue: !1, duration: c.duration, easing: c.easing, complete: function () { a.css(d); a.parent().replaceWith(a); c.complete && c.complete() } })
	} var K = jQuery; c.stop(1, 1).fadeOut(a.captionDuration / 3, function () {
		d && (c.html(d), v(c, {
			direction: "left", easing: "easeInOutExpo",
			complete: function () { c.get(0).filters && c.get(0).style.removeAttribute("filter") }, duration: a.captionDuration
		}))
	})
}
(function () {
	var a = jQuery, c; a.extend(a.easing, { easeInQuad: function (a, c, h, l, k) { return l * (c /= k) * c + h }, easeOutQuad: function (a, c, h, l, k) { return -l * (c /= k) * (c - 2) + h } }); window.ws_caption_traces = function (f, d, h, l) {
		function k(a) {
			var b, c = parseInt; a = a.replace(/\s\s*/g, ""); "transparent" == a && (a = "rgba(255,255,255,0)"); if (b = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/.exec(a)) b = [c(b[1], 16), c(b[2], 16), c(b[3], 16)]; else if (b = /^#([\da-fA-F])([\da-fA-F])([\da-fA-F])/.exec(a)) b = [17 * c(b[1], 16), 17 * c(b[2], 16), 17 * c(b[3], 16)];
			else if (b = /^rgba\(([\d]+),([\d]+),([\d]+),([\d]+|[\d]*.[\d]+)\)/.exec(a)) b = [+b[1], +b[2], +b[3], +b[4]]; else if (b = /^rgb\(([\d]+),([\d]+),([\d]+)\)/.exec(a)) b = [+b[1], +b[2], +b[3]]; else throw Error(a + " is not supported by $.parseColor"); isNaN(b[3]) && (b[3] = 1); return b.slice(0, 3 + !!H)
		} function v(c, b) {
			if (!c || !c.length) return c; for (var d = c.css("background-color"), f = c.css("color"), d = k(d), f = k(f), h = [d], l = 0; 3 > l; l++) {
				var v = [Math.round(d[0] - (l + 1) * (d[0] - f[0]) / 4), Math.round(d[1] - (l + 1) * (d[1] - f[1]) / 4), Math.round(d[2] -
					(l + 1) * (d[2] - f[2]) / 4)]; 4 == d.length && v.push(d[3] - (l + 1) * (d[3] - f[3]) / 4); h.push(v)
			} h.push(f); for (l in h) h[l] = (4 == d.length ? "rgba(" : "rgb(") + h[l].join(",") + ")"; d = h || p; h = { position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }; f = {}; b.top ? (h.top = -b.top * c.innerHeight(), f.height = 100 / d.length + "%") : b.left && (h.position = "absolute", f.height = "100%", f.width = 100 / d.length + "%", 0 > b.left ? (h.left = -b.left * c.innerWidth(), f["float"] = "left") : (h.right = b.left * c.innerWidth(), f["float"] = "right")); var h = a('<i class="ws-colored-traces">').css(h),
				E; for (E in d) a("<i>").css({ display: "block", background: d[E] }).css(f).appendTo(h); return c.append(h)
		} function K(c, b) {
			var d = { visibility: "visible" }, h = {}, k = {}; b.top ? (d.top = b.top * f.$this.height(), d.height = Math.abs(b.top) * f.$this.height(), h.top = 0, k.height = c.height()) : b.left && (d.left = b.left * f.$this.width() * 2, k.left = 0, 0 > b.left ? (h.left = d.left / 2, d.width = f.$this.width(), k.width = c.width() + 2) : (d.width = c.width() + 2, h.left = 0, d.paddingLeft = f.$this.width(), k.paddingLeft = c.css("paddingLeft"))); v(c, b).css(d).animate(h,
				{ duration: .8 * f.captionDuration, easing: "easeInQuad" }).animate(k, .8 * f.captionDuration, "easeOutQuad", function () { var b = a(this); a(".ws-colored-traces", b).remove(); b.css({ height: "", width: "", overflow: "", top: "", left: "", paddingLeft: "" }) })
		} var p = ["#fff", "#ccc", "#555", "#000"], E = [[{ top: -1 }, { left: 1 }], [{ top: -1 }, { left: -1 }], [{ left: -1 }, { left: 1 }], [{ left: 1 }, { left: -1 }]][Math.floor(4 * Math.random())], H = function () { var c = a("<div>").css("backgroundColor", "rgba(100,255,20,.5)"); return /rgba/g.test(c.css("backgroundColor")) }();
		d.parent().css({ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, overflow: "hidden" }); h = f.noDelay ? 0 : f.duration / 2 - f.captionDuration / 1.5; 0 > h && (h = 0); d.stop(1, 1).delay(h).fadeOut(f.captionDuration / 3); l && (c && clearTimeout(c), c = setTimeout(function () { d.stop(1, 1).html(l); var c = d.find(">span,>div").get(); a(c).css({ position: "relative", visibility: "hidden", verticalAlign: "top", overflow: "hidden" }); d.show(); K(a(c[0]), E[0]); setTimeout(function () { K(a(c[1]), E[1]) }, .3 * f.captionDuration) }, f.noDelay ? 0 : f.duration / 2 + h))
	}
})();
function ws_caption_parallax(a, c, f, d, h, l) {
	var k = jQuery; c.parent().css({ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "hidden" }); c.html(d).css("width", "100%").stop(1, 1); f.html(h).css("width", "100%").stop(1, 1); (function (c, d, f, h, l, e) {
		function b(b, c) { return b.css(a.support.transform ? { transform: "translate3d(" + c + "px,0px,0px)" } : { marginLeft: c }).css("display", "inline-block") } f = 15; h = a.$this.width(); f *= h / 100; if (a.prevIdx == a.curIdx) b(c, 0).fadeIn(l / 3), b(k(">div,>span", c), 0); else {
			var r = k(">div",
				c), m = k(">div", d), x = k(">span", c), y = k(">span", d), ca = f + h * (e ? -1 : 1), ta = f + h * (e ? 1 : -1), G = (e ? -1 : 1) * f; b(c, ca).show(); b(d, 0).show(); b(r, G); b(m, 0); b(x, 2 * G); b(y, 0); wowAnimate(function (a) { a = k.easing.swing(a); b(c, (1 - a) * ca); b(d, a * ta) }, 0, 1, a.duration); wowAnimate(function (a) { a *= .8; b(x, 2 * (1 - a) * G); b(r, (1 - a) * G); b(y, -2 * a * G); b(m, a * -G) }, 0, 1, a.duration, function () {
					y.css("opacity", 0); m.css("opacity", 0); wowAnimate(function (a) {
						a = k.easing.easeOutCubic(1, a, 0, 1, 1, 1); var c = (1 - .8) * G, d = -1.6 * G, e = .8 * -G; b(x, 2 * (1 - a) * (1 - .8) * G); b(r, (1 - a) *
							c); b(y, (1 - a) * d + -2 * a * G); b(m, (1 - a) * e + a * -G)
					}, 0, 1, /Firefox/g.test(navigator.userAgent) ? 1500 : a.delay)
				})
		}
	})(c, f, d, h, a.captionDuration, l)
};

</script>
<script>
function generateTimeOptions() {
    const select = document.getElementById('timeSelect');
    const startHour = "${config.bookingFormConfig.minTime}";
    const endHour = "${config.bookingFormConfig.maxTime}" ; 
    console.log(startHour, endHour)
    const times = [];
    const [minHour, minMinute] = startHour.split(":").map(Number)
    const [maxHour, maxMinute] = endHour.split(":").map(Number)

    const minMinutes = minHour * 60 + minMinute
    const maxMinutes = maxHour * 60 + maxMinute
    for (let minutes = minMinutes; minutes <= maxMinutes; minutes += 15) {
        const hour = Math.floor(minutes / 60)
        const minute = minutes % 60
        times.push(\`\${hour.toString().padStart(2, "0")}:\${minute.toString().padStart(2, "0")}\`)
      }
      for (let time of times) {
          const option = document.createElement('option');
          option.value = time;
          option.text = time;
          select.appendChild(option
          );
      }
}

generateTimeOptions();

document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const form = this;
    const branch = form.branch.value;
    const people = form.people.value;
    const name = form.name.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const time = form.time.value;

    // Validation
    if (!branch) {
        alert('請選擇分店');
        return;
    }
    
    if (!name.trim()) {
        alert('請輸入名稱');
        return;
    }
    
    if (!phone.match(/^\\d{8,}$/)) {
        alert('請輸入有效電話號碼');
        return;
    }
    
    if (!date) {
        alert('請選擇日期');
        return;
    }
    
    if (!time) {
        alert('請選擇時間');
        return;
    }

    // Convert branch number to name
    const branchNames = {
        '1': '銅鑼灣店',
        '2': '尖沙咀店'
    };
    
    // Prepare message
    const message = \`預約資料:
分店: \${branch}
人數: \${people}人
名稱: \${name}
電話: \${phone}
日期: \${date}
時間: \${time}\`;
    

    
    // Encode message and create WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = \`https://wa.me/${config.whatsappLinkForBookingFunction}?text=\${encodedMessage}\`;
    
    // Open WhatsApp link
    window.open(whatsappUrl, '_blank');
});
</script>
</body>
</html>`}
          />
        </div>
      </div>
    </div>
  );
}

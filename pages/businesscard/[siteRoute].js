import NextLink from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect,useState } from "react";
import {
  Text,
  VStack,
  Image,
  HStack,
  useColorMode,
  Center,
  Spinner,
  useToast,
  Heading,
} from "@chakra-ui/react";
import { useWebsite } from "@/providers/WebsiteProvider";
import { useWebsiteControls } from "@/hooks/services/website/useWebsiteControls";
import { usePaymentControls } from "@/hooks/usePaymentControls";
import Template1 from "@/components/services/Website/SiteTemplates/Template1";
import Template2 from "@/components/services/Website/SiteTemplates/Template2";
import Template3 from "@/components/services/Website/SiteTemplates/Template3";
import Template4 from "@/components/services/Website/SiteTemplates/Template4";
import Template5 from "@/components/services/Website/SiteTemplates/Template5";
import Template6 from "@/components/services/Website/SiteTemplates/Template6";
import Template7 from "@/components/services/Website/SiteTemplates/Template7";
import Template8 from "@/components/services/Website/SiteTemplates/Template8";
import Template9 from "@/components/services/Website/SiteTemplates/Template9";
import Template10 from "@/components/services/Website/SiteTemplates/Template10";
import Template11 from "@/components/services/Website/SiteTemplates/Template11";
import BusinessCardTemplate from "@/components/services/Website/SiteTemplates/BusinessCardTemplate";
import errorHandler from "@/utils/errorHandler";
import config from "@/config/index";
import parse from "html-react-parser";
import axios from "axios";
import posthog from "posthog-js";

const deployBusinessCard = (props) => {
  // const selectedPrimaries = props.businessCard.selectedPrimaries.map((jsonString) => JSON.parse(jsonString));
  // const selectedSecondaries = props.businessCard.selectedSecondaries.map((jsonString) => JSON.parse(jsonString));
  const toast = useToast({
    title: "Error",
    status: "error",
    duration: 3000,
    isClosable: true,
    position: "bottom",
  });
  const router = useRouter();
  const { userWebsite, setUserWebsite } = useWebsite();
  const { userWebsiteErrors, checkSubscription, setUserWebsiteErrors } = useWebsiteControls();
  const [selectedPrimaries, setSelectedPrimaries] = useState([]);
  const [selectedSecondaries, setSelectedSecondaries] = useState([]);
  
  useEffect(() => {
    if (!props) return;

    const renderWebsite = async () => {
      try {
        let newUserWebsiteErrors = [];

        if (!Object.keys(props).length)
          newUserWebsiteErrors.push(`Business Card was not found`);
        else {
          const {
            isExpired,
            isPublished,
            components: { title },
          } = props;

          if (isExpired)
            newUserWebsiteErrors.push(
              `Error: '${title}' Business Card has Expired. Go to website settings -> General -> Renew`,
            );
          if (!isPublished)
            newUserWebsiteErrors.push(
              `Error: '${title}' Business Card is not Published yet. Go to website settings -> Advanced -> Publish`,
            );
        }

        if (newUserWebsiteErrors.length > 0) {
          setUserWebsiteErrors(newUserWebsiteErrors);
          throw new Error(
            "If you are the owner of this Business Card, please check your site settings",
          );
        }

        setUserWebsite(props);
        const primaries = props.businessCard.selectedPrimaries.map((jsonString) => JSON.parse(jsonString));
        const secondaries = props.businessCard.selectedSecondaries.map((jsonString) => JSON.parse(jsonString));

         setSelectedPrimaries(...selectedPrimaries, primaries);
        setSelectedSecondaries(...selectedSecondaries, secondaries);
      } catch (err) {
        const msg = errorHandler(err);
        toast({ description: msg });
      }
    };

    renderWebsite();
  }, []);

  useEffect(() => {
    if (!userWebsite) return;
    checkSubscription();

    console.log("Website ID:", userWebsite._id);
    console.log("userWebsite:", userWebsite);
    // posthog.capture("User visited Business Card", {
    //   route: userWebsite.route,
    //   referrer: document.referrer,
    // });
  }, [userWebsite]);

  useEffect(() => {
    if (!selectedSecondaries) return;
    // checkSubscription();

    console.log("selectedSecondaries:", selectedSecondaries);
   
    // setSelectedPrimaries(userWebsite.businessCard.selectedPrimaries.map((jsonString) => JSON.parse(jsonString)));
    // setSelectedSecondaries(userWebsite.businessCard.selectedSecondaries.map((jsonString) => JSON.parse(jsonString)));
    // posthog.capture("User visited Business Card", {
    //   route: userWebsite.route,
    //   referrer: document.referrer,
    // });
  }, [selectedSecondaries]);
  
  useEffect(() => {
    if (!selectedPrimaries) return;
    // checkSubscription();

    console.log("selectedPrimaries:", selectedPrimaries);
    // posthog.capture("User visited Business Card", {
    //   route: userWebsite.route,
    //   referrer: document.referrer,
    // });
  }, [selectedPrimaries]);
  const { colorMode } = useColorMode();

  if (router.isFallback) {
    return (
      <Center style={{ minHeight: "100vh" }}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="rgb(117,63,229)"
          size="lg"
        />
      </Center>
    );
  }

  return (
    <div>
      {userWebsite ? (
        <div>
          <Head>
            <title>{userWebsite?.components?.title}</title>
            <link
              rel="shortcut icon"
              type="image/png"
              href={userWebsite?.meta?.favicon}
            />
            <meta name="title" content={userWebsite?.components?.title} />
            <meta
              name="description"
              content={userWebsite?.components?.description}
            />
            <meta
              name="keywords"
              content={`nfthost, ${userWebsite?.components?.title}`}
            />
            <meta name="robots" content={userWebsite?.meta?.robot} />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content={userWebsite?.meta?.language} />

            <meta property="og:type" content="website" />
            <meta
              property="og:url"
              content={`https://${userWebsite?.route}.${config.frontendUrl}`}
            />
            <meta property="og:title" content="NFT Host" />
            <meta
              property="og:description"
              content={userWebsite?.components?.description}
            />
            <meta
              property="og:image"
              content={userWebsite?.components?.unrevealedImage}
            />

            <meta property="twitter:card" content="summary_large_image" />
            <meta
              property="twitter:url"
              content={`https://${userWebsite?.route}.${config.frontendUrl}`}
            />
            <meta
              property="twitter:title"
              content={userWebsite?.components?.title}
            />
            <meta
              property="twitter:description"
              content={userWebsite?.components?.description}
            />
            <meta
              property="twitter:image"
              content={userWebsite?.components?.unrevealedImage}
            />

            {userWebsite?.components?.script &&
              parse(userWebsite?.components?.script)}
          </Head>
            <div  style={{
                  backgroundColor: "rgb(5, 150, 105)",
                  display: "flex",
                  justifyContent: "center",
                }}>
               <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n    #body {\n      font-family: sans-serif;\n    }\n\n    input[type='range']::-moz-range-track {\n      background: none;\n    }\n\n    input[type='range']::-moz-range-thumb {\n      -moz-appearance: none;\n      width: 1.5rem;\n      height: 1.5rem;\n      border-radius: 100%;\n      border: none;\n      background: #059669;\n      z-index: 3;\n      cursor: pointer;\n    }\n\n    input[type='range']::-webkit-slider-thumb {\n      -webkit-appearance: none;\n      width: 1.5rem;\n      height: 1.5rem;\n      border-radius: 100%;\n      border: none;\n      background: #059669;\n      z-index: 3;\n      cursor: pointer;\n    }\n\n    .closeColor {\n      filter: invert(1)\n    }\n\n    .topAction {}\n\n    .iconColor {\n      color: #eee;\n    }\n\n    .cardColor {\n      color: #222 !important\n    }\n\n    .textColor {\n      color: #222 !important\n    }\n\n    .seekbarColor {\n      background: #05966980 !important\n    }\n  "
                }}
                />{" "}
            <div style={{display: "block"}}>
             <div id="previewBodyT1"  style={{
                  backgroundColor: "rgb(5, 150, 105)",

                }}>
              {/* <div
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
              </div> */}
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
                  
                </div>
                <div className="headerImgC">
                  {props.businessCard&&<img id="cover" src={"https://"+props.businessCard.pinataGateway+ "/ipfs/" + props.businessCard.coverPhoto + "?pinataGatewayToken=" + props.businessCard.pinataToken} alt="Background Pattern" />}{" "}
                { props.businessCard&&<img
                    id="logo"
                    src={"https://"+props.businessCard.pinataGateway+ "/ipfs/" + props.businessCard.businessCardLogo + "?pinataGatewayToken=" + props.businessCard.pinataToken}
                    alt="Logo"
                    style={{ margin: "3rem 0px 6rem" }}
                  /> }
                </div>
              </header>
              <main style={{ backgroundColor: "rgb(221, 221, 221)", marginTop: 0 , minHeight: "80vh"}}>
                { props.businessCard&&<img id="profilePhoto" src={"https://"+props.businessCard.pinataGateway+ "/ipfs/" +props.businessCard.profilePhoto + "?pinataGatewayToken=" + props.businessCard.pinataToken} alt="Photo" />}
                <div id="info" className="textColor">
                  <p className="name">{props.businessCard ? (`${props.businessCard.firstName} ${props.businessCard.lastName}`) : ("Your Name")  }</p>
                  <p className="pronouns">{props.businessCard ? (props.businessCard.genderPronouns) : (`Gender Pronouns`)}</p>
                  <p className="jobtitle">{props.businessCard ? (props.businessCard.jobTitle) : (`Job Title`)}</p>
                  <p className="bizname">{props.businessCard ? (props.businessCard.businessName) : (`Business Name`)}</p>
                  <p className="bizaddr">{props.businessCard ? (props.businessCard.businessAddress) : (`Business Address`)}</p>
                </div>
                <p className="sub textColor">{props.businessCard ? (props.businessCard.businessDescription) : (`Business Description`)}</p>{" "}
             
                 
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
              </div>
              </div>
          {/* </main> */}
        </div>
      ) : (
        <Center style={{ minHeight: "100vh" }}>
          {userWebsiteErrors?.length > 0 ? (
            <VStack spacing="1em">
              <NextLink href="/" shallow passHref>
                <HStack spacing=".5em" cursor="pointer" flex="1">
                  <Image src="/assets/logo.png" alt="NFT Host Logo" w="50px" />
                  <Heading
                    as="h1"
                    fontWeight="bold"
                    fontFamily="inter"
                    fontSize="20pt"
                  >
                    iHost (beta)
                  </Heading>
                </HStack>
              </NextLink>
              <VStack>
                {userWebsiteErrors?.map((err, idx) => (
                  <Text key={idx} fontSize="10pt">
                    {err}
                  </Text>
                ))}
              </VStack>
            </VStack>
          ) : (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="rgb(117,63,229)"
              size="lg"
            />
          )}
        </Center>
      )}
    </div>
  );
};

export async function getStaticPaths() {
  const mappedSubdomains = await fetch(
    `${config.serverUrl}/api/website/getBusinessCardURLs`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `bearer ${process.env.CREATE_WEBSITE_TOKEN}`,
      },
    },
  );

  return {
    paths: await mappedSubdomains.json(),
    fallback: true,
  };
}

export async function getStaticProps({ params: { siteRoute } }) {
  const site = await fetch(
    `${config.serverUrl}/api/website/getBusinessCardByRoute?route=${siteRoute}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `bearer ${process.env.CREATE_WEBSITE_TOKEN}`,
      },
    },
  );

  return {
    props: await site.json(),
    revalidate: 30,
  };
}

export default deployBusinessCard;

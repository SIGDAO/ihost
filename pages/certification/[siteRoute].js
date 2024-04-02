import NextLink from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
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
import TemplateC from "@/components/services/Website/SiteTemplates/TemplateC";
import errorHandler from "@/utils/errorHandler";
import config from "@/config/index";
import parse from "html-react-parser";
import axios from "axios";
import posthog from "posthog-js";

const deployCertification = (props) => {
  const toast = useToast({
    title: "Error",
    status: "error",
    duration: 3000,
    isClosable: true,
    position: "bottom",
  });
  const router = useRouter();
  const { userWebsite, setUserWebsite } = useWebsite();
  const { userWebsiteErrors, checkSubscription, setUserWebsiteErrors } =
    useWebsiteControls();

  useEffect(() => {
    if (!props) return;

    const renderWebsite = async () => {
      try {
        let newUserWebsiteErrors = [];

        if (!Object.keys(props).length)
          newUserWebsiteErrors.push(`Minting Website was not found`);
        else {
          const {
            isExpired,
            isPublished,
            components: { title },
          } = props;

          if (isExpired)
            newUserWebsiteErrors.push(
              `Error: '${title}' Minting Website has Expired. Go to website settings -> General -> Renew`,
            );
          if (!isPublished)
            newUserWebsiteErrors.push(
              `Error: '${title}' Minting Website is not Published yet. Go to website settings -> Advanced -> Publish`,
            );
        }

        if (newUserWebsiteErrors.length > 0) {
          setUserWebsiteErrors(newUserWebsiteErrors);
          throw new Error(
            "If you are the owner of this minting website, please check your site settings",
          );
        }

        setUserWebsite(props);
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

    // posthog.capture("User visited minting website", {
    //   route: userWebsite.route,
    //   referrer: document.referrer,
    // });
  }, [userWebsite]);

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
    <>
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
          <main>
                <TemplateC />
          </main>
        </div>
      ) : (
        <Center style={{ minHeight: "100vh" }}>
          {userWebsiteErrors?.length > 0 ? (
            <VStack spacing="1em">
              <NextLink href="/" shallow passHref>
                <HStack spacing=".5em" cursor="pointer" flex="1">
                  {/* <Image src="/assets/logo.png" alt="NFT Host Logo" w="50px" /> */}
                  <Heading
                    as="h1"
                    fontWeight="bold"
                    fontFamily="inter"
                    fontSize="20pt"
                  >
                    iHost
                  </Heading>
                </HStack>
              </NextLink>
              <VStack>
                {userWebsiteErrors?.map((err, idx) => (
                  <Text key={idx} fontSize="10pt">
                    {/* {err}  */}
                    You are not valid to access this certification page.
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
    </>
  );
};

export async function getStaticPaths() {
  const mappedSubdomains = await fetch(
    `${config.serverUrl}/api/core/getOneTimeURLs`,
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
    `${config.serverUrl}/api/core/getOneTimeByRoute?route=${siteRoute}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `bearer ${process.env.CREATE_WEBSITE_TOKEN}`,
      },
    },
  );
 ////
//  siteProps:  {
//     _id: '6602750f95d0a8c9feb3',
//     memberId: '659fbbc7e53fba5136a5',
//     isPremium: false,
//     isExpired: false,
//     isPublished: true,
//     premiumStartDate: null,
//     premiumEndDate: null,
//     revealDate: null,
//     route: 'test0123456',
//     subscriptionId: '',
//     createdAt: '2024-03-26T07:11:11.615+00:00',
//     updatedAt: '2024-03-26T07:12:30.605+00:00',
//     components: {
//       title: 'test0123456',
//       unrevealedImage: 'https://www.nfthost.app/assets/logo.png',
//       description: 'abc',
//       embed: '<div>abc</div>',
//       script: '',
//       addons: [],
//       template: 'Template3'
//     },
//     meta: {
//       robot: '',
//       favicon: 'https://www.nfthost.app/favicon.ico',
//       language: 'EN'
//     },
//     externalLinks: {
//       twitter: '',
//       instagram: '',
//       youtube: '',
//       tiktok: '',
//       discord: '',
//       reddit: '',
//       facebook: '',
//       opensea: ''
//     },
//     custom: { domain: '' }
//   }
console.log(site);
const siteProps = await site.json()
  console.log("siteProps: ", siteProps)
  return {
    props: siteProps,
    revalidate: 30,
  };
}

export default deployCertification;

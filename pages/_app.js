import "@/styles/globals.scss";
import "@/styles/globals.css"
import 'react-image-crop/dist/ReactCrop.css'
import { useEffect } from "react";
import { useRouter } from "next/router";
import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from "@/providers/UserProvider";
import { GeneratorProvider } from "@/providers/GeneratorProvider";
import { WebsiteProvider } from "@/providers/WebsiteProvider";
import { CoreProvider } from "@/providers/CoreProvider";
import theme from "@/theme/index";
//not for original file 
import {AppContextProvider} from '../src/xtWallet/contexts/AppContext';
import {AppInitializer} from '../src/xtWallet/components/AppInitializer';
import {Provider as ReduxProvider} from "react-redux";
import {isClientSide} from '../src/xtWallet/isClientSide';
import {store} from '../src/xtWallet/states/store'; 

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {

    
    const handleRouteChange = (page) => {

    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <ChakraProvider theme={theme}>
    {/* Add for signum wallet */}
    <AppContextProvider>
    <ReduxProvider store={store}>
    {/* orignal in nfthost */}
    <CoreProvider>
      <UserProvider>
        <GeneratorProvider>
          <WebsiteProvider>
          {isClientSide()
                  ? (<>
                          {/* <AppInitializer/> */}
                          <Component {...pageProps} />
                      </>
                  )
                  : <Component {...pageProps} />
              }
          </WebsiteProvider>
        </GeneratorProvider>
      </UserProvider>
    </CoreProvider>
    </ReduxProvider>
    </AppContextProvider>
  </ChakraProvider>
  );
};

export default MyApp;

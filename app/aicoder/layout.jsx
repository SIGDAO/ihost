import Providers from "@/app/aicoder/providers";
import { Toaster } from "@/components/ui/toaster";
import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from "@/providers/UserProvider";
import { GeneratorProvider } from "@/providers/GeneratorProvider";
import { WebsiteProvider } from "@/providers/WebsiteProvider";
import { CoreProvider } from "@/providers/CoreProvider";
import theme from "@/theme/index";
//not for original file 
import {AppContextProvider} from '../../src/xtWallet/contexts/AppContext';
import {AppInitializer} from '../../src/xtWallet/components/AppInitializer';
import {Provider as ReduxProvider} from "react-redux";
import {isClientSide} from '../../src/xtWallet/isClientSide';
import {store} from '../../src/xtWallet/states/store'; 
import { ChakraProviders } from './chakraProvider'
import { OtherProviders } from './otherProviders'
export default function Layout({
  children,
}) {
  return (
  
    <Providers>
    <OtherProviders>
   
      <body className="flex min-h-full flex-col bg-[#0C0C0E] text-gray-900 antialiased">
     <ChakraProviders> 
      {children}
    </ChakraProviders>

        <Toaster />
      </body>
    </OtherProviders>
    </Providers>

  );
}


 {/* <ChakraProvider theme={theme}>

    <AppContextProvider>
    <ReduxProvider store={store}>
   
    <CoreProvider>
      <UserProvider>
        <GeneratorProvider>
          <WebsiteProvider>
          {isClientSide()
                  ? (<>
                          <AppInitializer/>
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
  </ChakraProvider> */}
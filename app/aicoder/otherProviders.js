'use client'


import { UserProvider } from "@/providers/UserProvider";
import { GeneratorProvider } from "@/providers/GeneratorProvider";
import { WebsiteProvider } from "@/providers/WebsiteProvider";
import { CoreProvider } from "@/providers/CoreProvider";

//not for original file 
import {AppContextProvider} from '../../src/xtWallet/contexts/AppContext';
import {AppInitializer} from '../../src/xtWallet/components/AppInitializer';
import {Provider as ReduxProvider} from "react-redux";
import {isClientSide} from '../../src/xtWallet/isClientSide';
import {store} from '../../src/xtWallet/states/store'; 
export function OtherProviders({ children }) {
  return (
    <AppContextProvider>
    <ReduxProvider store={store}>
   
    <CoreProvider>
      <UserProvider>
        <GeneratorProvider>
          <WebsiteProvider>
          {isClientSide()
                  ? (<>
                          {/* <AppInitializer/> */}
                          {children}
                      </>
                  )
                  : {children}
              }
          </WebsiteProvider>
        </GeneratorProvider>
      </UserProvider>
    </CoreProvider>
    </ReduxProvider>
    </AppContextProvider>
  )
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
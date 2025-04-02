import {  createContext } from "react";
import { DeeplinkableWallet, GenericExtensionWallet } from "@signumjs/wallets";
import { Config } from "../config";
import {isClientSide} from '../isClientSide';




const config = {
  DAppName: Config.DAppName,
  IsClientSide: isClientSide(),
  Wallet: {
    Extension: new GenericExtensionWallet(),
    Deeplink: new DeeplinkableWallet({ openInBrowser: true }),
  },
  Ledger: {
    IsTestnet: Config.Ledger.IsTestnet,
    Network: Config.Ledger.Network,
    Explorer: Config.Ledger.Explorer,
  },
};

export const AppContext = createContext(config);

export const AppContextProvider = ({ children }) => {
  return <AppContext.Provider value={config}>{children}</AppContext.Provider>;
};

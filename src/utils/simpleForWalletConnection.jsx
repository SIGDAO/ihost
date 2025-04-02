// components/WalletConnect.tsx
'use client'

import { useCallback,useState,useEffect } from 'react'
import { useToast } from "@chakra-ui/react"
import { serverLogin,getServerUserAddress,serverLogout } from './actions'
import { useUser } from "@/providers/UserProvider"
import { useCore } from "@/providers/CoreProvider";
import { encrypt, decryptToken, getAccessToken } from "@/utils/tools";
import errorHandler from "@/utils/errorHandler";
import config from "@/config/index";
import Web3 from "web3";
import posthog from "posthog-js";
import axios from "axios";
//not for original iHost 
import {useAppDispatch} from '../../src/xtWallet/hooks/useAppDispatch';
import {useAppSelector} from '../../src/xtWallet/hooks/useAppSelector';
import {useAppContext} from '../../src/xtWallet/hooks/useAppContext';
import {actions, selectIsWalletConnected} from "../../src/xtWallet/states/walletState";
import {Address} from '@signumjs/core' 
import {LedgerClientFactory} from '@signumjs/core'
import { Contract, ContractDataView } from "@signumjs/contracts";
import { set } from 'date-fns'
export default function WalletConnect(serverUser) {
          // for signum wallet connection
    const dispatch = useAppDispatch();
    const { Ledger, Wallet, DAppName } = useAppContext();
    console.log("Ledger",Ledger);
    console.log("Wallet",Wallet.connection);
    console.log("DAppName",DAppName);
    const isWalletConnected = useAppSelector(selectIsWalletConnected);
        // for other 
    const toast = useToast({
        title: "Error",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom",
    });
    const loadingToast = useToast({ title: 'Connecting to xt-wallet ',
        status: 'loading',
        duration: 90000,
        isClosable: false, })
    const {
        setAddress,
        setIsLoggedIn,
        setUser,
        address: userAddress,
        user,
        setWallet,
        setVIP,
        setSigdao
    } = useUser();
    const { setProvider, provider } = useCore();
    const [isDeleting, setIsDeleting] = useState(false);

  const handleXTWalletConnect = useCallback(async () => {
    loadingToast();
    try {
      // Implement XT Wallet connection logic
      console.log(isWalletConnected);
      console.log(Wallet);
      console.log("Ledger",Ledger.Network);
      console.log("Wallet",Wallet);
      console.log("DAppName",DAppName);
      let connection = await Wallet.Extension.connect({
        appName: DAppName,
        networkName: Ledger.Network,
    });
    console.log("connection:",connection)
    const ledger = LedgerClientFactory.createClient({
      nodeHost: connection.currentNodeHost
    });
    const account = await ledger.account.getAccount({accountId: connection.accountId})
    console.log("account:", account);
    setProvider(connection);
    const address = account.accountRS;
    //check the signum whether hold the vip nfts 
    //mainnet function
    // isVipAccount = await checkNFTsOwner(ledger,account.account);
    // sigdaoAmount = await checkSigdaoAmount(ledger,connection,account.account);
    //testnet function
    let isVipAccount = false;
    let sigdaoAmount = 0;
    

    const token = await serverLogin(address, 'xtWallet')
    console.log("token line81", token);
    // if (!localStorage.getItem("nfthost-user")) {
    //   posthog.capture("User logged in with crypto wallet", {
    //     wallet,
    //   });
    // }

    const encrypted = encrypt(JSON.stringify(token.data));
    console.log("encrypted", encrypted);
    // localStorage.setItem("nfthost-user", encrypted);
    if (!token){
        throw new Error("Cannot get user data");
    }
    if (token) {
    const userData = await getServerUserAddress(address);
    console.log("userData", userData );
   
    setAddress(address);
    setWallet('xtWallet');
    setIsLoggedIn(true);
    setVIP(isVipAccount);
    setSigdao(sigdaoAmount);
    setUser(userData);
    if (!userData) throw new Error("Cannot get user data");
    if (userData) {
      loadingToast.closeAll();
      return true;
    }
    }
    
    // posthog.identify(userData._id);
    // posthog.people.set({ walletAddress: userData.address });
    
    return false;

    } catch (error) {
      loadingToast.closeAll();
      toast({ title: 'Connection Error', description: error.message })
      
    }
  }, [setUser, toast])

  const handleXTWalletDisconnect = useCallback(async () => {
    loadingToast();
    try {
    const reponse = await serverLogout()
    if (!reponse) throw new Error("Cannot logout");
    console.log("token line81", reponse);
    // if (!localStorage.getItem("nfthost-user")) {
    //   posthog.capture("User logged in with crypto wallet", {
    //     wallet,
    //   });
    // }
    if (reponse) {
    setAddress();
    setWallet();
    setIsLoggedIn();
    setVIP();
    setSigdao();
    setUser(null);
    loadingToast.closeAll();
    }
    
    // posthog.identify(userData._id);
    // posthog.people.set({ walletAddress: userData.address });
    
    return;

    } catch (error) {
      toast({ title: 'Connection Error', description: error.message })
    }
  }, [setUser, toast])

    useEffect(() => {
        console.log("serverUser",serverUser.serverUser)
        setUser(serverUser.serverUser)
        const connectWallet = async () => {
          try {
         const connection = await Wallet.Extension.connect({
            appName: DAppName,
            networkName: Ledger.Network,
        });
        if (connection){
          setUser(serverUser.serverUser);
        }
      } catch (error) {
        setAddress();
        setWallet();
        setIsLoggedIn();
        setVIP();
        setSigdao();
        setUser(null);
        toast({ title: 'Connection Error', description: error.message, })
      }
          };
      
          const timer = setTimeout(() => {
            console.log("connect Wallet");
            connectWallet();
          }, 1000);
      
          return () => clearTimeout(timer);
      
    }, [])

  return (
    <div className="wallet-connector">
     {
        !user &&  (<button onClick={handleXTWalletConnect}>
        
        Connect XT Wallet
      </button>)
     }
      {
        user &&  (<button onClick={handleXTWalletDisconnect}>
        
            disconnect XT Wallet
          </button>)
      }
      {/* Add other wallet options similarly */}
    </div>
  )
}
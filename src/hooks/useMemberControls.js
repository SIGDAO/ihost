import { useState } from "react";
import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";
import { useUser } from "@/providers/UserProvider";
import { useCore } from "@/providers/CoreProvider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { encrypt, decryptToken, getAccessToken } from "@/utils/tools";
import errorHandler from "@/utils/errorHandler";
import config from "@/config/index";
import Web3 from "web3";
import posthog from "posthog-js";
import axios from "axios";
//not for original iHost 
import {useAppDispatch} from '../xtWallet/hooks/useAppDispatch';
import {useAppSelector} from '../xtWallet/hooks/useAppSelector';
import {useAppContext} from '../xtWallet/hooks/useAppContext';
import {actions, selectIsWalletConnected} from "../xtWallet/states/walletState";
import {Address} from '@signumjs/core' 
import {useNetworkMetadata} from '../xtWallet/hooks/useNetworkMetadata';
import {LedgerClientFactory} from '@signumjs/core'
import { Contract, ContractDataView } from "@signumjs/contracts";
export const useMemberControls = () => {
      // for signum wallet connection
      const dispatch = useAppDispatch();
      const { Ledger, Wallet, DAppName } = useAppContext();
      const isWalletConnected = useAppSelector(selectIsWalletConnected);
    
      function onWalletConnected(connection) {
          dispatch(actions.setIsWalletConnected(true));
          dispatch(actions.setWalletNodeHost(connection.currentNodeHost));
          dispatch(actions.setWalletPublicKey(connection.publicKey || ""));
      }
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
  const router = useRouter();
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
  //sigdaoAmount = await checkSigdaoAmount(ledger,connection,account.account);
  function checkArrayForAttributeValue(array, attribute,attributeA, value) {
    const obj = array.find((obj) => obj[attribute] === value);
    return obj ? obj[attributeA] : 0;
  }

  const checkSigdaoAmount = async (ledger,connection ,accountId) => {
    console.log("ledger", ledger);
    console.log("connection", connection);
    console.log("accountId", accountId);
    const response = await fetch(`${connection.currentNodeHost}/api?requestType=getAccountAssets&account=${accountId}`);
    const res = await response.json();
    const sigdaoAmount = checkArrayForAttributeValue(res.assetBalances, "asset", "balanceQNT" ,"5453974739826751020");
    console.log("sigdao amount:", sigdaoAmount)
    console.log(res);
    return sigdaoAmount
  } 
  const checkNFTsOwner = async (ledger, accountId) => {
   
    // let vipNftsCreatorId = "18040307637715891485" //VIP data wallet
    let vipNftsCreatorId = "10856521546493939940" //S-CN96-UG3L-4EJB-BWJCF 
    let dataViews = [];
    let nftsOwnersLists = [];
    if (ledger ){
      let nftStorages = await ledger.contract.getContractsByAccount({
        accountId: vipNftsCreatorId,
        // machineCodeHash: "15155055045342098571",
        machineCodeHash: "15519954399276214446",
        
      });
      console.log("nftStorages:",nftStorages);
      nftStorages = nftStorages.ats
      const promises = nftStorages.map(nftStorage => ledger.contract.getContract(nftStorage.at))
      const results = await Promise.all(promises);
      console.log("results:",results);
      dataViews = results.map(result => new ContractDataView(result) );
      nftsOwnersLists = dataViews.map(dataView => dataView.getVariableAsDecimal(5));
      console.log("dataViews:", dataViews)
      console.log(nftsOwnersLists);
      console.log(accountId)
      if (nftsOwnersLists.includes(accountId)){
        console.log("find your nfts in the VIP collection")
        return true;
      }
      return false;
    }
  } 
  const connect = async (wallet) => {
    loadingToast();
    try {
      let address = "";
      let isVipAccount = false;
      let sigdaoAmount = 0;
      const CHAIN_ID = process.env.CHAIN_ID;
      const CHAIN_ID_IN_DEC = Number(CHAIN_ID);
      const RPC_URL_MAP = {
        1: `https://mainnet.infura.io/v3/${process.env.INFURA_ID}`,
        4: `https://rinkeby.infura.io/v3/${process.env.INFURA_ID}`,
        5: `https://goerli.infura.io/v3/${process.env.INFURA_ID}`,
        137: `https://mainnet.infura.io/v3/${process.env.INFURA_ID}`,
        80001: `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_ID}`,
      };
      const rpcURL = RPC_URL_MAP[CHAIN_ID_IN_DEC];

      if (wallet === "metamask") {
        if (
          typeof window.ethereum === "undefined" ||
          typeof window.web3 === "undefined"
        )
          throw new Error("Metamask is not installed");
        window.web3 =
          new Web3(window.ethereum) || new Web3(window.web3.currentProvider);
        setProvider(window.ethereum);
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        address = accounts[0];
      } else if (wallet === "phantom") {
        const provider = window.solana;
        if (!provider) throw new Error("Phantom is not installed");
        if (!provider.isPhantom) throw new Error("Phantom is not installed");
        const sol = await window.solana.connect();
        setProvider(window.solana);
        address = sol.publicKey.toString();
      } else if (wallet === "coinbase") {
        const coinbaseWallet = new CoinbaseWalletSDK({
          appName: "NFTHost",
          appLogoUrl: "https://www.nfthost.app/assets/logo.png",
          darkMode: false,
        });
        const ethereum = coinbaseWallet.makeWeb3Provider(
          rpcURL,
          CHAIN_ID_IN_DEC,
        );
        if (!ethereum) throw new Error("Coinbase wallet is not installed");
        window.web3 = new Web3(ethereum);
        setProvider(ethereum);
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        address = accounts[0];
      } else if (wallet === "walletconnect") {
        const walletConnect = new WalletConnectProvider({
          rpc: RPC_URL_MAP,
        });
        if (walletConnect.rpcUrl !== rpcURL)
          throw new Error("WalletConnect is not installed correctly");
        await walletConnect.enable();
        window.web3 = new Web3(walletConnect);
        setProvider(walletConnect);
        const accounts = await window.web3.eth.getAccounts();
        address = accounts[0];
        //xtWallet 
      } else if (wallet === "xtWallet"){
        console.log(isWalletConnected);
        console.log(Wallet);
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
      address = account.accountRS;
      //check the signum whether hold the vip nfts 
      isVipAccount = await checkNFTsOwner(ledger,account.account);
      sigdaoAmount = await checkSigdaoAmount(ledger,connection,account.account);
      }

      const token = await axios.post(
        `${config.serverUrl}/api/member/walletLogin`,
        {
          address,
          wallet,
        },
      );
      
      
      // if (!localStorage.getItem("nfthost-user")) {
      //   posthog.capture("User logged in with crypto wallet", {
      //     wallet,
      //   });
      // }

      const encrypted = encrypt(JSON.stringify(token.data));
      localStorage.setItem("nfthost-user", encrypted);

      const userData = await getUserByAddress(address);
      console.log(userData);
      if (!userData) throw new Error("Cannot get user data");
      if (userData) {
        loadingToast.closeAll();
      }
      // posthog.identify(userData._id);
      // posthog.people.set({ walletAddress: userData.address });

      setUser(userData);
      setAddress(address);
      setWallet(wallet);
      setIsLoggedIn(true);
      setVIP(isVipAccount);
      setSigdao(sigdaoAmount);
      
      return true;
    } catch (err) {
      const msg = errorHandler(err);
      if (msg === "Metamask is not installed") {
        window.open("https://metamask.io/", "_blank");
      } else if (msg === "Phantom is not installed") {
        window.open("https://phantom.app/", "_blank");
      } else if (msg === "Coinbase wallet is not installed") {
        window.open("https://www.coinbase.com/wallet", "_blank");
      }
      loadingToast.closeAll();
      toast({ description: msg });
      return false;
    }
  };

  const logout = async (silent = true, type = "dashboard") => {
    try {
      const storageToken = localStorage.getItem("nfthost-user");
      if (!storageToken) return;
      if(type === "dashboard"){
      const userData = decryptToken(storageToken);
      if (userData.wallet === "phantom") window.solana.disconnect();

      const token = decryptToken(storageToken, true);

      const res = await axios.delete(`${config.serverUrl}/api/member/logout`, {
        data: {
          refreshToken: token.refreshToken,
        },
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
        },
      });
    
      // posthog.reset();

      localStorage.removeItem("nfthost-user");
    }
      setUser(null);
      setAddress("");
      setIsLoggedIn(false);
      setVIP(false);
      if(type === "dashboard"){
      router.push("/dashboard/getStarted", undefined, { shallow: true });
      }
      if (!silent) {
        toast({
          title: "Success",
          description: "Successfully logged out",
          status: "success",
        });
      }
    } catch (err) {
      const msg = errorHandler(err);
      toast({ description: msg });
    }
  };

  const getUserByAddress = async (address) => {
    try {
      const accessToken = getAccessToken();

      const res = await axios.get(
        `${config.serverUrl}/api/member/getByAddress`,
        {
          params: {
            address,
          },
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      if (res.status === 200) {
        setUser(res.data);
      }

      return res.data;
    } catch (err) {
      const msg = errorHandler(err);
      toast({ description: msg });
      return null;
    }
  };

  const addUnit = async (service) => {
    console.log("addUnit/ ", userAddress)
    try {
      const accessToken = getAccessToken();

      const res = await axios.patch(
        `${config.serverUrl}/api/member/addUnit`,
        {
          address: userAddress,
          service,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      if (res.status !== 200) return;

      setUser((prevUser) => {
        return {
          ...prevUser,
          services: {
            ...prevUser.services,
            [service]: {
              ...prevUser.services[service],
              units: res.data.services[service].units,
            },
          },
        };
      });
    } catch (err) {
      const msg = errorHandler(err);
      toast({ description: msg });
    }
  };

  const deductUnit = async (service) => {
    try {
      const accessToken = getAccessToken();

      const res = await axios.patch(
        `${config.serverUrl}/api/member/deductUnit`,
        {
          address: userAddress,
          service,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      if (res.status !== 200) return;

      setUser((prevUser) => {
        return {
          ...prevUser,
          services: {
            ...prevUser.services,
            [service]: {
              ...prevUser.services[service],
              units: res.data.services[service].units,
            },
          },
        };
      });
    } catch (err) {
      const msg = errorHandler(err);
      toast({ description: msg });
    }
  };

  const updateEmail = async (email) => {
    try {
      const accessToken = getAccessToken();

      const res = await axios.patch(
        `${config.serverUrl}/api/member/updateEmail`,
        {
          address: userAddress,
          memberId: user._id,
          email,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      if (res.status !== 200) return;

      // posthog.capture("User email has been updated");

      setUser((prevUser) => {
        return {
          ...prevUser,
          email,
        };
      });
    } catch (err) {
      const msg = errorHandler(err);
      toast({ description: msg });
    }
  };

  const getChainId = () => {
    if (!provider)
      return `0x${parseInt(window.ethereum.networkVersion).toString(16)}`;
    return `0x${parseInt(provider.networkVersion).toString(16)}`;
  };

  const isNetworkProtected = async (wallet = "metamask") => {
    const id = getChainId();
    const chainId = process.env.CHAIN_ID;
    console.log(id, chainId);
    if (id !== chainId) {
      if (wallet === "metamask" || !provider) {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId }],
        });
      } else if (wallet === "coinbase") {
        await provider.send("wallet_switchEthereumChain", [{ chainId }]);
      } else if (wallet === "walletconnect") {
        await provider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId }],
        });
      }
    }
  };

  const getConnectedAddress = async () => {
    console.log(userData);
    window.web3 =
      new Web3(window.ethereum) || new Web3(window.web3.currentProvider);
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    return accounts[0];
  };

  const deleteAccount = async () => {
    try {
      setIsDeleting(true);

      const accessToken = getAccessToken();

      const res = await axios.delete(`${config.serverUrl}/api/member/delete`, {
        data: {
          memberId: user._id,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (res.status !== 200) return;

      // posthog.capture("User deleted account");

      await logout();

      toast({
        title: "Success",
        status: "success",
        description: "Successfully deleted account",
      });

      setIsDeleting(false);
    } catch (err) {
      setIsDeleting(false);
      const msg = errorHandler(err);
      toast({ description: msg });
    }
  };

  return {
    connect,
    logout,
    getUserByAddress,
    addUnit,
    deductUnit,
    isNetworkProtected,
    updateEmail,
    getConnectedAddress,
    deleteAccount,
    isDeleting,
  };
};

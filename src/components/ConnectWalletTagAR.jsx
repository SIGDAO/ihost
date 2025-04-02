'use client'
import NextLink from "next/link";
import {
  HStack,
  Menu,
  MenuButton,
  Tag,
  MenuList,
  MenuItem,
  useColorModeValue,
  TagLabel,
  TagRightIcon,
  MenuDivider,
  Text,
  Image,
  Avatar,
  VStack,
} from "@chakra-ui/react";
import { HiOutlineChevronDown } from "@react-icons/all-files/hi/HiOutlineChevronDown";
import { HiLogout } from "@react-icons/all-files/hi/HiLogout";
import { AiOutlineCopy } from "@react-icons/all-files/ai/AiOutlineCopy";
import { MdPayment } from "@react-icons/all-files/md/MdPayment";
import { RiVipLine } from  "@react-icons/all-files/ri/RiVipLine";
import { useUser } from "@/providers/UserProvider";
import { useCore } from "@/providers/CoreProvider";
// import { useMemberControls } from "@/hooks/useMemberControls";
import { useCopy } from "@/hooks/useCopy";
// add for app router
import { useCallback,useState,useEffect,useRef } from 'react'
import { useToast } from "@chakra-ui/react"
import { serverLogin,getServerUserAddress,serverLogout } from '@/hooks/useMemberControlsAR'
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
import {LedgerClientFactory} from '@signumjs/core'
import { Contract, ContractDataView } from "@signumjs/contracts";
import { set } from 'date-fns'
const ConnectWalletTag = ({
  
  isCopyAddress,
  isUserProfile,
  isPayments,
  ...styles
}) => {
  // for signum wallet connection
    const dispatch = useAppDispatch();
    const { Ledger, Wallet, DAppName } = useAppContext();
    const [isContextReady, setIsContextReady] = useState(false);

    const isWalletConnected = useAppSelector(selectIsWalletConnected);
        // for other 
        //error toast alert to user
    const toast = useToast({
        title: "Error",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom",
    });
    // for loading toast effect when user login or logout
    const loadingToast = useToast({ title: 'Connecting to xt-wallet ',
        status: 'loading',
        duration: 90000,
        isClosable: false, })
    // for user data by useContext from UserProvider
    const { 
        setAddress,
        setIsLoggedIn,
        setUser,
        address: userAddress,
        user,
        setWallet,
        setVIP,
        setSigdao,
        address,
        isLoggedIn,
        isVIP,
        sigdao
    } = useUser();
  // for core data by useContext from CoreProvider
  const { setProvider, provider } = useCore();
  const { onProfileOpen } = useCore();
  const alreadyAutoLogin = useRef(false);
  const countAutoLogin = useRef(0);
  // const { connect, logout } = useMemberControls();
  const { onCopy: onCopyAddress } = useCopy({
    text: address,
  });
  // for login function 
  const handleXTWalletConnect = useCallback(async () => {
    loadingToast.closeAll();
    loadingToast();
    try {
      // Implement XT Wallet connection logic
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

    const encrypted = encrypt(JSON.stringify(token));
    console.log("encrypted", encrypted);
    // localStorage.setItem("nfthost-user-AR", encrypted);
    localStorage.setItem("nfthost-user", encrypted);
    if (!token){
        throw new Error("Cannot get user data");
    }
    if (token) {
    const userData = await getServerUserAddress(address);
    console.log("userData", userData );
    const result = decryptToken(encrypted);

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
  // for logout function
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
    setAddress(null);
    setWallet(null);
    setIsLoggedIn(false);
    setVIP(false);
    setSigdao(0);
    setUser(null);
    loadingToast.closeAll();
    }
    localStorage.removeItem("nfthost-user");
    // localStorage.removeItem("nfthost-user-AR");
    // posthog.identify(userData._id);
    // posthog.people.set({ walletAddress: userData.address });
    
    return;

    } catch (error) {
      toast({ title: 'Connection Error', description: error.message })
    }
  }, [setUser, toast])

  const toolbarNavColor = useColorModeValue("rgba(0,0,0,.8)", "white");
  const toolbarBorderColor = useColorModeValue("rgba(0,0,0,.1)", "white");



// for auto login function in app router 
 useEffect(() => {
    console.log("countAutoLogin.current",countAutoLogin.current)
    console.log("alreadyAutoLogin.current",alreadyAutoLogin.current)
    if (alreadyAutoLogin.current) return;
    if (isLoggedIn) return;
    const storageToken = localStorage.getItem("nfthost-user");
    // const storageTokenAR = localStorage.getItem("nfthost-user-AR");
    const ReAuthenticate = async () => {
      alreadyAutoLogin.current = true;

      console.log(storageToken );
      if (!storageToken && !storageTokenAR) return;
      try {
       await handleXTWalletConnect();
     } catch (error) {
       setIsLoggedIn(false);
       toast({ title: 'Connection Error', description: error.message, })
     }
    };
    if (!storageToken && !storageTokenAR) {
      console.log("no storageToken");
    }
  if (!alreadyAutoLogin.current) {
  const timer = setTimeout(() => {
    if (!alreadyAutoLogin.current){
      ReAuthenticate();
    }
    }, 1000 + countAutoLogin.current * 1000);
    countAutoLogin.current = countAutoLogin.current + 1;
    return () => clearTimeout(timer);
  }
  alreadyAutoLogin.current = true;
  }, [alreadyAutoLogin, countAutoLogin]);


  return (
    <Menu>
      <MenuButton
        as={Tag}
        borderWidth="1px"
        size="md"
        cursor="pointer"
        bg="transparent"
        borderColor={toolbarBorderColor}
        {...styles}
      >
        <HStack>
        {isVIP && (<RiVipLine/>) }
          <Text
            as={TagLabel}
            noOfLines="1"
            maxW="200px"
            color={toolbarNavColor}
          >
           
            {isLoggedIn ? address : "Connect Your Wallet"}
          </Text>
          <TagRightIcon as={HiOutlineChevronDown} color={toolbarNavColor} />
        </HStack>
      </MenuButton>
      <MenuList >
        {isLoggedIn ? (
          <>
            {isUserProfile && (
              <MenuItem onClick={onProfileOpen}>
                <HStack alignItems="flex-start">
                  <Avatar src={user?.picture} name={address} />
                  <VStack alignItems="flex-start" spacing="0">
                    <Text fontSize="10pt" noOfLines="1" maxW="150px">
                      {address}
                    </Text>
                    <Text fontSize="8pt" noOfLines="1">
                      {user?.services?.generator?.units || 0} Generation Units
                    </Text>
                    <Text fontSize="8pt" noOfLines="1">
                      {sigdao/1000000 || 0} SIGDAO
                    </Text>
                    {/* <Text fontSize="8pt" noOfLines="1">
                      {user?.services?.utils?.units || 0} Utils Units
                    </Text> */}

                   {isVIP && ( <HStack >
                    <RiVipLine/>
                    <Text fontSize="10pt" noOfLines="1" maxW="150px" color="gold">
                      BETTERMI NFT
                    </Text>
                     </HStack> ) } 
                  </VStack>
                </HStack>
              </MenuItem>
            )}
            {isCopyAddress && (
              <>
                <MenuDivider />
                <MenuItem  color='white'   className="text-white" icon={<AiOutlineCopy />} onClick={onCopyAddress}>
                  Copy Address
                </MenuItem>
              </>
            )}
            {isPayments && (
              <NextLink href="/dashboard/payments" shallow passHref>
                <MenuItem color='white' className="text-white" icon={<MdPayment />}>Payments</MenuItem>
              </NextLink>
            )}
            {isUserProfile && <MenuDivider />}
            <MenuItem  color='white'  className="text-white" icon={<HiLogout />} onClick={handleXTWalletDisconnect}>
              Logout
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem onClick={handleXTWalletConnect}>
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="/assets/signumIcon.png"
                alt="xtWallet Logo"
                mr="12px"
              />
              <span className="text-white">XT-WalletConnect</span>
            </MenuItem>
          </>
        )}
      </MenuList>
    </Menu>
  );
};

export default ConnectWalletTag;

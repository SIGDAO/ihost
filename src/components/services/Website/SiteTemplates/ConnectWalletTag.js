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
import { useUser } from "@/providers/UserProvider";
import { useCore } from "@/providers/CoreProvider";
import { useMemberControls } from "@/hooks/useMemberControls";
import { useCopy } from "@/hooks/useCopy";

const ConnectWalletTag = ({
  isCopyAddress,
  isUserProfile,
  isPayments,
  ...styles
}) => {
  const { address, isLoggedIn, user } = useUser();
  const { onProfileOpen } = useCore();
  const { connect, logout } = useMemberControls();
  const { onCopy: onCopyAddress } = useCopy({
    text: address,
  });

  const toolbarNavColor = useColorModeValue("rgba(0,0,0,.8)", "white");
  const toolbarBorderColor = useColorModeValue("rgba(0,0,0,.1)", "white");

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
      <MenuList>
        {isLoggedIn ? (

          <>
            <MenuItem icon={<HiLogout />} onClick={() => logout(false,"website")}>
              Logout
            </MenuItem>
          </>
        ):(
          <>
            <MenuItem onClick={() => connect("metamask")}>
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="/assets/metamask.png"
                alt="MetaMask Wallet Logo"
                mr="12px"
              />
              <span>Metamask</span>
            </MenuItem>
            {/* <MenuItem onClick={() => connect("phantom")}>
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="/assets/phantom.png"
                alt="Phantom Wallet Logo"
                mr="12px"
              />
              <span>Phantom</span>
            </MenuItem> */}
            <MenuItem onClick={() => connect("coinbase")}>
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="/assets/coinbasewallet.png"
                alt="Coinbase Wallet Logo"
                mr="12px"
              />
              <span>Coinbase Wallet</span>
            </MenuItem>
            <MenuItem onClick={() => connect("walletconnect")}>
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="/assets/walletconnect.svg"
                alt="WalletConnect Logo"
                mr="12px"
              />
              <span>WalletConnect</span>
            </MenuItem>
            <MenuItem onClick={() => connect("xtWallet")}>
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="/assets/signumIcon.png"
                alt="xtWallet Logo"
                mr="12px"
              />
              <span>XT-WalletConnect</span>
            </MenuItem>
          </>
        )}
      </MenuList>
    </Menu>
  );
};

export default ConnectWalletTag;

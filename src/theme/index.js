import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import Button from "@/theme/Button";
import Text from "@/theme/Text";
import Drawer from "@/theme/Drawer";
import Tag from "@/theme/Tag";
import Link from "@/theme/Link";
import Modal from "@/theme/Modal";
import Menu from "@/theme/Menu";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const fonts = {
  heading: "Poppins, Inter, sans-serif",
  body: "Poppins, Inter, sans-serif",
};

const styles = {
  global: (props) => ({
    body: {
      bg: mode(
        "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(249,250,250,1) 100%)",
        "#000616",
      )(props),
    },
    ".table": {
      border: "1px solid #424242",
    },
    ".tr": {
      display: "flex",
      width: "fit-content",
    },
    ".th, .td": { boxShadow: "inset 0 0 0 1px #424242" },
    ".th": {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "gray.400",
      padding: "0.5rem",
      fontWeight: "bold",
      fontSize: "xs",
      textTransform: "uppercase",
      textAlign: "center",
    },
    ".td > input": {
      m: "1",
      padding: "0.2rem",
      bg: "transparent",
      maxW: "100%",
    },
    ".date-wrapper": {
      display: "flex",
      alignItems: "center",
      w: "100%",
      h: "100%",
    },
    ".resizer": {
      position: "absolute",
      opacity: 0,
      top: 0,
      right: 0,
      h: "100%",
      w: "5px",
      bg: "#27bbff",
      cursor: "col-resize",
      userSelect: "none",
      touchAction: "none",
      borderRadius: "6px",
    },
    ".resizer.isResizing": {
      bg: "#2eff31",
      opacity: 1,
    },
    "*:hover > .resizer": {
      opacity: 1,
    },
  }),
};

const theme = extendTheme({
  config,
  fonts,
  styles,
  components: {
    Button,
    Text,
    Drawer,
    Tag,
    Link,
    Modal,
    Menu,
  },
});

export const webColor = {
  dashboardBg: ["rgb(236,242,245)", "#0C0C0E"],
  containerBg: ["white", "#0C0C0E"],
  sidebarBg: ["white", "#0C0C0E"],
  borderColor: ["rgba(0,0,0,.1)", "rgba(255,255,255,.1)"],
  toolbarBg: ["white", "#0C0C0E"],
  announcementBg: ["rgb(117,63,229)", "rgb(117,63,229)"],
  footerBg: ["rgb(240,240,240)", "rgb(19,15,28)"],
};

export default theme;

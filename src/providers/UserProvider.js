import { useState, useContext, createContext } from "react";

export const UserContext = createContext({});
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [address, setAddress] = useState("");
  const [wallet, setWallet] = useState("");
  const [user, setUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isVIP, setVIP]=useState(false);

  const controllers = {
    address,
    setAddress,
    user,
    setUser,
    isLoggedIn,
    setIsLoggedIn,
    wallet,
    setWallet,
    isVIP,
    setVIP,
  };

  return (
    <UserContext.Provider value={controllers}>{children}</UserContext.Provider>
  );
};

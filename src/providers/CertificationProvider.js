import { useState, useContext, createContext } from "react";

export const CertificationContext = createContext({});
export const useCertification = () => useContext(CertificationContext);

export const CertificationProvider = ({ children }) => {
  const [userCertification, setUserCertification] = useState(null);
  const [editingCertification, setEditingCertification] = useState(null);
  const [certification, setCertification] = useState([]);

  const controllers = {
    certification,
    setCertification,
    editingCertification,
    setEditingCertification,
    userCertification,
    setUserCertification,
  };

  return (
    <CertificationContext.Provider value={controllers}>
      {children}
    </CertificationContext.Provider>
  );
};

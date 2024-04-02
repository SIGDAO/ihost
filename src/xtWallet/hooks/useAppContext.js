import { useContext } from "react";
import { AppContext} from "../contexts/AppContext";

export const useAppContext = () => {
    return useContext(AppContext);
};

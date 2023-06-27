import { useEffect } from "react";
import { useUser } from "@/providers/UserProvider";
const BusinessCard = () => {
  const { isLoggedIn } = useUser();
 
 

  return (
    <div className="iframeDiv">
        <iframe src="https://business-card-shunwman.vercel.app/"></iframe>
        <style jsx>{`
        .iframeDiv {
          overflow: hidden;
        }
        iframe {
            width: 105%;
            height: 75vh;
        }
      `}</style>

    </div>
    
  );
};

export default BusinessCard;

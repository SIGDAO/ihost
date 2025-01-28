import axios from "axios";
import { Http, HttpClientFactory, HttpResponse, HttpMockBuilder, HttpError } from "@signumjs/http"
const connectionToPinata = async (connection) => {
    try {
      const result = await connection.get("/data/testAuthentication");
      return result;
    }
    catch (error) {
      return false;
    }
  }
 export const testAuthenticationPinata = async (pinningKey) => {
    let connection = HttpClientFactory.createHttpClient("https://api.pinata.cloud", {
      headers: {
        Authorization: `Bearer ${pinningKey}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    let connectionResult = await connectionToPinata(connection);
    if (connectionResult) {

      return true;
    }

  }


 export async function testAuthenticationNftStorage(pinningKey){
    try {
      const response = await fetch(`https://api.nft.storage/?limit=1`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${pinningKey}`,
        },
      });

      return response.ok;
    } catch (error) {
      return false;
    }
  }
export const pinFile = async (file, metadata, jwtToken , ipfsService, contentType) => { 
   
    const pinByPinata = async () => {
    try {

      const formData = new FormData();
      formData.append("file", file);
      formData.append("pinataMetadata", JSON.stringify(metadata));
      const response = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        maxBodyLength: Infinity,
        maxContentLength: Infinity,
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          // @ts-ignore
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        },
      });

      return response;
    }
    catch (error) {
      if (error instanceof HttpError) {
        console.error("Pinata API Error", "Status:", error.status, "Reason:", error.data);
        if (error.status === 401 || error.status === 403) {
          throw new AbortError(error.data);
        }
        else {
          throw new Error(error.data);
        }
      }
      else {
        console.error("Pinata Pinning Service Error", error.message);
        throw error;
      }
    }
  }
  const pinByNftStorage = async () => {
    try {

    
      
      const formData = new FormData();
      formData.append("file", file);
      formData.append("pinataMetadata", JSON.stringify(metadata));
      const response = await fetch("https://api.nft.storage/upload", {
        method: "POST",
        body: file,
        headers: {
          Accept: "application/json",
          "Content-Type": contentType,
          Authorization: `Bearer ${jwtToken}`,
        },
      });

      if (!response.ok) {
        throw new HttpError(url, response.status, response.statusText, {
          filename,
        });
      }
      const data = await response.json();

      return data.value.cid;
    }
    catch (error) {
      if (error instanceof HttpError) {
        console.error("NFT.Storage API Error", "Status:", error.status, "Reason:", error.data);
        if (error.status === 401 || error.status === 403) {
          throw new AbortError(error.data);
        }
        else {
          throw new Error(error.data);
        }
      }
      else {
        console.error("NFT.Storage Pinning Service Error", error.message);
        throw error;
      }
    }
  }
  if (ipfsService === "1") {
  const throttleToPinata = pThrottle({ limit: 180, interval: 60_000 });
  const throttlePinPinata = throttleToPinata(pinByPinata);
  return pRetry(() => throttlePinPinata (), {
    retries: 5,
    onFailedAttempt: (error) => {
      if (error.retriesLeft) {
        console.log(
          `Attempt pinning Pinata failed. Retrying...`
        );
      }
    },
  });
}else{
  const throttleToNftStorage = pThrottle({ limit: 30, interval: 10_000 });
  const throttlePinNftStorage  = throttleToNftStorage(pinByNftStorage);
  return pRetry(() => throttlePinNftStorage(), {
    retries: 5,
    onFailedAttempt: (error) => {
      if (error.retriesLeft) {
        console.log(
          `Attempt pinning NftStorage failed. Retrying...`
        );
      }
    },
  });
}
};


  
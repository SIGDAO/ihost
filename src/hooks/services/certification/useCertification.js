import {Toast,  useToast,} from '@chakra-ui/react'
import { useRouter } from 'next/navigation';
import axios from "axios";
import config from "@/config/index";
export function resizeImage(base64Str, maxWidth = 900, maxHeight = 350, text = "iacademy-admin") {
    return new Promise(resolve => {
      let img = new Image();
      img.src = base64Str;
      img.onload = () => {
        let canvas = document.createElement("canvas");
        const MAX_WIDTH = maxWidth;
        const MAX_HEIGHT = maxHeight;
        let width = img.width;
        let height = img.height;
        let shouldResize = false;
  
        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
            shouldResize = true;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
            shouldResize = true;
          }
        }
        if (shouldResize) {
          canvas.width = width;
          canvas.height = height;
          let ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, width, height);
          ctx.font = "28px Arial";
          ctx.fillStyle = "#ffffff";
          ctx.fillText(text, 130, 80);
          resolve(canvas.toDataURL("image/jpeg", 0.9));
        } else {
          resolve(base64Str);
        }
      };
    });
  }

export async function getCertification(email, username,accessToken) {
  try {
  const res = await axios.get(
    `${config.serverUrl}/api/member/getCertification`,
    {
      params: {
        email,
        username
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );
  return res;
}catch(error){
  console.log(error);
  return { message : "Your certification with your email and username not found. Please check your email and username correct or not"};
}  
}
  
export async function createOneTimeURL(userData, route , memberId ,push , toast,accessToken){
  const username = userData.username;
  const userEmail = userData.userEmail;
  const course = userData.course;
  const date = new Date()
  const nextDay = new Date(date.setDate(date.getDate() + 1))
  console.log("nextDay: ", nextDay)
  const nextHours = new Date(date.setHours(date.getHours() + 1))
  console.log("nextHours: ", nextHours)
  const expiredDay = nextDay.toISOString()
  const res = await fetch(`${config.serverUrl}/api/core/saveURL`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${accessToken}`
    },
    body: JSON.stringify({username, userEmail,course ,route,  memberId, expiredDay }),
  })
  if (res.status !== 200 ){
    throw new Error("one time url already created !! ")
  }
  const result = await res.json();
  console.log('URL successfully saved on the backend:', result);
  if(result.route){
    push(`/certification/${result.route}`)
    return true;
  }else{
     toast({
    description: "Error occurs during creating new random link for your certification",
  })
  return false;
  }
  // toast({
  //   description: "Error occurs during creating new random link for your certification",
  // })
  // return false;

}

// .then((data) => {

//   console.log('URL successfully saved on the backend:', data);
//   if(data.route){
//     //  push(`/certification/${data.route}`)
//     return true;
//   }else{
//     // push(`/certification/${route}`)
//     return true;
//   }
// // push(`/certification//${route}`)
// })
// .catch((error) => {
//   console.error('Error saving URL:', error);
//   toast({
//     description: "Error occurs during creating new random link for your certification",
//   })
//   return false;
//                   //   toast({
//             //     description:
//             //       "You have used your 1 Free minting website. Upgrade your subscription to create more.",
//             //   });
// });
// console.log(resSaveURL);
// return resSaveURL;
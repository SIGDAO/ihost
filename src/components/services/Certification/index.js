import { useState } from 'react';
import axios from "axios";
import Header from "./Header"
import config from "@/config/index";
import { encrypt, decryptToken, getAccessToken } from "@/utils/tools";
import { useRouter } from 'next/navigation';
import { useUser } from "@/providers/UserProvider";
import { getCertification, createOneTimeURL } from "@/hooks/services/certification/useCertification";
import { useToast } from '@chakra-ui/react'
function generateRandomUrl() {

  const uniqueId = Math.random().toString(36).substring(2);
  const randomString = Math.random().toString(36).substring(2, 8);
  const route = uniqueId;
  return route;
}

const Certification = () => {
  const toast = useToast({
    title: "Error",
    status: "error",
    duration: 3000,
    isClosable: true,
    position: "bottom",
  });
  const loadingToast = useToast()

  const { user } = useUser();
  const memberId = user._id;
  const [buttonDisable,setButtonDisable] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const { push } = useRouter();
  const handleSubmit = async (e) => {
    setButtonDisable(true);
    e.preventDefault();
    const accessToken = getAccessToken();
    if (memberId && email && username) {
      const res = await getCertification(email, username, accessToken)
      console.log("getCertification Response:", res)
      if (res.status === 200) {
        console.log("to the next step")
        const route = generateRandomUrl();
        const userData = res.data;
        //  const username = res.data.username;
        //  const userEmail = res.data.userEmail;
        //  const course = res.data.course;
        const examplePromise = new Promise(async (resolve, reject) => {
          
          const res = await createOneTimeURL(userData, route, memberId, push, toast, accessToken);
          console.log(res);
          if (res === true) {
            resolve(200);
          }
          if (res !== true) {
            reject(500);
            setButtonDisable(false);
          }
        })
        loadingToast.promise(examplePromise, {
          success: { title: 'OK', description: 'Redirecting to your certification page.' },
          error: { title: 'Error', description: 'Not find your certification.' },
          loading: { title: 'Checking..;', description: 'Please wait' },
        })
        // await createOneTimeURL(userData, route, memberId, push, toast, accessToken);

        //  const date = new Date()
        //  const nextDay = new Date(date.setDate(date.getDate() + 1))
        //  console.log("nextDay: ", nextDay)
        //  const nextHours = new Date(date.setHours(date.getHours() + 1))
        //  console.log("nextHours: ", nextHours)

        //  const expiredDay = nextDay.toISOString()
        //    console.log("date:", DateTime)
        //   const resSaveURL = fetch(`${config.serverUrl}/api/core/saveURL`, {
        //       method: 'POST',
        //       headers: {
        //         'Content-Type': 'application/json',
        //         "Authorization": `Bearer ${accessToken}`
        //       },
        //       body: JSON.stringify({username, userEmail,course ,route,  memberId, expiredDay }),
        //     })
        //       .then((response) => {
        //         console.log(response);
        //         if(response.status !== 200) {
        //           throw new Error("one time url already created !! ")
        //         }
        //       return response.json()   

        //       })
        //       .then((data) => {
        //         console.log('URL successfully saved on the backend:', data);
        //         if(data.route){
        //           push(`/certification/${data.route}`)
        //         }else{
        //           push(`/certification/${route}`)
        //         }a
        //        push(`/certification//${route}`)
        //       })
        //       .catch((error) => {
        //         console.error('Error saving URL:', error);
        //       });
        //  push(oneTimeURL)
      }

      if (res.status !== 200) {
        toast({
          description:
            res.message,
        })
      }
      setButtonDisable(false);
    };
  }
  return (
    <div className="flex items-center justify-center min-h-50 ">
      <div className="bg-white p-8 shadow-md rounded-md">
        <Header
          heading="Check your status in LearnWorld"
          paragraph="Please provide your LearnWorld Email and Username "

        />
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <button
            disabled={buttonDisable}
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Check and claim certification
          </button>
        </form>
      </div>
    </div>
  );
};

export default Certification;
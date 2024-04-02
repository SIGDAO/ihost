import { useState } from 'react';
import axios from "axios";
import Header from "./Header"
import config from "@/config/index";
import { encrypt, decryptToken, getAccessToken } from "@/utils/tools";
import { useRouter } from 'next/navigation';
import { useUser } from "@/providers/UserProvider";
function generateRandomUrl() {
   
    const uniqueId = Math.random().toString(36).substring(2);
    const randomString = Math.random().toString(36).substring(2, 8);
    const route = uniqueId;
    return route;
  }

const Certification = () => {
    const { user } = useUser();
    const memberId = user._id;
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
    const {push} = useRouter();
  const handleSubmit =  async (e) => {

    e.preventDefault();
    const accessToken = getAccessToken();
    if(memberId){
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

      if (res.status === 200) {
      
       const route = generateRandomUrl();
       const username = res.data.username;
       const userEmail = res.data.userEmail;
       const course = res.data.course;
       

       const date = new Date()
       const nextDay = new Date(date.setDate(date.getDate() + 1))
       const expiredDay = nextDay.toISOString()
        // console.log("date:", DateTime)
        const resSaveURL = fetch(`${config.serverUrl}/api/core/saveURL`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              "Authorization": `Bearer ${accessToken}`
            },
            body: JSON.stringify({username, userEmail,course ,route,  memberId, expiredDay }),
          })
            .then((response) => {
              if(response.status !== 200) {
                throw new Error("one time url already created !! ")
              }
              response.json()   
            })
            .then((data) => {
              console.log('URL successfully saved on the backend:', data);
            // push(`/certification//${route}`)
            })
            .catch((error) => {
              console.error('Error saving URL:', error);
            });
    //    push(oneTimeURL)
      }
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
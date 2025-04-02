"use server";
import { cookies } from 'next/headers'
import axios from 'axios'
import config from '@/config/index'
import { encrypt, decryptToken, getAccessTokenAR } from '@/utils/tools'
import { redirect } from 'next/navigation'

export const serverLogin = async (address, wallet) => {
  // for first time login, we need to store the access token and refresh token in cookies
  //fetching data from server to get access token and refresh token, then store it in cookies
  try {
    const { data } = await axios.post(
      `${config.serverUrl}/api/member/walletLogin`,
      { address, wallet }
    )
    const encrypted = encrypt(JSON.stringify(data))
    cookies().set('nfthost-user', encrypted, { secure: true })
    return data
  } catch (error) {
    throw new Error('Login failed')
  }
}

export const serverLogout = async () => {
    //delete the cookies
    const token = await cookies()
    token.delete('nfthost-user');
  return true;
}

export const getServerUserAddress = async (address) => {
  //for re-login, we need to get the access token and refresh token from cookies
  const token = await cookies()
  const encrypted = token.get('nfthost-user')?.value
  if (!encrypted) return null

  try {
    const accessToken = getAccessTokenAR(encrypted)
    console.log('accessToken', accessToken)
    const { data } = await axios.get(
      `${config.serverUrl}/api/member/getByAddress?address=${address}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` }
      }
    )
    return data
  } catch (error) {
    return null
  }
}

export const getServerUser = async () => {
    // const cookies =  await cookies();
    // console.log('storageToken', storageToken)
    // const encrypted =  cookies.get('nfthost-user')?.value
    const token = await cookies()
    const storageToken = token.get('nfthost-user')?.value
    console.log('storageToken', storageToken);
    if (!storageToken) return null
    const encrypted = storageToken;
    console.log('encrypted', encrypted)
    try {
      const accessToken = getAccessTokenAR(encrypted)
      console.log('accessToken', accessToken)
    //   const { data } = await axios.post(
    //       `${config.serverUrl}/api/member/walletLogin`,
    //       { address: accessToken.address, wallet: accessToken.wallet }
    //     )
        
    const { data } = await axios.get(
        `${config.serverUrl}/api/member/getByAddress`,
        {
          headers: { Authorization: `Bearer ${accessToken}` }
        }
      )
      console.log('data', data)
     // origin 
      return data
    // for test 
    // return null
    } catch (error) {
      return null
    }
  }

  
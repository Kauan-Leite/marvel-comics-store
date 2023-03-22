import md5 from 'md5'
import axios from 'axios'

export const getData = async (offset) => {
  const timestamp = Number(new Date())
  const publicKey = process.env.REACT_APP_PUBLIC_KEY
  const privateKey = process.env.REACT_APP_PRIVATE_KEY

  const hash = md5(timestamp + privateKey + publicKey)

  const baseURL = 'https://gateway.marvel.com:443/v1/public/comics?'
  const limit = 20

  const url = `${baseURL}ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=${limit}&offset=${offset}`

  try {
    const response = axios.get(url)
    console.log(await response)
    const results = await (await response).data.data.results
    return results
  } catch (error) {
    console.log(error)
  }
}

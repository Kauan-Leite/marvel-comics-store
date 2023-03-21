import md5 from 'md5'
import axios from 'axios'

export const getData = async () => {
  const timestamp = Number(new Date())
  const publicKey = process.env.REACT_APP_PUBLIC_KEY
  const privateKey = process.env.REACT_APP_PRIVATE_KEY

  const hash = md5(timestamp + privateKey + publicKey)

  console.log(process.env)

  const url = `https://gateway.marvel.com:443/v1/public/comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`

  try {
    const response = axios.get(url)
    console.log(await (await response).data.data.results)
    return await response
  } catch (error) {
    console.log(error)
  }
}

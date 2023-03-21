import md5 from 'md5'
import axios from 'axios'

export const getData = async () => {
  const timestamp = Number(new Date())
  const publicKey = 'c9702c93cb3e64bc039420f52b089b2a'
  const privateKey = '59260ac2f0f6e8cc7752312eead030713f42aff8'

  const hash = md5(timestamp + privateKey + publicKey)

  const url = `https://gateway.marvel.com:443/v1/public/comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`

  try {
    const response = axios.get(url)
    console.log(await (await response).data.data.results)
    return await response
  } catch (error) {
    console.log(error)
  }
}

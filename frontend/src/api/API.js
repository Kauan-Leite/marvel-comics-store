import md5 from 'md5'
import axios from 'axios'

const timestamp = Number(new Date())
const publicKey = process.env.REACT_APP_PUBLIC_KEY
const privateKey = process.env.REACT_APP_PRIVATE_KEY

const hash = md5(timestamp + privateKey + publicKey)

const baseURL = 'https://gateway.marvel.com:443/v1/public/comics'

export const getAllData = async (offset) => {
  const limit = 20

  const url = `${baseURL}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=${limit}&offset=${offset}`

  try {
    const response = axios.get(url)
    const results = await (await response).data.data.results
    return results
  } catch (error) {
    console.log(error)
  }
}

export const getById = async (id) => {
  const url = `${baseURL}/${id}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
  try {
    const response = axios.get(url)
    const results = await (await response).data.data.results
    return results
  } catch (error) {
    console.log(error)
  }
}

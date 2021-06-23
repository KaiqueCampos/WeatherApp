import axios from 'axios'
export const key = 'KEY_VALUE'

const api = axios.create({
    baseURL: 'http://api.hgbrasil.com'
})

export default api
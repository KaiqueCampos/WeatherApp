import axios from 'axios'
export const key = 'YOUR_KEY_VALUE'

const api = axios.create({
    baseURL: 'http://api.hgbrasil.com'
})

export default api
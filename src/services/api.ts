import axios from 'axios'
export const key = '398ed578'

const api = axios.create({
    baseURL: 'http://api.hgbrasil.com'
})

export default api
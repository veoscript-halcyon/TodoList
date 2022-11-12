import axios from 'axios'
import { API_URL } from '@env'

export interface RequestReponse {
  data: any
  status: number
}

const api = axios.create({
  baseURL: `${API_URL}`,
  timeout: 3000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  },
})

export default api
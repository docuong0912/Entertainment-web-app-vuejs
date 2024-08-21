import axios from 'axios'

const APIService = axios.create({
  baseURL: import.meta.env.VUE_PUBIC_BACKEND,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})

export default APIService

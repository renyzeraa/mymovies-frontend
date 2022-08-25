import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://mymovies-aplication.herokuapp.com' // localização backend
})

import axios from 'axios'
import store from './store/'

export default () => {
  return axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 5000,
    headers: {
      Authorization: `Bearer ${store.state.auth.token}`
    }
  })
}
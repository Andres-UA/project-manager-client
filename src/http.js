import axios from 'axios'
import store from './store/'

export default () => {
  return axios.create({
    baseURL: 'https://project-manager-server-andres.herokuapp.com/api/',
    timeout: 5000,
    headers: {
      Authorization: `Bearer ${store.state.auth.token}`
    }
  })
}

import axios from '../utils/request'

const registered = (option) => {
  return axios.post('/registered', { ...option })
}

const login = (option) => {
  return axios.post('/login', { ...option })
}

export { registered, login }

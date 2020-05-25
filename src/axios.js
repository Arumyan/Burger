import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://burger-new-7f74c.firebaseio.com/'
})

export default instance
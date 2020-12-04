import axios from "axios"

const api = axios.create({
  baseURL: "https://ruptiva-code-challenge.herokuapp.com/api"
})

export default api

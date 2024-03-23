import { BACK_END_POINT } from "@/config"
import axios from "axios"

const axiosInstance = axios.create({
  baseURL: BACK_END_POINT,
  withCredentials: true,
})

export default axiosInstance

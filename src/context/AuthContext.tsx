import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"
import { loginApi } from "@/api/users.api"
import type { AxiosLoginResponse, LoginUserForm } from "@/types/extended.types"
import { AxiosError } from "axios"
import { LoginRejectType } from "@/types/response.types"
import Cookies from "js-cookie"
import { set } from "zod"
type AuthRes =
  | AxiosLoginResponse
  | AxiosError<LoginRejectType, any>["response"]
  | null
interface AuthContextValue {
  response: AuthRes
  login: (data: LoginUserForm) => Promise<void>
}
export const AuthContext = createContext<AuthContextValue>({
  response: null,
  login: async (data: LoginUserForm) => {},
})
const { Provider } = AuthContext

export function AuthProvider({ children }: { children: ReactNode }) {
  const [response, setResponse] = useState<AuthRes>(null)
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(false)

  const login = async (data: LoginUserForm) => {
    loginApi(data)
      .then((res) => {
        setResponse(res)
      })
      .catch((err: AxiosError<LoginRejectType>) => {
        setResponse(err.response)
        // console.log(typeof err.request)
      })
  }

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get()
      if (!cookies.token) {
        setAuthenticated(false)
        setLoading(false)
        setResponse(null)
        return
      }
    }
  }, [])
  return (
    <Provider
      value={{
        response,
        login,
      }}
    >
      {children}
    </Provider>
  )
}

import { ReactNode, createContext, useEffect, useState } from "react"
import { loginApi, verifyToken } from "@/api/users.api"
import type { AxiosLoginResponse, LoginUserForm } from "@/types/extended.types"
import { AxiosError } from "axios"
import { LoginRejectType } from "@/types/response.types"
import Cookies from "js-cookie"
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
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  // Cambiar tipo a el enum de UserRoles de user.constants.ts
  const [isAllowed, setIsAllowed] = useState<number | null>(null)
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
        setIsAuthenticated(false)
        setLoading(false)
        setResponse(null)
        return
      }
      try {
        const res = await verifyToken(cookies.token)
        if (!res.data) {
          setIsAuthenticated(false)
          setLoading(false)
          return
        }
        if (res.data.roll === 0) setIsAllowed(0)
        else if (res.data.roll === 1) setIsAllowed(1)
        else if (res.data.roll === 2) setIsAllowed(2)
        else if (res.data.roll === 3) setIsAllowed(3)
        setIsAuthenticated(true)
        setResponse(res.data)
        setLoading(false)
      } catch (error) {
        setIsAuthenticated(false)
        setResponse(null)
        setLoading(false)
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

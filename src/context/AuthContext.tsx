import { ReactNode, createContext, useContext, useState } from "react"
import { loginApi } from "@/api/users.api"
import type { AxiosLoginResponse, LoginUserForm } from "@/types/extended.types"
import { AxiosError } from "axios"
import { LoginRejectType } from "@/types/response.types"

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

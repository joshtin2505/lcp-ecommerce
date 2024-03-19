import { ReactNode, createContext, useState } from "react"
import {
  deleteUser,
  getAll,
  login,
  logout,
  registerOrdinal,
  update,
} from "@/api/users.api"
import type { LoginUserForm } from "@/types/zodExtended.types"
export const AuthContext = createContext<any>(null) // 👈 any - tipar esto correctamente
const { Provider } = AuthContext

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authResponse, setAuthResponse] = useState<null | Response>(null)

  const signIn = async (data: LoginUserForm) => {
    try {
      const res = await login(data)
      setAuthResponse(res)
    } catch (error) {
      console.error(error)
    }
  }

  const signOut = async () => {
    try {
      const res = await logout()
      setAuthResponse(res)
    } catch (error) {
      console.error(error)
    }
  }

  const signUpOrdinal = async (data: any) => {
    try {
      const res = await registerOrdinal(data)
      setAuthResponse(res)
    } catch (error) {
      console.error(error)
    }
  }

  const updateUser = async (data: any) => {
    try {
      const res = await update(data)
      setAuthResponse(res)
    } catch (error) {
      console.error(error)
    }
  }

  const deleteUserOrdinal = async (data: any) => {
    try {
      const res = await deleteUser(data)
      setAuthResponse(res)
    } catch (error) {
      console.error(error)
    }
  }

  const getAllUsers = async () => {
    try {
      const res = await getAll()
      setAuthResponse(res)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Provider
      value={{
        signIn,
        authResponse,
      }}
    >
      {children}
    </Provider>
  )
}

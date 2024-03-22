import { create } from "zustand"
import {
  deleteUser,
  getAll,
  login,
  logout,
  registerOrdinal,
  update,
} from "@/api/users.api"
// --------------------------------------------------------------------------------- //
import type { LoginUserForm, RegisterUserForm } from "@/types/zodExtended.types"
import type { UserErrorsType, UserSuccessType } from "@/types/users.types"
import { TokenErrorsType } from "@/types/token.types"
import type { DataBaseErrorsType } from "@/types/db.types"
import type {
  LoginTokenErrorType,
  LoginUserErrorType,
  LoginUserSuccessType,
} from "@/types/response.types"

interface AuthState {
  authResponse:
    | { message: UserErrorsType; status: 401 }
    | { message: DataBaseErrorsType; status: 404 }
    | { message: TokenErrorsType; status: 500 }
    | { message: UserSuccessType; status: 200 }
    | Response
    | null
  signInNormal: (data: LoginUserForm) => Promise<void>
  // logout: () => Promise<void>
  // register: (form: RegisterUserForm) => Promise<void>
  // //   update: (form: UpdateUserForm) => Promise<void>
  // deleteUser: (id: number) => Promise<void>
  // getAll: () => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => ({
  authResponse: null,
  signInNormal: async (data) => {
    try {
      const response = (await login(data)) as Response
      if (response.status === 500) {
        // 👈 500
        const { message, error } =
          (await response.json()) as LoginTokenErrorType
        console.log(error)
        set({
          authResponse: {
            message,
            status: response.status,
          },
        })
        return
      } else if (response.status === 404) {
        // 👈 404
        const { message } = (await response.json()) as {
          message: DataBaseErrorsType
        }
        set({
          authResponse: {
            message,
            status: response.status,
          },
        })
        return
      } else if (response.status === 401) {
        // 👈 401
        const { message } = (await response.json()) as LoginUserErrorType
        set({
          authResponse: {
            message,
            status: response.status,
          },
        })
        return
      }
      const { message } = (await response.json()) as LoginUserSuccessType
      set({
        authResponse: {
          message,
          status: response.status as 200,
        },
      })
    } catch (error) {
      console.error(error)
    }
  },
  // logout: async () => {
  //   const response = await logout()
  //   set({ authResponse: response })
  // },
  // register: async (form) => {
  //   const response = await registerOrdinal(form)
  //   set({ authResponse: response })
  // },
  // deleteUser: async (id) => {
  //   const response = await deleteUser(id)
  //   set({ authResponse: response })
  // },
  // getAll: async () => {
  //   const response = await getAll()
  //   set({ authResponse: response })
  // },
  //   update: async (form) => {
  //     const response = await update(form)
  //     set({ authResponse: response })
  //   },
}))

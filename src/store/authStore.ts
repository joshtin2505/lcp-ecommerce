import { create } from "zustand"
import {
  deleteUserApi,
  getAllUsersApi,
  loginApi,
  logoutApi,
  registerApi,
  registerOrdinalApi,
  updateApi,
  getUserApi,
} from "@/api/users.api"
// --------------------------------------------------------------------------------- //
import type { LoginUserForm, RegisterUserForm } from "@/types/extended.types"
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
    | {
        message:
          | TokenErrorsType
          | DataBaseErrorsType
          | UserErrorsType
          | UserSuccessType
        status: number
      }
    | Response
    | null
  login: (data: LoginUserForm) => Promise<void>
  // logout: () => Promise<void>
  // register: (form: RegisterUserForm) => Promise<void>
  // //   update: (form: UpdateUserForm) => Promise<void>
  // deleteUser: (id: number) => Promise<void>
  // getAll: () => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => ({
  authResponse: null,
  login: async (data) => {
    loginApi(data)
      .then((res) => {
        set({
          authResponse: {
            message: res.data,
            status: res.status,
          },
        })
      })
      .catch((err) => {
        set({
          authResponse: {
            message: err.response.data,
            status: err.response.status,
          },
        })
      })
    // console.log(response)
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

import { ReactNode, createContext, useState } from "react"
import { create } from "zustand"
import {
  deleteUser,
  getAll,
  login,
  logout,
  registerOrdinal,
  update,
} from "@/api/users.api"
import type { LoginUserForm, RegisterUserForm } from "@/types/zodExtended.types"

interface AuthState {
  authResponse: null | Response | { message: string; status: number }
  login: (data: LoginUserForm) => Promise<void>
  logout: () => Promise<void>
  register: (form: RegisterUserForm) => Promise<void>
  //   update: (form: UpdateUserForm) => Promise<void>
  deleteUser: (id: number) => Promise<void>
  getAll: () => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => ({
  authResponse: null,
  login: async (data) => {
    try {
      const response = (await login(data)) as Response
      console.log(response.status)
      set({
        authResponse: {
          message: await response.json(),
          status: response.status,
        },
      })
    } catch (error) {
      console.error(error)
    }
  },
  logout: async () => {
    const response = await logout()
    set({ authResponse: response })
  },
  register: async (form) => {
    const response = await registerOrdinal(form)
    set({ authResponse: response })
  },
  deleteUser: async (id) => {
    const response = await deleteUser(id)
    set({ authResponse: response })
  },
  getAll: async () => {
    const response = await getAll()
    set({ authResponse: response })
  },
  //   update: async (form) => {
  //     const response = await update(form)
  //     set({ authResponse: response })
  //   },
}))

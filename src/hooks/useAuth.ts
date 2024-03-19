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
  //   user: null | User
  //   token: null | string
  authResponse: null | Response
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
    const response = await login(data)
    set({ authResponse: response })
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

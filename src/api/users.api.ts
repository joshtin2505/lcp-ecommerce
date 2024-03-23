import type { LoginUserForm, RegisterUserForm } from "@/types/zodExtended.types"
import axios from "@/lib/axios"

enum UsersRoutes {
  user = "/users",
  all = "/users/all",
  add = "/users/add",
  update = "/users/update",
  delete = "/users/delete",
  login = "/users/login",
  logout = "/users/logout",
  addOrdinal = "/users/add-ordinal",
}

const registerOrdinalApi = (user: RegisterUserForm) =>
  axios.post(UsersRoutes.addOrdinal, user)

const registerApi = (user: RegisterUserForm) =>
  axios.post(UsersRoutes.add, user) // 👈 Tipar correctamente

const loginApi = (user: LoginUserForm) => axios.post(UsersRoutes.login, user)

const logoutApi = () => axios.post(UsersRoutes.logout)

const getAllUsersApi = () => axios.get(UsersRoutes.all)

const getUserApi = (id: number) => axios.get(`${UsersRoutes.user}/${id}`)

const updateApi = (user: RegisterUserForm) =>
  axios.post(UsersRoutes.update, user) // 👈 Tipar correctamente

const deleteUserApi = (id: number) =>
  axios.delete(`${UsersRoutes.delete}/${id}`)

export {
  registerOrdinalApi,
  registerApi,
  loginApi,
  logoutApi,
  getAllUsersApi,
  getUserApi,
  updateApi,
  deleteUserApi,
}

import { z } from "zod"
import {
  registerUserFormSchema,
  loginUserFormSchema,
} from "@/schemas/user.schemas"
import { AxiosResponse } from "axios"
// Zod
type RegisterUserForm = z.infer<typeof registerUserFormSchema>
type LoginUserForm = z.infer<typeof loginUserFormSchema>
// ☝️ infiero el tipo de el formSchema con z.infer

// Axios
type AxiosResponseApiType = AxiosResponse<any, any> // 👈 AxiosResponse
export type { RegisterUserForm, LoginUserForm }

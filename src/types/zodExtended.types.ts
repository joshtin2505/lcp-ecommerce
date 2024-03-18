import { z } from "zod"
import {
  registerUserFormSchema,
  loginUserFormSchema,
} from "@/schemas/user.schemas"

type RegisterUserForm = z.infer<typeof registerUserFormSchema>
type LoginUserForm = z.infer<typeof loginUserFormSchema>
// ☝️ infiero el tipo de el formSchema con z.infer
export type { RegisterUserForm, LoginUserForm }

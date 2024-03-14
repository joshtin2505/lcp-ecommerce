import { z } from "zod"
import { registerUserFormSchema } from "@/schemas/user.schemas"

type RegisterUserForm = z.infer<typeof registerUserFormSchema>
// ☝️ infiero el tipo de el formSchema con z.infer
export type { RegisterUserForm }

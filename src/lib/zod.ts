import { z } from "zod"

export const formSchema = z.object({
  name: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
  confirmPassword: z.string().min(8),
})

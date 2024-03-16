import { z } from "zod"
const passwordSchema = z.string().min(8, {
  message: "Password must be at least 8 characters long",
})
export const registerUserFormSchema = z
  .object({
    name: z
      .string()
      .min(3, {
        message: "Name must be at least 3 characters long",
      })
      .max(20, { message: "Name must be less than 200 characters long" }),
    lastName: z
      .string()
      .min(3, {
        message: "Last Name must be at least 3 characters long",
      })
      .max(20, { message: "Last Name must be less than 200 characters long" }),
    email: z.string().email({
      message: "Please enter a valid email",
    }),
    password: passwordSchema,
    confirmPassword: passwordSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })

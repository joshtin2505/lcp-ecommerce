import { useRouter } from "next/navigation"
import { useAuthStore } from "@/store/authStore"
import { useEffect } from "react"

type ValidationType = {
  name: "email" | "password" | ""
  message: string
}
export function useLoginValidate() {
  const router = useRouter()
  const { authResponse } = useAuthStore()

  let validation: ValidationType = {
    name: "",
    message: "",
  }

  useEffect(() => {
    if (authResponse === null || authResponse instanceof Response) return

    if (authResponse.status === 200) {
      if (authResponse.message === "USER_LOGGED") alert("Login Exitoso")
      // router.push("/")
    } else if (authResponse.status === 401) {
      if (authResponse.message === "INCORRECT_PASSWORD") {
        validation = {
          name: "password",
          message: "Contraseña Incorrecta",
        }
      } else if (authResponse.message === "EMAIL_NOT_FOUND") {
        validation = {
          name: "email",
          message: "Este Correo no esta registrado",
        }
      }
    } else if (authResponse.status === 404) {
      validation = {
        name: "email",
        message: "Este Correo no esta registrado",
      }
    } else if (authResponse.status === 500) {
      alert("Error Porfavor Intente de Nuevo o Contacte al Administrador")
    }
  }, [authResponse])
  // no pasa los datos, fix this
  console.log(validation)

  return validation
}

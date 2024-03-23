import { useRouter } from "next/navigation"
import { useAuthStore } from "@/store/authStore"
import { useState } from "react"

type ValidationType = {
  name: "email" | "password" | ""
  message: string
}
type ValidationTypeExt = ValidationType | null
export function useLoginValidate(): [ValidationTypeExt, () => void] {
  const router = useRouter()
  const { authResponse } = useAuthStore()

  const [validation, setValidation] = useState<ValidationType | null>(null)

  function handleValidation() {
    if (authResponse === null || authResponse instanceof Response) return

    if (authResponse.status === 200) {
      alert("Login Exitoso")
      router.push("/")
    } else if (authResponse.status === 401) {
      if (authResponse.message === "INCORRECT_PASSWORD") {
        setValidation({
          name: "password",
          message: "Contraseña Incorrecta",
        })
      }
    } else if (authResponse.status === 404) {
      setValidation({
        name: "email",
        message: "Este Correo no esta registrado",
      })
    } else if (authResponse.status === 500) {
      alert("Error Porfavor Intente de Nuevo o Contacte al Administrador")
    }
  }

  // return { ...validation, auth: authResponse.message }
  // console.log(validation)

  return [validation, handleValidation]
}

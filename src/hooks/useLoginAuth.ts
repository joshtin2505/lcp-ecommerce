import { useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { AuthContext } from "@/context/AuthContext"
import clsx from "clsx"
type LoginErrors = {
  name: "email" | "password" | ""
  message: string
}

export function useLoginAuth() {
  // const router = useRouter()
  const { response } = useContext(AuthContext)
  const [errors, setErrors] = useState<LoginErrors>({
    name: "",
    message: "",
  })

  useEffect(() => {
    if (response == null) return

    const { data, status } = response
    const { message } = data
    if (status === 200) {
      if (message === "USER_LOGGED") {
      }
    } else if (status === 401) {
      if (message === "INCORRECT_PASSWORD") {
        setErrors({
          name: "password",
          message: "Contraseña Incorrecta",
        })
        console.log("Contraseña Incorrecta")
      } else if (message === "EMAIL_NOT_FOUND") {
        setErrors({
          name: "email",
          message: "Este Correo no esta registrado",
        })
      }
    } else if (status === 404) {
      setErrors({
        name: "email",
        message: "Este Correo no esta registrado",
      })
    } else if (status === 500) {
      alert("Error Porfavor Intente de Nuevo o Contacte al Administrador")
    }
  }, [response])
  return errors
}

// que el backend devuelva su propios errores y listo

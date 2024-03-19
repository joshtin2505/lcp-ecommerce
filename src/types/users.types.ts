import { Roles, UserErrors, UserSuccess } from "@/constants/user.constants"

type RolesType = keyof typeof Roles
type UserErrorsType = keyof typeof UserErrors
type UserSuccessType = keyof typeof UserSuccess

export type { RolesType, UserErrorsType, UserSuccessType }

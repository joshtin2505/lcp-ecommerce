import { Roles, UserErrors, UserSuccess } from "@/constants/user.constants"

type RolesType = (typeof Roles)[keyof typeof Roles]
type UserErrorsType = (typeof UserErrors)[keyof typeof UserErrors]
type UserSuccessType = (typeof UserSuccess)[keyof typeof UserSuccess]

export type { RolesType, UserErrorsType, UserSuccessType }

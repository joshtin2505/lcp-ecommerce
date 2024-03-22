import type { DataBaseErrorsType } from "./db.types"
import type { TokenErrorsType } from "./token.types"
import type { UserErrorsType, UserSuccessType } from "./users.types"

type LoginTokenErrorType = {
  message: TokenErrorsType
  error: unknown
}

type LoginDataBaseErrorsType = {
  message: DataBaseErrorsType
}

type LoginUserErrorType = {
  message: UserErrorsType
}

type LoginUserSuccessType = {
  message: UserSuccessType
}
export type {
  LoginTokenErrorType,
  LoginDataBaseErrorsType,
  LoginUserErrorType,
  LoginUserSuccessType,
}

import { UserErrorsType, UserSuccessType } from "./users.types"
import { DataBaseErrorsType } from "./db.types"
import { TokenErrorsType } from "./token.types"
type LoginResolveType = {
  message: UserSuccessType
}
type LoginRejectType =
  | {
      message: UserErrorsType
    }
  | {
      message: DataBaseErrorsType | TokenErrorsType
      error: unknown
    }
export type { LoginResolveType, LoginRejectType }

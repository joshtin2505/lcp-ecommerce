enum Roles {
  user = "user",
  masterAdmin = "masterAdmin",
  admin = "admin",
}
enum UserErrors {
  EMAIL_NOT_FOUND = "EMAIL_NOT_FOUND",
  INCORRECT_PASSWORD = "INCORRECT_PASSWORD",
  USER_NOT_FOUND = "USER_NOT_FOUND",
  USER_ALREADY_EXISTS = "USER_ALREADY_EXISTS",
  USER_UNAUTHORIZED = "USER_UNAUTHORIZED",
}
enum UserSuccess {
  USER_CREATED = "USER_CREATED",
  USER_DELETED = "USER_DELETED",
  USER_UPDATED = "USER_UPDATED",
  USER_FOUND = "USER_FOUND",
  USER_LOGGED = "USER_LOGGED",
  USER_LOGOUT = "USER_LOGOUT",
}

enum UsersRoutes {
  user = "/users",
  all = "/users/all",
  add = "/users/add",
  update = "/users/update",
  delete = "/users/delete",
  login = "/users/login",
  logout = "/users/logout",
  addOrdinal = "/users/add-ordinal",
  verify = "/users/verify",
}

export { Roles, UserErrors, UserSuccess, UsersRoutes }

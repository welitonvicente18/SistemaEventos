import LoginController from './LoginController'
import AuthenticateController from './AuthenticateController'
import LogoutController from './LogoutController'
import ResetPassword from './ResetPassword'

const Auth = {
    LoginController: Object.assign(LoginController, LoginController),
    AuthenticateController: Object.assign(AuthenticateController, AuthenticateController),
    LogoutController: Object.assign(LogoutController, LogoutController),
    ResetPassword: Object.assign(ResetPassword, ResetPassword),
}

export default Auth
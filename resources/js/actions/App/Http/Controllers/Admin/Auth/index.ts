import LoginController from './LoginController'
import AuthenticateController from './AuthenticateController'
import LogoutController from './LogoutController'
import ResetPassword from './ResetPassword'
import RegisterController from './RegisterController'

const Auth = {
    LoginController: Object.assign(LoginController, LoginController),
    AuthenticateController: Object.assign(AuthenticateController, AuthenticateController),
    LogoutController: Object.assign(LogoutController, LogoutController),
    ResetPassword: Object.assign(ResetPassword, ResetPassword),
    RegisterController: Object.assign(RegisterController, RegisterController),
}

export default Auth
import LoginController from './LoginController'
import AuthenticateController from './AuthenticateController'
import LogoutController from './LogoutController'
import ResetPassword from './ResetPassword'
import RegisterController from './RegisterController'
import ConfirmEmailController from './ConfirmEmailController'

const Auth = {
    LoginController: Object.assign(LoginController, LoginController),
    AuthenticateController: Object.assign(AuthenticateController, AuthenticateController),
    LogoutController: Object.assign(LogoutController, LogoutController),
    ResetPassword: Object.assign(ResetPassword, ResetPassword),
    RegisterController: Object.assign(RegisterController, RegisterController),
    ConfirmEmailController: Object.assign(ConfirmEmailController, ConfirmEmailController),
}

export default Auth
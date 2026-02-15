import LoginController from './LoginController'
import AuthenticateController from './AuthenticateController'
import LogoutController from './LogoutController'

const Auth = {
    LoginController: Object.assign(LoginController, LoginController),
    AuthenticateController: Object.assign(AuthenticateController, AuthenticateController),
    LogoutController: Object.assign(LogoutController, LogoutController),
}

export default Auth
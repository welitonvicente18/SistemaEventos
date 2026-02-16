import LoginController from './LoginController'
import AuthenticateController from './AuthenticateController'
import LogoutController from './LogoutController'
import EsqueciSenhaController from './EsqueciSenhaController'

const Auth = {
    LoginController: Object.assign(LoginController, LoginController),
    AuthenticateController: Object.assign(AuthenticateController, AuthenticateController),
    LogoutController: Object.assign(LogoutController, LogoutController),
    EsqueciSenhaController: Object.assign(EsqueciSenhaController, EsqueciSenhaController),
}

export default Auth
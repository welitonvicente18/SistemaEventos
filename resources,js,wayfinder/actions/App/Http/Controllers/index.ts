import ResetPassword from './ResetPassword'
import Admin from './Admin'
import Client from './Client'

const Controllers = {
    ResetPassword: Object.assign(ResetPassword, ResetPassword),
    Admin: Object.assign(Admin, Admin),
    Client: Object.assign(Client, Client),
}

export default Controllers
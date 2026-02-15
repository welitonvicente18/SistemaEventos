import Auth from './Auth'
import DashboardController from './DashboardController'
import Users from './Users'

const Admin = {
    Auth: Object.assign(Auth, Auth),
    DashboardController: Object.assign(DashboardController, DashboardController),
    Users: Object.assign(Users, Users),
}

export default Admin
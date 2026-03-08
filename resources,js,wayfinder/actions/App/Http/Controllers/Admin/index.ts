import Auth from './Auth'
import Subscription from './Subscription'
import DashboardController from './DashboardController'
import Users from './Users'
import Event from './Event'

const Admin = {
    Auth: Object.assign(Auth, Auth),
    Subscription: Object.assign(Subscription, Subscription),
    DashboardController: Object.assign(DashboardController, DashboardController),
    Users: Object.assign(Users, Users),
    Event: Object.assign(Event, Event),
}

export default Admin
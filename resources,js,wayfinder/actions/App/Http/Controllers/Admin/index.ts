import Subscription from './Subscription'
import DashboardController from './DashboardController'
import Auth from './Auth'
import Users from './Users'
import Event from './Event'

const Admin = {
    Subscription: Object.assign(Subscription, Subscription),
    DashboardController: Object.assign(DashboardController, DashboardController),
    Auth: Object.assign(Auth, Auth),
    Users: Object.assign(Users, Users),
    Event: Object.assign(Event, Event),
}

export default Admin
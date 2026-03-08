import Admin from './Admin'
import Public from './Public'

const Controllers = {
    Admin: Object.assign(Admin, Admin),
    Public: Object.assign(Public, Public),
}

export default Controllers
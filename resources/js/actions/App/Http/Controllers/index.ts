import Public from './Public'
import Admin from './Admin'

const Controllers = {
    Public: Object.assign(Public, Public),
    Admin: Object.assign(Admin, Admin),
}

export default Controllers
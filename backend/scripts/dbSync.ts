import db from '../src/config/database';
import Account from "../src/models/Account";
import Permission from "../src/models/Permission";
import Student from "../src/models/Student";
import User from "../src/models/User";
import UserPermission from "../src/models/UserPermission";


const dbSync = () => {
    db.sync().then(() => console.log('Database is Ready!'));
    
    // db.sync({ alter: true }).then(() => console.log('Database is Ready!'));
    // db.sync({ force: true }).then(() => console.log('Database is Ready!'));
    // above will run after *app.listen()* with *Priority*

    // Account.sync().then(() => console.log("Account synced !"))
    // Student.sync().then(() => console.log("Student synced !"))
    // Permission.sync().then(() => console.log("Permission synced !"))
    // User.sync().then(() => console.log("User synced !"))
    // UserPermission.sync().then(() => console.log("UserPermission synced !"))
}

export default dbSync;
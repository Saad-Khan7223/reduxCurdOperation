import {configureStore} from "@reduxjs/toolkit"
import user from "./slice/user"
import users from "./slice/users"
const store=configureStore({
    reducer:{
        user,
        users
    }
})
export default store
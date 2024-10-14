import { configureStore } from "@reduxjs/toolkit";
import loginReducer from './LoginSlice'
import signupReducer from './SignupSlice'
const AppStore=configureStore({
    reducer:{
        login:loginReducer,
        signup:signupReducer
    }
})

export default AppStore

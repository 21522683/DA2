import Home from "../pages/Home"
import LoginScreen from "../pages/Login"
import SignUpScreen from "../pages/SignUp"


const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: LoginScreen },
    { path: '/sign-up', component: SignUpScreen },

]

export { publicRoutes}
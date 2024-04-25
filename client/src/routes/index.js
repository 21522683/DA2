import Home from "../pages/Home"
import LoginScreen from "../pages/Login"
import SignUpScreen from "../pages/SignUp"
import NotFound from "../pages/NotFound"

const publicRoutes = [
    { path: '/', component: NotFound },
    { path: '/login', component: LoginScreen },
    { path: '/sign-up', component: SignUpScreen },
    { path: '/not-found', component: NotFound },
]

export { publicRoutes}
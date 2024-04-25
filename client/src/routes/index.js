
import LayoutAdmin from "../components/Layouts/LayoutAdmin/index.js"
import LayoutUser from "../components/Layouts/LayoutUser/index.js"
import AccountManager from "../pages/Admin/AccountManager/index.js"
import LoginScreen from "../pages/Login"
import SignUpScreen from "../pages/SignUp"
import Home from "../pages/User/Home/index.js"
import NotFound from "../pages/NotFound"

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: LoginScreen },
    { path: '/sign-up', component: SignUpScreen },
    { path: '/not_found', component: NotFound },
]

export const customerRoutes = [
    { path: '/', component: Home, layout: LayoutUser},

]

export const adminRoutes = [
    { path: '/account', component: AccountManager, layout: LayoutAdmin },
]

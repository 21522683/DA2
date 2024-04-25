
import LayoutAdmin from "../components/Layouts/LayoutAdmin/index.js"
import LayoutUser from "../components/Layouts/LayoutUser/index.js"
import AccountManager from "../pages/Admin/AccountManager/index.js"
import LoginScreen from "../pages/Login"
import SignUpScreen from "../pages/SignUp"
import Home from "../pages/User/Home/index.js"


export const publicRoutes = [
    { path: '/login', component: LoginScreen, layout: null },
    { path: '/sign-up', component: SignUpScreen, layout: null },

]

export const customerRoutes = [
    { path: '/', component: Home, layout: LayoutUser},

]

export const adminRoutes = [
    { path: '/admin/account', component: AccountManager, layout: LayoutAdmin },
]


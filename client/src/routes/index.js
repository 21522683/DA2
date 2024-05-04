
import LayoutAdmin from "../components/Layouts/LayoutAdmin/index.js"
import LayoutUser from "../components/Layouts/LayoutUser/index.js"
import AccountManager from "../pages/Admin/AccountManager/index.js"
import ContainerManager from "../pages/Admin/ContainerManager/index.js"
import ContractManager from "../pages/Admin/ContractManager/index.js"
import GoodsDeclarationManager from "../pages/Admin/GoodsDeclarationManager/index.js"
import HistoryBillManager from "../pages/Admin/HistoryBillManager/index.js"
import OrderManager from "../pages/Admin/OrderManager/index.js"
import VesselManager from "../pages/Admin/VesselManager/index.js"
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
    { path: '/admin/order', component: OrderManager, layout: LayoutAdmin },
    { path: '/admin/container', component: ContainerManager, layout: LayoutAdmin },
    { path: '/admin/vessel', component: VesselManager, layout: LayoutAdmin },
    { path: '/admin/goods-declaration', component: GoodsDeclarationManager, layout: LayoutAdmin },
    { path: '/admin/bill', component: HistoryBillManager, layout: LayoutAdmin },
    { path: '/admin/contract', component: ContractManager, layout: LayoutAdmin },
]


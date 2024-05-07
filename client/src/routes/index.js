import LayoutAdmin from "../components/Layouts/LayoutAdmin/index.js"
import LayoutUser from "../components/Layouts/LayoutUser/index.js"
import AccountManager from "../pages/Admin/AccountManager/index.js"
import ContainerManager from "../pages/Admin/ContainerManager/index.js"
import ContractManager from "../pages/Admin/ContractManager/index.js"
import GoodsDeclarationManager from "../pages/Admin/GoodsDeclarationManager/index.js"
import HistoryBillManager from "../pages/Admin/HistoryBillManager/index.js"
import OrderManager from "../pages/Admin/OrderManager/index.js"
import VesselManager from "../pages/Admin/VesselManager/index.js"
import Login from "../pages/auth/Login/index.js"
import SignUp from "../pages/auth/SignUp/index.js"
import ForgetPassword from "../pages/auth/FogetPassword/index.js"
import NotFound from "../pages/Generals/NotFound/index.js"
import Home from "../pages/User/Home/index.js"
import ResetPassword from "../pages/auth/ResetPassword/index.js"
import TemplateEmailVerify from "../pages/auth/TemplateEmailVerify/index.js"
import CreateOrder from "../pages/User/CreateOrder/index.js"
import YourOrder from "../pages/User/YourOrder/index.js"
import YourContract from "../pages/User/YourContract/index.js"
import YourBillHistory from "../pages/User/YourBillHistory/index.js"
import PrivateInfomation from "../pages/User/PrivateInfomation/index.js"

export const publicRoutes = [
    { path: '/sign-up', component: SignUp },
    { path: '/login', component: Login },
    { path: '/forgot', component: ForgetPassword },
    { path: '/forgot-password', component: ResetPassword },
    { path: '/verify-email', component: TemplateEmailVerify },
    { path: '/not-found', component: NotFound },
    
]

export const customerRoutes = [
    { path: '/', component: Home, layout: LayoutUser},
    { path: '/user/create-order', component: CreateOrder, layout: LayoutUser},
    { path: '/user/your-order', component: YourOrder, layout: LayoutUser},
    { path: '/user/your-contract', component: YourContract, layout: LayoutUser},
    { path: '/user/you-history-bill', component: YourBillHistory, layout: LayoutUser},
    { path: '/user/info', component: PrivateInfomation, layout: LayoutUser},
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

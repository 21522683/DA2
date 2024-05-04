import LayoutAdmin from "../components/Layouts/LayoutAdmin/index.js"
import LayoutUser from "../components/Layouts/LayoutUser/index.js"
import AccountManager from "../pages/Admin/AccountManager/index.js"
import LoginScreen from "../pages/Login"
import SignUpScreen from "../pages/SignUp"
import Home from "../pages/User/Home/index.js"
import NotFound from "../pages/NotFound"
import AddNewOrder from "../pages/User/AddNewOrder/index.js"
import AddProduct from "../pages/User/AddNewOrder/AddProduct/index.js"
import OrderManage from "../pages/User/OrderManage/index.js"
import ContractManage from "../pages/User/ContractManage/index.js"
import BillManage from "../pages/User/BillManage/index.js"
import OrderDetail from "../pages/User/OrderDetail/index.js"
import ContractDetail from "../pages/User/ContractDetail/index.js"
import BillDetail from "../pages/User/BillDetail/index.js"
import Profile from "../pages/User/Profile/index.js"

export const publicRoutes = [
    { path: '/', component: NotFound },
    { path: '/login', component: LoginScreen },
    { path: '/sign-up', component: SignUpScreen },
    { path: '/not-found', component: NotFound },
]

export const customerRoutes = [
    { path: '/', component: LoginScreen, layout: LayoutUser},
    { path: '/add-new-order', component: AddNewOrder, layout: LayoutUser},
    { path: '/add-product', component: AddProduct, layout: LayoutUser},
    { path: '/order-manage', component: OrderManage, layout: LayoutUser},
    { path: '/order-detail', component: OrderDetail, layout: LayoutUser},
    { path: '/contract-manage', component: ContractManage, layout: LayoutUser},
    { path: '/contract-detail', component: ContractDetail, layout: LayoutUser},
    { path: '/bill-manage', component: BillManage, layout: LayoutUser},
    { path: '/bill-detail', component: BillDetail, layout: LayoutUser},
    { path: '/your-profile', component: Profile, layout: LayoutUser},
]

export const adminRoutes = [
    { path: '/account', component: AccountManager, layout: LayoutAdmin },
]

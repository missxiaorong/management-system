import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App'
import Home from '../components/common/home'
import Login from '../components/common/login'
import UserManagement from '../components/userManagement/index'
import GoodsManagement from '../components/goodsManagement/index'
import GoodDetail from '../components/goodsManagement/goodDetail'
import ActivityManagement from '../components/activityManagement/index'
import OrderManagement from '../components/orderManagement/index'
import Return  from '../components/orderManagement/return'
import PrivilegeManagement from '../components/privilegeManagement/index'
import UserDetail from '../components/userManagement/userDetail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/userManagement',
        component: UserManagement,
      },
       {
            path: '/userDetail',
            component: UserDetail,
             alias:'/userManagement/userDetail'
       },
      {
        path: '/goodsManagement',
        name: 'goodsManagement',
        component: GoodsManagement
      },
       {
            path: '/goodDetail',
            component: GoodDetail,
             alias:'/userManagement/goodDetail'
       },
      {
        path: '/activityManagement',
        name: 'activityManagement',
        component: ActivityManagement
      },
      {
        path: '/orderManagement',
        name: 'OrderManagement',
        component: OrderManagement,
      },
       { 
         path: '/OrderManagement/return',
          component: Return, 
          name: 'return' 
        },
      {
        path: '/privilegeManagement',
        name: 'privilegeManagement',
        component: PrivilegeManagement
      },
    ]
  },

]
const router = new VueRouter({
  mode: 'history',
  routes: routes      
});

export default router;
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App'
import Home from '../components/common/home'
import Login from '../components/common/login'
import UserManagement from '../components/userManagement/index'
import GoodsManagement from '../components/goodsManagement/index'
import GoodDetail from '../components/goodsManagement/goodDetail'
import GoodAdd from '../components/goodsManagement/add'
import ActivityManagement from '../components/activityManagement/index'
import ActivityAdd from '../components/activityManagement/add'
import ActivityEdit from '../components/activityManagement/edit'
import OrderManagement from '../components/orderManagement/index'
import Return  from '../components/orderManagement/return'
import PrivilegeManagement from '../components/privilegeManagement/index'
import PrivilegeEdit from '../components/common/add'
import PrivilegeAdd from '../components/common/add'
import LogManagement from '../components/logManagement/index'
import UserDetail from '../components/userManagement/userDetail'
import Delivery  from '../components/orderManagement/delivery'
import RoleManagement from '../components/roleManagement/index'
import RoleAdd from '../components/roleManagement/add'
import Admin from '../components/admin/index'
import AdminAdd from '../components/admin/add'
import ChangePwd from '../components/admin/changePwd'
import Add from '../components/common/add'
import Detail from '../components/common/detail'
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
            path: '/goodsManagement/add',
            component: GoodAdd,
           
       },
       {
         path:'/add',
         name:'add',
         component:Add
       },
         {
         path:'/detail',
         name:'detail',
         component:Detail
       },
      {
        path: '/activityManagement',
        name: 'activityManagement',
        component: ActivityManagement
      },
      {
        path: 'activityManagement/add',
        name: 'activityAdd',
        component: ActivityAdd
      },
       {
        path: 'activityManagement/edit',
        name: 'activityedit',
        component: ActivityEdit
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
         path: '/OrderManagement/delivery',
          component: Delivery, 
          name: 'delivery' 
        },
      {
        path: '/privilegeManagement/list',
        name: 'privilegeManagement',
        component: PrivilegeManagement
      },
      {
        path: '/privilegeManagement/add',
        name: 'privilegeAdd',
        component: PrivilegeAdd
      },
       {
        path: '/privilegeManagement/edit',
        name: 'privilegeEdit',
        component: PrivilegeEdit
      },
       {
        path: '/rolegeManagement/list',
        name: 'rolegeManagement',
        component: RoleManagement
      },
       {
        path: '/rolegeManagement/add',
        name: 'roleAdd',
        component: RoleAdd
      },
       {
        path: '/admin/list',
        name: 'admin',
        component: Admin
      },
        {
        path: '/admin/add',
        name: 'adminAdd',
        component: AdminAdd
      },
       {
        path: '/admin/changePwd',
        name: 'changePwd',
        component: ChangePwd
      },
       {
        path: '/logManagement',
        name: 'logManagement',
        component: LogManagement
      },
    ]
  },
     
]
const router = new VueRouter({
  mode: 'history',
  　scrollBehavior:()=>({ // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
　　　　y:0
　　}),

  routes: routes      
});

export default router;
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import axios from 'axios'
Vue.prototype.$http = axios
import UsersModule from "./modules/UsersModule";
import Table from './modules/table'
import SearchList from './modules/searchList'
import AddList from './modules/addList'
import NavList from './modules/navList'
// import OrdersModule from "./modules/OrdersModule";
// import ActivityModule from "./modules/ActivityModule";
// import PrivilegeModule from "./modules/PrivilegeModule";
// import RoleModule from "./modules/RoleModule"
// import AdminModule from "./modules/AdminModule"
// import LogModule from "./modules/LogModule"
import CommonModule from "./modules/CommonModule"
import actions from './actions'
const debug = process.env.NODE_ENV !== 'production'
// env里去获取当前的环境是否需要开启严格模式
// 在发布环境开启严格模式会造成性能上不必要的损失
const store = new Vuex.Store({
    modules: {
        users:UsersModule,
        common:CommonModule,
        Table,
        NavList,
        AddList,
        SearchList
    },
    actions,
    // strict: debug
  // 是否开启严格模式

})
// store.maxAge(1000)
// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default store




// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
Vue.use(Vuex)
import router from './router'
import Element from 'element-ui'
import axios from 'axios'
import store from './store/store'
import Mock from './mock/mock';
Mock.mockData();
import 'font-awesome/less/font-awesome.less'
 import 'element-ui/lib/theme-default/index.css'
 Vue.use(Element)
Vue.config.productionTip = false
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data() {
    return {

    }
  },
  router,
  store,
  template: '<App/>',
  components: { App },
  
 // 监听路由检查登录
  watch: {
    "$route": 'checkLogin'
  },

  created() {
    this.checkLogin();
  },

  methods: {
    checkLogin() {
       this.$store.commit('checkLogin')
   }
  }
})

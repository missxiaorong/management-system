import Vue from 'vue'
import router from '../../router'
import axios from 'axios'
Vue.prototype.$http = axios
import { setCookie,getCookie } from '../../utils/authService'
export default {
    state: {
        currentUser: {
            get UserName() {
                return getCookie("currentUser_name");
            },
            get Session_id() {
                return getCookie("currentSession_id");
            }
        },
    
    },
    mutations: {
        setUser(state, { user_name, session_id, expiredays }) {
            // 在这里把用户名和session保存起来
            setCookie("currentUser_name", user_name, expiredays);
            setCookie("currentSession_id", session_id, expiredays);
        },
        checkLogin() {
            if (!getCookie('currentSession_id')) {
                //如果没有登录状态则跳转到登录页 
                router.push('/login');
            }
            else {
                //否则跳转到登录后的页面 
                //router.push('/');
            }
        },
    },
    actions: {
        userLogin(context, { user_name, user_pass }) {
            let loginParam = {
                user_name: user_name,
                user_pass: user_pass,
            }
            let url = "/api/getUser";
            let expiredays = 1000000 * 60
            axios.post(url, { param: loginParam })
                .then((res) => {
                    if (res.data.state == 1) {
                        var session_id = res.data.session_id;
                        if (session_id != "") {
                            // 后端API验证通过
                            // 调用上面mutations里定义的方法
                            context.commit("setUser", { "user_name": user_name, "session_id": session_id, "expiredays": expiredays });

                        }
                        router.push('/');

                    } else {

                        // this.loading = !this.loading
                    }
                }, (res) => {
                    alert("请求失败啦")
                });
        },
        userLogout(context, { session_id }) {
            let url = "/api/logout";
            axios.post(url, { param: session_id })
                .then((res) => {
                    if (res.data.state == 0) {
                        setCookie(session_id, '', -1);
                        setTimeout(() => {
                            router.replace('/login')
                        }, 1000)
                    }
                })
        }
    },

}
import Vue from "vue";

export default {
    state: {
        currentUser: {
            get UserName() {
                return localStorage.getItem("currentUser_name");
            },
            get UserToken() {
                return localStorage.getItem("currentUser_token");
            }
        }
    },
    mutations: {
        setUser(state, { user_name, user_token }) {
            // 在这里把用户名和token保存起来
            localStorage.setItem("currentUser_name", user_name);
            localStorage.setItem("currentUser_token", user_token);
        }
    },
    actions: {
        userLogin(context, { user_name, user_pass }) {
            // 发送get请求做权限认证(真实开发建议用post的方式)
            let loginParam = {
                user_name: user_name,
                user_pass: user_pass,
            }
            Vue.http.get("/api/muser", { param: loginParam })
                .then((res) => {
                    alert(22);
                    if (res != null && res.body != undefined && "access-token" in res.body) {
                        var token = res.body["access_token"];
                        if (token != "") {
                            // 后端API验证通过
                            // 调用上面mutations里定义的方法
                            context.commit("setUser", { "user_name": user_name, "user_token": token });
                        }
                          this.$message({
                                message: res.body['message']  //欢迎成功登录奇思广议后台管理系统
                            });
                            this.$router.push('/');
                    } else {
                        this.$notify.info({
                            title: '登录失败',
                            message: res.body['message'] //
                        })
                        this.loading = !this.loading
                    }
                }, (res) => {
                    alert("请求失败啦")
                });
        }
    }
}


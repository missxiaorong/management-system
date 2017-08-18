
 <template>
    <div class="add">
        <el-form label-position="left" :model="addForm" class="demo-table-expand intable " :inline="true" @submit.prevent="submit">
            <div class="input-box" v-for="(item, index) in addData" :key="index">
                <el-form-item class="sub-label" :label="item.label" :prop="item.name">
                    <el-input v-if="item.type=='input'" v-model="item.val" class="formbox"></el-input>
                    <el-upload v-if="item.type=='img'" class="avatar-uploader" :action="baseUrl + ' '" :show-file-list="false" :on-success="uploadImg" :before-upload="beforeImgUpload">
                        <img v-if="addForm.image_path" :src="baseImgPath + addForm.image_path" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <span v-if="item.type=='text'" :name="item.name" class="formbox">{{item.val}}
                    </span>
                    <ueditor v-if="item.type=='ueditor'" @ready="editorReady" :name="item.name" v-model="item.val">
                    </ueditor>
                    <el-radio-group v-if="item.type=='radio'" v-model="item.val" class="formbox">
                        <el-radio v-for="(radio,sub_index) in item.radioGroup" :checked="{'checked':sub_index===1}" :key="sub_index" :label="radio.label">{{sub_index}}
                        </el-radio>
                    </el-radio-group>
                    <el-switch v-if="item.type=='switch'" :on-text="item.label1" :off-text="item.label2" v-model="item.val" class="formbox">
                    </el-switch>
                    <el-select v-if="item.type=='select'" v-model="item.val" :name="item.name" class="formbox">
                        <el-option v-for="(option, sub_index) in item.options" :key="sub_index" :label="option.label" :value="option.value" selected>
                        </el-option>
                    </el-select>
                     <span  v-if="item.type=='tree'"  class="title-tree">{{item.title}}</span>
                    <el-tree v-if="item.type=='tree'" class="formbox" :data="data2" ref="tree" highlight-current show-checkbox node-key="id" :default-expanded-keys="[1,]" :default-checked-keys="[1]" :props="defaultProps">
                    </el-tree>
                    <span  v-if="item.type!='tree'" class="title-inline">{{item.title}}</span>
                </el-form-item>
                <div v-if="item.label=='图标'">
                    <p>可选图标：</p>
                    <v-icon></v-icon>
                </div>
            </div>
            <el-button type="success" size="small" class="save" @click="handleAdd">保存</el-button>
        </el-form>
        <router-view></router-view>
    </div>
</template>

<script>
import Ueditor from './ueditor.vue'
import RoleTree from './roletree'
import vIcon from './icon.vue'
import { baseUrl, baseImgPath } from '../../api/config'
import {getData} from '../../common/api'
export default {
    props: {
        // addData: {
        //     type: Array,
        //     required: true
        // },
        sign: ''
    },
    components: {
        Ueditor,
        RoleTree,
        vIcon

    },
    data() {

        return {
            addData: [],
            radio: '1',
            addForm: {
                image_path: '',
                name: ''
            },
            item: {},
            baseImgPath,
            baseUrl,
            data2: [{
                id: 1,
                label: '后台系统管理',
                children: [{
                    id: 4,
                    label: '用户管理',
                },
                {
                    id: 2,
                    label: '商品管理',
                    children: [{
                        id: 5,
                        label: '商品列表'
                    }, {
                        id: 6,
                        label: ' 添加商品'
                    }]
                },
                {
                    id: 3,
                    label: '活动管理',
                    children: [{
                        id: 5,
                        label: '首页幻灯片列表'
                    }, {
                        id: 6,
                        label: ' 添加首页幻灯片'
                    }]
                },
                {
                    id: 4,
                    label: '订单管理',
                    children: [{
                        id: 5,
                        label: '订单列表'
                    }, {
                        id: 6,
                        label: ' 批量发货'
                    },
                    {
                        id: 6,
                        label: ' 退货/退款列表'
                    }]
                },
                {
                    id: 3,
                    label: '角色管理',
                    children: [{
                        id: 5,
                        label: '角色列表'
                    }, {
                        id: 6,
                        label: ' 角色添加'
                    }]
                }

                ]
            }],


            defaultProps: {
                children: 'children',
                label: 'label'
            },
            // rules: {
            // 		name: [
            // 			{ required: true, message: '请输入', trigger: 'blur' },
            // 		],
            // 	},
        }
    },
    created() {
        this.getList()
    },
    methods: {
        uploadImg(res, file) {

            if (res.status == 1) {
                // alert(11);
                this.url = res.image_path;
            } else {
                this.$message.error('上传图片失败！');
            }
        },
        beforeImgUpload(file) {
            const isRightType = (file.type === 'image/jpeg') || (file.type === 'image/png');
            const isLt2M = file.size / 1024 / 1024 < 2;
            alert(111)
            if (!isRightType) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isRightType && isLt2M;
        },
        getList() {
            if(this.sign=='admin'){
            let role="role"
            var role = getData.getUrl(role).table_url
            this.$http.get(add_url).then((res) => {
                res = res.data;
                this.item.options = res.data.label;
            })  
            }
            var add_url = getData.getUrl(this.sign).addList_url
            this.addData = add_url;
        },

        handleAdd({ commit }) {
            var url = getData.getUrl(this.sign).add_url
            let arr = this.addData
            let params = []
            for (let i = 0; i < this.addData.length; i++) {
                if (arr[i].type == "tree") {
                    arr[i].val = this.$refs.tree[0].getCheckedNodes();
                }
                params.push(arr[i].val)
            }
            console.log(params)
            this.$refs.addForm.validate((valid) => {
                if (valid) {
                    try {
                        this.$http.get(url, params).then((res) => {
                            if (res.code === "000") {
                                this.$message({
                                    type: 'success',
                                    message: '添加成功'
                                });
                                this.addForm = addForm
                            } else {
                                this.$message({
                                    type: 'error',
                                    message: result.message
                                });
                            }
                        })
                    } catch (err) {
                        console.log(err)
                    }
                } else {
                    this.$notify.error({
                        title: '错误',
                        message: '请检查输入是否正确',
                        offset: 100
                    });
                    return false;
                }
            });
        },

        editorReady(instance) {
            instance.setContent('');

            instance.addListener('contentChange', () => {
                this.content = instance.getContent();
            });
        },
    }
}
</script>
<style scoped>
.add {
    width: 85%;
    float: right;
    margin-top: 60px;
}

.intable.el-form-item__label {
    width: 150px;
    background-color: green!important;
    color: red;
    height: 50px;
}

.intable .el-form-item {

    margin-right: 0;
    margin-bottom: 0;
    line-height: 50px;
    width: 100%;
    border-bottom: 1px solid #eaeefb;
}

.el-input {
    padding-top: 6px;
    width: 150%;
}

.good-img {
    width: 100px;
    height: 100px;
}


.el-form {
    margin: 20px 5%;
}



.save {
    margin: 30px 50%;
}




.title-inline {
    display: inline-block;
    vertical-align: middle;
    color: #555;
    margin-left: 5px;
    margin-top: -20px;
}



.el-input {
    padding-top: 6px;
    width: 300px;
}

.table {
    border-collapse: collapse;
    line-height: 1.5em;
}

.el-radio {
    margin-right: 30px;
}

.formbox {
    width: 25rem;
}
.title-tree{
    padding-top: 10px;
}
</style>


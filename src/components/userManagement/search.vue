
<template>
    <el-form :inline="true" :rules="rules" :model="formInline" class="demo-form-inline">
        <el-form-item label="姓名">
            <el-input v-model="formInline.user.name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="tel">
            <el-input v-model.number="formInline.tel"></el-input>
        </el-form-item>
    
        <el-form-item label="地址">
            <el-form-item v-model="formInline.user.address" placeholder="地址">
                 <el-input v-model="formInline.address"></el-input>
            </el-form-item>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" >查询</el-button>
        </el-form-item>
    </el-form>
</template>


<script>
export default {
    data() {
        var checkTel = (rule, value, callback) => {

            if (!Number.isFinite(value)) {
                callback(new Error('请输入数字值'));

            } else {
                if (value.length < 11) {
                    callback(new Error('手机号码不足11位'));
                }
            }
        };

        return {
            formInline: {
                user: '',
                tel: ''
            },
            rules: {

                tel: [
                    { validator: checkTel, trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>


<style>
.demo-form-inline {
    margin-top: 20px;
}
</style>



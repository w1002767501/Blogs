<template>
  <div class="home">
    <div class="bg-home">
      <el-form
        :label-position="labelPosition"
        ref="form"
        :model="form"
        label-width="80px"
        :rules="rules"
      >
        <el-form-item label="账号：" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input
            type="password"
            v-model="form.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="submitForm1('form')">注册</el-button>
          <el-button type="primary" @click="submitForm2('form')"
            >登陆</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { registered, login } from '../api/login'
export default {
  name: 'Home',
  data() {
    var validatePass = (rule, value, callback) => {
      const pas = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/
      if (pas.test(value) === false) {
        callback(new Error('密码格式不对'))
      } else {
        callback()
      }
    }
    return {
      form: {
        name: '',
        password: null,
      },
      labelPosition: 'right',
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' },
        ],
      },
    }
  },
  components: {},
  methods: {
    submitForm1(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const apiData = {
            username: this.form.username,
            password: this.form.password,
          }
          registered(apiData).then((res) => {
            if (res.data === false) {
              this.$message.error('抱歉，该账号已被注册')
              this.form.username = ''
              this.form.password = null
            } else {
              // alert('注册成功')
              this.$message({
                message: '恭喜你，注册成功',
                type: 'success',
              })
              this.form.username = ''
              this.form.password = null
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    submitForm2(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const apiData = {
            username: this.form.username,
            password: this.form.password,
          }
          login(apiData).then((res) => {
            console.log(res.data)
            if (res.data === false) {
              this.$message.error('抱歉，该账号已被注册')
              this.form.username = ''
              this.form.password = null
            } else {
              // alert('注册成功')
              this.$message({
                message: '登陆成功',
                type: 'success',
              })
              this.form.username = ''
              this.form.password = null
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
  },
}
</script>
<style lang="scss">
.home {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('../assets/images/bg.png');
  display: flex;
  align-items: center;
  background-size: cover;
  .bg-home {
    box-sizing: border-box;
    padding: 5% 2%;
    width: 40%;
    height: 50%;
    margin: auto;
    background: rgba($color: #fff, $alpha: 0.6);
    border-radius: 15px;
    .el-form-item {
      margin-bottom: 40px;
      .el-form-item__label {
        // border: 1px solid;
        // background: #fff;
        font-size: 18px;
      }
      .el-button {
        font-size: 20px;
        width: 30%;
      }
    }
    .el-form-item__content {
      text-align: right;
    }
  }
}
</style>

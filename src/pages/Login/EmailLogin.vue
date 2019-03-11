<!-- 邮箱验证登录 -->

<template>
  <LoginTemplate :loginInfo="loginInfo"/>
</template>

<script>
  export default {
    name: "EmailLogin",
    data () {
      return {
        // 传入数据渲染 Login模板
        loginInfo: {
          type: 'email', // 用于表示传入的是什么数据 1代表手机登录, 2代表密码登录, 3代表邮箱登录
          accountPlace: '请输入手机号',
          pwdPlace: '请输入短信验证码',
          leftInfo: '遇到问题?',
          rightInfo: '使用密码验证登录'
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>

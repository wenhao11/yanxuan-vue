<!-- 利用slot创建登录模板样式 -->
<template>
  <!-- 使用slot创建模板 -->
  <div class="phoneLogin-wrapper">
    <div class="logo">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
    </div>
    <input class="account" type="text" :placeholder="loginInfo.accountPlace">
    <div class="password-wrapper">
      <input class="password" type="text" :placeholder="loginInfo.pwdPlace">
      <slot name="getCode"></slot>
    </div>
    <div class="otherInfo">
      <span class="otherInfo-left">{{loginInfo.leftInfo}}</span>
      <span class="otherInfo-right" @click="$router.push(`/login/phone/2}`)">{{loginInfo.rightInfo}}</span>
    </div>
    <div class="login">登录</div>
    <div class="otherLoginType">其它登录方式</div>
    <slot name="register"></slot>
  </div>
</template>

<script>
  export default {
    name: "LoginTemplate",
    props: {
      loginInfo: Object
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .phoneLogin-wrapper
    width: 100%
    text-align center
    box-sizing border-box
    .logo
      padding-top: .74667rem;
      margin-bottom: 1.8rem;
      img
        width: 2.56rem;
        height: .85333rem;
    .account
      width 90%
      height: 1.2rem;
      font-size: 0.4rem;
      line-height: 0.6rem;
      margin: 0.39rem 0;
      padding-left: 0;
      -webkit-tap-highlight-color: transparent;
      outline none
      border-bottom 1px solid #bdbdbd
      // 修改placeholder样式
      &::-webkit-input-placeholder
        font-size: .36rem
    .password-wrapper
      position relative
      left 0
      top 0
      display inline-block
      width: 90%
      .password
        width 100%
        height: 1.2rem;
        font-size: 0.4rem;
        line-height: 0.6rem;
        padding-left: 0;
        -webkit-tap-highlight-color: transparent;
        outline none
        border-bottom 1px solid #bdbdbd;
        &::-webkit-input-placeholder
          font-size: .36rem
        

      
    .otherInfo
      height: 0.6rem;
      line-height: 0.6rem;
      color: #7f7f7f !important;
      font-size: 0.38rem;
      display flex
      justify-content space-between
      padding .4rem .4rem
      .otherInfo-right
        color: #000

    .login
      width: 90%
      display inline-block
      margin .42667rem 0
      height: 1.25333rem;
      line-height: 1.25333rem;
      text-align: center;
      font-size: .37333rem;
      color: #fff;
      border: 1px solid #b4282d;
      background-color: #b4282d;
      border-radius: 4px;
    .otherLoginType
      width: 90%
      display inline-block
      margin-bottom .4rem
      height: 1.25333rem;
      line-height: 1.25333rem;
      text-align: center;
      font-size: .37333rem;
      color: #b4282d;
      border: 1px solid #b4282d;
      border-radius: 4px
</style>

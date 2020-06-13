<template>
  <div class="main bg">
    <div class="qrcode-box">
      <div id="wx_reg">
      </div>
    </div>
    <!--<a-form-->
      <!--id="formLogin"-->
      <!--class="user-layout-login"-->
      <!--ref="formLogin"-->
    <!--&gt;-->
      <!--<a-form-item>-->
        <!---->
      <!--</a-form-item>-->
    <!--</a-form>-->
  </div>
</template>

<script>
export default {
  name: 'Login',
  created () {
    const wxAssets = 'https://rescdn.qqmail.com/node/ww/wwopenmng/js/sso/wwLogin-1.0.0.js'
    this.loadScript(wxAssets, r => this.getWxQR())
  },
  methods: {
    getWxQR () {
      const wxObj = {
        id: 'wx_reg',
        appid: 'ww0f3efc2873ad11c3',
        agentid: '1000036',
        redirect_uri: 'http://review.freebie-queen.com/api/v1/user/login/wx',
        state: 'reviewer@aukey',
        href: 'data:text/css;base64,LmltcG93ZXJCb3ggLnFyY29kZSB7d2lkdGg6IDIwMHB4O30NCi5pbXBvd2VyQm94IC50aXRsZSB7ZGlzcGxheTogbm9uZTt9DQouaW1wb3dlckJveCAuaW5mbyB7d2lkdGg6IDIwMHB4O30NCi5zdGF0dXNfaWNvbiB7ZGlzcGxheTogbm9uZX0NCi5pbXBvd2VyQm94IC5zdGF0dXMge3RleHQtYWxpZ246IGNlbnRlcjt9'
      }
      window.WwLogin(wxObj)
    },
    loadScript (src, callback) {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      if (callback) script.onload = callback
      document.querySelector('body').appendChild(script)
      script.src = src
    }
  }
}
</script>

<style scoped>
  .user-layout-login {
    background: #ffffff;
    padding:12px;
    border-radius: 3px;
  }
  .user-layout-login label {
    font-size: 14px;
  }
  .qrcode-box{
    height: 295px;
    padding-top: 100px;
    padding-left: 35px;
  }

  /*-----common---------*/
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body{
    margin: 0;
    padding: 0;
  }
  #app {
    font-family:'PingFang-SC-Medium', Helvetica, 'Avenir', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: auto;
    width: 10rem;
    max-width: 750px;
  }
  .bg{
    background-image: url(../assets/images/background1@2x.png);
    background-size: cover;
    background-repeat: repeat;
    height: 100vh;
  }
  .flex {
    display: flex;
  }

  .basis-xs {
    flex-basis: 20%;
  }

  .basis-sm {
    flex-basis: 40%;
  }

  .basis-df {
    flex-basis: 50%;
  }

  .basis-lg {
    flex-basis: 60%;
  }

  .basis-xl {
    flex-basis: 80%;
  }

  .flex-sub {
    flex: 1;
  }

  .flex-twice {
    flex: 2;
  }

  .flex-treble {
    flex: 3;
  }

  .flex-direction {
    flex-direction: column;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .align-start {
    align-items: flex-start;
  }

  .align-end {
    align-items: flex-end;
  }

  .align-center {
    align-items: center;
  }

  .align-stretch {
    align-items: stretch;
  }

  .self-start {
    align-self: flex-start;
  }

  .self-center {
    align-self: flex-center;
  }

  .self-end {
    align-self: flex-end;
  }

  .self-stretch {
    align-self: stretch;
  }

  .align-stretch {
    align-items: stretch;
  }

  .justify-start {
    justify-content: flex-start;
  }

  .justify-end {
    justify-content: flex-end;
  }

  .justify-center {
    justify-content: center;
  }

  .justify-between {
    justify-content: space-between;
  }

  .justify-around {
    justify-content: space-around;
  }
  .text-trunct{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .text-center{
    text-align: center;
  }
  .text-yellow{
    color: rgba(255,255,0,1)
  }
  .text-gray{
    color: rgba(134,131,117,1)
  }
  .nav{
    line-height: 2;

  }
  .nav-item{
    white-space: nowrap;
    margin: 0 0.1rem;
    color: skyblue;
    text-decoration: none;
    font-size: 0.45rem;
  }
  /*-----common---------*/
</style>

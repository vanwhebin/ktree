<template>
  <div class="main">
    <a-form
      id="formLogin"
      class="user-layout-login"
      ref="formLogin"
    >
      <a-form-item>
        <div class="qrcode-box">
          <div id="wx_reg">
          </div>
        </div>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  created () {
    const wxAssets = 'https://rescdn.qqmail.com/node/ww/wwopenmng/js/sso/wwLogin-1.0.0.js'
    this.loadScript(wxAssets, r => this.getWxQR())
  },
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
</script>

<style scoped>

</style>

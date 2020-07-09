//app.js
const  https = require("./utils/api")
App({
  onLaunch: function () {
  
  },
  globalData: {
    https: https.http,
    openApi: "https://openapi.crazydesign.top"
  },
})
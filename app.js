//app.js
App({
  onLaunch: function (referrerInfo) {
    console.log(referrerInfo);
    console.log('app.js 初始化加载');
  },
  onShow: function (shareTicket) {
    console.log(shareTicket)
  },
  onHide: function () {
    console.log('隐藏')
  },
  name: '全局变量看看能否获取'
})
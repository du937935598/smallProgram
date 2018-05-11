//app.js
App({
  onLaunch: function (referrerInfo) {
  },
  onShow: function (shareTicket) {
    wx.setTabBarBadge({
      index: 1,
      text: '1'
    })
    wx.showTabBarRedDot({
      index: 2,
      text: '1'
    })
    wx.setTabBarStyle({
      color: '#9a9a9a',
      selectedColor: '#fa6450',
      backgroundColor: '#fff',
      borderStyle: 'black'
    })
    wx.setTabBarItem({
      index: 3,
      text: 'text',
      iconPath: '/images/shareQqkj.png',
      selectedIconPath: '/images/shareQq.png'
    })
  },
  removeTabBarBadge: function () {
    wx.removeTabBarBadge({
      index: 1,
    })
  },

  hideTabBarRedDot: function () {
    wx.hideTabBarRedDot({
      index: 2
    })
  },

  onHide: function () {
  },
  onError: function () {
  },
  name: '全局变量看看能否获取',
  apiOpen: "https://ceshiopen.wanggejinfu.com.cn"
})
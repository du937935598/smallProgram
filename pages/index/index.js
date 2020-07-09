//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    navList: [],
    screen: {},
    interval: 5000,
    duration: 500
  },

  onLoad: function () {
    let that = this;
    //  高度自适应
    wx.getSystemInfo({
      success: function (res) {
        var clientWidth = res.windowWidth,
            rpxR = 750 / clientWidth;
        that.setData({
          screen: {
            winHeight:  res.windowHeight * rpxR,
            statusBarHeight: res.statusBarHeight * rpxR,
            item: res.windowHeight * rpxR - res.statusBarHeight * rpxR - 400,
            top: res.windowHeight * rpxR - res.statusBarHeight * rpxR - 950
          },
        });
      }
    });
    this.getMenu();
  },

  getMenu: function(){
    let obj = {
      url: '/index.php/Enum/queryName.html',
      data: '',
      method: 'GET'
    }
    app.globalData.https(obj).then(res => {
      this.setData({
        navList: res.list
      });
      wx.hideToast()
    })
  },

  // 去搜索
  goSearch:function(){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
})

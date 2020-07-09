// pages/list/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winHeight: 0,
    dataList: [],
    color: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winHeight: res.windowHeight
        })
      }
    });
    switch(options.id * 1){
      case 1:
        that.setData({
          color: "#350675"
        })
        break;
      case 2:
        that.setData({
          color: "#f7ebff"
        })
        break;
      case 3:
        that.setData({
          color: "#5c64e5"
        })
        break;
      case 4:
        that.setData({
          color: "#eceefd"
        })
        break;
      case 5:
        that.setData({
          color: "#0d0261"
        })
        break;
      case 6:
        that.setData({
          color: "#e3e3ff"
        })
        break;
      case 7:
        that.setData({
          color: "#6149fc"
        })
        break;
      case 8:
        that.setData({
          color: "#c1ddff"
        })
        break;
      case 9:
        that.setData({
          color: "#b029e4"
        })
        break;
      case 10:
        that.setData({
          color: "#d2d7fe"
        })
        break;
      case 11:
        that.setData({
          color: "#3220d8"
        })
        break;
      case 12:
        that.setData({
          color: "#cbd4ff"
        })
        break;
      case 13:
        that.setData({
          color: "#a09bff"
        })
        break;
      case 131:
        that.setData({
          color: "#a09bff"
        })
        break;
    }
    wx.setNavigationBarColor({
      backgroundColor: that.data.color,
      frontColor: options.index % 2 === 0 ? '#ffffff':'#000000',
    })
    this.getData(options.id);
  },

  getData: function(val){
    let obj = {
      url: '/index.php/Article/queryArray.html',
      data: { "type":val},
      method: 'GET'
    }
    app.globalData.https(obj).then(res => {
      this.setData({
        dataList: res
      });
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
// pages/detail/detail.js
const app = getApp()
const WxParse = require('../../wxParse/wxParse.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: '',
    mark: 0,
    newMark: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    let obj = {
      url: '/index.php/Article/queryOne.html',
      data: { "id": options.id },
      method: 'GET'
    }
    app.globalData.https(obj).then(res => {
      that.setData({
        detail: res
      });
      wx.setNavigationBarTitle({
        title: res.title
      })
      WxParse.wxParse('article', 'html', res.content, that, 5);
    })
  },

  navigate:function(){
    wx.redirectTo({
      url: '/pages/index/index',
    })
  },

  tap_start: function (e) {
    this.data.mark = this.data.newMark = e.touches[0].pageX
  },

  tap_move: function (e) {
    this.data.newMark = e.touches[0].pageX
    if ((this.data.newMark - this.data.mark) > 100 ) {
      wx.navigateBack({
        delta:1
      })
    }
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
  
  onPageScroll:function(e){
    
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
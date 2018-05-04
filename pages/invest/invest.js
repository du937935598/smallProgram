// pages/invest/invest.js
var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    iconSize: [20, 30, 40],
    iconType: [
      'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
    ],
    progress: 0
  },

  switch1Change:function(){
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  intervalChange: function (e) {
    this.setData({
      progress: e.detail.value
    })
  },

  // bindscrolltoupper:function(res){
  //   console.log("滚动到顶部",res)
  // },
  // bindscrolltolower: function (res){
  //   console.log("滚动到底部", res)
  // },
  // bindscroll: function (res){
  //   console.log("滚动了", res)
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.hideNavigationBarLoading();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('监听页面初次渲染完成');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.setNavigationBarTitle({
      title: '理财',
    });
    wx.showNavigationBarLoading();
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
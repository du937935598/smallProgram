// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: '数据',
    item_id: [
      { id: "item_1" },
      { id: "item_2" },
      { id: "item_3" }
    ],
    ifshow: true,
    items: {
      name: 'branton',
      age: 25,
      className: "大学"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },

  // 跳转首页
  navtabbar:function(){
    wx.switchTab({
      url: '/pages/home/home',
    })
  },

  navtabbars: function () {
    wx.reLaunch({
      url: '/pages/home/home',
    })
  },
  
})
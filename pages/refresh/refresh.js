// pages/refresh/refresh.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '我是第一次初始化'
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
    console.log('111')
    wx.stopPullDownRefresh({
      success: function (res) {
        console.log('成功----------------！', res);
      },
      fail: function (res) {
        console.log('失败-----------*-----！', res);
      },
      complete: function (res) {
        console.log('回掉结束--------------！', res);
      }
    })
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
  pullnew: function(){
    wx.startPullDownRefresh({
      success: function (res) {
        console.log('成功！', res);
      },
      fail: function (res) {
        console.log('失败！', res);
      },
      complete: function (res) {
        console.log('回掉结束！', res);
      }
    });
  }
})
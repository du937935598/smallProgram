// pages/accelerometer/accelerometer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    x: '',
    y: '',
    z:'',
    onCompassChange: ''
  },

  jiasudu:function(){
    var that = this;
    wx.onAccelerometerChange(function(res){
      that.setData({
        x: res.x,
        y: res.y,
        z: res.z,
      })
      console.log(res.x);
      console.log(res.y);
      console.log(res.z);
    })
  },

  luopan:function(){
    var that = this;
    wx.onCompassChange(function(res){
      that.setData({
        onCompassChange: res.direction
      })
      console.log(res.direction)
    })
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
  
  }
})
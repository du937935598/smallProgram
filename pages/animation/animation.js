// pages/animation/animation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    animationData: {},
    x: 0,
    y: 0,
    hidden: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.animation = wx.createAnimation({
      transformOrigin: "50% 30% 50%",
      duration: 2000,
      timingFunction: "ease",
      delay: '1'
    })
  },

  rotate:function(){
    // this.animation.translate(100, 100).step().rotate(Math.random()*720).step().scale(Math.random()*2).step()
    this.animation.rotate(Math.random()*720).step()
    this.setData({
      animationData: this.animation.export()
    })
  },

  scale:function(){
    this.animation.scale(Math.random() * 20, Math.random() * 20).step()
    this.setData({
      animationData: this.animation.export()
    })
  },

  translate: function () {
    this.animation.translate(Math.random() * 50, Math.random() * 50).step()
    this.setData({
      animationData: this.animation.export()
    })
  },

  skew: function () {
    this.animation.skew(Math.random() * 10, Math.random() * 10).step()
    this.setData({
      animationData: this.animation.export()
    })
  },

  rotateAddscale: function () {
    this.animation.rotate(Math.random() * 720).scale(Math.random() * 2).step()
    this.setData({
      animationData: this.animation.export()
    })
  },

  start: function (e) {
    this.setData({
      hidden: false,
      x: e.touches[0].x,
      y: e.touches[0].y
    })
  },
  move: function (e) {
    this.setData({
      x: e.touches[0].x,
      y: e.touches[0].y
    })
  },
  end: function (e) {
    this.setData({
      hidden: true
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
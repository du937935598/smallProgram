// pages/logins/logins.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  login:function(){
    wx.login({
      success:function(res){
        console.log(res.code);
        if (res.code) {
          wx.request({
            url: 'http://openapi.crazydesign.top/wechatInfo.php',
            data: { code: res.code },
            header: {
              'content-type': 'application/json'
            },
            success:function(res){
              console.log(res);
            }
          })
        }
      }
    })
  },

  checkSession:function(){
    wx.checkSession({
      success:function(){
        console.log('登陆没过期')
        wx.showModal({
          title: '提示',
          content: '登陆信息没过期',
        })
      },
      fail:function(){
        console.log('登陆过期')
        wx.showModal({
          title: '提示',
          content: '你的信息登陆过期，请重新登陆',
        })
        wx.login({
          success:function(res){
            console.log(res.code)
            wx.request({
              url: 'http://openapi.crazydesign.top/wechatInfo.php',
              data: { code: res.code },
              header: {
                'content-type': 'application/json'
              },
              success: function (res) {
                console.log(res);
              }
            })
          }
        })
      }
    })
  },

  info:function(){
    wx.getUserInfo({
      success:function(res){
        console.log(res)
      },
      fail:function(res){
        console.log(res)
      }
    })
  },

  bindGetUserInfo: function (e) {
    console.log(e);
    console.log(e.detail.userInfo)
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
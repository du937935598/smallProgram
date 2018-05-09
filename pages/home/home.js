// pages/home/home.js
var app = getApp();
var comment = require('../comment/comment.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    msg: '默认值'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      title: app.name
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('监听页面初次渲染完成');
    wx.hideNavigationBarLoading();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.setNavigationBarTitle({
      title: '首页',
    });
    wx.showNavigationBarLoading();
  },

  removeTabBarBadge:function(){
    app.removeTabBarBadge();
  },

  hideTabBarRedDot:function(){
    app.hideTabBarRedDot();
  },

  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },

  showTabBar:function(){
    wx.showTabBar({
      animation: true
    })
  },

  hideTabBar: function () {
    wx.hideTabBar({
      animation: true
    })
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
    console.log('页面卸载')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('下拉刷新')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('上拉触底')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: "做一个分享",
      path: "/pages/find/find",
      success:function(){
        wx.showToast({
          title: "分享成功",
          icon: "success",
          duration: 2000
        })
      }
    }
  },

  // 点击事件
  change:function(){
    this.setData({
      msg: "默认值改变后"
    })
  },

  // 点击跳转
  changeLink: function(){
    wx.navigateTo({
      url: '/pages/detail/productDetail/productDetail'
    })
  },
  // 跳转首页
  navtabbar: function () {
    wx.switchTab({
      url: '/pages/find/find',
    })
  },
  // 弹窗
  showModal:function(){
    comment.showModal();
  }
})
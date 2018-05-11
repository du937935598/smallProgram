// pages/api/apiDetail/apiDetail.js
var apiOpen = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listDetail: ''
  },

  /**
   * 生命周期函数--监听页面加载
   * /query/qapi/product/detail.do
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: apiOpen.apiOpen + '/query/qapi/product/detail.do',
      data: {
        pid: options.id
      },
      header: {
        'tnapikey': '6056905ce4f440d6a5b8179d80e5fd4d',
        'channel': 'h5'
      },
      method: 'GET',
      dataType: 'json',
      success: function (res) {
        that.setData({
          listDetail: res.data.body
        })
      }
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
    wx.setNavigationBarTitle({
      title: '标的详情',
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
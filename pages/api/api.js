// pages/api/api.js
var apiOpen = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showToast({
      icon: 'loading',
      title: '正在加载..',
    })
    var that = this
    wx.request({
      url: apiOpen.apiOpen + '/query/qapi/product/list.do',
      data:{
        proType: 'NEW_INVESTOR,BANK_BRIDGE,HOUSE_MORTGAGE,CAR_MORTAGE'
      },
      header:{
        'tnapikey': '6056905ce4f440d6a5b8179d80e5fd4d',
        'channel': 'h5'
      },
      method: 'GET',
      dataType: 'json',
      success:function(res){
        that.setData({
          list: res.data.body.list
        })
        wx.hideToast()
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
  onShareAppMessage: function (res) {
    console.log(res);
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})
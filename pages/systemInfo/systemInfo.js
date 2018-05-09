// pages/systemInfo/systemInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    brand: '',
    model: '',
    language: '',
    version: '',
    system: '',
    platform: '',
    SDKVersion: '',
    canIUse: '',
    networkType: '',
    onNetworkStatusChange: ''
  },

  // 获取手机信息
  infochange:function(){
    var that = this;
    wx.getSystemInfo({
      success:function(res){
        that.setData({
          brand: res.brand,
          model: res.model,
          language: res.language,
          version: res.version,
          system: res.system,
          platform: res.platform,
          SDKVersion: res.SDKVersion
        })
        console.log("成功",res)
      },
      fail: function (res) {
        console.log("失败",res)
      },
      complete: function (res) {
        console.log("常态",res)
      },
    })
  },

  canIUse:function(){
    var i = wx.canIUse('button.open-type.contact');
    this.setData({
      canIUse: i
    })
  },

  networkType:function(){
    var that = this
    wx.getNetworkType({
      success: function(res) {
        var networkType = res.networkType;
        that.setData({
          networkType: res.networkType
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getNetworkType({
      success: function (res) {
        var networkType = res.networkType;
        that.setData({
          onNetworkStatusChange: res.networkType
        })
      },
    })
    wx.onNetworkStatusChange(function (res) {
      console.log(res);
      that.setData({
        onNetworkStatusChange: res.networkType
      })
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
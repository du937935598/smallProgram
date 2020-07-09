// pages/search/search.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchList: [],
    keyworld: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  searchs:function(e){
    this.data.keyworld = e.detail.value;
  },

  search:function(){
    var that = this;
    if (that.data.keyworld !== '') {
      wx.request({
        url: app.openApi + '/index.php/Article/contentLike.html',
        method: 'GET',
        dataType: 'json',
        data: { "like": that.data.keyworld },
        success: function (res) {
          that.setData({
            searchList: res.data
          });
        }
      })
    } else {
      that.setData({
        searchList: []
      });
    }
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
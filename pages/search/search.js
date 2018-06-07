// pages/search/search.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  searchs:function(e){
    var that = this;
    console.log(e)
    console.log(e.detail.value !== '')
    if (e.detail.value !== ''){
      wx.request({
        url: app.openApi + '/index.php/Article/contentLike.html',
        method: 'GET',
        dataType: 'json',
        data: { "like": e.detail.value },
        success: function (res) {
          console.log(res.data);
          that.setData({
            searchList: res.data
          });
        }
      })
    }else{
      that.setData({
        searchList: []
      });
      console.log(that.data.searchList == [])
    }
  },

  channl:function(){
    wx.navigateBack({
      delta: 1
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
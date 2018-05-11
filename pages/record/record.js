// pages/record/record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePaths: ''
  },

  start:function(){
    var that = this
    wx.startRecord({
      success:function(res){
        console.log(res)
        // 临时文件转换成永久
        wx.saveFile({
          tempFilePath: res.tempFilePath,
          success:function(e){
            console.log(e)
            that.setData({
              tempFilePaths: e.savedFilePath
            })
          }
        })
      }
    })
    setTimeout(function () {
      //结束录音  
      wx.stopRecord()
    }, 10000)
  },

  end:function () {
    wx.stopRecord()
  },

  play:function () {
    wx.playVoice({
      filePath: this.data.tempFilePaths,
      success:function(res){
        console.log('播放录音',res)
      },
      fail:function(res){
        console.log(res)
      },
      complete:function(res){
        console.log(res)
      }
    })
  },

  stop:function(){
    wx.pauseVoice()
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
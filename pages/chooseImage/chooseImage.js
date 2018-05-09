// pages/chooseImage/chooseImage.js
var sizeType = [['original'], ['compressed'], ['original','compressed']] 
var sourceType = [['camera'], ['album'], ['album', 'camera']]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sourceType: ['相机', '相册', '相册或相机'],
    index: 0,
    
    sizeType: ['原图', '压缩图','原图或压缩图'],
    index1: 0,

    countType: [1,2,3,4,1,5,6,7,8,9],
    index2: 3,
    imagesList: []
  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  bindPickerChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index1: e.detail.value
    })
  },

  bindPickerChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index2: e.detail.value
    })
  },

  chooseimg: function(){
    var that = this
    wx.chooseImage({
      count: this.data.countType[this.data.index2], // 默认9
      sizeType: sizeType[this.data.index1], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: sourceType[this.data.index], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        that.setData({
          imagesList: tempFilePaths
        })
      }
    })
  },

  previewImage:function(e){
    console.log(e)
    console.log(e.currentTarget.dataset.src)
    wx.previewImage({
      current: e.currentTarget.dataset.src,
      urls: this.data.imagesList,
      success:function(val){
        console.log(val);
      }
    })
  },

  getinfo1:function(e){
    console.log(e)
    wx.saveImageToPhotosAlbum({
      filePath: e.currentTarget.dataset.src,
      success:function(res){
        console.log(res);
      }
    })
  },

  getinfo:function(res){
    console.log(res);
    wx.getImageInfo({
      src: res.currentTarget.dataset.src,
      success:function(res){
        console.log(res);
      }
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
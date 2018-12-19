// pages/index/index.js
var app = getApp();
var db = app.globalData.mysql;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  //获取数据
  getData:function(){
    db.collection('user').doc('XBkUiJT75u22mmqn').get().then(res => {
      console.log(res.data);
    })
  },

  //添加数据
  addData:function(){
    db.collection('user').add({
      data:{
        name: '小兵1',
        pwd: '123123',
        id: 'UID' + Math.floor((Math.random()*10)+1)+new Date().getTime(),
        updateTime: new Date(),
        createTime: new Date()
      },
      success(res){
        console.log(res);
      }
    })
  },

  //文件上传
  uploadFile:function(){
    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        wx.showLoading({
          title: '上传中',
        })
        const filePath = res.tempFilePaths[0]
        // 上传图片
        var data = new Date().getTime();
        const cloudPath = 'upImage/' + data + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('[上传文件] 成功：', res)
          },
          fail: e => {
            console.error('[上传文件] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })

      },
      fail: e => {
        console.error(e)
      }
    })
  },

  // 调用云函数
  callFun:function(){
    wx.cloud.callFunction({
      name: 'add',
      data: {
        a: 1,
        b: 2
      },
    }).then(res => {
      console.log(res.result.sum)
    }).catch(console.error)
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
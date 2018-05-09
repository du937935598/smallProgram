// pages/storage/storage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    key: '',
    phone: ''
  },
  
  keychange:function(res){
    this.setData({
      key: res.detail.value
    })
  },

  phonechange: function (res) {
    this.setData({
      phone: res.detail.value
    })
  },

  setStorage:function(){
    if (this.data.key == '' && this.data.phone == ''){
      wx.showToast({
        title: '存储失败',
        duration: 2000,
        icon: "none"
      })
    }else{
      wx.setStorage({
        key: 'info',
        data: {
          key: this.data.key,
          phone: this.data.phone
        },
        success:function(res){
          console.log('成功',res)
          wx.showToast({
            title: '存储成功',
            duration: 2000, 
            icon: "success"
          })
        },
        fail: function (res) {
          console.log('成功', res)
        },
        complete: function (res) {
          console.log('成功', res)
        }
      })
      
    }
  },

  setStorage1: function () {
    if (this.data.key == '' && this.data.phone == '') {
      wx.showToast({
        title: '存储失败',
        duration: 2000,
        icon: "none"
      })
    } else {
      wx.setStorageSync("infos", {name: this.data.key,phone: this.data.phone})
    }
  },
  
  removeStorage:function(){
    wx.clearStorage()
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
    var that = this;
    wx.getStorage({
      key: 'info',
      success: function(res) {
        that.setData({
          key: res.data.key,
          phone: res.data.phone
        })
        console.log(res.data.key);
        console.log(res.data.phone);
      },
    })
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
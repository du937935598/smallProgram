// pages/popup/popup.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: ''
  },
  
  showToast:function(){
    wx.showToast({
      title: '弹窗标题,自定义图标',
      icon: 'loading',
      image: '/images/success-face.png',
      duration: 10000,
      mask: true,
      success: function(res){
        console.log('成功！', res);
      },
      fail: function(res){
        console.log('失败！', res);
      },
      complete: function(res){
        console.log('回掉结束！', res);
      }
    })
    setTimeout(function(){
      wx.hideToast();
    },3000)
  },

  showLoading:function(){
    wx.showLoading({
      title: 'showLoading弹窗',
      mask: true,
      duration: 10000,
      success: function (res) {
        console.log('成功！', res);
      },
      fail: function (res) {
        console.log('失败！', res);
      },
      complete: function (res) {
        console.log('回掉结束！', res);
      }
    })
    setTimeout(function(){
      wx.hideLoading();
    },3000)
  },

  showModal: function(){
    wx.showModal({
      title: 'showModal标题',
      content: 'showModal内容',
      showCancel: true,
      cancelText: '取消按钮',
      cancelColor: '#fa6450',
      confirmText: '确定按钮',
      confirmColor: '#fa6450',
      success: function (res) {
        console.log('成功！', res);
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      },
      fail: function (res) {
        console.log('失败！', res);
      },
      complete: function (res) {
        console.log('回掉结束！', res);
      }
    })
  },

  showActionSheet:function(){
    var x;
    var that = this;
    wx.showActionSheet({
      itemList: ['返回', '确认购买', '微信支付', '支付宝'],
      itemColor: "#333",
      success: function (res) {
        console.log('成功！', res);
        console.log(res.tapIndex);
        switch (res.tapIndex){
          case 0:x='返回';
            break;
          case 1: x = '确认购买';
            break;
          case 2: x = '确认购买';
            break;
          case 3: x = '支付宝';
            break;
        }
        that.setData({
          value: x
        })
      },
      fail: function (res) {
        console.log('失败！', res);
        console.log(res.errMsg)
      },
      complete: function (res) {
        console.log('回掉结束！', res);
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
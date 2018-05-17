// pages/tabs/tabs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curNavId: 1,
    colors: ["red", "orange", "yellow", "green", "purple"],
    list:[
      {
        id: 1,
        icon: '/images/home-active.png',
        title: '推存'
      },
      {
        id: 2,
        icon: '/images/invest-active.png',
        title: '美甲'
      },
      {
        id: 3,
        icon: '/images/find-active.png',
        title: '美容'
      },
      {
        id: 4,
        icon: '/images/account-active.png',
        title: '美发'
      }
    ]
  },

  switchTap: function (res) {
    console.log(res)
    let id = res.currentTarget.dataset.id;
    let index = res.currentTarget.dataset.index
    this.setData({
      curNavId: id,
      curIndex: index
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
    console.log('aaa')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('bbb')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
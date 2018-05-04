// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: '',
    markers: [{
      iconPath: "/images/location.png",
      id: 0,
      title: '我现在的位置额',
      latitude: 31.218820,
      longitude: 121.531250,
      width: 40,
      height: 40
    }],
    circles: [{
      latitude: 31.218820,
      longitude: 121.531250,
      color: "#ffa631",
      fillColor: "#fde8b1",
      strokeWidth: 2,
      radius: 100
    }],
    controls:[{
      id: 1,
      iconPath: '/images/location3.png',
      position: {
        left: 0,
        top: 260-10,
        width: 40,
        height: 40
      },
      clickable: true
    }],
    latitude: '',
    longitude: '',
    choosename: '',
    chooseaddress: '',
    chooselatitude: '',
    chooselongitude: ''
  },

  getlocation:function(){
    var that = this;
    wx.setNavigationBarTitle({
      title: '定位中.....',
    })
    wx.showNavigationBarLoading()
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        wx.setNavigationBarTitle({
          title: '当前位置',
        })
        wx.hideNavigationBarLoading()
        console.log(res);
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
      },
    })
  },

  chooseLocation:function(){
    var that = this;
    wx.chooseLocation({
      success: function(res) {
        that.setData({
          choosename: res.name,
          chooseaddress: res.address,
          chooselatitude: res.latitude,
          chooselongitude: res.longitude
        })
      },
      fail:function(res){
        console.log('失败',res)
      },
      complete:function(res){
        console.log('回掉结束',res)
      }
    })
  },

  openLocation:function(){
    wx.openLocation({
      latitude: 31.218820,
      longitude: 121.531250,
      scale: 16,
      name: '陆家嘴软件园6号楼',
      address: '上海市浦东新区陆家嘴软件园',
      success:function(res){

      },
      fail: function (res) {
        console.log('失败', res)
      },
      complete: function (res) {
        console.log('回掉结束', res)
      }
    })
  },

  bindmarkertap:function(res){
    console.log('bindmarkertap',res)
  },
  // 视频
  // takePhoto() {
  //   const ctx = wx.createCameraContext()
  //   ctx.takePhoto({
  //     quality: 'high',
  //     success: (res) => {
  //       this.setData({
  //         src: res.tempImagePath
  //       })
  //     }
  //   })
  // },

  // error(e) {
  //   console.log(e.detail)
  // },
  // 直播
  // statechange(e) {
  //   console.log('live-player code:', e.detail.code)
  // },
  // error(e) {
  //   console.error('live-player error:', e.detail.errMsg)
  // },

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
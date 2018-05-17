// pages/movable/four/four.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    open: false,
    mark: 0,
    newMark: 0,
    istoright: false
  },

  tab_ch: function () {
    this.setData({
      open: !this.data.open
    })
  },
  
  tap_start: function(e){
    console.log('起点',e);
    this.data.mark = this.data.newMark = e.touches[0].pageX
    console.log('起点','X：', e.touches[0].pageX, 'Y：', e.touches[0].pageY);
  },

  tap_move:function(e){
    console.log('移动', e.touches['0'].pageX);

    this.data.newMark = e.touches[0].pageX
    if (this.data.mark < this.data.newMark){
      this.setData({
        istoright: true,
        open: true
      })
    }else{
      this.setData({
        istoright: false,
        open: false
      })
    }
    console.log(this.data.istoright)
  },

  tap_end: function(e){
    console.log('重点',e)
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
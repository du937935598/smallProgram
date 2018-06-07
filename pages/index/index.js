//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    winHeight: "",//窗口高度
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
    navList: [],
    dataList: []
  },

  onLoad: function () {
    var that = this;
    wx.showToast({
      icon: 'loading',
      title: '正在加载..',
    })
    //  高度自适应
    wx.getSystemInfo({
      success: function (res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR - 180;
        console.log(calc)
        that.setData({
          winHeight: calc
        });
      }
    });

    wx.request({
      url: app.openApi + '/index.php/Enum/queryName.html',
      method: 'GET',
      dataType: 'json',
      success: function (res) {
        that.setData({
          navList: res.data.list
        });
        that.apiQuery(res.data.list['0'].id);
        wx.hideToast()
      }
    });
  },

  // 去搜索
  goSearch:function(){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },

  apiQuery: function(val){
    var that = this;
    wx.request({
      url: app.openApi + '/index.php/Article/queryArray.html?',
      method: 'GET',
      dataType: 'json',
      data: { "type": val},
      success: function (res) {
        var datas = res.data;
        for (var i = 0; i < datas.length; i++){
          datas[i].content = datas[i].content.replace(/<[^>]+>/g, "")
        }
        that.setData({
          dataList: datas
        });
      }
    })
  },

  // 滚动切换标签样式
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.apiQuery(this.data.navList[e.detail.current].id);
    this.checkCor();
  },
  // 点击标题切换当前页时改变样式
  swichNav: function (e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTaB == cur) { 
      return false; 
    }else {
      this.setData({
        currentTab: cur
      })
    }
    this.apiQuery(this.data.navList[e.target.dataset.current].id);
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function () {
    if (this.data.currentTab > 3 && this.data.currentTab <= 6) {
      this.setData({
        scrollLeft: 300
      })
    } else if (this.data.currentTab > 6 && this.data.currentTab <= 9) {
      this.setData({
        scrollLeft: 600
      })
    } else if (this.data.currentTab > 9) {
      this.setData({
        scrollLeft: 900
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('aaaa')  
  }
})

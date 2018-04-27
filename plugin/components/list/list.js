Component({
  data: {
    list:[]
  },
  attached: function(){
    // 可以在这里发起网络请求获取插件的数据
    this.setData({
      list: [{
        name: '电视',
        price: 10001
      }, {
        name: '电脑',
        price: 40001
      }, {
        name: '手机',
        price: 30001
      }]
    })
  },
})
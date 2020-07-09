var domain = 'https://openapi.crazydesign.top' //测试
//var domain = 'https://openapi.crazydesign.top'//生产

const http = data => {
  return new Promise(function (reslove, reject) {
    wx.request({
      url: domain + data.url,
      data: data.data,
      method: data.method,
      dataType: "json",
      success(res) {
        reslove(res.data)
      },
      fail(res) {
        reject(res)
      }
    })
  })
}
module.exports = {
  http: http,
}
// // pages/loginsDemo/loginsDemo.js
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
  
//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {
//     // var that = this
//     // 获取code
//     wx.login({
//       success: function (res) {
//         console.log(res.code);
//         if (res.code) {
//           wx.request({
//             url: 'http://openapi.crazydesign.top/wechatInfo.php',
//             data: { code: res.code },
//             header: {
//               'content-type': 'application/json'
//             },
//             success: function (res) {
//               console.log(res);
//             }
//           })
//         }
//       }
//     })

//     // 验证是否过期
//     wx.checkSession({
//       success: function () {
//         console.log('登陆没过期')
//         wx.showModal({
//           title: '提示',
//           content: '登陆信息没过期',
//         })
//       },
//       fail: function (res) {
//         console.log(res)
//         console.log('登陆过期')
//         wx.showModal({
//           title: '提示',
//           content: '你的信息登陆过期，请重新登陆',
//           success: function (res) {
//             if (res.confirm) {
//               wx.login({
//                 success: function (res) {
//                   console.log(res)
//                   wx.request({
//                     url: 'http://openapi.crazydesign.top/wechatInfo.php',
//                     data: { code: res.code },
//                     header: {
//                       'content-type': 'application/json'
//                     },
//                     success: function (res) {
//                       console.log(res);
//                     }
//                   })
//                 },
//                 fail: function (res) {
//                   console.log(res)
//                 }
//               })

//               wx.getUserInfo({
//                 success: function (res) {
//                   console.log(res)
//                 },
//                 fail: function (res) {
//                   console.log(res)
//                 }
//               })
//             } else if (res.cancel) {
//               console.log('用户点击取消')
//             }
//           }
//         })
//         wx.login({
//           success: function (res) {
//             console.log(res)
//             wx.request({
//               url: 'http://openapi.crazydesign.top/wechatInfo.php',
//               data: { code: res.code },
//               header: {
//                 'content-type': 'application/json'
//               },
//               success: function (res) {
//                 console.log(res);
//               }
//             })
//           },
//           fail:function(res){
//             console.log(res)
//           }
//         })
//         // 获取用户信息
//         // wx.getUserInfo({
//         //   success: function (res) {
//         //     console.log(res)
//                 // var userInfo = res.userInfo
//                 // var nickName = userInfo.nickName
//                 // var avatarUrl = userInfo.avatarUrl
//                 // var gender = userInfo.gender //性别 0：未知、1：男、2：女
//                 // var province = userInfo.province
//                 // var city = userInfo.city
//                 // var country = userInfo.country
//         //   },
//         //   fail: function (res) {
//         //     console.log(res)
//         //   }
//         // })
//       }
//     })

//     // 获取用户信息
//     // wx.getUserInfo({
//     //   success: function (res) {
//     //     console.log(res)
//     //   },
//     //   fail: function (res) {
//     //     console.log(res)
//     //   }
//     // })
//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {
  
//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {
  
//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {
  
//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {
  
//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {
  
//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {
  
//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {
  
//   }
// })

Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    console.log(this.data.canIUse)
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        console.log(res)

        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.log(res)
              console.log(res.userInfo)
            }
          })
        }
      }
    })
  },
  bindGetUserInfo: function (e) {
    console.log(e)
    console.log(e.detail.userInfo)
  }
})
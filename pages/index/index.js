//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '服务中心',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      'images/service_top_bg1.png',
      'images/service_top_bg2.png',
      'images/service_top_bg3.png',
      'images/service_top_bg4.png'
    ],
    //是否显示小圆点
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: false,
    interval: 5000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    swiperCurrent: 0,
  },

  //swipe滑动变化监听
  swiperChange: function(e){
    this.setData({
      swiperCurrent: e.detail.current
    })
  },

  //banner点击事件
  onBannerItemClick: function (event){
    console.log("当前点击==" + this.data.swiperCurrent)
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
      motto:'登录成功'
    })
  }
})

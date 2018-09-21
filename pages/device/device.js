// pages/device/device.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: '',
    curLongitude: 114.07642,
    curLatitude: 40.6518,
    scale: 2,
    markers: [{
      iconPath: "/resources/image/yellow_marker.png",
      id: 0,
      longitude: 104.07642,
      latitude: 38.6518,
      width: 50,
      height: 50
    }],
  },

  wx:getSystemInfo({
    success: function(res) {
      this.setData({
        curLongitude: res.latitude,
        curLatitude: res.longitude,
      })
    },
  }),
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
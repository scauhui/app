// pages/lottery/lottery.js

const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url_1:[{
      'url':'../../img/1@2x.png',
      'name':'豹子纹金蝶',
      'imagewidth':0,
      'imageheight':0
     },
      {
        'url': '../../img/2@2x.png',
        'name': '炫金紫纹蝶',
        'imagewidth': 0,
        'imageheight': 0
      },
      {
        'url': '../../img/3@2x.png',
        'name': '蓝黄金粉蝶',
        'imagewidth': 0,
        'imageheight': 0
      },
      {
        'url': '../../img/4@2x.png',
        'name': '红纹炫蓝蝶',
        'imagewidth': 0,
        'imageheight': 0
      },
      {
        'url': '../../img/5@2x.png', 
        'name': '闪金褐纹蝶',
        'imagewidth': 0,
        'imageheight': 0
      },
      {
        'url': '../../img/6@2x.png',
        'name': '炫蓝黄斑蝶',
        'imagewidth': 0,
        'imageheight': 0
      },
      {
        'url': '../../img/7@2x.png',
        'name': '碧绿仿叶蝶',
        'imagewidth': 0,
        'imageheight': 0
      },
      {
        'url': '../../img/8@2x.png',
        'name': '梦幻闪蝶',
        'imagewidth': 0,
        'imageheight': 0
      },
      {
        'url': '../../img/9@2x.png',
        'name': '炫粉黯纹蝶',
        'imagewidth': 0,
        'imageheight': 0
      }

    ],
    i:0
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

  },
  
  imageLoad: function (e) {
    var imageSize = util.imageUtil(e)
    var j = this.data.i
    console.log(this.data.url_1[j].url)
    //this.data.url_1[j].imagewidth = imageSize.imageWidth,
    this.data.url_1[j].imagewidth = imageSize.imageheight
    //console.log(this.data.url_1[j].imagewidth)
    var indexwidth = 'url_1[' + j + '].imagewidth'
    var indexheight = 'url_1[' + j + '].imageheight'
    j = j+1 
    //console.log(j)
    this.setData({
      [indexwidth]: imageSize.imageWidth *2,
      [indexheight]: imageSize.imageHeight * 2,
      i: j
      
    })
    //console.log(this.data.url_1[j].imageheight)
  }
})
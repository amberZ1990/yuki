//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    condition:false
  },
  onLoad: function (options) {
    console.log(options)
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  },
  onPageScroll:function(event){
    console.log(event.scrollTop);
    if (event.scrollTop >= 50){
      this.setData({
        condition : true    
      })     
    }else{
      this.setData({
        condition: false
      }) 
    }
  }
})

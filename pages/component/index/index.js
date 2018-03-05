//index.js
//获取应用实例
var app = getApp()
var data = {
      motto: 'yukiJiang',
      rName: 'wechat',
      helloData: {},
      ismember: false,
      indicatorDots:'#ffbb00',
      guestArr:[
        {
          'imgsrc':'https://s2.51cto.com/oss/201801/19/8845f3f9a6349f81dbbf7c8171d222bd.jpg',
          'gName':'jiabin1',
          'position':'zhiwei1'
        },
        {
          'imgsrc': 'https://s5.51cto.com/oss/201801/19/018356c42e7e78278981f65145a41656.jpg',
          'gName': 'jiabin1',
          'position': 'zhiwei1'
        },        
      ],
      imgUrls:[
        1,2,3
      ]
}
Page({
        data,
        // data: hData,
        // //事件处理函数
          bindViewTap: function() {
                wx.navigateTo({
                  url: '../logs/logs?v2'
                })
            },
          toApply:function(){
            wx.navigateTo({
              url:'../apply-member/apply-member'
            })
          },
            onHide:function(){
              console.log('再跳转或tab时调用')
            },
            // changeName() {
            //       wx.downloadFile({
            //         url: 'https://s1.51cto.com/wyfs02/M02/91/53/wKioL1j1ebST2CIaAA_yenqMO00816.pdf',
            //             success: function(res) {
            //                   var filePath = res.tempFilePath
            //                   wx.openDocument({
            //                         filePath: filePath,
            //                         success: function(res) {
            //                               console.log('打开文档成功2')
            //                         }
            //                   })
            //             }
            //       })
            // },
            onLoad: function(options) {
                  var that = this
                        //调用应用实例的方法获取全局数据
                  app.getUserInfo(function(userInfo) {
                        //更新数据
                        that.setData({
                              userInfo: userInfo,
                              ismember: true,
                        })
                  })
            }
      })
      var appInstance = getApp()
      console.log(appInstance.globalData)

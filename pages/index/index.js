//index.js
//获取应用实例
var app = getApp()

Page({
  data: {
    img_urls: [
      
    ],
    interval: 5000,
    duration: 2000,
    scrollTop : 0,
    scrollHeight:0,
    contents : 1456,
    items: [],
    new_pic: [
      
    ]
    // ,

    // load: false
  } ,

  // setLoad: function(e) {
  //   this.setData({
  //     load: !this.data.load
  //   })
  // },

  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  onLoad: function () {
    console.log('onLoad')
    var that = this
      //获取信号列表 
      wx.request( {  
      url: "https://nangying.pagekite.me/role.do?reqCode=queryRolesForManage",  
      header: {
        'content-type': 'application/json'
      },
      data: {hidden:true},  
      method: 'GET',
      success: function(res) {  
        console.log(res.data)
        that.setData( {  
          items: res.data,
          hidden: !that.data.hidden
        })  
      } ,  
      fail: function() {  
        // fail  
        console.log('数据加载失败')
      },  
      complete: function() {  
        // complete  
      }   
    }) 
    //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })
  }
  // ,
  //   // 页面加载显示事件
  //   loadingChange: function() {
  //       setTimeout(() => {
  //           this.setData({
  //               hidden: true
  //           })
  //       }, 1200)
  //   },
  //   // 页面初始化执行
  //   onLoad() {
  //       this.loadingChange()
  //   }
})

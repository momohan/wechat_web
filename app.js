//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              console.log(res.userInfo);
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  showLoading:function(){
        wx.showToast({
         title: '加载中',
         icon: 'loading'
        });
     },
cancelLoading:function(){
        wx.hideToast();
     },
  getExpressInfo:function(nu,cb){
  wx.request({
   //url: 'http://apis.baidu.com/kuaidicom/express_api/express_api?muti=0&order=desc&com=zhongtong&nu='+nu, 
   url:"https://nangying.pagekite.me/role.do?reqCode=queryRolesForManage",
   data: {
    x: '' ,
    y: ''
   },
   header: {
     'content-type': 'application/json'
   },
   success: function(res) {
    console.log(res.data)
    cb(res.data);
   }
  })
 },
  globalData:{
    // 登录
    hasLogin: false,
  }
})
//cars.js
Page({
  data: {
    image_url: [
       
    ],
    car_icon_a: [
      "保护动作",
"限时电流速断动作",
"TA断线告警",
"零序过压告警",
"弹簧未储能",
"I段母线PT开路",
"开入输入不正常",
"跳合出口异常",
"开出异常",
"开出击穿",
"跳闸失败",
"II段母线PT开路",
"II段母线TV开路",
"控制回路断线",
"I段母线TV开路",
"充电保护出口",
"开入击穿",
"母线PT断线告警",
"充电保护I段动作",
"充电保护动作",
"分段保护装置告警",
"控制回路电源跳闸",
"保护启动",
"瞬时电流速断动作",
"开入自检回路出错",
"分段保护装置异常",
"过流I段保护动作",
"合闸弹簧释放",
"过流II段保护动作",
"CT断线告警",
"保护跳闸",
"开出自检回路出错",
"弹簧机构未储能",
"控回断线告警",
"分段保护装置动作",
"充电保护II段动作",
"模拟量采集错",
"合闸后加速保护动作",
"过电压告警",
"母线TV断线告警",
"过负荷告警",
"断路器拒动告警",
"合闸后加速跳闸",
"开入异常"
    ],
    car_title_a: [
      "保护动作",
"限时电流速断动作",
"TA断线告警",
"零序过压告警",
"弹簧未储能",
"I段母线PT开路",
"开入输入不正常",
"跳合出口异常",
"开出异常",
"开出击穿",
"跳闸失败",
"II段母线PT开路",
"II段母线TV开路",
"控制回路断线",
"I段母线TV开路",
"充电保护出口",
"开入击穿",
"母线PT断线告警",
"充电保护I段动作",
"充电保护动作",
"分段保护装置告警",
"控制回路电源跳闸",
"保护启动",
"瞬时电流速断动作",
"开入自检回路出错",
"分段保护装置异常",
"过流I段保护动作",
"合闸弹簧释放",
"过流II段保护动作",
"CT断线告警",
"保护跳闸",
"开出自检回路出错",
"弹簧机构未储能",
"控回断线告警",
"分段保护装置动作",
"充电保护II段动作",
"模拟量采集错",
"合闸后加速保护动作",
"过电压告警",
"母线TV断线告警",
"过负荷告警",
"断路器拒动告警",
"合闸后加速跳闸",
"开入异常"
    ],
    car_icon_b: [
      "http://img1.xcarimg.com/PicLib/logo/pl2_80.jpg",
      "http://img1.xcarimg.com/PicLib/logo/pl3_80.jpg",
      "http://img1.xcarimg.com/PicLib/logo/pl17_80.jpg",
      "http://img1.xcarimg.com/PicLib/logo/pl13_80.jpg",
      "http://img1.xcarimg.com/PicLib/logo/pl57_80.jpg",
    ],
    car_title_b: [
      "宝马",
      "奔驰",
      "本田",
      "别克",
      "宾利",
    ],
    car_icon_d: [
      "http://img1.xcarimg.com/PicLib/logo/pl4_80.jpg",
      "http://img1.xcarimg.com/PicLib/logo/pl124_80.jpg",
      "http://img1.xcarimg.com/PicLib/logo/pl33_80.jpg",
      "http://img1.xcarimg.com/PicLib/logo/pl10_80.jpg",
    ],
    car_title_d: [
      "大众",
      "DS",
      "东风",
      "福特",
    ],
    car_icon: [
      "http://img1.xcarimg.com/PicLib/logo/pl59_80.jpg",
      "http://img1.xcarimg.com/PicLib/logo/pl60_80.jpg",
      "http://img1.xcarimg.com/PicLib/logo/pl69_80.jpg",
      "http://img1.xcarimg.com/PicLib/logo/pl62_80.jpg",
      "http://img1.xcarimg.com/PicLib/logo/pl61_80.jpg",
      "http://img1.xcarimg.com/PicLib/logo/pl16_80.jpg",
      "http://img1.xcarimg.com/PicLib/logo/pl126_80.jpg"
    ],
    car_title: [
      "法拉利",
      "捷豹",
      "凯迪拉克",
      "劳斯莱斯",
      "兰博基尼",
      "雪佛兰",
      "迈凯伦"
    ]
  },
  // 热门汽车跳转
  remen_click: function() {
    wx.navigateTo({
      url: '../car_detail/super_car/super_car'
    })
  },
// 奥迪汽车跳转
  aodi_click: function() {
    wx.navigateTo({
      url: '../car_detail/ao_di/ao_di'
    })
  },
})


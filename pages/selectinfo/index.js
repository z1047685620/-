//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    texts:"请输入配音所需的文本",
    min:5,//最少字数
    max: 300, //最多字数 (根据自己需求改变)
    showModal: false,
    copyConnect:"",//地址
    optInformant:"",//选择哪个发音人
    optInput:"",
    optVolume:"5",
    optSpeed:"5",
    heart:"../images/heart.png", //x心
    arrowhead:"../images/arrowhead.png",//箭头
    more:"../images/genduo.png",
    minSpeed:"-500",
    maxSpeed:"500",
    defaultSpeed:"0",
    minVolume:"0",
    maxVolume:"100",
    defaultVolume:"50",
    informants: [
      {
        "voice":"Xiaoyun",
        "name":"小云",
        "memo":"标准女声",
        "img":"../images/nan.png",
        "optImg":"../images/nanOptImg.png"
    },
    {
        "voice":"Xiaogang",
        "name":"小刚",
        "memo":"标准男声",
        "img":"../images/nan.png" ,
        "optImg":"../images/nanOptImg.png"
    },
    {
        "voice":"Ruoxi",
        "name":"若兮",
        "memo":"温柔女声",
        "img":"../images/nv.png",
        "optImg":"../images/nvOptImg.png"
    }
            ] ,
    // 选项卡
    winWidth: 0,
    winHeight: 0,
    broadcastVoice:"",
    innerAudioContext: null,//播放器
    start:'../images/ks.png', 
    stop:'../images/zt.png', 
    //添加
    define:'../images/qd.png',
    //取消
    cancel:'../images/qx.png',
    selectedOrNot :false,
    // tab切换  
    currentTab: 0,
    sceneTypes: [
      {value: 'currency', name: '通用',current:0},
      {value: 'customer', name: '客服 ',current:1}, 
      {value: 'child',  name: '儿童 ', current:2},  
      {value: 'english', name: '英文',current:3},
      {value: 'dialect', name: '方言',current:4}
    ],
      informantsList:{
      //通用
      currency:[
        {
            "voice":"Xiaoyun",
            "name":"小云",
            "memo":"标准女声",
            "audition":"pages/misic/xiaoyun.mp3",
            "opt":true ,
            "img":"../images/nan.png",
            "optImg":"../images/nanOptImg.png"
        },
        {
            "voice":"Xiaogang",
            "name":"小刚",
            "memo":"标准男声",
            "audition":"pages/misic/xiaogang.mp3",
            "opt":true ,
            "img":"../images/nan.png" ,
            "optImg":"../images/nanOptImg.png"
        },
        {
            "voice":"Ruoxi",
            "name":"若兮",
            "memo":"温柔女声",
            "audition":"pages/misic/ruoxi.mp3",
            "opt":true , 
            "img":"../images/nv.png",
            "optImg":"../images/nvOptImg.png"
        },
        {
            "voice":"Siqi",
            "name":"思琪",
            "memo":"温柔女声",
            "audition":"pages/misic/siqi.mp3",
            "opt":false  , 
            "img":"../images/nv.png",
            "optImg":"../images/nvOptImg.png"
        },
        {
            "voice":"Sijia",
            "name":"思佳",
            "memo":"标准女声",
            "audition":"pages/misic/sijia.mp3",
            "opt":false  , 
            "img":"../images/nv.png",
            "optImg":"../images/nvOptImg.png"
        },
        {
            "voice":"Sicheng",
            "name":"思诚",
            "memo":"标准男声",
            "audition":"pages/misic/sicheng.mp3",
            "opt":false  , 
            "img":"../images/nan.png",
            "optImg":"../images/nanOptImg.png"
        },
        {
            "voice":"Aiqi",
            "name":"艾琪",
            "memo":"温柔女声",
            "audition":"pages/misic/aiqi.mp3",
            "opt":false   , 
            "img":"../images/nv.png",
            "optImg":"../images/nvOptImg.png"
        },
        {
            "voice":"Aijia",
            "name":"艾佳",
            "memo":"标准女声",
            "audition":"pages/misic/aijia.mp3",
            "opt":false  , 
            "img":"../images/nv.png",
            "optImg":"../images/nvOptImg.png"
        },
        {
            "voice":"Aicheng",
            "name":"艾诚",
            "memo":"标准男声",
            "audition":"pages/misic/aicheng.mp3",
            "opt":false  , 
            "img":"../images/nan.png",
            "optImg":"../images/nanOptImg.png"
        },
        {
            "voice":"Aida",
            "name":"艾达",
            "memo":"标准男声",
            "audition":"pages/misic/aida.mp3",
            "opt":false   , 
            "img":"../images/nan.png",
            "optImg":"../images/nanOptImg.png"
        },
        {
            "voice":"Ninger",
            "name":"宁儿",
            "memo":"标准女声",
            "audition":"pages/misic/ninger.mp3",
            "opt":false   , 
            "img":"../images/nv.png",
            "optImg":"../images/nvOptImg.png"
        },
        {
            "voice":"Ruilin",
            "name":"瑞琳",
            "memo":"标准女声",
            "audition":"pages/misic/ruilin.mp3",
            "opt":false  , 
            "img":"../images/nv.png",
            "optImg":"../images/nvOptImg.png"
        }
      ], 
      //客服
      customer:[
        {
            "voice":"Siyue",
            "name":"思悦",
            "memo":"温柔女声",
            "audition":"pages/misic/siyue.mp3",
            "opt":false  , 
            "img":"../images/nv.png",
            "optImg":"../images/nvOptImg.png"
        },
        {
            "voice":"Aiya",
            "name":"艾雅",
            "memo":"严厉女声",
            "audition":"pages/misic/aiya.mp3",
            "opt":false  , 
            "img":"../images/nv.png",
            "optImg":"../images/nvOptImg.png"
        },
        {
            "voice":"Aixia",
            "name":"艾夏",
            "memo":"亲和女声",
            "audition":"pages/misic/aixia.mp3",
            "opt":false  , 
            "img":"../images/nv.png",
            "optImg":"../images/nvOptImg.png"
        },
        {
            "voice":"Aimei",
            "name":"艾美",
            "memo":"甜美女声",
            "audition":"pages/misic/aimei.mp3",
            "opt":false  , 
            "img":"../images/nv.png",
            "optImg":"../images/nvOptImg.png"
        },
        {
            "voice":"Aiyu",
            "name":"艾雨",
            "memo":"自然女声",
            "audition":"pages/misic/aiyu.mp3",
            "opt":false  , 
            "img":"../images/nv.png",
            "optImg":"../images/nvOptImg.png"
        },
        {
            "voice":"Aijing",
            "name":"艾婧",
            "memo":"严厉女声",
            "audition":"pages/misic/aijing.mp3",
            "opt":false  , 
            "img":"../images/nv.png",
            "optImg":"../images/nvOptImg.png"
        },
        {
            "voice":"Xiaomei",
            "name":"小美",
            "memo":"甜美女声",
            "audition":"pages/misic/xiaomei.mp3",
            "opt":true  , 
            "img":"../images/nv.png",
            "optImg":"../images/nvOptImg.png"
        },
        {
            "voice":"Aina",
            "name":"艾娜",
            "memo":"浙普女声",
            "audition":"pages/misic/aina.mp3",
            "opt":false  , 
            "img":"../images/nv.png",
            "optImg":"../images/nvOptImg.png"
        },
        {
            "voice":"Yina",
            "name":"伊娜",
            "memo":"浙普女声",
            "audition":"pages/misic/yina.mp3",
            "opt":false  , 
            "img":"../images/nv.png",
            "optImg":"../images/nvOptImg.png"
        },
        {
            "voice":"Sijing",
            "name":"思婧",
            "memo":"严厉女声",
            "audition":"pages/misic/sijing.mp3",
            "opt":false  , 
            "img":"../images/nv.png",
            "optImg":"../images/nvOptImg.png"
        } 
      ],
      //童声
      child:[
        {
            "name":"思彤",
            "voice":"Sitong",
            "memo":"儿童音",
            "audition":"pages/misic/sitong.mp3",
            "opt":false  , 
            "img":"../images/nan.png",
            "optImg":"../images/nanOptImg.png"
        },
        {
            "name":"小北",
            "memo":"萝莉女声",
            "voice":"Xiaobei",
            "audition":"pages/misic/xiaobei.mp3",
            "opt":false   , 
            "img":"../images/nv.png",
            "optImg":"../images/nvOptImg.png"
        },
        {
            "name":"艾彤",
            "voice":"Aitong",
            "memo":"儿童音",
            "audition":"pages/misic/xiaobei.mp3",
            "opt":false  , 
            "img":"../images/nv.png",
            "optImg":"../images/nvOptImg.png"
        },
        {
            "name":"艾薇",
            "voice":"Aiwei",
            "memo":"萝莉女声",
            "audition":"pages/misic/aiwei.mp3",
            "opt":false  , 
            "img":"../images/nv.png",
            "optImg":"../images/nvOptImg.png"
        },
        {
            "name":"艾宝",
            "voice":"Aibao",
            "memo":"萝莉女声",
            "audition":"pages/misic/aibao.mp3",
            "opt":false  , 
            "img":"../images/nv.png",
            "optImg":"../images/nvOptImg.png"
        }
      ],
      //英文
      english:[
        {
            "voice":"Harry",
            "name":"Harry",
            "memo":"英音男声",
            "audition":"pages/misic/harry.mp3",
            "opt":false , 
            "img":"../images/nan.png",
            "optImg":"../images/nanOptImg.png"
        },
        {
            "voice":"Abby",
            "name":"Abby",
            "memo":"美音女声",
            "audition":"pages/misic/abby.mp3",
            "opt":false  , 
            "img":"../images/nv.png",
            "optImg":"../images/nvOptImg.png"
        },
        {
            "voice":"Andy",
            "name":"Andy",
            "memo":"美音男声",
            "audition":"pages/misic/andy.mp3",
            "opt":false  , 
            "img":"../images/nan.png",
            "optImg":"../images/nanOptImg.png"
        },
        {
            "voice":"Eric",
            "name":"Eric",
            "memo":"英音男声",
            "audition":"pages/misic/eric.mp3",
            "opt":false  , 
            "img":"../images/nan.png",
            "optImg":"../images/nanOptImg.png"
        },
      {
            "voice":"Emily",
            "name":"Emily",
            "memo":"英音女声",
            "audition":"pages/misic/emily.mp3",
            "opt":false  , 
            "img":"../images/nv.png",
            "optImg":"../images/nvOptImg.png"
        },
        {
            "voice":"Luca",
            "name":"Luca",
            "memo":"英音男声",
            "audition":"pages/misic/luca.mp3",
            "opt":false  , 
            "img":"../images/nan.png",
            "optImg":"../images/nanOptImg.png"
        },{
            "voice":"Wendy",
            "name":"Wendy",
            "memo":"英音女声",
            "audition":"pages/misic/wendy.mp3",
            "opt":false  , 
            "img":"../images/nv.png",
            "optImg":"../images/nvOptImg.png"
        },{
            "voice":"William",
            "name":"William",
            "memo":"英音男声",
            "audition":"pages/misic/william.mp3",
            "opt":false  , 
            "img":"../images/nan.png",
            "optImg":"../images/nanOptImg.png"
        },{
            "voice":"Olivia",
            "name":"Olivia",
            "memo":"英音女声",
            "audition":"pages/misic/olivia.mp3",
            "opt":false  , 
            "img":"../images/nv.png",
            "optImg":"../images/nvOptImg.png"
        }
        ],
      //方言
      dialect:[
      {
            "voice":"Shanshan",
            "name":"姗姗",
            "memo":"粤语女声",
            "audition":"pages/misic/shanshan.mp3",
            "opt":false  , 
            "img":"../images/nv.png",
            "optImg":"../images/nvOptImg.png"
        } 
        ]
            },     
  } ,
    open: function () {
      this.setData({
        showModal: true
      })
    },
    confirm: function () {

      var that = this;
      this.setData({
        showModal: false
      })
      wx.setClipboardData({
        data: that.data.copyConnect,
        success: function (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.hideToast();
            }
            
          })
        }
      })
     
    },
    preventTouchMove: function() {

    },
   inputs: function (e) {
    // 获取输入框的内容
    var value = e.detail.value;
    // 获取输入框内容的长度
    var len = parseInt(value.length);
    var that = this;
    //最少字数限制
    if (len <= that.data.min)
    that.setData({
    texts: "最少五个字",
    })
    else if (len > that.data.min)
    that.setData({
    texts: " "
    })
    
    //最多字数限制
    if (len > that.data.max) return;
    // 当输入框内容的长度大于最大长度限制（max)时，终止setData()的执行
    that.setData({
    currentWordNumber: len //当前字数
    });
    }
  ,  
  //选择发音人
  optInformant: function(e){ 
    var that = this;
    var optInformant = e.currentTarget.dataset.voice;  
 
    that.setData({
      optInformant : optInformant
    })
 
  } ,
//获取输入的内容
inputWatch:function (e) {
  var that = this;

  that.setData({
    optInput : e.detail.value
  })
 
},
//获取音量
getVolume:function (e) {
  var that = this;
  var optVolume = e.detail.value;
  that.setData({
    optVolume: optVolume
  })
},
//获取语速
getSpeed:function (e) {
  var that = this;
  var optSpeed = e.detail.value;
  that.setData({
    optSpeed: optSpeed
  })
},
  /** * 滑动切换tab  */
  bindChange: function (e) {
    var that = this;
    that.innerAudioContext.stop();
    that.setData({
      broadcastVoice : " ",
      currentTab: e.detail.current 
    })
    // that.setData({ currentTab: e.detail.current });
  },
  /** * 点击tab切换  */
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  //生成语音
  createSpeech: function(e){ 
    var that = this;
    var   optInformant =  that.data.optInformant;
    var  optInput =  that.data.optInput;
    var  optVolume =  that.data.optVolume;
    var   optSpeed =  that.data.optSpeed;
    console.log("inputWatch",that.data.optInput.replace(/(^s*)|(s*$)/g, ""));
    if(optInformant.length==0){
      wx.showToast({
        title: '请选择发音人',
        icon: 'none',
        duration: 2000
      })
      return false;
    }

    if(optInput.replace(/(^s*)|(s*$)/g, "").length==0){
      wx.showToast({
        title: '请输入配音所需的文本',
        icon: 'none',
        duration: 2000
      })
      return false;
    }
   
     

     wx.request({
      url: "https://ai.2000du.com",
      method: "POST",
      data: {
        text : optInput,
        volume: optVolume,
        voice : optInformant,
        speech_rate: optSpeed
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        that.open();
        that.setData({
          isSubmitted : true,
          copyConnect: res.data.data
        })
      } ,
      fail: function () {
        wx.showLoading({
          title: '正在合成...',
      })
        console.log("fail")
      },
      complete: function () {
  
        console.log("complete")
      }
    })
      
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this;
    /** * 获取系统信息  */
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          clientHeight: res.windowHeight
        });
      }
    });
    that.innerAudioContext = wx.createInnerAudioContext();
    //开始播放 
    that.innerAudioContext.onPlay(() => {
      console.log("开始播放");
    
    });
    //暂停播放
    that.innerAudioContext.onPause(() => {
      console.log("暂停播放");
      
    });
    //停止播放
    that.innerAudioContext.onStop(() => {
      console.log("停止播放");
      
    });
    //播放错误
    that.innerAudioContext.onError(res => {
      console.log("播放错误");
      console.log(res.errMsg);
      console.log(res.errCode);
    });

    //获取选择的发音人数组
    wx.getStorage({
      key: 'informants',
      success (res) {
      var informants = res.data;
          if(informants != null && informants.length>0 ){
            that.setData({
              informants:informants,
              })
          
          }
      }   
    })
    wx.setStorage({
      key:"informants",
      data:that.data.informants
    })

    //获取所有添加列表
      wx.getStorage({
          key: "informantsList",
          success (res) {
          //判断内存里有没有元素
          var data = res.data;
          if(data!=null){
          that.setData({
            informantsList:data 
          })
          } 

          wx.setStorage({
            key:"informantsList",
            data:that.data.informantsList
          })

          }
        })
      
  },
  /**点击删除列表历史订单 */
  del: function(e) {
    wx.showModal({
      title: '提示',
      content: '确认删除该订单吗?',
      success: (res) => {



        if(res.confirm) {
          console.log("用户点击了确定")
          this.data.carts.splice(e.currentTarget.dataset.index, 1)
          this.setData({
            carts: this.data.carts
          })
        } else if(res.cancel) {
          console.log("用户点击了取消")
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
    onShow: function () {
      if (app.globalData.currentLocation == '') {
        this.setData({
          currentTab: 0
        });
      } else {
        var i = app.globalData.currentLocation;
        this.setData({
          currentTab: i
        });
      }
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
    
     /**
     * 试听
     */
    onBroadcast: function(e){ 
      var audition = e.currentTarget.dataset.audition,
        broadcastVoice =  e.currentTarget.dataset.voice;
      var that =  this;
      if(that.broadcastVoice==broadcastVoice){
        return;
      }

      that.innerAudioContext.stop();
    that.setData({
        broadcastVoice : broadcastVoice
    }),
      that.innerAudioContext.src =  audition
      that.innerAudioContext.play();

    setTimeout(function () {
      
      that.innerAudioContext.stop();
      
      that.setData({
        broadcastVoice : " "
      })
    }, 2000);
    },
     /**
     * 添加发音人
     */
      addSpeaker:function(e){
        var that = this;
        var index = e.currentTarget.dataset.index;
        var sceneType = e.currentTarget.dataset.scenetype;
        var array = e.currentTarget.dataset.array;
       
        array[index].opt= !array[index].opt;
        var opt = array[index].opt;
        var sceneTypesV  = 'informantsList.'+sceneType;
        that.setData({
          [sceneTypesV]: array
        })
        //添加选择的发音人列表 
        wx.setStorage({
          key:"informantsList",
          data: that.data.informantsList
        })
      
  
      // 获取语音发音人
        var informant = {
                        "voice":e.currentTarget.dataset.voice,
                        "name":e.currentTarget.dataset.name,
                        "memo":e.currentTarget.dataset.memo,
                        "img":e.currentTarget.dataset.img,
                        "optImg":e.currentTarget.dataset.optImg
                        };
                     
      // 获取已经选择的发音人裂变
        var informants = [];
        wx.getStorage({
          key: 'informants',
          success (res) {
          var data = res.data;
          if(data!=null&&data.length>0){
            informants = data;
          } 
          var newInformants = [];

          if(opt){
            informants.push(informant)
          }else{
            informants.forEach(function(item, index){
              // console.log(item,"index:"+ index)
              if(informant.voice!=item.voice){
                newInformants.push(item)
              }
          })  
              informants = newInformants
          }
      
            wx.setStorage({
              key:"informants",
              data:informants
            })
            that.setData({
              informants:informants,
              })
          }
        })
      }   ,
      //跳转更多
      more:function(e){
        var that = this;
        console.log(that.data.informantsList.currency[0])
        that.setData({
          selectedOrNot:true,
        })
      },
      //跳转到首页
      returnComposite :function(e){
        var that = this;
        that.setData({
          selectedOrNot:false,
        })
    },
    resetForm:function(e){
      var that = this;
      that.setData({
        selectedOrNot:false,
      })
  },

  
})

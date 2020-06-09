//index.js
//获取应用实例
const app = getApp()


Page({
data: {
  soundEffectsLibrary:[
    {voiceName:"手机铃声",
     voiceLen:"00:03" ,
     voiceType:"1",
  },
  {voiceName:"电话铃声",
  voiceLen:"00:03" ,
  voiceType:"1",
},
{voiceName:"游戏铃声",
voiceLen:"00:03" ,
voiceType:"2",
},
{voiceName:"舞蹈铃声",
voiceLen:"00:03" ,
voiceType:"3",
}
  ],

footSrc1: {iamges:'../images/2.png',url:"../sss/index"},
footSrc2: {iamges:'../images/2.png',url:"../sss/index"},
footSrc3: {iamges:'../images/2.png',url:"../sss/index"},
footSrc4: {iamges:'../images/2.png',url:"../sss/index"}
},
Navigation:function(event){
  console.log(event.currentTarget.dataset.url);
var that=this;
app.Navigation(event, that);
}
})
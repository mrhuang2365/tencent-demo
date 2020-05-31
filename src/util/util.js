export let systemInfo = {
  UA : navigator.userAgent,
  // 判断是否支持 webp
  canUseWebp : (() => {
      const elem = document.createElement("canvas");
      if (elem.getContext && elem.getContext("2d")) {
          // was able or not to get WebP representation
          return elem.toDataURL("image/webp").indexOf("data:image/webp") === 0;
      }
      return false;
  })(),
  versions: function () {
    var u = navigator.userAgent, app = navigator.appVersion;
    return {         //移动终端浏览器版本信息
        trident: u.indexOf('Trident') > -1, //IE内核
        presto: u.indexOf('Presto') > -1, //opera内核
        webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
        iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
        iPad: u.indexOf('iPad') > -1, //是否iPad
        webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
    }(),
  getBrowserType(name) {
      var UA = this.UA
      if(name){
          var exp=new RegExp(name);
          return exp.exec(UA) ? true : false;
          //return UA.indexOf(name)>-1 ? true : false
      }
      if(UA.match(/micromessenger/i))
          return 'isWeixin'
      if(UA.match(/weibo/i))
          return 'isWeibo'
      if(UA.match(/yixin/i))
          return 'isYixin'
      if(UA.match(/qq/i))
          return 'isQQ'
      if(UA.match(/baidubrowser/i))
          return 'isBaidu'
      return 0;
  },
  //判断 系统类型
  getSystemType() {
      let sys = '';
      if(UA.match(/android/ig) || UA.match(/Windows; U;/)){
          sys = 'isAndroid'
      }else if(UA.match(/iphone|ipod|ipad/ig)){
          sys = 'isIos'
      }
      if(sys=='isIos' && Number(ua.match(/OS\s(\d+)/i)[1]) > 8){
          sys = 'isIos9'
      }
      return sys;
  },
  getBS() {
      return [getSystemType(),getBrowserType()];
  },
}

function addZero(t) {
    return t<10 ? '0'+t : t;
}

export function formatDate(t, str){
    let date = new Date(t);
    var str = str || '/'
    let y = date.getFullYear(),
        m = addZero(date.getMonth()+1),
        d = addZero(date.getDate()),
        h = addZero(date.getHours()),
        mm = addZero(date.getMinutes()),
        s = addZero(date.getSeconds());
    let result = y + str + m+ str + d
    return result
}
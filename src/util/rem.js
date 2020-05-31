import {systemInfo} from './util'
import {addClass} from './dom'

(function (doc, win) {
  var docEl = doc.documentElement,
      isIOS = navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
      dpr = isIOS ? Math.min(win.devicePixelRatio, 3) : 1,
      dpr = window.top === window.self ? dpr : 1, //被iframe引用时，禁止缩放
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  docEl.dataset.dpr = dpr;
  var recalc = function () {
      var width = docEl.clientWidth;
      if (width / dpr > 375) {
          width = 375 * dpr;
      }
      docEl.dataset.width = width
      docEl.dataset.percent = 100 * (width / 375);
      docEl.style.fontSize = 100 * (width / 375) + 'px';
  };
  recalc()
  isIOS && doc.documentElement.classList.add('iosx' + win.devicePixelRatio)
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
})(document, window);

window.onload = function(){
  if (!systemInfo.versions.mobile) {
    addClass(this.document.body, 'body-pc-mode')
  }
}
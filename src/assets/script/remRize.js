/**
 * Created by txl-pc on 2017/7/9.
 */
(function (doc, win) {
  const docEl = doc.documentElement
  const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  const recalc = function () {
    const clientWidth = docEl.clientWidth
    if (!clientWidth) return
    if (clientWidth <= 320) {
      docEl.style.fontSize = '16px'
    } else {
      // console.log('clientHeight',clientHeight);
      docEl.style.fontSize = 100 * (clientWidth / 375) + 'px'
    }
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)

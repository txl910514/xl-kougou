/**
 * Created by txl-pc on 2017/7/9.
 */
(function (doc, win) {
  const docEl = doc.documentElement
  const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  const recalc = function () {
    console.log('uuuuuut')
    const clientWidth = docEl.clientWidth
    if (!clientWidth) return
    if (clientWidth <= 320) {
      docEl.style.fontSize = '16px'
    } else if (clientWidth <= 1280) {
      docEl.style.fontSize = 100 * (clientWidth / 375) + 'px'
    } else {
      // console.log('clientHeight',clientHeight);
      docEl.style.fontSize = 100 * (clientWidth / clientWidth) + 'px'
    }
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)

// const win = window
// export default win.flex = (baseFontSize, fontscale) => {
//   const _baseFontSize = baseFontSize || 100
//   const _fontscale = fontscale || 1
//
//   const doc = win.document
//   const ua = navigator.userAgent
//   const matches = ua.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i)
//   const UCversion = ua.match(/U3\/((\d+|\.){5,})/i)
//   const isUCHd = UCversion && parseInt(UCversion[1].split('.').join(''), 10) >= 80
//   const isIos = navigator.appVersion.match(/(iphone|ipad|ipod)/gi)
//   let dpr = win.devicePixelRatio || 1
//   if (!isIos && !(matches && matches[1] > 534) && !isUCHd) {
//     // 如果非iOS, 非Android4.3以上, 非UC内核, 就不执行高清, dpr设为1;
//     dpr = 1
//   }
//   const scale = 1 / dpr
//
//   let metaEl = doc.querySelector('meta[name="viewport"]')
//   if (!metaEl) {
//     metaEl = doc.createElement('meta')
//     metaEl.setAttribute('name', 'viewport')
//     doc.head.appendChild(metaEl)
//   }
//   metaEl.setAttribute('content', `width=device-width,user-scalable=no,initial-scale=${scale},maximum-scale=${scale},minimum-scale=${scale}`)
//   doc.documentElement.style.fontSize = `${_baseFontSize / 2 * dpr * _fontscale}px`
// }

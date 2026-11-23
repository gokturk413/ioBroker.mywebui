const k=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x1ad))/0x1*(-parseInt(h(0x1af))/0x2)+-parseInt(h(0x19d))/0x3+-parseInt(h(0x1a8))/0x4+parseInt(h(0x1b1))/0x5*(parseInt(h(0x1a2))/0x6)+parseInt(h(0x1b4))/0x7*(parseInt(h(0x1b0))/0x8)+parseInt(h(0x1b3))/0x9*(-parseInt(h(0x1aa))/0xa)+parseInt(h(0x1b9))/0xb*(parseInt(h(0x1ba))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb94ff));function b(c,d){c=c-0x19b;const e=a();let f=e[c];return f;}function a(){const o=['getById','column','style','1140iaeQmN','rotate','flex-wrap','updateStyleInSheetOrLocalAsync','_size','extend','108588IJWXcu','deg','8105070iQeZLO','querySelectorAll','_addStyleButton','357059quxFrB','_addFlexDirectionButton','2nzWxNJ','5354856sXMqgH','12850gbtLDK','justify-content','9dyfyoy','7aePwpR','img','align-content','align-items','flex-direction','297hTlgqU','1021116wfMkjr','_toolbar','column-reverse','value','rotateImagesAcordingFlexDirection','4504248smRbAj','forEach'];a=function(){return o;};return a();}import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../Constants.js';import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';export class FlexToolbarExtension extends BasicStackedToolbarExtension{static ['template']=html`
    <div style="height: 100%; width: 100%;">
      ${BasicStackedToolbarExtension['basicTemplate']}
      <node-projects-image-button-list-selector property="direction" no-value-in-header id="flex-direction">
        <img title="row" data-value="row" src="${assetsPath}images/chromeDevtools/flex-direction-row-icon.svg">
        <img title="column" data-value="column" src="${assetsPath}images/chromeDevtools/flex-direction-column-icon.svg">
        <img title="row-reverse" data-value="row-reverse" style="transform: scaleX(-1);" src="${assetsPath}images/chromeDevtools/flex-direction-row-icon.svg">
        <img title="column-reverse" data-value="column-reverse" style="transform: scaleY(-1);" src="${assetsPath}images/chromeDevtools/flex-direction-column-icon.svg">
      </node-projects-image-button-list-selector>
      <node-projects-image-button-list-selector property="wrap" no-value-in-header id="flex-wrap">
        <img title="nowrap" data-value="nowrap" src="${assetsPath}images/chromeDevtools/flex-wrap-nowrap-icon.svg">
        <img title="wrap" data-value="wrap" src="${assetsPath}images/chromeDevtools/flex-wrap-wrap-icon.svg">
      </node-projects-image-button-list-selector>
      <node-projects-image-button-list-selector property="align-content" no-value-in-header id="align-content">
        <img title="start" data-value="start" src="${assetsPath}images/chromeDevtools/align-content-flex-start-icon.svg">
        <img title="center" data-value="center" src="${assetsPath}images/chromeDevtools/align-content-center-icon.svg">
        <img title="end" data-value="end" src="${assetsPath}images/chromeDevtools/align-content-flex-end-icon.svg">
        <img title="space-around" data-value="space-around" src="${assetsPath}images/chromeDevtools/align-content-space-around-icon.svg">
        <img title="space-evenly" data-value="space-evenly" src="${assetsPath}images/chromeDevtools/align-content-space-evenly-icon.svg">
        <img title="space-between" data-value="space-between" src="${assetsPath}images/chromeDevtools/align-content-space-between-icon.svg">
        <img title="stretch" data-value="stretch" src="${assetsPath}images/chromeDevtools/align-content-stretch-icon.svg">
      </node-projects-image-button-list-selector>
      <node-projects-image-button-list-selector property="justify-content" no-value-in-header id="justify-content">
        <img title="start" data-value="start" src="${assetsPath}images/chromeDevtools/justify-content-start-icon.svg">
        <img title="center" data-value="center" src="${assetsPath}images/chromeDevtools/justify-content-center-icon.svg">
        <img title="end" data-value="end" src="${assetsPath}images/chromeDevtools/justify-content-end-icon.svg">
        <img title="space-around" data-value="space-around" src="${assetsPath}images/chromeDevtools/justify-content-space-around-icon.svg">
        <img title="space-evenly" data-value="space-evenly" src="${assetsPath}images/chromeDevtools/justify-content-space-evenly-icon.svg">
        <img title="space-between" data-value="space-between" src="${assetsPath}images/chromeDevtools/justify-content-space-between-icon.svg">
      </node-projects-image-button-list-selector>
      <node-projects-image-button-list-selector property="align-items" no-value-in-header id="align-items">
        <img title="start" data-value="start" src="${assetsPath}images/chromeDevtools/align-items-start-icon.svg">
        <img title="center" data-value="center" src="${assetsPath}images/chromeDevtools/align-items-center-icon.svg">
        <img title="end" data-value="end" src="${assetsPath}images/chromeDevtools/align-items-end-icon.svg">
        <img title="stretch" data-value="stretch" src="${assetsPath}images/chromeDevtools/align-items-stretch-icon.svg">
        <img title="space-evenly" data-value="space-evenly" src="${assetsPath}images/chromeDevtools/align-items-baseline-icon.svg">
      </node-projects-image-button-list-selector>
    </div>
  `;constructor(c,d,e){const i=b;super(c,d,e),this[i(0x1a6)]['width']=0x271;}['extend'](c,d){const j=b;super[j(0x1a7)](c,d),this[j(0x1ae)](),this['_addStyleButton']('flex-wrap'),this['_addStyleButton']('align-content'),this[j(0x1ac)]('justify-content'),this[j(0x1ac)](j(0x1b7)),this['refresh'](c,d);}[k(0x1ae)](){const l=k,c=getComputedStyle(this['extendedItem']['element']),d=this[l(0x1bb)][l(0x19f)](l(0x1b8));d['addEventListener']('value-changed',async()=>{const m=l;await this['extendedItem'][m(0x1a5)](m(0x1b8),d['value']),this[m(0x19c)](d[m(0x19b)]);}),d['value']=c['flex-direction'],this[l(0x19c)](d[l(0x19b)]);}['rotateImagesAcordingFlexDirection'](c){const n=k;let d=0x0;if(c==n(0x1a0)||c==n(0x1bc))d=-0x5a;this['_toolbar'][n(0x19f)](n(0x1a4))['querySelectorAll'](n(0x1b5))[n(0x19e)](e=>e['style'][n(0x1a3)]=d+'deg'),this[n(0x1bb)][n(0x19f)](n(0x1b6))['querySelectorAll']('img')['forEach'](e=>e[n(0x1a1)]['rotate']=d+n(0x1a9)),this[n(0x1bb)][n(0x19f)](n(0x1b2))[n(0x1ab)]('img')['forEach'](e=>e[n(0x1a1)][n(0x1a3)]=d+n(0x1a9)),this[n(0x1bb)]['getById']('align-items')['querySelectorAll']('img:nth-child(-n+4)')[n(0x19e)](e=>e['style']['rotate']=d+n(0x1a9));}}
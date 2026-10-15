const i=b;function a(){const o=['_toolbar','querySelectorAll','25564CwEDas','123488NhtKfM','basicTemplate','172332HMvBph','updateStyleInSheetOrLocalAsync','style','874605pevgYZ','2640282GXQfGf','value','justify-content','getById','_addFlexDirectionButton','8811sCUZXi','445396qLiUdq','_addStyleButton','_size','16AmTdGo','deg','align-content','90imqLQb','refresh','flex-direction','align-items','70WYsmRv','rotate','column-reverse','forEach'];a=function(){return o;};return a();}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x1c8))/0x1+parseInt(h(0x1c5))/0x2*(-parseInt(h(0x1bb))/0x3)+-parseInt(h(0x1c6))/0x4+parseInt(h(0x1cb))/0x5+parseInt(h(0x1cc))/0x6+-parseInt(h(0x1b5))/0x7*(parseInt(h(0x1b8))/0x8)+parseInt(h(0x1b4))/0x9*(-parseInt(h(0x1bf))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3a50b));import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../Constants.js';import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';function b(c,d){c=c-0x1b4;const e=a();let f=e[c];return f;}export class FlexToolbarExtension extends BasicStackedToolbarExtension{static ['template']=html`
    <div style="height: 100%; width: 100%;">
      ${BasicStackedToolbarExtension[i(0x1c7)]}
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
  `;constructor(c,d,e){const j=i;super(c,d,e),this[j(0x1b7)]['width']=0x271;}['extend'](c,d){const k=i;super['extend'](c,d),this['_addFlexDirectionButton'](),this[k(0x1b6)]('flex-wrap'),this['_addStyleButton']('align-content'),this['_addStyleButton']('justify-content'),this[k(0x1b6)](k(0x1be)),this[k(0x1bc)](c,d);}[i(0x1d0)](){const m=i,c=getComputedStyle(this['extendedItem']['element']),d=this['_toolbar']['getById']('flex-direction');d['addEventListener']('value-changed',async()=>{const l=b;await this['extendedItem'][l(0x1c9)](l(0x1bd),d['value']),this['rotateImagesAcordingFlexDirection'](d['value']);}),d[m(0x1cd)]=c['flex-direction'],this['rotateImagesAcordingFlexDirection'](d['value']);}['rotateImagesAcordingFlexDirection'](c){const n=i;let d=0x0;if(c=='column'||c==n(0x1c1))d=-0x5a;this[n(0x1c3)]['getById']('flex-wrap')['querySelectorAll']('img')['forEach'](e=>e['style']['rotate']=d+'deg'),this[n(0x1c3)][n(0x1cf)](n(0x1ba))['querySelectorAll']('img')['forEach'](e=>e['style'][n(0x1c0)]=d+'deg'),this[n(0x1c3)]['getById'](n(0x1ce))['querySelectorAll']('img')[n(0x1c2)](e=>e['style']['rotate']=d+'deg'),this['_toolbar'][n(0x1cf)]('align-items')[n(0x1c4)]('img:nth-child(-n+4)')[n(0x1c2)](e=>e[n(0x1ca)][n(0x1c0)]=d+n(0x1b9));}}
const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x1e9))/0x1*(-parseInt(h(0x1f1))/0x2)+parseInt(h(0x1e0))/0x3*(parseInt(h(0x1e2))/0x4)+-parseInt(h(0x1dc))/0x5+-parseInt(h(0x1de))/0x6*(-parseInt(h(0x1e1))/0x7)+-parseInt(h(0x1e4))/0x8+-parseInt(h(0x1f7))/0x9*(-parseInt(h(0x1d8))/0xa)+-parseInt(h(0x1f6))/0xb*(-parseInt(h(0x1db))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xef947));import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../Constants.js';import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';function a(){const o=['1257824eYVVLF','rotateImagesAcordingFlexDirection','template','justify-content','_addStyleButton','column','element','column-reverse','2eiidYy','rotate','forEach','deg','_size','1589863ltPdXm','5864130LNprGH','getById','align-items','img:nth-child(-n+4)','10rsLUYG','querySelectorAll','width','156BPwQNQ','6405220JMlJNj','extendedItem','120kVMOcj','flex-wrap','6zusVTv','295246CxJKZT','649412dBecQf','extend','1428624owzIuc','style','_toolbar','addEventListener','value'];a=function(){return o;};return a();}function b(c,d){c=c-0x1d7;const e=a();let f=e[c];return f;}export class FlexToolbarExtension extends BasicStackedToolbarExtension{static [i(0x1eb)]=html`
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
  `;constructor(c,d,e){const j=i;super(c,d,e),this[j(0x1f5)][j(0x1da)]=0x271;}[i(0x1e3)](c,d){const k=i;super['extend'](c,d),this['_addFlexDirectionButton'](),this[k(0x1ed)]('flex-wrap'),this['_addStyleButton']('align-content'),this['_addStyleButton']('justify-content'),this['_addStyleButton'](k(0x1f9)),this['refresh'](c,d);}['_addFlexDirectionButton'](){const l=i,c=getComputedStyle(this[l(0x1dd)][l(0x1ef)]),d=this[l(0x1e6)]['getById']('flex-direction');d[l(0x1e7)]('value-changed',async()=>{const m=l;await this[m(0x1dd)]['updateStyleInSheetOrLocalAsync']('flex-direction',d['value']),this[m(0x1ea)](d[m(0x1e8)]);}),d['value']=c['flex-direction'],this['rotateImagesAcordingFlexDirection'](d['value']);}[i(0x1ea)](c){const n=i;let d=0x0;if(c==n(0x1ee)||c==n(0x1f0))d=-0x5a;this[n(0x1e6)]['getById'](n(0x1df))['querySelectorAll']('img')[n(0x1f3)](e=>e[n(0x1e5)]['rotate']=d+n(0x1f4)),this[n(0x1e6)][n(0x1f8)]('align-content')['querySelectorAll']('img')['forEach'](e=>e[n(0x1e5)]['rotate']=d+'deg'),this['_toolbar'][n(0x1f8)](n(0x1ec))[n(0x1d9)]('img')['forEach'](e=>e['style']['rotate']=d+n(0x1f4)),this[n(0x1e6)][n(0x1f8)](n(0x1f9))['querySelectorAll'](n(0x1d7))[n(0x1f3)](e=>e[n(0x1e5)][n(0x1f2)]=d+n(0x1f4));}}
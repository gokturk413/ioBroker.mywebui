function a(){const o=['_addFlexDirectionButton','704720NuTYfa','img','justify-content','extendedItem','rotateImagesAcordingFlexDirection','getById','5gOLajC','_toolbar','querySelectorAll','_size','width','_addStyleButton','1501715tEwjCX','element','81926XFbyhJ','refresh','style','basicTemplate','forEach','value','1073595uIOMuG','rotate','2353561skPxwy','flex-wrap','column','1310430IjzQUW','align-items','2574728ZEScXY','flex-direction','align-content','deg','column-reverse'];a=function(){return o;};return a();}function b(c,d){c=c-0x1cd;const e=a();let f=e[c];return f;}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1cd))/0x1*(-parseInt(h(0x1d5))/0x2)+-parseInt(h(0x1db))/0x3+-parseInt(h(0x1e8))/0x4+parseInt(h(0x1d3))/0x5+parseInt(h(0x1e0))/0x6+parseInt(h(0x1dd))/0x7+-parseInt(h(0x1e2))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x31c7c));import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../Constants.js';import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';export class FlexToolbarExtension extends BasicStackedToolbarExtension{static ['template']=html`
    <div style="height: 100%; width: 100%;">
      ${BasicStackedToolbarExtension[i(0x1d8)]}
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
  `;constructor(c,d,e){const j=i;super(c,d,e),this[j(0x1d0)][j(0x1d1)]=0x271;}['extend'](c,d){const k=i;super['extend'](c,d),this[k(0x1e7)](),this['_addStyleButton']('flex-wrap'),this['_addStyleButton'](k(0x1e4)),this[k(0x1d2)]('justify-content'),this[k(0x1d2)](k(0x1e1)),this[k(0x1d6)](c,d);}[i(0x1e7)](){const l=i,c=getComputedStyle(this[l(0x1eb)][l(0x1d4)]),d=this[l(0x1ce)]['getById'](l(0x1e3));d['addEventListener']('value-changed',async()=>{const m=l;await this['extendedItem']['updateStyleInSheetOrLocalAsync'](m(0x1e3),d[m(0x1da)]),this['rotateImagesAcordingFlexDirection'](d[m(0x1da)]);}),d['value']=c[l(0x1e3)],this[l(0x1ec)](d['value']);}[i(0x1ec)](c){const n=i;let d=0x0;if(c==n(0x1df)||c==n(0x1e6))d=-0x5a;this[n(0x1ce)]['getById'](n(0x1de))[n(0x1cf)]('img')[n(0x1d9)](e=>e[n(0x1d7)]['rotate']=d+n(0x1e5)),this[n(0x1ce)][n(0x1ed)]('align-content')[n(0x1cf)](n(0x1e9))[n(0x1d9)](e=>e[n(0x1d7)][n(0x1dc)]=d+'deg'),this[n(0x1ce)]['getById'](n(0x1ea))[n(0x1cf)](n(0x1e9))['forEach'](e=>e['style']['rotate']=d+'deg'),this['_toolbar'][n(0x1ed)](n(0x1e1))['querySelectorAll']('img:nth-child(-n+4)')['forEach'](e=>e['style']['rotate']=d+n(0x1e5));}}
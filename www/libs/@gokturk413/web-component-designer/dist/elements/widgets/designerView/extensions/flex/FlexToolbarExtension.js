const j=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xd6))/0x1+parseInt(h(0xe0))/0x2*(parseInt(h(0xeb))/0x3)+-parseInt(h(0xe3))/0x4+parseInt(h(0xe1))/0x5*(-parseInt(h(0xd9))/0x6)+-parseInt(h(0xcf))/0x7+parseInt(h(0xdb))/0x8+-parseInt(h(0xe9))/0x9*(-parseInt(h(0xcd))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x41804));function b(c,d){c=c-0xcb;const e=a();let f=e[c];return f;}function a(){const o=['justify-content','value','114GldYUz','extend','1237992YCtXeh','forEach','rotate','deg','align-content','332290dzVaIT','85105gDLTHv','rotateImagesAcordingFlexDirection','696896xVmxtv','flex-direction','width','getById','_toolbar','querySelectorAll','36LvlZVg','img','3vQuzNC','extendedItem','column','1760540csKFgG','addEventListener','1793743qNfUGp','_addFlexDirectionButton','element','style','flex-wrap','align-items','_addStyleButton','2946ntYQpt'];a=function(){return o;};return a();}import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../Constants.js';import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';export class FlexToolbarExtension extends BasicStackedToolbarExtension{static ['template']=html`
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
  `;constructor(c,d,e){const i=b;super(c,d,e),this['_size'][i(0xe5)]=0x271;}[j(0xda)](c,d){const k=j;super['extend'](c,d),this[k(0xd0)](),this[k(0xd5)](k(0xd3)),this[k(0xd5)](k(0xdf)),this[k(0xd5)](k(0xd7)),this[k(0xd5)](k(0xd4)),this['refresh'](c,d);}['_addFlexDirectionButton'](){const l=j,c=getComputedStyle(this['extendedItem'][l(0xd1)]),d=this['_toolbar'][l(0xe6)](l(0xe4));d[l(0xce)]('value-changed',async()=>{const m=l;await this[m(0xcb)]['updateStyleInSheetOrLocalAsync'](m(0xe4),d['value']),this[m(0xe2)](d[m(0xd8)]);}),d[l(0xd8)]=c['flex-direction'],this['rotateImagesAcordingFlexDirection'](d[l(0xd8)]);}[j(0xe2)](c){const n=j;let d=0x0;if(c==n(0xcc)||c=='column-reverse')d=-0x5a;this['_toolbar'][n(0xe6)]('flex-wrap')[n(0xe8)]('img')[n(0xdc)](e=>e['style'][n(0xdd)]=d+n(0xde)),this['_toolbar'][n(0xe6)](n(0xdf))['querySelectorAll']('img')['forEach'](e=>e[n(0xd2)][n(0xdd)]=d+'deg'),this['_toolbar'][n(0xe6)](n(0xd7))[n(0xe8)](n(0xea))['forEach'](e=>e[n(0xd2)]['rotate']=d+'deg'),this[n(0xe7)]['getById'](n(0xd4))[n(0xe8)]('img:nth-child(-n+4)')['forEach'](e=>e['style']['rotate']=d+'deg');}}
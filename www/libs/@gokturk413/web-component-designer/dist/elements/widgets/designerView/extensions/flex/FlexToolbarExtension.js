const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xf5))/0x1+-parseInt(h(0xfe))/0x2+-parseInt(h(0x10d))/0x3*(parseInt(h(0xf3))/0x4)+parseInt(h(0xfc))/0x5+parseInt(h(0xf9))/0x6*(parseInt(h(0xfd))/0x7)+parseInt(h(0x106))/0x8+-parseInt(h(0x10a))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xdbf7a));import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../Constants.js';function b(c,d){c=c-0xf0;const e=a();let f=e[c];return f;}function a(){const n=['style','querySelectorAll','column','_addFlexDirectionButton','addEventListener','element','12277712eMctkI','value-changed','_toolbar','align-content','15964488XGbgbg','img','updateStyleInSheetOrLocalAsync','9RkvfdQ','template','img:nth-child(-n+4)','extendedItem','1651604NStuss','value','1347856SFJFvA','rotate','forEach','getById','12mWccsF','deg','flex-direction','5622690TpqkPb','513303SnkWwf','480490XaDCaa','_addStyleButton'];a=function(){return n;};return a();}import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';export class FlexToolbarExtension extends BasicStackedToolbarExtension{static [i(0xf0)]=html`
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
  `;constructor(c,d,e){super(c,d,e),this['_size']['width']=0x271;}['extend'](c,d){const j=i;super['extend'](c,d),this[j(0x103)](),this[j(0xff)]('flex-wrap'),this[j(0xff)](j(0x109)),this['_addStyleButton']('justify-content'),this['_addStyleButton']('align-items'),this['refresh'](c,d);}[i(0x103)](){const k=i,c=getComputedStyle(this[k(0xf2)][k(0x105)]),d=this[k(0x108)]['getById']('flex-direction');d[k(0x104)](k(0x107),async()=>{const l=k;await this[l(0xf2)][l(0x10c)](l(0xfb),d['value']),this['rotateImagesAcordingFlexDirection'](d['value']);}),d[k(0xf4)]=c['flex-direction'],this['rotateImagesAcordingFlexDirection'](d[k(0xf4)]);}['rotateImagesAcordingFlexDirection'](c){const m=i;let d=0x0;if(c==m(0x102)||c=='column-reverse')d=-0x5a;this[m(0x108)]['getById']('flex-wrap')['querySelectorAll']('img')[m(0xf7)](e=>e[m(0x100)][m(0xf6)]=d+'deg'),this['_toolbar'][m(0xf8)]('align-content')['querySelectorAll'](m(0x10b))[m(0xf7)](e=>e[m(0x100)]['rotate']=d+'deg'),this['_toolbar']['getById']('justify-content')[m(0x101)]('img')['forEach'](e=>e['style']['rotate']=d+m(0xfa)),this['_toolbar']['getById']('align-items')['querySelectorAll'](m(0xf1))['forEach'](e=>e['style']['rotate']=d+'deg');}}
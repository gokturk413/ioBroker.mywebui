const i=b;function b(c,d){c=c-0xe0;const e=a();let f=e[c];return f;}function a(){const o=['img','extendedItem','align-content','rotate','1lXbzgu','_addStyleButton','querySelectorAll','element','getById','img:nth-child(-n+4)','flex-wrap','justify-content','extend','_toolbar','98396rVqzJB','2097684jYsfAs','rotateImagesAcordingFlexDirection','flex-direction','deg','_size','template','890442yZlGBK','389992eUVelN','forEach','style','612434InDDUl','2621108rkHlvn','2385675CtglVm','_addFlexDirectionButton'];a=function(){return o;};return a();}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xe5))/0x1*(-parseInt(h(0xfa))/0x2)+parseInt(h(0xf6))/0x3+-parseInt(h(0xef))/0x4+parseInt(h(0xfc))/0x5+-parseInt(h(0xf0))/0x6+-parseInt(h(0xfb))/0x7+parseInt(h(0xf7))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5cd62));import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../Constants.js';import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';export class FlexToolbarExtension extends BasicStackedToolbarExtension{static [i(0xf5)]=html`
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
  `;constructor(c,d,e){const j=i;super(c,d,e),this[j(0xf4)]['width']=0x271;}[i(0xed)](c,d){const k=i;super['extend'](c,d),this[k(0xe0)](),this[k(0xe6)](k(0xeb)),this[k(0xe6)]('align-content'),this['_addStyleButton'](k(0xec)),this['_addStyleButton']('align-items'),this['refresh'](c,d);}['_addFlexDirectionButton'](){const l=i,c=getComputedStyle(this['extendedItem'][l(0xe8)]),d=this['_toolbar'][l(0xe9)]('flex-direction');d['addEventListener']('value-changed',async()=>{const m=l;await this[m(0xe2)]['updateStyleInSheetOrLocalAsync']('flex-direction',d['value']),this[m(0xf1)](d['value']);}),d['value']=c[l(0xf2)],this[l(0xf1)](d['value']);}[i(0xf1)](c){const n=i;let d=0x0;if(c=='column'||c=='column-reverse')d=-0x5a;this[n(0xee)][n(0xe9)]('flex-wrap')['querySelectorAll'](n(0xe1))['forEach'](e=>e[n(0xf9)]['rotate']=d+'deg'),this['_toolbar'][n(0xe9)](n(0xe3))['querySelectorAll'](n(0xe1))['forEach'](e=>e['style'][n(0xe4)]=d+n(0xf3)),this[n(0xee)]['getById'](n(0xec))[n(0xe7)]('img')['forEach'](e=>e['style']['rotate']=d+'deg'),this[n(0xee)][n(0xe9)]('align-items')['querySelectorAll'](n(0xea))[n(0xf8)](e=>e[n(0xf9)][n(0xe4)]=d+'deg');}}
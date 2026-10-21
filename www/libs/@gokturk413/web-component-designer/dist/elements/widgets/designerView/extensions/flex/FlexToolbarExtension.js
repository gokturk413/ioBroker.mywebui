function b(c,d){c=c-0x1c3;const e=a();let f=e[c];return f;}const k=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1d2))/0x1*(parseInt(h(0x1e7))/0x2)+-parseInt(h(0x1cd))/0x3*(parseInt(h(0x1d0))/0x4)+parseInt(h(0x1ca))/0x5*(parseInt(h(0x1cb))/0x6)+-parseInt(h(0x1d1))/0x7+-parseInt(h(0x1c7))/0x8*(parseInt(h(0x1e6))/0x9)+parseInt(h(0x1cc))/0xa+parseInt(h(0x1db))/0xb*(parseInt(h(0x1dc))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x57df3));import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../Constants.js';import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';export class FlexToolbarExtension extends BasicStackedToolbarExtension{static ['template']=html`
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
  `;constructor(c,d,e){const i=b;super(c,d,e),this[i(0x1d5)][i(0x1d4)]=0x271;}['extend'](c,d){const j=b;super['extend'](c,d),this['_addFlexDirectionButton'](),this['_addStyleButton'](j(0x1e3)),this['_addStyleButton']('align-content'),this['_addStyleButton'](j(0x1dd)),this['_addStyleButton']('align-items'),this[j(0x1da)](c,d);}[k(0x1c4)](){const l=k,c=getComputedStyle(this[l(0x1e0)][l(0x1cf)]),d=this['_toolbar']['getById']('flex-direction');d[l(0x1c6)]('value-changed',async()=>{const m=l;await this['extendedItem'][m(0x1c5)](m(0x1c8),d[m(0x1d6)]),this['rotateImagesAcordingFlexDirection'](d['value']);}),d[l(0x1d6)]=c['flex-direction'],this['rotateImagesAcordingFlexDirection'](d[l(0x1d6)]);}[k(0x1e4)](c){const n=k;let d=0x0;if(c==n(0x1c3)||c==n(0x1df))d=-0x5a;this['_toolbar'][n(0x1d7)]('flex-wrap')['querySelectorAll']('img')['forEach'](e=>e['style']['rotate']=d+n(0x1e1)),this[n(0x1de)]['getById'](n(0x1e5))['querySelectorAll']('img')[n(0x1d8)](e=>e[n(0x1ce)]['rotate']=d+n(0x1e1)),this['_toolbar'][n(0x1d7)]('justify-content')[n(0x1c9)](n(0x1d3))[n(0x1d8)](e=>e[n(0x1ce)][n(0x1d9)]=d+'deg'),this[n(0x1de)][n(0x1d7)](n(0x1e2))['querySelectorAll']('img:nth-child(-n+4)')['forEach'](e=>e[n(0x1ce)][n(0x1d9)]=d+n(0x1e1));}}function a(){const o=['getById','forEach','rotate','refresh','154zudsdD','960900iHjiHy','justify-content','_toolbar','column-reverse','extendedItem','deg','align-items','flex-wrap','rotateImagesAcordingFlexDirection','align-content','27JBUQZB','2vAwVUS','column','_addFlexDirectionButton','updateStyleInSheetOrLocalAsync','addEventListener','1157880fLBUeD','flex-direction','querySelectorAll','1037555wcVeoG','6wyKyqP','6586520DNkkBX','40308BzFcCB','style','element','120xcgkkj','4596473ITiWZO','133366frvARj','img','width','_size','value'];a=function(){return o;};return a();}
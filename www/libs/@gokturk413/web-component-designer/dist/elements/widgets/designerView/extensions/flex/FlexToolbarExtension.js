(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1a4))/0x1+parseInt(h(0x1b9))/0x2*(-parseInt(h(0x1a8))/0x3)+-parseInt(h(0x1ac))/0x4*(-parseInt(h(0x1bc))/0x5)+parseInt(h(0x1af))/0x6+parseInt(h(0x1b8))/0x7*(parseInt(h(0x1b7))/0x8)+-parseInt(h(0x1bb))/0x9*(parseInt(h(0x1be))/0xa)+parseInt(h(0x19f))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5baa0));function b(c,d){c=c-0x19f;const e=a();let f=e[c];return f;}import{html}from'@node-projects/base-custom-webcomponent';function a(){const n=['_size','2757972UbqgYk','column','refresh','rotate','style','align-content','getById','justify-content','128CiOBOL','234416BbLvaJ','4pjeItK','img:nth-child(-n+4)','186075kvLEGV','82840ewLTbg','updateStyleInSheetOrLocalAsync','230OVhFUm','forEach','3621794zPDwCJ','_addStyleButton','img','querySelectorAll','align-items','409163YehpIo','flex-wrap','_toolbar','extend','270834GdXPjv','addEventListener','column-reverse','deg','28rgiffi','extendedItem'];a=function(){return n;};return a();}import{assetsPath}from'../../../../../Constants.js';import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';export class FlexToolbarExtension extends BasicStackedToolbarExtension{static ['template']=html`
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
  `;constructor(c,d,e){const i=b;super(c,d,e),this[i(0x1ae)]['width']=0x271;}['extend'](c,d){const j=b;super[j(0x1a7)](c,d),this['_addFlexDirectionButton'](),this['_addStyleButton'](j(0x1a5)),this[j(0x1a0)]('align-content'),this['_addStyleButton'](j(0x1b6)),this[j(0x1a0)](j(0x1a3)),this[j(0x1b1)](c,d);}['_addFlexDirectionButton'](){const k=b,c=getComputedStyle(this[k(0x1ad)]['element']),d=this['_toolbar'][k(0x1b5)]('flex-direction');d[k(0x1a9)]('value-changed',async()=>{const l=k;await this[l(0x1ad)][l(0x1bd)]('flex-direction',d['value']),this['rotateImagesAcordingFlexDirection'](d['value']);}),d['value']=c['flex-direction'],this['rotateImagesAcordingFlexDirection'](d['value']);}['rotateImagesAcordingFlexDirection'](c){const m=b;let d=0x0;if(c==m(0x1b0)||c==m(0x1aa))d=-0x5a;this['_toolbar'][m(0x1b5)](m(0x1a5))['querySelectorAll'](m(0x1a1))['forEach'](e=>e['style'][m(0x1b2)]=d+m(0x1ab)),this[m(0x1a6)]['getById'](m(0x1b4))['querySelectorAll']('img')[m(0x1bf)](e=>e[m(0x1b3)]['rotate']=d+'deg'),this[m(0x1a6)]['getById'](m(0x1b6))['querySelectorAll'](m(0x1a1))[m(0x1bf)](e=>e['style']['rotate']=d+m(0x1ab)),this['_toolbar']['getById'](m(0x1a3))[m(0x1a2)](m(0x1ba))[m(0x1bf)](e=>e[m(0x1b3)]['rotate']=d+'deg');}}
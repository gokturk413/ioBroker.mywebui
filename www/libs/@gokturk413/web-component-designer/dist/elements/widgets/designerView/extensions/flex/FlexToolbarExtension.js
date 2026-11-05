function a(){const n=['62502QOKObT','4236MDPNfv','align-content','4FYRaFx','9988gjPSCJ','_addStyleButton','30aTkRdm','rotateImagesAcordingFlexDirection','style','2750672kjLkUf','20QoWWxK','1494095UYwKNN','value','column-reverse','_toolbar','_addFlexDirectionButton','deg','161fJdppE','value-changed','70302dNUFSf','column','forEach','getById','addEventListener','329661UMFlyY','querySelectorAll','refresh','rotate','163uYpYGb','flex-direction','extend','flex-wrap','justify-content'];a=function(){return n;};return a();}const j=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1a7))/0x1+parseInt(h(0x19e))/0x2*(parseInt(h(0x1b2))/0x3)+parseInt(h(0x1af))/0x4*(-parseInt(h(0x1b7))/0x5)+-parseInt(h(0x1ac))/0x6*(-parseInt(h(0x19c))/0x7)+-parseInt(h(0x1b5))/0x8+-parseInt(h(0x1a3))/0x9*(parseInt(h(0x1b6))/0xa)+parseInt(h(0x1b0))/0xb*(parseInt(h(0x1ad))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2fbdf));function b(c,d){c=c-0x19c;const e=a();let f=e[c];return f;}import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../Constants.js';import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';export class FlexToolbarExtension extends BasicStackedToolbarExtension{static ['template']=html`
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
  `;constructor(c,d,e){super(c,d,e),this['_size']['width']=0x271;}['extend'](c,d){const i=b;super[i(0x1a9)](c,d),this[i(0x1bb)](),this['_addStyleButton'](i(0x1aa)),this[i(0x1b1)](i(0x1ae)),this[i(0x1b1)](i(0x1ab)),this[i(0x1b1)]('align-items'),this[i(0x1a5)](c,d);}[j(0x1bb)](){const k=j,c=getComputedStyle(this['extendedItem']['element']),d=this['_toolbar']['getById'](k(0x1a8));d[k(0x1a2)](k(0x19d),async()=>{const l=k;await this['extendedItem']['updateStyleInSheetOrLocalAsync']('flex-direction',d[l(0x1b8)]),this[l(0x1b3)](d['value']);}),d['value']=c[k(0x1a8)],this[k(0x1b3)](d[k(0x1b8)]);}[j(0x1b3)](c){const m=j;let d=0x0;if(c==m(0x19f)||c==m(0x1b9))d=-0x5a;this['_toolbar'][m(0x1a1)]('flex-wrap')[m(0x1a4)]('img')[m(0x1a0)](e=>e[m(0x1b4)][m(0x1a6)]=d+m(0x1bc)),this[m(0x1ba)][m(0x1a1)]('align-content')['querySelectorAll']('img')['forEach'](e=>e['style']['rotate']=d+'deg'),this['_toolbar']['getById'](m(0x1ab))[m(0x1a4)]('img')['forEach'](e=>e['style']['rotate']=d+'deg'),this['_toolbar'][m(0x1a1)]('align-items')['querySelectorAll']('img:nth-child(-n+4)')['forEach'](e=>e[m(0x1b4)]['rotate']=d+m(0x1bc));}}
const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1c7))/0x1+-parseInt(h(0x1bf))/0x2+parseInt(h(0x1d1))/0x3*(-parseInt(h(0x1c3))/0x4)+parseInt(h(0x1d2))/0x5+parseInt(h(0x1c0))/0x6+parseInt(h(0x1c8))/0x7+parseInt(h(0x1ba))/0x8*(parseInt(h(0x1b4))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc3624));import{html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x1b4;const e=a();let f=e[c];return f;}import{assetsPath}from'../../../../../Constants.js';import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';export class FlexToolbarExtension extends BasicStackedToolbarExtension{static ['template']=html`
    <div style="height: 100%; width: 100%;">
      ${BasicStackedToolbarExtension[i(0x1be)]}
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
  `;constructor(c,d,e){const j=i;super(c,d,e),this[j(0x1cf)][j(0x1b9)]=0x271;}['extend'](c,d){const k=i;super[k(0x1d4)](c,d),this[k(0x1d5)](),this['_addStyleButton']('flex-wrap'),this[k(0x1d3)](k(0x1cb)),this['_addStyleButton']('justify-content'),this['_addStyleButton']('align-items'),this[k(0x1c2)](c,d);}['_addFlexDirectionButton'](){const l=i,c=getComputedStyle(this[l(0x1bd)][l(0x1cd)]),d=this['_toolbar'][l(0x1b6)](l(0x1c9));d[l(0x1c4)]('value-changed',async()=>{const m=l;await this['extendedItem']['updateStyleInSheetOrLocalAsync'](m(0x1c9),d[m(0x1b7)]),this['rotateImagesAcordingFlexDirection'](d['value']);}),d[l(0x1b7)]=c['flex-direction'],this[l(0x1bc)](d[l(0x1b7)]);}['rotateImagesAcordingFlexDirection'](c){const n=i;let d=0x0;if(c=='column'||c==n(0x1ca))d=-0x5a;this[n(0x1d0)][n(0x1b6)](n(0x1ce))[n(0x1b5)]('img')[n(0x1b8)](e=>e[n(0x1cc)]['rotate']=d+n(0x1c5)),this[n(0x1d0)][n(0x1b6)](n(0x1cb))[n(0x1b5)]('img')['forEach'](e=>e['style'][n(0x1c1)]=d+'deg'),this[n(0x1d0)][n(0x1b6)](n(0x1bb))[n(0x1b5)]('img')[n(0x1b8)](e=>e['style']['rotate']=d+n(0x1c5)),this[n(0x1d0)][n(0x1b6)]('align-items')[n(0x1b5)](n(0x1c6))[n(0x1b8)](e=>e[n(0x1cc)][n(0x1c1)]=d+n(0x1c5));}}function a(){const o=['basicTemplate','2952068IOGyVq','9227736JVfXbL','rotate','refresh','32JpDhFH','addEventListener','deg','img:nth-child(-n+4)','1480537bYwsVj','8621445hlcwne','flex-direction','column-reverse','align-content','style','element','flex-wrap','_size','_toolbar','272967FQCHrU','512140sZdCyE','_addStyleButton','extend','_addFlexDirectionButton','3628701OXutez','querySelectorAll','getById','value','forEach','width','32sXgJTv','justify-content','rotateImagesAcordingFlexDirection','extendedItem'];a=function(){return o;};return a();}
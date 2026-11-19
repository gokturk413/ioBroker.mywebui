const i=b;function b(c,d){c=c-0x19f;const e=a();let f=e[c];return f;}function a(){const o=['extendedItem','column','getById','_addFlexDirectionButton','value-changed','flex-direction','_toolbar','basicTemplate','value','4Hdeqon','888006naliIo','addEventListener','querySelectorAll','_addStyleButton','4158PgVWDr','img','style','3025190AOynCB','rotateImagesAcordingFlexDirection','refresh','column-reverse','align-items','41810cGySVM','justify-content','8bSiclX','img:nth-child(-n+4)','align-content','5545296mDskoJ','deg','419494OgzFXU','forEach','371553uIfmen','30yzfHjg','_size','rotate','1497460ukLmju'];a=function(){return o;};return a();}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x1af))/0x1+parseInt(h(0x1b5))/0x2+-parseInt(h(0x1b1))/0x3*(parseInt(h(0x1bf))/0x4)+parseInt(h(0x1b2))/0x5*(-parseInt(h(0x1c0))/0x6)+-parseInt(h(0x1a3))/0x7*(parseInt(h(0x1aa))/0x8)+-parseInt(h(0x1ad))/0x9+parseInt(h(0x1a8))/0xa*(parseInt(h(0x1a0))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa8157));import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../Constants.js';import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';export class FlexToolbarExtension extends BasicStackedToolbarExtension{static ['template']=html`
    <div style="height: 100%; width: 100%;">
      ${BasicStackedToolbarExtension[i(0x1bd)]}
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
  `;constructor(c,d,e){const j=i;super(c,d,e),this[j(0x1b3)]['width']=0x271;}['extend'](c,d){const k=i;super['extend'](c,d),this['_addFlexDirectionButton'](),this['_addStyleButton']('flex-wrap'),this['_addStyleButton'](k(0x1ac)),this['_addStyleButton']('justify-content'),this[k(0x19f)](k(0x1a7)),this[k(0x1a5)](c,d);}[i(0x1b9)](){const l=i,c=getComputedStyle(this[l(0x1b6)]['element']),d=this['_toolbar'][l(0x1b8)](l(0x1bb));d[l(0x1c1)](l(0x1ba),async()=>{const m=l;await this['extendedItem']['updateStyleInSheetOrLocalAsync']('flex-direction',d['value']),this['rotateImagesAcordingFlexDirection'](d[m(0x1be)]);}),d[l(0x1be)]=c['flex-direction'],this[l(0x1a4)](d[l(0x1be)]);}[i(0x1a4)](c){const n=i;let d=0x0;if(c==n(0x1b7)||c==n(0x1a6))d=-0x5a;this['_toolbar'][n(0x1b8)]('flex-wrap')['querySelectorAll']('img')['forEach'](e=>e[n(0x1a2)]['rotate']=d+'deg'),this[n(0x1bc)]['getById']('align-content')['querySelectorAll'](n(0x1a1))[n(0x1b0)](e=>e[n(0x1a2)][n(0x1b4)]=d+'deg'),this[n(0x1bc)]['getById'](n(0x1a9))['querySelectorAll'](n(0x1a1))[n(0x1b0)](e=>e[n(0x1a2)][n(0x1b4)]=d+n(0x1ae)),this[n(0x1bc)][n(0x1b8)]('align-items')[n(0x1c2)](n(0x1ab))['forEach'](e=>e[n(0x1a2)]['rotate']=d+'deg');}}
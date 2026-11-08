const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x90))/0x1+-parseInt(h(0x91))/0x2+-parseInt(h(0x89))/0x3*(parseInt(h(0x7a))/0x4)+-parseInt(h(0x92))/0x5*(parseInt(h(0x77))/0x6)+-parseInt(h(0x82))/0x7*(parseInt(h(0x96))/0x8)+-parseInt(h(0x95))/0x9*(-parseInt(h(0x9b))/0xa)+parseInt(h(0x8f))/0xb*(parseInt(h(0x8e))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3760b));import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../Constants.js';function b(c,d){c=c-0x76;const e=a();let f=e[c];return f;}function a(){const o=['template','align-content','55680gsWkuF','style','6PffEOU','align-items','flex-direction','3044mWjKMK','flex-wrap','updateStyleInSheetOrLocalAsync','rotate','extend','_addStyleButton','justify-content','img','7MLqwvO','forEach','value','addEventListener','querySelectorAll','_size','extendedItem','1677tbwsLg','refresh','deg','column','getById','10933980OWJlSn','11XcRoJZ','17737NDRXSq','173668zjrONO','299455agRHCa','column-reverse','_toolbar','495gLHwrI','3205736uHrWUd','rotateImagesAcordingFlexDirection','basicTemplate'];a=function(){return o;};return a();}import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';export class FlexToolbarExtension extends BasicStackedToolbarExtension{static [i(0x99)]=html`
    <div style="height: 100%; width: 100%;">
      ${BasicStackedToolbarExtension[i(0x98)]}
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
  `;constructor(c,d,e){const j=i;super(c,d,e),this[j(0x87)]['width']=0x271;}['extend'](c,d){const k=i;super[k(0x7e)](c,d),this['_addFlexDirectionButton'](),this[k(0x7f)](k(0x7b)),this[k(0x7f)](k(0x9a)),this['_addStyleButton']('justify-content'),this['_addStyleButton'](k(0x78)),this[k(0x8a)](c,d);}['_addFlexDirectionButton'](){const l=i,c=getComputedStyle(this['extendedItem']['element']),d=this[l(0x94)][l(0x8d)](l(0x79));d[l(0x85)]('value-changed',async()=>{const m=l;await this[m(0x88)][m(0x7c)](m(0x79),d[m(0x84)]),this[m(0x97)](d[m(0x84)]);}),d[l(0x84)]=c['flex-direction'],this['rotateImagesAcordingFlexDirection'](d[l(0x84)]);}['rotateImagesAcordingFlexDirection'](c){const n=i;let d=0x0;if(c==n(0x8c)||c==n(0x93))d=-0x5a;this['_toolbar']['getById']('flex-wrap')[n(0x86)]('img')[n(0x83)](e=>e[n(0x76)][n(0x7d)]=d+n(0x8b)),this['_toolbar']['getById']('align-content')[n(0x86)](n(0x81))['forEach'](e=>e[n(0x76)][n(0x7d)]=d+'deg'),this['_toolbar'][n(0x8d)](n(0x80))['querySelectorAll'](n(0x81))[n(0x83)](e=>e['style'][n(0x7d)]=d+'deg'),this['_toolbar']['getById']('align-items')[n(0x86)]('img:nth-child(-n+4)')['forEach'](e=>e['style']['rotate']=d+n(0x8b));}}
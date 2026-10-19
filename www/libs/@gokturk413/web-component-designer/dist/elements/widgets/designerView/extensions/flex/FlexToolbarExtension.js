const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x181))/0x1+parseInt(h(0x182))/0x2+-parseInt(h(0x183))/0x3*(parseInt(h(0x180))/0x4)+parseInt(h(0x179))/0x5+parseInt(h(0x194))/0x6*(parseInt(h(0x185))/0x7)+-parseInt(h(0x177))/0x8*(-parseInt(h(0x17b))/0x9)+-parseInt(h(0x193))/0xa*(parseInt(h(0x17c))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x800b6));import{html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x177;const e=a();let f=e[c];return f;}function a(){const n=['getById','column','justify-content','column-reverse','forEach','_toolbar','deg','img','extend','extendedItem','rotateImagesAcordingFlexDirection','10830770Khxcle','4146DjmIlQ','24QZlGXy','value','3348105ZlOKDI','flex-direction','2164329dherwV','11TygKYV','style','updateStyleInSheetOrLocalAsync','rotate','156DUEPlM','99463PhPhkU','941444GdBEdG','43845orJwXD','flex-wrap','2191lDVVuN','align-items','template'];a=function(){return n;};return a();}import{assetsPath}from'../../../../../Constants.js';import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';export class FlexToolbarExtension extends BasicStackedToolbarExtension{static [i(0x187)]=html`
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
  `;constructor(c,d,e){super(c,d,e),this['_size']['width']=0x271;}[i(0x190)](c,d){const j=i;super[j(0x190)](c,d),this['_addFlexDirectionButton'](),this['_addStyleButton'](j(0x184)),this['_addStyleButton']('align-content'),this['_addStyleButton'](j(0x18a)),this['_addStyleButton'](j(0x186)),this['refresh'](c,d);}['_addFlexDirectionButton'](){const k=i,c=getComputedStyle(this[k(0x191)]['element']),d=this['_toolbar'][k(0x188)](k(0x17a));d['addEventListener']('value-changed',async()=>{const l=k;await this[l(0x191)][l(0x17e)]('flex-direction',d[l(0x178)]),this['rotateImagesAcordingFlexDirection'](d[l(0x178)]);}),d[k(0x178)]=c['flex-direction'],this[k(0x192)](d[k(0x178)]);}[i(0x192)](c){const m=i;let d=0x0;if(c==m(0x189)||c==m(0x18b))d=-0x5a;this[m(0x18d)][m(0x188)]('flex-wrap')['querySelectorAll'](m(0x18f))[m(0x18c)](e=>e['style'][m(0x17f)]=d+'deg'),this[m(0x18d)]['getById']('align-content')['querySelectorAll']('img')['forEach'](e=>e['style']['rotate']=d+'deg'),this[m(0x18d)]['getById'](m(0x18a))['querySelectorAll']('img')['forEach'](e=>e[m(0x17d)]['rotate']=d+m(0x18e)),this['_toolbar']['getById'](m(0x186))['querySelectorAll']('img:nth-child(-n+4)')[m(0x18c)](e=>e['style']['rotate']=d+'deg');}}
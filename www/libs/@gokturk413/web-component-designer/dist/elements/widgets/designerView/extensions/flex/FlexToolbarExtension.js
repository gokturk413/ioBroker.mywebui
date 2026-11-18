const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x14e))/0x1+parseInt(h(0x15c))/0x2*(parseInt(h(0x146))/0x3)+-parseInt(h(0x143))/0x4*(parseInt(h(0x155))/0x5)+-parseInt(h(0x15b))/0x6*(-parseInt(h(0x154))/0x7)+parseInt(h(0x160))/0x8+parseInt(h(0x14f))/0x9*(-parseInt(h(0x151))/0xa)+parseInt(h(0x145))/0xb*(parseInt(h(0x15e))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x22d5c));import{html}from'@node-projects/base-custom-webcomponent';function a(){const o=['value','10348gHVUiQ','element','69465YvMwgp','3uUsHqM','deg','align-items','img','flex-wrap','width','forEach','column-reverse','130910VcPPyG','2131317tjCHgI','addEventListener','10IHDPjf','_addStyleButton','_addFlexDirectionButton','35686AViWNP','230GPOAgR','getById','extend','flex-direction','template','style','18cYVceF','21418ZPHVZH','updateStyleInSheetOrLocalAsync','720ZQGXfC','_toolbar','1796048MVPUJZ','rotate','align-content','querySelectorAll'];a=function(){return o;};return a();}import{assetsPath}from'../../../../../Constants.js';function b(c,d){c=c-0x141;const e=a();let f=e[c];return f;}import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';export class FlexToolbarExtension extends BasicStackedToolbarExtension{static [i(0x159)]=html`
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
  `;constructor(c,d,e){const j=i;super(c,d,e),this['_size'][j(0x14b)]=0x271;}[i(0x157)](c,d){const k=i;super['extend'](c,d),this['_addFlexDirectionButton'](),this['_addStyleButton']('flex-wrap'),this[k(0x152)](k(0x162)),this['_addStyleButton']('justify-content'),this['_addStyleButton'](k(0x148)),this['refresh'](c,d);}[i(0x153)](){const l=i,c=getComputedStyle(this['extendedItem'][l(0x144)]),d=this[l(0x15f)]['getById'](l(0x158));d[l(0x150)]('value-changed',async()=>{const m=l;await this['extendedItem'][m(0x15d)]('flex-direction',d['value']),this['rotateImagesAcordingFlexDirection'](d[m(0x142)]);}),d[l(0x142)]=c[l(0x158)],this['rotateImagesAcordingFlexDirection'](d[l(0x142)]);}['rotateImagesAcordingFlexDirection'](c){const n=i;let d=0x0;if(c=='column'||c==n(0x14d))d=-0x5a;this['_toolbar']['getById'](n(0x14a))['querySelectorAll']('img')['forEach'](e=>e[n(0x15a)]['rotate']=d+n(0x147)),this[n(0x15f)][n(0x156)](n(0x162))[n(0x141)](n(0x149))[n(0x14c)](e=>e['style'][n(0x161)]=d+n(0x147)),this[n(0x15f)]['getById']('justify-content')['querySelectorAll']('img')[n(0x14c)](e=>e[n(0x15a)]['rotate']=d+'deg'),this[n(0x15f)]['getById'](n(0x148))[n(0x141)]('img:nth-child(-n+4)')[n(0x14c)](e=>e['style'][n(0x161)]=d+'deg');}}
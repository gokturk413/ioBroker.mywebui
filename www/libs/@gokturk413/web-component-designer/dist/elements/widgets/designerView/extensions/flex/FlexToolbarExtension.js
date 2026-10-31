const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x176))/0x1*(parseInt(h(0x182))/0x2)+-parseInt(h(0x189))/0x3*(-parseInt(h(0x172))/0x4)+parseInt(h(0x185))/0x5+parseInt(h(0x16f))/0x6*(parseInt(h(0x183))/0x7)+parseInt(h(0x188))/0x8+parseInt(h(0x16e))/0x9*(-parseInt(h(0x17d))/0xa)+-parseInt(h(0x179))/0xb*(parseInt(h(0x18c))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3adaa));function b(c,d){c=c-0x16e;const e=a();let f=e[c];return f;}import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../Constants.js';import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';function a(){const n=['value','flex-direction','forEach','237358hixxFR','rotate','element','11sNEBlA','align-items','template','_toolbar','295570qRLppU','deg','justify-content','_addStyleButton','refresh','2SSAGJM','7sBljet','getById','2278370gJvIig','extend','flex-wrap','1529688UvYojz','1497ZxLNNG','style','img','8618436xMvbDz','_addFlexDirectionButton','extendedItem','63HHUUhA','1586760uokxuX','rotateImagesAcordingFlexDirection','querySelectorAll','140DaSIYu'];a=function(){return n;};return a();}export class FlexToolbarExtension extends BasicStackedToolbarExtension{static [i(0x17b)]=html`
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
  `;constructor(c,d,e){super(c,d,e),this['_size']['width']=0x271;}[i(0x186)](c,d){const j=i;super[j(0x186)](c,d),this[j(0x18d)](),this[j(0x180)](j(0x187)),this['_addStyleButton']('align-content'),this[j(0x180)]('justify-content'),this[j(0x180)](j(0x17a)),this[j(0x181)](c,d);}['_addFlexDirectionButton'](){const k=i,c=getComputedStyle(this['extendedItem'][k(0x178)]),d=this['_toolbar'][k(0x184)](k(0x174));d['addEventListener']('value-changed',async()=>{const l=k;await this[l(0x18e)]['updateStyleInSheetOrLocalAsync'](l(0x174),d[l(0x173)]),this[l(0x170)](d[l(0x173)]);}),d['value']=c['flex-direction'],this[k(0x170)](d[k(0x173)]);}['rotateImagesAcordingFlexDirection'](c){const m=i;let d=0x0;if(c=='column'||c=='column-reverse')d=-0x5a;this['_toolbar'][m(0x184)]('flex-wrap')['querySelectorAll'](m(0x18b))[m(0x175)](e=>e[m(0x18a)][m(0x177)]=d+'deg'),this['_toolbar']['getById']('align-content')['querySelectorAll']('img')['forEach'](e=>e['style']['rotate']=d+m(0x17e)),this['_toolbar'][m(0x184)](m(0x17f))[m(0x171)]('img')[m(0x175)](e=>e[m(0x18a)]['rotate']=d+m(0x17e)),this[m(0x17c)]['getById'](m(0x17a))[m(0x171)]('img:nth-child(-n+4)')[m(0x175)](e=>e[m(0x18a)][m(0x177)]=d+'deg');}}
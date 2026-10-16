function b(c,d){c=c-0x1c0;const e=a();let f=e[c];return f;}const m=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x1d9))/0x1+parseInt(h(0x1c0))/0x2+parseInt(h(0x1d3))/0x3*(parseInt(h(0x1c9))/0x4)+-parseInt(h(0x1c7))/0x5*(-parseInt(h(0x1c8))/0x6)+-parseInt(h(0x1ca))/0x7+parseInt(h(0x1cf))/0x8*(-parseInt(h(0x1c3))/0x9)+-parseInt(h(0x1d6))/0xa*(parseInt(h(0x1de))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2feb9));import{html}from'@node-projects/base-custom-webcomponent';function a(){const o=['195156VbqfCN','deg','querySelectorAll','3158568AMbXST','value','extendedItem','getById','656065SmkaiC','12sfoPSG','4HDONnK','627354xLnTRt','style','align-content','align-items','_addStyleButton','8Lwgwcm','flex-wrap','_addFlexDirectionButton','rotate','448752eapKTO','justify-content','extend','96210EDTrEP','_size','_toolbar','175372MZBpQL','forEach','rotateImagesAcordingFlexDirection','addEventListener','column','55FoFZQE','img','value-changed','img:nth-child(-n+4)'];a=function(){return o;};return a();}import{assetsPath}from'../../../../../Constants.js';import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';export class FlexToolbarExtension extends BasicStackedToolbarExtension{static ['template']=html`
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
  `;constructor(c,d,e){const i=b;super(c,d,e),this[i(0x1d7)]['width']=0x271;}['extend'](c,d){const j=b;super[j(0x1d5)](c,d),this[j(0x1d1)](),this['_addStyleButton']('flex-wrap'),this[j(0x1ce)](j(0x1cc)),this['_addStyleButton']('justify-content'),this['_addStyleButton']('align-items'),this['refresh'](c,d);}['_addFlexDirectionButton'](){const k=b,c=getComputedStyle(this[k(0x1c5)]['element']),d=this['_toolbar']['getById']('flex-direction');d[k(0x1dc)](k(0x1e0),async()=>{const l=k;await this['extendedItem']['updateStyleInSheetOrLocalAsync']('flex-direction',d[l(0x1c4)]),this['rotateImagesAcordingFlexDirection'](d['value']);}),d[k(0x1c4)]=c['flex-direction'],this[k(0x1db)](d[k(0x1c4)]);}[m(0x1db)](c){const n=m;let d=0x0;if(c==n(0x1dd)||c=='column-reverse')d=-0x5a;this[n(0x1d8)][n(0x1c6)](n(0x1d0))['querySelectorAll'](n(0x1df))[n(0x1da)](e=>e[n(0x1cb)][n(0x1d2)]=d+n(0x1c1)),this[n(0x1d8)][n(0x1c6)]('align-content')[n(0x1c2)]('img')[n(0x1da)](e=>e['style']['rotate']=d+'deg'),this['_toolbar'][n(0x1c6)](n(0x1d4))[n(0x1c2)](n(0x1df))['forEach'](e=>e[n(0x1cb)][n(0x1d2)]=d+n(0x1c1)),this['_toolbar']['getById'](n(0x1cd))['querySelectorAll'](n(0x1e1))[n(0x1da)](e=>e['style'][n(0x1d2)]=d+n(0x1c1));}}
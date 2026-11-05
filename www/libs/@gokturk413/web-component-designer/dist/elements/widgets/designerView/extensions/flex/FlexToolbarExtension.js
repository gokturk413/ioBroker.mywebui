const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xa7))/0x1+parseInt(h(0xbb))/0x2+parseInt(h(0xaa))/0x3+parseInt(h(0xac))/0x4*(-parseInt(h(0xab))/0x5)+parseInt(h(0xa3))/0x6*(parseInt(h(0xb1))/0x7)+parseInt(h(0xb5))/0x8*(parseInt(h(0xad))/0x9)+-parseInt(h(0xbc))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xce170));import{html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x9f;const e=a();let f=e[c];return f;}import{assetsPath}from'../../../../../Constants.js';function a(){const o=['justify-content','_addFlexDirectionButton','basicTemplate','6hXlmUS','querySelectorAll','flex-wrap','style','1185025PKzALa','_size','align-content','4593312MCQJlQ','135715bSDdfp','120XcIjPn','18KCNFVG','rotateImagesAcordingFlexDirection','_toolbar','forEach','8044099DNBwgN','value','element','column','533552BJCBLG','extend','img','getById','_addStyleButton','deg','2822898acIgKg','13816390ueeLfn','extendedItem','addEventListener'];a=function(){return o;};return a();}import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';export class FlexToolbarExtension extends BasicStackedToolbarExtension{static ['template']=html`
    <div style="height: 100%; width: 100%;">
      ${BasicStackedToolbarExtension[i(0xa2)]}
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
  `;constructor(c,d,e){const j=i;super(c,d,e),this[j(0xa8)]['width']=0x271;}[i(0xb6)](c,d){const k=i;super['extend'](c,d),this[k(0xa1)](),this[k(0xb9)]('flex-wrap'),this[k(0xb9)](k(0xa9)),this['_addStyleButton'](k(0xa0)),this['_addStyleButton']('align-items'),this['refresh'](c,d);}[i(0xa1)](){const l=i,c=getComputedStyle(this[l(0xbd)][l(0xb3)]),d=this['_toolbar']['getById']('flex-direction');d[l(0x9f)]('value-changed',async()=>{const m=l;await this['extendedItem']['updateStyleInSheetOrLocalAsync']('flex-direction',d['value']),this['rotateImagesAcordingFlexDirection'](d[m(0xb2)]);}),d['value']=c['flex-direction'],this['rotateImagesAcordingFlexDirection'](d['value']);}[i(0xae)](c){const n=i;let d=0x0;if(c==n(0xb4)||c=='column-reverse')d=-0x5a;this[n(0xaf)]['getById'](n(0xa5))[n(0xa4)]('img')[n(0xb0)](e=>e[n(0xa6)]['rotate']=d+'deg'),this[n(0xaf)][n(0xb8)]('align-content')[n(0xa4)]('img')[n(0xb0)](e=>e['style']['rotate']=d+'deg'),this['_toolbar']['getById']('justify-content')[n(0xa4)](n(0xb7))[n(0xb0)](e=>e['style']['rotate']=d+'deg'),this[n(0xaf)]['getById']('align-items')['querySelectorAll']('img:nth-child(-n+4)')[n(0xb0)](e=>e[n(0xa6)]['rotate']=d+n(0xba));}}
const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xa1))/0x1+parseInt(h(0x8b))/0x2*(-parseInt(h(0x96))/0x3)+-parseInt(h(0xa2))/0x4*(parseInt(h(0x9a))/0x5)+-parseInt(h(0x85))/0x6+-parseInt(h(0x8a))/0x7*(parseInt(h(0x94))/0x8)+-parseInt(h(0x9b))/0x9*(parseInt(h(0x8d))/0xa)+parseInt(h(0xa0))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb0a7e));import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../Constants.js';function b(c,d){c=c-0x82;const e=a();let f=e[c];return f;}import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';function a(){const o=['9tqDjaV','width','value','align-items','extendedItem','50447232BRcyqn','642707jLDMjL','2096MQhVHv','refresh','style','_addStyleButton','querySelectorAll','4726020nJJcka','img','column','getById','flex-wrap','938TFPKpd','1321072oAfQin','align-content','6217570vkcxUQ','column-reverse','rotateImagesAcordingFlexDirection','forEach','justify-content','template','extend','63424JLfZXE','deg','3xdTWrZ','_size','_toolbar','rotate','835UCwirc'];a=function(){return o;};return a();}export class FlexToolbarExtension extends BasicStackedToolbarExtension{static [i(0x92)]=html`
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
  `;constructor(c,d,e){const j=i;super(c,d,e),this[j(0x97)][j(0x9c)]=0x271;}[i(0x93)](c,d){const k=i;super[k(0x93)](c,d),this['_addFlexDirectionButton'](),this[k(0x83)]('flex-wrap'),this[k(0x83)](k(0x8c)),this['_addStyleButton'](k(0x91)),this[k(0x83)](k(0x9e)),this[k(0xa3)](c,d);}['_addFlexDirectionButton'](){const l=i,c=getComputedStyle(this[l(0x9f)]['element']),d=this[l(0x98)]['getById']('flex-direction');d['addEventListener']('value-changed',async()=>{const m=l;await this['extendedItem']['updateStyleInSheetOrLocalAsync']('flex-direction',d['value']),this['rotateImagesAcordingFlexDirection'](d[m(0x9d)]);}),d['value']=c['flex-direction'],this[l(0x8f)](d['value']);}['rotateImagesAcordingFlexDirection'](c){const n=i;let d=0x0;if(c==n(0x87)||c==n(0x8e))d=-0x5a;this['_toolbar'][n(0x88)](n(0x89))[n(0x84)](n(0x86))['forEach'](e=>e[n(0x82)]['rotate']=d+'deg'),this[n(0x98)]['getById'](n(0x8c))[n(0x84)]('img')[n(0x90)](e=>e['style']['rotate']=d+n(0x95)),this['_toolbar'][n(0x88)](n(0x91))[n(0x84)](n(0x86))[n(0x90)](e=>e['style'][n(0x99)]=d+n(0x95)),this[n(0x98)]['getById']('align-items')['querySelectorAll']('img:nth-child(-n+4)')[n(0x90)](e=>e['style'][n(0x99)]=d+n(0x95));}}
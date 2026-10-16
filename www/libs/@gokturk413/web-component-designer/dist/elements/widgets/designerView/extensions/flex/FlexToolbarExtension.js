const i=b;function b(c,d){c=c-0xb0;const e=a();let f=e[c];return f;}function a(){const o=['align-content','26306kQAkRa','_toolbar','8dGFpIG','updateStyleInSheetOrLocalAsync','rotateImagesAcordingFlexDirection','rotate','refresh','value','align-items','_addStyleButton','extend','width','img:nth-child(-n+4)','getById','952286zIbGDv','deg','template','53169prCmCS','justify-content','3239604iQHmwl','1476wCbEGp','7799013uiQDKH','extendedItem','forEach','42370OkLpRU','flex-wrap','1184440pkAVQS','3uOACyr','img','flex-direction','column','querySelectorAll','1661bIWBHb','basicTemplate','style'];a=function(){return o;};return a();}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xc6))/0x1+parseInt(h(0xc3))/0x2+-parseInt(h(0xd0))/0x3*(parseInt(h(0xc8))/0x4)+-parseInt(h(0xcf))/0x5+parseInt(h(0xc9))/0x6*(parseInt(h(0xb5))/0x7)+-parseInt(h(0xb7))/0x8*(-parseInt(h(0xca))/0x9)+parseInt(h(0xcd))/0xa*(-parseInt(h(0xb1))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9aba1));import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../Constants.js';import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';export class FlexToolbarExtension extends BasicStackedToolbarExtension{static [i(0xc5)]=html`
    <div style="height: 100%; width: 100%;">
      ${BasicStackedToolbarExtension[i(0xb2)]}
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
  `;constructor(c,d,e){const j=i;super(c,d,e),this['_size'][j(0xc0)]=0x271;}['extend'](c,d){const k=i;super[k(0xbf)](c,d),this['_addFlexDirectionButton'](),this['_addStyleButton'](k(0xce)),this[k(0xbe)](k(0xb4)),this[k(0xbe)](k(0xc7)),this['_addStyleButton'](k(0xbd)),this[k(0xbb)](c,d);}['_addFlexDirectionButton'](){const l=i,c=getComputedStyle(this[l(0xcb)]['element']),d=this['_toolbar'][l(0xc2)](l(0xd2));d['addEventListener']('value-changed',async()=>{const m=l;await this['extendedItem'][m(0xb8)](m(0xd2),d['value']),this['rotateImagesAcordingFlexDirection'](d['value']);}),d[l(0xbc)]=c[l(0xd2)],this['rotateImagesAcordingFlexDirection'](d[l(0xbc)]);}[i(0xb9)](c){const n=i;let d=0x0;if(c==n(0xd3)||c=='column-reverse')d=-0x5a;this[n(0xb6)]['getById'](n(0xce))['querySelectorAll']('img')[n(0xcc)](e=>e['style'][n(0xba)]=d+n(0xc4)),this[n(0xb6)]['getById'](n(0xb4))[n(0xb0)](n(0xd1))[n(0xcc)](e=>e[n(0xb3)][n(0xba)]=d+n(0xc4)),this[n(0xb6)][n(0xc2)](n(0xc7))['querySelectorAll']('img')[n(0xcc)](e=>e[n(0xb3)][n(0xba)]=d+n(0xc4)),this['_toolbar'][n(0xc2)]('align-items')[n(0xb0)](n(0xc1))['forEach'](e=>e['style']['rotate']=d+n(0xc4));}}
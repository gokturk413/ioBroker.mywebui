function a(){const o=['querySelectorAll','getById','flex-direction','justify-content','extend','_addStyleButton','value-changed','920392dRLxki','4598442MXtyUj','rotate','_toolbar','deg','5TSgJAa','_size','align-items','522870yInFhc','243576YhGSmv','441492jRSKXD','2648472EyoZmC','forEach','style','value','addEventListener','img:nth-child(-n+4)','7GqooXw','_addFlexDirectionButton','rotateImagesAcordingFlexDirection','594993LCKsUD','basicTemplate'];a=function(){return o;};return a();}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1f0))/0x1+-parseInt(h(0x1ef))/0x2+parseInt(h(0x1fb))/0x3+parseInt(h(0x1e7))/0x4+-parseInt(h(0x1ec))/0x5*(-parseInt(h(0x1f1))/0x6)+-parseInt(h(0x1f8))/0x7*(parseInt(h(0x1f2))/0x8)+parseInt(h(0x1e8))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2b2ef));import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../Constants.js';function b(c,d){c=c-0x1e0;const e=a();let f=e[c];return f;}import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';export class FlexToolbarExtension extends BasicStackedToolbarExtension{static ['template']=html`
    <div style="height: 100%; width: 100%;">
      ${BasicStackedToolbarExtension[i(0x1fc)]}
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
  `;constructor(c,d,e){const j=i;super(c,d,e),this[j(0x1ed)]['width']=0x271;}['extend'](c,d){const k=i;super[k(0x1e4)](c,d),this[k(0x1f9)](),this[k(0x1e5)]('flex-wrap'),this[k(0x1e5)]('align-content'),this[k(0x1e5)]('justify-content'),this['_addStyleButton'](k(0x1ee)),this['refresh'](c,d);}[i(0x1f9)](){const l=i,c=getComputedStyle(this['extendedItem']['element']),d=this[l(0x1ea)]['getById']('flex-direction');d[l(0x1f6)](l(0x1e6),async()=>{const m=l;await this['extendedItem']['updateStyleInSheetOrLocalAsync'](m(0x1e2),d[m(0x1f5)]),this[m(0x1fa)](d[m(0x1f5)]);}),d[l(0x1f5)]=c[l(0x1e2)],this[l(0x1fa)](d[l(0x1f5)]);}[i(0x1fa)](c){const n=i;let d=0x0;if(c=='column'||c=='column-reverse')d=-0x5a;this[n(0x1ea)][n(0x1e1)]('flex-wrap')['querySelectorAll']('img')['forEach'](e=>e[n(0x1f4)]['rotate']=d+'deg'),this['_toolbar']['getById']('align-content')[n(0x1e0)]('img')['forEach'](e=>e['style'][n(0x1e9)]=d+'deg'),this[n(0x1ea)]['getById'](n(0x1e3))[n(0x1e0)]('img')[n(0x1f3)](e=>e[n(0x1f4)]['rotate']=d+'deg'),this[n(0x1ea)]['getById'](n(0x1ee))[n(0x1e0)](n(0x1f7))['forEach'](e=>e[n(0x1f4)][n(0x1e9)]=d+n(0x1eb));}}
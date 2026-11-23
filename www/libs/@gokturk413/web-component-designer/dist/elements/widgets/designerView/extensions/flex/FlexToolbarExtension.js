function a(){const o=['forEach','429525CDZZSb','getById','value','deg','_addStyleButton','rotate','144224fwIUvF','addEventListener','3RijMYP','1760288EPyjwf','value-changed','img','_addFlexDirectionButton','7364093PXfBDJ','4QdrBnw','12uaeFhA','querySelectorAll','refresh','extendedItem','align-content','extend','_toolbar','justify-content','flex-wrap','1081066ProlKj','basicTemplate','3480ChsjxH','1121528CUSWhk','6471dcRHNP','rotateImagesAcordingFlexDirection','updateStyleInSheetOrLocalAsync','_size','flex-direction'];a=function(){return o;};return a();}const i=b;function b(c,d){c=c-0xa2;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xa7))/0x1*(-parseInt(h(0xaf))/0x2)+parseInt(h(0xa9))/0x3*(-parseInt(h(0xbc))/0x4)+parseInt(h(0xc3))/0x5+-parseInt(h(0xb0))/0x6*(-parseInt(h(0xb9))/0x7)+parseInt(h(0xaa))/0x8+-parseInt(h(0xbd))/0x9*(-parseInt(h(0xbb))/0xa)+-parseInt(h(0xae))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x31b70));import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../Constants.js';import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';export class FlexToolbarExtension extends BasicStackedToolbarExtension{static ['template']=html`
    <div style="height: 100%; width: 100%;">
      ${BasicStackedToolbarExtension[i(0xba)]}
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
  `;constructor(c,d,e){const j=i;super(c,d,e),this[j(0xc0)]['width']=0x271;}[i(0xb5)](c,d){const k=i;super[k(0xb5)](c,d),this['_addFlexDirectionButton'](),this['_addStyleButton']('flex-wrap'),this['_addStyleButton']('align-content'),this[k(0xa5)]('justify-content'),this[k(0xa5)]('align-items'),this[k(0xb2)](c,d);}[i(0xad)](){const l=i,c=getComputedStyle(this[l(0xb3)]['element']),d=this['_toolbar']['getById'](l(0xc1));d[l(0xa8)](l(0xab),async()=>{const m=l;await this[m(0xb3)][m(0xbf)](m(0xc1),d['value']),this[m(0xbe)](d[m(0xa3)]);}),d['value']=c[l(0xc1)],this[l(0xbe)](d['value']);}['rotateImagesAcordingFlexDirection'](c){const n=i;let d=0x0;if(c=='column'||c=='column-reverse')d=-0x5a;this[n(0xb6)]['getById'](n(0xb8))[n(0xb1)]('img')['forEach'](e=>e['style']['rotate']=d+'deg'),this[n(0xb6)][n(0xa2)](n(0xb4))[n(0xb1)](n(0xac))[n(0xc2)](e=>e['style']['rotate']=d+n(0xa4)),this[n(0xb6)]['getById'](n(0xb7))['querySelectorAll'](n(0xac))[n(0xc2)](e=>e['style'][n(0xa6)]=d+n(0xa4)),this['_toolbar'][n(0xa2)]('align-items')['querySelectorAll']('img:nth-child(-n+4)')[n(0xc2)](e=>e['style']['rotate']=d+'deg');}}
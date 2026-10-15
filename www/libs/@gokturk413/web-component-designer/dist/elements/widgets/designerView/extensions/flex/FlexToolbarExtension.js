function b(c,d){c=c-0xf8;const e=a();let f=e[c];return f;}const i=b;function a(){const n=['forEach','rotateImagesAcordingFlexDirection','264594dldfjV','rotate','align-content','285801elUESO','img','8385036yRqOBg','value-changed','align-items','flex-wrap','column','766662vcXWoK','column-reverse','extend','1395ZslHzN','refresh','extendedItem','addEventListener','getById','23416aAZaez','52HkQROB','_toolbar','_addStyleButton','value','10HqKogp','deg','3004000ocLuny','4771851yINLWa','template','flex-direction','5OqjnZL'];a=function(){return n;};return a();}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x10f))/0x1*(-parseInt(h(0x112))/0x2)+-parseInt(h(0x115))/0x3*(-parseInt(h(0x105))/0x4)+parseInt(h(0x10b))/0x5+-parseInt(h(0xfc))/0x6+-parseInt(h(0x10c))/0x7+-parseInt(h(0x104))/0x8*(parseInt(h(0xff))/0x9)+-parseInt(h(0x109))/0xa*(-parseInt(h(0x117))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa542b));import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../Constants.js';import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';export class FlexToolbarExtension extends BasicStackedToolbarExtension{static [i(0x10d)]=html`
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
  `;constructor(c,d,e){super(c,d,e),this['_size']['width']=0x271;}['extend'](c,d){const j=i;super[j(0xfe)](c,d),this['_addFlexDirectionButton'](),this[j(0x107)](j(0xfa)),this[j(0x107)]('align-content'),this['_addStyleButton']('justify-content'),this['_addStyleButton']('align-items'),this[j(0x100)](c,d);}['_addFlexDirectionButton'](){const k=i,c=getComputedStyle(this['extendedItem']['element']),d=this['_toolbar']['getById']('flex-direction');d[k(0x102)](k(0xf8),async()=>{const l=k;await this[l(0x101)]['updateStyleInSheetOrLocalAsync']('flex-direction',d[l(0x108)]),this['rotateImagesAcordingFlexDirection'](d['value']);}),d['value']=c[k(0x10e)],this['rotateImagesAcordingFlexDirection'](d[k(0x108)]);}[i(0x111)](c){const m=i;let d=0x0;if(c==m(0xfb)||c==m(0xfd))d=-0x5a;this['_toolbar']['getById'](m(0xfa))['querySelectorAll']('img')['forEach'](e=>e['style'][m(0x113)]=d+m(0x10a)),this[m(0x106)][m(0x103)](m(0x114))['querySelectorAll'](m(0x116))[m(0x110)](e=>e['style'][m(0x113)]=d+'deg'),this['_toolbar']['getById']('justify-content')['querySelectorAll'](m(0x116))[m(0x110)](e=>e['style'][m(0x113)]=d+'deg'),this['_toolbar'][m(0x103)](m(0xf9))['querySelectorAll']('img:nth-child(-n+4)')[m(0x110)](e=>e['style']['rotate']=d+'deg');}}
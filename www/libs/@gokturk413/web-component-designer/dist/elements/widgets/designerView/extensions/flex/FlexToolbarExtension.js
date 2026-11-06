const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x148))/0x1*(parseInt(h(0x141))/0x2)+parseInt(h(0x14f))/0x3+-parseInt(h(0x14e))/0x4+-parseInt(h(0x15c))/0x5+parseInt(h(0x140))/0x6*(-parseInt(h(0x143))/0x7)+parseInt(h(0x14c))/0x8*(-parseInt(h(0x150))/0x9)+-parseInt(h(0x146))/0xa*(-parseInt(h(0x15a))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xca345));import{html}from'@node-projects/base-custom-webcomponent';function a(){const n=['76185BALgdm','basicTemplate','_addStyleButton','style','113560oQWXJd','justify-content','68396GVKhni','2634516shnIZD','657GMfOlw','column','deg','template','img','addEventListener','flex-direction','rotateImagesAcordingFlexDirection','querySelectorAll','element','11ybPfBK','value','2706860CEJtqB','align-items','column-reverse','getById','refresh','30HprvjP','22dLfQOO','extend','1127497JoNTWK','_toolbar','forEach','31881530OAVnyb','rotate'];a=function(){return n;};return a();}import{assetsPath}from'../../../../../Constants.js';function b(c,d){c=c-0x140;const e=a();let f=e[c];return f;}import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';export class FlexToolbarExtension extends BasicStackedToolbarExtension{static [i(0x153)]=html`
    <div style="height: 100%; width: 100%;">
      ${BasicStackedToolbarExtension[i(0x149)]}
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
  `;constructor(c,d,e){super(c,d,e),this['_size']['width']=0x271;}[i(0x142)](c,d){const j=i;super['extend'](c,d),this['_addFlexDirectionButton'](),this[j(0x14a)]('flex-wrap'),this['_addStyleButton']('align-content'),this['_addStyleButton'](j(0x14d)),this[j(0x14a)]('align-items'),this[j(0x160)](c,d);}['_addFlexDirectionButton'](){const k=i,c=getComputedStyle(this['extendedItem'][k(0x159)]),d=this['_toolbar'][k(0x15f)](k(0x156));d[k(0x155)]('value-changed',async()=>{const l=k;await this['extendedItem']['updateStyleInSheetOrLocalAsync']('flex-direction',d[l(0x15b)]),this[l(0x157)](d[l(0x15b)]);}),d['value']=c[k(0x156)],this['rotateImagesAcordingFlexDirection'](d['value']);}[i(0x157)](c){const m=i;let d=0x0;if(c==m(0x151)||c==m(0x15e))d=-0x5a;this['_toolbar'][m(0x15f)]('flex-wrap')['querySelectorAll'](m(0x154))['forEach'](e=>e['style']['rotate']=d+m(0x152)),this[m(0x144)][m(0x15f)]('align-content')[m(0x158)]('img')[m(0x145)](e=>e[m(0x14b)][m(0x147)]=d+'deg'),this['_toolbar']['getById'](m(0x14d))['querySelectorAll'](m(0x154))[m(0x145)](e=>e['style']['rotate']=d+m(0x152)),this['_toolbar']['getById'](m(0x15d))['querySelectorAll']('img:nth-child(-n+4)')[m(0x145)](e=>e['style']['rotate']=d+m(0x152));}}
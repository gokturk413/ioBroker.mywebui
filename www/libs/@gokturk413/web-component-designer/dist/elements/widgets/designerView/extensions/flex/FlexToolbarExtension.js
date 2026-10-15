const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1f4))/0x1*(parseInt(h(0x1d8))/0x2)+parseInt(h(0x1e7))/0x3*(-parseInt(h(0x1e3))/0x4)+parseInt(h(0x1ea))/0x5+parseInt(h(0x1e8))/0x6*(-parseInt(h(0x1dc))/0x7)+-parseInt(h(0x1e6))/0x8*(parseInt(h(0x1f1))/0x9)+-parseInt(h(0x1f7))/0xa*(parseInt(h(0x1f2))/0xb)+-parseInt(h(0x1e5))/0xc*(-parseInt(h(0x1ed))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x281c1));import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../Constants.js';function a(){const m=['_addFlexDirectionButton','_addStyleButton','querySelectorAll','element','4LWehZb','img:nth-child(-n+4)','12iSNFkC','213320CDLdJw','839529ALQllE','2892UuwQKC','extend','1104645uqhxdd','getById','align-items','9097283PSSWho','column-reverse','justify-content','align-content','90hZZmqI','110aCsDHE','style','14saqNka','flex-direction','extendedItem','135910VtCGzm','_toolbar','rotateImagesAcordingFlexDirection','8854JgOOCM','deg','img','forEach','175wFKAam','value','template'];a=function(){return m;};return a();}function b(c,d){c=c-0x1d7;const e=a();let f=e[c];return f;}import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';export class FlexToolbarExtension extends BasicStackedToolbarExtension{static [i(0x1de)]=html`
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
  `;constructor(c,d,e){super(c,d,e),this['_size']['width']=0x271;}[i(0x1e9)](c,d){const j=i;super[j(0x1e9)](c,d),this[j(0x1df)](),this[j(0x1e0)]('flex-wrap'),this[j(0x1e0)](j(0x1f0)),this['_addStyleButton'](j(0x1ef)),this['_addStyleButton'](j(0x1ec)),this['refresh'](c,d);}['_addFlexDirectionButton'](){const k=i,c=getComputedStyle(this[k(0x1f6)][k(0x1e2)]),d=this['_toolbar'][k(0x1eb)]('flex-direction');d['addEventListener']('value-changed',async()=>{await this['extendedItem']['updateStyleInSheetOrLocalAsync']('flex-direction',d['value']),this['rotateImagesAcordingFlexDirection'](d['value']);}),d['value']=c[k(0x1f5)],this['rotateImagesAcordingFlexDirection'](d[k(0x1dd)]);}[i(0x1d7)](c){const l=i;let d=0x0;if(c=='column'||c==l(0x1ee))d=-0x5a;this[l(0x1f8)]['getById']('flex-wrap')['querySelectorAll']('img')[l(0x1db)](e=>e['style']['rotate']=d+l(0x1d9)),this[l(0x1f8)]['getById'](l(0x1f0))[l(0x1e1)](l(0x1da))[l(0x1db)](e=>e['style']['rotate']=d+'deg'),this[l(0x1f8)][l(0x1eb)]('justify-content')[l(0x1e1)]('img')[l(0x1db)](e=>e[l(0x1f3)]['rotate']=d+l(0x1d9)),this[l(0x1f8)]['getById']('align-items')['querySelectorAll'](l(0x1e4))[l(0x1db)](e=>e[l(0x1f3)]['rotate']=d+l(0x1d9));}}
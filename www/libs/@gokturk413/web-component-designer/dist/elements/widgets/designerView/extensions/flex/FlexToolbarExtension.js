const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x77))/0x1+-parseInt(h(0x76))/0x2+parseInt(h(0x69))/0x3+parseInt(h(0x7e))/0x4+parseInt(h(0x6a))/0x5+-parseInt(h(0x7f))/0x6*(parseInt(h(0x7a))/0x7)+parseInt(h(0x68))/0x8*(parseInt(h(0x78))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa3150));import{html}from'@node-projects/base-custom-webcomponent';function a(){const o=['2506386FHxkOg','flex-direction','rotate','img','img:nth-child(-n+4)','extendedItem','value','querySelectorAll','style','element','addEventListener','416zFtAQD','467130QDQfIX','2641300PVGKCY','template','updateStyleInSheetOrLocalAsync','_addFlexDirectionButton','_addStyleButton','width','extend','rotateImagesAcordingFlexDirection','_toolbar','deg','align-content','forEach','1776404toCWeq','441249jQyfHu','264339MUefzR','_size','7dloVlM','getById','column-reverse','flex-wrap','815616jsdeAF'];a=function(){return o;};return a();}import{assetsPath}from'../../../../../Constants.js';function b(c,d){c=c-0x64;const e=a();let f=e[c];return f;}import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';export class FlexToolbarExtension extends BasicStackedToolbarExtension{static [i(0x6b)]=html`
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
  `;constructor(c,d,e){const j=i;super(c,d,e),this[j(0x79)][j(0x6f)]=0x271;}[i(0x70)](c,d){const k=i;super['extend'](c,d),this['_addFlexDirectionButton'](),this[k(0x6e)](k(0x7d)),this[k(0x6e)](k(0x74)),this['_addStyleButton']('justify-content'),this[k(0x6e)]('align-items'),this['refresh'](c,d);}[i(0x6d)](){const l=i,c=getComputedStyle(this[l(0x84)][l(0x66)]),d=this[l(0x72)][l(0x7b)](l(0x80));d[l(0x67)]('value-changed',async()=>{const m=l;await this[m(0x84)][m(0x6c)]('flex-direction',d['value']),this[m(0x71)](d['value']);}),d[l(0x85)]=c[l(0x80)],this[l(0x71)](d['value']);}['rotateImagesAcordingFlexDirection'](c){const n=i;let d=0x0;if(c=='column'||c==n(0x7c))d=-0x5a;this['_toolbar'][n(0x7b)]('flex-wrap')[n(0x64)](n(0x82))[n(0x75)](e=>e['style'][n(0x81)]=d+n(0x73)),this['_toolbar'][n(0x7b)](n(0x74))[n(0x64)]('img')['forEach'](e=>e['style']['rotate']=d+n(0x73)),this['_toolbar'][n(0x7b)]('justify-content')[n(0x64)]('img')['forEach'](e=>e['style']['rotate']=d+'deg'),this['_toolbar'][n(0x7b)]('align-items')[n(0x64)](n(0x83))[n(0x75)](e=>e[n(0x65)][n(0x81)]=d+'deg');}}
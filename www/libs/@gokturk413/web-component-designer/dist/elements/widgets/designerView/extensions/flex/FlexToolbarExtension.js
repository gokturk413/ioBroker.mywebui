const i=b;function b(c,d){c=c-0x150;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x16a))/0x1+parseInt(h(0x159))/0x2*(parseInt(h(0x166))/0x3)+parseInt(h(0x16c))/0x4*(-parseInt(h(0x155))/0x5)+-parseInt(h(0x161))/0x6*(parseInt(h(0x15f))/0x7)+parseInt(h(0x167))/0x8+parseInt(h(0x15c))/0x9+-parseInt(h(0x16e))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x938c9));function a(){const n=['316jXkUFN','value','style','3686706qUdhOq','refresh','justify-content','14lPPRlP','_addFlexDirectionButton','2570916jrXBZI','updateStyleInSheetOrLocalAsync','forEach','_addStyleButton','_toolbar','21486dgYNuN','6897568FpLAur','getById','flex-direction','276489lmZURz','basicTemplate','8YkpAdB','template','2596100syTJcW','align-items','rotate','align-content','deg','extendedItem','querySelectorAll','2397430TskqDa','addEventListener','img:nth-child(-n+4)','column-reverse'];a=function(){return n;};return a();}import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../Constants.js';import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';export class FlexToolbarExtension extends BasicStackedToolbarExtension{static [i(0x16d)]=html`
    <div style="height: 100%; width: 100%;">
      ${BasicStackedToolbarExtension[i(0x16b)]}
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
  `;constructor(c,d,e){super(c,d,e),this['_size']['width']=0x271;}['extend'](c,d){const j=i;super['extend'](c,d),this[j(0x160)](),this['_addStyleButton']('flex-wrap'),this[j(0x164)](j(0x151)),this['_addStyleButton'](j(0x15e)),this['_addStyleButton'](j(0x16f)),this[j(0x15d)](c,d);}['_addFlexDirectionButton'](){const k=i,c=getComputedStyle(this['extendedItem']['element']),d=this['_toolbar']['getById']('flex-direction');d[k(0x156)]('value-changed',async()=>{const l=k;await this[l(0x153)][l(0x162)](l(0x169),d['value']),this['rotateImagesAcordingFlexDirection'](d['value']);}),d[k(0x15a)]=c[k(0x169)],this['rotateImagesAcordingFlexDirection'](d['value']);}['rotateImagesAcordingFlexDirection'](c){const m=i;let d=0x0;if(c=='column'||c==m(0x158))d=-0x5a;this['_toolbar']['getById']('flex-wrap')['querySelectorAll']('img')[m(0x163)](e=>e['style']['rotate']=d+m(0x152)),this[m(0x165)][m(0x168)]('align-content')[m(0x154)]('img')['forEach'](e=>e[m(0x15b)][m(0x150)]=d+m(0x152)),this[m(0x165)][m(0x168)]('justify-content')[m(0x154)]('img')[m(0x163)](e=>e[m(0x15b)]['rotate']=d+m(0x152)),this[m(0x165)][m(0x168)]('align-items')[m(0x154)](m(0x157))[m(0x163)](e=>e[m(0x15b)][m(0x150)]=d+'deg');}}
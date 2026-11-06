function a(){const q=['1475OtmPqD','align-items','grid-template-columns','_size','6gJhQnm','change\x20grid\x20type','split','506686AeEKZE','openGroup','updateStyleInSheetOrLocalAsync','1086772lSPztm','gridTemplateRows','element','1690dpdLiw','grid-template-rows','extendedItem','324168kAcXHk','gridTemplateColumns','repeat(','align-content','custom','value','63lFFkxY','21393jPxzOv','afterbegin','221584lYphKJ','onchange','selectedIndex',',\x201fr)','insertAdjacentElement','justify-content','_addStyleButton','10499885eqyZME','4038CKgoGa','createElement'];a=function(){return q;};return a();}(function(c,d){const m=b,e=c();while(!![]){try{const f=-parseInt(m(0x1e5))/0x1+-parseInt(m(0x1dc))/0x2*(parseInt(m(0x1d9))/0x3)+-parseInt(m(0x1df))/0x4+-parseInt(m(0x1d5))/0x5*(parseInt(m(0x1d3))/0x6)+-parseInt(m(0x1c8))/0x7*(-parseInt(m(0x1cb))/0x8)+-parseInt(m(0x1c9))/0x9*(-parseInt(m(0x1e2))/0xa)+parseInt(m(0x1d2))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4a540));function b(c,d){c=c-0x1c7;const e=a();let f=e[c];return f;}import{html}from'@node-projects/base-custom-webcomponent';import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';import{assetsPath}from'../../../../../Constants.js';export class GridToolbarExtension extends BasicStackedToolbarExtension{static ['template']=html`
    <div style="height: 100%; width: 100%;">
      ${BasicStackedToolbarExtension['basicTemplate']}
      <select title="display" id="gridType" style="pointer-events: auto; height: 24px; width: 60px; padding: 0; margin-right: 10px">
        <option>1x1</option>
        <option>1x16</option>
        <option>2x8</option>
        <option>4x4</option>
        <option>8x2</option>
        <option>16x1</option>
        <option>custom</option>
      </select>
      <node-projects-image-button-list-selector property="align-content" no-value-in-header id="align-content">
        <img title="center" data-value="center" src="${assetsPath}images/chromeDevtools/align-content-center-icon.svg">
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
      <node-projects-image-button-list-selector property="justify-items" no-value-in-header id="justify-items">
        <img title="start" data-value="start" src="${assetsPath}images/chromeDevtools/justify-items-start-icon.svg">
        <img title="center" data-value="center" src="${assetsPath}images/chromeDevtools/justify-items-center-icon.svg">
        <img title="end" data-value="end" src="${assetsPath}images/chromeDevtools/justify-items-end-icon.svg">
        <img title="stretch" data-value="stretch" src="${assetsPath}images/chromeDevtools/justify-items-stretch-icon.svg">
      </node-projects-image-button-list-selector>
    </div>
  `;constructor(c,d,e){const n=b;super(c,d,e),this[n(0x1d8)]['width']=0x270;}['extend'](c,d){const o=b;super['extend'](c,d);const e=getComputedStyle(this['extendedItem'][o(0x1e1)]),f=this['_toolbar']['getById']('gridType');let g=document[o(0x1d4)]('option');g['innerText']=e[o(0x1e6)]['split']('\x20')['length']+'x'+e[o(0x1e0)][o(0x1db)]('\x20')['length'],f[o(0x1cf)](o(0x1ca),g),f[o(0x1cd)]=0x0,f[o(0x1cc)]=async()=>{const p=o;if(f[p(0x1c7)]==p(0x1e9)){const h=prompt('Number\x20of\x20columns?','4');if(!h)return;const i=prompt('Number\x20of\x20rows?','4');if(!i)return;const j=this['extendedItem']['openGroup'](p(0x1da));await this['extendedItem']['updateStyleInSheetOrLocalAsync'](p(0x1d7),'repeat('+h+p(0x1ce)),await this[p(0x1e4)][p(0x1de)](p(0x1e3),p(0x1e7)+i+',\x201fr)'),j['commit']();}else{const k=f['value']['split']('x'),l=this['extendedItem'][p(0x1dd)](p(0x1da));await this[p(0x1e4)]['updateStyleInSheetOrLocalAsync']('grid-template-columns',p(0x1e7)+k[0x0]+p(0x1ce)),await this[p(0x1e4)]['updateStyleInSheetOrLocalAsync']('grid-template-rows',p(0x1e7)+k[0x1]+p(0x1ce)),l['commit']();}},this[o(0x1d1)](o(0x1e8)),this[o(0x1d1)](o(0x1d0)),this[o(0x1d1)](o(0x1d6)),this[o(0x1d1)]('justify-items'),this['refresh'](c,d);}}
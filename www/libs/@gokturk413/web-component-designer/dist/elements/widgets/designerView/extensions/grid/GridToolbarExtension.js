const n=b;function a(){const r=['_addStyleButton','width','option','gridTemplateColumns','template','openGroup','1122792qOsXmB','element','updateStyleInSheetOrLocalAsync','12003TCNYzi','align-content','20683660DCUISr','basicTemplate','500oLxgUU','align-items','393430gplowR','gridTemplateRows','9toPSGO','custom','grid-template-columns','change\x20grid\x20type','onchange','getById','length','split','28hYkKjc','createElement','extendedItem','repeat(','737386ITyMQC','946470tqjvEX','value','2348340iBFweW'];a=function(){return r;};return a();}function b(c,d){c=c-0xbf;const e=a();let f=e[c];return f;}(function(c,d){const m=b,e=c();while(!![]){try{const f=parseInt(m(0xc5))/0x1+parseInt(m(0xd6))/0x2*(parseInt(m(0xd2))/0x3)+-parseInt(m(0xc1))/0x4*(-parseInt(m(0xd8))/0x5)+parseInt(m(0xc8))/0x6+parseInt(m(0xc6))/0x7+parseInt(m(0xcf))/0x8*(-parseInt(m(0xda))/0x9)+-parseInt(m(0xd4))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x94073));import{html}from'@node-projects/base-custom-webcomponent';import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';import{assetsPath}from'../../../../../Constants.js';export class GridToolbarExtension extends BasicStackedToolbarExtension{static [n(0xcd)]=html`
    <div style="height: 100%; width: 100%;">
      ${BasicStackedToolbarExtension[n(0xd5)]}
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
  `;constructor(c,d,e){const o=n;super(c,d,e),this['_size'][o(0xca)]=0x270;}['extend'](c,d){const p=n;super['extend'](c,d);const e=getComputedStyle(this['extendedItem'][p(0xd0)]),f=this['_toolbar'][p(0xdf)]('gridType');let g=document[p(0xc2)](p(0xcb));g['innerText']=e[p(0xcc)][p(0xc0)]('\x20')[p(0xbf)]+'x'+e[p(0xd9)][p(0xc0)]('\x20')[p(0xbf)],f['insertAdjacentElement']('afterbegin',g),f['selectedIndex']=0x0,f[p(0xde)]=async()=>{const q=p;if(f['value']==q(0xdb)){const h=prompt('Number\x20of\x20columns?','4');if(!h)return;const i=prompt('Number\x20of\x20rows?','4');if(!i)return;const j=this['extendedItem'][q(0xce)](q(0xdd));await this['extendedItem']['updateStyleInSheetOrLocalAsync'](q(0xdc),'repeat('+h+',\x201fr)'),await this['extendedItem']['updateStyleInSheetOrLocalAsync']('grid-template-rows','repeat('+i+',\x201fr)'),j['commit']();}else{const k=f[q(0xc7)][q(0xc0)]('x'),l=this[q(0xc3)]['openGroup']('change\x20grid\x20type');await this['extendedItem'][q(0xd1)]('grid-template-columns',q(0xc4)+k[0x0]+',\x201fr)'),await this['extendedItem']['updateStyleInSheetOrLocalAsync']('grid-template-rows',q(0xc4)+k[0x1]+',\x201fr)'),l['commit']();}},this[p(0xc9)](p(0xd3)),this['_addStyleButton']('justify-content'),this['_addStyleButton'](p(0xd7)),this['_addStyleButton']('justify-items'),this['refresh'](c,d);}}
const n=b;(function(c,d){const m=b,e=c();while(!![]){try{const f=-parseInt(m(0x1f0))/0x1*(parseInt(m(0x1f5))/0x2)+parseInt(m(0x1ea))/0x3*(-parseInt(m(0x1db))/0x4)+-parseInt(m(0x1f4))/0x5*(parseInt(m(0x1ed))/0x6)+parseInt(m(0x1f7))/0x7+parseInt(m(0x1f1))/0x8*(parseInt(m(0x1d9))/0x9)+parseInt(m(0x1d8))/0xa+parseInt(m(0x1ec))/0xb*(parseInt(m(0x1f3))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x74fd8));import{html}from'@node-projects/base-custom-webcomponent';import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';import{assetsPath}from'../../../../../Constants.js';function b(c,d){c=c-0x1d5;const e=a();let f=e[c];return f;}export class GridToolbarExtension extends BasicStackedToolbarExtension{static [n(0x1d6)]=html`
    <div style="height: 100%; width: 100%;">
      ${BasicStackedToolbarExtension[n(0x1f9)]}
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
  `;constructor(c,d,e){super(c,d,e),this['_size']['width']=0x270;}['extend'](c,d){const o=n;super['extend'](c,d);const e=getComputedStyle(this['extendedItem'][o(0x1e8)]),f=this['_toolbar'][o(0x1e1)](o(0x1dc));let g=document[o(0x1fb)]('option');g['innerText']=e['gridTemplateColumns'][o(0x1dd)]('\x20')[o(0x1f6)]+'x'+e[o(0x1d5)][o(0x1dd)]('\x20')['length'],f[o(0x1e2)](o(0x1eb),g),f['selectedIndex']=0x0,f[o(0x1fa)]=async()=>{const p=o;if(f['value']=='custom'){const h=prompt('Number\x20of\x20columns?','4');if(!h)return;const i=prompt(p(0x1e9),'4');if(!i)return;const j=this[p(0x1e6)]['openGroup'](p(0x1ee));await this['extendedItem']['updateStyleInSheetOrLocalAsync'](p(0x1e3),'repeat('+h+p(0x1e5)),await this[p(0x1e6)]['updateStyleInSheetOrLocalAsync'](p(0x1da),'repeat('+i+p(0x1e5)),j['commit']();}else{const k=f[p(0x1f8)]['split']('x'),l=this[p(0x1e6)][p(0x1de)]('change\x20grid\x20type');await this[p(0x1e6)]['updateStyleInSheetOrLocalAsync'](p(0x1e3),'repeat('+k[0x0]+',\x201fr)'),await this[p(0x1e6)][p(0x1e4)]('grid-template-rows',p(0x1df)+k[0x1]+',\x201fr)'),l['commit']();}},this[o(0x1f2)](o(0x1d7)),this[o(0x1f2)](o(0x1e0)),this[o(0x1f2)](o(0x1ef)),this[o(0x1f2)]('justify-items'),this[o(0x1e7)](c,d);}}function a(){const q=['Number\x20of\x20rows?','658437FZiSSW','afterbegin','90101wFzsig','19272QcnELA','change\x20grid\x20type','align-items','69233qYstzR','27592yDWuTi','_addStyleButton','2664EYOMBp','1340nYyTQB','12fSkvEx','length','282009VVHoro','value','basicTemplate','onchange','createElement','gridTemplateRows','template','align-content','1183880WcVgIl','567ZGMIOk','grid-template-rows','8ljObsA','gridType','split','openGroup','repeat(','justify-content','getById','insertAdjacentElement','grid-template-columns','updateStyleInSheetOrLocalAsync',',\x201fr)','extendedItem','refresh','element'];a=function(){return q;};return a();}
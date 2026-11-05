const n=b;(function(c,d){const m=b,e=c();while(!![]){try{const f=parseInt(m(0x1b5))/0x1+-parseInt(m(0x1a5))/0x2+parseInt(m(0x1b1))/0x3+-parseInt(m(0x1a6))/0x4*(parseInt(m(0x1b2))/0x5)+-parseInt(m(0x1b8))/0x6+-parseInt(m(0x1a3))/0x7+parseInt(m(0x1a8))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x42e1f));import{html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x1a0;const e=a();let f=e[c];return f;}import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';import{assetsPath}from'../../../../../Constants.js';export class GridToolbarExtension extends BasicStackedToolbarExtension{static [n(0x1a7)]=html`
    <div style="height: 100%; width: 100%;">
      ${BasicStackedToolbarExtension[n(0x1a9)]}
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
  `;constructor(c,d,e){const o=n;super(c,d,e),this[o(0x1ad)][o(0x1a0)]=0x270;}['extend'](c,d){const p=n;super[p(0x1b6)](c,d);const e=getComputedStyle(this['extendedItem']['element']),f=this[p(0x1af)][p(0x1bc)]('gridType');let g=document['createElement']('option');g['innerText']=e[p(0x1b3)][p(0x1ae)]('\x20')['length']+'x'+e[p(0x1bb)][p(0x1ae)]('\x20')['length'],f['insertAdjacentElement'](p(0x1aa),g),f[p(0x1a4)]=0x0,f[p(0x1a1)]=async()=>{const q=p;if(f['value']=='custom'){const h=prompt(q(0x1a2),'4');if(!h)return;const i=prompt('Number\x20of\x20rows?','4');if(!i)return;const j=this[q(0x1ac)]['openGroup']('change\x20grid\x20type');await this['extendedItem']['updateStyleInSheetOrLocalAsync']('grid-template-columns','repeat('+h+q(0x1b7)),await this[q(0x1ac)][q(0x1b0)]('grid-template-rows',q(0x1ab)+i+',\x201fr)'),j['commit']();}else{const k=f[q(0x1b9)]['split']('x'),l=this[q(0x1ac)][q(0x1ba)]('change\x20grid\x20type');await this[q(0x1ac)]['updateStyleInSheetOrLocalAsync']('grid-template-columns','repeat('+k[0x0]+',\x201fr)'),await this[q(0x1ac)][q(0x1b0)]('grid-template-rows',q(0x1ab)+k[0x1]+q(0x1b7)),l['commit']();}},this['_addStyleButton']('align-content'),this['_addStyleButton']('justify-content'),this['_addStyleButton']('align-items'),this[p(0x1b4)]('justify-items'),this['refresh'](c,d);}}function a(){const r=['basicTemplate','afterbegin','repeat(','extendedItem','_size','split','_toolbar','updateStyleInSheetOrLocalAsync','1352397mELRNb','26710QtpsKJ','gridTemplateColumns','_addStyleButton','509681zcDCpo','extend',',\x201fr)','1734324YYxYGf','value','openGroup','gridTemplateRows','getById','width','onchange','Number\x20of\x20columns?','3770704bWRtuG','selectedIndex','286696dTaJlm','44JRcdnX','template','2746456XjenSz'];a=function(){return r;};return a();}
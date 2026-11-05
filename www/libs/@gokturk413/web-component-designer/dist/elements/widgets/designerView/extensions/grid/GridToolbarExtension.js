function a(){const r=['grid-template-rows','openGroup','split','grid-template-columns','3712fbowgi','updateStyleInSheetOrLocalAsync','custom','gridTemplateColumns','value',',\x201fr)','Number\x20of\x20rows?','align-content','25073OapuWK','4122705pyHbtF','2814845ZadbPF','_addStyleButton','33255zjTxex','change\x20grid\x20type','extendedItem','Number\x20of\x20columns?','getById','commit','createElement','50yfyfvk','repeat(','5979532STAbVN','template','5997846bkvBqD','innerText','8373694emIGvP','gridType','selectedIndex','width'];a=function(){return r;};return a();}const n=b;(function(c,d){const m=b,e=c();while(!![]){try{const f=-parseInt(m(0x184))/0x1*(-parseInt(m(0x16e))/0x2)+-parseInt(m(0x185))/0x3+parseInt(m(0x170))/0x4+parseInt(m(0x165))/0x5+-parseInt(m(0x172))/0x6+-parseInt(m(0x174))/0x7+parseInt(m(0x17c))/0x8*(parseInt(m(0x167))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xca66f));import{html}from'@node-projects/base-custom-webcomponent';import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';import{assetsPath}from'../../../../../Constants.js';function b(c,d){c=c-0x165;const e=a();let f=e[c];return f;}export class GridToolbarExtension extends BasicStackedToolbarExtension{static [n(0x171)]=html`
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
  `;constructor(c,d,e){const o=n;super(c,d,e),this['_size'][o(0x177)]=0x270;}['extend'](c,d){const p=n;super['extend'](c,d);const e=getComputedStyle(this['extendedItem']['element']),f=this['_toolbar'][p(0x16b)](p(0x175));let g=document[p(0x16d)]('option');g[p(0x173)]=e[p(0x17f)]['split']('\x20')['length']+'x'+e['gridTemplateRows']['split']('\x20')['length'],f['insertAdjacentElement']('afterbegin',g),f[p(0x176)]=0x0,f['onchange']=async()=>{const q=p;if(f['value']==q(0x17e)){const h=prompt(q(0x16a),'4');if(!h)return;const i=prompt(q(0x182),'4');if(!i)return;const j=this[q(0x169)][q(0x179)](q(0x168));await this[q(0x169)]['updateStyleInSheetOrLocalAsync'](q(0x17b),'repeat('+h+q(0x181)),await this[q(0x169)][q(0x17d)](q(0x178),q(0x16f)+i+',\x201fr)'),j[q(0x16c)]();}else{const k=f[q(0x180)][q(0x17a)]('x'),l=this['extendedItem']['openGroup'](q(0x168));await this[q(0x169)][q(0x17d)](q(0x17b),'repeat('+k[0x0]+q(0x181)),await this['extendedItem']['updateStyleInSheetOrLocalAsync']('grid-template-rows',q(0x16f)+k[0x1]+q(0x181)),l['commit']();}},this['_addStyleButton'](p(0x183)),this[p(0x166)]('justify-content'),this['_addStyleButton']('align-items'),this['_addStyleButton']('justify-items'),this['refresh'](c,d);}}
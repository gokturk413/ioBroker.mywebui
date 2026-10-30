const n=b;(function(c,d){const m=b,e=c();while(!![]){try{const f=-parseInt(m(0x18d))/0x1*(-parseInt(m(0x174))/0x2)+-parseInt(m(0x178))/0x3*(-parseInt(m(0x18c))/0x4)+-parseInt(m(0x180))/0x5+-parseInt(m(0x170))/0x6+parseInt(m(0x18a))/0x7+-parseInt(m(0x18f))/0x8*(-parseInt(m(0x184))/0x9)+parseInt(m(0x173))/0xa*(-parseInt(m(0x172))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x644f2));function a(){const r=['openGroup','extend','refresh','_toolbar','grid-template-rows','commit','948765DcygEu','_addStyleButton','basicTemplate','selectedIndex','13518kKClvy','justify-content','justify-items','template','Number\x20of\x20rows?','value','4661944fnFkJF','repeat(','376ZRqkRH','1409sQpFWE','updateStyleInSheetOrLocalAsync','2360zTNqgK','element','grid-template-columns','custom','gridTemplateRows','change\x20grid\x20type','4505580AGltel','extendedItem','2625062tIFTAq','30wooHwZ','438nmpxLO','gridTemplateColumns','_size','afterbegin','20739NGbBVo','split'];a=function(){return r;};return a();}import{html}from'@node-projects/base-custom-webcomponent';import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';import{assetsPath}from'../../../../../Constants.js';function b(c,d){c=c-0x16c;const e=a();let f=e[c];return f;}export class GridToolbarExtension extends BasicStackedToolbarExtension{static [n(0x187)]=html`
    <div style="height: 100%; width: 100%;">
      ${BasicStackedToolbarExtension[n(0x182)]}
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
  `;constructor(c,d,e){const o=n;super(c,d,e),this[o(0x176)]['width']=0x270;}[n(0x17b)](c,d){const p=n;super['extend'](c,d);const e=getComputedStyle(this['extendedItem'][p(0x190)]),f=this[p(0x17d)]['getById']('gridType');let g=document['createElement']('option');g['innerText']=e[p(0x175)]['split']('\x20')['length']+'x'+e[p(0x16e)]['split']('\x20')['length'],f['insertAdjacentElement'](p(0x177),g),f[p(0x183)]=0x0,f['onchange']=async()=>{const q=p;if(f[q(0x189)]==q(0x16d)){const h=prompt('Number\x20of\x20columns?','4');if(!h)return;const i=prompt(q(0x188),'4');if(!i)return;const j=this[q(0x171)][q(0x17a)](q(0x16f));await this[q(0x171)][q(0x18e)](q(0x16c),'repeat('+h+',\x201fr)'),await this['extendedItem']['updateStyleInSheetOrLocalAsync'](q(0x17e),q(0x18b)+i+',\x201fr)'),j[q(0x17f)]();}else{const k=f['value'][q(0x179)]('x'),l=this[q(0x171)]['openGroup']('change\x20grid\x20type');await this['extendedItem']['updateStyleInSheetOrLocalAsync'](q(0x16c),q(0x18b)+k[0x0]+',\x201fr)'),await this[q(0x171)]['updateStyleInSheetOrLocalAsync']('grid-template-rows','repeat('+k[0x1]+',\x201fr)'),l['commit']();}},this['_addStyleButton']('align-content'),this['_addStyleButton'](p(0x185)),this[p(0x181)]('align-items'),this['_addStyleButton'](p(0x186)),this[p(0x17c)](c,d);}}
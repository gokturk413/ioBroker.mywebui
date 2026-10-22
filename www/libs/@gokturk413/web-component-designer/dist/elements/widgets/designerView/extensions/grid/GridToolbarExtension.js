const n=b;(function(c,d){const m=b,e=c();while(!![]){try{const f=parseInt(m(0x156))/0x1+-parseInt(m(0x15e))/0x2+parseInt(m(0x160))/0x3+-parseInt(m(0x154))/0x4*(-parseInt(m(0x162))/0x5)+-parseInt(m(0x155))/0x6+-parseInt(m(0x174))/0x7*(-parseInt(m(0x16a))/0x8)+parseInt(m(0x15c))/0x9*(-parseInt(m(0x169))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5b436));import{html}from'@node-projects/base-custom-webcomponent';function a(){const q=['custom','afterbegin','insertAdjacentElement','extendedItem','16177580JYJUdF','736nVOBfR','basicTemplate','openGroup','repeat(',',\x201fr)','grid-template-rows','createElement','template','commit','element','52507AtdAUC','292PgTdLb','2083410ZklLIM','673253uQSTLy','getById','split','value','updateStyleInSheetOrLocalAsync','refresh','9kaxkWw','length','722364gRABnu','gridType','1967538fuptaE','gridTemplateColumns','46630vBihxM','grid-template-columns','justify-content'];a=function(){return q;};return a();}import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';import{assetsPath}from'../../../../../Constants.js';function b(c,d){c=c-0x154;const e=a();let f=e[c];return f;}export class GridToolbarExtension extends BasicStackedToolbarExtension{static [n(0x171)]=html`
    <div style="height: 100%; width: 100%;">
      ${BasicStackedToolbarExtension[n(0x16b)]}
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
  `;constructor(c,d,e){super(c,d,e),this['_size']['width']=0x270;}['extend'](c,d){const o=n;super['extend'](c,d);const e=getComputedStyle(this[o(0x168)][o(0x173)]),f=this['_toolbar'][o(0x157)](o(0x15f));let g=document[o(0x170)]('option');g['innerText']=e[o(0x161)][o(0x158)]('\x20')[o(0x15d)]+'x'+e['gridTemplateRows'][o(0x158)]('\x20')[o(0x15d)],f[o(0x167)](o(0x166),g),f['selectedIndex']=0x0,f['onchange']=async()=>{const p=o;if(f['value']==p(0x165)){const h=prompt('Number\x20of\x20columns?','4');if(!h)return;const i=prompt('Number\x20of\x20rows?','4');if(!i)return;const j=this['extendedItem']['openGroup']('change\x20grid\x20type');await this['extendedItem']['updateStyleInSheetOrLocalAsync']('grid-template-columns','repeat('+h+p(0x16e)),await this[p(0x168)]['updateStyleInSheetOrLocalAsync'](p(0x16f),p(0x16d)+i+p(0x16e)),j[p(0x172)]();}else{const k=f[p(0x159)]['split']('x'),l=this[p(0x168)][p(0x16c)]('change\x20grid\x20type');await this[p(0x168)]['updateStyleInSheetOrLocalAsync'](p(0x163),p(0x16d)+k[0x0]+p(0x16e)),await this[p(0x168)][p(0x15a)](p(0x16f),'repeat('+k[0x1]+',\x201fr)'),l['commit']();}},this['_addStyleButton']('align-content'),this['_addStyleButton'](o(0x164)),this['_addStyleButton']('align-items'),this['_addStyleButton']('justify-items'),this[o(0x15b)](c,d);}}
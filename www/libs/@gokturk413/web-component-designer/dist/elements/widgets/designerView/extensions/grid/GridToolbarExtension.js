const n=b;(function(c,d){const m=b,e=c();while(!![]){try{const f=parseInt(m(0x17b))/0x1*(-parseInt(m(0x164))/0x2)+parseInt(m(0x174))/0x3*(parseInt(m(0x162))/0x4)+parseInt(m(0x176))/0x5*(parseInt(m(0x169))/0x6)+parseInt(m(0x17f))/0x7*(parseInt(m(0x182))/0x8)+parseInt(m(0x163))/0x9*(parseInt(m(0x16d))/0xa)+-parseInt(m(0x172))/0xb*(parseInt(m(0x183))/0xc)+parseInt(m(0x16e))/0xd*(-parseInt(m(0x178))/0xe);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x60e4d));import{html}from'@node-projects/base-custom-webcomponent';import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';import{assetsPath}from'../../../../../Constants.js';function b(c,d){c=c-0x15e;const e=a();let f=e[c];return f;}function a(){const r=['selectedIndex','_addStyleButton','664060xOLpqq','1799379qiPrpF','713894uFNcqu','innerText','basicTemplate','onchange',',\x201fr)','1504662twCMIq','createElement','gridTemplateRows','repeat(','20TIeKha','247GFbYaP','custom','refresh','grid-template-columns','77swOwxs','extend','6oIZihp','updateStyleInSheetOrLocalAsync','5WACJRq','value','443786uBlLYl','align-items','split','1aVAycS','gridType','getById','grid-template-rows','16219QJgaEp','extendedItem','length','1824GJzTVf','265440jRoyvY','width','commit','_size'];a=function(){return r;};return a();}export class GridToolbarExtension extends BasicStackedToolbarExtension{static ['template']=html`
    <div style="height: 100%; width: 100%;">
      ${BasicStackedToolbarExtension[n(0x166)]}
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
  `;constructor(c,d,e){const o=n;super(c,d,e),this[o(0x15f)][o(0x184)]=0x270;}[n(0x173)](c,d){const p=n;super['extend'](c,d);const e=getComputedStyle(this['extendedItem']['element']),f=this['_toolbar'][p(0x17d)](p(0x17c));let g=document[p(0x16a)]('option');g[p(0x165)]=e['gridTemplateColumns'][p(0x17a)]('\x20')['length']+'x'+e[p(0x16b)]['split']('\x20')[p(0x181)],f['insertAdjacentElement']('afterbegin',g),f[p(0x160)]=0x0,f[p(0x167)]=async()=>{const q=p;if(f[q(0x177)]==q(0x16f)){const h=prompt('Number\x20of\x20columns?','4');if(!h)return;const i=prompt('Number\x20of\x20rows?','4');if(!i)return;const j=this['extendedItem']['openGroup']('change\x20grid\x20type');await this['extendedItem'][q(0x175)]('grid-template-columns',q(0x16c)+h+q(0x168)),await this[q(0x180)][q(0x175)](q(0x17e),q(0x16c)+i+q(0x168)),j['commit']();}else{const k=f[q(0x177)][q(0x17a)]('x'),l=this['extendedItem']['openGroup']('change\x20grid\x20type');await this['extendedItem']['updateStyleInSheetOrLocalAsync'](q(0x171),q(0x16c)+k[0x0]+',\x201fr)'),await this[q(0x180)]['updateStyleInSheetOrLocalAsync']('grid-template-rows','repeat('+k[0x1]+q(0x168)),l[q(0x15e)]();}},this[p(0x161)]('align-content'),this['_addStyleButton']('justify-content'),this[p(0x161)](p(0x179)),this[p(0x161)]('justify-items'),this[p(0x170)](c,d);}}
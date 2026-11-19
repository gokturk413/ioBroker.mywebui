const n=b;function b(c,d){c=c-0x93;const e=a();let f=e[c];return f;}(function(c,d){const m=b,e=c();while(!![]){try{const f=-parseInt(m(0x98))/0x1*(parseInt(m(0xa6))/0x2)+-parseInt(m(0xa4))/0x3*(parseInt(m(0xa1))/0x4)+-parseInt(m(0x9f))/0x5+-parseInt(m(0xb1))/0x6+parseInt(m(0xa7))/0x7*(parseInt(m(0x94))/0x8)+parseInt(m(0xb3))/0x9*(parseInt(m(0xb5))/0xa)+parseInt(m(0xa8))/0xb*(parseInt(m(0x9c))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x34f35));import{html}from'@node-projects/base-custom-webcomponent';import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';import{assetsPath}from'../../../../../Constants.js';export class GridToolbarExtension extends BasicStackedToolbarExtension{static [n(0xb0)]=html`
    <div style="height: 100%; width: 100%;">
      ${BasicStackedToolbarExtension[n(0x96)]}
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
  `;constructor(c,d,e){const o=n;super(c,d,e),this[o(0x9b)]['width']=0x270;}[n(0xb4)](c,d){const p=n;super[p(0xb4)](c,d);const e=getComputedStyle(this[p(0x97)][p(0xaf)]),f=this['_toolbar'][p(0xa5)]('gridType');let g=document[p(0xb6)]('option');g['innerText']=e['gridTemplateColumns']['split']('\x20')['length']+'x'+e[p(0xac)][p(0x9d)]('\x20')['length'],f[p(0x99)]('afterbegin',g),f[p(0x9e)]=0x0,f[p(0x95)]=async()=>{const q=p;if(f[q(0xa0)]=='custom'){const h=prompt('Number\x20of\x20columns?','4');if(!h)return;const i=prompt('Number\x20of\x20rows?','4');if(!i)return;const j=this['extendedItem']['openGroup']('change\x20grid\x20type');await this[q(0x97)]['updateStyleInSheetOrLocalAsync'](q(0x93),q(0xad)+h+',\x201fr)'),await this[q(0x97)][q(0xae)](q(0xab),q(0xad)+i+',\x201fr)'),j[q(0xa2)]();}else{const k=f[q(0xa0)]['split']('x'),l=this[q(0x97)]['openGroup']('change\x20grid\x20type');await this[q(0x97)]['updateStyleInSheetOrLocalAsync'](q(0x93),q(0xad)+k[0x0]+',\x201fr)'),await this['extendedItem'][q(0xae)](q(0xab),'repeat('+k[0x1]+q(0xaa)),l[q(0xa2)]();}},this['_addStyleButton']('align-content'),this[p(0xa9)](p(0x9a)),this[p(0xa9)](p(0xb2)),this['_addStyleButton']('justify-items'),this[p(0xa3)](c,d);}}function a(){const r=['split','selectedIndex','1454445JVRAkS','value','52KxHMvY','commit','refresh','82767jtbNxv','getById','18910HiKWlw','7rJwkrF','231LmtdPi','_addStyleButton',',\x201fr)','grid-template-rows','gridTemplateRows','repeat(','updateStyleInSheetOrLocalAsync','element','template','465300MkXNyW','align-items','738OFnGqP','extend','42010ozUlxs','createElement','grid-template-columns','2638792ygPEQB','onchange','basicTemplate','extendedItem','19hycCQE','insertAdjacentElement','justify-content','_size','256740aXHleP'];a=function(){return r;};return a();}
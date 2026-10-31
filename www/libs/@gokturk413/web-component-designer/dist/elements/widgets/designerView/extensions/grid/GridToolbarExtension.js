const n=b;(function(c,d){const m=b,e=c();while(!![]){try{const f=-parseInt(m(0x1bf))/0x1*(parseInt(m(0x1b4))/0x2)+-parseInt(m(0x1b0))/0x3+parseInt(m(0x1ad))/0x4+parseInt(m(0x1a1))/0x5+parseInt(m(0x1b9))/0x6+parseInt(m(0x1c4))/0x7+parseInt(m(0x1ac))/0x8*(parseInt(m(0x1c3))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x30a7a));function a(){const r=['insertAdjacentElement','createElement','281364usiRPW','justify-items','gridType','extend','46DuVbBx','getById',',\x201fr)','element','commit','1101510NmYhsK','openGroup','onchange','_addStyleButton','justify-content','length','16699RYsPNj','gridTemplateColumns','repeat(','basicTemplate','9drGacu','313488RcSNRB','refresh','121900yiTTEv','_size','innerText','updateStyleInSheetOrLocalAsync','extendedItem','grid-template-columns','width','split','selectedIndex','grid-template-rows','change\x20grid\x20type','2984920vuxCun','205164CWHVSM'];a=function(){return r;};return a();}import{html}from'@node-projects/base-custom-webcomponent';import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';function b(c,d){c=c-0x1a1;const e=a();let f=e[c];return f;}import{assetsPath}from'../../../../../Constants.js';export class GridToolbarExtension extends BasicStackedToolbarExtension{static ['template']=html`
    <div style="height: 100%; width: 100%;">
      ${BasicStackedToolbarExtension[n(0x1c2)]}
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
  `;constructor(c,d,e){const o=n;super(c,d,e),this[o(0x1a2)][o(0x1a7)]=0x270;}[n(0x1b3)](c,d){const p=n;super[p(0x1b3)](c,d);const e=getComputedStyle(this['extendedItem'][p(0x1b7)]),f=this['_toolbar'][p(0x1b5)](p(0x1b2));let g=document[p(0x1af)]('option');g[p(0x1a3)]=e[p(0x1c0)][p(0x1a8)]('\x20')['length']+'x'+e['gridTemplateRows'][p(0x1a8)]('\x20')[p(0x1be)],f[p(0x1ae)]('afterbegin',g),f[p(0x1a9)]=0x0,f[p(0x1bb)]=async()=>{const q=p;if(f['value']=='custom'){const h=prompt('Number\x20of\x20columns?','4');if(!h)return;const i=prompt('Number\x20of\x20rows?','4');if(!i)return;const j=this[q(0x1a5)]['openGroup']('change\x20grid\x20type');await this['extendedItem']['updateStyleInSheetOrLocalAsync']('grid-template-columns','repeat('+h+q(0x1b6)),await this['extendedItem']['updateStyleInSheetOrLocalAsync']('grid-template-rows','repeat('+i+q(0x1b6)),j[q(0x1b8)]();}else{const k=f['value']['split']('x'),l=this[q(0x1a5)][q(0x1ba)](q(0x1ab));await this['extendedItem'][q(0x1a4)](q(0x1a6),q(0x1c1)+k[0x0]+q(0x1b6)),await this[q(0x1a5)][q(0x1a4)](q(0x1aa),q(0x1c1)+k[0x1]+q(0x1b6)),l[q(0x1b8)]();}},this[p(0x1bc)]('align-content'),this['_addStyleButton'](p(0x1bd)),this['_addStyleButton']('align-items'),this[p(0x1bc)](p(0x1b1)),this[p(0x1c5)](c,d);}}
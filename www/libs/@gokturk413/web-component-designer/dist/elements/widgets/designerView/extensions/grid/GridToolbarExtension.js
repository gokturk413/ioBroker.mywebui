const o=b;(function(c,d){const m=b,e=c();while(!![]){try{const f=-parseInt(m(0xb8))/0x1+-parseInt(m(0xd5))/0x2*(-parseInt(m(0xb6))/0x3)+parseInt(m(0xd4))/0x4*(parseInt(m(0xc6))/0x5)+-parseInt(m(0xbf))/0x6+-parseInt(m(0xc3))/0x7*(-parseInt(m(0xba))/0x8)+parseInt(m(0xc0))/0x9*(parseInt(m(0xd2))/0xa)+parseInt(m(0xcd))/0xb*(-parseInt(m(0xc4))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc570d));import{html}from'@node-projects/base-custom-webcomponent';function a(){const r=['repeat(','Number\x20of\x20rows?','updateStyleInSheetOrLocalAsync','split','1402128DuFkyw','4545zlFkOP','change\x20grid\x20type','getById','7HFpwZh','4648296ibbqCh','_addStyleButton','3545EJCLcU','element',',\x201fr)','refresh','openGroup','extend','afterbegin','11jaZQNC','selectedIndex','gridType','option','width','14770GUoWgB','align-content','1096RWUXKs','676762MiDZTT','9crKGXd','commit','1354885rDjBhI','extendedItem','6634832xLjfNm'];a=function(){return r;};return a();}import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';function b(c,d){c=c-0xb6;const e=a();let f=e[c];return f;}import{assetsPath}from'../../../../../Constants.js';export class GridToolbarExtension extends BasicStackedToolbarExtension{static ['template']=html`
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
  `;constructor(c,d,e){const n=b;super(c,d,e),this['_size'][n(0xd1)]=0x270;}[o(0xcb)](c,d){const p=o;super['extend'](c,d);const e=getComputedStyle(this['extendedItem'][p(0xc7)]),f=this['_toolbar'][p(0xc2)](p(0xcf));let g=document['createElement'](p(0xd0));g['innerText']=e['gridTemplateColumns'][p(0xbe)]('\x20')['length']+'x'+e['gridTemplateRows'][p(0xbe)]('\x20')['length'],f['insertAdjacentElement'](p(0xcc),g),f[p(0xce)]=0x0,f['onchange']=async()=>{const q=p;if(f['value']=='custom'){const h=prompt('Number\x20of\x20columns?','4');if(!h)return;const i=prompt(q(0xbc),'4');if(!i)return;const j=this[q(0xb9)][q(0xca)](q(0xc1));await this[q(0xb9)][q(0xbd)]('grid-template-columns',q(0xbb)+h+',\x201fr)'),await this[q(0xb9)]['updateStyleInSheetOrLocalAsync']('grid-template-rows',q(0xbb)+i+q(0xc8)),j['commit']();}else{const k=f['value'][q(0xbe)]('x'),l=this[q(0xb9)][q(0xca)](q(0xc1));await this['extendedItem']['updateStyleInSheetOrLocalAsync']('grid-template-columns','repeat('+k[0x0]+',\x201fr)'),await this['extendedItem']['updateStyleInSheetOrLocalAsync']('grid-template-rows',q(0xbb)+k[0x1]+',\x201fr)'),l[q(0xb7)]();}},this[p(0xc5)](p(0xd3)),this[p(0xc5)]('justify-content'),this['_addStyleButton']('align-items'),this['_addStyleButton']('justify-items'),this[p(0xc9)](c,d);}}
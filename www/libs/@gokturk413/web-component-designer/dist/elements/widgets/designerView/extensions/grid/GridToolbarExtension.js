(function(c,d){const m=b,e=c();while(!![]){try{const f=parseInt(m(0xc7))/0x1*(-parseInt(m(0xba))/0x2)+parseInt(m(0xcb))/0x3+parseInt(m(0xb8))/0x4*(parseInt(m(0xdd))/0x5)+-parseInt(m(0xdc))/0x6+parseInt(m(0xbc))/0x7+-parseInt(m(0xda))/0x8*(-parseInt(m(0xd2))/0x9)+parseInt(m(0xbb))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3c771));import{html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0xb8;const e=a();let f=e[c];return f;}import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';function a(){const q=['commit','16MNiTki','onchange','2376264tJyTVV','905fTiRSK','7444DMUFZm','gridType','555134ToEEro','1429120TSVkyB','448966pTyuPZ','gridTemplateColumns','split','width','option','gridTemplateRows','refresh','_addStyleButton','change\x20grid\x20type','repeat(',',\x201fr)','1RBWEno','align-items','createElement','grid-template-columns','285753xiUkyL','Number\x20of\x20columns?','value','afterbegin','selectedIndex','openGroup','align-content','1269603zFfVCJ','updateStyleInSheetOrLocalAsync','getById','length','extendedItem','custom','grid-template-rows'];a=function(){return q;};return a();}import{assetsPath}from'../../../../../Constants.js';export class GridToolbarExtension extends BasicStackedToolbarExtension{static ['template']=html`
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
  `;constructor(c,d,e){const n=b;super(c,d,e),this['_size'][n(0xbf)]=0x270;}['extend'](c,d){const o=b;super['extend'](c,d);const e=getComputedStyle(this['extendedItem']['element']),f=this['_toolbar'][o(0xd4)](o(0xb9));let g=document[o(0xc9)](o(0xc0));g['innerText']=e[o(0xbd)]['split']('\x20')[o(0xd5)]+'x'+e[o(0xc1)][o(0xbe)]('\x20')['length'],f['insertAdjacentElement'](o(0xce),g),f[o(0xcf)]=0x0,f[o(0xdb)]=async()=>{const p=o;if(f[p(0xcd)]==p(0xd7)){const h=prompt(p(0xcc),'4');if(!h)return;const i=prompt('Number\x20of\x20rows?','4');if(!i)return;const j=this[p(0xd6)]['openGroup'](p(0xc4));await this[p(0xd6)][p(0xd3)]('grid-template-columns',p(0xc5)+h+',\x201fr)'),await this[p(0xd6)]['updateStyleInSheetOrLocalAsync']('grid-template-rows','repeat('+i+p(0xc6)),j[p(0xd9)]();}else{const k=f['value'][p(0xbe)]('x'),l=this[p(0xd6)][p(0xd0)](p(0xc4));await this['extendedItem'][p(0xd3)](p(0xca),'repeat('+k[0x0]+p(0xc6)),await this[p(0xd6)]['updateStyleInSheetOrLocalAsync'](p(0xd8),'repeat('+k[0x1]+p(0xc6)),l['commit']();}},this[o(0xc3)](o(0xd1)),this['_addStyleButton']('justify-content'),this['_addStyleButton'](o(0xc8)),this[o(0xc3)]('justify-items'),this[o(0xc2)](c,d);}}
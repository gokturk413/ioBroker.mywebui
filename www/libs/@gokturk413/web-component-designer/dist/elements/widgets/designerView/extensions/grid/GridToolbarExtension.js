(function(c,d){const m=b,e=c();while(!![]){try{const f=-parseInt(m(0xd2))/0x1+parseInt(m(0xb5))/0x2+-parseInt(m(0xc9))/0x3+-parseInt(m(0xba))/0x4*(-parseInt(m(0xc3))/0x5)+-parseInt(m(0xc5))/0x6*(-parseInt(m(0xbf))/0x7)+-parseInt(m(0xbc))/0x8+-parseInt(m(0xca))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd7b95));import{html}from'@node-projects/base-custom-webcomponent';function a(){const q=['162516FWrnSk',',\x201fr)','afterbegin','refresh','1819092BapSbz','746370dosvBw','gridTemplateColumns','length','updateStyleInSheetOrLocalAsync','align-content','_addStyleButton','gridTemplateRows','_toolbar','167988QVeAXa','commit','align-items','custom','justify-content','grid-template-columns','1156966lSBvzG','split','Number\x20of\x20rows?','innerText','extendedItem','6628jhAQjK','option','9395976hoQRyx','openGroup','gridType','350YlpFJr','value','width','grid-template-rows','2965nnZviD','repeat('];a=function(){return q;};return a();}function b(c,d){c=c-0xb5;const e=a();let f=e[c];return f;}import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';import{assetsPath}from'../../../../../Constants.js';export class GridToolbarExtension extends BasicStackedToolbarExtension{static ['template']=html`
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
  `;constructor(c,d,e){const n=b;super(c,d,e),this['_size'][n(0xc1)]=0x270;}['extend'](c,d){const o=b;super['extend'](c,d);const e=getComputedStyle(this['extendedItem']['element']),f=this[o(0xd1)]['getById'](o(0xbe));let g=document['createElement'](o(0xbb));g[o(0xb8)]=e[o(0xcb)]['split']('\x20')[o(0xcc)]+'x'+e[o(0xd0)][o(0xb6)]('\x20')['length'],f['insertAdjacentElement'](o(0xc7),g),f['selectedIndex']=0x0,f['onchange']=async()=>{const p=o;if(f[p(0xc0)]==p(0xd5)){const h=prompt('Number\x20of\x20columns?','4');if(!h)return;const i=prompt(p(0xb7),'4');if(!i)return;const j=this['extendedItem']['openGroup']('change\x20grid\x20type');await this[p(0xb9)]['updateStyleInSheetOrLocalAsync'](p(0xd7),'repeat('+h+',\x201fr)'),await this[p(0xb9)][p(0xcd)](p(0xc2),'repeat('+i+',\x201fr)'),j[p(0xd3)]();}else{const k=f[p(0xc0)][p(0xb6)]('x'),l=this['extendedItem'][p(0xbd)]('change\x20grid\x20type');await this['extendedItem']['updateStyleInSheetOrLocalAsync'](p(0xd7),'repeat('+k[0x0]+',\x201fr)'),await this[p(0xb9)][p(0xcd)](p(0xc2),p(0xc4)+k[0x1]+p(0xc6)),l['commit']();}},this[o(0xcf)](o(0xce)),this[o(0xcf)](o(0xd6)),this['_addStyleButton'](o(0xd4)),this[o(0xcf)]('justify-items'),this[o(0xc8)](c,d);}}
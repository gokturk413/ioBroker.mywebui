const n=b;(function(c,d){const m=b,e=c();while(!![]){try{const f=-parseInt(m(0xd0))/0x1+parseInt(m(0xd2))/0x2*(-parseInt(m(0xd3))/0x3)+-parseInt(m(0xc4))/0x4+parseInt(m(0xc8))/0x5+parseInt(m(0xd6))/0x6*(-parseInt(m(0xb8))/0x7)+parseInt(m(0xd5))/0x8*(parseInt(m(0xc5))/0x9)+parseInt(m(0xbe))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x96b99));import{html}from'@node-projects/base-custom-webcomponent';function a(){const q=['change\x20grid\x20type','value','option','grid-template-rows','updateStyleInSheetOrLocalAsync',',\x201fr)','184674mILSDY','align-items','2358jzOkrx','561pKbqVH','extendedItem','11976pIRVvz','10662uqigTR','split','3997TsArxt','insertAdjacentElement','Number\x20of\x20rows?','element','length','openGroup','6621570sgrils','getById','commit','repeat(','createElement','template','1205792AOINtY','2772RlvmDJ','refresh','afterbegin','6076990EaWPHS','gridTemplateColumns'];a=function(){return q;};return a();}import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';import{assetsPath}from'../../../../../Constants.js';function b(c,d){c=c-0xb8;const e=a();let f=e[c];return f;}export class GridToolbarExtension extends BasicStackedToolbarExtension{static [n(0xc3)]=html`
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
  `;constructor(c,d,e){super(c,d,e),this['_size']['width']=0x270;}['extend'](c,d){const o=n;super['extend'](c,d);const e=getComputedStyle(this[o(0xd4)][o(0xbb)]),f=this['_toolbar'][o(0xbf)]('gridType');let g=document[o(0xc2)](o(0xcc));g['innerText']=e[o(0xc9)][o(0xd7)]('\x20')['length']+'x'+e['gridTemplateRows'][o(0xd7)]('\x20')[o(0xbc)],f[o(0xb9)](o(0xc7),g),f['selectedIndex']=0x0,f['onchange']=async()=>{const p=o;if(f['value']=='custom'){const h=prompt('Number\x20of\x20columns?','4');if(!h)return;const i=prompt(p(0xba),'4');if(!i)return;const j=this[p(0xd4)]['openGroup'](p(0xca));await this['extendedItem']['updateStyleInSheetOrLocalAsync']('grid-template-columns',p(0xc1)+h+p(0xcf)),await this['extendedItem'][p(0xce)](p(0xcd),p(0xc1)+i+',\x201fr)'),j[p(0xc0)]();}else{const k=f[p(0xcb)]['split']('x'),l=this['extendedItem'][p(0xbd)]('change\x20grid\x20type');await this['extendedItem']['updateStyleInSheetOrLocalAsync']('grid-template-columns',p(0xc1)+k[0x0]+',\x201fr)'),await this['extendedItem'][p(0xce)](p(0xcd),'repeat('+k[0x1]+',\x201fr)'),l[p(0xc0)]();}},this['_addStyleButton']('align-content'),this['_addStyleButton']('justify-content'),this['_addStyleButton'](o(0xd1)),this['_addStyleButton']('justify-items'),this[o(0xc6)](c,d);}}
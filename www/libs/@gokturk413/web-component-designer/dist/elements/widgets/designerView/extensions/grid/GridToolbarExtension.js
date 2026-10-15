(function(c,d){const m=b,e=c();while(!![]){try{const f=-parseInt(m(0x19e))/0x1+parseInt(m(0x1b6))/0x2*(-parseInt(m(0x1a1))/0x3)+parseInt(m(0x199))/0x4*(-parseInt(m(0x1a4))/0x5)+-parseInt(m(0x1a5))/0x6*(-parseInt(m(0x1aa))/0x7)+parseInt(m(0x198))/0x8*(parseInt(m(0x1a0))/0x9)+-parseInt(m(0x1b5))/0xa+parseInt(m(0x1a3))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8664c));import{html}from'@node-projects/base-custom-webcomponent';import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';import{assetsPath}from'../../../../../Constants.js';export class GridToolbarExtension extends BasicStackedToolbarExtension{static ['template']=html`
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
  `;constructor(c,d,e){super(c,d,e),this['_size']['width']=0x270;}['extend'](c,d){const n=b;super['extend'](c,d);const e=getComputedStyle(this['extendedItem']['element']),f=this['_toolbar'][n(0x1a9)]('gridType');let g=document['createElement'](n(0x1a2));g['innerText']=e['gridTemplateColumns']['split']('\x20')['length']+'x'+e[n(0x1a8)][n(0x1b4)]('\x20')[n(0x1b3)],f['insertAdjacentElement']('afterbegin',g),f[n(0x1b0)]=0x0,f[n(0x1ad)]=async()=>{const o=n;if(f['value']==o(0x1b2)){const h=prompt(o(0x1ab),'4');if(!h)return;const i=prompt(o(0x1af),'4');if(!i)return;const j=this[o(0x1ac)]['openGroup']('change\x20grid\x20type');await this['extendedItem'][o(0x19a)]('grid-template-columns',o(0x19c)+h+',\x201fr)'),await this[o(0x1ac)]['updateStyleInSheetOrLocalAsync'](o(0x1a7),o(0x19c)+i+o(0x19f)),j['commit']();}else{const k=f[o(0x1ae)][o(0x1b4)]('x'),l=this['extendedItem']['openGroup'](o(0x19d));await this[o(0x1ac)]['updateStyleInSheetOrLocalAsync'](o(0x19b),'repeat('+k[0x0]+o(0x19f)),await this[o(0x1ac)][o(0x19a)]('grid-template-rows','repeat('+k[0x1]+o(0x19f)),l['commit']();}},this['_addStyleButton']('align-content'),this[n(0x1a6)](n(0x1b1)),this[n(0x1a6)]('align-items'),this['_addStyleButton']('justify-items'),this['refresh'](c,d);}}function b(c,d){c=c-0x198;const e=a();let f=e[c];return f;}function a(){const p=['length','split','6705600ajPyiO','610pFRfUC','8nsvkEz','3728UgPqCP','updateStyleInSheetOrLocalAsync','grid-template-columns','repeat(','change\x20grid\x20type','320052eTcKAj',',\x201fr)','1148247EcCiCY','3225uQTUSb','option','17444141cLzLXy','815SIIpoP','30lFXwnZ','_addStyleButton','grid-template-rows','gridTemplateRows','getById','430451mHXskG','Number\x20of\x20columns?','extendedItem','onchange','value','Number\x20of\x20rows?','selectedIndex','justify-content','custom'];a=function(){return p;};return a();}
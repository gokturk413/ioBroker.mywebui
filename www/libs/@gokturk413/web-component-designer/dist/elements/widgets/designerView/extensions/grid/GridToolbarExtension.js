const n=b;(function(c,d){const m=b,e=c();while(!![]){try{const f=-parseInt(m(0x82))/0x1+-parseInt(m(0x83))/0x2+parseInt(m(0x76))/0x3+parseInt(m(0x94))/0x4+-parseInt(m(0x7a))/0x5+-parseInt(m(0x85))/0x6+parseInt(m(0x8c))/0x7;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9a630));function b(c,d){c=c-0x76;const e=a();let f=e[c];return f;}import{html}from'@node-projects/base-custom-webcomponent';import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';import{assetsPath}from'../../../../../Constants.js';function a(){const r=['basicTemplate','repeat(','_addStyleButton','523794teZTiR','726064lhyJjM','commit','4912434cXfaSo','option','onchange','value','insertAdjacentElement','justify-items','grid-template-columns','21923216POaocG','_size','change\x20grid\x20type','Number\x20of\x20rows?','align-items',',\x201fr)','split','updateStyleInSheetOrLocalAsync','537076DTjWUB','351099smhsAP','_toolbar','createElement','gridType','5226285vVpYnh','refresh','extendedItem','extend','justify-content'];a=function(){return r;};return a();}export class GridToolbarExtension extends BasicStackedToolbarExtension{static ['template']=html`
    <div style="height: 100%; width: 100%;">
      ${BasicStackedToolbarExtension[n(0x7f)]}
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
  `;constructor(c,d,e){const o=n;super(c,d,e),this[o(0x8d)]['width']=0x270;}['extend'](c,d){const p=n;super[p(0x7d)](c,d);const e=getComputedStyle(this[p(0x7c)]['element']),f=this[p(0x77)]['getById'](p(0x79));let g=document[p(0x78)](p(0x86));g['innerText']=e['gridTemplateColumns']['split']('\x20')['length']+'x'+e['gridTemplateRows'][p(0x92)]('\x20')['length'],f[p(0x89)]('afterbegin',g),f['selectedIndex']=0x0,f[p(0x87)]=async()=>{const q=p;if(f['value']=='custom'){const h=prompt('Number\x20of\x20columns?','4');if(!h)return;const i=prompt(q(0x8f),'4');if(!i)return;const j=this[q(0x7c)]['openGroup']('change\x20grid\x20type');await this['extendedItem'][q(0x93)]('grid-template-columns','repeat('+h+q(0x91)),await this['extendedItem'][q(0x93)]('grid-template-rows','repeat('+i+',\x201fr)'),j['commit']();}else{const k=f[q(0x88)][q(0x92)]('x'),l=this[q(0x7c)]['openGroup'](q(0x8e));await this['extendedItem'][q(0x93)](q(0x8b),q(0x80)+k[0x0]+',\x201fr)'),await this[q(0x7c)]['updateStyleInSheetOrLocalAsync']('grid-template-rows','repeat('+k[0x1]+',\x201fr)'),l[q(0x84)]();}},this[p(0x81)]('align-content'),this[p(0x81)](p(0x7e)),this[p(0x81)](p(0x90)),this[p(0x81)](p(0x8a)),this[p(0x7b)](c,d);}}
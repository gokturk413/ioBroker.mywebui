function b(c,d){c=c-0x1c9;const e=a();let f=e[c];return f;}const n=b;(function(c,d){const m=b,e=c();while(!![]){try{const f=-parseInt(m(0x1e0))/0x1+parseInt(m(0x1d7))/0x2*(parseInt(m(0x1da))/0x3)+-parseInt(m(0x1e4))/0x4+-parseInt(m(0x1dd))/0x5+-parseInt(m(0x1d2))/0x6+-parseInt(m(0x1ce))/0x7*(parseInt(m(0x1d6))/0x8)+parseInt(m(0x1d1))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7a9eb));import{html}from'@node-projects/base-custom-webcomponent';import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';import{assetsPath}from'../../../../../Constants.js';function a(){const r=['updateStyleInSheetOrLocalAsync','gridTemplateRows','extendedItem','37832HtaVSa','1718958TXsWCA','length','onchange','3ltrFAf','_addStyleButton','value','2597095zFvsmr','innerText','basicTemplate','299220ICeewf',',\x201fr)','commit','align-items','3951396MPTJbx','_size','change\x20grid\x20type','gridTemplateColumns','extend','repeat(','afterbegin','gridType','grid-template-rows','split','createElement','469MFuouA','grid-template-columns','selectedIndex','16539813pMVpgA','429924jjoKnA'];a=function(){return r;};return a();}export class GridToolbarExtension extends BasicStackedToolbarExtension{static ['template']=html`
    <div style="height: 100%; width: 100%;">
      ${BasicStackedToolbarExtension[n(0x1df)]}
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
  `;constructor(c,d,e){const o=n;super(c,d,e),this[o(0x1e5)]['width']=0x270;}[n(0x1e8)](c,d){const p=n;super[p(0x1e8)](c,d);const e=getComputedStyle(this[p(0x1d5)]['element']),f=this['_toolbar']['getById'](p(0x1ca));let g=document[p(0x1cd)]('option');g[p(0x1de)]=e[p(0x1e7)][p(0x1cc)]('\x20')[p(0x1d8)]+'x'+e[p(0x1d4)]['split']('\x20')['length'],f['insertAdjacentElement'](p(0x1c9),g),f[p(0x1d0)]=0x0,f[p(0x1d9)]=async()=>{const q=p;if(f[q(0x1dc)]=='custom'){const h=prompt('Number\x20of\x20columns?','4');if(!h)return;const i=prompt('Number\x20of\x20rows?','4');if(!i)return;const j=this[q(0x1d5)]['openGroup']('change\x20grid\x20type');await this['extendedItem']['updateStyleInSheetOrLocalAsync'](q(0x1cf),'repeat('+h+',\x201fr)'),await this['extendedItem'][q(0x1d3)]('grid-template-rows','repeat('+i+q(0x1e1)),j[q(0x1e2)]();}else{const k=f[q(0x1dc)][q(0x1cc)]('x'),l=this['extendedItem']['openGroup'](q(0x1e6));await this[q(0x1d5)]['updateStyleInSheetOrLocalAsync']('grid-template-columns','repeat('+k[0x0]+q(0x1e1)),await this['extendedItem'][q(0x1d3)](q(0x1cb),q(0x1e9)+k[0x1]+q(0x1e1)),l['commit']();}},this['_addStyleButton']('align-content'),this[p(0x1db)]('justify-content'),this[p(0x1db)](p(0x1e3)),this[p(0x1db)]('justify-items'),this['refresh'](c,d);}}
const n=b;(function(c,d){const m=b,e=c();while(!![]){try{const f=-parseInt(m(0xff))/0x1+parseInt(m(0x10d))/0x2+-parseInt(m(0x101))/0x3*(parseInt(m(0x11e))/0x4)+parseInt(m(0xfb))/0x5*(-parseInt(m(0x10a))/0x6)+-parseInt(m(0x115))/0x7*(parseInt(m(0x103))/0x8)+-parseInt(m(0x11b))/0x9+-parseInt(m(0x108))/0xa*(-parseInt(m(0x113))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7928a));import{html}from'@node-projects/base-custom-webcomponent';import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';function b(c,d){c=c-0xf9;const e=a();let f=e[c];return f;}function a(){const r=['repeat(','change\x20grid\x20type','957794zJvQDp','element','296265UfXahy','length','104pVZPUf','onchange','gridTemplateRows','gridType','_addStyleButton','35144850XaNlzF','gridTemplateColumns','6294nQSysZ','refresh','updateStyleInSheetOrLocalAsync','1181296ySjLzG','width',',\x201fr)','getById','Number\x20of\x20rows?','basicTemplate','11aQlOoJ','split','128303FrpFVg','openGroup','afterbegin','extendedItem','innerText','value','5096376wtsHNB','commit','justify-content','36yxFNvi','_size','grid-template-rows','template','grid-template-columns','4565pJgFNs','extend'];a=function(){return r;};return a();}import{assetsPath}from'../../../../../Constants.js';export class GridToolbarExtension extends BasicStackedToolbarExtension{static [n(0xf9)]=html`
    <div style="height: 100%; width: 100%;">
      ${BasicStackedToolbarExtension[n(0x112)]}
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
  `;constructor(c,d,e){const o=n;super(c,d,e),this[o(0x11f)][o(0x10e)]=0x270;}[n(0xfc)](c,d){const p=n;super[p(0xfc)](c,d);const e=getComputedStyle(this['extendedItem'][p(0x100)]),f=this['_toolbar'][p(0x110)](p(0x106));let g=document['createElement']('option');g[p(0x119)]=e[p(0x109)]['split']('\x20')[p(0x102)]+'x'+e[p(0x105)]['split']('\x20')['length'],f['insertAdjacentElement'](p(0x117),g),f['selectedIndex']=0x0,f[p(0x104)]=async()=>{const q=p;if(f[q(0x11a)]=='custom'){const h=prompt('Number\x20of\x20columns?','4');if(!h)return;const i=prompt(q(0x111),'4');if(!i)return;const j=this['extendedItem'][q(0x116)]('change\x20grid\x20type');await this['extendedItem']['updateStyleInSheetOrLocalAsync'](q(0xfa),q(0xfd)+h+q(0x10f)),await this['extendedItem'][q(0x10c)](q(0x120),'repeat('+i+q(0x10f)),j[q(0x11c)]();}else{const k=f['value'][q(0x114)]('x'),l=this['extendedItem'][q(0x116)](q(0xfe));await this['extendedItem']['updateStyleInSheetOrLocalAsync'](q(0xfa),q(0xfd)+k[0x0]+',\x201fr)'),await this[q(0x118)]['updateStyleInSheetOrLocalAsync']('grid-template-rows',q(0xfd)+k[0x1]+q(0x10f)),l['commit']();}},this[p(0x107)]('align-content'),this['_addStyleButton'](p(0x11d)),this[p(0x107)]('align-items'),this[p(0x107)]('justify-items'),this[p(0x10b)](c,d);}}
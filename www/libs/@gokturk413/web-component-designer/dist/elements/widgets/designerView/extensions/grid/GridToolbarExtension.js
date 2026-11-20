const n=b;(function(c,d){const m=b,e=c();while(!![]){try{const f=parseInt(m(0x1da))/0x1+parseInt(m(0x1c2))/0x2*(parseInt(m(0x1c6))/0x3)+-parseInt(m(0x1c4))/0x4+-parseInt(m(0x1ca))/0x5*(-parseInt(m(0x1d3))/0x6)+parseInt(m(0x1c5))/0x7*(-parseInt(m(0x1df))/0x8)+-parseInt(m(0x1d2))/0x9*(parseInt(m(0x1c3))/0xa)+-parseInt(m(0x1be))/0xb*(-parseInt(m(0x1cd))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd67b9));import{html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x1bb;const e=a();let f=e[c];return f;}import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';function a(){const r=['afterbegin','justify-items','11TGiuzX','custom','length','gridType','4766lSPNjm','7350IQeLpw','810704AzvdlQ','3888367rmAZzx','1791IgDzmY','element','split','gridTemplateColumns','2109255VcxatJ','createElement','grid-template-columns','2413716pTzjLS','extend','extendedItem','width','_addStyleButton','11241NeSpax','12DyjCey','basicTemplate','align-content','change\x20grid\x20type',',\x201fr)','repeat(','updateStyleInSheetOrLocalAsync','87197sTTrCk','value','grid-template-rows','commit','Number\x20of\x20rows?','8vPqETy','_size','option','gridTemplateRows','innerText','insertAdjacentElement'];a=function(){return r;};return a();}import{assetsPath}from'../../../../../Constants.js';export class GridToolbarExtension extends BasicStackedToolbarExtension{static ['template']=html`
    <div style="height: 100%; width: 100%;">
      ${BasicStackedToolbarExtension[n(0x1d4)]}
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
  `;constructor(c,d,e){const o=n;super(c,d,e),this[o(0x1e0)][o(0x1d0)]=0x270;}[n(0x1ce)](c,d){const p=n;super['extend'](c,d);const e=getComputedStyle(this['extendedItem'][p(0x1c7)]),f=this['_toolbar']['getById'](p(0x1c1));let g=document[p(0x1cb)](p(0x1e1));g[p(0x1e3)]=e[p(0x1c9)]['split']('\x20')['length']+'x'+e[p(0x1e2)]['split']('\x20')[p(0x1c0)],f[p(0x1bb)](p(0x1bc),g),f['selectedIndex']=0x0,f['onchange']=async()=>{const q=p;if(f[q(0x1db)]==q(0x1bf)){const h=prompt('Number\x20of\x20columns?','4');if(!h)return;const i=prompt(q(0x1de),'4');if(!i)return;const j=this['extendedItem']['openGroup'](q(0x1d6));await this['extendedItem']['updateStyleInSheetOrLocalAsync'](q(0x1cc),'repeat('+h+q(0x1d7)),await this['extendedItem'][q(0x1d9)](q(0x1dc),q(0x1d8)+i+',\x201fr)'),j[q(0x1dd)]();}else{const k=f['value'][q(0x1c8)]('x'),l=this[q(0x1cf)]['openGroup'](q(0x1d6));await this['extendedItem']['updateStyleInSheetOrLocalAsync']('grid-template-columns','repeat('+k[0x0]+',\x201fr)'),await this[q(0x1cf)]['updateStyleInSheetOrLocalAsync'](q(0x1dc),'repeat('+k[0x1]+',\x201fr)'),l[q(0x1dd)]();}},this['_addStyleButton'](p(0x1d5)),this[p(0x1d1)]('justify-content'),this['_addStyleButton']('align-items'),this[p(0x1d1)](p(0x1bd)),this['refresh'](c,d);}}
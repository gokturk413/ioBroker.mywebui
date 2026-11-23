const n=b;(function(c,d){const m=b,e=c();while(!![]){try{const f=parseInt(m(0xf7))/0x1*(parseInt(m(0xef))/0x2)+-parseInt(m(0xf4))/0x3*(-parseInt(m(0xd8))/0x4)+-parseInt(m(0xf5))/0x5*(parseInt(m(0xf6))/0x6)+parseInt(m(0xf0))/0x7*(-parseInt(m(0xdb))/0x8)+parseInt(m(0xe7))/0x9+-parseInt(m(0xe2))/0xa+-parseInt(m(0xee))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xae0c6));function b(c,d){c=c-0xd1;const e=a();let f=e[c];return f;}function a(){const r=[',\x201fr)','commit','7902257LIUjih','8200ghIFmS','14WcwlQa','openGroup','extend','split','3WnMyfb','10YDLwcN','2764218pTdVUh','283uKbyOG','_addStyleButton','align-items','grid-template-columns','value','change\x20grid\x20type','gridTemplateRows','createElement','length','5326588kGrtOV','Number\x20of\x20rows?','updateStyleInSheetOrLocalAsync','5464040TSDuOm','justify-items','_toolbar','gridType','element','extendedItem','afterbegin','1323920aIWgeL','template','selectedIndex','grid-template-rows','innerText','12232350LxRFwV','onchange','insertAdjacentElement','_size','align-content'];a=function(){return r;};return a();}import{html}from'@node-projects/base-custom-webcomponent';import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';import{assetsPath}from'../../../../../Constants.js';export class GridToolbarExtension extends BasicStackedToolbarExtension{static [n(0xe3)]=html`
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
  `;constructor(c,d,e){const o=n;super(c,d,e),this[o(0xea)]['width']=0x270;}[n(0xf2)](c,d){const p=n;super[p(0xf2)](c,d);const e=getComputedStyle(this[p(0xe0)][p(0xdf)]),f=this[p(0xdd)]['getById'](p(0xde));let g=document[p(0xd6)]('option');g[p(0xe6)]=e['gridTemplateColumns'][p(0xf3)]('\x20')[p(0xd7)]+'x'+e[p(0xd5)][p(0xf3)]('\x20')[p(0xd7)],f[p(0xe9)](p(0xe1),g),f[p(0xe4)]=0x0,f[p(0xe8)]=async()=>{const q=p;if(f[q(0xd3)]=='custom'){const h=prompt('Number\x20of\x20columns?','4');if(!h)return;const i=prompt(q(0xd9),'4');if(!i)return;const j=this[q(0xe0)]['openGroup'](q(0xd4));await this[q(0xe0)][q(0xda)](q(0xd2),'repeat('+h+q(0xec)),await this['extendedItem']['updateStyleInSheetOrLocalAsync'](q(0xe5),'repeat('+i+',\x201fr)'),j[q(0xed)]();}else{const k=f['value'][q(0xf3)]('x'),l=this['extendedItem'][q(0xf1)](q(0xd4));await this[q(0xe0)]['updateStyleInSheetOrLocalAsync'](q(0xd2),'repeat('+k[0x0]+q(0xec)),await this['extendedItem'][q(0xda)]('grid-template-rows','repeat('+k[0x1]+q(0xec)),l['commit']();}},this[p(0xf8)](p(0xeb)),this['_addStyleButton']('justify-content'),this[p(0xf8)](p(0xd1)),this['_addStyleButton'](p(0xdc)),this['refresh'](c,d);}}
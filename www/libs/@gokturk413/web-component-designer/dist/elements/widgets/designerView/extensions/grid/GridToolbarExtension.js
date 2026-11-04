const n=b;(function(c,d){const m=b,e=c();while(!![]){try{const f=parseInt(m(0x11e))/0x1+parseInt(m(0x126))/0x2*(parseInt(m(0x139))/0x3)+parseInt(m(0x138))/0x4*(parseInt(m(0x12e))/0x5)+-parseInt(m(0x124))/0x6*(parseInt(m(0x133))/0x7)+parseInt(m(0x120))/0x8*(-parseInt(m(0x13b))/0x9)+-parseInt(m(0x12a))/0xa+parseInt(m(0x128))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xae499));import{html}from'@node-projects/base-custom-webcomponent';import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';import{assetsPath}from'../../../../../Constants.js';export class GridToolbarExtension extends BasicStackedToolbarExtension{static [n(0x11f)]=html`
    <div style="height: 100%; width: 100%;">
      ${BasicStackedToolbarExtension[n(0x131)]}
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
  `;constructor(c,d,e){const o=n;super(c,d,e),this[o(0x132)]['width']=0x270;}['extend'](c,d){const p=n;super['extend'](c,d);const e=getComputedStyle(this[p(0x13e)][p(0x121)]),f=this['_toolbar']['getById'](p(0x123));let g=document[p(0x12d)](p(0x127));g['innerText']=e['gridTemplateColumns']['split']('\x20')[p(0x13f)]+'x'+e[p(0x12b)]['split']('\x20')[p(0x13f)],f[p(0x13a)]('afterbegin',g),f['selectedIndex']=0x0,f[p(0x13d)]=async()=>{const q=p;if(f['value']==q(0x125)){const h=prompt('Number\x20of\x20columns?','4');if(!h)return;const i=prompt('Number\x20of\x20rows?','4');if(!i)return;const j=this['extendedItem'][q(0x134)](q(0x129));await this['extendedItem']['updateStyleInSheetOrLocalAsync'](q(0x137),'repeat('+h+q(0x12c)),await this['extendedItem']['updateStyleInSheetOrLocalAsync']('grid-template-rows',q(0x130)+i+q(0x12c)),j[q(0x13c)]();}else{const k=f['value']['split']('x'),l=this['extendedItem'][q(0x134)](q(0x129));await this[q(0x13e)][q(0x136)](q(0x137),'repeat('+k[0x0]+',\x201fr)'),await this[q(0x13e)]['updateStyleInSheetOrLocalAsync'](q(0x122),'repeat('+k[0x1]+q(0x12c)),l['commit']();}},this[p(0x135)](p(0x12f)),this[p(0x135)]('justify-content'),this['_addStyleButton']('align-items'),this[p(0x135)]('justify-items'),this['refresh'](c,d);}}function b(c,d){c=c-0x11e;const e=a();let f=e[c];return f;}function a(){const r=['onchange','extendedItem','length','1003593quAWVn','template','88cXhjHR','element','grid-template-rows','gridType','678VSRmnu','custom','1436084fBMTuC','option','4298360SjjyhL','change\x20grid\x20type','1925710KysIeP','gridTemplateRows',',\x201fr)','createElement','575mNcoBa','align-content','repeat(','basicTemplate','_size','70973gWTUKC','openGroup','_addStyleButton','updateStyleInSheetOrLocalAsync','grid-template-columns','39732jHsVaY','3SeXdet','insertAdjacentElement','983889kHlYRi','commit'];a=function(){return r;};return a();}
const n=b;(function(c,d){const m=b,e=c();while(!![]){try{const f=parseInt(m(0x18e))/0x1+-parseInt(m(0x18f))/0x2*(parseInt(m(0x17b))/0x3)+parseInt(m(0x181))/0x4+-parseInt(m(0x18d))/0x5+parseInt(m(0x190))/0x6*(-parseInt(m(0x17f))/0x7)+parseInt(m(0x18c))/0x8*(parseInt(m(0x187))/0x9)+-parseInt(m(0x193))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb2d9a));import{html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x178;const e=a();let f=e[c];return f;}import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';function a(){const r=['align-content','value','openGroup',',\x201fr)','justify-content','419148obNbrJ','extend','change\x20grid\x20type','extendedItem','grid-template-rows','128nyEfKk','2009150mhmFWp','1429442JpaagZ','6AGjdSx','559860rGJLNO','Number\x20of\x20columns?','align-items','8072320vzBJll','option','gridTemplateRows','length','custom','repeat(','onchange','template','1296849plcYhV','_addStyleButton','element','split','14VBmRnU','width','5002028yeyBvo'];a=function(){return r;};return a();}import{assetsPath}from'../../../../../Constants.js';export class GridToolbarExtension extends BasicStackedToolbarExtension{static [n(0x17a)]=html`
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
  `;constructor(c,d,e){const o=n;super(c,d,e),this['_size'][o(0x180)]=0x270;}['extend'](c,d){const p=n;super[p(0x188)](c,d);const e=getComputedStyle(this[p(0x18a)][p(0x17d)]),f=this['_toolbar']['getById']('gridType');let g=document['createElement'](p(0x194));g['innerText']=e['gridTemplateColumns'][p(0x17e)]('\x20')[p(0x196)]+'x'+e[p(0x195)][p(0x17e)]('\x20')[p(0x196)],f['insertAdjacentElement']('afterbegin',g),f['selectedIndex']=0x0,f[p(0x179)]=async()=>{const q=p;if(f[q(0x183)]==q(0x197)){const h=prompt(q(0x191),'4');if(!h)return;const i=prompt('Number\x20of\x20rows?','4');if(!i)return;const j=this[q(0x18a)]['openGroup']('change\x20grid\x20type');await this['extendedItem']['updateStyleInSheetOrLocalAsync']('grid-template-columns','repeat('+h+q(0x185)),await this[q(0x18a)]['updateStyleInSheetOrLocalAsync']('grid-template-rows',q(0x178)+i+q(0x185)),j['commit']();}else{const k=f[q(0x183)]['split']('x'),l=this['extendedItem'][q(0x184)](q(0x189));await this[q(0x18a)]['updateStyleInSheetOrLocalAsync']('grid-template-columns',q(0x178)+k[0x0]+q(0x185)),await this['extendedItem']['updateStyleInSheetOrLocalAsync'](q(0x18b),q(0x178)+k[0x1]+q(0x185)),l['commit']();}},this[p(0x17c)](p(0x182)),this['_addStyleButton'](p(0x186)),this['_addStyleButton'](p(0x192)),this[p(0x17c)]('justify-items'),this['refresh'](c,d);}}
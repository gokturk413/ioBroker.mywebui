function a(){const r=['866532iSaGoW','onchange','1046792KXYgyF','_addStyleButton','width','grid-template-rows','408390mwYSin',',\x201fr)','updateStyleInSheetOrLocalAsync','960DKtSfO','basicTemplate','gridType','insertAdjacentElement','extendedItem','value','6ZpIEpZ','21PjHpFY','change\x20grid\x20type','9jyBGLd','openGroup','justify-content','repeat(','262vRwEBv','custom','gridTemplateColumns','602612NWPCiw','25cEjltx','align-items','align-content','createElement','extend','length','9698jSKvVl','split','gridTemplateRows','template','11603826sQtsCt','27280UXcmoU'];a=function(){return r;};return a();}const n=b;(function(c,d){const m=b,e=c();while(!![]){try{const f=parseInt(m(0x100))/0x1*(parseInt(m(0x10a))/0x2)+-parseInt(m(0x11f))/0x3*(parseInt(m(0x103))/0x4)+-parseInt(m(0x104))/0x5*(parseInt(m(0x110))/0x6)+parseInt(m(0x120))/0x7*(-parseInt(m(0x112))/0x8)+parseInt(m(0xfc))/0x9*(-parseInt(m(0x116))/0xa)+-parseInt(m(0x10f))/0xb*(-parseInt(m(0x119))/0xc)+parseInt(m(0x10e))/0xd;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xdcdbe));import{html}from'@node-projects/base-custom-webcomponent';import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';import{assetsPath}from'../../../../../Constants.js';function b(c,d){c=c-0xfb;const e=a();let f=e[c];return f;}export class GridToolbarExtension extends BasicStackedToolbarExtension{static [n(0x10d)]=html`
    <div style="height: 100%; width: 100%;">
      ${BasicStackedToolbarExtension[n(0x11a)]}
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
  `;constructor(c,d,e){const o=n;super(c,d,e),this['_size'][o(0x114)]=0x270;}[n(0x108)](c,d){const p=n;super[p(0x108)](c,d);const e=getComputedStyle(this[p(0x11d)]['element']),f=this['_toolbar']['getById'](p(0x11b));let g=document[p(0x107)]('option');g['innerText']=e[p(0x102)]['split']('\x20')[p(0x109)]+'x'+e[p(0x10c)][p(0x10b)]('\x20')['length'],f[p(0x11c)]('afterbegin',g),f['selectedIndex']=0x0,f[p(0x111)]=async()=>{const q=p;if(f[q(0x11e)]==q(0x101)){const h=prompt('Number\x20of\x20columns?','4');if(!h)return;const i=prompt('Number\x20of\x20rows?','4');if(!i)return;const j=this['extendedItem'][q(0xfd)](q(0xfb));await this[q(0x11d)]['updateStyleInSheetOrLocalAsync']('grid-template-columns',q(0xff)+h+',\x201fr)'),await this[q(0x11d)]['updateStyleInSheetOrLocalAsync'](q(0x115),q(0xff)+i+',\x201fr)'),j['commit']();}else{const k=f['value'][q(0x10b)]('x'),l=this['extendedItem']['openGroup']('change\x20grid\x20type');await this[q(0x11d)]['updateStyleInSheetOrLocalAsync']('grid-template-columns','repeat('+k[0x0]+q(0x117)),await this[q(0x11d)][q(0x118)](q(0x115),'repeat('+k[0x1]+q(0x117)),l['commit']();}},this[p(0x113)](p(0x106)),this[p(0x113)](p(0xfe)),this[p(0x113)](p(0x105)),this['_addStyleButton']('justify-items'),this['refresh'](c,d);}}
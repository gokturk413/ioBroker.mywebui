function a(){const r=['updateStyleInSheetOrLocalAsync','_addStyleButton','40510bQBRVp','gridTemplateColumns','innerText','basicTemplate','getById',',\x201fr)','56tbdDPU','1916960SiuQps','template','commit','align-items','afterbegin','557980enEKjM','314020VtGEMh','grid-template-rows','openGroup','createElement','_toolbar','width','option','length','159366wcvQmD','extendedItem','3qTVKmJ','4140150WiiiCp','grid-template-columns','align-content','468KAqfiW','extend','repeat(','1494682bxbVmh','justify-content'];a=function(){return r;};return a();}const n=b;function b(c,d){c=c-0x1ef;const e=a();let f=e[c];return f;}(function(c,d){const m=b,e=c();while(!![]){try{const f=-parseInt(m(0x20f))/0x1+parseInt(m(0x1fe))/0x2+-parseInt(m(0x1f7))/0x3*(parseInt(m(0x20e))/0x4)+parseInt(m(0x1f8))/0x5+-parseInt(m(0x1f5))/0x6*(parseInt(m(0x208))/0x7)+-parseInt(m(0x209))/0x8+-parseInt(m(0x1fb))/0x9*(parseInt(m(0x202))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x70158));import{html}from'@node-projects/base-custom-webcomponent';import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';import{assetsPath}from'../../../../../Constants.js';export class GridToolbarExtension extends BasicStackedToolbarExtension{static [n(0x20a)]=html`
    <div style="height: 100%; width: 100%;">
      ${BasicStackedToolbarExtension[n(0x205)]}
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
  `;constructor(c,d,e){const o=n;super(c,d,e),this['_size'][o(0x1f2)]=0x270;}[n(0x1fc)](c,d){const p=n;super[p(0x1fc)](c,d);const e=getComputedStyle(this['extendedItem']['element']),f=this[p(0x1f1)][p(0x206)]('gridType');let g=document[p(0x1f0)](p(0x1f3));g[p(0x204)]=e[p(0x203)]['split']('\x20')[p(0x1f4)]+'x'+e['gridTemplateRows']['split']('\x20')[p(0x1f4)],f['insertAdjacentElement'](p(0x20d),g),f['selectedIndex']=0x0,f['onchange']=async()=>{const q=p;if(f['value']=='custom'){const h=prompt('Number\x20of\x20columns?','4');if(!h)return;const i=prompt('Number\x20of\x20rows?','4');if(!i)return;const j=this['extendedItem'][q(0x1ef)]('change\x20grid\x20type');await this[q(0x1f6)]['updateStyleInSheetOrLocalAsync']('grid-template-columns','repeat('+h+',\x201fr)'),await this['extendedItem'][q(0x200)](q(0x210),'repeat('+i+',\x201fr)'),j['commit']();}else{const k=f['value']['split']('x'),l=this[q(0x1f6)][q(0x1ef)]('change\x20grid\x20type');await this[q(0x1f6)][q(0x200)](q(0x1f9),'repeat('+k[0x0]+',\x201fr)'),await this[q(0x1f6)][q(0x200)]('grid-template-rows',q(0x1fd)+k[0x1]+q(0x207)),l[q(0x20b)]();}},this['_addStyleButton'](p(0x1fa)),this['_addStyleButton'](p(0x1ff)),this[p(0x201)](p(0x20c)),this['_addStyleButton']('justify-items'),this['refresh'](c,d);}}
const n=b;(function(c,d){const m=b,e=c();while(!![]){try{const f=parseInt(m(0x15b))/0x1*(-parseInt(m(0x146))/0x2)+-parseInt(m(0x159))/0x3*(-parseInt(m(0x161))/0x4)+parseInt(m(0x164))/0x5*(parseInt(m(0x157))/0x6)+-parseInt(m(0x15c))/0x7+parseInt(m(0x165))/0x8*(parseInt(m(0x160))/0x9)+-parseInt(m(0x147))/0xa*(parseInt(m(0x149))/0xb)+parseInt(m(0x150))/0xc*(parseInt(m(0x14e))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x924a9));import{html}from'@node-projects/base-custom-webcomponent';import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';import{assetsPath}from'../../../../../Constants.js';function a(){const r=['grid-template-rows','26IoWyMJ','custom','5592732yDxVAs','selectedIndex','extendedItem','justify-items','grid-template-columns','extend','onchange','44184tZgNwQ','gridType','12ydWLyo','_toolbar','13gehHLl','3661252cSCVnj',',\x201fr)','width','value','1035XBvBHA','512012DyPSaP','gridTemplateColumns','_addStyleButton','145jcTevv','13336WLKBZX','commit','repeat(','justify-content','template','56918DrByBw','10IvhJPM','basicTemplate','3929013avoTqd','updateStyleInSheetOrLocalAsync','align-items','split'];a=function(){return r;};return a();}function b(c,d){c=c-0x143;const e=a();let f=e[c];return f;}export class GridToolbarExtension extends BasicStackedToolbarExtension{static [n(0x145)]=html`
    <div style="height: 100%; width: 100%;">
      ${BasicStackedToolbarExtension[n(0x148)]}
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
  `;constructor(c,d,e){const o=n;super(c,d,e),this['_size'][o(0x15e)]=0x270;}['extend'](c,d){const p=n;super[p(0x155)](c,d);const e=getComputedStyle(this[p(0x152)]['element']),f=this[p(0x15a)]['getById'](p(0x158));let g=document['createElement']('option');g['innerText']=e[p(0x162)]['split']('\x20')['length']+'x'+e['gridTemplateRows']['split']('\x20')['length'],f['insertAdjacentElement']('afterbegin',g),f[p(0x151)]=0x0,f[p(0x156)]=async()=>{const q=p;if(f[q(0x15f)]==q(0x14f)){const h=prompt('Number\x20of\x20columns?','4');if(!h)return;const i=prompt('Number\x20of\x20rows?','4');if(!i)return;const j=this[q(0x152)]['openGroup']('change\x20grid\x20type');await this['extendedItem'][q(0x14a)](q(0x154),q(0x143)+h+q(0x15d)),await this[q(0x152)][q(0x14a)](q(0x14d),'repeat('+i+',\x201fr)'),j['commit']();}else{const k=f['value'][q(0x14c)]('x'),l=this['extendedItem']['openGroup']('change\x20grid\x20type');await this['extendedItem'][q(0x14a)](q(0x154),q(0x143)+k[0x0]+q(0x15d)),await this[q(0x152)]['updateStyleInSheetOrLocalAsync']('grid-template-rows',q(0x143)+k[0x1]+',\x201fr)'),l[q(0x166)]();}},this['_addStyleButton']('align-content'),this['_addStyleButton'](p(0x144)),this[p(0x163)](p(0x14b)),this[p(0x163)](p(0x153)),this['refresh'](c,d);}}
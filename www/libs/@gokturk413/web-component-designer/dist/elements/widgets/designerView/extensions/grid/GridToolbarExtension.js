function a(){const p=['extendedItem','gridType','2159368StACsh','grid-template-rows','length','4201373oTCeLP','custom','_toolbar','align-content','652428biEqRZ','refresh','1376948OaPvWf','change\x20grid\x20type','356138ixWMDh','updateStyleInSheetOrLocalAsync','7bTVbyr','Number\x20of\x20rows?','split','6vRQeFK','gridTemplateColumns','1576405XNprUV','justify-items','onchange','_addStyleButton','gridTemplateRows','afterbegin','10UvnMcO','6DJHhmy','repeat(','699710FJMFoZ','grid-template-columns','justify-content',',\x201fr)'];a=function(){return p;};return a();}(function(c,d){const m=b,e=c();while(!![]){try{const f=-parseInt(m(0x1f9))/0x1+parseInt(m(0x209))/0x2+parseInt(m(0x1fe))/0x3*(parseInt(m(0x1f7))/0x4)+parseInt(m(0x200))/0x5*(-parseInt(m(0x207))/0x6)+parseInt(m(0x1fb))/0x7*(-parseInt(m(0x20f))/0x8)+-parseInt(m(0x1f5))/0x9+parseInt(m(0x206))/0xa*(parseInt(m(0x212))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x633a8));import{html}from'@node-projects/base-custom-webcomponent';import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';import{assetsPath}from'../../../../../Constants.js';function b(c,d){c=c-0x1f2;const e=a();let f=e[c];return f;}export class GridToolbarExtension extends BasicStackedToolbarExtension{static ['template']=html`
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
  `;constructor(c,d,e){super(c,d,e),this['_size']['width']=0x270;}['extend'](c,d){const n=b;super['extend'](c,d);const e=getComputedStyle(this[n(0x20d)]['element']),f=this[n(0x1f3)]['getById'](n(0x20e));let g=document['createElement']('option');g['innerText']=e[n(0x1ff)]['split']('\x20')[n(0x211)]+'x'+e[n(0x204)]['split']('\x20')[n(0x211)],f['insertAdjacentElement'](n(0x205),g),f['selectedIndex']=0x0,f[n(0x202)]=async()=>{const o=n;if(f['value']==o(0x1f2)){const h=prompt('Number\x20of\x20columns?','4');if(!h)return;const i=prompt(o(0x1fc),'4');if(!i)return;const j=this['extendedItem']['openGroup'](o(0x1f8));await this[o(0x20d)][o(0x1fa)]('grid-template-columns','repeat('+h+',\x201fr)'),await this['extendedItem']['updateStyleInSheetOrLocalAsync']('grid-template-rows',o(0x208)+i+',\x201fr)'),j['commit']();}else{const k=f['value'][o(0x1fd)]('x'),l=this[o(0x20d)]['openGroup'](o(0x1f8));await this[o(0x20d)][o(0x1fa)](o(0x20a),'repeat('+k[0x0]+',\x201fr)'),await this[o(0x20d)]['updateStyleInSheetOrLocalAsync'](o(0x210),'repeat('+k[0x1]+o(0x20c)),l['commit']();}},this['_addStyleButton'](n(0x1f4)),this[n(0x203)](n(0x20b)),this['_addStyleButton']('align-items'),this[n(0x203)](n(0x201)),this[n(0x1f6)](c,d);}}
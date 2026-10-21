const n=b;(function(c,d){const m=b,e=c();while(!![]){try{const f=-parseInt(m(0xde))/0x1+parseInt(m(0xd9))/0x2*(parseInt(m(0xd1))/0x3)+-parseInt(m(0xe9))/0x4*(-parseInt(m(0xd7))/0x5)+parseInt(m(0xdc))/0x6+-parseInt(m(0xcf))/0x7+parseInt(m(0xe7))/0x8*(parseInt(m(0xe1))/0x9)+-parseInt(m(0xe6))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb9f52));import{html}from'@node-projects/base-custom-webcomponent';import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';function a(){const r=['1010238tqSYun','value','_addStyleButton','9700686ZbQKzi','align-items',',\x201fr)','updateStyleInSheetOrLocalAsync','template','9874830wTUCot','8TAaFUa','option','863812HwFLLz','change\x20grid\x20type','justify-items','gridTemplateRows','gridType','grid-template-columns','gridTemplateColumns','innerText','5019210lpZxWX','getById','24369yArQjn','onchange','selectedIndex','extend','split','width','5glMPXG','extendedItem','182UxyUKp','openGroup','element','8660598KBBvKy','repeat('];a=function(){return r;};return a();}function b(c,d){c=c-0xcf;const e=a();let f=e[c];return f;}import{assetsPath}from'../../../../../Constants.js';export class GridToolbarExtension extends BasicStackedToolbarExtension{static [n(0xe5)]=html`
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
  `;constructor(c,d,e){const o=n;super(c,d,e),this['_size'][o(0xd6)]=0x270;}['extend'](c,d){const p=n;super[p(0xd4)](c,d);const e=getComputedStyle(this[p(0xd8)][p(0xdb)]),f=this['_toolbar'][p(0xd0)](p(0xed));let g=document['createElement'](p(0xe8));g[p(0xf0)]=e[p(0xef)][p(0xd5)]('\x20')['length']+'x'+e[p(0xec)]['split']('\x20')['length'],f['insertAdjacentElement']('afterbegin',g),f[p(0xd3)]=0x0,f[p(0xd2)]=async()=>{const q=p;if(f[q(0xdf)]=='custom'){const h=prompt('Number\x20of\x20columns?','4');if(!h)return;const i=prompt('Number\x20of\x20rows?','4');if(!i)return;const j=this['extendedItem'][q(0xda)]('change\x20grid\x20type');await this[q(0xd8)]['updateStyleInSheetOrLocalAsync'](q(0xee),q(0xdd)+h+q(0xe3)),await this['extendedItem'][q(0xe4)]('grid-template-rows',q(0xdd)+i+q(0xe3)),j['commit']();}else{const k=f[q(0xdf)]['split']('x'),l=this['extendedItem']['openGroup'](q(0xea));await this[q(0xd8)][q(0xe4)]('grid-template-columns',q(0xdd)+k[0x0]+',\x201fr)'),await this['extendedItem'][q(0xe4)]('grid-template-rows',q(0xdd)+k[0x1]+q(0xe3)),l['commit']();}},this[p(0xe0)]('align-content'),this['_addStyleButton']('justify-content'),this[p(0xe0)](p(0xe2)),this['_addStyleButton'](p(0xeb)),this['refresh'](c,d);}}
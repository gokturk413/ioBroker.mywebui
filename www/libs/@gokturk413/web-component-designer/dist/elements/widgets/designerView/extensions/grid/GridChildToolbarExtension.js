const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0x16e))/0x1*(-parseInt(i(0x16c))/0x2)+parseInt(i(0x16b))/0x3+parseInt(i(0x166))/0x4*(parseInt(i(0x168))/0x5)+-parseInt(i(0x15d))/0x6*(parseInt(i(0x15e))/0x7)+-parseInt(i(0x164))/0x8+parseInt(i(0x15b))/0x9*(-parseInt(i(0x161))/0xa)+-parseInt(i(0x160))/0xb*(-parseInt(i(0x15f))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x80fc7));function b(c,d){c=c-0x15b;const e=a();let f=e[c];return f;}import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../Constants.js';import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';export class GridChildToolbarExtension extends BasicStackedToolbarExtension{static ['template']=html`
    <div style="height: 100%; width: 100%;">
      <div style="display: flex; flex-direction: column;">
        <span style="font-size: 10px; color: #00aff0;">column:</span>
        <input type="text" title="column" id="gridColumn" style="pointer-events: auto; height: 12px; width: 45px; padding: 0; margin-right: 5px">
      </div>
       <div style="display: flex; flex-direction: column;">
        <span style="font-size: 10px; color: #00aff0;">row:</span>
        <input type="text" title="column" id="gridRow" style="pointer-events: auto; height: 12px; width: 45px; padding: 0; margin-right: 10px">
      </div>
      <node-projects-image-button-list-selector property="align-self" no-value-in-header id="align-self">
        <img title="start" data-value="start" src="${assetsPath}images/chromeDevtools/align-items-start-icon.svg">
        <img title="center" data-value="center" src="${assetsPath}images/chromeDevtools/align-items-center-icon.svg">
        <img title="end" data-value="end" src="${assetsPath}images/chromeDevtools/align-items-end-icon.svg">
        <img title="stretch" data-value="stretch" src="${assetsPath}images/chromeDevtools/align-items-stretch-icon.svg">
      </node-projects-image-button-list-selector>
      <node-projects-image-button-list-selector property="justify-self" no-value-in-header id="justify-self">
        <img title="start" data-value="start" src="${assetsPath}images/chromeDevtools/justify-items-start-icon.svg">
        <img title="center" data-value="center" src="${assetsPath}images/chromeDevtools/justify-items-center-icon.svg">
        <img title="end" data-value="end" src="${assetsPath}images/chromeDevtools/justify-items-end-icon.svg">
        <img title="stretch" data-value="stretch" src="${assetsPath}images/chromeDevtools/justify-items-stretch-icon.svg">
      </node-projects-image-button-list-selector>
    </div>`;constructor(c,d,e){super(c,d,e),this['_size']['width']=0xfa;}[j(0x169)](c,d){const k=j;super[k(0x169)](c,d);const e=getComputedStyle(this[k(0x163)][k(0x15c)]),f=this[k(0x16a)]['getById']('gridColumn');f&&(f['value']=e['gridColumn'],f['onkeyup']=async h=>{if(h['key']==='Enter')await this['extendedItem']['updateStyleInSheetOrLocalAsync']('gridColumn',f['value']);});const g=this['_toolbar'][k(0x162)]('gridRow');g&&(g['value']=e['gridColumn'],g['onkeyup']=async h=>{const l=k;if(h[l(0x167)]==='Enter')await this['extendedItem']['updateStyleInSheetOrLocalAsync'](l(0x16d),g['value']);}),this[k(0x165)]('align-self'),this['_addStyleButton']('justify-self'),this['refresh'](c,d);}}function a(){const m=['170652xhOFlM','key','35VnBrIN','extend','_toolbar','842277EBjWTM','649378zoblzl','gridRow','1rgLVsM','319482fFrVdv','element','12rASHkj','508263gnXWfW','24bCdiet','6655EhXfCR','10pquhHf','getById','extendedItem','1570048ZpRtPE','_addStyleButton'];a=function(){return m;};return a();}
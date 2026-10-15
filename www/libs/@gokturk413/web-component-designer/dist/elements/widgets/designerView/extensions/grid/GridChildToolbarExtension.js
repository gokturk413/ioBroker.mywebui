const j=b;(function(c,d){const i=b,e=c();while(!![]){try{const f=-parseInt(i(0x1dc))/0x1+-parseInt(i(0x1ce))/0x2+-parseInt(i(0x1cc))/0x3+parseInt(i(0x1cd))/0x4*(parseInt(i(0x1df))/0x5)+parseInt(i(0x1d5))/0x6*(-parseInt(i(0x1d8))/0x7)+parseInt(i(0x1d2))/0x8*(parseInt(i(0x1d7))/0x9)+parseInt(i(0x1d4))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6df2f));function b(c,d){c=c-0x1c9;const e=a();let f=e[c];return f;}import{html}from'@node-projects/base-custom-webcomponent';import{assetsPath}from'../../../../../Constants.js';import{BasicStackedToolbarExtension}from'../BasicStackedToolbarExtension.js';export class GridChildToolbarExtension extends BasicStackedToolbarExtension{static [j(0x1d6)]=html`
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
    </div>`;constructor(c,d,e){const k=j;super(c,d,e),this[k(0x1dd)][k(0x1e0)]=0xfa;}['extend'](c,d){const l=j;super['extend'](c,d);const e=getComputedStyle(this['extendedItem'][l(0x1d3)]),f=this['_toolbar'][l(0x1e1)](l(0x1cf));f&&(f[l(0x1c9)]=e[l(0x1cf)],f[l(0x1de)]=async h=>{const m=l;if(h['key']==='Enter')await this['extendedItem'][m(0x1ca)]('gridColumn',f[m(0x1c9)]);});const g=this['_toolbar']['getById']('gridRow');g&&(g['value']=e['gridColumn'],g[l(0x1de)]=async h=>{const n=l;if(h[n(0x1cb)]==='Enter')await this['extendedItem'][n(0x1ca)](n(0x1da),g[n(0x1c9)]);}),this[l(0x1d0)](l(0x1d1)),this[l(0x1d0)](l(0x1d9)),this[l(0x1db)](c,d);}}function a(){const o=['480239bdcfdg','_size','onkeyup','10mAJaEd','width','getById','value','updateStyleInSheetOrLocalAsync','key','702000tTdAms','1646992QCdYEz','694430QAExMw','gridColumn','_addStyleButton','align-self','2164248kPudEK','element','8256060ZEqrEC','5478PLKPMC','template','18yJMnnU','5201MatJVt','justify-self','gridRow','refresh'];a=function(){return o;};return a();}
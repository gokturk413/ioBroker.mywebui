function a(){const D=['part','height','createElement','24070HDzjCT','26275GPKBUy','tag','designerTools','description','position','setAttribute','import','9ZgkPrN','defaultStyles','template','preventDefault','24538884KHCdZj','error\x20creating\x20gost\x20elment','table','defaultAttributes','button','body','currentTarget','stringify','tool','\x22></td>','width','576ZOtYjE','3789741SctsOn','-1000px','ontouchstart','defaultWidth','<td\x20align=\x22left\x22\x20valign=\x22middle\x22\x20style=\x22width:20px;\x22><img\x20style=\x22width:16px;height:16px\x22\x20src=\x22','setDragImage','<td\x20align=\x22left\x22\x20>','-500px','2636256DHvTwa','absolute','data:','</tr></table>\x0a','innerHTML','ghostElement','innerText','4vjOoXt','appendChild','firstChild','ondragend','selectNode','dashed','389852fdLOHu','displayHtml','globalContext','5NguWmO','icon','style','removeChild','top','defaultHeight','_table','14155352tLARIh','getBoundingClientRect','left','7909BNWMRH'];a=function(){return D;};return a();}const w=b;(function(c,d){const v=b,e=c();while(!![]){try{const f=-parseInt(v(0x171))/0x1*(-parseInt(v(0x16e))/0x2)+parseInt(v(0x159))/0x3*(parseInt(v(0x168))/0x4)+parseInt(v(0x180))/0x5*(parseInt(v(0x158))/0x6)+-parseInt(v(0x161))/0x7+-parseInt(v(0x178))/0x8*(parseInt(v(0x187))/0x9)+parseInt(v(0x17f))/0xa*(-parseInt(v(0x17b))/0xb)+parseInt(v(0x14d))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xde50c));import{dragDropFormatNameElementDefinition}from'../../../Constants.js';import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{NamedTools}from'../designerView/tools/NamedTools.js';function b(c,d){c=c-0x14d;const e=a();let f=e[c];return f;}export class PaletteElements extends BaseCustomWebComponentLazyAppend{static [w(0x173)]=css`
    :host {
      display: block;
      box-sizing: border-box;
      height: 100%;
      overflow: auto;        
    }

    button {
      background-color: transparent;
      color: var(--wcd-color-text, white);
      border: none;
      font-size: 13px;
      display: block;
      cursor: pointer;
      width: 100%;
      text-align: left;
      padding: 8px 14px;
    }
    button:hover {
      background: var(--wcd-palette-item-hover-background, var(--light-grey, var(--wcd-color-surface-hover, #383f52)));
    }

    table {
      width: 100%
    }

    td {
      color: var(--wcd-color-text, white);
      font-size: 13px;
    }

    div {
      text-transform: uppercase;
      font-size: 12px;
      font-weight: bold;
      padding: 4px 14px;
    }
    `;static [w(0x189)]=html`
    <table id="table">
    </table>
  `;['_table'];constructor(){const x=w;super(),this[x(0x177)]=this['_getDomElement'](x(0x14f));}['loadElements'](c,d,e){const y=w;this[y(0x177)]['replaceChildren']();for(const f of d){const g=document['createElement']('tr'),h=document[y(0x17e)]('td'),i=document['createElement'](y(0x151));i[y(0x185)](y(0x17c),'button');if(f[y(0x172)]&&!f['displayHtml']){let k=f['icon'];!f['icon']['startsWith'](y(0x163))&&(k=e+f[y(0x172)]),i['innerHTML']='<table><tr>'+y(0x15d)+k+y(0x156)+y(0x15f)+f[y(0x181)]+'</td>'+y(0x164);}else{if(f[y(0x16f)])i['innerHTML']=f['displayHtml'];else i[y(0x167)]=f['name']?f['name']:f['tag'];}i['draggable']=!![],i['ondragstart']=l=>{const z=y;l['dataTransfer']['setData'](dragDropFormatNameElementDefinition,JSON[z(0x154)](f)),l[z(0x153)]['style']['outline']=z(0x16d);if(f[z(0x166)]){if(typeof f['ghostElement']==='string'){const m=document['createRange']();m[z(0x16c)](document[z(0x152)]);const n=m['createContextualFragment'](f[z(0x166)]);let o=n[z(0x16a)];o[z(0x173)][z(0x184)]=z(0x162),o['style'][z(0x175)]=z(0x15a),document[z(0x152)][z(0x169)](o),l['dataTransfer'][z(0x15e)](o,0x0,0x0),requestAnimationFrame(()=>document['body'][z(0x174)](o));}else l['dataTransfer']['setDragImage'](f[z(0x166)],0x0,0x0);}else{if(!f['import'])try{let p=document['createElement'](f[z(0x181)]);if(f['defaultContent'])p[z(0x165)]=f['defaultContent'];if(f[z(0x15c)])p['style']['width']=f['defaultWidth'];if(f[z(0x176)])p[z(0x173)]['height']=f['defaultHeight'];if(f[z(0x150)])for(let r in f[z(0x150)]){p[z(0x185)](r,f['defaultAttributes'][r]);}if(f['defaultStyles'])for(let t in f['defaultStyles']){p['style'][t]=f[z(0x188)][t];}p[z(0x173)]['position']=z(0x162);if(f['defaultWidth'])p['style'][z(0x175)]='-'+(parseInt(f[z(0x176)])+0x1f4)+'px';else p['style']['top']='-500px';if(f[z(0x15c)])p[z(0x173)]['left']='-'+(parseInt(f[z(0x15c)])+0x1f4)+'px';else p[z(0x173)][z(0x17a)]=z(0x160);document['body']['appendChild'](p);let q=p[z(0x179)]();if(q[z(0x157)]>0x0&&q[z(0x17d)]>0x0)l['dataTransfer'][z(0x15e)](p,0x0,0x0);requestAnimationFrame(()=>document['body'][z(0x174)](p));}catch(u){console['warn'](z(0x14e),u);}}},i[y(0x16b)]=l=>{const A=y;f[A(0x186)]=null,l[A(0x153)][A(0x173)]['outline']='none';},i[y(0x15b)]=l=>{const B=y;l[B(0x18a)]();},i['onclick']=l=>{const C=y;let m=c[C(0x182)]['get'](f[C(0x155)]??NamedTools['DrawElementTool']);if(typeof m=='function')m=new m(f);c[C(0x170)][C(0x155)]=m;},h[y(0x169)](i),g['appendChild'](h);const j=document['createElement']('td');j[y(0x167)]=f[y(0x183)]??'',g['appendChild'](j),this['_table'][y(0x169)](g);}}}customElements['define']('node-projects-palette-elements',PaletteElements);
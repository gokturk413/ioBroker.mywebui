const w=b;function b(c,d){c=c-0x18e;const e=a();let f=e[c];return f;}(function(c,d){const v=b,e=c();while(!![]){try{const f=parseInt(v(0x1c4))/0x1*(parseInt(v(0x190))/0x2)+-parseInt(v(0x196))/0x3*(-parseInt(v(0x199))/0x4)+-parseInt(v(0x1ba))/0x5+parseInt(v(0x19c))/0x6+-parseInt(v(0x1b4))/0x7+-parseInt(v(0x1a1))/0x8*(parseInt(v(0x1a2))/0x9)+parseInt(v(0x1af))/0xa*(-parseInt(v(0x1c3))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9fbab));import{dragDropFormatNameElementDefinition}from'../../../Constants.js';import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{NamedTools}from'../designerView/tools/NamedTools.js';export class PaletteElements extends BaseCustomWebComponentLazyAppend{static [w(0x1b3)]=css`
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
    `;static ['template']=html`
    <table id="table">
    </table>
  `;['_table'];constructor(){const x=w;super(),this['_table']=this['_getDomElement'](x(0x1be));}['loadElements'](c,d,e){const y=w;this[y(0x1b1)][y(0x1c6)]();for(const f of d){const g=document['createElement']('tr'),h=document[y(0x1a3)]('td'),i=document['createElement'](y(0x1bf));i[y(0x1b2)](y(0x197),y(0x1bf));if(f['icon']&&!f['displayHtml']){let k=f[y(0x18e)];!f['icon'][y(0x1b8)]('data:')&&(k=e+f[y(0x18e)]),i[y(0x1a6)]=y(0x1bb)+'<td\x20align=\x22left\x22\x20valign=\x22middle\x22\x20style=\x22width:20px;\x22><img\x20style=\x22width:16px;height:16px\x22\x20src=\x22'+k+'\x22></td>'+y(0x1a9)+f[y(0x193)]+'</td>'+y(0x1a5);}else{if(f[y(0x191)])i['innerHTML']=f['displayHtml'];else i[y(0x194)]=f[y(0x19a)]?f['name']:f['tag'];}i[y(0x1b9)]=!![],i[y(0x1c9)]=l=>{const z=y;l[z(0x18f)][z(0x1c0)](dragDropFormatNameElementDefinition,JSON['stringify'](f)),l['currentTarget'][z(0x1b3)][z(0x1c2)]='dashed';if(f['ghostElement']){if(typeof f[z(0x1bd)]==='string'){const m=document[z(0x1a0)]();m[z(0x1b0)](document[z(0x198)]);const n=m['createContextualFragment'](f[z(0x1bd)]);let o=n['firstChild'];o['style']['position']=z(0x1b5),o['style']['top']=z(0x192),document['body']['appendChild'](o),l[z(0x18f)]['setDragImage'](o,0x0,0x0),requestAnimationFrame(()=>document['body'][z(0x1ad)](o));}else l[z(0x18f)]['setDragImage'](f[z(0x1bd)],0x0,0x0);}else{if(!f[z(0x1c5)])try{let p=document['createElement'](f['tag']);if(f['defaultContent'])p['innerHTML']=f[z(0x1c1)];if(f['defaultWidth'])p[z(0x1b3)]['width']=f['defaultWidth'];if(f['defaultHeight'])p['style']['height']=f['defaultHeight'];if(f['defaultAttributes'])for(let r in f[z(0x1b6)]){p[z(0x1b2)](r,f['defaultAttributes'][r]);}if(f[z(0x1b7)])for(let t in f[z(0x1b7)]){p['style'][t]=f[z(0x1b7)][t];}p['style']['position']='absolute';if(f[z(0x1c8)])p[z(0x1b3)]['top']='-'+(parseInt(f['defaultHeight'])+0x1f4)+'px';else p['style']['top']=z(0x19d);if(f[z(0x1c8)])p[z(0x1b3)][z(0x1ab)]='-'+(parseInt(f['defaultWidth'])+0x1f4)+'px';else p[z(0x1b3)][z(0x1ab)]=z(0x19d);document[z(0x198)][z(0x1ac)](p);let q=p[z(0x195)]();if(q[z(0x1ae)]>0x0&&q[z(0x1aa)]>0x0)l[z(0x18f)][z(0x1c7)](p,0x0,0x0);requestAnimationFrame(()=>document[z(0x198)][z(0x1ad)](p));}catch(u){console[z(0x1a8)]('error\x20creating\x20gost\x20elment',u);}}},i[y(0x19e)]=l=>{const A=y;f[A(0x1c5)]=null,l['currentTarget']['style']['outline']='none';},i[y(0x1a7)]=l=>{const B=y;l[B(0x1bc)]();},i['onclick']=l=>{const C=y;let m=c[C(0x19b)]['get'](f[C(0x19f)]??NamedTools['DrawElementTool']);if(typeof m=='function')m=new m(f);c['globalContext']['tool']=m;},h[y(0x1ac)](i),g[y(0x1ac)](h);const j=document[y(0x1a3)]('td');j['innerText']=f['description']??'',g['appendChild'](j),this[y(0x1b1)]['appendChild'](g);}}}customElements['define'](w(0x1a4),PaletteElements);function a(){const D=['outline','73282yMGSUc','503yOOATu','import','replaceChildren','setDragImage','defaultWidth','ondragstart','icon','dataTransfer','4132oobwQD','displayHtml','-1000px','tag','innerText','getBoundingClientRect','306333wKgVMB','part','body','36McPLMQ','name','designerTools','5337564XfYcTe','-500px','ondragend','tool','createRange','3408PVhbpZ','9549wTjKZd','createElement','node-projects-palette-elements','</tr></table>\x0a','innerHTML','ontouchstart','warn','<td\x20align=\x22left\x22\x20>','height','left','appendChild','removeChild','width','2330JTPnxC','selectNode','_table','setAttribute','style','1025206RVedfZ','absolute','defaultAttributes','defaultStyles','startsWith','draggable','214250rXAkkE','<table><tr>','preventDefault','ghostElement','table','button','setData','defaultContent'];a=function(){return D;};return a();}
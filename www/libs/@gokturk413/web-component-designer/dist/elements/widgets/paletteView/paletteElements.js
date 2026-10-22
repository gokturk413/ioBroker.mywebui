const w=b;function b(c,d){c=c-0x149;const e=a();let f=e[c];return f;}function a(){const C=['defaultContent','1914zUrhOd','tool','draggable','26xnvRrd','height','18567HAOVzf','define','ondragend','ghostElement','firstChild','icon','startsWith','dataTransfer','setAttribute','style','7003491kHqiFv','createContextualFragment','appendChild','_table','-500px','absolute','20loWvUY','node-projects-palette-elements','102690lGNiyI','defaultWidth','</tr></table>\x0a','innerHTML','name','setDragImage','table','error\x20creating\x20gost\x20elment','<td\x20align=\x22left\x22\x20>','defaultHeight','defaultStyles','ondragstart','innerText','defaultAttributes','createElement','width','1636tilHbX','6hdlZzZ','<table><tr>','153008hkcrPQ','getBoundingClientRect','<td\x20align=\x22left\x22\x20valign=\x22middle\x22\x20style=\x22width:20px;\x22><img\x20style=\x22width:16px;height:16px\x22\x20src=\x22','100289cAmIcN','stringify','13481tazexh','body'];a=function(){return C;};return a();}(function(c,d){const v=b,e=c();while(!![]){try{const f=-parseInt(v(0x152))/0x1*(parseInt(v(0x158))/0x2)+parseInt(v(0x155))/0x3*(-parseInt(v(0x14a))/0x4)+-parseInt(v(0x16c))/0x5+-parseInt(v(0x14b))/0x6*(parseInt(v(0x150))/0x7)+parseInt(v(0x14d))/0x8+parseInt(v(0x15a))/0x9*(parseInt(v(0x16a))/0xa)+parseInt(v(0x164))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2e1c9));import{dragDropFormatNameElementDefinition}from'../../../Constants.js';import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{NamedTools}from'../designerView/tools/NamedTools.js';export class PaletteElements extends BaseCustomWebComponentLazyAppend{static [w(0x163)]=css`
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
  `;[w(0x167)];constructor(){const x=w;super(),this['_table']=this['_getDomElement'](x(0x172));}['loadElements'](c,d,e){const y=w;this[y(0x167)]['replaceChildren']();for(const f of d){const g=document['createElement']('tr'),h=document[y(0x17a)]('td'),i=document[y(0x17a)]('button');i['setAttribute']('part','button');if(f[y(0x15f)]&&!f['displayHtml']){let k=f[y(0x15f)];!f['icon'][y(0x160)]('data:')&&(k=e+f[y(0x15f)]),i['innerHTML']=y(0x14c)+y(0x14f)+k+'\x22></td>'+y(0x174)+f['tag']+'</td>'+y(0x16e);}else{if(f['displayHtml'])i['innerHTML']=f['displayHtml'];else i['innerText']=f[y(0x170)]?f[y(0x170)]:f['tag'];}i[y(0x157)]=!![],i[y(0x177)]=l=>{const z=y;l[z(0x161)]['setData'](dragDropFormatNameElementDefinition,JSON[z(0x151)](f)),l['currentTarget'][z(0x163)]['outline']='dashed';if(f[z(0x15d)]){if(typeof f[z(0x15d)]==='string'){const m=document['createRange']();m['selectNode'](document[z(0x153)]);const n=m[z(0x165)](f['ghostElement']);let o=n[z(0x15e)];o['style']['position']=z(0x169),o[z(0x163)]['top']='-1000px',document['body']['appendChild'](o),l['dataTransfer'][z(0x171)](o,0x0,0x0),requestAnimationFrame(()=>document['body']['removeChild'](o));}else l['dataTransfer']['setDragImage'](f['ghostElement'],0x0,0x0);}else{if(!f['import'])try{let p=document[z(0x17a)](f['tag']);if(f['defaultContent'])p[z(0x16f)]=f[z(0x154)];if(f[z(0x16d)])p[z(0x163)][z(0x149)]=f['defaultWidth'];if(f[z(0x175)])p['style'][z(0x159)]=f[z(0x175)];if(f[z(0x179)])for(let r in f[z(0x179)]){p[z(0x162)](r,f[z(0x179)][r]);}if(f[z(0x176)])for(let t in f['defaultStyles']){p['style'][t]=f['defaultStyles'][t];}p[z(0x163)]['position']='absolute';if(f[z(0x16d)])p['style']['top']='-'+(parseInt(f['defaultHeight'])+0x1f4)+'px';else p[z(0x163)]['top']=z(0x168);if(f[z(0x16d)])p[z(0x163)]['left']='-'+(parseInt(f['defaultWidth'])+0x1f4)+'px';else p[z(0x163)]['left']=z(0x168);document[z(0x153)]['appendChild'](p);let q=p[z(0x14e)]();if(q['width']>0x0&&q[z(0x159)]>0x0)l[z(0x161)][z(0x171)](p,0x0,0x0);requestAnimationFrame(()=>document[z(0x153)]['removeChild'](p));}catch(u){console['warn'](z(0x173),u);}}},i[y(0x15c)]=l=>{const A=y;f['import']=null,l['currentTarget'][A(0x163)]['outline']='none';},i['ontouchstart']=l=>{l['preventDefault']();},i['onclick']=l=>{const B=y;let m=c['designerTools']['get'](f[B(0x156)]??NamedTools['DrawElementTool']);if(typeof m=='function')m=new m(f);c['globalContext'][B(0x156)]=m;},h[y(0x166)](i),g['appendChild'](h);const j=document[y(0x17a)]('td');j[y(0x178)]=f['description']??'',g['appendChild'](j),this['_table'][y(0x166)](g);}}}customElements[w(0x15b)](w(0x16b),PaletteElements);
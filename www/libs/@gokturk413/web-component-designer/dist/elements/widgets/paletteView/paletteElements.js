const w=b;(function(c,d){const v=b,e=c();while(!![]){try{const f=parseInt(v(0xb5))/0x1*(parseInt(v(0xcd))/0x2)+parseInt(v(0xcb))/0x3*(-parseInt(v(0xb0))/0x4)+parseInt(v(0xac))/0x5*(parseInt(v(0xb6))/0x6)+parseInt(v(0xba))/0x7+-parseInt(v(0xc3))/0x8+-parseInt(v(0xc7))/0x9+parseInt(v(0xd8))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5a466));import{dragDropFormatNameElementDefinition}from'../../../Constants.js';function a(){const D=['createElement','none','onclick','removeChild','ghostElement','-500px','width','1644415sXdLWV','warn','defaultHeight','startsWith','52kDJcDP','description','firstChild','name','setDragImage','1VPhGfa','6okFnVH','ondragend','currentTarget','createRange','1472786ExCIBY','setData','defaultContent','dataTransfer','outline','left','table','<table><tr>','position','3577072dhIcME','body','replaceChildren','\x22></td>','2400408hIFhuS','defaultAttributes','absolute','string','39021XSzppA','style','8572OFuPrY','appendChild','preventDefault','innerHTML','icon','createContextualFragment','displayHtml','template','tag','_getDomElement','button','7091360qSdlMs','defaultWidth','tool','innerText','_table','top','setAttribute','defaultStyles','height','designerTools'];a=function(){return D;};return a();}import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{NamedTools}from'../designerView/tools/NamedTools.js';function b(c,d){c=c-0xa5;const e=a();let f=e[c];return f;}export class PaletteElements extends BaseCustomWebComponentLazyAppend{static ['style']=css`
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
    `;static [w(0xd4)]=html`
    <table id="table">
    </table>
  `;['_table'];constructor(){const x=w;super(),this[x(0xdc)]=this[x(0xd6)](x(0xc0));}['loadElements'](c,d,e){const y=w;this['_table'][y(0xc5)]();for(const f of d){const g=document[y(0xa5)]('tr'),h=document['createElement']('td'),i=document[y(0xa5)](y(0xd7));i['setAttribute']('part','button');if(f[y(0xd1)]&&!f[y(0xd3)]){let k=f[y(0xd1)];!f['icon'][y(0xaf)]('data:')&&(k=e+f[y(0xd1)]),i['innerHTML']=y(0xc1)+'<td\x20align=\x22left\x22\x20valign=\x22middle\x22\x20style=\x22width:20px;\x22><img\x20style=\x22width:16px;height:16px\x22\x20src=\x22'+k+y(0xc6)+'<td\x20align=\x22left\x22\x20>'+f['tag']+'</td>'+'</tr></table>\x0a';}else{if(f[y(0xd3)])i['innerHTML']=f['displayHtml'];else i[y(0xdb)]=f[y(0xb3)]?f['name']:f[y(0xd5)];}i['draggable']=!![],i['ondragstart']=l=>{const z=y;l['dataTransfer'][z(0xbb)](dragDropFormatNameElementDefinition,JSON['stringify'](f)),l[z(0xb8)][z(0xcc)][z(0xbe)]='dashed';if(f['ghostElement']){if(typeof f[z(0xa9)]===z(0xca)){const m=document[z(0xb9)]();m['selectNode'](document['body']);const n=m[z(0xd2)](f[z(0xa9)]);let o=n[z(0xb2)];o[z(0xcc)]['position']='absolute',o['style'][z(0xdd)]='-1000px',document[z(0xc4)]['appendChild'](o),l['dataTransfer'][z(0xb4)](o,0x0,0x0),requestAnimationFrame(()=>document['body'][z(0xa8)](o));}else l[z(0xbd)]['setDragImage'](f['ghostElement'],0x0,0x0);}else{if(!f['import'])try{let p=document[z(0xa5)](f['tag']);if(f['defaultContent'])p[z(0xd0)]=f[z(0xbc)];if(f[z(0xd9)])p['style'][z(0xab)]=f[z(0xd9)];if(f['defaultHeight'])p[z(0xcc)][z(0xe0)]=f[z(0xae)];if(f[z(0xc8)])for(let r in f[z(0xc8)]){p[z(0xde)](r,f['defaultAttributes'][r]);}if(f[z(0xdf)])for(let t in f['defaultStyles']){p[z(0xcc)][t]=f[z(0xdf)][t];}p[z(0xcc)][z(0xc2)]=z(0xc9);if(f[z(0xd9)])p[z(0xcc)][z(0xdd)]='-'+(parseInt(f['defaultHeight'])+0x1f4)+'px';else p[z(0xcc)][z(0xdd)]=z(0xaa);if(f[z(0xd9)])p['style']['left']='-'+(parseInt(f[z(0xd9)])+0x1f4)+'px';else p[z(0xcc)][z(0xbf)]='-500px';document['body'][z(0xce)](p);let q=p['getBoundingClientRect']();if(q['width']>0x0&&q[z(0xe0)]>0x0)l[z(0xbd)][z(0xb4)](p,0x0,0x0);requestAnimationFrame(()=>document['body']['removeChild'](p));}catch(u){console[z(0xad)]('error\x20creating\x20gost\x20elment',u);}}},i[y(0xb7)]=l=>{const A=y;f['import']=null,l[A(0xb8)][A(0xcc)][A(0xbe)]=A(0xa6);},i['ontouchstart']=l=>{const B=y;l[B(0xcf)]();},i[y(0xa7)]=l=>{const C=y;let m=c[C(0xe1)]['get'](f[C(0xda)]??NamedTools['DrawElementTool']);if(typeof m=='function')m=new m(f);c['globalContext'][C(0xda)]=m;},h['appendChild'](i),g[y(0xce)](h);const j=document['createElement']('td');j[y(0xdb)]=f[y(0xb1)]??'',g['appendChild'](j),this['_table']['appendChild'](g);}}}customElements['define']('node-projects-palette-elements',PaletteElements);
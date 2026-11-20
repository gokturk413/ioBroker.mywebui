function a(){const D=['top','none','-1000px','define','removeChild','position','node-projects-palette-elements','body','currentTarget','-500px','<td\x20align=\x22left\x22\x20>','icon','60648CixlLt','dataTransfer','error\x20creating\x20gost\x20elment','40977gTehVu','605380ODsQJb','startsWith','get','absolute','2002285XuAOKX','8sVfYjJ','innerText','ondragend','setDragImage','style','defaultHeight','548556jSrkzX','preventDefault','displayHtml','innerHTML','ghostElement','defaultWidth','import','outline','defaultStyles','1210573cvvxJq','description','string','tag','createElement','</tr></table>\x0a','2WrQDqD','25494eUCtvO','DrawElementTool','replaceChildren','name','warn','6YHELHR','tool','table','_table','data:','appendChild','<table><tr>','height','defaultAttributes','dashed','button','left','\x22></td>','1342GzhQxI','firstChild','370CQldfR'];a=function(){return D;};return a();}const C=b;(function(c,d){const v=b,e=c();while(!![]){try{const f=parseInt(v(0x133))/0x1*(-parseInt(v(0x132))/0x2)+parseInt(v(0x123))/0x3+-parseInt(v(0x118))/0x4+-parseInt(v(0x11c))/0x5*(parseInt(v(0xf8))/0x6)+parseInt(v(0x12c))/0x7*(parseInt(v(0x11d))/0x8)+parseInt(v(0x117))/0x9*(-parseInt(v(0x107))/0xa)+-parseInt(v(0x105))/0xb*(-parseInt(v(0x114))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3753e));import{dragDropFormatNameElementDefinition}from'../../../Constants.js';function b(c,d){c=c-0xf7;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{NamedTools}from'../designerView/tools/NamedTools.js';export class PaletteElements extends BaseCustomWebComponentLazyAppend{static ['style']=css`
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
  `;['_table'];constructor(){const w=b;super(),this[w(0xfb)]=this['_getDomElement'](w(0xfa));}['loadElements'](c,d,e){const x=b;this[x(0xfb)][x(0x135)]();for(const f of d){const g=document[x(0x130)]('tr'),h=document['createElement']('td'),i=document[x(0x130)]('button');i['setAttribute']('part',x(0x102));if(f['icon']&&!f['displayHtml']){let k=f[x(0x113)];!f['icon'][x(0x119)](x(0xfc))&&(k=e+f['icon']),i[x(0x126)]=x(0xfe)+'<td\x20align=\x22left\x22\x20valign=\x22middle\x22\x20style=\x22width:20px;\x22><img\x20style=\x22width:16px;height:16px\x22\x20src=\x22'+k+x(0x104)+x(0x112)+f[x(0x12f)]+'</td>'+x(0x131);}else{if(f['displayHtml'])i['innerHTML']=f[x(0x125)];else i['innerText']=f['name']?f[x(0x136)]:f['tag'];}i['draggable']=!![],i['ondragstart']=l=>{const y=x;l['dataTransfer']['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](f)),l['currentTarget']['style']['outline']=y(0x101);if(f[y(0x127)]){if(typeof f[y(0x127)]===y(0x12e)){const m=document['createRange']();m['selectNode'](document['body']);const n=m['createContextualFragment'](f['ghostElement']);let o=n[y(0x106)];o['style'][y(0x10d)]=y(0x11b),o['style'][y(0x108)]=y(0x10a),document[y(0x10f)][y(0xfd)](o),l[y(0x115)][y(0x120)](o,0x0,0x0),requestAnimationFrame(()=>document[y(0x10f)][y(0x10c)](o));}else l[y(0x115)][y(0x120)](f[y(0x127)],0x0,0x0);}else{if(!f[y(0x129)])try{let p=document['createElement'](f[y(0x12f)]);if(f['defaultContent'])p['innerHTML']=f['defaultContent'];if(f[y(0x128)])p['style']['width']=f[y(0x128)];if(f['defaultHeight'])p['style']['height']=f[y(0x122)];if(f['defaultAttributes'])for(let r in f[y(0x100)]){p['setAttribute'](r,f['defaultAttributes'][r]);}if(f[y(0x12b)])for(let t in f['defaultStyles']){p[y(0x121)][t]=f['defaultStyles'][t];}p['style'][y(0x10d)]='absolute';if(f[y(0x128)])p['style'][y(0x108)]='-'+(parseInt(f[y(0x122)])+0x1f4)+'px';else p['style'][y(0x108)]=y(0x111);if(f['defaultWidth'])p[y(0x121)][y(0x103)]='-'+(parseInt(f[y(0x128)])+0x1f4)+'px';else p['style'][y(0x103)]='-500px';document['body'][y(0xfd)](p);let q=p['getBoundingClientRect']();if(q['width']>0x0&&q[y(0xff)]>0x0)l[y(0x115)]['setDragImage'](p,0x0,0x0);requestAnimationFrame(()=>document[y(0x10f)]['removeChild'](p));}catch(u){console[y(0xf7)](y(0x116),u);}}},i[x(0x11f)]=l=>{const z=x;f[z(0x129)]=null,l[z(0x110)]['style'][z(0x12a)]=z(0x109);},i['ontouchstart']=l=>{const A=x;l[A(0x124)]();},i['onclick']=l=>{const B=x;let m=c['designerTools'][B(0x11a)](f[B(0xf9)]??NamedTools[B(0x134)]);if(typeof m=='function')m=new m(f);c['globalContext']['tool']=m;},h[x(0xfd)](i),g['appendChild'](h);const j=document['createElement']('td');j[x(0x11e)]=f[x(0x12d)]??'',g['appendChild'](j),this['_table']['appendChild'](g);}}}customElements[C(0x10b)](C(0x10e),PaletteElements);
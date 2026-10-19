const B=b;function b(c,d){c=c-0x196;const e=a();let f=e[c];return f;}(function(c,d){const v=b,e=c();while(!![]){try{const f=-parseInt(v(0x1cf))/0x1+-parseInt(v(0x1ca))/0x2*(-parseInt(v(0x1b8))/0x3)+-parseInt(v(0x1a3))/0x4+-parseInt(v(0x1b1))/0x5+-parseInt(v(0x1c3))/0x6+-parseInt(v(0x1b9))/0x7+-parseInt(v(0x1ab))/0x8*(-parseInt(v(0x19b))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x73d4d));import{dragDropFormatNameElementDefinition}from'../../../Constants.js';import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{NamedTools}from'../designerView/tools/NamedTools.js';export class PaletteElements extends BaseCustomWebComponentLazyAppend{static ['style']=css`
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
  `;['_table'];constructor(){const w=b;super(),this[w(0x1af)]=this['_getDomElement'](w(0x1b0));}['loadElements'](c,d,e){const x=b;this[x(0x1af)]['replaceChildren']();for(const f of d){const g=document['createElement']('tr'),h=document['createElement']('td'),i=document['createElement'](x(0x1d0));i[x(0x1c0)](x(0x1c1),x(0x1d0));if(f[x(0x1c5)]&&!f['displayHtml']){let k=f[x(0x1c5)];!f[x(0x1c5)]['startsWith'](x(0x1c2))&&(k=e+f[x(0x1c5)]),i['innerHTML']=x(0x1c9)+x(0x1c7)+k+x(0x1cb)+'<td\x20align=\x22left\x22\x20>'+f[x(0x1b4)]+'</td>'+'</tr></table>\x0a';}else{if(f['displayHtml'])i[x(0x19f)]=f['displayHtml'];else i['innerText']=f['name']?f[x(0x1a5)]:f[x(0x1b4)];}i[x(0x196)]=!![],i[x(0x1ac)]=l=>{const y=x;l['dataTransfer'][y(0x1be)](dragDropFormatNameElementDefinition,JSON[y(0x19d)](f)),l['currentTarget'][y(0x1bf)][y(0x1a9)]='dashed';if(f['ghostElement']){if(typeof f[y(0x1d1)]==='string'){const m=document[y(0x1cc)]();m['selectNode'](document[y(0x1ad)]);const n=m['createContextualFragment'](f['ghostElement']);let o=n[y(0x1b7)];o[y(0x1bf)]['position']='absolute',o[y(0x1bf)]['top']='-1000px',document['body'][y(0x1a1)](o),l[y(0x1cd)]['setDragImage'](o,0x0,0x0),requestAnimationFrame(()=>document[y(0x1ad)]['removeChild'](o));}else l[y(0x1cd)]['setDragImage'](f['ghostElement'],0x0,0x0);}else{if(!f[y(0x1a7)])try{let p=document[y(0x1b6)](f[y(0x1b4)]);if(f[y(0x19e)])p['innerHTML']=f['defaultContent'];if(f['defaultWidth'])p['style']['width']=f[y(0x1c6)];if(f[y(0x1a4)])p[y(0x1bf)][y(0x1aa)]=f[y(0x1a4)];if(f[y(0x1bb)])for(let r in f[y(0x1bb)]){p['setAttribute'](r,f['defaultAttributes'][r]);}if(f[y(0x1bd)])for(let t in f['defaultStyles']){p['style'][t]=f['defaultStyles'][t];}p[y(0x1bf)][y(0x1a8)]=y(0x1b3);if(f['defaultWidth'])p['style'][y(0x1c8)]='-'+(parseInt(f[y(0x1a4)])+0x1f4)+'px';else p[y(0x1bf)][y(0x1c8)]=y(0x1ae);if(f['defaultWidth'])p['style'][y(0x1bc)]='-'+(parseInt(f[y(0x1c6)])+0x1f4)+'px';else p['style']['left']=y(0x1ae);document['body'][y(0x1a1)](p);let q=p[y(0x19c)]();if(q['width']>0x0&&q[y(0x1aa)]>0x0)l[y(0x1cd)]['setDragImage'](p,0x0,0x0);requestAnimationFrame(()=>document[y(0x1ad)][y(0x1b2)](p));}catch(u){console[y(0x1b5)]('error\x20creating\x20gost\x20elment',u);}}},i[x(0x199)]=l=>{const z=x;f[z(0x1a7)]=null,l[z(0x198)][z(0x1bf)]['outline']=z(0x1ba);},i['ontouchstart']=l=>{l['preventDefault']();},i[x(0x1a2)]=l=>{const A=x;let m=c['designerTools'][A(0x1a6)](f['tool']??NamedTools['DrawElementTool']);if(typeof m==A(0x1c4))m=new m(f);c[A(0x19a)][A(0x1ce)]=m;},h['appendChild'](i),g[x(0x1a1)](h);const j=document['createElement']('td');j['innerText']=f['description']??'',g[x(0x1a1)](j),this[x(0x1af)][x(0x1a1)](g);}}}customElements[B(0x1a0)](B(0x197),PaletteElements);function a(){const C=['tag','warn','createElement','firstChild','514827qtfCsd','6279154iZSOMj','none','defaultAttributes','left','defaultStyles','setData','style','setAttribute','part','data:','759306HRiWXr','function','icon','defaultWidth','<td\x20align=\x22left\x22\x20valign=\x22middle\x22\x20style=\x22width:20px;\x22><img\x20style=\x22width:16px;height:16px\x22\x20src=\x22','top','<table><tr>','6PEswiO','\x22></td>','createRange','dataTransfer','tool','423358tOnOkU','button','ghostElement','draggable','node-projects-palette-elements','currentTarget','ondragend','globalContext','783nvaDKK','getBoundingClientRect','stringify','defaultContent','innerHTML','define','appendChild','onclick','2398984LzjMdn','defaultHeight','name','get','import','position','outline','height','246072Txyjqp','ondragstart','body','-500px','_table','table','3348690cfoHEn','removeChild','absolute'];a=function(){return C;};return a();}
const w=b;(function(c,d){const v=b,e=c();while(!![]){try{const f=parseInt(v(0x1b0))/0x1+-parseInt(v(0x1cb))/0x2+parseInt(v(0x1b1))/0x3*(-parseInt(v(0x1b7))/0x4)+-parseInt(v(0x196))/0x5+-parseInt(v(0x1b6))/0x6+parseInt(v(0x1c3))/0x7*(parseInt(v(0x1b3))/0x8)+parseInt(v(0x1a1))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x729d7));import{dragDropFormatNameElementDefinition}from'../../../Constants.js';function a(){const C=['ghostElement','none','getBoundingClientRect','innerHTML','-500px','designerTools','replaceChildren','1979870gTkqYW','height','<td\x20align=\x22left\x22\x20valign=\x22middle\x22\x20style=\x22width:20px;\x22><img\x20style=\x22width:16px;height:16px\x22\x20src=\x22','top','removeChild','node-projects-palette-elements','dataTransfer','left','ondragend','button','onclick','12705120ogTJSR','ondragstart','position','get','startsWith','description','name','style','defaultContent','firstChild','createElement','\x22></td>','</tr></table>\x0a','createContextualFragment','_table','317490UvpmiC','234piFIXA','outline','1059376tgyBUJ','defaultWidth','template','795648ufrmom','38652RtPAjs','icon','data:','setDragImage','</td>','import','setAttribute','tool','warn','innerText','loadElements','defaultHeight','7AYoaON','body','absolute','defaultAttributes','appendChild','string','width','table','219666SDWXSj','currentTarget','selectNode','tag','part','defaultStyles','displayHtml','dashed'];a=function(){return C;};return a();}import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{NamedTools}from'../designerView/tools/NamedTools.js';function b(c,d){c=c-0x196;const e=a();let f=e[c];return f;}export class PaletteElements extends BaseCustomWebComponentLazyAppend{static [w(0x1a8)]=css`
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
    `;static [w(0x1b5)]=html`
    <table id="table">
    </table>
  `;['_table'];constructor(){const x=w;super(),this['_table']=this['_getDomElement'](x(0x1ca));}[w(0x1c1)](c,d,e){const y=w;this['_table'][y(0x1d9)]();for(const f of d){const g=document[y(0x1ab)]('tr'),h=document['createElement']('td'),i=document['createElement'](y(0x19f));i[y(0x1bd)](y(0x1cf),y(0x19f));if(f[y(0x1b8)]&&!f['displayHtml']){let k=f[y(0x1b8)];!f['icon'][y(0x1a5)](y(0x1b9))&&(k=e+f['icon']),i['innerHTML']='<table><tr>'+y(0x198)+k+y(0x1ac)+'<td\x20align=\x22left\x22\x20>'+f['tag']+y(0x1bb)+y(0x1ad);}else{if(f['displayHtml'])i[y(0x1d6)]=f[y(0x1d1)];else i['innerText']=f[y(0x1a7)]?f['name']:f['tag'];}i['draggable']=!![],i[y(0x1a2)]=l=>{const z=y;l['dataTransfer']['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](f)),l[z(0x1cc)]['style'][z(0x1b2)]=z(0x1d2);if(f['ghostElement']){if(typeof f[z(0x1d3)]===z(0x1c8)){const m=document['createRange']();m[z(0x1cd)](document['body']);const n=m[z(0x1ae)](f['ghostElement']);let o=n[z(0x1aa)];o['style']['position']=z(0x1c5),o[z(0x1a8)]['top']='-1000px',document[z(0x1c4)]['appendChild'](o),l[z(0x19c)][z(0x1ba)](o,0x0,0x0),requestAnimationFrame(()=>document['body']['removeChild'](o));}else l[z(0x19c)][z(0x1ba)](f[z(0x1d3)],0x0,0x0);}else{if(!f[z(0x1bc)])try{let p=document[z(0x1ab)](f[z(0x1ce)]);if(f[z(0x1a9)])p['innerHTML']=f[z(0x1a9)];if(f['defaultWidth'])p['style']['width']=f['defaultWidth'];if(f[z(0x1c2)])p['style'][z(0x197)]=f['defaultHeight'];if(f[z(0x1c6)])for(let r in f[z(0x1c6)]){p[z(0x1bd)](r,f['defaultAttributes'][r]);}if(f['defaultStyles'])for(let t in f[z(0x1d0)]){p['style'][t]=f['defaultStyles'][t];}p[z(0x1a8)][z(0x1a3)]='absolute';if(f['defaultWidth'])p[z(0x1a8)][z(0x199)]='-'+(parseInt(f[z(0x1c2)])+0x1f4)+'px';else p[z(0x1a8)]['top']=z(0x1d7);if(f[z(0x1b4)])p[z(0x1a8)]['left']='-'+(parseInt(f['defaultWidth'])+0x1f4)+'px';else p[z(0x1a8)][z(0x19d)]='-500px';document[z(0x1c4)][z(0x1c7)](p);let q=p[z(0x1d5)]();if(q[z(0x1c9)]>0x0&&q[z(0x197)]>0x0)l['dataTransfer']['setDragImage'](p,0x0,0x0);requestAnimationFrame(()=>document[z(0x1c4)][z(0x19a)](p));}catch(u){console[z(0x1bf)]('error\x20creating\x20gost\x20elment',u);}}},i[y(0x19e)]=l=>{const A=y;f[A(0x1bc)]=null,l['currentTarget'][A(0x1a8)]['outline']=A(0x1d4);},i['ontouchstart']=l=>{l['preventDefault']();},i[y(0x1a0)]=l=>{const B=y;let m=c[B(0x1d8)][B(0x1a4)](f[B(0x1be)]??NamedTools['DrawElementTool']);if(typeof m=='function')m=new m(f);c['globalContext']['tool']=m;},h[y(0x1c7)](i),g[y(0x1c7)](h);const j=document['createElement']('td');j[y(0x1c0)]=f[y(0x1a6)]??'',g['appendChild'](j),this[y(0x1af)][y(0x1c7)](g);}}}customElements['define'](w(0x19b),PaletteElements);
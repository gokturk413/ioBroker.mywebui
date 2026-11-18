const w=b;(function(c,d){const v=b,e=c();while(!![]){try{const f=parseInt(v(0x158))/0x1+-parseInt(v(0x161))/0x2+-parseInt(v(0x166))/0x3+parseInt(v(0x162))/0x4+parseInt(v(0x154))/0x5+-parseInt(v(0x156))/0x6*(-parseInt(v(0x167))/0x7)+-parseInt(v(0x15e))/0x8*(parseInt(v(0x16c))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7a6c7));import{dragDropFormatNameElementDefinition}from'../../../Constants.js';function b(c,d){c=c-0x146;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{NamedTools}from'../designerView/tools/NamedTools.js';export class PaletteElements extends BaseCustomWebComponentLazyAppend{static [w(0x170)]=css`
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
  `;['_table'];constructor(){super(),this['_table']=this['_getDomElement']('table');}[w(0x16a)](c,d,e){const x=w;this[x(0x168)]['replaceChildren']();for(const f of d){const g=document['createElement']('tr'),h=document[x(0x14d)]('td'),i=document[x(0x14d)](x(0x153));i['setAttribute'](x(0x176),x(0x153));if(f[x(0x15a)]&&!f['displayHtml']){let k=f['icon'];!f[x(0x15a)][x(0x151)]('data:')&&(k=e+f['icon']),i['innerHTML']=x(0x150)+x(0x149)+k+x(0x165)+'<td\x20align=\x22left\x22\x20>'+f['tag']+'</td>'+'</tr></table>\x0a';}else{if(f[x(0x15d)])i[x(0x14e)]=f[x(0x15d)];else i[x(0x155)]=f['name']?f[x(0x14a)]:f[x(0x16b)];}i['draggable']=!![],i['ondragstart']=l=>{const y=x;l['dataTransfer']['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](f)),l[y(0x159)]['style'][y(0x16d)]=y(0x164);if(f['ghostElement']){if(typeof f[y(0x147)]==='string'){const m=document['createRange']();m['selectNode'](document['body']);const n=m['createContextualFragment'](f['ghostElement']);let o=n['firstChild'];o[y(0x170)][y(0x177)]=y(0x169),o['style']['top']=y(0x16f),document[y(0x152)]['appendChild'](o),l['dataTransfer']['setDragImage'](o,0x0,0x0),requestAnimationFrame(()=>document[y(0x152)]['removeChild'](o));}else l[y(0x146)]['setDragImage'](f['ghostElement'],0x0,0x0);}else{if(!f[y(0x173)])try{let p=document[y(0x14d)](f['tag']);if(f['defaultContent'])p[y(0x14e)]=f[y(0x174)];if(f['defaultWidth'])p[y(0x170)]['width']=f['defaultWidth'];if(f[y(0x14c)])p['style'][y(0x15f)]=f['defaultHeight'];if(f['defaultAttributes'])for(let r in f[y(0x175)]){p['setAttribute'](r,f['defaultAttributes'][r]);}if(f[y(0x157)])for(let t in f['defaultStyles']){p[y(0x170)][t]=f[y(0x157)][t];}p[y(0x170)]['position']=y(0x169);if(f['defaultWidth'])p['style']['top']='-'+(parseInt(f[y(0x14c)])+0x1f4)+'px';else p['style']['top']=y(0x14f);if(f[y(0x171)])p['style'][y(0x160)]='-'+(parseInt(f[y(0x171)])+0x1f4)+'px';else p[y(0x170)]['left']='-500px';document[y(0x152)][y(0x16e)](p);let q=p['getBoundingClientRect']();if(q[y(0x15b)]>0x0&&q['height']>0x0)l[y(0x146)]['setDragImage'](p,0x0,0x0);requestAnimationFrame(()=>document['body']['removeChild'](p));}catch(u){console['warn']('error\x20creating\x20gost\x20elment',u);}}},i['ondragend']=l=>{const z=x;f[z(0x173)]=null,l[z(0x159)]['style']['outline']=z(0x163);},i[x(0x15c)]=l=>{l['preventDefault']();},i['onclick']=l=>{const A=x;let m=c['designerTools']['get'](f['tool']??NamedTools[A(0x172)]);if(typeof m=='function')m=new m(f);c['globalContext'][A(0x148)]=m;},h['appendChild'](i),g[x(0x16e)](h);const j=document[x(0x14d)]('td');j[x(0x155)]=f['description']??'',g[x(0x16e)](j),this[x(0x168)][x(0x16e)](g);}}}customElements[w(0x14b)]('node-projects-palette-elements',PaletteElements);function a(){const B=['236310xSiWac','currentTarget','icon','width','ontouchstart','displayHtml','7462104PcsgtF','height','left','593616kYUjfP','3970356aZeUus','none','dashed','\x22></td>','1993311GYHPYI','84833HsiqZw','_table','absolute','loadElements','tag','9iOVkSr','outline','appendChild','-1000px','style','defaultWidth','DrawElementTool','import','defaultContent','defaultAttributes','part','position','dataTransfer','ghostElement','tool','<td\x20align=\x22left\x22\x20valign=\x22middle\x22\x20style=\x22width:20px;\x22><img\x20style=\x22width:16px;height:16px\x22\x20src=\x22','name','define','defaultHeight','createElement','innerHTML','-500px','<table><tr>','startsWith','body','button','2681840AvxxYN','innerText','312rtEOMz','defaultStyles'];a=function(){return B;};return a();}
const w=b;function a(){const C=['36uzziOm','node-projects-palette-elements','innerHTML','button','warn','_table','defaultStyles','44864cEWzma','-500px','function','102VlioQp','createRange','absolute','defaultAttributes','startsWith','</td>','removeChild','defaultWidth','createElement','54719tdxibL','defaultHeight','top','27384zikMhE','448629OpiFJB','setDragImage','126iYtEFV','stringify','tool','get','tag','-1000px','709748FYsPqt','height','body','innerText','none','outline','5RXuyzI','ondragend','loadElements','DrawElementTool','icon','196801XJmBXV','setAttribute','firstChild','appendChild','defaultContent','table','template','replaceChildren','dataTransfer','import','ghostElement','2pgzPPg','style','displayHtml','left','width','data:','onclick','createContextualFragment','42196uOSzkR','860QkxQCL','draggable','error\x20creating\x20gost\x20elment','define'];a=function(){return C;};return a();}(function(c,d){const v=b,e=c();while(!![]){try{const f=parseInt(v(0x9d))/0x1+-parseInt(v(0xa8))/0x2*(parseInt(v(0x8a))/0x3)+parseInt(v(0x89))/0x4*(parseInt(v(0x98))/0x5)+-parseInt(v(0xbf))/0x6*(parseInt(v(0x86))/0x7)+parseInt(v(0xbc))/0x8*(parseInt(v(0x8c))/0x9)+parseInt(v(0xb1))/0xa*(parseInt(v(0xb0))/0xb)+-parseInt(v(0xb5))/0xc*(parseInt(v(0x92))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x287cb));import{dragDropFormatNameElementDefinition}from'../../../Constants.js';function b(c,d){c=c-0x81;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{NamedTools}from'../designerView/tools/NamedTools.js';export class PaletteElements extends BaseCustomWebComponentLazyAppend{static [w(0xa9)]=css`
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
    `;static [w(0xa3)]=html`
    <table id="table">
    </table>
  `;[w(0xba)];constructor(){const x=w;super(),this[x(0xba)]=this['_getDomElement'](x(0xa2));}[w(0x9a)](c,d,e){const y=w;this['_table'][y(0xa4)]();for(const f of d){const g=document['createElement']('tr'),h=document[y(0x85)]('td'),i=document[y(0x85)](y(0xb8));i['setAttribute']('part','button');if(f['icon']&&!f['displayHtml']){let k=f['icon'];!f['icon'][y(0x81)](y(0xad))&&(k=e+f[y(0x9c)]),i[y(0xb7)]='<table><tr>'+'<td\x20align=\x22left\x22\x20valign=\x22middle\x22\x20style=\x22width:20px;\x22><img\x20style=\x22width:16px;height:16px\x22\x20src=\x22'+k+'\x22></td>'+'<td\x20align=\x22left\x22\x20>'+f['tag']+y(0x82)+'</tr></table>\x0a';}else{if(f['displayHtml'])i[y(0xb7)]=f[y(0xaa)];else i['innerText']=f['name']?f['name']:f['tag'];}i[y(0xb2)]=!![],i['ondragstart']=l=>{const z=y;l[z(0xa5)]['setData'](dragDropFormatNameElementDefinition,JSON[z(0x8d)](f)),l['currentTarget']['style'][z(0x97)]='dashed';if(f[z(0xa7)]){if(typeof f[z(0xa7)]==='string'){const m=document[z(0xc0)]();m['selectNode'](document[z(0x94)]);const n=m[z(0xaf)](f['ghostElement']);let o=n[z(0x9f)];o['style']['position']=z(0xc1),o[z(0xa9)]['top']=z(0x91),document['body'][z(0xa0)](o),l['dataTransfer'][z(0x8b)](o,0x0,0x0),requestAnimationFrame(()=>document['body']['removeChild'](o));}else l['dataTransfer'][z(0x8b)](f['ghostElement'],0x0,0x0);}else{if(!f[z(0xa6)])try{let p=document['createElement'](f[z(0x90)]);if(f[z(0xa1)])p['innerHTML']=f[z(0xa1)];if(f['defaultWidth'])p['style'][z(0xac)]=f['defaultWidth'];if(f['defaultHeight'])p['style'][z(0x93)]=f[z(0x87)];if(f[z(0xc2)])for(let r in f['defaultAttributes']){p[z(0x9e)](r,f[z(0xc2)][r]);}if(f[z(0xbb)])for(let t in f['defaultStyles']){p['style'][t]=f[z(0xbb)][t];}p[z(0xa9)]['position']=z(0xc1);if(f[z(0x84)])p['style'][z(0x88)]='-'+(parseInt(f['defaultHeight'])+0x1f4)+'px';else p['style']['top']=z(0xbd);if(f['defaultWidth'])p[z(0xa9)][z(0xab)]='-'+(parseInt(f[z(0x84)])+0x1f4)+'px';else p[z(0xa9)][z(0xab)]='-500px';document[z(0x94)]['appendChild'](p);let q=p['getBoundingClientRect']();if(q['width']>0x0&&q['height']>0x0)l['dataTransfer']['setDragImage'](p,0x0,0x0);requestAnimationFrame(()=>document[z(0x94)][z(0x83)](p));}catch(u){console[z(0xb9)](z(0xb3),u);}}},i[y(0x99)]=l=>{const A=y;f[A(0xa6)]=null,l['currentTarget'][A(0xa9)]['outline']=A(0x96);},i['ontouchstart']=l=>{l['preventDefault']();},i[y(0xae)]=l=>{const B=y;let m=c['designerTools'][B(0x8f)](f[B(0x8e)]??NamedTools[B(0x9b)]);if(typeof m==B(0xbe))m=new m(f);c['globalContext'][B(0x8e)]=m;},h[y(0xa0)](i),g[y(0xa0)](h);const j=document[y(0x85)]('td');j[y(0x95)]=f['description']??'',g['appendChild'](j),this[y(0xba)]['appendChild'](g);}}}customElements[w(0xb4)](w(0xb6),PaletteElements);
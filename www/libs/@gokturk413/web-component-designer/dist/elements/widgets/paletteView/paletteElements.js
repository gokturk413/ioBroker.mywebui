const w=b;(function(c,d){const v=b,e=c();while(!![]){try{const f=parseInt(v(0xb9))/0x1*(-parseInt(v(0x94))/0x2)+-parseInt(v(0x84))/0x3+parseInt(v(0xb7))/0x4*(parseInt(v(0xb2))/0x5)+parseInt(v(0x9f))/0x6+-parseInt(v(0x83))/0x7+parseInt(v(0x98))/0x8*(-parseInt(v(0xb3))/0x9)+parseInt(v(0xb0))/0xa*(parseInt(v(0xab))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xf0ee6));import{dragDropFormatNameElementDefinition}from'../../../Constants.js';import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x80;const e=a();let f=e[c];return f;}function a(){const C=['stringify','innerText','top','defaultHeight','269278eqnrkq','get','node-projects-palette-elements','define','2151496uYpaic','error\x20creating\x20gost\x20elment','getBoundingClientRect','</tr></table>\x0a','setDragImage','loadElements','ondragend','3012852oFjtrY','<td\x20align=\x22left\x22\x20>','body','selectNode','part','button','createRange','dataTransfer','currentTarget','setData','position','import','264XUjnbK','icon','defaultWidth','</td>','createContextualFragment','969740nSQFZX','tag','3751415SGjjJO','18LiKaqJ','_getDomElement','string','function','4INsevS','left','4xjSwBo','_table','<td\x20align=\x22left\x22\x20valign=\x22middle\x22\x20style=\x22width:20px;\x22><img\x20style=\x22width:16px;height:16px\x22\x20src=\x22','appendChild','innerHTML','tool','dashed','defaultAttributes','DrawElementTool','1681757TGTSMD','3828798uUmyKV','setAttribute','displayHtml','description','style','ondragstart','-500px','onclick','createElement','replaceChildren','absolute','data:'];a=function(){return C;};return a();}import{NamedTools}from'../designerView/tools/NamedTools.js';export class PaletteElements extends BaseCustomWebComponentLazyAppend{static ['style']=css`
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
  `;[w(0xba)];constructor(){const x=w;super(),this['_table']=this[x(0xb4)]('table');}[w(0x9d)](c,d,e){const y=w;this[y(0xba)][y(0x8d)]();for(const f of d){const g=document['createElement']('tr'),h=document['createElement']('td'),i=document['createElement'](y(0xa4));i['setAttribute'](y(0xa3),'button');if(f['icon']&&!f['displayHtml']){let k=f['icon'];!f[y(0xac)]['startsWith'](y(0x8f))&&(k=e+f['icon']),i['innerHTML']='<table><tr>'+y(0xbb)+k+'\x22></td>'+y(0xa0)+f['tag']+y(0xae)+y(0x9b);}else{if(f[y(0x86)])i[y(0xbd)]=f['displayHtml'];else i['innerText']=f['name']?f['name']:f['tag'];}i['draggable']=!![],i[y(0x89)]=l=>{const z=y;l[z(0xa6)][z(0xa8)](dragDropFormatNameElementDefinition,JSON[z(0x90)](f)),l['currentTarget']['style']['outline']=z(0x80);if(f['ghostElement']){if(typeof f['ghostElement']===z(0xb5)){const m=document[z(0xa5)]();m[z(0xa2)](document['body']);const n=m[z(0xaf)](f['ghostElement']);let o=n['firstChild'];o['style'][z(0xa9)]=z(0x8e),o[z(0x88)]['top']='-1000px',document['body']['appendChild'](o),l['dataTransfer']['setDragImage'](o,0x0,0x0),requestAnimationFrame(()=>document['body']['removeChild'](o));}else l['dataTransfer'][z(0x9c)](f['ghostElement'],0x0,0x0);}else{if(!f[z(0xaa)])try{let p=document[z(0x8c)](f[z(0xb1)]);if(f['defaultContent'])p['innerHTML']=f['defaultContent'];if(f['defaultWidth'])p['style']['width']=f[z(0xad)];if(f['defaultHeight'])p[z(0x88)]['height']=f[z(0x93)];if(f['defaultAttributes'])for(let r in f['defaultAttributes']){p[z(0x85)](r,f[z(0x81)][r]);}if(f['defaultStyles'])for(let t in f['defaultStyles']){p[z(0x88)][t]=f['defaultStyles'][t];}p[z(0x88)]['position']=z(0x8e);if(f[z(0xad)])p['style'][z(0x92)]='-'+(parseInt(f['defaultHeight'])+0x1f4)+'px';else p[z(0x88)][z(0x92)]=z(0x8a);if(f['defaultWidth'])p[z(0x88)]['left']='-'+(parseInt(f[z(0xad)])+0x1f4)+'px';else p['style'][z(0xb8)]=z(0x8a);document[z(0xa1)]['appendChild'](p);let q=p[z(0x9a)]();if(q['width']>0x0&&q['height']>0x0)l['dataTransfer'][z(0x9c)](p,0x0,0x0);requestAnimationFrame(()=>document[z(0xa1)]['removeChild'](p));}catch(u){console['warn'](z(0x99),u);}}},i[y(0x9e)]=l=>{const A=y;f['import']=null,l[A(0xa7)]['style']['outline']='none';},i['ontouchstart']=l=>{l['preventDefault']();},i[y(0x8b)]=l=>{const B=y;let m=c['designerTools'][B(0x95)](f['tool']??NamedTools[B(0x82)]);if(typeof m==B(0xb6))m=new m(f);c['globalContext'][B(0xbe)]=m;},h['appendChild'](i),g['appendChild'](h);const j=document[y(0x8c)]('td');j[y(0x91)]=f[y(0x87)]??'',g[y(0xbc)](j),this[y(0xba)]['appendChild'](g);}}}customElements[w(0x97)](w(0x96),PaletteElements);
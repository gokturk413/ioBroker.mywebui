const w=b;(function(c,d){const v=b,e=c();while(!![]){try{const f=parseInt(v(0x148))/0x1+-parseInt(v(0x155))/0x2+-parseInt(v(0x170))/0x3*(parseInt(v(0x162))/0x4)+parseInt(v(0x174))/0x5*(parseInt(v(0x14f))/0x6)+parseInt(v(0x160))/0x7*(parseInt(v(0x158))/0x8)+parseInt(v(0x15e))/0x9+parseInt(v(0x161))/0xa*(-parseInt(v(0x140))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd962b));import{dragDropFormatNameElementDefinition}from'../../../Constants.js';function a(){const D=['replaceChildren','defaultHeight','designerTools','style','48543EEredr','icon','import','height','1532180PZbbaC','loadElements','</tr></table>\x0a','removeChild','error\x20creating\x20gost\x20elment','</td>','defaultStyles','createContextualFragment','13468697urMatH','setDragImage','table','defaultContent','<table><tr>','onclick','tag','_table','797864yjimTg','<td\x20align=\x22left\x22\x20valign=\x22middle\x22\x20style=\x22width:20px;\x22><img\x20style=\x22width:16px;height:16px\x22\x20src=\x22','description','position','-500px','getBoundingClientRect','button','6NDqtgn','selectNode','innerHTML','dataTransfer','data:','setAttribute','223058vCUXpK','left','top','104XeCjWc','template','absolute','_getDomElement','ghostElement','dashed','8700471skbAdI','defaultWidth','362460OalMpm','10PEaIXG','128tErVAQ','appendChild','function','innerText','preventDefault','width','define','stringify','DrawElementTool','body'];a=function(){return D;};return a();}import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x13c;const e=a();let f=e[c];return f;}import{NamedTools}from'../designerView/tools/NamedTools.js';export class PaletteElements extends BaseCustomWebComponentLazyAppend{static ['style']=css`
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
    `;static [w(0x159)]=html`
    <table id="table">
    </table>
  `;['_table'];constructor(){const x=w;super(),this['_table']=this[x(0x15b)](x(0x142));}[w(0x175)](c,d,e){const y=w;this['_table'][y(0x16c)]();for(const f of d){const g=document['createElement']('tr'),h=document['createElement']('td'),i=document['createElement'](y(0x14e));i[y(0x154)]('part',y(0x14e));if(f['icon']&&!f['displayHtml']){let k=f['icon'];!f[y(0x171)]['startsWith'](y(0x153))&&(k=e+f[y(0x171)]),i[y(0x151)]=y(0x144)+y(0x149)+k+'\x22></td>'+'<td\x20align=\x22left\x22\x20>'+f['tag']+y(0x13d)+y(0x176);}else{if(f['displayHtml'])i[y(0x151)]=f['displayHtml'];else i[y(0x165)]=f['name']?f['name']:f[y(0x146)];}i['draggable']=!![],i['ondragstart']=l=>{const z=y;l[z(0x152)]['setData'](dragDropFormatNameElementDefinition,JSON[z(0x169)](f)),l['currentTarget'][z(0x16f)]['outline']=z(0x15d);if(f[z(0x15c)]){if(typeof f['ghostElement']==='string'){const m=document['createRange']();m[z(0x150)](document[z(0x16b)]);const n=m[z(0x13f)](f['ghostElement']);let o=n['firstChild'];o[z(0x16f)][z(0x14b)]='absolute',o['style'][z(0x157)]='-1000px',document[z(0x16b)][z(0x163)](o),l[z(0x152)][z(0x141)](o,0x0,0x0),requestAnimationFrame(()=>document['body'][z(0x177)](o));}else l['dataTransfer']['setDragImage'](f['ghostElement'],0x0,0x0);}else{if(!f[z(0x172)])try{let p=document['createElement'](f['tag']);if(f[z(0x143)])p[z(0x151)]=f[z(0x143)];if(f['defaultWidth'])p['style'][z(0x167)]=f[z(0x15f)];if(f['defaultHeight'])p['style']['height']=f['defaultHeight'];if(f['defaultAttributes'])for(let r in f['defaultAttributes']){p['setAttribute'](r,f['defaultAttributes'][r]);}if(f[z(0x13e)])for(let t in f[z(0x13e)]){p[z(0x16f)][t]=f['defaultStyles'][t];}p[z(0x16f)]['position']=z(0x15a);if(f[z(0x15f)])p['style'][z(0x157)]='-'+(parseInt(f[z(0x16d)])+0x1f4)+'px';else p[z(0x16f)][z(0x157)]=z(0x14c);if(f[z(0x15f)])p[z(0x16f)][z(0x156)]='-'+(parseInt(f[z(0x15f)])+0x1f4)+'px';else p[z(0x16f)]['left']='-500px';document['body'][z(0x163)](p);let q=p[z(0x14d)]();if(q[z(0x167)]>0x0&&q[z(0x173)]>0x0)l['dataTransfer'][z(0x141)](p,0x0,0x0);requestAnimationFrame(()=>document[z(0x16b)][z(0x177)](p));}catch(u){console['warn'](z(0x13c),u);}}},i['ondragend']=l=>{const A=y;f[A(0x172)]=null,l['currentTarget']['style']['outline']='none';},i['ontouchstart']=l=>{const B=y;l[B(0x166)]();},i[y(0x145)]=l=>{const C=y;let m=c[C(0x16e)]['get'](f['tool']??NamedTools[C(0x16a)]);if(typeof m==C(0x164))m=new m(f);c['globalContext']['tool']=m;},h[y(0x163)](i),g[y(0x163)](h);const j=document['createElement']('td');j['innerText']=f[y(0x14a)]??'',g[y(0x163)](j),this[y(0x147)]['appendChild'](g);}}}customElements[w(0x168)]('node-projects-palette-elements',PaletteElements);
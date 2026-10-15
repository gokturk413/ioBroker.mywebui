const w=b;(function(c,d){const v=b,e=c();while(!![]){try{const f=parseInt(v(0x170))/0x1*(-parseInt(v(0x17d))/0x2)+parseInt(v(0x17e))/0x3*(-parseInt(v(0x176))/0x4)+-parseInt(v(0x164))/0x5*(parseInt(v(0x152))/0x6)+-parseInt(v(0x168))/0x7*(-parseInt(v(0x158))/0x8)+parseInt(v(0x16f))/0x9+parseInt(v(0x18c))/0xa*(parseInt(v(0x181))/0xb)+parseInt(v(0x178))/0xc*(parseInt(v(0x15f))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd0193));import{dragDropFormatNameElementDefinition}from'../../../Constants.js';function a(){const D=['createElement','setAttribute','10eNxRqJ','description','string','width','1281Vvxndq','tag','preventDefault','displayHtml','left','onclick','data:','815508zQARTH','1503538fclcbk','button','innerHTML','dashed','outline','<td\x20align=\x22left\x22\x20valign=\x22middle\x22\x20style=\x22width:20px;\x22><img\x20style=\x22width:16px;height:16px\x22\x20src=\x22','4029136gYHmxf','appendChild','3636dPuDJx','body','table','defaultWidth','defaultHeight','2YMqmML','3ZosxdN','none','createRange','11QLPNAq','ondragend','_table','defaultContent','template','top','height','\x22></td>','globalContext','error\x20creating\x20gost\x20elment','loadElements','16473830FiPIAA','icon','ontouchstart','style','</td>','4678050WWBiDD','define','currentTarget','ghostElement','tool','dataTransfer','25168otiSES','setDragImage','position','get','node-projects-palette-elements','selectNode','defaultStyles','111930wrtezl','DrawElementTool','firstChild'];a=function(){return D;};return a();}import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{NamedTools}from'../designerView/tools/NamedTools.js';function b(c,d){c=c-0x14e;const e=a();let f=e[c];return f;}export class PaletteElements extends BaseCustomWebComponentLazyAppend{static ['style']=css`
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
    `;static [w(0x185)]=html`
    <table id="table">
    </table>
  `;[w(0x183)];constructor(){const x=w;super(),this[x(0x183)]=this['_getDomElement'](x(0x17a));}[w(0x18b)](c,d,e){const y=w;this[y(0x183)]['replaceChildren']();for(const f of d){const g=document['createElement']('tr'),h=document[y(0x162)]('td'),i=document[y(0x162)]('button');i['setAttribute']('part',y(0x171));if(f['icon']&&!f['displayHtml']){let k=f[y(0x14e)];!f[y(0x14e)]['startsWith'](y(0x16e))&&(k=e+f['icon']),i['innerHTML']='<table><tr>'+y(0x175)+k+y(0x188)+'<td\x20align=\x22left\x22\x20>'+f[y(0x169)]+y(0x151)+'</tr></table>\x0a';}else{if(f[y(0x16b)])i[y(0x172)]=f['displayHtml'];else i['innerText']=f['name']?f['name']:f[y(0x169)];}i['draggable']=!![],i['ondragstart']=l=>{const z=y;l['dataTransfer']['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](f)),l[z(0x154)][z(0x150)][z(0x174)]=z(0x173);if(f[z(0x155)]){if(typeof f[z(0x155)]===z(0x166)){const m=document[z(0x180)]();m[z(0x15d)](document[z(0x179)]);const n=m['createContextualFragment'](f['ghostElement']);let o=n[z(0x161)];o['style'][z(0x15a)]='absolute',o['style'][z(0x186)]='-1000px',document['body']['appendChild'](o),l['dataTransfer']['setDragImage'](o,0x0,0x0),requestAnimationFrame(()=>document['body']['removeChild'](o));}else l[z(0x157)]['setDragImage'](f[z(0x155)],0x0,0x0);}else{if(!f['import'])try{let p=document['createElement'](f['tag']);if(f[z(0x184)])p[z(0x172)]=f['defaultContent'];if(f[z(0x17b)])p['style']['width']=f['defaultWidth'];if(f['defaultHeight'])p['style'][z(0x187)]=f[z(0x17c)];if(f['defaultAttributes'])for(let r in f['defaultAttributes']){p[z(0x163)](r,f['defaultAttributes'][r]);}if(f[z(0x15e)])for(let t in f[z(0x15e)]){p['style'][t]=f['defaultStyles'][t];}p[z(0x150)][z(0x15a)]='absolute';if(f['defaultWidth'])p[z(0x150)]['top']='-'+(parseInt(f['defaultHeight'])+0x1f4)+'px';else p['style'][z(0x186)]='-500px';if(f['defaultWidth'])p[z(0x150)][z(0x16c)]='-'+(parseInt(f['defaultWidth'])+0x1f4)+'px';else p[z(0x150)]['left']='-500px';document[z(0x179)][z(0x177)](p);let q=p['getBoundingClientRect']();if(q[z(0x167)]>0x0&&q[z(0x187)]>0x0)l[z(0x157)][z(0x159)](p,0x0,0x0);requestAnimationFrame(()=>document['body']['removeChild'](p));}catch(u){console['warn'](z(0x18a),u);}}},i[y(0x182)]=l=>{const A=y;f['import']=null,l['currentTarget']['style'][A(0x174)]=A(0x17f);},i[y(0x14f)]=l=>{const B=y;l[B(0x16a)]();},i[y(0x16d)]=l=>{const C=y;let m=c['designerTools'][C(0x15b)](f[C(0x156)]??NamedTools[C(0x160)]);if(typeof m=='function')m=new m(f);c[C(0x189)]['tool']=m;},h['appendChild'](i),g['appendChild'](h);const j=document['createElement']('td');j['innerText']=f[y(0x165)]??'',g[y(0x177)](j),this[y(0x183)]['appendChild'](g);}}}customElements[w(0x153)](w(0x15c),PaletteElements);
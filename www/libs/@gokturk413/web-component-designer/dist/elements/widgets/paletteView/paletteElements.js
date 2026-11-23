const w=b;(function(c,d){const v=b,e=c();while(!![]){try{const f=-parseInt(v(0xd4))/0x1+parseInt(v(0xfb))/0x2*(-parseInt(v(0xeb))/0x3)+parseInt(v(0xf3))/0x4+-parseInt(v(0xd1))/0x5*(-parseInt(v(0xe2))/0x6)+-parseInt(v(0xf1))/0x7*(parseInt(v(0xdb))/0x8)+-parseInt(v(0xe9))/0x9*(parseInt(v(0xdd))/0xa)+parseInt(v(0x108))/0xb*(parseInt(v(0xfa))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6034a));import{dragDropFormatNameElementDefinition}from'../../../Constants.js';import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{NamedTools}from'../designerView/tools/NamedTools.js';function b(c,d){c=c-0xcb;const e=a();let f=e[c];return f;}function a(){const C=['createElement','21955yTQASq','string','ghostElement','419403IKqgCK','_getDomElement','-500px','none','define','left','<td\x20align=\x22left\x22\x20>','16424ZCofjC','innerText','207520qwCxfl','absolute','selectNode','displayHtml','width','276KYoKxo','setDragImage','appendChild','height','<table><tr>','icon','defaultContent','18eekBLM','ondragstart','20454VCvcIq','name','</tr></table>\x0a','defaultAttributes','ondragend','top','2093fYraWa','setAttribute','60872ovhJrz','_table','removeChild','defaultStyles','globalContext','DrawElementTool','innerHTML','8859612gloAis','66AAgxvA','node-projects-palette-elements','template','currentTarget','import','defaultHeight','defaultWidth','dataTransfer','tag','designerTools','error\x20creating\x20gost\x20elment','get','createRange','22qCFtpn','createContextualFragment','part','-1000px','body','button','style','position'];a=function(){return C;};return a();}export class PaletteElements extends BaseCustomWebComponentLazyAppend{static [w(0xce)]=css`
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
    `;static [w(0xfd)]=html`
    <table id="table">
    </table>
  `;['_table'];constructor(){const x=w;super(),this[x(0xf4)]=this[x(0xd5)]('table');}['loadElements'](c,d,e){const y=w;this['_table']['replaceChildren']();for(const f of d){const g=document['createElement']('tr'),h=document[y(0xd0)]('td'),i=document[y(0xd0)](y(0xcd));i[y(0xf2)](y(0x10a),'button');if(f[y(0xe7)]&&!f[y(0xe0)]){let k=f[y(0xe7)];!f['icon']['startsWith']('data:')&&(k=e+f['icon']),i['innerHTML']=y(0xe6)+'<td\x20align=\x22left\x22\x20valign=\x22middle\x22\x20style=\x22width:20px;\x22><img\x20style=\x22width:16px;height:16px\x22\x20src=\x22'+k+'\x22></td>'+y(0xda)+f[y(0x103)]+'</td>'+y(0xed);}else{if(f[y(0xe0)])i[y(0xf9)]=f[y(0xe0)];else i[y(0xdc)]=f[y(0xec)]?f['name']:f[y(0x103)];}i['draggable']=!![],i[y(0xea)]=l=>{const z=y;l[z(0x102)]['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](f)),l['currentTarget']['style']['outline']='dashed';if(f['ghostElement']){if(typeof f[z(0xd3)]===z(0xd2)){const m=document[z(0x107)]();m[z(0xdf)](document[z(0xcc)]);const n=m[z(0x109)](f['ghostElement']);let o=n['firstChild'];o['style']['position']=z(0xde),o['style']['top']=z(0xcb),document['body']['appendChild'](o),l['dataTransfer']['setDragImage'](o,0x0,0x0),requestAnimationFrame(()=>document[z(0xcc)]['removeChild'](o));}else l[z(0x102)][z(0xe3)](f[z(0xd3)],0x0,0x0);}else{if(!f[z(0xff)])try{let p=document[z(0xd0)](f['tag']);if(f['defaultContent'])p[z(0xf9)]=f[z(0xe8)];if(f[z(0x101)])p[z(0xce)][z(0xe1)]=f[z(0x101)];if(f[z(0x100)])p['style'][z(0xe5)]=f[z(0x100)];if(f['defaultAttributes'])for(let r in f['defaultAttributes']){p[z(0xf2)](r,f[z(0xee)][r]);}if(f[z(0xf6)])for(let t in f['defaultStyles']){p['style'][t]=f[z(0xf6)][t];}p[z(0xce)][z(0xcf)]=z(0xde);if(f[z(0x101)])p['style'][z(0xf0)]='-'+(parseInt(f['defaultHeight'])+0x1f4)+'px';else p['style']['top']=z(0xd6);if(f['defaultWidth'])p['style'][z(0xd9)]='-'+(parseInt(f[z(0x101)])+0x1f4)+'px';else p[z(0xce)]['left']=z(0xd6);document['body'][z(0xe4)](p);let q=p['getBoundingClientRect']();if(q[z(0xe1)]>0x0&&q[z(0xe5)]>0x0)l['dataTransfer'][z(0xe3)](p,0x0,0x0);requestAnimationFrame(()=>document[z(0xcc)][z(0xf5)](p));}catch(u){console['warn'](z(0x105),u);}}},i[y(0xef)]=l=>{const A=y;f['import']=null,l[A(0xfe)][A(0xce)]['outline']=A(0xd7);},i['ontouchstart']=l=>{l['preventDefault']();},i['onclick']=l=>{const B=y;let m=c[B(0x104)][B(0x106)](f['tool']??NamedTools[B(0xf8)]);if(typeof m=='function')m=new m(f);c[B(0xf7)]['tool']=m;},h['appendChild'](i),g[y(0xe4)](h);const j=document[y(0xd0)]('td');j[y(0xdc)]=f['description']??'',g['appendChild'](j),this['_table']['appendChild'](g);}}}customElements[w(0xd8)](w(0xfc),PaletteElements);
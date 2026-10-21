function b(c,d){c=c-0xd4;const e=a();let f=e[c];return f;}function a(){const C=['20WHlWkS','tag','11aigOWq','setAttribute','stringify','globalContext','968VwNkrb','setData','1354470euPeEE','warn','createRange','button','icon','name','onclick','defaultStyles','import','5696pyJeYp','dashed','innerText','selectNode','draggable','15322788PbhizV','body','outline','firstChild','height','description','23427PGoYaF','appendChild','402MfnJIs','dataTransfer','defaultAttributes','_table','<td\x20align=\x22left\x22\x20valign=\x22middle\x22\x20style=\x22width:20px;\x22><img\x20style=\x22width:16px;height:16px\x22\x20src=\x22','defaultWidth','setDragImage','style','top','<table><tr>','removeChild','defaultContent','200768xxoKeK','ondragstart','width','3907490jsFuan','absolute','createElement','get','position','innerHTML','startsWith','12RoMpJw','defaultHeight','left','3331706JLBvxF','_getDomElement','replaceChildren','none','tool','</td>','string'];a=function(){return C;};return a();}const w=b;(function(c,d){const v=b,e=c();while(!![]){try{const f=-parseInt(v(0x105))/0x1*(-parseInt(v(0xfb))/0x2)+-parseInt(v(0xef))/0x3*(-parseInt(v(0xe2))/0x4)+-parseInt(v(0x10f))/0x5*(-parseInt(v(0xd9))/0x6)+parseInt(v(0x108))/0x7+parseInt(v(0xd7))/0x8*(-parseInt(v(0xed))/0x9)+-parseInt(v(0xfe))/0xa+-parseInt(v(0x111))/0xb*(parseInt(v(0xe7))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc14c7));import{dragDropFormatNameElementDefinition}from'../../../Constants.js';import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{NamedTools}from'../designerView/tools/NamedTools.js';export class PaletteElements extends BaseCustomWebComponentLazyAppend{static [w(0xf6)]=css`
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
  `;[w(0xf2)];constructor(){const x=w;super(),this[x(0xf2)]=this[x(0x109)]('table');}['loadElements'](c,d,e){const y=w;this[y(0xf2)][y(0x10a)]();for(const f of d){const g=document['createElement']('tr'),h=document[y(0x100)]('td'),i=document[y(0x100)](y(0xdc));i['setAttribute']('part','button');if(f['icon']&&!f['displayHtml']){let k=f[y(0xdd)];!f['icon'][y(0x104)]('data:')&&(k=e+f[y(0xdd)]),i['innerHTML']=y(0xf8)+y(0xf3)+k+'\x22></td>'+'<td\x20align=\x22left\x22\x20>'+f[y(0x110)]+y(0x10d)+'</tr></table>\x0a';}else{if(f['displayHtml'])i[y(0x103)]=f['displayHtml'];else i[y(0xe4)]=f['name']?f[y(0xde)]:f['tag'];}i[y(0xe6)]=!![],i[y(0xfc)]=l=>{const z=y;l['dataTransfer'][z(0xd8)](dragDropFormatNameElementDefinition,JSON[z(0xd5)](f)),l['currentTarget'][z(0xf6)][z(0xe9)]=z(0xe3);if(f['ghostElement']){if(typeof f['ghostElement']===z(0x10e)){const m=document[z(0xdb)]();m[z(0xe5)](document['body']);const n=m['createContextualFragment'](f['ghostElement']);let o=n[z(0xea)];o['style'][z(0x102)]='absolute',o[z(0xf6)][z(0xf7)]='-1000px',document['body'][z(0xee)](o),l[z(0xf0)][z(0xf5)](o,0x0,0x0),requestAnimationFrame(()=>document['body']['removeChild'](o));}else l[z(0xf0)][z(0xf5)](f['ghostElement'],0x0,0x0);}else{if(!f[z(0xe1)])try{let p=document['createElement'](f[z(0x110)]);if(f[z(0xfa)])p['innerHTML']=f['defaultContent'];if(f[z(0xf4)])p['style'][z(0xfd)]=f[z(0xf4)];if(f['defaultHeight'])p['style']['height']=f['defaultHeight'];if(f['defaultAttributes'])for(let r in f[z(0xf1)]){p[z(0xd4)](r,f[z(0xf1)][r]);}if(f['defaultStyles'])for(let t in f[z(0xe0)]){p['style'][t]=f['defaultStyles'][t];}p['style'][z(0x102)]=z(0xff);if(f[z(0xf4)])p[z(0xf6)][z(0xf7)]='-'+(parseInt(f[z(0x106)])+0x1f4)+'px';else p['style'][z(0xf7)]='-500px';if(f[z(0xf4)])p['style'][z(0x107)]='-'+(parseInt(f[z(0xf4)])+0x1f4)+'px';else p['style'][z(0x107)]='-500px';document[z(0xe8)][z(0xee)](p);let q=p['getBoundingClientRect']();if(q['width']>0x0&&q[z(0xeb)]>0x0)l[z(0xf0)]['setDragImage'](p,0x0,0x0);requestAnimationFrame(()=>document['body'][z(0xf9)](p));}catch(u){console[z(0xda)]('error\x20creating\x20gost\x20elment',u);}}},i['ondragend']=l=>{const A=y;f[A(0xe1)]=null,l['currentTarget']['style'][A(0xe9)]=A(0x10b);},i['ontouchstart']=l=>{l['preventDefault']();},i[y(0xdf)]=l=>{const B=y;let m=c['designerTools'][B(0x101)](f['tool']??NamedTools['DrawElementTool']);if(typeof m=='function')m=new m(f);c[B(0xd6)][B(0x10c)]=m;},h['appendChild'](i),g[y(0xee)](h);const j=document['createElement']('td');j[y(0xe4)]=f[y(0xec)]??'',g[y(0xee)](j),this['_table'][y(0xee)](g);}}}customElements['define']('node-projects-palette-elements',PaletteElements);
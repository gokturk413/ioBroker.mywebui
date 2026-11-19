const w=b;function a(){const D=['_getDomElement','import','<table><tr>','<td\x20align=\x22left\x22\x20valign=\x22middle\x22\x20style=\x22width:20px;\x22><img\x20style=\x22width:16px;height:16px\x22\x20src=\x22','ghostElement','tool','</tr></table>\x0a','setDragImage','334179ElDmRO','</td>','top','defaultStyles','<td\x20align=\x22left\x22\x20>','position','appendChild','currentTarget','dataTransfer','setAttribute','warn','12909526IoSjnq','defaultHeight','width','18oZUbSL','804eIiqln','function','tag','24PrIrLU','designerTools','innerHTML','loadElements','67565gLKwPs','replaceChildren','1874864BzcarP','icon','displayHtml','createElement','name','656296RuXvVM','preventDefault','style','error\x20creating\x20gost\x20elment','defaultWidth','onclick','4584159dEUKfj','body','-1000px','defaultContent','5129030BbYavt','_table','11PnYqlX','outline','button','startsWith','removeChild'];a=function(){return D;};return a();}(function(c,d){const v=b,e=c();while(!![]){try{const f=-parseInt(v(0x142))/0x1+-parseInt(v(0x138))/0x2*(-parseInt(v(0x160))/0x3)+-parseInt(v(0x147))/0x4+parseInt(v(0x140))/0x5*(parseInt(v(0x139))/0x6)+-parseInt(v(0x135))/0x7+-parseInt(v(0x13c))/0x8*(-parseInt(v(0x14d))/0x9)+-parseInt(v(0x151))/0xa*(-parseInt(v(0x153))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xed147));import{dragDropFormatNameElementDefinition}from'../../../Constants.js';function b(c,d){c=c-0x133;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{NamedTools}from'../designerView/tools/NamedTools.js';export class PaletteElements extends BaseCustomWebComponentLazyAppend{static ['style']=css`
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
  `;[w(0x152)];constructor(){const x=w;super(),this[x(0x152)]=this[x(0x158)]('table');}[w(0x13f)](c,d,e){const y=w;this[y(0x152)][y(0x141)]();for(const f of d){const g=document[y(0x145)]('tr'),h=document[y(0x145)]('td'),i=document['createElement'](y(0x155));i['setAttribute']('part','button');if(f[y(0x143)]&&!f['displayHtml']){let k=f['icon'];!f['icon'][y(0x156)]('data:')&&(k=e+f['icon']),i[y(0x13e)]=y(0x15a)+y(0x15b)+k+'\x22></td>'+y(0x164)+f[y(0x13b)]+y(0x161)+y(0x15e);}else{if(f['displayHtml'])i[y(0x13e)]=f[y(0x144)];else i['innerText']=f[y(0x146)]?f['name']:f[y(0x13b)];}i['draggable']=!![],i['ondragstart']=l=>{const z=y;l[z(0x168)]['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](f)),l['currentTarget']['style'][z(0x154)]='dashed';if(f['ghostElement']){if(typeof f['ghostElement']==='string'){const m=document['createRange']();m['selectNode'](document['body']);const n=m['createContextualFragment'](f[z(0x15c)]);let o=n['firstChild'];o[z(0x149)]['position']='absolute',o[z(0x149)][z(0x162)]=z(0x14f),document['body'][z(0x166)](o),l[z(0x168)]['setDragImage'](o,0x0,0x0),requestAnimationFrame(()=>document[z(0x14e)]['removeChild'](o));}else l['dataTransfer'][z(0x15f)](f[z(0x15c)],0x0,0x0);}else{if(!f[z(0x159)])try{let p=document[z(0x145)](f['tag']);if(f[z(0x150)])p['innerHTML']=f[z(0x150)];if(f[z(0x14b)])p[z(0x149)]['width']=f['defaultWidth'];if(f[z(0x136)])p[z(0x149)]['height']=f[z(0x136)];if(f['defaultAttributes'])for(let r in f['defaultAttributes']){p[z(0x133)](r,f['defaultAttributes'][r]);}if(f['defaultStyles'])for(let t in f[z(0x163)]){p[z(0x149)][t]=f['defaultStyles'][t];}p[z(0x149)][z(0x165)]='absolute';if(f['defaultWidth'])p['style']['top']='-'+(parseInt(f[z(0x136)])+0x1f4)+'px';else p[z(0x149)][z(0x162)]='-500px';if(f[z(0x14b)])p[z(0x149)]['left']='-'+(parseInt(f[z(0x14b)])+0x1f4)+'px';else p[z(0x149)]['left']='-500px';document[z(0x14e)][z(0x166)](p);let q=p['getBoundingClientRect']();if(q[z(0x137)]>0x0&&q['height']>0x0)l['dataTransfer']['setDragImage'](p,0x0,0x0);requestAnimationFrame(()=>document[z(0x14e)][z(0x157)](p));}catch(u){console[z(0x134)](z(0x14a),u);}}},i['ondragend']=l=>{const A=y;f['import']=null,l[A(0x167)]['style'][A(0x154)]='none';},i['ontouchstart']=l=>{const B=y;l[B(0x148)]();},i[y(0x14c)]=l=>{const C=y;let m=c[C(0x13d)]['get'](f[C(0x15d)]??NamedTools['DrawElementTool']);if(typeof m==C(0x13a))m=new m(f);c['globalContext'][C(0x15d)]=m;},h['appendChild'](i),g['appendChild'](h);const j=document[y(0x145)]('td');j['innerText']=f['description']??'',g['appendChild'](j),this['_table'][y(0x166)](g);}}}customElements['define']('node-projects-palette-elements',PaletteElements);
const w=b;(function(c,d){const v=b,e=c();while(!![]){try{const f=parseInt(v(0xa0))/0x1+parseInt(v(0x94))/0x2+-parseInt(v(0x84))/0x3*(parseInt(v(0x98))/0x4)+parseInt(v(0xab))/0x5+parseInt(v(0x9e))/0x6*(-parseInt(v(0xb3))/0x7)+-parseInt(v(0x88))/0x8*(-parseInt(v(0xaa))/0x9)+-parseInt(v(0xa9))/0xa*(parseInt(v(0x99))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x56ae0));function a(){const D=['innerHTML','defaultContent','selectNode','573Umovgd','dataTransfer','icon','appendChild','2452120WDMKPs','_table','displayHtml','ondragend','defaultStyles','ontouchstart','defaultHeight','<table><tr>','createElement','top','setAttribute','draggable','724414aOleHe','ghostElement','template','_getDomElement','10840RxyCRq','3043821seEVQa','tag','defaultWidth','import','replaceChildren','36ckWaeX','style','171693unuteQ','tool','width','innerText','position','currentTarget','body','button','defaultAttributes','10YpiQJp','9jsacic','2425920ldJDIG','</td>','left','setDragImage','description','outline','node-projects-palette-elements','removeChild','205611QGvjhB','preventDefault','globalContext','height','createRange','table','absolute','loadElements','DrawElementTool'];a=function(){return D;};return a();}import{dragDropFormatNameElementDefinition}from'../../../Constants.js';function b(c,d){c=c-0x7f;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{NamedTools}from'../designerView/tools/NamedTools.js';export class PaletteElements extends BaseCustomWebComponentLazyAppend{static ['style']=css`
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
    `;static [w(0x96)]=html`
    <table id="table">
    </table>
  `;['_table'];constructor(){const x=w;super(),this['_table']=this[x(0x97)](x(0xb8));}[w(0x7f)](c,d,e){const y=w;this['_table'][y(0x9d)]();for(const f of d){const g=document['createElement']('tr'),h=document['createElement']('td'),i=document[y(0x90)](y(0xa7));i[y(0x92)]('part','button');if(f['icon']&&!f[y(0x8a)]){let k=f['icon'];!f['icon']['startsWith']('data:')&&(k=e+f[y(0x86)]),i[y(0x81)]=y(0x8f)+'<td\x20align=\x22left\x22\x20valign=\x22middle\x22\x20style=\x22width:20px;\x22><img\x20style=\x22width:16px;height:16px\x22\x20src=\x22'+k+'\x22></td>'+'<td\x20align=\x22left\x22\x20>'+f[y(0x9a)]+y(0xac)+'</tr></table>\x0a';}else{if(f['displayHtml'])i[y(0x81)]=f['displayHtml'];else i[y(0xa3)]=f['name']?f['name']:f['tag'];}i[y(0x93)]=!![],i['ondragstart']=l=>{const z=y;l[z(0x85)]['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](f)),l['currentTarget'][z(0x9f)]['outline']='dashed';if(f['ghostElement']){if(typeof f['ghostElement']==='string'){const m=document[z(0xb7)]();m[z(0x83)](document['body']);const n=m['createContextualFragment'](f['ghostElement']);let o=n['firstChild'];o[z(0x9f)]['position']=z(0xb9),o[z(0x9f)][z(0x91)]='-1000px',document['body'][z(0x87)](o),l[z(0x85)]['setDragImage'](o,0x0,0x0),requestAnimationFrame(()=>document['body'][z(0xb2)](o));}else l[z(0x85)][z(0xae)](f[z(0x95)],0x0,0x0);}else{if(!f[z(0x9c)])try{let p=document['createElement'](f[z(0x9a)]);if(f['defaultContent'])p['innerHTML']=f[z(0x82)];if(f[z(0x9b)])p[z(0x9f)]['width']=f['defaultWidth'];if(f['defaultHeight'])p['style'][z(0xb6)]=f['defaultHeight'];if(f['defaultAttributes'])for(let r in f[z(0xa8)]){p[z(0x92)](r,f['defaultAttributes'][r]);}if(f['defaultStyles'])for(let t in f[z(0x8c)]){p[z(0x9f)][t]=f[z(0x8c)][t];}p[z(0x9f)][z(0xa4)]=z(0xb9);if(f['defaultWidth'])p[z(0x9f)]['top']='-'+(parseInt(f[z(0x8e)])+0x1f4)+'px';else p[z(0x9f)]['top']='-500px';if(f[z(0x9b)])p['style']['left']='-'+(parseInt(f['defaultWidth'])+0x1f4)+'px';else p[z(0x9f)][z(0xad)]='-500px';document['body']['appendChild'](p);let q=p['getBoundingClientRect']();if(q[z(0xa2)]>0x0&&q['height']>0x0)l[z(0x85)]['setDragImage'](p,0x0,0x0);requestAnimationFrame(()=>document[z(0xa6)]['removeChild'](p));}catch(u){console['warn']('error\x20creating\x20gost\x20elment',u);}}},i[y(0x8b)]=l=>{const A=y;f[A(0x9c)]=null,l[A(0xa5)]['style'][A(0xb0)]='none';},i[y(0x8d)]=l=>{const B=y;l[B(0xb4)]();},i['onclick']=l=>{const C=y;let m=c['designerTools']['get'](f[C(0xa1)]??NamedTools[C(0x80)]);if(typeof m=='function')m=new m(f);c[C(0xb5)][C(0xa1)]=m;},h['appendChild'](i),g[y(0x87)](h);const j=document['createElement']('td');j[y(0xa3)]=f[y(0xaf)]??'',g[y(0x87)](j),this[y(0x89)]['appendChild'](g);}}}customElements['define'](w(0xb1),PaletteElements);
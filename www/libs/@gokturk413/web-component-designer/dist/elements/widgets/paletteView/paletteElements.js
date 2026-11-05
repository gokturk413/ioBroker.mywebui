const w=b;function b(c,d){c=c-0x15d;const e=a();let f=e[c];return f;}(function(c,d){const v=b,e=c();while(!![]){try{const f=-parseInt(v(0x176))/0x1*(parseInt(v(0x18b))/0x2)+parseInt(v(0x18e))/0x3*(-parseInt(v(0x160))/0x4)+-parseInt(v(0x181))/0x5+parseInt(v(0x17d))/0x6*(-parseInt(v(0x18d))/0x7)+-parseInt(v(0x183))/0x8*(-parseInt(v(0x16c))/0x9)+parseInt(v(0x16d))/0xa*(parseInt(v(0x16a))/0xb)+parseInt(v(0x184))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd8bde));import{dragDropFormatNameElementDefinition}from'../../../Constants.js';import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{NamedTools}from'../designerView/tools/NamedTools.js';export class PaletteElements extends BaseCustomWebComponentLazyAppend{static ['style']=css`
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
  `;[w(0x17a)];constructor(){const x=w;super(),this[x(0x17a)]=this[x(0x177)]('table');}[w(0x17e)](c,d,e){const y=w;this[y(0x17a)][y(0x175)]();for(const f of d){const g=document['createElement']('tr'),h=document[y(0x162)]('td'),i=document['createElement'](y(0x16f));i['setAttribute'](y(0x165),y(0x16f));if(f['icon']&&!f[y(0x166)]){let k=f[y(0x16e)];!f['icon']['startsWith']('data:')&&(k=e+f[y(0x16e)]),i[y(0x15e)]='<table><tr>'+'<td\x20align=\x22left\x22\x20valign=\x22middle\x22\x20style=\x22width:20px;\x22><img\x20style=\x22width:16px;height:16px\x22\x20src=\x22'+k+'\x22></td>'+y(0x18c)+f['tag']+'</td>'+y(0x185);}else{if(f['displayHtml'])i[y(0x15e)]=f['displayHtml'];else i['innerText']=f[y(0x18a)]?f['name']:f['tag'];}i['draggable']=!![],i['ondragstart']=l=>{const z=y;l[z(0x17c)]['setData'](dragDropFormatNameElementDefinition,JSON[z(0x179)](f)),l['currentTarget']['style']['outline']='dashed';if(f[z(0x17b)]){if(typeof f['ghostElement']==='string'){const m=document['createRange']();m['selectNode'](document[z(0x163)]);const n=m[z(0x186)](f[z(0x17b)]);let o=n[z(0x172)];o['style'][z(0x170)]=z(0x191),o['style']['top']=z(0x161),document['body']['appendChild'](o),l['dataTransfer']['setDragImage'](o,0x0,0x0),requestAnimationFrame(()=>document['body']['removeChild'](o));}else l['dataTransfer']['setDragImage'](f[z(0x17b)],0x0,0x0);}else{if(!f[z(0x190)])try{let p=document[z(0x162)](f[z(0x15f)]);if(f['defaultContent'])p['innerHTML']=f['defaultContent'];if(f[z(0x164)])p['style']['width']=f['defaultWidth'];if(f['defaultHeight'])p['style']['height']=f[z(0x169)];if(f[z(0x15d)])for(let r in f['defaultAttributes']){p[z(0x171)](r,f['defaultAttributes'][r]);}if(f[z(0x182)])for(let t in f[z(0x182)]){p['style'][t]=f['defaultStyles'][t];}p['style'][z(0x170)]='absolute';if(f[z(0x164)])p[z(0x193)][z(0x168)]='-'+(parseInt(f[z(0x169)])+0x1f4)+'px';else p[z(0x193)]['top']=z(0x16b);if(f['defaultWidth'])p[z(0x193)][z(0x178)]='-'+(parseInt(f['defaultWidth'])+0x1f4)+'px';else p['style']['left']='-500px';document['body'][z(0x17f)](p);let q=p[z(0x18f)]();if(q['width']>0x0&&q[z(0x173)]>0x0)l[z(0x17c)]['setDragImage'](p,0x0,0x0);requestAnimationFrame(()=>document['body'][z(0x189)](p));}catch(u){console['warn'](z(0x180),u);}}},i['ondragend']=l=>{const A=y;f[A(0x190)]=null,l['currentTarget']['style']['outline']=A(0x187);},i['ontouchstart']=l=>{const B=y;l[B(0x167)]();},i['onclick']=l=>{const C=y;let m=c['designerTools']['get'](f['tool']??NamedTools['DrawElementTool']);if(typeof m=='function')m=new m(f);c['globalContext'][C(0x188)]=m;},h['appendChild'](i),g['appendChild'](h);const j=document['createElement']('td');j['innerText']=f[y(0x192)]??'',g['appendChild'](j),this['_table'][y(0x17f)](g);}}}customElements[w(0x174)]('node-projects-palette-elements',PaletteElements);function a(){const D=['createElement','body','defaultWidth','part','displayHtml','preventDefault','top','defaultHeight','127952vKBhxz','-500px','1638bVUeqN','1390cPepqN','icon','button','position','setAttribute','firstChild','height','define','replaceChildren','41926XHFweW','_getDomElement','left','stringify','_table','ghostElement','dataTransfer','88518cXUQpT','loadElements','appendChild','error\x20creating\x20gost\x20elment','5521315MwPGpE','defaultStyles','77936mjAWze','450240IGtyKs','</tr></table>\x0a','createContextualFragment','none','tool','removeChild','name','16jxfehl','<td\x20align=\x22left\x22\x20>','217hniOiM','6gPhpyX','getBoundingClientRect','import','absolute','description','style','defaultAttributes','innerHTML','tag','1285248ZoSXbh','-1000px'];a=function(){return D;};return a();}
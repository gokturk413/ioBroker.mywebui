const w=b;function b(c,d){c=c-0x8a;const e=a();let f=e[c];return f;}(function(c,d){const v=b,e=c();while(!![]){try{const f=-parseInt(v(0xa7))/0x1*(-parseInt(v(0x8c))/0x2)+parseInt(v(0xa5))/0x3+parseInt(v(0xba))/0x4+-parseInt(v(0x9b))/0x5+-parseInt(v(0x94))/0x6*(-parseInt(v(0xbd))/0x7)+-parseInt(v(0x9f))/0x8*(-parseInt(v(0x93))/0x9)+parseInt(v(0xab))/0xa*(-parseInt(v(0xb3))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x35fa1));import{dragDropFormatNameElementDefinition}from'../../../Constants.js';import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';function a(){const C=['35835fMEPTd','width','table','_table','8UssbfJ','innerHTML','body','tag','currentTarget','draggable','1043019UZbusI','setDragImage','13CAekuX','ontouchstart','<td\x20align=\x22left\x22\x20>','displayHtml','5877980UKqvyC','designerTools','innerText','position','button','</td>','warn','<table><tr>','11mzbUXR','get','<td\x20align=\x22left\x22\x20valign=\x22middle\x22\x20style=\x22width:20px;\x22><img\x20style=\x22width:16px;height:16px\x22\x20src=\x22','setAttribute','outline','string','node-projects-palette-elements','1189100wbMfZe','left','defaultStyles','105MgVEtm','stringify','appendChild','dataTransfer','loadElements','name','defaultContent','_getDomElement','absolute','createContextualFragment','13374lMDDyx','createElement','style','define','template','defaultWidth','defaultAttributes','481365oeppiL','12276ipvmGG','ondragstart','description','-500px','ghostElement','tool','icon'];a=function(){return C;};return a();}import{NamedTools}from'../designerView/tools/NamedTools.js';export class PaletteElements extends BaseCustomWebComponentLazyAppend{static ['style']=css`
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
    `;static [w(0x90)]=html`
    <table id="table">
    </table>
  `;['_table'];constructor(){const x=w;super(),this[x(0x9e)]=this[x(0xc4)](x(0x9d));}[w(0xc1)](c,d,e){const y=w;this[y(0x9e)]['replaceChildren']();for(const f of d){const g=document[y(0x8d)]('tr'),h=document['createElement']('td'),i=document['createElement']('button');i[y(0xb6)]('part',y(0xaf));if(f[y(0x9a)]&&!f[y(0xaa)]){let k=f[y(0x9a)];!f[y(0x9a)]['startsWith']('data:')&&(k=e+f['icon']),i['innerHTML']=y(0xb2)+y(0xb5)+k+'\x22></td>'+y(0xa9)+f[y(0xa2)]+y(0xb0)+'</tr></table>\x0a';}else{if(f[y(0xaa)])i[y(0xa0)]=f[y(0xaa)];else i['innerText']=f['name']?f[y(0xc2)]:f[y(0xa2)];}i[y(0xa4)]=!![],i[y(0x95)]=l=>{const z=y;l[z(0xc0)]['setData'](dragDropFormatNameElementDefinition,JSON[z(0xbe)](f)),l[z(0xa3)][z(0x8e)][z(0xb7)]='dashed';if(f['ghostElement']){if(typeof f['ghostElement']===z(0xb8)){const m=document['createRange']();m['selectNode'](document[z(0xa1)]);const n=m[z(0x8b)](f['ghostElement']);let o=n['firstChild'];o[z(0x8e)][z(0xae)]=z(0x8a),o[z(0x8e)]['top']='-1000px',document[z(0xa1)]['appendChild'](o),l['dataTransfer']['setDragImage'](o,0x0,0x0),requestAnimationFrame(()=>document['body']['removeChild'](o));}else l['dataTransfer'][z(0xa6)](f[z(0x98)],0x0,0x0);}else{if(!f['import'])try{let p=document[z(0x8d)](f['tag']);if(f[z(0xc3)])p['innerHTML']=f['defaultContent'];if(f[z(0x91)])p[z(0x8e)][z(0x9c)]=f[z(0x91)];if(f['defaultHeight'])p[z(0x8e)]['height']=f['defaultHeight'];if(f[z(0x92)])for(let r in f['defaultAttributes']){p[z(0xb6)](r,f['defaultAttributes'][r]);}if(f['defaultStyles'])for(let t in f['defaultStyles']){p['style'][t]=f[z(0xbc)][t];}p[z(0x8e)][z(0xae)]='absolute';if(f['defaultWidth'])p['style']['top']='-'+(parseInt(f['defaultHeight'])+0x1f4)+'px';else p['style']['top']=z(0x97);if(f['defaultWidth'])p[z(0x8e)]['left']='-'+(parseInt(f[z(0x91)])+0x1f4)+'px';else p[z(0x8e)][z(0xbb)]=z(0x97);document[z(0xa1)]['appendChild'](p);let q=p['getBoundingClientRect']();if(q['width']>0x0&&q['height']>0x0)l['dataTransfer'][z(0xa6)](p,0x0,0x0);requestAnimationFrame(()=>document['body']['removeChild'](p));}catch(u){console[z(0xb1)]('error\x20creating\x20gost\x20elment',u);}}},i['ondragend']=l=>{const A=y;f['import']=null,l[A(0xa3)]['style']['outline']='none';},i[y(0xa8)]=l=>{l['preventDefault']();},i['onclick']=l=>{const B=y;let m=c[B(0xac)][B(0xb4)](f[B(0x99)]??NamedTools['DrawElementTool']);if(typeof m=='function')m=new m(f);c['globalContext']['tool']=m;},h['appendChild'](i),g['appendChild'](h);const j=document['createElement']('td');j[y(0xad)]=f[y(0x96)]??'',g[y(0xbf)](j),this['_table'][y(0xbf)](g);}}}customElements[w(0x8f)](w(0xb9),PaletteElements);
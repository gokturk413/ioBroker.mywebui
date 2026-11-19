const w=b;(function(c,d){const v=b,e=c();while(!![]){try{const f=-parseInt(v(0x12a))/0x1+parseInt(v(0x12b))/0x2*(-parseInt(v(0x12c))/0x3)+-parseInt(v(0x138))/0x4*(-parseInt(v(0x12d))/0x5)+-parseInt(v(0x123))/0x6+parseInt(v(0x122))/0x7*(parseInt(v(0x128))/0x8)+-parseInt(v(0x155))/0x9+parseInt(v(0x134))/0xa*(parseInt(v(0x156))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa320e));function a(){const C=['9zcMtHO','224205BCLaKY','style','replaceChildren','innerHTML','_table','ontouchstart','defaultContent','10KezwBi','defaultHeight','currentTarget','body','36XhPwSV','error\x20creating\x20gost\x20elment','tool','appendChild','removeChild','<table><tr>','function','designerTools','absolute','draggable','setAttribute','defaultWidth','table','defaultAttributes','displayHtml','DrawElementTool','top','defaultStyles','template','stringify','name','width','dataTransfer','ghostElement','setDragImage','warn','setData','data:','outline','10367271eiuBhg','19320895KpeLGo','createElement','createRange','part','firstChild','-1000px','1253xdLAZB','1293684aQdCtY','button','position','icon','-500px','18072mPaeCG','string','401234OZQUnZ','84956OGcEdc'];a=function(){return C;};return a();}import{dragDropFormatNameElementDefinition}from'../../../Constants.js';import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x11e;const e=a();let f=e[c];return f;}import{NamedTools}from'../designerView/tools/NamedTools.js';export class PaletteElements extends BaseCustomWebComponentLazyAppend{static [w(0x12e)]=css`
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
    `;static [w(0x14a)]=html`
    <table id="table">
    </table>
  `;['_table'];constructor(){const x=w;super(),this[x(0x131)]=this['_getDomElement'](x(0x144));}['loadElements'](c,d,e){const y=w;this[y(0x131)][y(0x12f)]();for(const f of d){const g=document['createElement']('tr'),h=document[y(0x157)]('td'),i=document['createElement'](y(0x124));i['setAttribute'](y(0x11f),y(0x124));if(f['icon']&&!f['displayHtml']){let k=f['icon'];!f[y(0x126)]['startsWith'](y(0x153))&&(k=e+f['icon']),i['innerHTML']=y(0x13d)+'<td\x20align=\x22left\x22\x20valign=\x22middle\x22\x20style=\x22width:20px;\x22><img\x20style=\x22width:16px;height:16px\x22\x20src=\x22'+k+'\x22></td>'+'<td\x20align=\x22left\x22\x20>'+f['tag']+'</td>'+'</tr></table>\x0a';}else{if(f[y(0x146)])i[y(0x130)]=f[y(0x146)];else i['innerText']=f[y(0x14c)]?f['name']:f['tag'];}i[y(0x141)]=!![],i['ondragstart']=l=>{const z=y;l['dataTransfer'][z(0x152)](dragDropFormatNameElementDefinition,JSON[z(0x14b)](f)),l[z(0x136)]['style'][z(0x154)]='dashed';if(f['ghostElement']){if(typeof f['ghostElement']===z(0x129)){const m=document[z(0x11e)]();m['selectNode'](document[z(0x137)]);const n=m['createContextualFragment'](f['ghostElement']);let o=n[z(0x120)];o[z(0x12e)]['position']=z(0x140),o[z(0x12e)]['top']=z(0x121),document[z(0x137)]['appendChild'](o),l[z(0x14e)][z(0x150)](o,0x0,0x0),requestAnimationFrame(()=>document['body'][z(0x13c)](o));}else l[z(0x14e)][z(0x150)](f[z(0x14f)],0x0,0x0);}else{if(!f['import'])try{let p=document[z(0x157)](f['tag']);if(f['defaultContent'])p['innerHTML']=f[z(0x133)];if(f['defaultWidth'])p[z(0x12e)][z(0x14d)]=f['defaultWidth'];if(f[z(0x135)])p['style']['height']=f[z(0x135)];if(f['defaultAttributes'])for(let r in f[z(0x145)]){p[z(0x142)](r,f['defaultAttributes'][r]);}if(f[z(0x149)])for(let t in f['defaultStyles']){p['style'][t]=f['defaultStyles'][t];}p['style'][z(0x125)]='absolute';if(f[z(0x143)])p[z(0x12e)]['top']='-'+(parseInt(f['defaultHeight'])+0x1f4)+'px';else p['style'][z(0x148)]=z(0x127);if(f[z(0x143)])p['style']['left']='-'+(parseInt(f[z(0x143)])+0x1f4)+'px';else p['style']['left']=z(0x127);document[z(0x137)][z(0x13b)](p);let q=p['getBoundingClientRect']();if(q['width']>0x0&&q['height']>0x0)l[z(0x14e)][z(0x150)](p,0x0,0x0);requestAnimationFrame(()=>document['body']['removeChild'](p));}catch(u){console[z(0x151)](z(0x139),u);}}},i['ondragend']=l=>{const A=y;f['import']=null,l['currentTarget'][A(0x12e)][A(0x154)]='none';},i[y(0x132)]=l=>{l['preventDefault']();},i['onclick']=l=>{const B=y;let m=c[B(0x13f)]['get'](f['tool']??NamedTools[B(0x147)]);if(typeof m==B(0x13e))m=new m(f);c['globalContext'][B(0x13a)]=m;},h[y(0x13b)](i),g[y(0x13b)](h);const j=document[y(0x157)]('td');j['innerText']=f['description']??'',g['appendChild'](j),this['_table'][y(0x13b)](g);}}}customElements['define']('node-projects-palette-elements',PaletteElements);
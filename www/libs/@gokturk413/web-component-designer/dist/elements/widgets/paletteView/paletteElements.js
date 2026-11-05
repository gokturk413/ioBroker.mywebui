const w=b;function b(c,d){c=c-0x192;const e=a();let f=e[c];return f;}(function(c,d){const v=b,e=c();while(!![]){try{const f=parseInt(v(0x194))/0x1*(parseInt(v(0x1cd))/0x2)+parseInt(v(0x1b1))/0x3+parseInt(v(0x1a5))/0x4*(-parseInt(v(0x1ca))/0x5)+parseInt(v(0x1c6))/0x6*(parseInt(v(0x1a9))/0x7)+parseInt(v(0x1bc))/0x8+parseInt(v(0x1b0))/0x9+parseInt(v(0x19f))/0xa*(-parseInt(v(0x196))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd21d3));import{dragDropFormatNameElementDefinition}from'../../../Constants.js';import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{NamedTools}from'../designerView/tools/NamedTools.js';export class PaletteElements extends BaseCustomWebComponentLazyAppend{static ['style']=css`
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
    `;static [w(0x199)]=html`
    <table id="table">
    </table>
  `;[w(0x1c9)];constructor(){super(),this['_table']=this['_getDomElement']('table');}[w(0x1b3)](c,d,e){const x=w;this['_table']['replaceChildren']();for(const f of d){const g=document[x(0x1a2)]('tr'),h=document[x(0x1a2)]('td'),i=document[x(0x1a2)]('button');i[x(0x1c4)](x(0x1ce),x(0x1aa));if(f['icon']&&!f[x(0x1ba)]){let k=f[x(0x192)];!f[x(0x192)][x(0x1c1)](x(0x1a3))&&(k=e+f[x(0x192)]),i[x(0x1c0)]='<table><tr>'+x(0x1d2)+k+x(0x1be)+x(0x1bf)+f[x(0x19a)]+'</td>'+x(0x1bd);}else{if(f['displayHtml'])i['innerHTML']=f['displayHtml'];else i[x(0x1d1)]=f['name']?f['name']:f['tag'];}i[x(0x1a7)]=!![],i['ondragstart']=l=>{const y=x;l['dataTransfer'][y(0x1cb)](dragDropFormatNameElementDefinition,JSON[y(0x1a8)](f)),l[y(0x1ab)][y(0x1c8)]['outline']='dashed';if(f['ghostElement']){if(typeof f['ghostElement']==='string'){const m=document['createRange']();m[y(0x1b2)](document[y(0x1d0)]);const n=m[y(0x1bb)](f['ghostElement']);let o=n[y(0x1b7)];o[y(0x1c8)][y(0x1cc)]=y(0x1c5),o['style']['top']=y(0x1a4),document['body']['appendChild'](o),l[y(0x1b4)][y(0x19b)](o,0x0,0x0),requestAnimationFrame(()=>document['body']['removeChild'](o));}else l[y(0x1b4)][y(0x19b)](f[y(0x1c7)],0x0,0x0);}else{if(!f['import'])try{let p=document[y(0x1a2)](f[y(0x19a)]);if(f['defaultContent'])p[y(0x1c0)]=f[y(0x1ad)];if(f['defaultWidth'])p['style']['width']=f[y(0x1cf)];if(f[y(0x193)])p[y(0x1c8)][y(0x1a0)]=f['defaultHeight'];if(f[y(0x1b8)])for(let r in f[y(0x1b8)]){p[y(0x1c4)](r,f['defaultAttributes'][r]);}if(f[y(0x1ac)])for(let t in f['defaultStyles']){p[y(0x1c8)][t]=f['defaultStyles'][t];}p[y(0x1c8)][y(0x1cc)]=y(0x1c5);if(f['defaultWidth'])p['style']['top']='-'+(parseInt(f['defaultHeight'])+0x1f4)+'px';else p['style']['top']=y(0x19d);if(f['defaultWidth'])p['style'][y(0x1c2)]='-'+(parseInt(f['defaultWidth'])+0x1f4)+'px';else p[y(0x1c8)]['left']='-500px';document[y(0x1d0)]['appendChild'](p);let q=p['getBoundingClientRect']();if(q[y(0x19c)]>0x0&&q[y(0x1a0)]>0x0)l[y(0x1b4)]['setDragImage'](p,0x0,0x0);requestAnimationFrame(()=>document[y(0x1d0)]['removeChild'](p));}catch(u){console[y(0x1b6)](y(0x1ae),u);}}},i[x(0x1af)]=l=>{const z=x;f['import']=null,l[z(0x1ab)][z(0x1c8)][z(0x1a6)]=z(0x1b5);},i[x(0x19e)]=l=>{const A=x;l[A(0x198)]();},i[x(0x197)]=l=>{const B=x;let m=c['designerTools']['get'](f['tool']??NamedTools[B(0x1a1)]);if(typeof m=='function')m=new m(f);c['globalContext'][B(0x1b9)]=m;},h[x(0x1c3)](i),g[x(0x1c3)](h);const j=document['createElement']('td');j['innerText']=f['description']??'',g[x(0x1c3)](j),this[x(0x1c9)]['appendChild'](g);}}}customElements[w(0x195)]('node-projects-palette-elements',PaletteElements);function a(){const C=['2900979VZZZsD','4592133UFzNqy','selectNode','loadElements','dataTransfer','none','warn','firstChild','defaultAttributes','tool','displayHtml','createContextualFragment','1877368HluwZL','</tr></table>\x0a','\x22></td>','<td\x20align=\x22left\x22\x20>','innerHTML','startsWith','left','appendChild','setAttribute','absolute','168acjMnD','ghostElement','style','_table','195185zAuKVK','setData','position','2WgrUHT','part','defaultWidth','body','innerText','<td\x20align=\x22left\x22\x20valign=\x22middle\x22\x20style=\x22width:20px;\x22><img\x20style=\x22width:16px;height:16px\x22\x20src=\x22','icon','defaultHeight','239498ONkCDt','define','33OKleBl','onclick','preventDefault','template','tag','setDragImage','width','-500px','ontouchstart','3270690nPqvHv','height','DrawElementTool','createElement','data:','-1000px','132jTznZn','outline','draggable','stringify','200711PbrWCN','button','currentTarget','defaultStyles','defaultContent','error\x20creating\x20gost\x20elment','ondragend'];a=function(){return C;};return a();}
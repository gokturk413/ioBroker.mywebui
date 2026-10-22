const w=b;function a(){const C=['setDragImage','1699648moJrpb','innerText','tag','absolute','icon','function','_table','defaultHeight','defaultWidth','1893805TQUJPh','displayHtml','setData','5413280vXsEYq','onclick','</tr></table>\x0a','ghostElement','firstChild','defaultStyles','part','button','getBoundingClientRect','template','style','defaultContent','replaceChildren','ondragend','height','innerHTML','top','currentTarget','none','designerTools','\x22></td>','stringify','ondragstart','preventDefault','</td>','-500px','352690WPDecr','selectNode','outline','left','138oXlRaU','name','8910585mYlVBy','<td\x20align=\x22left\x22\x20valign=\x22middle\x22\x20style=\x22width:20px;\x22><img\x20style=\x22width:16px;height:16px\x22\x20src=\x22','width','ontouchstart','307559wYxwHR','body','globalContext','21bzPUoK','appendChild','15502680ZOZRve','createElement','define','loadElements','4WYOVPq','createContextualFragment','dataTransfer','position','data:','setAttribute'];a=function(){return C;};return a();}(function(c,d){const v=b,e=c();while(!![]){try{const f=parseInt(v(0x19c))/0x1+parseInt(v(0x1c2))/0x2*(-parseInt(v(0x18f))/0x3)+-parseInt(v(0x195))/0x4*(parseInt(v(0x1a5))/0x5)+-parseInt(v(0x1c6))/0x6*(-parseInt(v(0x18c))/0x7)+-parseInt(v(0x1a8))/0x8+-parseInt(v(0x1c8))/0x9+parseInt(v(0x191))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xef656));import{dragDropFormatNameElementDefinition}from'../../../Constants.js';import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{NamedTools}from'../designerView/tools/NamedTools.js';export class PaletteElements extends BaseCustomWebComponentLazyAppend{static ['style']=css`
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
    `;static [w(0x1b1)]=html`
    <table id="table">
    </table>
  `;[w(0x1a2)];constructor(){super(),this['_table']=this['_getDomElement']('table');}[w(0x194)](c,d,e){const x=w;this['_table'][x(0x1b4)]();for(const f of d){const g=document['createElement']('tr'),h=document['createElement']('td'),i=document[x(0x192)](x(0x1af));i[x(0x19a)](x(0x1ae),'button');if(f[x(0x1a0)]&&!f['displayHtml']){let k=f['icon'];!f['icon']['startsWith'](x(0x199))&&(k=e+f[x(0x1a0)]),i['innerHTML']='<table><tr>'+x(0x1c9)+k+x(0x1bc)+'<td\x20align=\x22left\x22\x20>'+f[x(0x19e)]+x(0x1c0)+x(0x1aa);}else{if(f[x(0x1a6)])i['innerHTML']=f[x(0x1a6)];else i[x(0x19d)]=f[x(0x1c7)]?f['name']:f['tag'];}i['draggable']=!![],i[x(0x1be)]=l=>{const y=x;l['dataTransfer'][y(0x1a7)](dragDropFormatNameElementDefinition,JSON[y(0x1bd)](f)),l['currentTarget'][y(0x1b2)]['outline']='dashed';if(f[y(0x1ab)]){if(typeof f['ghostElement']==='string'){const m=document['createRange']();m[y(0x1c3)](document[y(0x18d)]);const n=m[y(0x196)](f[y(0x1ab)]);let o=n[y(0x1ac)];o[y(0x1b2)]['position']='absolute',o['style'][y(0x1b8)]='-1000px',document['body']['appendChild'](o),l['dataTransfer'][y(0x19b)](o,0x0,0x0),requestAnimationFrame(()=>document['body']['removeChild'](o));}else l[y(0x197)]['setDragImage'](f[y(0x1ab)],0x0,0x0);}else{if(!f['import'])try{let p=document[y(0x192)](f['tag']);if(f['defaultContent'])p[y(0x1b7)]=f[y(0x1b3)];if(f[y(0x1a4)])p['style']['width']=f['defaultWidth'];if(f['defaultHeight'])p['style']['height']=f[y(0x1a3)];if(f['defaultAttributes'])for(let r in f['defaultAttributes']){p['setAttribute'](r,f['defaultAttributes'][r]);}if(f[y(0x1ad)])for(let t in f['defaultStyles']){p[y(0x1b2)][t]=f['defaultStyles'][t];}p['style'][y(0x198)]=y(0x19f);if(f['defaultWidth'])p['style']['top']='-'+(parseInt(f[y(0x1a3)])+0x1f4)+'px';else p['style']['top']='-500px';if(f[y(0x1a4)])p['style'][y(0x1c5)]='-'+(parseInt(f[y(0x1a4)])+0x1f4)+'px';else p[y(0x1b2)][y(0x1c5)]=y(0x1c1);document[y(0x18d)]['appendChild'](p);let q=p[y(0x1b0)]();if(q[y(0x1ca)]>0x0&&q[y(0x1b6)]>0x0)l['dataTransfer']['setDragImage'](p,0x0,0x0);requestAnimationFrame(()=>document[y(0x18d)]['removeChild'](p));}catch(u){console['warn']('error\x20creating\x20gost\x20elment',u);}}},i[x(0x1b5)]=l=>{const z=x;f['import']=null,l[z(0x1b9)]['style'][z(0x1c4)]=z(0x1ba);},i[x(0x1cb)]=l=>{const A=x;l[A(0x1bf)]();},i[x(0x1a9)]=l=>{const B=x;let m=c[B(0x1bb)]['get'](f['tool']??NamedTools['DrawElementTool']);if(typeof m==B(0x1a1))m=new m(f);c[B(0x18e)]['tool']=m;},h['appendChild'](i),g[x(0x190)](h);const j=document[x(0x192)]('td');j[x(0x19d)]=f['description']??'',g['appendChild'](j),this['_table'][x(0x190)](g);}}}function b(c,d){c=c-0x18c;const e=a();let f=e[c];return f;}customElements[w(0x193)]('node-projects-palette-elements',PaletteElements);
const w=b;(function(c,d){const v=b,e=c();while(!![]){try{const f=parseInt(v(0x1a1))/0x1*(-parseInt(v(0x18d))/0x2)+-parseInt(v(0x19d))/0x3*(-parseInt(v(0x1b2))/0x4)+parseInt(v(0x189))/0x5*(-parseInt(v(0x1a5))/0x6)+-parseInt(v(0x198))/0x7*(-parseInt(v(0x183))/0x8)+-parseInt(v(0x186))/0x9+parseInt(v(0x1ae))/0xa+parseInt(v(0x180))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x45126));import{dragDropFormatNameElementDefinition}from'../../../Constants.js';import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{NamedTools}from'../designerView/tools/NamedTools.js';function b(c,d){c=c-0x178;const e=a();let f=e[c];return f;}export class PaletteElements extends BaseCustomWebComponentLazyAppend{static [w(0x1a8)]=css`
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
  `;[w(0x196)];constructor(){const x=w;super(),this['_table']=this['_getDomElement'](x(0x1b0));}[w(0x17f)](c,d,e){const y=w;this[y(0x196)]['replaceChildren']();for(const f of d){const g=document[y(0x17d)]('tr'),h=document['createElement']('td'),i=document[y(0x17d)](y(0x179));i['setAttribute'](y(0x193),y(0x179));if(f[y(0x190)]&&!f['displayHtml']){let k=f[y(0x190)];!f['icon'][y(0x1af)]('data:')&&(k=e+f['icon']),i['innerHTML']='<table><tr>'+'<td\x20align=\x22left\x22\x20valign=\x22middle\x22\x20style=\x22width:20px;\x22><img\x20style=\x22width:16px;height:16px\x22\x20src=\x22'+k+'\x22></td>'+y(0x188)+f[y(0x1a4)]+y(0x1ad)+'</tr></table>\x0a';}else{if(f[y(0x195)])i['innerHTML']=f['displayHtml'];else i[y(0x17c)]=f[y(0x184)]?f[y(0x184)]:f['tag'];}i['draggable']=!![],i[y(0x194)]=l=>{const z=y;l['dataTransfer']['setData'](dragDropFormatNameElementDefinition,JSON[z(0x178)](f)),l[z(0x185)]['style'][z(0x1b1)]=z(0x1ab);if(f['ghostElement']){if(typeof f[z(0x1a7)]===z(0x192)){const m=document['createRange']();m['selectNode'](document[z(0x197)]);const n=m[z(0x18f)](f[z(0x1a7)]);let o=n[z(0x199)];o[z(0x1a8)]['position']='absolute',o['style'][z(0x19b)]='-1000px',document['body'][z(0x182)](o),l['dataTransfer'][z(0x19e)](o,0x0,0x0),requestAnimationFrame(()=>document[z(0x197)][z(0x1b5)](o));}else l[z(0x18c)][z(0x19e)](f[z(0x1a7)],0x0,0x0);}else{if(!f['import'])try{let p=document[z(0x17d)](f['tag']);if(f['defaultContent'])p[z(0x1a9)]=f[z(0x17b)];if(f['defaultWidth'])p[z(0x1a8)]['width']=f[z(0x1a3)];if(f[z(0x181)])p[z(0x1a8)]['height']=f['defaultHeight'];if(f[z(0x1b3)])for(let r in f[z(0x1b3)]){p[z(0x19f)](r,f[z(0x1b3)][r]);}if(f[z(0x19a)])for(let t in f['defaultStyles']){p[z(0x1a8)][t]=f[z(0x19a)][t];}p['style'][z(0x19c)]='absolute';if(f[z(0x1a3)])p['style']['top']='-'+(parseInt(f['defaultHeight'])+0x1f4)+'px';else p['style'][z(0x19b)]=z(0x1b6);if(f['defaultWidth'])p['style']['left']='-'+(parseInt(f['defaultWidth'])+0x1f4)+'px';else p[z(0x1a8)][z(0x1a2)]=z(0x1b6);document[z(0x197)][z(0x182)](p);let q=p[z(0x17a)]();if(q['width']>0x0&&q[z(0x191)]>0x0)l['dataTransfer'][z(0x19e)](p,0x0,0x0);requestAnimationFrame(()=>document[z(0x197)]['removeChild'](p));}catch(u){console['warn'](z(0x18b),u);}}},i[y(0x18a)]=l=>{const A=y;f[A(0x17e)]=null,l['currentTarget'][A(0x1a8)][A(0x1b1)]=A(0x187);},i[y(0x1a6)]=l=>{l['preventDefault']();},i[y(0x1aa)]=l=>{const B=y;let m=c['designerTools'][B(0x18e)](f[B(0x1ac)]??NamedTools['DrawElementTool']);if(typeof m=='function')m=new m(f);c[B(0x1a0)]['tool']=m;},h[y(0x182)](i),g['appendChild'](h);const j=document['createElement']('td');j['innerText']=f['description']??'',g[y(0x182)](j),this[y(0x196)][y(0x182)](g);}}}function a(){const C=['appendChild','160QgOJif','name','currentTarget','4355820hosJXH','none','<td\x20align=\x22left\x22\x20>','351090ZdNRDQ','ondragend','error\x20creating\x20gost\x20elment','dataTransfer','409022VpzfyY','get','createContextualFragment','icon','height','string','part','ondragstart','displayHtml','_table','body','125909wHDTjE','firstChild','defaultStyles','top','position','9rSVQOO','setDragImage','setAttribute','globalContext','1zEfqzt','left','defaultWidth','tag','12WMlzgt','ontouchstart','ghostElement','style','innerHTML','onclick','dashed','tool','</td>','2137440dfvQqQ','startsWith','table','outline','191536kuuVAb','defaultAttributes','define','removeChild','-500px','stringify','button','getBoundingClientRect','defaultContent','innerText','createElement','import','loadElements','4341799eZXcSS','defaultHeight'];a=function(){return C;};return a();}customElements[w(0x1b4)]('node-projects-palette-elements',PaletteElements);
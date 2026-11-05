const w=b;(function(c,d){const v=b,e=c();while(!![]){try{const f=-parseInt(v(0x16e))/0x1+parseInt(v(0x183))/0x2*(parseInt(v(0x15d))/0x3)+-parseInt(v(0x18a))/0x4*(-parseInt(v(0x17d))/0x5)+-parseInt(v(0x160))/0x6+parseInt(v(0x166))/0x7*(-parseInt(v(0x189))/0x8)+-parseInt(v(0x192))/0x9*(parseInt(v(0x178))/0xa)+parseInt(v(0x176))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x32df1));import{dragDropFormatNameElementDefinition}from'../../../Constants.js';import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{NamedTools}from'../designerView/tools/NamedTools.js';export class PaletteElements extends BaseCustomWebComponentLazyAppend{static [w(0x16c)]=css`
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
  `;[w(0x161)];constructor(){super(),this['_table']=this['_getDomElement']('table');}[w(0x186)](c,d,e){const x=w;this[x(0x161)]['replaceChildren']();for(const f of d){const g=document[x(0x18c)]('tr'),h=document[x(0x18c)]('td'),i=document[x(0x18c)]('button');i[x(0x162)](x(0x17f),x(0x165));if(f[x(0x185)]&&!f['displayHtml']){let k=f[x(0x185)];!f['icon']['startsWith']('data:')&&(k=e+f['icon']),i['innerHTML']='<table><tr>'+'<td\x20align=\x22left\x22\x20valign=\x22middle\x22\x20style=\x22width:20px;\x22><img\x20style=\x22width:16px;height:16px\x22\x20src=\x22'+k+x(0x168)+x(0x16a)+f['tag']+'</td>'+x(0x190);}else{if(f[x(0x18f)])i['innerHTML']=f['displayHtml'];else i[x(0x174)]=f[x(0x171)]?f['name']:f['tag'];}i['draggable']=!![],i[x(0x169)]=l=>{const y=x;l['dataTransfer']['setData'](dragDropFormatNameElementDefinition,JSON[y(0x164)](f)),l['currentTarget'][y(0x16c)][y(0x16d)]='dashed';if(f[y(0x175)]){if(typeof f[y(0x175)]===y(0x188)){const m=document['createRange']();m['selectNode'](document['body']);const n=m['createContextualFragment'](f['ghostElement']);let o=n[y(0x187)];o['style'][y(0x17c)]=y(0x182),o[y(0x16c)]['top']='-1000px',document[y(0x18b)][y(0x18d)](o),l['dataTransfer'][y(0x17e)](o,0x0,0x0),requestAnimationFrame(()=>document['body']['removeChild'](o));}else l[y(0x17a)]['setDragImage'](f['ghostElement'],0x0,0x0);}else{if(!f[y(0x181)])try{let p=document[y(0x18c)](f['tag']);if(f[y(0x177)])p[y(0x172)]=f['defaultContent'];if(f[y(0x170)])p['style']['width']=f[y(0x170)];if(f[y(0x180)])p[y(0x16c)][y(0x18e)]=f['defaultHeight'];if(f['defaultAttributes'])for(let r in f['defaultAttributes']){p[y(0x162)](r,f[y(0x15e)][r]);}if(f[y(0x163)])for(let t in f['defaultStyles']){p['style'][t]=f['defaultStyles'][t];}p['style']['position']='absolute';if(f['defaultWidth'])p['style']['top']='-'+(parseInt(f['defaultHeight'])+0x1f4)+'px';else p[y(0x16c)]['top']='-500px';if(f[y(0x170)])p[y(0x16c)][y(0x179)]='-'+(parseInt(f['defaultWidth'])+0x1f4)+'px';else p['style']['left']='-500px';document['body']['appendChild'](p);let q=p[y(0x17b)]();if(q[y(0x16f)]>0x0&&q['height']>0x0)l[y(0x17a)][y(0x17e)](p,0x0,0x0);requestAnimationFrame(()=>document['body']['removeChild'](p));}catch(u){console['warn'](y(0x191),u);}}},i['ondragend']=l=>{const z=x;f['import']=null,l[z(0x15c)][z(0x16c)][z(0x16d)]='none';},i['ontouchstart']=l=>{const A=x;l[A(0x167)]();},i['onclick']=l=>{const B=x;let m=c[B(0x193)]['get'](f['tool']??NamedTools[B(0x184)]);if(typeof m=='function')m=new m(f);c[B(0x16b)]['tool']=m;},h['appendChild'](i),g[x(0x18d)](h);const j=document[x(0x18c)]('td');j['innerText']=f[x(0x15f)]??'',g[x(0x18d)](j),this['_table']['appendChild'](g);}}}function b(c,d){c=c-0x15c;const e=a();let f=e[c];return f;}customElements[w(0x173)]('node-projects-palette-elements',PaletteElements);function a(){const C=['absolute','24526uujfSt','DrawElementTool','icon','loadElements','firstChild','string','178296iTJObq','108pphVEf','body','createElement','appendChild','height','displayHtml','</tr></table>\x0a','error\x20creating\x20gost\x20elment','198aqCWGI','designerTools','currentTarget','21lKqrCh','defaultAttributes','description','1064190jWrMlg','_table','setAttribute','defaultStyles','stringify','button','42SDuUhS','preventDefault','\x22></td>','ondragstart','<td\x20align=\x22left\x22\x20>','globalContext','style','outline','51677mAwneY','width','defaultWidth','name','innerHTML','define','innerText','ghostElement','6664955YPKPCt','defaultContent','115660dgjuvd','left','dataTransfer','getBoundingClientRect','position','24785fSakjv','setDragImage','part','defaultHeight','import'];a=function(){return C;};return a();}
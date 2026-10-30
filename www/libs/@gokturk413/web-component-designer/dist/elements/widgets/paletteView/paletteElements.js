const w=b;(function(c,d){const v=b,e=c();while(!![]){try{const f=parseInt(v(0xee))/0x1+parseInt(v(0x109))/0x2*(-parseInt(v(0xea))/0x3)+parseInt(v(0x10c))/0x4*(-parseInt(v(0xec))/0x5)+-parseInt(v(0xeb))/0x6*(parseInt(v(0x100))/0x7)+-parseInt(v(0xef))/0x8*(parseInt(v(0xe3))/0x9)+parseInt(v(0xff))/0xa+parseInt(v(0x110))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc17ae));function a(){const C=['ontouchstart','4313871POvhOh','appendChild','startsWith','template','setDragImage','ghostElement','setAttribute','3548997mfxgah','6556476HCFRiV','90nEmkkQ','absolute','515530yUcIVI','8NGmEQr','style','_getDomElement','createElement','name','part','height','selectNode','get','-500px','globalContext','defaultAttributes','body','defaultContent','position','ondragstart','2451340OQlryM','7MOabrC','outline','tool','defaultStyles','innerHTML','displayHtml','table','width','dataTransfer','2PEwptv','currentTarget','createRange','186356DqdMkk','icon','stringify','-1000px','39880456KNILPe','createContextualFragment','removeChild','preventDefault','tag','<table><tr>','_table','defaultWidth','draggable'];a=function(){return C;};return a();}import{dragDropFormatNameElementDefinition}from'../../../Constants.js';import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{NamedTools}from'../designerView/tools/NamedTools.js';export class PaletteElements extends BaseCustomWebComponentLazyAppend{static ['style']=css`
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
    `;static [w(0xe6)]=html`
    <table id="table">
    </table>
  `;[w(0xdf)];constructor(){const x=w;super(),this['_table']=this[x(0xf1)](x(0x106));}['loadElements'](c,d,e){const y=w;this['_table']['replaceChildren']();for(const f of d){const g=document['createElement']('tr'),h=document['createElement']('td'),i=document['createElement']('button');i['setAttribute'](y(0xf4),'button');if(f['icon']&&!f[y(0x105)]){let k=f[y(0x10d)];!f[y(0x10d)][y(0xe5)]('data:')&&(k=e+f[y(0x10d)]),i[y(0x104)]=y(0xde)+'<td\x20align=\x22left\x22\x20valign=\x22middle\x22\x20style=\x22width:20px;\x22><img\x20style=\x22width:16px;height:16px\x22\x20src=\x22'+k+'\x22></td>'+'<td\x20align=\x22left\x22\x20>'+f['tag']+'</td>'+'</tr></table>\x0a';}else{if(f['displayHtml'])i['innerHTML']=f[y(0x105)];else i['innerText']=f[y(0xf3)]?f['name']:f[y(0x114)];}i[y(0xe1)]=!![],i[y(0xfe)]=l=>{const z=y;l[z(0x108)]['setData'](dragDropFormatNameElementDefinition,JSON[z(0x10e)](f)),l[z(0x10a)]['style'][z(0x101)]='dashed';if(f['ghostElement']){if(typeof f['ghostElement']==='string'){const m=document[z(0x10b)]();m[z(0xf6)](document[z(0xfb)]);const n=m[z(0x111)](f['ghostElement']);let o=n['firstChild'];o[z(0xf0)][z(0xfd)]='absolute',o[z(0xf0)]['top']=z(0x10f),document[z(0xfb)]['appendChild'](o),l[z(0x108)][z(0xe7)](o,0x0,0x0),requestAnimationFrame(()=>document['body']['removeChild'](o));}else l['dataTransfer']['setDragImage'](f[z(0xe8)],0x0,0x0);}else{if(!f['import'])try{let p=document['createElement'](f[z(0x114)]);if(f[z(0xfc)])p[z(0x104)]=f['defaultContent'];if(f['defaultWidth'])p['style'][z(0x107)]=f[z(0xe0)];if(f['defaultHeight'])p['style'][z(0xf5)]=f['defaultHeight'];if(f['defaultAttributes'])for(let r in f['defaultAttributes']){p[z(0xe9)](r,f[z(0xfa)][r]);}if(f[z(0x103)])for(let t in f[z(0x103)]){p['style'][t]=f['defaultStyles'][t];}p['style'][z(0xfd)]=z(0xed);if(f[z(0xe0)])p['style']['top']='-'+(parseInt(f['defaultHeight'])+0x1f4)+'px';else p[z(0xf0)]['top']=z(0xf8);if(f[z(0xe0)])p[z(0xf0)]['left']='-'+(parseInt(f['defaultWidth'])+0x1f4)+'px';else p['style']['left']=z(0xf8);document['body']['appendChild'](p);let q=p['getBoundingClientRect']();if(q['width']>0x0&&q[z(0xf5)]>0x0)l['dataTransfer']['setDragImage'](p,0x0,0x0);requestAnimationFrame(()=>document[z(0xfb)][z(0x112)](p));}catch(u){console['warn']('error\x20creating\x20gost\x20elment',u);}}},i['ondragend']=l=>{f['import']=null,l['currentTarget']['style']['outline']='none';},i[y(0xe2)]=l=>{const A=y;l[A(0x113)]();},i['onclick']=l=>{const B=y;let m=c['designerTools'][B(0xf7)](f[B(0x102)]??NamedTools['DrawElementTool']);if(typeof m=='function')m=new m(f);c[B(0xf9)][B(0x102)]=m;},h[y(0xe4)](i),g[y(0xe4)](h);const j=document[y(0xf2)]('td');j['innerText']=f['description']??'',g['appendChild'](j),this['_table'][y(0xe4)](g);}}}function b(c,d){c=c-0xde;const e=a();let f=e[c];return f;}customElements['define']('node-projects-palette-elements',PaletteElements);
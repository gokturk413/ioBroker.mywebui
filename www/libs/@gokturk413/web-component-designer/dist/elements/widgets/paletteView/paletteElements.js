const w=b;(function(c,d){const v=b,e=c();while(!![]){try{const f=-parseInt(v(0x1eb))/0x1*(-parseInt(v(0x1f5))/0x2)+-parseInt(v(0x1db))/0x3*(parseInt(v(0x1ef))/0x4)+-parseInt(v(0x1d4))/0x5+parseInt(v(0x1d2))/0x6+parseInt(v(0x1df))/0x7+parseInt(v(0x1d3))/0x8*(-parseInt(v(0x1c6))/0x9)+parseInt(v(0x1c0))/0xa*(parseInt(v(0x1d6))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x843cc));import{dragDropFormatNameElementDefinition}from'../../../Constants.js';import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';function a(){const D=['4506380EZsyET','defaultAttributes','194249NZvKsP','setDragImage','stringify','error\x20creating\x20gost\x20elment','string','57dvhilA','style','defaultHeight','appendChild','4482275qLkgzr','description','dashed','node-projects-palette-elements','currentTarget','createElement','dataTransfer','height','ondragend','icon','-500px','startsWith','11UMedbc','-1000px','_table','DrawElementTool','139280GAsspF','createContextualFragment','ondragstart','ghostElement','<td\x20align=\x22left\x22\x20>','body','150744ogadhH','none','selectNode','defaultStyles','preventDefault','width','name','define','firstChild','530lJITPo','tag','absolute','outline','displayHtml','setData','9cpCqMA','designerTools','createRange','innerHTML','import','removeChild','</td>','top','<table><tr>','getBoundingClientRect','part','defaultWidth','4333050CmoSDN','8184152xASbkV'];a=function(){return D;};return a();}import{NamedTools}from'../designerView/tools/NamedTools.js';function b(c,d){c=c-0x1c0;const e=a();let f=e[c];return f;}export class PaletteElements extends BaseCustomWebComponentLazyAppend{static [w(0x1dc)]=css`
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
  `;[w(0x1ed)];constructor(){const x=w;super(),this[x(0x1ed)]=this['_getDomElement']('table');}['loadElements'](c,d,e){const y=w;this[y(0x1ed)]['replaceChildren']();for(const f of d){const g=document[y(0x1e4)]('tr'),h=document[y(0x1e4)]('td'),i=document['createElement']('button');i['setAttribute'](y(0x1d0),'button');if(f['icon']&&!f['displayHtml']){let k=f['icon'];!f[y(0x1e8)][y(0x1ea)]('data:')&&(k=e+f[y(0x1e8)]),i[y(0x1c9)]=y(0x1ce)+'<td\x20align=\x22left\x22\x20valign=\x22middle\x22\x20style=\x22width:20px;\x22><img\x20style=\x22width:16px;height:16px\x22\x20src=\x22'+k+'\x22></td>'+y(0x1f3)+f[y(0x1c1)]+y(0x1cc)+'</tr></table>\x0a';}else{if(f['displayHtml'])i[y(0x1c9)]=f[y(0x1c4)];else i['innerText']=f['name']?f[y(0x1fb)]:f[y(0x1c1)];}i['draggable']=!![],i[y(0x1f1)]=l=>{const z=y;l[z(0x1e5)][z(0x1c5)](dragDropFormatNameElementDefinition,JSON[z(0x1d8)](f)),l[z(0x1e3)][z(0x1dc)][z(0x1c3)]=z(0x1e1);if(f['ghostElement']){if(typeof f['ghostElement']===z(0x1da)){const m=document[z(0x1c8)]();m[z(0x1f7)](document['body']);const n=m[z(0x1f0)](f[z(0x1f2)]);let o=n[z(0x1fd)];o['style']['position']=z(0x1c2),o[z(0x1dc)]['top']=z(0x1ec),document[z(0x1f4)][z(0x1de)](o),l[z(0x1e5)][z(0x1d7)](o,0x0,0x0),requestAnimationFrame(()=>document[z(0x1f4)][z(0x1cb)](o));}else l['dataTransfer']['setDragImage'](f[z(0x1f2)],0x0,0x0);}else{if(!f[z(0x1ca)])try{let p=document[z(0x1e4)](f[z(0x1c1)]);if(f['defaultContent'])p['innerHTML']=f['defaultContent'];if(f['defaultWidth'])p['style']['width']=f[z(0x1d1)];if(f['defaultHeight'])p[z(0x1dc)][z(0x1e6)]=f['defaultHeight'];if(f['defaultAttributes'])for(let r in f[z(0x1d5)]){p['setAttribute'](r,f['defaultAttributes'][r]);}if(f['defaultStyles'])for(let t in f['defaultStyles']){p['style'][t]=f[z(0x1f8)][t];}p['style']['position']='absolute';if(f[z(0x1d1)])p[z(0x1dc)][z(0x1cd)]='-'+(parseInt(f[z(0x1dd)])+0x1f4)+'px';else p[z(0x1dc)][z(0x1cd)]='-500px';if(f[z(0x1d1)])p['style']['left']='-'+(parseInt(f[z(0x1d1)])+0x1f4)+'px';else p[z(0x1dc)]['left']=z(0x1e9);document['body'][z(0x1de)](p);let q=p[z(0x1cf)]();if(q[z(0x1fa)]>0x0&&q[z(0x1e6)]>0x0)l['dataTransfer'][z(0x1d7)](p,0x0,0x0);requestAnimationFrame(()=>document['body']['removeChild'](p));}catch(u){console['warn'](z(0x1d9),u);}}},i[y(0x1e7)]=l=>{const A=y;f[A(0x1ca)]=null,l['currentTarget'][A(0x1dc)]['outline']=A(0x1f6);},i['ontouchstart']=l=>{const B=y;l[B(0x1f9)]();},i['onclick']=l=>{const C=y;let m=c[C(0x1c7)]['get'](f['tool']??NamedTools[C(0x1ee)]);if(typeof m=='function')m=new m(f);c['globalContext']['tool']=m;},h[y(0x1de)](i),g[y(0x1de)](h);const j=document['createElement']('td');j['innerText']=f[y(0x1e0)]??'',g[y(0x1de)](j),this['_table']['appendChild'](g);}}}customElements[w(0x1fc)](w(0x1e2),PaletteElements);
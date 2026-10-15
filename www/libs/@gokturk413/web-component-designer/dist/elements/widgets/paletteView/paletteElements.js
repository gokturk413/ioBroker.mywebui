const w=b;(function(c,d){const v=b,e=c();while(!![]){try{const f=parseInt(v(0x1bd))/0x1*(-parseInt(v(0x1b5))/0x2)+-parseInt(v(0x1c8))/0x3*(-parseInt(v(0x1df))/0x4)+-parseInt(v(0x1af))/0x5*(-parseInt(v(0x1be))/0x6)+-parseInt(v(0x1e5))/0x7*(-parseInt(v(0x1e7))/0x8)+-parseInt(v(0x1a9))/0x9*(-parseInt(v(0x1e6))/0xa)+parseInt(v(0x1c2))/0xb*(-parseInt(v(0x1b2))/0xc)+-parseInt(v(0x1c6))/0xd*(parseInt(v(0x1b9))/0xe);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3ee9e));function b(c,d){c=c-0x1a8;const e=a();let f=e[c];return f;}import{dragDropFormatNameElementDefinition}from'../../../Constants.js';import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';function a(){const D=['table','firstChild','left','4SHxDKe','get','designerTools','defaultHeight','template','tag','22155LVIlFJ','1317430ybzffL','1192vQkEFT','getBoundingClientRect','innerHTML','18zWwazu','selectNode','-1000px','ondragend','tool','body','20HMeERK','<table><tr>','name','12akXQiD','-500px','defaultStyles','4210hvhxqU','string','defaultWidth','error\x20creating\x20gost\x20elment','14JfNCbK','dataTransfer','currentTarget','innerText','164VRKJAD','637326bgomSF','globalContext','icon','button','975227okuIfm','defaultContent','outline','setAttribute','12449905ZZZYOH','defaultAttributes','1467903veULYm','position','_table','removeChild','warn','preventDefault','none','style','<td\x20align=\x22left\x22\x20>','createElement','startsWith','DrawElementTool','height','ghostElement','setDragImage','appendChild','import','<td\x20align=\x22left\x22\x20valign=\x22middle\x22\x20style=\x22width:20px;\x22><img\x20style=\x22width:16px;height:16px\x22\x20src=\x22','absolute','displayHtml'];a=function(){return D;};return a();}import{NamedTools}from'../designerView/tools/NamedTools.js';export class PaletteElements extends BaseCustomWebComponentLazyAppend{static ['style']=css`
    :host {
      display: block;
      box-sizing: border-box;
      height: 100%;
      overflow: auto;        
    }

    button {
      background-color: transparent;
      color: white;
      border: none;
      font-size: 13px;
      display: block;
      cursor: pointer;
      width: 100%;
      text-align: left;
      padding: 8px 14px;
    }
    button:hover {
      background: var(--light-grey, #383f52);
    }

    table {
      width: 100%
    }

    td {
      color: white;
      font-size: 13px;
    }

    div {
      text-transform: uppercase;
      font-size: 12px;
      font-weight: bold;
      padding: 4px 14px;
    }
    `;static [w(0x1e3)]=html`
    <table id="table">
    </table>
  `;['_table'];constructor(){const x=w;super(),this['_table']=this['_getDomElement'](x(0x1dc));}['loadElements'](c,d,e){const y=w;for(const f of d){const g=document[y(0x1d1)]('tr'),h=document['createElement']('td'),i=document['createElement']('button');i[y(0x1c5)]('part',y(0x1c1));if(f['icon']&&!f[y(0x1db)]){let k=f['icon'];!f[y(0x1c0)][y(0x1d2)]('data:')&&(k=e+f[y(0x1c0)]),i[y(0x1a8)]=y(0x1b0)+y(0x1d9)+k+'\x22></td>'+y(0x1d0)+f[y(0x1e4)]+'</td>'+'</tr></table>\x0a';}else{if(f['displayHtml'])i['innerHTML']=f['displayHtml'];else i[y(0x1bc)]=f[y(0x1b1)]?f[y(0x1b1)]:f[y(0x1e4)];}i['draggable']=!![],i['ondragstart']=l=>{const z=y;l[z(0x1ba)]['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](f)),l[z(0x1bb)]['style'][z(0x1c4)]='dashed';if(f[z(0x1d5)]){if(typeof f[z(0x1d5)]===z(0x1b6)){const m=document['createRange']();m[z(0x1aa)](document['body']);const n=m['createContextualFragment'](f[z(0x1d5)]);let o=n[z(0x1dd)];o[z(0x1cf)][z(0x1c9)]=z(0x1da),o['style']['top']=z(0x1ab),document['body'][z(0x1d7)](o),l['dataTransfer'][z(0x1d6)](o,0x0,0x0),requestAnimationFrame(()=>document[z(0x1ae)][z(0x1cb)](o));}else l[z(0x1ba)][z(0x1d6)](f['ghostElement'],0x0,0x0);}else{if(!f[z(0x1d8)])try{let p=document['createElement'](f['tag']);if(f[z(0x1c3)])p[z(0x1a8)]=f['defaultContent'];if(f[z(0x1b7)])p['style']['width']=f['defaultWidth'];if(f['defaultHeight'])p[z(0x1cf)]['height']=f[z(0x1e2)];if(f[z(0x1c7)])for(let r in f['defaultAttributes']){p[z(0x1c5)](r,f[z(0x1c7)][r]);}if(f['defaultStyles'])for(let t in f['defaultStyles']){p['style'][t]=f[z(0x1b4)][t];}p[z(0x1cf)]['position']=z(0x1da);if(f['defaultWidth'])p['style']['top']='-'+(parseInt(f[z(0x1e2)])+0x1f4)+'px';else p['style']['top']='-500px';if(f['defaultWidth'])p[z(0x1cf)][z(0x1de)]='-'+(parseInt(f[z(0x1b7)])+0x1f4)+'px';else p[z(0x1cf)][z(0x1de)]=z(0x1b3);document['body'][z(0x1d7)](p);let q=p[z(0x1e8)]();if(q['width']>0x0&&q[z(0x1d4)]>0x0)l['dataTransfer'][z(0x1d6)](p,0x0,0x0);requestAnimationFrame(()=>document[z(0x1ae)]['removeChild'](p));}catch(u){console[z(0x1cc)](z(0x1b8),u);}}},i[y(0x1ac)]=l=>{const A=y;f[A(0x1d8)]=null,l['currentTarget'][A(0x1cf)]['outline']=A(0x1ce);},i['ontouchstart']=l=>{const B=y;l[B(0x1cd)]();},i['onclick']=l=>{const C=y;let m=c[C(0x1e1)][C(0x1e0)](f['tool']??NamedTools[C(0x1d3)]);if(typeof m=='function')m=new m(f);c[C(0x1bf)][C(0x1ad)]=m;},h[y(0x1d7)](i),g['appendChild'](h);const j=document[y(0x1d1)]('td');j[y(0x1bc)]=f['description']??'',g[y(0x1d7)](j),this[y(0x1ca)]['appendChild'](g);}}}customElements['define']('node-projects-palette-elements',PaletteElements);
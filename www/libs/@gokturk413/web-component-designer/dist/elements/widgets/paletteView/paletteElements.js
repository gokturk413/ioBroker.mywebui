function b(c,d){c=c-0x1d7;const e=a();let f=e[c];return f;}function a(){const D=['_table','_getDomElement','globalContext','innerHTML','4340938BEipIA','import','template','description','<table><tr>','-1000px','defaultAttributes','name','defaultHeight','27rzdjDZ','5201560XeBKZd','selectNode','121630bSqtfe','function','position','outline','56348Umbllj','warn','table','ghostElement','setDragImage','designerTools','preventDefault','createContextualFragment','<td\x20align=\x22left\x22\x20>','\x22></td>','5866635MOvqkr','defaultWidth','body','setAttribute','style','innerText','node-projects-palette-elements','button','get','createRange','absolute','icon','tag','loadElements','removeChild','1qSTOWB','top','string','getBoundingClientRect','11684988nZacDu','displayHtml','defaultStyles','defaultContent','createElement','currentTarget','<td\x20align=\x22left\x22\x20valign=\x22middle\x22\x20style=\x22width:20px;\x22><img\x20style=\x22width:16px;height:16px\x22\x20src=\x22','DrawElementTool','none','left','define','6wNPMAp','appendChild','dashed','replaceChildren','draggable','ondragstart','1274834jllICm','startsWith'];a=function(){return D;};return a();}const w=b;(function(c,d){const v=b,e=c();while(!![]){try{const f=-parseInt(v(0x205))/0x1*(-parseInt(v(0x21a))/0x2)+-parseInt(v(0x1e5))/0x3*(-parseInt(v(0x1ec))/0x4)+parseInt(v(0x1f6))/0x5*(parseInt(v(0x214))/0x6)+-parseInt(v(0x1dc))/0x7+parseInt(v(0x1e6))/0x8+-parseInt(v(0x209))/0x9+parseInt(v(0x1e8))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa65cb));import{dragDropFormatNameElementDefinition}from'../../../Constants.js';import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{NamedTools}from'../designerView/tools/NamedTools.js';export class PaletteElements extends BaseCustomWebComponentLazyAppend{static ['style']=css`
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
    `;static [w(0x1de)]=html`
    <table id="table">
    </table>
  `;[w(0x1d8)];constructor(){const x=w;super(),this['_table']=this[x(0x1d9)](x(0x1ee));}[w(0x203)](c,d,e){const y=w;this[y(0x1d8)][y(0x217)]();for(const f of d){const g=document['createElement']('tr'),h=document[y(0x20d)]('td'),i=document['createElement'](y(0x1fd));i['setAttribute']('part','button');if(f[y(0x201)]&&!f[y(0x20a)]){let k=f[y(0x201)];!f['icon'][y(0x1d7)]('data:')&&(k=e+f['icon']),i['innerHTML']=y(0x1e0)+y(0x20f)+k+y(0x1f5)+y(0x1f4)+f[y(0x202)]+'</td>'+'</tr></table>\x0a';}else{if(f['displayHtml'])i['innerHTML']=f[y(0x20a)];else i[y(0x1fb)]=f[y(0x1e3)]?f[y(0x1e3)]:f['tag'];}i[y(0x218)]=!![],i[y(0x219)]=l=>{const z=y;l['dataTransfer']['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](f)),l[z(0x20e)]['style'][z(0x1eb)]=z(0x216);if(f[z(0x1ef)]){if(typeof f['ghostElement']===z(0x207)){const m=document[z(0x1ff)]();m[z(0x1e7)](document[z(0x1f8)]);const n=m[z(0x1f3)](f[z(0x1ef)]);let o=n['firstChild'];o['style'][z(0x1ea)]=z(0x200),o[z(0x1fa)][z(0x206)]=z(0x1e1),document['body']['appendChild'](o),l['dataTransfer'][z(0x1f0)](o,0x0,0x0),requestAnimationFrame(()=>document[z(0x1f8)]['removeChild'](o));}else l['dataTransfer'][z(0x1f0)](f[z(0x1ef)],0x0,0x0);}else{if(!f[z(0x1dd)])try{let p=document['createElement'](f[z(0x202)]);if(f[z(0x20c)])p[z(0x1db)]=f[z(0x20c)];if(f[z(0x1f7)])p[z(0x1fa)]['width']=f['defaultWidth'];if(f['defaultHeight'])p['style']['height']=f[z(0x1e4)];if(f['defaultAttributes'])for(let r in f['defaultAttributes']){p[z(0x1f9)](r,f[z(0x1e2)][r]);}if(f[z(0x20b)])for(let t in f['defaultStyles']){p['style'][t]=f['defaultStyles'][t];}p['style']['position']=z(0x200);if(f[z(0x1f7)])p['style']['top']='-'+(parseInt(f['defaultHeight'])+0x1f4)+'px';else p['style'][z(0x206)]='-500px';if(f['defaultWidth'])p['style']['left']='-'+(parseInt(f['defaultWidth'])+0x1f4)+'px';else p[z(0x1fa)][z(0x212)]='-500px';document[z(0x1f8)]['appendChild'](p);let q=p[z(0x208)]();if(q['width']>0x0&&q['height']>0x0)l['dataTransfer']['setDragImage'](p,0x0,0x0);requestAnimationFrame(()=>document[z(0x1f8)][z(0x204)](p));}catch(u){console[z(0x1ed)]('error\x20creating\x20gost\x20elment',u);}}},i['ondragend']=l=>{const A=y;f['import']=null,l[A(0x20e)]['style']['outline']=A(0x211);},i['ontouchstart']=l=>{const B=y;l[B(0x1f2)]();},i['onclick']=l=>{const C=y;let m=c[C(0x1f1)][C(0x1fe)](f['tool']??NamedTools[C(0x210)]);if(typeof m==C(0x1e9))m=new m(f);c[C(0x1da)]['tool']=m;},h['appendChild'](i),g[y(0x215)](h);const j=document[y(0x20d)]('td');j[y(0x1fb)]=f[y(0x1df)]??'',g['appendChild'](j),this['_table'][y(0x215)](g);}}}customElements[w(0x213)](w(0x1fc),PaletteElements);
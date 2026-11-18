function a(){const D=['body','stringify','currentTarget','defaultStyles','appendChild','innerText','name','getBoundingClientRect','error\x20creating\x20gost\x20elment','524499HQxssA','DrawElementTool','draggable','removeChild','ontouchstart','3817816cElbjD','dataTransfer','-500px','ondragstart','preventDefault','tag','innerHTML','absolute','onclick','setAttribute','641000OePBBY','height','7jKSMEP','270440YJFyui','outline','1902700EqVJpy','width','ghostElement','string','defaultWidth','defaultHeight','displayHtml','left','data:','createElement','ondragend','function','_table','createContextualFragment','_getDomElement','defaultAttributes','<table><tr>','605151IvJDRm','setDragImage','defaultContent','position','style','icon','3214998nhnEKM'];a=function(){return D;};return a();}const w=b;function b(c,d){c=c-0x18d;const e=a();let f=e[c];return f;}(function(c,d){const v=b,e=c();while(!![]){try{const f=-parseInt(v(0x1c1))/0x1+-parseInt(v(0x1ae))/0x2+-parseInt(v(0x19c))/0x3+-parseInt(v(0x1ab))/0x4+parseInt(v(0x1b0))/0x5+parseInt(v(0x192))/0x6+-parseInt(v(0x1ad))/0x7*(-parseInt(v(0x1a1))/0x8);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4dac2));import{dragDropFormatNameElementDefinition}from'../../../Constants.js';import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{NamedTools}from'../designerView/tools/NamedTools.js';export class PaletteElements extends BaseCustomWebComponentLazyAppend{static [w(0x190)]=css`
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
  `;[w(0x1bc)];constructor(){const x=w;super(),this[x(0x1bc)]=this[x(0x1be)]('table');}['loadElements'](c,d,e){const y=w;this['_table']['replaceChildren']();for(const f of d){const g=document['createElement']('tr'),h=document['createElement']('td'),i=document['createElement']('button');i[y(0x1aa)]('part','button');if(f['icon']&&!f['displayHtml']){let k=f['icon'];!f['icon']['startsWith'](y(0x1b8))&&(k=e+f[y(0x191)]),i[y(0x1a7)]=y(0x1c0)+'<td\x20align=\x22left\x22\x20valign=\x22middle\x22\x20style=\x22width:20px;\x22><img\x20style=\x22width:16px;height:16px\x22\x20src=\x22'+k+'\x22></td>'+'<td\x20align=\x22left\x22\x20>'+f[y(0x1a6)]+'</td>'+'</tr></table>\x0a';}else{if(f[y(0x1b6)])i['innerHTML']=f['displayHtml'];else i['innerText']=f['name']?f[y(0x199)]:f[y(0x1a6)];}i[y(0x19e)]=!![],i[y(0x1a4)]=l=>{const z=y;l['dataTransfer']['setData'](dragDropFormatNameElementDefinition,JSON[z(0x194)](f)),l['currentTarget'][z(0x190)]['outline']='dashed';if(f['ghostElement']){if(typeof f[z(0x1b2)]===z(0x1b3)){const m=document['createRange']();m['selectNode'](document['body']);const n=m[z(0x1bd)](f[z(0x1b2)]);let o=n['firstChild'];o[z(0x190)][z(0x18f)]=z(0x1a8),o['style']['top']='-1000px',document['body']['appendChild'](o),l[z(0x1a2)]['setDragImage'](o,0x0,0x0),requestAnimationFrame(()=>document[z(0x193)][z(0x19f)](o));}else l[z(0x1a2)][z(0x18d)](f[z(0x1b2)],0x0,0x0);}else{if(!f['import'])try{let p=document[z(0x1b9)](f[z(0x1a6)]);if(f[z(0x18e)])p['innerHTML']=f['defaultContent'];if(f['defaultWidth'])p['style']['width']=f['defaultWidth'];if(f[z(0x1b5)])p[z(0x190)]['height']=f['defaultHeight'];if(f[z(0x1bf)])for(let r in f['defaultAttributes']){p[z(0x1aa)](r,f['defaultAttributes'][r]);}if(f['defaultStyles'])for(let t in f[z(0x196)]){p['style'][t]=f['defaultStyles'][t];}p[z(0x190)]['position']='absolute';if(f['defaultWidth'])p[z(0x190)]['top']='-'+(parseInt(f[z(0x1b5)])+0x1f4)+'px';else p['style']['top']=z(0x1a3);if(f['defaultWidth'])p[z(0x190)][z(0x1b7)]='-'+(parseInt(f[z(0x1b4)])+0x1f4)+'px';else p[z(0x190)][z(0x1b7)]=z(0x1a3);document[z(0x193)]['appendChild'](p);let q=p[z(0x19a)]();if(q[z(0x1b1)]>0x0&&q[z(0x1ac)]>0x0)l[z(0x1a2)][z(0x18d)](p,0x0,0x0);requestAnimationFrame(()=>document[z(0x193)][z(0x19f)](p));}catch(u){console['warn'](z(0x19b),u);}}},i[y(0x1ba)]=l=>{const A=y;f['import']=null,l[A(0x195)][A(0x190)][A(0x1af)]='none';},i[y(0x1a0)]=l=>{const B=y;l[B(0x1a5)]();},i[y(0x1a9)]=l=>{const C=y;let m=c['designerTools']['get'](f['tool']??NamedTools[C(0x19d)]);if(typeof m==C(0x1bb))m=new m(f);c['globalContext']['tool']=m;},h[y(0x197)](i),g['appendChild'](h);const j=document['createElement']('td');j[y(0x198)]=f['description']??'',g['appendChild'](j),this[y(0x1bc)][y(0x197)](g);}}}customElements['define']('node-projects-palette-elements',PaletteElements);
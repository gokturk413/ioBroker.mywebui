const w=b;function b(c,d){c=c-0x146;const e=a();let f=e[c];return f;}(function(c,d){const v=b,e=c();while(!![]){try{const f=-parseInt(v(0x154))/0x1*(parseInt(v(0x15a))/0x2)+parseInt(v(0x177))/0x3+parseInt(v(0x151))/0x4+-parseInt(v(0x15c))/0x5+parseInt(v(0x166))/0x6+parseInt(v(0x162))/0x7+-parseInt(v(0x17b))/0x8*(parseInt(v(0x176))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd7df8));import{dragDropFormatNameElementDefinition}from'../../../Constants.js';import{BaseCustomWebComponentLazyAppend,css,html}from'@node-projects/base-custom-webcomponent';import{NamedTools}from'../designerView/tools/NamedTools.js';function a(){const D=['body','6910662glOAYz','setDragImage','createContextualFragment','outline','createElement','dashed','startsWith','absolute','currentTarget','dataTransfer','width','DrawElementTool','replaceChildren','ghostElement','designerTools','left','27BnxXjd','176481kBiray','top','defaultWidth','part','4563816nmotGT','innerHTML','preventDefault','tag','description','onclick','setAttribute','createRange','defaultContent','warn','_getDomElement','button','tool','style','innerText','4625588rJVVJS','globalContext','_table','2NkbdTb','appendChild','-1000px','position','icon','defaultAttributes','1057610ATtMST','ondragend','236405rADLuS','firstChild','string','displayHtml','draggable','<td\x20align=\x22left\x22\x20>','9334759HGvLzY','defaultStyles','defaultHeight'];a=function(){return D;};return a();}export class PaletteElements extends BaseCustomWebComponentLazyAppend{static [w(0x14f)]=css`
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
  `;[w(0x153)];constructor(){const x=w;super(),this[x(0x153)]=this[x(0x14c)]('table');}['loadElements'](c,d,e){const y=w;this['_table'][y(0x172)]();for(const f of d){const g=document[y(0x16a)]('tr'),h=document[y(0x16a)]('td'),i=document[y(0x16a)](y(0x14d));i[y(0x148)](y(0x17a),y(0x14d));if(f['icon']&&!f[y(0x15f)]){let k=f[y(0x158)];!f['icon'][y(0x16c)]('data:')&&(k=e+f[y(0x158)]),i['innerHTML']='<table><tr>'+'<td\x20align=\x22left\x22\x20valign=\x22middle\x22\x20style=\x22width:20px;\x22><img\x20style=\x22width:16px;height:16px\x22\x20src=\x22'+k+'\x22></td>'+y(0x161)+f[y(0x17e)]+'</td>'+'</tr></table>\x0a';}else{if(f['displayHtml'])i[y(0x17c)]=f[y(0x15f)];else i[y(0x150)]=f['name']?f['name']:f[y(0x17e)];}i[y(0x160)]=!![],i['ondragstart']=l=>{const z=y;l[z(0x16f)]['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](f)),l['currentTarget'][z(0x14f)][z(0x169)]=z(0x16b);if(f['ghostElement']){if(typeof f['ghostElement']===z(0x15e)){const m=document[z(0x149)]();m['selectNode'](document['body']);const n=m[z(0x168)](f['ghostElement']);let o=n[z(0x15d)];o[z(0x14f)]['position']=z(0x16d),o['style'][z(0x178)]=z(0x156),document[z(0x165)]['appendChild'](o),l[z(0x16f)]['setDragImage'](o,0x0,0x0),requestAnimationFrame(()=>document[z(0x165)]['removeChild'](o));}else l[z(0x16f)]['setDragImage'](f[z(0x173)],0x0,0x0);}else{if(!f['import'])try{let p=document[z(0x16a)](f['tag']);if(f[z(0x14a)])p['innerHTML']=f['defaultContent'];if(f[z(0x179)])p['style'][z(0x170)]=f[z(0x179)];if(f[z(0x164)])p['style']['height']=f['defaultHeight'];if(f[z(0x159)])for(let r in f['defaultAttributes']){p[z(0x148)](r,f[z(0x159)][r]);}if(f[z(0x163)])for(let t in f[z(0x163)]){p['style'][t]=f['defaultStyles'][t];}p['style'][z(0x157)]=z(0x16d);if(f['defaultWidth'])p['style']['top']='-'+(parseInt(f['defaultHeight'])+0x1f4)+'px';else p['style'][z(0x178)]='-500px';if(f['defaultWidth'])p[z(0x14f)]['left']='-'+(parseInt(f[z(0x179)])+0x1f4)+'px';else p['style'][z(0x175)]='-500px';document['body']['appendChild'](p);let q=p['getBoundingClientRect']();if(q['width']>0x0&&q['height']>0x0)l[z(0x16f)][z(0x167)](p,0x0,0x0);requestAnimationFrame(()=>document['body']['removeChild'](p));}catch(u){console[z(0x14b)]('error\x20creating\x20gost\x20elment',u);}}},i[y(0x15b)]=l=>{const A=y;f['import']=null,l[A(0x16e)]['style']['outline']='none';},i['ontouchstart']=l=>{const B=y;l[B(0x17d)]();},i[y(0x147)]=l=>{const C=y;let m=c[C(0x174)]['get'](f['tool']??NamedTools[C(0x171)]);if(typeof m=='function')m=new m(f);c[C(0x152)][C(0x14e)]=m;},h[y(0x155)](i),g[y(0x155)](h);const j=document['createElement']('td');j[y(0x150)]=f[y(0x146)]??'',g[y(0x155)](j),this[y(0x153)][y(0x155)](g);}}}customElements['define']('node-projects-palette-elements',PaletteElements);
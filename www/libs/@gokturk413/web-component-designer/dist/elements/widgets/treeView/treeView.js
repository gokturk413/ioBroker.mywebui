function a(){const C=['dataset','_getChildren','element','index','ref','6956684ZJPYsU','span','_clickElement','click','shadowRoot','_index','textContent','innerHTML','_selectTreeElements','_previouslySelected','_restoreCachedInititalValues','185fQfLYa','node-projects-tree-view','_instanceServiceContainer','setSelectedElements','button','_highlight','rootDesignItem','add','div','tree','1047754TYatMz','_items','_makeButton','designerCanvas','appendChild','get','children','viewContainer','498750pCcanS','_treeDiv','dispose','selectedElements','bind','_selectionChangedHandler','classList','define','3QhqBiW','256602ShczTz','12647619nLhtDs','createTree','_rootItem','_mapElementTreeitem','selected','querySelectorAll','selectionChanged','tag','length','_selectDesignerElement','style','8259352pyCcjL','localName','className','createElement','847288BwkEpD'];a=function(){return C;};return a();}const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x163))/0x1+parseInt(n(0x142))/0x2*(parseInt(n(0x152))/0x3)+-parseInt(n(0x169))/0x4+parseInt(n(0x138))/0x5*(parseInt(n(0x153))/0x6)+parseInt(n(0x14a))/0x7+parseInt(n(0x15f))/0x8+-parseInt(n(0x154))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xded6f));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';export class TreeView extends BaseCustomWebComponentLazyAppend{[o(0x143)];['_index'];[o(0x136)];['_treeDiv'];[o(0x13a)];[o(0x14f)];['_contentChangedHandler'];['_mapElementTreeitem'];[o(0x156)];static ['style']=css`
    :host {
      --horz-margin: 20px;
      --vert-margin: 0px;
      --horz-shift: calc(var(--horz-margin) / 2); /* typically */
      --vert-shift: 12px;

      display: inline-block;
      position: relative;
      width: 100%;
      height: 100%;
      background: var(--wcd-tree-view-background, var(--dark-grey, var(--wcd-color-surface, #232733)));
      overflow-y: auto;
    }
    button {
      border: none;
      font-size: 13px;
      display: block;
      padding: 4px 0;
      cursor: pointer;
      width: 100%;
      text-align: left;
      display: inline-block;
      margin: 0;
      background: var(--wcd-tree-view-background, var(--dark-grey, var(--wcd-color-surface, #232733)));
      position: relative;
      color: var(--wcd-color-text, var(--text-color, white));
    }
    button:hover, button:focus {
      background: var(--wcd-tree-view-item-hover-background, var(--light-grey, var(--wcd-color-surface-hover, #383f52)));
    }
    span {
      margin: 4px;
    }
    .id {
      font-style: italic;
      color: var(--wcd-tree-view-id-color, var(--highlight-pink, var(--wcd-color-accent, #e91e63)));
    }
    .selected {
      background: var(--wcd-tree-view-item-selected-background, var(--light-grey, var(--wcd-color-surface-hover, #383f52)));
      outline: none;
    }

    li, ul {
      margin: 0;
      padding: 0;
    }
    .tree ul {
      margin-left: var(--horz-margin);
    }
    .tree li {
      list-style-type: none;
      margin-top: var(--vert-margin);
      margin-bottom: var(--vert-margin);
      position: relative;
    }

    /* up connector */
    .tree li::before {
        content: "";
        position: absolute;
        top: calc(0px - var(--vert-margin));
        left: calc(var(--horz-shift) - var(--horz-margin));
        width: calc(var(--horz-margin) - var(--horz-shift));
        height: calc(var(--vert-shift) + var(--vert-margin));
        border-left: 1px solid var(--wcd-tree-view-connector-color, #ccc);
        border-bottom: 1px solid var(--wcd-tree-view-connector-color, #ccc);
        border-radius: 0;
    }

    /* down connector */
    .tree li::after {
        position: absolute;
        content: "";
        top: var(--vert-shift);
        left: calc(var(--horz-shift) - var(--horz-margin));
        width: calc(var(--horz-margin) - var(--horz-shift));
        height: calc(100% - var(--vert-shift));
        border-left: 1px solid var(--wcd-tree-view-connector-color, #ccc);
        border-top: 1px solid var(--wcd-tree-view-connector-color, #ccc);
        border-radius: 0;
    }

    /* do not draw: up connector of first root item */
    ul.tree>li:first-child::before { display:none; }

    /* do not draw: down connector of last item */
    .tree li:last-child::after  { display:none; }

    /* draw rounded: down connector of first root item */
    ul.tree>li:first-child::after { border-radius: 5px 0 0 0; }

    /* draw rounded: up connector of last item */
    .tree li:last-child:before { border-radius: 0 0 0 5px; }
    `;constructor(){const p=o;super(),this[p(0x137)](),this[p(0x14b)]=document[p(0x162)](p(0x140)),this[p(0x14b)][p(0x15e)]['userSelect']='none',this[p(0x131)]['appendChild'](this['_treeDiv']),this[p(0x14b)]['addEventListener'](p(0x16c),this[p(0x16b)][p(0x14e)](this));}[o(0x155)](c){const q=o;this[q(0x156)]=c;if(c!=null)this['_recomputeTree'](c['element'],null);}set['instanceServiceContainer'](c){const r=o;this[r(0x13a)]=c,this[r(0x14f)]?.[r(0x14c)](),this[r(0x14f)]=this[r(0x13a)]['selectionService']['onSelectionChanged']['on'](d=>{const s=r;this[s(0x15a)](d);}),this['_contentChangedHandler']?.['dispose'](),this['_contentChangedHandler']=this['_instanceServiceContainer']['onContentChanged']['on'](d=>{const t=r;this[t(0x155)](c[t(0x145)][t(0x13e)]);}),this['createTree'](c[r(0x145)][r(0x13e)]);}['selectionChanged'](c){const u=o;this['_selectTreeElements'](c[u(0x14d)]['map'](d=>this['_mapElementTreeitem'][u(0x147)](d[u(0x166)])));}['_recomputeTree'](c,d){const v=o;this['_mapElementTreeitem']=new Map(),this['_treeDiv'][v(0x134)]='';let e=document[v(0x162)]('ul');return e[v(0x150)]['add'](v(0x141)),this['_treeDiv'][v(0x146)](e),this[v(0x132)]=0x0,this[v(0x143)]=this[v(0x165)](c,e),this['_highlight'](d),this['_items'];}[o(0x144)](c,d,e){const w=o;let f=document['createElement']('button');f[w(0x164)]['index']=e;let g=document[w(0x162)]('span');g[w(0x161)]=w(0x15b),g['textContent']=c;let h=document[w(0x162)]('span');return h['className']='id',h['textContent']=d,f[w(0x146)](g),f['appendChild'](h),f;}[o(0x165)](c,d){const x=o;let e=c['id']===x(0x149),f={'tag':e?'main-app':c['tagName']['toLowerCase'](),'id':e?'':c['id']?'#'+c['id']:'','text':e?'':'\x22'+c[x(0x133)]+'\x22','ref':c,'index':this[x(0x132)]},g=document['createElement']('li'),h=this['_makeButton'](f[x(0x15b)],f['id'],f[x(0x167)]);g[x(0x146)](h),d[x(0x146)](g),this[x(0x157)]['set'](f['ref'],h),this['_index']++;let j=[f],k=null;for(let l=0x0;l<c[x(0x148)]['length'];l++){let m=c[x(0x148)][l];if(m['localName']==='style')continue;k==null&&(k=document['createElement']('ul'),g[x(0x146)](k)),j=j['concat'](this['_getChildren'](m,k));}return j;}[o(0x16b)](c){const y=o;let d=c['target'];d[y(0x160)]===y(0x16a)&&(d=d['parentElement']),this['_selectTreeElements']([d]),this[y(0x15d)](d);}[o(0x135)](c){const z=o;if(this['_previouslySelected']){for(let d of this['_previouslySelected'])if(d)d[z(0x150)]['remove']('selected');}this['_previouslySelected']=c;if(c){for(let f of c)if(f)f[z(0x150)][z(0x13f)](z(0x158));}}[o(0x15d)](c){const A=o;let e=c['dataset'][A(0x167)],f=this['_items'][e]['ref'],g=DesignItem['GetOrCreateDesignItem'](f,f,this['_rootItem']['serviceContainer'],this[A(0x156)]['instanceServiceContainer']);g['instanceServiceContainer']['selectionService'][A(0x13b)]([g]);}[o(0x13d)](c){const B=o;if(!c)return;let d=this['shadowRoot'][B(0x159)](B(0x13c));if(d['length']!==this[B(0x143)]['length'])return;for(let e=0x0;e<this['_items'][B(0x15c)];e++){if(this['_items'][e][B(0x168)]===c){this[B(0x135)]([d[e]]);return;}}}}function b(c,d){c=c-0x131;const e=a();let f=e[c];return f;}customElements[o(0x151)](o(0x139),TreeView);
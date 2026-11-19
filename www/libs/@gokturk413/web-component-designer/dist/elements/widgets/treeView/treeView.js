const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0xce))/0x1+-parseInt(n(0xc4))/0x2+parseInt(n(0xc1))/0x3*(parseInt(n(0xb2))/0x4)+parseInt(n(0x9f))/0x5*(parseInt(n(0xbc))/0x6)+parseInt(n(0xd1))/0x7*(parseInt(n(0xad))/0x8)+parseInt(n(0xcc))/0x9*(-parseInt(n(0xb8))/0xa)+parseInt(n(0xcf))/0xb*(parseInt(n(0xca))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xf2be9));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';function a(){const A=['appendChild','span','textContent','_recomputeTree','137211WhuzpN','_previouslySelected','classList','102584kDxmZY','length','createElement','_selectionChangedHandler','_rootItem','tree','1824PyveHt','_items','2232QOnrVO','onSelectionChanged','1730420UypApc','21087jJwNrg','ref','7rTevVQ','_makeButton','_getChildren','tag','toLowerCase','dispose','parentElement','_contentChangedHandler','dataset','_clickElement','serviceContainer','_treeDiv','55DvpEor','addEventListener','_instanceServiceContainer','div','shadowRoot','children','rootDesignItem','index','define','selectedElements','designerCanvas','_selectTreeElements','_highlight','className','11741816snDZfn','add','localName','_index','instanceServiceContainer','92naGIpn','set','createTree','style','querySelectorAll','_mapElementTreeitem','30710Towhvo','target','selected','button','396294iPwGRH'];a=function(){return A;};return a();}import{DesignItem}from'../../item/DesignItem.js';function b(c,d){c=c-0x9e;const e=a();let f=e[c];return f;}export class TreeView extends BaseCustomWebComponentLazyAppend{[o(0xcb)];[o(0xb0)];['_previouslySelected'];[o(0x9e)];[o(0xa1)];['_selectionChangedHandler'];[o(0xd8)];['_mapElementTreeitem'];['_rootItem'];static [o(0xb5)]=css`
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
    `;constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this[p(0x9e)]=document['createElement'](p(0xa2)),this['_treeDiv']['style']['userSelect']='none',this['shadowRoot']['appendChild'](this[p(0x9e)]),this['_treeDiv'][p(0xa0)]('click',this[p(0xda)]['bind'](this));}[o(0xb4)](c){this['_rootItem']=c;if(c!=null)this['_recomputeTree'](c['element'],null);}set[o(0xb1)](c){const q=o;this['_instanceServiceContainer']=c,this[q(0xc7)]?.['dispose'](),this['_selectionChangedHandler']=this['_instanceServiceContainer']['selectionService'][q(0xcd)]['on'](d=>{this['selectionChanged'](d);}),this['_contentChangedHandler']?.[q(0xd6)](),this[q(0xd8)]=this[q(0xa1)]['onContentChanged']['on'](d=>{const r=q;this['createTree'](c[r(0xa9)][r(0xa5)]);}),this['createTree'](c[q(0xa9)][q(0xa5)]);}['selectionChanged'](c){const s=o;this['_selectTreeElements'](c[s(0xa8)]['map'](d=>this[s(0xb7)]['get'](d['element'])));}[o(0xc0)](c,d){const t=o;this['_mapElementTreeitem']=new Map(),this['_treeDiv']['innerHTML']='';let e=document[t(0xc6)]('ul');return e[t(0xc3)][t(0xae)](t(0xc9)),this['_treeDiv']['appendChild'](e),this[t(0xb0)]=0x0,this['_items']=this['_getChildren'](c,e),this[t(0xab)](d),this[t(0xcb)];}[o(0xd2)](c,d,e){const u=o;let f=document[u(0xc6)](u(0xbb));f['dataset']['index']=e;let g=document[u(0xc6)]('span');g[u(0xac)]=u(0xd4),g[u(0xbf)]=c;let h=document['createElement'](u(0xbe));return h[u(0xac)]='id',h[u(0xbf)]=d,f[u(0xbd)](g),f[u(0xbd)](h),f;}[o(0xd3)](c,d){const v=o;let e=c['id']==='viewContainer',f={'tag':e?'main-app':c['tagName'][v(0xd5)](),'id':e?'':c['id']?'#'+c['id']:'','text':e?'':'\x22'+c['textContent']+'\x22','ref':c,'index':this[v(0xb0)]},g=document['createElement']('li'),h=this[v(0xd2)](f[v(0xd4)],f['id'],f[v(0xa6)]);g['appendChild'](h),d['appendChild'](g),this['_mapElementTreeitem'][v(0xb3)](f['ref'],h),this[v(0xb0)]++;let j=[f],k=null;for(let l=0x0;l<c['children']['length'];l++){let m=c[v(0xa4)][l];if(m[v(0xaf)]==='style')continue;k==null&&(k=document[v(0xc6)]('ul'),g[v(0xbd)](k)),j=j['concat'](this[v(0xd3)](m,k));}return j;}['_clickElement'](c){const w=o;let d=c[w(0xb9)];d['localName']==='span'&&(d=d[w(0xd7)]),this[w(0xaa)]([d]),this['_selectDesignerElement'](d);}[o(0xaa)](c){const x=o;if(this['_previouslySelected']){for(let d of this['_previouslySelected'])if(d)d[x(0xc3)]['remove']('selected');}this[x(0xc2)]=c;if(c){for(let f of c)if(f)f['classList'][x(0xae)](x(0xba));}}['_selectDesignerElement'](c){const y=o;let e=c[y(0xd9)][y(0xa6)],f=this[y(0xcb)][e]['ref'],g=DesignItem['GetOrCreateDesignItem'](f,f,this[y(0xc8)][y(0xdb)],this[y(0xc8)]['instanceServiceContainer']);g[y(0xb1)]['selectionService']['setSelectedElements']([g]);}['_highlight'](c){const z=o;if(!c)return;let d=this[z(0xa3)][z(0xb6)](z(0xbb));if(d['length']!==this['_items'][z(0xc5)])return;for(let e=0x0;e<this[z(0xcb)]['length'];e++){if(this['_items'][e][z(0xd0)]===c){this[z(0xaa)]([d[e]]);return;}}}}customElements[o(0xa7)]('node-projects-tree-view',TreeView);
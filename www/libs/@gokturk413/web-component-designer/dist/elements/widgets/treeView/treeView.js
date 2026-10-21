function b(c,d){c=c-0xaf;const e=a();let f=e[c];return f;}const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0xb4))/0x1+parseInt(n(0xbf))/0x2+-parseInt(n(0xdf))/0x3*(-parseInt(n(0xce))/0x4)+parseInt(n(0xbe))/0x5+-parseInt(n(0xd1))/0x6+-parseInt(n(0xeb))/0x7+parseInt(n(0xbd))/0x8*(parseInt(n(0xd0))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x1f85b));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';export class TreeView extends BaseCustomWebComponentLazyAppend{['_items'];['_index'];[o(0xe3)];[o(0xb3)];[o(0xaf)];['_selectionChangedHandler'];[o(0xdb)];[o(0xd5)];[o(0xca)];static [o(0xea)]=css`
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
    `;constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this[p(0xb3)]=document['createElement']('div'),this[p(0xb3)][p(0xea)]['userSelect']='none',this[p(0xd3)][p(0xda)](this[p(0xb3)]),this['_treeDiv'][p(0xbb)]('click',this[p(0xd4)][p(0xc9)](this));}[o(0xe4)](c){this['_rootItem']=c;if(c!=null)this['_recomputeTree'](c['element'],null);}set[o(0xba)](c){const q=o;this['_instanceServiceContainer']=c,this['_selectionChangedHandler']?.[q(0xcd)](),this['_selectionChangedHandler']=this[q(0xaf)][q(0xcf)][q(0xe0)]['on'](d=>{this['selectionChanged'](d);}),this['_contentChangedHandler']?.['dispose'](),this[q(0xdb)]=this[q(0xaf)]['onContentChanged']['on'](d=>{const r=q;this['createTree'](c['designerCanvas'][r(0xdd)]);}),this[q(0xe4)](c['designerCanvas'][q(0xdd)]);}[o(0xb9)](c){const s=o;this[s(0xd9)](c[s(0xd2)][s(0xc0)](d=>this['_mapElementTreeitem'][s(0xe1)](d[s(0xe9)])));}['_recomputeTree'](c,d){const t=o;this[t(0xd5)]=new Map(),this['_treeDiv'][t(0xb5)]='';let e=document[t(0xc4)]('ul');return e[t(0xcc)][t(0xe8)]('tree'),this[t(0xb3)]['appendChild'](e),this[t(0xc2)]=0x0,this[t(0xb8)]=this[t(0xe5)](c,e),this[t(0xcb)](d),this['_items'];}[o(0xc3)](c,d,e){const u=o;let f=document[u(0xc4)](u(0xbc));f['dataset'][u(0xb0)]=e;let g=document['createElement']('span');g[u(0xde)]='tag',g[u(0xdc)]=c;let h=document[u(0xc4)](u(0xd6));return h['className']='id',h['textContent']=d,f['appendChild'](g),f['appendChild'](h),f;}[o(0xe5)](c,d){const v=o;let e=c['id']==='viewContainer',f={'tag':e?v(0xd7):c[v(0xc8)][v(0xec)](),'id':e?'':c['id']?'#'+c['id']:'','text':e?'':'\x22'+c[v(0xdc)]+'\x22','ref':c,'index':this[v(0xc2)]},g=document[v(0xc4)]('li'),h=this['_makeButton'](f['tag'],f['id'],f['index']);g[v(0xda)](h),d['appendChild'](g),this[v(0xd5)][v(0xb1)](f['ref'],h),this[v(0xc2)]++;let j=[f],k=null;for(let l=0x0;l<c['children'][v(0xe2)];l++){let m=c[v(0xc5)][l];if(m[v(0xb7)]==='style')continue;k==null&&(k=document['createElement']('ul'),g[v(0xda)](k)),j=j[v(0xb2)](this['_getChildren'](m,k));}return j;}['_clickElement'](c){const w=o;let d=c['target'];d[w(0xb7)]===w(0xd6)&&(d=d['parentElement']),this['_selectTreeElements']([d]),this[w(0xc7)](d);}['_selectTreeElements'](c){const x=o;if(this['_previouslySelected']){for(let d of this['_previouslySelected'])if(d)d[x(0xcc)][x(0xe6)](x(0xd8));}this['_previouslySelected']=c;if(c){for(let f of c)if(f)f[x(0xcc)][x(0xe8)](x(0xd8));}}[o(0xc7)](c){const y=o;let e=c['dataset'][y(0xb0)],f=this[y(0xb8)][e][y(0xb6)],g=DesignItem[y(0xc1)](f,f,this[y(0xca)][y(0xe7)],this['_rootItem']['instanceServiceContainer']);g[y(0xba)][y(0xcf)]['setSelectedElements']([g]);}['_highlight'](c){const z=o;if(!c)return;let d=this['shadowRoot']['querySelectorAll'](z(0xbc));if(d['length']!==this['_items']['length'])return;for(let e=0x0;e<this['_items'][z(0xe2)];e++){if(this[z(0xb8)][e][z(0xb6)]===c){this['_selectTreeElements']([d[e]]);return;}}}}function a(){const A=['_rootItem','_highlight','classList','dispose','622724koGVDN','selectionService','347337SudzEr','1082898cIhCio','selectedElements','shadowRoot','_clickElement','_mapElementTreeitem','span','main-app','selected','_selectTreeElements','appendChild','_contentChangedHandler','textContent','rootDesignItem','className','3bYIJGy','onSelectionChanged','get','length','_previouslySelected','createTree','_getChildren','remove','serviceContainer','add','element','style','385959XQRLGI','toLowerCase','_instanceServiceContainer','index','set','concat','_treeDiv','189833RcCnHR','innerHTML','ref','localName','_items','selectionChanged','instanceServiceContainer','addEventListener','button','32JEuLXN','430500JGcGDD','316830EcyNyH','map','GetOrCreateDesignItem','_index','_makeButton','createElement','children','define','_selectDesignerElement','tagName','bind'];a=function(){return A;};return a();}customElements[o(0xc6)]('node-projects-tree-view',TreeView);
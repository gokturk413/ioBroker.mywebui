const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0xe9))/0x1*(-parseInt(n(0x10a))/0x2)+-parseInt(n(0xdb))/0x3+-parseInt(n(0xee))/0x4+parseInt(n(0xf3))/0x5+-parseInt(n(0xf1))/0x6+parseInt(n(0xe0))/0x7*(parseInt(n(0xe3))/0x8)+parseInt(n(0xde))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x1dfaf));function a(){const C=['9KNUIuz','span','userSelect','_items','textContent','920228dEuJzG','map','className','846474qOzBEt','_treeDiv','341755FbIVcq','instanceServiceContainer','createElement','tree','designerCanvas','parentElement','_previouslySelected','index','appendChild','button','localName','_makeButton','selectionService','_recomputeTree','dispose','_selectTreeElements','tag','selectedElements','remove','define','length','selected','addEventListener','42610FABcFT','_index','selectionChanged','rootDesignItem','582231gkxyqB','_rootItem','_instanceServiceContainer','6733530TyOHHe','element','442652FxQNMX','GetOrCreateDesignItem','_mapElementTreeitem','8YHUABE','classList','concat','style','children','createTree'];a=function(){return C;};return a();}import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';export class TreeView extends BaseCustomWebComponentLazyAppend{['_items'];[o(0x10b)];[o(0xf9)];[o(0xf2)];['_instanceServiceContainer'];['_selectionChangedHandler'];['_contentChangedHandler'];[o(0xe2)];[o(0xdc)];static [o(0xe6)]=css`
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
    `;constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this[p(0xf2)]=document['createElement']('div'),this[p(0xf2)][p(0xe6)][p(0xeb)]='none',this['shadowRoot'][p(0xfb)](this['_treeDiv']),this['_treeDiv'][p(0x109)]('click',this['_clickElement']['bind'](this));}[o(0xe8)](c){const q=o;this[q(0xdc)]=c;if(c!=null)this[q(0x100)](c['element'],null);}set[o(0xf4)](c){const r=o;this[r(0xdd)]=c,this['_selectionChangedHandler']?.['dispose'](),this['_selectionChangedHandler']=this['_instanceServiceContainer'][r(0xff)]['onSelectionChanged']['on'](d=>{const s=r;this[s(0xd9)](d);}),this['_contentChangedHandler']?.[r(0x101)](),this['_contentChangedHandler']=this['_instanceServiceContainer']['onContentChanged']['on'](d=>{const t=r;this[t(0xe8)](c['designerCanvas'][t(0xda)]);}),this['createTree'](c[r(0xf7)]['rootDesignItem']);}['selectionChanged'](c){const u=o;this[u(0x102)](c[u(0x104)][u(0xef)](d=>this['_mapElementTreeitem']['get'](d[u(0xdf)])));}[o(0x100)](c,d){const v=o;this['_mapElementTreeitem']=new Map(),this['_treeDiv']['innerHTML']='';let e=document[v(0xf5)]('ul');return e[v(0xe4)]['add'](v(0xf6)),this[v(0xf2)]['appendChild'](e),this[v(0x10b)]=0x0,this[v(0xec)]=this['_getChildren'](c,e),this['_highlight'](d),this['_items'];}['_makeButton'](c,d,e){const w=o;let f=document['createElement']('button');f['dataset']['index']=e;let g=document['createElement'](w(0xea));g[w(0xf0)]='tag',g[w(0xed)]=c;let h=document['createElement'](w(0xea));return h[w(0xf0)]='id',h['textContent']=d,f[w(0xfb)](g),f[w(0xfb)](h),f;}['_getChildren'](c,d){const x=o;let e=c['id']==='viewContainer',f={'tag':e?'main-app':c['tagName']['toLowerCase'](),'id':e?'':c['id']?'#'+c['id']:'','text':e?'':'\x22'+c['textContent']+'\x22','ref':c,'index':this[x(0x10b)]},g=document[x(0xf5)]('li'),h=this[x(0xfe)](f[x(0x103)],f['id'],f[x(0xfa)]);g[x(0xfb)](h),d[x(0xfb)](g),this['_mapElementTreeitem']['set'](f['ref'],h),this['_index']++;let j=[f],k=null;for(let l=0x0;l<c[x(0xe7)][x(0x107)];l++){let m=c[x(0xe7)][l];if(m[x(0xfd)]===x(0xe6))continue;k==null&&(k=document['createElement']('ul'),g['appendChild'](k)),j=j[x(0xe5)](this['_getChildren'](m,k));}return j;}['_clickElement'](c){const y=o;let d=c['target'];d['localName']===y(0xea)&&(d=d[y(0xf8)]),this['_selectTreeElements']([d]),this['_selectDesignerElement'](d);}[o(0x102)](c){const z=o;if(this['_previouslySelected']){for(let d of this['_previouslySelected'])if(d)d['classList'][z(0x105)]('selected');}this['_previouslySelected']=c;if(c){for(let f of c)if(f)f['classList']['add'](z(0x108));}}['_selectDesignerElement'](c){const A=o;let e=c['dataset']['index'],f=this[A(0xec)][e]['ref'],g=DesignItem[A(0xe1)](f,f,this['_rootItem']['serviceContainer'],this['_rootItem'][A(0xf4)]);g[A(0xf4)][A(0xff)]['setSelectedElements']([g]);}['_highlight'](c){const B=o;if(!c)return;let d=this['shadowRoot']['querySelectorAll'](B(0xfc));if(d[B(0x107)]!==this['_items'][B(0x107)])return;for(let e=0x0;e<this['_items'][B(0x107)];e++){if(this['_items'][e]['ref']===c){this['_selectTreeElements']([d[e]]);return;}}}}function b(c,d){c=c-0xd9;const e=a();let f=e[c];return f;}customElements[o(0x106)]('node-projects-tree-view',TreeView);
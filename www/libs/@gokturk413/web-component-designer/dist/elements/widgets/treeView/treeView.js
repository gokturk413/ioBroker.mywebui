const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x1ed))/0x1*(-parseInt(n(0x1da))/0x2)+-parseInt(n(0x1e0))/0x3+parseInt(n(0x1c7))/0x4+-parseInt(n(0x1eb))/0x5+parseInt(n(0x1c3))/0x6*(-parseInt(n(0x1c4))/0x7)+-parseInt(n(0x1cb))/0x8*(-parseInt(n(0x1f1))/0x9)+parseInt(n(0x1de))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x769d3));function a(){const C=['tag','target','6DESsqU','160195cZEMZl','textContent','none','783144cDsWVl','_getChildren','_selectTreeElements','_highlight','2542640qvtqvj','index','parentElement','_rootItem','_mapElementTreeitem','get','selected','_makeButton','localName','ref','_selectionChangedHandler','button','click','instanceServiceContainer','dataset','128420THIuZy','createElement','tree','div','4221710VnFbTq','appendChild','2642235UIfXkG','_previouslySelected','className','selectedElements','viewContainer','length','_clickElement','_items','classList','style','_treeDiv','942070ZcpfcR','_index','10Fmdssp','_contentChangedHandler','_instanceServiceContainer','_recomputeTree','9IKwqqx','_selectDesignerElement','bind','add','rootDesignItem','children','selectionChanged','span','designerCanvas','dispose','element','define','createTree'];a=function(){return C;};return a();}function b(c,d){c=c-0x1b6;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';export class TreeView extends BaseCustomWebComponentLazyAppend{[o(0x1e7)];['_index'];['_previouslySelected'];['_treeDiv'];['_instanceServiceContainer'];[o(0x1d5)];['_contentChangedHandler'];['_mapElementTreeitem'];[o(0x1ce)];static [o(0x1e9)]=css`
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
    `;constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this[p(0x1ea)]=document[p(0x1db)](p(0x1dd)),this['_treeDiv'][p(0x1e9)]['userSelect']=p(0x1c6),this['shadowRoot']['appendChild'](this['_treeDiv']),this[p(0x1ea)]['addEventListener'](p(0x1d7),this[p(0x1e6)][p(0x1b6)](this));}[o(0x1c0)](c){const q=o;this[q(0x1ce)]=c;if(c!=null)this['_recomputeTree'](c[q(0x1be)],null);}set[o(0x1d8)](c){const r=o;this[r(0x1ef)]=c,this['_selectionChangedHandler']?.[r(0x1bd)](),this[r(0x1d5)]=this[r(0x1ef)]['selectionService']['onSelectionChanged']['on'](d=>{const s=r;this[s(0x1ba)](d);}),this[r(0x1ee)]?.['dispose'](),this[r(0x1ee)]=this['_instanceServiceContainer']['onContentChanged']['on'](d=>{const t=r;this['createTree'](c[t(0x1bc)][t(0x1b8)]);}),this[r(0x1c0)](c[r(0x1bc)][r(0x1b8)]);}[o(0x1ba)](c){const u=o;this['_selectTreeElements'](c[u(0x1e3)]['map'](d=>this[u(0x1cf)][u(0x1d0)](d[u(0x1be)])));}[o(0x1f0)](c,d){const v=o;this['_mapElementTreeitem']=new Map(),this['_treeDiv']['innerHTML']='';let e=document[v(0x1db)]('ul');return e['classList'][v(0x1b7)](v(0x1dc)),this['_treeDiv'][v(0x1df)](e),this[v(0x1ec)]=0x0,this[v(0x1e7)]=this['_getChildren'](c,e),this['_highlight'](d),this['_items'];}[o(0x1d2)](c,d,e){const w=o;let f=document[w(0x1db)](w(0x1d6));f['dataset']['index']=e;let g=document[w(0x1db)](w(0x1bb));g[w(0x1e2)]=w(0x1c1),g[w(0x1c5)]=c;let h=document[w(0x1db)](w(0x1bb));return h[w(0x1e2)]='id',h['textContent']=d,f[w(0x1df)](g),f[w(0x1df)](h),f;}[o(0x1c8)](c,d){const x=o;let e=c['id']===x(0x1e4),f={'tag':e?'main-app':c['tagName']['toLowerCase'](),'id':e?'':c['id']?'#'+c['id']:'','text':e?'':'\x22'+c[x(0x1c5)]+'\x22','ref':c,'index':this[x(0x1ec)]},g=document[x(0x1db)]('li'),h=this[x(0x1d2)](f[x(0x1c1)],f['id'],f[x(0x1cc)]);g['appendChild'](h),d['appendChild'](g),this['_mapElementTreeitem']['set'](f['ref'],h),this[x(0x1ec)]++;let j=[f],k=null;for(let l=0x0;l<c['children'][x(0x1e5)];l++){let m=c[x(0x1b9)][l];if(m['localName']==='style')continue;k==null&&(k=document[x(0x1db)]('ul'),g[x(0x1df)](k)),j=j['concat'](this[x(0x1c8)](m,k));}return j;}[o(0x1e6)](c){const y=o;let d=c[y(0x1c2)];d[y(0x1d3)]==='span'&&(d=d[y(0x1cd)]),this[y(0x1c9)]([d]),this['_selectDesignerElement'](d);}['_selectTreeElements'](c){const z=o;if(this[z(0x1e1)]){for(let d of this['_previouslySelected'])if(d)d[z(0x1e8)]['remove'](z(0x1d1));}this['_previouslySelected']=c;if(c){for(let f of c)if(f)f['classList']['add']('selected');}}[o(0x1f2)](c){const A=o;let e=c[A(0x1d9)]['index'],f=this[A(0x1e7)][e]['ref'],g=DesignItem['GetOrCreateDesignItem'](f,f,this[A(0x1ce)]['serviceContainer'],this['_rootItem']['instanceServiceContainer']);g['instanceServiceContainer']['selectionService']['setSelectedElements']([g]);}[o(0x1ca)](c){const B=o;if(!c)return;let d=this['shadowRoot']['querySelectorAll'](B(0x1d6));if(d['length']!==this['_items']['length'])return;for(let e=0x0;e<this[B(0x1e7)]['length'];e++){if(this[B(0x1e7)][e][B(0x1d4)]===c){this[B(0x1c9)]([d[e]]);return;}}}}customElements[o(0x1bf)]('node-projects-tree-view',TreeView);
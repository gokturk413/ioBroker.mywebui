function b(c,d){c=c-0x14b;const e=a();let f=e[c];return f;}const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x15d))/0x1+parseInt(n(0x14b))/0x2*(-parseInt(n(0x175))/0x3)+-parseInt(n(0x160))/0x4+parseInt(n(0x15a))/0x5+parseInt(n(0x172))/0x6+parseInt(n(0x15c))/0x7*(parseInt(n(0x163))/0x8)+parseInt(n(0x159))/0x9*(parseInt(n(0x14d))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x42187));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';function a(){const B=['concat','querySelectorAll','createElement','addEventListener','remove','className','index','onSelectionChanged','_selectTreeElements','dispose','_mapElementTreeitem','_clickElement','482074GtHfKy','length','730gGODqK','textContent','_recomputeTree','_index','shadowRoot','_selectDesignerElement','span','selected','add','_contentChangedHandler','_rootItem','tagName','9603KGeouz','2176210tpvTUJ','_items','17444HduJum','217935QhFIUD','tag','none','1873200pwoHYO','bind','createTree','1176rMidpt','instanceServiceContainer','appendChild','parentElement','rootDesignItem','dataset','_previouslySelected','_instanceServiceContainer','serviceContainer','define','main-app','selectedElements','ref','designerCanvas','selectionService','1911252gcYllH','_highlight','_treeDiv','3yMCsow','get','classList'];a=function(){return B;};return a();}export class TreeView extends BaseCustomWebComponentLazyAppend{['_items'];['_index'];[o(0x169)];['_treeDiv'];['_instanceServiceContainer'];['_selectionChangedHandler'];['_contentChangedHandler'];['_mapElementTreeitem'];['_rootItem'];static ['style']=css`
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
    `;constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this[p(0x174)]=document[p(0x17a)]('div'),this['_treeDiv']['style']['userSelect']=p(0x15f),this[p(0x151)]['appendChild'](this[p(0x174)]),this['_treeDiv'][p(0x17b)]('click',this['_clickElement'][p(0x161)](this));}[o(0x162)](c){const q=o;this[q(0x157)]=c;if(c!=null)this['_recomputeTree'](c['element'],null);}set[o(0x164)](c){const r=o;this['_instanceServiceContainer']=c,this['_selectionChangedHandler']?.['dispose'](),this['_selectionChangedHandler']=this['_instanceServiceContainer']['selectionService'][r(0x17f)]['on'](d=>{this['selectionChanged'](d);}),this[r(0x156)]?.[r(0x181)](),this[r(0x156)]=this[r(0x16a)]['onContentChanged']['on'](d=>{const s=r;this[s(0x162)](c[s(0x170)][s(0x167)]);}),this['createTree'](c['designerCanvas'][r(0x167)]);}['selectionChanged'](c){const t=o;this[t(0x180)](c[t(0x16e)]['map'](d=>this['_mapElementTreeitem'][t(0x176)](d['element'])));}[o(0x14f)](c,d){const u=o;this['_mapElementTreeitem']=new Map(),this['_treeDiv']['innerHTML']='';let e=document[u(0x17a)]('ul');return e[u(0x177)][u(0x155)]('tree'),this[u(0x174)][u(0x165)](e),this['_index']=0x0,this[u(0x15b)]=this['_getChildren'](c,e),this[u(0x173)](d),this[u(0x15b)];}['_makeButton'](c,d,e){const v=o;let f=document['createElement']('button');f['dataset']['index']=e;let g=document[v(0x17a)](v(0x153));g[v(0x17d)]=v(0x15e),g[v(0x14e)]=c;let h=document['createElement'](v(0x153));return h[v(0x17d)]='id',h['textContent']=d,f[v(0x165)](g),f['appendChild'](h),f;}['_getChildren'](c,d){const w=o;let e=c['id']==='viewContainer',f={'tag':e?w(0x16d):c[w(0x158)]['toLowerCase'](),'id':e?'':c['id']?'#'+c['id']:'','text':e?'':'\x22'+c['textContent']+'\x22','ref':c,'index':this['_index']},g=document['createElement']('li'),h=this['_makeButton'](f['tag'],f['id'],f[w(0x17e)]);g['appendChild'](h),d[w(0x165)](g),this[w(0x182)]['set'](f[w(0x16f)],h),this[w(0x150)]++;let j=[f],k=null;for(let l=0x0;l<c['children']['length'];l++){let m=c['children'][l];if(m['localName']==='style')continue;k==null&&(k=document[w(0x17a)]('ul'),g['appendChild'](k)),j=j[w(0x178)](this['_getChildren'](m,k));}return j;}[o(0x183)](c){const x=o;let d=c['target'];d['localName']==='span'&&(d=d[x(0x166)]),this['_selectTreeElements']([d]),this['_selectDesignerElement'](d);}['_selectTreeElements'](c){const y=o;if(this[y(0x169)]){for(let d of this[y(0x169)])if(d)d[y(0x177)][y(0x17c)](y(0x154));}this[y(0x169)]=c;if(c){for(let f of c)if(f)f[y(0x177)][y(0x155)](y(0x154));}}[o(0x152)](c){const z=o;let e=c[z(0x168)]['index'],f=this[z(0x15b)][e][z(0x16f)],g=DesignItem['GetOrCreateDesignItem'](f,f,this[z(0x157)][z(0x16b)],this['_rootItem'][z(0x164)]);g[z(0x164)][z(0x171)]['setSelectedElements']([g]);}['_highlight'](c){const A=o;if(!c)return;let d=this['shadowRoot'][A(0x179)]('button');if(d['length']!==this['_items'][A(0x14c)])return;for(let e=0x0;e<this[A(0x15b)]['length'];e++){if(this[A(0x15b)][e]['ref']===c){this[A(0x180)]([d[e]]);return;}}}}customElements[o(0x16c)]('node-projects-tree-view',TreeView);
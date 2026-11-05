const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x133))/0x1*(-parseInt(n(0x12a))/0x2)+-parseInt(n(0x13c))/0x3+-parseInt(n(0x13b))/0x4+parseInt(n(0x118))/0x5+parseInt(n(0x137))/0x6+-parseInt(n(0x117))/0x7+parseInt(n(0x13e))/0x8*(parseInt(n(0x11c))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xea0b4));function b(c,d){c=c-0x10e;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';function a(){const C=['selectionChanged','designerCanvas','instanceServiceContainer','5594250tGHpKO','_contentChangedHandler','style','_highlight','873192OddXJv','5298339QmWmzn','children','56VDMivo','node-projects-tree-view','_treeDiv','set','index','bind','appendChild','querySelectorAll','classList','tagName','element','_selectTreeElements','tree','define','_clickElement','tag','onContentChanged','viewContainer','toLowerCase','_index','className','10087861siOXUF','1010385xyODLM','get','span','click','4533210TRtjHC','_rootItem','_selectionChangedHandler','_mapElementTreeitem','selectedElements','selected','button','shadowRoot','textContent','dispose','dataset','length','_getChildren','none','8hEEKSd','ref','_recomputeTree','innerHTML','_previouslySelected','parentElement','createElement','add','_items','69026zylTle'];a=function(){return C;};return a();}import{DesignItem}from'../../item/DesignItem.js';export class TreeView extends BaseCustomWebComponentLazyAppend{['_items'];['_index'];['_previouslySelected'];['_treeDiv'];['_instanceServiceContainer'];['_selectionChangedHandler'];[o(0x138)];['_mapElementTreeitem'];[o(0x11d)];static ['style']=css`
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
    `;constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this['_treeDiv']=document['createElement']('div'),this['_treeDiv']['style']['userSelect']=p(0x129),this[p(0x123)][p(0x144)](this['_treeDiv']),this[p(0x140)]['addEventListener'](p(0x11b),this[p(0x110)][p(0x143)](this));}['createTree'](c){const q=o;this[q(0x11d)]=c;if(c!=null)this[q(0x12c)](c[q(0x148)],null);}set[o(0x136)](c){const r=o;this['_instanceServiceContainer']=c,this[r(0x11e)]?.[r(0x125)](),this[r(0x11e)]=this['_instanceServiceContainer']['selectionService']['onSelectionChanged']['on'](d=>{const s=r;this[s(0x134)](d);}),this[r(0x138)]?.[r(0x125)](),this['_contentChangedHandler']=this['_instanceServiceContainer'][r(0x112)]['on'](d=>{const t=r;this['createTree'](c[t(0x135)]['rootDesignItem']);}),this['createTree'](c[r(0x135)]['rootDesignItem']);}['selectionChanged'](c){const u=o;this[u(0x149)](c[u(0x120)]['map'](d=>this[u(0x11f)][u(0x119)](d[u(0x148)])));}['_recomputeTree'](c,d){const v=o;this[v(0x11f)]=new Map(),this[v(0x140)][v(0x12d)]='';let e=document['createElement']('ul');return e[v(0x146)]['add'](v(0x10e)),this['_treeDiv'][v(0x144)](e),this[v(0x115)]=0x0,this[v(0x132)]=this['_getChildren'](c,e),this['_highlight'](d),this[v(0x132)];}['_makeButton'](c,d,e){const w=o;let f=document[w(0x130)]('button');f['dataset']['index']=e;let g=document[w(0x130)](w(0x11a));g['className']=w(0x111),g['textContent']=c;let h=document[w(0x130)](w(0x11a));return h[w(0x116)]='id',h[w(0x124)]=d,f['appendChild'](g),f[w(0x144)](h),f;}[o(0x128)](c,d){const x=o;let e=c['id']===x(0x113),f={'tag':e?'main-app':c[x(0x147)][x(0x114)](),'id':e?'':c['id']?'#'+c['id']:'','text':e?'':'\x22'+c[x(0x124)]+'\x22','ref':c,'index':this['_index']},g=document['createElement']('li'),h=this['_makeButton'](f['tag'],f['id'],f['index']);g['appendChild'](h),d['appendChild'](g),this['_mapElementTreeitem'][x(0x141)](f[x(0x12b)],h),this['_index']++;let j=[f],k=null;for(let l=0x0;l<c['children'][x(0x127)];l++){let m=c[x(0x13d)][l];if(m['localName']===x(0x139))continue;k==null&&(k=document[x(0x130)]('ul'),g[x(0x144)](k)),j=j['concat'](this[x(0x128)](m,k));}return j;}['_clickElement'](c){const y=o;let d=c['target'];d['localName']==='span'&&(d=d[y(0x12f)]),this['_selectTreeElements']([d]),this['_selectDesignerElement'](d);}[o(0x149)](c){const z=o;if(this['_previouslySelected']){for(let d of this[z(0x12e)])if(d)d[z(0x146)]['remove']('selected');}this['_previouslySelected']=c;if(c){for(let f of c)if(f)f[z(0x146)][z(0x131)](z(0x121));}}['_selectDesignerElement'](c){const A=o;let e=c[A(0x126)][A(0x142)],f=this['_items'][e][A(0x12b)],g=DesignItem['GetOrCreateDesignItem'](f,f,this[A(0x11d)]['serviceContainer'],this['_rootItem'][A(0x136)]);g[A(0x136)]['selectionService']['setSelectedElements']([g]);}[o(0x13a)](c){const B=o;if(!c)return;let d=this[B(0x123)][B(0x145)](B(0x122));if(d['length']!==this[B(0x132)]['length'])return;for(let e=0x0;e<this[B(0x132)]['length'];e++){if(this[B(0x132)][e]['ref']===c){this['_selectTreeElements']([d[e]]);return;}}}}customElements[o(0x10f)](o(0x13f),TreeView);
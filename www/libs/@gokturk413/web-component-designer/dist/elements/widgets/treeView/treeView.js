const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x10f))/0x1+-parseInt(n(0x11f))/0x2+-parseInt(n(0x121))/0x3*(parseInt(n(0x124))/0x4)+-parseInt(n(0xf2))/0x5+-parseInt(n(0xf8))/0x6*(-parseInt(n(0x110))/0x7)+parseInt(n(0x125))/0x8*(-parseInt(n(0x123))/0x9)+parseInt(n(0x122))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xda6fa));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';export class TreeView extends BaseCustomWebComponentLazyAppend{['_items'];['_index'];[o(0x10d)];['_treeDiv'];['_instanceServiceContainer'];['_selectionChangedHandler'];['_contentChangedHandler'];[o(0x128)];[o(0x10a)];static ['style']=css`
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
    `;constructor(){const p=o;super(),this[p(0x126)](),this['_treeDiv']=document[p(0xee)](p(0x103)),this['_treeDiv'][p(0x10b)]['userSelect']='none',this['shadowRoot'][p(0x112)](this['_treeDiv']),this['_treeDiv'][p(0xf1)](p(0xff),this[p(0xfe)]['bind'](this));}['createTree'](c){const q=o;this['_rootItem']=c;if(c!=null)this['_recomputeTree'](c[q(0x11c)],null);}set[o(0xf3)](c){const r=o;this[r(0x11e)]=c,this['_selectionChangedHandler']?.[r(0x10e)](),this[r(0x115)]=this['_instanceServiceContainer'][r(0x11a)]['onSelectionChanged']['on'](d=>{this['selectionChanged'](d);}),this['_contentChangedHandler']?.['dispose'](),this['_contentChangedHandler']=this[r(0x11e)]['onContentChanged']['on'](d=>{const s=r;this[s(0x102)](c[s(0x109)]['rootDesignItem']);}),this['createTree'](c['designerCanvas']['rootDesignItem']);}[o(0xf4)](c){const t=o;this[t(0x108)](c[t(0x104)]['map'](d=>this['_mapElementTreeitem'][t(0x120)](d['element'])));}[o(0x11d)](c,d){const u=o;this[u(0x128)]=new Map(),this['_treeDiv']['innerHTML']='';let e=document[u(0xee)]('ul');return e['classList'][u(0xf9)]('tree'),this['_treeDiv']['appendChild'](e),this[u(0x105)]=0x0,this['_items']=this['_getChildren'](c,e),this['_highlight'](d),this[u(0x11b)];}['_makeButton'](c,d,e){const v=o;let f=document[v(0xee)](v(0xf0));f['dataset'][v(0xf7)]=e;let g=document[v(0xee)](v(0x100));g[v(0x117)]='tag',g[v(0x101)]=c;let h=document[v(0xee)]('span');return h[v(0x117)]='id',h['textContent']=d,f[v(0x112)](g),f[v(0x112)](h),f;}['_getChildren'](c,d){const w=o;let e=c['id']===w(0x118),f={'tag':e?'main-app':c['tagName'][w(0x10c)](),'id':e?'':c['id']?'#'+c['id']:'','text':e?'':'\x22'+c[w(0x101)]+'\x22','ref':c,'index':this[w(0x105)]},g=document['createElement']('li'),h=this[w(0xfa)](f['tag'],f['id'],f['index']);g[w(0x112)](h),d[w(0x112)](g),this['_mapElementTreeitem'][w(0x107)](f[w(0x111)],h),this['_index']++;let j=[f],k=null;for(let l=0x0;l<c[w(0xf5)][w(0xfd)];l++){let m=c['children'][l];if(m['localName']==='style')continue;k==null&&(k=document['createElement']('ul'),g[w(0x112)](k)),j=j['concat'](this[w(0x113)](m,k));}return j;}[o(0xfe)](c){const x=o;let d=c[x(0x127)];d['localName']==='span'&&(d=d[x(0xef)]),this['_selectTreeElements']([d]),this[x(0x116)](d);}['_selectTreeElements'](c){const y=o;if(this['_previouslySelected']){for(let d of this['_previouslySelected'])if(d)d['classList']['remove']('selected');}this[y(0x10d)]=c;if(c){for(let f of c)if(f)f[y(0xfb)][y(0xf9)]('selected');}}[o(0x116)](c){const z=o;let e=c[z(0x129)][z(0xf7)],f=this['_items'][e][z(0x111)],g=DesignItem['GetOrCreateDesignItem'](f,f,this['_rootItem'][z(0x106)],this['_rootItem'][z(0xf3)]);g[z(0xf3)]['selectionService']['setSelectedElements']([g]);}['_highlight'](c){const A=o;if(!c)return;let d=this[A(0x119)][A(0xfc)](A(0xf0));if(d['length']!==this[A(0x11b)]['length'])return;for(let e=0x0;e<this['_items']['length'];e++){if(this['_items'][e][A(0x111)]===c){this[A(0x108)]([d[e]]);return;}}}}function b(c,d){c=c-0xee;const e=a();let f=e[c];return f;}customElements[o(0x114)](o(0xf6),TreeView);function a(){const B=['element','_recomputeTree','_instanceServiceContainer','2025672HrPadr','get','3boSUrB','9213010JNZdhZ','1557CZCxtx','3306484OwAQXJ','24928JoPoFV','_restoreCachedInititalValues','target','_mapElementTreeitem','dataset','createElement','parentElement','button','addEventListener','534980PCWZob','instanceServiceContainer','selectionChanged','children','node-projects-tree-view','index','1084926BjyyUW','add','_makeButton','classList','querySelectorAll','length','_clickElement','click','span','textContent','createTree','div','selectedElements','_index','serviceContainer','set','_selectTreeElements','designerCanvas','_rootItem','style','toLowerCase','_previouslySelected','dispose','1012366ysPiYC','56GfFVUD','ref','appendChild','_getChildren','define','_selectionChangedHandler','_selectDesignerElement','className','viewContainer','shadowRoot','selectionService','_items'];a=function(){return B;};return a();}
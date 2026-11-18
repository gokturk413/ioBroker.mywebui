const o=b;function a(){const C=['_mapElementTreeitem','querySelectorAll','19418tMlWxr','add','get','_highlight','154rkunqU','460biwGWA','_selectionChangedHandler','1142292JpDYpT','div','shadowRoot','_instanceServiceContainer','_treeDiv','className','selectionChanged','localName','69VMqsEs','set','_rootItem','20gjAqyB','tag','rootDesignItem','instanceServiceContainer','createTree','length','style','concat','dispose','_selectTreeElements','_items','_contentChangedHandler','addEventListener','designerCanvas','_previouslySelected','_selectDesignerElement','onContentChanged','209823DZeKnc','_recomputeTree','children','parentElement','remove','6hSmJzv','selectionService','button','appendChild','5057072IScwPP','bind','createElement','innerHTML','classList','4368798ffbINz','main-app','2104915DIWgPX','toLowerCase','_getChildren','_index','element','102807oZslRC'];a=function(){return C;};return a();}(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x123))/0x1*(parseInt(n(0x14f))/0x2)+-parseInt(n(0x137))/0x3*(parseInt(n(0x126))/0x4)+-parseInt(n(0x147))/0x5*(parseInt(n(0x13c))/0x6)+parseInt(n(0x145))/0x7+parseInt(n(0x140))/0x8+-parseInt(n(0x14c))/0x9*(-parseInt(n(0x154))/0xa)+parseInt(n(0x153))/0xb*(-parseInt(n(0x11b))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x55069));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';export class TreeView extends BaseCustomWebComponentLazyAppend{['_items'];['_index'];['_previouslySelected'];['_treeDiv'];[o(0x11e)];[o(0x155)];['_contentChangedHandler'];[o(0x14d)];[o(0x125)];static [o(0x12c)]=css`
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
    `;constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this['_treeDiv']=document['createElement'](p(0x11c)),this[p(0x11f)]['style']['userSelect']='none',this['shadowRoot'][p(0x13f)](this[p(0x11f)]),this[p(0x11f)][p(0x132)]('click',this['_clickElement'][p(0x141)](this));}['createTree'](c){const q=o;this[q(0x125)]=c;if(c!=null)this[q(0x138)](c[q(0x14b)],null);}set['instanceServiceContainer'](c){const r=o;this['_instanceServiceContainer']=c,this['_selectionChangedHandler']?.[r(0x12e)](),this['_selectionChangedHandler']=this[r(0x11e)][r(0x13d)]['onSelectionChanged']['on'](d=>{const s=r;this[s(0x121)](d);}),this[r(0x131)]?.['dispose'](),this['_contentChangedHandler']=this[r(0x11e)][r(0x136)]['on'](d=>{const t=r;this[t(0x12a)](c[t(0x133)]['rootDesignItem']);}),this['createTree'](c[r(0x133)][r(0x128)]);}['selectionChanged'](c){const u=o;this['_selectTreeElements'](c['selectedElements']['map'](d=>this[u(0x14d)][u(0x151)](d[u(0x14b)])));}[o(0x138)](c,d){const v=o;this[v(0x14d)]=new Map(),this['_treeDiv'][v(0x143)]='';let e=document[v(0x142)]('ul');return e[v(0x144)]['add']('tree'),this['_treeDiv'][v(0x13f)](e),this['_index']=0x0,this['_items']=this[v(0x149)](c,e),this[v(0x152)](d),this['_items'];}['_makeButton'](c,d,e){const w=o;let f=document['createElement'](w(0x13e));f['dataset']['index']=e;let g=document[w(0x142)]('span');g[w(0x120)]=w(0x127),g['textContent']=c;let h=document['createElement']('span');return h['className']='id',h['textContent']=d,f['appendChild'](g),f['appendChild'](h),f;}[o(0x149)](c,d){const x=o;let e=c['id']==='viewContainer',f={'tag':e?x(0x146):c['tagName'][x(0x148)](),'id':e?'':c['id']?'#'+c['id']:'','text':e?'':'\x22'+c['textContent']+'\x22','ref':c,'index':this['_index']},g=document[x(0x142)]('li'),h=this['_makeButton'](f[x(0x127)],f['id'],f['index']);g['appendChild'](h),d[x(0x13f)](g),this[x(0x14d)][x(0x124)](f['ref'],h),this[x(0x14a)]++;let j=[f],k=null;for(let l=0x0;l<c[x(0x139)][x(0x12b)];l++){let m=c[x(0x139)][l];if(m['localName']==='style')continue;k==null&&(k=document['createElement']('ul'),g[x(0x13f)](k)),j=j[x(0x12d)](this['_getChildren'](m,k));}return j;}['_clickElement'](c){const y=o;let d=c['target'];d[y(0x122)]==='span'&&(d=d[y(0x13a)]),this[y(0x12f)]([d]),this['_selectDesignerElement'](d);}['_selectTreeElements'](c){const z=o;if(this['_previouslySelected']){for(let d of this[z(0x134)])if(d)d[z(0x144)][z(0x13b)]('selected');}this['_previouslySelected']=c;if(c){for(let f of c)if(f)f[z(0x144)][z(0x150)]('selected');}}[o(0x135)](c){const A=o;let e=c['dataset']['index'],f=this[A(0x130)][e]['ref'],g=DesignItem['GetOrCreateDesignItem'](f,f,this[A(0x125)]['serviceContainer'],this['_rootItem'][A(0x129)]);g[A(0x129)]['selectionService']['setSelectedElements']([g]);}['_highlight'](c){const B=o;if(!c)return;let d=this[B(0x11d)][B(0x14e)](B(0x13e));if(d['length']!==this['_items']['length'])return;for(let e=0x0;e<this[B(0x130)]['length'];e++){if(this['_items'][e]['ref']===c){this[B(0x12f)]([d[e]]);return;}}}}function b(c,d){c=c-0x11b;const e=a();let f=e[c];return f;}customElements['define']('node-projects-tree-view',TreeView);
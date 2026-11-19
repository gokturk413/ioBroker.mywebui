function b(c,d){c=c-0x135;const e=a();let f=e[c];return f;}const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x135))/0x1+parseInt(n(0x148))/0x2*(parseInt(n(0x139))/0x3)+parseInt(n(0x138))/0x4+-parseInt(n(0x14c))/0x5+parseInt(n(0x136))/0x6*(-parseInt(n(0x155))/0x7)+-parseInt(n(0x14e))/0x8+parseInt(n(0x13b))/0x9*(parseInt(n(0x146))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8b1e6));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';function a(){const B=['_index','index','createTree','instanceServiceContainer','tag','length','setSelectedElements','_treeDiv','_selectionChangedHandler','parentElement','textContent','_instanceServiceContainer','1086092ehgHBF','96ZydUai','_items','922632SaWCfQ','27HdGgkZ','_getChildren','18sdUUpN','createElement','bind','add','designerCanvas','ref','_makeButton','toLowerCase','span','_contentChangedHandler','innerHTML','18474420doMerH','map','20898uisKLd','_selectTreeElements','_clickElement','remove','2500355TsJmWU','_recomputeTree','7475376MjlimF','tree','selectionService','shadowRoot','rootDesignItem','dispose','button','406511EnzUfO','style','viewContainer','concat','_restoreCachedInititalValues','_rootItem','none','set','_mapElementTreeitem','appendChild','target','classList','className','_selectDesignerElement'];a=function(){return B;};return a();}export class TreeView extends BaseCustomWebComponentLazyAppend{['_items'];['_index'];['_previouslySelected'];['_treeDiv'];[o(0x16e)];[o(0x16b)];['_contentChangedHandler'];['_mapElementTreeitem'];['_rootItem'];static [o(0x156)]=css`
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
    `;constructor(){const p=o;super(),this[p(0x159)](),this[p(0x16a)]=document[p(0x13c)]('div'),this[p(0x16a)]['style']['userSelect']=p(0x15b),this['shadowRoot'][p(0x15e)](this['_treeDiv']),this['_treeDiv']['addEventListener']('click',this[p(0x14a)][p(0x13d)](this));}[o(0x165)](c){const q=o;this[q(0x15a)]=c;if(c!=null)this[q(0x14d)](c['element'],null);}set[o(0x166)](c){const r=o;this['_instanceServiceContainer']=c,this['_selectionChangedHandler']?.[r(0x153)](),this['_selectionChangedHandler']=this[r(0x16e)][r(0x150)]['onSelectionChanged']['on'](d=>{this['selectionChanged'](d);}),this[r(0x144)]?.[r(0x153)](),this[r(0x144)]=this['_instanceServiceContainer']['onContentChanged']['on'](d=>{const s=r;this[s(0x165)](c[s(0x13f)][s(0x152)]);}),this[r(0x165)](c['designerCanvas']['rootDesignItem']);}['selectionChanged'](c){const t=o;this['_selectTreeElements'](c['selectedElements'][t(0x147)](d=>this[t(0x15d)]['get'](d['element'])));}[o(0x14d)](c,d){const u=o;this['_mapElementTreeitem']=new Map(),this['_treeDiv'][u(0x145)]='';let e=document['createElement']('ul');return e[u(0x160)][u(0x13e)](u(0x14f)),this['_treeDiv']['appendChild'](e),this[u(0x163)]=0x0,this[u(0x137)]=this['_getChildren'](c,e),this['_highlight'](d),this[u(0x137)];}[o(0x141)](c,d,e){const v=o;let f=document['createElement'](v(0x154));f['dataset'][v(0x164)]=e;let g=document['createElement'](v(0x143));g[v(0x161)]='tag',g['textContent']=c;let h=document['createElement']('span');return h[v(0x161)]='id',h['textContent']=d,f[v(0x15e)](g),f[v(0x15e)](h),f;}[o(0x13a)](c,d){const w=o;let e=c['id']===w(0x157),f={'tag':e?'main-app':c['tagName'][w(0x142)](),'id':e?'':c['id']?'#'+c['id']:'','text':e?'':'\x22'+c[w(0x16d)]+'\x22','ref':c,'index':this['_index']},g=document['createElement']('li'),h=this[w(0x141)](f[w(0x167)],f['id'],f['index']);g[w(0x15e)](h),d['appendChild'](g),this['_mapElementTreeitem'][w(0x15c)](f[w(0x140)],h),this['_index']++;let j=[f],k=null;for(let l=0x0;l<c['children'][w(0x168)];l++){let m=c['children'][l];if(m['localName']===w(0x156))continue;k==null&&(k=document[w(0x13c)]('ul'),g[w(0x15e)](k)),j=j[w(0x158)](this[w(0x13a)](m,k));}return j;}[o(0x14a)](c){const x=o;let d=c[x(0x15f)];d['localName']==='span'&&(d=d[x(0x16c)]),this['_selectTreeElements']([d]),this[x(0x162)](d);}[o(0x149)](c){const y=o;if(this['_previouslySelected']){for(let d of this['_previouslySelected'])if(d)d['classList'][y(0x14b)]('selected');}this['_previouslySelected']=c;if(c){for(let f of c)if(f)f[y(0x160)]['add']('selected');}}[o(0x162)](c){const z=o;let e=c['dataset'][z(0x164)],f=this[z(0x137)][e]['ref'],g=DesignItem['GetOrCreateDesignItem'](f,f,this[z(0x15a)]['serviceContainer'],this[z(0x15a)][z(0x166)]);g[z(0x166)][z(0x150)][z(0x169)]([g]);}['_highlight'](c){const A=o;if(!c)return;let d=this[A(0x151)]['querySelectorAll']('button');if(d['length']!==this['_items'][A(0x168)])return;for(let e=0x0;e<this['_items']['length'];e++){if(this['_items'][e][A(0x140)]===c){this['_selectTreeElements']([d[e]]);return;}}}}customElements['define']('node-projects-tree-view',TreeView);
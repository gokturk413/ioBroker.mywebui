function b(c,d){c=c-0x10a;const e=a();let f=e[c];return f;}const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x10a))/0x1+-parseInt(n(0x129))/0x2*(parseInt(n(0x12f))/0x3)+parseInt(n(0x135))/0x4+parseInt(n(0x144))/0x5+-parseInt(n(0x118))/0x6+parseInt(n(0x112))/0x7+-parseInt(n(0x124))/0x8*(parseInt(n(0x143))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x42e12));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';export class TreeView extends BaseCustomWebComponentLazyAppend{[o(0x128)];[o(0x13a)];[o(0x119)];[o(0x126)];[o(0x132)];['_selectionChangedHandler'];['_contentChangedHandler'];['_mapElementTreeitem'];['_rootItem'];static ['style']=css`
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
    `;constructor(){const p=o;super(),this[p(0x122)](),this['_treeDiv']=document[p(0x13b)]('div'),this[p(0x126)][p(0x138)]['userSelect']=p(0x13c),this['shadowRoot'][p(0x11f)](this[p(0x126)]),this['_treeDiv'][p(0x115)](p(0x141),this['_clickElement'][p(0x11d)](this));}['createTree'](c){const q=o;this[q(0x12a)]=c;if(c!=null)this[q(0x11a)](c['element'],null);}set['instanceServiceContainer'](c){const r=o;this[r(0x132)]=c,this[r(0x117)]?.['dispose'](),this['_selectionChangedHandler']=this['_instanceServiceContainer'][r(0x134)][r(0x11b)]['on'](d=>{this['selectionChanged'](d);}),this['_contentChangedHandler']?.[r(0x116)](),this['_contentChangedHandler']=this[r(0x132)]['onContentChanged']['on'](d=>{this['createTree'](c['designerCanvas']['rootDesignItem']);}),this['createTree'](c['designerCanvas'][r(0x12d)]);}['selectionChanged'](c){const s=o;this[s(0x142)](c['selectedElements'][s(0x11c)](d=>this[s(0x10f)][s(0x120)](d[s(0x131)])));}[o(0x11a)](c,d){const t=o;this['_mapElementTreeitem']=new Map(),this['_treeDiv']['innerHTML']='';let e=document['createElement']('ul');return e[t(0x10d)][t(0x13d)]('tree'),this['_treeDiv']['appendChild'](e),this['_index']=0x0,this[t(0x128)]=this[t(0x11e)](c,e),this[t(0x121)](d),this[t(0x128)];}['_makeButton'](c,d,e){const u=o;let f=document[u(0x13b)](u(0x13e));f['dataset'][u(0x111)]=e;let g=document['createElement'](u(0x133));g['className']=u(0x139),g[u(0x10e)]=c;let h=document['createElement']('span');return h[u(0x12c)]='id',h[u(0x10e)]=d,f[u(0x11f)](g),f[u(0x11f)](h),f;}['_getChildren'](c,d){const v=o;let e=c['id']===v(0x127),f={'tag':e?v(0x137):c['tagName'][v(0x123)](),'id':e?'':c['id']?'#'+c['id']:'','text':e?'':'\x22'+c[v(0x10e)]+'\x22','ref':c,'index':this[v(0x13a)]},g=document[v(0x13b)]('li'),h=this[v(0x113)](f[v(0x139)],f['id'],f['index']);g[v(0x11f)](h),d['appendChild'](g),this['_mapElementTreeitem']['set'](f[v(0x140)],h),this['_index']++;let j=[f],k=null;for(let l=0x0;l<c[v(0x130)]['length'];l++){let m=c[v(0x130)][l];if(m[v(0x10c)]===v(0x138))continue;k==null&&(k=document[v(0x13b)]('ul'),g[v(0x11f)](k)),j=j[v(0x136)](this['_getChildren'](m,k));}return j;}['_clickElement'](c){const w=o;let d=c[w(0x10b)];d['localName']==='span'&&(d=d['parentElement']),this[w(0x142)]([d]),this['_selectDesignerElement'](d);}['_selectTreeElements'](c){const x=o;if(this['_previouslySelected']){for(let d of this['_previouslySelected'])if(d)d['classList']['remove']('selected');}this['_previouslySelected']=c;if(c){for(let f of c)if(f)f[x(0x10d)]['add']('selected');}}['_selectDesignerElement'](c){const y=o;let e=c[y(0x12e)]['index'],f=this['_items'][e][y(0x140)],g=DesignItem[y(0x114)](f,f,this[y(0x12a)]['serviceContainer'],this['_rootItem']['instanceServiceContainer']);g['instanceServiceContainer']['selectionService']['setSelectedElements']([g]);}[o(0x121)](c){const z=o;if(!c)return;let d=this[z(0x110)][z(0x13f)](z(0x13e));if(d[z(0x125)]!==this['_items'][z(0x125)])return;for(let e=0x0;e<this[z(0x128)][z(0x125)];e++){if(this['_items'][e][z(0x140)]===c){this['_selectTreeElements']([d[e]]);return;}}}}customElements[o(0x12b)]('node-projects-tree-view',TreeView);function a(){const A=['localName','classList','textContent','_mapElementTreeitem','shadowRoot','index','139573fBGnAu','_makeButton','GetOrCreateDesignItem','addEventListener','dispose','_selectionChangedHandler','420954dHlbfO','_previouslySelected','_recomputeTree','onSelectionChanged','map','bind','_getChildren','appendChild','get','_highlight','_restoreCachedInititalValues','toLowerCase','151192cjTmFX','length','_treeDiv','viewContainer','_items','91450AOzdlJ','_rootItem','define','className','rootDesignItem','dataset','12ztibhD','children','element','_instanceServiceContainer','span','selectionService','840712imuAiG','concat','main-app','style','tag','_index','createElement','none','add','button','querySelectorAll','ref','click','_selectTreeElements','261wKApRv','1517370JlQmaf','541477JlbHRZ','target'];a=function(){return A;};return a();}
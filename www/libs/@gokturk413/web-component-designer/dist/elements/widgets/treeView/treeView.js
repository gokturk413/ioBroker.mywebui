function a(){const A=['define','1dAgwgO','children','_rootItem','index','onContentChanged','set','_makeButton','373882TwGCqM','selectionService','style','_restoreCachedInititalValues','653090GUJliF','15JmAYGE','main-app','_selectDesignerElement','_selectionChangedHandler','_treeDiv','ref','_clickElement','_items','localName','rootDesignItem','viewContainer','_selectTreeElements','createElement','button','remove','dispose','onSelectionChanged','_instanceServiceContainer','_getChildren','66RxnfdA','createTree','innerHTML','155656afEeFG','tagName','span','parentElement','querySelectorAll','_mapElementTreeitem','tree','_index','node-projects-tree-view','toLowerCase','1791504RpfSRj','className','designerCanvas','addEventListener','get','selected','tag','_recomputeTree','appendChild','83398ppjpXy','classList','bind','9rarjpt','3009980pCQwPv','target','element','map','none','dataset','GetOrCreateDesignItem','2559208liMMCt','length','instanceServiceContainer','textContent','add'];a=function(){return A;};return a();}const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x13f))/0x1*(parseInt(n(0x146))/0x2)+parseInt(n(0x14b))/0x3*(parseInt(n(0x161))/0x4)+-parseInt(n(0x14a))/0x5+-parseInt(n(0x15e))/0x6*(-parseInt(n(0x12e))/0x7)+parseInt(n(0x139))/0x8*(parseInt(n(0x131))/0x9)+-parseInt(n(0x132))/0xa+parseInt(n(0x125))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2e588));function b(c,d){c=c-0x122;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';export class TreeView extends BaseCustomWebComponentLazyAppend{[o(0x152)];[o(0x122)];['_previouslySelected'];['_treeDiv'];[o(0x15c)];['_selectionChangedHandler'];['_contentChangedHandler'];['_mapElementTreeitem'];[o(0x141)];static ['style']=css`
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
    `;constructor(){const p=o;super(),this[p(0x149)](),this['_treeDiv']=document['createElement']('div'),this[p(0x14f)][p(0x148)]['userSelect']=p(0x136),this['shadowRoot']['appendChild'](this['_treeDiv']),this['_treeDiv'][p(0x128)]('click',this[p(0x151)][p(0x130)](this));}[o(0x15f)](c){const q=o;this[q(0x141)]=c;if(c!=null)this['_recomputeTree'](c[q(0x134)],null);}set['instanceServiceContainer'](c){const r=o;this[r(0x15c)]=c,this[r(0x14e)]?.['dispose'](),this['_selectionChangedHandler']=this[r(0x15c)][r(0x147)][r(0x15b)]['on'](d=>{this['selectionChanged'](d);}),this['_contentChangedHandler']?.[r(0x15a)](),this['_contentChangedHandler']=this[r(0x15c)][r(0x143)]['on'](d=>{this['createTree'](c['designerCanvas']['rootDesignItem']);}),this['createTree'](c[r(0x127)][r(0x154)]);}['selectionChanged'](c){const s=o;this['_selectTreeElements'](c['selectedElements'][s(0x135)](d=>this['_mapElementTreeitem'][s(0x129)](d['element'])));}[o(0x12c)](c,d){const t=o;this[t(0x166)]=new Map(),this['_treeDiv'][t(0x160)]='';let e=document[t(0x157)]('ul');return e['classList']['add'](t(0x167)),this['_treeDiv'][t(0x12d)](e),this[t(0x122)]=0x0,this['_items']=this[t(0x15d)](c,e),this['_highlight'](d),this['_items'];}[o(0x145)](c,d,e){const u=o;let f=document[u(0x157)](u(0x158));f['dataset'][u(0x142)]=e;let g=document[u(0x157)](u(0x163));g['className']=u(0x12b),g['textContent']=c;let h=document['createElement']('span');return h[u(0x126)]='id',h['textContent']=d,f['appendChild'](g),f['appendChild'](h),f;}[o(0x15d)](c,d){const v=o;let e=c['id']===v(0x155),f={'tag':e?v(0x14c):c[v(0x162)][v(0x124)](),'id':e?'':c['id']?'#'+c['id']:'','text':e?'':'\x22'+c[v(0x13c)]+'\x22','ref':c,'index':this[v(0x122)]},g=document[v(0x157)]('li'),h=this['_makeButton'](f[v(0x12b)],f['id'],f['index']);g[v(0x12d)](h),d['appendChild'](g),this['_mapElementTreeitem'][v(0x144)](f['ref'],h),this['_index']++;let j=[f],k=null;for(let l=0x0;l<c[v(0x140)]['length'];l++){let m=c['children'][l];if(m['localName']==='style')continue;k==null&&(k=document['createElement']('ul'),g['appendChild'](k)),j=j['concat'](this['_getChildren'](m,k));}return j;}['_clickElement'](c){const w=o;let d=c[w(0x133)];d[w(0x153)]===w(0x163)&&(d=d[w(0x164)]),this[w(0x156)]([d]),this['_selectDesignerElement'](d);}[o(0x156)](c){const x=o;if(this['_previouslySelected']){for(let d of this['_previouslySelected'])if(d)d[x(0x12f)][x(0x159)](x(0x12a));}this['_previouslySelected']=c;if(c){for(let f of c)if(f)f[x(0x12f)][x(0x13d)]('selected');}}[o(0x14d)](c){const y=o;let e=c[y(0x137)][y(0x142)],f=this[y(0x152)][e]['ref'],g=DesignItem[y(0x138)](f,f,this[y(0x141)]['serviceContainer'],this['_rootItem'][y(0x13b)]);g[y(0x13b)][y(0x147)]['setSelectedElements']([g]);}['_highlight'](c){const z=o;if(!c)return;let d=this['shadowRoot'][z(0x165)](z(0x158));if(d[z(0x13a)]!==this[z(0x152)][z(0x13a)])return;for(let e=0x0;e<this['_items'][z(0x13a)];e++){if(this[z(0x152)][e][z(0x150)]===c){this['_selectTreeElements']([d[e]]);return;}}}}customElements[o(0x13e)](o(0x123),TreeView);
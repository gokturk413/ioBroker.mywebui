const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x1d9))/0x1+parseInt(n(0x1da))/0x2+-parseInt(n(0x1e2))/0x3*(parseInt(n(0x202))/0x4)+parseInt(n(0x1eb))/0x5+-parseInt(n(0x1e0))/0x6*(parseInt(n(0x1ea))/0x7)+-parseInt(n(0x1fe))/0x8+parseInt(n(0x1de))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x1dc25));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x1ca;const e=a();let f=e[c];return f;}import{DesignItem}from'../../item/DesignItem.js';function a(){const B=['_previouslySelected','tag','203YjVGNT','631420xdyggv','span','_items','instanceServiceContainer','classList','textContent','className','_getChildren','_selectTreeElements','set','click','dataset','dispose','get','_recomputeTree','selected','ref','_treeDiv','_mapElementTreeitem','1711344uABhox','_selectionChangedHandler','_clickElement','innerHTML','56odzEij','selectionChanged','style','addEventListener','_makeButton','_rootItem','shadowRoot','createElement','onSelectionChanged','GetOrCreateDesignItem','onContentChanged','children','_contentChangedHandler','_instanceServiceContainer','target','concat','27200jLqffa','80922YmEHOK','node-projects-tree-view','userSelect','tagName','2418921BnUdMe','_index','2502dodqDx','appendChild','12945UYhwwk','index','bind','tree','createTree','designerCanvas'];a=function(){return B;};return a();}export class TreeView extends BaseCustomWebComponentLazyAppend{[o(0x1ed)];['_index'];[o(0x1e8)];[o(0x1fc)];['_instanceServiceContainer'];[o(0x1ff)];['_contentChangedHandler'];[o(0x1fd)];[o(0x1ce)];static [o(0x1cb)]=css`
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
    `;constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this['_treeDiv']=document['createElement']('div'),this['_treeDiv']['style'][p(0x1dc)]='none',this['shadowRoot'][p(0x1e1)](this['_treeDiv']),this[p(0x1fc)][p(0x1cc)](p(0x1f5),this[p(0x200)][p(0x1e4)](this));}[o(0x1e6)](c){const q=o;this[q(0x1ce)]=c;if(c!=null)this[q(0x1f9)](c['element'],null);}set['instanceServiceContainer'](c){const r=o;this[r(0x1d6)]=c,this[r(0x1ff)]?.[r(0x1f7)](),this[r(0x1ff)]=this[r(0x1d6)]['selectionService'][r(0x1d1)]['on'](d=>{const s=r;this[s(0x1ca)](d);}),this['_contentChangedHandler']?.[r(0x1f7)](),this[r(0x1d5)]=this[r(0x1d6)][r(0x1d3)]['on'](d=>{this['createTree'](c['designerCanvas']['rootDesignItem']);}),this[r(0x1e6)](c[r(0x1e7)]['rootDesignItem']);}['selectionChanged'](c){const t=o;this[t(0x1f3)](c['selectedElements']['map'](d=>this[t(0x1fd)][t(0x1f8)](d['element'])));}['_recomputeTree'](c,d){const u=o;this['_mapElementTreeitem']=new Map(),this[u(0x1fc)][u(0x201)]='';let e=document[u(0x1d0)]('ul');return e[u(0x1ef)]['add'](u(0x1e5)),this[u(0x1fc)][u(0x1e1)](e),this[u(0x1df)]=0x0,this[u(0x1ed)]=this['_getChildren'](c,e),this['_highlight'](d),this['_items'];}['_makeButton'](c,d,e){const v=o;let f=document[v(0x1d0)]('button');f[v(0x1f6)][v(0x1e3)]=e;let g=document['createElement']('span');g['className']='tag',g['textContent']=c;let h=document['createElement'](v(0x1ec));return h[v(0x1f1)]='id',h['textContent']=d,f[v(0x1e1)](g),f[v(0x1e1)](h),f;}[o(0x1f2)](c,d){const w=o;let e=c['id']==='viewContainer',f={'tag':e?'main-app':c[w(0x1dd)]['toLowerCase'](),'id':e?'':c['id']?'#'+c['id']:'','text':e?'':'\x22'+c[w(0x1f0)]+'\x22','ref':c,'index':this[w(0x1df)]},g=document[w(0x1d0)]('li'),h=this[w(0x1cd)](f[w(0x1e9)],f['id'],f[w(0x1e3)]);g['appendChild'](h),d[w(0x1e1)](g),this[w(0x1fd)][w(0x1f4)](f['ref'],h),this[w(0x1df)]++;let j=[f],k=null;for(let l=0x0;l<c[w(0x1d4)]['length'];l++){let m=c[w(0x1d4)][l];if(m['localName']==='style')continue;k==null&&(k=document[w(0x1d0)]('ul'),g[w(0x1e1)](k)),j=j[w(0x1d8)](this['_getChildren'](m,k));}return j;}['_clickElement'](c){const x=o;let d=c[x(0x1d7)];d['localName']===x(0x1ec)&&(d=d['parentElement']),this[x(0x1f3)]([d]),this['_selectDesignerElement'](d);}[o(0x1f3)](c){const y=o;if(this[y(0x1e8)]){for(let d of this['_previouslySelected'])if(d)d['classList']['remove']('selected');}this['_previouslySelected']=c;if(c){for(let f of c)if(f)f['classList']['add'](y(0x1fa));}}['_selectDesignerElement'](c){const z=o;let e=c['dataset']['index'],f=this[z(0x1ed)][e][z(0x1fb)],g=DesignItem[z(0x1d2)](f,f,this[z(0x1ce)]['serviceContainer'],this['_rootItem'][z(0x1ee)]);g[z(0x1ee)]['selectionService']['setSelectedElements']([g]);}['_highlight'](c){const A=o;if(!c)return;let d=this[A(0x1cf)]['querySelectorAll']('button');if(d['length']!==this[A(0x1ed)]['length'])return;for(let e=0x0;e<this[A(0x1ed)]['length'];e++){if(this['_items'][e][A(0x1fb)]===c){this['_selectTreeElements']([d[e]]);return;}}}}customElements['define'](o(0x1db),TreeView);
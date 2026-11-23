function b(c,d){c=c-0x162;const e=a();let f=e[c];return f;}const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x191))/0x1+-parseInt(n(0x162))/0x2+parseInt(n(0x18e))/0x3*(parseInt(n(0x194))/0x4)+parseInt(n(0x16b))/0x5+-parseInt(n(0x16f))/0x6+-parseInt(n(0x18f))/0x7+parseInt(n(0x175))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd72f9));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';export class TreeView extends BaseCustomWebComponentLazyAppend{['_items'];[o(0x199)];[o(0x183)];[o(0x174)];[o(0x185)];['_selectionChangedHandler'];[o(0x17f)];[o(0x167)];['_rootItem'];static [o(0x16e)]=css`
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
    `;constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this[p(0x174)]=document[p(0x189)]('div'),this['_treeDiv'][p(0x16e)]['userSelect']=p(0x180),this['shadowRoot'][p(0x184)](this[p(0x174)]),this['_treeDiv'][p(0x197)]('click',this['_clickElement'][p(0x176)](this));}['createTree'](c){const q=o;this[q(0x181)]=c;if(c!=null)this['_recomputeTree'](c['element'],null);}set[o(0x172)](c){const r=o;this['_instanceServiceContainer']=c,this['_selectionChangedHandler']?.['dispose'](),this['_selectionChangedHandler']=this[r(0x185)][r(0x195)][r(0x192)]['on'](d=>{this['selectionChanged'](d);}),this['_contentChangedHandler']?.['dispose'](),this['_contentChangedHandler']=this['_instanceServiceContainer']['onContentChanged']['on'](d=>{const s=r;this['createTree'](c[s(0x17b)][s(0x179)]);}),this[r(0x190)](c['designerCanvas']['rootDesignItem']);}['selectionChanged'](c){const t=o;this[t(0x171)](c['selectedElements'][t(0x163)](d=>this['_mapElementTreeitem'][t(0x198)](d['element'])));}[o(0x18a)](c,d){const u=o;this[u(0x167)]=new Map(),this[u(0x174)][u(0x17e)]='';let e=document['createElement']('ul');return e['classList']['add'](u(0x164)),this['_treeDiv']['appendChild'](e),this['_index']=0x0,this[u(0x17d)]=this['_getChildren'](c,e),this['_highlight'](d),this['_items'];}[o(0x18c)](c,d,e){const v=o;let f=document['createElement']('button');f[v(0x18b)]['index']=e;let g=document[v(0x189)]('span');g['className']=v(0x165),g[v(0x18d)]=c;let h=document[v(0x189)]('span');return h[v(0x17a)]='id',h[v(0x18d)]=d,f[v(0x184)](g),f[v(0x184)](h),f;}['_getChildren'](c,d){const w=o;let e=c['id']==='viewContainer',f={'tag':e?w(0x19a):c['tagName'][w(0x193)](),'id':e?'':c['id']?'#'+c['id']:'','text':e?'':'\x22'+c[w(0x18d)]+'\x22','ref':c,'index':this[w(0x199)]},g=document[w(0x189)]('li'),h=this[w(0x18c)](f[w(0x165)],f['id'],f[w(0x170)]);g['appendChild'](h),d[w(0x184)](g),this[w(0x167)][w(0x16c)](f['ref'],h),this['_index']++;let j=[f],k=null;for(let l=0x0;l<c[w(0x182)][w(0x173)];l++){let m=c[w(0x182)][l];if(m['localName']==='style')continue;k==null&&(k=document['createElement']('ul'),g[w(0x184)](k)),j=j['concat'](this[w(0x17c)](m,k));}return j;}['_clickElement'](c){const x=o;let d=c[x(0x178)];d['localName']==='span'&&(d=d[x(0x187)]),this['_selectTreeElements']([d]),this[x(0x186)](d);}[o(0x171)](c){const y=o;if(this['_previouslySelected']){for(let d of this[y(0x183)])if(d)d[y(0x16d)]['remove']('selected');}this['_previouslySelected']=c;if(c){for(let f of c)if(f)f[y(0x16d)]['add'](y(0x16a));}}['_selectDesignerElement'](c){const z=o;let e=c[z(0x18b)]['index'],f=this['_items'][e][z(0x188)],g=DesignItem['GetOrCreateDesignItem'](f,f,this[z(0x181)][z(0x177)],this['_rootItem']['instanceServiceContainer']);g[z(0x172)][z(0x195)]['setSelectedElements']([g]);}[o(0x196)](c){const A=o;if(!c)return;let d=this[A(0x169)]['querySelectorAll']('button');if(d[A(0x173)]!==this['_items']['length'])return;for(let e=0x0;e<this['_items'][A(0x173)];e++){if(this['_items'][e][A(0x188)]===c){this[A(0x171)]([d[e]]);return;}}}}customElements[o(0x166)](o(0x168),TreeView);function a(){const B=['instanceServiceContainer','length','_treeDiv','25896888GzdbAZ','bind','serviceContainer','target','rootDesignItem','className','designerCanvas','_getChildren','_items','innerHTML','_contentChangedHandler','none','_rootItem','children','_previouslySelected','appendChild','_instanceServiceContainer','_selectDesignerElement','parentElement','ref','createElement','_recomputeTree','dataset','_makeButton','textContent','99678gQlBnr','7508578vCCRUE','createTree','1257470aIuVzA','onSelectionChanged','toLowerCase','76RYpOAP','selectionService','_highlight','addEventListener','get','_index','main-app','3081748NFJHjQ','map','tree','tag','define','_mapElementTreeitem','node-projects-tree-view','shadowRoot','selected','209905KoTOJW','set','classList','style','10037562eDQqWH','index','_selectTreeElements'];a=function(){return B;};return a();}
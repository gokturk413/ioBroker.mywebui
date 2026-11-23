const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0xf0))/0x1*(-parseInt(n(0xdd))/0x2)+-parseInt(n(0xce))/0x3+-parseInt(n(0xdb))/0x4+parseInt(n(0xcc))/0x5+parseInt(n(0xf1))/0x6+-parseInt(n(0xc5))/0x7*(-parseInt(n(0xef))/0x8)+-parseInt(n(0xea))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc1711));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0xc4;const e=a();let f=e[c];return f;}import{DesignItem}from'../../item/DesignItem.js';export class TreeView extends BaseCustomWebComponentLazyAppend{[o(0xc4)];[o(0xd7)];[o(0xe1)];['_treeDiv'];[o(0xed)];['_selectionChangedHandler'];['_contentChangedHandler'];[o(0xe7)];['_rootItem'];static ['style']=css`
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
    `;constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this['_treeDiv']=document[p(0xf8)](p(0xe0)),this[p(0xeb)][p(0xdc)][p(0xf7)]='none',this[p(0xee)][p(0xcf)](this['_treeDiv']),this['_treeDiv']['addEventListener']('click',this[p(0xe5)]['bind'](this));}[o(0xd9)](c){this['_rootItem']=c;if(c!=null)this['_recomputeTree'](c['element'],null);}set['instanceServiceContainer'](c){const q=o;this['_instanceServiceContainer']=c,this[q(0xd0)]?.[q(0xe9)](),this['_selectionChangedHandler']=this['_instanceServiceContainer']['selectionService']['onSelectionChanged']['on'](d=>{this['selectionChanged'](d);}),this[q(0xd4)]?.[q(0xe9)](),this['_contentChangedHandler']=this[q(0xed)]['onContentChanged']['on'](d=>{const r=q;this['createTree'](c['designerCanvas'][r(0xf6)]);}),this['createTree'](c['designerCanvas']['rootDesignItem']);}['selectionChanged'](c){const s=o;this[s(0xc6)](c['selectedElements']['map'](d=>this['_mapElementTreeitem']['get'](d['element'])));}[o(0xf9)](c,d){const t=o;this[t(0xe7)]=new Map(),this['_treeDiv']['innerHTML']='';let e=document[t(0xf8)]('ul');return e['classList']['add'](t(0xdf)),this['_treeDiv']['appendChild'](e),this[t(0xd7)]=0x0,this[t(0xc4)]=this['_getChildren'](c,e),this[t(0xe3)](d),this[t(0xc4)];}['_makeButton'](c,d,e){const u=o;let f=document['createElement']('button');f[u(0xec)][u(0xcd)]=e;let g=document['createElement']('span');g[u(0xd3)]=u(0xd2),g['textContent']=c;let h=document['createElement'](u(0xca));return h[u(0xd3)]='id',h[u(0xe4)]=d,f[u(0xcf)](g),f[u(0xcf)](h),f;}['_getChildren'](c,d){const v=o;let e=c['id']==='viewContainer',f={'tag':e?v(0xf2):c['tagName']['toLowerCase'](),'id':e?'':c['id']?'#'+c['id']:'','text':e?'':'\x22'+c[v(0xe4)]+'\x22','ref':c,'index':this['_index']},g=document[v(0xf8)]('li'),h=this[v(0xe6)](f[v(0xd2)],f['id'],f[v(0xcd)]);g[v(0xcf)](h),d['appendChild'](g),this['_mapElementTreeitem']['set'](f[v(0xf4)],h),this['_index']++;let j=[f],k=null;for(let l=0x0;l<c['children']['length'];l++){let m=c['children'][l];if(m['localName']===v(0xdc))continue;k==null&&(k=document[v(0xf8)]('ul'),g[v(0xcf)](k)),j=j[v(0xe2)](this[v(0xc7)](m,k));}return j;}[o(0xe5)](c){const w=o;let d=c['target'];d[w(0xd1)]==='span'&&(d=d['parentElement']),this['_selectTreeElements']([d]),this[w(0xcb)](d);}['_selectTreeElements'](c){const x=o;if(this[x(0xe1)]){for(let d of this[x(0xe1)])if(d)d[x(0xe8)][x(0xf3)]('selected');}this['_previouslySelected']=c;if(c){for(let f of c)if(f)f[x(0xe8)]['add']('selected');}}[o(0xcb)](c){const y=o;let e=c[y(0xec)][y(0xcd)],f=this[y(0xc4)][e][y(0xf4)],g=DesignItem[y(0xda)](f,f,this[y(0xd8)]['serviceContainer'],this[y(0xd8)][y(0xd6)]);g['instanceServiceContainer']['selectionService'][y(0xc9)]([g]);}[o(0xe3)](c){const z=o;if(!c)return;let d=this['shadowRoot'][z(0xde)]('button');if(d[z(0xf5)]!==this['_items'][z(0xf5)])return;for(let e=0x0;e<this[z(0xc4)][z(0xf5)];e++){if(this[z(0xc4)][e][z(0xf4)]===c){this[z(0xc6)]([d[e]]);return;}}}}function a(){const A=['_previouslySelected','concat','_highlight','textContent','_clickElement','_makeButton','_mapElementTreeitem','classList','dispose','13242438aUOdjc','_treeDiv','dataset','_instanceServiceContainer','shadowRoot','3464RKFstE','364IVlQrC','8049432wUtdVP','main-app','remove','ref','length','rootDesignItem','userSelect','createElement','_recomputeTree','_items','2534MmlTth','_selectTreeElements','_getChildren','node-projects-tree-view','setSelectedElements','span','_selectDesignerElement','7403180flyrUg','index','1231452icFQwJ','appendChild','_selectionChangedHandler','localName','tag','className','_contentChangedHandler','define','instanceServiceContainer','_index','_rootItem','createTree','GetOrCreateDesignItem','140108MhPfCh','style','1482SCVIUR','querySelectorAll','tree','div'];a=function(){return A;};return a();}customElements[o(0xd5)](o(0xc8),TreeView);
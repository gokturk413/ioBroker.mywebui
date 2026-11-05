const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x168))/0x1+-parseInt(n(0x192))/0x2*(parseInt(n(0x158))/0x3)+parseInt(n(0x15c))/0x4+parseInt(n(0x180))/0x5+-parseInt(n(0x165))/0x6+parseInt(n(0x176))/0x7*(parseInt(n(0x15f))/0x8)+-parseInt(n(0x162))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x1ca7f));function a(){const A=['selected','appendChild','index','selectedElements','main-app','style','_mapElementTreeitem','_selectTreeElements','ref','_restoreCachedInititalValues','81088eTwTqW','designerCanvas','_clickElement','classList','span','addEventListener','children','div','createElement','setSelectedElements','1128055IeUOEt','textContent','_instanceServiceContainer','_index','_selectionChangedHandler','tag','rootDesignItem','_treeDiv','_items','bind','_selectDesignerElement','userSelect','viewContainer','tree','_previouslySelected','element','dataset','parentElement','26854XITvHz','add','node-projects-tree-view','_rootItem','9onQEfj','createTree','localName','get','727752vuRnFG','length','_contentChangedHandler','152vLvQil','instanceServiceContainer','className','3346650ffJFlZ','selectionService','shadowRoot','651942PhdqGG','onContentChanged','remove','10518DNAMau','_makeButton','_highlight','_getChildren'];a=function(){return A;};return a();}import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';export class TreeView extends BaseCustomWebComponentLazyAppend{[o(0x188)];['_index'];[o(0x18e)];['_treeDiv'];['_instanceServiceContainer'];[o(0x184)];['_contentChangedHandler'];[o(0x172)];[o(0x195)];static ['style']=css`
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
    `;constructor(){const p=o;super(),this[p(0x175)](),this[p(0x187)]=document[p(0x17e)](p(0x17d)),this[p(0x187)][p(0x171)][p(0x18b)]='none',this['shadowRoot']['appendChild'](this[p(0x187)]),this[p(0x187)][p(0x17b)]('click',this['_clickElement'][p(0x189)](this));}['createTree'](c){this['_rootItem']=c;if(c!=null)this['_recomputeTree'](c['element'],null);}set['instanceServiceContainer'](c){const q=o;this[q(0x182)]=c,this['_selectionChangedHandler']?.['dispose'](),this['_selectionChangedHandler']=this['_instanceServiceContainer'][q(0x163)]['onSelectionChanged']['on'](d=>{this['selectionChanged'](d);}),this[q(0x15e)]?.['dispose'](),this[q(0x15e)]=this['_instanceServiceContainer'][q(0x166)]['on'](d=>{const r=q;this['createTree'](c[r(0x177)]['rootDesignItem']);}),this[q(0x159)](c[q(0x177)][q(0x186)]);}['selectionChanged'](c){const s=o;this['_selectTreeElements'](c[s(0x16f)]['map'](d=>this['_mapElementTreeitem'][s(0x15b)](d[s(0x18f)])));}['_recomputeTree'](c,d){const t=o;this['_mapElementTreeitem']=new Map(),this[t(0x187)]['innerHTML']='';let e=document['createElement']('ul');return e[t(0x179)]['add'](t(0x18d)),this['_treeDiv'][t(0x16d)](e),this[t(0x183)]=0x0,this['_items']=this[t(0x16b)](c,e),this[t(0x16a)](d),this[t(0x188)];}[o(0x169)](c,d,e){const u=o;let f=document['createElement']('button');f['dataset']['index']=e;let g=document[u(0x17e)]('span');g[u(0x161)]=u(0x185),g['textContent']=c;let h=document[u(0x17e)]('span');return h[u(0x161)]='id',h[u(0x181)]=d,f['appendChild'](g),f['appendChild'](h),f;}[o(0x16b)](c,d){const v=o;let e=c['id']===v(0x18c),f={'tag':e?v(0x170):c['tagName']['toLowerCase'](),'id':e?'':c['id']?'#'+c['id']:'','text':e?'':'\x22'+c[v(0x181)]+'\x22','ref':c,'index':this['_index']},g=document[v(0x17e)]('li'),h=this[v(0x169)](f['tag'],f['id'],f[v(0x16e)]);g['appendChild'](h),d['appendChild'](g),this['_mapElementTreeitem']['set'](f[v(0x174)],h),this[v(0x183)]++;let j=[f],k=null;for(let l=0x0;l<c['children']['length'];l++){let m=c[v(0x17c)][l];if(m['localName']==='style')continue;k==null&&(k=document['createElement']('ul'),g[v(0x16d)](k)),j=j['concat'](this[v(0x16b)](m,k));}return j;}[o(0x178)](c){const w=o;let d=c['target'];d[w(0x15a)]===w(0x17a)&&(d=d[w(0x191)]),this['_selectTreeElements']([d]),this[w(0x18a)](d);}[o(0x173)](c){const x=o;if(this['_previouslySelected']){for(let d of this[x(0x18e)])if(d)d[x(0x179)][x(0x167)]('selected');}this[x(0x18e)]=c;if(c){for(let f of c)if(f)f['classList'][x(0x193)](x(0x16c));}}[o(0x18a)](c){const y=o;let e=c[y(0x190)][y(0x16e)],f=this[y(0x188)][e][y(0x174)],g=DesignItem['GetOrCreateDesignItem'](f,f,this[y(0x195)]['serviceContainer'],this[y(0x195)][y(0x160)]);g[y(0x160)][y(0x163)][y(0x17f)]([g]);}['_highlight'](c){const z=o;if(!c)return;let d=this[z(0x164)]['querySelectorAll']('button');if(d['length']!==this['_items']['length'])return;for(let e=0x0;e<this['_items'][z(0x15d)];e++){if(this[z(0x188)][e][z(0x174)]===c){this[z(0x173)]([d[e]]);return;}}}}function b(c,d){c=c-0x158;const e=a();let f=e[c];return f;}customElements['define'](o(0x194),TreeView);
function b(c,d){c=c-0x15c;const e=a();let f=e[c];return f;}const o=b;function a(){const C=['1293897zPqsQb','textContent','length','_selectTreeElements','ref','tag','element','2654vWryFb','createTree','define','localName','_selectDesignerElement','310oICwSj','_mapElementTreeitem','createElement','shadowRoot','button','get','8874965lkIeGG','toLowerCase','4016MCbgup','1139544TdIGhA','_items','addEventListener','_highlight','1011nRkHNM','appendChild','remove','setSelectedElements','querySelectorAll','9778437UHtidn','_previouslySelected','766517FusPSX','dataset','_index','_rootItem','tagName','_restoreCachedInititalValues','_getChildren','bind','rootDesignItem','20937JVxsiY','onSelectionChanged','selectionChanged','className','add','classList','instanceServiceContainer','none','main-app','_contentChangedHandler','_treeDiv','4rZzvPK','GetOrCreateDesignItem','selectedElements','_selectionChangedHandler'];a=function(){return C;};return a();}(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x189))/0x1+-parseInt(n(0x170))/0x2*(-parseInt(n(0x182))/0x3)+parseInt(n(0x165))/0x4*(-parseInt(n(0x17b))/0x5)+-parseInt(n(0x17e))/0x6+parseInt(n(0x192))/0x7*(-parseInt(n(0x17d))/0x8)+parseInt(n(0x187))/0x9+parseInt(n(0x175))/0xa*(parseInt(n(0x169))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe740d));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';export class TreeView extends BaseCustomWebComponentLazyAppend{['_items'];['_index'];['_previouslySelected'];['_treeDiv'];['_instanceServiceContainer'];['_selectionChangedHandler'];['_contentChangedHandler'];['_mapElementTreeitem'];[o(0x18c)];static ['style']=css`
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
    `;constructor(){const p=o;super(),this[p(0x18e)](),this[p(0x164)]=document['createElement']('div'),this['_treeDiv']['style']['userSelect']=p(0x161),this[p(0x178)]['appendChild'](this[p(0x164)]),this[p(0x164)][p(0x180)]('click',this['_clickElement'][p(0x190)](this));}[o(0x171)](c){const q=o;this['_rootItem']=c;if(c!=null)this['_recomputeTree'](c[q(0x16f)],null);}set['instanceServiceContainer'](c){const r=o;this['_instanceServiceContainer']=c,this[r(0x168)]?.['dispose'](),this['_selectionChangedHandler']=this['_instanceServiceContainer']['selectionService'][r(0x193)]['on'](d=>{const s=r;this[s(0x15c)](d);}),this[r(0x163)]?.['dispose'](),this['_contentChangedHandler']=this['_instanceServiceContainer']['onContentChanged']['on'](d=>{const t=r;this[t(0x171)](c['designerCanvas'][t(0x191)]);}),this['createTree'](c['designerCanvas'][r(0x191)]);}[o(0x15c)](c){const u=o;this['_selectTreeElements'](c[u(0x167)]['map'](d=>this['_mapElementTreeitem'][u(0x17a)](d['element'])));}['_recomputeTree'](c,d){const v=o;this['_mapElementTreeitem']=new Map(),this['_treeDiv']['innerHTML']='';let e=document['createElement']('ul');return e[v(0x15f)][v(0x15e)]('tree'),this[v(0x164)]['appendChild'](e),this['_index']=0x0,this[v(0x17f)]=this[v(0x18f)](c,e),this['_highlight'](d),this['_items'];}['_makeButton'](c,d,e){const w=o;let f=document[w(0x177)]('button');f[w(0x18a)]['index']=e;let g=document['createElement']('span');g['className']=w(0x16e),g[w(0x16a)]=c;let h=document[w(0x177)]('span');return h[w(0x15d)]='id',h[w(0x16a)]=d,f[w(0x183)](g),f[w(0x183)](h),f;}['_getChildren'](c,d){const x=o;let e=c['id']==='viewContainer',f={'tag':e?x(0x162):c[x(0x18d)][x(0x17c)](),'id':e?'':c['id']?'#'+c['id']:'','text':e?'':'\x22'+c['textContent']+'\x22','ref':c,'index':this[x(0x18b)]},g=document[x(0x177)]('li'),h=this['_makeButton'](f['tag'],f['id'],f['index']);g[x(0x183)](h),d['appendChild'](g),this[x(0x176)]['set'](f[x(0x16d)],h),this[x(0x18b)]++;let j=[f],k=null;for(let l=0x0;l<c['children']['length'];l++){let m=c['children'][l];if(m['localName']==='style')continue;k==null&&(k=document[x(0x177)]('ul'),g[x(0x183)](k)),j=j['concat'](this['_getChildren'](m,k));}return j;}['_clickElement'](c){const y=o;let d=c['target'];d[y(0x173)]==='span'&&(d=d['parentElement']),this['_selectTreeElements']([d]),this[y(0x174)](d);}['_selectTreeElements'](c){const z=o;if(this['_previouslySelected']){for(let d of this[z(0x188)])if(d)d[z(0x15f)][z(0x184)]('selected');}this[z(0x188)]=c;if(c){for(let f of c)if(f)f[z(0x15f)][z(0x15e)]('selected');}}['_selectDesignerElement'](c){const A=o;let e=c['dataset']['index'],f=this['_items'][e][A(0x16d)],g=DesignItem[A(0x166)](f,f,this['_rootItem']['serviceContainer'],this[A(0x18c)][A(0x160)]);g[A(0x160)]['selectionService'][A(0x185)]([g]);}[o(0x181)](c){const B=o;if(!c)return;let d=this[B(0x178)][B(0x186)](B(0x179));if(d['length']!==this[B(0x17f)]['length'])return;for(let e=0x0;e<this[B(0x17f)][B(0x16b)];e++){if(this['_items'][e][B(0x16d)]===c){this[B(0x16c)]([d[e]]);return;}}}}customElements[o(0x172)]('node-projects-tree-view',TreeView);
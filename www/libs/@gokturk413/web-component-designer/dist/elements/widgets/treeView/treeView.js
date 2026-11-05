const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x123))/0x1*(parseInt(n(0x159))/0x2)+parseInt(n(0x160))/0x3*(parseInt(n(0x14d))/0x4)+parseInt(n(0x137))/0x5*(parseInt(n(0x133))/0x6)+parseInt(n(0x151))/0x7*(parseInt(n(0x134))/0x8)+parseInt(n(0x158))/0x9*(-parseInt(n(0x136))/0xa)+parseInt(n(0x147))/0xb+-parseInt(n(0x12d))/0xc*(parseInt(n(0x142))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x48050));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x11f;const e=a();let f=e[c];return f;}import{DesignItem}from'../../item/DesignItem.js';function a(){const B=['setSelectedElements','_index','node-projects-tree-view','viewContainer','_mapElementTreeitem','main-app','ref','2938FazuBr','tag','button','tagName','_clickElement','3145791APbJNM','selectedElements','dataset','createElement','onContentChanged','click','2828EqozKc','_restoreCachedInititalValues','_selectTreeElements','span','21SVeaXf','_makeButton','add','get','_contentChangedHandler','none','classList','30753rMdXjM','850IXZbfs','length','instanceServiceContainer','onSelectionChanged','define','selected','rootDesignItem','396QAhAjG','bind','_getChildren','_treeDiv','createTree','507iRZFXl','querySelectorAll','selectionService','localName','_rootItem','GetOrCreateDesignItem','_previouslySelected','appendChild','_selectionChangedHandler','designerCanvas','2448oUqGQQ','index','_items','div','shadowRoot','innerHTML','1206438plwAVj','101944AKOkXb','_selectDesignerElement','770BQFykt','10MvrFNI','textContent','style','target'];a=function(){return B;};return a();}export class TreeView extends BaseCustomWebComponentLazyAppend{[o(0x12f)];['_index'];[o(0x129)];['_treeDiv'];['_instanceServiceContainer'];['_selectionChangedHandler'];[o(0x155)];['_mapElementTreeitem'];[o(0x127)];static ['style']=css`
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
    `;constructor(){const p=o;super(),this[p(0x14e)](),this['_treeDiv']=document['createElement'](p(0x130)),this['_treeDiv'][p(0x139)]['userSelect']=p(0x156),this['shadowRoot'][p(0x12a)](this['_treeDiv']),this[p(0x121)]['addEventListener'](p(0x14c),this[p(0x146)][p(0x11f)](this));}['createTree'](c){const q=o;this[q(0x127)]=c;if(c!=null)this['_recomputeTree'](c['element'],null);}set[o(0x15b)](c){const r=o;this['_instanceServiceContainer']=c,this[r(0x12b)]?.['dispose'](),this['_selectionChangedHandler']=this['_instanceServiceContainer'][r(0x125)][r(0x15c)]['on'](d=>{this['selectionChanged'](d);}),this['_contentChangedHandler']?.['dispose'](),this['_contentChangedHandler']=this['_instanceServiceContainer'][r(0x14b)]['on'](d=>{const s=r;this['createTree'](c[s(0x12c)]['rootDesignItem']);}),this[r(0x122)](c['designerCanvas'][r(0x15f)]);}['selectionChanged'](c){const t=o;this[t(0x14f)](c[t(0x148)]['map'](d=>this['_mapElementTreeitem'][t(0x154)](d['element'])));}['_recomputeTree'](c,d){const u=o;this[u(0x13f)]=new Map(),this[u(0x121)][u(0x132)]='';let e=document[u(0x14a)]('ul');return e[u(0x157)]['add']('tree'),this['_treeDiv']['appendChild'](e),this[u(0x13c)]=0x0,this[u(0x12f)]=this[u(0x120)](c,e),this['_highlight'](d),this[u(0x12f)];}['_makeButton'](c,d,e){const v=o;let f=document[v(0x14a)](v(0x144));f[v(0x149)][v(0x12e)]=e;let g=document[v(0x14a)]('span');g['className']='tag',g['textContent']=c;let h=document['createElement']('span');return h['className']='id',h[v(0x138)]=d,f[v(0x12a)](g),f['appendChild'](h),f;}['_getChildren'](c,d){const w=o;let e=c['id']===w(0x13e),f={'tag':e?w(0x140):c[w(0x145)]['toLowerCase'](),'id':e?'':c['id']?'#'+c['id']:'','text':e?'':'\x22'+c['textContent']+'\x22','ref':c,'index':this['_index']},g=document[w(0x14a)]('li'),h=this[w(0x152)](f[w(0x143)],f['id'],f['index']);g[w(0x12a)](h),d[w(0x12a)](g),this[w(0x13f)]['set'](f['ref'],h),this['_index']++;let j=[f],k=null;for(let l=0x0;l<c['children'][w(0x15a)];l++){let m=c['children'][l];if(m[w(0x126)]===w(0x139))continue;k==null&&(k=document[w(0x14a)]('ul'),g['appendChild'](k)),j=j['concat'](this['_getChildren'](m,k));}return j;}['_clickElement'](c){const x=o;let d=c[x(0x13a)];d['localName']===x(0x150)&&(d=d['parentElement']),this['_selectTreeElements']([d]),this[x(0x135)](d);}['_selectTreeElements'](c){const y=o;if(this['_previouslySelected']){for(let d of this['_previouslySelected'])if(d)d['classList']['remove']('selected');}this[y(0x129)]=c;if(c){for(let f of c)if(f)f[y(0x157)][y(0x153)](y(0x15e));}}[o(0x135)](c){const z=o;let e=c['dataset']['index'],f=this[z(0x12f)][e][z(0x141)],g=DesignItem[z(0x128)](f,f,this['_rootItem']['serviceContainer'],this['_rootItem'][z(0x15b)]);g[z(0x15b)][z(0x125)][z(0x13b)]([g]);}['_highlight'](c){const A=o;if(!c)return;let d=this[A(0x131)][A(0x124)](A(0x144));if(d[A(0x15a)]!==this['_items']['length'])return;for(let e=0x0;e<this['_items']['length'];e++){if(this[A(0x12f)][e]['ref']===c){this[A(0x14f)]([d[e]]);return;}}}}customElements[o(0x15d)](o(0x13d),TreeView);
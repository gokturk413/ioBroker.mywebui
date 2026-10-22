function a(){const A=['length','173964AVsQEX','_index','_clickElement','selectionService','selectionChanged','localName','bind','remove','innerHTML','_getChildren','1478757DqMLvR','get','dispose','_contentChangedHandler','createTree','9636Sebqwz','rootDesignItem','addEventListener','map','textContent','div','define','appendChild','_selectTreeElements','_rootItem','24iOYrSs','99642SjMRSX','span','_recomputeTree','click','ref','designerCanvas','560JPwkkt','shadowRoot','3261550iDvtRy','GetOrCreateDesignItem','add','none','element','dataset','userSelect','_instanceServiceContainer','_mapElementTreeitem','_previouslySelected','_selectDesignerElement','429RqzpCR','4XvAwLg','instanceServiceContainer','864729gtDOrE','_treeDiv','createElement','children','style','index','_items','onContentChanged','4kLXzUt','querySelectorAll','17106hIcreF','classList','button'];a=function(){return A;};return a();}const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x198))/0x1*(parseInt(n(0x19a))/0x2)+-parseInt(n(0x1b8))/0x3*(parseInt(n(0x1cc))/0x4)+parseInt(n(0x1be))/0x5*(parseInt(n(0x1ad))/0x6)+parseInt(n(0x1a8))/0x7+parseInt(n(0x1b7))/0x8*(-parseInt(n(0x1ce))/0x9)+-parseInt(n(0x1c0))/0xa+parseInt(n(0x1cb))/0xb*(parseInt(n(0x19e))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x430fa));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';function b(c,d){c=c-0x191;const e=a();let f=e[c];return f;}export class TreeView extends BaseCustomWebComponentLazyAppend{[o(0x196)];['_index'];[o(0x1c9)];[o(0x191)];[o(0x1c7)];['_selectionChangedHandler'];[o(0x1ab)];[o(0x1c8)];[o(0x1b6)];static ['style']=css`
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
    `;constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this['_treeDiv']=document['createElement'](p(0x1b2)),this[p(0x191)][p(0x194)][p(0x1c6)]=p(0x1c3),this['shadowRoot']['appendChild'](this[p(0x191)]),this[p(0x191)][p(0x1af)](p(0x1bb),this[p(0x1a0)][p(0x1a4)](this));}['createTree'](c){const q=o;this[q(0x1b6)]=c;if(c!=null)this[q(0x1ba)](c[q(0x1c4)],null);}set[o(0x1cd)](c){const r=o;this[r(0x1c7)]=c,this['_selectionChangedHandler']?.['dispose'](),this['_selectionChangedHandler']=this['_instanceServiceContainer']['selectionService']['onSelectionChanged']['on'](d=>{this['selectionChanged'](d);}),this[r(0x1ab)]?.[r(0x1aa)](),this['_contentChangedHandler']=this['_instanceServiceContainer'][r(0x197)]['on'](d=>{this['createTree'](c['designerCanvas']['rootDesignItem']);}),this[r(0x1ac)](c[r(0x1bd)][r(0x1ae)]);}[o(0x1a2)](c){const s=o;this['_selectTreeElements'](c['selectedElements'][s(0x1b0)](d=>this[s(0x1c8)][s(0x1a9)](d['element'])));}[o(0x1ba)](c,d){const t=o;this[t(0x1c8)]=new Map(),this[t(0x191)][t(0x1a6)]='';let e=document['createElement']('ul');return e['classList'][t(0x1c2)]('tree'),this['_treeDiv'][t(0x1b4)](e),this[t(0x19f)]=0x0,this['_items']=this['_getChildren'](c,e),this['_highlight'](d),this[t(0x196)];}['_makeButton'](c,d,e){const u=o;let f=document[u(0x192)](u(0x19c));f[u(0x1c5)]['index']=e;let g=document['createElement'](u(0x1b9));g['className']='tag',g['textContent']=c;let h=document[u(0x192)](u(0x1b9));return h['className']='id',h[u(0x1b1)]=d,f[u(0x1b4)](g),f[u(0x1b4)](h),f;}[o(0x1a7)](c,d){const v=o;let e=c['id']==='viewContainer',f={'tag':e?'main-app':c['tagName']['toLowerCase'](),'id':e?'':c['id']?'#'+c['id']:'','text':e?'':'\x22'+c[v(0x1b1)]+'\x22','ref':c,'index':this[v(0x19f)]},g=document[v(0x192)]('li'),h=this['_makeButton'](f['tag'],f['id'],f[v(0x195)]);g[v(0x1b4)](h),d[v(0x1b4)](g),this[v(0x1c8)]['set'](f[v(0x1bc)],h),this['_index']++;let j=[f],k=null;for(let l=0x0;l<c[v(0x193)]['length'];l++){let m=c['children'][l];if(m[v(0x1a3)]==='style')continue;k==null&&(k=document['createElement']('ul'),g['appendChild'](k)),j=j['concat'](this['_getChildren'](m,k));}return j;}['_clickElement'](c){const w=o;let d=c['target'];d[w(0x1a3)]==='span'&&(d=d['parentElement']),this['_selectTreeElements']([d]),this[w(0x1ca)](d);}[o(0x1b5)](c){const x=o;if(this[x(0x1c9)]){for(let d of this[x(0x1c9)])if(d)d[x(0x19b)][x(0x1a5)]('selected');}this[x(0x1c9)]=c;if(c){for(let f of c)if(f)f['classList'][x(0x1c2)]('selected');}}[o(0x1ca)](c){const y=o;let e=c['dataset'][y(0x195)],f=this['_items'][e]['ref'],g=DesignItem[y(0x1c1)](f,f,this['_rootItem']['serviceContainer'],this['_rootItem']['instanceServiceContainer']);g[y(0x1cd)][y(0x1a1)]['setSelectedElements']([g]);}['_highlight'](c){const z=o;if(!c)return;let d=this[z(0x1bf)][z(0x199)](z(0x19c));if(d['length']!==this[z(0x196)][z(0x19d)])return;for(let e=0x0;e<this['_items'][z(0x19d)];e++){if(this['_items'][e][z(0x1bc)]===c){this[z(0x1b5)]([d[e]]);return;}}}}customElements[o(0x1b3)]('node-projects-tree-view',TreeView);
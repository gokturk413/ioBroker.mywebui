const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x116))/0x1*(-parseInt(n(0x120))/0x2)+-parseInt(n(0x103))/0x3+-parseInt(n(0x115))/0x4+parseInt(n(0x104))/0x5+parseInt(n(0x127))/0x6*(-parseInt(n(0x12b))/0x7)+parseInt(n(0xfb))/0x8+parseInt(n(0x10f))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6ae83));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';function a(){const B=['add','concat','onContentChanged','770895zVXvKL','_instanceServiceContainer','tree','_recomputeTree','createElement','innerHTML','1182496BhqUxf','2agHhaD','textContent','_selectionChangedHandler','tag','_selectDesignerElement','bind','dispose','addEventListener','appendChild','_rootItem','8594JUOpxR','_index','localName','define','dataset','selected','className','791004ZBkJtY','_clickElement','element','ref','7rgmeax','shadowRoot','rootDesignItem','userSelect','selectionChanged','instanceServiceContainer','click','_selectTreeElements','3528032YoDEiQ','createTree','_makeButton','style','index','_treeDiv','_mapElementTreeitem','_previouslySelected','1388196pkwRLg','3964140ynbVgC','classList','span','designerCanvas','main-app','length','_restoreCachedInititalValues','_items'];a=function(){return B;};return a();}import{DesignItem}from'../../item/DesignItem.js';export class TreeView extends BaseCustomWebComponentLazyAppend{[o(0x10b)];[o(0x121)];['_previouslySelected'];[o(0x100)];['_instanceServiceContainer'];[o(0x118)];['_contentChangedHandler'];[o(0x101)];['_rootItem'];static [o(0xfe)]=css`
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
    `;constructor(){const p=o;super(),this[p(0x10a)](),this['_treeDiv']=document[p(0x113)]('div'),this[p(0x100)]['style'][p(0x12e)]='none',this[p(0x12c)]['appendChild'](this[p(0x100)]),this['_treeDiv'][p(0x11d)](p(0xf9),this[p(0x128)][p(0x11b)](this));}['createTree'](c){const q=o;this[q(0x11f)]=c;if(c!=null)this['_recomputeTree'](c['element'],null);}set['instanceServiceContainer'](c){const r=o;this[r(0x110)]=c,this[r(0x118)]?.[r(0x11c)](),this[r(0x118)]=this['_instanceServiceContainer']['selectionService']['onSelectionChanged']['on'](d=>{this['selectionChanged'](d);}),this['_contentChangedHandler']?.[r(0x11c)](),this['_contentChangedHandler']=this[r(0x110)][r(0x10e)]['on'](d=>{const s=r;this['createTree'](c[s(0x107)]['rootDesignItem']);}),this[r(0xfc)](c['designerCanvas'][r(0x12d)]);}[o(0x12f)](c){const t=o;this[t(0xfa)](c['selectedElements']['map'](d=>this[t(0x101)]['get'](d[t(0x129)])));}[o(0x112)](c,d){const u=o;this['_mapElementTreeitem']=new Map(),this['_treeDiv'][u(0x114)]='';let e=document['createElement']('ul');return e['classList']['add'](u(0x111)),this[u(0x100)]['appendChild'](e),this['_index']=0x0,this[u(0x10b)]=this['_getChildren'](c,e),this['_highlight'](d),this['_items'];}[o(0xfd)](c,d,e){const v=o;let f=document['createElement']('button');f['dataset'][v(0xff)]=e;let g=document[v(0x113)]('span');g[v(0x126)]=v(0x119),g['textContent']=c;let h=document[v(0x113)](v(0x106));return h[v(0x126)]='id',h[v(0x117)]=d,f['appendChild'](g),f['appendChild'](h),f;}['_getChildren'](c,d){const w=o;let e=c['id']==='viewContainer',f={'tag':e?w(0x108):c['tagName']['toLowerCase'](),'id':e?'':c['id']?'#'+c['id']:'','text':e?'':'\x22'+c['textContent']+'\x22','ref':c,'index':this['_index']},g=document['createElement']('li'),h=this[w(0xfd)](f[w(0x119)],f['id'],f[w(0xff)]);g[w(0x11e)](h),d['appendChild'](g),this['_mapElementTreeitem']['set'](f[w(0x12a)],h),this[w(0x121)]++;let j=[f],k=null;for(let l=0x0;l<c['children'][w(0x109)];l++){let m=c['children'][l];if(m['localName']==='style')continue;k==null&&(k=document[w(0x113)]('ul'),g[w(0x11e)](k)),j=j[w(0x10d)](this['_getChildren'](m,k));}return j;}[o(0x128)](c){const x=o;let d=c['target'];d[x(0x122)]==='span'&&(d=d['parentElement']),this[x(0xfa)]([d]),this[x(0x11a)](d);}['_selectTreeElements'](c){const y=o;if(this[y(0x102)]){for(let d of this['_previouslySelected'])if(d)d[y(0x105)]['remove']('selected');}this['_previouslySelected']=c;if(c){for(let f of c)if(f)f[y(0x105)][y(0x10c)](y(0x125));}}['_selectDesignerElement'](c){const z=o;let e=c[z(0x124)][z(0xff)],f=this['_items'][e]['ref'],g=DesignItem['GetOrCreateDesignItem'](f,f,this['_rootItem']['serviceContainer'],this['_rootItem'][z(0xf8)]);g[z(0xf8)]['selectionService']['setSelectedElements']([g]);}['_highlight'](c){const A=o;if(!c)return;let d=this['shadowRoot']['querySelectorAll']('button');if(d[A(0x109)]!==this[A(0x10b)]['length'])return;for(let e=0x0;e<this[A(0x10b)]['length'];e++){if(this['_items'][e][A(0x12a)]===c){this[A(0xfa)]([d[e]]);return;}}}}function b(c,d){c=c-0xf8;const e=a();let f=e[c];return f;}customElements[o(0x123)]('node-projects-tree-view',TreeView);
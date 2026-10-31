const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0xe3))/0x1*(parseInt(n(0xd8))/0x2)+parseInt(n(0xe1))/0x3+parseInt(n(0xd6))/0x4+-parseInt(n(0xfe))/0x5+-parseInt(n(0xf7))/0x6*(parseInt(n(0x109))/0x7)+-parseInt(n(0xf9))/0x8+parseInt(n(0xfc))/0x9*(-parseInt(n(0x107))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa224d));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';function b(c,d){c=c-0xd5;const e=a();let f=e[c];return f;}export class TreeView extends BaseCustomWebComponentLazyAppend{[o(0xdc)];['_index'];['_previouslySelected'];['_treeDiv'];[o(0xfb)];['_selectionChangedHandler'];['_contentChangedHandler'];[o(0x105)];['_rootItem'];static [o(0x102)]=css`
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
    `;constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this[p(0xdb)]=document['createElement']('div'),this[p(0xdb)][p(0x102)]['userSelect']='none',this['shadowRoot']['appendChild'](this[p(0xdb)]),this[p(0xdb)]['addEventListener']('click',this['_clickElement']['bind'](this));}['createTree'](c){const q=o;this[q(0xfd)]=c;if(c!=null)this[q(0xfa)](c['element'],null);}set[o(0xf4)](c){const r=o;this[r(0xfb)]=c,this['_selectionChangedHandler']?.['dispose'](),this[r(0xec)]=this[r(0xfb)]['selectionService']['onSelectionChanged']['on'](d=>{const s=r;this[s(0x108)](d);}),this[r(0x103)]?.[r(0xed)](),this['_contentChangedHandler']=this['_instanceServiceContainer']['onContentChanged']['on'](d=>{const t=r;this['createTree'](c['designerCanvas'][t(0xde)]);}),this['createTree'](c[r(0xdd)]['rootDesignItem']);}['selectionChanged'](c){const u=o;this[u(0xf1)](c['selectedElements']['map'](d=>this['_mapElementTreeitem']['get'](d[u(0x104)])));}['_recomputeTree'](c,d){const v=o;this['_mapElementTreeitem']=new Map(),this['_treeDiv']['innerHTML']='';let e=document[v(0xf3)]('ul');return e['classList'][v(0x106)](v(0xf5)),this[v(0xdb)]['appendChild'](e),this['_index']=0x0,this['_items']=this['_getChildren'](c,e),this['_highlight'](d),this[v(0xdc)];}['_makeButton'](c,d,e){const w=o;let f=document[w(0xf3)](w(0xee));f[w(0xef)][w(0xf0)]=e;let g=document['createElement'](w(0xe7));g['className']='tag',g[w(0xf8)]=c;let h=document['createElement']('span');return h[w(0xff)]='id',h['textContent']=d,f[w(0xea)](g),f[w(0xea)](h),f;}[o(0xd9)](c,d){const x=o;let e=c['id']==='viewContainer',f={'tag':e?'main-app':c[x(0xe8)]['toLowerCase'](),'id':e?'':c['id']?'#'+c['id']:'','text':e?'':'\x22'+c[x(0xf8)]+'\x22','ref':c,'index':this[x(0xe6)]},g=document['createElement']('li'),h=this[x(0xe0)](f['tag'],f['id'],f[x(0xf0)]);g[x(0xea)](h),d['appendChild'](g),this[x(0x105)][x(0xda)](f['ref'],h),this[x(0xe6)]++;let j=[f],k=null;for(let l=0x0;l<c['children'][x(0xe2)];l++){let m=c['children'][l];if(m['localName']===x(0x102))continue;k==null&&(k=document[x(0xf3)]('ul'),g['appendChild'](k)),j=j[x(0xe5)](this[x(0xd9)](m,k));}return j;}['_clickElement'](c){const y=o;let d=c['target'];d[y(0xdf)]===y(0xe7)&&(d=d['parentElement']),this['_selectTreeElements']([d]),this[y(0x101)](d);}[o(0xf1)](c){const z=o;if(this['_previouslySelected']){for(let d of this[z(0xf2)])if(d)d['classList'][z(0xf6)](z(0xd5));}this[z(0xf2)]=c;if(c){for(let f of c)if(f)f['classList'][z(0x106)]('selected');}}[o(0x101)](c){const A=o;let e=c[A(0xef)]['index'],f=this[A(0xdc)][e][A(0x100)],g=DesignItem['GetOrCreateDesignItem'](f,f,this['_rootItem'][A(0xe9)],this[A(0xfd)]['instanceServiceContainer']);g[A(0xf4)][A(0xe4)]['setSelectedElements']([g]);}['_highlight'](c){const B=o;if(!c)return;let d=this[B(0xd7)]['querySelectorAll']('button');if(d['length']!==this['_items'][B(0xe2)])return;for(let e=0x0;e<this[B(0xdc)][B(0xe2)];e++){if(this['_items'][e][B(0x100)]===c){this[B(0xf1)]([d[e]]);return;}}}}function a(){const C=['selectionChanged','124572TlcmjS','selected','2352744iVJUOc','shadowRoot','2amhVWc','_getChildren','set','_treeDiv','_items','designerCanvas','rootDesignItem','localName','_makeButton','3042657jSDcuF','length','1298651DpLRlL','selectionService','concat','_index','span','tagName','serviceContainer','appendChild','define','_selectionChangedHandler','dispose','button','dataset','index','_selectTreeElements','_previouslySelected','createElement','instanceServiceContainer','tree','remove','162RpftUw','textContent','2456424kkXTup','_recomputeTree','_instanceServiceContainer','21618llGVzq','_rootItem','5000980MnQQQW','className','ref','_selectDesignerElement','style','_contentChangedHandler','element','_mapElementTreeitem','add','1870IiJEyl'];a=function(){return C;};return a();}customElements[o(0xeb)]('node-projects-tree-view',TreeView);
const o=b;function a(){const B=['instanceServiceContainer','_instanceServiceContainer','_rootItem','_index','onSelectionChanged','_selectTreeElements','_getChildren','innerHTML','userSelect','node-projects-tree-view','bind','style','createTree','ref','designerCanvas','rootDesignItem','1250ZxNRLX','parentElement','2082410AZKmiL','6249843XCWjiW','button','target','tree','main-app','map','_treeDiv','length','none','_clickElement','4862928oEliBT','className','shadowRoot','_items','86115YrYqoo','150KFKmoq','get','7401peFeKY','_selectDesignerElement','_makeButton','GetOrCreateDesignItem','selectionChanged','index','classList','_recomputeTree','820VyhfHT','textContent','createElement','appendChild','set','children','_selectionChangedHandler','_mapElementTreeitem','_highlight','tagName','localName','toLowerCase','7211428zBJGYF','187TaQFto','add','remove','element','541XvtGWb'];a=function(){return B;};return a();}function b(c,d){c=c-0xdb;const e=a();let f=e[c];return f;}(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0xea))/0x1*(-parseInt(n(0xfb))/0x2)+-parseInt(n(0x10f))/0x3*(parseInt(n(0x117))/0x4)+-parseInt(n(0x10c))/0x5*(parseInt(n(0x10d))/0x6)+-parseInt(n(0xe5))/0x7+-parseInt(n(0x108))/0x8+-parseInt(n(0xfe))/0x9+parseInt(n(0xfd))/0xa*(parseInt(n(0xe6))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x94c87));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';export class TreeView extends BaseCustomWebComponentLazyAppend{[o(0x10b)];['_index'];['_previouslySelected'];['_treeDiv'];['_instanceServiceContainer'];[o(0xdf)];['_contentChangedHandler'];['_mapElementTreeitem'];['_rootItem'];static [o(0xf6)]=css`
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
    `;constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this['_treeDiv']=document['createElement']('div'),this['_treeDiv']['style'][p(0xf3)]=p(0x106),this[p(0x10a)]['appendChild'](this['_treeDiv']),this['_treeDiv']['addEventListener']('click',this['_clickElement'][p(0xf5)](this));}['createTree'](c){const q=o;this['_rootItem']=c;if(c!=null)this[q(0x116)](c['element'],null);}set['instanceServiceContainer'](c){const r=o;this[r(0xec)]=c,this[r(0xdf)]?.['dispose'](),this[r(0xdf)]=this['_instanceServiceContainer']['selectionService'][r(0xef)]['on'](d=>{this['selectionChanged'](d);}),this['_contentChangedHandler']?.['dispose'](),this['_contentChangedHandler']=this['_instanceServiceContainer']['onContentChanged']['on'](d=>{const s=r;this['createTree'](c[s(0xf9)][s(0xfa)]);}),this[r(0xf7)](c[r(0xf9)][r(0xfa)]);}[o(0x113)](c){const t=o;this['_selectTreeElements'](c['selectedElements'][t(0x103)](d=>this['_mapElementTreeitem'][t(0x10e)](d[t(0xe9)])));}[o(0x116)](c,d){const u=o;this[u(0xe0)]=new Map(),this[u(0x104)][u(0xf2)]='';let e=document['createElement']('ul');return e[u(0x115)]['add'](u(0x101)),this[u(0x104)]['appendChild'](e),this['_index']=0x0,this[u(0x10b)]=this[u(0xf1)](c,e),this[u(0xe1)](d),this[u(0x10b)];}[o(0x111)](c,d,e){const v=o;let f=document['createElement'](v(0xff));f['dataset'][v(0x114)]=e;let g=document['createElement']('span');g[v(0x109)]='tag',g['textContent']=c;let h=document['createElement']('span');return h['className']='id',h[v(0x118)]=d,f['appendChild'](g),f[v(0xdc)](h),f;}[o(0xf1)](c,d){const w=o;let e=c['id']==='viewContainer',f={'tag':e?w(0x102):c[w(0xe2)][w(0xe4)](),'id':e?'':c['id']?'#'+c['id']:'','text':e?'':'\x22'+c['textContent']+'\x22','ref':c,'index':this[w(0xee)]},g=document[w(0xdb)]('li'),h=this['_makeButton'](f['tag'],f['id'],f[w(0x114)]);g[w(0xdc)](h),d['appendChild'](g),this['_mapElementTreeitem'][w(0xdd)](f['ref'],h),this['_index']++;let j=[f],k=null;for(let l=0x0;l<c[w(0xde)]['length'];l++){let m=c['children'][l];if(m['localName']==='style')continue;k==null&&(k=document['createElement']('ul'),g['appendChild'](k)),j=j['concat'](this[w(0xf1)](m,k));}return j;}[o(0x107)](c){const x=o;let d=c[x(0x100)];d[x(0xe3)]==='span'&&(d=d[x(0xfc)]),this['_selectTreeElements']([d]),this[x(0x110)](d);}[o(0xf0)](c){const y=o;if(this['_previouslySelected']){for(let d of this['_previouslySelected'])if(d)d[y(0x115)][y(0xe8)]('selected');}this['_previouslySelected']=c;if(c){for(let f of c)if(f)f['classList'][y(0xe7)]('selected');}}['_selectDesignerElement'](c){const z=o;let e=c['dataset'][z(0x114)],f=this['_items'][e][z(0xf8)],g=DesignItem[z(0x112)](f,f,this[z(0xed)]['serviceContainer'],this['_rootItem'][z(0xeb)]);g['instanceServiceContainer']['selectionService']['setSelectedElements']([g]);}['_highlight'](c){const A=o;if(!c)return;let d=this['shadowRoot']['querySelectorAll'](A(0xff));if(d[A(0x105)]!==this[A(0x10b)]['length'])return;for(let e=0x0;e<this['_items'][A(0x105)];e++){if(this['_items'][e][A(0xf8)]===c){this[A(0xf0)]([d[e]]);return;}}}}customElements['define'](o(0xf4),TreeView);
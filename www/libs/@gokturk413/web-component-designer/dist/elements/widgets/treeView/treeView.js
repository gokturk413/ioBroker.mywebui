const o=b;function b(c,d){c=c-0x1ed;const e=a();let f=e[c];return f;}(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x1f7))/0x1+-parseInt(n(0x20b))/0x2*(parseInt(n(0x1ee))/0x3)+parseInt(n(0x20e))/0x4+parseInt(n(0x214))/0x5+parseInt(n(0x20c))/0x6*(parseInt(n(0x1f0))/0x7)+-parseInt(n(0x1f5))/0x8+-parseInt(n(0x1f1))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa0bce));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';function a(){const B=['onSelectionChanged','_getChildren','_recomputeTree','GetOrCreateDesignItem','2206CwiDwG','51498CuqCmD','createElement','3820552NxBgmx','define','_instanceServiceContainer','_highlight','_treeDiv','_index','4595200mxbHaQ','add','div','createTree','main-app','style','_items','localName','remove','index','tagName','get','_selectDesignerElement','_previouslySelected','tag','2619ykthXj','innerHTML','777mgIpBE','9575523tJJjlK','classList','span','instanceServiceContainer','866848tvogMQ','selectionChanged','33287spPXjF','concat','bind','dispose','length','children','appendChild','textContent','serviceContainer','_selectTreeElements','_rootItem','designerCanvas','button','_mapElementTreeitem','_clickElement','onContentChanged'];a=function(){return B;};return a();}export class TreeView extends BaseCustomWebComponentLazyAppend{[o(0x21a)];[o(0x213)];[o(0x221)];[o(0x212)];[o(0x210)];['_selectionChangedHandler'];['_contentChangedHandler'];[o(0x204)];['_rootItem'];static ['style']=css`
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
    `;constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this['_treeDiv']=document['createElement'](p(0x216)),this[p(0x212)]['style']['userSelect']='none',this['shadowRoot']['appendChild'](this['_treeDiv']),this[p(0x212)]['addEventListener']('click',this[p(0x205)][p(0x1f9)](this));}['createTree'](c){const q=o;this[q(0x201)]=c;if(c!=null)this['_recomputeTree'](c['element'],null);}set[o(0x1f4)](c){const r=o;this['_instanceServiceContainer']=c,this['_selectionChangedHandler']?.['dispose'](),this['_selectionChangedHandler']=this['_instanceServiceContainer']['selectionService'][r(0x207)]['on'](d=>{this['selectionChanged'](d);}),this['_contentChangedHandler']?.[r(0x1fa)](),this['_contentChangedHandler']=this['_instanceServiceContainer'][r(0x206)]['on'](d=>{const s=r;this[s(0x217)](c['designerCanvas']['rootDesignItem']);}),this[r(0x217)](c[r(0x202)]['rootDesignItem']);}[o(0x1f6)](c){const t=o;this[t(0x200)](c['selectedElements']['map'](d=>this[t(0x204)][t(0x21f)](d['element'])));}[o(0x209)](c,d){const u=o;this['_mapElementTreeitem']=new Map(),this[u(0x212)][u(0x1ef)]='';let e=document[u(0x20d)]('ul');return e[u(0x1f2)][u(0x215)]('tree'),this[u(0x212)][u(0x1fd)](e),this['_index']=0x0,this[u(0x21a)]=this['_getChildren'](c,e),this[u(0x211)](d),this['_items'];}['_makeButton'](c,d,e){const v=o;let f=document[v(0x20d)](v(0x203));f['dataset'][v(0x21d)]=e;let g=document[v(0x20d)]('span');g['className']='tag',g['textContent']=c;let h=document['createElement']('span');return h['className']='id',h[v(0x1fe)]=d,f['appendChild'](g),f['appendChild'](h),f;}[o(0x208)](c,d){const w=o;let e=c['id']==='viewContainer',f={'tag':e?w(0x218):c[w(0x21e)]['toLowerCase'](),'id':e?'':c['id']?'#'+c['id']:'','text':e?'':'\x22'+c['textContent']+'\x22','ref':c,'index':this[w(0x213)]},g=document['createElement']('li'),h=this['_makeButton'](f[w(0x1ed)],f['id'],f[w(0x21d)]);g[w(0x1fd)](h),d[w(0x1fd)](g),this[w(0x204)]['set'](f['ref'],h),this['_index']++;let j=[f],k=null;for(let l=0x0;l<c[w(0x1fc)]['length'];l++){let m=c[w(0x1fc)][l];if(m[w(0x21b)]===w(0x219))continue;k==null&&(k=document[w(0x20d)]('ul'),g['appendChild'](k)),j=j[w(0x1f8)](this[w(0x208)](m,k));}return j;}['_clickElement'](c){const x=o;let d=c['target'];d['localName']===x(0x1f3)&&(d=d['parentElement']),this['_selectTreeElements']([d]),this['_selectDesignerElement'](d);}[o(0x200)](c){const y=o;if(this[y(0x221)]){for(let d of this[y(0x221)])if(d)d[y(0x1f2)][y(0x21c)]('selected');}this[y(0x221)]=c;if(c){for(let f of c)if(f)f[y(0x1f2)][y(0x215)]('selected');}}[o(0x220)](c){const z=o;let e=c['dataset']['index'],f=this['_items'][e]['ref'],g=DesignItem[z(0x20a)](f,f,this['_rootItem'][z(0x1ff)],this['_rootItem']['instanceServiceContainer']);g[z(0x1f4)]['selectionService']['setSelectedElements']([g]);}['_highlight'](c){const A=o;if(!c)return;let d=this['shadowRoot']['querySelectorAll'](A(0x203));if(d[A(0x1fb)]!==this[A(0x21a)]['length'])return;for(let e=0x0;e<this['_items']['length'];e++){if(this['_items'][e]['ref']===c){this[A(0x200)]([d[e]]);return;}}}}customElements[o(0x20f)]('node-projects-tree-view',TreeView);
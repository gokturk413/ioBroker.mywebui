const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0xc1))/0x1*(-parseInt(n(0xbc))/0x2)+-parseInt(n(0xe6))/0x3*(-parseInt(n(0xd0))/0x4)+-parseInt(n(0xca))/0x5+-parseInt(n(0xcb))/0x6*(-parseInt(n(0xbf))/0x7)+parseInt(n(0xe0))/0x8+parseInt(n(0xbb))/0x9*(-parseInt(n(0xc8))/0xa)+-parseInt(n(0xce))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5fd17));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';export class TreeView extends BaseCustomWebComponentLazyAppend{[o(0xe7)];[o(0xd6)];['_previouslySelected'];['_treeDiv'];['_instanceServiceContainer'];['_selectionChangedHandler'];[o(0xeb)];['_mapElementTreeitem'];['_rootItem'];static [o(0xda)]=css`
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
    `;constructor(){const p=o;super(),this[p(0xc3)](),this['_treeDiv']=document['createElement']('div'),this['_treeDiv'][p(0xda)]['userSelect']='none',this[p(0xc0)][p(0xcd)](this['_treeDiv']),this[p(0xd3)]['addEventListener'](p(0xe2),this[p(0xc5)][p(0xe4)](this));}['createTree'](c){const q=o;this[q(0xb3)]=c;if(c!=null)this['_recomputeTree'](c['element'],null);}set['instanceServiceContainer'](c){const r=o;this['_instanceServiceContainer']=c,this['_selectionChangedHandler']?.[r(0xc4)](),this['_selectionChangedHandler']=this['_instanceServiceContainer']['selectionService'][r(0xdf)]['on'](d=>{this['selectionChanged'](d);}),this['_contentChangedHandler']?.[r(0xc4)](),this['_contentChangedHandler']=this[r(0xba)][r(0xb6)]['on'](d=>{const s=r;this[s(0xc7)](c['designerCanvas'][s(0xea)]);}),this[r(0xc7)](c[r(0xe3)][r(0xea)]);}['selectionChanged'](c){const t=o;this[t(0xe8)](c[t(0xcf)]['map'](d=>this[t(0xd5)][t(0xd7)](d[t(0xec)])));}[o(0xc2)](c,d){const u=o;this[u(0xd5)]=new Map(),this['_treeDiv'][u(0xb5)]='';let e=document['createElement']('ul');return e[u(0xe9)]['add']('tree'),this['_treeDiv']['appendChild'](e),this['_index']=0x0,this['_items']=this['_getChildren'](c,e),this['_highlight'](d),this['_items'];}[o(0xd9)](c,d,e){const v=o;let f=document[v(0xc9)](v(0xb8));f['dataset'][v(0xcc)]=e;let g=document['createElement'](v(0xe1));g['className']='tag',g[v(0xc6)]=c;let h=document[v(0xc9)]('span');return h['className']='id',h['textContent']=d,f['appendChild'](g),f[v(0xcd)](h),f;}['_getChildren'](c,d){const w=o;let e=c['id']==='viewContainer',f={'tag':e?'main-app':c['tagName'][w(0xdc)](),'id':e?'':c['id']?'#'+c['id']:'','text':e?'':'\x22'+c[w(0xc6)]+'\x22','ref':c,'index':this['_index']},g=document['createElement']('li'),h=this['_makeButton'](f['tag'],f['id'],f[w(0xcc)]);g['appendChild'](h),d['appendChild'](g),this[w(0xd5)]['set'](f[w(0xbe)],h),this['_index']++;let j=[f],k=null;for(let l=0x0;l<c['children']['length'];l++){let m=c['children'][l];if(m[w(0xd4)]==='style')continue;k==null&&(k=document[w(0xc9)]('ul'),g['appendChild'](k)),j=j['concat'](this['_getChildren'](m,k));}return j;}['_clickElement'](c){const x=o;let d=c['target'];d[x(0xd4)]==='span'&&(d=d['parentElement']),this['_selectTreeElements']([d]),this['_selectDesignerElement'](d);}[o(0xe8)](c){const y=o;if(this[y(0xe5)]){for(let d of this[y(0xe5)])if(d)d[y(0xe9)][y(0xdb)](y(0xb2));}this['_previouslySelected']=c;if(c){for(let f of c)if(f)f['classList'][y(0xb7)](y(0xb2));}}['_selectDesignerElement'](c){const z=o;let e=c['dataset']['index'],f=this['_items'][e]['ref'],g=DesignItem[z(0xd2)](f,f,this[z(0xb3)][z(0xbd)],this['_rootItem'][z(0xd1)]);g[z(0xd1)][z(0xdd)][z(0xb9)]([g]);}['_highlight'](c){const A=o;if(!c)return;let d=this[A(0xc0)]['querySelectorAll']('button');if(d[A(0xb4)]!==this[A(0xe7)]['length'])return;for(let e=0x0;e<this[A(0xe7)][A(0xb4)];e++){if(this[A(0xe7)][e][A(0xbe)]===c){this[A(0xe8)]([d[e]]);return;}}}}function b(c,d){c=c-0xb2;const e=a();let f=e[c];return f;}customElements[o(0xde)](o(0xd8),TreeView);function a(){const B=['_makeButton','style','remove','toLowerCase','selectionService','define','onSelectionChanged','4211288InSgpy','span','click','designerCanvas','bind','_previouslySelected','1893855rXiOFw','_items','_selectTreeElements','classList','rootDesignItem','_contentChangedHandler','element','selected','_rootItem','length','innerHTML','onContentChanged','add','button','setSelectedElements','_instanceServiceContainer','9AZdkIt','682050tjCFSn','serviceContainer','ref','651ycbPJz','shadowRoot','1iMknZe','_recomputeTree','_restoreCachedInititalValues','dispose','_clickElement','textContent','createTree','1352970yvgiSF','createElement','306365rDBbLN','3246CLeBoQ','index','appendChild','3057373IbSImY','selectedElements','4OfqlOI','instanceServiceContainer','GetOrCreateDesignItem','_treeDiv','localName','_mapElementTreeitem','_index','get','node-projects-tree-view'];a=function(){return B;};return a();}
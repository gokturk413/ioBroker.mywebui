const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0xb9))/0x1*(-parseInt(n(0x84))/0x2)+-parseInt(n(0xc3))/0x3+-parseInt(n(0xa4))/0x4+-parseInt(n(0xbb))/0x5*(parseInt(n(0xb8))/0x6)+-parseInt(n(0xb0))/0x7*(parseInt(n(0xa2))/0x8)+parseInt(n(0x9c))/0x9+parseInt(n(0xb5))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xef0ac));function b(c,d){c=c-0x82;const e=a();let f=e[c];return f;}function a(){const B=['style','dataset','createElement','tag','designerCanvas','14906592oARMal','index','dispose','innerHTML','ref','click','632NTDDOa','bind','6074276irbGOs','serviceContainer','button','_index','_clickElement','toLowerCase','_treeDiv','_contentChangedHandler','userSelect','createTree','shadowRoot','instanceServiceContainer','169211HwaVuf','none','selected','onContentChanged','_highlight','44839620DFyArK','span','_getChildren','4926UokYwG','8693fHccQm','_rootItem','5310ClJSVX','_selectTreeElements','_selectionChangedHandler','_selectDesignerElement','_recomputeTree','set','children','tree','5608152CdGGcq','setSelectedElements','appendChild','className','232mRdHKe','length','add','selectionService','_items','parentElement','onSelectionChanged','textContent','rootDesignItem','map','node-projects-tree-view','target','classList','localName','_mapElementTreeitem','viewContainer','_instanceServiceContainer','_previouslySelected','GetOrCreateDesignItem'];a=function(){return B;};return a();}import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';export class TreeView extends BaseCustomWebComponentLazyAppend{['_items'];['_index'];['_previouslySelected'];[o(0xaa)];[o(0x94)];['_selectionChangedHandler'];[o(0xab)];['_mapElementTreeitem'];['_rootItem'];static [o(0x97)]=css`
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
    `;constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this[p(0xaa)]=document['createElement']('div'),this[p(0xaa)][p(0x97)][p(0xac)]=p(0xb1),this['shadowRoot']['appendChild'](this['_treeDiv']),this['_treeDiv']['addEventListener'](p(0xa1),this['_clickElement'][p(0xa3)](this));}[o(0xad)](c){const q=o;this[q(0xba)]=c;if(c!=null)this['_recomputeTree'](c['element'],null);}set[o(0xaf)](c){const r=o;this['_instanceServiceContainer']=c,this[r(0xbd)]?.[r(0x9e)](),this[r(0xbd)]=this[r(0x94)]['selectionService'][r(0x8a)]['on'](d=>{this['selectionChanged'](d);}),this[r(0xab)]?.[r(0x9e)](),this['_contentChangedHandler']=this['_instanceServiceContainer'][r(0xb3)]['on'](d=>{const s=r;this[s(0xad)](c[s(0x9b)][s(0x8c)]);}),this['createTree'](c[r(0x9b)]['rootDesignItem']);}['selectionChanged'](c){const t=o;this['_selectTreeElements'](c['selectedElements'][t(0x8d)](d=>this[t(0x92)]['get'](d['element'])));}[o(0xbf)](c,d){const u=o;this[u(0x92)]=new Map(),this[u(0xaa)][u(0x9f)]='';let e=document['createElement']('ul');return e[u(0x90)][u(0x86)](u(0xc2)),this[u(0xaa)]['appendChild'](e),this[u(0xa7)]=0x0,this[u(0x88)]=this[u(0xb7)](c,e),this[u(0xb4)](d),this[u(0x88)];}['_makeButton'](c,d,e){const v=o;let f=document['createElement'](v(0xa6));f[v(0x98)][v(0x9d)]=e;let g=document['createElement']('span');g[v(0x83)]=v(0x9a),g[v(0x8b)]=c;let h=document[v(0x99)]('span');return h['className']='id',h[v(0x8b)]=d,f['appendChild'](g),f[v(0x82)](h),f;}['_getChildren'](c,d){const w=o;let e=c['id']===w(0x93),f={'tag':e?'main-app':c['tagName'][w(0xa9)](),'id':e?'':c['id']?'#'+c['id']:'','text':e?'':'\x22'+c['textContent']+'\x22','ref':c,'index':this[w(0xa7)]},g=document['createElement']('li'),h=this['_makeButton'](f[w(0x9a)],f['id'],f[w(0x9d)]);g[w(0x82)](h),d[w(0x82)](g),this[w(0x92)][w(0xc0)](f[w(0xa0)],h),this[w(0xa7)]++;let j=[f],k=null;for(let l=0x0;l<c[w(0xc1)][w(0x85)];l++){let m=c['children'][l];if(m[w(0x91)]===w(0x97))continue;k==null&&(k=document[w(0x99)]('ul'),g[w(0x82)](k)),j=j['concat'](this['_getChildren'](m,k));}return j;}[o(0xa8)](c){const x=o;let d=c[x(0x8f)];d['localName']===x(0xb6)&&(d=d[x(0x89)]),this[x(0xbc)]([d]),this[x(0xbe)](d);}[o(0xbc)](c){const y=o;if(this[y(0x95)]){for(let d of this['_previouslySelected'])if(d)d[y(0x90)]['remove'](y(0xb2));}this[y(0x95)]=c;if(c){for(let f of c)if(f)f[y(0x90)]['add'](y(0xb2));}}[o(0xbe)](c){const z=o;let e=c['dataset'][z(0x9d)],f=this[z(0x88)][e][z(0xa0)],g=DesignItem[z(0x96)](f,f,this['_rootItem'][z(0xa5)],this[z(0xba)][z(0xaf)]);g[z(0xaf)][z(0x87)][z(0xc4)]([g]);}[o(0xb4)](c){const A=o;if(!c)return;let d=this[A(0xae)]['querySelectorAll'](A(0xa6));if(d['length']!==this['_items']['length'])return;for(let e=0x0;e<this[A(0x88)][A(0x85)];e++){if(this['_items'][e][A(0xa0)]===c){this['_selectTreeElements']([d[e]]);return;}}}}customElements['define'](o(0x8e),TreeView);
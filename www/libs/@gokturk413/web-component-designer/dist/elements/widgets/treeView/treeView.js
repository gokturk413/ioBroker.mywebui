const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x17b))/0x1+-parseInt(n(0x17c))/0x2*(-parseInt(n(0x16d))/0x3)+parseInt(n(0x151))/0x4+parseInt(n(0x16a))/0x5+parseInt(n(0x178))/0x6+-parseInt(n(0x158))/0x7+-parseInt(n(0x16b))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xee038));function b(c,d){c=c-0x14b;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';export class TreeView extends BaseCustomWebComponentLazyAppend{[o(0x15f)];[o(0x15b)];['_previouslySelected'];[o(0x175)];['_instanceServiceContainer'];[o(0x166)];['_contentChangedHandler'];[o(0x170)];[o(0x14c)];static ['style']=css`
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
    `;constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this[p(0x175)]=document[p(0x180)]('div'),this['_treeDiv'][p(0x163)][p(0x173)]='none',this[p(0x153)][p(0x183)](this['_treeDiv']),this[p(0x175)]['addEventListener'](p(0x15a),this['_clickElement'][p(0x15e)](this));}[o(0x14f)](c){const q=o;this[q(0x14c)]=c;if(c!=null)this[q(0x14d)](c['element'],null);}set['instanceServiceContainer'](c){const r=o;this[r(0x17a)]=c,this[r(0x166)]?.['dispose'](),this[r(0x166)]=this['_instanceServiceContainer']['selectionService']['onSelectionChanged']['on'](d=>{const s=r;this[s(0x17f)](d);}),this[r(0x14e)]?.['dispose'](),this[r(0x14e)]=this['_instanceServiceContainer'][r(0x162)]['on'](d=>{const t=r;this['createTree'](c['designerCanvas'][t(0x160)]);}),this['createTree'](c[r(0x171)][r(0x160)]);}['selectionChanged'](c){const u=o;this['_selectTreeElements'](c['selectedElements']['map'](d=>this[u(0x170)]['get'](d['element'])));}[o(0x14d)](c,d){const v=o;this['_mapElementTreeitem']=new Map(),this[v(0x175)]['innerHTML']='';let e=document[v(0x180)]('ul');return e['classList'][v(0x157)]('tree'),this[v(0x175)]['appendChild'](e),this[v(0x15b)]=0x0,this['_items']=this[v(0x17d)](c,e),this['_highlight'](d),this['_items'];}[o(0x169)](c,d,e){const w=o;let f=document[w(0x180)](w(0x174));f[w(0x176)][w(0x16f)]=e;let g=document[w(0x180)](w(0x165));g[w(0x179)]='tag',g[w(0x14b)]=c;let h=document[w(0x180)](w(0x165));return h[w(0x179)]='id',h[w(0x14b)]=d,f['appendChild'](g),f[w(0x183)](h),f;}[o(0x17d)](c,d){const x=o;let e=c['id']===x(0x16c),f={'tag':e?'main-app':c['tagName']['toLowerCase'](),'id':e?'':c['id']?'#'+c['id']:'','text':e?'':'\x22'+c[x(0x14b)]+'\x22','ref':c,'index':this[x(0x15b)]},g=document['createElement']('li'),h=this[x(0x169)](f[x(0x155)],f['id'],f['index']);g['appendChild'](h),d[x(0x183)](g),this['_mapElementTreeitem'][x(0x17e)](f[x(0x150)],h),this[x(0x15b)]++;let j=[f],k=null;for(let l=0x0;l<c[x(0x156)][x(0x152)];l++){let m=c['children'][l];if(m[x(0x15d)]==='style')continue;k==null&&(k=document[x(0x180)]('ul'),g[x(0x183)](k)),j=j[x(0x167)](this[x(0x17d)](m,k));}return j;}[o(0x168)](c){const y=o;let d=c[y(0x154)];d['localName']==='span'&&(d=d[y(0x172)]),this['_selectTreeElements']([d]),this[y(0x15c)](d);}['_selectTreeElements'](c){const z=o;if(this[z(0x164)]){for(let d of this['_previouslySelected'])if(d)d['classList'][z(0x181)]('selected');}this['_previouslySelected']=c;if(c){for(let f of c)if(f)f['classList'][z(0x157)]('selected');}}['_selectDesignerElement'](c){const A=o;let e=c[A(0x176)][A(0x16f)],f=this[A(0x15f)][e][A(0x150)],g=DesignItem[A(0x182)](f,f,this['_rootItem'][A(0x16e)],this[A(0x14c)][A(0x177)]);g[A(0x177)]['selectionService']['setSelectedElements']([g]);}['_highlight'](c){const B=o;if(!c)return;let d=this['shadowRoot'][B(0x159)](B(0x174));if(d[B(0x152)]!==this[B(0x15f)]['length'])return;for(let e=0x0;e<this[B(0x15f)][B(0x152)];e++){if(this['_items'][e][B(0x150)]===c){this['_selectTreeElements']([d[e]]);return;}}}}customElements[o(0x161)]('node-projects-tree-view',TreeView);function a(){const C=['_items','rootDesignItem','define','onContentChanged','style','_previouslySelected','span','_selectionChangedHandler','concat','_clickElement','_makeButton','5154835iWfMru','22600344tvtCYe','viewContainer','54vaFTAg','serviceContainer','index','_mapElementTreeitem','designerCanvas','parentElement','userSelect','button','_treeDiv','dataset','instanceServiceContainer','3142836NKRBqS','className','_instanceServiceContainer','834267cfsFJl','96284KKMNwF','_getChildren','set','selectionChanged','createElement','remove','GetOrCreateDesignItem','appendChild','textContent','_rootItem','_recomputeTree','_contentChangedHandler','createTree','ref','4623192lYaeCd','length','shadowRoot','target','tag','children','add','4280129IIXiIQ','querySelectorAll','click','_index','_selectDesignerElement','localName','bind'];a=function(){return C;};return a();}
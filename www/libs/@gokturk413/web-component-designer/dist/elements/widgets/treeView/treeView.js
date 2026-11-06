function a(){const B=['none','_instanceServiceContainer','_highlight','ref','designerCanvas','_rootItem','1IGzzNP','map','rootDesignItem','_getChildren','children','selected','button','addEventListener','2791794gNfAKI','span','classList','_selectionChangedHandler','2319KPwokc','shadowRoot','textContent','appendChild','_items','_mapElementTreeitem','onSelectionChanged','_selectTreeElements','createTree','_treeDiv','instanceServiceContainer','_makeButton','_previouslySelected','_index','index','dataset','selectionChanged','56637779lwwlxK','selectedElements','length','selectionService','10867464ZqYwrX','bind','_clickElement','1786149LePGuc','get','_contentChangedHandler','createElement','10lsBwAX','click','5MsJakz','GetOrCreateDesignItem','6806100nUQjxU','querySelectorAll','2136212ktmiMT','element','setSelectedElements','tag','4132VkPyib'];a=function(){return B;};return a();}const o=b;function b(c,d){c=c-0x6e;const e=a();let f=e[c];return f;}(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0xa2))/0x1*(-parseInt(n(0x97))/0x2)+-parseInt(n(0x75))/0x3*(parseInt(n(0x9b))/0x4)+-parseInt(n(0x93))/0x5*(parseInt(n(0x71))/0x6)+-parseInt(n(0x95))/0x7+-parseInt(n(0x8a))/0x8+parseInt(n(0x8d))/0x9+-parseInt(n(0x91))/0xa*(-parseInt(n(0x86))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa729f));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';export class TreeView extends BaseCustomWebComponentLazyAppend{['_items'];[o(0x82)];['_previouslySelected'];['_treeDiv'];['_instanceServiceContainer'];[o(0x74)];[o(0x8f)];[o(0x7a)];[o(0xa1)];static ['style']=css`
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
    `;constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this['_treeDiv']=document[p(0x90)]('div'),this['_treeDiv']['style']['userSelect']=p(0x9c),this[p(0x76)]['appendChild'](this[p(0x7e)]),this['_treeDiv'][p(0x70)](p(0x92),this[p(0x8c)][p(0x8b)](this));}['createTree'](c){this['_rootItem']=c;if(c!=null)this['_recomputeTree'](c['element'],null);}set[o(0x7f)](c){const q=o;this[q(0x9d)]=c,this['_selectionChangedHandler']?.['dispose'](),this[q(0x74)]=this['_instanceServiceContainer'][q(0x89)][q(0x7b)]['on'](d=>{const r=q;this[r(0x85)](d);}),this['_contentChangedHandler']?.['dispose'](),this[q(0x8f)]=this['_instanceServiceContainer']['onContentChanged']['on'](d=>{const s=q;this[s(0x7d)](c[s(0xa0)]['rootDesignItem']);}),this[q(0x7d)](c['designerCanvas'][q(0xa4)]);}[o(0x85)](c){const t=o;this['_selectTreeElements'](c[t(0x87)][t(0xa3)](d=>this[t(0x7a)][t(0x8e)](d[t(0x98)])));}['_recomputeTree'](c,d){const u=o;this['_mapElementTreeitem']=new Map(),this[u(0x7e)]['innerHTML']='';let e=document[u(0x90)]('ul');return e['classList']['add']('tree'),this[u(0x7e)]['appendChild'](e),this[u(0x82)]=0x0,this[u(0x79)]=this[u(0xa5)](c,e),this['_highlight'](d),this[u(0x79)];}[o(0x80)](c,d,e){const v=o;let f=document['createElement'](v(0x6f));f[v(0x84)]['index']=e;let g=document[v(0x90)]('span');g['className']=v(0x9a),g[v(0x77)]=c;let h=document['createElement'](v(0x72));return h['className']='id',h[v(0x77)]=d,f['appendChild'](g),f[v(0x78)](h),f;}['_getChildren'](c,d){const w=o;let e=c['id']==='viewContainer',f={'tag':e?'main-app':c['tagName']['toLowerCase'](),'id':e?'':c['id']?'#'+c['id']:'','text':e?'':'\x22'+c['textContent']+'\x22','ref':c,'index':this['_index']},g=document[w(0x90)]('li'),h=this[w(0x80)](f['tag'],f['id'],f['index']);g[w(0x78)](h),d['appendChild'](g),this[w(0x7a)]['set'](f[w(0x9f)],h),this[w(0x82)]++;let j=[f],k=null;for(let l=0x0;l<c[w(0xa6)][w(0x88)];l++){let m=c['children'][l];if(m['localName']==='style')continue;k==null&&(k=document['createElement']('ul'),g[w(0x78)](k)),j=j['concat'](this[w(0xa5)](m,k));}return j;}['_clickElement'](c){const x=o;let d=c['target'];d['localName']===x(0x72)&&(d=d['parentElement']),this[x(0x7c)]([d]),this['_selectDesignerElement'](d);}['_selectTreeElements'](c){const y=o;if(this['_previouslySelected']){for(let d of this[y(0x81)])if(d)d[y(0x73)]['remove'](y(0x6e));}this['_previouslySelected']=c;if(c){for(let f of c)if(f)f[y(0x73)]['add'](y(0x6e));}}['_selectDesignerElement'](c){const z=o;let e=c[z(0x84)][z(0x83)],f=this['_items'][e]['ref'],g=DesignItem[z(0x94)](f,f,this['_rootItem']['serviceContainer'],this['_rootItem'][z(0x7f)]);g['instanceServiceContainer'][z(0x89)][z(0x99)]([g]);}[o(0x9e)](c){const A=o;if(!c)return;let d=this['shadowRoot'][A(0x96)](A(0x6f));if(d[A(0x88)]!==this[A(0x79)][A(0x88)])return;for(let e=0x0;e<this[A(0x79)]['length'];e++){if(this[A(0x79)][e]['ref']===c){this[A(0x7c)]([d[e]]);return;}}}}customElements['define']('node-projects-tree-view',TreeView);
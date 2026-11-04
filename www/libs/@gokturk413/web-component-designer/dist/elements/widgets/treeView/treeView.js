function b(c,d){c=c-0x6b;const e=a();let f=e[c];return f;}const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x82))/0x1*(-parseInt(n(0x7c))/0x2)+parseInt(n(0x6c))/0x3+-parseInt(n(0x79))/0x4*(-parseInt(n(0x97))/0x5)+-parseInt(n(0x95))/0x6+-parseInt(n(0xa8))/0x7+-parseInt(n(0x9c))/0x8+parseInt(n(0x73))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb1dc0));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';import{DesignItem}from'../../item/DesignItem.js';export class TreeView extends BaseCustomWebComponentLazyAppend{['_items'];['_index'];[o(0x8f)];['_treeDiv'];['_instanceServiceContainer'];[o(0x87)];['_contentChangedHandler'];['_mapElementTreeitem'];[o(0x90)];static [o(0x70)]=css`
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
    `;constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this[p(0x98)]=document[p(0x8c)]('div'),this[p(0x98)][p(0x70)]['userSelect']=p(0x71),this[p(0xa4)]['appendChild'](this[p(0x98)]),this['_treeDiv'][p(0x7b)]('click',this[p(0xa5)]['bind'](this));}['createTree'](c){const q=o;this['_rootItem']=c;if(c!=null)this[q(0x6d)](c[q(0x7a)],null);}set['instanceServiceContainer'](c){const r=o;this[r(0x86)]=c,this['_selectionChangedHandler']?.[r(0xa1)](),this[r(0x87)]=this[r(0x86)]['selectionService']['onSelectionChanged']['on'](d=>{this['selectionChanged'](d);}),this['_contentChangedHandler']?.['dispose'](),this['_contentChangedHandler']=this['_instanceServiceContainer'][r(0x99)]['on'](d=>{const s=r;this['createTree'](c[s(0x8a)]['rootDesignItem']);}),this[r(0x81)](c[r(0x8a)][r(0x89)]);}['selectionChanged'](c){const t=o;this[t(0xa7)](c[t(0x92)][t(0x94)](d=>this[t(0x93)][t(0x7f)](d['element'])));}[o(0x6d)](c,d){const u=o;this[u(0x93)]=new Map(),this['_treeDiv'][u(0x7e)]='';let e=document['createElement']('ul');return e['classList']['add']('tree'),this['_treeDiv'][u(0x76)](e),this['_index']=0x0,this[u(0x85)]=this[u(0x8e)](c,e),this[u(0x7d)](d),this[u(0x85)];}['_makeButton'](c,d,e){const v=o;let f=document['createElement'](v(0x8d));f[v(0x9b)][v(0x6e)]=e;let g=document['createElement'](v(0x75));g['className']='tag',g[v(0x78)]=c;let h=document[v(0x8c)](v(0x75));return h[v(0x9a)]='id',h['textContent']=d,f['appendChild'](g),f[v(0x76)](h),f;}['_getChildren'](c,d){const w=o;let e=c['id']===w(0x6b),f={'tag':e?w(0x96):c[w(0x88)][w(0x80)](),'id':e?'':c['id']?'#'+c['id']:'','text':e?'':'\x22'+c['textContent']+'\x22','ref':c,'index':this['_index']},g=document[w(0x8c)]('li'),h=this[w(0x72)](f['tag'],f['id'],f['index']);g[w(0x76)](h),d['appendChild'](g),this['_mapElementTreeitem']['set'](f[w(0xa3)],h),this['_index']++;let j=[f],k=null;for(let l=0x0;l<c['children'][w(0x6f)];l++){let m=c[w(0x9f)][l];if(m[w(0x83)]==='style')continue;k==null&&(k=document['createElement']('ul'),g['appendChild'](k)),j=j[w(0x74)](this['_getChildren'](m,k));}return j;}[o(0xa5)](c){const x=o;let d=c[x(0x84)];d['localName']===x(0x75)&&(d=d['parentElement']),this['_selectTreeElements']([d]),this['_selectDesignerElement'](d);}['_selectTreeElements'](c){const y=o;if(this[y(0x8f)]){for(let d of this['_previouslySelected'])if(d)d['classList'][y(0x9d)](y(0xa6));}this[y(0x8f)]=c;if(c){for(let f of c)if(f)f['classList'][y(0x9e)](y(0xa6));}}[o(0xa0)](c){const z=o;let e=c[z(0x9b)]['index'],f=this[z(0x85)][e]['ref'],g=DesignItem['GetOrCreateDesignItem'](f,f,this['_rootItem']['serviceContainer'],this[z(0x90)]['instanceServiceContainer']);g[z(0x8b)][z(0x77)][z(0xa2)]([g]);}[o(0x7d)](c){const A=o;if(!c)return;let d=this['shadowRoot'][A(0x91)](A(0x8d));if(d[A(0x6f)]!==this[A(0x85)][A(0x6f)])return;for(let e=0x0;e<this[A(0x85)][A(0x6f)];e++){if(this['_items'][e]['ref']===c){this['_selectTreeElements']([d[e]]);return;}}}}customElements['define']('node-projects-tree-view',TreeView);function a(){const B=['_selectTreeElements','7348152MKrCqI','viewContainer','1284654VonTfH','_recomputeTree','index','length','style','none','_makeButton','32455044IgdGmp','concat','span','appendChild','selectionService','textContent','439748bldncz','element','addEventListener','41628HlunZJ','_highlight','innerHTML','get','toLowerCase','createTree','53TzpReK','localName','target','_items','_instanceServiceContainer','_selectionChangedHandler','tagName','rootDesignItem','designerCanvas','instanceServiceContainer','createElement','button','_getChildren','_previouslySelected','_rootItem','querySelectorAll','selectedElements','_mapElementTreeitem','map','2218740eLmbjb','main-app','25Zaegcj','_treeDiv','onContentChanged','className','dataset','10662712wANWtk','remove','add','children','_selectDesignerElement','dispose','setSelectedElements','ref','shadowRoot','_clickElement','selected'];a=function(){return B;};return a();}
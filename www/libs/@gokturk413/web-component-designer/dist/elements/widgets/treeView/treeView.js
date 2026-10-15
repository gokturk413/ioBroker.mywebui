const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x21f))/0x1*(-parseInt(n(0x21e))/0x2)+-parseInt(n(0x1fd))/0x3*(-parseInt(n(0x1f8))/0x4)+parseInt(n(0x211))/0x5*(-parseInt(n(0x202))/0x6)+-parseInt(n(0x22c))/0x7+-parseInt(n(0x212))/0x8+-parseInt(n(0x227))/0x9*(-parseInt(n(0x1fe))/0xa)+parseInt(n(0x20a))/0xb*(parseInt(n(0x20c))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8f565));import{BaseCustomWebComponentLazyAppend,css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x1f4;const e=a();let f=e[c];return f;}import{DesignItem}from'../../item/DesignItem.js';export class TreeView extends BaseCustomWebComponentLazyAppend{[o(0x201)];['_index'];['_previouslySelected'];[o(0x1f9)];['_instanceServiceContainer'];[o(0x22d)];[o(0x22e)];['_mapElementTreeitem'];[o(0x219)];static ['style']=css`
    :host {
      --horz-margin: 20px;
      --vert-margin: 0px;
      --horz-shift: calc(var(--horz-margin) / 2); /* typically */
      --vert-shift: 12px;

      display: inline-block;
      position: relative;
      width: 100%;
      height: 100%;
      background: var(--dark-grey, #232733);
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
      background: var(--dark-grey, #232733);
      position: relative;
      color: var(--text-color, white);
    }
    button:hover, button:focus {
      background: var(--light-grey, #383f52);
    }
    span {
      margin: 4px;
    }
    .id {
      font-style: italic;
      color: var(--highlight-pink, #e91e63);
    }
    .selected {
      background: var(--light-grey, #383f52);
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
        border-left: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
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
        border-left: 1px solid #ccc;
        border-top: 1px solid #ccc;
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
    `;constructor(){const p=o;super(),this['_restoreCachedInititalValues'](),this[p(0x1f9)]=document['createElement']('div'),this['_treeDiv']['style'][p(0x224)]='none',this['shadowRoot']['appendChild'](this[p(0x1f9)]),this[p(0x1f9)][p(0x21a)]('click',this[p(0x1fa)]['bind'](this));}[o(0x21c)](c){const q=o;this[q(0x219)]=c;if(c!=null)this[q(0x203)](c[q(0x20f)],null);}set['instanceServiceContainer'](c){const r=o;this[r(0x215)]=c,this['_selectionChangedHandler']?.['dispose'](),this['_selectionChangedHandler']=this[r(0x215)]['selectionService'][r(0x225)]['on'](d=>{this['selectionChanged'](d);}),this[r(0x22e)]?.['dispose'](),this[r(0x22e)]=this[r(0x215)][r(0x1f4)]['on'](d=>{const s=r;this[s(0x21c)](c[s(0x205)]['rootDesignItem']);}),this['createTree'](c['designerCanvas'][r(0x218)]);}['selectionChanged'](c){const t=o;this['_selectTreeElements'](c[t(0x229)]['map'](d=>this[t(0x222)]['get'](d['element'])));}[o(0x203)](c,d){const u=o;this['_mapElementTreeitem']=new Map(),this[u(0x1f9)][u(0x1f5)]='';let e=document[u(0x204)]('ul');return e['classList'][u(0x216)]('tree'),this[u(0x1f9)][u(0x209)](e),this[u(0x1fb)]=0x0,this[u(0x201)]=this[u(0x206)](c,e),this['_highlight'](d),this[u(0x201)];}[o(0x1f6)](c,d,e){const v=o;let f=document[v(0x204)](v(0x21b));f['dataset'][v(0x214)]=e;let g=document['createElement'](v(0x213));g[v(0x220)]='tag',g['textContent']=c;let h=document['createElement']('span');return h['className']='id',h['textContent']=d,f['appendChild'](g),f['appendChild'](h),f;}['_getChildren'](c,d){const w=o;let e=c['id']===w(0x22a),f={'tag':e?w(0x20d):c[w(0x210)][w(0x1f7)](),'id':e?'':c['id']?'#'+c['id']:'','text':e?'':'\x22'+c['textContent']+'\x22','ref':c,'index':this[w(0x1fb)]},g=document[w(0x204)]('li'),h=this['_makeButton'](f[w(0x22b)],f['id'],f['index']);g['appendChild'](h),d['appendChild'](g),this['_mapElementTreeitem']['set'](f[w(0x20e)],h),this[w(0x1fb)]++;let j=[f],k=null;for(let l=0x0;l<c[w(0x226)][w(0x221)];l++){let m=c[w(0x226)][l];if(m[w(0x200)]===w(0x228))continue;k==null&&(k=document[w(0x204)]('ul'),g[w(0x209)](k)),j=j['concat'](this[w(0x206)](m,k));}return j;}[o(0x1fa)](c){const x=o;let d=c[x(0x20b)];d['localName']==='span'&&(d=d['parentElement']),this[x(0x22f)]([d]),this['_selectDesignerElement'](d);}[o(0x22f)](c){const y=o;if(this[y(0x217)]){for(let d of this['_previouslySelected'])if(d)d[y(0x1fc)]['remove'](y(0x208));}this['_previouslySelected']=c;if(c){for(let f of c)if(f)f['classList'][y(0x216)]('selected');}}[o(0x1ff)](c){const z=o;let e=c['dataset']['index'],f=this['_items'][e]['ref'],g=DesignItem[z(0x21d)](f,f,this[z(0x219)][z(0x230)],this['_rootItem']['instanceServiceContainer']);g[z(0x223)]['selectionService']['setSelectedElements']([g]);}['_highlight'](c){const A=o;if(!c)return;let d=this[A(0x207)][A(0x231)]('button');if(d[A(0x221)]!==this['_items']['length'])return;for(let e=0x0;e<this[A(0x201)]['length'];e++){if(this['_items'][e]['ref']===c){this['_selectTreeElements']([d[e]]);return;}}}}customElements['define']('node-projects-tree-view',TreeView);function a(){const B=['addEventListener','button','createTree','GetOrCreateDesignItem','4FbmWWP','142174jvEQSQ','className','length','_mapElementTreeitem','instanceServiceContainer','userSelect','onSelectionChanged','children','4069809jPZhEm','style','selectedElements','viewContainer','tag','6201755qSbgUB','_selectionChangedHandler','_contentChangedHandler','_selectTreeElements','serviceContainer','querySelectorAll','onContentChanged','innerHTML','_makeButton','toLowerCase','124KQHTUm','_treeDiv','_clickElement','_index','classList','53925NFsySD','20jDYCzE','_selectDesignerElement','localName','_items','1698rFbdHX','_recomputeTree','createElement','designerCanvas','_getChildren','shadowRoot','selected','appendChild','341eQMeux','target','344796vDCHTM','main-app','ref','element','tagName','19515ZvVgFp','472600ffLXbL','span','index','_instanceServiceContainer','add','_previouslySelected','rootDesignItem','_rootItem'];a=function(){return B;};return a();}
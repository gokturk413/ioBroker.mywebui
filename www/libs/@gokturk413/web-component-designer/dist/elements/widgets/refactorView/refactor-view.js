const k=b;function a(){const t=['applyRefactoring','service','refactor\x20','4gLfSxu','368110zeSQgP','692060aSLvRE','push','name','refactor','selectedElements','_selectedItems','serviceContainer','282388ykZpri','dispose','72qJYcUZ','match','905523InrOOS','length','617464DKRIJe','_refactor','selectionService','_instanceServiceContainer','Enter','10597763qTHZab','35mYLVVq','template','_bindingsParse','itemType','selectedItems','designItem','ready','refactorings','_selectionChangedHandler','replaceText','784804sqgGkH','commit','6MRTHWs'];a=function(){return t;};return a();}(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0xef))/0x1+parseInt(j(0x105))/0x2+-parseInt(j(0xf3))/0x3*(parseInt(j(0x10b))/0x4)+parseInt(j(0x10d))/0x5*(parseInt(j(0x107))/0x6)+parseInt(j(0xfb))/0x7*(-parseInt(j(0xf5))/0x8)+-parseInt(j(0xf1))/0x9*(parseInt(j(0x10c))/0xa)+parseInt(j(0xfa))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x380ef));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class RefactorView extends BaseCustomWebComponentConstructorAppend{static [k(0xfc)]=html`
    <div id="root">
      <div class="search">
        <span>search</span>
        <input style="flex-grow: 1; min-width: 0" value="{{this.searchText}}">
        <span>replace</span>
        <input style="flex-grow: 1; min-width: 0"value="{{this.replaceText}}">
        <button @click="[[this.replace()]]" style="grid-column: 2;">replace</button>
      </div>
      <hr>
      <template repeat:item="[[this.refactorings]]">
        <details open>
          <summary>
              [[item[1][0].itemType]]-name:<input value="[[item[1][0].name]]" @keydown="[[this._refactor(item, event)]]" style="flex-grow: 1; min-width: 0">
          </summary>
          <ul>
            <template repeat:reft="[[item[1]]]">
              <li>[[reft.type]]/[[reft.display]]</li>
            </template>
          </ul>
        </details>
      </template>
    </div>`;static ['style']=css`
    :host {
        box-sizing: border-box;      
        font-family: monospace;  
        height: 100%;
        width: 100%;
        position: absolute;
        overflow: hidden;
        /* themed so search/replace + refactoring list stay legible in dark themes */
        color: var(--text-color, #1d1d20);
        background: var(--medium-grey, #ffffff);
    }

    .search {
      display: grid;
      grid-template-columns: 40px 1fr;
      align-items: center;
    }

    span {
      font-size: 10px;
    }

    summary {
      cursor: pointer;
      font-size: 10px;
      display: flex;
      align-items: center;
      white-space: nowrap;
    }
    
    ul {
      margin: 4px;
      padding-left: 20px;
      font-size: 10px;
    }
    
    #root {
      padding: 5px;
      display: flex;
      flex-direction: column;
      gap: 4px;
      overflow-y: auto;
      height: calc(100% - 10px);
    }`;static ['is']='node-projects-refactor-view';static ['properties']={};['_instanceServiceContainer'];[k(0x103)];[k(0xed)];['searchText']='(.*)';['replaceText']='$1';['refactorings']=new Map();[k(0x101)](){const l=k;this[l(0xfd)]();}set['instanceServiceContainer'](c){const m=k;this[m(0xf8)]=c,this['_selectionChangedHandler']?.[m(0xf0)](),this['_selectionChangedHandler']=this[m(0xf8)]['selectionService']['onSelectionChanged']['on'](d=>{const n=m;this[n(0xff)]=d[n(0xec)];}),this[m(0xff)]=this['_instanceServiceContainer'][m(0xf7)]['selectedElements'];}get['selectedItems'](){return this['_selectedItems'];}set['selectedItems'](c){const o=k;this['_selectedItems']!=c&&(this[o(0xed)]=c,this['updateRefactorlist'](this[o(0xed)]));}['replace'](){const p=k;let c=null;for(let d of this[p(0x102)]){let e=d[0x1][0x0][p(0xea)];const f=new RegExp(this['searchText']),g=e[p(0xf2)](f);if(g){if(!c)c=d[0x1][0x0]['designItem']['openGroup']('refactor\x20with\x20regex\x20'+this['searchText']+'\x20->\x20'+this[p(0x104)]);const h=e['replace'](f,this[p(0x104)]);h!=e&&this[p(0x108)](d,h);}}if(c)c[p(0x106)]();}[k(0xf6)](c,d){const q=k,e=d['target'];d['key']==q(0xf9)&&this['applyRefactoring'](c,e['value']);}['applyRefactoring'](c,d){const r=k,e=c[0x1][0x0][r(0x100)]['openGroup'](r(0x10a)+c[0x1][0x0][r(0xea)]+'\x20to\x20'+d);for(let f of c[0x1]){f[r(0x109)][r(0xeb)](f,f['name'],d);}e[r(0x106)]();}['updateRefactorlist'](c){const s=k;this[s(0x102)]['clear']();if(c&&c[s(0xf4)]){let d=[];const e=c[0x0][s(0xee)];for(let f of e['refactorServices']){let g=f['getRefactorings'](c);d[s(0xe9)](...g);}for(const h of d){let i=this['refactorings']['get'](h[s(0xfe)]+'|'+h['name']);i===undefined&&(i=[],this['refactorings']['set'](h['itemType']+'|'+h[s(0xea)],i)),i[s(0xe9)](h);}}this['_bindingsRefresh']();}}function b(c,d){c=c-0xe9;const e=a();let f=e[c];return f;}customElements['define'](RefactorView['is'],RefactorView);
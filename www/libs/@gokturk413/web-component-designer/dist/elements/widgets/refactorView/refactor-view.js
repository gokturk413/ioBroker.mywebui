const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x106))/0x1+-parseInt(j(0xf7))/0x2*(-parseInt(j(0x104))/0x3)+parseInt(j(0x109))/0x4+-parseInt(j(0x105))/0x5+parseInt(j(0x103))/0x6*(parseInt(j(0x10d))/0x7)+-parseInt(j(0x117))/0x8+-parseInt(j(0x10e))/0x9*(parseInt(j(0xf9))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd09e8));function a(){const t=['refactorings','selectedItems','commit','18QJgtwe','3Ftyeuy','4862730NvsODE','1329591xUixhZ','selectedElements','refactor','5545448TbyocF','searchText','ready','define','3184447PaMnUX','9rKzIAj','designItem','selectionService','_selectedItems','(.*)','getRefactorings','replaceText','refactor\x20with\x20regex\x20','length','1388912qMOGIQ','instanceServiceContainer','target','onSelectionChanged','1011250ndzLKw','applyRefactoring','25856770OafZvg','refactor\x20','updateRefactorlist','style','value','_bindingsRefresh','properties'];a=function(){return t;};return a();}function b(c,d){c=c-0xf7;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class RefactorView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
    </div>`;static [k(0xfc)]=css`
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
    }`;static ['is']='node-projects-refactor-view';static [k(0xff)]={};['_instanceServiceContainer'];['_selectionChangedHandler'];[k(0x111)];[k(0x10a)]=k(0x112);['replaceText']='$1';['refactorings']=new Map();[k(0x10b)](){this['_bindingsParse']();}set[k(0x118)](c){const l=k;this['_instanceServiceContainer']=c,this['_selectionChangedHandler']?.['dispose'](),this['_selectionChangedHandler']=this['_instanceServiceContainer'][l(0x110)][l(0x11a)]['on'](d=>{const m=l;this[m(0x101)]=d['selectedElements'];}),this['selectedItems']=this['_instanceServiceContainer']['selectionService'][l(0x107)];}get['selectedItems'](){const n=k;return this[n(0x111)];}set['selectedItems'](c){const o=k;this[o(0x111)]!=c&&(this[o(0x111)]=c,this[o(0xfb)](this[o(0x111)]));}['replace'](){const p=k;let c=null;for(let d of this['refactorings']){let e=d[0x1][0x0]['name'];const f=new RegExp(this[p(0x10a)]),g=e['match'](f);if(g){if(!c)c=d[0x1][0x0]['designItem']['openGroup'](p(0x115)+this['searchText']+'\x20->\x20'+this['replaceText']);const h=e['replace'](f,this[p(0x114)]);h!=e&&this['applyRefactoring'](d,h);}}if(c)c[p(0x102)]();}['_refactor'](c,d){const q=k,e=d[q(0x119)];d['key']=='Enter'&&this['applyRefactoring'](c,e[q(0xfd)]);}[k(0xf8)](c,d){const r=k,e=c[0x1][0x0][r(0x10f)]['openGroup'](r(0xfa)+c[0x1][0x0]['name']+'\x20to\x20'+d);for(let f of c[0x1]){f['service'][r(0x108)](f,f['name'],d);}e[r(0x102)]();}[k(0xfb)](c){const s=k;this['refactorings']['clear']();if(c&&c[s(0x116)]){let d=[];const e=c[0x0]['serviceContainer'];for(let f of e['refactorServices']){let g=f[s(0x113)](c);d['push'](...g);}for(const h of d){let i=this[s(0x100)]['get'](h['itemType']+'|'+h['name']);i===undefined&&(i=[],this[s(0x100)]['set'](h['itemType']+'|'+h['name'],i)),i['push'](h);}}this[s(0xfe)]();}}customElements[k(0x10c)](RefactorView['is'],RefactorView);
function b(c,d){c=c-0x1ee;const e=a();let f=e[c];return f;}const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x20b))/0x1*(parseInt(j(0x209))/0x2)+-parseInt(j(0x207))/0x3+parseInt(j(0x1f9))/0x4+-parseInt(j(0x1fa))/0x5*(parseInt(j(0x210))/0x6)+-parseInt(j(0x211))/0x7*(-parseInt(j(0x217))/0x8)+-parseInt(j(0x202))/0x9*(-parseInt(j(0x200))/0xa)+-parseInt(j(0x205))/0xb*(-parseInt(j(0x20e))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd97ac));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function a(){const s=['push','refactor','_selectionChangedHandler','_bindingsRefresh','designItem','32uZFvdl','properties','\x20to\x20','selectedItems','onSelectionChanged','selectedElements','\x20->\x20','template','_selectedItems','openGroup','commit','replaceText','_instanceServiceContainer','selectionService','2456580buaQKi','32205WdKabF','refactor\x20with\x20regex\x20','serviceContainer','(.*)','searchText','key','502390VEMKqr','ready','117SfqnRu','match','style','11lVnwHG','updateRefactorlist','3174540JHVfwZ','target','4WWxpxV','name','778045CHFtuX','replace','instanceServiceContainer','23677428KUROSn','Enter','1086kkvwld','2503403LaVLSp'];a=function(){return s;};return a();}export class RefactorView extends BaseCustomWebComponentConstructorAppend{static [k(0x1f2)]=html`
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
    </div>`;static [k(0x204)]=css`
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
    }`;static ['is']='node-projects-refactor-view';static [k(0x218)]={};[k(0x1f7)];[k(0x214)];[k(0x1f3)];[k(0x1fe)]=k(0x1fd);['replaceText']='$1';['refactorings']=new Map();[k(0x201)](){this['_bindingsParse']();}set[k(0x20d)](c){const l=k;this[l(0x1f7)]=c,this['_selectionChangedHandler']?.['dispose'](),this['_selectionChangedHandler']=this['_instanceServiceContainer'][l(0x1f8)][l(0x1ef)]['on'](d=>{const m=l;this[m(0x1ee)]=d[m(0x1f0)];}),this[l(0x1ee)]=this['_instanceServiceContainer'][l(0x1f8)][l(0x1f0)];}get['selectedItems'](){return this['_selectedItems'];}set[k(0x1ee)](c){const n=k;this['_selectedItems']!=c&&(this['_selectedItems']=c,this['updateRefactorlist'](this[n(0x1f3)]));}[k(0x20c)](){const o=k;let c=null;for(let d of this['refactorings']){let e=d[0x1][0x0]['name'];const f=new RegExp(this[o(0x1fe)]),g=e[o(0x203)](f);if(g){if(!c)c=d[0x1][0x0]['designItem'][o(0x1f4)](o(0x1fb)+this['searchText']+o(0x1f1)+this[o(0x1f6)]);const h=e[o(0x20c)](f,this['replaceText']);h!=e&&this['applyRefactoring'](d,h);}}if(c)c[o(0x1f5)]();}['_refactor'](c,d){const p=k,e=d[p(0x208)];d[p(0x1ff)]==p(0x20f)&&this['applyRefactoring'](c,e['value']);}['applyRefactoring'](c,d){const q=k,e=c[0x1][0x0][q(0x216)]['openGroup']('refactor\x20'+c[0x1][0x0]['name']+q(0x219)+d);for(let f of c[0x1]){f['service'][q(0x213)](f,f['name'],d);}e[q(0x1f5)]();}[k(0x206)](c){const r=k;this['refactorings']['clear']();if(c&&c['length']){let d=[];const e=c[0x0][r(0x1fc)];for(let f of e['refactorServices']){let g=f['getRefactorings'](c);d['push'](...g);}for(const h of d){let i=this['refactorings']['get'](h['itemType']+'|'+h[r(0x20a)]);i===undefined&&(i=[],this['refactorings']['set'](h['itemType']+'|'+h[r(0x20a)],i)),i[r(0x212)](h);}}this[r(0x215)]();}}customElements['define'](RefactorView['is'],RefactorView);
const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0xee))/0x1*(parseInt(j(0xe1))/0x2)+parseInt(j(0xe0))/0x3+-parseInt(j(0xf5))/0x4+-parseInt(j(0xe5))/0x5*(parseInt(j(0xde))/0x6)+-parseInt(j(0xd2))/0x7*(parseInt(j(0xd5))/0x8)+-parseInt(j(0xec))/0x9*(parseInt(j(0xd6))/0xa)+parseInt(j(0xd3))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x25aa0));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0xd1;const e=a();let f=e[c];return f;}export class RefactorView extends BaseCustomWebComponentConstructorAppend{static [k(0xf3)]=html`
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
    }`;static ['is']=k(0xdd);static [k(0xe2)]={};['_instanceServiceContainer'];['_selectionChangedHandler'];['_selectedItems'];[k(0xf9)]=k(0xf0);['replaceText']='$1';[k(0xed)]=new Map();['ready'](){const l=k;this[l(0xe7)]();}set['instanceServiceContainer'](c){const m=k;this['_instanceServiceContainer']=c,this[m(0xe4)]?.[m(0xe6)](),this[m(0xe4)]=this[m(0xf8)]['selectionService'][m(0xd7)]['on'](d=>{const n=m;this[n(0xdb)]=d['selectedElements'];}),this[m(0xdb)]=this['_instanceServiceContainer']['selectionService'][m(0xea)];}get[k(0xdb)](){return this['_selectedItems'];}set['selectedItems'](c){const o=k;this[o(0xef)]!=c&&(this['_selectedItems']=c,this['updateRefactorlist'](this[o(0xef)]));}['replace'](){const p=k;let c=null;for(let d of this['refactorings']){let e=d[0x1][0x0][p(0xdc)];const f=new RegExp(this[p(0xf9)]),g=e['match'](f);if(g){if(!c)c=d[0x1][0x0][p(0xe9)][p(0xe3)]('refactor\x20with\x20regex\x20'+this[p(0xf9)]+'\x20->\x20'+this[p(0xf2)]);const h=e[p(0xf7)](f,this['replaceText']);h!=e&&this['applyRefactoring'](d,h);}}if(c)c[p(0xdf)]();}['_refactor'](c,d){const q=k,e=d[q(0xf1)];d['key']=='Enter'&&this['applyRefactoring'](c,e[q(0xd8)]);}['applyRefactoring'](c,d){const r=k,e=c[0x1][0x0][r(0xe9)]['openGroup']('refactor\x20'+c[0x1][0x0][r(0xdc)]+r(0xf4)+d);for(let f of c[0x1]){f['service'][r(0xda)](f,f[r(0xdc)],d);}e[r(0xdf)]();}['updateRefactorlist'](c){const s=k;this['refactorings']['clear']();if(c&&c['length']){let d=[];const e=c[0x0][s(0xe8)];for(let f of e[s(0xd4)]){let g=f['getRefactorings'](c);d['push'](...g);}for(const h of d){let i=this['refactorings']['get'](h[s(0xeb)]+'|'+h[s(0xdc)]);i===undefined&&(i=[],this[s(0xed)][s(0xf6)](h[s(0xeb)]+'|'+h['name'],i)),i[s(0xd9)](h);}}this[s(0xd1)]();}}function a(){const t=['push','refactor','selectedItems','name','node-projects-refactor-view','1129182LxZtvu','commit','590547ZKVqGA','134sDKNDw','properties','openGroup','_selectionChangedHandler','5eUOfJO','dispose','_bindingsParse','serviceContainer','designItem','selectedElements','itemType','36srYhjw','refactorings','2683SIvhTM','_selectedItems','(.*)','target','replaceText','template','\x20to\x20','779828vqexJa','set','replace','_instanceServiceContainer','searchText','_bindingsRefresh','1267PxpIPm','7920429biqDjF','refactorServices','12344tDOPsa','699850iahOFx','onSelectionChanged','value'];a=function(){return t;};return a();}customElements['define'](RefactorView['is'],RefactorView);
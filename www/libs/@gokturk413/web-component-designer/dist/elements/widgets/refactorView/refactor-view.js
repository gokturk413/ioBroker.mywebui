function a(){const r=['push','node-projects-refactor-view','value','110621QUiuVm','service','(.*)','330673XoiSyk','refactor\x20','properties','selectedItems','_selectedItems','1414798mFsiky','3516832EzoCbN','commit','instanceServiceContainer','refactor\x20with\x20regex\x20','refactorings','match','itemType','_instanceServiceContainer','openGroup','11135cRkILC','selectedElements','ready','style','_selectionChangedHandler','serviceContainer','Enter','568ZmPntl','459603igzYuP','222xAxvDZ','_bindingsRefresh','1399086Lzirui','_refactor','name','designItem','length','searchText','\x20->\x20','selectionService'];a=function(){return r;};return a();}const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x1b1))/0x1+parseInt(j(0x1b6))/0x2+-parseInt(j(0x1a3))/0x3+parseInt(j(0x19f))/0x4*(parseInt(j(0x1c0))/0x5)+parseInt(j(0x1a1))/0x6*(parseInt(j(0x1ae))/0x7)+-parseInt(j(0x1b7))/0x8+parseInt(j(0x1a0))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x67374));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x199;const e=a();let f=e[c];return f;}export class RefactorView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
    </div>`;static [k(0x19b)]=css`
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
    }`;static ['is']=k(0x1ac);static [k(0x1b3)]={};[k(0x1be)];[k(0x19c)];['_selectedItems'];[k(0x1a8)]=k(0x1b0);['replaceText']='$1';['refactorings']=new Map();[k(0x19a)](){this['_bindingsParse']();}set[k(0x1b9)](c){const l=k;this[l(0x1be)]=c,this['_selectionChangedHandler']?.['dispose'](),this['_selectionChangedHandler']=this[l(0x1be)][l(0x1aa)]['onSelectionChanged']['on'](d=>{this['selectedItems']=d['selectedElements'];}),this[l(0x1b4)]=this['_instanceServiceContainer'][l(0x1aa)][l(0x199)];}get[k(0x1b4)](){return this['_selectedItems'];}set[k(0x1b4)](c){const m=k;this[m(0x1b5)]!=c&&(this['_selectedItems']=c,this['updateRefactorlist'](this['_selectedItems']));}['replace'](){const n=k;let c=null;for(let d of this[n(0x1bb)]){let e=d[0x1][0x0][n(0x1a5)];const f=new RegExp(this['searchText']),g=e[n(0x1bc)](f);if(g){if(!c)c=d[0x1][0x0][n(0x1a6)][n(0x1bf)](n(0x1ba)+this['searchText']+n(0x1a9)+this['replaceText']);const h=e['replace'](f,this['replaceText']);h!=e&&this['applyRefactoring'](d,h);}}if(c)c['commit']();}[k(0x1a4)](c,d){const o=k,e=d['target'];d['key']==o(0x19e)&&this['applyRefactoring'](c,e[o(0x1ad)]);}['applyRefactoring'](c,d){const p=k,e=c[0x1][0x0]['designItem'][p(0x1bf)](p(0x1b2)+c[0x1][0x0][p(0x1a5)]+'\x20to\x20'+d);for(let f of c[0x1]){f[p(0x1af)]['refactor'](f,f[p(0x1a5)],d);}e[p(0x1b8)]();}['updateRefactorlist'](c){const q=k;this['refactorings']['clear']();if(c&&c[q(0x1a7)]){let d=[];const e=c[0x0][q(0x19d)];for(let f of e['refactorServices']){let g=f['getRefactorings'](c);d[q(0x1ab)](...g);}for(const h of d){let i=this['refactorings']['get'](h[q(0x1bd)]+'|'+h[q(0x1a5)]);i===undefined&&(i=[],this['refactorings']['set'](h['itemType']+'|'+h[q(0x1a5)],i)),i['push'](h);}}this[q(0x1a2)]();}}customElements['define'](RefactorView['is'],RefactorView);
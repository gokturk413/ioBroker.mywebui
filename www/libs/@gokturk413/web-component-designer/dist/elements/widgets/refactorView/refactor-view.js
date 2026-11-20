const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x1c3))/0x1*(-parseInt(j(0x1c6))/0x2)+parseInt(j(0x1c4))/0x3+-parseInt(j(0x1d7))/0x4+parseInt(j(0x1cb))/0x5*(-parseInt(j(0x1d1))/0x6)+-parseInt(j(0x1b9))/0x7+-parseInt(j(0x1b2))/0x8+parseInt(j(0x1ba))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x497fb));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class RefactorView extends BaseCustomWebComponentConstructorAppend{static [k(0x1b3)]=html`
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
    }`;static ['is']='node-projects-refactor-view';static [k(0x1b7)]={};['_instanceServiceContainer'];['_selectionChangedHandler'];[k(0x1d2)];[k(0x1ce)]=k(0x1c2);[k(0x1bb)]='$1';['refactorings']=new Map();[k(0x1d3)](){this['_bindingsParse']();}set[k(0x1d4)](c){const l=k;this[l(0x1c7)]=c,this['_selectionChangedHandler']?.[l(0x1c5)](),this['_selectionChangedHandler']=this['_instanceServiceContainer'][l(0x1bc)]['onSelectionChanged']['on'](d=>{this['selectedItems']=d['selectedElements'];}),this['selectedItems']=this[l(0x1c7)][l(0x1bc)][l(0x1d8)];}get[k(0x1b5)](){const m=k;return this[m(0x1d2)];}set[k(0x1b5)](c){const n=k;this['_selectedItems']!=c&&(this[n(0x1d2)]=c,this[n(0x1b6)](this['_selectedItems']));}[k(0x1c9)](){const o=k;let c=null;for(let d of this['refactorings']){let e=d[0x1][0x0]['name'];const f=new RegExp(this[o(0x1ce)]),g=e['match'](f);if(g){if(!c)c=d[0x1][0x0][o(0x1d5)][o(0x1b8)](o(0x1cf)+this[o(0x1ce)]+o(0x1b4)+this[o(0x1bb)]);const h=e[o(0x1c9)](f,this[o(0x1bb)]);h!=e&&this['applyRefactoring'](d,h);}}if(c)c[o(0x1bd)]();}['_refactor'](c,d){const p=k,e=d[p(0x1cc)];d['key']=='Enter'&&this['applyRefactoring'](c,e[p(0x1be)]);}['applyRefactoring'](c,d){const q=k,e=c[0x1][0x0]['designItem']['openGroup'](q(0x1c8)+c[0x1][0x0][q(0x1bf)]+'\x20to\x20'+d);for(let f of c[0x1]){f['service']['refactor'](f,f[q(0x1bf)],d);}e['commit']();}['updateRefactorlist'](c){const r=k;this[r(0x1c1)][r(0x1ca)]();if(c&&c['length']){let d=[];const e=c[0x0][r(0x1d9)];for(let f of e[r(0x1c0)]){let g=f['getRefactorings'](c);d[r(0x1d6)](...g);}for(const h of d){let i=this['refactorings']['get'](h[r(0x1d0)]+'|'+h[r(0x1bf)]);i===undefined&&(i=[],this[r(0x1c1)]['set'](h[r(0x1d0)]+'|'+h[r(0x1bf)],i)),i['push'](h);}}this[r(0x1cd)]();}}function a(){const s=['serviceContainer','2394632RHelsq','template','\x20->\x20','selectedItems','updateRefactorlist','properties','openGroup','2286200CzLlyn','10256256PdSalj','replaceText','selectionService','commit','value','name','refactorServices','refactorings','(.*)','1xLoHFu','717594yBcwey','dispose','454130cxnGvm','_instanceServiceContainer','refactor\x20','replace','clear','658975cuUTMl','target','_bindingsRefresh','searchText','refactor\x20with\x20regex\x20','itemType','12BnBWdy','_selectedItems','ready','instanceServiceContainer','designItem','push','1661108rFLMGv','selectedElements'];a=function(){return s;};return a();}function b(c,d){c=c-0x1b2;const e=a();let f=e[c];return f;}customElements['define'](RefactorView['is'],RefactorView);
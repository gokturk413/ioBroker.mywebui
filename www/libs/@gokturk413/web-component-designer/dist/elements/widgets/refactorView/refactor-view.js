const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0xd9))/0x1+parseInt(j(0xdd))/0x2+parseInt(j(0xda))/0x3*(-parseInt(j(0xe0))/0x4)+parseInt(j(0xdc))/0x5*(parseInt(j(0xf5))/0x6)+parseInt(j(0xe9))/0x7+parseInt(j(0xe3))/0x8*(parseInt(j(0xde))/0x9)+-parseInt(j(0xe4))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x56132));function a(){const s=['32ifWcRf','Enter','_bindingsRefresh','30808DFuuMc','5823160dVQwDc','refactor\x20','_selectedItems','refactor\x20with\x20regex\x20','_selectionChangedHandler','3463740sQRSFm','searchText','selectedItems','name','set','define','\x20to\x20','refactor','length','dispose','get','serviceContainer','6WCIUHk','refactorings','updateRefactorlist','replaceText','match','(.*)','_instanceServiceContainer','423153YGsmtf','47640EYoQvY','itemType','2267485NZApro','865554Nbcczk','243NxzTaF','selectedElements'];a=function(){return s;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0xd8;const e=a();let f=e[c];return f;}export class RefactorView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
    }`;static ['is']='node-projects-refactor-view';static ['properties']={};['_instanceServiceContainer'];['_selectionChangedHandler'];['_selectedItems'];['searchText']=k(0xfa);['replaceText']='$1';[k(0xf6)]=new Map();['ready'](){this['_bindingsParse']();}set['instanceServiceContainer'](c){const l=k;this['_instanceServiceContainer']=c,this[l(0xe8)]?.[l(0xf2)](),this[l(0xe8)]=this['_instanceServiceContainer']['selectionService']['onSelectionChanged']['on'](d=>{const m=l;this[m(0xeb)]=d[m(0xdf)];}),this[l(0xeb)]=this[l(0xd8)]['selectionService'][l(0xdf)];}get[k(0xeb)](){return this['_selectedItems'];}set[k(0xeb)](c){const n=k;this['_selectedItems']!=c&&(this[n(0xe6)]=c,this['updateRefactorlist'](this['_selectedItems']));}['replace'](){const o=k;let c=null;for(let d of this['refactorings']){let e=d[0x1][0x0][o(0xec)];const f=new RegExp(this[o(0xea)]),g=e[o(0xf9)](f);if(g){if(!c)c=d[0x1][0x0]['designItem']['openGroup'](o(0xe7)+this[o(0xea)]+'\x20->\x20'+this['replaceText']);const h=e['replace'](f,this[o(0xf8)]);h!=e&&this['applyRefactoring'](d,h);}}if(c)c['commit']();}['_refactor'](c,d){const p=k,e=d['target'];d['key']==p(0xe1)&&this['applyRefactoring'](c,e['value']);}['applyRefactoring'](c,d){const q=k,e=c[0x1][0x0]['designItem']['openGroup'](q(0xe5)+c[0x1][0x0]['name']+q(0xef)+d);for(let f of c[0x1]){f['service'][q(0xf0)](f,f[q(0xec)],d);}e['commit']();}[k(0xf7)](c){const r=k;this['refactorings']['clear']();if(c&&c[r(0xf1)]){let d=[];const e=c[0x0][r(0xf4)];for(let f of e['refactorServices']){let g=f['getRefactorings'](c);d['push'](...g);}for(const h of d){let i=this['refactorings'][r(0xf3)](h['itemType']+'|'+h['name']);i===undefined&&(i=[],this['refactorings'][r(0xed)](h[r(0xdb)]+'|'+h['name'],i)),i['push'](h);}}this[r(0xe2)]();}}customElements[k(0xee)](RefactorView['is'],RefactorView);
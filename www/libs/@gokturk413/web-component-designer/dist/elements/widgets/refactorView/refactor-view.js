const k=b;function a(){const s=['designItem','93636GzfhCU','25QsMTgd','service','replaceText','instanceServiceContainer','node-projects-refactor-view','_selectedItems','openGroup','target','1132398sktfZZ','define','key','_refactor','998400AxPrbU','231lnjscq','_selectionChangedHandler','89338yrJyor','style','selectedItems','commit','271644bwTJnd','\x20->\x20','selectedElements','match','updateRefactorlist','refactorings','itemType','3845344pvpxQd','434651KCgrOk','replace','template','Enter','selectionService','60YIBCqp','refactor','applyRefactoring','_bindingsRefresh','_instanceServiceContainer','ready','value','name','set','searchText','push'];a=function(){return s;};return a();}function b(c,d){c=c-0x1e6;const e=a();let f=e[c];return f;}(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x1ed))/0x1+-parseInt(j(0x20e))/0x2+-parseInt(j(0x20b))/0x3+parseInt(j(0x212))/0x4*(parseInt(j(0x1ff))/0x5)+parseInt(j(0x1fe))/0x6*(parseInt(j(0x20c))/0x7)+-parseInt(j(0x1ec))/0x8+parseInt(j(0x207))/0x9*(parseInt(j(0x1f2))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4d519));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class RefactorView extends BaseCustomWebComponentConstructorAppend{static [k(0x1ef)]=html`
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
    </div>`;static [k(0x20f)]=css`
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
    }`;static ['is']=k(0x203);static ['properties']={};['_instanceServiceContainer'];[k(0x20d)];['_selectedItems'];['searchText']='(.*)';[k(0x201)]='$1';['refactorings']=new Map();[k(0x1f7)](){this['_bindingsParse']();}set[k(0x202)](c){const l=k;this[l(0x1f6)]=c,this['_selectionChangedHandler']?.['dispose'](),this[l(0x20d)]=this[l(0x1f6)][l(0x1f1)]['onSelectionChanged']['on'](d=>{const m=l;this[m(0x210)]=d[m(0x1e7)];}),this[l(0x210)]=this['_instanceServiceContainer']['selectionService']['selectedElements'];}get['selectedItems'](){return this['_selectedItems'];}set[k(0x210)](c){const n=k;this[n(0x204)]!=c&&(this['_selectedItems']=c,this[n(0x1e9)](this['_selectedItems']));}[k(0x1ee)](){const o=k;let c=null;for(let d of this['refactorings']){let e=d[0x1][0x0]['name'];const f=new RegExp(this[o(0x1fb)]),g=e[o(0x1e8)](f);if(g){if(!c)c=d[0x1][0x0]['designItem'][o(0x205)]('refactor\x20with\x20regex\x20'+this[o(0x1fb)]+o(0x1e6)+this[o(0x201)]);const h=e[o(0x1ee)](f,this['replaceText']);h!=e&&this[o(0x1f4)](d,h);}}if(c)c[o(0x211)]();}[k(0x20a)](c,d){const p=k,e=d[p(0x206)];d[p(0x209)]==p(0x1f0)&&this['applyRefactoring'](c,e[p(0x1f8)]);}['applyRefactoring'](c,d){const q=k,e=c[0x1][0x0][q(0x1fd)][q(0x205)]('refactor\x20'+c[0x1][0x0][q(0x1f9)]+'\x20to\x20'+d);for(let f of c[0x1]){f[q(0x200)][q(0x1f3)](f,f[q(0x1f9)],d);}e['commit']();}[k(0x1e9)](c){const r=k;this[r(0x1ea)]['clear']();if(c&&c['length']){let d=[];const e=c[0x0]['serviceContainer'];for(let f of e['refactorServices']){let g=f['getRefactorings'](c);d[r(0x1fc)](...g);}for(const h of d){let i=this[r(0x1ea)]['get'](h[r(0x1eb)]+'|'+h[r(0x1f9)]);i===undefined&&(i=[],this['refactorings'][r(0x1fa)](h[r(0x1eb)]+'|'+h[r(0x1f9)],i)),i[r(0x1fc)](h);}}this[r(0x1f5)]();}}customElements[k(0x208)](RefactorView['is'],RefactorView);
const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x1ea))/0x1*(parseInt(j(0x1d2))/0x2)+-parseInt(j(0x1d3))/0x3*(-parseInt(j(0x1d5))/0x4)+-parseInt(j(0x1eb))/0x5+parseInt(j(0x1e0))/0x6*(-parseInt(j(0x1d1))/0x7)+-parseInt(j(0x1e3))/0x8*(-parseInt(j(0x1e9))/0x9)+-parseInt(j(0x1f4))/0xa*(-parseInt(j(0x1ee))/0xb)+parseInt(j(0x1f0))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x308e1));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function a(){const t=['target','match','value','openGroup','refactor\x20','itemType','replaceText','name','properties','selectedItems','224130UrknES','service','template','8JSQpRq','updateRefactorlist','selectionService','clear','replace','\x20->\x20','1820583bXxCEZ','2213NfzbmN','1548855VcTGhm','refactorings','refactor','11mTmsdB','searchText','4281324knluOl','_selectionChangedHandler','ready','style','1048720znRybC','key','push','commit','selectedElements','refactor\x20with\x20regex\x20','applyRefactoring','_instanceServiceContainer','_selectedItems','49jTIDOt','118SpJBjn','336HUZPbA','onSelectionChanged','8456FeecdG'];a=function(){return t;};return a();}function b(c,d){c=c-0x1cd;const e=a();let f=e[c];return f;}export class RefactorView extends BaseCustomWebComponentConstructorAppend{static [k(0x1e2)]=html`
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
    </div>`;static [k(0x1f3)]=css`
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
    }`;static ['is']='node-projects-refactor-view';static [k(0x1de)]={};[k(0x1cf)];['_selectionChangedHandler'];[k(0x1d0)];[k(0x1ef)]='(.*)';[k(0x1dc)]='$1';[k(0x1ec)]=new Map();[k(0x1f2)](){this['_bindingsParse']();}set['instanceServiceContainer'](c){const l=k;this[l(0x1cf)]=c,this['_selectionChangedHandler']?.['dispose'](),this[l(0x1f1)]=this['_instanceServiceContainer'][l(0x1e5)][l(0x1d4)]['on'](d=>{const m=l;this[m(0x1df)]=d['selectedElements'];}),this['selectedItems']=this[l(0x1cf)]['selectionService'][l(0x1f8)];}get['selectedItems'](){const n=k;return this[n(0x1d0)];}set['selectedItems'](c){const o=k;this[o(0x1d0)]!=c&&(this[o(0x1d0)]=c,this[o(0x1e4)](this[o(0x1d0)]));}[k(0x1e7)](){const p=k;let c=null;for(let d of this[p(0x1ec)]){let e=d[0x1][0x0][p(0x1dd)];const f=new RegExp(this['searchText']),g=e[p(0x1d7)](f);if(g){if(!c)c=d[0x1][0x0]['designItem']['openGroup'](p(0x1cd)+this['searchText']+p(0x1e8)+this[p(0x1dc)]);const h=e['replace'](f,this['replaceText']);h!=e&&this['applyRefactoring'](d,h);}}if(c)c['commit']();}['_refactor'](c,d){const q=k,e=d[q(0x1d6)];d[q(0x1f5)]=='Enter'&&this[q(0x1ce)](c,e[q(0x1d8)]);}[k(0x1ce)](c,d){const r=k,e=c[0x1][0x0]['designItem'][r(0x1d9)](r(0x1da)+c[0x1][0x0][r(0x1dd)]+'\x20to\x20'+d);for(let f of c[0x1]){f[r(0x1e1)][r(0x1ed)](f,f[r(0x1dd)],d);}e[r(0x1f7)]();}['updateRefactorlist'](c){const s=k;this['refactorings'][s(0x1e6)]();if(c&&c['length']){let d=[];const e=c[0x0]['serviceContainer'];for(let f of e['refactorServices']){let g=f['getRefactorings'](c);d['push'](...g);}for(const h of d){let i=this['refactorings']['get'](h[s(0x1db)]+'|'+h[s(0x1dd)]);i===undefined&&(i=[],this['refactorings']['set'](h['itemType']+'|'+h[s(0x1dd)],i)),i[s(0x1f6)](h);}}this['_bindingsRefresh']();}}customElements['define'](RefactorView['is'],RefactorView);
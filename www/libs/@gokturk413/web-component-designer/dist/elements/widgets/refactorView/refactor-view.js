const k=b;function b(c,d){c=c-0xad;const e=a();let f=e[c];return f;}(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0xc4))/0x1*(-parseInt(j(0xce))/0x2)+parseInt(j(0xca))/0x3+-parseInt(j(0xb1))/0x4*(-parseInt(j(0xba))/0x5)+-parseInt(j(0xb0))/0x6*(-parseInt(j(0xd3))/0x7)+parseInt(j(0xb5))/0x8+parseInt(j(0xc8))/0x9+-parseInt(j(0xb3))/0xa*(parseInt(j(0xc3))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc8854));function a(){const t=['selectedElements','clear','18395476SUkNnm','1XOAKsU','refactor\x20with\x20regex\x20','get','refactor\x20','11514555cJXHGT','_selectionChangedHandler','2652327utZoZl','define','updateRefactorlist','key','2805674Ttcxsc','itemType','searchText','style','replace','851347Qijihz','refactorings','name','replaceText','42uOgiQU','8bVMJDv','properties','20zRyZXc','set','9870976udbmVZ','_bindingsRefresh','_selectedItems','designItem','_instanceServiceContainer','3300195LsAFle','ready','serviceContainer','Enter','selectedItems','service','push'];a=function(){return t;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class RefactorView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
    </div>`;static [k(0xd1)]=css`
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
    }`;static ['is']='node-projects-refactor-view';static [k(0xb2)]={};[k(0xb9)];['_selectionChangedHandler'];['_selectedItems'];[k(0xd0)]='(.*)';[k(0xaf)]='$1';[k(0xad)]=new Map();[k(0xbb)](){this['_bindingsParse']();}set['instanceServiceContainer'](c){const l=k;this[l(0xb9)]=c,this[l(0xc9)]?.['dispose'](),this['_selectionChangedHandler']=this['_instanceServiceContainer']['selectionService']['onSelectionChanged']['on'](d=>{const m=l;this[m(0xbe)]=d[m(0xc1)];}),this[l(0xbe)]=this['_instanceServiceContainer']['selectionService'][l(0xc1)];}get[k(0xbe)](){const n=k;return this[n(0xb7)];}set['selectedItems'](c){const o=k;this[o(0xb7)]!=c&&(this[o(0xb7)]=c,this[o(0xcc)](this[o(0xb7)]));}[k(0xd2)](){const p=k;let c=null;for(let d of this['refactorings']){let e=d[0x1][0x0]['name'];const f=new RegExp(this[p(0xd0)]),g=e['match'](f);if(g){if(!c)c=d[0x1][0x0][p(0xb8)]['openGroup'](p(0xc5)+this['searchText']+'\x20->\x20'+this[p(0xaf)]);const h=e[p(0xd2)](f,this[p(0xaf)]);h!=e&&this['applyRefactoring'](d,h);}}if(c)c['commit']();}['_refactor'](c,d){const q=k,e=d['target'];d[q(0xcd)]==q(0xbd)&&this['applyRefactoring'](c,e['value']);}['applyRefactoring'](c,d){const r=k,e=c[0x1][0x0][r(0xb8)]['openGroup'](r(0xc7)+c[0x1][0x0]['name']+'\x20to\x20'+d);for(let f of c[0x1]){f[r(0xbf)]['refactor'](f,f[r(0xae)],d);}e['commit']();}['updateRefactorlist'](c){const s=k;this[s(0xad)][s(0xc2)]();if(c&&c['length']){let d=[];const e=c[0x0][s(0xbc)];for(let f of e['refactorServices']){let g=f['getRefactorings'](c);d[s(0xc0)](...g);}for(const h of d){let i=this['refactorings'][s(0xc6)](h[s(0xcf)]+'|'+h['name']);i===undefined&&(i=[],this['refactorings'][s(0xb4)](h[s(0xcf)]+'|'+h['name'],i)),i[s(0xc0)](h);}}this[s(0xb6)]();}}customElements[k(0xcb)](RefactorView['is'],RefactorView);
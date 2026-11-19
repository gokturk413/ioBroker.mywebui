const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x9a))/0x1*(-parseInt(j(0x99))/0x2)+parseInt(j(0x92))/0x3*(parseInt(j(0x9b))/0x4)+-parseInt(j(0x87))/0x5*(-parseInt(j(0xae))/0x6)+-parseInt(j(0x9e))/0x7*(-parseInt(j(0xad))/0x8)+parseInt(j(0xa6))/0x9*(-parseInt(j(0x90))/0xa)+parseInt(j(0x93))/0xb+-parseInt(j(0xa8))/0xc*(parseInt(j(0xa9))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd4ee1));function a(){const u=['selectedElements','selectedItems','commit','10ayevZF','_selectionChangedHandler','137019nxFrbp','3403004VeArqf','_selectedItems','set','_bindingsParse','refactor','length','2234YnawsW','482EPnoyP','28NCQJwG','searchText','getRefactorings','14NtEJeh','designItem','template','push','refactorings','(.*)','applyRefactoring','instanceServiceContainer','8491842KUliqY','\x20->\x20','6685044jFoBhx','26AbNRDq','_instanceServiceContainer','replace','dispose','5228984QrHNEd','102VGPGVp','133870VXHuxj','replaceText','itemType','name','_bindingsRefresh','define'];a=function(){return u;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x87;const e=a();let f=e[c];return f;}export class RefactorView extends BaseCustomWebComponentConstructorAppend{static [k(0xa0)]=html`
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
    }`;static ['is']='node-projects-refactor-view';static ['properties']={};[k(0xaa)];[k(0x91)];[k(0x94)];['searchText']=k(0xa3);[k(0x88)]='$1';[k(0xa2)]=new Map();['ready'](){const l=k;this[l(0x96)]();}set[k(0xa5)](c){const m=k;this[m(0xaa)]=c,this['_selectionChangedHandler']?.[m(0xac)](),this[m(0x91)]=this['_instanceServiceContainer']['selectionService']['onSelectionChanged']['on'](d=>{const n=m;this['selectedItems']=d[n(0x8d)];}),this['selectedItems']=this['_instanceServiceContainer']['selectionService']['selectedElements'];}get[k(0x8e)](){const o=k;return this[o(0x94)];}set['selectedItems'](c){const p=k;this[p(0x94)]!=c&&(this['_selectedItems']=c,this['updateRefactorlist'](this[p(0x94)]));}[k(0xab)](){const q=k;let c=null;for(let d of this['refactorings']){let e=d[0x1][0x0][q(0x8a)];const f=new RegExp(this['searchText']),g=e['match'](f);if(g){if(!c)c=d[0x1][0x0]['designItem']['openGroup']('refactor\x20with\x20regex\x20'+this[q(0x9c)]+q(0xa7)+this[q(0x88)]);const h=e['replace'](f,this['replaceText']);h!=e&&this['applyRefactoring'](d,h);}}if(c)c['commit']();}['_refactor'](c,d){const r=k,e=d['target'];d['key']=='Enter'&&this[r(0xa4)](c,e['value']);}['applyRefactoring'](c,d){const s=k,e=c[0x1][0x0][s(0x9f)]['openGroup']('refactor\x20'+c[0x1][0x0]['name']+'\x20to\x20'+d);for(let f of c[0x1]){f['service'][s(0x97)](f,f[s(0x8a)],d);}e[s(0x8f)]();}['updateRefactorlist'](c){const t=k;this[t(0xa2)]['clear']();if(c&&c[t(0x98)]){let d=[];const e=c[0x0]['serviceContainer'];for(let f of e['refactorServices']){let g=f[t(0x9d)](c);d[t(0xa1)](...g);}for(const h of d){let i=this['refactorings']['get'](h['itemType']+'|'+h[t(0x8a)]);i===undefined&&(i=[],this[t(0xa2)][t(0x95)](h[t(0x89)]+'|'+h['name'],i)),i[t(0xa1)](h);}}this[t(0x8b)]();}}customElements[k(0x8c)](RefactorView['is'],RefactorView);
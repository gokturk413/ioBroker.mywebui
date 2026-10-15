const k=b;function b(c,d){c=c-0x127;const e=a();let f=e[c];return f;}(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x149))/0x1+-parseInt(j(0x151))/0x2+-parseInt(j(0x146))/0x3*(parseInt(j(0x138))/0x4)+parseInt(j(0x12d))/0x5+parseInt(j(0x140))/0x6*(parseInt(j(0x14c))/0x7)+parseInt(j(0x144))/0x8+-parseInt(j(0x13b))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xf02e7));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function a(){const s=['updateRefactorlist','target','match','354040ldsnpI','name','Enter','instanceServiceContainer','(.*)','commit','_instanceServiceContainer','itemType','_selectionChangedHandler','refactor','3958945Ojfisw','onSelectionChanged','\x20to\x20','replaceText','length','refactor\x20with\x20regex\x20','set','_selectedItems','get','push','applyRefactoring','418412LCOYSb','clear','refactorings','4532904Ngaoxy','selectedElements','refactorServices','service','openGroup','55302NkWkNO','selectionService','refactor\x20','replace','7308712kekjXM','\x20->\x20','12JpoBhb','_bindingsRefresh','designItem','433603zeHWRx','define','searchText','616jQkhif','selectedItems'];a=function(){return s;};return a();}export class RefactorView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
    }`;static ['is']='node-projects-refactor-view';static ['properties']={};[k(0x129)];[k(0x12b)];[k(0x134)];['searchText']=k(0x127);['replaceText']='$1';['refactorings']=new Map();['ready'](){this['_bindingsParse']();}set[k(0x154)](c){const l=k;this[l(0x129)]=c,this['_selectionChangedHandler']?.['dispose'](),this[l(0x12b)]=this[l(0x129)][l(0x141)][l(0x12e)]['on'](d=>{const m=l;this[m(0x14d)]=d[m(0x13c)];}),this['selectedItems']=this['_instanceServiceContainer']['selectionService'][l(0x13c)];}get['selectedItems'](){return this['_selectedItems'];}set['selectedItems'](c){const n=k;this[n(0x134)]!=c&&(this['_selectedItems']=c,this[n(0x14e)](this['_selectedItems']));}[k(0x143)](){const o=k;let c=null;for(let d of this[o(0x13a)]){let e=d[0x1][0x0][o(0x152)];const f=new RegExp(this[o(0x14b)]),g=e[o(0x150)](f);if(g){if(!c)c=d[0x1][0x0]['designItem'][o(0x13f)](o(0x132)+this['searchText']+o(0x145)+this[o(0x130)]);const h=e['replace'](f,this['replaceText']);h!=e&&this['applyRefactoring'](d,h);}}if(c)c['commit']();}['_refactor'](c,d){const p=k,e=d[p(0x14f)];d['key']==p(0x153)&&this[p(0x137)](c,e['value']);}[k(0x137)](c,d){const q=k,e=c[0x1][0x0][q(0x148)][q(0x13f)](q(0x142)+c[0x1][0x0]['name']+q(0x12f)+d);for(let f of c[0x1]){f[q(0x13e)][q(0x12c)](f,f[q(0x152)],d);}e[q(0x128)]();}['updateRefactorlist'](c){const r=k;this[r(0x13a)][r(0x139)]();if(c&&c[r(0x131)]){let d=[];const e=c[0x0]['serviceContainer'];for(let f of e[r(0x13d)]){let g=f['getRefactorings'](c);d[r(0x136)](...g);}for(const h of d){let i=this['refactorings'][r(0x135)](h['itemType']+'|'+h[r(0x152)]);i===undefined&&(i=[],this['refactorings'][r(0x133)](h[r(0x12a)]+'|'+h['name'],i)),i['push'](h);}}this[r(0x147)]();}}customElements[k(0x14a)](RefactorView['is'],RefactorView);
function a(){const s=['(.*)','getRefactorings','_refactor','_bindingsRefresh','1821882AxOfkG','match','ready','_selectedItems','clear','refactorServices','_selectionChangedHandler','1712992kIllsc','set','\x20to\x20','searchText','get','applyRefactoring','7802XhulFQ','key','openGroup','onSelectionChanged','129KzKtUI','name','push','dispose','7363899hKbTdu','Enter','selectedElements','24268Dqmtub','refactorings','selectedItems','370032kgDXsw','replace','commit','updateRefactorlist','selectionService','service','5zfWOZI','itemType','_instanceServiceContainer','\x20->\x20','designItem','node-projects-refactor-view','976178coOXGD'];a=function(){return s;};return a();}const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x1ba))/0x1+-parseInt(j(0x1ac))/0x2+parseInt(j(0x1b0))/0x3*(parseInt(j(0x1b7))/0x4)+-parseInt(j(0x1c0))/0x5*(-parseInt(j(0x19f))/0x6)+-parseInt(j(0x1c6))/0x7+parseInt(j(0x1a6))/0x8+-parseInt(j(0x1b4))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2daee));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x19b;const e=a();let f=e[c];return f;}export class RefactorView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
    }`;static ['is']=k(0x1c5);static ['properties']={};['_instanceServiceContainer'];['_selectionChangedHandler'];['_selectedItems'];[k(0x1a9)]=k(0x19b);['replaceText']='$1';[k(0x1b8)]=new Map();[k(0x1a1)](){this['_bindingsParse']();}set['instanceServiceContainer'](c){const l=k;this[l(0x1c2)]=c,this['_selectionChangedHandler']?.[l(0x1b3)](),this[l(0x1a5)]=this[l(0x1c2)][l(0x1be)][l(0x1af)]['on'](d=>{const m=l;this[m(0x1b9)]=d[m(0x1b6)];}),this[l(0x1b9)]=this['_instanceServiceContainer'][l(0x1be)]['selectedElements'];}get['selectedItems'](){return this['_selectedItems'];}set[k(0x1b9)](c){const n=k;this[n(0x1a2)]!=c&&(this[n(0x1a2)]=c,this['updateRefactorlist'](this[n(0x1a2)]));}[k(0x1bb)](){const o=k;let c=null;for(let d of this[o(0x1b8)]){let e=d[0x1][0x0][o(0x1b1)];const f=new RegExp(this['searchText']),g=e[o(0x1a0)](f);if(g){if(!c)c=d[0x1][0x0][o(0x1c4)][o(0x1ae)]('refactor\x20with\x20regex\x20'+this['searchText']+o(0x1c3)+this['replaceText']);const h=e[o(0x1bb)](f,this['replaceText']);h!=e&&this[o(0x1ab)](d,h);}}if(c)c[o(0x1bc)]();}[k(0x19d)](c,d){const p=k,e=d['target'];d[p(0x1ad)]==p(0x1b5)&&this[p(0x1ab)](c,e['value']);}['applyRefactoring'](c,d){const q=k,e=c[0x1][0x0][q(0x1c4)]['openGroup']('refactor\x20'+c[0x1][0x0]['name']+q(0x1a8)+d);for(let f of c[0x1]){f[q(0x1bf)]['refactor'](f,f[q(0x1b1)],d);}e['commit']();}[k(0x1bd)](c){const r=k;this['refactorings'][r(0x1a3)]();if(c&&c['length']){let d=[];const e=c[0x0]['serviceContainer'];for(let f of e[r(0x1a4)]){let g=f[r(0x19c)](c);d[r(0x1b2)](...g);}for(const h of d){let i=this[r(0x1b8)][r(0x1aa)](h[r(0x1c1)]+'|'+h['name']);i===undefined&&(i=[],this[r(0x1b8)][r(0x1a7)](h['itemType']+'|'+h[r(0x1b1)],i)),i[r(0x1b2)](h);}}this[r(0x19e)]();}}customElements['define'](RefactorView['is'],RefactorView);
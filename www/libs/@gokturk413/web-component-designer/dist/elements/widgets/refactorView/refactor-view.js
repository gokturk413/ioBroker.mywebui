function a(){const u=['define','searchText','_instanceServiceContainer','onSelectionChanged','109UbMLHn','_refactor','\x20->\x20','refactor','refactor\x20','_selectedItems','style','length','1282tyXizU','commit','(.*)','1059804beTqgY','value','645805JESZWK','\x20to\x20','ready','target','_selectionChangedHandler','5622006AhtbSR','service','selectedElements','instanceServiceContainer','80973ByMIZN','dispose','refactorServices','selectedItems','_bindingsParse','8867590QOBvfp','name','applyRefactoring','replace','368ehUtOp','11TPxYAN','selectionService','openGroup','refactor\x20with\x20regex\x20','updateRefactorlist','6647186PnwJtZ','15LaLQcD','getRefactorings','refactorings'];a=function(){return u;};return a();}const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x1fb))/0x1*(parseInt(j(0x1d6))/0x2)+-parseInt(j(0x1f4))/0x3*(-parseInt(j(0x1d9))/0x4)+parseInt(j(0x1db))/0x5+-parseInt(j(0x1e0))/0x6+parseInt(j(0x1f3))/0x7+-parseInt(j(0x1ed))/0x8*(-parseInt(j(0x1e4))/0x9)+-parseInt(j(0x1e9))/0xa*(parseInt(j(0x1ee))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe1863));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class RefactorView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
    </div>`;static [k(0x201)]=css`
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
    }`;static ['is']='node-projects-refactor-view';static ['properties']={};[k(0x1f9)];['_selectionChangedHandler'];['_selectedItems'];['searchText']=k(0x1d8);['replaceText']='$1';['refactorings']=new Map();[k(0x1dd)](){const l=k;this[l(0x1e8)]();}set[k(0x1e3)](c){const m=k;this['_instanceServiceContainer']=c,this[m(0x1df)]?.[m(0x1e5)](),this['_selectionChangedHandler']=this[m(0x1f9)]['selectionService'][m(0x1fa)]['on'](d=>{const n=m;this[n(0x1e7)]=d['selectedElements'];}),this['selectedItems']=this[m(0x1f9)][m(0x1ef)][m(0x1e2)];}get['selectedItems'](){const o=k;return this[o(0x200)];}set[k(0x1e7)](c){const p=k;this[p(0x200)]!=c&&(this['_selectedItems']=c,this[p(0x1f2)](this[p(0x200)]));}[k(0x1ec)](){const q=k;let c=null;for(let d of this['refactorings']){let e=d[0x1][0x0][q(0x1ea)];const f=new RegExp(this[q(0x1f8)]),g=e['match'](f);if(g){if(!c)c=d[0x1][0x0]['designItem'][q(0x1f0)](q(0x1f1)+this['searchText']+q(0x1fd)+this['replaceText']);const h=e['replace'](f,this['replaceText']);h!=e&&this['applyRefactoring'](d,h);}}if(c)c[q(0x1d7)]();}[k(0x1fc)](c,d){const r=k,e=d[r(0x1de)];d['key']=='Enter'&&this[r(0x1eb)](c,e[r(0x1da)]);}[k(0x1eb)](c,d){const s=k,e=c[0x1][0x0]['designItem']['openGroup'](s(0x1ff)+c[0x1][0x0][s(0x1ea)]+s(0x1dc)+d);for(let f of c[0x1]){f[s(0x1e1)][s(0x1fe)](f,f['name'],d);}e[s(0x1d7)]();}[k(0x1f2)](c){const t=k;this[t(0x1f6)]['clear']();if(c&&c[t(0x202)]){let d=[];const e=c[0x0]['serviceContainer'];for(let f of e[t(0x1e6)]){let g=f[t(0x1f5)](c);d['push'](...g);}for(const h of d){let i=this['refactorings']['get'](h['itemType']+'|'+h[t(0x1ea)]);i===undefined&&(i=[],this['refactorings']['set'](h['itemType']+'|'+h['name'],i)),i['push'](h);}}this['_bindingsRefresh']();}}function b(c,d){c=c-0x1d6;const e=a();let f=e[c];return f;}customElements[k(0x1f7)](RefactorView['is'],RefactorView);
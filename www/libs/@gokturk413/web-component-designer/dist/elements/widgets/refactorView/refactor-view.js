const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x1cd))/0x1*(-parseInt(j(0x1d9))/0x2)+-parseInt(j(0x1bf))/0x3*(-parseInt(j(0x1dd))/0x4)+parseInt(j(0x1bc))/0x5+-parseInt(j(0x1c4))/0x6+-parseInt(j(0x1d2))/0x7*(-parseInt(j(0x1d0))/0x8)+parseInt(j(0x1c0))/0x9*(parseInt(j(0x1be))/0xa)+-parseInt(j(0x1c8))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6508c));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x1bb;const e=a();let f=e[c];return f;}export class RefactorView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
    }`;static ['is']='node-projects-refactor-view';static [k(0x1d8)]={};[k(0x1ca)];[k(0x1de)];['_selectedItems'];['searchText']=k(0x1bb);[k(0x1db)]='$1';[k(0x1d3)]=new Map();['ready'](){this['_bindingsParse']();}set['instanceServiceContainer'](c){const l=k;this[l(0x1ca)]=c,this['_selectionChangedHandler']?.[l(0x1c5)](),this[l(0x1de)]=this[l(0x1ca)][l(0x1dc)]['onSelectionChanged']['on'](d=>{const m=l;this['selectedItems']=d[m(0x1ce)];}),this['selectedItems']=this['_instanceServiceContainer'][l(0x1dc)]['selectedElements'];}get['selectedItems'](){const n=k;return this[n(0x1c2)];}set['selectedItems'](c){const o=k;this['_selectedItems']!=c&&(this[o(0x1c2)]=c,this['updateRefactorlist'](this[o(0x1c2)]));}['replace'](){const p=k;let c=null;for(let d of this[p(0x1d3)]){let e=d[0x1][0x0]['name'];const f=new RegExp(this[p(0x1d4)]),g=e[p(0x1cc)](f);if(g){if(!c)c=d[0x1][0x0][p(0x1da)]['openGroup'](p(0x1e2)+this[p(0x1d4)]+'\x20->\x20'+this['replaceText']);const h=e[p(0x1c9)](f,this['replaceText']);h!=e&&this['applyRefactoring'](d,h);}}if(c)c['commit']();}[k(0x1df)](c,d){const q=k,e=d[q(0x1c1)];d[q(0x1c7)]=='Enter'&&this[q(0x1d6)](c,e[q(0x1c3)]);}['applyRefactoring'](c,d){const r=k,e=c[0x1][0x0][r(0x1da)][r(0x1e0)]('refactor\x20'+c[0x1][0x0]['name']+r(0x1d5)+d);for(let f of c[0x1]){f['service'][r(0x1e3)](f,f[r(0x1c6)],d);}e['commit']();}[k(0x1cb)](c){const s=k;this['refactorings']['clear']();if(c&&c['length']){let d=[];const e=c[0x0]['serviceContainer'];for(let f of e[s(0x1e1)]){let g=f[s(0x1cf)](c);d['push'](...g);}for(const h of d){let i=this[s(0x1d3)]['get'](h[s(0x1d1)]+'|'+h[s(0x1c6)]);i===undefined&&(i=[],this[s(0x1d3)]['set'](h[s(0x1d1)]+'|'+h[s(0x1c6)],i)),i[s(0x1d7)](h);}}this[s(0x1bd)]();}}function a(){const t=['applyRefactoring','push','properties','2ORPMqm','designItem','replaceText','selectionService','1024EhPNlX','_selectionChangedHandler','_refactor','openGroup','refactorServices','refactor\x20with\x20regex\x20','refactor','(.*)','3358135fxhMSn','_bindingsRefresh','2680490AJHrwu','2091BdceYs','18fOidFp','target','_selectedItems','value','1939092mzMWJa','dispose','name','key','21568459jFjXbD','replace','_instanceServiceContainer','updateRefactorlist','match','756434XzqJHy','selectedElements','getRefactorings','16CETxFb','itemType','1943186NSVIxC','refactorings','searchText','\x20to\x20'];a=function(){return t;};return a();}customElements['define'](RefactorView['is'],RefactorView);
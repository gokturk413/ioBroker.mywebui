function b(c,d){c=c-0x1d5;const e=a();let f=e[c];return f;}const k=b;function a(){const s=['115ZTGGBr','getRefactorings','refactor\x20','get','Enter','node-projects-refactor-view','openGroup','_selectedItems','applyRefactoring','370cfpjYa','_refactor','selectedElements','267788nDiYyH','refactor','_selectionChangedHandler','length','set','searchText','2248902SWROHc','push','9952eKStsa','refactor\x20with\x20regex\x20','ready','onSelectionChanged','match','name','designItem','commit','replaceText','\x20to\x20','513194RkCLxA','selectionService','135653aGuoKs','366ngtkFF','refactorings','selectedItems','1ikgXWK','instanceServiceContainer','2043698iegFxG','_instanceServiceContainer','158643EzcLzj'];a=function(){return s;};return a();}(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x1f5))/0x1*(-parseInt(j(0x1f7))/0x2)+parseInt(j(0x1e3))/0x3+parseInt(j(0x1dd))/0x4*(-parseInt(j(0x1fa))/0x5)+parseInt(j(0x1f2))/0x6*(parseInt(j(0x1f1))/0x7)+-parseInt(j(0x1e5))/0x8+-parseInt(j(0x1f9))/0x9*(parseInt(j(0x1da))/0xa)+parseInt(j(0x1ef))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc5078));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class RefactorView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
    }`;static ['is']=k(0x1d6);static ['properties']={};[k(0x1f8)];[k(0x1df)];[k(0x1d8)];['searchText']='(.*)';[k(0x1ed)]='$1';['refactorings']=new Map();[k(0x1e7)](){this['_bindingsParse']();}set[k(0x1f6)](c){const l=k;this[l(0x1f8)]=c,this[l(0x1df)]?.['dispose'](),this['_selectionChangedHandler']=this['_instanceServiceContainer']['selectionService'][l(0x1e8)]['on'](d=>{const m=l;this[m(0x1f4)]=d['selectedElements'];}),this[l(0x1f4)]=this[l(0x1f8)][l(0x1f0)][l(0x1dc)];}get[k(0x1f4)](){return this['_selectedItems'];}set['selectedItems'](c){const n=k;this['_selectedItems']!=c&&(this[n(0x1d8)]=c,this['updateRefactorlist'](this['_selectedItems']));}['replace'](){const o=k;let c=null;for(let d of this['refactorings']){let e=d[0x1][0x0][o(0x1ea)];const f=new RegExp(this[o(0x1e2)]),g=e[o(0x1e9)](f);if(g){if(!c)c=d[0x1][0x0][o(0x1eb)][o(0x1d7)](o(0x1e6)+this[o(0x1e2)]+'\x20->\x20'+this[o(0x1ed)]);const h=e['replace'](f,this['replaceText']);h!=e&&this[o(0x1d9)](d,h);}}if(c)c[o(0x1ec)]();}[k(0x1db)](c,d){const p=k,e=d['target'];d['key']==p(0x1d5)&&this[p(0x1d9)](c,e['value']);}[k(0x1d9)](c,d){const q=k,e=c[0x1][0x0][q(0x1eb)][q(0x1d7)](q(0x1fc)+c[0x1][0x0][q(0x1ea)]+q(0x1ee)+d);for(let f of c[0x1]){f['service'][q(0x1de)](f,f['name'],d);}e['commit']();}['updateRefactorlist'](c){const r=k;this['refactorings']['clear']();if(c&&c[r(0x1e0)]){let d=[];const e=c[0x0]['serviceContainer'];for(let f of e['refactorServices']){let g=f[r(0x1fb)](c);d[r(0x1e4)](...g);}for(const h of d){let i=this[r(0x1f3)][r(0x1fd)](h['itemType']+'|'+h[r(0x1ea)]);i===undefined&&(i=[],this['refactorings'][r(0x1e1)](h['itemType']+'|'+h[r(0x1ea)],i)),i['push'](h);}}this['_bindingsRefresh']();}}customElements['define'](RefactorView['is'],RefactorView);
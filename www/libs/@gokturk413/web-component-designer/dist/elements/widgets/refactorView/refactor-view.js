const k=b;function a(){const t=['replace','dispose','target','selectedItems','640008xxSTTE','40VtsNxR','designItem','_selectionChangedHandler','7vWGHIb','\x20to\x20','searchText','define','256724yoQVno','template','style','4cocyjY','commit','2VWvakq','applyRefactoring','636325YkazdV','refactor\x20','ready','push','_selectedItems','1486815OHCMTZ','onSelectionChanged','name','_bindingsRefresh','\x20->\x20','selectedElements','instanceServiceContainer','refactor\x20with\x20regex\x20','clear','572811uKhSfd','serviceContainer','replaceText','1318722TfCTFc','2746683wrRDBf'];a=function(){return t;};return a();}(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x190))/0x1*(-parseInt(j(0x195))/0x2)+parseInt(j(0x17f))/0x3*(parseInt(j(0x193))/0x4)+parseInt(j(0x197))/0x5+-parseInt(j(0x182))/0x6+parseInt(j(0x18c))/0x7*(parseInt(j(0x188))/0x8)+-parseInt(j(0x183))/0x9+parseInt(j(0x189))/0xa*(parseInt(j(0x176))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x265ed));function b(c,d){c=c-0x174;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class RefactorView extends BaseCustomWebComponentConstructorAppend{static [k(0x191)]=html`
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
    </div>`;static [k(0x192)]=css`
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
    }`;static ['is']='node-projects-refactor-view';static ['properties']={};['_instanceServiceContainer'];['_selectionChangedHandler'];['_selectedItems'];[k(0x18e)]='(.*)';['replaceText']='$1';['refactorings']=new Map();[k(0x199)](){this['_bindingsParse']();}set[k(0x17c)](c){const l=k;this['_instanceServiceContainer']=c,this[l(0x18b)]?.[l(0x185)](),this['_selectionChangedHandler']=this['_instanceServiceContainer']['selectionService'][l(0x177)]['on'](d=>{const m=l;this['selectedItems']=d[m(0x17b)];}),this['selectedItems']=this['_instanceServiceContainer']['selectionService'][l(0x17b)];}get[k(0x187)](){const n=k;return this[n(0x175)];}set[k(0x187)](c){const o=k;this['_selectedItems']!=c&&(this[o(0x175)]=c,this['updateRefactorlist'](this['_selectedItems']));}[k(0x184)](){const p=k;let c=null;for(let d of this['refactorings']){let e=d[0x1][0x0]['name'];const f=new RegExp(this[p(0x18e)]),g=e['match'](f);if(g){if(!c)c=d[0x1][0x0][p(0x18a)]['openGroup'](p(0x17d)+this['searchText']+p(0x17a)+this[p(0x181)]);const h=e[p(0x184)](f,this['replaceText']);h!=e&&this['applyRefactoring'](d,h);}}if(c)c[p(0x194)]();}['_refactor'](c,d){const q=k,e=d[q(0x186)];d['key']=='Enter'&&this['applyRefactoring'](c,e['value']);}[k(0x196)](c,d){const r=k,e=c[0x1][0x0][r(0x18a)]['openGroup'](r(0x198)+c[0x1][0x0]['name']+r(0x18d)+d);for(let f of c[0x1]){f['service']['refactor'](f,f['name'],d);}e['commit']();}['updateRefactorlist'](c){const s=k;this['refactorings'][s(0x17e)]();if(c&&c['length']){let d=[];const e=c[0x0][s(0x180)];for(let f of e['refactorServices']){let g=f['getRefactorings'](c);d[s(0x174)](...g);}for(const h of d){let i=this['refactorings']['get'](h['itemType']+'|'+h[s(0x178)]);i===undefined&&(i=[],this['refactorings']['set'](h['itemType']+'|'+h[s(0x178)],i)),i['push'](h);}}this[s(0x179)]();}}customElements[k(0x18f)](RefactorView['is'],RefactorView);
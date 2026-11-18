const k=b;function b(c,d){c=c-0x10e;const e=a();let f=e[c];return f;}(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x114))/0x1*(-parseInt(j(0x118))/0x2)+parseInt(j(0x135))/0x3*(-parseInt(j(0x120))/0x4)+-parseInt(j(0x121))/0x5+parseInt(j(0x126))/0x6+-parseInt(j(0x12c))/0x7+parseInt(j(0x12d))/0x8+-parseInt(j(0x132))/0x9*(-parseInt(j(0x134))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x54099));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class RefactorView extends BaseCustomWebComponentConstructorAppend{static [k(0x119)]=html`
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
    </div>`;static [k(0x137)]=css`
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
    }`;static ['is']=k(0x12e);static [k(0x115)]={};[k(0x113)];['_selectionChangedHandler'];['_selectedItems'];[k(0x11f)]='(.*)';['replaceText']='$1';['refactorings']=new Map();[k(0x12f)](){this['_bindingsParse']();}set['instanceServiceContainer'](c){const l=k;this[l(0x113)]=c,this['_selectionChangedHandler']?.[l(0x127)](),this['_selectionChangedHandler']=this['_instanceServiceContainer'][l(0x112)][l(0x131)]['on'](d=>{const m=l;this[m(0x111)]=d['selectedElements'];}),this['selectedItems']=this['_instanceServiceContainer'][l(0x112)][l(0x123)];}get['selectedItems'](){return this['_selectedItems'];}set[k(0x111)](c){const n=k;this['_selectedItems']!=c&&(this[n(0x116)]=c,this['updateRefactorlist'](this[n(0x116)]));}[k(0x122)](){const o=k;let c=null;for(let d of this[o(0x10f)]){let e=d[0x1][0x0]['name'];const f=new RegExp(this[o(0x11f)]),g=e['match'](f);if(g){if(!c)c=d[0x1][0x0][o(0x11c)][o(0x10e)]('refactor\x20with\x20regex\x20'+this[o(0x11f)]+o(0x124)+this[o(0x12b)]);const h=e['replace'](f,this['replaceText']);h!=e&&this[o(0x125)](d,h);}}if(c)c[o(0x136)]();}['_refactor'](c,d){const p=k,e=d['target'];d['key']==p(0x12a)&&this['applyRefactoring'](c,e[p(0x11e)]);}['applyRefactoring'](c,d){const q=k,e=c[0x1][0x0][q(0x11c)][q(0x10e)]('refactor\x20'+c[0x1][0x0]['name']+q(0x11d)+d);for(let f of c[0x1]){f['service']['refactor'](f,f[q(0x129)],d);}e[q(0x136)]();}['updateRefactorlist'](c){const r=k;this[r(0x10f)][r(0x11a)]();if(c&&c['length']){let d=[];const e=c[0x0][r(0x110)];for(let f of e[r(0x130)]){let g=f['getRefactorings'](c);d[r(0x128)](...g);}for(const h of d){let i=this['refactorings'][r(0x117)](h['itemType']+'|'+h[r(0x129)]);i===undefined&&(i=[],this[r(0x10f)]['set'](h[r(0x11b)]+'|'+h['name'],i)),i['push'](h);}}this['_bindingsRefresh']();}}customElements[k(0x133)](RefactorView['is'],RefactorView);function a(){const s=['selectionService','_instanceServiceContainer','13ueLBxx','properties','_selectedItems','get','73978EaSClF','template','clear','itemType','designItem','\x20to\x20','value','searchText','107492CPIFtp','2736290wsTIKM','replace','selectedElements','\x20->\x20','applyRefactoring','1923342mWkmQk','dispose','push','name','Enter','replaceText','121884DULeqA','2123440LbfZbm','node-projects-refactor-view','ready','refactorServices','onSelectionChanged','18jCHsHZ','define','5765530muoErz','39CZTXEM','commit','style','openGroup','refactorings','serviceContainer','selectedItems'];a=function(){return s;};return a();}
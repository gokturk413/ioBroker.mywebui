function a(){const s=['_bindingsRefresh','updateRefactorlist','refactorServices','itemType','selectionService','5JtbiDx','set','11CXUyBz','16110672BPNWVN','service','171daDaZZ','push','searchText','43815JtdiiT','3572821STqcvE','_selectedItems','designItem','commit','7816YiHauV','properties','applyRefactoring','target','clear','onSelectionChanged','4917520KKILCx','name','getRefactorings','get','replaceText','1075194iJwlUO','Enter','306iDFcwe','selectedElements','ready','\x20to\x20','replace','dispose','_instanceServiceContainer','refactor\x20with\x20regex\x20','template','3892eQUEZE','serviceContainer','refactorings','140CtJzNr'];a=function(){return s;};return a();}const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x1b2))/0x1*(parseInt(j(0x1d0))/0x2)+-parseInt(j(0x1b5))/0x3*(-parseInt(j(0x1a7))/0x4)+parseInt(j(0x1ad))/0x5*(-parseInt(j(0x1c5))/0x6)+parseInt(j(0x1b6))/0x7+-parseInt(j(0x1ba))/0x8*(parseInt(j(0x1c7))/0x9)+parseInt(j(0x1c0))/0xa+-parseInt(j(0x1af))/0xb*(parseInt(j(0x1b0))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x47133));function b(c,d){c=c-0x1a6;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class RefactorView extends BaseCustomWebComponentConstructorAppend{static [k(0x1cf)]=html`
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
    }`;static ['is']='node-projects-refactor-view';static [k(0x1bb)]={};[k(0x1cd)];['_selectionChangedHandler'];[k(0x1b7)];[k(0x1b4)]='(.*)';[k(0x1c4)]='$1';[k(0x1a6)]=new Map();[k(0x1c9)](){this['_bindingsParse']();}set['instanceServiceContainer'](c){const l=k;this['_instanceServiceContainer']=c,this['_selectionChangedHandler']?.[l(0x1cc)](),this['_selectionChangedHandler']=this[l(0x1cd)][l(0x1ac)][l(0x1bf)]['on'](d=>{const m=l;this['selectedItems']=d[m(0x1c8)];}),this['selectedItems']=this['_instanceServiceContainer'][l(0x1ac)][l(0x1c8)];}get['selectedItems'](){return this['_selectedItems'];}set['selectedItems'](c){const n=k;this[n(0x1b7)]!=c&&(this['_selectedItems']=c,this[n(0x1a9)](this[n(0x1b7)]));}['replace'](){const o=k;let c=null;for(let d of this[o(0x1a6)]){let e=d[0x1][0x0][o(0x1c1)];const f=new RegExp(this['searchText']),g=e['match'](f);if(g){if(!c)c=d[0x1][0x0][o(0x1b8)]['openGroup'](o(0x1ce)+this[o(0x1b4)]+'\x20->\x20'+this['replaceText']);const h=e[o(0x1cb)](f,this[o(0x1c4)]);h!=e&&this[o(0x1bc)](d,h);}}if(c)c['commit']();}['_refactor'](c,d){const p=k,e=d[p(0x1bd)];d['key']==p(0x1c6)&&this['applyRefactoring'](c,e['value']);}[k(0x1bc)](c,d){const q=k,e=c[0x1][0x0]['designItem']['openGroup']('refactor\x20'+c[0x1][0x0][q(0x1c1)]+q(0x1ca)+d);for(let f of c[0x1]){f[q(0x1b1)]['refactor'](f,f[q(0x1c1)],d);}e[q(0x1b9)]();}['updateRefactorlist'](c){const r=k;this['refactorings'][r(0x1be)]();if(c&&c['length']){let d=[];const e=c[0x0][r(0x1d1)];for(let f of e[r(0x1aa)]){let g=f[r(0x1c2)](c);d[r(0x1b3)](...g);}for(const h of d){let i=this[r(0x1a6)][r(0x1c3)](h[r(0x1ab)]+'|'+h['name']);i===undefined&&(i=[],this['refactorings'][r(0x1ae)](h[r(0x1ab)]+'|'+h['name'],i)),i['push'](h);}}this[r(0x1a8)]();}}customElements['define'](RefactorView['is'],RefactorView);
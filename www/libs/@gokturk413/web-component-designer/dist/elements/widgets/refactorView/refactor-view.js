function b(c,d){c=c-0x89;const e=a();let f=e[c];return f;}const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0xaa))/0x1+-parseInt(j(0xab))/0x2*(-parseInt(j(0xa1))/0x3)+parseInt(j(0xb2))/0x4*(parseInt(j(0xaf))/0x5)+-parseInt(j(0xb4))/0x6*(parseInt(j(0x8b))/0x7)+parseInt(j(0x89))/0x8*(-parseInt(j(0x91))/0x9)+-parseInt(j(0xad))/0xa*(parseInt(j(0x90))/0xb)+parseInt(j(0xa6))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe4361));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class RefactorView extends BaseCustomWebComponentConstructorAppend{static [k(0x97)]=html`
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
    }`;static ['is']=k(0x9f);static ['properties']={};['_instanceServiceContainer'];['_selectionChangedHandler'];['_selectedItems'];['searchText']='(.*)';['replaceText']='$1';[k(0x9e)]=new Map();[k(0xa0)](){this['_bindingsParse']();}set[k(0xa5)](c){const l=k;this[l(0x8e)]=c,this['_selectionChangedHandler']?.[l(0x94)](),this['_selectionChangedHandler']=this[l(0x8e)]['selectionService'][l(0xa9)]['on'](d=>{const m=l;this[m(0x8a)]=d['selectedElements'];}),this['selectedItems']=this[l(0x8e)]['selectionService']['selectedElements'];}get['selectedItems'](){const n=k;return this[n(0xa4)];}set[k(0x8a)](c){const o=k;this[o(0xa4)]!=c&&(this[o(0xa4)]=c,this['updateRefactorlist'](this[o(0xa4)]));}['replace'](){const p=k;let c=null;for(let d of this[p(0x9e)]){let e=d[0x1][0x0][p(0xb6)];const f=new RegExp(this['searchText']),g=e[p(0xb1)](f);if(g){if(!c)c=d[0x1][0x0][p(0x8d)]['openGroup'](p(0xa3)+this['searchText']+p(0xae)+this[p(0xa8)]);const h=e['replace'](f,this[p(0xa8)]);h!=e&&this['applyRefactoring'](d,h);}}if(c)c[p(0xa7)]();}['_refactor'](c,d){const q=k,e=d[q(0xb0)];d[q(0x9c)]==q(0xb7)&&this[q(0x9d)](c,e[q(0x9b)]);}[k(0x9d)](c,d){const r=k,e=c[0x1][0x0]['designItem'][r(0x93)](r(0x95)+c[0x1][0x0][r(0xb6)]+r(0x96)+d);for(let f of c[0x1]){f['service'][r(0x98)](f,f[r(0xb6)],d);}e['commit']();}[k(0xa2)](c){const s=k;this['refactorings'][s(0x9a)]();if(c&&c['length']){let d=[];const e=c[0x0][s(0xac)];for(let f of e[s(0x8c)]){let g=f[s(0x8f)](c);d[s(0x99)](...g);}for(const h of d){let i=this['refactorings'][s(0xb3)](h[s(0x92)]+'|'+h['name']);i===undefined&&(i=[],this[s(0x9e)]['set'](h[s(0x92)]+'|'+h['name'],i)),i['push'](h);}}this[s(0xb5)]();}}customElements['define'](RefactorView['is'],RefactorView);function a(){const t=['ready','38649nCdrmG','updateRefactorlist','refactor\x20with\x20regex\x20','_selectedItems','instanceServiceContainer','5991336OcQgrQ','commit','replaceText','onSelectionChanged','1472675fOrAvr','186lNOTJl','serviceContainer','6350atzpCa','\x20->\x20','995XKsjUF','target','match','21092cxSsCV','get','1646916WRFkNo','_bindingsRefresh','name','Enter','48WWMAaO','selectedItems','28APgksJ','refactorServices','designItem','_instanceServiceContainer','getRefactorings','6248fHdeXm','2739033ivaqys','itemType','openGroup','dispose','refactor\x20','\x20to\x20','template','refactor','push','clear','value','key','applyRefactoring','refactorings','node-projects-refactor-view'];a=function(){return t;};return a();}
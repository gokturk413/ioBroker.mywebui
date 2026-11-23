const k=b;function b(c,d){c=c-0xd1;const e=a();let f=e[c];return f;}(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0xec))/0x1+parseInt(j(0xe8))/0x2*(-parseInt(j(0xdc))/0x3)+-parseInt(j(0xfb))/0x4*(parseInt(j(0xd2))/0x5)+parseInt(j(0xde))/0x6*(parseInt(j(0xd9))/0x7)+parseInt(j(0xdf))/0x8+-parseInt(j(0xea))/0x9*(parseInt(j(0xe3))/0xa)+-parseInt(j(0xe7))/0xb*(-parseInt(j(0xf8))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd7241));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class RefactorView extends BaseCustomWebComponentConstructorAppend{static [k(0xd1)]=html`
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
    </div>`;static [k(0xf3)]=css`
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
    }`;static ['is']='node-projects-refactor-view';static [k(0xdd)]={};['_instanceServiceContainer'];['_selectionChangedHandler'];[k(0xd7)];['searchText']='(.*)';['replaceText']='$1';[k(0xf4)]=new Map();['ready'](){this['_bindingsParse']();}set[k(0xda)](c){const l=k;this[l(0xd8)]=c,this['_selectionChangedHandler']?.[l(0xe9)](),this['_selectionChangedHandler']=this[l(0xd8)]['selectionService']['onSelectionChanged']['on'](d=>{const m=l;this[m(0xee)]=d[m(0xfa)];}),this['selectedItems']=this['_instanceServiceContainer']['selectionService'][l(0xfa)];}get['selectedItems'](){return this['_selectedItems'];}set[k(0xee)](c){const n=k;this['_selectedItems']!=c&&(this['_selectedItems']=c,this[n(0xf7)](this[n(0xd7)]));}['replace'](){const o=k;let c=null;for(let d of this['refactorings']){let e=d[0x1][0x0][o(0xf9)];const f=new RegExp(this['searchText']),g=e['match'](f);if(g){if(!c)c=d[0x1][0x0][o(0xe6)][o(0xeb)](o(0xe1)+this[o(0xf1)]+'\x20->\x20'+this['replaceText']);const h=e['replace'](f,this[o(0xf2)]);h!=e&&this['applyRefactoring'](d,h);}}if(c)c[o(0xdb)]();}['_refactor'](c,d){const p=k,e=d[p(0xd3)];d['key']==p(0xe2)&&this['applyRefactoring'](c,e[p(0xd5)]);}[k(0xf0)](c,d){const q=k,e=c[0x1][0x0]['designItem']['openGroup'](q(0xf6)+c[0x1][0x0]['name']+q(0xd6)+d);for(let f of c[0x1]){f[q(0xd4)][q(0xe5)](f,f[q(0xf9)],d);}e[q(0xdb)]();}[k(0xf7)](c){const r=k;this[r(0xf4)]['clear']();if(c&&c['length']){let d=[];const e=c[0x0]['serviceContainer'];for(let f of e[r(0xef)]){let g=f[r(0xe0)](c);d['push'](...g);}for(const h of d){let i=this['refactorings'][r(0xf5)](h[r(0xed)]+'|'+h[r(0xf9)]);i===undefined&&(i=[],this['refactorings'][r(0xe4)](h[r(0xed)]+'|'+h[r(0xf9)],i)),i['push'](h);}}this['_bindingsRefresh']();}}function a(){const s=['48kEpsuA','name','selectedElements','124ADzIie','template','242410qxwUea','target','service','value','\x20to\x20','_selectedItems','_instanceServiceContainer','570465anuoRw','instanceServiceContainer','commit','44853hAtAXt','properties','102rmHiGk','1472184SNxJrZ','getRefactorings','refactor\x20with\x20regex\x20','Enter','40100IYkopZ','set','refactor','designItem','9288246bQBuJB','18AytDxp','dispose','1899iiAQqz','openGroup','1582154TEOilH','itemType','selectedItems','refactorServices','applyRefactoring','searchText','replaceText','style','refactorings','get','refactor\x20','updateRefactorlist'];a=function(){return s;};return a();}customElements['define'](RefactorView['is'],RefactorView);
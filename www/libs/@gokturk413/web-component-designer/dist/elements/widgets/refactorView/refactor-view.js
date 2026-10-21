function a(){const r=['(.*)','818880QpQhnY','42SxBeeO','_selectionChangedHandler','\x20->\x20','serviceContainer','updateRefactorlist','ready','3cOpHtb','_instanceServiceContainer','template','itemType','getRefactorings','103650pHSwLt','target','73096NqWocd','51288ZWCneB','applyRefactoring','selectedItems','refactorings','dispose','openGroup','replace','refactor','50994dWaQZs','replaceText','8mtejlC','length','selectedElements','2542070SxlaKf','key','name','clear','836QPEqUV','_selectedItems','value','1708028zkwRcf','refactor\x20','push','Enter','commit','selectionService','_refactor'];a=function(){return r;};return a();}const k=b;function b(c,d){c=c-0x11d;const e=a();let f=e[c];return f;}(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x147))/0x1*(parseInt(j(0x124))/0x2)+parseInt(j(0x141))/0x3*(parseInt(j(0x123))/0x4)+parseInt(j(0x131))/0x5+parseInt(j(0x140))/0x6+parseInt(j(0x138))/0x7+-parseInt(j(0x12e))/0x8*(parseInt(j(0x12c))/0x9)+-parseInt(j(0x121))/0xa*(parseInt(j(0x135))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x42fdc));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class RefactorView extends BaseCustomWebComponentConstructorAppend{static [k(0x11e)]=html`
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
    }`;static ['is']='node-projects-refactor-view';static ['properties']={};[k(0x11d)];[k(0x142)];['_selectedItems'];['searchText']=k(0x13f);[k(0x12d)]='$1';['refactorings']=new Map();[k(0x146)](){this['_bindingsParse']();}set['instanceServiceContainer'](c){const l=k;this['_instanceServiceContainer']=c,this[l(0x142)]?.[l(0x128)](),this['_selectionChangedHandler']=this[l(0x11d)][l(0x13d)]['onSelectionChanged']['on'](d=>{this['selectedItems']=d['selectedElements'];}),this[l(0x126)]=this['_instanceServiceContainer'][l(0x13d)][l(0x130)];}get['selectedItems'](){return this['_selectedItems'];}set[k(0x126)](c){const m=k;this[m(0x136)]!=c&&(this['_selectedItems']=c,this['updateRefactorlist'](this['_selectedItems']));}[k(0x12a)](){const n=k;let c=null;for(let d of this[n(0x127)]){let e=d[0x1][0x0]['name'];const f=new RegExp(this['searchText']),g=e['match'](f);if(g){if(!c)c=d[0x1][0x0]['designItem'][n(0x129)]('refactor\x20with\x20regex\x20'+this['searchText']+n(0x143)+this['replaceText']);const h=e[n(0x12a)](f,this['replaceText']);h!=e&&this[n(0x125)](d,h);}}if(c)c['commit']();}[k(0x13e)](c,d){const o=k,e=d[o(0x122)];d[o(0x132)]==o(0x13b)&&this[o(0x125)](c,e[o(0x137)]);}[k(0x125)](c,d){const p=k,e=c[0x1][0x0]['designItem'][p(0x129)](p(0x139)+c[0x1][0x0][p(0x133)]+'\x20to\x20'+d);for(let f of c[0x1]){f['service'][p(0x12b)](f,f[p(0x133)],d);}e[p(0x13c)]();}[k(0x145)](c){const q=k;this['refactorings'][q(0x134)]();if(c&&c[q(0x12f)]){let d=[];const e=c[0x0][q(0x144)];for(let f of e['refactorServices']){let g=f[q(0x120)](c);d[q(0x13a)](...g);}for(const h of d){let i=this['refactorings']['get'](h[q(0x11f)]+'|'+h[q(0x133)]);i===undefined&&(i=[],this[q(0x127)]['set'](h[q(0x11f)]+'|'+h[q(0x133)],i)),i[q(0x13a)](h);}}this['_bindingsRefresh']();}}customElements['define'](RefactorView['is'],RefactorView);
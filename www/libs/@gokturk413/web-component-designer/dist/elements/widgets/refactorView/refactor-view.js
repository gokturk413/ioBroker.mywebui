const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x11e))/0x1+parseInt(j(0x127))/0x2+-parseInt(j(0x12c))/0x3*(-parseInt(j(0x122))/0x4)+-parseInt(j(0x107))/0x5+parseInt(j(0x10e))/0x6*(parseInt(j(0x108))/0x7)+parseInt(j(0x120))/0x8+-parseInt(j(0x10f))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x25bf6));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x105;const e=a();let f=e[c];return f;}function a(){const s=['_instanceServiceContainer','searchText','(.*)','service','_selectedItems','clear','replace','itemType','300009AcaTYU','get','1465880UyWZJw','selectedItems','84SmoFpF','dispose','applyRefactoring','designItem','commit','390136ROGRYh','refactor','Enter','replaceText','openGroup','42279bQkOfA','key','ready','513805nAJHYQ','35bTgIit','updateRefactorlist','value','refactor\x20with\x20regex\x20','style','_selectionChangedHandler','94176PtzDCG','7158330lMSZao','refactorings','selectionService','name','selectedElements','instanceServiceContainer','onSelectionChanged'];a=function(){return s;};return a();}export class RefactorView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
    </div>`;static [k(0x10c)]=css`
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
    }`;static ['is']='node-projects-refactor-view';static ['properties']={};[k(0x116)];['_selectionChangedHandler'];['_selectedItems'];[k(0x117)]=k(0x118);['replaceText']='$1';['refactorings']=new Map();[k(0x106)](){this['_bindingsParse']();}set[k(0x114)](c){const l=k;this['_instanceServiceContainer']=c,this[l(0x10d)]?.[l(0x123)](),this['_selectionChangedHandler']=this[l(0x116)]['selectionService'][l(0x115)]['on'](d=>{const m=l;this['selectedItems']=d[m(0x113)];}),this[l(0x121)]=this['_instanceServiceContainer'][l(0x111)]['selectedElements'];}get[k(0x121)](){return this['_selectedItems'];}set['selectedItems'](c){const n=k;this[n(0x11a)]!=c&&(this[n(0x11a)]=c,this[n(0x109)](this['_selectedItems']));}['replace'](){const o=k;let c=null;for(let d of this['refactorings']){let e=d[0x1][0x0]['name'];const f=new RegExp(this['searchText']),g=e['match'](f);if(g){if(!c)c=d[0x1][0x0][o(0x125)][o(0x12b)](o(0x10b)+this[o(0x117)]+'\x20->\x20'+this[o(0x12a)]);const h=e[o(0x11c)](f,this[o(0x12a)]);h!=e&&this[o(0x124)](d,h);}}if(c)c['commit']();}['_refactor'](c,d){const p=k,e=d['target'];d[p(0x105)]==p(0x129)&&this[p(0x124)](c,e[p(0x10a)]);}['applyRefactoring'](c,d){const q=k,e=c[0x1][0x0][q(0x125)][q(0x12b)]('refactor\x20'+c[0x1][0x0]['name']+'\x20to\x20'+d);for(let f of c[0x1]){f[q(0x119)][q(0x128)](f,f['name'],d);}e[q(0x126)]();}[k(0x109)](c){const r=k;this[r(0x110)][r(0x11b)]();if(c&&c['length']){let d=[];const e=c[0x0]['serviceContainer'];for(let f of e['refactorServices']){let g=f['getRefactorings'](c);d['push'](...g);}for(const h of d){let i=this['refactorings'][r(0x11f)](h[r(0x11d)]+'|'+h[r(0x112)]);i===undefined&&(i=[],this['refactorings']['set'](h[r(0x11d)]+'|'+h['name'],i)),i['push'](h);}}this['_bindingsRefresh']();}}customElements['define'](RefactorView['is'],RefactorView);
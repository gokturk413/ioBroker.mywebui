const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x110))/0x1+-parseInt(j(0xfd))/0x2*(-parseInt(j(0x106))/0x3)+parseInt(j(0x102))/0x4+parseInt(j(0x10f))/0x5*(-parseInt(j(0x111))/0x6)+parseInt(j(0x11a))/0x7+parseInt(j(0xfa))/0x8*(parseInt(j(0x108))/0x9)+parseInt(j(0x10b))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa1e15));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function a(){const u=['refactor\x20','getRefactorings','(.*)','properties','Enter','openGroup','432THMGxi','refactorServices','_instanceServiceContainer','2163254WNBgRo','clear','selectedElements','define','dispose','756144LhNqjz','_bindingsParse','template','replaceText','3MEteEc','length','1233kskNuk','_selectedItems','name','1563140iEgCVc','service','instanceServiceContainer','selectedItems','30jVffzv','971863iBArlI','965604ELHWsE','refactor\x20with\x20regex\x20','style','designItem','get','commit','replace','applyRefactoring','value','8163071cWefqP','searchText','key','refactorings'];a=function(){return u;};return a();}function b(c,d){c=c-0xf6;const e=a();let f=e[c];return f;}export class RefactorView extends BaseCustomWebComponentConstructorAppend{static [k(0x104)]=html`
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
    </div>`;static [k(0x113)]=css`
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
    }`;static ['is']='node-projects-refactor-view';static [k(0xf7)]={};[k(0xfc)];['_selectionChangedHandler'];['_selectedItems'];[k(0x11b)]=k(0xf6);['replaceText']='$1';[k(0x11d)]=new Map();['ready'](){const l=k;this[l(0x103)]();}set[k(0x10d)](c){const m=k;this[m(0xfc)]=c,this['_selectionChangedHandler']?.[m(0x101)](),this['_selectionChangedHandler']=this['_instanceServiceContainer']['selectionService']['onSelectionChanged']['on'](d=>{const n=m;this[n(0x10e)]=d[n(0xff)];}),this[m(0x10e)]=this['_instanceServiceContainer']['selectionService'][m(0xff)];}get['selectedItems'](){const o=k;return this[o(0x109)];}set['selectedItems'](c){const p=k;this['_selectedItems']!=c&&(this[p(0x109)]=c,this['updateRefactorlist'](this['_selectedItems']));}[k(0x117)](){const q=k;let c=null;for(let d of this[q(0x11d)]){let e=d[0x1][0x0]['name'];const f=new RegExp(this['searchText']),g=e['match'](f);if(g){if(!c)c=d[0x1][0x0]['designItem']['openGroup'](q(0x112)+this[q(0x11b)]+'\x20->\x20'+this['replaceText']);const h=e[q(0x117)](f,this[q(0x105)]);h!=e&&this[q(0x118)](d,h);}}if(c)c[q(0x116)]();}['_refactor'](c,d){const r=k,e=d['target'];d[r(0x11c)]==r(0xf8)&&this[r(0x118)](c,e[r(0x119)]);}['applyRefactoring'](c,d){const s=k,e=c[0x1][0x0][s(0x114)][s(0xf9)](s(0x11e)+c[0x1][0x0][s(0x10a)]+'\x20to\x20'+d);for(let f of c[0x1]){f[s(0x10c)]['refactor'](f,f['name'],d);}e['commit']();}['updateRefactorlist'](c){const t=k;this[t(0x11d)][t(0xfe)]();if(c&&c[t(0x107)]){let d=[];const e=c[0x0]['serviceContainer'];for(let f of e[t(0xfb)]){let g=f[t(0x11f)](c);d['push'](...g);}for(const h of d){let i=this['refactorings'][t(0x115)](h['itemType']+'|'+h[t(0x10a)]);i===undefined&&(i=[],this[t(0x11d)]['set'](h['itemType']+'|'+h['name'],i)),i['push'](h);}}this['_bindingsRefresh']();}}customElements[k(0x100)](RefactorView['is'],RefactorView);
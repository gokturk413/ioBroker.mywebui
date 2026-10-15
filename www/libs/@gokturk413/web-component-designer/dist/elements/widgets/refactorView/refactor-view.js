function b(c,d){c=c-0xff;const e=a();let f=e[c];return f;}function a(){const t=['1628469iqXHAq','updateRefactorlist','commit','selectionService','applyRefactoring','ready','openGroup','2900240unXEpJ','_bindingsRefresh','serviceContainer','node-projects-refactor-view','searchText','7329944qZZdRu','onSelectionChanged','1745150DUZLAP','selectedItems','value','service','3AGuFbh','get','(.*)','_selectedItems','set','selectedElements','replaceText','\x20to\x20','length','_bindingsParse','_instanceServiceContainer','refactor','match','replace','401838WPWfGk','target','itemType','template','clear','properties','7JXVWKF','17780688JOptak','refactorings','48646cLuepd','\x20->\x20','name'];a=function(){return t;};return a();}const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x113))/0x1*(parseInt(j(0x12a))/0x2)+parseInt(j(0x101))/0x3+parseInt(j(0x108))/0x4+parseInt(j(0x10f))/0x5+-parseInt(j(0x121))/0x6*(-parseInt(j(0x127))/0x7)+parseInt(j(0x10d))/0x8+-parseInt(j(0x128))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xaa47a));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class RefactorView extends BaseCustomWebComponentConstructorAppend{static [k(0x124)]=html`
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
    }`;static ['is']=k(0x10b);static [k(0x126)]={};[k(0x11d)];['_selectionChangedHandler'];['_selectedItems'];['searchText']=k(0x115);['replaceText']='$1';['refactorings']=new Map();[k(0x106)](){const l=k;this[l(0x11c)]();}set['instanceServiceContainer'](c){const m=k;this[m(0x11d)]=c,this['_selectionChangedHandler']?.['dispose'](),this['_selectionChangedHandler']=this[m(0x11d)][m(0x104)][m(0x10e)]['on'](d=>{this['selectedItems']=d['selectedElements'];}),this['selectedItems']=this['_instanceServiceContainer'][m(0x104)][m(0x118)];}get[k(0x110)](){const n=k;return this[n(0x116)];}set[k(0x110)](c){const o=k;this['_selectedItems']!=c&&(this['_selectedItems']=c,this[o(0x102)](this[o(0x116)]));}[k(0x120)](){const p=k;let c=null;for(let d of this[p(0x129)]){let e=d[0x1][0x0][p(0x100)];const f=new RegExp(this[p(0x10c)]),g=e[p(0x11f)](f);if(g){if(!c)c=d[0x1][0x0]['designItem'][p(0x107)]('refactor\x20with\x20regex\x20'+this['searchText']+p(0xff)+this[p(0x119)]);const h=e['replace'](f,this[p(0x119)]);h!=e&&this['applyRefactoring'](d,h);}}if(!c)c['commit']();}['_refactor'](c,d){const q=k,e=d[q(0x122)];d['key']=='Enter'&&this[q(0x105)](c,e[q(0x111)]);}[k(0x105)](c,d){const r=k,e=c[0x1][0x0]['designItem'][r(0x107)]('refactor\x20'+c[0x1][0x0][r(0x100)]+r(0x11a)+d);for(let f of c[0x1]){f[r(0x112)][r(0x11e)](f,f['name'],d);}e[r(0x103)]();}[k(0x102)](c){const s=k;this['refactorings'][s(0x125)]();if(c&&c[s(0x11b)]){let d=[];const e=c[0x0][s(0x10a)];for(let f of e['refactorServices']){let g=f['getRefactorings'](c);d['push'](...g);}for(const h of d){let i=this['refactorings'][s(0x114)](h[s(0x123)]+'|'+h[s(0x100)]);i===undefined&&(i=[],this[s(0x129)][s(0x117)](h['itemType']+'|'+h[s(0x100)],i)),i['push'](h);}}this[s(0x109)]();}}customElements['define'](RefactorView['is'],RefactorView);
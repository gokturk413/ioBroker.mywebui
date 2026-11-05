const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x151))/0x1+parseInt(j(0x142))/0x2*(parseInt(j(0x147))/0x3)+parseInt(j(0x15f))/0x4*(-parseInt(j(0x15b))/0x5)+-parseInt(j(0x14a))/0x6+-parseInt(j(0x15e))/0x7+-parseInt(j(0x143))/0x8*(parseInt(j(0x141))/0x9)+-parseInt(j(0x13e))/0xa*(-parseInt(j(0x163))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x39dcb));function a(){const u=['61517uuDqSv','applyRefactoring','set','name','_selectedItems','_bindingsParse','dispose','style','updateRefactorlist','\x20->\x20','5FHuoGi','refactorServices','openGroup','790195BpGOcY','157268HffDmf','_selectionChangedHandler','_refactor','refactor\x20with\x20regex\x20','4125ysVskN','ready','selectedItems','Enter','17840CVaaYt','selectedElements','searchText','19683mOdajz','4rlFkpa','1336PtCzsF','designItem','replaceText','replace','553914UHSvKR','itemType','_instanceServiceContainer','2072154TzhvcF','_bindingsRefresh','\x20to\x20','refactorings','instanceServiceContainer','refactor','getRefactorings'];a=function(){return u;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x13c;const e=a();let f=e[c];return f;}export class RefactorView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
    </div>`;static [k(0x158)]=css`
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
    }`;static ['is']='node-projects-refactor-view';static ['properties']={};[k(0x149)];[k(0x160)];[k(0x155)];[k(0x140)]='(.*)';[k(0x145)]='$1';[k(0x14d)]=new Map();[k(0x164)](){const l=k;this[l(0x156)]();}set[k(0x14e)](c){const m=k;this[m(0x149)]=c,this[m(0x160)]?.[m(0x157)](),this[m(0x160)]=this['_instanceServiceContainer']['selectionService']['onSelectionChanged']['on'](d=>{const n=m;this[n(0x13c)]=d[n(0x13f)];}),this[m(0x13c)]=this[m(0x149)]['selectionService'][m(0x13f)];}get[k(0x13c)](){const o=k;return this[o(0x155)];}set['selectedItems'](c){const p=k;this[p(0x155)]!=c&&(this[p(0x155)]=c,this[p(0x159)](this[p(0x155)]));}[k(0x146)](){const q=k;let c=null;for(let d of this['refactorings']){let e=d[0x1][0x0]['name'];const f=new RegExp(this['searchText']),g=e['match'](f);if(g){if(!c)c=d[0x1][0x0]['designItem'][q(0x15d)](q(0x162)+this['searchText']+q(0x15a)+this['replaceText']);const h=e[q(0x146)](f,this['replaceText']);h!=e&&this[q(0x152)](d,h);}}if(c)c['commit']();}[k(0x161)](c,d){const r=k,e=d['target'];d['key']==r(0x13d)&&this[r(0x152)](c,e['value']);}[k(0x152)](c,d){const s=k,e=c[0x1][0x0][s(0x144)]['openGroup']('refactor\x20'+c[0x1][0x0]['name']+s(0x14c)+d);for(let f of c[0x1]){f['service'][s(0x14f)](f,f['name'],d);}e['commit']();}['updateRefactorlist'](c){const t=k;this[t(0x14d)]['clear']();if(c&&c['length']){let d=[];const e=c[0x0]['serviceContainer'];for(let f of e[t(0x15c)]){let g=f[t(0x150)](c);d['push'](...g);}for(const h of d){let i=this['refactorings']['get'](h[t(0x148)]+'|'+h['name']);i===undefined&&(i=[],this[t(0x14d)][t(0x153)](h['itemType']+'|'+h[t(0x154)],i)),i['push'](h);}}this[t(0x14b)]();}}customElements['define'](RefactorView['is'],RefactorView);
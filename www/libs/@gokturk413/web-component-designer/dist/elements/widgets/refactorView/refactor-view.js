const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x187))/0x1+parseInt(j(0x197))/0x2+-parseInt(j(0x18d))/0x3+-parseInt(j(0x186))/0x4*(-parseInt(j(0x19e))/0x5)+parseInt(j(0x18c))/0x6+parseInt(j(0x19b))/0x7*(parseInt(j(0x1a0))/0x8)+-parseInt(j(0x192))/0x9*(parseInt(j(0x17c))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x68f1e));function a(){const r=['getRefactorings','commit','name','selectionService','1926BWOjus','itemType','searchText','_refactor','instanceServiceContainer','645378pgQNZV','_bindingsRefresh','_selectionChangedHandler','(.*)','5577635FNsEEm','match','push','60pRRFAf','length','8ZRoNwc','replaceText','27010zsYZXq','replace','refactor','define','style','selectedItems','get','designItem','refactorings','clear','282868yUaGfx','318036bGWoZc','_selectedItems','applyRefactoring','_instanceServiceContainer','openGroup','499416XPOfwc','2176290uIRRrm'];a=function(){return r;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x17b;const e=a();let f=e[c];return f;}export class RefactorView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
    </div>`;static [k(0x180)]=css`
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
    }`;static ['is']='node-projects-refactor-view';static ['properties']={};['_instanceServiceContainer'];['_selectionChangedHandler'];[k(0x188)];['searchText']=k(0x19a);['replaceText']='$1';[k(0x184)]=new Map();['ready'](){this['_bindingsParse']();}set[k(0x196)](c){const l=k;this['_instanceServiceContainer']=c,this['_selectionChangedHandler']?.['dispose'](),this[l(0x199)]=this['_instanceServiceContainer'][l(0x191)]['onSelectionChanged']['on'](d=>{this['selectedItems']=d['selectedElements'];}),this['selectedItems']=this[l(0x18a)][l(0x191)]['selectedElements'];}get['selectedItems'](){return this['_selectedItems'];}set[k(0x181)](c){const m=k;this[m(0x188)]!=c&&(this['_selectedItems']=c,this['updateRefactorlist'](this[m(0x188)]));}[k(0x17d)](){const n=k;let c=null;for(let d of this['refactorings']){let e=d[0x1][0x0][n(0x190)];const f=new RegExp(this[n(0x194)]),g=e[n(0x19c)](f);if(g){if(!c)c=d[0x1][0x0][n(0x183)][n(0x18b)]('refactor\x20with\x20regex\x20'+this[n(0x194)]+'\x20->\x20'+this[n(0x17b)]);const h=e['replace'](f,this['replaceText']);h!=e&&this[n(0x189)](d,h);}}if(c)c[n(0x18f)]();}[k(0x195)](c,d){const o=k,e=d['target'];d['key']=='Enter'&&this[o(0x189)](c,e['value']);}[k(0x189)](c,d){const p=k,e=c[0x1][0x0][p(0x183)]['openGroup']('refactor\x20'+c[0x1][0x0]['name']+'\x20to\x20'+d);for(let f of c[0x1]){f['service'][p(0x17e)](f,f['name'],d);}e[p(0x18f)]();}['updateRefactorlist'](c){const q=k;this[q(0x184)][q(0x185)]();if(c&&c[q(0x19f)]){let d=[];const e=c[0x0]['serviceContainer'];for(let f of e['refactorServices']){let g=f[q(0x18e)](c);d['push'](...g);}for(const h of d){let i=this['refactorings'][q(0x182)](h[q(0x193)]+'|'+h[q(0x190)]);i===undefined&&(i=[],this['refactorings']['set'](h[q(0x193)]+'|'+h['name'],i)),i[q(0x19d)](h);}}this[q(0x198)]();}}customElements[k(0x17f)](RefactorView['is'],RefactorView);
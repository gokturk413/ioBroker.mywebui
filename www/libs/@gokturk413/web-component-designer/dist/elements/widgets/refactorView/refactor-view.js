const k=b;function a(){const t=['13fhlCrN','4NVdViH','1915QizzAP','(.*)','match','_selectedItems','125yGBdwF','target','clear','1043reCXkw','_instanceServiceContainer','define','node-projects-refactor-view','9682277rLsMFJ','updateRefactorlist','refactor\x20','applyRefactoring','44024BccDRv','searchText','commit','itemType','272110ntsTMQ','getRefactorings','603URoGpN','_selectionChangedHandler','\x20->\x20','selectedElements','selectedItems','24938892eVuvkb','replace','replaceText','name','service','70lpcsOq','2771310zPehpo','onSelectionChanged','style','refactor','refactorServices','22716YpXHYG','dispose','refactorings'];a=function(){return t;};return a();}function b(c,d){c=c-0x1ec;const e=a();let f=e[c];return f;}(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x214))/0x1*(-parseInt(j(0x205))/0x2)+-parseInt(j(0x206))/0x3*(-parseInt(j(0x20f))/0x4)+-parseInt(j(0x210))/0x5*(-parseInt(j(0x20b))/0x6)+-parseInt(j(0x1ed))/0x7*(parseInt(j(0x1f5))/0x8)+-parseInt(j(0x1fb))/0x9*(parseInt(j(0x1f9))/0xa)+-parseInt(j(0x1f1))/0xb+-parseInt(j(0x200))/0xc*(-parseInt(j(0x20e))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe3d0d));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class RefactorView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
    </div>`;static [k(0x208)]=css`
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
    }`;static ['is']=k(0x1f0);static ['properties']={};['_instanceServiceContainer'];[k(0x1fc)];[k(0x213)];[k(0x1f6)]=k(0x211);['replaceText']='$1';[k(0x20d)]=new Map();['ready'](){this['_bindingsParse']();}set['instanceServiceContainer'](c){const l=k;this[l(0x1ee)]=c,this['_selectionChangedHandler']?.[l(0x20c)](),this[l(0x1fc)]=this[l(0x1ee)]['selectionService'][l(0x207)]['on'](d=>{const m=l;this[m(0x1ff)]=d[m(0x1fe)];}),this[l(0x1ff)]=this[l(0x1ee)]['selectionService'][l(0x1fe)];}get['selectedItems'](){const n=k;return this[n(0x213)];}set['selectedItems'](c){const o=k;this['_selectedItems']!=c&&(this['_selectedItems']=c,this[o(0x1f2)](this[o(0x213)]));}['replace'](){const p=k;let c=null;for(let d of this[p(0x20d)]){let e=d[0x1][0x0][p(0x203)];const f=new RegExp(this['searchText']),g=e[p(0x212)](f);if(g){if(!c)c=d[0x1][0x0]['designItem']['openGroup']('refactor\x20with\x20regex\x20'+this['searchText']+p(0x1fd)+this['replaceText']);const h=e[p(0x201)](f,this[p(0x202)]);h!=e&&this[p(0x1f4)](d,h);}}if(c)c[p(0x1f7)]();}['_refactor'](c,d){const q=k,e=d[q(0x215)];d['key']=='Enter'&&this['applyRefactoring'](c,e['value']);}[k(0x1f4)](c,d){const r=k,e=c[0x1][0x0]['designItem']['openGroup'](r(0x1f3)+c[0x1][0x0][r(0x203)]+'\x20to\x20'+d);for(let f of c[0x1]){f[r(0x204)][r(0x209)](f,f[r(0x203)],d);}e[r(0x1f7)]();}['updateRefactorlist'](c){const s=k;this['refactorings'][s(0x1ec)]();if(c&&c['length']){let d=[];const e=c[0x0]['serviceContainer'];for(let f of e[s(0x20a)]){let g=f[s(0x1fa)](c);d['push'](...g);}for(const h of d){let i=this['refactorings']['get'](h['itemType']+'|'+h['name']);i===undefined&&(i=[],this[s(0x20d)]['set'](h[s(0x1f8)]+'|'+h[s(0x203)],i)),i['push'](h);}}this['_bindingsRefresh']();}}customElements[k(0x1ef)](RefactorView['is'],RefactorView);
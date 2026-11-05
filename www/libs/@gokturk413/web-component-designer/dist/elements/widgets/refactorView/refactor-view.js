const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x153))/0x1*(parseInt(j(0x133))/0x2)+-parseInt(j(0x140))/0x3*(-parseInt(j(0x13a))/0x4)+parseInt(j(0x141))/0x5+parseInt(j(0x14c))/0x6+-parseInt(j(0x135))/0x7*(parseInt(j(0x13c))/0x8)+parseInt(j(0x13f))/0x9+-parseInt(j(0x149))/0xa*(parseInt(j(0x154))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xec0e7));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class RefactorView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
    }`;static ['is']='node-projects-refactor-view';static ['properties']={};['_instanceServiceContainer'];['_selectionChangedHandler'];[k(0x14a)];[k(0x13b)]='(.*)';[k(0x137)]='$1';['refactorings']=new Map();[k(0x156)](){this['_bindingsParse']();}set[k(0x158)](c){const l=k;this['_instanceServiceContainer']=c,this[l(0x14e)]?.['dispose'](),this[l(0x14e)]=this[l(0x131)][l(0x157)][l(0x13e)]['on'](d=>{this['selectedItems']=d['selectedElements'];}),this[l(0x139)]=this['_instanceServiceContainer']['selectionService'][l(0x159)];}get[k(0x139)](){return this['_selectedItems'];}set['selectedItems'](c){const m=k;this['_selectedItems']!=c&&(this[m(0x14a)]=c,this[m(0x142)](this[m(0x14a)]));}['replace'](){const n=k;let c=null;for(let d of this['refactorings']){let e=d[0x1][0x0]['name'];const f=new RegExp(this[n(0x13b)]),g=e['match'](f);if(g){if(!c)c=d[0x1][0x0]['designItem'][n(0x13d)]('refactor\x20with\x20regex\x20'+this[n(0x13b)]+n(0x151)+this['replaceText']);const h=e[n(0x155)](f,this['replaceText']);h!=e&&this['applyRefactoring'](d,h);}}if(c)c['commit']();}[k(0x148)](c,d){const o=k,e=d[o(0x143)];d[o(0x134)]==o(0x146)&&this[o(0x150)](c,e['value']);}['applyRefactoring'](c,d){const p=k,e=c[0x1][0x0]['designItem']['openGroup'](p(0x14f)+c[0x1][0x0]['name']+'\x20to\x20'+d);for(let f of c[0x1]){f[p(0x147)][p(0x144)](f,f[p(0x132)],d);}e[p(0x136)]();}['updateRefactorlist'](c){const q=k;this['refactorings'][q(0x14b)]();if(c&&c['length']){let d=[];const e=c[0x0][q(0x152)];for(let f of e['refactorServices']){let g=f['getRefactorings'](c);d['push'](...g);}for(const h of d){let i=this[q(0x138)]['get'](h[q(0x145)]+'|'+h[q(0x132)]);i===undefined&&(i=[],this[q(0x138)][q(0x14d)](h['itemType']+'|'+h[q(0x132)],i)),i['push'](h);}}this['_bindingsRefresh']();}}function b(c,d){c=c-0x131;const e=a();let f=e[c];return f;}function a(){const r=['instanceServiceContainer','selectedElements','_instanceServiceContainer','name','2121154XbHGNd','key','245CwlCVa','commit','replaceText','refactorings','selectedItems','475844ibEJkd','searchText','242408rIolON','openGroup','onSelectionChanged','8896833zLGlxf','9yfonOv','3099580yFyaxa','updateRefactorlist','target','refactor','itemType','Enter','service','_refactor','10OMKspw','_selectedItems','clear','946152ssOrWK','set','_selectionChangedHandler','refactor\x20','applyRefactoring','\x20->\x20','serviceContainer','1OyciDq','12718013NRRJOy','replace','ready','selectionService'];a=function(){return r;};return a();}customElements['define'](RefactorView['is'],RefactorView);
const j=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xfe))/0x1*(parseInt(h(0xea))/0x2)+parseInt(h(0xf3))/0x3*(parseInt(h(0xf6))/0x4)+parseInt(h(0xfb))/0x5+-parseInt(h(0xf8))/0x6*(parseInt(h(0xf0))/0x7)+-parseInt(h(0xfc))/0x8+-parseInt(h(0xf4))/0x9+parseInt(h(0xed))/0xa*(parseInt(h(0xfa))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x665e4));function b(c,d){c=c-0xe9;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function a(){const o=['25134jJILKU','null','77RSgGUl','2860975lKkqLo','6627600CWQgjb','type','28718QPnNIP','_restoreCachedInititalValues','30suzzdD','key','_bindingsRefresh','407130zQMdkv','keys','push','63hXOHGq','_parameterArray','_remove','487698IlHdqH','1485639KvSMcW','getParametersObject','4erIHFe','object'];a=function(){return o;};return a();}export class ParameterEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
        :host {
            display: grid;
            grid-template-columns: 80px 80px 80px auto;
            overflow-y: auto;
            align-content: start;
            height: 100%;
            padding: 10px;
            gap: 5px;
            box-sizing: border-box;
        }
        
        span {
            font-size: 10px;
        }`;static ['template']=html`
        <span></span>
        <span>name</span>
        <span>type</span>
        <span>value</span>
        <template repeat:item="[[this._parameterArray]]">
            <button @click="[[this._remove(index)]]" style="width: 40px; height: 20px; align-self: center;">del</button>
            <input type="text" value="{{?item.key}}">
            <select value="{{item.type}}" @change="[[this._bindingsRefresh()]]">
                <option>null</string>
                <option>string</string>
                <option>number</string>
                <option>boolean</string>
            </select>
            <input hidden="[[item.type !== 'string']]" type="text" value="{{?item.value}}">
            <input hidden="[[item.type !== 'number']]" type="number" value="{{item.value}}">
            <input hidden="[[item.type !== 'boolean']]" type="checkbox" checked="{{item.value}}">
            <div hidden="[[item.type !== 'null']]">-null-</div>
        </template>
        <button @click="[[this._add()]]" style="width: 40px; height: 20px; align-self: center;">add</button>`;static ['is']='node-projects-visualization-parameter-editor';constructor(){const i=b;super(),this[i(0xe9)]();}['ready'](){this['_bindingsParse']();}[j(0xf1)];['setParametersObject'](c){const k=j;if(c!=null)this['_parameterArray']=Object[k(0xee)](c)['map'](d=>({'key':d,'type':typeof c[d]===k(0xf7)?k(0xf9):typeof c[d],'value':c[d]}));else this['_parameterArray']=[];this[k(0xec)]();}[j(0xf5)](){const l=j;let c=![];const d={};for(const e of this['_parameterArray']){if(e['key']){c=!![],d[e['key']]=null;switch(e[l(0xfd)]){case'string':d[e['key']]=e['value']['toString']();break;case'number':const g=parseFloat(e['value']);d[e['key']]=isNaN(g)?0x0:g;break;case'boolean':d[e[l(0xeb)]]=!!e['value'];break;}}}return c?d:null;}[j(0xf2)](c){const m=j;this[m(0xf1)]['splice'](c,0x1),this['_bindingsRefresh']();}['_add'](){const n=j;this['_parameterArray'][n(0xef)]({'type':n(0xf9)}),this['_bindingsRefresh']();}}customElements['define'](ParameterEditor['is'],ParameterEditor);
function a(){const p=['611601KayxRU','type','_bindingsRefresh','_bindingsParse','36522xlzblx','4997240ElQmvQ','ready','4YpPErk','_parameterArray','2509893CTTNVT','26502iXDivC','map','146460EvSgXk','key','515382vhYWyY','number','245mCfWLu','node-projects-visualization-parameter-editor','style','8qfoiRB','_restoreCachedInititalValues','17AcUfEL','539smBvbk','toString','push','value'];a=function(){return p;};return a();}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1fb))/0x1*(parseInt(h(0x204))/0x2)+parseInt(h(0x200))/0x3*(parseInt(h(0x207))/0x4)+parseInt(h(0x1f6))/0x5*(-parseInt(h(0x20a))/0x6)+-parseInt(h(0x1f4))/0x7+-parseInt(h(0x1f9))/0x8*(parseInt(h(0x209))/0x9)+parseInt(h(0x205))/0xa+-parseInt(h(0x1fc))/0xb*(-parseInt(h(0x1f2))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x67177));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class ParameterEditor extends BaseCustomWebComponentConstructorAppend{static [i(0x1f8)]=css`
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
        <button @click="[[this._add()]]" style="width: 40px; height: 20px; align-self: center;">add</button>`;static ['is']=i(0x1f7);constructor(){const j=i;super(),this[j(0x1fa)]();}[i(0x206)](){const k=i;this[k(0x203)]();}[i(0x208)];['setParametersObject'](c){const l=i;if(c!=null)this['_parameterArray']=Object['keys'](c)[l(0x20b)](d=>({'key':d,'type':typeof c[d]==='object'?'null':typeof c[d],'value':c[d]}));else this[l(0x208)]=[];this[l(0x202)]();}['getParametersObject'](){const m=i;let c=![];const d={};for(const e of this[m(0x208)]){if(e['key']){c=!![],d[e[m(0x1f3)]]=null;switch(e[m(0x201)]){case'string':d[e['key']]=e[m(0x1ff)][m(0x1fd)]();break;case m(0x1f5):const g=parseFloat(e['value']);d[e[m(0x1f3)]]=isNaN(g)?0x0:g;break;case'boolean':d[e['key']]=!!e['value'];break;}}}return c?d:null;}['_remove'](c){const n=i;this[n(0x208)]['splice'](c,0x1),this[n(0x202)]();}['_add'](){const o=i;this[o(0x208)][o(0x1fe)]({'type':'null'}),this['_bindingsRefresh']();}}function b(c,d){c=c-0x1f2;const e=a();let f=e[c];return f;}customElements['define'](ParameterEditor['is'],ParameterEditor);
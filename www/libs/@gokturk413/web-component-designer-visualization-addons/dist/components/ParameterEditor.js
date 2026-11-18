const j=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x194))/0x1*(parseInt(h(0x193))/0x2)+parseInt(h(0x1a3))/0x3*(-parseInt(h(0x1a6))/0x4)+parseInt(h(0x197))/0x5+parseInt(h(0x19d))/0x6*(-parseInt(h(0x19a))/0x7)+-parseInt(h(0x19f))/0x8+-parseInt(h(0x1a7))/0x9+parseInt(h(0x195))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xdcedf));function a(){const o=['_restoreCachedInititalValues','key','16lkfIxM','11901672uITwQy','string','splice','map','2KtfJvc','989099QBHCCL','46074880eQLYTF','value','7488770iwLvdA','null','getParametersObject','5684917DpIjpz','toString','ready','6gXfqfp','_parameterArray','5138664ISqYnF','setParametersObject','push','keys','1075758TpnjUW'];a=function(){return o;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x192;const e=a();let f=e[c];return f;}export class ParameterEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        <button @click="[[this._add()]]" style="width: 40px; height: 20px; align-self: center;">add</button>`;static ['is']='node-projects-visualization-parameter-editor';constructor(){const i=b;super(),this[i(0x1a4)]();}[j(0x19c)](){this['_bindingsParse']();}['_parameterArray'];[j(0x1a0)](c){const k=j;if(c!=null)this[k(0x19e)]=Object[k(0x1a2)](c)[k(0x192)](d=>({'key':d,'type':typeof c[d]==='object'?'null':typeof c[d],'value':c[d]}));else this[k(0x19e)]=[];this['_bindingsRefresh']();}[j(0x199)](){const l=j;let c=![];const d={};for(const e of this['_parameterArray']){if(e[l(0x1a5)]){c=!![],d[e['key']]=null;switch(e['type']){case l(0x1a8):d[e['key']]=e[l(0x196)][l(0x19b)]();break;case'number':const g=parseFloat(e['value']);d[e[l(0x1a5)]]=isNaN(g)?0x0:g;break;case'boolean':d[e['key']]=!!e[l(0x196)];break;}}}return c?d:null;}['_remove'](c){const m=j;this['_parameterArray'][m(0x1a9)](c,0x1),this['_bindingsRefresh']();}['_add'](){const n=j;this['_parameterArray'][n(0x1a1)]({'type':n(0x198)}),this['_bindingsRefresh']();}}customElements['define'](ParameterEditor['is'],ParameterEditor);
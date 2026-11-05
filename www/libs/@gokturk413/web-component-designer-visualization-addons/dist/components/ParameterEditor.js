const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x13a))/0x1+parseInt(h(0x12f))/0x2*(parseInt(h(0x132))/0x3)+-parseInt(h(0x130))/0x4*(parseInt(h(0x125))/0x5)+-parseInt(h(0x127))/0x6+parseInt(h(0x136))/0x7+-parseInt(h(0x137))/0x8*(-parseInt(h(0x12b))/0x9)+parseInt(h(0x128))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe3965));function a(){const m=['122nziuGB','31624WBFCQZ','style','2991pkhBDt','key','_parameterArray','_add','12518674xBbTnL','5933408JwAApd','ready','node-projects-visualization-parameter-editor','94815ZSwgTE','value','1005bOBQmy','string','2296824iYcHnb','4080470vHftGV','object','push','9lYDnXA','_remove','_bindingsRefresh','null'];a=function(){return m;};return a();}function b(c,d){c=c-0x124;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class ParameterEditor extends BaseCustomWebComponentConstructorAppend{static [i(0x131)]=css`
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
        <button @click="[[this._add()]]" style="width: 40px; height: 20px; align-self: center;">add</button>`;static ['is']=i(0x139);constructor(){super(),this['_restoreCachedInititalValues']();}[i(0x138)](){this['_bindingsParse']();}['_parameterArray'];['setParametersObject'](c){const j=i;if(c!=null)this['_parameterArray']=Object['keys'](c)['map'](d=>({'key':d,'type':typeof c[d]===j(0x129)?j(0x12e):typeof c[d],'value':c[d]}));else this[j(0x134)]=[];this[j(0x12d)]();}['getParametersObject'](){const k=i;let c=![];const d={};for(const e of this['_parameterArray']){if(e[k(0x133)]){c=!![],d[e['key']]=null;switch(e['type']){case k(0x126):d[e['key']]=e[k(0x124)]['toString']();break;case'number':const g=parseFloat(e[k(0x124)]);d[e['key']]=isNaN(g)?0x0:g;break;case'boolean':d[e[k(0x133)]]=!!e['value'];break;}}}return c?d:null;}[i(0x12c)](c){this['_parameterArray']['splice'](c,0x1),this['_bindingsRefresh']();}[i(0x135)](){const l=i;this['_parameterArray'][l(0x12a)]({'type':'null'}),this['_bindingsRefresh']();}}customElements['define'](ParameterEditor['is'],ParameterEditor);
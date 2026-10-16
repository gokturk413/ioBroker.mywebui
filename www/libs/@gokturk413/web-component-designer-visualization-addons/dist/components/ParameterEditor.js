const i=b;function a(){const n=['keys','value','_bindingsRefresh','string','82970StkDys','define','getParametersObject','9IgrBYD','node-projects-visualization-parameter-editor','_add','_parameterArray','key','4184385pyQauL','8FwyNDc','1889520kRfhmJ','10863223jdjabU','splice','31872190toknAn','6631336eRMvGZ','4KEjeay','null','type','4982016SbUtXq'];a=function(){return n;};return a();}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xde))/0x1*(parseInt(h(0xe7))/0x2)+parseInt(h(0xf0))/0x3*(parseInt(h(0xed))/0x4)+-parseInt(h(0xe6))/0x5+-parseInt(h(0xe8))/0x6+-parseInt(h(0xe9))/0x7+parseInt(h(0xec))/0x8*(-parseInt(h(0xe1))/0x9)+parseInt(h(0xeb))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xf0170));function b(c,d){c=c-0xdc;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class ParameterEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        <button @click="[[this._add()]]" style="width: 40px; height: 20px; align-self: center;">add</button>`;static ['is']=i(0xe2);constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){this['_bindingsParse']();}['_parameterArray'];['setParametersObject'](c){const j=i;if(c!=null)this['_parameterArray']=Object[j(0xf1)](c)['map'](d=>({'key':d,'type':typeof c[d]==='object'?j(0xee):typeof c[d],'value':c[d]}));else this[j(0xe4)]=[];this['_bindingsRefresh']();}[i(0xe0)](){const k=i;let c=![];const d={};for(const e of this['_parameterArray']){if(e[k(0xe5)]){c=!![],d[e['key']]=null;switch(e[k(0xef)]){case k(0xdd):d[e['key']]=e[k(0xf2)]['toString']();break;case'number':const g=parseFloat(e['value']);d[e['key']]=isNaN(g)?0x0:g;break;case'boolean':d[e['key']]=!!e['value'];break;}}}return c?d:null;}['_remove'](c){const l=i;this[l(0xe4)][l(0xea)](c,0x1),this[l(0xdc)]();}[i(0xe3)](){const m=i;this['_parameterArray']['push']({'type':m(0xee)}),this['_bindingsRefresh']();}}customElements[i(0xdf)](ParameterEditor['is'],ParameterEditor);
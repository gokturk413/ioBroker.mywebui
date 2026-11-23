const j=b;function b(c,d){c=c-0x17a;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x18a))/0x1*(parseInt(h(0x189))/0x2)+parseInt(h(0x18d))/0x3*(parseInt(h(0x17a))/0x4)+-parseInt(h(0x17c))/0x5*(-parseInt(h(0x186))/0x6)+-parseInt(h(0x180))/0x7+parseInt(h(0x182))/0x8*(parseInt(h(0x17b))/0x9)+parseInt(h(0x18c))/0xa*(-parseInt(h(0x188))/0xb)+parseInt(h(0x183))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x66ebe));function a(){const o=['3052748KqnQgo','1629rkcQrI','5LLPUIm','map','_restoreCachedInititalValues','object','3253117NsWxZq','toString','3632sJNzdh','3607176nqSyFd','value','ready','14106ileYDC','key','121QZcbKV','2696RLpVGn','377OoCykW','define','700190RnyamQ','3lbHbFj','type','_add','_parameterArray','getParametersObject','null'];a=function(){return o;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class ParameterEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        <button @click="[[this._add()]]" style="width: 40px; height: 20px; align-self: center;">add</button>`;static ['is']='node-projects-visualization-parameter-editor';constructor(){const i=b;super(),this[i(0x17e)]();}[j(0x185)](){this['_bindingsParse']();}[j(0x190)];['setParametersObject'](c){const k=j;if(c!=null)this['_parameterArray']=Object['keys'](c)[k(0x17d)](d=>({'key':d,'type':typeof c[d]===k(0x17f)?k(0x192):typeof c[d],'value':c[d]}));else this['_parameterArray']=[];this['_bindingsRefresh']();}[j(0x191)](){const l=j;let c=![];const d={};for(const e of this['_parameterArray']){if(e[l(0x187)]){c=!![],d[e[l(0x187)]]=null;switch(e[l(0x18e)]){case'string':d[e['key']]=e['value'][l(0x181)]();break;case'number':const g=parseFloat(e[l(0x184)]);d[e[l(0x187)]]=isNaN(g)?0x0:g;break;case'boolean':d[e['key']]=!!e['value'];break;}}}return c?d:null;}['_remove'](c){const m=j;this[m(0x190)]['splice'](c,0x1),this['_bindingsRefresh']();}[j(0x18f)](){const n=j;this[n(0x190)]['push']({'type':'null'}),this['_bindingsRefresh']();}}customElements[j(0x18b)](ParameterEditor['is'],ParameterEditor);
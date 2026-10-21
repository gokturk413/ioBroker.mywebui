function b(c,d){c=c-0x114;const e=a();let f=e[c];return f;}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x123))/0x1*(-parseInt(h(0x11c))/0x2)+parseInt(h(0x12e))/0x3*(-parseInt(h(0x11d))/0x4)+-parseInt(h(0x11a))/0x5*(-parseInt(h(0x117))/0x6)+parseInt(h(0x122))/0x7*(parseInt(h(0x127))/0x8)+-parseInt(h(0x125))/0x9+-parseInt(h(0x12a))/0xa+parseInt(h(0x118))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6c1d6));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function a(){const o=['2nVpQPc','293932AEiIAi','define','string','value','getParametersObject','63nbKaGF','276322LIGQxw','_bindingsRefresh','4226310VnLnko','_restoreCachedInititalValues','216032IkInnF','template','number','7710900WsBSYJ','null','_remove','type','9cePPvW','_parameterArray','key','style','204UuxRzX','12635887VVVjuW','toString','34690DefKwz','_add'];a=function(){return o;};return a();}export class ParameterEditor extends BaseCustomWebComponentConstructorAppend{static [i(0x116)]=css`
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
        }`;static [i(0x128)]=html`
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
        <button @click="[[this._add()]]" style="width: 40px; height: 20px; align-self: center;">add</button>`;static ['is']='node-projects-visualization-parameter-editor';constructor(){const j=i;super(),this[j(0x126)]();}['ready'](){this['_bindingsParse']();}[i(0x114)];['setParametersObject'](c){const k=i;if(c!=null)this['_parameterArray']=Object['keys'](c)['map'](d=>({'key':d,'type':typeof c[d]==='object'?k(0x12b):typeof c[d],'value':c[d]}));else this[k(0x114)]=[];this[k(0x124)]();}[i(0x121)](){const l=i;let c=![];const d={};for(const e of this['_parameterArray']){if(e[l(0x115)]){c=!![],d[e['key']]=null;switch(e[l(0x12d)]){case l(0x11f):d[e['key']]=e[l(0x120)][l(0x119)]();break;case l(0x129):const g=parseFloat(e['value']);d[e[l(0x115)]]=isNaN(g)?0x0:g;break;case'boolean':d[e['key']]=!!e[l(0x120)];break;}}}return c?d:null;}[i(0x12c)](c){const m=i;this['_parameterArray']['splice'](c,0x1),this[m(0x124)]();}[i(0x11b)](){const n=i;this['_parameterArray']['push']({'type':n(0x12b)}),this['_bindingsRefresh']();}}customElements[i(0x11e)](ParameterEditor['is'],ParameterEditor);
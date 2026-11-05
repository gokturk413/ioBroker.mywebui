function b(c,d){c=c-0xff;const e=a();let f=e[c];return f;}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x107))/0x1+-parseInt(h(0x10c))/0x2*(-parseInt(h(0x119))/0x3)+parseInt(h(0x114))/0x4*(parseInt(h(0x102))/0x5)+-parseInt(h(0x10e))/0x6+parseInt(h(0x10b))/0x7+-parseInt(h(0x106))/0x8*(-parseInt(h(0x118))/0x9)+parseInt(h(0x115))/0xa*(-parseInt(h(0x101))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xcf83b));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function a(){const n=['push','6452915ZgnfpL','2122874ByxQzn','key','8120760eEZQRW','boolean','toString','_parameterArray','splice','map','545788pYlZxn','9330RtJZzk','setParametersObject','_bindingsRefresh','9cotlBd','3VWwnbY','getParametersObject','ready','11253CsFUHY','5kJhheV','value','null','_remove','7275880bRRvXT','128684fyctAw','_add','define'];a=function(){return n;};return a();}export class ParameterEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        <button @click="[[this._add()]]" style="width: 40px; height: 20px; align-self: center;">add</button>`;static ['is']='node-projects-visualization-parameter-editor';constructor(){super(),this['_restoreCachedInititalValues']();}[i(0x100)](){this['_bindingsParse']();}[i(0x111)];[i(0x116)](c){const j=i;if(c!=null)this['_parameterArray']=Object['keys'](c)[j(0x113)](d=>({'key':d,'type':typeof c[d]==='object'?'null':typeof c[d],'value':c[d]}));else this['_parameterArray']=[];this[j(0x117)]();}[i(0xff)](){const k=i;let c=![];const d={};for(const e of this[k(0x111)]){if(e['key']){c=!![],d[e[k(0x10d)]]=null;switch(e['type']){case'string':d[e['key']]=e['value'][k(0x110)]();break;case'number':const g=parseFloat(e[k(0x103)]);d[e['key']]=isNaN(g)?0x0:g;break;case k(0x10f):d[e[k(0x10d)]]=!!e['value'];break;}}}return c?d:null;}[i(0x105)](c){const l=i;this[l(0x111)][l(0x112)](c,0x1),this['_bindingsRefresh']();}[i(0x108)](){const m=i;this[m(0x111)][m(0x10a)]({'type':m(0x104)}),this[m(0x117)]();}}customElements[i(0x109)](ParameterEditor['is'],ParameterEditor);
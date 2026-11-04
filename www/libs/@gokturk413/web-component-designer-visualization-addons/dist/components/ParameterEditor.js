const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0xe5))/0x1*(parseInt(h(0xe8))/0x2)+parseInt(h(0xdd))/0x3+-parseInt(h(0xe1))/0x4*(parseInt(h(0xdf))/0x5)+-parseInt(h(0xe3))/0x6*(parseInt(h(0xdc))/0x7)+-parseInt(h(0xd5))/0x8*(-parseInt(h(0xe0))/0x9)+parseInt(h(0xd9))/0xa*(parseInt(h(0xe7))/0xb)+parseInt(h(0xe6))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8f75a));function b(c,d){c=c-0xd2;const e=a();let f=e[c];return f;}function a(){const n=['331463ZlpDJO','2VVhaLw','ready','_parameterArray','map','setParametersObject','78944qxRTjS','key','keys','_bindingsRefresh','130BGZAgG','object','string','7ktSDRS','2602398KeMVnl','null','446785OVvYpd','306NYJaqS','44jshfIv','value','6513018HIZoaV','splice','59621KyJndX','12020544XbtZGs'];a=function(){return n;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class ParameterEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        <button @click="[[this._add()]]" style="width: 40px; height: 20px; align-self: center;">add</button>`;static ['is']='node-projects-visualization-parameter-editor';constructor(){super(),this['_restoreCachedInititalValues']();}[i(0xe9)](){this['_bindingsParse']();}['_parameterArray'];[i(0xd4)](c){const j=i;if(c!=null)this['_parameterArray']=Object[j(0xd7)](c)[j(0xd3)](d=>({'key':d,'type':typeof c[d]===j(0xda)?j(0xde):typeof c[d],'value':c[d]}));else this['_parameterArray']=[];this[j(0xd8)]();}['getParametersObject'](){const k=i;let c=![];const d={};for(const e of this['_parameterArray']){if(e[k(0xd6)]){c=!![],d[e['key']]=null;switch(e['type']){case k(0xdb):d[e[k(0xd6)]]=e['value']['toString']();break;case'number':const g=parseFloat(e[k(0xe2)]);d[e['key']]=isNaN(g)?0x0:g;break;case'boolean':d[e[k(0xd6)]]=!!e['value'];break;}}}return c?d:null;}['_remove'](c){const l=i;this[l(0xd2)][l(0xe4)](c,0x1),this[l(0xd8)]();}['_add'](){const m=i;this['_parameterArray']['push']({'type':m(0xde)}),this['_bindingsRefresh']();}}customElements['define'](ParameterEditor['is'],ParameterEditor);
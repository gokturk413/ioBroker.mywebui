const i=b;function b(c,d){c=c-0x178;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x188))/0x1*(parseInt(h(0x17f))/0x2)+-parseInt(h(0x194))/0x3*(parseInt(h(0x18c))/0x4)+parseInt(h(0x193))/0x5*(-parseInt(h(0x18e))/0x6)+-parseInt(h(0x192))/0x7*(parseInt(h(0x186))/0x8)+parseInt(h(0x17d))/0x9*(-parseInt(h(0x17c))/0xa)+-parseInt(h(0x18a))/0xb*(-parseInt(h(0x182))/0xc)+parseInt(h(0x18f))/0xd;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2edf1));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class ParameterEditor extends BaseCustomWebComponentConstructorAppend{static [i(0x190)]=css`
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
        <button @click="[[this._add()]]" style="width: 40px; height: 20px; align-self: center;">add</button>`;static ['is']=i(0x178);constructor(){const j=i;super(),this[j(0x17a)]();}['ready'](){const k=i;this[k(0x183)]();}[i(0x185)];[i(0x180)](c){const l=i;if(c!=null)this[l(0x185)]=Object['keys'](c)['map'](d=>({'key':d,'type':typeof c[d]===l(0x187)?'null':typeof c[d],'value':c[d]}));else this[l(0x185)]=[];this[l(0x17e)]();}['getParametersObject'](){const m=i;let c=![];const d={};for(const e of this['_parameterArray']){if(e[m(0x191)]){c=!![],d[e[m(0x191)]]=null;switch(e[m(0x17b)]){case m(0x184):d[e['key']]=e[m(0x18b)]['toString']();break;case'number':const g=parseFloat(e[m(0x18b)]);d[e['key']]=isNaN(g)?0x0:g;break;case'boolean':d[e[m(0x191)]]=!!e['value'];break;}}}return c?d:null;}[i(0x179)](c){const n=i;this[n(0x185)][n(0x18d)](c,0x1),this[n(0x17e)]();}[i(0x181)](){const o=i;this[o(0x185)]['push']({'type':o(0x189)}),this['_bindingsRefresh']();}}customElements['define'](ParameterEditor['is'],ParameterEditor);function a(){const p=['6252272isExjX','style','key','7JGZqqS','5nGYqDd','72024JUHAnT','node-projects-visualization-parameter-editor','_remove','_restoreCachedInititalValues','type','350gJrhGT','46575TxrqMN','_bindingsRefresh','2PWPqYE','setParametersObject','_add','3252804dOWHuj','_bindingsParse','string','_parameterArray','2163144lqlujK','object','361249yxeYQr','null','11FYIkDT','value','36QKatAW','splice','1522110QgmqFR'];a=function(){return p;};return a();}
const i=b;function b(c,d){c=c-0x173;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x173))/0x1*(parseInt(h(0x184))/0x2)+parseInt(h(0x17b))/0x3+-parseInt(h(0x17a))/0x4+-parseInt(h(0x178))/0x5*(parseInt(h(0x179))/0x6)+-parseInt(h(0x186))/0x7+-parseInt(h(0x180))/0x8+-parseInt(h(0x176))/0x9*(-parseInt(h(0x17c))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xdf730));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class ParameterEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [i(0x18a)]=html`
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
        <button @click="[[this._add()]]" style="width: 40px; height: 20px; align-self: center;">add</button>`;static ['is']='node-projects-visualization-parameter-editor';constructor(){const j=i;super(),this[j(0x17d)]();}['ready'](){const k=i;this[k(0x182)]();}[i(0x181)];['setParametersObject'](c){const l=i;if(c!=null)this[l(0x181)]=Object['keys'](c)['map'](d=>({'key':d,'type':typeof c[d]===l(0x18c)?'null':typeof c[d],'value':c[d]}));else this[l(0x181)]=[];this['_bindingsRefresh']();}[i(0x175)](){const m=i;let c=![];const d={};for(const e of this['_parameterArray']){if(e['key']){c=!![],d[e['key']]=null;switch(e[m(0x187)]){case m(0x17e):d[e['key']]=e[m(0x17f)][m(0x188)]();break;case m(0x18b):const g=parseFloat(e['value']);d[e[m(0x183)]]=isNaN(g)?0x0:g;break;case m(0x18d):d[e[m(0x183)]]=!!e['value'];break;}}}return c?d:null;}[i(0x189)](c){const n=i;this[n(0x181)]['splice'](c,0x1),this['_bindingsRefresh']();}[i(0x185)](){const o=i;this[o(0x181)][o(0x177)]({'type':o(0x174)}),this['_bindingsRefresh']();}}customElements['define'](ParameterEditor['is'],ParameterEditor);function a(){const p=['type','toString','_remove','template','number','object','boolean','2655VrmuWR','null','getParametersObject','25051059eVFCTE','push','100aYahQJ','123126OgvohX','1724772UyUpWn','407094IOVwhG','10zxAnAr','_restoreCachedInititalValues','string','value','1704392CCOCUt','_parameterArray','_bindingsParse','key','2lzfarH','_add','6663258DApYag'];a=function(){return p;};return a();}
const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x1dd))/0x1+-parseInt(h(0x1d3))/0x2+-parseInt(h(0x1d6))/0x3*(-parseInt(h(0x1df))/0x4)+parseInt(h(0x1d4))/0x5+parseInt(h(0x1d5))/0x6*(-parseInt(h(0x1d9))/0x7)+-parseInt(h(0x1d2))/0x8+-parseInt(h(0x1e7))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x40a38));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function a(){const n=['map','_remove','11606icIpOu','boolean','_bindingsRefresh','ready','323375SJlsKK','type','100XjTkli','_bindingsParse','null','value','key','string','_parameterArray','push','2762937RubJyU','497328aXcxAu','202868FhuisL','642695vJGPZa','702XwclEI','57291JQRxhA'];a=function(){return n;};return a();}export class ParameterEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        <button @click="[[this._add()]]" style="width: 40px; height: 20px; align-self: center;">add</button>`;static ['is']='node-projects-visualization-parameter-editor';constructor(){super(),this['_restoreCachedInititalValues']();}[i(0x1dc)](){const j=i;this[j(0x1e0)]();}['_parameterArray'];['setParametersObject'](c){const k=i;if(c!=null)this[k(0x1e5)]=Object['keys'](c)[k(0x1d7)](d=>({'key':d,'type':typeof c[d]==='object'?k(0x1e1):typeof c[d],'value':c[d]}));else this['_parameterArray']=[];this[k(0x1db)]();}['getParametersObject'](){const l=i;let c=![];const d={};for(const e of this['_parameterArray']){if(e[l(0x1e3)]){c=!![],d[e[l(0x1e3)]]=null;switch(e[l(0x1de)]){case l(0x1e4):d[e[l(0x1e3)]]=e[l(0x1e2)]['toString']();break;case'number':const g=parseFloat(e[l(0x1e2)]);d[e[l(0x1e3)]]=isNaN(g)?0x0:g;break;case l(0x1da):d[e[l(0x1e3)]]=!!e[l(0x1e2)];break;}}}return c?d:null;}[i(0x1d8)](c){this['_parameterArray']['splice'](c,0x1),this['_bindingsRefresh']();}['_add'](){const m=i;this['_parameterArray'][m(0x1e6)]({'type':'null'}),this['_bindingsRefresh']();}}function b(c,d){c=c-0x1d2;const e=a();let f=e[c];return f;}customElements['define'](ParameterEditor['is'],ParameterEditor);
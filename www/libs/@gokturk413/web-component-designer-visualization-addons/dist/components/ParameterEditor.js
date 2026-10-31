function b(c,d){c=c-0x1ee;const e=a();let f=e[c];return f;}const i=b;function a(){const o=['3mUbkbq','5802rlEPTC','8xJelkl','boolean','string','value','78159bkyfzG','_bindingsParse','263600MSaffR','node-projects-visualization-parameter-editor','toString','347948AQtkBa','853569ovpzXa','_bindingsRefresh','getParametersObject','key','splice','define','style','type','975915KfhsVp','3129720SVgaUq','_parameterArray','273PPEWwW','push','setParametersObject'];a=function(){return o;};return a();}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x1f6))/0x1+-parseInt(h(0x1fb))/0x2*(-parseInt(h(0x1f0))/0x3)+-parseInt(h(0x1f8))/0x4+parseInt(h(0x204))/0x5+parseInt(h(0x1f1))/0x6*(-parseInt(h(0x207))/0x7)+-parseInt(h(0x1f2))/0x8*(-parseInt(h(0x1fc))/0x9)+-parseInt(h(0x205))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x1ea84));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class ParameterEditor extends BaseCustomWebComponentConstructorAppend{static [i(0x202)]=css`
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
        <button @click="[[this._add()]]" style="width: 40px; height: 20px; align-self: center;">add</button>`;static ['is']=i(0x1f9);constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const j=i;this[j(0x1f7)]();}['_parameterArray'];[i(0x1ef)](c){const k=i;if(c!=null)this[k(0x206)]=Object['keys'](c)['map'](d=>({'key':d,'type':typeof c[d]==='object'?'null':typeof c[d],'value':c[d]}));else this[k(0x206)]=[];this[k(0x1fd)]();}[i(0x1fe)](){const l=i;let c=![];const d={};for(const e of this[l(0x206)]){if(e[l(0x1ff)]){c=!![],d[e['key']]=null;switch(e[l(0x203)]){case l(0x1f4):d[e[l(0x1ff)]]=e['value'][l(0x1fa)]();break;case'number':const g=parseFloat(e[l(0x1f5)]);d[e['key']]=isNaN(g)?0x0:g;break;case l(0x1f3):d[e[l(0x1ff)]]=!!e[l(0x1f5)];break;}}}return c?d:null;}['_remove'](c){const m=i;this['_parameterArray'][m(0x200)](c,0x1),this['_bindingsRefresh']();}['_add'](){const n=i;this['_parameterArray'][n(0x1ee)]({'type':'null'}),this[n(0x1fd)]();}}customElements[i(0x201)](ParameterEditor['is'],ParameterEditor);
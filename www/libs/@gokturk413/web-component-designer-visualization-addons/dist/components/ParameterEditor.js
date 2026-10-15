const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x9a))/0x1*(parseInt(h(0xa1))/0x2)+-parseInt(h(0x94))/0x3*(parseInt(h(0x93))/0x4)+parseInt(h(0x9e))/0x5*(parseInt(h(0x95))/0x6)+parseInt(h(0x8f))/0x7+-parseInt(h(0x8c))/0x8*(-parseInt(h(0x91))/0x9)+-parseInt(h(0xa2))/0xa+parseInt(h(0x8a))/0xb*(-parseInt(h(0x97))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xefaa6));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x8a;const e=a();let f=e[c];return f;}export class ParameterEditor extends BaseCustomWebComponentConstructorAppend{static [i(0x98)]=css`
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
        <button @click="[[this._add()]]" style="width: 40px; height: 20px; align-self: center;">add</button>`;static ['is']='node-projects-visualization-parameter-editor';constructor(){const j=i;super(),this[j(0x8d)]();}[i(0x92)](){const k=i;this[k(0xa3)]();}[i(0x8e)];['setParametersObject'](c){const l=i;if(c!=null)this[l(0x8e)]=Object['keys'](c)['map'](d=>({'key':d,'type':typeof c[d]==='object'?l(0x9d):typeof c[d],'value':c[d]}));else this[l(0x8e)]=[];this['_bindingsRefresh']();}[i(0x8b)](){const m=i;let c=![];const d={};for(const e of this[m(0x8e)]){if(e[m(0x90)]){c=!![],d[e[m(0x90)]]=null;switch(e[m(0xa0)]){case m(0x96):d[e['key']]=e['value'][m(0x9c)]();break;case'number':const g=parseFloat(e['value']);d[e['key']]=isNaN(g)?0x0:g;break;case'boolean':d[e[m(0x90)]]=!!e[m(0x99)];break;}}}return c?d:null;}[i(0x9f)](c){const n=i;this[n(0x8e)]['splice'](c,0x1),this['_bindingsRefresh']();}['_add'](){const o=i;this[o(0x8e)]['push']({'type':'null'}),this[o(0x9b)]();}}function a(){const p=['4380zFgnOX','style','value','386BakLJA','_bindingsRefresh','toString','null','5IBZQFy','_remove','type','3022BXyCyy','3885860VxFSfT','_bindingsParse','29260IbaAIx','getParametersObject','6559640RzcYOf','_restoreCachedInititalValues','_parameterArray','5375062OHzcoX','key','18DvMeWY','ready','4xurJrO','5283165UllkNQ','6667134jIEqqf','string'];a=function(){return p;};return a();}customElements['define'](ParameterEditor['is'],ParameterEditor);
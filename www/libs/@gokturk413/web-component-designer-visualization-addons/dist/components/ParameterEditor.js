const i=b;function a(){const n=['2rmINgG','8257728zHpDCX','style','getParametersObject','2196190bExWsN','_bindingsRefresh','_remove','splice','4073970HyBcHe','type','16XKjhVS','null','template','map','890195NqZavU','push','define','keys','1754778DxMSYT','_parameterArray','setParametersObject','object','3018666ShRHkO','11Irossn','string','48tZFeYN','9YGedjW','80403pcYCjj','number','value'];a=function(){return n;};return a();}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x165))/0x1*(parseInt(h(0x157))/0x2)+parseInt(h(0x154))/0x3*(parseInt(h(0x152))/0x4)+-parseInt(h(0x15b))/0x5+parseInt(h(0x169))/0x6+parseInt(h(0x14f))/0x7*(-parseInt(h(0x161))/0x8)+parseInt(h(0x153))/0x9*(-parseInt(h(0x15f))/0xa)+parseInt(h(0x150))/0xb*(parseInt(h(0x158))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x75fe7));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class ParameterEditor extends BaseCustomWebComponentConstructorAppend{static [i(0x159)]=css`
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
        }`;static [i(0x163)]=html`
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
        <button @click="[[this._add()]]" style="width: 40px; height: 20px; align-self: center;">add</button>`;static ['is']='node-projects-visualization-parameter-editor';constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){this['_bindingsParse']();}[i(0x16a)];[i(0x14d)](c){const j=i;if(c!=null)this['_parameterArray']=Object[j(0x168)](c)[j(0x164)](d=>({'key':d,'type':typeof c[d]===j(0x14e)?j(0x162):typeof c[d],'value':c[d]}));else this['_parameterArray']=[];this[j(0x15c)]();}[i(0x15a)](){const k=i;let c=![];const d={};for(const e of this['_parameterArray']){if(e['key']){c=!![],d[e['key']]=null;switch(e[k(0x160)]){case k(0x151):d[e['key']]=e[k(0x156)]['toString']();break;case k(0x155):const g=parseFloat(e[k(0x156)]);d[e['key']]=isNaN(g)?0x0:g;break;case'boolean':d[e['key']]=!!e[k(0x156)];break;}}}return c?d:null;}[i(0x15d)](c){const l=i;this[l(0x16a)][l(0x15e)](c,0x1),this['_bindingsRefresh']();}['_add'](){const m=i;this['_parameterArray'][m(0x166)]({'type':'null'}),this['_bindingsRefresh']();}}function b(c,d){c=c-0x14d;const e=a();let f=e[c];return f;}customElements[i(0x167)](ParameterEditor['is'],ParameterEditor);
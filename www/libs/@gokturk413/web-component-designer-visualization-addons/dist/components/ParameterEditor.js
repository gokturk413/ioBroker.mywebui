const i=b;function b(c,d){c=c-0x115;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x11c))/0x1*(-parseInt(h(0x11b))/0x2)+-parseInt(h(0x118))/0x3*(-parseInt(h(0x11a))/0x4)+-parseInt(h(0x121))/0x5*(-parseInt(h(0x119))/0x6)+parseInt(h(0x129))/0x7+-parseInt(h(0x117))/0x8*(parseInt(h(0x120))/0x9)+parseInt(h(0x11e))/0xa+parseInt(h(0x12b))/0xb*(-parseInt(h(0x11d))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x75c74));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class ParameterEditor extends BaseCustomWebComponentConstructorAppend{static [i(0x116)]=css`
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
        <button @click="[[this._add()]]" style="width: 40px; height: 20px; align-self: center;">add</button>`;static ['is']='node-projects-visualization-parameter-editor';constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){this['_bindingsParse']();}['_parameterArray'];['setParametersObject'](c){const j=i;if(c!=null)this['_parameterArray']=Object['keys'](c)[j(0x128)](d=>({'key':d,'type':typeof c[d]==='object'?'null':typeof c[d],'value':c[d]}));else this['_parameterArray']=[];this[j(0x115)]();}['getParametersObject'](){const k=i;let c=![];const d={};for(const e of this['_parameterArray']){if(e['key']){c=!![],d[e['key']]=null;switch(e[k(0x125)]){case k(0x126):d[e['key']]=e['value']['toString']();break;case k(0x124):const g=parseFloat(e[k(0x12a)]);d[e['key']]=isNaN(g)?0x0:g;break;case k(0x123):d[e['key']]=!!e[k(0x12a)];break;}}}return c?d:null;}['_remove'](c){this['_parameterArray']['splice'](c,0x1),this['_bindingsRefresh']();}[i(0x127)](){const l=i;this['_parameterArray']['push']({'type':l(0x11f)}),this['_bindingsRefresh']();}}function a(){const m=['11CRJYLQ','_bindingsRefresh','style','104LFhdpo','356169ZkAHPI','11958QhspEz','28gvxDpa','3506EFdXoK','491RxnWCh','6412572SNSsAo','1837360IcPGTd','null','232749FeHZZM','1450icaDDp','define','boolean','number','type','string','_add','map','4346650vFGBNM','value'];a=function(){return m;};return a();}customElements[i(0x122)](ParameterEditor['is'],ParameterEditor);
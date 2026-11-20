const j=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x171))/0x1+parseInt(h(0x177))/0x2*(-parseInt(h(0x169))/0x3)+-parseInt(h(0x16e))/0x4*(parseInt(h(0x165))/0x5)+parseInt(h(0x175))/0x6*(-parseInt(h(0x16d))/0x7)+-parseInt(h(0x179))/0x8+-parseInt(h(0x174))/0x9*(parseInt(h(0x163))/0xa)+parseInt(h(0x167))/0xb*(parseInt(h(0x16b))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7c4f2));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class ParameterEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        <button @click="[[this._add()]]" style="width: 40px; height: 20px; align-self: center;">add</button>`;static ['is']='node-projects-visualization-parameter-editor';constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const i=b;this[i(0x16a)]();}[j(0x172)];['setParametersObject'](c){const k=j;if(c!=null)this['_parameterArray']=Object['keys'](c)[k(0x176)](d=>({'key':d,'type':typeof c[d]==='object'?'null':typeof c[d],'value':c[d]}));else this[k(0x172)]=[];this['_bindingsRefresh']();}[j(0x173)](){const l=j;let c=![];const d={};for(const e of this['_parameterArray']){if(e['key']){c=!![],d[e['key']]=null;switch(e['type']){case'string':d[e[l(0x166)]]=e['value']['toString']();break;case l(0x170):const g=parseFloat(e[l(0x164)]);d[e['key']]=isNaN(g)?0x0:g;break;case l(0x16f):d[e[l(0x166)]]=!!e['value'];break;}}}return c?d:null;}['_remove'](c){const m=j;this[m(0x172)]['splice'](c,0x1),this[m(0x168)]();}['_add'](){const n=j;this['_parameterArray'][n(0x16c)]({'type':n(0x178)}),this[n(0x168)]();}}function b(c,d){c=c-0x163;const e=a();let f=e[c];return f;}customElements['define'](ParameterEditor['is'],ParameterEditor);function a(){const o=['value','5nlZQPU','key','11HUMMAK','_bindingsRefresh','6bIZrHW','_bindingsParse','44958588SJVdoC','push','3913srJOZP','2717924olJsJa','boolean','number','218497iOyERm','_parameterArray','getParametersObject','18EbDsEd','4110WQwXvs','map','437172AaefzN','null','4341536vQOToT','4883110RojQmo'];a=function(){return o;};return a();}
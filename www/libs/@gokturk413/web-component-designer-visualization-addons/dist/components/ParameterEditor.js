const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x13c))/0x1+-parseInt(h(0x146))/0x2+parseInt(h(0x144))/0x3+-parseInt(h(0x140))/0x4*(parseInt(h(0x134))/0x5)+-parseInt(h(0x138))/0x6*(parseInt(h(0x137))/0x7)+parseInt(h(0x135))/0x8*(parseInt(h(0x149))/0x9)+-parseInt(h(0x13d))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x67c8b));function a(){const n=['node-projects-visualization-parameter-editor','215PoPuQB','1004560IWjpsP','object','321447BrcaYQ','6RSvyJj','key','value','_parameterArray','846298YQwuwX','1356120vgLsWT','keys','ready','70852cGWgKn','_bindingsRefresh','style','null','428439OOumBA','template','748480muHFXy','boolean','toString','54RhsNkm','setParametersObject','number','map','_bindingsParse'];a=function(){return n;};return a();}function b(c,d){c=c-0x134;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class ParameterEditor extends BaseCustomWebComponentConstructorAppend{static [i(0x142)]=css`
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
        }`;static [i(0x145)]=html`
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
        <button @click="[[this._add()]]" style="width: 40px; height: 20px; align-self: center;">add</button>`;static ['is']=i(0x14e);constructor(){super(),this['_restoreCachedInititalValues']();}[i(0x13f)](){const j=i;this[j(0x14d)]();}['_parameterArray'];[i(0x14a)](c){const k=i;if(c!=null)this[k(0x13b)]=Object[k(0x13e)](c)[k(0x14c)](d=>({'key':d,'type':typeof c[d]===k(0x136)?k(0x143):typeof c[d],'value':c[d]}));else this['_parameterArray']=[];this[k(0x141)]();}['getParametersObject'](){const l=i;let c=![];const d={};for(const e of this[l(0x13b)]){if(e['key']){c=!![],d[e[l(0x139)]]=null;switch(e['type']){case'string':d[e[l(0x139)]]=e['value'][l(0x148)]();break;case l(0x14b):const g=parseFloat(e['value']);d[e['key']]=isNaN(g)?0x0:g;break;case l(0x147):d[e['key']]=!!e[l(0x13a)];break;}}}return c?d:null;}['_remove'](c){const m=i;this[m(0x13b)]['splice'](c,0x1),this['_bindingsRefresh']();}['_add'](){this['_parameterArray']['push']({'type':'null'}),this['_bindingsRefresh']();}}customElements['define'](ParameterEditor['is'],ParameterEditor);
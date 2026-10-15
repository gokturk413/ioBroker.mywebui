const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x1ba))/0x1*(parseInt(h(0x1bd))/0x2)+parseInt(h(0x1cc))/0x3*(-parseInt(h(0x1c5))/0x4)+-parseInt(h(0x1c7))/0x5+parseInt(h(0x1c9))/0x6+-parseInt(h(0x1cf))/0x7*(-parseInt(h(0x1d1))/0x8)+parseInt(h(0x1b9))/0x9*(-parseInt(h(0x1c3))/0xa)+-parseInt(h(0x1d0))/0xb*(-parseInt(h(0x1ca))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x57a51));function b(c,d){c=c-0x1b8;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function a(){const o=['10UEZdjj','node-projects-visualization-parameter-editor','4MXevPP','object','163990JWpNqa','setParametersObject','506082wWAsUP','15744jxMgsK','boolean','126051BPnUkG','keys','_parameterArray','7VBsOxI','3421Hanbhn','4185784TRYQwm','_bindingsRefresh','2293254drXvVm','18fLdhYl','getParametersObject','_bindingsParse','36332VwlDUI','key','_remove','value','null','template'];a=function(){return o;};return a();}export class ParameterEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [i(0x1c2)]=html`
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
        <button @click="[[this._add()]]" style="width: 40px; height: 20px; align-self: center;">add</button>`;static ['is']=i(0x1c4);constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const j=i;this[j(0x1bc)]();}[i(0x1ce)];[i(0x1c8)](c){const k=i;if(c!=null)this['_parameterArray']=Object[k(0x1cd)](c)['map'](d=>({'key':d,'type':typeof c[d]===k(0x1c6)?k(0x1c1):typeof c[d],'value':c[d]}));else this['_parameterArray']=[];this['_bindingsRefresh']();}[i(0x1bb)](){const l=i;let c=![];const d={};for(const e of this['_parameterArray']){if(e[l(0x1be)]){c=!![],d[e[l(0x1be)]]=null;switch(e['type']){case'string':d[e[l(0x1be)]]=e['value']['toString']();break;case'number':const g=parseFloat(e[l(0x1c0)]);d[e[l(0x1be)]]=isNaN(g)?0x0:g;break;case l(0x1cb):d[e[l(0x1be)]]=!!e['value'];break;}}}return c?d:null;}[i(0x1bf)](c){const m=i;this[m(0x1ce)]['splice'](c,0x1),this[m(0x1b8)]();}['_add'](){const n=i;this['_parameterArray']['push']({'type':'null'}),this[n(0x1b8)]();}}customElements['define'](ParameterEditor['is'],ParameterEditor);
const i=b;function b(c,d){c=c-0x157;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x15c))/0x1+parseInt(h(0x15a))/0x2*(parseInt(h(0x16d))/0x3)+parseInt(h(0x170))/0x4*(parseInt(h(0x16c))/0x5)+-parseInt(h(0x163))/0x6*(parseInt(h(0x16b))/0x7)+parseInt(h(0x158))/0x8*(parseInt(h(0x171))/0x9)+parseInt(h(0x162))/0xa+-parseInt(h(0x167))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xacd91));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class ParameterEditor extends BaseCustomWebComponentConstructorAppend{static [i(0x15d)]=css`
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
        <button @click="[[this._add()]]" style="width: 40px; height: 20px; align-self: center;">add</button>`;static ['is']=i(0x15b);constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const j=i;this[j(0x161)]();}[i(0x16f)];['setParametersObject'](c){const k=i;if(c!=null)this['_parameterArray']=Object[k(0x169)](c)[k(0x157)](d=>({'key':d,'type':typeof c[d]==='object'?'null':typeof c[d],'value':c[d]}));else this[k(0x16f)]=[];this['_bindingsRefresh']();}['getParametersObject'](){const l=i;let c=![];const d={};for(const e of this['_parameterArray']){if(e[l(0x159)]){c=!![],d[e['key']]=null;switch(e['type']){case l(0x164):d[e[l(0x159)]]=e['value'][l(0x15f)]();break;case'number':const g=parseFloat(e[l(0x15e)]);d[e['key']]=isNaN(g)?0x0:g;break;case l(0x168):d[e['key']]=!!e['value'];break;}}}return c?d:null;}[i(0x16a)](c){const m=i;this[m(0x16f)]['splice'](c,0x1),this[m(0x160)]();}[i(0x16e)](){const n=i;this[n(0x16f)][n(0x166)]({'type':'null'}),this['_bindingsRefresh']();}}customElements[i(0x165)](ParameterEditor['is'],ParameterEditor);function a(){const o=['map','16NRWOsh','key','2666436WHTYQy','node-projects-visualization-parameter-editor','364869VZxjYn','style','value','toString','_bindingsRefresh','_bindingsParse','13739580mxgYsM','6NCEDbj','string','define','push','26126650lXjfzk','boolean','keys','_remove','7659771iwbtka','365WCPxDC','3ycmqkV','_add','_parameterArray','38964PfbvRO','5057946gtqPfI'];a=function(){return o;};return a();}
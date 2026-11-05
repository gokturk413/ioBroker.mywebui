const i=b;function a(){const o=['_restoreCachedInititalValues','3449196dceZvO','setParametersObject','style','90PWOFoZ','value','108340yBNfYc','null','_bindingsRefresh','getParametersObject','1lviKUI','14035986dUkzvE','3292205aEFcey','_parameterArray','object','184372oKjplf','splice','string','3207000JRdfvV','2431DapQYH','495745szdvqE','template','keys','8ufGaXp','key'];a=function(){return o;};return a();}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x17e))/0x1*(parseInt(h(0x16a))/0x2)+-parseInt(h(0x175))/0x3+-parseInt(h(0x16d))/0x4+parseInt(h(0x16f))/0x5*(-parseInt(h(0x178))/0x6)+-parseInt(h(0x180))/0x7*(-parseInt(h(0x172))/0x8)+parseInt(h(0x17f))/0x9+parseInt(h(0x17a))/0xa*(parseInt(h(0x16e))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xda160));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class ParameterEditor extends BaseCustomWebComponentConstructorAppend{static [i(0x177)]=css`
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
        }`;static [i(0x170)]=html`
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
        <button @click="[[this._add()]]" style="width: 40px; height: 20px; align-self: center;">add</button>`;static ['is']='node-projects-visualization-parameter-editor';constructor(){const j=i;super(),this[j(0x174)]();}['ready'](){this['_bindingsParse']();}['_parameterArray'];[i(0x176)](c){const k=i;if(c!=null)this[k(0x181)]=Object[k(0x171)](c)['map'](d=>({'key':d,'type':typeof c[d]===k(0x182)?k(0x17b):typeof c[d],'value':c[d]}));else this[k(0x181)]=[];this['_bindingsRefresh']();}[i(0x17d)](){const l=i;let c=![];const d={};for(const e of this[l(0x181)]){if(e['key']){c=!![],d[e['key']]=null;switch(e['type']){case l(0x16c):d[e['key']]=e[l(0x179)]['toString']();break;case'number':const g=parseFloat(e[l(0x179)]);d[e['key']]=isNaN(g)?0x0:g;break;case'boolean':d[e[l(0x173)]]=!!e['value'];break;}}}return c?d:null;}['_remove'](c){const m=i;this[m(0x181)][m(0x16b)](c,0x1),this[m(0x17c)]();}['_add'](){const n=i;this[n(0x181)]['push']({'type':'null'}),this[n(0x17c)]();}}function b(c,d){c=c-0x16a;const e=a();let f=e[c];return f;}customElements['define'](ParameterEditor['is'],ParameterEditor);
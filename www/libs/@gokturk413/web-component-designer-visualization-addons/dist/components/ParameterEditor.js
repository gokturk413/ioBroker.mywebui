function a(){const o=['style','map','567515FgGdpT','57156pIlCik','_remove','5694NwbGMl','813152GObLAU','_bindingsRefresh','splice','540jawfeV','getParametersObject','push','_parameterArray','define','key','127qxsTcC','string','6bOMzSB','keys','_add','12914wEKWZI','770650cwtrJv','_bindingsParse','63ilIEww','940254yGxWZJ','4390PJPpQv','4tVNCTY','null'];a=function(){return o;};return a();}const i=b;function b(c,d){c=c-0x87;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x9b))/0x1*(parseInt(h(0x91))/0x2)+parseInt(h(0x8f))/0x3*(parseInt(h(0x8a))/0x4)+-parseInt(h(0xa1))/0x5+parseInt(h(0x9d))/0x6*(parseInt(h(0x88))/0x7)+-parseInt(h(0x92))/0x8*(parseInt(h(0x87))/0x9)+-parseInt(h(0x89))/0xa*(parseInt(h(0xa0))/0xb)+-parseInt(h(0x95))/0xc*(-parseInt(h(0x8e))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5b9d8));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class ParameterEditor extends BaseCustomWebComponentConstructorAppend{static [i(0x8c)]=css`
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
        <button @click="[[this._add()]]" style="width: 40px; height: 20px; align-self: center;">add</button>`;static ['is']='node-projects-visualization-parameter-editor';constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const j=i;this[j(0xa2)]();}[i(0x98)];['setParametersObject'](c){const k=i;if(c!=null)this[k(0x98)]=Object[k(0x9e)](c)[k(0x8d)](d=>({'key':d,'type':typeof c[d]==='object'?k(0x8b):typeof c[d],'value':c[d]}));else this['_parameterArray']=[];this[k(0x93)]();}[i(0x96)](){const l=i;let c=![];const d={};for(const e of this['_parameterArray']){if(e['key']){c=!![],d[e[l(0x9a)]]=null;switch(e['type']){case l(0x9c):d[e[l(0x9a)]]=e['value']['toString']();break;case'number':const g=parseFloat(e['value']);d[e['key']]=isNaN(g)?0x0:g;break;case'boolean':d[e['key']]=!!e['value'];break;}}}return c?d:null;}[i(0x90)](c){const m=i;this['_parameterArray'][m(0x94)](c,0x1),this['_bindingsRefresh']();}[i(0x9f)](){const n=i;this[n(0x98)][n(0x97)]({'type':'null'}),this['_bindingsRefresh']();}}customElements[i(0x99)](ParameterEditor['is'],ParameterEditor);
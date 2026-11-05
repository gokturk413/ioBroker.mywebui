const j=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x139))/0x1+-parseInt(h(0x12e))/0x2+-parseInt(h(0x145))/0x3+parseInt(h(0x142))/0x4*(-parseInt(h(0x144))/0x5)+-parseInt(h(0x13c))/0x6*(parseInt(h(0x136))/0x7)+-parseInt(h(0x132))/0x8*(parseInt(h(0x12f))/0x9)+parseInt(h(0x13d))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x90878));function a(){const n=['_parameterArray','1794jePVCV','26015240HeBdqs','setParametersObject','toString','string','_restoreCachedInititalValues','2448452MUbMXe','boolean','5uVBLuY','3473784VoRzJm','_add','104242HBDuYk','2356866qLrGAe','number','keys','8SxEBXB','type','key','_remove','25277dZRHND','null','getParametersObject','1154193WflREJ','_bindingsRefresh'];a=function(){return n;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x12d;const e=a();let f=e[c];return f;}export class ParameterEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        <button @click="[[this._add()]]" style="width: 40px; height: 20px; align-self: center;">add</button>`;static ['is']='node-projects-visualization-parameter-editor';constructor(){const i=b;super(),this[i(0x141)]();}['ready'](){this['_bindingsParse']();}[j(0x13b)];[j(0x13e)](c){const k=j;if(c!=null)this['_parameterArray']=Object[k(0x131)](c)['map'](d=>({'key':d,'type':typeof c[d]==='object'?k(0x137):typeof c[d],'value':c[d]}));else this[k(0x13b)]=[];this['_bindingsRefresh']();}[j(0x138)](){const l=j;let c=![];const d={};for(const e of this[l(0x13b)]){if(e['key']){c=!![],d[e['key']]=null;switch(e[l(0x133)]){case l(0x140):d[e['key']]=e['value'][l(0x13f)]();break;case l(0x130):const g=parseFloat(e['value']);d[e[l(0x134)]]=isNaN(g)?0x0:g;break;case l(0x143):d[e['key']]=!!e['value'];break;}}}return c?d:null;}[j(0x135)](c){this['_parameterArray']['splice'](c,0x1),this['_bindingsRefresh']();}[j(0x12d)](){const m=j;this['_parameterArray']['push']({'type':m(0x137)}),this[m(0x13a)]();}}customElements['define'](ParameterEditor['is'],ParameterEditor);
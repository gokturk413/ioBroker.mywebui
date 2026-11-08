const i=b;function a(){const n=['6393285ZirfPB','3PRhCtB','153263cAIXLb','setParametersObject','splice','template','_parameterArray','ready','16yYVesg','2472924bBprGp','65882VwsBUF','toString','_bindingsRefresh','object','35htSblN','1148022KHLdSH','3241233RAehEz','key','keys','1019356osrORk','type','boolean','17jjhUgo','50OsGBsA','null'];a=function(){return n;};return a();}function b(c,d){c=c-0xaa;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xb3))/0x1*(-parseInt(h(0xc0))/0x2)+-parseInt(h(0xb7))/0x3*(parseInt(h(0xb0))/0x4)+-parseInt(h(0xb6))/0x5+-parseInt(h(0xac))/0x6*(-parseInt(h(0xab))/0x7)+parseInt(h(0xbe))/0x8*(parseInt(h(0xad))/0x9)+parseInt(h(0xb4))/0xa*(-parseInt(h(0xb8))/0xb)+parseInt(h(0xbf))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xcd0c0));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class ParameterEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [i(0xbb)]=html`
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
        <button @click="[[this._add()]]" style="width: 40px; height: 20px; align-self: center;">add</button>`;static ['is']='node-projects-visualization-parameter-editor';constructor(){super(),this['_restoreCachedInititalValues']();}[i(0xbd)](){this['_bindingsParse']();}['_parameterArray'];[i(0xb9)](c){const j=i;if(c!=null)this[j(0xbc)]=Object[j(0xaf)](c)['map'](d=>({'key':d,'type':typeof c[d]===j(0xaa)?j(0xb5):typeof c[d],'value':c[d]}));else this['_parameterArray']=[];this['_bindingsRefresh']();}['getParametersObject'](){const k=i;let c=![];const d={};for(const e of this[k(0xbc)]){if(e[k(0xae)]){c=!![],d[e['key']]=null;switch(e[k(0xb1)]){case'string':d[e['key']]=e['value'][k(0xc1)]();break;case'number':const g=parseFloat(e['value']);d[e[k(0xae)]]=isNaN(g)?0x0:g;break;case k(0xb2):d[e['key']]=!!e['value'];break;}}}return c?d:null;}['_remove'](c){const l=i;this[l(0xbc)][l(0xba)](c,0x1),this[l(0xc2)]();}['_add'](){const m=i;this[m(0xbc)]['push']({'type':m(0xb5)}),this['_bindingsRefresh']();}}customElements['define'](ParameterEditor['is'],ParameterEditor);
const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0x170))/0x1+-parseInt(h(0x16f))/0x2*(-parseInt(h(0x175))/0x3)+parseInt(h(0x172))/0x4*(parseInt(h(0x16a))/0x5)+-parseInt(h(0x17c))/0x6+parseInt(h(0x180))/0x7*(-parseInt(h(0x185))/0x8)+parseInt(h(0x171))/0x9*(parseInt(h(0x174))/0xa)+parseInt(h(0x16b))/0xb*(parseInt(h(0x184))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa9e1f));function a(){const n=['template','_bindingsParse','5lrZuTL','11olAkka','number','_parameterArray','_remove','161574ZRLCtF','255530QwKIGH','8367201UWjRfX','589828yLiEwy','_bindingsRefresh','10CQHMmi','3hsdSxC','value','getParametersObject','key','push','keys','define','3671568QZWTxI','setParametersObject','boolean','object','4771459iasCKA','ready','style','string','13044012TjCgvb','8zfSSot'];a=function(){return n;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x16a;const e=a();let f=e[c];return f;}export class ParameterEditor extends BaseCustomWebComponentConstructorAppend{static [i(0x182)]=css`
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
        }`;static [i(0x186)]=html`
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
        <button @click="[[this._add()]]" style="width: 40px; height: 20px; align-self: center;">add</button>`;static ['is']='node-projects-visualization-parameter-editor';constructor(){super(),this['_restoreCachedInititalValues']();}[i(0x181)](){const j=i;this[j(0x187)]();}['_parameterArray'];[i(0x17d)](c){const k=i;if(c!=null)this[k(0x16d)]=Object[k(0x17a)](c)['map'](d=>({'key':d,'type':typeof c[d]===k(0x17f)?'null':typeof c[d],'value':c[d]}));else this[k(0x16d)]=[];this[k(0x173)]();}[i(0x177)](){const l=i;let c=![];const d={};for(const e of this[l(0x16d)]){if(e[l(0x178)]){c=!![],d[e['key']]=null;switch(e['type']){case l(0x183):d[e[l(0x178)]]=e['value']['toString']();break;case l(0x16c):const g=parseFloat(e[l(0x176)]);d[e['key']]=isNaN(g)?0x0:g;break;case l(0x17e):d[e[l(0x178)]]=!!e['value'];break;}}}return c?d:null;}[i(0x16e)](c){this['_parameterArray']['splice'](c,0x1),this['_bindingsRefresh']();}['_add'](){const m=i;this['_parameterArray'][m(0x179)]({'type':'null'}),this[m(0x173)]();}}customElements[i(0x17b)](ParameterEditor['is'],ParameterEditor);
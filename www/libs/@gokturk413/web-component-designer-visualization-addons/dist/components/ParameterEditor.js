const k=b;function b(c,d){c=c-0x196;const e=a();let f=e[c];return f;}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x1a9))/0x1+-parseInt(h(0x1a8))/0x2+-parseInt(h(0x19b))/0x3*(-parseInt(h(0x1a1))/0x4)+parseInt(h(0x197))/0x5*(parseInt(h(0x19c))/0x6)+parseInt(h(0x1a3))/0x7*(-parseInt(h(0x19f))/0x8)+parseInt(h(0x19d))/0x9*(-parseInt(h(0x198))/0xa)+-parseInt(h(0x1ab))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc3244));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function a(){const p=['410zWeADl','null','_parameterArray','135MuFSOH','8292aaZEGl','72729DaiFLx','type','287368GBWLiX','_restoreCachedInititalValues','122692KeCCNt','_bindingsParse','133VtnUoB','_remove','keys','_bindingsRefresh','_add','479758lJhCJi','365673HtpYtz','key','5166073RzluCq','number','value','push','define','2810rjSPqp'];a=function(){return p;};return a();}export class ParameterEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        <button @click="[[this._add()]]" style="width: 40px; height: 20px; align-self: center;">add</button>`;static ['is']='node-projects-visualization-parameter-editor';constructor(){const i=b;super(),this[i(0x1a0)]();}['ready'](){const j=b;this[j(0x1a2)]();}[k(0x19a)];['setParametersObject'](c){const l=k;if(c!=null)this['_parameterArray']=Object[l(0x1a5)](c)['map'](d=>({'key':d,'type':typeof c[d]==='object'?'null':typeof c[d],'value':c[d]}));else this['_parameterArray']=[];this[l(0x1a6)]();}['getParametersObject'](){const m=k;let c=![];const d={};for(const e of this['_parameterArray']){if(e[m(0x1aa)]){c=!![],d[e[m(0x1aa)]]=null;switch(e[m(0x19e)]){case'string':d[e[m(0x1aa)]]=e[m(0x1ad)]['toString']();break;case m(0x1ac):const g=parseFloat(e['value']);d[e[m(0x1aa)]]=isNaN(g)?0x0:g;break;case'boolean':d[e['key']]=!!e['value'];break;}}}return c?d:null;}[k(0x1a4)](c){const n=k;this['_parameterArray']['splice'](c,0x1),this[n(0x1a6)]();}[k(0x1a7)](){const o=k;this[o(0x19a)][o(0x1ae)]({'type':o(0x199)}),this[o(0x1a6)]();}}customElements[k(0x196)](ParameterEditor['is'],ParameterEditor);
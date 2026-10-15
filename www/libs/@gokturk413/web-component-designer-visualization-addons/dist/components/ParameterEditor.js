function b(c,d){c=c-0x7b;const e=a();let f=e[c];return f;}const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x91))/0x1*(-parseInt(h(0x7f))/0x2)+-parseInt(h(0x82))/0x3*(-parseInt(h(0x87))/0x4)+parseInt(h(0x93))/0x5+-parseInt(h(0x8e))/0x6*(-parseInt(h(0x94))/0x7)+parseInt(h(0x8c))/0x8*(parseInt(h(0x8b))/0x9)+-parseInt(h(0x7b))/0xa+-parseInt(h(0x7e))/0xb*(-parseInt(h(0x80))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x46d90));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class ParameterEditor extends BaseCustomWebComponentConstructorAppend{static [i(0x8a)]=css`
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
        }`;static [i(0x84)]=html`
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
        <button @click="[[this._add()]]" style="width: 40px; height: 20px; align-self: center;">add</button>`;static ['is']=i(0x81);constructor(){const j=i;super(),this[j(0x92)]();}['ready'](){this['_bindingsParse']();}['_parameterArray'];['setParametersObject'](c){const k=i;if(c!=null)this['_parameterArray']=Object[k(0x89)](c)['map'](d=>({'key':d,'type':typeof c[d]===k(0x95)?k(0x85):typeof c[d],'value':c[d]}));else this[k(0x8f)]=[];this[k(0x83)]();}['getParametersObject'](){const l=i;let c=![];const d={};for(const e of this[l(0x8f)]){if(e['key']){c=!![],d[e[l(0x86)]]=null;switch(e['type']){case'string':d[e[l(0x86)]]=e[l(0x7c)][l(0x90)]();break;case'number':const g=parseFloat(e[l(0x7c)]);d[e[l(0x86)]]=isNaN(g)?0x0:g;break;case l(0x8d):d[e['key']]=!!e[l(0x7c)];break;}}}return c?d:null;}[i(0x7d)](c){const m=i;this['_parameterArray']['splice'](c,0x1),this[m(0x83)]();}['_add'](){const n=i;this[n(0x8f)][n(0x88)]({'type':'null'}),this['_bindingsRefresh']();}}customElements['define'](ParameterEditor['is'],ParameterEditor);function a(){const o=['push','keys','style','3366UQyuuK','1512vbVwUi','boolean','50634niYdxy','_parameterArray','toString','16603PRBvUR','_restoreCachedInititalValues','185535nysbjl','371fNYeHI','object','4849780ZWhqRb','value','_remove','11qrxEzY','14sOfRzt','3879348PZwNsz','node-projects-visualization-parameter-editor','9789AKpJPd','_bindingsRefresh','template','null','key','16LtEGeI'];a=function(){return o;};return a();}
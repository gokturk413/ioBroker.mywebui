const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x1c7))/0x1*(parseInt(h(0x1c5))/0x2)+-parseInt(h(0x1b7))/0x3+-parseInt(h(0x1c6))/0x4+parseInt(h(0x1b2))/0x5+parseInt(h(0x1ba))/0x6*(-parseInt(h(0x1b3))/0x7)+-parseInt(h(0x1c1))/0x8*(parseInt(h(0x1bf))/0x9)+parseInt(h(0x1b6))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xde638));import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';function a(){const o=['object','4184tUWSkJ','_add','string','node-projects-visualization-parameter-editor','6bqVeUC','3339696XVBCEw','152921CgflDV','_parameterArray','_bindingsRefresh','number','198745uZYHJs','9450511fgmUIH','null','value','53952250DYAkgY','3932841eMgoEQ','style','push','6IAiARB','template','key','setParametersObject','_restoreCachedInititalValues','25587whEgdV'];a=function(){return o;};return a();}export class ParameterEditor extends BaseCustomWebComponentConstructorAppend{static [i(0x1b8)]=css`
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
        }`;static [i(0x1bb)]=html`
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
        <button @click="[[this._add()]]" style="width: 40px; height: 20px; align-self: center;">add</button>`;static ['is']=i(0x1c4);constructor(){const j=i;super(),this[j(0x1be)]();}['ready'](){this['_bindingsParse']();}[i(0x1c8)];[i(0x1bd)](c){const k=i;if(c!=null)this['_parameterArray']=Object['keys'](c)['map'](d=>({'key':d,'type':typeof c[d]===k(0x1c0)?k(0x1b4):typeof c[d],'value':c[d]}));else this['_parameterArray']=[];this[k(0x1b0)]();}['getParametersObject'](){const l=i;let c=![];const d={};for(const e of this['_parameterArray']){if(e[l(0x1bc)]){c=!![],d[e[l(0x1bc)]]=null;switch(e['type']){case l(0x1c3):d[e['key']]=e['value']['toString']();break;case l(0x1b1):const g=parseFloat(e[l(0x1b5)]);d[e[l(0x1bc)]]=isNaN(g)?0x0:g;break;case'boolean':d[e[l(0x1bc)]]=!!e[l(0x1b5)];break;}}}return c?d:null;}['_remove'](c){const m=i;this[m(0x1c8)]['splice'](c,0x1),this[m(0x1b0)]();}[i(0x1c2)](){const n=i;this[n(0x1c8)][n(0x1b9)]({'type':'null'}),this[n(0x1b0)]();}}function b(c,d){c=c-0x1b0;const e=a();let f=e[c];return f;}customElements['define'](ParameterEditor['is'],ParameterEditor);
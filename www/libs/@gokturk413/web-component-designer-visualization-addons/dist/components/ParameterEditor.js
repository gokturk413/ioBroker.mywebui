const i=b;function a(){const p=['_parameterArray','push','_bindingsRefresh','style','294821vtkwdq','setParametersObject','2753630obhays','key','162wLPWtN','ready','57508AHivEv','1256754gIXxjE','null','getParametersObject','14296EhWBkC','template','7hGpKFJ','value','_add','956547HeaIAk','_restoreCachedInititalValues','_bindingsParse','object','10IMAUjN','map','_remove','64108hzQFcn','95gzssXv','number','keys','splice'];a=function(){return p;};return a();}(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h(0x169))/0x1+-parseInt(h(0x17f))/0x2+-parseInt(h(0x178))/0x3+parseInt(h(0x16f))/0x4*(-parseInt(h(0x180))/0x5)+parseInt(h(0x170))/0x6*(parseInt(h(0x175))/0x7)+-parseInt(h(0x173))/0x8*(-parseInt(h(0x16d))/0x9)+parseInt(h(0x17c))/0xa*(parseInt(h(0x16b))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x27b96));function b(c,d){c=c-0x167;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@node-projects/base-custom-webcomponent';export class ParameterEditor extends BaseCustomWebComponentConstructorAppend{static [i(0x168)]=css`
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
        }`;static [i(0x174)]=html`
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
        <button @click="[[this._add()]]" style="width: 40px; height: 20px; align-self: center;">add</button>`;static ['is']='node-projects-visualization-parameter-editor';constructor(){const j=i;super(),this[j(0x179)]();}[i(0x16e)](){const k=i;this[k(0x17a)]();}[i(0x184)];[i(0x16a)](c){const l=i;if(c!=null)this['_parameterArray']=Object[l(0x182)](c)[l(0x17d)](d=>({'key':d,'type':typeof c[d]===l(0x17b)?'null':typeof c[d],'value':c[d]}));else this[l(0x184)]=[];this['_bindingsRefresh']();}[i(0x172)](){const m=i;let c=![];const d={};for(const e of this['_parameterArray']){if(e[m(0x16c)]){c=!![],d[e['key']]=null;switch(e['type']){case'string':d[e[m(0x16c)]]=e[m(0x176)]['toString']();break;case m(0x181):const g=parseFloat(e[m(0x176)]);d[e['key']]=isNaN(g)?0x0:g;break;case'boolean':d[e['key']]=!!e[m(0x176)];break;}}}return c?d:null;}[i(0x17e)](c){const n=i;this[n(0x184)][n(0x183)](c,0x1),this['_bindingsRefresh']();}[i(0x177)](){const o=i;this[o(0x184)][o(0x185)]({'type':o(0x171)}),this[o(0x167)]();}}customElements['define'](ParameterEditor['is'],ParameterEditor);
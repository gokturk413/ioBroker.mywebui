function a(){const u=['_serviceContainer','_activeRow','_bindingTarget','5092485KNSZbI','gray','selectedObject','198oefVNg','historic','height','fullName','Remove','_assignEvents','1458492CdcXrs','changedEvents','_bindingsParse','370648xrMEFo','184406Poxmte','_property','background','invert','15dqHPxK','convertersString','expressionTwoWay','_shell','2741648iKPnkN','763195PluVkF','none','objectValueType','select\x20signal...','template','expression2way','converters','forEach','property','removeConverter','initialize','twoWay','style','_select','div','converterGrid','binding','_binding','openConfirmation','_instanceServiceContainer','_clear','string','_updatefocusedRow','title','twoWayPossible','writeBackSignal','expression','mode','_refresh','converter','objectNames','_getDomElement','4641476ULXQvc','_bindingsRefresh','specialType','node-projects-visualization-bindings-editor','push','name'];a=function(){return u;};return a();}function b(c,d){c=c-0x17b;const e=a();let f=e[c];return f;}const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x1a4))/0x1+parseInt(j(0x19b))/0x2*(-parseInt(j(0x19f))/0x3)+-parseInt(j(0x1a3))/0x4+-parseInt(j(0x18e))/0x5+parseInt(j(0x197))/0x6+parseInt(j(0x185))/0x7+parseInt(j(0x19a))/0x8*(parseInt(j(0x191))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7fdb7));import{BaseCustomWebComponentConstructorAppend,html,css}from'@node-projects/base-custom-webcomponent';import{BindingMode,BindingTarget}from'@gokturk413/web-component-designer';import{BindingsEditorHistoric}from'./BindingsEditorHistoric.js';export class BindingsEditor extends BaseCustomWebComponentConstructorAppend{static [k(0x1a8)]=html`
        <div id="root">
            <div class="vertical-grid">
                <div style="grid-column: 1/3">
                    <div style="display: flex; flex-direction: column;">
                        <div class="row">
                            <span style="cursor: pointer;" title="to use multiple objects, seprate them with semicolon (;).&#010;Access signal objects in properties via ?propertyName, access the propertyValue via ??propertyName.&#010;Access signal objects in properties of the target via #propertyName, access a propertyValue of the target via ##propertyName.&#010;Bind to signal configurations via $objectId.&#010;Bind to special values via §name (if supported by your framework).&#010;You could also use signals inside of a Signal Name via {name}">objects</span>
                        </div>
                        <div id="groupObjectName" style="display:flex;align-items: flex-end;">
                            <input id="objectName" class="row" value="{{?this.objectNames::change}}" style="flex-grow: 1;">
                            <button @click="_clear" style="height: 22px">X</button>
                            <button @click="_select" style="height: 22px">...</button>
                        </div>
                        <div id="groupObjectType" class="row">
                            <label style="white-space: nowrap; margin-right: 4px;" title="if set, the value is converted to the type before binding is applied">type :</label>
                            <select class="row" value="{{?this.objectValueType}}">
                                <option selected value="">ignore</option>
                                <option value="number">number</option>
                                <option value="boolean">boolean</option>
                                <option value="string">string</string>
                            </select>
                        </div>
                        <div id="groupBindingMode" class="row">
                            <input type="checkbox" disabled="[[!this.twoWayPossible]]" checked="{{this.twoWay::change}}" @change="_refresh">
                            <span>two way binding</span>
                            <span css:display="[[this.twoWay ? 'inline' : 'none']]" style="margin-left: 15px">events:&nbsp;</span>
                            <input css:display="[[this.twoWay ? 'inline-block' : 'none']]" title="to use multiple events, seprate them with semicolon (;)" class="row" value="{{?this.events::change}}" style="flex-grow: 1;">
                        </div>
                        <div id="groupinvert" class="row" style="position: relative">
                            <input type="checkbox" checked="{{this.invert::change}}">
                            <span>invert logic</span>
                            <button css:border="[[this.historic ? 'solid lime 5px' : 'none']]" style="position: absolute; right: 1px; top: 5px; padding: 10px;" @click="showHistoric">historic</button>
                        </div>
                        <div class="row">
                            <span style="cursor: pointer;" title="javascript expression. access context with __ctx, result with __res, objects with __0, __1, ...">formula</span>
                        </div>
                        <div class="row">
                            <node-projects-code-view-monaco id="expression" single-row language="javascript" style="width: 100%; min-height: 17px; height: 17px; position: relative; overflow: hidden; resize: vertical;" .code="{{?this.expression}}" @code-changed="_refresh"></node-projects-code-view-monaco>
                        </div>
                        <div class="row">
                          <span style="text-wrap: nowrap" style="cursor: pointer;" title="write back the value build by a formula to a signal. maybe only usefull when a formula is used.">write back signal :</span>
                          <input style="width: 100%; margin-left: 5px;" .disabled="[[!this.expression]]" value="{{?this.writeBackSignal::change}}">
                        </div>
                        <div class="row">
                            <span style="cursor: pointer;" title="javascript expression. access property with 'value'">formula write back (two way)</span>
                        </div>
                        <div class="row">
                            <node-projects-code-view-monaco id="expression2way" .read-only="[[!this.twoWay]]" $readonly="[[!this.twoWay]]" single-row language="javascript" style="width: 100%; min-height: 17px; height: 17px; position: relative; overflow: hidden; resize: vertical;" .code="{{?this.expressionTwoWay}}"></node-projects-code-view-monaco>
                        </div>
                    </div>
                </div>
            </div>
            <div class="vertical-grid" style="margin-top: 10px;">
                <div>
                    <div class="input-headline" style="display: flex;align-items: center;">
                        <span>converter</span>:<input id="namedConverterInput" style="width: 100%; margin-left: 15px;" value="{{?this.convertersString::change}}">
                    </div>
                </div>
            </div>
            <div class="vertical-grid" style="border: solid 1px black; padding: 10px; overflow-y: auto;">
                <div class="bottomleft">
                    <div id="converterGrid" style="height: 100%;">
                        <div style="width: 100%; height: 20px; display: flex;">
                            <div style="width: 39%">condition</div>
                            <div style="width: 59%">value</div>
                        </div>
                        <template repeat:item="[[this.converters]]">
                            <div css:background-color="[[item.activeRow ? 'gray' : '']]" style="width: 100%; display: flex; height: 26px; justify-content: center; align-items: center; gap: 5px;">
                                <input type="text" value="{{item.key}}" @focus="[[this._focusRow(index)]]" style="width: 39%">
                                <input type="[[this._property.type == 'color' ? 'color' : 'text']]" value="{{item.value}}" @focus="[[this._focusRow(index)]]" style="width: 59%">
                            </div>
                        </template>
                    </div>
                </div>
                <div class="controlbox" id="grid-controls">
                    <button type="button" id="add-row-button" value="add" @click="addConverter">
                        <span>add</span>
                    </button>
                    <button id="remove-row-button" value="remove" style="margin-top: 6px;" @click="removeConverter">
                        <span>remove</span>
                    </button>
                </div>
            </div>
        </div>`;static ['style']=css`
        :host {
            box-sizing: border-box;
        }
        
        #converterGrid {
            display: flex;
            gap: 2px;
            flex-direction: column;
        }
        #converterGrid input {
            height: 20px;
            box-sizing: border-box;
        }

        .padding_top {
            padding-top: 30px;
        }

        .row{
            margin-top: 3px;
            display: flex;
            align-items: center;
        }

        .controlbox {
            display: flex;
            flex-direction: column;
        }

        .input-headline {
            height: 30px;
        }

        input[type="checkbox"] {
            margin-right: 15px;
            width: 15px;
            height: 15px;
        }

        select {
            width: 100%;
        }

        #root {
            padding: 2px 10px;
            display: grid;
            grid-template-rows: min-content min-content;
            overflow: auto;
            height: calc(100% - 4px)
        }

        .vertical-grid {
            display: grid;
            grid-template-columns: calc((100% - 150px) - 30px) 150px;
            gap: 30px;
        }

        #grid input, #list input { 
            border:0px;
        }

        #tagdata_type {
            height: 24px;
            font-size: inherit;
        }
        
        node-projects-code-view-monaco:not([readonly]) {
            border: 1px black solid;
        }
        
        node-projects-code-view-monaco[readonly] {
            border: 1px lightgray solid;
        }`;static ['is']=k(0x188);static ['properties']={'twoWayPossible':Boolean,'twoWay':Boolean,'expression':String,'objectNames':String,'events':String,'invert':Boolean,'converters':Array,'historic':Object};[k(0x17d)]=![];['twoWay']=![];['expression']='';[k(0x17e)]='';['expressionTwoWay']='';[k(0x192)];[k(0x183)]='';['events']='';['invert']=![];['converters']=[];[k(0x1a0)];['objectValueType'];[k(0x19c)];[k(0x1b5)];['_bindingTarget'];[k(0x18b)];[k(0x1b7)];['_shell'];['_activeRow']=-0x1;['_objNmInput'];constructor(c,d,e,f,g,h,i={'namedConverters':!![]}){const l=k;super(),super['_restoreCachedInititalValues'](),this['_objNmInput']=this[l(0x184)]('objectName'),this[l(0x19c)]=c,this['_binding']=d,this[l(0x18d)]=e,this[l(0x18b)]=f,this[l(0x1b7)]=g,this[l(0x1a2)]=h,!i?.['namedConverters']&&(this[l(0x184)]('namedConverterInput')[l(0x1b0)]['display']=l(0x1a5));}['ready'](){const m=k;this['_parseAttributesToProperties'](),this[m(0x196)](),this['twoWayPossible']=![];if(this[m(0x18d)]==BindingTarget[m(0x1ac)]||this[m(0x18d)]==BindingTarget['attribute'])this['twoWayPossible']=!![];if(this['_binding']){this[m(0x1af)]=this['_binding'][m(0x180)]==BindingMode[m(0x1af)],this['expression']=this['_binding']['expression'],this[m(0x17e)]=this[m(0x1b5)][m(0x17e)],this['expressionTwoWay']=this[m(0x1b5)][m(0x1a1)],this[m(0x192)]=this[m(0x1b5)]['historic'],this['invert']=this['_binding'][m(0x19e)],this[m(0x1a6)]=this['_binding']['type'];if(this['_binding']['bindableObjectNames'])this[m(0x183)]=this['_binding']['bindableObjectNames']['join'](';');if(this['_binding']['converter']){if(typeof this[m(0x1b5)][m(0x182)]===m(0x1b9))this['convertersString']=this[m(0x1b5)]['converter'];else for(let d in this[m(0x1b5)]['converter']){this['converters'][m(0x189)]({'key':d,'value':this[m(0x1b5)][m(0x182)][d]});}}if(this[m(0x1b5)]['changedEvents']&&this[m(0x1b5)]['changedEvents']['length'])this['events']=this['_binding'][m(0x198)]['join'](';');}if(this[m(0x17f)]){let e=this[m(0x184)]('expression');this['expression']['indexOf']('\x0a')>=0x0&&(e[m(0x1b0)]['height']=0x3*0x11+'px');}if(this['expressionTwoWay']){let f=this['_getDomElement'](m(0x1a9));this[m(0x1a1)]['indexOf']('\x0a')>=0x0&&(f['style'][m(0x193)]=0x3*0x11+'px');}this[m(0x199)](),this['_objNmInput']['focus']();}['_focusRow'](c){this['_activeRow']=c,this['_updatefocusedRow']();}['_updatefocusedRow'](){const n=k;let c=this['_getDomElement'](n(0x1b3));c['querySelectorAll'](n(0x1b2))[n(0x1ab)](d=>d['style'][n(0x19d)]='');if(this['_activeRow']>=0x0)c['children'][this[n(0x18c)]+0x1][n(0x1b0)]['background']=n(0x18f);}[k(0x1b8)](){const o=k;this[o(0x183)]='',this[o(0x186)]();}[k(0x181)](){requestAnimationFrame(()=>{this['_bindingsRefresh']();});}async[k(0x1b1)](){const p=k;let c=this['_shell']['createBindableObjectBrowser']();c[p(0x1ae)](this[p(0x18b)],this[p(0x1b7)],p(0x1b4)),c[p(0x17c)]=p(0x1a7);const d=new AbortController();c['objectDoubleclicked']['on'](()=>{const q=p;d['abort']();if(this['objectNames']!='')this[q(0x183)]+=';';if(c[q(0x190)][q(0x187)]=='signalProperty')this[q(0x183)]+='?';else c['selectedObject']['bindabletype']===q(0x1ac)&&(this[q(0x183)]+='??');this['objectNames']+=c['selectedObject'][q(0x194)],this[q(0x186)]();});let e=await this[p(0x1a2)][p(0x1b6)](c,{'x':0x64,'y':0x64,'width':0x190,'height':0x12c,'parent':this,'abortSignal':d['signal']});if(e){if(this['objectNames']!='')this['objectNames']+=';';this[p(0x183)]+=c[p(0x190)][p(0x194)],this['_bindingsRefresh']();}}async['showHistoric'](){const r=k;let c=new BindingsEditorHistoric(this[r(0x192)]);const d=new AbortController();c['title']='Edit\x20historic\x20binding\x20to:\x20'+this['_property'][r(0x18a)];let e=await this[r(0x1a2)]['openConfirmation'](c,{'x':0x64,'y':0x64,'width':0x1a4,'height':0x1fe,'parent':this,'abortSignal':d['signal'],'disableResize':!![],'cancelText':r(0x195)});!e?this[r(0x192)]=null:this[r(0x192)]=c[r(0x192)],this['_bindingsRefresh']();}['addConverter'](){const s=k;this[s(0x1aa)]['push']({'key':'','value':''}),this[s(0x18c)]=this['converters']['length']-0x1,this[s(0x186)](),this[s(0x17b)]();}[k(0x1ad)](){const t=k;this[t(0x1aa)]['splice'](this['_activeRow'],0x1),this['_activeRow']=-0x1,this[t(0x186)](),this[t(0x17b)]();}}customElements['define'](BindingsEditor['is'],BindingsEditor);
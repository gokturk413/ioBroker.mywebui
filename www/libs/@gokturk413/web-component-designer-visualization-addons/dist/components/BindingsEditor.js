const y=b;(function(c,d){const x=b,e=c();while(!![]){try{const f=parseInt(x(0x1c5))/0x1*(-parseInt(x(0x1ed))/0x2)+-parseInt(x(0x1f0))/0x3+parseInt(x(0x1db))/0x4+parseInt(x(0x1ce))/0x5*(parseInt(x(0x19f))/0x6)+parseInt(x(0x199))/0x7+-parseInt(x(0x1c8))/0x8+parseInt(x(0x1a5))/0x9*(parseInt(x(0x19c))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x86583));import{BaseCustomWebComponentConstructorAppend,html,css}from'@node-projects/base-custom-webcomponent';function a(){const a2=['color:#555;\x20font-size:11px;\x20margin-top:2px;','showHistoric','variable\x20name\x20used\x20in\x20the\x20formula\x20(defaults\x20to\x20__','createElement','#0078d7','condition','1610176yueeyY','events','node-projects-visualization-bindings-editor','_signalsToObjectNames','signal-path-input','namedConverterRow','ready','img','Remove','fullName','_signals','_shell','_bindingTarget','_renderConverterList','iframe','indexOf','none','_refresh','1816916fNRYMp','length','bindableObjectNames','1682967JIBJlG','convertersString','icons/delete.svg','display:grid;\x20grid-template-columns:max-content\x20max-content\x201fr;\x20gap:1px\x206px;\x20margin-top:4px;\x20padding:4px\x206px;\x20background:#f5f5f5;\x20border-radius:2px;\x20font-family:monospace;\x20font-size:11px;\x20color:#333;','slice','background','input','font-family:monospace;\x20font-weight:bold;\x20color:#111;','signal-select-btn','\x20if\x20empty)','appendChild','span','_bindingsParse','color:#0078d7;\x20font-weight:bold;','_signalListContainer','className','namedConverterBrowse','expression','_getDomElement','button','historic','color:#aaa;','_instanceServiceContainer','objectNames','string','2657949ilKpUu','_property','div','11879810QDVTSh','_converterListContainer','description','74148GaCvRN','join','signal-icon-btn','converters','_syncSignals','expressionTwoWay','9FyWEzI','openModal','cssText','Duplicate','invert','_parseObjectNames','forEach','style','signal\x20path\x20(prefix:\x20?\x20=\x20signal\x20name\x20in\x20screen\x20property,\x20??\x20=\x20screen\x20property\x20value,\x20?$\x20=\x20signal\x20object\x20in\x20screen\x20property,\x20?@\x20=\x20screen\x20attribute,\x20#\x20=\x20signal\x20name\x20in\x20target\x20property,\x20##\x20=\x20target\x20property\x20value,\x20#$\x20=\x20signal\x20object\x20in\x20target\x20property,\x20#@\x20=\x20target\x20attribute)','_serviceContainer','selectedObject','innerHTML','onclick','src','_bindingsRefresh','padding:5px\x206px\x205px\x209px;\x20cursor:pointer;\x20border-radius:3px;\x20border-left:3px\x20solid\x20transparent;\x20margin-bottom:2px;','converter','_showHelp','signal-name-input','width:100%;\x20height:100%;\x20border:none;\x20display:block;','helpSections','color:#555;\x20text-align:right;','signal','height','value','mode','twoWay','textContent','icons/copy.svg','property','signalProperty','entries','1DYYGqR','_renderSignalList','splice','1087040veJktv','namedConverters','display','srcdoc','push','openConfirmation','75tNnNtF','filter','name','title','historicBtn','placeholder','_binding'];a=function(){return a2;};return a();}function b(c,d){c=c-0x18c;const e=a();let f=e[c];return f;}import{BindingMode,BindingTarget,assetsPath}from'@gokturk413/web-component-designer';import{BindingsEditorHistoric}from'./BindingsEditorHistoric.js';import{bindingsEditorHelpHtml}from'./BindingsEditorHelp.js';export class BindingsEditor extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
        <div id="root">
            <div class="vertical-grid">
                <div id="full-width-col">
                    <div id="signals-area">
                        <div class="row">
                            <span class="section-label" title="Add signals by name and path. The variable name is used in the formula (__0, __1,... or a custom name).&#010;Access signal names in properties via ?propertyName and #propertyName, property values via ??propertyName and ##propertyName, and signal objects stored in properties via ?$propertyName and #$propertyName.&#010;Access screen attributes via ?@attributeName and target attributes via #@attributeName.&#010;Resolve a named signal object via $objectId.&#010;Bind to special values via §name (if supported by your framework).&#010;You could also use signals inside of a Signal Name via {name}">objects</span>
                            <button id="helpBtn" class="info-btn" title="Help"><svg viewBox="0 0 512 512" width="16" height="16"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg></button>
                        </div>
                        <div class="bordered-section">
                            <div id="signalListHeader" class="signal-row signal-header">
                                <span class="signal-header-name">name</span>
                                <span class="signal-header-signal">signal</span>
                                <span class="signal-header-spacer"></span>
                            </div>
                            <div id="signalListContainer"></div>
                            <button id="addSignalBtn" class="add-signal-btn" @click="[[this._addSignal()]]">+ Add signal</button>
                        </div>
                        <div id="groupinvert" class="row">
                            <input type="checkbox" checked="{{this.invert::change}}">
                            <span>invert logic</span>
                            <button id="historicBtn" css:border="[[this.historic ? 'solid lime 5px' : 'none']]" @click="[[this.showHistoric()]]">historic</button>
                        </div>
                        <div class="row">
                            <span class="section-label" title="javascript expression. access context with __ctx, result with __res, objects by name (__0, __1,... or custom name)">formula</span>
                        </div>
                        <div class="row">
                            <node-projects-code-view-monaco id="expression" single-row language="javascript" .code="{{?this.expression}}" @code-changed="_refresh"></node-projects-code-view-monaco>
                        </div>
                        <div class="row">
                            <span class="section-label writeback-label" title="write back the value build by a formula to a signal. maybe only usefull when a formula is used.">write back signal :</span>
                            <input class="writeback-input" .disabled="[[!this.expression]]" value="{{?this.writeBackSignal::change}}">
                        </div>
                        <div id="groupBindingMode" class="row">
                            <input type="checkbox" disabled="[[!this.twoWayPossible]]" checked="{{this.twoWay::change}}" @change="_refresh">
                            <span>two way binding</span>
                            <span class="events-label" css:display="[[this.twoWay ? 'inline' : 'none']]">events:&nbsp;</span>
                            <input class="events-input" css:display="[[this.twoWay ? 'inline-block' : 'none']]" title="to use multiple events, seprate them with semicolon (;)" value="{{?this.events::change}}">
                        </div>
                        <div css:display="[[this.twoWay ? 'block' : 'none']]">
                            <div class="row">
                                <span class="section-label" title="javascript expression. access property with 'value'">formula write back (two way)</span>
                            </div>
                            <div class="row">
                                <node-projects-code-view-monaco id="expression2way" .read-only="[[!this.twoWay]]" $readonly="[[!this.twoWay]]" single-row language="javascript" .code="{{?this.expressionTwoWay}}"></node-projects-code-view-monaco>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="namedConverterRow" class="row">
                <span class="converter-label">converter :</span>
                <input id="namedConverterInput" value="{{?this.convertersString::change}}">
                <button id="namedConverterBrowse" class="signal-select-btn" @click="[[this._selectNamedConverter()]]">...</button>
            </div>
            <div id="converterSection" class="bordered-section">
                <div class="signal-row signal-header">
                    <span class="converter-header-col">condition</span>
                    <span class="converter-header-col">value</span>
                    <span class="converter-header-spacer"></span>
                </div>
                <div id="converterListContainer"></div>
                <button class="add-signal-btn" @click="[[this._addConverter()]]">+ Add entry</button>
            </div>
        </div>`;static [y(0x1ac)]=css`
        :host {
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

        #converterListContainer {
            overflow-y: auto;
        }

        #converterSection {
            display: grid;
            grid-template-rows: min-content minmax(22px, 1fr) min-content;
            min-height: 0;
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
            grid-template-rows: min-content min-content minmax(0, 1fr);
            overflow: auto;
            height: calc(100% - 4px)
        }

        .vertical-grid {
            display: grid;
            grid-template-columns: calc((100% - 150px) - 30px) 150px;
            gap: 30px;
        }

        #full-width-col {
            grid-column: 1/3;
        }

        #signals-area {
            display: flex;
            flex-direction: column;
        }

        .section-label {
            cursor: pointer;
        }

        .bordered-section {
            border: solid 1px black;
            padding: 10px;
        }

        .signal-header-name {
            flex: 0 0 80px;
        }

        .signal-header-signal, .converter-header-col {
            flex: 1 1 auto;
        }

        .signal-header-spacer {
            flex: 0 0 72px;
        }

        .converter-header-spacer {
            flex: 0 0 47px;
        }

        #groupinvert {
            position: relative;
        }

        #historicBtn {
            position: absolute;
            right: 1px;
            top: 5px;
            padding: 10px;
        }

        node-projects-code-view-monaco {
            width: 100%;
            min-height: 17px;
            height: 17px;
            position: relative;
            overflow: hidden;
            resize: vertical;
        }

        .writeback-label {
            white-space: nowrap;
        }

        .writeback-input {
            width: 100%;
            margin-left: 5px;
        }

        .events-label {
            margin-left: 15px;
        }

        .events-input {
            flex-grow: 1;
        }

        #namedConverterRow {
            margin-top: 6px;
        }

        .converter-label {
            white-space: nowrap;
        }

        #namedConverterInput {
            flex: 1;
            margin-left: 5px;
        }

        #namedConverterBrowse {
            margin-left: 3px;
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
        }

        .signal-header {
            color: #888;
            font-size: 11px;
            margin-top: 3px;
        }

        .signal-row {
            display: flex;
            align-items: center;
            gap: 3px;
        }

        .signal-row input {
            height: 22px;
            box-sizing: border-box;
        }

        .signal-name-input {
            min-width: 80px;
            flex: 0 0 80px;
            font-family: monospace;
        }

        .signal-path-input {
            flex: 1 1 auto;
        }

        .signal-icon-btn {
            flex: 0 0 22px;
            width: 22px;
            height: 22px;
            padding: 0;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .signal-icon-btn img {
            width: 12px;
            height: 12px;
        }

        .signal-select-btn {
            flex: 0 0 26px;
            width: 26px;
            height: 22px;
            padding: 0;
            cursor: pointer;
            font-size: 11px;
        }

        #signalListContainer {
            display: flex;
            flex-direction: column;
            gap: 3px;
            max-height: 72px;
            overflow-y: auto;
        }

        .add-signal-btn {
            align-self: flex-start;
            justify-self: start;
            margin-top: 4px;
            height: 22px;
            cursor: pointer;
            font-size: 11px;
        }

        .info-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 22px;
            height: 22px;
            padding: 0;
            border: none;
            background: transparent;
            cursor: pointer;
            flex-shrink: 0;
            margin-left: auto;
        }

        .info-btn:hover {
            background: #eee;
            border-radius: 3px;
        }`;static ['is']=y(0x1dd);static ['properties']={'twoWayPossible':Boolean,'twoWay':Boolean,'expression':String,'events':String,'invert':Boolean,'historic':Object};['twoWayPossible']=![];[y(0x1bf)]=![];['expression']='';['writeBackSignal']='';[y(0x1a4)]='';[y(0x194)];['objectNames']='';['events']='';[y(0x1a9)]=![];['converters']=[];static ['namedConverters']=[];static ['helpSections']=[];[y(0x1f1)];get[y(0x1b5)](){const z=y;if(this[z(0x1f1)])return this['convertersString'];if(this[z(0x1a2)]['length']>0x0)return Object['fromEntries'](this[z(0x1a2)]['map'](d=>[d['key'],d[z(0x1bd)]]));return undefined;}[y(0x19a)];['_binding'];[y(0x1e7)];['_serviceContainer'];[y(0x196)];[y(0x1e6)];['_signals']=[];[y(0x18e)];[y(0x19d)];constructor(c,d,e,f,g,h,i={}){const A=y;super(),super['_restoreCachedInititalValues'](),this['_property']=c,this['_binding']=d,this['_bindingTarget']=e,this[A(0x1ae)]=f,this[A(0x196)]=g,this[A(0x1e6)]=h;i?.['namedConverters']===![]&&(this['_getDomElement'](A(0x1e0))[A(0x1ac)][A(0x1ca)]=A(0x1eb));const j=this['_getDomElement'](A(0x1d2));if(i?.[A(0x1d6)]===![])j['style']['display']='none';else i?.['historicLabel']&&(j[A(0x1c0)]=i['historicLabel']);}[y(0x1e1)](){const B=y;this['_parseAttributesToProperties'](),this['_assignEvents'](),this['_signalListContainer']=this['_getDomElement']('signalListContainer'),this['_converterListContainer']=this[B(0x192)]('converterListContainer'),this['_getDomElement']('helpBtn')['onclick']=()=>this[B(0x1b6)]();if(BindingsEditor[B(0x1c9)]['length']===0x0)this['_getDomElement'](B(0x190))['style'][B(0x1ca)]='none';this['twoWayPossible']=![];if(this['_bindingTarget']==BindingTarget['property']||this['_bindingTarget']==BindingTarget['attribute'])this['twoWayPossible']=!![];if(this['_binding']){this[B(0x1bf)]=this['_binding'][B(0x1be)]==BindingMode['twoWay'],this['expression']=this['_binding'][B(0x191)],this['writeBackSignal']=this[B(0x1d4)]['writeBackSignal'],this['expressionTwoWay']=this['_binding'][B(0x1a4)],this['historic']=this['_binding']['historic'],this[B(0x1a9)]=this['_binding'][B(0x1a9)];if(this[B(0x1d4)][B(0x1ef)])this['objectNames']=this['_binding'][B(0x1ef)]['join'](';');if(this[B(0x1d4)][B(0x1b5)]){if(typeof this['_binding']['converter']===B(0x198))this[B(0x1f1)]=this['_binding'][B(0x1b5)];else for(let d in this[B(0x1d4)]['converter']){this[B(0x1a2)][B(0x1cc)]({'key':d,'value':this[B(0x1d4)]['converter'][d]});}}if(this[B(0x1d4)]['changedEvents']&&this['_binding']['changedEvents'][B(0x1ee)])this[B(0x1dc)]=this['_binding']['changedEvents'][B(0x1a0)](';');}if(this[B(0x191)]){let e=this['_getDomElement'](B(0x191));this[B(0x191)]['indexOf']('\x0a')>=0x0&&(e[B(0x1ac)][B(0x1bc)]=0x3*0x11+'px');}if(this['expressionTwoWay']){let f=this[B(0x192)]('expression2way');this['expressionTwoWay'][B(0x1ea)]('\x0a')>=0x0&&(f['style']['height']=0x3*0x11+'px');}this['_signals']=this[B(0x1aa)](this['objectNames']);if(this['_signals']['length']===0x0)this['_signals']['push']({'name':'','signal':''});this['_renderSignalList'](),this[B(0x1e8)](),this[B(0x18c)]();}['_parseObjectNames'](c){const C=y;if(!c)return[];return c['split'](';')[C(0x1cf)](d=>d[C(0x1ee)]>0x0)['map'](d=>{const D=C,e=d[D(0x1ea)](':');if(e>0x0)return{'name':d['slice'](0x0,e),'signal':d[D(0x1f4)](e+0x1)};return{'name':'','signal':d};});}[y(0x1de)](){const E=y;return this[E(0x1e5)]['map'](c=>c['name']?c[E(0x1d0)]+':'+c['signal']:c[E(0x1bb)])[E(0x1a0)](';');}[y(0x1c6)](){const F=y,c=this[F(0x18e)];c[F(0x1b0)]='',this['_signals'][F(0x1ab)]((d,e)=>{const G=F,f=document['createElement'](G(0x19b));f['className']='signal-row';const g=document['createElement']('input');g['className']=G(0x1b7),g[G(0x1d3)]='__'+e,g[G(0x1bd)]=d['name'],g['title']=G(0x1d7)+e+G(0x1f9),g['oninput']=()=>{const H=G;this[H(0x1e5)][e]['name']=g['value'],this['_syncSignals']();};const h=document[G(0x1d8)](G(0x1f6));h['className']=G(0x1df),h[G(0x1bd)]=d[G(0x1bb)],h[G(0x1d3)]='signal\x20path',h['title']=G(0x1ad),h['oninput']=()=>{const I=G;this['_signals'][e]['signal']=h[I(0x1bd)],this[I(0x1a3)]();};const j=document[G(0x1d8)]('button');j[G(0x18f)]='signal-icon-btn',j['title']='Duplicate';const k=document[G(0x1d8)](G(0x1e2));k['src']=assetsPath+G(0x1c1),k[G(0x1ac)][G(0x1a7)]='width:12px;\x20height:12px;',j[G(0x1fa)](k),j[G(0x1b1)]=()=>{const J=G;this[J(0x1e5)]['splice'](e+0x1,0x0,{...this['_signals'][e]}),this['_syncSignals'](),this['_renderSignalList']();};const l=document['createElement'](G(0x193));l['className']=G(0x1f8),l[G(0x1c0)]='...',l[G(0x1d1)]='Browse\x20signal',l['onclick']=()=>this['_selectForRow'](e,h);const m=document['createElement'](G(0x193));m[G(0x18f)]=G(0x1a1),m['title']=G(0x1e3);const n=document[G(0x1d8)]('img');n[G(0x1b2)]=assetsPath+G(0x1f2),n[G(0x1ac)][G(0x1a7)]='width:12px;\x20height:12px;',m['appendChild'](n),m[G(0x1b1)]=()=>{const K=G;this['_signals'][K(0x1c7)](e,0x1),this['_syncSignals'](),this['_renderSignalList']();},f[G(0x1fa)](g),f['appendChild'](h),f[G(0x1fa)](l),f['appendChild'](j),f['appendChild'](m),c[G(0x1fa)](f);});}[y(0x1a3)](){const L=y;this[L(0x197)]=this[L(0x1de)](),this['_bindingsRefresh']();}['_addSignal'](){this['_signals']['push']({'name':'','signal':''}),this['_renderSignalList']();}async['_selectForRow'](c,d){const M=y;let e=this[M(0x1e6)]['createBindableObjectBrowser']();e['initialize'](this['_serviceContainer'],this[M(0x196)],'binding'),e[M(0x1d1)]='select\x20signal...';const f=new AbortController();e['objectDoubleclicked']['on'](()=>{const N=M;f['abort']();let h='';if(e['selectedObject']['specialType']==N(0x1c3))h='?';else e[N(0x1af)]['bindabletype']===N(0x1c2)&&(h='??');this[N(0x1e5)][c][N(0x1bb)]=h+e[N(0x1af)][N(0x1e4)],d[N(0x1bd)]=this['_signals'][c]['signal'],this['_syncSignals']();});let g=await this['_shell'][M(0x1cd)](e,{'x':0x64,'y':0x64,'width':0x190,'height':0x12c,'parent':this,'abortSignal':f[M(0x1bb)]});if(g){let h='';if(e['selectedObject']['specialType']=='signalProperty')h='?';else e['selectedObject']['bindabletype']===M(0x1c2)&&(h='??');this[M(0x1e5)][c]['signal']=h+e['selectedObject']['fullName'],d[M(0x1bd)]=this[M(0x1e5)][c][M(0x1bb)],this['_syncSignals']();}}[y(0x1e8)](){const O=y,c=this[O(0x19d)];c[O(0x1b0)]='';const d=this['_property']?.['type']==='color'?'color':'text';this['converters'][O(0x1ab)]((e,f)=>{const P=O,g=document['createElement'](P(0x19b));g[P(0x18f)]='signal-row';const h=document['createElement'](P(0x1f6));h['style']['cssText']='flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;',h['value']=e['key'],h[P(0x1d3)]=P(0x1da),h['oninput']=()=>{const Q=P;this[Q(0x1a2)][f]['key']=h[Q(0x1bd)];};const j=document['createElement']('input');j['type']=d,j[P(0x1ac)]['cssText']='flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;',j[P(0x1bd)]=e['value'],j[P(0x1d3)]='value',j['oninput']=()=>{const R=P;this['converters'][f][R(0x1bd)]=j['value'];};const k=document['createElement']('button');k['className']=P(0x1a1),k['title']=P(0x1a8);const l=document[P(0x1d8)](P(0x1e2));l['src']=assetsPath+P(0x1c1),l[P(0x1ac)]['cssText']='width:12px;\x20height:12px;',k['appendChild'](l),k['onclick']=()=>{const S=P;this[S(0x1a2)][S(0x1c7)](f+0x1,0x0,{...this['converters'][f]}),this[S(0x1e8)]();};const m=document['createElement']('button');m[P(0x18f)]='signal-icon-btn',m['title']='Remove';const n=document[P(0x1d8)]('img');n['src']=assetsPath+'icons/delete.svg',n[P(0x1ac)][P(0x1a7)]='width:12px;\x20height:12px;',m['appendChild'](n),m[P(0x1b1)]=()=>{const T=P;this[T(0x1a2)]['splice'](f,0x1),this['_renderConverterList']();},g[P(0x1fa)](h),g['appendChild'](j),g[P(0x1fa)](k),g['appendChild'](m),c['appendChild'](g);});}['_addConverter'](){const U=y;this['converters']['push']({'key':'','value':''}),this[U(0x1e8)]();}async['_selectNamedConverter'](){const V=y,c=BindingsEditor['namedConverters'];if(c[V(0x1ee)]===0x0)return;let d='',e=null;const f=document[V(0x1d8)]('div');f['style']['cssText']='display:flex;\x20flex-direction:column;\x20height:100%;\x20box-sizing:border-box;\x20font-size:12px;';const g=document[V(0x1d8)](V(0x19b));g[V(0x1ac)]['cssText']='padding:6px\x208px\x204px;\x20color:#666;\x20font-size:11px;\x20border-bottom:1px\x20solid\x20#e0e0e0;\x20flex-shrink:0;',g['textContent']='Select\x20a\x20converter\x20and\x20confirm\x20with\x20OK.',f[V(0x1fa)](g);const h=document[V(0x1d8)](V(0x19b));h['style']['cssText']='flex:1;\x20overflow-y:auto;\x20padding:4px;',f[V(0x1fa)](h);const i=m=>{const W=V;m['style'][W(0x1f5)]='',m[W(0x1ac)]['borderLeftColor']='transparent';},j=(m,n)=>{const X=V;if(e)i(e);e=m,m[X(0x1ac)]['background']='#e8f4fd',m[X(0x1ac)]['borderLeftColor']=X(0x1d9),d=n;};for(const m of c){const n=document[V(0x1d8)]('div');n['style'][V(0x1a7)]=V(0x1b4);const o=document[V(0x1d8)]('div');o['style'][V(0x1a7)]=V(0x1f7),o[V(0x1c0)]=m[V(0x1d0)],n[V(0x1fa)](o);if(m[V(0x19e)]){const p=document['createElement']('div');p['style']['cssText']=V(0x1d5),p[V(0x1c0)]=m['description'],n[V(0x1fa)](p);}if(m['converter']&&Object['keys'](m['converter'])['length']>0x0){const q=document['createElement']('div');q[V(0x1ac)][V(0x1a7)]=V(0x1f3);for(const [r,s]of Object[V(0x1c4)](m[V(0x1b5)])){const t=document[V(0x1d8)](V(0x1fb));t[V(0x1ac)]['cssText']=V(0x1ba),t['textContent']=r;const u=document['createElement'](V(0x1fb));u[V(0x1ac)]['cssText']=V(0x195),u[V(0x1c0)]='→';const w=document['createElement']('span');w[V(0x1ac)]['cssText']=V(0x18d),w['textContent']=String(s),q['appendChild'](t),q[V(0x1fa)](u),q['appendChild'](w);}n[V(0x1fa)](q);}n['onmouseenter']=()=>{const Y=V;if(n!==e)n[Y(0x1ac)][Y(0x1f5)]='#f5f5f5';},n['onmouseleave']=()=>{const Z=V;if(n!==e)n['style'][Z(0x1f5)]='';},n['onclick']=()=>j(n,m[V(0x1d0)]),h['appendChild'](n);}const l=await this[V(0x1e6)]['openConfirmation'](f,{'x':0x64,'y':0x64,'width':0x140,'height':0x12c,'parent':this});l&&d&&(this[V(0x1f1)]=d,this['_getDomElement']('namedConverterInput')[V(0x1bd)]=d,this['_bindingsRefresh']());}[y(0x1ec)](){requestAnimationFrame(()=>{this['_bindingsRefresh']();});}async['showHistoric'](){const a0=y;let c=new BindingsEditorHistoric(this[a0(0x194)]);const d=new AbortController();c['title']='Edit\x20historic\x20binding\x20to:\x20'+this[a0(0x19a)][a0(0x1d0)];let e=await this['_shell'][a0(0x1cd)](c,{'x':0x64,'y':0x64,'width':0x1a4,'height':0x1fe,'parent':this,'abortSignal':d['signal'],'disableResize':!![],'cancelText':a0(0x1e3)});!e?this['historic']=null:this['historic']=c[a0(0x194)],this[a0(0x1b3)]();}[y(0x1b6)](){const a1=y,c=document[a1(0x1d8)](a1(0x1e9));c[a1(0x1cb)]=BindingsEditor[a1(0x1b9)]['length']>0x0?bindingsEditorHelpHtml['replace']('</div>\x0a</body>',BindingsEditor[a1(0x1b9)]['join']('')+'</div>\x0a</body>'):bindingsEditorHelpHtml,c['style']['cssText']=a1(0x1b8),this[a1(0x1e6)][a1(0x1a6)](c,{'title':'Bindings\x20Editor\x20Help','parent':this,'x':-0x294,'y':-0x50,'width':0x276,'height':0x244});}}customElements['define'](BindingsEditor['is'],BindingsEditor);
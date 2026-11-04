function a(){const a3=['filter','icons/copy.svg','binding','792CQwVOJ','color:#555;\x20text-align:right;','type','display:grid;\x20grid-template-columns:max-content\x20max-content\x201fr;\x20gap:1px\x206px;\x20margin-top:4px;\x20padding:4px\x206px;\x20background:#f5f5f5;\x20border-radius:2px;\x20font-family:monospace;\x20font-size:11px;\x20color:#333;','_signals','flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;','\x20if\x20empty)','none','entries','twoWay','input','signal-icon-btn','namedConverterRow','objectNames','namedConverters','changedEvents','cssText','9031230HMXsjh','_bindingTarget','Duplicate','converters','historicLabel','specialType','createElement','showHistoric','_syncSignals','bindabletype','twoWayPossible','button','placeholder','_parseObjectNames','215733HDKswy','_signalListContainer','appendChild','color','convertersString','color:#aaa;','slice','oninput','style','push','title','_instanceServiceContainer','srcdoc','converterListContainer','helpBtn','256191krtvxa','_getDomElement','invert','5YzBzaF','_renderConverterList','_addConverter','ready','5OuwSFa','attribute','historic','signalListContainer','template','expression','icons/delete.svg','indexOf','objectDoubleclicked','display','join','map','textContent','2310222LsuhKX','signal','signal-row','mode','converter','_serviceContainer','padding:6px\x208px\x204px;\x20color:#666;\x20font-size:11px;\x20border-bottom:1px\x20solid\x20#e0e0e0;\x20flex-shrink:0;','splice','Browse\x20signal','Remove','helpSections','...','node-projects-visualization-bindings-editor','description','_showHelp','selectedObject','150wtPlYs','abort','432971VBVuvw','onclick','key','createBindableObjectBrowser','name','select\x20signal...','innerHTML','length','font-family:monospace;\x20font-weight:bold;\x20color:#111;','iframe','div','span','_addSignal','_binding','borderLeftColor','_signalsToObjectNames','writeBackSignal','events','152ZwVELA','background','_bindingsRefresh','_renderSignalList','3qsoVoO','value','expressionTwoWay','className','forEach','_converterListContainer','_selectForRow','bindableObjectNames','1669856jDDeHx','historicBtn','373638IEdGRK','img','_shell','signalProperty','_property','src'];a=function(){return a3;};return a();}const y=b;function b(c,d){c=c-0xca;const e=a();let f=e[c];return f;}(function(c,d){const x=b,e=c();while(!![]){try{const f=parseInt(x(0xf9))/0x1*(parseInt(x(0x13c))/0x2)+-parseInt(x(0x132))/0x3*(parseInt(x(0x13a))/0x4)+-parseInt(x(0xfd))/0x5*(-parseInt(x(0x10a))/0x6)+parseInt(x(0xe7))/0x7*(parseInt(x(0x12e))/0x8)+parseInt(x(0xd9))/0x9+parseInt(x(0x11a))/0xa*(-parseInt(x(0x11c))/0xb)+-parseInt(x(0x145))/0xc*(parseInt(x(0xf6))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x92646));import{BaseCustomWebComponentConstructorAppend,html,css}from'@node-projects/base-custom-webcomponent';import{BindingMode,BindingTarget,assetsPath}from'@gokturk413/web-component-designer';import{BindingsEditorHistoric}from'./BindingsEditorHistoric.js';import{bindingsEditorHelpHtml}from'./BindingsEditorHelp.js';export class BindingsEditor extends BaseCustomWebComponentConstructorAppend{static [y(0x101)]=html`
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
        </div>`;static ['style']=css`
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
        }`;static ['is']=y(0x116);static ['properties']={'twoWayPossible':Boolean,'twoWay':Boolean,'expression':String,'events':String,'invert':Boolean,'historic':Object};['twoWayPossible']=![];['twoWay']=![];[y(0x102)]='';[y(0x12c)]='';[y(0x134)]='';['historic'];[y(0xd5)]='';[y(0x12d)]='';[y(0xf8)]=![];[y(0xdc)]=[];static [y(0xd6)]=[];static ['helpSections']=[];[y(0xeb)];get['converter'](){const z=y;if(this[z(0xeb)])return this[z(0xeb)];if(this[z(0xdc)]['length']>0x0)return Object['fromEntries'](this[z(0xdc)][z(0x108)](d=>[d[z(0x11e)],d['value']]));return undefined;}['_property'];[y(0x129)];[y(0xda)];[y(0x10f)];['_instanceServiceContainer'];[y(0x13e)];[y(0xcc)]=[];[y(0xe8)];[y(0x137)];constructor(c,d,e,f,g,h,i={}){const A=y;super(),super['_restoreCachedInititalValues'](),this['_property']=c,this['_binding']=d,this[A(0xda)]=e,this['_serviceContainer']=f,this[A(0xf2)]=g,this[A(0x13e)]=h;i?.['namedConverters']===![]&&(this[A(0xf7)](A(0xd4))[A(0xef)]['display']='none');const j=this['_getDomElement'](A(0x13b));if(i?.['showHistoric']===![])j['style'][A(0x106)]='none';else i?.['historicLabel']&&(j['textContent']=i[A(0xdd)]);}[y(0xfc)](){const B=y;this['_parseAttributesToProperties'](),this['_assignEvents'](),this['_signalListContainer']=this['_getDomElement'](B(0x100)),this['_converterListContainer']=this[B(0xf7)](B(0xf4)),this[B(0xf7)](B(0xf5))['onclick']=()=>this['_showHelp']();if(BindingsEditor['namedConverters']['length']===0x0)this['_getDomElement']('namedConverterBrowse')[B(0xef)][B(0x106)]=B(0xcf);this[B(0xe3)]=![];if(this['_bindingTarget']==BindingTarget['property']||this[B(0xda)]==BindingTarget[B(0xfe)])this['twoWayPossible']=!![];if(this['_binding']){this[B(0xd1)]=this[B(0x129)][B(0x10d)]==BindingMode[B(0xd1)],this[B(0x102)]=this[B(0x129)]['expression'],this['writeBackSignal']=this['_binding'][B(0x12c)],this['expressionTwoWay']=this['_binding'][B(0x134)],this['historic']=this[B(0x129)]['historic'],this[B(0xf8)]=this[B(0x129)][B(0xf8)];if(this['_binding']['bindableObjectNames'])this[B(0xd5)]=this[B(0x129)][B(0x139)][B(0x107)](';');if(this[B(0x129)][B(0x10e)]){if(typeof this['_binding'][B(0x10e)]==='string')this[B(0xeb)]=this[B(0x129)][B(0x10e)];else for(let d in this['_binding']['converter']){this['converters'][B(0xf0)]({'key':d,'value':this[B(0x129)]['converter'][d]});}}if(this['_binding']['changedEvents']&&this[B(0x129)][B(0xd7)][B(0x123)])this['events']=this[B(0x129)][B(0xd7)]['join'](';');}if(this[B(0x102)]){let e=this[B(0xf7)]('expression');this['expression'][B(0x104)]('\x0a')>=0x0&&(e[B(0xef)]['height']=0x3*0x11+'px');}if(this['expressionTwoWay']){let f=this[B(0xf7)]('expression2way');this['expressionTwoWay']['indexOf']('\x0a')>=0x0&&(f['style']['height']=0x3*0x11+'px');}this[B(0xcc)]=this[B(0xe6)](this[B(0xd5)]);if(this['_signals'][B(0x123)]===0x0)this[B(0xcc)][B(0xf0)]({'name':'','signal':''});this[B(0x131)](),this[B(0xfa)](),this['_bindingsParse']();}[y(0xe6)](c){const C=y;if(!c)return[];return c['split'](';')[C(0x142)](d=>d['length']>0x0)['map'](d=>{const D=C,e=d[D(0x104)](':');if(e>0x0)return{'name':d[D(0xed)](0x0,e),'signal':d['slice'](e+0x1)};return{'name':'','signal':d};});}[y(0x12b)](){const E=y;return this['_signals'][E(0x108)](c=>c[E(0x120)]?c['name']+':'+c['signal']:c['signal'])['join'](';');}['_renderSignalList'](){const F=y,c=this['_signalListContainer'];c['innerHTML']='',this['_signals'][F(0x136)]((d,e)=>{const G=F,f=document[G(0xdf)](G(0x126));f['className']='signal-row';const g=document[G(0xdf)](G(0xd2));g[G(0x135)]='signal-name-input',g['placeholder']='__'+e,g[G(0x133)]=d[G(0x120)],g['title']='variable\x20name\x20used\x20in\x20the\x20formula\x20(defaults\x20to\x20__'+e+G(0xce),g[G(0xee)]=()=>{const H=G;this[H(0xcc)][e]['name']=g[H(0x133)],this['_syncSignals']();};const h=document[G(0xdf)]('input');h[G(0x135)]='signal-path-input',h[G(0x133)]=d['signal'],h['placeholder']='signal\x20path',h['title']='signal\x20path\x20(prefix:\x20?\x20=\x20signal\x20name\x20in\x20screen\x20property,\x20??\x20=\x20screen\x20property\x20value,\x20?$\x20=\x20signal\x20object\x20in\x20screen\x20property,\x20?@\x20=\x20screen\x20attribute,\x20#\x20=\x20signal\x20name\x20in\x20target\x20property,\x20##\x20=\x20target\x20property\x20value,\x20#$\x20=\x20signal\x20object\x20in\x20target\x20property,\x20#@\x20=\x20target\x20attribute)',h[G(0xee)]=()=>{const I=G;this['_signals'][e][I(0x10b)]=h[I(0x133)],this[I(0xe1)]();};const j=document['createElement']('button');j['className']='signal-icon-btn',j['title']='Duplicate';const k=document['createElement'](G(0x13d));k['src']=assetsPath+G(0x143),k['style'][G(0xd8)]='width:12px;\x20height:12px;',j['appendChild'](k),j[G(0x11d)]=()=>{const J=G;this['_signals']['splice'](e+0x1,0x0,{...this['_signals'][e]}),this[J(0xe1)](),this['_renderSignalList']();};const l=document[G(0xdf)](G(0xe4));l[G(0x135)]='signal-select-btn',l['textContent']=G(0x115),l['title']=G(0x112),l[G(0x11d)]=()=>this[G(0x138)](e,h);const m=document['createElement']('button');m['className']=G(0xd3),m[G(0xf1)]='Remove';const n=document['createElement']('img');n[G(0x141)]=assetsPath+'icons/delete.svg',n['style'][G(0xd8)]='width:12px;\x20height:12px;',m[G(0xe9)](n),m[G(0x11d)]=()=>{const K=G;this[K(0xcc)]['splice'](e,0x1),this['_syncSignals'](),this[K(0x131)]();},f[G(0xe9)](g),f[G(0xe9)](h),f[G(0xe9)](l),f['appendChild'](j),f[G(0xe9)](m),c['appendChild'](f);});}[y(0xe1)](){const L=y;this['objectNames']=this['_signalsToObjectNames'](),this[L(0x130)]();}[y(0x128)](){const M=y;this[M(0xcc)]['push']({'name':'','signal':''}),this['_renderSignalList']();}async[y(0x138)](c,d){const N=y;let e=this['_shell'][N(0x11f)]();e['initialize'](this[N(0x10f)],this[N(0xf2)],N(0x144)),e['title']=N(0x121);const f=new AbortController();e[N(0x105)]['on'](()=>{const O=N;f[O(0x11b)]();let h='';if(e['selectedObject'][O(0xde)]=='signalProperty')h='?';else e[O(0x119)]['bindabletype']==='property'&&(h='??');this[O(0xcc)][c][O(0x10b)]=h+e[O(0x119)]['fullName'],d['value']=this['_signals'][c]['signal'],this['_syncSignals']();});let g=await this['_shell']['openConfirmation'](e,{'x':0x64,'y':0x64,'width':0x190,'height':0x12c,'parent':this,'abortSignal':f['signal']});if(g){let h='';if(e['selectedObject'][N(0xde)]==N(0x13f))h='?';else e['selectedObject'][N(0xe2)]==='property'&&(h='??');this['_signals'][c][N(0x10b)]=h+e[N(0x119)]['fullName'],d[N(0x133)]=this[N(0xcc)][c]['signal'],this['_syncSignals']();}}[y(0xfa)](){const P=y,c=this['_converterListContainer'];c[P(0x122)]='';const d=this['_property']?.['type']===P(0xea)?'color':'text';this['converters'][P(0x136)]((e,f)=>{const Q=P,g=document[Q(0xdf)](Q(0x126));g['className']=Q(0x10c);const h=document['createElement']('input');h[Q(0xef)]['cssText']=Q(0xcd),h[Q(0x133)]=e[Q(0x11e)],h[Q(0xe5)]='condition',h[Q(0xee)]=()=>{const R=Q;this[R(0xdc)][f][R(0x11e)]=h[R(0x133)];};const j=document[Q(0xdf)]('input');j[Q(0xca)]=d,j[Q(0xef)][Q(0xd8)]='flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;',j['value']=e['value'],j['placeholder']='value',j['oninput']=()=>{this['converters'][f]['value']=j['value'];};const k=document[Q(0xdf)](Q(0xe4));k[Q(0x135)]=Q(0xd3),k['title']=Q(0xdb);const l=document[Q(0xdf)](Q(0x13d));l[Q(0x141)]=assetsPath+Q(0x143),l['style'][Q(0xd8)]='width:12px;\x20height:12px;',k[Q(0xe9)](l),k['onclick']=()=>{const S=Q;this[S(0xdc)][S(0x111)](f+0x1,0x0,{...this['converters'][f]}),this['_renderConverterList']();};const m=document[Q(0xdf)]('button');m['className']='signal-icon-btn',m['title']=Q(0x113);const n=document[Q(0xdf)](Q(0x13d));n[Q(0x141)]=assetsPath+Q(0x103),n['style'][Q(0xd8)]='width:12px;\x20height:12px;',m[Q(0xe9)](n),m['onclick']=()=>{const T=Q;this[T(0xdc)][T(0x111)](f,0x1),this['_renderConverterList']();},g[Q(0xe9)](h),g[Q(0xe9)](j),g['appendChild'](k),g['appendChild'](m),c[Q(0xe9)](g);});}[y(0xfb)](){const U=y;this[U(0xdc)][U(0xf0)]({'key':'','value':''}),this['_renderConverterList']();}async['_selectNamedConverter'](){const V=y,c=BindingsEditor['namedConverters'];if(c['length']===0x0)return;let d='',e=null;const f=document['createElement']('div');f['style'][V(0xd8)]='display:flex;\x20flex-direction:column;\x20height:100%;\x20box-sizing:border-box;\x20font-size:12px;';const g=document['createElement']('div');g[V(0xef)]['cssText']=V(0x110),g['textContent']='Select\x20a\x20converter\x20and\x20confirm\x20with\x20OK.',f[V(0xe9)](g);const h=document['createElement']('div');h[V(0xef)]['cssText']='flex:1;\x20overflow-y:auto;\x20padding:4px;',f[V(0xe9)](h);const i=m=>{const W=V;m['style'][W(0x12f)]='',m[W(0xef)][W(0x12a)]='transparent';},j=(m,n)=>{const X=V;if(e)i(e);e=m,m[X(0xef)]['background']='#e8f4fd',m['style']['borderLeftColor']='#0078d7',d=n;};for(const m of c){const n=document['createElement'](V(0x126));n['style'][V(0xd8)]='padding:5px\x206px\x205px\x209px;\x20cursor:pointer;\x20border-radius:3px;\x20border-left:3px\x20solid\x20transparent;\x20margin-bottom:2px;';const o=document['createElement']('div');o['style'][V(0xd8)]=V(0x124),o[V(0x109)]=m[V(0x120)],n[V(0xe9)](o);if(m[V(0x117)]){const p=document[V(0xdf)]('div');p[V(0xef)][V(0xd8)]='color:#555;\x20font-size:11px;\x20margin-top:2px;',p['textContent']=m['description'],n[V(0xe9)](p);}if(m[V(0x10e)]&&Object['keys'](m[V(0x10e)])[V(0x123)]>0x0){const q=document['createElement'](V(0x126));q[V(0xef)][V(0xd8)]=V(0xcb);for(const [r,s]of Object[V(0xd0)](m['converter'])){const t=document['createElement'](V(0x127));t[V(0xef)]['cssText']=V(0x146),t[V(0x109)]=r;const u=document['createElement']('span');u['style'][V(0xd8)]=V(0xec),u[V(0x109)]='→';const w=document[V(0xdf)](V(0x127));w['style'][V(0xd8)]='color:#0078d7;\x20font-weight:bold;',w['textContent']=String(s),q['appendChild'](t),q[V(0xe9)](u),q['appendChild'](w);}n['appendChild'](q);}n['onmouseenter']=()=>{const Y=V;if(n!==e)n[Y(0xef)]['background']='#f5f5f5';},n['onmouseleave']=()=>{const Z=V;if(n!==e)n[Z(0xef)][Z(0x12f)]='';},n[V(0x11d)]=()=>j(n,m[V(0x120)]),h[V(0xe9)](n);}const l=await this['_shell']['openConfirmation'](f,{'x':0x64,'y':0x64,'width':0x140,'height':0x12c,'parent':this});l&&d&&(this['convertersString']=d,this[V(0xf7)]('namedConverterInput')['value']=d,this[V(0x130)]());}['_refresh'](){requestAnimationFrame(()=>{const a0=b;this[a0(0x130)]();});}async[y(0xe0)](){const a1=y;let c=new BindingsEditorHistoric(this[a1(0xff)]);const d=new AbortController();c['title']='Edit\x20historic\x20binding\x20to:\x20'+this[a1(0x140)][a1(0x120)];let e=await this[a1(0x13e)]['openConfirmation'](c,{'x':0x64,'y':0x64,'width':0x1a4,'height':0x1fe,'parent':this,'abortSignal':d[a1(0x10b)],'disableResize':!![],'cancelText':a1(0x113)});!e?this[a1(0xff)]=null:this[a1(0xff)]=c['historic'],this[a1(0x130)]();}[y(0x118)](){const a2=y,c=document['createElement'](a2(0x125));c[a2(0xf3)]=BindingsEditor['helpSections'][a2(0x123)]>0x0?bindingsEditorHelpHtml['replace']('</div>\x0a</body>',BindingsEditor[a2(0x114)]['join']('')+'</div>\x0a</body>'):bindingsEditorHelpHtml,c[a2(0xef)]['cssText']='width:100%;\x20height:100%;\x20border:none;\x20display:block;',this[a2(0x13e)]['openModal'](c,{'title':'Bindings\x20Editor\x20Help','parent':this,'x':-0x294,'y':-0x50,'width':0x276,'height':0x244});}}customElements['define'](BindingsEditor['is'],BindingsEditor);
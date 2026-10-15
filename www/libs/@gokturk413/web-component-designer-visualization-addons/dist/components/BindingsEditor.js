const y=b;(function(c,d){const x=b,e=c();while(!![]){try{const f=parseInt(x(0xcf))/0x1+parseInt(x(0xac))/0x2*(-parseInt(x(0x115))/0x3)+-parseInt(x(0xd1))/0x4+parseInt(x(0xe0))/0x5*(parseInt(x(0x111))/0x6)+-parseInt(x(0xee))/0x7*(parseInt(x(0xf0))/0x8)+-parseInt(x(0xdc))/0x9+parseInt(x(0xe9))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9ed2a));import{BaseCustomWebComponentConstructorAppend,html,css}from'@node-projects/base-custom-webcomponent';import{BindingMode,BindingTarget,assetsPath}from'@gokturk413/web-component-designer';import{BindingsEditorHistoric}from'./BindingsEditorHistoric.js';import{bindingsEditorHelpHtml}from'./BindingsEditorHelp.js';function a(){const a2=['length','slice','#e8f4fd','_addConverter','_bindingTarget','onmouseenter','property','_parseAttributesToProperties','createBindableObjectBrowser','_instanceServiceContainer','signal-name-input','input','_signals','src','title','namedConverterBrowse','expression2way','icons/delete.svg','_signalsToObjectNames','key','3895854xyDCSe','signal-row','Select\x20a\x20converter\x20and\x20confirm\x20with\x20OK.','...','498lvBpfI','innerHTML','_renderConverterList','ready','convertersString','\x20if\x20empty)','Edit\x20historic\x20binding\x20to:\x20','invert','expression','width:100%;\x20height:100%;\x20border:none;\x20display:block;','indexOf','historic','fullName','name','join','display','Duplicate','value','helpSections','historicLabel','height','showHistoric','template','8668KIjcCu','Remove','onclick','specialType','expressionTwoWay','font-family:monospace;\x20font-weight:bold;\x20color:#111;','none','selectedObject','_renderSignalList','objectNames','flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;','bindabletype','_selectForRow','_shell','namedConverters','background','map','push','#f5f5f5','openConfirmation','style','_refresh','changedEvents','properties','oninput','bindableObjectNames','define','_getDomElement','events','img','className','display:flex;\x20flex-direction:column;\x20height:100%;\x20box-sizing:border-box;\x20font-size:12px;','_binding','signal\x20path','#0078d7','872173cTMIsU','div','1052340hIAjnu','placeholder','_signalListContainer','signalProperty','condition','signal\x20path\x20(prefix:\x20?\x20=\x20signal\x20name\x20in\x20screen\x20property,\x20??\x20=\x20screen\x20property\x20value,\x20?$\x20=\x20signal\x20object\x20in\x20screen\x20property,\x20?@\x20=\x20screen\x20attribute,\x20#\x20=\x20signal\x20name\x20in\x20target\x20property,\x20##\x20=\x20target\x20property\x20value,\x20#$\x20=\x20signal\x20object\x20in\x20target\x20property,\x20#@\x20=\x20target\x20attribute)','description','namedConverterInput','_selectNamedConverter','converters','twoWayPossible','4484844wLTpTW','signal-icon-btn','splice','signal-select-btn','5QMobay','textContent','helpBtn','color','width:12px;\x20height:12px;','span','_bindingsRefresh','createElement','converter','19064340KCyriF','_addSignal','signal','cssText','_syncSignals','1127SHzUtT','icons/copy.svg','64424bmGeDf','forEach','appendChild','twoWay','_showHelp','button','attribute','variable\x20name\x20used\x20in\x20the\x20formula\x20(defaults\x20to\x20__','_property','split','_parseObjectNames','_converterListContainer','display:grid;\x20grid-template-columns:max-content\x20max-content\x201fr;\x20gap:1px\x206px;\x20margin-top:4px;\x20padding:4px\x206px;\x20background:#f5f5f5;\x20border-radius:2px;\x20font-family:monospace;\x20font-size:11px;\x20color:#333;'];a=function(){return a2;};return a();}export class BindingsEditor extends BaseCustomWebComponentConstructorAppend{static [y(0xab)]=html`
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
        }`;static ['is']='node-projects-visualization-bindings-editor';static [y(0xc3)]={'twoWayPossible':Boolean,'twoWay':Boolean,'expression':String,'events':String,'invert':Boolean,'historic':Object};[y(0xdb)]=![];['twoWay']=![];['expression']='';['writeBackSignal']='';[y(0xb0)]='';[y(0xa0)];[y(0xb5)]='';[y(0xc8)]='';[y(0x11c)]=![];['converters']=[];static [y(0xba)]=[];static ['helpSections']=[];[y(0x119)];get[y(0xe8)](){const z=y;if(this['convertersString'])return this[z(0x119)];if(this[z(0xda)]['length']>0x0)return Object['fromEntries'](this[z(0xda)][z(0xbc)](d=>[d['key'],d['value']]));return undefined;}[y(0xf8)];[y(0xcc)];[y(0x101)];['_serviceContainer'];['_instanceServiceContainer'];[y(0xb9)];[y(0x109)]=[];['_signalListContainer'];['_converterListContainer'];constructor(c,d,e,f,g,h,i={}){const A=y;super(),super['_restoreCachedInititalValues'](),this[A(0xf8)]=c,this[A(0xcc)]=d,this[A(0x101)]=e,this['_serviceContainer']=f,this['_instanceServiceContainer']=g,this[A(0xb9)]=h;i?.[A(0xba)]===![]&&(this['_getDomElement']('namedConverterRow')['style'][A(0xa4)]=A(0xb2));const j=this['_getDomElement']('historicBtn');if(i?.[A(0xaa)]===![])j[A(0xc0)]['display']=A(0xb2);else i?.[A(0xa8)]&&(j['textContent']=i['historicLabel']);}[y(0x118)](){const B=y;this[B(0x104)](),this['_assignEvents'](),this[B(0xd3)]=this[B(0xc7)]('signalListContainer'),this['_converterListContainer']=this[B(0xc7)]('converterListContainer'),this[B(0xc7)](B(0xe2))['onclick']=()=>this[B(0xf4)]();if(BindingsEditor['namedConverters']['length']===0x0)this['_getDomElement'](B(0x10c))[B(0xc0)]['display']=B(0xb2);this['twoWayPossible']=![];if(this[B(0x101)]==BindingTarget[B(0x103)]||this['_bindingTarget']==BindingTarget[B(0xf6)])this['twoWayPossible']=!![];if(this[B(0xcc)]){this[B(0xf3)]=this['_binding']['mode']==BindingMode[B(0xf3)],this['expression']=this[B(0xcc)][B(0x11d)],this['writeBackSignal']=this['_binding']['writeBackSignal'],this[B(0xb0)]=this['_binding'][B(0xb0)],this[B(0xa0)]=this['_binding'][B(0xa0)],this['invert']=this['_binding'][B(0x11c)];if(this[B(0xcc)][B(0xc5)])this[B(0xb5)]=this['_binding'][B(0xc5)][B(0xa3)](';');if(this['_binding'][B(0xe8)]){if(typeof this['_binding'][B(0xe8)]==='string')this[B(0x119)]=this[B(0xcc)]['converter'];else for(let d in this['_binding']['converter']){this['converters'][B(0xbd)]({'key':d,'value':this['_binding'][B(0xe8)][d]});}}if(this[B(0xcc)][B(0xc2)]&&this[B(0xcc)]['changedEvents'][B(0xfd)])this['events']=this[B(0xcc)][B(0xc2)]['join'](';');}if(this['expression']){let e=this['_getDomElement'](B(0x11d));this[B(0x11d)]['indexOf']('\x0a')>=0x0&&(e[B(0xc0)]['height']=0x3*0x11+'px');}if(this['expressionTwoWay']){let f=this['_getDomElement'](B(0x10d));this['expressionTwoWay'][B(0x11f)]('\x0a')>=0x0&&(f[B(0xc0)][B(0xa9)]=0x3*0x11+'px');}this[B(0x109)]=this[B(0xfa)](this[B(0xb5)]);if(this['_signals']['length']===0x0)this['_signals']['push']({'name':'','signal':''});this[B(0xb4)](),this[B(0x117)](),this['_bindingsParse']();}['_parseObjectNames'](c){const C=y;if(!c)return[];return c[C(0xf9)](';')['filter'](d=>d[C(0xfd)]>0x0)['map'](d=>{const D=C,e=d[D(0x11f)](':');if(e>0x0)return{'name':d[D(0xfe)](0x0,e),'signal':d['slice'](e+0x1)};return{'name':'','signal':d};});}[y(0x10f)](){const E=y;return this[E(0x109)]['map'](c=>c['name']?c['name']+':'+c['signal']:c['signal'])['join'](';');}[y(0xb4)](){const F=y,c=this['_signalListContainer'];c[F(0x116)]='',this[F(0x109)]['forEach']((d,e)=>{const G=F,f=document[G(0xe7)](G(0xd0));f[G(0xca)]=G(0x112);const g=document['createElement'](G(0x108));g[G(0xca)]=G(0x107),g['placeholder']='__'+e,g['value']=d[G(0xa2)],g['title']=G(0xf7)+e+G(0x11a),g['oninput']=()=>{const H=G;this['_signals'][e][H(0xa2)]=g['value'],this['_syncSignals']();};const h=document[G(0xe7)]('input');h['className']='signal-path-input',h['value']=d[G(0xeb)],h['placeholder']=G(0xcd),h['title']=G(0xd6),h['oninput']=()=>{const I=G;this[I(0x109)][e]['signal']=h[I(0xa6)],this['_syncSignals']();};const j=document['createElement']('button');j['className']=G(0xdd),j['title']='Duplicate';const k=document['createElement'](G(0xc9));k[G(0x10a)]=assetsPath+'icons/copy.svg',k['style'][G(0xec)]=G(0xe4),j['appendChild'](k),j['onclick']=()=>{const J=G;this[J(0x109)][J(0xde)](e+0x1,0x0,{...this['_signals'][e]}),this['_syncSignals'](),this[J(0xb4)]();};const l=document[G(0xe7)](G(0xf5));l['className']=G(0xdf),l[G(0xe1)]=G(0x114),l[G(0x10b)]='Browse\x20signal',l['onclick']=()=>this[G(0xb8)](e,h);const m=document[G(0xe7)]('button');m[G(0xca)]='signal-icon-btn',m[G(0x10b)]='Remove';const n=document[G(0xe7)](G(0xc9));n['src']=assetsPath+'icons/delete.svg',n[G(0xc0)]['cssText']='width:12px;\x20height:12px;',m['appendChild'](n),m['onclick']=()=>{const K=G;this[K(0x109)]['splice'](e,0x1),this['_syncSignals'](),this['_renderSignalList']();},f[G(0xf2)](g),f[G(0xf2)](h),f[G(0xf2)](l),f[G(0xf2)](j),f[G(0xf2)](m),c['appendChild'](f);});}[y(0xed)](){const L=y;this['objectNames']=this['_signalsToObjectNames'](),this[L(0xe6)]();}[y(0xea)](){const M=y;this[M(0x109)][M(0xbd)]({'name':'','signal':''}),this['_renderSignalList']();}async['_selectForRow'](c,d){const N=y;let e=this['_shell'][N(0x105)]();e['initialize'](this['_serviceContainer'],this[N(0x106)],'binding'),e['title']='select\x20signal...';const f=new AbortController();e['objectDoubleclicked']['on'](()=>{const O=N;f['abort']();let h='';if(e[O(0xb3)][O(0xaf)]=='signalProperty')h='?';else e[O(0xb3)][O(0xb7)]===O(0x103)&&(h='??');this[O(0x109)][c]['signal']=h+e[O(0xb3)]['fullName'],d[O(0xa6)]=this[O(0x109)][c][O(0xeb)],this['_syncSignals']();});let g=await this[N(0xb9)][N(0xbf)](e,{'x':0x64,'y':0x64,'width':0x190,'height':0x12c,'parent':this,'abortSignal':f[N(0xeb)]});if(g){let h='';if(e['selectedObject']['specialType']==N(0xd4))h='?';else e[N(0xb3)][N(0xb7)]==='property'&&(h='??');this['_signals'][c]['signal']=h+e[N(0xb3)][N(0xa1)],d['value']=this[N(0x109)][c][N(0xeb)],this[N(0xed)]();}}[y(0x117)](){const P=y,c=this[P(0xfb)];c[P(0x116)]='';const d=this['_property']?.['type']===P(0xe3)?P(0xe3):'text';this[P(0xda)][P(0xf1)]((e,f)=>{const Q=P,g=document[Q(0xe7)]('div');g['className']=Q(0x112);const h=document['createElement']('input');h[Q(0xc0)]['cssText']=Q(0xb6),h[Q(0xa6)]=e[Q(0x110)],h[Q(0xd2)]=Q(0xd5),h[Q(0xc4)]=()=>{const R=Q;this['converters'][f]['key']=h[R(0xa6)];};const j=document['createElement']('input');j['type']=d,j['style'][Q(0xec)]='flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;',j['value']=e['value'],j[Q(0xd2)]=Q(0xa6),j['oninput']=()=>{const S=Q;this['converters'][f]['value']=j[S(0xa6)];};const k=document['createElement'](Q(0xf5));k[Q(0xca)]='signal-icon-btn',k[Q(0x10b)]=Q(0xa5);const l=document[Q(0xe7)](Q(0xc9));l[Q(0x10a)]=assetsPath+Q(0xef),l['style']['cssText']=Q(0xe4),k[Q(0xf2)](l),k[Q(0xae)]=()=>{const T=Q;this['converters'][T(0xde)](f+0x1,0x0,{...this['converters'][f]}),this['_renderConverterList']();};const m=document['createElement'](Q(0xf5));m['className']=Q(0xdd),m[Q(0x10b)]=Q(0xad);const n=document['createElement'](Q(0xc9));n[Q(0x10a)]=assetsPath+Q(0x10e),n[Q(0xc0)]['cssText']=Q(0xe4),m[Q(0xf2)](n),m[Q(0xae)]=()=>{const U=Q;this[U(0xda)]['splice'](f,0x1),this[U(0x117)]();},g['appendChild'](h),g['appendChild'](j),g[Q(0xf2)](k),g['appendChild'](m),c[Q(0xf2)](g);});}[y(0x100)](){const V=y;this[V(0xda)]['push']({'key':'','value':''}),this['_renderConverterList']();}async[y(0xd9)](){const W=y,c=BindingsEditor[W(0xba)];if(c['length']===0x0)return;let d='',e=null;const f=document['createElement']('div');f['style'][W(0xec)]=W(0xcb);const g=document['createElement']('div');g['style'][W(0xec)]='padding:6px\x208px\x204px;\x20color:#666;\x20font-size:11px;\x20border-bottom:1px\x20solid\x20#e0e0e0;\x20flex-shrink:0;',g[W(0xe1)]=W(0x113),f['appendChild'](g);const h=document[W(0xe7)](W(0xd0));h[W(0xc0)]['cssText']='flex:1;\x20overflow-y:auto;\x20padding:4px;',f[W(0xf2)](h);const i=m=>{const X=W;m[X(0xc0)]['background']='',m[X(0xc0)]['borderLeftColor']='transparent';},j=(m,n)=>{const Y=W;if(e)i(e);e=m,m[Y(0xc0)][Y(0xbb)]=Y(0xff),m[Y(0xc0)]['borderLeftColor']=Y(0xce),d=n;};for(const m of c){const n=document[W(0xe7)](W(0xd0));n['style']['cssText']='padding:5px\x206px\x205px\x209px;\x20cursor:pointer;\x20border-radius:3px;\x20border-left:3px\x20solid\x20transparent;\x20margin-bottom:2px;';const o=document['createElement'](W(0xd0));o[W(0xc0)][W(0xec)]=W(0xb1),o['textContent']=m['name'],n['appendChild'](o);if(m[W(0xd7)]){const p=document[W(0xe7)](W(0xd0));p[W(0xc0)]['cssText']='color:#555;\x20font-size:11px;\x20margin-top:2px;',p[W(0xe1)]=m['description'],n['appendChild'](p);}if(m[W(0xe8)]&&Object['keys'](m[W(0xe8)])['length']>0x0){const q=document['createElement'](W(0xd0));q['style'][W(0xec)]=W(0xfc);for(const [r,s]of Object['entries'](m['converter'])){const t=document['createElement'](W(0xe5));t['style']['cssText']='color:#555;\x20text-align:right;',t['textContent']=r;const u=document['createElement'](W(0xe5));u['style'][W(0xec)]='color:#aaa;',u[W(0xe1)]='→';const w=document['createElement'](W(0xe5));w['style']['cssText']='color:#0078d7;\x20font-weight:bold;',w[W(0xe1)]=String(s),q['appendChild'](t),q['appendChild'](u),q['appendChild'](w);}n['appendChild'](q);}n[W(0x102)]=()=>{const Z=W;if(n!==e)n[Z(0xc0)]['background']=Z(0xbe);},n['onmouseleave']=()=>{if(n!==e)n['style']['background']='';},n['onclick']=()=>j(n,m['name']),h[W(0xf2)](n);}const l=await this[W(0xb9)]['openConfirmation'](f,{'x':0x64,'y':0x64,'width':0x140,'height':0x12c,'parent':this});l&&d&&(this['convertersString']=d,this['_getDomElement'](W(0xd8))['value']=d,this[W(0xe6)]());}[y(0xc1)](){requestAnimationFrame(()=>{this['_bindingsRefresh']();});}async[y(0xaa)](){const a0=y;let c=new BindingsEditorHistoric(this[a0(0xa0)]);const d=new AbortController();c['title']=a0(0x11b)+this['_property'][a0(0xa2)];let e=await this[a0(0xb9)]['openConfirmation'](c,{'x':0x64,'y':0x64,'width':0x1a4,'height':0x1fe,'parent':this,'abortSignal':d['signal'],'disableResize':!![],'cancelText':a0(0xad)});!e?this[a0(0xa0)]=null:this[a0(0xa0)]=c[a0(0xa0)],this[a0(0xe6)]();}[y(0xf4)](){const a1=y,c=document['createElement']('iframe');c['srcdoc']=BindingsEditor['helpSections']['length']>0x0?bindingsEditorHelpHtml['replace']('</div>\x0a</body>',BindingsEditor[a1(0xa7)][a1(0xa3)]('')+'</div>\x0a</body>'):bindingsEditorHelpHtml,c[a1(0xc0)]['cssText']=a1(0x11e),this['_shell']['openModal'](c,{'title':'Bindings\x20Editor\x20Help','parent':this,'x':-0x294,'y':-0x50,'width':0x276,'height':0x244});}}function b(c,d){c=c-0xa0;const e=a();let f=e[c];return f;}customElements[y(0xc6)](BindingsEditor['is'],BindingsEditor);
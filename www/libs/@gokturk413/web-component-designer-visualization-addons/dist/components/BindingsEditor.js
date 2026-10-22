const y=b;(function(c,d){const x=b,e=c();while(!![]){try{const f=-parseInt(x(0x1ac))/0x1*(parseInt(x(0x1a6))/0x2)+-parseInt(x(0x1f9))/0x3*(parseInt(x(0x212))/0x4)+-parseInt(x(0x1eb))/0x5+parseInt(x(0x20d))/0x6*(parseInt(x(0x1bf))/0x7)+parseInt(x(0x1e1))/0x8*(-parseInt(x(0x1df))/0x9)+parseInt(x(0x1dc))/0xa*(-parseInt(x(0x1f7))/0xb)+parseInt(x(0x1fc))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xabc35));import{BaseCustomWebComponentConstructorAppend,html,css}from'@node-projects/base-custom-webcomponent';import{BindingMode,BindingTarget,assetsPath}from'@gokturk413/web-component-designer';import{BindingsEditorHistoric}from'./BindingsEditorHistoric.js';import{bindingsEditorHelpHtml}from'./BindingsEditorHelp.js';export class BindingsEditor extends BaseCustomWebComponentConstructorAppend{static [y(0x211)]=html`
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
        </div>`;static [y(0x1ea)]=css`
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
        }`;static ['is']=y(0x1b0);static [y(0x201)]={'twoWayPossible':Boolean,'twoWay':Boolean,'expression':String,'events':String,'invert':Boolean,'historic':Object};['twoWayPossible']=![];[y(0x21b)]=![];[y(0x1f3)]='';['writeBackSignal']='';['expressionTwoWay']='';['historic'];[y(0x1b7)]='';[y(0x1b8)]='';['invert']=![];[y(0x1a5)]=[];static ['namedConverters']=[];static ['helpSections']=[];[y(0x1bb)];get[y(0x1c0)](){const z=y;if(this['convertersString'])return this['convertersString'];if(this[z(0x1a5)][z(0x1d0)]>0x0)return Object[z(0x1e7)](this[z(0x1a5)]['map'](d=>[d[z(0x1b4)],d['value']]));return undefined;}['_property'];[y(0x1f6)];[y(0x1ab)];[y(0x1c4)];[y(0x1a4)];['_shell'];['_signals']=[];['_signalListContainer'];['_converterListContainer'];constructor(c,d,e,f,g,h,i={}){const A=y;super(),super['_restoreCachedInititalValues'](),this[A(0x1b2)]=c,this[A(0x1f6)]=d,this['_bindingTarget']=e,this['_serviceContainer']=f,this['_instanceServiceContainer']=g,this['_shell']=h;i?.['namedConverters']===![]&&(this[A(0x1fb)](A(0x208))[A(0x1ea)][A(0x1bc)]=A(0x21a));const j=this[A(0x1fb)](A(0x1b3));if(i?.['showHistoric']===![])j[A(0x1ea)][A(0x1bc)]=A(0x21a);else i?.[A(0x1fe)]&&(j[A(0x1c9)]=i['historicLabel']);}[y(0x1d7)](){const B=y;this['_parseAttributesToProperties'](),this['_assignEvents'](),this['_signalListContainer']=this['_getDomElement']('signalListContainer'),this['_converterListContainer']=this['_getDomElement'](B(0x1b1)),this['_getDomElement']('helpBtn')[B(0x1e3)]=()=>this['_showHelp']();if(BindingsEditor['namedConverters'][B(0x1d0)]===0x0)this[B(0x1fb)]('namedConverterBrowse')['style']['display']='none';this[B(0x20e)]=![];if(this[B(0x1ab)]==BindingTarget[B(0x1d4)]||this['_bindingTarget']==BindingTarget[B(0x1e4)])this['twoWayPossible']=!![];if(this[B(0x1f6)]){this[B(0x21b)]=this['_binding']['mode']==BindingMode[B(0x21b)],this['expression']=this[B(0x1f6)][B(0x1f3)],this[B(0x1ed)]=this[B(0x1f6)][B(0x1ed)],this[B(0x20f)]=this[B(0x1f6)][B(0x20f)],this[B(0x1e9)]=this[B(0x1f6)]['historic'],this[B(0x1f8)]=this['_binding'][B(0x1f8)];if(this[B(0x1f6)]['bindableObjectNames'])this[B(0x1b7)]=this[B(0x1f6)]['bindableObjectNames'][B(0x203)](';');if(this['_binding'][B(0x1c0)]){if(typeof this[B(0x1f6)]['converter']==='string')this['convertersString']=this['_binding'][B(0x1c0)];else for(let d in this['_binding']['converter']){this['converters']['push']({'key':d,'value':this['_binding']['converter'][d]});}}if(this['_binding'][B(0x1b5)]&&this['_binding']['changedEvents'][B(0x1d0)])this['events']=this['_binding']['changedEvents'][B(0x203)](';');}if(this[B(0x1f3)]){let e=this[B(0x1fb)]('expression');this['expression']['indexOf']('\x0a')>=0x0&&(e[B(0x1ea)][B(0x206)]=0x3*0x11+'px');}if(this['expressionTwoWay']){let f=this['_getDomElement']('expression2way');this[B(0x20f)][B(0x1f0)]('\x0a')>=0x0&&(f[B(0x1ea)][B(0x206)]=0x3*0x11+'px');}this['_signals']=this[B(0x219)](this[B(0x1b7)]);if(this['_signals'][B(0x1d0)]===0x0)this[B(0x1de)]['push']({'name':'','signal':''});this['_renderSignalList'](),this['_renderConverterList'](),this['_bindingsParse']();}['_parseObjectNames'](c){const C=y;if(!c)return[];return c[C(0x1dd)](';')[C(0x1d6)](d=>d[C(0x1d0)]>0x0)['map'](d=>{const D=C,e=d[D(0x1f0)](':');if(e>0x0)return{'name':d[D(0x19f)](0x0,e),'signal':d[D(0x19f)](e+0x1)};return{'name':'','signal':d};});}[y(0x1ee)](){const E=y;return this['_signals'][E(0x1f1)](c=>c[E(0x1c6)]?c[E(0x1c6)]+':'+c[E(0x1c3)]:c['signal'])['join'](';');}['_renderSignalList'](){const F=y,c=this[F(0x214)];c[F(0x207)]='',this[F(0x1de)]['forEach']((d,e)=>{const G=F,f=document['createElement']('div');f[G(0x1ef)]=G(0x1f5);const g=document['createElement']('input');g['className']=G(0x1af),g[G(0x1f2)]='__'+e,g[G(0x1cf)]=d['name'],g['title']=G(0x1c5)+e+'\x20if\x20empty)',g['oninput']=()=>{const H=G;this['_signals'][e][H(0x1c6)]=g[H(0x1cf)],this['_syncSignals']();};const h=document['createElement']('input');h[G(0x1ef)]='signal-path-input',h[G(0x1cf)]=d[G(0x1c3)],h['placeholder']='signal\x20path',h[G(0x1f4)]='signal\x20path\x20(prefix:\x20?\x20=\x20signal\x20name\x20in\x20screen\x20property,\x20??\x20=\x20screen\x20property\x20value,\x20?$\x20=\x20signal\x20object\x20in\x20screen\x20property,\x20?@\x20=\x20screen\x20attribute,\x20#\x20=\x20signal\x20name\x20in\x20target\x20property,\x20##\x20=\x20target\x20property\x20value,\x20#$\x20=\x20signal\x20object\x20in\x20target\x20property,\x20#@\x20=\x20target\x20attribute)',h[G(0x1ff)]=()=>{const I=G;this[I(0x1de)][e]['signal']=h[I(0x1cf)],this['_syncSignals']();};const j=document[G(0x1b6)](G(0x1c2));j[G(0x1ef)]='signal-icon-btn',j[G(0x1f4)]='Duplicate';const k=document[G(0x1b6)]('img');k['src']=assetsPath+G(0x1ad),k[G(0x1ea)]['cssText']='width:12px;\x20height:12px;',j[G(0x1c7)](k),j[G(0x1e3)]=()=>{this['_signals']['splice'](e+0x1,0x0,{...this['_signals'][e]}),this['_syncSignals'](),this['_renderSignalList']();};const l=document[G(0x1b6)]('button');l['className']=G(0x1be),l[G(0x1c9)]=G(0x20c),l['title']='Browse\x20signal',l['onclick']=()=>this['_selectForRow'](e,h);const m=document[G(0x1b6)]('button');m['className']='signal-icon-btn',m[G(0x1f4)]=G(0x1cc);const n=document[G(0x1b6)](G(0x1d2));n[G(0x1d1)]=assetsPath+G(0x205),n['style'][G(0x1a1)]='width:12px;\x20height:12px;',m[G(0x1c7)](n),m['onclick']=()=>{const J=G;this[J(0x1de)][J(0x1aa)](e,0x1),this[J(0x1d3)](),this['_renderSignalList']();},f['appendChild'](g),f[G(0x1c7)](h),f['appendChild'](l),f['appendChild'](j),f['appendChild'](m),c[G(0x1c7)](f);});}[y(0x1d3)](){const K=y;this[K(0x1b7)]=this[K(0x1ee)](),this['_bindingsRefresh']();}[y(0x1ae)](){const L=y;this[L(0x1de)][L(0x1ce)]({'name':'','signal':''}),this['_renderSignalList']();}async['_selectForRow'](c,d){const M=y;let e=this[M(0x1fd)][M(0x1a3)]();e['initialize'](this[M(0x1c4)],this['_instanceServiceContainer'],'binding'),e[M(0x1f4)]=M(0x1e0);const f=new AbortController();e['objectDoubleclicked']['on'](()=>{const N=M;f[N(0x1a7)]();let h='';if(e[N(0x1a9)][N(0x209)]==N(0x1d9))h='?';else e[N(0x1a9)]['bindabletype']==='property'&&(h='??');this[N(0x1de)][c][N(0x1c3)]=h+e[N(0x1a9)]['fullName'],d['value']=this[N(0x1de)][c]['signal'],this[N(0x1d3)]();});let g=await this[M(0x1fd)]['openConfirmation'](e,{'x':0x64,'y':0x64,'width':0x190,'height':0x12c,'parent':this,'abortSignal':f['signal']});if(g){let h='';if(e[M(0x1a9)]['specialType']=='signalProperty')h='?';else e['selectedObject'][M(0x1e8)]===M(0x1d4)&&(h='??');this['_signals'][c]['signal']=h+e[M(0x1a9)][M(0x1b9)],d['value']=this[M(0x1de)][c]['signal'],this[M(0x1d3)]();}}['_renderConverterList'](){const O=y,c=this[O(0x1fa)];c['innerHTML']='';const d=this[O(0x1b2)]?.['type']===O(0x1c1)?O(0x1c1):'text';this['converters'][O(0x215)]((e,f)=>{const P=O,g=document[P(0x1b6)]('div');g[P(0x1ef)]='signal-row';const h=document['createElement'](P(0x1a8));h[P(0x1ea)][P(0x1a1)]='flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;',h['value']=e[P(0x1b4)],h['placeholder']='condition',h['oninput']=()=>{this['converters'][f]['key']=h['value'];};const j=document[P(0x1b6)]('input');j['type']=d,j[P(0x1ea)][P(0x1a1)]=P(0x210),j[P(0x1cf)]=e['value'],j['placeholder']='value',j[P(0x1ff)]=()=>{const Q=P;this['converters'][f][Q(0x1cf)]=j[Q(0x1cf)];};const k=document[P(0x1b6)](P(0x1c2));k[P(0x1ef)]='signal-icon-btn',k['title']=P(0x1c8);const l=document[P(0x1b6)]('img');l[P(0x1d1)]=assetsPath+P(0x1ad),l['style'][P(0x1a1)]=P(0x204),k[P(0x1c7)](l),k[P(0x1e3)]=()=>{const R=P;this[R(0x1a5)][R(0x1aa)](f+0x1,0x0,{...this[R(0x1a5)][f]}),this[R(0x20b)]();};const m=document['createElement'](P(0x1c2));m['className']='signal-icon-btn',m[P(0x1f4)]='Remove';const n=document[P(0x1b6)](P(0x1d2));n[P(0x1d1)]=assetsPath+'icons/delete.svg',n['style']['cssText']='width:12px;\x20height:12px;',m['appendChild'](n),m['onclick']=()=>{const S=P;this['converters'][S(0x1aa)](f,0x1),this['_renderConverterList']();},g['appendChild'](h),g['appendChild'](j),g[P(0x1c7)](k),g['appendChild'](m),c['appendChild'](g);});}[y(0x1cd)](){const T=y;this['converters'][T(0x1ce)]({'key':'','value':''}),this[T(0x20b)]();}async['_selectNamedConverter'](){const U=y,c=BindingsEditor['namedConverters'];if(c[U(0x1d0)]===0x0)return;let d='',e=null;const f=document['createElement'](U(0x1db));f[U(0x1ea)][U(0x1a1)]='display:flex;\x20flex-direction:column;\x20height:100%;\x20box-sizing:border-box;\x20font-size:12px;';const g=document[U(0x1b6)]('div');g['style']['cssText']=U(0x1a2),g[U(0x1c9)]='Select\x20a\x20converter\x20and\x20confirm\x20with\x20OK.',f[U(0x1c7)](g);const h=document[U(0x1b6)]('div');h['style']['cssText']='flex:1;\x20overflow-y:auto;\x20padding:4px;',f['appendChild'](h);const i=m=>{const V=U;m[V(0x1ea)]['background']='',m[V(0x1ea)][V(0x200)]=V(0x213);},j=(m,n)=>{const W=U;if(e)i(e);e=m,m['style']['background']=W(0x218),m['style']['borderLeftColor']=W(0x1a0),d=n;};for(const m of c){const n=document['createElement'](U(0x1db));n[U(0x1ea)]['cssText']=U(0x1bd);const o=document[U(0x1b6)]('div');o['style'][U(0x1a1)]='font-family:monospace;\x20font-weight:bold;\x20color:#111;',o[U(0x1c9)]=m['name'],n[U(0x1c7)](o);if(m['description']){const p=document[U(0x1b6)](U(0x1db));p[U(0x1ea)]['cssText']='color:#555;\x20font-size:11px;\x20margin-top:2px;',p['textContent']=m[U(0x1ca)],n[U(0x1c7)](p);}if(m['converter']&&Object[U(0x217)](m['converter'])[U(0x1d0)]>0x0){const q=document[U(0x1b6)](U(0x1db));q[U(0x1ea)]['cssText']='display:grid;\x20grid-template-columns:max-content\x20max-content\x201fr;\x20gap:1px\x206px;\x20margin-top:4px;\x20padding:4px\x206px;\x20background:#f5f5f5;\x20border-radius:2px;\x20font-family:monospace;\x20font-size:11px;\x20color:#333;';for(const [r,s]of Object['entries'](m['converter'])){const t=document[U(0x1b6)](U(0x1ec));t['style'][U(0x1a1)]=U(0x1cb),t[U(0x1c9)]=r;const u=document[U(0x1b6)]('span');u['style']['cssText']=U(0x1e6),u[U(0x1c9)]='→';const w=document[U(0x1b6)]('span');w[U(0x1ea)][U(0x1a1)]=U(0x20a),w[U(0x1c9)]=String(s),q['appendChild'](t),q['appendChild'](u),q['appendChild'](w);}n[U(0x1c7)](q);}n['onmouseenter']=()=>{const X=U;if(n!==e)n['style']['background']=X(0x1da);},n[U(0x202)]=()=>{if(n!==e)n['style']['background']='';},n['onclick']=()=>j(n,m[U(0x1c6)]),h[U(0x1c7)](n);}const l=await this[U(0x1fd)]['openConfirmation'](f,{'x':0x64,'y':0x64,'width':0x140,'height':0x12c,'parent':this});l&&d&&(this['convertersString']=d,this['_getDomElement']('namedConverterInput')['value']=d,this['_bindingsRefresh']());}[y(0x1ba)](){requestAnimationFrame(()=>{this['_bindingsRefresh']();});}async['showHistoric'](){const Y=y;let c=new BindingsEditorHistoric(this['historic']);const d=new AbortController();c['title']='Edit\x20historic\x20binding\x20to:\x20'+this[Y(0x1b2)]['name'];let e=await this[Y(0x1fd)][Y(0x1e5)](c,{'x':0x64,'y':0x64,'width':0x1a4,'height':0x1fe,'parent':this,'abortSignal':d[Y(0x1c3)],'disableResize':!![],'cancelText':Y(0x1cc)});!e?this[Y(0x1e9)]=null:this['historic']=c['historic'],this['_bindingsRefresh']();}['_showHelp'](){const Z=y,c=document['createElement'](Z(0x1d5));c['srcdoc']=BindingsEditor['helpSections'][Z(0x1d0)]>0x0?bindingsEditorHelpHtml[Z(0x1e2)](Z(0x216),BindingsEditor['helpSections']['join']('')+'</div>\x0a</body>'):bindingsEditorHelpHtml,c['style']['cssText']='width:100%;\x20height:100%;\x20border:none;\x20display:block;',this['_shell']['openModal'](c,{'title':Z(0x1d8),'parent':this,'x':-0x294,'y':-0x50,'width':0x276,'height':0x244});}}function b(c,d){c=c-0x19f;const e=a();let f=e[c];return f;}function a(){const a0=['template','660WPFdDu','transparent','_signalListContainer','forEach','</div>\x0a</body>','keys','#e8f4fd','_parseObjectNames','none','twoWay','slice','#0078d7','cssText','padding:6px\x208px\x204px;\x20color:#666;\x20font-size:11px;\x20border-bottom:1px\x20solid\x20#e0e0e0;\x20flex-shrink:0;','createBindableObjectBrowser','_instanceServiceContainer','converters','4710cXUzMg','abort','input','selectedObject','splice','_bindingTarget','471hfDAWJ','icons/copy.svg','_addSignal','signal-name-input','node-projects-visualization-bindings-editor','converterListContainer','_property','historicBtn','key','changedEvents','createElement','objectNames','events','fullName','_refresh','convertersString','display','padding:5px\x206px\x205px\x209px;\x20cursor:pointer;\x20border-radius:3px;\x20border-left:3px\x20solid\x20transparent;\x20margin-bottom:2px;','signal-select-btn','35UTeomU','converter','color','button','signal','_serviceContainer','variable\x20name\x20used\x20in\x20the\x20formula\x20(defaults\x20to\x20__','name','appendChild','Duplicate','textContent','description','color:#555;\x20text-align:right;','Remove','_addConverter','push','value','length','src','img','_syncSignals','property','iframe','filter','ready','Bindings\x20Editor\x20Help','signalProperty','#f5f5f5','div','10CaDkgd','split','_signals','318690ZEKjwM','select\x20signal...','184WbqaaI','replace','onclick','attribute','openConfirmation','color:#aaa;','fromEntries','bindabletype','historic','style','1414125fLmErA','span','writeBackSignal','_signalsToObjectNames','className','indexOf','map','placeholder','expression','title','signal-row','_binding','8481462BgqyRI','invert','9930NQzExQ','_converterListContainer','_getDomElement','41542236CPOBBY','_shell','historicLabel','oninput','borderLeftColor','properties','onmouseleave','join','width:12px;\x20height:12px;','icons/delete.svg','height','innerHTML','namedConverterRow','specialType','color:#0078d7;\x20font-weight:bold;','_renderConverterList','...','918408bwQUnr','twoWayPossible','expressionTwoWay','flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;'];a=function(){return a0;};return a();}customElements['define'](BindingsEditor['is'],BindingsEditor);
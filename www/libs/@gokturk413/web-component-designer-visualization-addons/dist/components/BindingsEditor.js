const y=b;(function(c,d){const x=b,e=c();while(!![]){try{const f=parseInt(x(0xf6))/0x1*(parseInt(x(0xac))/0x2)+parseInt(x(0xe7))/0x3+parseInt(x(0xda))/0x4*(parseInt(x(0xf2))/0x5)+-parseInt(x(0xeb))/0x6+parseInt(x(0x110))/0x7+parseInt(x(0xc3))/0x8*(-parseInt(x(0x10a))/0x9)+-parseInt(x(0x10b))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xeffd1));import{BaseCustomWebComponentConstructorAppend,html,css}from'@node-projects/base-custom-webcomponent';import{BindingMode,BindingTarget,assetsPath}from'@gokturk413/web-component-designer';import{BindingsEditorHistoric}from'./BindingsEditorHistoric.js';function a(){const a0=['#0078d7','_signalListContainer','_showHelp','placeholder','changedEvents','writeBackSignal','signal-row','onmouseenter','_bindingsParse','description','attribute','entries','invert','_bindingsRefresh','_binding','src','268otlXFz','Remove','display','define','expression','_syncSignals','signal','splice','openConfirmation','variable\x20name\x20used\x20in\x20the\x20formula\x20(defaults\x20to\x20__','push','converters','fromEntries','4301610KJAywe','selectedObject','convertersString','_signalsToObjectNames','4966098mwtLtB','signal-name-input','split','cssText','select\x20signal...','Bindings\x20Editor\x20Help','width:12px;\x20height:12px;','134065MjiHGQ','node-projects-visualization-bindings-editor','filter','font-family:monospace;\x20font-weight:bold;\x20color:#111;','409821VBbpgk','_converterListContainer','...','map','helpSections','color:#aaa;','name','historic','length','namedConverters','twoWayPossible','textContent','</div>\x0a</body>','_property','signalListContainer','none','bindabletype','showHistoric','twoWay','oninput','9ExHMgw','19096340cqWuct','_renderSignalList','historicLabel','key','Duplicate','1267287pTQKDP','helpBtn','indexOf','_parseObjectNames','innerHTML','fullName','_bindingTarget','_selectNamedConverter','title','srcdoc','value','input','objectNames','className','signal-icon-btn','_signals','color:#555;\x20font-size:11px;\x20margin-top:2px;','onclick','button','height','#f5f5f5','_selectForRow','_instanceServiceContainer','color:#555;\x20text-align:right;','namedConverterBrowse','converter','historicBtn','forEach','2sAImuQ','binding','openModal','_shell','span','type','icons/copy.svg','padding:5px\x206px\x205px\x209px;\x20cursor:pointer;\x20border-radius:3px;\x20border-left:3px\x20solid\x20transparent;\x20margin-bottom:2px;','iframe','_renderConverterList','_getDomElement','expressionTwoWay','condition','appendChild','Select\x20a\x20converter\x20and\x20confirm\x20with\x20OK.','events','properties','specialType','style','createElement','div','initialize','signal-select-btn','807144klQcpb','namedConverterRow','abort','_serviceContainer','template','padding:6px\x208px\x204px;\x20color:#666;\x20font-size:11px;\x20border-bottom:1px\x20solid\x20#e0e0e0;\x20flex-shrink:0;','background'];a=function(){return a0;};return a();}import{bindingsEditorHelpHtml}from'./BindingsEditorHelp.js';function b(c,d){c=c-0x95;const e=a();let f=e[c];return f;}export class BindingsEditor extends BaseCustomWebComponentConstructorAppend{static [y(0xc7)]=html`
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
        }`;static ['is']=y(0xf3);static [y(0xbc)]={'twoWayPossible':Boolean,'twoWay':Boolean,'expression':String,'events':String,'invert':Boolean,'historic':Object};[y(0x100)]=![];['twoWay']=![];['expression']='';[y(0xcf)]='';['expressionTwoWay']='';['historic'];[y(0x9c)]='';[y(0xbb)]='';['invert']=![];[y(0xe5)]=[];static [y(0xff)]=[];static [y(0xfa)]=[];[y(0xe9)];get[y(0xa9)](){const z=y;if(this[z(0xe9)])return this[z(0xe9)];if(this['converters']['length']>0x0)return Object[z(0xe6)](this['converters']['map'](d=>[d[z(0x10e)],d[z(0x9a)]]));return undefined;}[y(0x103)];[y(0xd8)];[y(0x96)];[y(0xc6)];[y(0xa6)];[y(0xaf)];[y(0x9f)]=[];[y(0xcb)];['_converterListContainer'];constructor(c,d,e,f,g,h,i={}){const A=y;super(),super['_restoreCachedInititalValues'](),this['_property']=c,this['_binding']=d,this['_bindingTarget']=e,this[A(0xc6)]=f,this['_instanceServiceContainer']=g,this[A(0xaf)]=h;i?.['namedConverters']===![]&&(this['_getDomElement'](A(0xc4))['style'][A(0xdc)]=A(0x105));const j=this['_getDomElement'](A(0xaa));if(i?.['showHistoric']===![])j[A(0xbe)][A(0xdc)]=A(0x105);else i?.['historicLabel']&&(j['textContent']=i[A(0x10d)]);}['ready'](){const B=y;this['_parseAttributesToProperties'](),this['_assignEvents'](),this['_signalListContainer']=this[B(0xb6)](B(0x104)),this[B(0xf7)]=this[B(0xb6)]('converterListContainer'),this[B(0xb6)](B(0x111))[B(0xa1)]=()=>this['_showHelp']();if(BindingsEditor[B(0xff)][B(0xfe)]===0x0)this[B(0xb6)](B(0xa8))['style']['display']='none';this[B(0x100)]=![];if(this[B(0x96)]==BindingTarget['property']||this['_bindingTarget']==BindingTarget[B(0xd4)])this['twoWayPossible']=!![];if(this[B(0xd8)]){this[B(0x108)]=this[B(0xd8)]['mode']==BindingMode['twoWay'],this[B(0xde)]=this['_binding'][B(0xde)],this['writeBackSignal']=this['_binding'][B(0xcf)],this['expressionTwoWay']=this[B(0xd8)][B(0xb7)],this[B(0xfd)]=this['_binding'][B(0xfd)],this[B(0xd6)]=this['_binding'][B(0xd6)];if(this[B(0xd8)]['bindableObjectNames'])this[B(0x9c)]=this['_binding']['bindableObjectNames']['join'](';');if(this['_binding']['converter']){if(typeof this['_binding'][B(0xa9)]==='string')this[B(0xe9)]=this['_binding'][B(0xa9)];else for(let d in this['_binding'][B(0xa9)]){this[B(0xe5)][B(0xe4)]({'key':d,'value':this['_binding']['converter'][d]});}}if(this['_binding'][B(0xce)]&&this['_binding']['changedEvents'][B(0xfe)])this[B(0xbb)]=this['_binding'][B(0xce)]['join'](';');}if(this['expression']){let e=this['_getDomElement'](B(0xde));this['expression']['indexOf']('\x0a')>=0x0&&(e['style'][B(0xa3)]=0x3*0x11+'px');}if(this[B(0xb7)]){let f=this[B(0xb6)]('expression2way');this['expressionTwoWay'][B(0x112)]('\x0a')>=0x0&&(f[B(0xbe)]['height']=0x3*0x11+'px');}this['_signals']=this[B(0x113)](this['objectNames']);if(this['_signals'][B(0xfe)]===0x0)this[B(0x9f)]['push']({'name':'','signal':''});this[B(0x10c)](),this['_renderConverterList'](),this[B(0xd2)]();}[y(0x113)](c){const C=y;if(!c)return[];return c[C(0xed)](';')[C(0xf4)](d=>d['length']>0x0)[C(0xf9)](d=>{const e=d['indexOf'](':');if(e>0x0)return{'name':d['slice'](0x0,e),'signal':d['slice'](e+0x1)};return{'name':'','signal':d};});}[y(0xea)](){const D=y;return this['_signals'][D(0xf9)](c=>c[D(0xfc)]?c['name']+':'+c[D(0xe0)]:c['signal'])['join'](';');}['_renderSignalList'](){const E=y,c=this['_signalListContainer'];c[E(0x114)]='',this['_signals'][E(0xab)]((d,e)=>{const F=E,f=document['createElement']('div');f[F(0x9d)]='signal-row';const g=document['createElement'](F(0x9b));g[F(0x9d)]=F(0xec),g['placeholder']='__'+e,g['value']=d['name'],g[F(0x98)]=F(0xe3)+e+'\x20if\x20empty)',g[F(0x109)]=()=>{const G=F;this['_signals'][e][G(0xfc)]=g['value'],this['_syncSignals']();};const h=document[F(0xbf)]('input');h[F(0x9d)]='signal-path-input',h[F(0x9a)]=d['signal'],h[F(0xcd)]='signal\x20path',h['title']='signal\x20path\x20(prefix:\x20?\x20=\x20signal\x20name\x20in\x20screen\x20property,\x20??\x20=\x20screen\x20property\x20value,\x20?$\x20=\x20signal\x20object\x20in\x20screen\x20property,\x20?@\x20=\x20screen\x20attribute,\x20#\x20=\x20signal\x20name\x20in\x20target\x20property,\x20##\x20=\x20target\x20property\x20value,\x20#$\x20=\x20signal\x20object\x20in\x20target\x20property,\x20#@\x20=\x20target\x20attribute)',h[F(0x109)]=()=>{const H=F;this[H(0x9f)][e]['signal']=h['value'],this[H(0xdf)]();};const j=document['createElement'](F(0xa2));j['className']='signal-icon-btn',j['title']=F(0x10f);const k=document['createElement']('img');k[F(0xd9)]=assetsPath+F(0xb2),k['style'][F(0xee)]=F(0xf1),j[F(0xb9)](k),j['onclick']=()=>{const I=F;this['_signals'][I(0xe1)](e+0x1,0x0,{...this['_signals'][e]}),this[I(0xdf)](),this['_renderSignalList']();};const l=document[F(0xbf)]('button');l['className']=F(0xc2),l[F(0x101)]=F(0xf8),l['title']='Browse\x20signal',l['onclick']=()=>this[F(0xa5)](e,h);const m=document[F(0xbf)]('button');m[F(0x9d)]=F(0x9e),m[F(0x98)]=F(0xdb);const n=document[F(0xbf)]('img');n['src']=assetsPath+'icons/delete.svg',n['style'][F(0xee)]=F(0xf1),m[F(0xb9)](n),m['onclick']=()=>{const J=F;this[J(0x9f)][J(0xe1)](e,0x1),this['_syncSignals'](),this[J(0x10c)]();},f[F(0xb9)](g),f['appendChild'](h),f[F(0xb9)](l),f['appendChild'](j),f[F(0xb9)](m),c['appendChild'](f);});}[y(0xdf)](){const K=y;this['objectNames']=this[K(0xea)](),this['_bindingsRefresh']();}['_addSignal'](){const L=y;this[L(0x9f)][L(0xe4)]({'name':'','signal':''}),this[L(0x10c)]();}async[y(0xa5)](c,d){const M=y;let e=this['_shell']['createBindableObjectBrowser']();e[M(0xc1)](this[M(0xc6)],this['_instanceServiceContainer'],M(0xad)),e[M(0x98)]=M(0xef);const f=new AbortController();e['objectDoubleclicked']['on'](()=>{const N=M;f[N(0xc5)]();let h='';if(e[N(0xe8)][N(0xbd)]=='signalProperty')h='?';else e['selectedObject'][N(0x106)]==='property'&&(h='??');this['_signals'][c][N(0xe0)]=h+e['selectedObject']['fullName'],d[N(0x9a)]=this[N(0x9f)][c][N(0xe0)],this[N(0xdf)]();});let g=await this[M(0xaf)]['openConfirmation'](e,{'x':0x64,'y':0x64,'width':0x190,'height':0x12c,'parent':this,'abortSignal':f['signal']});if(g){let h='';if(e[M(0xe8)][M(0xbd)]=='signalProperty')h='?';else e[M(0xe8)][M(0x106)]==='property'&&(h='??');this[M(0x9f)][c]['signal']=h+e[M(0xe8)][M(0x95)],d['value']=this[M(0x9f)][c]['signal'],this[M(0xdf)]();}}['_renderConverterList'](){const O=y,c=this['_converterListContainer'];c[O(0x114)]='';const d=this['_property']?.[O(0xb1)]==='color'?'color':'text';this[O(0xe5)]['forEach']((e,f)=>{const P=O,g=document[P(0xbf)](P(0xc0));g[P(0x9d)]=P(0xd0);const h=document[P(0xbf)](P(0x9b));h['style'][P(0xee)]='flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;',h['value']=e['key'],h['placeholder']=P(0xb8),h[P(0x109)]=()=>{const Q=P;this[Q(0xe5)][f]['key']=h['value'];};const j=document['createElement']('input');j[P(0xb1)]=d,j['style']['cssText']='flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;',j['value']=e['value'],j[P(0xcd)]=P(0x9a),j['oninput']=()=>{this['converters'][f]['value']=j['value'];};const k=document['createElement']('button');k[P(0x9d)]='signal-icon-btn',k[P(0x98)]=P(0x10f);const l=document[P(0xbf)]('img');l['src']=assetsPath+'icons/copy.svg',l[P(0xbe)][P(0xee)]=P(0xf1),k[P(0xb9)](l),k[P(0xa1)]=()=>{const R=P;this[R(0xe5)][R(0xe1)](f+0x1,0x0,{...this[R(0xe5)][f]}),this[R(0xb5)]();};const m=document['createElement'](P(0xa2));m[P(0x9d)]='signal-icon-btn',m['title']='Remove';const n=document['createElement']('img');n[P(0xd9)]=assetsPath+'icons/delete.svg',n['style']['cssText']=P(0xf1),m[P(0xb9)](n),m['onclick']=()=>{const S=P;this['converters']['splice'](f,0x1),this[S(0xb5)]();},g[P(0xb9)](h),g[P(0xb9)](j),g['appendChild'](k),g[P(0xb9)](m),c[P(0xb9)](g);});}['_addConverter'](){const T=y;this[T(0xe5)]['push']({'key':'','value':''}),this['_renderConverterList']();}async[y(0x97)](){const U=y,c=BindingsEditor['namedConverters'];if(c['length']===0x0)return;let d='',e=null;const f=document[U(0xbf)](U(0xc0));f['style'][U(0xee)]='display:flex;\x20flex-direction:column;\x20height:100%;\x20box-sizing:border-box;\x20font-size:12px;';const g=document['createElement'](U(0xc0));g['style']['cssText']=U(0xc8),g['textContent']=U(0xba),f[U(0xb9)](g);const h=document[U(0xbf)]('div');h[U(0xbe)]['cssText']='flex:1;\x20overflow-y:auto;\x20padding:4px;',f['appendChild'](h);const i=m=>{m['style']['background']='',m['style']['borderLeftColor']='transparent';},j=(m,n)=>{const V=U;if(e)i(e);e=m,m['style'][V(0xc9)]='#e8f4fd',m['style']['borderLeftColor']=V(0xca),d=n;};for(const m of c){const n=document[U(0xbf)](U(0xc0));n[U(0xbe)]['cssText']=U(0xb3);const o=document[U(0xbf)]('div');o['style'][U(0xee)]=U(0xf5),o[U(0x101)]=m[U(0xfc)],n[U(0xb9)](o);if(m['description']){const p=document['createElement']('div');p[U(0xbe)]['cssText']=U(0xa0),p[U(0x101)]=m[U(0xd3)],n['appendChild'](p);}if(m['converter']&&Object['keys'](m['converter'])['length']>0x0){const q=document['createElement']('div');q['style'][U(0xee)]='display:grid;\x20grid-template-columns:max-content\x20max-content\x201fr;\x20gap:1px\x206px;\x20margin-top:4px;\x20padding:4px\x206px;\x20background:#f5f5f5;\x20border-radius:2px;\x20font-family:monospace;\x20font-size:11px;\x20color:#333;';for(const [r,s]of Object[U(0xd5)](m[U(0xa9)])){const t=document['createElement'](U(0xb0));t['style']['cssText']=U(0xa7),t['textContent']=r;const u=document['createElement'](U(0xb0));u['style'][U(0xee)]=U(0xfb),u[U(0x101)]='→';const w=document[U(0xbf)](U(0xb0));w[U(0xbe)]['cssText']='color:#0078d7;\x20font-weight:bold;',w['textContent']=String(s),q[U(0xb9)](t),q['appendChild'](u),q['appendChild'](w);}n['appendChild'](q);}n[U(0xd1)]=()=>{const W=U;if(n!==e)n[W(0xbe)][W(0xc9)]=W(0xa4);},n['onmouseleave']=()=>{const X=U;if(n!==e)n['style'][X(0xc9)]='';},n['onclick']=()=>j(n,m['name']),h['appendChild'](n);}const l=await this[U(0xaf)]['openConfirmation'](f,{'x':0x64,'y':0x64,'width':0x140,'height':0x12c,'parent':this});l&&d&&(this['convertersString']=d,this['_getDomElement']('namedConverterInput')['value']=d,this[U(0xd7)]());}['_refresh'](){requestAnimationFrame(()=>{this['_bindingsRefresh']();});}async[y(0x107)](){const Y=y;let c=new BindingsEditorHistoric(this[Y(0xfd)]);const d=new AbortController();c['title']='Edit\x20historic\x20binding\x20to:\x20'+this[Y(0x103)][Y(0xfc)];let e=await this[Y(0xaf)][Y(0xe2)](c,{'x':0x64,'y':0x64,'width':0x1a4,'height':0x1fe,'parent':this,'abortSignal':d['signal'],'disableResize':!![],'cancelText':'Remove'});!e?this['historic']=null:this[Y(0xfd)]=c['historic'],this[Y(0xd7)]();}[y(0xcc)](){const Z=y,c=document[Z(0xbf)](Z(0xb4));c[Z(0x99)]=BindingsEditor[Z(0xfa)]['length']>0x0?bindingsEditorHelpHtml['replace']('</div>\x0a</body>',BindingsEditor['helpSections']['join']('')+Z(0x102)):bindingsEditorHelpHtml,c['style']['cssText']='width:100%;\x20height:100%;\x20border:none;\x20display:block;',this[Z(0xaf)][Z(0xae)](c,{'title':Z(0xf0),'parent':this,'x':-0x294,'y':-0x50,'width':0x276,'height':0x244});}}customElements[y(0xdd)](BindingsEditor['is'],BindingsEditor);
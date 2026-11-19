const y=b;function a(){const a3=['onmouseleave','_signalsToObjectNames','map','innerHTML','cssText','showHistoric','height','text','createElement','specialType','none','_binding','div','50320FIAhHb','convertersString','signalProperty','_renderConverterList','signal','Duplicate','_showHelp','_signals','_instanceServiceContainer','_shell','5998855TuTwdn','invert','display','splice','_assignEvents','objectNames','openModal','_syncSignals','flex:1;\x20overflow-y:auto;\x20padding:4px;','width:12px;\x20height:12px;','selectedObject','openConfirmation','Remove','initialize','string','background','borderLeftColor','_restoreCachedInititalValues','converters','appendChild','...','style','namedConverterRow','expressionTwoWay','helpSections','6509580tGFCIu','_converterListContainer','_serviceContainer','node-projects-visualization-bindings-editor','length','className','color','historic','2992649lApyvM','_signalListContainer','_getDomElement','1VTVqio','entries','expression2way','140TFgqqH','mode','textContent','property','events','color:#0078d7;\x20font-weight:bold;','src','42708384uAurWZ','join','2993670weSnqK','color:#555;\x20font-size:11px;\x20margin-top:2px;','onclick','historicBtn','icons/delete.svg','_renderSignalList','_addConverter','condition','namedConverterInput','indexOf','name','value','signal\x20path\x20(prefix:\x20?\x20=\x20signal\x20name\x20in\x20screen\x20property,\x20??\x20=\x20screen\x20property\x20value,\x20?$\x20=\x20signal\x20object\x20in\x20screen\x20property,\x20?@\x20=\x20screen\x20attribute,\x20#\x20=\x20signal\x20name\x20in\x20target\x20property,\x20##\x20=\x20target\x20property\x20value,\x20#$\x20=\x20signal\x20object\x20in\x20target\x20property,\x20#@\x20=\x20target\x20attribute)','_selectForRow','converter','forEach','801cDYLHE','type','twoWayPossible','template','_bindingsRefresh','70KpTXdX','_bindingTarget','</div>\x0a</body>','historicLabel','slice','_parseObjectNames','signal\x20path','flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;','display:grid;\x20grid-template-columns:max-content\x20max-content\x201fr;\x20gap:1px\x206px;\x20margin-top:4px;\x20padding:4px\x206px;\x20background:#f5f5f5;\x20border-radius:2px;\x20font-family:monospace;\x20font-size:11px;\x20color:#333;','define','6YKCWbu','twoWay','img','_refresh','placeholder','span','helpBtn','Bindings\x20Editor\x20Help','expression','button','namedConverters','input','color:#555;\x20text-align:right;','icons/copy.svg','display:flex;\x20flex-direction:column;\x20height:100%;\x20box-sizing:border-box;\x20font-size:12px;','objectDoubleclicked','title','select\x20signal...','filter','oninput','52269OwEgyn','attribute','fullName','signal-icon-btn','push','signal-row'];a=function(){return a3;};return a();}(function(c,d){const x=b,e=c();while(!![]){try{const f=-parseInt(x(0x1a6))/0x1*(-parseInt(x(0x1b2))/0x2)+-parseInt(x(0x1e5))/0x3*(parseInt(x(0x1a9))/0x4)+-parseInt(x(0x202))/0x5*(parseInt(x(0x1d1))/0x6)+-parseInt(x(0x19b))/0x7+-parseInt(x(0x1f8))/0x8*(-parseInt(x(0x1c2))/0x9)+parseInt(x(0x1c7))/0xa*(-parseInt(x(0x1a3))/0xb)+parseInt(x(0x1b0))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xed3e4));import{BaseCustomWebComponentConstructorAppend,html,css}from'@node-projects/base-custom-webcomponent';function b(c,d){c=c-0x198;const e=a();let f=e[c];return f;}import{BindingMode,BindingTarget,assetsPath}from'@gokturk413/web-component-designer';import{BindingsEditorHistoric}from'./BindingsEditorHistoric.js';import{bindingsEditorHelpHtml}from'./BindingsEditorHelp.js';export class BindingsEditor extends BaseCustomWebComponentConstructorAppend{static [y(0x1c5)]=html`
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
        }`;static ['is']=y(0x19e);static ['properties']={'twoWayPossible':Boolean,'twoWay':Boolean,'expression':String,'events':String,'invert':Boolean,'historic':Object};[y(0x1c4)]=![];[y(0x1d2)]=![];['expression']='';['writeBackSignal']='';[y(0x199)]='';[y(0x1a2)];[y(0x207)]='';[y(0x1ad)]='';['invert']=![];[y(0x214)]=[];static ['namedConverters']=[];static [y(0x19a)]=[];[y(0x1f9)];get['converter'](){const z=y;if(this['convertersString'])return this['convertersString'];if(this[z(0x214)][z(0x19f)]>0x0)return Object['fromEntries'](this['converters'][z(0x1ed)](d=>[d['key'],d['value']]));return undefined;}['_property'];[y(0x1f6)];['_bindingTarget'];[y(0x19d)];[y(0x200)];[y(0x201)];[y(0x1ff)]=[];[y(0x1a4)];['_converterListContainer'];constructor(c,d,e,f,g,h,i={}){const A=y;super(),super[A(0x213)](),this['_property']=c,this[A(0x1f6)]=d,this[A(0x1c8)]=e,this['_serviceContainer']=f,this[A(0x200)]=g,this[A(0x201)]=h;i?.['namedConverters']===![]&&(this[A(0x1a5)](A(0x198))[A(0x217)][A(0x204)]='none');const j=this[A(0x1a5)](A(0x1b5));if(i?.['showHistoric']===![])j['style']['display']=A(0x1f5);else i?.['historicLabel']&&(j['textContent']=i[A(0x1ca)]);}['ready'](){const B=y;this['_parseAttributesToProperties'](),this[B(0x206)](),this['_signalListContainer']=this['_getDomElement']('signalListContainer'),this[B(0x19c)]=this['_getDomElement']('converterListContainer'),this['_getDomElement'](B(0x1d7))[B(0x1b4)]=()=>this['_showHelp']();if(BindingsEditor[B(0x1db)]['length']===0x0)this[B(0x1a5)]('namedConverterBrowse')['style'][B(0x204)]=B(0x1f5);this[B(0x1c4)]=![];if(this[B(0x1c8)]==BindingTarget[B(0x1ac)]||this[B(0x1c8)]==BindingTarget[B(0x1e6)])this[B(0x1c4)]=!![];if(this['_binding']){this[B(0x1d2)]=this['_binding'][B(0x1aa)]==BindingMode[B(0x1d2)],this[B(0x1d9)]=this[B(0x1f6)][B(0x1d9)],this['writeBackSignal']=this['_binding']['writeBackSignal'],this[B(0x199)]=this['_binding'][B(0x199)],this['historic']=this[B(0x1f6)]['historic'],this['invert']=this['_binding'][B(0x203)];if(this[B(0x1f6)]['bindableObjectNames'])this['objectNames']=this['_binding']['bindableObjectNames']['join'](';');if(this['_binding'][B(0x1c0)]){if(typeof this[B(0x1f6)]['converter']===B(0x210))this['convertersString']=this[B(0x1f6)]['converter'];else for(let d in this[B(0x1f6)][B(0x1c0)]){this[B(0x214)]['push']({'key':d,'value':this[B(0x1f6)][B(0x1c0)][d]});}}if(this['_binding']['changedEvents']&&this['_binding']['changedEvents']['length'])this[B(0x1ad)]=this[B(0x1f6)]['changedEvents']['join'](';');}if(this[B(0x1d9)]){let e=this['_getDomElement'](B(0x1d9));this[B(0x1d9)][B(0x1bb)]('\x0a')>=0x0&&(e['style']['height']=0x3*0x11+'px');}if(this[B(0x199)]){let f=this['_getDomElement'](B(0x1a8));this['expressionTwoWay']['indexOf']('\x0a')>=0x0&&(f[B(0x217)][B(0x1f1)]=0x3*0x11+'px');}this['_signals']=this['_parseObjectNames'](this[B(0x207)]);if(this[B(0x1ff)][B(0x19f)]===0x0)this['_signals'][B(0x1e9)]({'name':'','signal':''});this[B(0x1b7)](),this[B(0x1fb)](),this['_bindingsParse']();}[y(0x1cc)](c){const C=y;if(!c)return[];return c['split'](';')[C(0x1e3)](d=>d[C(0x19f)]>0x0)['map'](d=>{const D=C,e=d['indexOf'](':');if(e>0x0)return{'name':d['slice'](0x0,e),'signal':d[D(0x1cb)](e+0x1)};return{'name':'','signal':d};});}['_signalsToObjectNames'](){const E=y;return this['_signals'][E(0x1ed)](c=>c[E(0x1bc)]?c['name']+':'+c['signal']:c[E(0x1fc)])['join'](';');}['_renderSignalList'](){const F=y,c=this[F(0x1a4)];c[F(0x1ee)]='',this[F(0x1ff)]['forEach']((d,e)=>{const G=F,f=document['createElement'](G(0x1f7));f[G(0x1a0)]=G(0x1ea);const g=document['createElement']('input');g[G(0x1a0)]='signal-name-input',g[G(0x1d5)]='__'+e,g[G(0x1bd)]=d[G(0x1bc)],g[G(0x1e1)]='variable\x20name\x20used\x20in\x20the\x20formula\x20(defaults\x20to\x20__'+e+'\x20if\x20empty)',g['oninput']=()=>{const H=G;this['_signals'][e]['name']=g[H(0x1bd)],this[H(0x209)]();};const h=document['createElement'](G(0x1dc));h['className']='signal-path-input',h['value']=d[G(0x1fc)],h['placeholder']=G(0x1cd),h[G(0x1e1)]=G(0x1be),h[G(0x1e4)]=()=>{const I=G;this['_signals'][e]['signal']=h['value'],this[I(0x209)]();};const j=document[G(0x1f3)]('button');j[G(0x1a0)]=G(0x1e8),j[G(0x1e1)]=G(0x1fd);const k=document['createElement'](G(0x1d3));k[G(0x1af)]=assetsPath+G(0x1de),k['style'][G(0x1ef)]='width:12px;\x20height:12px;',j[G(0x215)](k),j[G(0x1b4)]=()=>{const J=G;this['_signals']['splice'](e+0x1,0x0,{...this[J(0x1ff)][e]}),this[J(0x209)](),this['_renderSignalList']();};const l=document[G(0x1f3)](G(0x1da));l['className']='signal-select-btn',l[G(0x1ab)]=G(0x216),l['title']='Browse\x20signal',l['onclick']=()=>this[G(0x1bf)](e,h);const m=document[G(0x1f3)](G(0x1da));m['className']=G(0x1e8),m['title']=G(0x20e);const n=document[G(0x1f3)]('img');n['src']=assetsPath+'icons/delete.svg',n[G(0x217)][G(0x1ef)]='width:12px;\x20height:12px;',m['appendChild'](n),m[G(0x1b4)]=()=>{const K=G;this[K(0x1ff)][K(0x205)](e,0x1),this[K(0x209)](),this[K(0x1b7)]();},f['appendChild'](g),f[G(0x215)](h),f['appendChild'](l),f[G(0x215)](j),f[G(0x215)](m),c['appendChild'](f);});}['_syncSignals'](){const L=y;this['objectNames']=this[L(0x1ec)](),this[L(0x1c6)]();}['_addSignal'](){const M=y;this[M(0x1ff)][M(0x1e9)]({'name':'','signal':''}),this['_renderSignalList']();}async[y(0x1bf)](c,d){const N=y;let e=this[N(0x201)]['createBindableObjectBrowser']();e[N(0x20f)](this['_serviceContainer'],this[N(0x200)],'binding'),e['title']=N(0x1e2);const f=new AbortController();e[N(0x1e0)]['on'](()=>{const O=N;f['abort']();let h='';if(e[O(0x20c)][O(0x1f4)]==O(0x1fa))h='?';else e['selectedObject']['bindabletype']===O(0x1ac)&&(h='??');this[O(0x1ff)][c]['signal']=h+e[O(0x20c)][O(0x1e7)],d['value']=this['_signals'][c][O(0x1fc)],this['_syncSignals']();});let g=await this[N(0x201)][N(0x20d)](e,{'x':0x64,'y':0x64,'width':0x190,'height':0x12c,'parent':this,'abortSignal':f['signal']});if(g){let h='';if(e[N(0x20c)][N(0x1f4)]=='signalProperty')h='?';else e[N(0x20c)]['bindabletype']===N(0x1ac)&&(h='??');this['_signals'][c]['signal']=h+e[N(0x20c)]['fullName'],d['value']=this['_signals'][c]['signal'],this['_syncSignals']();}}[y(0x1fb)](){const P=y,c=this[P(0x19c)];c['innerHTML']='';const d=this['_property']?.['type']==='color'?P(0x1a1):P(0x1f2);this[P(0x214)][P(0x1c1)]((e,f)=>{const Q=P,g=document[Q(0x1f3)]('div');g['className']='signal-row';const h=document['createElement']('input');h['style']['cssText']='flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;',h['value']=e['key'],h['placeholder']=Q(0x1b9),h['oninput']=()=>{const R=Q;this[R(0x214)][f]['key']=h['value'];};const j=document[Q(0x1f3)]('input');j[Q(0x1c3)]=d,j['style'][Q(0x1ef)]=Q(0x1ce),j[Q(0x1bd)]=e[Q(0x1bd)],j[Q(0x1d5)]=Q(0x1bd),j['oninput']=()=>{const S=Q;this[S(0x214)][f][S(0x1bd)]=j[S(0x1bd)];};const k=document['createElement'](Q(0x1da));k[Q(0x1a0)]=Q(0x1e8),k[Q(0x1e1)]=Q(0x1fd);const l=document['createElement']('img');l[Q(0x1af)]=assetsPath+'icons/copy.svg',l['style'][Q(0x1ef)]='width:12px;\x20height:12px;',k[Q(0x215)](l),k['onclick']=()=>{const T=Q;this['converters']['splice'](f+0x1,0x0,{...this[T(0x214)][f]}),this[T(0x1fb)]();};const m=document['createElement'](Q(0x1da));m[Q(0x1a0)]=Q(0x1e8),m['title']=Q(0x20e);const n=document['createElement'](Q(0x1d3));n[Q(0x1af)]=assetsPath+Q(0x1b6),n[Q(0x217)][Q(0x1ef)]=Q(0x20b),m[Q(0x215)](n),m[Q(0x1b4)]=()=>{const U=Q;this['converters'][U(0x205)](f,0x1),this[U(0x1fb)]();},g[Q(0x215)](h),g['appendChild'](j),g[Q(0x215)](k),g[Q(0x215)](m),c[Q(0x215)](g);});}[y(0x1b8)](){const V=y;this['converters'][V(0x1e9)]({'key':'','value':''}),this['_renderConverterList']();}async['_selectNamedConverter'](){const W=y,c=BindingsEditor[W(0x1db)];if(c[W(0x19f)]===0x0)return;let d='',e=null;const f=document['createElement'](W(0x1f7));f['style']['cssText']=W(0x1df);const g=document['createElement'](W(0x1f7));g[W(0x217)][W(0x1ef)]='padding:6px\x208px\x204px;\x20color:#666;\x20font-size:11px;\x20border-bottom:1px\x20solid\x20#e0e0e0;\x20flex-shrink:0;',g['textContent']='Select\x20a\x20converter\x20and\x20confirm\x20with\x20OK.',f[W(0x215)](g);const h=document['createElement']('div');h['style']['cssText']=W(0x20a),f['appendChild'](h);const i=m=>{const X=W;m['style'][X(0x211)]='',m['style']['borderLeftColor']='transparent';},j=(m,n)=>{const Y=W;if(e)i(e);e=m,m['style']['background']='#e8f4fd',m['style'][Y(0x212)]='#0078d7',d=n;};for(const m of c){const n=document['createElement']('div');n[W(0x217)]['cssText']='padding:5px\x206px\x205px\x209px;\x20cursor:pointer;\x20border-radius:3px;\x20border-left:3px\x20solid\x20transparent;\x20margin-bottom:2px;';const o=document['createElement']('div');o['style']['cssText']='font-family:monospace;\x20font-weight:bold;\x20color:#111;',o['textContent']=m['name'],n['appendChild'](o);if(m['description']){const p=document[W(0x1f3)]('div');p['style'][W(0x1ef)]=W(0x1b3),p['textContent']=m['description'],n[W(0x215)](p);}if(m['converter']&&Object['keys'](m['converter'])['length']>0x0){const q=document['createElement']('div');q[W(0x217)]['cssText']=W(0x1cf);for(const [r,s]of Object[W(0x1a7)](m[W(0x1c0)])){const t=document['createElement'](W(0x1d6));t[W(0x217)][W(0x1ef)]=W(0x1dd),t['textContent']=r;const u=document[W(0x1f3)](W(0x1d6));u['style']['cssText']='color:#aaa;',u['textContent']='→';const w=document['createElement']('span');w['style']['cssText']=W(0x1ae),w[W(0x1ab)]=String(s),q['appendChild'](t),q[W(0x215)](u),q[W(0x215)](w);}n['appendChild'](q);}n['onmouseenter']=()=>{const Z=W;if(n!==e)n['style'][Z(0x211)]='#f5f5f5';},n[W(0x1eb)]=()=>{const a0=W;if(n!==e)n['style'][a0(0x211)]='';},n['onclick']=()=>j(n,m['name']),h['appendChild'](n);}const l=await this[W(0x201)][W(0x20d)](f,{'x':0x64,'y':0x64,'width':0x140,'height':0x12c,'parent':this});l&&d&&(this['convertersString']=d,this['_getDomElement'](W(0x1ba))['value']=d,this['_bindingsRefresh']());}[y(0x1d4)](){requestAnimationFrame(()=>{this['_bindingsRefresh']();});}async[y(0x1f0)](){const a1=y;let c=new BindingsEditorHistoric(this['historic']);const d=new AbortController();c['title']='Edit\x20historic\x20binding\x20to:\x20'+this['_property']['name'];let e=await this[a1(0x201)][a1(0x20d)](c,{'x':0x64,'y':0x64,'width':0x1a4,'height':0x1fe,'parent':this,'abortSignal':d[a1(0x1fc)],'disableResize':!![],'cancelText':a1(0x20e)});!e?this[a1(0x1a2)]=null:this[a1(0x1a2)]=c[a1(0x1a2)],this['_bindingsRefresh']();}[y(0x1fe)](){const a2=y,c=document['createElement']('iframe');c['srcdoc']=BindingsEditor['helpSections'][a2(0x19f)]>0x0?bindingsEditorHelpHtml['replace'](a2(0x1c9),BindingsEditor['helpSections'][a2(0x1b1)]('')+'</div>\x0a</body>'):bindingsEditorHelpHtml,c['style']['cssText']='width:100%;\x20height:100%;\x20border:none;\x20display:block;',this['_shell'][a2(0x208)](c,{'title':a2(0x1d8),'parent':this,'x':-0x294,'y':-0x50,'width':0x276,'height':0x244});}}customElements[y(0x1d0)](BindingsEditor['is'],BindingsEditor);
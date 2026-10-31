const y=b;(function(c,d){const x=b,e=c();while(!![]){try{const f=parseInt(x(0x1b8))/0x1+parseInt(x(0x16c))/0x2+parseInt(x(0x1ac))/0x3*(parseInt(x(0x1bc))/0x4)+parseInt(x(0x181))/0x5+-parseInt(x(0x18b))/0x6*(-parseInt(x(0x19c))/0x7)+parseInt(x(0x15f))/0x8+-parseInt(x(0x169))/0x9*(parseInt(x(0x180))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd3510));import{BaseCustomWebComponentConstructorAppend,html,css}from'@node-projects/base-custom-webcomponent';function a(){const a3=['color:#555;\x20text-align:right;','converterListContainer','slice','text','_restoreCachedInititalValues','_parseObjectNames','_renderSignalList','fromEntries','entries','openModal','_binding','Bindings\x20Editor\x20Help','9903680qUQuHe','onmouseleave','twoWay','condition','specialType','font-family:monospace;\x20font-weight:bold;\x20color:#111;','srcdoc','button','property','_addSignal','9hliBFp','...','className','2390116QiFMAQ','innerHTML','createElement','_selectForRow','appendChild','Browse\x20signal','signal','_addConverter','converter','icons/copy.svg','twoWayPossible','_property','_shell','background','showHistoric','expressionTwoWay','_converterListContainer','color','expression','_bindingsRefresh','62635390YUaCxl','7770925wyjKPD','historicLabel','_parseAttributesToProperties','string','style','onclick','div','display:flex;\x20flex-direction:column;\x20height:100%;\x20box-sizing:border-box;\x20font-size:12px;','historic','display:grid;\x20grid-template-columns:max-content\x20max-content\x201fr;\x20gap:1px\x206px;\x20margin-top:4px;\x20padding:4px\x206px;\x20background:#f5f5f5;\x20border-radius:2px;\x20font-family:monospace;\x20font-size:11px;\x20color:#333;','17904PqAKFS','_signalListContainer','namedConverterBrowse','forEach','push','Remove','img','properties','objectDoubleclicked','Select\x20a\x20converter\x20and\x20confirm\x20with\x20OK.','flex:1;\x20overflow-y:auto;\x20padding:4px;','bindabletype','namedConverters','template','_showHelp','_serviceContainer','borderLeftColor','3661aGVtGw','map','_signals','type','objectNames','selectedObject','changedEvents','</div>\x0a</body>','flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;','Edit\x20historic\x20binding\x20to:\x20','oninput','convertersString','signal-row','display','writeBackSignal','name','236673blYuCT','textContent','key','placeholder','fullName','splice','onmouseenter','width:12px;\x20height:12px;','length','height','indexOf','helpSections','1107910btTrDB','icons/delete.svg','historicBtn','bindableObjectNames','24wQMINz','input','join','converters','openConfirmation','_getDomElement','signal-name-input','span','_bindingTarget','invert','title','cssText','_syncSignals','transparent','none','signal-icon-btn','value'];a=function(){return a3;};return a();}import{BindingMode,BindingTarget,assetsPath}from'@gokturk413/web-component-designer';function b(c,d){c=c-0x153;const e=a();let f=e[c];return f;}import{BindingsEditorHistoric}from'./BindingsEditorHistoric.js';import{bindingsEditorHelpHtml}from'./BindingsEditorHelp.js';export class BindingsEditor extends BaseCustomWebComponentConstructorAppend{static [y(0x198)]=html`
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
        </div>`;static [y(0x185)]=css`
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
        }`;static ['is']='node-projects-visualization-bindings-editor';static [y(0x192)]={'twoWayPossible':Boolean,'twoWay':Boolean,'expression':String,'events':String,'invert':Boolean,'historic':Object};[y(0x176)]=![];['twoWay']=![];['expression']='';[y(0x1aa)]='';[y(0x17b)]='';[y(0x189)];[y(0x1a0)]='';['events']='';['invert']=![];['converters']=[];static [y(0x197)]=[];static ['helpSections']=[];['convertersString'];get[y(0x174)](){const z=y;if(this['convertersString'])return this[z(0x1a7)];if(this[z(0x1bf)][z(0x1b4)]>0x0)return Object[z(0x15a)](this['converters'][z(0x19d)](d=>[d[z(0x1ae)],d['value']]));return undefined;}[y(0x177)];[y(0x15d)];[y(0x1c4)];[y(0x19a)];['_instanceServiceContainer'];[y(0x178)];['_signals']=[];['_signalListContainer'];[y(0x17c)];constructor(c,d,e,f,g,h,i={}){const A=y;super(),super[A(0x157)](),this['_property']=c,this[A(0x15d)]=d,this[A(0x1c4)]=e,this['_serviceContainer']=f,this['_instanceServiceContainer']=g,this[A(0x178)]=h;i?.['namedConverters']===![]&&(this['_getDomElement']('namedConverterRow')[A(0x185)]['display']='none');const j=this[A(0x1c1)](A(0x1ba));if(i?.[A(0x17a)]===![])j['style'][A(0x1a9)]=A(0x1ca);else i?.[A(0x182)]&&(j['textContent']=i['historicLabel']);}['ready'](){const B=y;this[B(0x183)](),this['_assignEvents'](),this[B(0x18c)]=this['_getDomElement']('signalListContainer'),this[B(0x17c)]=this[B(0x1c1)](B(0x154)),this['_getDomElement']('helpBtn')['onclick']=()=>this[B(0x199)]();if(BindingsEditor[B(0x197)]['length']===0x0)this['_getDomElement'](B(0x18d))['style']['display']=B(0x1ca);this[B(0x176)]=![];if(this['_bindingTarget']==BindingTarget['property']||this[B(0x1c4)]==BindingTarget['attribute'])this[B(0x176)]=!![];if(this['_binding']){this[B(0x161)]=this[B(0x15d)]['mode']==BindingMode['twoWay'],this[B(0x17e)]=this['_binding']['expression'],this['writeBackSignal']=this[B(0x15d)]['writeBackSignal'],this[B(0x17b)]=this[B(0x15d)]['expressionTwoWay'],this['historic']=this[B(0x15d)][B(0x189)],this[B(0x1c5)]=this[B(0x15d)][B(0x1c5)];if(this['_binding'][B(0x1bb)])this['objectNames']=this['_binding']['bindableObjectNames']['join'](';');if(this['_binding'][B(0x174)]){if(typeof this[B(0x15d)][B(0x174)]===B(0x184))this[B(0x1a7)]=this[B(0x15d)][B(0x174)];else for(let d in this[B(0x15d)][B(0x174)]){this['converters']['push']({'key':d,'value':this['_binding'][B(0x174)][d]});}}if(this['_binding']['changedEvents']&&this[B(0x15d)][B(0x1a2)][B(0x1b4)])this['events']=this[B(0x15d)][B(0x1a2)][B(0x1be)](';');}if(this['expression']){let e=this['_getDomElement'](B(0x17e));this['expression'][B(0x1b6)]('\x0a')>=0x0&&(e['style']['height']=0x3*0x11+'px');}if(this[B(0x17b)]){let f=this[B(0x1c1)]('expression2way');this['expressionTwoWay']['indexOf']('\x0a')>=0x0&&(f[B(0x185)][B(0x1b5)]=0x3*0x11+'px');}this[B(0x19e)]=this[B(0x158)](this[B(0x1a0)]);if(this['_signals']['length']===0x0)this[B(0x19e)]['push']({'name':'','signal':''});this['_renderSignalList'](),this['_renderConverterList'](),this['_bindingsParse']();}[y(0x158)](c){const C=y;if(!c)return[];return c['split'](';')['filter'](d=>d[C(0x1b4)]>0x0)[C(0x19d)](d=>{const D=C,e=d['indexOf'](':');if(e>0x0)return{'name':d[D(0x155)](0x0,e),'signal':d['slice'](e+0x1)};return{'name':'','signal':d};});}['_signalsToObjectNames'](){const E=y;return this[E(0x19e)][E(0x19d)](c=>c[E(0x1ab)]?c[E(0x1ab)]+':'+c['signal']:c['signal'])[E(0x1be)](';');}[y(0x159)](){const F=y,c=this[F(0x18c)];c[F(0x16d)]='',this['_signals'][F(0x18e)]((d,e)=>{const G=F,f=document[G(0x16e)](G(0x187));f[G(0x16b)]=G(0x1a8);const g=document['createElement']('input');g[G(0x16b)]=G(0x1c2),g['placeholder']='__'+e,g[G(0x1cc)]=d[G(0x1ab)],g[G(0x1c6)]='variable\x20name\x20used\x20in\x20the\x20formula\x20(defaults\x20to\x20__'+e+'\x20if\x20empty)',g[G(0x1a6)]=()=>{const H=G;this[H(0x19e)][e][H(0x1ab)]=g[H(0x1cc)],this['_syncSignals']();};const h=document[G(0x16e)](G(0x1bd));h['className']='signal-path-input',h['value']=d['signal'],h[G(0x1af)]='signal\x20path',h['title']='signal\x20path\x20(prefix:\x20?\x20=\x20signal\x20name\x20in\x20screen\x20property,\x20??\x20=\x20screen\x20property\x20value,\x20?$\x20=\x20signal\x20object\x20in\x20screen\x20property,\x20?@\x20=\x20screen\x20attribute,\x20#\x20=\x20signal\x20name\x20in\x20target\x20property,\x20##\x20=\x20target\x20property\x20value,\x20#$\x20=\x20signal\x20object\x20in\x20target\x20property,\x20#@\x20=\x20target\x20attribute)',h['oninput']=()=>{const I=G;this['_signals'][e]['signal']=h[I(0x1cc)],this['_syncSignals']();};const j=document[G(0x16e)]('button');j[G(0x16b)]=G(0x1cb),j[G(0x1c6)]='Duplicate';const k=document['createElement'](G(0x191));k['src']=assetsPath+'icons/copy.svg',k['style'][G(0x1c7)]=G(0x1b3),j['appendChild'](k),j[G(0x186)]=()=>{const J=G;this['_signals']['splice'](e+0x1,0x0,{...this[J(0x19e)][e]}),this[J(0x1c8)](),this[J(0x159)]();};const l=document['createElement']('button');l['className']='signal-select-btn',l['textContent']=G(0x16a),l['title']=G(0x171),l['onclick']=()=>this[G(0x16f)](e,h);const m=document[G(0x16e)](G(0x166));m['className']=G(0x1cb),m[G(0x1c6)]=G(0x190);const n=document['createElement'](G(0x191));n['src']=assetsPath+G(0x1b9),n['style'][G(0x1c7)]=G(0x1b3),m['appendChild'](n),m['onclick']=()=>{const K=G;this['_signals']['splice'](e,0x1),this[K(0x1c8)](),this[K(0x159)]();},f[G(0x170)](g),f[G(0x170)](h),f[G(0x170)](l),f[G(0x170)](j),f[G(0x170)](m),c[G(0x170)](f);});}['_syncSignals'](){const L=y;this[L(0x1a0)]=this['_signalsToObjectNames'](),this['_bindingsRefresh']();}[y(0x168)](){this['_signals']['push']({'name':'','signal':''}),this['_renderSignalList']();}async['_selectForRow'](c,d){const M=y;let e=this['_shell']['createBindableObjectBrowser']();e['initialize'](this[M(0x19a)],this['_instanceServiceContainer'],'binding'),e[M(0x1c6)]='select\x20signal...';const f=new AbortController();e[M(0x193)]['on'](()=>{const N=M;f['abort']();let h='';if(e[N(0x1a1)][N(0x163)]=='signalProperty')h='?';else e[N(0x1a1)]['bindabletype']===N(0x167)&&(h='??');this['_signals'][c]['signal']=h+e[N(0x1a1)]['fullName'],d[N(0x1cc)]=this['_signals'][c][N(0x172)],this['_syncSignals']();});let g=await this['_shell'][M(0x1c0)](e,{'x':0x64,'y':0x64,'width':0x190,'height':0x12c,'parent':this,'abortSignal':f['signal']});if(g){let h='';if(e[M(0x1a1)]['specialType']=='signalProperty')h='?';else e['selectedObject'][M(0x196)]==='property'&&(h='??');this['_signals'][c][M(0x172)]=h+e[M(0x1a1)][M(0x1b0)],d[M(0x1cc)]=this['_signals'][c][M(0x172)],this[M(0x1c8)]();}}['_renderConverterList'](){const O=y,c=this['_converterListContainer'];c['innerHTML']='';const d=this[O(0x177)]?.['type']==='color'?O(0x17d):O(0x156);this['converters'][O(0x18e)]((e,f)=>{const P=O,g=document[P(0x16e)]('div');g['className']=P(0x1a8);const h=document['createElement'](P(0x1bd));h[P(0x185)][P(0x1c7)]='flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;',h[P(0x1cc)]=e[P(0x1ae)],h['placeholder']=P(0x162),h[P(0x1a6)]=()=>{const Q=P;this[Q(0x1bf)][f]['key']=h[Q(0x1cc)];};const j=document['createElement']('input');j[P(0x19f)]=d,j[P(0x185)]['cssText']=P(0x1a4),j['value']=e['value'],j['placeholder']='value',j[P(0x1a6)]=()=>{const R=P;this[R(0x1bf)][f][R(0x1cc)]=j[R(0x1cc)];};const k=document[P(0x16e)]('button');k[P(0x16b)]='signal-icon-btn',k['title']='Duplicate';const l=document['createElement'](P(0x191));l['src']=assetsPath+P(0x175),l[P(0x185)]['cssText']='width:12px;\x20height:12px;',k['appendChild'](l),k[P(0x186)]=()=>{const S=P;this['converters'][S(0x1b1)](f+0x1,0x0,{...this[S(0x1bf)][f]}),this['_renderConverterList']();};const m=document[P(0x16e)]('button');m['className']=P(0x1cb),m['title']=P(0x190);const n=document[P(0x16e)]('img');n['src']=assetsPath+P(0x1b9),n[P(0x185)][P(0x1c7)]=P(0x1b3),m[P(0x170)](n),m['onclick']=()=>{const T=P;this['converters'][T(0x1b1)](f,0x1),this['_renderConverterList']();},g[P(0x170)](h),g['appendChild'](j),g['appendChild'](k),g[P(0x170)](m),c['appendChild'](g);});}[y(0x173)](){const U=y;this['converters'][U(0x18f)]({'key':'','value':''}),this['_renderConverterList']();}async['_selectNamedConverter'](){const V=y,c=BindingsEditor['namedConverters'];if(c[V(0x1b4)]===0x0)return;let d='',e=null;const f=document['createElement'](V(0x187));f[V(0x185)][V(0x1c7)]=V(0x188);const g=document[V(0x16e)](V(0x187));g[V(0x185)]['cssText']='padding:6px\x208px\x204px;\x20color:#666;\x20font-size:11px;\x20border-bottom:1px\x20solid\x20#e0e0e0;\x20flex-shrink:0;',g[V(0x1ad)]=V(0x194),f['appendChild'](g);const h=document['createElement']('div');h['style'][V(0x1c7)]=V(0x195),f[V(0x170)](h);const i=m=>{const W=V;m[W(0x185)]['background']='',m[W(0x185)][W(0x19b)]=W(0x1c9);},j=(m,n)=>{const X=V;if(e)i(e);e=m,m[X(0x185)]['background']='#e8f4fd',m['style'][X(0x19b)]='#0078d7',d=n;};for(const m of c){const n=document[V(0x16e)]('div');n['style'][V(0x1c7)]='padding:5px\x206px\x205px\x209px;\x20cursor:pointer;\x20border-radius:3px;\x20border-left:3px\x20solid\x20transparent;\x20margin-bottom:2px;';const o=document['createElement']('div');o['style']['cssText']=V(0x164),o[V(0x1ad)]=m['name'],n[V(0x170)](o);if(m['description']){const p=document[V(0x16e)]('div');p[V(0x185)]['cssText']='color:#555;\x20font-size:11px;\x20margin-top:2px;',p[V(0x1ad)]=m['description'],n[V(0x170)](p);}if(m['converter']&&Object['keys'](m[V(0x174)])['length']>0x0){const q=document['createElement'](V(0x187));q[V(0x185)]['cssText']=V(0x18a);for(const [r,s]of Object[V(0x15b)](m[V(0x174)])){const t=document[V(0x16e)]('span');t['style'][V(0x1c7)]=V(0x153),t['textContent']=r;const u=document['createElement'](V(0x1c3));u[V(0x185)]['cssText']='color:#aaa;',u[V(0x1ad)]='→';const w=document['createElement']('span');w[V(0x185)][V(0x1c7)]='color:#0078d7;\x20font-weight:bold;',w['textContent']=String(s),q[V(0x170)](t),q[V(0x170)](u),q[V(0x170)](w);}n['appendChild'](q);}n[V(0x1b2)]=()=>{const Y=V;if(n!==e)n[Y(0x185)]['background']='#f5f5f5';},n[V(0x160)]=()=>{const Z=V;if(n!==e)n[Z(0x185)][Z(0x179)]='';},n['onclick']=()=>j(n,m['name']),h['appendChild'](n);}const l=await this['_shell']['openConfirmation'](f,{'x':0x64,'y':0x64,'width':0x140,'height':0x12c,'parent':this});l&&d&&(this['convertersString']=d,this['_getDomElement']('namedConverterInput')['value']=d,this['_bindingsRefresh']());}['_refresh'](){requestAnimationFrame(()=>{const a0=b;this[a0(0x17f)]();});}async['showHistoric'](){const a1=y;let c=new BindingsEditorHistoric(this[a1(0x189)]);const d=new AbortController();c[a1(0x1c6)]=a1(0x1a5)+this[a1(0x177)][a1(0x1ab)];let e=await this[a1(0x178)][a1(0x1c0)](c,{'x':0x64,'y':0x64,'width':0x1a4,'height':0x1fe,'parent':this,'abortSignal':d[a1(0x172)],'disableResize':!![],'cancelText':a1(0x190)});!e?this[a1(0x189)]=null:this['historic']=c[a1(0x189)],this['_bindingsRefresh']();}[y(0x199)](){const a2=y,c=document['createElement']('iframe');c[a2(0x165)]=BindingsEditor[a2(0x1b7)][a2(0x1b4)]>0x0?bindingsEditorHelpHtml['replace'](a2(0x1a3),BindingsEditor[a2(0x1b7)][a2(0x1be)]('')+'</div>\x0a</body>'):bindingsEditorHelpHtml,c[a2(0x185)][a2(0x1c7)]='width:100%;\x20height:100%;\x20border:none;\x20display:block;',this['_shell'][a2(0x15c)](c,{'title':a2(0x15e),'parent':this,'x':-0x294,'y':-0x50,'width':0x276,'height':0x244});}}customElements['define'](BindingsEditor['is'],BindingsEditor);
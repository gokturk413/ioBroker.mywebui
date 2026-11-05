const y=b;function a(){const a2=['button','_property','display','selectedObject','signal-path-input','3840275rnAwIa','className','_instanceServiceContainer','openModal','icons/delete.svg','bindabletype','indexOf','151072LRzmkY','Bindings\x20Editor\x20Help','</div>\x0a</body>','_syncSignals','template','onclick','slice','historicLabel','oninput','entries','expression','value','select\x20signal...','_bindingsParse','_renderConverterList','162THcbFf','signalProperty','#f5f5f5','signal-select-btn','_signalListContainer','padding:5px\x206px\x205px\x209px;\x20cursor:pointer;\x20border-radius:3px;\x20border-left:3px\x20solid\x20transparent;\x20margin-bottom:2px;','helpSections','historicBtn','div','style','font-family:monospace;\x20font-weight:bold;\x20color:#111;','changedEvents','display:flex;\x20flex-direction:column;\x20height:100%;\x20box-sizing:border-box;\x20font-size:12px;','property','_serviceContainer','_shell','color:#aaa;','abort','_parseAttributesToProperties','showHistoric','Edit\x20historic\x20binding\x20to:\x20','namedConverters','appendChild','replace','name','_binding','6VLpjDi','signal-row','map','background','title','_converterListContainer','none','converter','invert','signal','fromEntries','expressionTwoWay','936746YwHNWv','width:12px;\x20height:12px;','#0078d7','_bindingsRefresh','splice','388115jcPhth','historic','height','flex:1;\x20overflow-y:auto;\x20padding:4px;','converterListContainer','textContent','\x20if\x20empty)','4210423bMMtdS','forEach','img','twoWay','join','namedConverterBrowse','Browse\x20signal','createElement','span','9564610XHpAAG','type','cssText','_signals','twoWayPossible','converters','openConfirmation','description','_renderSignalList','3915fcEtMs','_bindingTarget','signal-icon-btn','borderLeftColor','define','iframe','text','fullName','length','_selectNamedConverter','key','11rtAevV','1852WCNazl','split','push','input','transparent','convertersString','node-projects-visualization-bindings-editor','objectNames','_getDomElement','initialize','placeholder','src'];a=function(){return a2;};return a();}(function(c,d){const x=b,e=c();while(!![]){try{const f=parseInt(x(0xf4))/0x1+-parseInt(x(0xef))/0x2+-parseInt(x(0x10d))/0x3*(parseInt(x(0x119))/0x4)+parseInt(x(0xb3))/0x5*(-parseInt(x(0xe3))/0x6)+parseInt(x(0xfb))/0x7+-parseInt(x(0xba))/0x8*(-parseInt(x(0xc9))/0x9)+-parseInt(x(0x104))/0xa*(-parseInt(x(0x118))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6cb96));function b(c,d){c=c-0xb0;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,html,css}from'@node-projects/base-custom-webcomponent';import{BindingMode,BindingTarget,assetsPath}from'@gokturk413/web-component-designer';import{BindingsEditorHistoric}from'./BindingsEditorHistoric.js';import{bindingsEditorHelpHtml}from'./BindingsEditorHelp.js';export class BindingsEditor extends BaseCustomWebComponentConstructorAppend{static [y(0xbe)]=html`
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
        }`;static ['is']=y(0x11f);static ['properties']={'twoWayPossible':Boolean,'twoWay':Boolean,'expression':String,'events':String,'invert':Boolean,'historic':Object};[y(0x108)]=![];[y(0xfe)]=![];[y(0xc4)]='';['writeBackSignal']='';['expressionTwoWay']='';['historic'];[y(0x120)]='';['events']='';[y(0xeb)]=![];['converters']=[];static ['namedConverters']=[];static [y(0xcf)]=[];['convertersString'];get['converter'](){const z=y;if(this['convertersString'])return this[z(0x11e)];if(this[z(0x109)]['length']>0x0)return Object[z(0xed)](this['converters'][z(0xe5)](d=>[d[z(0x117)],d[z(0xc5)]]));return undefined;}[y(0x126)];['_binding'];['_bindingTarget'];[y(0xd7)];[y(0xb5)];[y(0xd8)];[y(0x107)]=[];[y(0xcd)];[y(0xe8)];constructor(c,d,e,f,g,h,i={}){const A=y;super(),super['_restoreCachedInititalValues'](),this[A(0x126)]=c,this['_binding']=d,this['_bindingTarget']=e,this[A(0xd7)]=f,this['_instanceServiceContainer']=g,this['_shell']=h;i?.['namedConverters']===![]&&(this['_getDomElement']('namedConverterRow')[A(0xd2)]['display']='none');const j=this['_getDomElement'](A(0xd0));if(i?.[A(0xdc)]===![])j['style'][A(0xb0)]='none';else i?.['historicLabel']&&(j[A(0xf9)]=i[A(0xc1)]);}['ready'](){const B=y;this[B(0xdb)](),this['_assignEvents'](),this[B(0xcd)]=this['_getDomElement']('signalListContainer'),this[B(0xe8)]=this['_getDomElement'](B(0xf8)),this[B(0x121)]('helpBtn')['onclick']=()=>this['_showHelp']();if(BindingsEditor[B(0xde)][B(0x115)]===0x0)this[B(0x121)](B(0x100))[B(0xd2)][B(0xb0)]=B(0xe9);this[B(0x108)]=![];if(this[B(0x10e)]==BindingTarget[B(0xd6)]||this[B(0x10e)]==BindingTarget['attribute'])this['twoWayPossible']=!![];if(this['_binding']){this[B(0xfe)]=this[B(0xe2)]['mode']==BindingMode['twoWay'],this[B(0xc4)]=this[B(0xe2)]['expression'],this['writeBackSignal']=this['_binding']['writeBackSignal'],this[B(0xee)]=this[B(0xe2)]['expressionTwoWay'],this['historic']=this['_binding']['historic'],this[B(0xeb)]=this[B(0xe2)]['invert'];if(this['_binding']['bindableObjectNames'])this['objectNames']=this['_binding']['bindableObjectNames'][B(0xff)](';');if(this[B(0xe2)][B(0xea)]){if(typeof this[B(0xe2)][B(0xea)]==='string')this['convertersString']=this[B(0xe2)][B(0xea)];else for(let d in this[B(0xe2)][B(0xea)]){this['converters'][B(0x11b)]({'key':d,'value':this['_binding'][B(0xea)][d]});}}if(this[B(0xe2)][B(0xd4)]&&this['_binding'][B(0xd4)][B(0x115)])this['events']=this['_binding']['changedEvents'][B(0xff)](';');}if(this['expression']){let e=this[B(0x121)]('expression');this['expression']['indexOf']('\x0a')>=0x0&&(e[B(0xd2)][B(0xf6)]=0x3*0x11+'px');}if(this[B(0xee)]){let f=this[B(0x121)]('expression2way');this['expressionTwoWay'][B(0xb9)]('\x0a')>=0x0&&(f[B(0xd2)][B(0xf6)]=0x3*0x11+'px');}this[B(0x107)]=this['_parseObjectNames'](this[B(0x120)]);if(this['_signals']['length']===0x0)this['_signals'][B(0x11b)]({'name':'','signal':''});this[B(0x10c)](),this[B(0xc8)](),this[B(0xc7)]();}['_parseObjectNames'](c){const C=y;if(!c)return[];return c[C(0x11a)](';')['filter'](d=>d[C(0x115)]>0x0)['map'](d=>{const D=C,e=d['indexOf'](':');if(e>0x0)return{'name':d['slice'](0x0,e),'signal':d[D(0xc0)](e+0x1)};return{'name':'','signal':d};});}['_signalsToObjectNames'](){const E=y;return this[E(0x107)][E(0xe5)](c=>c[E(0xe1)]?c[E(0xe1)]+':'+c[E(0xec)]:c[E(0xec)])[E(0xff)](';');}['_renderSignalList'](){const F=y,c=this[F(0xcd)];c['innerHTML']='',this[F(0x107)][F(0xfc)]((d,e)=>{const G=F,f=document[G(0x102)]('div');f[G(0xb4)]='signal-row';const g=document[G(0x102)]('input');g['className']='signal-name-input',g['placeholder']='__'+e,g[G(0xc5)]=d[G(0xe1)],g['title']='variable\x20name\x20used\x20in\x20the\x20formula\x20(defaults\x20to\x20__'+e+G(0xfa),g['oninput']=()=>{const H=G;this['_signals'][e][H(0xe1)]=g['value'],this['_syncSignals']();};const h=document['createElement'](G(0x11c));h['className']=G(0xb2),h[G(0xc5)]=d['signal'],h[G(0x123)]='signal\x20path',h['title']='signal\x20path\x20(prefix:\x20?\x20=\x20signal\x20name\x20in\x20screen\x20property,\x20??\x20=\x20screen\x20property\x20value,\x20?$\x20=\x20signal\x20object\x20in\x20screen\x20property,\x20?@\x20=\x20screen\x20attribute,\x20#\x20=\x20signal\x20name\x20in\x20target\x20property,\x20##\x20=\x20target\x20property\x20value,\x20#$\x20=\x20signal\x20object\x20in\x20target\x20property,\x20#@\x20=\x20target\x20attribute)',h['oninput']=()=>{const I=G;this[I(0x107)][e]['signal']=h['value'],this['_syncSignals']();};const j=document['createElement'](G(0x125));j[G(0xb4)]=G(0x10f),j['title']='Duplicate';const k=document['createElement']('img');k[G(0x124)]=assetsPath+'icons/copy.svg',k[G(0xd2)]['cssText']='width:12px;\x20height:12px;',j[G(0xdf)](k),j['onclick']=()=>{const J=G;this['_signals'][J(0xf3)](e+0x1,0x0,{...this['_signals'][e]}),this['_syncSignals'](),this['_renderSignalList']();};const l=document['createElement']('button');l[G(0xb4)]=G(0xcc),l['textContent']='...',l['title']=G(0x101),l[G(0xbf)]=()=>this['_selectForRow'](e,h);const m=document['createElement']('button');m['className']=G(0x10f),m[G(0xe7)]='Remove';const n=document[G(0x102)](G(0xfd));n['src']=assetsPath+G(0xb7),n[G(0xd2)][G(0x106)]=G(0xf0),m[G(0xdf)](n),m['onclick']=()=>{const K=G;this[K(0x107)]['splice'](e,0x1),this['_syncSignals'](),this[K(0x10c)]();},f['appendChild'](g),f[G(0xdf)](h),f['appendChild'](l),f['appendChild'](j),f['appendChild'](m),c['appendChild'](f);});}['_syncSignals'](){const L=y;this['objectNames']=this['_signalsToObjectNames'](),this[L(0xf2)]();}['_addSignal'](){const M=y;this['_signals'][M(0x11b)]({'name':'','signal':''}),this['_renderSignalList']();}async['_selectForRow'](c,d){const N=y;let e=this['_shell']['createBindableObjectBrowser']();e[N(0x122)](this[N(0xd7)],this[N(0xb5)],'binding'),e[N(0xe7)]=N(0xc6);const f=new AbortController();e['objectDoubleclicked']['on'](()=>{const O=N;f[O(0xda)]();let h='';if(e[O(0xb1)]['specialType']=='signalProperty')h='?';else e[O(0xb1)]['bindabletype']==='property'&&(h='??');this['_signals'][c][O(0xec)]=h+e['selectedObject']['fullName'],d['value']=this['_signals'][c][O(0xec)],this['_syncSignals']();});let g=await this[N(0xd8)][N(0x10a)](e,{'x':0x64,'y':0x64,'width':0x190,'height':0x12c,'parent':this,'abortSignal':f[N(0xec)]});if(g){let h='';if(e['selectedObject']['specialType']==N(0xca))h='?';else e['selectedObject'][N(0xb8)]===N(0xd6)&&(h='??');this[N(0x107)][c]['signal']=h+e['selectedObject'][N(0x114)],d['value']=this['_signals'][c]['signal'],this[N(0xbd)]();}}[y(0xc8)](){const P=y,c=this[P(0xe8)];c['innerHTML']='';const d=this[P(0x126)]?.['type']==='color'?'color':P(0x113);this['converters'][P(0xfc)]((e,f)=>{const Q=P,g=document['createElement'](Q(0xd1));g[Q(0xb4)]=Q(0xe4);const h=document[Q(0x102)]('input');h['style'][Q(0x106)]='flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;',h[Q(0xc5)]=e[Q(0x117)],h['placeholder']='condition',h[Q(0xc2)]=()=>{const R=Q;this['converters'][f]['key']=h[R(0xc5)];};const j=document['createElement']('input');j[Q(0x105)]=d,j['style']['cssText']='flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;',j[Q(0xc5)]=e[Q(0xc5)],j[Q(0x123)]='value',j['oninput']=()=>{this['converters'][f]['value']=j['value'];};const k=document['createElement'](Q(0x125));k['className']=Q(0x10f),k[Q(0xe7)]='Duplicate';const l=document['createElement']('img');l['src']=assetsPath+'icons/copy.svg',l[Q(0xd2)]['cssText']=Q(0xf0),k['appendChild'](l),k['onclick']=()=>{const S=Q;this[S(0x109)][S(0xf3)](f+0x1,0x0,{...this[S(0x109)][f]}),this[S(0xc8)]();};const m=document['createElement']('button');m['className']=Q(0x10f),m['title']='Remove';const n=document['createElement']('img');n['src']=assetsPath+Q(0xb7),n[Q(0xd2)][Q(0x106)]=Q(0xf0),m[Q(0xdf)](n),m['onclick']=()=>{const T=Q;this[T(0x109)]['splice'](f,0x1),this[T(0xc8)]();},g['appendChild'](h),g['appendChild'](j),g['appendChild'](k),g['appendChild'](m),c['appendChild'](g);});}['_addConverter'](){const U=y;this[U(0x109)][U(0x11b)]({'key':'','value':''}),this[U(0xc8)]();}async[y(0x116)](){const V=y,c=BindingsEditor['namedConverters'];if(c[V(0x115)]===0x0)return;let d='',e=null;const f=document['createElement'](V(0xd1));f[V(0xd2)]['cssText']=V(0xd5);const g=document['createElement']('div');g['style'][V(0x106)]='padding:6px\x208px\x204px;\x20color:#666;\x20font-size:11px;\x20border-bottom:1px\x20solid\x20#e0e0e0;\x20flex-shrink:0;',g['textContent']='Select\x20a\x20converter\x20and\x20confirm\x20with\x20OK.',f['appendChild'](g);const h=document['createElement'](V(0xd1));h[V(0xd2)][V(0x106)]=V(0xf7),f[V(0xdf)](h);const i=m=>{const W=V;m[W(0xd2)][W(0xe6)]='',m[W(0xd2)][W(0x110)]=W(0x11d);},j=(m,n)=>{const X=V;if(e)i(e);e=m,m[X(0xd2)][X(0xe6)]='#e8f4fd',m['style']['borderLeftColor']=X(0xf1),d=n;};for(const m of c){const n=document[V(0x102)]('div');n['style'][V(0x106)]=V(0xce);const o=document[V(0x102)](V(0xd1));o[V(0xd2)]['cssText']=V(0xd3),o[V(0xf9)]=m['name'],n[V(0xdf)](o);if(m[V(0x10b)]){const p=document[V(0x102)]('div');p['style']['cssText']='color:#555;\x20font-size:11px;\x20margin-top:2px;',p[V(0xf9)]=m[V(0x10b)],n['appendChild'](p);}if(m[V(0xea)]&&Object['keys'](m[V(0xea)])[V(0x115)]>0x0){const q=document['createElement'](V(0xd1));q['style'][V(0x106)]='display:grid;\x20grid-template-columns:max-content\x20max-content\x201fr;\x20gap:1px\x206px;\x20margin-top:4px;\x20padding:4px\x206px;\x20background:#f5f5f5;\x20border-radius:2px;\x20font-family:monospace;\x20font-size:11px;\x20color:#333;';for(const [r,s]of Object[V(0xc3)](m['converter'])){const t=document['createElement']('span');t['style']['cssText']='color:#555;\x20text-align:right;',t['textContent']=r;const u=document[V(0x102)](V(0x103));u['style']['cssText']=V(0xd9),u['textContent']='→';const w=document[V(0x102)]('span');w['style']['cssText']='color:#0078d7;\x20font-weight:bold;',w['textContent']=String(s),q[V(0xdf)](t),q[V(0xdf)](u),q['appendChild'](w);}n[V(0xdf)](q);}n['onmouseenter']=()=>{const Y=V;if(n!==e)n['style'][Y(0xe6)]=Y(0xcb);},n['onmouseleave']=()=>{if(n!==e)n['style']['background']='';},n[V(0xbf)]=()=>j(n,m['name']),h[V(0xdf)](n);}const l=await this['_shell'][V(0x10a)](f,{'x':0x64,'y':0x64,'width':0x140,'height':0x12c,'parent':this});l&&d&&(this[V(0x11e)]=d,this['_getDomElement']('namedConverterInput')['value']=d,this[V(0xf2)]());}['_refresh'](){requestAnimationFrame(()=>{const Z=b;this[Z(0xf2)]();});}async[y(0xdc)](){const a0=y;let c=new BindingsEditorHistoric(this['historic']);const d=new AbortController();c[a0(0xe7)]=a0(0xdd)+this[a0(0x126)]['name'];let e=await this[a0(0xd8)][a0(0x10a)](c,{'x':0x64,'y':0x64,'width':0x1a4,'height':0x1fe,'parent':this,'abortSignal':d[a0(0xec)],'disableResize':!![],'cancelText':'Remove'});!e?this['historic']=null:this['historic']=c[a0(0xf5)],this['_bindingsRefresh']();}['_showHelp'](){const a1=y,c=document['createElement'](a1(0x112));c['srcdoc']=BindingsEditor[a1(0xcf)][a1(0x115)]>0x0?bindingsEditorHelpHtml[a1(0xe0)]('</div>\x0a</body>',BindingsEditor[a1(0xcf)][a1(0xff)]('')+a1(0xbc)):bindingsEditorHelpHtml,c['style'][a1(0x106)]='width:100%;\x20height:100%;\x20border:none;\x20display:block;',this[a1(0xd8)][a1(0xb6)](c,{'title':a1(0xbb),'parent':this,'x':-0x294,'y':-0x50,'width':0x276,'height':0x244});}}customElements[y(0x111)](BindingsEditor['is'],BindingsEditor);
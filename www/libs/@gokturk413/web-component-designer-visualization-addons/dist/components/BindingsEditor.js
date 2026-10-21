const y=b;function a(){const a3=['display','icons/copy.svg','variable\x20name\x20used\x20in\x20the\x20formula\x20(defaults\x20to\x20__','color:#555;\x20font-size:11px;\x20margin-top:2px;','length','forEach','binding','keys','push','1025UGjkTI','entries','_signals','_bindingsRefresh','helpSections','button','select\x20signal...','changedEvents','cssText','mode','fullName','_converterListContainer','writeBackSignal','flex:1;\x20overflow-y:auto;\x20padding:4px;','name','span','indexOf','expression','expressionTwoWay','initialize','transparent','9172CzMOOq','style','split','color:#0078d7;\x20font-weight:bold;','signalProperty','height','signal-row','namedConverterBrowse','color','showHistoric','_instanceServiceContainer','1968012pVAZfb','join','bindableObjectNames','className','namedConverters','padding:6px\x208px\x204px;\x20color:#666;\x20font-size:11px;\x20border-bottom:1px\x20solid\x20#e0e0e0;\x20flex-shrink:0;','oninput','slice','930TYQFxX','#0078d7','template','#e8f4fd','_serviceContainer','9hUDTfk','3395856wWEuFg','div','_parseObjectNames','_showHelp','events','3878903CfoiLi','_syncSignals','Browse\x20signal','width:12px;\x20height:12px;','abort','...','background','attribute','_binding','</div>\x0a</body>','title','iframe','createBindableObjectBrowser','_bindingTarget','_refresh','textContent','signal-select-btn','twoWayPossible','1430538UuLnXC','_assignEvents','define','src','signal-icon-btn','_renderSignalList','borderLeftColor','convertersString','display:flex;\x20flex-direction:column;\x20height:100%;\x20box-sizing:border-box;\x20font-size:12px;','_property','17466550gBXVZX','openConfirmation','_selectForRow','_bindingsParse','Remove','createElement','selectedObject','string','_signalListContainer','value','map','historicLabel','appendChild','objectNames','img','text','innerHTML','_restoreCachedInititalValues','1501ZQdToL','converters','Select\x20a\x20converter\x20and\x20confirm\x20with\x20OK.','specialType','Duplicate','converter','input','openModal','splice','description','twoWay','flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;','placeholder','type','_renderConverterList','color:#555;\x20text-align:right;','signal','historic','onclick','bindabletype','_getDomElement','_shell'];a=function(){return a3;};return a();}(function(c,d){const x=b,e=c();while(!![]){try{const f=-parseInt(x(0xf4))/0x1*(-parseInt(x(0xbb))/0x2)+parseInt(x(0xd8))/0x3+-parseInt(x(0x128))/0x4*(-parseInt(x(0x113))/0x5)+parseInt(x(0xb3))/0x6+parseInt(x(0xc6))/0x7+-parseInt(x(0xc1))/0x8+-parseInt(x(0xc0))/0x9*(parseInt(x(0xe2))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x56e1e));import{BaseCustomWebComponentConstructorAppend,html,css}from'@node-projects/base-custom-webcomponent';import{BindingMode,BindingTarget,assetsPath}from'@gokturk413/web-component-designer';import{BindingsEditorHistoric}from'./BindingsEditorHistoric.js';function b(c,d){c=c-0xb3;const e=a();let f=e[c];return f;}import{bindingsEditorHelpHtml}from'./BindingsEditorHelp.js';export class BindingsEditor extends BaseCustomWebComponentConstructorAppend{static [y(0xbd)]=html`
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
        }`;static ['is']='node-projects-visualization-bindings-editor';static ['properties']={'twoWayPossible':Boolean,'twoWay':Boolean,'expression':String,'events':String,'invert':Boolean,'historic':Object};['twoWayPossible']=![];[y(0xfe)]=![];['expression']='';['writeBackSignal']='';['expressionTwoWay']='';['historic'];['objectNames']='';[y(0xc5)]='';['invert']=![];[y(0xf5)]=[];static ['namedConverters']=[];static [y(0x117)]=[];['convertersString'];get[y(0xf9)](){const z=y;if(this[z(0xdf)])return this[z(0xdf)];if(this[z(0xf5)][z(0x10e)]>0x0)return Object['fromEntries'](this['converters']['map'](d=>[d['key'],d['value']]));return undefined;}['_property'];['_binding'];[y(0xd3)];[y(0xbf)];[y(0x132)];['_shell'];[y(0x115)]=[];['_signalListContainer'];['_converterListContainer'];constructor(c,d,e,f,g,h,i={}){const A=y;super(),super[A(0xf3)](),this[A(0xe1)]=c,this['_binding']=d,this['_bindingTarget']=e,this['_serviceContainer']=f,this[A(0x132)]=g,this['_shell']=h;i?.['namedConverters']===![]&&(this[A(0x108)]('namedConverterRow')[A(0x129)]['display']='none');const j=this['_getDomElement']('historicBtn');if(i?.[A(0x131)]===![])j['style'][A(0x10a)]='none';else i?.[A(0xed)]&&(j['textContent']=i[A(0xed)]);}['ready'](){const B=y;this['_parseAttributesToProperties'](),this[B(0xd9)](),this[B(0xea)]=this['_getDomElement']('signalListContainer'),this[B(0x11e)]=this[B(0x108)]('converterListContainer'),this['_getDomElement']('helpBtn')['onclick']=()=>this['_showHelp']();if(BindingsEditor['namedConverters']['length']===0x0)this['_getDomElement'](B(0x12f))['style']['display']='none';this[B(0xd7)]=![];if(this[B(0xd3)]==BindingTarget['property']||this['_bindingTarget']==BindingTarget[B(0xcd)])this['twoWayPossible']=!![];if(this[B(0xce)]){this['twoWay']=this['_binding'][B(0x11c)]==BindingMode['twoWay'],this[B(0x124)]=this['_binding']['expression'],this['writeBackSignal']=this[B(0xce)][B(0x11f)],this['expressionTwoWay']=this[B(0xce)]['expressionTwoWay'],this['historic']=this[B(0xce)][B(0x105)],this['invert']=this['_binding']['invert'];if(this[B(0xce)][B(0xb5)])this['objectNames']=this['_binding']['bindableObjectNames']['join'](';');if(this['_binding']['converter']){if(typeof this['_binding'][B(0xf9)]===B(0xe9))this[B(0xdf)]=this[B(0xce)]['converter'];else for(let d in this['_binding'][B(0xf9)]){this[B(0xf5)][B(0x112)]({'key':d,'value':this[B(0xce)][B(0xf9)][d]});}}if(this['_binding']['changedEvents']&&this['_binding'][B(0x11a)]['length'])this['events']=this[B(0xce)]['changedEvents']['join'](';');}if(this['expression']){let e=this[B(0x108)]('expression');this[B(0x124)][B(0x123)]('\x0a')>=0x0&&(e[B(0x129)][B(0x12d)]=0x3*0x11+'px');}if(this[B(0x125)]){let f=this[B(0x108)]('expression2way');this[B(0x125)]['indexOf']('\x0a')>=0x0&&(f['style'][B(0x12d)]=0x3*0x11+'px');}this['_signals']=this[B(0xc3)](this[B(0xef)]);if(this[B(0x115)]['length']===0x0)this[B(0x115)]['push']({'name':'','signal':''});this['_renderSignalList'](),this[B(0x102)](),this[B(0xe5)]();}['_parseObjectNames'](c){const C=y;if(!c)return[];return c[C(0x12a)](';')['filter'](d=>d[C(0x10e)]>0x0)[C(0xec)](d=>{const D=C,e=d['indexOf'](':');if(e>0x0)return{'name':d[D(0xba)](0x0,e),'signal':d['slice'](e+0x1)};return{'name':'','signal':d};});}['_signalsToObjectNames'](){const E=y;return this['_signals'][E(0xec)](c=>c[E(0x121)]?c['name']+':'+c[E(0x104)]:c['signal'])['join'](';');}[y(0xdd)](){const F=y,c=this[F(0xea)];c['innerHTML']='',this['_signals']['forEach']((d,e)=>{const G=F,f=document[G(0xe7)](G(0xc2));f[G(0xb6)]=G(0x12e);const g=document[G(0xe7)](G(0xfa));g['className']='signal-name-input',g['placeholder']='__'+e,g[G(0xeb)]=d[G(0x121)],g['title']=G(0x10c)+e+'\x20if\x20empty)',g[G(0xb9)]=()=>{const H=G;this['_signals'][e][H(0x121)]=g[H(0xeb)],this[H(0xc7)]();};const h=document['createElement']('input');h[G(0xb6)]='signal-path-input',h['value']=d[G(0x104)],h[G(0x100)]='signal\x20path',h['title']='signal\x20path\x20(prefix:\x20?\x20=\x20signal\x20name\x20in\x20screen\x20property,\x20??\x20=\x20screen\x20property\x20value,\x20?$\x20=\x20signal\x20object\x20in\x20screen\x20property,\x20?@\x20=\x20screen\x20attribute,\x20#\x20=\x20signal\x20name\x20in\x20target\x20property,\x20##\x20=\x20target\x20property\x20value,\x20#$\x20=\x20signal\x20object\x20in\x20target\x20property,\x20#@\x20=\x20target\x20attribute)',h['oninput']=()=>{const I=G;this['_signals'][e]['signal']=h[I(0xeb)],this['_syncSignals']();};const j=document['createElement']('button');j[G(0xb6)]='signal-icon-btn',j['title']=G(0xf8);const k=document[G(0xe7)](G(0xf0));k[G(0xdb)]=assetsPath+G(0x10b),k['style'][G(0x11b)]='width:12px;\x20height:12px;',j['appendChild'](k),j['onclick']=()=>{const J=G;this['_signals']['splice'](e+0x1,0x0,{...this['_signals'][e]}),this[J(0xc7)](),this['_renderSignalList']();};const l=document[G(0xe7)](G(0x118));l[G(0xb6)]=G(0xd6),l['textContent']=G(0xcb),l[G(0xd0)]=G(0xc8),l['onclick']=()=>this['_selectForRow'](e,h);const m=document['createElement'](G(0x118));m[G(0xb6)]='signal-icon-btn',m['title']='Remove';const n=document['createElement']('img');n[G(0xdb)]=assetsPath+'icons/delete.svg',n[G(0x129)][G(0x11b)]=G(0xc9),m[G(0xee)](n),m[G(0x106)]=()=>{const K=G;this[K(0x115)]['splice'](e,0x1),this[K(0xc7)](),this['_renderSignalList']();},f['appendChild'](g),f[G(0xee)](h),f['appendChild'](l),f[G(0xee)](j),f['appendChild'](m),c[G(0xee)](f);});}['_syncSignals'](){const L=y;this[L(0xef)]=this['_signalsToObjectNames'](),this['_bindingsRefresh']();}['_addSignal'](){const M=y;this[M(0x115)][M(0x112)]({'name':'','signal':''}),this[M(0xdd)]();}async[y(0xe4)](c,d){const N=y;let e=this[N(0x109)][N(0xd2)]();e[N(0x126)](this[N(0xbf)],this['_instanceServiceContainer'],N(0x110)),e['title']=N(0x119);const f=new AbortController();e['objectDoubleclicked']['on'](()=>{const O=N;f[O(0xca)]();let h='';if(e[O(0xe8)][O(0xf7)]==O(0x12c))h='?';else e[O(0xe8)]['bindabletype']==='property'&&(h='??');this['_signals'][c][O(0x104)]=h+e['selectedObject']['fullName'],d['value']=this['_signals'][c]['signal'],this[O(0xc7)]();});let g=await this['_shell'][N(0xe3)](e,{'x':0x64,'y':0x64,'width':0x190,'height':0x12c,'parent':this,'abortSignal':f['signal']});if(g){let h='';if(e['selectedObject'][N(0xf7)]==N(0x12c))h='?';else e['selectedObject'][N(0x107)]==='property'&&(h='??');this[N(0x115)][c]['signal']=h+e[N(0xe8)][N(0x11d)],d[N(0xeb)]=this['_signals'][c][N(0x104)],this['_syncSignals']();}}[y(0x102)](){const P=y,c=this[P(0x11e)];c[P(0xf2)]='';const d=this['_property']?.[P(0x101)]===P(0x130)?P(0x130):P(0xf1);this['converters'][P(0x10f)]((e,f)=>{const Q=P,g=document[Q(0xe7)](Q(0xc2));g['className']=Q(0x12e);const h=document['createElement']('input');h['style'][Q(0x11b)]=Q(0xff),h[Q(0xeb)]=e['key'],h[Q(0x100)]='condition',h['oninput']=()=>{const R=Q;this['converters'][f]['key']=h[R(0xeb)];};const j=document[Q(0xe7)](Q(0xfa));j[Q(0x101)]=d,j[Q(0x129)]['cssText']='flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;',j['value']=e['value'],j[Q(0x100)]=Q(0xeb),j['oninput']=()=>{const S=Q;this[S(0xf5)][f][S(0xeb)]=j[S(0xeb)];};const k=document['createElement'](Q(0x118));k[Q(0xb6)]='signal-icon-btn',k['title']=Q(0xf8);const l=document['createElement'](Q(0xf0));l['src']=assetsPath+Q(0x10b),l['style'][Q(0x11b)]=Q(0xc9),k['appendChild'](l),k['onclick']=()=>{const T=Q;this[T(0xf5)][T(0xfc)](f+0x1,0x0,{...this['converters'][f]}),this[T(0x102)]();};const m=document[Q(0xe7)](Q(0x118));m[Q(0xb6)]=Q(0xdc),m['title']='Remove';const n=document['createElement'](Q(0xf0));n[Q(0xdb)]=assetsPath+'icons/delete.svg',n[Q(0x129)][Q(0x11b)]=Q(0xc9),m['appendChild'](n),m[Q(0x106)]=()=>{const U=Q;this[U(0xf5)][U(0xfc)](f,0x1),this[U(0x102)]();},g['appendChild'](h),g['appendChild'](j),g['appendChild'](k),g['appendChild'](m),c['appendChild'](g);});}['_addConverter'](){const V=y;this['converters']['push']({'key':'','value':''}),this[V(0x102)]();}async['_selectNamedConverter'](){const W=y,c=BindingsEditor[W(0xb7)];if(c[W(0x10e)]===0x0)return;let d='',e=null;const f=document[W(0xe7)]('div');f['style']['cssText']=W(0xe0);const g=document[W(0xe7)](W(0xc2));g[W(0x129)]['cssText']=W(0xb8),g['textContent']=W(0xf6),f['appendChild'](g);const h=document[W(0xe7)]('div');h['style']['cssText']=W(0x120),f['appendChild'](h);const i=m=>{const X=W;m['style']['background']='',m[X(0x129)]['borderLeftColor']=X(0x127);},j=(m,n)=>{const Y=W;if(e)i(e);e=m,m['style']['background']=Y(0xbe),m[Y(0x129)][Y(0xde)]=Y(0xbc),d=n;};for(const m of c){const n=document[W(0xe7)](W(0xc2));n['style'][W(0x11b)]='padding:5px\x206px\x205px\x209px;\x20cursor:pointer;\x20border-radius:3px;\x20border-left:3px\x20solid\x20transparent;\x20margin-bottom:2px;';const o=document['createElement']('div');o[W(0x129)][W(0x11b)]='font-family:monospace;\x20font-weight:bold;\x20color:#111;',o['textContent']=m[W(0x121)],n['appendChild'](o);if(m['description']){const p=document['createElement'](W(0xc2));p[W(0x129)][W(0x11b)]=W(0x10d),p['textContent']=m[W(0xfd)],n[W(0xee)](p);}if(m['converter']&&Object[W(0x111)](m[W(0xf9)])['length']>0x0){const q=document['createElement'](W(0xc2));q[W(0x129)]['cssText']='display:grid;\x20grid-template-columns:max-content\x20max-content\x201fr;\x20gap:1px\x206px;\x20margin-top:4px;\x20padding:4px\x206px;\x20background:#f5f5f5;\x20border-radius:2px;\x20font-family:monospace;\x20font-size:11px;\x20color:#333;';for(const [r,s]of Object[W(0x114)](m[W(0xf9)])){const t=document['createElement']('span');t['style'][W(0x11b)]=W(0x103),t['textContent']=r;const u=document[W(0xe7)](W(0x122));u[W(0x129)]['cssText']='color:#aaa;',u[W(0xd5)]='→';const w=document[W(0xe7)]('span');w['style']['cssText']=W(0x12b),w['textContent']=String(s),q[W(0xee)](t),q[W(0xee)](u),q[W(0xee)](w);}n['appendChild'](q);}n['onmouseenter']=()=>{const Z=W;if(n!==e)n[Z(0x129)]['background']='#f5f5f5';},n['onmouseleave']=()=>{const a0=W;if(n!==e)n[a0(0x129)][a0(0xcc)]='';},n[W(0x106)]=()=>j(n,m[W(0x121)]),h[W(0xee)](n);}const l=await this[W(0x109)]['openConfirmation'](f,{'x':0x64,'y':0x64,'width':0x140,'height':0x12c,'parent':this});l&&d&&(this['convertersString']=d,this[W(0x108)]('namedConverterInput')[W(0xeb)]=d,this[W(0x116)]());}[y(0xd4)](){requestAnimationFrame(()=>{this['_bindingsRefresh']();});}async[y(0x131)](){const a1=y;let c=new BindingsEditorHistoric(this['historic']);const d=new AbortController();c['title']='Edit\x20historic\x20binding\x20to:\x20'+this[a1(0xe1)][a1(0x121)];let e=await this[a1(0x109)][a1(0xe3)](c,{'x':0x64,'y':0x64,'width':0x1a4,'height':0x1fe,'parent':this,'abortSignal':d[a1(0x104)],'disableResize':!![],'cancelText':a1(0xe6)});!e?this['historic']=null:this['historic']=c[a1(0x105)],this[a1(0x116)]();}[y(0xc4)](){const a2=y,c=document[a2(0xe7)](a2(0xd1));c['srcdoc']=BindingsEditor['helpSections']['length']>0x0?bindingsEditorHelpHtml['replace'](a2(0xcf),BindingsEditor[a2(0x117)][a2(0xb4)]('')+'</div>\x0a</body>'):bindingsEditorHelpHtml,c[a2(0x129)][a2(0x11b)]='width:100%;\x20height:100%;\x20border:none;\x20display:block;',this[a2(0x109)][a2(0xfb)](c,{'title':'Bindings\x20Editor\x20Help','parent':this,'x':-0x294,'y':-0x50,'width':0x276,'height':0x244});}}customElements[y(0xda)](BindingsEditor['is'],BindingsEditor);
function b(c,d){c=c-0xbc;const e=a();let f=e[c];return f;}const y=b;(function(c,d){const x=b,e=c();while(!![]){try{const f=parseInt(x(0xec))/0x1*(-parseInt(x(0xd3))/0x2)+-parseInt(x(0xbd))/0x3*(-parseInt(x(0xc0))/0x4)+parseInt(x(0x12d))/0x5+-parseInt(x(0x11d))/0x6+-parseInt(x(0x109))/0x7+parseInt(x(0x121))/0x8+-parseInt(x(0x114))/0x9*(parseInt(x(0x101))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x50c5d));import{BaseCustomWebComponentConstructorAppend,html,css}from'@node-projects/base-custom-webcomponent';function a(){const a3=['value','title','namedConverters','158195GngyGq','signal-row','oninput','bindableObjectNames','name','signalProperty','_shell','signal','historicLabel','img','abort','_bindingsRefresh','_bindingsParse','_binding','createElement','historicBtn','push','textContent','property','createBindableObjectBrowser','</div>\x0a</body>','4860RefHSP','_property','converters','type','_selectForRow','signal-path-input','historic','_converterListContainer','1361682JpXDEd','icons/delete.svg','splice','color:#555;\x20text-align:right;','_getDomElement','selectedObject','_signalListContainer','display','src','height','innerHTML','5481rtJlwf','onclick','map','showHistoric','signal-icon-btn','Duplicate','_signals','variable\x20name\x20used\x20in\x20the\x20formula\x20(defaults\x20to\x20__','bindabletype','427236CWlQCT','signalListContainer','_addConverter','placeholder','1559264TxEwQw','fullName','converter','input','filter','twoWayPossible','twoWay','Remove','_showHelp','expression','background','_selectNamedConverter','1907900BTsunT','_renderSignalList','6NMlhpk','convertersString','_serviceContainer','948516DFVwro','objectNames','indexOf','div','signal-name-input','properties','padding:5px\x206px\x205px\x209px;\x20cursor:pointer;\x20border-radius:3px;\x20border-left:3px\x20solid\x20transparent;\x20margin-bottom:2px;','_syncSignals','_assignEvents','condition','openModal','description','length','changedEvents','appendChild','namedConverterInput','style','events','flex:1;\x20overflow-y:auto;\x20padding:4px;','2mMZeHm','none','specialType','writeBackSignal','span','split','join','cssText','forEach','padding:6px\x208px\x204px;\x20color:#666;\x20font-size:11px;\x20border-bottom:1px\x20solid\x20#e0e0e0;\x20flex-shrink:0;','Bindings\x20Editor\x20Help','key','className','_bindingTarget','_renderConverterList','invert','define','button','width:12px;\x20height:12px;','helpSections','keys','openConfirmation'];a=function(){return a3;};return a();}import{BindingMode,BindingTarget,assetsPath}from'@gokturk413/web-component-designer';import{BindingsEditorHistoric}from'./BindingsEditorHistoric.js';import{bindingsEditorHelpHtml}from'./BindingsEditorHelp.js';export class BindingsEditor extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
        }`;static ['is']='node-projects-visualization-bindings-editor';static [y(0xc5)]={'twoWayPossible':Boolean,'twoWay':Boolean,'expression':String,'events':String,'invert':Boolean,'historic':Object};['twoWayPossible']=![];['twoWay']=![];['expression']='';[y(0xd6)]='';['expressionTwoWay']='';[y(0x107)];['objectNames']='';['events']='';[y(0xe2)]=![];[y(0x103)]=[];static [y(0xeb)]=[];static [y(0xe6)]=[];[y(0xbe)];get['converter'](){const z=y;if(this['convertersString'])return this[z(0xbe)];if(this['converters'][z(0xcc)]>0x0)return Object['fromEntries'](this[z(0x103)][z(0x116)](d=>[d[z(0xde)],d[z(0xe9)]]));return undefined;}['_property'];['_binding'];[y(0xe0)];['_serviceContainer'];['_instanceServiceContainer'];[y(0xf2)];['_signals']=[];['_signalListContainer'];['_converterListContainer'];constructor(c,d,e,f,g,h,i={}){const A=y;super(),super['_restoreCachedInititalValues'](),this['_property']=c,this['_binding']=d,this[A(0xe0)]=e,this['_serviceContainer']=f,this['_instanceServiceContainer']=g,this[A(0xf2)]=h;i?.['namedConverters']===![]&&(this['_getDomElement']('namedConverterRow')['style'][A(0x110)]=A(0xd4));const j=this[A(0x10d)](A(0xfb));if(i?.[A(0x117)]===![])j[A(0xd0)][A(0x110)]='none';else i?.[A(0xf4)]&&(j[A(0xfd)]=i['historicLabel']);}['ready'](){const B=y;this['_parseAttributesToProperties'](),this[B(0xc8)](),this[B(0x10f)]=this[B(0x10d)](B(0x11e)),this['_converterListContainer']=this[B(0x10d)]('converterListContainer'),this[B(0x10d)]('helpBtn')[B(0x115)]=()=>this[B(0x129)]();if(BindingsEditor[B(0xeb)][B(0xcc)]===0x0)this[B(0x10d)]('namedConverterBrowse')[B(0xd0)][B(0x110)]='none';this[B(0x126)]=![];if(this[B(0xe0)]==BindingTarget['property']||this[B(0xe0)]==BindingTarget['attribute'])this['twoWayPossible']=!![];if(this['_binding']){this['twoWay']=this['_binding']['mode']==BindingMode[B(0x127)],this[B(0x12a)]=this['_binding']['expression'],this['writeBackSignal']=this[B(0xf9)][B(0xd6)],this['expressionTwoWay']=this[B(0xf9)]['expressionTwoWay'],this[B(0x107)]=this['_binding'][B(0x107)],this['invert']=this[B(0xf9)]['invert'];if(this[B(0xf9)][B(0xef)])this[B(0xc1)]=this['_binding'][B(0xef)]['join'](';');if(this[B(0xf9)]['converter']){if(typeof this['_binding'][B(0x123)]==='string')this['convertersString']=this[B(0xf9)][B(0x123)];else for(let d in this['_binding']['converter']){this['converters'][B(0xfc)]({'key':d,'value':this[B(0xf9)]['converter'][d]});}}if(this[B(0xf9)]['changedEvents']&&this[B(0xf9)][B(0xcd)]['length'])this[B(0xd1)]=this['_binding'][B(0xcd)]['join'](';');}if(this[B(0x12a)]){let e=this[B(0x10d)]('expression');this[B(0x12a)][B(0xc2)]('\x0a')>=0x0&&(e['style']['height']=0x3*0x11+'px');}if(this['expressionTwoWay']){let f=this['_getDomElement']('expression2way');this['expressionTwoWay']['indexOf']('\x0a')>=0x0&&(f[B(0xd0)][B(0x112)]=0x3*0x11+'px');}this[B(0x11a)]=this['_parseObjectNames'](this['objectNames']);if(this['_signals']['length']===0x0)this['_signals'][B(0xfc)]({'name':'','signal':''});this['_renderSignalList'](),this['_renderConverterList'](),this[B(0xf8)]();}['_parseObjectNames'](c){const C=y;if(!c)return[];return c[C(0xd8)](';')[C(0x125)](d=>d[C(0xcc)]>0x0)['map'](d=>{const D=C,e=d[D(0xc2)](':');if(e>0x0)return{'name':d['slice'](0x0,e),'signal':d['slice'](e+0x1)};return{'name':'','signal':d};});}['_signalsToObjectNames'](){const E=y;return this[E(0x11a)]['map'](c=>c[E(0xf0)]?c[E(0xf0)]+':'+c[E(0xf3)]:c[E(0xf3)])[E(0xd9)](';');}[y(0xbc)](){const F=y,c=this[F(0x10f)];c[F(0x113)]='',this[F(0x11a)][F(0xdb)]((d,e)=>{const G=F,f=document['createElement']('div');f[G(0xdf)]='signal-row';const g=document[G(0xfa)]('input');g['className']=G(0xc4),g['placeholder']='__'+e,g[G(0xe9)]=d[G(0xf0)],g[G(0xea)]=G(0x11b)+e+'\x20if\x20empty)',g[G(0xee)]=()=>{const H=G;this['_signals'][e][H(0xf0)]=g[H(0xe9)],this['_syncSignals']();};const h=document[G(0xfa)]('input');h['className']=G(0x106),h['value']=d[G(0xf3)],h[G(0x120)]='signal\x20path',h[G(0xea)]='signal\x20path\x20(prefix:\x20?\x20=\x20signal\x20name\x20in\x20screen\x20property,\x20??\x20=\x20screen\x20property\x20value,\x20?$\x20=\x20signal\x20object\x20in\x20screen\x20property,\x20?@\x20=\x20screen\x20attribute,\x20#\x20=\x20signal\x20name\x20in\x20target\x20property,\x20##\x20=\x20target\x20property\x20value,\x20#$\x20=\x20signal\x20object\x20in\x20target\x20property,\x20#@\x20=\x20target\x20attribute)',h[G(0xee)]=()=>{const I=G;this['_signals'][e][I(0xf3)]=h[I(0xe9)],this[I(0xc7)]();};const j=document[G(0xfa)](G(0xe4));j[G(0xdf)]=G(0x118),j['title']='Duplicate';const k=document['createElement']('img');k['src']=assetsPath+'icons/copy.svg',k[G(0xd0)]['cssText']='width:12px;\x20height:12px;',j['appendChild'](k),j['onclick']=()=>{const J=G;this['_signals'][J(0x10b)](e+0x1,0x0,{...this[J(0x11a)][e]}),this[J(0xc7)](),this['_renderSignalList']();};const l=document[G(0xfa)](G(0xe4));l['className']='signal-select-btn',l['textContent']='...',l['title']='Browse\x20signal',l['onclick']=()=>this[G(0x105)](e,h);const m=document[G(0xfa)]('button');m[G(0xdf)]=G(0x118),m['title']='Remove';const n=document['createElement'](G(0xf5));n['src']=assetsPath+G(0x10a),n[G(0xd0)]['cssText']='width:12px;\x20height:12px;',m[G(0xce)](n),m['onclick']=()=>{const K=G;this['_signals'][K(0x10b)](e,0x1),this[K(0xc7)](),this['_renderSignalList']();},f['appendChild'](g),f[G(0xce)](h),f['appendChild'](l),f[G(0xce)](j),f['appendChild'](m),c[G(0xce)](f);});}[y(0xc7)](){const L=y;this[L(0xc1)]=this['_signalsToObjectNames'](),this[L(0xf7)]();}['_addSignal'](){const M=y;this['_signals'][M(0xfc)]({'name':'','signal':''}),this['_renderSignalList']();}async[y(0x105)](c,d){const N=y;let e=this['_shell'][N(0xff)]();e['initialize'](this[N(0xbf)],this['_instanceServiceContainer'],'binding'),e['title']='select\x20signal...';const f=new AbortController();e['objectDoubleclicked']['on'](()=>{const O=N;f[O(0xf6)]();let h='';if(e['selectedObject'][O(0xd5)]=='signalProperty')h='?';else e[O(0x10e)][O(0x11c)]===O(0xfe)&&(h='??');this[O(0x11a)][c]['signal']=h+e[O(0x10e)][O(0x122)],d[O(0xe9)]=this[O(0x11a)][c][O(0xf3)],this['_syncSignals']();});let g=await this['_shell']['openConfirmation'](e,{'x':0x64,'y':0x64,'width':0x190,'height':0x12c,'parent':this,'abortSignal':f[N(0xf3)]});if(g){let h='';if(e[N(0x10e)][N(0xd5)]==N(0xf1))h='?';else e[N(0x10e)][N(0x11c)]==='property'&&(h='??');this[N(0x11a)][c]['signal']=h+e[N(0x10e)][N(0x122)],d['value']=this['_signals'][c]['signal'],this['_syncSignals']();}}[y(0xe1)](){const P=y,c=this[P(0x108)];c['innerHTML']='';const d=this['_property']?.['type']==='color'?'color':'text';this['converters'][P(0xdb)]((e,f)=>{const Q=P,g=document['createElement'](Q(0xc3));g[Q(0xdf)]=Q(0xed);const h=document['createElement'](Q(0x124));h['style'][Q(0xda)]='flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;',h['value']=e['key'],h['placeholder']=Q(0xc9),h[Q(0xee)]=()=>{const R=Q;this['converters'][f][R(0xde)]=h[R(0xe9)];};const j=document['createElement'](Q(0x124));j[Q(0x104)]=d,j[Q(0xd0)][Q(0xda)]='flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;',j['value']=e[Q(0xe9)],j[Q(0x120)]='value',j['oninput']=()=>{const S=Q;this[S(0x103)][f][S(0xe9)]=j['value'];};const k=document['createElement']('button');k['className']='signal-icon-btn',k[Q(0xea)]=Q(0x119);const l=document['createElement']('img');l['src']=assetsPath+'icons/copy.svg',l[Q(0xd0)][Q(0xda)]=Q(0xe5),k[Q(0xce)](l),k['onclick']=()=>{const T=Q;this[T(0x103)][T(0x10b)](f+0x1,0x0,{...this[T(0x103)][f]}),this[T(0xe1)]();};const m=document[Q(0xfa)](Q(0xe4));m['className']=Q(0x118),m[Q(0xea)]=Q(0x128);const n=document['createElement']('img');n[Q(0x111)]=assetsPath+'icons/delete.svg',n['style']['cssText']=Q(0xe5),m[Q(0xce)](n),m['onclick']=()=>{const U=Q;this['converters']['splice'](f,0x1),this[U(0xe1)]();},g['appendChild'](h),g['appendChild'](j),g['appendChild'](k),g['appendChild'](m),c[Q(0xce)](g);});}[y(0x11f)](){const V=y;this[V(0x103)]['push']({'key':'','value':''}),this['_renderConverterList']();}async[y(0x12c)](){const W=y,c=BindingsEditor[W(0xeb)];if(c['length']===0x0)return;let d='',e=null;const f=document[W(0xfa)]('div');f[W(0xd0)][W(0xda)]='display:flex;\x20flex-direction:column;\x20height:100%;\x20box-sizing:border-box;\x20font-size:12px;';const g=document[W(0xfa)]('div');g[W(0xd0)][W(0xda)]=W(0xdc),g[W(0xfd)]='Select\x20a\x20converter\x20and\x20confirm\x20with\x20OK.',f['appendChild'](g);const h=document[W(0xfa)](W(0xc3));h['style'][W(0xda)]=W(0xd2),f['appendChild'](h);const i=m=>{const X=W;m['style'][X(0x12b)]='',m['style']['borderLeftColor']='transparent';},j=(m,n)=>{const Y=W;if(e)i(e);e=m,m['style']['background']='#e8f4fd',m[Y(0xd0)]['borderLeftColor']='#0078d7',d=n;};for(const m of c){const n=document[W(0xfa)](W(0xc3));n['style'][W(0xda)]=W(0xc6);const o=document[W(0xfa)](W(0xc3));o[W(0xd0)][W(0xda)]='font-family:monospace;\x20font-weight:bold;\x20color:#111;',o['textContent']=m[W(0xf0)],n[W(0xce)](o);if(m[W(0xcb)]){const p=document['createElement'](W(0xc3));p[W(0xd0)][W(0xda)]='color:#555;\x20font-size:11px;\x20margin-top:2px;',p[W(0xfd)]=m[W(0xcb)],n[W(0xce)](p);}if(m[W(0x123)]&&Object[W(0xe7)](m['converter'])[W(0xcc)]>0x0){const q=document['createElement'](W(0xc3));q['style'][W(0xda)]='display:grid;\x20grid-template-columns:max-content\x20max-content\x201fr;\x20gap:1px\x206px;\x20margin-top:4px;\x20padding:4px\x206px;\x20background:#f5f5f5;\x20border-radius:2px;\x20font-family:monospace;\x20font-size:11px;\x20color:#333;';for(const [r,s]of Object['entries'](m['converter'])){const t=document[W(0xfa)](W(0xd7));t['style'][W(0xda)]=W(0x10c),t[W(0xfd)]=r;const u=document['createElement']('span');u[W(0xd0)]['cssText']='color:#aaa;',u['textContent']='→';const w=document['createElement']('span');w[W(0xd0)][W(0xda)]='color:#0078d7;\x20font-weight:bold;',w['textContent']=String(s),q[W(0xce)](t),q[W(0xce)](u),q['appendChild'](w);}n['appendChild'](q);}n['onmouseenter']=()=>{const Z=W;if(n!==e)n['style'][Z(0x12b)]='#f5f5f5';},n['onmouseleave']=()=>{if(n!==e)n['style']['background']='';},n[W(0x115)]=()=>j(n,m['name']),h['appendChild'](n);}const l=await this[W(0xf2)]['openConfirmation'](f,{'x':0x64,'y':0x64,'width':0x140,'height':0x12c,'parent':this});l&&d&&(this['convertersString']=d,this['_getDomElement'](W(0xcf))['value']=d,this['_bindingsRefresh']());}['_refresh'](){requestAnimationFrame(()=>{const a0=b;this[a0(0xf7)]();});}async['showHistoric'](){const a1=y;let c=new BindingsEditorHistoric(this['historic']);const d=new AbortController();c['title']='Edit\x20historic\x20binding\x20to:\x20'+this[a1(0x102)]['name'];let e=await this[a1(0xf2)][a1(0xe8)](c,{'x':0x64,'y':0x64,'width':0x1a4,'height':0x1fe,'parent':this,'abortSignal':d['signal'],'disableResize':!![],'cancelText':'Remove'});!e?this[a1(0x107)]=null:this['historic']=c[a1(0x107)],this['_bindingsRefresh']();}[y(0x129)](){const a2=y,c=document[a2(0xfa)]('iframe');c['srcdoc']=BindingsEditor[a2(0xe6)][a2(0xcc)]>0x0?bindingsEditorHelpHtml['replace']('</div>\x0a</body>',BindingsEditor['helpSections'][a2(0xd9)]('')+a2(0x100)):bindingsEditorHelpHtml,c['style']['cssText']='width:100%;\x20height:100%;\x20border:none;\x20display:block;',this[a2(0xf2)][a2(0xca)](c,{'title':a2(0xdd),'parent':this,'x':-0x294,'y':-0x50,'width':0x276,'height':0x244});}}customElements[y(0xe3)](BindingsEditor['is'],BindingsEditor);
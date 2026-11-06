const y=b;(function(c,d){const x=b,e=c();while(!![]){try{const f=parseInt(x(0x132))/0x1*(-parseInt(x(0x151))/0x2)+parseInt(x(0xfd))/0x3*(parseInt(x(0x145))/0x4)+parseInt(x(0x122))/0x5*(parseInt(x(0x14d))/0x6)+parseInt(x(0x15b))/0x7+-parseInt(x(0xf6))/0x8*(parseInt(x(0x155))/0x9)+-parseInt(x(0x107))/0xa+-parseInt(x(0x157))/0xb*(-parseInt(x(0x123))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xadcde));import{BaseCustomWebComponentConstructorAppend,html,css}from'@node-projects/base-custom-webcomponent';function a(){const a2=['length','#0078d7','_property','_renderSignalList','converters','helpSections','flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;','Edit\x20historic\x20binding\x20to:\x20','className','color','587887qHciIR','div','string','...','icons/copy.svg','signal','_signalsToObjectNames','slice','appendChild','expression','icons/delete.svg','color:#0078d7;\x20font-weight:bold;','namedConverterBrowse','cssText','_restoreCachedInititalValues','width:100%;\x20height:100%;\x20border:none;\x20display:block;','split','</div>\x0a</body>','signal-icon-btn','544660LGHZug','changedEvents','placeholder','_converterListContainer','_instanceServiceContainer','input','_parseObjectNames','signal-select-btn','34098FyYElH','img','_showHelp','_getDomElement','2HKvjcv','_shell','openConfirmation','mode','4431366qgdVji','onclick','7402571YLyZzE','description','display','expressionTwoWay','7029834FBDojx','historic','style','selectedObject','historicBtn','signal\x20path','namedConverterInput','padding:5px\x206px\x205px\x209px;\x20cursor:pointer;\x20border-radius:3px;\x20border-left:3px\x20solid\x20transparent;\x20margin-bottom:2px;','_renderConverterList','color:#555;\x20text-align:right;','_serviceContainer','_selectForRow','padding:6px\x208px\x204px;\x20color:#666;\x20font-size:11px;\x20border-bottom:1px\x20solid\x20#e0e0e0;\x20flex-shrink:0;','title','createElement','convertersString','_binding','key','textContent','signal-name-input','innerHTML','property','createBindableObjectBrowser','ready','8eBxEea','Duplicate','select\x20signal...','signal-row','oninput','replace','bindableObjectNames','6MFrqgc','_signals','signalListContainer','bindabletype','map','twoWayPossible','signal\x20path\x20(prefix:\x20?\x20=\x20signal\x20name\x20in\x20screen\x20property,\x20??\x20=\x20screen\x20property\x20value,\x20?$\x20=\x20signal\x20object\x20in\x20screen\x20property,\x20?@\x20=\x20screen\x20attribute,\x20#\x20=\x20signal\x20name\x20in\x20target\x20property,\x20##\x20=\x20target\x20property\x20value,\x20#$\x20=\x20signal\x20object\x20in\x20target\x20property,\x20#@\x20=\x20target\x20attribute)','color:#555;\x20font-size:11px;\x20margin-top:2px;','namedConverterRow','src','14043340OihwBk','fullName','indexOf','name','join','none','button','borderLeftColor','height','attribute','_bindingsRefresh','push','_bindingTarget','converter','span','_addConverter','srcdoc','namedConverters','splice','historicLabel','_syncSignals','background','invert','value','font-family:monospace;\x20font-weight:bold;\x20color:#111;','width:12px;\x20height:12px;','_signalListContainer','505psylWj','24fTHKlD','properties','_bindingsParse','onmouseleave','abort'];a=function(){return a2;};return a();}import{BindingMode,BindingTarget,assetsPath}from'@gokturk413/web-component-designer';import{BindingsEditorHistoric}from'./BindingsEditorHistoric.js';import{bindingsEditorHelpHtml}from'./BindingsEditorHelp.js';export class BindingsEditor extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
        }`;static ['is']='node-projects-visualization-bindings-editor';static [y(0x124)]={'twoWayPossible':Boolean,'twoWay':Boolean,'expression':String,'events':String,'invert':Boolean,'historic':Object};['twoWayPossible']=![];['twoWay']=![];['expression']='';['writeBackSignal']='';[y(0x15a)]='';['historic'];['objectNames']='';['events']='';[y(0x11d)]=![];['converters']=[];static [y(0x118)]=[];static [y(0x12d)]=[];[y(0xed)];get[y(0x114)](){const z=y;if(this['convertersString'])return this[z(0xed)];if(this['converters'][z(0x128)]>0x0)return Object['fromEntries'](this['converters'][z(0x101)](d=>[d[z(0xef)],d[z(0x11e)]]));return undefined;}[y(0x12a)];[y(0xee)];[y(0x113)];['_serviceContainer'];[y(0x149)];[y(0x152)];['_signals']=[];[y(0x121)];[y(0x148)];constructor(c,d,e,f,g,h,i={}){const A=y;super(),super[A(0x140)](),this[A(0x12a)]=c,this['_binding']=d,this[A(0x113)]=e,this['_serviceContainer']=f,this[A(0x149)]=g,this['_shell']=h;i?.[A(0x118)]===![]&&(this[A(0x150)](A(0x105))['style']['display']='none');const j=this['_getDomElement'](A(0xe2));if(i?.['showHistoric']===![])j['style']['display']=A(0x10c);else i?.['historicLabel']&&(j['textContent']=i[A(0x11a)]);}[y(0xf5)](){const B=y;this['_parseAttributesToProperties'](),this['_assignEvents'](),this['_signalListContainer']=this[B(0x150)](B(0xff)),this['_converterListContainer']=this[B(0x150)]('converterListContainer'),this['_getDomElement']('helpBtn')[B(0x156)]=()=>this[B(0x14f)]();if(BindingsEditor[B(0x118)][B(0x128)]===0x0)this[B(0x150)](B(0x13e))['style'][B(0x159)]='none';this[B(0x102)]=![];if(this['_bindingTarget']==BindingTarget['property']||this['_bindingTarget']==BindingTarget[B(0x110)])this[B(0x102)]=!![];if(this[B(0xee)]){this['twoWay']=this[B(0xee)][B(0x154)]==BindingMode['twoWay'],this['expression']=this['_binding'][B(0x13b)],this['writeBackSignal']=this[B(0xee)]['writeBackSignal'],this[B(0x15a)]=this['_binding']['expressionTwoWay'],this[B(0x15c)]=this['_binding'][B(0x15c)],this[B(0x11d)]=this[B(0xee)]['invert'];if(this['_binding'][B(0xfc)])this['objectNames']=this['_binding']['bindableObjectNames']['join'](';');if(this['_binding']['converter']){if(typeof this[B(0xee)][B(0x114)]===B(0x134))this[B(0xed)]=this['_binding'][B(0x114)];else for(let d in this['_binding']['converter']){this['converters']['push']({'key':d,'value':this[B(0xee)]['converter'][d]});}}if(this[B(0xee)]['changedEvents']&&this[B(0xee)][B(0x146)][B(0x128)])this['events']=this[B(0xee)]['changedEvents'][B(0x10b)](';');}if(this[B(0x13b)]){let e=this[B(0x150)](B(0x13b));this['expression'][B(0x109)]('\x0a')>=0x0&&(e[B(0x15d)]['height']=0x3*0x11+'px');}if(this['expressionTwoWay']){let f=this[B(0x150)]('expression2way');this[B(0x15a)]['indexOf']('\x0a')>=0x0&&(f['style'][B(0x10f)]=0x3*0x11+'px');}this['_signals']=this['_parseObjectNames'](this['objectNames']);if(this['_signals'][B(0x128)]===0x0)this[B(0xfe)]['push']({'name':'','signal':''});this[B(0x12b)](),this['_renderConverterList'](),this[B(0x125)]();}[y(0x14b)](c){const C=y;if(!c)return[];return c[C(0x142)](';')['filter'](d=>d['length']>0x0)[C(0x101)](d=>{const D=C,e=d[D(0x109)](':');if(e>0x0)return{'name':d['slice'](0x0,e),'signal':d[D(0x139)](e+0x1)};return{'name':'','signal':d};});}['_signalsToObjectNames'](){const E=y;return this['_signals'][E(0x101)](c=>c['name']?c[E(0x10a)]+':'+c[E(0x137)]:c['signal'])['join'](';');}[y(0x12b)](){const F=y,c=this[F(0x121)];c['innerHTML']='',this['_signals']['forEach']((d,e)=>{const G=F,f=document['createElement']('div');f['className']='signal-row';const g=document['createElement']('input');g['className']=G(0xf1),g['placeholder']='__'+e,g['value']=d[G(0x10a)],g['title']='variable\x20name\x20used\x20in\x20the\x20formula\x20(defaults\x20to\x20__'+e+'\x20if\x20empty)',g['oninput']=()=>{const H=G;this['_signals'][e][H(0x10a)]=g[H(0x11e)],this[H(0x11b)]();};const h=document[G(0xec)](G(0x14a));h['className']='signal-path-input',h[G(0x11e)]=d[G(0x137)],h['placeholder']=G(0xe3),h['title']=G(0x103),h[G(0xfa)]=()=>{const I=G;this[I(0xfe)][e][I(0x137)]=h[I(0x11e)],this[I(0x11b)]();};const j=document['createElement'](G(0x10d));j[G(0x130)]=G(0x144),j[G(0xeb)]=G(0xf7);const k=document[G(0xec)]('img');k[G(0x106)]=assetsPath+'icons/copy.svg',k[G(0x15d)]['cssText']='width:12px;\x20height:12px;',j['appendChild'](k),j['onclick']=()=>{const J=G;this[J(0xfe)][J(0x119)](e+0x1,0x0,{...this['_signals'][e]}),this[J(0x11b)](),this['_renderSignalList']();};const l=document[G(0xec)]('button');l['className']=G(0x14c),l['textContent']=G(0x135),l['title']='Browse\x20signal',l['onclick']=()=>this[G(0xe9)](e,h);const m=document['createElement'](G(0x10d));m[G(0x130)]='signal-icon-btn',m[G(0xeb)]='Remove';const n=document[G(0xec)](G(0x14e));n['src']=assetsPath+G(0x13c),n['style']['cssText']='width:12px;\x20height:12px;',m['appendChild'](n),m[G(0x156)]=()=>{const K=G;this['_signals'][K(0x119)](e,0x1),this['_syncSignals'](),this['_renderSignalList']();},f['appendChild'](g),f[G(0x13a)](h),f[G(0x13a)](l),f['appendChild'](j),f['appendChild'](m),c[G(0x13a)](f);});}['_syncSignals'](){const L=y;this['objectNames']=this[L(0x138)](),this[L(0x111)]();}['_addSignal'](){const M=y;this['_signals'][M(0x112)]({'name':'','signal':''}),this[M(0x12b)]();}async['_selectForRow'](c,d){const N=y;let e=this[N(0x152)][N(0xf4)]();e['initialize'](this[N(0xe8)],this[N(0x149)],'binding'),e['title']=N(0xf8);const f=new AbortController();e['objectDoubleclicked']['on'](()=>{const O=N;f[O(0x127)]();let h='';if(e[O(0xe1)]['specialType']=='signalProperty')h='?';else e[O(0xe1)][O(0x100)]===O(0xf3)&&(h='??');this[O(0xfe)][c][O(0x137)]=h+e[O(0xe1)][O(0x108)],d['value']=this[O(0xfe)][c]['signal'],this[O(0x11b)]();});let g=await this[N(0x152)][N(0x153)](e,{'x':0x64,'y':0x64,'width':0x190,'height':0x12c,'parent':this,'abortSignal':f[N(0x137)]});if(g){let h='';if(e['selectedObject']['specialType']=='signalProperty')h='?';else e[N(0xe1)]['bindabletype']===N(0xf3)&&(h='??');this['_signals'][c]['signal']=h+e['selectedObject']['fullName'],d[N(0x11e)]=this['_signals'][c][N(0x137)],this[N(0x11b)]();}}['_renderConverterList'](){const P=y,c=this['_converterListContainer'];c[P(0xf2)]='';const d=this[P(0x12a)]?.['type']===P(0x131)?P(0x131):'text';this[P(0x12c)]['forEach']((e,f)=>{const Q=P,g=document[Q(0xec)](Q(0x133));g['className']=Q(0xf9);const h=document['createElement']('input');h['style']['cssText']=Q(0x12e),h[Q(0x11e)]=e['key'],h[Q(0x147)]='condition',h[Q(0xfa)]=()=>{const R=Q;this['converters'][f]['key']=h[R(0x11e)];};const j=document['createElement'](Q(0x14a));j['type']=d,j[Q(0x15d)][Q(0x13f)]='flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;',j[Q(0x11e)]=e[Q(0x11e)],j['placeholder']='value',j[Q(0xfa)]=()=>{const S=Q;this[S(0x12c)][f]['value']=j[S(0x11e)];};const k=document['createElement'](Q(0x10d));k['className']='signal-icon-btn',k[Q(0xeb)]=Q(0xf7);const l=document['createElement'](Q(0x14e));l[Q(0x106)]=assetsPath+Q(0x136),l[Q(0x15d)][Q(0x13f)]=Q(0x120),k[Q(0x13a)](l),k[Q(0x156)]=()=>{this['converters']['splice'](f+0x1,0x0,{...this['converters'][f]}),this['_renderConverterList']();};const m=document[Q(0xec)](Q(0x10d));m[Q(0x130)]=Q(0x144),m['title']='Remove';const n=document[Q(0xec)](Q(0x14e));n[Q(0x106)]=assetsPath+Q(0x13c),n['style']['cssText']='width:12px;\x20height:12px;',m['appendChild'](n),m['onclick']=()=>{const T=Q;this['converters']['splice'](f,0x1),this[T(0xe6)]();},g[Q(0x13a)](h),g[Q(0x13a)](j),g['appendChild'](k),g[Q(0x13a)](m),c['appendChild'](g);});}[y(0x116)](){const U=y;this['converters']['push']({'key':'','value':''}),this[U(0xe6)]();}async['_selectNamedConverter'](){const V=y,c=BindingsEditor[V(0x118)];if(c['length']===0x0)return;let d='',e=null;const f=document['createElement']('div');f['style'][V(0x13f)]='display:flex;\x20flex-direction:column;\x20height:100%;\x20box-sizing:border-box;\x20font-size:12px;';const g=document['createElement'](V(0x133));g[V(0x15d)]['cssText']=V(0xea),g[V(0xf0)]='Select\x20a\x20converter\x20and\x20confirm\x20with\x20OK.',f[V(0x13a)](g);const h=document[V(0xec)](V(0x133));h[V(0x15d)][V(0x13f)]='flex:1;\x20overflow-y:auto;\x20padding:4px;',f[V(0x13a)](h);const i=m=>{const W=V;m[W(0x15d)]['background']='',m['style'][W(0x10e)]='transparent';},j=(m,n)=>{const X=V;if(e)i(e);e=m,m['style'][X(0x11c)]='#e8f4fd',m['style'][X(0x10e)]=X(0x129),d=n;};for(const m of c){const n=document[V(0xec)]('div');n['style']['cssText']=V(0xe5);const o=document[V(0xec)](V(0x133));o[V(0x15d)][V(0x13f)]=V(0x11f),o['textContent']=m['name'],n[V(0x13a)](o);if(m[V(0x158)]){const p=document['createElement'](V(0x133));p['style']['cssText']=V(0x104),p['textContent']=m[V(0x158)],n[V(0x13a)](p);}if(m[V(0x114)]&&Object['keys'](m['converter'])['length']>0x0){const q=document[V(0xec)]('div');q['style'][V(0x13f)]='display:grid;\x20grid-template-columns:max-content\x20max-content\x201fr;\x20gap:1px\x206px;\x20margin-top:4px;\x20padding:4px\x206px;\x20background:#f5f5f5;\x20border-radius:2px;\x20font-family:monospace;\x20font-size:11px;\x20color:#333;';for(const [r,s]of Object['entries'](m['converter'])){const t=document[V(0xec)](V(0x115));t['style']['cssText']=V(0xe7),t[V(0xf0)]=r;const u=document[V(0xec)]('span');u['style']['cssText']='color:#aaa;',u[V(0xf0)]='→';const w=document[V(0xec)](V(0x115));w[V(0x15d)][V(0x13f)]=V(0x13d),w['textContent']=String(s),q['appendChild'](t),q[V(0x13a)](u),q['appendChild'](w);}n['appendChild'](q);}n['onmouseenter']=()=>{const Y=V;if(n!==e)n[Y(0x15d)]['background']='#f5f5f5';},n[V(0x126)]=()=>{if(n!==e)n['style']['background']='';},n[V(0x156)]=()=>j(n,m['name']),h['appendChild'](n);}const l=await this['_shell']['openConfirmation'](f,{'x':0x64,'y':0x64,'width':0x140,'height':0x12c,'parent':this});l&&d&&(this['convertersString']=d,this['_getDomElement'](V(0xe4))['value']=d,this[V(0x111)]());}['_refresh'](){requestAnimationFrame(()=>{const Z=b;this[Z(0x111)]();});}async['showHistoric'](){const a0=y;let c=new BindingsEditorHistoric(this['historic']);const d=new AbortController();c[a0(0xeb)]=a0(0x12f)+this['_property']['name'];let e=await this['_shell'][a0(0x153)](c,{'x':0x64,'y':0x64,'width':0x1a4,'height':0x1fe,'parent':this,'abortSignal':d[a0(0x137)],'disableResize':!![],'cancelText':'Remove'});!e?this['historic']=null:this['historic']=c[a0(0x15c)],this[a0(0x111)]();}[y(0x14f)](){const a1=y,c=document['createElement']('iframe');c[a1(0x117)]=BindingsEditor['helpSections'][a1(0x128)]>0x0?bindingsEditorHelpHtml[a1(0xfb)](a1(0x143),BindingsEditor['helpSections'][a1(0x10b)]('')+a1(0x143)):bindingsEditorHelpHtml,c['style']['cssText']=a1(0x141),this[a1(0x152)]['openModal'](c,{'title':'Bindings\x20Editor\x20Help','parent':this,'x':-0x294,'y':-0x50,'width':0x276,'height':0x244});}}function b(c,d){c=c-0xe1;const e=a();let f=e[c];return f;}customElements['define'](BindingsEditor['is'],BindingsEditor);
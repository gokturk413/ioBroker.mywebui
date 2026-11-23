const y=b;(function(c,d){const x=b,e=c();while(!![]){try{const f=parseInt(x(0xf3))/0x1+parseInt(x(0xb5))/0x2*(parseInt(x(0x91))/0x3)+parseInt(x(0xd5))/0x4*(-parseInt(x(0xa2))/0x5)+-parseInt(x(0xf6))/0x6*(parseInt(x(0xab))/0x7)+parseInt(x(0x97))/0x8+parseInt(x(0xcf))/0x9*(-parseInt(x(0x90))/0xa)+-parseInt(x(0xe7))/0xb*(parseInt(x(0xbe))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x35521));function b(c,d){c=c-0x81;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,html,css}from'@node-projects/base-custom-webcomponent';import{BindingMode,BindingTarget,assetsPath}from'@gokturk413/web-component-designer';import{BindingsEditorHistoric}from'./BindingsEditorHistoric.js';import{bindingsEditorHelpHtml}from'./BindingsEditorHelp.js';function a(){const a3=['flex:1;\x20overflow-y:auto;\x20padding:4px;','writeBackSignal','_bindingTarget','padding:6px\x208px\x204px;\x20color:#666;\x20font-size:11px;\x20border-bottom:1px\x20solid\x20#e0e0e0;\x20flex-shrink:0;','signalListContainer','_selectForRow','color:#555;\x20text-align:right;','display','signal','#e8f4fd','converters','placeholder','signal-icon-btn','458931LXVayu','div','icons/copy.svg','historicLabel','#0078d7','slice','src','historic','color:#555;\x20font-size:11px;\x20margin-top:2px;','template','expression','_selectNamedConverter','329277BboiDD','width:12px;\x20height:12px;','mode','24EJCdUI','expressionTwoWay','twoWay','description','join','text','innerHTML','_bindingsRefresh','openConfirmation','title','button','_parseObjectNames','filter','Duplicate','value','namedConverters','input','icons/delete.svg','style','240ZYBLeT','3012xjHjLL','_restoreCachedInititalValues','objectNames','appendChild','onmouseenter','_instanceServiceContainer','2875360anUDep','twoWayPossible','signalProperty','push','showHistoric','length','padding:5px\x206px\x205px\x209px;\x20cursor:pointer;\x20border-radius:3px;\x20border-left:3px\x20solid\x20transparent;\x20margin-bottom:2px;','none','color','type','selectedObject','5UXabVf','_serviceContainer','ready','property','_refresh','select\x20signal...','createElement','binding','_binding','41293MjKBlY','Edit\x20historic\x20binding\x20to:\x20','properties','className','convertersString','_renderConverterList','_renderSignalList','cssText','_property','specialType','326rmljDY','_bindingsParse','_signalListContainer','invert','onclick','_getDomElement','objectDoubleclicked','Browse\x20signal','borderLeftColor','84mVHXsx','_signals','split','_shell','textContent','_syncSignals','forEach','helpSections','transparent','variable\x20name\x20used\x20in\x20the\x20formula\x20(defaults\x20to\x20__','onmouseleave','Remove','height','splice','background','display:grid;\x20grid-template-columns:max-content\x20max-content\x201fr;\x20gap:1px\x206px;\x20margin-top:4px;\x20padding:4px\x206px;\x20background:#f5f5f5;\x20border-radius:2px;\x20font-family:monospace;\x20font-size:11px;\x20color:#333;','name','31554UphEfF','_showHelp','map','attribute','bindableObjectNames','signal\x20path','936644uHVxeo','replace','converter','fromEntries','node-projects-visualization-bindings-editor'];a=function(){return a3;};return a();}export class BindingsEditor extends BaseCustomWebComponentConstructorAppend{static [y(0xf0)]=html`
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
        </div>`;static [y(0x8f)]=css`
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
        }`;static ['is']=y(0xd9);static [y(0xad)]={'twoWayPossible':Boolean,'twoWay':Boolean,'expression':String,'events':String,'invert':Boolean,'historic':Object};[y(0x98)]=![];[y(0xf8)]=![];[y(0xf1)]='';[y(0xdb)]='';[y(0xf7)]='';['historic'];[y(0x93)]='';['events']='';['invert']=![];['converters']=[];static ['namedConverters']=[];static [y(0xc5)]=[];[y(0xaf)];get['converter'](){const z=y;if(this['convertersString'])return this['convertersString'];if(this['converters'][z(0x9c)]>0x0)return Object[z(0xd8)](this['converters']['map'](d=>[d['key'],d[z(0x8b)]]));return undefined;}[y(0xb3)];[y(0xaa)];['_bindingTarget'];['_serviceContainer'];['_instanceServiceContainer'];['_shell'];['_signals']=[];[y(0xb7)];['_converterListContainer'];constructor(c,d,e,f,g,h,i={}){const A=y;super(),super[A(0x92)](),this[A(0xb3)]=c,this[A(0xaa)]=d,this['_bindingTarget']=e,this['_serviceContainer']=f,this[A(0x96)]=g,this['_shell']=h;i?.[A(0x8c)]===![]&&(this[A(0xba)]('namedConverterRow')['style'][A(0xe1)]=A(0x9e));const j=this[A(0xba)]('historicBtn');if(i?.[A(0x9b)]===![])j[A(0x8f)][A(0xe1)]='none';else i?.['historicLabel']&&(j['textContent']=i[A(0xea)]);}[y(0xa4)](){const B=y;this['_parseAttributesToProperties'](),this['_assignEvents'](),this[B(0xb7)]=this[B(0xba)](B(0xde)),this['_converterListContainer']=this[B(0xba)]('converterListContainer'),this[B(0xba)]('helpBtn')[B(0xb9)]=()=>this['_showHelp']();if(BindingsEditor['namedConverters'][B(0x9c)]===0x0)this[B(0xba)]('namedConverterBrowse')[B(0x8f)][B(0xe1)]='none';this['twoWayPossible']=![];if(this[B(0xdc)]==BindingTarget[B(0xa5)]||this['_bindingTarget']==BindingTarget[B(0xd2)])this[B(0x98)]=!![];if(this['_binding']){this[B(0xf8)]=this[B(0xaa)][B(0xf5)]==BindingMode[B(0xf8)],this[B(0xf1)]=this['_binding'][B(0xf1)],this['writeBackSignal']=this['_binding']['writeBackSignal'],this[B(0xf7)]=this['_binding'][B(0xf7)],this['historic']=this['_binding'][B(0xee)],this['invert']=this['_binding'][B(0xb8)];if(this['_binding'][B(0xd3)])this[B(0x93)]=this[B(0xaa)][B(0xd3)][B(0x81)](';');if(this[B(0xaa)]['converter']){if(typeof this['_binding'][B(0xd7)]==='string')this[B(0xaf)]=this['_binding'][B(0xd7)];else for(let d in this[B(0xaa)][B(0xd7)]){this[B(0xe4)]['push']({'key':d,'value':this['_binding'][B(0xd7)][d]});}}if(this['_binding']['changedEvents']&&this['_binding']['changedEvents']['length'])this['events']=this[B(0xaa)]['changedEvents'][B(0x81)](';');}if(this[B(0xf1)]){let e=this[B(0xba)]('expression');this[B(0xf1)]['indexOf']('\x0a')>=0x0&&(e[B(0x8f)][B(0xca)]=0x3*0x11+'px');}if(this['expressionTwoWay']){let f=this['_getDomElement']('expression2way');this['expressionTwoWay']['indexOf']('\x0a')>=0x0&&(f['style']['height']=0x3*0x11+'px');}this['_signals']=this[B(0x88)](this['objectNames']);if(this[B(0xbf)][B(0x9c)]===0x0)this[B(0xbf)]['push']({'name':'','signal':''});this['_renderSignalList'](),this[B(0xb0)](),this[B(0xb6)]();}['_parseObjectNames'](c){const C=y;if(!c)return[];return c[C(0xc0)](';')[C(0x89)](d=>d[C(0x9c)]>0x0)['map'](d=>{const D=C,e=d['indexOf'](':');if(e>0x0)return{'name':d[D(0xec)](0x0,e),'signal':d['slice'](e+0x1)};return{'name':'','signal':d};});}['_signalsToObjectNames'](){const E=y;return this['_signals'][E(0xd1)](c=>c['name']?c[E(0xce)]+':'+c[E(0xe2)]:c['signal'])['join'](';');}['_renderSignalList'](){const F=y,c=this['_signalListContainer'];c[F(0x83)]='',this['_signals'][F(0xc4)]((d,e)=>{const G=F,f=document[G(0xa8)](G(0xe8));f['className']='signal-row';const g=document[G(0xa8)](G(0x8d));g[G(0xae)]='signal-name-input',g[G(0xe5)]='__'+e,g['value']=d['name'],g['title']=G(0xc7)+e+'\x20if\x20empty)',g['oninput']=()=>{const H=G;this[H(0xbf)][e]['name']=g[H(0x8b)],this['_syncSignals']();};const h=document[G(0xa8)](G(0x8d));h['className']='signal-path-input',h[G(0x8b)]=d['signal'],h[G(0xe5)]=G(0xd4),h['title']='signal\x20path\x20(prefix:\x20?\x20=\x20signal\x20name\x20in\x20screen\x20property,\x20??\x20=\x20screen\x20property\x20value,\x20?$\x20=\x20signal\x20object\x20in\x20screen\x20property,\x20?@\x20=\x20screen\x20attribute,\x20#\x20=\x20signal\x20name\x20in\x20target\x20property,\x20##\x20=\x20target\x20property\x20value,\x20#$\x20=\x20signal\x20object\x20in\x20target\x20property,\x20#@\x20=\x20target\x20attribute)',h['oninput']=()=>{const I=G;this['_signals'][e][I(0xe2)]=h['value'],this['_syncSignals']();};const j=document[G(0xa8)]('button');j[G(0xae)]=G(0xe6),j[G(0x86)]='Duplicate';const k=document[G(0xa8)]('img');k[G(0xed)]=assetsPath+G(0xe9),k['style'][G(0xb2)]=G(0xf4),j['appendChild'](k),j['onclick']=()=>{const J=G;this['_signals'][J(0xcb)](e+0x1,0x0,{...this['_signals'][e]}),this[J(0xc3)](),this[J(0xb1)]();};const l=document['createElement'](G(0x87));l['className']='signal-select-btn',l[G(0xc2)]='...',l[G(0x86)]=G(0xbc),l['onclick']=()=>this['_selectForRow'](e,h);const m=document['createElement']('button');m[G(0xae)]='signal-icon-btn',m[G(0x86)]='Remove';const n=document[G(0xa8)]('img');n[G(0xed)]=assetsPath+'icons/delete.svg',n['style'][G(0xb2)]='width:12px;\x20height:12px;',m['appendChild'](n),m[G(0xb9)]=()=>{const K=G;this[K(0xbf)]['splice'](e,0x1),this[K(0xc3)](),this['_renderSignalList']();},f['appendChild'](g),f[G(0x94)](h),f['appendChild'](l),f[G(0x94)](j),f[G(0x94)](m),c[G(0x94)](f);});}[y(0xc3)](){const L=y;this['objectNames']=this['_signalsToObjectNames'](),this[L(0x84)]();}['_addSignal'](){const M=y;this[M(0xbf)][M(0x9a)]({'name':'','signal':''}),this[M(0xb1)]();}async[y(0xdf)](c,d){const N=y;let e=this[N(0xc1)]['createBindableObjectBrowser']();e['initialize'](this[N(0xa3)],this['_instanceServiceContainer'],N(0xa9)),e['title']=N(0xa7);const f=new AbortController();e[N(0xbb)]['on'](()=>{const O=N;f['abort']();let h='';if(e[O(0xa1)]['specialType']==O(0x99))h='?';else e[O(0xa1)]['bindabletype']===O(0xa5)&&(h='??');this['_signals'][c]['signal']=h+e[O(0xa1)]['fullName'],d[O(0x8b)]=this['_signals'][c][O(0xe2)],this['_syncSignals']();});let g=await this['_shell']['openConfirmation'](e,{'x':0x64,'y':0x64,'width':0x190,'height':0x12c,'parent':this,'abortSignal':f['signal']});if(g){let h='';if(e[N(0xa1)][N(0xb4)]=='signalProperty')h='?';else e[N(0xa1)]['bindabletype']===N(0xa5)&&(h='??');this[N(0xbf)][c]['signal']=h+e['selectedObject']['fullName'],d[N(0x8b)]=this[N(0xbf)][c][N(0xe2)],this[N(0xc3)]();}}['_renderConverterList'](){const P=y,c=this['_converterListContainer'];c['innerHTML']='';const d=this[P(0xb3)]?.['type']===P(0x9f)?P(0x9f):P(0x82);this['converters']['forEach']((e,f)=>{const Q=P,g=document[Q(0xa8)]('div');g['className']='signal-row';const h=document['createElement']('input');h['style']['cssText']='flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;',h[Q(0x8b)]=e['key'],h[Q(0xe5)]='condition',h['oninput']=()=>{const R=Q;this['converters'][f]['key']=h[R(0x8b)];};const j=document['createElement'](Q(0x8d));j[Q(0xa0)]=d,j[Q(0x8f)]['cssText']='flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;',j[Q(0x8b)]=e['value'],j[Q(0xe5)]='value',j['oninput']=()=>{const S=Q;this[S(0xe4)][f]['value']=j['value'];};const k=document['createElement']('button');k[Q(0xae)]=Q(0xe6),k[Q(0x86)]=Q(0x8a);const l=document['createElement']('img');l['src']=assetsPath+'icons/copy.svg',l[Q(0x8f)][Q(0xb2)]=Q(0xf4),k[Q(0x94)](l),k[Q(0xb9)]=()=>{const T=Q;this[T(0xe4)]['splice'](f+0x1,0x0,{...this[T(0xe4)][f]}),this['_renderConverterList']();};const m=document['createElement']('button');m['className']=Q(0xe6),m['title']=Q(0xc9);const n=document['createElement']('img');n['src']=assetsPath+Q(0x8e),n[Q(0x8f)]['cssText']=Q(0xf4),m['appendChild'](n),m[Q(0xb9)]=()=>{const U=Q;this[U(0xe4)][U(0xcb)](f,0x1),this[U(0xb0)]();},g['appendChild'](h),g['appendChild'](j),g['appendChild'](k),g['appendChild'](m),c['appendChild'](g);});}['_addConverter'](){const V=y;this[V(0xe4)]['push']({'key':'','value':''}),this[V(0xb0)]();}async[y(0xf2)](){const W=y,c=BindingsEditor['namedConverters'];if(c['length']===0x0)return;let d='',e=null;const f=document['createElement'](W(0xe8));f['style']['cssText']='display:flex;\x20flex-direction:column;\x20height:100%;\x20box-sizing:border-box;\x20font-size:12px;';const g=document['createElement'](W(0xe8));g[W(0x8f)][W(0xb2)]=W(0xdd),g[W(0xc2)]='Select\x20a\x20converter\x20and\x20confirm\x20with\x20OK.',f['appendChild'](g);const h=document['createElement'](W(0xe8));h[W(0x8f)][W(0xb2)]=W(0xda),f[W(0x94)](h);const i=m=>{const X=W;m[X(0x8f)][X(0xcc)]='',m[X(0x8f)][X(0xbd)]=X(0xc6);},j=(m,n)=>{const Y=W;if(e)i(e);e=m,m[Y(0x8f)][Y(0xcc)]=Y(0xe3),m[Y(0x8f)]['borderLeftColor']=Y(0xeb),d=n;};for(const m of c){const n=document[W(0xa8)]('div');n[W(0x8f)]['cssText']=W(0x9d);const o=document['createElement'](W(0xe8));o['style'][W(0xb2)]='font-family:monospace;\x20font-weight:bold;\x20color:#111;',o['textContent']=m[W(0xce)],n[W(0x94)](o);if(m[W(0xf9)]){const p=document['createElement'](W(0xe8));p[W(0x8f)][W(0xb2)]=W(0xef),p['textContent']=m[W(0xf9)],n[W(0x94)](p);}if(m[W(0xd7)]&&Object['keys'](m[W(0xd7)])['length']>0x0){const q=document['createElement']('div');q['style'][W(0xb2)]=W(0xcd);for(const [r,s]of Object['entries'](m['converter'])){const t=document[W(0xa8)]('span');t[W(0x8f)][W(0xb2)]=W(0xe0),t['textContent']=r;const u=document['createElement']('span');u[W(0x8f)]['cssText']='color:#aaa;',u['textContent']='→';const w=document['createElement']('span');w[W(0x8f)]['cssText']='color:#0078d7;\x20font-weight:bold;',w[W(0xc2)]=String(s),q[W(0x94)](t),q[W(0x94)](u),q[W(0x94)](w);}n['appendChild'](q);}n[W(0x95)]=()=>{if(n!==e)n['style']['background']='#f5f5f5';},n[W(0xc8)]=()=>{const Z=W;if(n!==e)n[Z(0x8f)]['background']='';},n['onclick']=()=>j(n,m['name']),h[W(0x94)](n);}const l=await this['_shell'][W(0x85)](f,{'x':0x64,'y':0x64,'width':0x140,'height':0x12c,'parent':this});l&&d&&(this[W(0xaf)]=d,this['_getDomElement']('namedConverterInput')[W(0x8b)]=d,this[W(0x84)]());}[y(0xa6)](){requestAnimationFrame(()=>{const a0=b;this[a0(0x84)]();});}async[y(0x9b)](){const a1=y;let c=new BindingsEditorHistoric(this[a1(0xee)]);const d=new AbortController();c['title']=a1(0xac)+this[a1(0xb3)]['name'];let e=await this['_shell']['openConfirmation'](c,{'x':0x64,'y':0x64,'width':0x1a4,'height':0x1fe,'parent':this,'abortSignal':d['signal'],'disableResize':!![],'cancelText':a1(0xc9)});!e?this['historic']=null:this['historic']=c[a1(0xee)],this[a1(0x84)]();}[y(0xd0)](){const a2=y,c=document['createElement']('iframe');c['srcdoc']=BindingsEditor['helpSections']['length']>0x0?bindingsEditorHelpHtml[a2(0xd6)]('</div>\x0a</body>',BindingsEditor['helpSections'][a2(0x81)]('')+'</div>\x0a</body>'):bindingsEditorHelpHtml,c['style'][a2(0xb2)]='width:100%;\x20height:100%;\x20border:none;\x20display:block;',this['_shell']['openModal'](c,{'title':'Bindings\x20Editor\x20Help','parent':this,'x':-0x294,'y':-0x50,'width':0x276,'height':0x244});}}customElements['define'](BindingsEditor['is'],BindingsEditor);
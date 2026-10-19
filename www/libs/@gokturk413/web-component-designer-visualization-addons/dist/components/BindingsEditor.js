const y=b;(function(c,d){const x=b,e=c();while(!![]){try{const f=parseInt(x(0xa5))/0x1*(-parseInt(x(0xb0))/0x2)+-parseInt(x(0xec))/0x3*(-parseInt(x(0xb4))/0x4)+-parseInt(x(0x9b))/0x5*(-parseInt(x(0xa1))/0x6)+-parseInt(x(0xc0))/0x7+-parseInt(x(0x77))/0x8+parseInt(x(0x7c))/0x9*(parseInt(x(0x6b))/0xa)+parseInt(x(0xbf))/0xb*(parseInt(x(0x92))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x1aa5f));function a(){const a1=['createElement','5370wAqMHC','expression','_renderConverterList','node-projects-visualization-bindings-editor','#e8f4fd','_property','keys','_serviceContainer','abort','historicLabel','fullName','helpSections','1496864rOrPYo','description','openConfirmation','length','oninput','1017tgvDqy','twoWay','_shell','name','input','string','indexOf','signal-icon-btn','changedEvents','signal-name-input','none','objectDoubleclicked','color','showHistoric','entries','key','_syncSignals','twoWayPossible','createBindableObjectBrowser','type','_instanceServiceContainer','historic','155976yjcnzW','className','signal\x20path','namedConverters','namedConverterRow','_binding','historicBtn','Select\x20a\x20converter\x20and\x20confirm\x20with\x20OK.','converters','5HWdliC','innerHTML','objectNames','_bindingTarget','display','font-family:monospace;\x20font-weight:bold;\x20color:#111;','146214PkCNkD','color:#555;\x20text-align:right;','invert','icons/copy.svg','19crSvBi','replace','map','value','onclick','style','img','join','namedConverterBrowse','condition','src','14302oEHkvc','padding:5px\x206px\x205px\x209px;\x20cursor:pointer;\x20border-radius:3px;\x20border-left:3px\x20solid\x20transparent;\x20margin-bottom:2px;','_converterListContainer','split','4IdlCdV','fromEntries','openModal','converter','_signals','title','push','width:100%;\x20height:100%;\x20border:none;\x20display:block;','splice','_signalsToObjectNames','Remove','330UgcnPo','1131865BYteyz','#f5f5f5','forEach','Browse\x20signal','_renderSignalList','</div>\x0a</body>','expressionTwoWay','_parseObjectNames','signal-path-input','color:#555;\x20font-size:11px;\x20margin-top:2px;','textContent','_addSignal','height','selectedObject','filter','borderLeftColor','bindableObjectNames','span','bindabletype','signalProperty','variable\x20name\x20used\x20in\x20the\x20formula\x20(defaults\x20to\x20__','cssText','flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;','mode','converterListContainer','Bindings\x20Editor\x20Help','signal-select-btn','namedConverterInput','_signalListContainer','placeholder','_getDomElement','appendChild','_bindingsRefresh','convertersString','onmouseenter','div','background','properties','signal','define','width:12px;\x20height:12px;','flex:1;\x20overflow-y:auto;\x20padding:4px;','#0078d7','signal-row','356499fWCcLv','button'];a=function(){return a1;};return a();}import{BaseCustomWebComponentConstructorAppend,html,css}from'@node-projects/base-custom-webcomponent';import{BindingMode,BindingTarget,assetsPath}from'@gokturk413/web-component-designer';function b(c,d){c=c-0x69;const e=a();let f=e[c];return f;}import{BindingsEditorHistoric}from'./BindingsEditorHistoric.js';import{bindingsEditorHelpHtml}from'./BindingsEditorHelp.js';export class BindingsEditor extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
        }`;static ['is']=y(0x6e);static [y(0xe5)]={'twoWayPossible':Boolean,'twoWay':Boolean,'expression':String,'events':String,'invert':Boolean,'historic':Object};[y(0x8d)]=![];[y(0x7d)]=![];[y(0x6c)]='';['writeBackSignal']='';[y(0xc6)]='';['historic'];['objectNames']='';['events']='';['invert']=![];[y(0x9a)]=[];static [y(0x95)]=[];static [y(0x76)]=[];[y(0xe1)];get[y(0xb7)](){const z=y;if(this['convertersString'])return this[z(0xe1)];if(this['converters'][z(0x7a)]>0x0)return Object[z(0xb5)](this[z(0x9a)][z(0xa7)](d=>[d[z(0x8b)],d['value']]));return undefined;}['_property'];[y(0x97)];['_bindingTarget'];['_serviceContainer'];[y(0x90)];[y(0x7e)];[y(0xb8)]=[];['_signalListContainer'];[y(0xb2)];constructor(c,d,e,f,g,h,i={}){const A=y;super(),super['_restoreCachedInititalValues'](),this['_property']=c,this[A(0x97)]=d,this['_bindingTarget']=e,this[A(0x72)]=f,this['_instanceServiceContainer']=g,this['_shell']=h;i?.[A(0x95)]===![]&&(this[A(0xde)](A(0x96))['style']['display']=A(0x86));const j=this[A(0xde)](A(0x98));if(i?.['showHistoric']===![])j[A(0xaa)][A(0x9f)]='none';else i?.[A(0x74)]&&(j[A(0xca)]=i[A(0x74)]);}['ready'](){const B=y;this['_parseAttributesToProperties'](),this['_assignEvents'](),this[B(0xdc)]=this[B(0xde)]('signalListContainer'),this['_converterListContainer']=this['_getDomElement'](B(0xd8)),this[B(0xde)]('helpBtn')[B(0xa9)]=()=>this['_showHelp']();if(BindingsEditor['namedConverters'][B(0x7a)]===0x0)this['_getDomElement'](B(0xad))['style'][B(0x9f)]=B(0x86);this[B(0x8d)]=![];if(this['_bindingTarget']==BindingTarget['property']||this[B(0x9e)]==BindingTarget['attribute'])this[B(0x8d)]=!![];if(this[B(0x97)]){this[B(0x7d)]=this[B(0x97)][B(0xd7)]==BindingMode['twoWay'],this['expression']=this['_binding']['expression'],this['writeBackSignal']=this[B(0x97)]['writeBackSignal'],this[B(0xc6)]=this[B(0x97)]['expressionTwoWay'],this[B(0x91)]=this[B(0x97)]['historic'],this['invert']=this[B(0x97)][B(0xa3)];if(this['_binding'][B(0xd0)])this['objectNames']=this['_binding']['bindableObjectNames'][B(0xac)](';');if(this[B(0x97)][B(0xb7)]){if(typeof this[B(0x97)]['converter']===B(0x81))this['convertersString']=this['_binding']['converter'];else for(let d in this['_binding']['converter']){this[B(0x9a)][B(0xba)]({'key':d,'value':this['_binding'][B(0xb7)][d]});}}if(this[B(0x97)][B(0x84)]&&this['_binding']['changedEvents']['length'])this['events']=this['_binding'][B(0x84)][B(0xac)](';');}if(this['expression']){let e=this[B(0xde)](B(0x6c));this[B(0x6c)][B(0x82)]('\x0a')>=0x0&&(e[B(0xaa)]['height']=0x3*0x11+'px');}if(this['expressionTwoWay']){let f=this['_getDomElement']('expression2way');this['expressionTwoWay'][B(0x82)]('\x0a')>=0x0&&(f['style'][B(0xcc)]=0x3*0x11+'px');}this[B(0xb8)]=this['_parseObjectNames'](this['objectNames']);if(this['_signals'][B(0x7a)]===0x0)this[B(0xb8)][B(0xba)]({'name':'','signal':''});this['_renderSignalList'](),this[B(0x6d)](),this['_bindingsParse']();}[y(0xc7)](c){const C=y;if(!c)return[];return c[C(0xb3)](';')[C(0xce)](d=>d['length']>0x0)[C(0xa7)](d=>{const e=d['indexOf'](':');if(e>0x0)return{'name':d['slice'](0x0,e),'signal':d['slice'](e+0x1)};return{'name':'','signal':d};});}['_signalsToObjectNames'](){const D=y;return this[D(0xb8)]['map'](c=>c['name']?c['name']+':'+c[D(0xe6)]:c[D(0xe6)])[D(0xac)](';');}['_renderSignalList'](){const E=y,c=this[E(0xdc)];c[E(0x9c)]='',this['_signals'][E(0xc2)]((d,e)=>{const F=E,f=document['createElement'](F(0xe3));f['className']='signal-row';const g=document[F(0x6a)](F(0x80));g[F(0x93)]=F(0x85),g[F(0xdd)]='__'+e,g[F(0xa8)]=d[F(0x7f)],g['title']=F(0xd4)+e+'\x20if\x20empty)',g['oninput']=()=>{const G=F;this[G(0xb8)][e][G(0x7f)]=g['value'],this[G(0x8c)]();};const h=document['createElement'](F(0x80));h['className']=F(0xc8),h['value']=d[F(0xe6)],h[F(0xdd)]=F(0x94),h[F(0xb9)]='signal\x20path\x20(prefix:\x20?\x20=\x20signal\x20name\x20in\x20screen\x20property,\x20??\x20=\x20screen\x20property\x20value,\x20?$\x20=\x20signal\x20object\x20in\x20screen\x20property,\x20?@\x20=\x20screen\x20attribute,\x20#\x20=\x20signal\x20name\x20in\x20target\x20property,\x20##\x20=\x20target\x20property\x20value,\x20#$\x20=\x20signal\x20object\x20in\x20target\x20property,\x20#@\x20=\x20target\x20attribute)',h[F(0x7b)]=()=>{const H=F;this['_signals'][e]['signal']=h[H(0xa8)],this[H(0x8c)]();};const j=document['createElement']('button');j['className']='signal-icon-btn',j[F(0xb9)]='Duplicate';const k=document['createElement'](F(0xab));k[F(0xaf)]=assetsPath+F(0xa4),k['style']['cssText']='width:12px;\x20height:12px;',j[F(0xdf)](k),j[F(0xa9)]=()=>{const I=F;this[I(0xb8)]['splice'](e+0x1,0x0,{...this[I(0xb8)][e]}),this[I(0x8c)](),this[I(0xc4)]();};const l=document[F(0x6a)](F(0x69));l['className']=F(0xda),l[F(0xca)]='...',l[F(0xb9)]=F(0xc3),l[F(0xa9)]=()=>this['_selectForRow'](e,h);const m=document['createElement'](F(0x69));m[F(0x93)]=F(0x83),m['title']=F(0xbe);const n=document[F(0x6a)]('img');n['src']=assetsPath+'icons/delete.svg',n[F(0xaa)]['cssText']=F(0xe8),m['appendChild'](n),m['onclick']=()=>{const J=F;this[J(0xb8)][J(0xbc)](e,0x1),this['_syncSignals'](),this['_renderSignalList']();},f[F(0xdf)](g),f['appendChild'](h),f['appendChild'](l),f['appendChild'](j),f['appendChild'](m),c[F(0xdf)](f);});}[y(0x8c)](){const K=y;this[K(0x9d)]=this[K(0xbd)](),this[K(0xe0)]();}[y(0xcb)](){const L=y;this[L(0xb8)][L(0xba)]({'name':'','signal':''}),this['_renderSignalList']();}async['_selectForRow'](c,d){const M=y;let e=this['_shell'][M(0x8e)]();e['initialize'](this[M(0x72)],this['_instanceServiceContainer'],'binding'),e['title']='select\x20signal...';const f=new AbortController();e[M(0x87)]['on'](()=>{const N=M;f[N(0x73)]();let h='';if(e[N(0xcd)]['specialType']=='signalProperty')h='?';else e['selectedObject']['bindabletype']==='property'&&(h='??');this[N(0xb8)][c][N(0xe6)]=h+e[N(0xcd)][N(0x75)],d['value']=this[N(0xb8)][c]['signal'],this['_syncSignals']();});let g=await this[M(0x7e)][M(0x79)](e,{'x':0x64,'y':0x64,'width':0x190,'height':0x12c,'parent':this,'abortSignal':f['signal']});if(g){let h='';if(e[M(0xcd)]['specialType']==M(0xd3))h='?';else e[M(0xcd)][M(0xd2)]==='property'&&(h='??');this['_signals'][c]['signal']=h+e['selectedObject']['fullName'],d[M(0xa8)]=this[M(0xb8)][c]['signal'],this[M(0x8c)]();}}['_renderConverterList'](){const O=y,c=this['_converterListContainer'];c[O(0x9c)]='';const d=this[O(0x70)]?.[O(0x8f)]===O(0x88)?O(0x88):'text';this['converters']['forEach']((e,f)=>{const P=O,g=document['createElement']('div');g['className']=P(0xeb);const h=document['createElement'](P(0x80));h[P(0xaa)][P(0xd5)]='flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;',h[P(0xa8)]=e[P(0x8b)],h['placeholder']=P(0xae),h[P(0x7b)]=()=>{this['converters'][f]['key']=h['value'];};const j=document['createElement']('input');j['type']=d,j[P(0xaa)]['cssText']=P(0xd6),j[P(0xa8)]=e[P(0xa8)],j['placeholder']=P(0xa8),j[P(0x7b)]=()=>{const Q=P;this[Q(0x9a)][f]['value']=j['value'];};const k=document[P(0x6a)]('button');k['className']=P(0x83),k[P(0xb9)]='Duplicate';const l=document[P(0x6a)]('img');l['src']=assetsPath+'icons/copy.svg',l['style']['cssText']=P(0xe8),k[P(0xdf)](l),k[P(0xa9)]=()=>{const R=P;this['converters']['splice'](f+0x1,0x0,{...this[R(0x9a)][f]}),this['_renderConverterList']();};const m=document['createElement'](P(0x69));m['className']='signal-icon-btn',m[P(0xb9)]='Remove';const n=document[P(0x6a)](P(0xab));n['src']=assetsPath+'icons/delete.svg',n[P(0xaa)][P(0xd5)]=P(0xe8),m['appendChild'](n),m['onclick']=()=>{const S=P;this['converters'][S(0xbc)](f,0x1),this['_renderConverterList']();},g[P(0xdf)](h),g['appendChild'](j),g['appendChild'](k),g[P(0xdf)](m),c['appendChild'](g);});}['_addConverter'](){const T=y;this[T(0x9a)][T(0xba)]({'key':'','value':''}),this['_renderConverterList']();}async['_selectNamedConverter'](){const U=y,c=BindingsEditor[U(0x95)];if(c['length']===0x0)return;let d='',e=null;const f=document['createElement']('div');f['style']['cssText']='display:flex;\x20flex-direction:column;\x20height:100%;\x20box-sizing:border-box;\x20font-size:12px;';const g=document[U(0x6a)]('div');g['style']['cssText']='padding:6px\x208px\x204px;\x20color:#666;\x20font-size:11px;\x20border-bottom:1px\x20solid\x20#e0e0e0;\x20flex-shrink:0;',g[U(0xca)]=U(0x99),f[U(0xdf)](g);const h=document[U(0x6a)]('div');h['style']['cssText']=U(0xe9),f['appendChild'](h);const i=m=>{const V=U;m[V(0xaa)]['background']='',m['style'][V(0xcf)]='transparent';},j=(m,n)=>{const W=U;if(e)i(e);e=m,m['style'][W(0xe4)]=W(0x6f),m[W(0xaa)][W(0xcf)]=W(0xea),d=n;};for(const m of c){const n=document[U(0x6a)]('div');n['style']['cssText']=U(0xb1);const o=document[U(0x6a)](U(0xe3));o['style']['cssText']=U(0xa0),o[U(0xca)]=m[U(0x7f)],n['appendChild'](o);if(m['description']){const p=document[U(0x6a)](U(0xe3));p[U(0xaa)]['cssText']=U(0xc9),p[U(0xca)]=m[U(0x78)],n[U(0xdf)](p);}if(m[U(0xb7)]&&Object[U(0x71)](m[U(0xb7)])['length']>0x0){const q=document[U(0x6a)](U(0xe3));q[U(0xaa)][U(0xd5)]='display:grid;\x20grid-template-columns:max-content\x20max-content\x201fr;\x20gap:1px\x206px;\x20margin-top:4px;\x20padding:4px\x206px;\x20background:#f5f5f5;\x20border-radius:2px;\x20font-family:monospace;\x20font-size:11px;\x20color:#333;';for(const [r,s]of Object[U(0x8a)](m['converter'])){const t=document[U(0x6a)]('span');t[U(0xaa)][U(0xd5)]=U(0xa2),t[U(0xca)]=r;const u=document[U(0x6a)](U(0xd1));u['style']['cssText']='color:#aaa;',u['textContent']='→';const w=document[U(0x6a)]('span');w[U(0xaa)][U(0xd5)]='color:#0078d7;\x20font-weight:bold;',w[U(0xca)]=String(s),q[U(0xdf)](t),q['appendChild'](u),q['appendChild'](w);}n['appendChild'](q);}n[U(0xe2)]=()=>{const X=U;if(n!==e)n[X(0xaa)][X(0xe4)]=X(0xc1);},n['onmouseleave']=()=>{if(n!==e)n['style']['background']='';},n[U(0xa9)]=()=>j(n,m['name']),h['appendChild'](n);}const l=await this['_shell']['openConfirmation'](f,{'x':0x64,'y':0x64,'width':0x140,'height':0x12c,'parent':this});l&&d&&(this[U(0xe1)]=d,this['_getDomElement'](U(0xdb))['value']=d,this['_bindingsRefresh']());}['_refresh'](){requestAnimationFrame(()=>{const Y=b;this[Y(0xe0)]();});}async[y(0x89)](){const Z=y;let c=new BindingsEditorHistoric(this['historic']);const d=new AbortController();c[Z(0xb9)]='Edit\x20historic\x20binding\x20to:\x20'+this['_property'][Z(0x7f)];let e=await this['_shell'][Z(0x79)](c,{'x':0x64,'y':0x64,'width':0x1a4,'height':0x1fe,'parent':this,'abortSignal':d['signal'],'disableResize':!![],'cancelText':Z(0xbe)});!e?this[Z(0x91)]=null:this['historic']=c[Z(0x91)],this['_bindingsRefresh']();}['_showHelp'](){const a0=y,c=document['createElement']('iframe');c['srcdoc']=BindingsEditor['helpSections'][a0(0x7a)]>0x0?bindingsEditorHelpHtml[a0(0xa6)](a0(0xc5),BindingsEditor[a0(0x76)][a0(0xac)]('')+a0(0xc5)):bindingsEditorHelpHtml,c[a0(0xaa)][a0(0xd5)]=a0(0xbb),this['_shell'][a0(0xb6)](c,{'title':a0(0xd9),'parent':this,'x':-0x294,'y':-0x50,'width':0x276,'height':0x244});}}customElements[y(0xe7)](BindingsEditor['is'],BindingsEditor);
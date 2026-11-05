function a(){const a2=['_showHelp','convertersString','_property','historic','condition','bindabletype','icons/copy.svg','_serviceContainer','div','_bindingTarget','specialType','signalProperty','helpSections','_renderSignalList','_assignEvents','events','onclick','src','onmouseenter','showHistoric','key','display:grid;\x20grid-template-columns:max-content\x20max-content\x201fr;\x20gap:1px\x206px;\x20margin-top:4px;\x20padding:4px\x206px;\x20background:#f5f5f5;\x20border-radius:2px;\x20font-family:monospace;\x20font-size:11px;\x20color:#333;','invert','signal-row','name','node-projects-visualization-bindings-editor','appendChild','converters','2715808wzTbAg','Edit\x20historic\x20binding\x20to:\x20','_renderConverterList','writeBackSignal','_signals','splice','Remove','width:100%;\x20height:100%;\x20border:none;\x20display:block;','className','_getDomElement','flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;','innerHTML','expressionTwoWay','openConfirmation','_addConverter','color:#0078d7;\x20font-weight:bold;','attribute','1202220XeiLvD','map','style','title','selectedObject','srcdoc','bindableObjectNames','converter','replace','_signalsToObjectNames','Select\x20a\x20converter\x20and\x20confirm\x20with\x20OK.','_bindingsParse','textContent','display:flex;\x20flex-direction:column;\x20height:100%;\x20box-sizing:border-box;\x20font-size:12px;','placeholder','color:#555;\x20text-align:right;','</div>\x0a</body>','namedConverterBrowse','_signalListContainer','objectNames','_converterListContainer','img','4164100qFYgVq','indexOf','_binding','Duplicate','display','createBindableObjectBrowser','borderLeftColor','expression','historicBtn','length','push','#0078d7','cssText','keys','input','signal-path-input','3030147scUOOM','_parseObjectNames','2YXQbYj','signal-icon-btn','7fmPnAQ','namedConverterInput','32UaGDZa','objectDoubleclicked','join','58713YbjFaO','select\x20signal...','Bindings\x20Editor\x20Help','_bindingsRefresh','...','forEach','signal','value','148831YITaUT','span','icons/delete.svg','_syncSignals','padding:6px\x208px\x204px;\x20color:#666;\x20font-size:11px;\x20border-bottom:1px\x20solid\x20#e0e0e0;\x20flex-shrink:0;','_refresh','twoWay','property','iframe','#f5f5f5','twoWayPossible','background','_shell','color','filter','createElement','83178diZwpn','type','button','\x20if\x20empty)','color:#555;\x20font-size:11px;\x20margin-top:2px;','description','width:12px;\x20height:12px;'];a=function(){return a2;};return a();}const y=b;(function(c,d){const x=b,e=c();while(!![]){try{const f=parseInt(x(0x209))/0x1*(parseInt(x(0x1fa))/0x2)+parseInt(x(0x201))/0x3*(parseInt(x(0x1fe))/0x4)+parseInt(x(0x1d2))/0x5+parseInt(x(0x19e))/0x6*(-parseInt(x(0x1fc))/0x7)+-parseInt(x(0x1c1))/0x8+-parseInt(x(0x1f8))/0x9+parseInt(x(0x1e8))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x42767));import{BaseCustomWebComponentConstructorAppend,html,css}from'@node-projects/base-custom-webcomponent';import{BindingMode,BindingTarget,assetsPath}from'@gokturk413/web-component-designer';import{BindingsEditorHistoric}from'./BindingsEditorHistoric.js';import{bindingsEditorHelpHtml}from'./BindingsEditorHelp.js';export class BindingsEditor extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
        </div>`;static [y(0x1d4)]=css`
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
        }`;static ['is']=y(0x1be);static ['properties']={'twoWayPossible':Boolean,'twoWay':Boolean,'expression':String,'events':String,'invert':Boolean,'historic':Object};['twoWayPossible']=![];[y(0x20f)]=![];['expression']='';['writeBackSignal']='';[y(0x1cd)]='';[y(0x1a8)];['objectNames']='';[y(0x1b4)]='';['invert']=![];[y(0x1c0)]=[];static ['namedConverters']=[];static ['helpSections']=[];['convertersString'];get[y(0x1d9)](){const z=y;if(this['convertersString'])return this['convertersString'];if(this[z(0x1c0)][z(0x1f1)]>0x0)return Object['fromEntries'](this['converters'][z(0x1d3)](d=>[d[z(0x1b9)],d[z(0x208)]]));return undefined;}['_property'];['_binding'];[y(0x1ae)];[y(0x1ac)];['_instanceServiceContainer'];['_shell'];['_signals']=[];[y(0x1e4)];['_converterListContainer'];constructor(c,d,e,f,g,h,i={}){const A=y;super(),super['_restoreCachedInititalValues'](),this[A(0x1a7)]=c,this[A(0x1ea)]=d,this[A(0x1ae)]=e,this[A(0x1ac)]=f,this['_instanceServiceContainer']=g,this[A(0x215)]=h;i?.['namedConverters']===![]&&(this['_getDomElement']('namedConverterRow')['style']['display']='none');const j=this['_getDomElement'](A(0x1f0));if(i?.[A(0x1b8)]===![])j['style']['display']='none';else i?.['historicLabel']&&(j['textContent']=i['historicLabel']);}['ready'](){const B=y;this['_parseAttributesToProperties'](),this[B(0x1b3)](),this['_signalListContainer']=this[B(0x1ca)]('signalListContainer'),this[B(0x1e6)]=this[B(0x1ca)]('converterListContainer'),this['_getDomElement']('helpBtn')[B(0x1b5)]=()=>this[B(0x1a5)]();if(BindingsEditor['namedConverters'][B(0x1f1)]===0x0)this[B(0x1ca)](B(0x1e3))[B(0x1d4)][B(0x1ec)]='none';this[B(0x213)]=![];if(this[B(0x1ae)]==BindingTarget['property']||this[B(0x1ae)]==BindingTarget[B(0x1d1)])this[B(0x213)]=!![];if(this['_binding']){this['twoWay']=this['_binding']['mode']==BindingMode['twoWay'],this[B(0x1ef)]=this[B(0x1ea)]['expression'],this[B(0x1c4)]=this[B(0x1ea)][B(0x1c4)],this['expressionTwoWay']=this['_binding'][B(0x1cd)],this['historic']=this[B(0x1ea)][B(0x1a8)],this[B(0x1bb)]=this['_binding']['invert'];if(this[B(0x1ea)][B(0x1d8)])this['objectNames']=this[B(0x1ea)][B(0x1d8)][B(0x200)](';');if(this[B(0x1ea)][B(0x1d9)]){if(typeof this['_binding']['converter']==='string')this[B(0x1a6)]=this['_binding'][B(0x1d9)];else for(let d in this['_binding'][B(0x1d9)]){this[B(0x1c0)]['push']({'key':d,'value':this[B(0x1ea)]['converter'][d]});}}if(this[B(0x1ea)]['changedEvents']&&this[B(0x1ea)]['changedEvents'][B(0x1f1)])this['events']=this[B(0x1ea)]['changedEvents'][B(0x200)](';');}if(this['expression']){let e=this[B(0x1ca)]('expression');this[B(0x1ef)][B(0x1e9)]('\x0a')>=0x0&&(e['style']['height']=0x3*0x11+'px');}if(this[B(0x1cd)]){let f=this[B(0x1ca)]('expression2way');this[B(0x1cd)]['indexOf']('\x0a')>=0x0&&(f['style']['height']=0x3*0x11+'px');}this['_signals']=this[B(0x1f9)](this['objectNames']);if(this['_signals'][B(0x1f1)]===0x0)this[B(0x1c5)]['push']({'name':'','signal':''});this['_renderSignalList'](),this[B(0x1c3)](),this[B(0x1dd)]();}[y(0x1f9)](c){const C=y;if(!c)return[];return c['split'](';')[C(0x19c)](d=>d[C(0x1f1)]>0x0)['map'](d=>{const D=C,e=d[D(0x1e9)](':');if(e>0x0)return{'name':d['slice'](0x0,e),'signal':d['slice'](e+0x1)};return{'name':'','signal':d};});}[y(0x1db)](){const E=y;return this[E(0x1c5)]['map'](c=>c[E(0x1bd)]?c['name']+':'+c['signal']:c[E(0x207)])[E(0x200)](';');}[y(0x1b2)](){const F=y,c=this[F(0x1e4)];c['innerHTML']='',this['_signals'][F(0x206)]((d,e)=>{const G=F,f=document[G(0x19d)](G(0x1ad));f[G(0x1c9)]='signal-row';const g=document[G(0x19d)]('input');g[G(0x1c9)]='signal-name-input',g[G(0x1e0)]='__'+e,g[G(0x208)]=d[G(0x1bd)],g[G(0x1d5)]='variable\x20name\x20used\x20in\x20the\x20formula\x20(defaults\x20to\x20__'+e+G(0x1a1),g['oninput']=()=>{const H=G;this['_signals'][e]['name']=g[H(0x208)],this[H(0x20c)]();};const h=document[G(0x19d)]('input');h['className']=G(0x1f7),h['value']=d['signal'],h['placeholder']='signal\x20path',h[G(0x1d5)]='signal\x20path\x20(prefix:\x20?\x20=\x20signal\x20name\x20in\x20screen\x20property,\x20??\x20=\x20screen\x20property\x20value,\x20?$\x20=\x20signal\x20object\x20in\x20screen\x20property,\x20?@\x20=\x20screen\x20attribute,\x20#\x20=\x20signal\x20name\x20in\x20target\x20property,\x20##\x20=\x20target\x20property\x20value,\x20#$\x20=\x20signal\x20object\x20in\x20target\x20property,\x20#@\x20=\x20target\x20attribute)',h['oninput']=()=>{const I=G;this[I(0x1c5)][e][I(0x207)]=h['value'],this['_syncSignals']();};const j=document['createElement']('button');j[G(0x1c9)]=G(0x1fb),j['title']=G(0x1eb);const k=document['createElement'](G(0x1e7));k['src']=assetsPath+G(0x1ab),k[G(0x1d4)][G(0x1f4)]='width:12px;\x20height:12px;',j['appendChild'](k),j[G(0x1b5)]=()=>{const J=G;this['_signals'][J(0x1c6)](e+0x1,0x0,{...this['_signals'][e]}),this[J(0x20c)](),this['_renderSignalList']();};const l=document[G(0x19d)](G(0x1a0));l['className']='signal-select-btn',l['textContent']=G(0x205),l[G(0x1d5)]='Browse\x20signal',l[G(0x1b5)]=()=>this['_selectForRow'](e,h);const m=document[G(0x19d)]('button');m[G(0x1c9)]='signal-icon-btn',m['title']=G(0x1c7);const n=document[G(0x19d)]('img');n[G(0x1b6)]=assetsPath+G(0x20b),n[G(0x1d4)][G(0x1f4)]='width:12px;\x20height:12px;',m['appendChild'](n),m[G(0x1b5)]=()=>{const K=G;this[K(0x1c5)]['splice'](e,0x1),this[K(0x20c)](),this[K(0x1b2)]();},f[G(0x1bf)](g),f['appendChild'](h),f[G(0x1bf)](l),f[G(0x1bf)](j),f[G(0x1bf)](m),c[G(0x1bf)](f);});}[y(0x20c)](){const L=y;this[L(0x1e5)]=this[L(0x1db)](),this['_bindingsRefresh']();}['_addSignal'](){this['_signals']['push']({'name':'','signal':''}),this['_renderSignalList']();}async['_selectForRow'](c,d){const M=y;let e=this['_shell'][M(0x1ed)]();e['initialize'](this[M(0x1ac)],this['_instanceServiceContainer'],'binding'),e['title']=M(0x202);const f=new AbortController();e[M(0x1ff)]['on'](()=>{const N=M;f['abort']();let h='';if(e['selectedObject']['specialType']==N(0x1b0))h='?';else e[N(0x1d6)][N(0x1aa)]===N(0x210)&&(h='??');this[N(0x1c5)][c]['signal']=h+e[N(0x1d6)]['fullName'],d[N(0x208)]=this['_signals'][c][N(0x207)],this['_syncSignals']();});let g=await this[M(0x215)]['openConfirmation'](e,{'x':0x64,'y':0x64,'width':0x190,'height':0x12c,'parent':this,'abortSignal':f['signal']});if(g){let h='';if(e[M(0x1d6)][M(0x1af)]==M(0x1b0))h='?';else e[M(0x1d6)]['bindabletype']==='property'&&(h='??');this['_signals'][c]['signal']=h+e['selectedObject']['fullName'],d['value']=this['_signals'][c]['signal'],this[M(0x20c)]();}}[y(0x1c3)](){const O=y,c=this[O(0x1e6)];c[O(0x1cc)]='';const d=this[O(0x1a7)]?.[O(0x19f)]===O(0x216)?O(0x216):'text';this[O(0x1c0)][O(0x206)]((e,f)=>{const P=O,g=document['createElement'](P(0x1ad));g[P(0x1c9)]=P(0x1bc);const h=document['createElement'](P(0x1f6));h[P(0x1d4)][P(0x1f4)]=P(0x1cb),h['value']=e[P(0x1b9)],h['placeholder']=P(0x1a9),h['oninput']=()=>{const Q=P;this['converters'][f]['key']=h[Q(0x208)];};const j=document[P(0x19d)]('input');j['type']=d,j['style']['cssText']='flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;',j[P(0x208)]=e[P(0x208)],j['placeholder']=P(0x208),j['oninput']=()=>{const R=P;this[R(0x1c0)][f][R(0x208)]=j['value'];};const k=document['createElement']('button');k[P(0x1c9)]=P(0x1fb),k['title']='Duplicate';const l=document['createElement'](P(0x1e7));l['src']=assetsPath+'icons/copy.svg',l[P(0x1d4)]['cssText']=P(0x1a4),k['appendChild'](l),k['onclick']=()=>{const S=P;this[S(0x1c0)]['splice'](f+0x1,0x0,{...this[S(0x1c0)][f]}),this[S(0x1c3)]();};const m=document['createElement']('button');m['className']=P(0x1fb),m['title']='Remove';const n=document['createElement'](P(0x1e7));n['src']=assetsPath+P(0x20b),n['style'][P(0x1f4)]='width:12px;\x20height:12px;',m[P(0x1bf)](n),m[P(0x1b5)]=()=>{this['converters']['splice'](f,0x1),this['_renderConverterList']();},g['appendChild'](h),g[P(0x1bf)](j),g[P(0x1bf)](k),g['appendChild'](m),c['appendChild'](g);});}[y(0x1cf)](){const T=y;this[T(0x1c0)][T(0x1f2)]({'key':'','value':''}),this[T(0x1c3)]();}async['_selectNamedConverter'](){const U=y,c=BindingsEditor['namedConverters'];if(c[U(0x1f1)]===0x0)return;let d='',e=null;const f=document[U(0x19d)]('div');f['style']['cssText']=U(0x1df);const g=document['createElement'](U(0x1ad));g['style'][U(0x1f4)]=U(0x20d),g['textContent']=U(0x1dc),f[U(0x1bf)](g);const h=document[U(0x19d)]('div');h['style'][U(0x1f4)]='flex:1;\x20overflow-y:auto;\x20padding:4px;',f[U(0x1bf)](h);const i=m=>{const V=U;m[V(0x1d4)]['background']='',m[V(0x1d4)][V(0x1ee)]='transparent';},j=(m,n)=>{const W=U;if(e)i(e);e=m,m['style']['background']='#e8f4fd',m['style']['borderLeftColor']=W(0x1f3),d=n;};for(const m of c){const n=document['createElement']('div');n['style']['cssText']='padding:5px\x206px\x205px\x209px;\x20cursor:pointer;\x20border-radius:3px;\x20border-left:3px\x20solid\x20transparent;\x20margin-bottom:2px;';const o=document['createElement'](U(0x1ad));o[U(0x1d4)]['cssText']='font-family:monospace;\x20font-weight:bold;\x20color:#111;',o['textContent']=m['name'],n[U(0x1bf)](o);if(m[U(0x1a3)]){const p=document['createElement'](U(0x1ad));p[U(0x1d4)][U(0x1f4)]=U(0x1a2),p[U(0x1de)]=m['description'],n['appendChild'](p);}if(m['converter']&&Object[U(0x1f5)](m['converter'])[U(0x1f1)]>0x0){const q=document[U(0x19d)](U(0x1ad));q[U(0x1d4)][U(0x1f4)]=U(0x1ba);for(const [r,s]of Object['entries'](m[U(0x1d9)])){const t=document[U(0x19d)]('span');t['style']['cssText']=U(0x1e1),t['textContent']=r;const u=document['createElement'](U(0x20a));u['style']['cssText']='color:#aaa;',u['textContent']='→';const w=document[U(0x19d)](U(0x20a));w[U(0x1d4)]['cssText']=U(0x1d0),w['textContent']=String(s),q[U(0x1bf)](t),q[U(0x1bf)](u),q['appendChild'](w);}n['appendChild'](q);}n[U(0x1b7)]=()=>{const X=U;if(n!==e)n['style'][X(0x214)]=X(0x212);},n['onmouseleave']=()=>{const Y=U;if(n!==e)n['style'][Y(0x214)]='';},n[U(0x1b5)]=()=>j(n,m[U(0x1bd)]),h[U(0x1bf)](n);}const l=await this['_shell'][U(0x1ce)](f,{'x':0x64,'y':0x64,'width':0x140,'height':0x12c,'parent':this});l&&d&&(this[U(0x1a6)]=d,this[U(0x1ca)](U(0x1fd))['value']=d,this[U(0x204)]());}[y(0x20e)](){requestAnimationFrame(()=>{const Z=b;this[Z(0x204)]();});}async[y(0x1b8)](){const a0=y;let c=new BindingsEditorHistoric(this['historic']);const d=new AbortController();c[a0(0x1d5)]=a0(0x1c2)+this['_property'][a0(0x1bd)];let e=await this[a0(0x215)]['openConfirmation'](c,{'x':0x64,'y':0x64,'width':0x1a4,'height':0x1fe,'parent':this,'abortSignal':d[a0(0x207)],'disableResize':!![],'cancelText':a0(0x1c7)});!e?this['historic']=null:this['historic']=c['historic'],this['_bindingsRefresh']();}['_showHelp'](){const a1=y,c=document['createElement'](a1(0x211));c[a1(0x1d7)]=BindingsEditor[a1(0x1b1)][a1(0x1f1)]>0x0?bindingsEditorHelpHtml[a1(0x1da)]('</div>\x0a</body>',BindingsEditor[a1(0x1b1)][a1(0x200)]('')+a1(0x1e2)):bindingsEditorHelpHtml,c[a1(0x1d4)][a1(0x1f4)]=a1(0x1c8),this['_shell']['openModal'](c,{'title':a1(0x203),'parent':this,'x':-0x294,'y':-0x50,'width':0x276,'height':0x244});}}function b(c,d){c=c-0x19c;const e=a();let f=e[c];return f;}customElements['define'](BindingsEditor['is'],BindingsEditor);
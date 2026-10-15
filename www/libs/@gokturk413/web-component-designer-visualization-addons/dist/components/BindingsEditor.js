const y=b;(function(c,d){const x=b,e=c();while(!![]){try{const f=-parseInt(x(0x1d8))/0x1*(parseInt(x(0x1ea))/0x2)+parseInt(x(0x1ab))/0x3+-parseInt(x(0x1a5))/0x4*(-parseInt(x(0x1a6))/0x5)+-parseInt(x(0x1c6))/0x6+parseInt(x(0x1e5))/0x7+parseInt(x(0x1b7))/0x8*(-parseInt(x(0x17d))/0x9)+-parseInt(x(0x19e))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x196f3));import{BaseCustomWebComponentConstructorAppend,html,css}from'@node-projects/base-custom-webcomponent';import{BindingMode,BindingTarget,assetsPath}from'@gokturk413/web-component-designer';import{BindingsEditorHistoric}from'./BindingsEditorHistoric.js';import{bindingsEditorHelpHtml}from'./BindingsEditorHelp.js';function a(){const a3=['specialType','slice','convertersString','openModal','_bindingsParse','className','push','icons/copy.svg','srcdoc','signal\x20path','createElement','color:#aaa;','namedConverterBrowse','_signalsToObjectNames','appendChild','signal-name-input','141408RrWWon','name','flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;','value','signal-row','iframe','selectedObject','invert','signalListContainer','style','key','_signals','_bindingTarget','_shell','template','abort','fullName','_property','properties','_parseObjectNames','onclick','_instanceServiceContainer','filter','property','#f5f5f5','indexOf','display:flex;\x20flex-direction:column;\x20height:100%;\x20box-sizing:border-box;\x20font-size:12px;','_syncSignals','splice','color:#555;\x20font-size:11px;\x20margin-top:2px;','namedConverters','cssText','ready','1386440hrHqtW','description','split','historic','writeBackSignal','changedEvents','bindableObjectNames','4PDfOiz','536345bibdbX','none','_converterListContainer','define','div','491721qkoQoH','showHistoric','title','createBindableObjectBrowser','_addConverter','objectDoubleclicked','string','span','_restoreCachedInititalValues','map','flex:1;\x20overflow-y:auto;\x20padding:4px;','_showHelp','16efeEdj','twoWayPossible','height','mode','display:grid;\x20grid-template-columns:max-content\x20max-content\x201fr;\x20gap:1px\x206px;\x20margin-top:4px;\x20padding:4px\x206px;\x20background:#f5f5f5;\x20border-radius:2px;\x20font-family:monospace;\x20font-size:11px;\x20color:#333;','expressionTwoWay','openConfirmation','historicLabel','join','_selectForRow','#e8f4fd','_refresh','icons/delete.svg','twoWay','background','13026DFVrul','attribute','events','initialize','color','onmouseenter','forEach','font-family:monospace;\x20font-weight:bold;\x20color:#111;','_getDomElement','signal','src','replace','fromEntries','textContent','binding','converters','placeholder','_renderSignalList','25CrOWUA','display','namedConverterRow','node-projects-visualization-bindings-editor','oninput','\x20if\x20empty)','_binding','objectNames','Remove','img','signal-icon-btn','width:12px;\x20height:12px;','converterListContainer','1045044tzhhxq','expression','_renderConverterList','_parseAttributesToProperties','color:#0078d7;\x20font-weight:bold;','11524hEmGQB','button','helpSections','input','_serviceContainer','_bindingsRefresh','_signalListContainer','borderLeftColor','_assignEvents','length','converter'];a=function(){return a3;};return a();}function b(c,d){c=c-0x175;const e=a();let f=e[c];return f;}export class BindingsEditor extends BaseCustomWebComponentConstructorAppend{static [y(0x18b)]=html`
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
        }`;static ['is']=y(0x1db);static [y(0x18f)]={'twoWayPossible':Boolean,'twoWay':Boolean,'expression':String,'events':String,'invert':Boolean,'historic':Object};[y(0x1b8)]=![];[y(0x1c4)]=![];['expression']='';[y(0x1a2)]='';[y(0x1bc)]='';[y(0x1a1)];[y(0x1df)]='';['events']='';['invert']=![];[y(0x1d5)]=[];static ['namedConverters']=[];static [y(0x1ec)]=[];[y(0x1f7)];get['converter'](){const z=y;if(this['convertersString'])return this[z(0x1f7)];if(this['converters'][z(0x1f3)]>0x0)return Object[z(0x1d2)](this[z(0x1d5)][z(0x1b4)](d=>[d['key'],d[z(0x180)]]));return undefined;}['_property'];[y(0x1de)];['_bindingTarget'];[y(0x1ee)];['_instanceServiceContainer'];[y(0x18a)];['_signals']=[];[y(0x1f0)];[y(0x1a8)];constructor(c,d,e,f,g,h,i={}){const A=y;super(),super[A(0x1b3)](),this[A(0x18e)]=c,this['_binding']=d,this[A(0x189)]=e,this['_serviceContainer']=f,this['_instanceServiceContainer']=g,this['_shell']=h;i?.[A(0x19b)]===![]&&(this['_getDomElement'](A(0x1da))['style']['display']='none');const j=this[A(0x1ce)]('historicBtn');if(i?.[A(0x1ac)]===![])j['style'][A(0x1d9)]=A(0x1a7);else i?.[A(0x1be)]&&(j[A(0x1d3)]=i[A(0x1be)]);}[y(0x19d)](){const B=y;this[B(0x1e8)](),this[B(0x1f2)](),this['_signalListContainer']=this['_getDomElement'](B(0x185)),this['_converterListContainer']=this[B(0x1ce)](B(0x1e4)),this['_getDomElement']('helpBtn')[B(0x191)]=()=>this['_showHelp']();if(BindingsEditor['namedConverters']['length']===0x0)this[B(0x1ce)](B(0x179))['style']['display']='none';this[B(0x1b8)]=![];if(this['_bindingTarget']==BindingTarget[B(0x194)]||this[B(0x189)]==BindingTarget[B(0x1c7)])this['twoWayPossible']=!![];if(this['_binding']){this[B(0x1c4)]=this[B(0x1de)][B(0x1ba)]==BindingMode['twoWay'],this['expression']=this[B(0x1de)][B(0x1e6)],this['writeBackSignal']=this['_binding'][B(0x1a2)],this['expressionTwoWay']=this[B(0x1de)]['expressionTwoWay'],this[B(0x1a1)]=this[B(0x1de)]['historic'],this[B(0x184)]=this['_binding'][B(0x184)];if(this['_binding']['bindableObjectNames'])this['objectNames']=this['_binding'][B(0x1a4)][B(0x1bf)](';');if(this[B(0x1de)]['converter']){if(typeof this[B(0x1de)]['converter']===B(0x1b1))this[B(0x1f7)]=this['_binding'][B(0x1f4)];else for(let d in this[B(0x1de)][B(0x1f4)]){this['converters'][B(0x1fb)]({'key':d,'value':this['_binding'][B(0x1f4)][d]});}}if(this['_binding']['changedEvents']&&this['_binding'][B(0x1a3)][B(0x1f3)])this[B(0x1c8)]=this[B(0x1de)][B(0x1a3)]['join'](';');}if(this[B(0x1e6)]){let e=this[B(0x1ce)]('expression');this['expression'][B(0x196)]('\x0a')>=0x0&&(e[B(0x186)][B(0x1b9)]=0x3*0x11+'px');}if(this['expressionTwoWay']){let f=this['_getDomElement']('expression2way');this['expressionTwoWay'][B(0x196)]('\x0a')>=0x0&&(f[B(0x186)]['height']=0x3*0x11+'px');}this['_signals']=this[B(0x190)](this[B(0x1df)]);if(this['_signals'][B(0x1f3)]===0x0)this[B(0x188)][B(0x1fb)]({'name':'','signal':''});this[B(0x1d7)](),this['_renderConverterList'](),this[B(0x1f9)]();}['_parseObjectNames'](c){const C=y;if(!c)return[];return c[C(0x1a0)](';')[C(0x193)](d=>d['length']>0x0)['map'](d=>{const D=C,e=d[D(0x196)](':');if(e>0x0)return{'name':d['slice'](0x0,e),'signal':d[D(0x1f6)](e+0x1)};return{'name':'','signal':d};});}[y(0x17a)](){const E=y;return this[E(0x188)][E(0x1b4)](c=>c['name']?c['name']+':'+c[E(0x1cf)]:c[E(0x1cf)])['join'](';');}[y(0x1d7)](){const F=y,c=this['_signalListContainer'];c['innerHTML']='',this[F(0x188)][F(0x1cc)]((d,e)=>{const G=F,f=document['createElement']('div');f['className']=G(0x181);const g=document[G(0x177)](G(0x1ed));g[G(0x1fa)]=G(0x17c),g[G(0x1d6)]='__'+e,g[G(0x180)]=d[G(0x17e)],g['title']='variable\x20name\x20used\x20in\x20the\x20formula\x20(defaults\x20to\x20__'+e+G(0x1dd),g['oninput']=()=>{const H=G;this['_signals'][e]['name']=g['value'],this[H(0x198)]();};const h=document[G(0x177)](G(0x1ed));h[G(0x1fa)]='signal-path-input',h[G(0x180)]=d[G(0x1cf)],h['placeholder']=G(0x176),h['title']='signal\x20path\x20(prefix:\x20?\x20=\x20signal\x20name\x20in\x20screen\x20property,\x20??\x20=\x20screen\x20property\x20value,\x20?$\x20=\x20signal\x20object\x20in\x20screen\x20property,\x20?@\x20=\x20screen\x20attribute,\x20#\x20=\x20signal\x20name\x20in\x20target\x20property,\x20##\x20=\x20target\x20property\x20value,\x20#$\x20=\x20signal\x20object\x20in\x20target\x20property,\x20#@\x20=\x20target\x20attribute)',h[G(0x1dc)]=()=>{const I=G;this[I(0x188)][e][I(0x1cf)]=h[I(0x180)],this[I(0x198)]();};const j=document['createElement'](G(0x1eb));j[G(0x1fa)]=G(0x1e2),j[G(0x1ad)]='Duplicate';const k=document[G(0x177)](G(0x1e1));k['src']=assetsPath+G(0x1fc),k['style']['cssText']=G(0x1e3),j[G(0x17b)](k),j['onclick']=()=>{const J=G;this['_signals'][J(0x199)](e+0x1,0x0,{...this[J(0x188)][e]}),this['_syncSignals'](),this['_renderSignalList']();};const l=document[G(0x177)]('button');l['className']='signal-select-btn',l['textContent']='...',l['title']='Browse\x20signal',l['onclick']=()=>this['_selectForRow'](e,h);const m=document['createElement'](G(0x1eb));m['className']=G(0x1e2),m['title']=G(0x1e0);const n=document['createElement']('img');n[G(0x1d0)]=assetsPath+G(0x1c3),n['style']['cssText']='width:12px;\x20height:12px;',m[G(0x17b)](n),m['onclick']=()=>{const K=G;this[K(0x188)]['splice'](e,0x1),this['_syncSignals'](),this['_renderSignalList']();},f['appendChild'](g),f[G(0x17b)](h),f[G(0x17b)](l),f['appendChild'](j),f[G(0x17b)](m),c['appendChild'](f);});}['_syncSignals'](){const L=y;this['objectNames']=this['_signalsToObjectNames'](),this[L(0x1ef)]();}['_addSignal'](){const M=y;this['_signals'][M(0x1fb)]({'name':'','signal':''}),this['_renderSignalList']();}async[y(0x1c0)](c,d){const N=y;let e=this['_shell'][N(0x1ae)]();e[N(0x1c9)](this['_serviceContainer'],this[N(0x192)],N(0x1d4)),e['title']='select\x20signal...';const f=new AbortController();e[N(0x1b0)]['on'](()=>{const O=N;f[O(0x18c)]();let h='';if(e[O(0x183)][O(0x1f5)]=='signalProperty')h='?';else e[O(0x183)]['bindabletype']==='property'&&(h='??');this[O(0x188)][c]['signal']=h+e['selectedObject'][O(0x18d)],d['value']=this[O(0x188)][c][O(0x1cf)],this['_syncSignals']();});let g=await this[N(0x18a)][N(0x1bd)](e,{'x':0x64,'y':0x64,'width':0x190,'height':0x12c,'parent':this,'abortSignal':f['signal']});if(g){let h='';if(e[N(0x183)]['specialType']=='signalProperty')h='?';else e[N(0x183)]['bindabletype']===N(0x194)&&(h='??');this['_signals'][c][N(0x1cf)]=h+e[N(0x183)][N(0x18d)],d['value']=this[N(0x188)][c][N(0x1cf)],this['_syncSignals']();}}['_renderConverterList'](){const P=y,c=this['_converterListContainer'];c['innerHTML']='';const d=this['_property']?.['type']==='color'?P(0x1ca):'text';this['converters'][P(0x1cc)]((e,f)=>{const Q=P,g=document[Q(0x177)]('div');g[Q(0x1fa)]='signal-row';const h=document['createElement']('input');h[Q(0x186)][Q(0x19c)]=Q(0x17f),h['value']=e[Q(0x187)],h['placeholder']='condition',h['oninput']=()=>{const R=Q;this[R(0x1d5)][f][R(0x187)]=h[R(0x180)];};const j=document['createElement'](Q(0x1ed));j['type']=d,j['style'][Q(0x19c)]='flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;',j[Q(0x180)]=e['value'],j[Q(0x1d6)]='value',j['oninput']=()=>{const S=Q;this[S(0x1d5)][f]['value']=j['value'];};const k=document[Q(0x177)](Q(0x1eb));k['className']='signal-icon-btn',k[Q(0x1ad)]='Duplicate';const l=document[Q(0x177)]('img');l[Q(0x1d0)]=assetsPath+'icons/copy.svg',l[Q(0x186)]['cssText']=Q(0x1e3),k[Q(0x17b)](l),k[Q(0x191)]=()=>{const T=Q;this['converters']['splice'](f+0x1,0x0,{...this['converters'][f]}),this[T(0x1e7)]();};const m=document[Q(0x177)](Q(0x1eb));m[Q(0x1fa)]=Q(0x1e2),m['title']='Remove';const n=document['createElement'](Q(0x1e1));n['src']=assetsPath+Q(0x1c3),n[Q(0x186)][Q(0x19c)]=Q(0x1e3),m['appendChild'](n),m['onclick']=()=>{this['converters']['splice'](f,0x1),this['_renderConverterList']();},g[Q(0x17b)](h),g[Q(0x17b)](j),g[Q(0x17b)](k),g[Q(0x17b)](m),c[Q(0x17b)](g);});}[y(0x1af)](){const U=y;this['converters'][U(0x1fb)]({'key':'','value':''}),this[U(0x1e7)]();}async['_selectNamedConverter'](){const V=y,c=BindingsEditor[V(0x19b)];if(c['length']===0x0)return;let d='',e=null;const f=document['createElement'](V(0x1aa));f[V(0x186)]['cssText']=V(0x197);const g=document['createElement']('div');g['style']['cssText']='padding:6px\x208px\x204px;\x20color:#666;\x20font-size:11px;\x20border-bottom:1px\x20solid\x20#e0e0e0;\x20flex-shrink:0;',g[V(0x1d3)]='Select\x20a\x20converter\x20and\x20confirm\x20with\x20OK.',f['appendChild'](g);const h=document['createElement'](V(0x1aa));h[V(0x186)]['cssText']=V(0x1b5),f[V(0x17b)](h);const i=m=>{const W=V;m[W(0x186)]['background']='',m['style']['borderLeftColor']='transparent';},j=(m,n)=>{const X=V;if(e)i(e);e=m,m['style']['background']=X(0x1c1),m['style'][X(0x1f1)]='#0078d7',d=n;};for(const m of c){const n=document[V(0x177)]('div');n['style'][V(0x19c)]='padding:5px\x206px\x205px\x209px;\x20cursor:pointer;\x20border-radius:3px;\x20border-left:3px\x20solid\x20transparent;\x20margin-bottom:2px;';const o=document['createElement'](V(0x1aa));o[V(0x186)][V(0x19c)]=V(0x1cd),o[V(0x1d3)]=m[V(0x17e)],n['appendChild'](o);if(m[V(0x19f)]){const p=document[V(0x177)]('div');p[V(0x186)]['cssText']=V(0x19a),p['textContent']=m['description'],n['appendChild'](p);}if(m['converter']&&Object['keys'](m['converter'])[V(0x1f3)]>0x0){const q=document['createElement']('div');q['style'][V(0x19c)]=V(0x1bb);for(const [r,s]of Object['entries'](m[V(0x1f4)])){const t=document[V(0x177)](V(0x1b2));t['style']['cssText']='color:#555;\x20text-align:right;',t[V(0x1d3)]=r;const u=document['createElement']('span');u[V(0x186)]['cssText']=V(0x178),u[V(0x1d3)]='→';const w=document[V(0x177)](V(0x1b2));w['style']['cssText']=V(0x1e9),w[V(0x1d3)]=String(s),q[V(0x17b)](t),q[V(0x17b)](u),q[V(0x17b)](w);}n[V(0x17b)](q);}n[V(0x1cb)]=()=>{const Y=V;if(n!==e)n[Y(0x186)][Y(0x1c5)]=Y(0x195);},n['onmouseleave']=()=>{const Z=V;if(n!==e)n[Z(0x186)][Z(0x1c5)]='';},n[V(0x191)]=()=>j(n,m['name']),h[V(0x17b)](n);}const l=await this['_shell']['openConfirmation'](f,{'x':0x64,'y':0x64,'width':0x140,'height':0x12c,'parent':this});l&&d&&(this[V(0x1f7)]=d,this[V(0x1ce)]('namedConverterInput')[V(0x180)]=d,this['_bindingsRefresh']());}[y(0x1c2)](){requestAnimationFrame(()=>{const a0=b;this[a0(0x1ef)]();});}async['showHistoric'](){const a1=y;let c=new BindingsEditorHistoric(this[a1(0x1a1)]);const d=new AbortController();c[a1(0x1ad)]='Edit\x20historic\x20binding\x20to:\x20'+this['_property'][a1(0x17e)];let e=await this[a1(0x18a)][a1(0x1bd)](c,{'x':0x64,'y':0x64,'width':0x1a4,'height':0x1fe,'parent':this,'abortSignal':d['signal'],'disableResize':!![],'cancelText':a1(0x1e0)});!e?this[a1(0x1a1)]=null:this[a1(0x1a1)]=c[a1(0x1a1)],this['_bindingsRefresh']();}[y(0x1b6)](){const a2=y,c=document['createElement'](a2(0x182));c[a2(0x175)]=BindingsEditor[a2(0x1ec)]['length']>0x0?bindingsEditorHelpHtml[a2(0x1d1)]('</div>\x0a</body>',BindingsEditor['helpSections']['join']('')+'</div>\x0a</body>'):bindingsEditorHelpHtml,c[a2(0x186)]['cssText']='width:100%;\x20height:100%;\x20border:none;\x20display:block;',this['_shell'][a2(0x1f8)](c,{'title':'Bindings\x20Editor\x20Help','parent':this,'x':-0x294,'y':-0x50,'width':0x276,'height':0x244});}}customElements[y(0x1a9)](BindingsEditor['is'],BindingsEditor);
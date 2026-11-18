const y=b;function b(c,d){c=c-0x167;const e=a();let f=e[c];return f;}(function(c,d){const x=b,e=c();while(!![]){try{const f=parseInt(x(0x1ba))/0x1+-parseInt(x(0x1ad))/0x2*(parseInt(x(0x1b4))/0x3)+-parseInt(x(0x1d9))/0x4+-parseInt(x(0x1d7))/0x5*(parseInt(x(0x180))/0x6)+-parseInt(x(0x181))/0x7*(-parseInt(x(0x1cf))/0x8)+-parseInt(x(0x19b))/0x9+parseInt(x(0x182))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x25daa));import{BaseCustomWebComponentConstructorAppend,html,css}from'@node-projects/base-custom-webcomponent';function a(){const a4=['ready','condition','_signals','title','attribute','borderLeftColor','cssText','showHistoric','iframe','entries','_syncSignals','invert','_property','namedConverterBrowse','color:#0078d7;\x20font-weight:bold;','div','width:100%;\x20height:100%;\x20border:none;\x20display:block;','#e8f4fd','input','convertersString','_refresh','136518nyCcTV','679UsEROp','5398500wdGuah','events','signal\x20path\x20(prefix:\x20?\x20=\x20signal\x20name\x20in\x20screen\x20property,\x20??\x20=\x20screen\x20property\x20value,\x20?$\x20=\x20signal\x20object\x20in\x20screen\x20property,\x20?@\x20=\x20screen\x20attribute,\x20#\x20=\x20signal\x20name\x20in\x20target\x20property,\x20##\x20=\x20target\x20property\x20value,\x20#$\x20=\x20signal\x20object\x20in\x20target\x20property,\x20#@\x20=\x20target\x20attribute)','length','_selectForRow','string','signal\x20path','icons/copy.svg','#0078d7','Edit\x20historic\x20binding\x20to:\x20','splice','_instanceServiceContainer','...','changedEvents','oninput','twoWayPossible','transparent','_getDomElement','forEach','objectDoubleclicked','onmouseleave','_renderSignalList','bindabletype','initialize','name','632115CvYBka','description','_shell','mode','historicLabel','src','bindableObjectNames','icons/delete.svg','_bindingTarget','appendChild','textContent','expressionTwoWay','text','writeBackSignal','signal-icon-btn','Bindings\x20Editor\x20Help','replace','placeholder','2WjETZu','split','expression','map','openConfirmation','historic','objectNames','508899QmfJjK','join','converters','selectedObject','_bindingsRefresh','slice','70624SLzuAi','_addConverter','property','background','Select\x20a\x20converter\x20and\x20confirm\x20with\x20OK.','signal','push','_serviceContainer','key','helpSections','define','type','span','display:flex;\x20flex-direction:column;\x20height:100%;\x20box-sizing:border-box;\x20font-size:12px;','onclick','color:#aaa;','signal-row','padding:6px\x208px\x204px;\x20color:#666;\x20font-size:11px;\x20border-bottom:1px\x20solid\x20#e0e0e0;\x20flex-shrink:0;','_renderConverterList','className','namedConverters','4208FWRwuY','Browse\x20signal','specialType','signalListContainer','filter','fullName','signal-path-input','value','25odTjLS','converter','611252gtxjhd','width:12px;\x20height:12px;','_binding','style','createElement','signalProperty','Duplicate'];a=function(){return a4;};return a();}import{BindingMode,BindingTarget,assetsPath}from'@gokturk413/web-component-designer';import{BindingsEditorHistoric}from'./BindingsEditorHistoric.js';import{bindingsEditorHelpHtml}from'./BindingsEditorHelp.js';export class BindingsEditor extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
        </div>`;static [y(0x167)]=css`
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
        }`;static ['is']='node-projects-visualization-bindings-editor';static ['properties']={'twoWayPossible':Boolean,'twoWay':Boolean,'expression':String,'events':String,'invert':Boolean,'historic':Object};[y(0x191)]=![];['twoWay']=![];[y(0x1af)]='';[y(0x1a8)]='';[y(0x1a6)]='';[y(0x1b2)];['objectNames']='';[y(0x183)]='';[y(0x176)]=![];['converters']=[];static ['namedConverters']=[];static ['helpSections']=[];[y(0x17e)];get[y(0x1d8)](){const z=y;if(this[z(0x17e)])return this['convertersString'];if(this['converters'][z(0x185)]>0x0)return Object['fromEntries'](this['converters'][z(0x1b0)](d=>[d['key'],d['value']]));return undefined;}['_property'];['_binding'];['_bindingTarget'];[y(0x1c1)];[y(0x18d)];[y(0x19d)];['_signals']=[];['_signalListContainer'];['_converterListContainer'];constructor(c,d,e,f,g,h,i={}){const A=y;super(),super['_restoreCachedInititalValues'](),this[A(0x177)]=c,this['_binding']=d,this[A(0x1a3)]=e,this[A(0x1c1)]=f,this['_instanceServiceContainer']=g,this['_shell']=h;i?.[A(0x1ce)]===![]&&(this[A(0x193)]('namedConverterRow')[A(0x167)]['display']='none');const j=this['_getDomElement']('historicBtn');if(i?.[A(0x172)]===![])j['style']['display']='none';else i?.[A(0x19f)]&&(j[A(0x1a5)]=i[A(0x19f)]);}[y(0x16b)](){const B=y;this['_parseAttributesToProperties'](),this['_assignEvents'](),this['_signalListContainer']=this['_getDomElement'](B(0x1d2)),this['_converterListContainer']=this['_getDomElement']('converterListContainer'),this['_getDomElement']('helpBtn')[B(0x1c8)]=()=>this['_showHelp']();if(BindingsEditor[B(0x1ce)]['length']===0x0)this[B(0x193)](B(0x178))['style']['display']='none';this['twoWayPossible']=![];if(this['_bindingTarget']==BindingTarget[B(0x1bc)]||this['_bindingTarget']==BindingTarget[B(0x16f)])this['twoWayPossible']=!![];if(this['_binding']){this['twoWay']=this[B(0x1db)][B(0x19e)]==BindingMode['twoWay'],this[B(0x1af)]=this[B(0x1db)]['expression'],this[B(0x1a8)]=this['_binding'][B(0x1a8)],this[B(0x1a6)]=this['_binding']['expressionTwoWay'],this[B(0x1b2)]=this['_binding']['historic'],this[B(0x176)]=this['_binding']['invert'];if(this[B(0x1db)]['bindableObjectNames'])this[B(0x1b3)]=this['_binding'][B(0x1a1)][B(0x1b5)](';');if(this['_binding'][B(0x1d8)]){if(typeof this[B(0x1db)][B(0x1d8)]===B(0x187))this['convertersString']=this[B(0x1db)][B(0x1d8)];else for(let d in this['_binding'][B(0x1d8)]){this[B(0x1b6)]['push']({'key':d,'value':this['_binding']['converter'][d]});}}if(this['_binding'][B(0x18f)]&&this['_binding']['changedEvents'][B(0x185)])this['events']=this['_binding'][B(0x18f)]['join'](';');}if(this['expression']){let e=this['_getDomElement']('expression');this[B(0x1af)]['indexOf']('\x0a')>=0x0&&(e['style']['height']=0x3*0x11+'px');}if(this[B(0x1a6)]){let f=this[B(0x193)]('expression2way');this['expressionTwoWay']['indexOf']('\x0a')>=0x0&&(f['style']['height']=0x3*0x11+'px');}this['_signals']=this['_parseObjectNames'](this['objectNames']);if(this['_signals']['length']===0x0)this[B(0x16d)][B(0x1c0)]({'name':'','signal':''});this[B(0x197)](),this['_renderConverterList'](),this['_bindingsParse']();}['_parseObjectNames'](c){const C=y;if(!c)return[];return c[C(0x1ae)](';')[C(0x1d3)](d=>d[C(0x185)]>0x0)[C(0x1b0)](d=>{const D=C,e=d['indexOf'](':');if(e>0x0)return{'name':d[D(0x1b9)](0x0,e),'signal':d['slice'](e+0x1)};return{'name':'','signal':d};});}['_signalsToObjectNames'](){const E=y;return this[E(0x16d)]['map'](c=>c['name']?c[E(0x19a)]+':'+c['signal']:c['signal'])['join'](';');}[y(0x197)](){const F=y,c=this['_signalListContainer'];c['innerHTML']='',this['_signals'][F(0x194)]((d,e)=>{const G=F,f=document[G(0x168)](G(0x17a));f['className']=G(0x1ca);const g=document['createElement'](G(0x17d));g['className']='signal-name-input',g[G(0x1ac)]='__'+e,g[G(0x1d6)]=d[G(0x19a)],g[G(0x16e)]='variable\x20name\x20used\x20in\x20the\x20formula\x20(defaults\x20to\x20__'+e+'\x20if\x20empty)',g[G(0x190)]=()=>{const H=G;this['_signals'][e]['name']=g['value'],this[H(0x175)]();};const h=document[G(0x168)]('input');h['className']=G(0x1d5),h['value']=d[G(0x1bf)],h['placeholder']=G(0x188),h['title']=G(0x184),h['oninput']=()=>{const I=G;this[I(0x16d)][e][I(0x1bf)]=h['value'],this['_syncSignals']();};const j=document[G(0x168)]('button');j['className']='signal-icon-btn',j['title']=G(0x16a);const k=document['createElement']('img');k[G(0x1a0)]=assetsPath+'icons/copy.svg',k['style'][G(0x171)]=G(0x1da),j[G(0x1a4)](k),j[G(0x1c8)]=()=>{const J=G;this[J(0x16d)]['splice'](e+0x1,0x0,{...this['_signals'][e]}),this['_syncSignals'](),this[J(0x197)]();};const l=document[G(0x168)]('button');l['className']='signal-select-btn',l['textContent']=G(0x18e),l[G(0x16e)]=G(0x1d0),l[G(0x1c8)]=()=>this[G(0x186)](e,h);const m=document['createElement']('button');m[G(0x1cd)]='signal-icon-btn',m[G(0x16e)]='Remove';const n=document[G(0x168)]('img');n[G(0x1a0)]=assetsPath+G(0x1a2),n['style'][G(0x171)]='width:12px;\x20height:12px;',m[G(0x1a4)](n),m['onclick']=()=>{const K=G;this['_signals']['splice'](e,0x1),this[K(0x175)](),this['_renderSignalList']();},f[G(0x1a4)](g),f[G(0x1a4)](h),f[G(0x1a4)](l),f['appendChild'](j),f[G(0x1a4)](m),c['appendChild'](f);});}[y(0x175)](){const L=y;this['objectNames']=this['_signalsToObjectNames'](),this[L(0x1b8)]();}['_addSignal'](){const M=y;this['_signals'][M(0x1c0)]({'name':'','signal':''}),this[M(0x197)]();}async[y(0x186)](c,d){const N=y;let e=this[N(0x19d)]['createBindableObjectBrowser']();e[N(0x199)](this['_serviceContainer'],this['_instanceServiceContainer'],'binding'),e[N(0x16e)]='select\x20signal...';const f=new AbortController();e[N(0x195)]['on'](()=>{const O=N;f['abort']();let h='';if(e[O(0x1b7)][O(0x1d1)]==O(0x169))h='?';else e[O(0x1b7)]['bindabletype']===O(0x1bc)&&(h='??');this['_signals'][c]['signal']=h+e[O(0x1b7)]['fullName'],d['value']=this['_signals'][c]['signal'],this['_syncSignals']();});let g=await this[N(0x19d)]['openConfirmation'](e,{'x':0x64,'y':0x64,'width':0x190,'height':0x12c,'parent':this,'abortSignal':f[N(0x1bf)]});if(g){let h='';if(e[N(0x1b7)]['specialType']==N(0x169))h='?';else e[N(0x1b7)][N(0x198)]===N(0x1bc)&&(h='??');this['_signals'][c]['signal']=h+e['selectedObject'][N(0x1d4)],d['value']=this[N(0x16d)][c]['signal'],this['_syncSignals']();}}['_renderConverterList'](){const P=y,c=this['_converterListContainer'];c['innerHTML']='';const d=this[P(0x177)]?.[P(0x1c5)]==='color'?'color':P(0x1a7);this[P(0x1b6)]['forEach']((e,f)=>{const Q=P,g=document[Q(0x168)](Q(0x17a));g[Q(0x1cd)]=Q(0x1ca);const h=document['createElement']('input');h['style'][Q(0x171)]='flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;',h['value']=e[Q(0x1c2)],h[Q(0x1ac)]=Q(0x16c),h[Q(0x190)]=()=>{const R=Q;this[R(0x1b6)][f][R(0x1c2)]=h['value'];};const j=document['createElement']('input');j['type']=d,j['style'][Q(0x171)]='flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;',j['value']=e['value'],j['placeholder']='value',j[Q(0x190)]=()=>{const S=Q;this[S(0x1b6)][f][S(0x1d6)]=j[S(0x1d6)];};const k=document[Q(0x168)]('button');k[Q(0x1cd)]='signal-icon-btn',k['title']=Q(0x16a);const l=document['createElement']('img');l['src']=assetsPath+Q(0x189),l['style'][Q(0x171)]='width:12px;\x20height:12px;',k[Q(0x1a4)](l),k['onclick']=()=>{const T=Q;this['converters'][T(0x18c)](f+0x1,0x0,{...this[T(0x1b6)][f]}),this[T(0x1cc)]();};const m=document[Q(0x168)]('button');m[Q(0x1cd)]=Q(0x1a9),m[Q(0x16e)]='Remove';const n=document[Q(0x168)]('img');n['src']=assetsPath+Q(0x1a2),n[Q(0x167)]['cssText']=Q(0x1da),m['appendChild'](n),m['onclick']=()=>{const U=Q;this['converters'][U(0x18c)](f,0x1),this['_renderConverterList']();},g['appendChild'](h),g[Q(0x1a4)](j),g['appendChild'](k),g['appendChild'](m),c[Q(0x1a4)](g);});}[y(0x1bb)](){const V=y;this[V(0x1b6)][V(0x1c0)]({'key':'','value':''}),this['_renderConverterList']();}async['_selectNamedConverter'](){const W=y,c=BindingsEditor['namedConverters'];if(c[W(0x185)]===0x0)return;let d='',e=null;const f=document[W(0x168)](W(0x17a));f[W(0x167)]['cssText']=W(0x1c7);const g=document[W(0x168)]('div');g[W(0x167)]['cssText']=W(0x1cb),g['textContent']=W(0x1be),f['appendChild'](g);const h=document[W(0x168)](W(0x17a));h['style']['cssText']='flex:1;\x20overflow-y:auto;\x20padding:4px;',f[W(0x1a4)](h);const i=m=>{const X=W;m['style'][X(0x1bd)]='',m[X(0x167)][X(0x170)]=X(0x192);},j=(m,n)=>{const Y=W;if(e)i(e);e=m,m[Y(0x167)]['background']=Y(0x17c),m['style'][Y(0x170)]=Y(0x18a),d=n;};for(const m of c){const n=document['createElement']('div');n[W(0x167)][W(0x171)]='padding:5px\x206px\x205px\x209px;\x20cursor:pointer;\x20border-radius:3px;\x20border-left:3px\x20solid\x20transparent;\x20margin-bottom:2px;';const o=document['createElement']('div');o['style']['cssText']='font-family:monospace;\x20font-weight:bold;\x20color:#111;',o['textContent']=m[W(0x19a)],n['appendChild'](o);if(m[W(0x19c)]){const p=document[W(0x168)]('div');p[W(0x167)][W(0x171)]='color:#555;\x20font-size:11px;\x20margin-top:2px;',p['textContent']=m['description'],n['appendChild'](p);}if(m['converter']&&Object['keys'](m[W(0x1d8)])[W(0x185)]>0x0){const q=document[W(0x168)]('div');q['style'][W(0x171)]='display:grid;\x20grid-template-columns:max-content\x20max-content\x201fr;\x20gap:1px\x206px;\x20margin-top:4px;\x20padding:4px\x206px;\x20background:#f5f5f5;\x20border-radius:2px;\x20font-family:monospace;\x20font-size:11px;\x20color:#333;';for(const [r,s]of Object[W(0x174)](m['converter'])){const t=document['createElement'](W(0x1c6));t[W(0x167)][W(0x171)]='color:#555;\x20text-align:right;',t['textContent']=r;const u=document['createElement'](W(0x1c6));u['style']['cssText']=W(0x1c9),u['textContent']='→';const w=document[W(0x168)](W(0x1c6));w[W(0x167)][W(0x171)]=W(0x179),w[W(0x1a5)]=String(s),q['appendChild'](t),q[W(0x1a4)](u),q['appendChild'](w);}n['appendChild'](q);}n['onmouseenter']=()=>{const Z=W;if(n!==e)n['style'][Z(0x1bd)]='#f5f5f5';},n[W(0x196)]=()=>{const a0=W;if(n!==e)n['style'][a0(0x1bd)]='';},n['onclick']=()=>j(n,m[W(0x19a)]),h[W(0x1a4)](n);}const l=await this[W(0x19d)][W(0x1b1)](f,{'x':0x64,'y':0x64,'width':0x140,'height':0x12c,'parent':this});l&&d&&(this[W(0x17e)]=d,this[W(0x193)]('namedConverterInput')[W(0x1d6)]=d,this['_bindingsRefresh']());}[y(0x17f)](){requestAnimationFrame(()=>{const a1=b;this[a1(0x1b8)]();});}async[y(0x172)](){const a2=y;let c=new BindingsEditorHistoric(this['historic']);const d=new AbortController();c['title']=a2(0x18b)+this['_property']['name'];let e=await this['_shell'][a2(0x1b1)](c,{'x':0x64,'y':0x64,'width':0x1a4,'height':0x1fe,'parent':this,'abortSignal':d[a2(0x1bf)],'disableResize':!![],'cancelText':'Remove'});!e?this['historic']=null:this[a2(0x1b2)]=c[a2(0x1b2)],this['_bindingsRefresh']();}['_showHelp'](){const a3=y,c=document[a3(0x168)](a3(0x173));c['srcdoc']=BindingsEditor['helpSections']['length']>0x0?bindingsEditorHelpHtml[a3(0x1ab)]('</div>\x0a</body>',BindingsEditor[a3(0x1c3)][a3(0x1b5)]('')+'</div>\x0a</body>'):bindingsEditorHelpHtml,c['style']['cssText']=a3(0x17b),this['_shell']['openModal'](c,{'title':a3(0x1aa),'parent':this,'x':-0x294,'y':-0x50,'width':0x276,'height':0x244});}}customElements[y(0x1c4)](BindingsEditor['is'],BindingsEditor);
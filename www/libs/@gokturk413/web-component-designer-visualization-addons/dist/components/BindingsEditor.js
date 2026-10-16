const y=b;(function(c,d){const x=b,e=c();while(!![]){try{const f=-parseInt(x(0xde))/0x1*(parseInt(x(0x10e))/0x2)+parseInt(x(0x115))/0x3+parseInt(x(0x138))/0x4*(-parseInt(x(0xcf))/0x5)+parseInt(x(0x125))/0x6*(parseInt(x(0xe1))/0x7)+-parseInt(x(0xd5))/0x8+-parseInt(x(0x101))/0x9+-parseInt(x(0xed))/0xa*(-parseInt(x(0x134))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd11b3));import{BaseCustomWebComponentConstructorAppend,html,css}from'@node-projects/base-custom-webcomponent';import{BindingMode,BindingTarget,assetsPath}from'@gokturk413/web-component-designer';function b(c,d){c=c-0xcf;const e=a();let f=e[c];return f;}import{BindingsEditorHistoric}from'./BindingsEditorHistoric.js';import{bindingsEditorHelpHtml}from'./BindingsEditorHelp.js';function a(){const a2=['indexOf','15594ZdZosY','#f5f5f5','_addConverter','splice','namedConverters','createElement','node-projects-visualization-bindings-editor','_shell','Select\x20a\x20converter\x20and\x20confirm\x20with\x20OK.','property','namedConverterBrowse','_instanceServiceContainer','template','title','push','5990765JZqsJz','Remove','display','borderLeftColor','2543148udJxdB','display:grid;\x20grid-template-columns:max-content\x20max-content\x201fr;\x20gap:1px\x206px;\x20margin-top:4px;\x20padding:4px\x206px;\x20background:#f5f5f5;\x20border-radius:2px;\x20font-family:monospace;\x20font-size:11px;\x20color:#333;','_binding','namedConverterRow','signalProperty','onclick','filter','appendChild','oninput','helpSections','_showHelp','color:#aaa;','src','5fHAcao','_renderConverterList','signal','font-family:monospace;\x20font-weight:bold;\x20color:#111;','placeholder','span','12881496jMERMm','signal-icon-btn','_syncSignals','historic','fullName','name','initialize','color:#555;\x20text-align:right;','_bindingTarget','2423iFxLyb','...','abort','3801ZqFxRv','split','div','height','type','forEach','icons/delete.svg','slice','background','color:#555;\x20font-size:11px;\x20margin-top:2px;','cssText','_signals','30biGxOT','_selectForRow','convertersString','onmouseenter','ready','#e8f4fd','signal\x20path\x20(prefix:\x20?\x20=\x20signal\x20name\x20in\x20screen\x20property,\x20??\x20=\x20screen\x20property\x20value,\x20?$\x20=\x20signal\x20object\x20in\x20screen\x20property,\x20?@\x20=\x20screen\x20attribute,\x20#\x20=\x20signal\x20name\x20in\x20target\x20property,\x20##\x20=\x20target\x20property\x20value,\x20#$\x20=\x20signal\x20object\x20in\x20target\x20property,\x20#@\x20=\x20target\x20attribute)','helpBtn','expression','historicLabel','style','_restoreCachedInititalValues','properties','signal-name-input','createBindableObjectBrowser','_signalListContainer','_selectNamedConverter','className','_getDomElement','display:flex;\x20flex-direction:column;\x20height:100%;\x20box-sizing:border-box;\x20font-size:12px;','4149tSDYOV','_bindingsRefresh','objectNames','showHistoric','flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;','twoWay','input','invert','width:12px;\x20height:12px;','converters','none','twoWayPossible','key','76TntAXD','Bindings\x20Editor\x20Help','value','selectedObject','signalListContainer','_renderSignalList','signal\x20path','449718FsvYap','bindabletype','expressionTwoWay','join','_bindingsParse','length','</div>\x0a</body>','events','converter','\x20if\x20empty)','textContent','map','bindableObjectNames','img','button'];a=function(){return a2;};return a();}export class BindingsEditor extends BaseCustomWebComponentConstructorAppend{static [y(0x131)]=html`
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
        </div>`;static [y(0xf7)]=css`
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
        }`;static ['is']=y(0x12b);static [y(0xf9)]={'twoWayPossible':Boolean,'twoWay':Boolean,'expression':String,'events':String,'invert':Boolean,'historic':Object};[y(0x10c)]=![];['twoWay']=![];[y(0xf5)]='';['writeBackSignal']='';[y(0x117)]='';[y(0xd8)];[y(0x103)]='';[y(0x11c)]='';['invert']=![];[y(0x10a)]=[];static [y(0x129)]=[];static [y(0x141)]=[];[y(0xef)];get[y(0x11d)](){const z=y;if(this[z(0xef)])return this['convertersString'];if(this['converters']['length']>0x0)return Object['fromEntries'](this[z(0x10a)]['map'](d=>[d[z(0x10d)],d['value']]));return undefined;}['_property'];[y(0x13a)];['_bindingTarget'];['_serviceContainer'];[y(0x130)];['_shell'];['_signals']=[];['_signalListContainer'];['_converterListContainer'];constructor(c,d,e,f,g,h,i={}){const A=y;super(),super[A(0xf8)](),this['_property']=c,this['_binding']=d,this[A(0xdd)]=e,this['_serviceContainer']=f,this[A(0x130)]=g,this[A(0x12c)]=h;i?.['namedConverters']===![]&&(this['_getDomElement'](A(0x13b))['style']['display']='none');const j=this['_getDomElement']('historicBtn');if(i?.[A(0x104)]===![])j['style']['display']='none';else i?.['historicLabel']&&(j['textContent']=i[A(0xf6)]);}[y(0xf1)](){const B=y;this['_parseAttributesToProperties'](),this['_assignEvents'](),this[B(0xfc)]=this['_getDomElement'](B(0x112)),this['_converterListContainer']=this['_getDomElement']('converterListContainer'),this['_getDomElement'](B(0xf4))['onclick']=()=>this[B(0x142)]();if(BindingsEditor['namedConverters'][B(0x11a)]===0x0)this['_getDomElement'](B(0x12f))['style'][B(0x136)]=B(0x10b);this[B(0x10c)]=![];if(this[B(0xdd)]==BindingTarget[B(0x12e)]||this['_bindingTarget']==BindingTarget['attribute'])this[B(0x10c)]=!![];if(this[B(0x13a)]){this[B(0x106)]=this['_binding']['mode']==BindingMode[B(0x106)],this['expression']=this[B(0x13a)]['expression'],this['writeBackSignal']=this[B(0x13a)]['writeBackSignal'],this[B(0x117)]=this[B(0x13a)][B(0x117)],this['historic']=this[B(0x13a)][B(0xd8)],this[B(0x108)]=this['_binding']['invert'];if(this[B(0x13a)][B(0x121)])this[B(0x103)]=this[B(0x13a)]['bindableObjectNames']['join'](';');if(this[B(0x13a)][B(0x11d)]){if(typeof this[B(0x13a)][B(0x11d)]==='string')this[B(0xef)]=this['_binding'][B(0x11d)];else for(let d in this['_binding'][B(0x11d)]){this[B(0x10a)][B(0x133)]({'key':d,'value':this['_binding']['converter'][d]});}}if(this['_binding']['changedEvents']&&this[B(0x13a)]['changedEvents'][B(0x11a)])this[B(0x11c)]=this['_binding']['changedEvents'][B(0x118)](';');}if(this['expression']){let e=this[B(0xff)](B(0xf5));this['expression']['indexOf']('\x0a')>=0x0&&(e[B(0xf7)][B(0xe4)]=0x3*0x11+'px');}if(this[B(0x117)]){let f=this[B(0xff)]('expression2way');this[B(0x117)][B(0x124)]('\x0a')>=0x0&&(f['style'][B(0xe4)]=0x3*0x11+'px');}this['_signals']=this['_parseObjectNames'](this['objectNames']);if(this[B(0xec)][B(0x11a)]===0x0)this[B(0xec)][B(0x133)]({'name':'','signal':''});this['_renderSignalList'](),this[B(0xd0)](),this[B(0x119)]();}['_parseObjectNames'](c){const C=y;if(!c)return[];return c[C(0xe2)](';')[C(0x13e)](d=>d[C(0x11a)]>0x0)[C(0x120)](d=>{const D=C,e=d['indexOf'](':');if(e>0x0)return{'name':d['slice'](0x0,e),'signal':d[D(0xe8)](e+0x1)};return{'name':'','signal':d};});}['_signalsToObjectNames'](){const E=y;return this['_signals'][E(0x120)](c=>c['name']?c[E(0xda)]+':'+c[E(0xd1)]:c[E(0xd1)])['join'](';');}['_renderSignalList'](){const F=y,c=this['_signalListContainer'];c['innerHTML']='',this[F(0xec)][F(0xe6)]((d,e)=>{const G=F,f=document['createElement'](G(0xe3));f['className']='signal-row';const g=document[G(0x12a)]('input');g[G(0xfe)]=G(0xfa),g['placeholder']='__'+e,g['value']=d['name'],g[G(0x132)]='variable\x20name\x20used\x20in\x20the\x20formula\x20(defaults\x20to\x20__'+e+G(0x11e),g[G(0x140)]=()=>{const H=G;this['_signals'][e][H(0xda)]=g['value'],this[H(0xd7)]();};const h=document['createElement']('input');h['className']='signal-path-input',h[G(0x110)]=d[G(0xd1)],h['placeholder']=G(0x114),h['title']=G(0xf3),h[G(0x140)]=()=>{const I=G;this[I(0xec)][e]['signal']=h[I(0x110)],this[I(0xd7)]();};const j=document[G(0x12a)]('button');j['className']='signal-icon-btn',j[G(0x132)]='Duplicate';const k=document[G(0x12a)](G(0x122));k[G(0x144)]=assetsPath+'icons/copy.svg',k['style']['cssText']=G(0x109),j['appendChild'](k),j[G(0x13d)]=()=>{const J=G;this['_signals']['splice'](e+0x1,0x0,{...this['_signals'][e]}),this['_syncSignals'](),this[J(0x113)]();};const l=document['createElement']('button');l['className']='signal-select-btn',l['textContent']=G(0xdf),l[G(0x132)]='Browse\x20signal',l['onclick']=()=>this[G(0xee)](e,h);const m=document[G(0x12a)](G(0x123));m[G(0xfe)]=G(0xd6),m[G(0x132)]='Remove';const n=document[G(0x12a)](G(0x122));n['src']=assetsPath+G(0xe7),n[G(0xf7)]['cssText']=G(0x109),m['appendChild'](n),m[G(0x13d)]=()=>{const K=G;this['_signals'][K(0x128)](e,0x1),this['_syncSignals'](),this['_renderSignalList']();},f[G(0x13f)](g),f[G(0x13f)](h),f[G(0x13f)](l),f[G(0x13f)](j),f['appendChild'](m),c[G(0x13f)](f);});}['_syncSignals'](){this['objectNames']=this['_signalsToObjectNames'](),this['_bindingsRefresh']();}['_addSignal'](){const L=y;this['_signals']['push']({'name':'','signal':''}),this[L(0x113)]();}async[y(0xee)](c,d){const M=y;let e=this[M(0x12c)][M(0xfb)]();e[M(0xdb)](this['_serviceContainer'],this['_instanceServiceContainer'],'binding'),e['title']='select\x20signal...';const f=new AbortController();e['objectDoubleclicked']['on'](()=>{const N=M;f[N(0xe0)]();let h='';if(e['selectedObject']['specialType']==N(0x13c))h='?';else e['selectedObject'][N(0x116)]===N(0x12e)&&(h='??');this[N(0xec)][c]['signal']=h+e['selectedObject'][N(0xd9)],d['value']=this['_signals'][c]['signal'],this[N(0xd7)]();});let g=await this[M(0x12c)]['openConfirmation'](e,{'x':0x64,'y':0x64,'width':0x190,'height':0x12c,'parent':this,'abortSignal':f['signal']});if(g){let h='';if(e['selectedObject']['specialType']=='signalProperty')h='?';else e[M(0x111)][M(0x116)]==='property'&&(h='??');this['_signals'][c]['signal']=h+e[M(0x111)]['fullName'],d[M(0x110)]=this[M(0xec)][c]['signal'],this[M(0xd7)]();}}['_renderConverterList'](){const O=y,c=this['_converterListContainer'];c['innerHTML']='';const d=this['_property']?.[O(0xe5)]==='color'?'color':'text';this[O(0x10a)][O(0xe6)]((e,f)=>{const P=O,g=document[P(0x12a)](P(0xe3));g['className']='signal-row';const h=document['createElement'](P(0x107));h[P(0xf7)][P(0xeb)]='flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;',h['value']=e['key'],h['placeholder']='condition',h[P(0x140)]=()=>{const Q=P;this['converters'][f]['key']=h[Q(0x110)];};const j=document['createElement']('input');j[P(0xe5)]=d,j['style'][P(0xeb)]=P(0x105),j[P(0x110)]=e['value'],j[P(0xd3)]=P(0x110),j[P(0x140)]=()=>{this['converters'][f]['value']=j['value'];};const k=document['createElement']('button');k[P(0xfe)]=P(0xd6),k['title']='Duplicate';const l=document['createElement']('img');l[P(0x144)]=assetsPath+'icons/copy.svg',l['style'][P(0xeb)]='width:12px;\x20height:12px;',k['appendChild'](l),k['onclick']=()=>{const R=P;this[R(0x10a)]['splice'](f+0x1,0x0,{...this[R(0x10a)][f]}),this[R(0xd0)]();};const m=document[P(0x12a)]('button');m['className']=P(0xd6),m['title']='Remove';const n=document[P(0x12a)](P(0x122));n[P(0x144)]=assetsPath+'icons/delete.svg',n[P(0xf7)][P(0xeb)]=P(0x109),m[P(0x13f)](n),m[P(0x13d)]=()=>{const S=P;this[S(0x10a)]['splice'](f,0x1),this[S(0xd0)]();},g[P(0x13f)](h),g['appendChild'](j),g['appendChild'](k),g['appendChild'](m),c['appendChild'](g);});}[y(0x127)](){const T=y;this[T(0x10a)]['push']({'key':'','value':''}),this['_renderConverterList']();}async[y(0xfd)](){const U=y,c=BindingsEditor[U(0x129)];if(c['length']===0x0)return;let d='',e=null;const f=document['createElement'](U(0xe3));f['style']['cssText']=U(0x100);const g=document[U(0x12a)]('div');g['style'][U(0xeb)]='padding:6px\x208px\x204px;\x20color:#666;\x20font-size:11px;\x20border-bottom:1px\x20solid\x20#e0e0e0;\x20flex-shrink:0;',g[U(0x11f)]=U(0x12d),f[U(0x13f)](g);const h=document['createElement'](U(0xe3));h['style'][U(0xeb)]='flex:1;\x20overflow-y:auto;\x20padding:4px;',f['appendChild'](h);const i=m=>{const V=U;m['style'][V(0xe9)]='',m[V(0xf7)][V(0x137)]='transparent';},j=(m,n)=>{const W=U;if(e)i(e);e=m,m[W(0xf7)]['background']=W(0xf2),m[W(0xf7)][W(0x137)]='#0078d7',d=n;};for(const m of c){const n=document[U(0x12a)](U(0xe3));n['style'][U(0xeb)]='padding:5px\x206px\x205px\x209px;\x20cursor:pointer;\x20border-radius:3px;\x20border-left:3px\x20solid\x20transparent;\x20margin-bottom:2px;';const o=document[U(0x12a)](U(0xe3));o['style'][U(0xeb)]=U(0xd2),o[U(0x11f)]=m[U(0xda)],n[U(0x13f)](o);if(m['description']){const p=document['createElement'](U(0xe3));p[U(0xf7)]['cssText']=U(0xea),p['textContent']=m['description'],n['appendChild'](p);}if(m[U(0x11d)]&&Object['keys'](m[U(0x11d)])[U(0x11a)]>0x0){const q=document[U(0x12a)](U(0xe3));q['style']['cssText']=U(0x139);for(const [r,s]of Object['entries'](m[U(0x11d)])){const t=document[U(0x12a)]('span');t[U(0xf7)][U(0xeb)]=U(0xdc),t[U(0x11f)]=r;const u=document[U(0x12a)]('span');u[U(0xf7)]['cssText']=U(0x143),u['textContent']='→';const w=document[U(0x12a)](U(0xd4));w['style']['cssText']='color:#0078d7;\x20font-weight:bold;',w[U(0x11f)]=String(s),q[U(0x13f)](t),q['appendChild'](u),q[U(0x13f)](w);}n['appendChild'](q);}n[U(0xf0)]=()=>{const X=U;if(n!==e)n[X(0xf7)]['background']=X(0x126);},n['onmouseleave']=()=>{const Y=U;if(n!==e)n[Y(0xf7)][Y(0xe9)]='';},n['onclick']=()=>j(n,m[U(0xda)]),h['appendChild'](n);}const l=await this['_shell']['openConfirmation'](f,{'x':0x64,'y':0x64,'width':0x140,'height':0x12c,'parent':this});l&&d&&(this['convertersString']=d,this[U(0xff)]('namedConverterInput')['value']=d,this['_bindingsRefresh']());}['_refresh'](){requestAnimationFrame(()=>{const Z=b;this[Z(0x102)]();});}async['showHistoric'](){const a0=y;let c=new BindingsEditorHistoric(this[a0(0xd8)]);const d=new AbortController();c[a0(0x132)]='Edit\x20historic\x20binding\x20to:\x20'+this['_property'][a0(0xda)];let e=await this['_shell']['openConfirmation'](c,{'x':0x64,'y':0x64,'width':0x1a4,'height':0x1fe,'parent':this,'abortSignal':d[a0(0xd1)],'disableResize':!![],'cancelText':a0(0x135)});!e?this['historic']=null:this['historic']=c[a0(0xd8)],this['_bindingsRefresh']();}['_showHelp'](){const a1=y,c=document['createElement']('iframe');c['srcdoc']=BindingsEditor[a1(0x141)]['length']>0x0?bindingsEditorHelpHtml['replace'](a1(0x11b),BindingsEditor[a1(0x141)][a1(0x118)]('')+a1(0x11b)):bindingsEditorHelpHtml,c['style'][a1(0xeb)]='width:100%;\x20height:100%;\x20border:none;\x20display:block;',this['_shell']['openModal'](c,{'title':a1(0x10f),'parent':this,'x':-0x294,'y':-0x50,'width':0x276,'height':0x244});}}customElements['define'](BindingsEditor['is'],BindingsEditor);
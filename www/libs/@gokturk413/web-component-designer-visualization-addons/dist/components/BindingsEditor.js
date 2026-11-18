const y=b;function b(c,d){c=c-0x150;const e=a();let f=e[c];return f;}(function(c,d){const x=b,e=c();while(!![]){try{const f=-parseInt(x(0x1bd))/0x1*(parseInt(x(0x18c))/0x2)+parseInt(x(0x191))/0x3*(-parseInt(x(0x1a2))/0x4)+-parseInt(x(0x180))/0x5*(-parseInt(x(0x19c))/0x6)+-parseInt(x(0x185))/0x7+parseInt(x(0x1b5))/0x8+parseInt(x(0x177))/0x9*(parseInt(x(0x167))/0xa)+parseInt(x(0x160))/0xb*(parseInt(x(0x186))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9eb32));import{BaseCustomWebComponentConstructorAppend,html,css}from'@node-projects/base-custom-webcomponent';import{BindingMode,BindingTarget,assetsPath}from'@gokturk413/web-component-designer';import{BindingsEditorHistoric}from'./BindingsEditorHistoric.js';import{bindingsEditorHelpHtml}from'./BindingsEditorHelp.js';export class BindingsEditor extends BaseCustomWebComponentConstructorAppend{static [y(0x181)]=html`
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
        }`;static ['is']='node-projects-visualization-bindings-editor';static ['properties']={'twoWayPossible':Boolean,'twoWay':Boolean,'expression':String,'events':String,'invert':Boolean,'historic':Object};['twoWayPossible']=![];[y(0x195)]=![];['expression']='';[y(0x16c)]='';[y(0x15c)]='';['historic'];[y(0x19e)]='';['events']='';[y(0x192)]=![];['converters']=[];static [y(0x1a5)]=[];static ['helpSections']=[];['convertersString'];get[y(0x173)](){const z=y;if(this[z(0x17e)])return this[z(0x17e)];if(this[z(0x163)][z(0x17a)]>0x0)return Object['fromEntries'](this[z(0x163)]['map'](d=>[d['key'],d[z(0x166)]]));return undefined;}['_property'];['_binding'];[y(0x187)];[y(0x157)];['_instanceServiceContainer'];['_shell'];[y(0x18d)]=[];[y(0x1a8)];['_converterListContainer'];constructor(c,d,e,f,g,h,i={}){const A=y;super(),super['_restoreCachedInititalValues'](),this['_property']=c,this[A(0x19d)]=d,this['_bindingTarget']=e,this[A(0x157)]=f,this['_instanceServiceContainer']=g,this['_shell']=h;i?.['namedConverters']===![]&&(this['_getDomElement']('namedConverterRow')[A(0x15a)]['display']='none');const j=this['_getDomElement']('historicBtn');if(i?.[A(0x183)]===![])j['style']['display']=A(0x1b4);else i?.[A(0x170)]&&(j['textContent']=i['historicLabel']);}[y(0x198)](){const B=y;this['_parseAttributesToProperties'](),this[B(0x1b1)](),this[B(0x1a8)]=this[B(0x19f)]('signalListContainer'),this['_converterListContainer']=this[B(0x19f)](B(0x159)),this['_getDomElement'](B(0x17d))['onclick']=()=>this[B(0x18e)]();if(BindingsEditor[B(0x1a5)]['length']===0x0)this['_getDomElement']('namedConverterBrowse')['style']['display']=B(0x1b4);this['twoWayPossible']=![];if(this['_bindingTarget']==BindingTarget[B(0x1a9)]||this[B(0x187)]==BindingTarget['attribute'])this['twoWayPossible']=!![];if(this['_binding']){this['twoWay']=this['_binding']['mode']==BindingMode['twoWay'],this[B(0x1bc)]=this[B(0x19d)][B(0x1bc)],this[B(0x16c)]=this[B(0x19d)][B(0x16c)],this['expressionTwoWay']=this['_binding'][B(0x15c)],this[B(0x19b)]=this[B(0x19d)][B(0x19b)],this['invert']=this['_binding'][B(0x192)];if(this[B(0x19d)]['bindableObjectNames'])this['objectNames']=this[B(0x19d)]['bindableObjectNames'][B(0x17c)](';');if(this['_binding']['converter']){if(typeof this['_binding']['converter']===B(0x196))this[B(0x17e)]=this['_binding'][B(0x173)];else for(let d in this['_binding']['converter']){this['converters'][B(0x16a)]({'key':d,'value':this['_binding'][B(0x173)][d]});}}if(this['_binding'][B(0x16d)]&&this[B(0x19d)]['changedEvents'][B(0x17a)])this['events']=this[B(0x19d)][B(0x16d)][B(0x17c)](';');}if(this['expression']){let e=this['_getDomElement']('expression');this['expression'][B(0x1bb)]('\x0a')>=0x0&&(e[B(0x15a)]['height']=0x3*0x11+'px');}if(this['expressionTwoWay']){let f=this['_getDomElement']('expression2way');this[B(0x15c)]['indexOf']('\x0a')>=0x0&&(f[B(0x15a)][B(0x17b)]=0x3*0x11+'px');}this['_signals']=this['_parseObjectNames'](this['objectNames']);if(this[B(0x18d)][B(0x17a)]===0x0)this['_signals'][B(0x16a)]({'name':'','signal':''});this['_renderSignalList'](),this[B(0x175)](),this['_bindingsParse']();}['_parseObjectNames'](c){if(!c)return[];return c['split'](';')['filter'](d=>d['length']>0x0)['map'](d=>{const C=b,e=d[C(0x1bb)](':');if(e>0x0)return{'name':d['slice'](0x0,e),'signal':d[C(0x15b)](e+0x1)};return{'name':'','signal':d};});}['_signalsToObjectNames'](){const D=y;return this[D(0x18d)]['map'](c=>c[D(0x176)]?c['name']+':'+c[D(0x15f)]:c['signal'])['join'](';');}['_renderSignalList'](){const c=this['_signalListContainer'];c['innerHTML']='',this['_signals']['forEach']((d,e)=>{const E=b,f=document['createElement']('div');f[E(0x197)]='signal-row';const g=document['createElement']('input');g['className']='signal-name-input',g['placeholder']='__'+e,g['value']=d['name'],g[E(0x1ba)]='variable\x20name\x20used\x20in\x20the\x20formula\x20(defaults\x20to\x20__'+e+E(0x17f),g[E(0x161)]=()=>{const F=E;this[F(0x18d)][e]['name']=g[F(0x166)],this['_syncSignals']();};const h=document[E(0x18a)]('input');h['className']='signal-path-input',h['value']=d['signal'],h['placeholder']=E(0x199),h[E(0x1ba)]='signal\x20path\x20(prefix:\x20?\x20=\x20signal\x20name\x20in\x20screen\x20property,\x20??\x20=\x20screen\x20property\x20value,\x20?$\x20=\x20signal\x20object\x20in\x20screen\x20property,\x20?@\x20=\x20screen\x20attribute,\x20#\x20=\x20signal\x20name\x20in\x20target\x20property,\x20##\x20=\x20target\x20property\x20value,\x20#$\x20=\x20signal\x20object\x20in\x20target\x20property,\x20#@\x20=\x20target\x20attribute)',h[E(0x161)]=()=>{const G=E;this['_signals'][e]['signal']=h[G(0x166)],this['_syncSignals']();};const j=document['createElement']('button');j[E(0x197)]=E(0x194),j['title']='Duplicate';const k=document[E(0x18a)]('img');k[E(0x153)]=assetsPath+'icons/copy.svg',k['style']['cssText']='width:12px;\x20height:12px;',j['appendChild'](k),j[E(0x171)]=()=>{const H=E;this['_signals'][H(0x184)](e+0x1,0x0,{...this[H(0x18d)][e]}),this['_syncSignals'](),this['_renderSignalList']();};const l=document[E(0x18a)](E(0x1a6));l[E(0x197)]=E(0x150),l['textContent']=E(0x1b6),l['title']=E(0x1b8),l[E(0x171)]=()=>this[E(0x165)](e,h);const m=document['createElement']('button');m['className']='signal-icon-btn',m['title']='Remove';const n=document[E(0x18a)]('img');n['src']=assetsPath+E(0x178),n[E(0x15a)][E(0x18b)]=E(0x179),m['appendChild'](n),m['onclick']=()=>{const I=E;this['_signals'][I(0x184)](e,0x1),this[I(0x1ab)](),this['_renderSignalList']();},f[E(0x15e)](g),f['appendChild'](h),f['appendChild'](l),f[E(0x15e)](j),f['appendChild'](m),c['appendChild'](f);});}['_syncSignals'](){const J=y;this['objectNames']=this[J(0x1b0)](),this['_bindingsRefresh']();}['_addSignal'](){const K=y;this[K(0x18d)]['push']({'name':'','signal':''}),this['_renderSignalList']();}async['_selectForRow'](c,d){const L=y;let e=this['_shell'][L(0x172)]();e['initialize'](this['_serviceContainer'],this['_instanceServiceContainer'],L(0x1a1)),e[L(0x1ba)]=L(0x188);const f=new AbortController();e[L(0x168)]['on'](()=>{const M=L;f['abort']();let h='';if(e['selectedObject']['specialType']==M(0x169))h='?';else e['selectedObject'][M(0x189)]===M(0x1a9)&&(h='??');this['_signals'][c][M(0x15f)]=h+e[M(0x19a)]['fullName'],d['value']=this['_signals'][c]['signal'],this['_syncSignals']();});let g=await this[L(0x1aa)][L(0x16b)](e,{'x':0x64,'y':0x64,'width':0x190,'height':0x12c,'parent':this,'abortSignal':f['signal']});if(g){let h='';if(e[L(0x19a)][L(0x16e)]==L(0x169))h='?';else e[L(0x19a)]['bindabletype']==='property'&&(h='??');this['_signals'][c]['signal']=h+e[L(0x19a)][L(0x1a0)],d['value']=this['_signals'][c]['signal'],this['_syncSignals']();}}[y(0x175)](){const N=y,c=this[N(0x1b3)];c['innerHTML']='';const d=this['_property']?.[N(0x193)]===N(0x1ad)?N(0x1ad):'text';this[N(0x163)][N(0x1b2)]((e,f)=>{const O=N,g=document[O(0x18a)]('div');g['className']=O(0x15d);const h=document['createElement']('input');h['style'][O(0x18b)]=O(0x182),h[O(0x166)]=e['key'],h['placeholder']='condition',h['oninput']=()=>{const P=O;this['converters'][f]['key']=h[P(0x166)];};const j=document[O(0x18a)]('input');j[O(0x193)]=d,j['style']['cssText']='flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;',j['value']=e['value'],j[O(0x152)]=O(0x166),j[O(0x161)]=()=>{const Q=O;this[Q(0x163)][f]['value']=j[Q(0x166)];};const k=document['createElement'](O(0x1a6));k[O(0x197)]=O(0x194),k['title']='Duplicate';const l=document['createElement'](O(0x1b9));l['src']=assetsPath+'icons/copy.svg',l[O(0x15a)]['cssText']=O(0x179),k['appendChild'](l),k[O(0x171)]=()=>{const R=O;this[R(0x163)][R(0x184)](f+0x1,0x0,{...this[R(0x163)][f]}),this[R(0x175)]();};const m=document['createElement'](O(0x1a6));m['className']='signal-icon-btn',m[O(0x1ba)]='Remove';const n=document[O(0x18a)]('img');n[O(0x153)]=assetsPath+O(0x178),n[O(0x15a)][O(0x18b)]=O(0x179),m[O(0x15e)](n),m['onclick']=()=>{const S=O;this[S(0x163)][S(0x184)](f,0x1),this[S(0x175)]();},g[O(0x15e)](h),g[O(0x15e)](j),g[O(0x15e)](k),g['appendChild'](m),c[O(0x15e)](g);});}['_addConverter'](){const T=y;this[T(0x163)]['push']({'key':'','value':''}),this[T(0x175)]();}async['_selectNamedConverter'](){const U=y,c=BindingsEditor[U(0x1a5)];if(c['length']===0x0)return;let d='',e=null;const f=document[U(0x18a)]('div');f[U(0x15a)][U(0x18b)]=U(0x164);const g=document[U(0x18a)](U(0x190));g[U(0x15a)]['cssText']=U(0x151),g[U(0x1a3)]='Select\x20a\x20converter\x20and\x20confirm\x20with\x20OK.',f['appendChild'](g);const h=document['createElement']('div');h['style']['cssText']='flex:1;\x20overflow-y:auto;\x20padding:4px;',f[U(0x15e)](h);const i=m=>{const V=U;m['style'][V(0x1ac)]='',m[V(0x15a)][V(0x156)]='transparent';},j=(m,n)=>{const W=U;if(e)i(e);e=m,m[W(0x15a)]['background']='#e8f4fd',m['style'][W(0x156)]=W(0x1b7),d=n;};for(const m of c){const n=document['createElement'](U(0x190));n['style'][U(0x18b)]=U(0x155);const o=document['createElement'](U(0x190));o['style']['cssText']='font-family:monospace;\x20font-weight:bold;\x20color:#111;',o['textContent']=m['name'],n[U(0x15e)](o);if(m['description']){const p=document['createElement']('div');p[U(0x15a)]['cssText']='color:#555;\x20font-size:11px;\x20margin-top:2px;',p[U(0x1a3)]=m['description'],n['appendChild'](p);}if(m['converter']&&Object['keys'](m['converter'])[U(0x17a)]>0x0){const q=document[U(0x18a)]('div');q[U(0x15a)]['cssText']='display:grid;\x20grid-template-columns:max-content\x20max-content\x201fr;\x20gap:1px\x206px;\x20margin-top:4px;\x20padding:4px\x206px;\x20background:#f5f5f5;\x20border-radius:2px;\x20font-family:monospace;\x20font-size:11px;\x20color:#333;';for(const [r,s]of Object[U(0x154)](m['converter'])){const t=document[U(0x18a)]('span');t[U(0x15a)]['cssText']='color:#555;\x20text-align:right;',t[U(0x1a3)]=r;const u=document['createElement'](U(0x1af));u[U(0x15a)][U(0x18b)]='color:#aaa;',u['textContent']='→';const w=document[U(0x18a)]('span');w['style'][U(0x18b)]='color:#0078d7;\x20font-weight:bold;',w['textContent']=String(s),q[U(0x15e)](t),q['appendChild'](u),q[U(0x15e)](w);}n[U(0x15e)](q);}n[U(0x174)]=()=>{const X=U;if(n!==e)n[X(0x15a)][X(0x1ac)]='#f5f5f5';},n[U(0x16f)]=()=>{if(n!==e)n['style']['background']='';},n['onclick']=()=>j(n,m[U(0x176)]),h[U(0x15e)](n);}const l=await this[U(0x1aa)][U(0x16b)](f,{'x':0x64,'y':0x64,'width':0x140,'height':0x12c,'parent':this});l&&d&&(this['convertersString']=d,this['_getDomElement']('namedConverterInput')[U(0x166)]=d,this[U(0x1a7)]());}['_refresh'](){requestAnimationFrame(()=>{const Y=b;this[Y(0x1a7)]();});}async['showHistoric'](){const Z=y;let c=new BindingsEditorHistoric(this['historic']);const d=new AbortController();c['title']='Edit\x20historic\x20binding\x20to:\x20'+this['_property'][Z(0x176)];let e=await this['_shell']['openConfirmation'](c,{'x':0x64,'y':0x64,'width':0x1a4,'height':0x1fe,'parent':this,'abortSignal':d[Z(0x15f)],'disableResize':!![],'cancelText':Z(0x1a4)});!e?this[Z(0x19b)]=null:this['historic']=c['historic'],this['_bindingsRefresh']();}[y(0x18e)](){const a0=y,c=document['createElement'](a0(0x1ae));c['srcdoc']=BindingsEditor['helpSections']['length']>0x0?bindingsEditorHelpHtml[a0(0x18f)]('</div>\x0a</body>',BindingsEditor[a0(0x158)][a0(0x17c)]('')+'</div>\x0a</body>'):bindingsEditorHelpHtml,c['style'][a0(0x18b)]=a0(0x162),this['_shell']['openModal'](c,{'title':'Bindings\x20Editor\x20Help','parent':this,'x':-0x294,'y':-0x50,'width':0x276,'height':0x244});}}customElements['define'](BindingsEditor['is'],BindingsEditor);function a(){const a1=['flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;','showHistoric','splice','4049969QNTSsY','192woHygY','_bindingTarget','select\x20signal...','bindabletype','createElement','cssText','416882NnrgqM','_signals','_showHelp','replace','div','123MjJeeJ','invert','type','signal-icon-btn','twoWay','string','className','ready','signal\x20path','selectedObject','historic','2163030mybwry','_binding','objectNames','_getDomElement','fullName','binding','11848bEAcCi','textContent','Remove','namedConverters','button','_bindingsRefresh','_signalListContainer','property','_shell','_syncSignals','background','color','iframe','span','_signalsToObjectNames','_assignEvents','forEach','_converterListContainer','none','2978960miIMEN','...','#0078d7','Browse\x20signal','img','title','indexOf','expression','3yyuMlf','signal-select-btn','padding:6px\x208px\x204px;\x20color:#666;\x20font-size:11px;\x20border-bottom:1px\x20solid\x20#e0e0e0;\x20flex-shrink:0;','placeholder','src','entries','padding:5px\x206px\x205px\x209px;\x20cursor:pointer;\x20border-radius:3px;\x20border-left:3px\x20solid\x20transparent;\x20margin-bottom:2px;','borderLeftColor','_serviceContainer','helpSections','converterListContainer','style','slice','expressionTwoWay','signal-row','appendChild','signal','255156PndCpw','oninput','width:100%;\x20height:100%;\x20border:none;\x20display:block;','converters','display:flex;\x20flex-direction:column;\x20height:100%;\x20box-sizing:border-box;\x20font-size:12px;','_selectForRow','value','20TUNysm','objectDoubleclicked','signalProperty','push','openConfirmation','writeBackSignal','changedEvents','specialType','onmouseleave','historicLabel','onclick','createBindableObjectBrowser','converter','onmouseenter','_renderConverterList','name','2298825sJXBCe','icons/delete.svg','width:12px;\x20height:12px;','length','height','join','helpBtn','convertersString','\x20if\x20empty)','10jkqmjz','template'];a=function(){return a1;};return a();}
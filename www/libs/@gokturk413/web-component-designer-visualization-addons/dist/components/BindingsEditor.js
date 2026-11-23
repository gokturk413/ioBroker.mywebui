const y=b;(function(c,d){const x=b,e=c();while(!![]){try{const f=parseInt(x(0x1e7))/0x1*(-parseInt(x(0x204))/0x2)+-parseInt(x(0x1da))/0x3+parseInt(x(0x1ae))/0x4*(-parseInt(x(0x1ac))/0x5)+parseInt(x(0x1a4))/0x6*(parseInt(x(0x1ca))/0x7)+parseInt(x(0x19c))/0x8+parseInt(x(0x1dd))/0x9*(parseInt(x(0x1e8))/0xa)+parseInt(x(0x1f7))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x26678));function b(c,d){c=c-0x19a;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,html,css}from'@node-projects/base-custom-webcomponent';import{BindingMode,BindingTarget,assetsPath}from'@gokturk413/web-component-designer';import{BindingsEditorHistoric}from'./BindingsEditorHistoric.js';import{bindingsEditorHelpHtml}from'./BindingsEditorHelp.js';export class BindingsEditor extends BaseCustomWebComponentConstructorAppend{static [y(0x20e)]=html`
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
        </div>`;static [y(0x1b2)]=css`
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
        }`;static ['is']=y(0x1af);static ['properties']={'twoWayPossible':Boolean,'twoWay':Boolean,'expression':String,'events':String,'invert':Boolean,'historic':Object};[y(0x1b4)]=![];[y(0x1fa)]=![];[y(0x1f6)]='';['writeBackSignal']='';[y(0x1cf)]='';['historic'];[y(0x20a)]='';['events']='';[y(0x1d3)]=![];['converters']=[];static [y(0x201)]=[];static ['helpSections']=[];[y(0x207)];get[y(0x1e2)](){const z=y;if(this['convertersString'])return this['convertersString'];if(this['converters']['length']>0x0)return Object[z(0x1b8)](this['converters']['map'](d=>[d[z(0x1aa)],d[z(0x1a2)]]));return undefined;}['_property'];[y(0x1a8)];['_bindingTarget'];[y(0x1d9)];[y(0x1a1)];['_shell'];['_signals']=[];['_signalListContainer'];[y(0x19a)];constructor(c,d,e,f,g,h,i={}){const A=y;super(),super[A(0x1d2)](),this[A(0x1c2)]=c,this['_binding']=d,this['_bindingTarget']=e,this['_serviceContainer']=f,this['_instanceServiceContainer']=g,this[A(0x1fd)]=h;i?.['namedConverters']===![]&&(this[A(0x200)]('namedConverterRow')[A(0x1b2)]['display']='none');const j=this['_getDomElement']('historicBtn');if(i?.[A(0x211)]===![])j['style']['display']=A(0x1c0);else i?.['historicLabel']&&(j[A(0x1e0)]=i[A(0x205)]);}['ready'](){const B=y;this[B(0x206)](),this[B(0x1c3)](),this['_signalListContainer']=this['_getDomElement'](B(0x1bd)),this['_converterListContainer']=this['_getDomElement']('converterListContainer'),this[B(0x200)]('helpBtn')['onclick']=()=>this['_showHelp']();if(BindingsEditor[B(0x201)]['length']===0x0)this['_getDomElement']('namedConverterBrowse')['style'][B(0x1ab)]=B(0x1c0);this[B(0x1b4)]=![];if(this['_bindingTarget']==BindingTarget['property']||this['_bindingTarget']==BindingTarget[B(0x1cc)])this['twoWayPossible']=!![];if(this['_binding']){this['twoWay']=this['_binding'][B(0x1bb)]==BindingMode['twoWay'],this[B(0x1f6)]=this['_binding'][B(0x1f6)],this['writeBackSignal']=this['_binding'][B(0x1df)],this[B(0x1cf)]=this[B(0x1a8)][B(0x1cf)],this[B(0x1f1)]=this[B(0x1a8)]['historic'],this[B(0x1d3)]=this[B(0x1a8)]['invert'];if(this['_binding'][B(0x1f2)])this['objectNames']=this['_binding'][B(0x1f2)]['join'](';');if(this['_binding'][B(0x1e2)]){if(typeof this['_binding']['converter']===B(0x1e5))this[B(0x207)]=this[B(0x1a8)][B(0x1e2)];else for(let d in this['_binding']['converter']){this[B(0x1ce)][B(0x1cd)]({'key':d,'value':this[B(0x1a8)]['converter'][d]});}}if(this['_binding'][B(0x1c7)]&&this[B(0x1a8)][B(0x1c7)]['length'])this['events']=this[B(0x1a8)][B(0x1c7)]['join'](';');}if(this['expression']){let e=this[B(0x200)](B(0x1f6));this[B(0x1f6)]['indexOf']('\x0a')>=0x0&&(e['style'][B(0x1ee)]=0x3*0x11+'px');}if(this['expressionTwoWay']){let f=this['_getDomElement'](B(0x1b9));this[B(0x1cf)]['indexOf']('\x0a')>=0x0&&(f[B(0x1b2)][B(0x1ee)]=0x3*0x11+'px');}this[B(0x1fc)]=this[B(0x1be)](this[B(0x20a)]);if(this[B(0x1fc)][B(0x214)]===0x0)this['_signals']['push']({'name':'','signal':''});this['_renderSignalList'](),this['_renderConverterList'](),this['_bindingsParse']();}[y(0x1be)](c){const C=y;if(!c)return[];return c[C(0x1b7)](';')[C(0x1ec)](d=>d['length']>0x0)['map'](d=>{const D=C,e=d['indexOf'](':');if(e>0x0)return{'name':d[D(0x1de)](0x0,e),'signal':d['slice'](e+0x1)};return{'name':'','signal':d};});}['_signalsToObjectNames'](){const E=y;return this[E(0x1fc)][E(0x1d8)](c=>c['name']?c[E(0x1d1)]+':'+c['signal']:c['signal'])[E(0x1a6)](';');}['_renderSignalList'](){const F=y,c=this[F(0x1b5)];c['innerHTML']='',this['_signals']['forEach']((d,e)=>{const G=F,f=document['createElement']('div');f[G(0x1a9)]='signal-row';const g=document['createElement']('input');g['className']='signal-name-input',g['placeholder']='__'+e,g['value']=d['name'],g[G(0x1f5)]=G(0x1a3)+e+G(0x1d7),g['oninput']=()=>{const H=G;this[H(0x1fc)][e][H(0x1d1)]=g[H(0x1a2)],this['_syncSignals']();};const h=document[G(0x1ed)](G(0x202));h[G(0x1a9)]=G(0x1c8),h['value']=d[G(0x19f)],h[G(0x1d4)]=G(0x1b3),h['title']='signal\x20path\x20(prefix:\x20?\x20=\x20signal\x20name\x20in\x20screen\x20property,\x20??\x20=\x20screen\x20property\x20value,\x20?$\x20=\x20signal\x20object\x20in\x20screen\x20property,\x20?@\x20=\x20screen\x20attribute,\x20#\x20=\x20signal\x20name\x20in\x20target\x20property,\x20##\x20=\x20target\x20property\x20value,\x20#$\x20=\x20signal\x20object\x20in\x20target\x20property,\x20#@\x20=\x20target\x20attribute)',h[G(0x1f0)]=()=>{const I=G;this[I(0x1fc)][e]['signal']=h['value'],this['_syncSignals']();};const j=document[G(0x1ed)](G(0x1ad));j['className']=G(0x1f3),j['title']='Duplicate';const k=document[G(0x1ed)]('img');k['src']=assetsPath+G(0x1f9),k[G(0x1b2)][G(0x1a7)]=G(0x1c1),j['appendChild'](k),j[G(0x1ef)]=()=>{const J=G;this['_signals']['splice'](e+0x1,0x0,{...this[J(0x1fc)][e]}),this[J(0x19e)](),this['_renderSignalList']();};const l=document[G(0x1ed)](G(0x1ad));l['className']='signal-select-btn',l['textContent']='...',l['title']='Browse\x20signal',l[G(0x1ef)]=()=>this[G(0x1bf)](e,h);const m=document['createElement'](G(0x1ad));m[G(0x1a9)]=G(0x1f3),m['title']='Remove';const n=document['createElement']('img');n['src']=assetsPath+G(0x1eb),n['style']['cssText']=G(0x1c1),m['appendChild'](n),m[G(0x1ef)]=()=>{const K=G;this['_signals']['splice'](e,0x1),this[K(0x19e)](),this['_renderSignalList']();},f['appendChild'](g),f[G(0x1e9)](h),f['appendChild'](l),f['appendChild'](j),f[G(0x1e9)](m),c['appendChild'](f);});}[y(0x19e)](){const L=y;this[L(0x20a)]=this['_signalsToObjectNames'](),this['_bindingsRefresh']();}[y(0x1f8)](){const M=y;this[M(0x1fc)][M(0x1cd)]({'name':'','signal':''}),this[M(0x208)]();}async[y(0x1bf)](c,d){const N=y;let e=this[N(0x1fd)][N(0x19b)]();e[N(0x1e3)](this[N(0x1d9)],this['_instanceServiceContainer'],N(0x1d0)),e['title']='select\x20signal...';const f=new AbortController();e['objectDoubleclicked']['on'](()=>{const O=N;f[O(0x1ba)]();let h='';if(e['selectedObject']['specialType']=='signalProperty')h='?';else e['selectedObject'][O(0x209)]==='property'&&(h='??');this[O(0x1fc)][c]['signal']=h+e['selectedObject']['fullName'],d[O(0x1a2)]=this[O(0x1fc)][c]['signal'],this['_syncSignals']();});let g=await this[N(0x1fd)][N(0x20d)](e,{'x':0x64,'y':0x64,'width':0x190,'height':0x12c,'parent':this,'abortSignal':f[N(0x19f)]});if(g){let h='';if(e['selectedObject'][N(0x213)]=='signalProperty')h='?';else e[N(0x1b1)][N(0x209)]==='property'&&(h='??');this['_signals'][c]['signal']=h+e['selectedObject']['fullName'],d['value']=this['_signals'][c]['signal'],this[N(0x19e)]();}}[y(0x19d)](){const P=y,c=this['_converterListContainer'];c[P(0x1fb)]='';const d=this['_property']?.['type']==='color'?P(0x1cb):'text';this['converters']['forEach']((e,f)=>{const Q=P,g=document['createElement']('div');g[Q(0x1a9)]=Q(0x1dc);const h=document[Q(0x1ed)]('input');h[Q(0x1b2)][Q(0x1a7)]='flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;',h[Q(0x1a2)]=e['key'],h[Q(0x1d4)]='condition',h[Q(0x1f0)]=()=>{const R=Q;this[R(0x1ce)][f]['key']=h[R(0x1a2)];};const j=document['createElement'](Q(0x202));j['type']=d,j[Q(0x1b2)][Q(0x1a7)]='flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;',j[Q(0x1a2)]=e[Q(0x1a2)],j[Q(0x1d4)]=Q(0x1a2),j['oninput']=()=>{const S=Q;this[S(0x1ce)][f]['value']=j[S(0x1a2)];};const k=document['createElement']('button');k[Q(0x1a9)]=Q(0x1f3),k[Q(0x1f5)]='Duplicate';const l=document['createElement'](Q(0x1b6));l[Q(0x1f4)]=assetsPath+Q(0x1f9),l[Q(0x1b2)]['cssText']=Q(0x1c1),k['appendChild'](l),k[Q(0x1ef)]=()=>{this['converters']['splice'](f+0x1,0x0,{...this['converters'][f]}),this['_renderConverterList']();};const m=document['createElement']('button');m['className']='signal-icon-btn',m[Q(0x1f5)]=Q(0x1ea);const n=document['createElement']('img');n[Q(0x1f4)]=assetsPath+'icons/delete.svg',n['style']['cssText']='width:12px;\x20height:12px;',m['appendChild'](n),m['onclick']=()=>{const T=Q;this[T(0x1ce)][T(0x1e6)](f,0x1),this[T(0x19d)]();},g[Q(0x1e9)](h),g['appendChild'](j),g[Q(0x1e9)](k),g[Q(0x1e9)](m),c[Q(0x1e9)](g);});}['_addConverter'](){const U=y;this[U(0x1ce)][U(0x1cd)]({'key':'','value':''}),this[U(0x19d)]();}async[y(0x210)](){const V=y,c=BindingsEditor[V(0x201)];if(c[V(0x214)]===0x0)return;let d='',e=null;const f=document[V(0x1ed)]('div');f['style']['cssText']=V(0x1c6);const g=document['createElement']('div');g['style'][V(0x1a7)]='padding:6px\x208px\x204px;\x20color:#666;\x20font-size:11px;\x20border-bottom:1px\x20solid\x20#e0e0e0;\x20flex-shrink:0;',g[V(0x1e0)]=V(0x1ff),f[V(0x1e9)](g);const h=document[V(0x1ed)](V(0x1c5));h['style'][V(0x1a7)]='flex:1;\x20overflow-y:auto;\x20padding:4px;',f[V(0x1e9)](h);const i=m=>{const W=V;m['style'][W(0x1fe)]='',m[W(0x1b2)][W(0x1bc)]='transparent';},j=(m,n)=>{const X=V;if(e)i(e);e=m,m[X(0x1b2)]['background']='#e8f4fd',m[X(0x1b2)][X(0x1bc)]='#0078d7',d=n;};for(const m of c){const n=document['createElement'](V(0x1c5));n['style']['cssText']=V(0x1a5);const o=document[V(0x1ed)]('div');o['style'][V(0x1a7)]=V(0x1e4),o['textContent']=m['name'],n[V(0x1e9)](o);if(m[V(0x1a0)]){const p=document[V(0x1ed)]('div');p['style'][V(0x1a7)]='color:#555;\x20font-size:11px;\x20margin-top:2px;',p[V(0x1e0)]=m['description'],n['appendChild'](p);}if(m['converter']&&Object[V(0x1d6)](m['converter'])[V(0x214)]>0x0){const q=document[V(0x1ed)]('div');q['style']['cssText']='display:grid;\x20grid-template-columns:max-content\x20max-content\x201fr;\x20gap:1px\x206px;\x20margin-top:4px;\x20padding:4px\x206px;\x20background:#f5f5f5;\x20border-radius:2px;\x20font-family:monospace;\x20font-size:11px;\x20color:#333;';for(const [r,s]of Object['entries'](m['converter'])){const t=document['createElement']('span');t[V(0x1b2)]['cssText']=V(0x212),t[V(0x1e0)]=r;const u=document['createElement']('span');u['style'][V(0x1a7)]=V(0x1b0),u[V(0x1e0)]='→';const w=document['createElement'](V(0x1db));w['style'][V(0x1a7)]='color:#0078d7;\x20font-weight:bold;',w[V(0x1e0)]=String(s),q[V(0x1e9)](t),q['appendChild'](u),q[V(0x1e9)](w);}n['appendChild'](q);}n['onmouseenter']=()=>{const Y=V;if(n!==e)n[Y(0x1b2)]['background']='#f5f5f5';},n[V(0x20c)]=()=>{const Z=V;if(n!==e)n['style'][Z(0x1fe)]='';},n['onclick']=()=>j(n,m[V(0x1d1)]),h[V(0x1e9)](n);}const l=await this[V(0x1fd)]['openConfirmation'](f,{'x':0x64,'y':0x64,'width':0x140,'height':0x12c,'parent':this});l&&d&&(this['convertersString']=d,this['_getDomElement']('namedConverterInput')['value']=d,this['_bindingsRefresh']());}['_refresh'](){requestAnimationFrame(()=>{const a0=b;this[a0(0x20f)]();});}async[y(0x211)](){const a1=y;let c=new BindingsEditorHistoric(this['historic']);const d=new AbortController();c[a1(0x1f5)]='Edit\x20historic\x20binding\x20to:\x20'+this['_property'][a1(0x1d1)];let e=await this['_shell'][a1(0x20d)](c,{'x':0x64,'y':0x64,'width':0x1a4,'height':0x1fe,'parent':this,'abortSignal':d[a1(0x19f)],'disableResize':!![],'cancelText':a1(0x1ea)});!e?this[a1(0x1f1)]=null:this['historic']=c[a1(0x1f1)],this[a1(0x20f)]();}[y(0x20b)](){const a2=y,c=document[a2(0x1ed)](a2(0x1e1));c['srcdoc']=BindingsEditor[a2(0x1c4)]['length']>0x0?bindingsEditorHelpHtml['replace'](a2(0x203),BindingsEditor[a2(0x1c4)]['join']('')+a2(0x203)):bindingsEditorHelpHtml,c['style'][a2(0x1a7)]='width:100%;\x20height:100%;\x20border:none;\x20display:block;',this[a2(0x1fd)][a2(0x1c9)](c,{'title':a2(0x1d5),'parent':this,'x':-0x294,'y':-0x50,'width':0x276,'height':0x244});}}customElements['define'](BindingsEditor['is'],BindingsEditor);function a(){const a3=['bindabletype','objectNames','_showHelp','onmouseleave','openConfirmation','template','_bindingsRefresh','_selectNamedConverter','showHistoric','color:#555;\x20text-align:right;','specialType','length','_converterListContainer','createBindableObjectBrowser','239568OWSHcS','_renderConverterList','_syncSignals','signal','description','_instanceServiceContainer','value','variable\x20name\x20used\x20in\x20the\x20formula\x20(defaults\x20to\x20__','4632iJKSqu','padding:5px\x206px\x205px\x209px;\x20cursor:pointer;\x20border-radius:3px;\x20border-left:3px\x20solid\x20transparent;\x20margin-bottom:2px;','join','cssText','_binding','className','key','display','194965QShTsV','button','4tQlRNc','node-projects-visualization-bindings-editor','color:#aaa;','selectedObject','style','signal\x20path','twoWayPossible','_signalListContainer','img','split','fromEntries','expression2way','abort','mode','borderLeftColor','signalListContainer','_parseObjectNames','_selectForRow','none','width:12px;\x20height:12px;','_property','_assignEvents','helpSections','div','display:flex;\x20flex-direction:column;\x20height:100%;\x20box-sizing:border-box;\x20font-size:12px;','changedEvents','signal-path-input','openModal','105dBIFDH','color','attribute','push','converters','expressionTwoWay','binding','name','_restoreCachedInititalValues','invert','placeholder','Bindings\x20Editor\x20Help','keys','\x20if\x20empty)','map','_serviceContainer','781923FIIeby','span','signal-row','467649cgiqQG','slice','writeBackSignal','textContent','iframe','converter','initialize','font-family:monospace;\x20font-weight:bold;\x20color:#111;','string','splice','10JorLOx','30bxkDVY','appendChild','Remove','icons/delete.svg','filter','createElement','height','onclick','oninput','historic','bindableObjectNames','signal-icon-btn','src','title','expression','5010489aabWIe','_addSignal','icons/copy.svg','twoWay','innerHTML','_signals','_shell','background','Select\x20a\x20converter\x20and\x20confirm\x20with\x20OK.','_getDomElement','namedConverters','input','</div>\x0a</body>','39194dfPHxI','historicLabel','_parseAttributesToProperties','convertersString','_renderSignalList'];a=function(){return a3;};return a();}
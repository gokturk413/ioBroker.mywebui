const y=b;(function(c,d){const x=b,e=c();while(!![]){try{const f=-parseInt(x(0x169))/0x1+parseInt(x(0x176))/0x2+parseInt(x(0x121))/0x3*(-parseInt(x(0x124))/0x4)+-parseInt(x(0x16f))/0x5*(parseInt(x(0x15c))/0x6)+-parseInt(x(0x12b))/0x7*(-parseInt(x(0x154))/0x8)+parseInt(x(0x14a))/0x9+-parseInt(x(0x150))/0xa*(parseInt(x(0x111))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5a5d8));import{BaseCustomWebComponentConstructorAppend,html,css}from'@node-projects/base-custom-webcomponent';import{BindingMode,BindingTarget,assetsPath}from'@gokturk413/web-component-designer';function b(c,d){c=c-0x108;const e=a();let f=e[c];return f;}import{BindingsEditorHistoric}from'./BindingsEditorHistoric.js';import{bindingsEditorHelpHtml}from'./BindingsEditorHelp.js';export class BindingsEditor extends BaseCustomWebComponentConstructorAppend{static [y(0x170)]=html`
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
        }`;static ['is']=y(0x140);static [y(0x12d)]={'twoWayPossible':Boolean,'twoWay':Boolean,'expression':String,'events':String,'invert':Boolean,'historic':Object};['twoWayPossible']=![];['twoWay']=![];['expression']='';[y(0x178)]='';[y(0x10d)]='';['historic'];[y(0x11a)]='';[y(0x11c)]='';[y(0x177)]=![];[y(0x165)]=[];static [y(0x12e)]=[];static ['helpSections']=[];[y(0x14d)];get[y(0x10a)](){const z=y;if(this[z(0x14d)])return this[z(0x14d)];if(this[z(0x165)][z(0x135)]>0x0)return Object[z(0x143)](this[z(0x165)][z(0x134)](d=>[d[z(0x163)],d[z(0x119)]]));return undefined;}['_property'];['_binding'];['_bindingTarget'];[y(0x11b)];[y(0x14c)];['_shell'];['_signals']=[];['_signalListContainer'];['_converterListContainer'];constructor(c,d,e,f,g,h,i={}){const A=y;super(),super['_restoreCachedInititalValues'](),this['_property']=c,this['_binding']=d,this[A(0x152)]=e,this[A(0x11b)]=f,this[A(0x14c)]=g,this['_shell']=h;i?.[A(0x12e)]===![]&&(this[A(0x130)]('namedConverterRow')[A(0x132)]['display']='none');const j=this['_getDomElement']('historicBtn');if(i?.[A(0x123)]===![])j[A(0x132)][A(0x147)]='none';else i?.['historicLabel']&&(j['textContent']=i['historicLabel']);}[y(0x12f)](){const B=y;this['_parseAttributesToProperties'](),this['_assignEvents'](),this[B(0x137)]=this[B(0x130)]('signalListContainer'),this[B(0x127)]=this['_getDomElement'](B(0x144)),this['_getDomElement']('helpBtn')['onclick']=()=>this[B(0x13b)]();if(BindingsEditor['namedConverters'][B(0x135)]===0x0)this[B(0x130)](B(0x116))['style'][B(0x147)]='none';this['twoWayPossible']=![];if(this[B(0x152)]==BindingTarget['property']||this['_bindingTarget']==BindingTarget[B(0x16c)])this['twoWayPossible']=!![];if(this[B(0x136)]){this['twoWay']=this['_binding']['mode']==BindingMode['twoWay'],this[B(0x109)]=this['_binding']['expression'],this['writeBackSignal']=this[B(0x136)]['writeBackSignal'],this[B(0x10d)]=this['_binding'][B(0x10d)],this[B(0x133)]=this[B(0x136)]['historic'],this[B(0x177)]=this['_binding']['invert'];if(this[B(0x136)]['bindableObjectNames'])this['objectNames']=this['_binding']['bindableObjectNames'][B(0x15b)](';');if(this[B(0x136)][B(0x10a)]){if(typeof this[B(0x136)]['converter']==='string')this['convertersString']=this[B(0x136)]['converter'];else for(let d in this['_binding'][B(0x10a)]){this[B(0x165)][B(0x175)]({'key':d,'value':this['_binding']['converter'][d]});}}if(this[B(0x136)]['changedEvents']&&this['_binding'][B(0x11d)]['length'])this['events']=this['_binding']['changedEvents']['join'](';');}if(this['expression']){let e=this[B(0x130)]('expression');this['expression'][B(0x138)]('\x0a')>=0x0&&(e['style']['height']=0x3*0x11+'px');}if(this['expressionTwoWay']){let f=this['_getDomElement']('expression2way');this['expressionTwoWay'][B(0x138)]('\x0a')>=0x0&&(f['style'][B(0x16d)]=0x3*0x11+'px');}this['_signals']=this['_parseObjectNames'](this[B(0x11a)]);if(this['_signals']['length']===0x0)this['_signals'][B(0x175)]({'name':'','signal':''});this['_renderSignalList'](),this[B(0x120)](),this[B(0x13c)]();}[y(0x10b)](c){if(!c)return[];return c['split'](';')['filter'](d=>d['length']>0x0)['map'](d=>{const e=d['indexOf'](':');if(e>0x0)return{'name':d['slice'](0x0,e),'signal':d['slice'](e+0x1)};return{'name':'','signal':d};});}[y(0x15e)](){const C=y;return this['_signals']['map'](c=>c[C(0x10e)]?c['name']+':'+c[C(0x173)]:c[C(0x173)])['join'](';');}[y(0x172)](){const D=y,c=this[D(0x137)];c['innerHTML']='',this['_signals'][D(0x167)]((d,e)=>{const E=D,f=document['createElement']('div');f[E(0x13d)]=E(0x153);const g=document['createElement'](E(0x108));g['className']='signal-name-input',g[E(0x114)]='__'+e,g['value']=d['name'],g[E(0x145)]='variable\x20name\x20used\x20in\x20the\x20formula\x20(defaults\x20to\x20__'+e+E(0x115),g[E(0x148)]=()=>{const F=E;this[F(0x128)][e][F(0x10e)]=g['value'],this[F(0x14e)]();};const h=document[E(0x17c)]('input');h['className']=E(0x164),h[E(0x119)]=d[E(0x173)],h[E(0x114)]=E(0x142),h['title']='signal\x20path\x20(prefix:\x20?\x20=\x20signal\x20name\x20in\x20screen\x20property,\x20??\x20=\x20screen\x20property\x20value,\x20?$\x20=\x20signal\x20object\x20in\x20screen\x20property,\x20?@\x20=\x20screen\x20attribute,\x20#\x20=\x20signal\x20name\x20in\x20target\x20property,\x20##\x20=\x20target\x20property\x20value,\x20#$\x20=\x20signal\x20object\x20in\x20target\x20property,\x20#@\x20=\x20target\x20attribute)',h[E(0x148)]=()=>{const G=E;this['_signals'][e][G(0x173)]=h[G(0x119)],this[G(0x14e)]();};const j=document['createElement'](E(0x146));j[E(0x13d)]=E(0x126),j[E(0x145)]='Duplicate';const k=document['createElement']('img');k['src']=assetsPath+E(0x157),k[E(0x132)]['cssText']=E(0x17d),j['appendChild'](k),j[E(0x16a)]=()=>{const H=E;this[H(0x128)][H(0x122)](e+0x1,0x0,{...this[H(0x128)][e]}),this['_syncSignals'](),this[H(0x172)]();};const l=document[E(0x17c)]('button');l['className']=E(0x10c),l['textContent']=E(0x113),l['title']='Browse\x20signal',l['onclick']=()=>this['_selectForRow'](e,h);const m=document[E(0x17c)](E(0x146));m['className']='signal-icon-btn',m[E(0x145)]='Remove';const n=document[E(0x17c)]('img');n[E(0x12c)]=assetsPath+'icons/delete.svg',n[E(0x132)][E(0x125)]='width:12px;\x20height:12px;',m['appendChild'](n),m['onclick']=()=>{const I=E;this[I(0x128)][I(0x122)](e,0x1),this['_syncSignals'](),this[I(0x172)]();},f[E(0x17a)](g),f[E(0x17a)](h),f[E(0x17a)](l),f[E(0x17a)](j),f['appendChild'](m),c['appendChild'](f);});}[y(0x14e)](){const J=y;this['objectNames']=this[J(0x15e)](),this[J(0x17e)]();}[y(0x159)](){const K=y;this['_signals'][K(0x175)]({'name':'','signal':''}),this[K(0x172)]();}async['_selectForRow'](c,d){const L=y;let e=this['_shell']['createBindableObjectBrowser']();e['initialize'](this[L(0x11b)],this[L(0x14c)],'binding'),e[L(0x145)]='select\x20signal...';const f=new AbortController();e['objectDoubleclicked']['on'](()=>{const M=L;f['abort']();let h='';if(e[M(0x16e)]['specialType']=='signalProperty')h='?';else e[M(0x16e)][M(0x161)]==='property'&&(h='??');this['_signals'][c]['signal']=h+e['selectedObject']['fullName'],d['value']=this[M(0x128)][c]['signal'],this['_syncSignals']();});let g=await this[L(0x160)][L(0x17b)](e,{'x':0x64,'y':0x64,'width':0x190,'height':0x12c,'parent':this,'abortSignal':f['signal']});if(g){let h='';if(e[L(0x16e)][L(0x151)]==L(0x13a))h='?';else e[L(0x16e)][L(0x161)]===L(0x15f)&&(h='??');this['_signals'][c][L(0x173)]=h+e[L(0x16e)][L(0x158)],d[L(0x119)]=this[L(0x128)][c]['signal'],this['_syncSignals']();}}[y(0x120)](){const N=y,c=this['_converterListContainer'];c[N(0x15a)]='';const d=this['_property']?.['type']===N(0x110)?'color':'text';this['converters']['forEach']((e,f)=>{const O=N,g=document[O(0x17c)](O(0x14b));g[O(0x13d)]='signal-row';const h=document['createElement'](O(0x108));h[O(0x132)][O(0x125)]='flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;',h[O(0x119)]=e[O(0x163)],h['placeholder']=O(0x179),h['oninput']=()=>{const P=O;this[P(0x165)][f]['key']=h[P(0x119)];};const j=document[O(0x17c)](O(0x108));j[O(0x155)]=d,j[O(0x132)][O(0x125)]=O(0x11e),j['value']=e[O(0x119)],j['placeholder']=O(0x119),j['oninput']=()=>{const Q=O;this[Q(0x165)][f][Q(0x119)]=j[Q(0x119)];};const k=document['createElement'](O(0x146));k['className']=O(0x126),k[O(0x145)]=O(0x168);const l=document[O(0x17c)]('img');l['src']=assetsPath+'icons/copy.svg',l['style']['cssText']='width:12px;\x20height:12px;',k[O(0x17a)](l),k[O(0x16a)]=()=>{const R=O;this[R(0x165)][R(0x122)](f+0x1,0x0,{...this['converters'][f]}),this['_renderConverterList']();};const m=document[O(0x17c)]('button');m['className']='signal-icon-btn',m['title']='Remove';const n=document['createElement'](O(0x139));n['src']=assetsPath+O(0x149),n[O(0x132)][O(0x125)]='width:12px;\x20height:12px;',m[O(0x17a)](n),m['onclick']=()=>{const S=O;this['converters'][S(0x122)](f,0x1),this['_renderConverterList']();},g[O(0x17a)](h),g[O(0x17a)](j),g['appendChild'](k),g[O(0x17a)](m),c['appendChild'](g);});}['_addConverter'](){const T=y;this[T(0x165)][T(0x175)]({'key':'','value':''}),this['_renderConverterList']();}async['_selectNamedConverter'](){const U=y,c=BindingsEditor[U(0x12e)];if(c[U(0x135)]===0x0)return;let d='',e=null;const f=document['createElement']('div');f['style']['cssText']=U(0x12a);const g=document['createElement'](U(0x14b));g['style']['cssText']='padding:6px\x208px\x204px;\x20color:#666;\x20font-size:11px;\x20border-bottom:1px\x20solid\x20#e0e0e0;\x20flex-shrink:0;',g['textContent']='Select\x20a\x20converter\x20and\x20confirm\x20with\x20OK.',f['appendChild'](g);const h=document['createElement']('div');h['style'][U(0x125)]='flex:1;\x20overflow-y:auto;\x20padding:4px;',f['appendChild'](h);const i=m=>{const V=U;m['style'][V(0x112)]='',m['style']['borderLeftColor']='transparent';},j=(m,n)=>{const W=U;if(e)i(e);e=m,m['style']['background']='#e8f4fd',m['style'][W(0x166)]=W(0x174),d=n;};for(const m of c){const n=document[U(0x17c)]('div');n[U(0x132)]['cssText']='padding:5px\x206px\x205px\x209px;\x20cursor:pointer;\x20border-radius:3px;\x20border-left:3px\x20solid\x20transparent;\x20margin-bottom:2px;';const o=document['createElement']('div');o[U(0x132)][U(0x125)]=U(0x16b),o['textContent']=m['name'],n[U(0x17a)](o);if(m['description']){const p=document['createElement'](U(0x14b));p[U(0x132)]['cssText']=U(0x129),p[U(0x13e)]=m['description'],n[U(0x17a)](p);}if(m['converter']&&Object[U(0x14f)](m['converter'])[U(0x135)]>0x0){const q=document['createElement'](U(0x14b));q[U(0x132)]['cssText']='display:grid;\x20grid-template-columns:max-content\x20max-content\x201fr;\x20gap:1px\x206px;\x20margin-top:4px;\x20padding:4px\x206px;\x20background:#f5f5f5;\x20border-radius:2px;\x20font-family:monospace;\x20font-size:11px;\x20color:#333;';for(const [r,s]of Object[U(0x171)](m[U(0x10a)])){const t=document['createElement'](U(0x156));t[U(0x132)][U(0x125)]='color:#555;\x20text-align:right;',t[U(0x13e)]=r;const u=document['createElement']('span');u['style']['cssText']=U(0x118),u['textContent']='→';const w=document['createElement'](U(0x156));w['style']['cssText']='color:#0078d7;\x20font-weight:bold;',w[U(0x13e)]=String(s),q[U(0x17a)](t),q['appendChild'](u),q[U(0x17a)](w);}n[U(0x17a)](q);}n['onmouseenter']=()=>{const X=U;if(n!==e)n['style'][X(0x112)]='#f5f5f5';},n['onmouseleave']=()=>{const Y=U;if(n!==e)n['style'][Y(0x112)]='';},n['onclick']=()=>j(n,m['name']),h[U(0x17a)](n);}const l=await this['_shell'][U(0x17b)](f,{'x':0x64,'y':0x64,'width':0x140,'height':0x12c,'parent':this});l&&d&&(this['convertersString']=d,this['_getDomElement'](U(0x131))['value']=d,this['_bindingsRefresh']());}[y(0x11f)](){requestAnimationFrame(()=>{const Z=b;this[Z(0x17e)]();});}async['showHistoric'](){const a0=y;let c=new BindingsEditorHistoric(this['historic']);const d=new AbortController();c['title']=a0(0x13f)+this[a0(0x117)]['name'];let e=await this[a0(0x160)][a0(0x17b)](c,{'x':0x64,'y':0x64,'width':0x1a4,'height':0x1fe,'parent':this,'abortSignal':d['signal'],'disableResize':!![],'cancelText':a0(0x141)});!e?this['historic']=null:this['historic']=c['historic'],this['_bindingsRefresh']();}['_showHelp'](){const a1=y,c=document['createElement'](a1(0x162));c['srcdoc']=BindingsEditor['helpSections']['length']>0x0?bindingsEditorHelpHtml[a1(0x10f)]('</div>\x0a</body>',BindingsEditor['helpSections'][a1(0x15b)]('')+'</div>\x0a</body>'):bindingsEditorHelpHtml,c[a1(0x132)]['cssText']=a1(0x15d),this[a1(0x160)]['openModal'](c,{'title':'Bindings\x20Editor\x20Help','parent':this,'x':-0x294,'y':-0x50,'width':0x276,'height':0x244});}}customElements['define'](BindingsEditor['is'],BindingsEditor);function a(){const a2=['_shell','bindabletype','iframe','key','signal-path-input','converters','borderLeftColor','forEach','Duplicate','106259pKZdGA','onclick','font-family:monospace;\x20font-weight:bold;\x20color:#111;','attribute','height','selectedObject','4960zqjnxC','template','entries','_renderSignalList','signal','#0078d7','push','1426218rHQEOQ','invert','writeBackSignal','condition','appendChild','openConfirmation','createElement','width:12px;\x20height:12px;','_bindingsRefresh','input','expression','converter','_parseObjectNames','signal-select-btn','expressionTwoWay','name','replace','color','42515IQeVTW','background','...','placeholder','\x20if\x20empty)','namedConverterBrowse','_property','color:#aaa;','value','objectNames','_serviceContainer','events','changedEvents','flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;','_refresh','_renderConverterList','70620DTPxaB','splice','showHistoric','68oNCYxP','cssText','signal-icon-btn','_converterListContainer','_signals','color:#555;\x20font-size:11px;\x20margin-top:2px;','display:flex;\x20flex-direction:column;\x20height:100%;\x20box-sizing:border-box;\x20font-size:12px;','5558qTrdqQ','src','properties','namedConverters','ready','_getDomElement','namedConverterInput','style','historic','map','length','_binding','_signalListContainer','indexOf','img','signalProperty','_showHelp','_bindingsParse','className','textContent','Edit\x20historic\x20binding\x20to:\x20','node-projects-visualization-bindings-editor','Remove','signal\x20path','fromEntries','converterListContainer','title','button','display','oninput','icons/delete.svg','2376000rKSRxG','div','_instanceServiceContainer','convertersString','_syncSignals','keys','1780arRkww','specialType','_bindingTarget','signal-row','7408WCsUuT','type','span','icons/copy.svg','fullName','_addSignal','innerHTML','join','894fQHUri','width:100%;\x20height:100%;\x20border:none;\x20display:block;','_signalsToObjectNames','property'];a=function(){return a2;};return a();}
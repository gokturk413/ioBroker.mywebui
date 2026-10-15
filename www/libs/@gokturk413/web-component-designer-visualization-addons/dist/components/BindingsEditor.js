const y=b;function b(c,d){c=c-0x80;const e=a();let f=e[c];return f;}(function(c,d){const x=b,e=c();while(!![]){try{const f=-parseInt(x(0xd5))/0x1*(parseInt(x(0xce))/0x2)+-parseInt(x(0xe0))/0x3*(-parseInt(x(0x8e))/0x4)+parseInt(x(0xac))/0x5+-parseInt(x(0xd2))/0x6+-parseInt(x(0xfa))/0x7*(parseInt(x(0xae))/0x8)+-parseInt(x(0xf8))/0x9*(-parseInt(x(0xe2))/0xa)+parseInt(x(0xe4))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x1baac));import{BaseCustomWebComponentConstructorAppend,html,css}from'@node-projects/base-custom-webcomponent';import{BindingMode,BindingTarget,assetsPath}from'@gokturk413/web-component-designer';import{BindingsEditorHistoric}from'./BindingsEditorHistoric.js';import{bindingsEditorHelpHtml}from'./BindingsEditorHelp.js';export class BindingsEditor extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
        }`;static ['is']=y(0x85);static [y(0xb6)]={'twoWayPossible':Boolean,'twoWay':Boolean,'expression':String,'events':String,'invert':Boolean,'historic':Object};[y(0xd0)]=![];[y(0xf1)]=![];[y(0xd1)]='';['writeBackSignal']='';['expressionTwoWay']='';['historic'];['objectNames']='';['events']='';[y(0xf3)]=![];[y(0xe8)]=[];static [y(0xc6)]=[];static [y(0xbd)]=[];['convertersString'];get[y(0xba)](){const z=y;if(this['convertersString'])return this['convertersString'];if(this['converters']['length']>0x0)return Object['fromEntries'](this[z(0xe8)][z(0xd3)](d=>[d[z(0xf0)],d[z(0xc2)]]));return undefined;}[y(0xea)];[y(0xee)];['_bindingTarget'];[y(0xd7)];['_instanceServiceContainer'];[y(0xd6)];['_signals']=[];['_signalListContainer'];['_converterListContainer'];constructor(c,d,e,f,g,h,i={}){const A=y;super(),super[A(0xda)](),this['_property']=c,this[A(0xee)]=d,this[A(0xd8)]=e,this['_serviceContainer']=f,this[A(0x9d)]=g,this['_shell']=h;i?.[A(0xc6)]===![]&&(this[A(0xe3)]('namedConverterRow')[A(0xc9)][A(0xfb)]='none');const j=this['_getDomElement']('historicBtn');if(i?.[A(0x98)]===![])j[A(0xc9)]['display']='none';else i?.['historicLabel']&&(j['textContent']=i[A(0xc7)]);}[y(0xa2)](){const B=y;this[B(0xf4)](),this['_assignEvents'](),this['_signalListContainer']=this['_getDomElement']('signalListContainer'),this[B(0xa8)]=this['_getDomElement']('converterListContainer'),this[B(0xe3)]('helpBtn')[B(0xfc)]=()=>this[B(0xb7)]();if(BindingsEditor[B(0xc6)]['length']===0x0)this['_getDomElement']('namedConverterBrowse')[B(0xc9)][B(0xfb)]='none';this[B(0xd0)]=![];if(this['_bindingTarget']==BindingTarget[B(0x94)]||this[B(0xd8)]==BindingTarget[B(0xdf)])this[B(0xd0)]=!![];if(this['_binding']){this[B(0xf1)]=this['_binding']['mode']==BindingMode[B(0xf1)],this[B(0xd1)]=this['_binding']['expression'],this[B(0xbe)]=this['_binding']['writeBackSignal'],this[B(0xa5)]=this['_binding']['expressionTwoWay'],this[B(0xca)]=this['_binding']['historic'],this['invert']=this[B(0xee)][B(0xf3)];if(this['_binding']['bindableObjectNames'])this[B(0x82)]=this['_binding'][B(0x99)][B(0xdb)](';');if(this['_binding'][B(0xba)]){if(typeof this['_binding'][B(0xba)]==='string')this[B(0xa0)]=this[B(0xee)][B(0xba)];else for(let d in this[B(0xee)][B(0xba)]){this[B(0xe8)][B(0xab)]({'key':d,'value':this['_binding'][B(0xba)][d]});}}if(this['_binding']['changedEvents']&&this['_binding'][B(0xde)][B(0xe7)])this['events']=this[B(0xee)]['changedEvents'][B(0xdb)](';');}if(this[B(0xd1)]){let e=this['_getDomElement']('expression');this['expression']['indexOf']('\x0a')>=0x0&&(e[B(0xc9)][B(0xfe)]=0x3*0x11+'px');}if(this[B(0xa5)]){let f=this[B(0xe3)](B(0xc5));this['expressionTwoWay'][B(0xc4)]('\x0a')>=0x0&&(f[B(0xc9)]['height']=0x3*0x11+'px');}this[B(0x97)]=this[B(0x8d)](this['objectNames']);if(this['_signals']['length']===0x0)this['_signals']['push']({'name':'','signal':''});this['_renderSignalList'](),this[B(0xbb)](),this['_bindingsParse']();}['_parseObjectNames'](c){if(!c)return[];return c['split'](';')['filter'](d=>d['length']>0x0)['map'](d=>{const C=b,e=d['indexOf'](':');if(e>0x0)return{'name':d['slice'](0x0,e),'signal':d[C(0x9c)](e+0x1)};return{'name':'','signal':d};});}['_signalsToObjectNames'](){const D=y;return this[D(0x97)]['map'](c=>c['name']?c['name']+':'+c[D(0xb1)]:c['signal'])[D(0xdb)](';');}[y(0x8c)](){const E=y,c=this[E(0xed)];c[E(0xc1)]='',this['_signals'][E(0x96)]((d,e)=>{const F=E,f=document['createElement'](F(0xd4));f[F(0x92)]=F(0x8f);const g=document['createElement']('input');g['className']=F(0x80),g['placeholder']='__'+e,g[F(0xc2)]=d[F(0xaa)],g['title']='variable\x20name\x20used\x20in\x20the\x20formula\x20(defaults\x20to\x20__'+e+F(0x83),g['oninput']=()=>{const G=F;this[G(0x97)][e]['name']=g[G(0xc2)],this['_syncSignals']();};const h=document[F(0xe6)](F(0x100));h[F(0x92)]=F(0xe5),h[F(0xc2)]=d[F(0xb1)],h[F(0xb2)]='signal\x20path',h['title']=F(0xcb),h[F(0xdc)]=()=>{const H=F;this['_signals'][e]['signal']=h['value'],this[H(0xb0)]();};const j=document[F(0xe6)](F(0xcf));j[F(0x92)]='signal-icon-btn',j[F(0xbf)]=F(0x84);const k=document['createElement'](F(0xff));k[F(0xc0)]=assetsPath+F(0xad),k['style'][F(0xc3)]='width:12px;\x20height:12px;',j['appendChild'](k),j[F(0xfc)]=()=>{const I=F;this[I(0x97)][I(0x9f)](e+0x1,0x0,{...this[I(0x97)][e]}),this['_syncSignals'](),this[I(0x8c)]();};const l=document[F(0xe6)](F(0xcf));l['className']=F(0x88),l['textContent']=F(0xdd),l[F(0xbf)]=F(0x86),l[F(0xfc)]=()=>this[F(0xb3)](e,h);const m=document[F(0xe6)](F(0xcf));m['className']='signal-icon-btn',m['title']='Remove';const n=document['createElement']('img');n['src']=assetsPath+'icons/delete.svg',n[F(0xc9)]['cssText']=F(0xfd),m[F(0xf6)](n),m['onclick']=()=>{const J=F;this[J(0x97)]['splice'](e,0x1),this['_syncSignals'](),this[J(0x8c)]();},f[F(0xf6)](g),f['appendChild'](h),f[F(0xf6)](l),f['appendChild'](j),f['appendChild'](m),c[F(0xf6)](f);});}['_syncSignals'](){this['objectNames']=this['_signalsToObjectNames'](),this['_bindingsRefresh']();}[y(0xa9)](){const K=y;this[K(0x97)]['push']({'name':'','signal':''}),this['_renderSignalList']();}async[y(0xb3)](c,d){const L=y;let e=this['_shell']['createBindableObjectBrowser']();e['initialize'](this[L(0xd7)],this['_instanceServiceContainer'],L(0xe1)),e[L(0xbf)]=L(0xaf);const f=new AbortController();e[L(0xef)]['on'](()=>{const M=L;f[M(0x91)]();let h='';if(e['selectedObject'][M(0xbc)]=='signalProperty')h='?';else e[M(0xcd)]['bindabletype']===M(0x94)&&(h='??');this['_signals'][c]['signal']=h+e[M(0xcd)]['fullName'],d[M(0xc2)]=this['_signals'][c][M(0xb1)],this[M(0xb0)]();});let g=await this['_shell']['openConfirmation'](e,{'x':0x64,'y':0x64,'width':0x190,'height':0x12c,'parent':this,'abortSignal':f['signal']});if(g){let h='';if(e[L(0xcd)][L(0xbc)]=='signalProperty')h='?';else e[L(0xcd)][L(0xcc)]==='property'&&(h='??');this['_signals'][c][L(0xb1)]=h+e[L(0xcd)][L(0xec)],d['value']=this['_signals'][c][L(0xb1)],this['_syncSignals']();}}[y(0xbb)](){const N=y,c=this['_converterListContainer'];c['innerHTML']='';const d=this[N(0xea)]?.[N(0xb5)]==='color'?N(0x81):'text';this[N(0xe8)][N(0x96)]((e,f)=>{const O=N,g=document['createElement'](O(0xd4));g[O(0x92)]='signal-row';const h=document['createElement'](O(0x100));h['style']['cssText']='flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;',h['value']=e[O(0xf0)],h['placeholder']=O(0xc8),h[O(0xdc)]=()=>{const P=O;this[P(0xe8)][f]['key']=h['value'];};const j=document['createElement']('input');j[O(0xb5)]=d,j[O(0xc9)][O(0xc3)]=O(0x9e),j[O(0xc2)]=e['value'],j[O(0xb2)]=O(0xc2),j[O(0xdc)]=()=>{this['converters'][f]['value']=j['value'];};const k=document['createElement'](O(0xcf));k[O(0x92)]=O(0xf9),k['title']='Duplicate';const l=document[O(0xe6)](O(0xff));l[O(0xc0)]=assetsPath+O(0xad),l[O(0xc9)][O(0xc3)]='width:12px;\x20height:12px;',k[O(0xf6)](l),k[O(0xfc)]=()=>{const Q=O;this[Q(0xe8)][Q(0x9f)](f+0x1,0x0,{...this['converters'][f]}),this['_renderConverterList']();};const m=document['createElement'](O(0xcf));m['className']=O(0xf9),m['title']=O(0xf7);const n=document[O(0xe6)](O(0xff));n[O(0xc0)]=assetsPath+O(0xd9),n['style']['cssText']='width:12px;\x20height:12px;',m['appendChild'](n),m['onclick']=()=>{const R=O;this['converters']['splice'](f,0x1),this[R(0xbb)]();},g['appendChild'](h),g['appendChild'](j),g['appendChild'](k),g['appendChild'](m),c['appendChild'](g);});}['_addConverter'](){const S=y;this['converters'][S(0xab)]({'key':'','value':''}),this[S(0xbb)]();}async['_selectNamedConverter'](){const T=y,c=BindingsEditor['namedConverters'];if(c[T(0xe7)]===0x0)return;let d='',e=null;const f=document['createElement']('div');f['style']['cssText']='display:flex;\x20flex-direction:column;\x20height:100%;\x20box-sizing:border-box;\x20font-size:12px;';const g=document['createElement']('div');g['style']['cssText']='padding:6px\x208px\x204px;\x20color:#666;\x20font-size:11px;\x20border-bottom:1px\x20solid\x20#e0e0e0;\x20flex-shrink:0;',g[T(0x9b)]='Select\x20a\x20converter\x20and\x20confirm\x20with\x20OK.',f[T(0xf6)](g);const h=document['createElement'](T(0xd4));h['style'][T(0xc3)]=T(0xb4),f[T(0xf6)](h);const i=m=>{const U=T;m['style'][U(0x95)]='',m['style']['borderLeftColor']='transparent';},j=(m,n)=>{const V=T;if(e)i(e);e=m,m[V(0xc9)]['background']=V(0x9a),m[V(0xc9)]['borderLeftColor']=V(0x93),d=n;};for(const m of c){const n=document[T(0xe6)]('div');n[T(0xc9)][T(0xc3)]='padding:5px\x206px\x205px\x209px;\x20cursor:pointer;\x20border-radius:3px;\x20border-left:3px\x20solid\x20transparent;\x20margin-bottom:2px;';const o=document[T(0xe6)]('div');o[T(0xc9)]['cssText']=T(0x90),o['textContent']=m[T(0xaa)],n['appendChild'](o);if(m['description']){const p=document[T(0xe6)]('div');p[T(0xc9)][T(0xc3)]=T(0x8b),p['textContent']=m['description'],n[T(0xf6)](p);}if(m[T(0xba)]&&Object[T(0x89)](m['converter'])[T(0xe7)]>0x0){const q=document['createElement']('div');q['style']['cssText']=T(0xa1);for(const [r,s]of Object['entries'](m['converter'])){const t=document['createElement']('span');t[T(0xc9)]['cssText']='color:#555;\x20text-align:right;',t[T(0x9b)]=r;const u=document[T(0xe6)]('span');u[T(0xc9)][T(0xc3)]=T(0xf5),u[T(0x9b)]='→';const w=document['createElement']('span');w['style']['cssText']=T(0x8a),w['textContent']=String(s),q['appendChild'](t),q[T(0xf6)](u),q['appendChild'](w);}n[T(0xf6)](q);}n['onmouseenter']=()=>{const W=T;if(n!==e)n[W(0xc9)]['background']=W(0xa3);},n['onmouseleave']=()=>{const X=T;if(n!==e)n[X(0xc9)][X(0x95)]='';},n[T(0xfc)]=()=>j(n,m['name']),h['appendChild'](n);}const l=await this['_shell']['openConfirmation'](f,{'x':0x64,'y':0x64,'width':0x140,'height':0x12c,'parent':this});l&&d&&(this['convertersString']=d,this[T(0xe3)](T(0xf2))['value']=d,this[T(0xb9)]());}[y(0xb8)](){requestAnimationFrame(()=>{this['_bindingsRefresh']();});}async[y(0x98)](){const Y=y;let c=new BindingsEditorHistoric(this['historic']);const d=new AbortController();c['title']='Edit\x20historic\x20binding\x20to:\x20'+this[Y(0xea)]['name'];let e=await this['_shell'][Y(0xa4)](c,{'x':0x64,'y':0x64,'width':0x1a4,'height':0x1fe,'parent':this,'abortSignal':d[Y(0xb1)],'disableResize':!![],'cancelText':'Remove'});!e?this['historic']=null:this['historic']=c[Y(0xca)],this['_bindingsRefresh']();}[y(0xb7)](){const Z=y,c=document['createElement'](Z(0x87));c['srcdoc']=BindingsEditor[Z(0xbd)]['length']>0x0?bindingsEditorHelpHtml['replace']('</div>\x0a</body>',BindingsEditor['helpSections'][Z(0xdb)]('')+Z(0xa6)):bindingsEditorHelpHtml,c['style']['cssText']='width:100%;\x20height:100%;\x20border:none;\x20display:block;',this['_shell'][Z(0xe9)](c,{'title':Z(0xeb),'parent':this,'x':-0x294,'y':-0x50,'width':0x276,'height':0x244});}}function a(){const a0=['createElement','length','converters','openModal','_property','Bindings\x20Editor\x20Help','fullName','_signalListContainer','_binding','objectDoubleclicked','key','twoWay','namedConverterInput','invert','_parseAttributesToProperties','color:#aaa;','appendChild','Remove','94698WffFsO','signal-icon-btn','394639XOKXGz','display','onclick','width:12px;\x20height:12px;','height','img','input','signal-name-input','color','objectNames','\x20if\x20empty)','Duplicate','node-projects-visualization-bindings-editor','Browse\x20signal','iframe','signal-select-btn','keys','color:#0078d7;\x20font-weight:bold;','color:#555;\x20font-size:11px;\x20margin-top:2px;','_renderSignalList','_parseObjectNames','593936doYxGV','signal-row','font-family:monospace;\x20font-weight:bold;\x20color:#111;','abort','className','#0078d7','property','background','forEach','_signals','showHistoric','bindableObjectNames','#e8f4fd','textContent','slice','_instanceServiceContainer','flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;','splice','convertersString','display:grid;\x20grid-template-columns:max-content\x20max-content\x201fr;\x20gap:1px\x206px;\x20margin-top:4px;\x20padding:4px\x206px;\x20background:#f5f5f5;\x20border-radius:2px;\x20font-family:monospace;\x20font-size:11px;\x20color:#333;','ready','#f5f5f5','openConfirmation','expressionTwoWay','</div>\x0a</body>','define','_converterListContainer','_addSignal','name','push','1078760fsHvpO','icons/copy.svg','16jRHUUE','select\x20signal...','_syncSignals','signal','placeholder','_selectForRow','flex:1;\x20overflow-y:auto;\x20padding:4px;','type','properties','_showHelp','_refresh','_bindingsRefresh','converter','_renderConverterList','specialType','helpSections','writeBackSignal','title','src','innerHTML','value','cssText','indexOf','expression2way','namedConverters','historicLabel','condition','style','historic','signal\x20path\x20(prefix:\x20?\x20=\x20signal\x20name\x20in\x20screen\x20property,\x20??\x20=\x20screen\x20property\x20value,\x20?$\x20=\x20signal\x20object\x20in\x20screen\x20property,\x20?@\x20=\x20screen\x20attribute,\x20#\x20=\x20signal\x20name\x20in\x20target\x20property,\x20##\x20=\x20target\x20property\x20value,\x20#$\x20=\x20signal\x20object\x20in\x20target\x20property,\x20#@\x20=\x20target\x20attribute)','bindabletype','selectedObject','22pHrtHf','button','twoWayPossible','expression','1359888hFADnO','map','div','11217xeUXxD','_shell','_serviceContainer','_bindingTarget','icons/delete.svg','_restoreCachedInititalValues','join','oninput','...','changedEvents','attribute','3vSFRwP','binding','60UXVvwV','_getDomElement','1636195AFXqHa','signal-path-input'];a=function(){return a0;};return a();}customElements[y(0xa7)](BindingsEditor['is'],BindingsEditor);
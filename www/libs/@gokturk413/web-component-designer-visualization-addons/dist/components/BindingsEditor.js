const y=b;function b(c,d){c=c-0x159;const e=a();let f=e[c];return f;}(function(c,d){const x=b,e=c();while(!![]){try{const f=parseInt(x(0x170))/0x1*(-parseInt(x(0x195))/0x2)+parseInt(x(0x183))/0x3+parseInt(x(0x1b3))/0x4+parseInt(x(0x18b))/0x5*(parseInt(x(0x1b9))/0x6)+-parseInt(x(0x1c6))/0x7+-parseInt(x(0x173))/0x8+parseInt(x(0x1cd))/0x9*(parseInt(x(0x1cf))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb9f68));import{BaseCustomWebComponentConstructorAppend,html,css}from'@node-projects/base-custom-webcomponent';import{BindingMode,BindingTarget,assetsPath}from'@gokturk413/web-component-designer';import{BindingsEditorHistoric}from'./BindingsEditorHistoric.js';import{bindingsEditorHelpHtml}from'./BindingsEditorHelp.js';export class BindingsEditor extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
        </div>`;static [y(0x160)]=css`
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
        }`;static ['is']='node-projects-visualization-bindings-editor';static ['properties']={'twoWayPossible':Boolean,'twoWay':Boolean,'expression':String,'events':String,'invert':Boolean,'historic':Object};[y(0x1a4)]=![];['twoWay']=![];['expression']='';[y(0x1a8)]='';[y(0x192)]='';[y(0x181)];['objectNames']='';['events']='';[y(0x1bf)]=![];['converters']=[];static ['namedConverters']=[];static [y(0x1b5)]=[];[y(0x1cb)];get[y(0x1ab)](){const z=y;if(this['convertersString'])return this['convertersString'];if(this[z(0x16c)][z(0x18c)]>0x0)return Object['fromEntries'](this[z(0x16c)][z(0x172)](d=>[d['key'],d['value']]));return undefined;}['_property'];['_binding'];[y(0x15b)];[y(0x186)];['_instanceServiceContainer'];[y(0x1d0)];[y(0x1b7)]=[];['_signalListContainer'];[y(0x167)];constructor(c,d,e,f,g,h,i={}){const A=y;super(),super['_restoreCachedInititalValues'](),this[A(0x182)]=c,this['_binding']=d,this['_bindingTarget']=e,this[A(0x186)]=f,this[A(0x1b0)]=g,this['_shell']=h;i?.['namedConverters']===![]&&(this[A(0x163)](A(0x1ad))[A(0x160)][A(0x1ae)]='none');const j=this[A(0x163)](A(0x1b8));if(i?.['showHistoric']===![])j['style'][A(0x1ae)]='none';else i?.['historicLabel']&&(j[A(0x18d)]=i['historicLabel']);}['ready'](){const B=y;this[B(0x1a6)](),this['_assignEvents'](),this[B(0x1ce)]=this['_getDomElement'](B(0x179)),this[B(0x167)]=this[B(0x163)]('converterListContainer'),this[B(0x163)]('helpBtn')['onclick']=()=>this['_showHelp']();if(BindingsEditor['namedConverters']['length']===0x0)this[B(0x163)](B(0x198))[B(0x160)][B(0x1ae)]=B(0x1af);this[B(0x1a4)]=![];if(this[B(0x15b)]==BindingTarget['property']||this['_bindingTarget']==BindingTarget[B(0x1c2)])this[B(0x1a4)]=!![];if(this[B(0x17d)]){this['twoWay']=this[B(0x17d)]['mode']==BindingMode[B(0x1c7)],this['expression']=this[B(0x17d)]['expression'],this[B(0x1a8)]=this['_binding'][B(0x1a8)],this['expressionTwoWay']=this[B(0x17d)]['expressionTwoWay'],this[B(0x181)]=this['_binding']['historic'],this[B(0x1bf)]=this[B(0x17d)][B(0x1bf)];if(this['_binding'][B(0x19e)])this['objectNames']=this[B(0x17d)][B(0x19e)][B(0x1ac)](';');if(this['_binding'][B(0x1ab)]){if(typeof this['_binding'][B(0x1ab)]===B(0x1c3))this[B(0x1cb)]=this[B(0x17d)]['converter'];else for(let d in this[B(0x17d)]['converter']){this['converters']['push']({'key':d,'value':this[B(0x17d)][B(0x1ab)][d]});}}if(this['_binding']['changedEvents']&&this['_binding']['changedEvents']['length'])this['events']=this[B(0x17d)][B(0x1d4)][B(0x1ac)](';');}if(this['expression']){let e=this[B(0x163)](B(0x199));this['expression'][B(0x176)]('\x0a')>=0x0&&(e['style'][B(0x189)]=0x3*0x11+'px');}if(this[B(0x192)]){let f=this['_getDomElement'](B(0x162));this['expressionTwoWay'][B(0x176)]('\x0a')>=0x0&&(f[B(0x160)][B(0x189)]=0x3*0x11+'px');}this[B(0x1b7)]=this[B(0x161)](this['objectNames']);if(this[B(0x1b7)][B(0x18c)]===0x0)this[B(0x1b7)][B(0x18a)]({'name':'','signal':''});this['_renderSignalList'](),this['_renderConverterList'](),this[B(0x194)]();}['_parseObjectNames'](c){const C=y;if(!c)return[];return c['split'](';')['filter'](d=>d[C(0x18c)]>0x0)['map'](d=>{const e=d['indexOf'](':');if(e>0x0)return{'name':d['slice'](0x0,e),'signal':d['slice'](e+0x1)};return{'name':'','signal':d};});}[y(0x164)](){const D=y;return this['_signals'][D(0x172)](c=>c['name']?c[D(0x1be)]+':'+c['signal']:c['signal'])['join'](';');}['_renderSignalList'](){const E=y,c=this[E(0x1ce)];c[E(0x185)]='',this[E(0x1b7)]['forEach']((d,e)=>{const F=E,f=document[F(0x1c1)]('div');f[F(0x1ca)]=F(0x16e);const g=document[F(0x1c1)]('input');g[F(0x1ca)]='signal-name-input',g['placeholder']='__'+e,g['value']=d[F(0x1be)],g['title']='variable\x20name\x20used\x20in\x20the\x20formula\x20(defaults\x20to\x20__'+e+F(0x19c),g['oninput']=()=>{this['_signals'][e]['name']=g['value'],this['_syncSignals']();};const h=document['createElement'](F(0x166));h['className']=F(0x1bc),h['value']=d[F(0x1bb)],h['placeholder']=F(0x15e),h['title']='signal\x20path\x20(prefix:\x20?\x20=\x20signal\x20name\x20in\x20screen\x20property,\x20??\x20=\x20screen\x20property\x20value,\x20?$\x20=\x20signal\x20object\x20in\x20screen\x20property,\x20?@\x20=\x20screen\x20attribute,\x20#\x20=\x20signal\x20name\x20in\x20target\x20property,\x20##\x20=\x20target\x20property\x20value,\x20#$\x20=\x20signal\x20object\x20in\x20target\x20property,\x20#@\x20=\x20target\x20attribute)',h[F(0x171)]=()=>{const G=F;this[G(0x1b7)][e][G(0x1bb)]=h['value'],this[G(0x17c)]();};const j=document['createElement'](F(0x1a3));j[F(0x1ca)]=F(0x1aa),j['title']=F(0x180);const k=document['createElement']('img');k[F(0x1b6)]=assetsPath+F(0x1d2),k['style']['cssText']=F(0x1d1),j[F(0x1a0)](k),j[F(0x1c5)]=()=>{const H=F;this['_signals'][H(0x17b)](e+0x1,0x0,{...this['_signals'][e]}),this[H(0x17c)](),this[H(0x1a1)]();};const l=document['createElement'](F(0x1a3));l['className']=F(0x165),l[F(0x18d)]=F(0x17a),l['title']=F(0x191),l[F(0x1c5)]=()=>this['_selectForRow'](e,h);const m=document[F(0x1c1)](F(0x1a3));m[F(0x1ca)]=F(0x1aa),m['title']='Remove';const n=document['createElement']('img');n[F(0x1b6)]=assetsPath+F(0x1cc),n['style'][F(0x19d)]=F(0x1d1),m[F(0x1a0)](n),m[F(0x1c5)]=()=>{const I=F;this['_signals']['splice'](e,0x1),this[I(0x17c)](),this[I(0x1a1)]();},f[F(0x1a0)](g),f[F(0x1a0)](h),f['appendChild'](l),f['appendChild'](j),f[F(0x1a0)](m),c[F(0x1a0)](f);});}[y(0x17c)](){const J=y;this['objectNames']=this['_signalsToObjectNames'](),this[J(0x174)]();}['_addSignal'](){const K=y;this[K(0x1b7)]['push']({'name':'','signal':''}),this['_renderSignalList']();}async[y(0x1c8)](c,d){const L=y;let e=this['_shell']['createBindableObjectBrowser']();e['initialize'](this['_serviceContainer'],this['_instanceServiceContainer'],L(0x1c4)),e['title']='select\x20signal...';const f=new AbortController();e[L(0x1c9)]['on'](()=>{const M=L;f[M(0x16a)]();let h='';if(e[M(0x17e)][M(0x15d)]==M(0x177))h='?';else e[M(0x17e)]['bindabletype']==='property'&&(h='??');this['_signals'][c]['signal']=h+e['selectedObject']['fullName'],d[M(0x193)]=this['_signals'][c][M(0x1bb)],this[M(0x17c)]();});let g=await this['_shell']['openConfirmation'](e,{'x':0x64,'y':0x64,'width':0x190,'height':0x12c,'parent':this,'abortSignal':f[L(0x1bb)]});if(g){let h='';if(e[L(0x17e)]['specialType']==L(0x177))h='?';else e['selectedObject']['bindabletype']==='property'&&(h='??');this['_signals'][c]['signal']=h+e['selectedObject']['fullName'],d['value']=this[L(0x1b7)][c][L(0x1bb)],this[L(0x17c)]();}}[y(0x15f)](){const N=y,c=this[N(0x167)];c['innerHTML']='';const d=this[N(0x182)]?.[N(0x196)]==='color'?N(0x16d):N(0x19b);this['converters'][N(0x187)]((e,f)=>{const O=N,g=document['createElement']('div');g[O(0x1ca)]=O(0x16e);const h=document['createElement']('input');h[O(0x160)][O(0x19d)]='flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;',h['value']=e['key'],h[O(0x18e)]='condition',h['oninput']=()=>{const P=O;this['converters'][f][P(0x15c)]=h['value'];};const j=document['createElement']('input');j[O(0x196)]=d,j[O(0x160)][O(0x19d)]='flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;',j['value']=e['value'],j[O(0x18e)]=O(0x193),j['oninput']=()=>{this['converters'][f]['value']=j['value'];};const k=document['createElement'](O(0x1a3));k['className']=O(0x1aa),k[O(0x1a7)]=O(0x180);const l=document[O(0x1c1)]('img');l[O(0x1b6)]=assetsPath+'icons/copy.svg',l[O(0x160)]['cssText']='width:12px;\x20height:12px;',k[O(0x1a0)](l),k['onclick']=()=>{this['converters']['splice'](f+0x1,0x0,{...this['converters'][f]}),this['_renderConverterList']();};const m=document['createElement'](O(0x1a3));m['className']=O(0x1aa),m['title']=O(0x1bd);const n=document['createElement'](O(0x1a2));n['src']=assetsPath+'icons/delete.svg',n[O(0x160)][O(0x19d)]='width:12px;\x20height:12px;',m['appendChild'](n),m['onclick']=()=>{const Q=O;this['converters'][Q(0x17b)](f,0x1),this[Q(0x15f)]();},g[O(0x1a0)](h),g[O(0x1a0)](j),g['appendChild'](k),g[O(0x1a0)](m),c[O(0x1a0)](g);});}[y(0x1a5)](){const R=y;this[R(0x16c)][R(0x18a)]({'key':'','value':''}),this['_renderConverterList']();}async[y(0x17f)](){const S=y,c=BindingsEditor[S(0x1b1)];if(c[S(0x18c)]===0x0)return;let d='',e=null;const f=document['createElement'](S(0x16b));f['style'][S(0x19d)]=S(0x1b4);const g=document['createElement'](S(0x16b));g['style'][S(0x19d)]='padding:6px\x208px\x204px;\x20color:#666;\x20font-size:11px;\x20border-bottom:1px\x20solid\x20#e0e0e0;\x20flex-shrink:0;',g[S(0x18d)]='Select\x20a\x20converter\x20and\x20confirm\x20with\x20OK.',f[S(0x1a0)](g);const h=document[S(0x1c1)](S(0x16b));h['style']['cssText']='flex:1;\x20overflow-y:auto;\x20padding:4px;',f[S(0x1a0)](h);const i=m=>{const T=S;m[T(0x160)]['background']='',m[T(0x160)][T(0x1a9)]=T(0x159);},j=(m,n)=>{const U=S;if(e)i(e);e=m,m['style'][U(0x1c0)]='#e8f4fd',m['style']['borderLeftColor']=U(0x197),d=n;};for(const m of c){const n=document['createElement']('div');n[S(0x160)][S(0x19d)]=S(0x184);const o=document[S(0x1c1)](S(0x16b));o['style']['cssText']='font-family:monospace;\x20font-weight:bold;\x20color:#111;',o['textContent']=m[S(0x1be)],n[S(0x1a0)](o);if(m[S(0x178)]){const p=document[S(0x1c1)](S(0x16b));p[S(0x160)]['cssText']='color:#555;\x20font-size:11px;\x20margin-top:2px;',p['textContent']=m[S(0x178)],n['appendChild'](p);}if(m[S(0x1ab)]&&Object['keys'](m['converter'])[S(0x18c)]>0x0){const q=document['createElement']('div');q[S(0x160)]['cssText']='display:grid;\x20grid-template-columns:max-content\x20max-content\x201fr;\x20gap:1px\x206px;\x20margin-top:4px;\x20padding:4px\x206px;\x20background:#f5f5f5;\x20border-radius:2px;\x20font-family:monospace;\x20font-size:11px;\x20color:#333;';for(const [r,s]of Object[S(0x169)](m[S(0x1ab)])){const t=document[S(0x1c1)](S(0x16f));t['style']['cssText']='color:#555;\x20text-align:right;',t['textContent']=r;const u=document[S(0x1c1)](S(0x16f));u[S(0x160)][S(0x19d)]=S(0x175),u[S(0x18d)]='→';const w=document['createElement'](S(0x16f));w[S(0x160)][S(0x19d)]=S(0x1b2),w['textContent']=String(s),q['appendChild'](t),q['appendChild'](u),q[S(0x1a0)](w);}n[S(0x1a0)](q);}n[S(0x18f)]=()=>{const V=S;if(n!==e)n[V(0x160)][V(0x1c0)]=V(0x190);},n['onmouseleave']=()=>{const W=S;if(n!==e)n['style'][W(0x1c0)]='';},n[S(0x1c5)]=()=>j(n,m[S(0x1be)]),h[S(0x1a0)](n);}const l=await this['_shell'][S(0x19f)](f,{'x':0x64,'y':0x64,'width':0x140,'height':0x12c,'parent':this});l&&d&&(this['convertersString']=d,this[S(0x163)](S(0x168))['value']=d,this['_bindingsRefresh']());}['_refresh'](){requestAnimationFrame(()=>{this['_bindingsRefresh']();});}async['showHistoric'](){const X=y;let c=new BindingsEditorHistoric(this['historic']);const d=new AbortController();c[X(0x1a7)]=X(0x19a)+this[X(0x182)][X(0x1be)];let e=await this[X(0x1d0)]['openConfirmation'](c,{'x':0x64,'y':0x64,'width':0x1a4,'height':0x1fe,'parent':this,'abortSignal':d[X(0x1bb)],'disableResize':!![],'cancelText':'Remove'});!e?this[X(0x181)]=null:this[X(0x181)]=c[X(0x181)],this[X(0x174)]();}['_showHelp'](){const Y=y,c=document[Y(0x1c1)](Y(0x1ba));c['srcdoc']=BindingsEditor[Y(0x1b5)][Y(0x18c)]>0x0?bindingsEditorHelpHtml['replace']('</div>\x0a</body>',BindingsEditor[Y(0x1b5)]['join']('')+Y(0x15a)):bindingsEditorHelpHtml,c[Y(0x160)][Y(0x19d)]='width:100%;\x20height:100%;\x20border:none;\x20display:block;',this['_shell'][Y(0x188)](c,{'title':'Bindings\x20Editor\x20Help','parent':this,'x':-0x294,'y':-0x50,'width':0x276,'height':0x244});}}customElements[y(0x1d3)](BindingsEditor['is'],BindingsEditor);function a(){const Z=['type','#0078d7','namedConverterBrowse','expression','Edit\x20historic\x20binding\x20to:\x20','text','\x20if\x20empty)','cssText','bindableObjectNames','openConfirmation','appendChild','_renderSignalList','img','button','twoWayPossible','_addConverter','_parseAttributesToProperties','title','writeBackSignal','borderLeftColor','signal-icon-btn','converter','join','namedConverterRow','display','none','_instanceServiceContainer','namedConverters','color:#0078d7;\x20font-weight:bold;','5631324bPTVDN','display:flex;\x20flex-direction:column;\x20height:100%;\x20box-sizing:border-box;\x20font-size:12px;','helpSections','src','_signals','historicBtn','203946kHjNMm','iframe','signal','signal-path-input','Remove','name','invert','background','createElement','attribute','string','binding','onclick','9761423NVSbfv','twoWay','_selectForRow','objectDoubleclicked','className','convertersString','icons/delete.svg','310041GXrQCW','_signalListContainer','370xYmwGh','_shell','width:12px;\x20height:12px;','icons/copy.svg','define','changedEvents','transparent','</div>\x0a</body>','_bindingTarget','key','specialType','signal\x20path','_renderConverterList','style','_parseObjectNames','expression2way','_getDomElement','_signalsToObjectNames','signal-select-btn','input','_converterListContainer','namedConverterInput','entries','abort','div','converters','color','signal-row','span','1yHSpaQ','oninput','map','2234048hzAkQU','_bindingsRefresh','color:#aaa;','indexOf','signalProperty','description','signalListContainer','...','splice','_syncSignals','_binding','selectedObject','_selectNamedConverter','Duplicate','historic','_property','2962458EvzVqs','padding:5px\x206px\x205px\x209px;\x20cursor:pointer;\x20border-radius:3px;\x20border-left:3px\x20solid\x20transparent;\x20margin-bottom:2px;','innerHTML','_serviceContainer','forEach','openModal','height','push','10vhZLZK','length','textContent','placeholder','onmouseenter','#f5f5f5','Browse\x20signal','expressionTwoWay','value','_bindingsParse','2604926BoGBFr'];a=function(){return Z;};return a();}
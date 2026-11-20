const y=b;(function(c,d){const x=b,e=c();while(!![]){try{const f=-parseInt(x(0x1ee))/0x1+-parseInt(x(0x208))/0x2+-parseInt(x(0x1e0))/0x3*(parseInt(x(0x1e7))/0x4)+parseInt(x(0x1ac))/0x5*(parseInt(x(0x222))/0x6)+parseInt(x(0x1f4))/0x7+-parseInt(x(0x1c8))/0x8*(-parseInt(x(0x1e1))/0x9)+-parseInt(x(0x20b))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd4815));import{BaseCustomWebComponentConstructorAppend,html,css}from'@node-projects/base-custom-webcomponent';import{BindingMode,BindingTarget,assetsPath}from'@gokturk413/web-component-designer';import{BindingsEditorHistoric}from'./BindingsEditorHistoric.js';function b(c,d){c=c-0x1ab;const e=a();let f=e[c];return f;}function a(){const a1=['onmouseleave','_addConverter','join','events','define','color:#555;\x20text-align:right;','#e8f4fd','signal','2274CwVWmL','className','onmouseenter','writeBackSignal','Select\x20a\x20converter\x20and\x20confirm\x20with\x20OK.','textContent','indexOf','_serviceContainer','18250kpByLd','variable\x20name\x20used\x20in\x20the\x20formula\x20(defaults\x20to\x20__','_selectForRow','openModal','none','objectNames','createElement','_getDomElement','width:100%;\x20height:100%;\x20border:none;\x20display:block;','signal-row','placeholder','objectDoubleclicked','appendChild','value','openConfirmation','span','forEach','signal-path-input','signal-name-input','length','signalListContainer','name','Duplicate','_shell','_instanceServiceContainer','binding','_signals','#f5f5f5','128DnOAYi','height','key','title','split','img','_showHelp','signalProperty','slice','Remove','helpSections','input','div','src','fromEntries','node-projects-visualization-bindings-editor','_refresh','oninput','namedConverters','_addSignal','style','map','select\x20signal...','createBindableObjectBrowser','86343ZCdtWy','941292jvNdYa','ready','converter','icons/copy.svg','iframe','borderLeftColor','84NRPWor','historicBtn','cssText','property','historic','push','color','364293WlxvBI','_signalListContainer','_bindingsRefresh','_converterListContainer','twoWayPossible','description','1611820ROSUua','showHistoric','#0078d7','selectedObject','_renderSignalList','innerHTML','changedEvents','convertersString','signal-icon-btn','string','condition','flex:1;\x20overflow-y:auto;\x20padding:4px;','_signalsToObjectNames','Browse\x20signal','_renderConverterList','_parseObjectNames','invert','_bindingTarget','onclick','display','1287390KUrvzX','Edit\x20historic\x20binding\x20to:\x20','_property','8042080yFAFoA','expression','bindabletype','specialType','_syncSignals','_selectNamedConverter','width:12px;\x20height:12px;','background','converters','expressionTwoWay','splice','_binding','button','...','color:#555;\x20font-size:11px;\x20margin-top:2px;'];a=function(){return a1;};return a();}import{bindingsEditorHelpHtml}from'./BindingsEditorHelp.js';export class BindingsEditor extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
        </div>`;static [y(0x1dc)]=css`
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
        }`;static ['is']=y(0x1d7);static ['properties']={'twoWayPossible':Boolean,'twoWay':Boolean,'expression':String,'events':String,'invert':Boolean,'historic':Object};[y(0x1f2)]=![];['twoWay']=![];[y(0x20c)]='';[y(0x225)]='';[y(0x214)]='';['historic'];['objectNames']='';['events']='';['invert']=![];['converters']=[];static [y(0x1da)]=[];static [y(0x1d2)]=[];[y(0x1fb)];get['converter'](){const z=y;if(this[z(0x1fb)])return this['convertersString'];if(this['converters'][z(0x1bf)]>0x0)return Object[z(0x1d6)](this['converters']['map'](d=>[d[z(0x1ca)],d[z(0x1b9)]]));return undefined;}[y(0x20a)];['_binding'];[y(0x205)];[y(0x1ab)];['_instanceServiceContainer'];[y(0x1c3)];['_signals']=[];[y(0x1ef)];[y(0x1f1)];constructor(c,d,e,f,g,h,i={}){const A=y;super(),super['_restoreCachedInititalValues'](),this['_property']=c,this['_binding']=d,this[A(0x205)]=e,this['_serviceContainer']=f,this[A(0x1c4)]=g,this[A(0x1c3)]=h;i?.[A(0x1da)]===![]&&(this[A(0x1b3)]('namedConverterRow')['style'][A(0x207)]='none');const j=this['_getDomElement'](A(0x1e8));if(i?.[A(0x1f5)]===![])j[A(0x1dc)]['display']=A(0x1b0);else i?.['historicLabel']&&(j['textContent']=i['historicLabel']);}[y(0x1e2)](){const B=y;this['_parseAttributesToProperties'](),this['_assignEvents'](),this[B(0x1ef)]=this[B(0x1b3)](B(0x1c0)),this['_converterListContainer']=this['_getDomElement']('converterListContainer'),this['_getDomElement']('helpBtn')['onclick']=()=>this[B(0x1ce)]();if(BindingsEditor[B(0x1da)][B(0x1bf)]===0x0)this[B(0x1b3)]('namedConverterBrowse')['style']['display']=B(0x1b0);this[B(0x1f2)]=![];if(this[B(0x205)]==BindingTarget[B(0x1ea)]||this['_bindingTarget']==BindingTarget['attribute'])this[B(0x1f2)]=!![];if(this['_binding']){this['twoWay']=this['_binding']['mode']==BindingMode['twoWay'],this[B(0x20c)]=this['_binding'][B(0x20c)],this[B(0x225)]=this['_binding']['writeBackSignal'],this[B(0x214)]=this[B(0x216)]['expressionTwoWay'],this[B(0x1eb)]=this['_binding']['historic'],this[B(0x204)]=this[B(0x216)]['invert'];if(this['_binding']['bindableObjectNames'])this['objectNames']=this['_binding']['bindableObjectNames']['join'](';');if(this[B(0x216)]['converter']){if(typeof this['_binding']['converter']===B(0x1fd))this['convertersString']=this[B(0x216)][B(0x1e3)];else for(let d in this['_binding'][B(0x1e3)]){this[B(0x213)][B(0x1ec)]({'key':d,'value':this['_binding'][B(0x1e3)][d]});}}if(this[B(0x216)][B(0x1fa)]&&this[B(0x216)]['changedEvents']['length'])this[B(0x21d)]=this['_binding'][B(0x1fa)][B(0x21c)](';');}if(this[B(0x20c)]){let e=this[B(0x1b3)]('expression');this['expression'][B(0x228)]('\x0a')>=0x0&&(e['style'][B(0x1c9)]=0x3*0x11+'px');}if(this['expressionTwoWay']){let f=this[B(0x1b3)]('expression2way');this['expressionTwoWay'][B(0x228)]('\x0a')>=0x0&&(f[B(0x1dc)]['height']=0x3*0x11+'px');}this[B(0x1c6)]=this[B(0x203)](this[B(0x1b1)]);if(this[B(0x1c6)]['length']===0x0)this[B(0x1c6)][B(0x1ec)]({'name':'','signal':''});this['_renderSignalList'](),this[B(0x202)](),this['_bindingsParse']();}[y(0x203)](c){const C=y;if(!c)return[];return c[C(0x1cc)](';')['filter'](d=>d[C(0x1bf)]>0x0)[C(0x1dd)](d=>{const D=C,e=d[D(0x228)](':');if(e>0x0)return{'name':d[D(0x1d0)](0x0,e),'signal':d['slice'](e+0x1)};return{'name':'','signal':d};});}['_signalsToObjectNames'](){const E=y;return this['_signals']['map'](c=>c[E(0x1c1)]?c[E(0x1c1)]+':'+c['signal']:c[E(0x221)])['join'](';');}['_renderSignalList'](){const F=y,c=this['_signalListContainer'];c['innerHTML']='',this['_signals'][F(0x1bc)]((d,e)=>{const G=F,f=document[G(0x1b2)](G(0x1d4));f[G(0x223)]=G(0x1b5);const g=document['createElement'](G(0x1d3));g[G(0x223)]=G(0x1be),g['placeholder']='__'+e,g[G(0x1b9)]=d[G(0x1c1)],g['title']=G(0x1ad)+e+'\x20if\x20empty)',g['oninput']=()=>{const H=G;this[H(0x1c6)][e]['name']=g[H(0x1b9)],this['_syncSignals']();};const h=document['createElement'](G(0x1d3));h['className']=G(0x1bd),h['value']=d[G(0x221)],h['placeholder']='signal\x20path',h[G(0x1cb)]='signal\x20path\x20(prefix:\x20?\x20=\x20signal\x20name\x20in\x20screen\x20property,\x20??\x20=\x20screen\x20property\x20value,\x20?$\x20=\x20signal\x20object\x20in\x20screen\x20property,\x20?@\x20=\x20screen\x20attribute,\x20#\x20=\x20signal\x20name\x20in\x20target\x20property,\x20##\x20=\x20target\x20property\x20value,\x20#$\x20=\x20signal\x20object\x20in\x20target\x20property,\x20#@\x20=\x20target\x20attribute)',h['oninput']=()=>{const I=G;this['_signals'][e]['signal']=h['value'],this[I(0x20f)]();};const j=document[G(0x1b2)](G(0x217));j[G(0x223)]='signal-icon-btn',j['title']='Duplicate';const k=document[G(0x1b2)](G(0x1cd));k['src']=assetsPath+G(0x1e4),k['style'][G(0x1e9)]=G(0x211),j[G(0x1b8)](k),j[G(0x206)]=()=>{const J=G;this[J(0x1c6)][J(0x215)](e+0x1,0x0,{...this[J(0x1c6)][e]}),this['_syncSignals'](),this[J(0x1f8)]();};const l=document['createElement']('button');l[G(0x223)]='signal-select-btn',l[G(0x227)]=G(0x218),l['title']=G(0x201),l['onclick']=()=>this['_selectForRow'](e,h);const m=document[G(0x1b2)](G(0x217));m[G(0x223)]='signal-icon-btn',m['title']=G(0x1d1);const n=document['createElement'](G(0x1cd));n[G(0x1d5)]=assetsPath+'icons/delete.svg',n['style']['cssText']='width:12px;\x20height:12px;',m[G(0x1b8)](n),m[G(0x206)]=()=>{const K=G;this['_signals']['splice'](e,0x1),this['_syncSignals'](),this[K(0x1f8)]();},f[G(0x1b8)](g),f[G(0x1b8)](h),f[G(0x1b8)](l),f['appendChild'](j),f[G(0x1b8)](m),c['appendChild'](f);});}[y(0x20f)](){const L=y;this[L(0x1b1)]=this[L(0x200)](),this['_bindingsRefresh']();}[y(0x1db)](){const M=y;this[M(0x1c6)]['push']({'name':'','signal':''}),this[M(0x1f8)]();}async[y(0x1ae)](c,d){const N=y;let e=this['_shell'][N(0x1df)]();e['initialize'](this[N(0x1ab)],this[N(0x1c4)],N(0x1c5)),e['title']=N(0x1de);const f=new AbortController();e[N(0x1b7)]['on'](()=>{const O=N;f['abort']();let h='';if(e['selectedObject']['specialType']=='signalProperty')h='?';else e['selectedObject'][O(0x20d)]===O(0x1ea)&&(h='??');this['_signals'][c]['signal']=h+e['selectedObject']['fullName'],d[O(0x1b9)]=this[O(0x1c6)][c][O(0x221)],this[O(0x20f)]();});let g=await this['_shell']['openConfirmation'](e,{'x':0x64,'y':0x64,'width':0x190,'height':0x12c,'parent':this,'abortSignal':f['signal']});if(g){let h='';if(e[N(0x1f7)][N(0x20e)]==N(0x1cf))h='?';else e[N(0x1f7)][N(0x20d)]==='property'&&(h='??');this['_signals'][c][N(0x221)]=h+e[N(0x1f7)]['fullName'],d['value']=this['_signals'][c][N(0x221)],this['_syncSignals']();}}[y(0x202)](){const P=y,c=this[P(0x1f1)];c[P(0x1f9)]='';const d=this[P(0x20a)]?.['type']==='color'?P(0x1ed):'text';this[P(0x213)]['forEach']((e,f)=>{const Q=P,g=document[Q(0x1b2)](Q(0x1d4));g['className']='signal-row';const h=document['createElement']('input');h['style'][Q(0x1e9)]='flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;',h['value']=e[Q(0x1ca)],h['placeholder']=Q(0x1fe),h['oninput']=()=>{const R=Q;this[R(0x213)][f]['key']=h[R(0x1b9)];};const j=document[Q(0x1b2)]('input');j['type']=d,j['style']['cssText']='flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;',j[Q(0x1b9)]=e[Q(0x1b9)],j[Q(0x1b6)]=Q(0x1b9),j[Q(0x1d9)]=()=>{const S=Q;this[S(0x213)][f][S(0x1b9)]=j['value'];};const k=document['createElement']('button');k[Q(0x223)]='signal-icon-btn',k['title']=Q(0x1c2);const l=document[Q(0x1b2)](Q(0x1cd));l[Q(0x1d5)]=assetsPath+'icons/copy.svg',l[Q(0x1dc)][Q(0x1e9)]='width:12px;\x20height:12px;',k['appendChild'](l),k[Q(0x206)]=()=>{const T=Q;this['converters'][T(0x215)](f+0x1,0x0,{...this[T(0x213)][f]}),this[T(0x202)]();};const m=document[Q(0x1b2)]('button');m[Q(0x223)]=Q(0x1fc),m['title']=Q(0x1d1);const n=document['createElement'](Q(0x1cd));n[Q(0x1d5)]=assetsPath+'icons/delete.svg',n[Q(0x1dc)][Q(0x1e9)]='width:12px;\x20height:12px;',m[Q(0x1b8)](n),m['onclick']=()=>{this['converters']['splice'](f,0x1),this['_renderConverterList']();},g[Q(0x1b8)](h),g[Q(0x1b8)](j),g[Q(0x1b8)](k),g['appendChild'](m),c[Q(0x1b8)](g);});}[y(0x21b)](){const U=y;this[U(0x213)]['push']({'key':'','value':''}),this[U(0x202)]();}async[y(0x210)](){const V=y,c=BindingsEditor['namedConverters'];if(c[V(0x1bf)]===0x0)return;let d='',e=null;const f=document['createElement']('div');f['style']['cssText']='display:flex;\x20flex-direction:column;\x20height:100%;\x20box-sizing:border-box;\x20font-size:12px;';const g=document[V(0x1b2)]('div');g['style'][V(0x1e9)]='padding:6px\x208px\x204px;\x20color:#666;\x20font-size:11px;\x20border-bottom:1px\x20solid\x20#e0e0e0;\x20flex-shrink:0;',g['textContent']=V(0x226),f[V(0x1b8)](g);const h=document['createElement'](V(0x1d4));h[V(0x1dc)]['cssText']=V(0x1ff),f[V(0x1b8)](h);const i=m=>{const W=V;m[W(0x1dc)]['background']='',m[W(0x1dc)][W(0x1e6)]='transparent';},j=(m,n)=>{const X=V;if(e)i(e);e=m,m['style'][X(0x212)]=X(0x220),m['style'][X(0x1e6)]=X(0x1f6),d=n;};for(const m of c){const n=document['createElement'](V(0x1d4));n[V(0x1dc)][V(0x1e9)]='padding:5px\x206px\x205px\x209px;\x20cursor:pointer;\x20border-radius:3px;\x20border-left:3px\x20solid\x20transparent;\x20margin-bottom:2px;';const o=document['createElement']('div');o['style']['cssText']='font-family:monospace;\x20font-weight:bold;\x20color:#111;',o['textContent']=m[V(0x1c1)],n[V(0x1b8)](o);if(m[V(0x1f3)]){const p=document[V(0x1b2)](V(0x1d4));p['style'][V(0x1e9)]=V(0x219),p['textContent']=m[V(0x1f3)],n[V(0x1b8)](p);}if(m['converter']&&Object['keys'](m['converter'])['length']>0x0){const q=document['createElement']('div');q[V(0x1dc)][V(0x1e9)]='display:grid;\x20grid-template-columns:max-content\x20max-content\x201fr;\x20gap:1px\x206px;\x20margin-top:4px;\x20padding:4px\x206px;\x20background:#f5f5f5;\x20border-radius:2px;\x20font-family:monospace;\x20font-size:11px;\x20color:#333;';for(const [r,s]of Object['entries'](m[V(0x1e3)])){const t=document['createElement']('span');t[V(0x1dc)]['cssText']=V(0x21f),t['textContent']=r;const u=document['createElement'](V(0x1bb));u[V(0x1dc)]['cssText']='color:#aaa;',u[V(0x227)]='→';const w=document['createElement']('span');w['style']['cssText']='color:#0078d7;\x20font-weight:bold;',w['textContent']=String(s),q[V(0x1b8)](t),q[V(0x1b8)](u),q['appendChild'](w);}n['appendChild'](q);}n[V(0x224)]=()=>{const Y=V;if(n!==e)n[Y(0x1dc)][Y(0x212)]=Y(0x1c7);},n[V(0x21a)]=()=>{if(n!==e)n['style']['background']='';},n['onclick']=()=>j(n,m[V(0x1c1)]),h[V(0x1b8)](n);}const l=await this['_shell'][V(0x1ba)](f,{'x':0x64,'y':0x64,'width':0x140,'height':0x12c,'parent':this});l&&d&&(this['convertersString']=d,this[V(0x1b3)]('namedConverterInput')[V(0x1b9)]=d,this[V(0x1f0)]());}[y(0x1d8)](){requestAnimationFrame(()=>{this['_bindingsRefresh']();});}async['showHistoric'](){const Z=y;let c=new BindingsEditorHistoric(this[Z(0x1eb)]);const d=new AbortController();c['title']=Z(0x209)+this['_property'][Z(0x1c1)];let e=await this[Z(0x1c3)]['openConfirmation'](c,{'x':0x64,'y':0x64,'width':0x1a4,'height':0x1fe,'parent':this,'abortSignal':d['signal'],'disableResize':!![],'cancelText':'Remove'});!e?this[Z(0x1eb)]=null:this[Z(0x1eb)]=c[Z(0x1eb)],this['_bindingsRefresh']();}[y(0x1ce)](){const a0=y,c=document[a0(0x1b2)](a0(0x1e5));c['srcdoc']=BindingsEditor['helpSections']['length']>0x0?bindingsEditorHelpHtml['replace']('</div>\x0a</body>',BindingsEditor[a0(0x1d2)][a0(0x21c)]('')+'</div>\x0a</body>'):bindingsEditorHelpHtml,c['style'][a0(0x1e9)]=a0(0x1b4),this[a0(0x1c3)][a0(0x1af)](c,{'title':'Bindings\x20Editor\x20Help','parent':this,'x':-0x294,'y':-0x50,'width':0x276,'height':0x244});}}customElements[y(0x21e)](BindingsEditor['is'],BindingsEditor);
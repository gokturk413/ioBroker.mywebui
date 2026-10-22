const y=b;(function(c,d){const x=b,e=c();while(!![]){try{const f=-parseInt(x(0x20a))/0x1*(-parseInt(x(0x1ec))/0x2)+parseInt(x(0x21e))/0x3+parseInt(x(0x1d4))/0x4*(-parseInt(x(0x219))/0x5)+parseInt(x(0x1f9))/0x6+parseInt(x(0x20f))/0x7+-parseInt(x(0x1c0))/0x8+-parseInt(x(0x203))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x83236));function a(){const a3=['#e8f4fd','_signals','objectNames','signal-name-input','onmouseleave','createBindableObjectBrowser','replace','showHistoric','define','forEach','#f5f5f5','appendChild','title','_converterListContainer','_bindingsRefresh','namedConverterBrowse','createElement','abort','cssText','_selectForRow','2IgRVjt','push','signalProperty','_renderSignalList','_binding','iframe','expressionTwoWay','padding:6px\x208px\x204px;\x20color:#666;\x20font-size:11px;\x20border-bottom:1px\x20solid\x20#e0e0e0;\x20flex-shrink:0;','srcdoc','Edit\x20historic\x20binding\x20to:\x20','_signalsToObjectNames','signalListContainer','signal\x20path','4040268sRPxfU','initialize','color','placeholder','properties','template','converterListContainer','transparent','converters','events','13405671XhFiqF','map','openConfirmation','attribute','split','_instanceServiceContainer','_bindingsParse','931387bMGzGW','signal-select-btn','oninput','_signalListContainer','signal-row','4303516FBMlNL','onmouseenter','historic','_getDomElement','Duplicate','#0078d7','_syncSignals','width:12px;\x20height:12px;','join','binding','272225yOIWIi','expression','writeBackSignal','span','helpSections','2961861wQrbhf','condition','_bindingTarget','borderLeftColor','node-projects-visualization-bindings-editor','height','property','textContent','_parseAttributesToProperties','innerHTML','converter','signal\x20path\x20(prefix:\x20?\x20=\x20signal\x20name\x20in\x20screen\x20property,\x20??\x20=\x20screen\x20property\x20value,\x20?$\x20=\x20signal\x20object\x20in\x20screen\x20property,\x20?@\x20=\x20screen\x20attribute,\x20#\x20=\x20signal\x20name\x20in\x20target\x20property,\x20##\x20=\x20target\x20property\x20value,\x20#$\x20=\x20signal\x20object\x20in\x20target\x20property,\x20#@\x20=\x20target\x20attribute)','Remove','indexOf','namedConverters','signal','className','button','length','style','twoWayPossible','slice','icons/copy.svg','value','bindabletype','...','div','5956952ZWNoaw','_addSignal','_shell','changedEvents','display:flex;\x20flex-direction:column;\x20height:100%;\x20box-sizing:border-box;\x20font-size:12px;','src','type','bindableObjectNames','input','invert','name','splice','background','img','mode','padding:5px\x206px\x205px\x209px;\x20cursor:pointer;\x20border-radius:3px;\x20border-left:3px\x20solid\x20transparent;\x20margin-bottom:2px;','key','onclick','_property','_serviceContainer','32GQJlur','twoWay','_renderConverterList','convertersString'];a=function(){return a3;};return a();}function b(c,d){c=c-0x1bf;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,html,css}from'@node-projects/base-custom-webcomponent';import{BindingMode,BindingTarget,assetsPath}from'@gokturk413/web-component-designer';import{BindingsEditorHistoric}from'./BindingsEditorHistoric.js';import{bindingsEditorHelpHtml}from'./BindingsEditorHelp.js';export class BindingsEditor extends BaseCustomWebComponentConstructorAppend{static [y(0x1fe)]=html`
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
        }`;static ['is']=y(0x222);static [y(0x1fd)]={'twoWayPossible':Boolean,'twoWay':Boolean,'expression':String,'events':String,'invert':Boolean,'historic':Object};['twoWayPossible']=![];['twoWay']=![];['expression']='';[y(0x21b)]='';['expressionTwoWay']='';['historic'];['objectNames']='';['events']='';['invert']=![];[y(0x201)]=[];static ['namedConverters']=[];static [y(0x21d)]=[];['convertersString'];get['converter'](){const z=y;if(this['convertersString'])return this[z(0x1d7)];if(this['converters']['length']>0x0)return Object['fromEntries'](this['converters'][z(0x204)](d=>[d[z(0x1d0)],d[z(0x235)]]));return undefined;}['_property'];['_binding'];[y(0x220)];[y(0x1d3)];['_instanceServiceContainer'];['_shell'];[y(0x1d9)]=[];['_signalListContainer'];[y(0x1e5)];constructor(c,d,e,f,g,h,i={}){const A=y;super(),super['_restoreCachedInititalValues'](),this['_property']=c,this[A(0x1f0)]=d,this[A(0x220)]=e,this['_serviceContainer']=f,this[A(0x208)]=g,this['_shell']=h;i?.['namedConverters']===![]&&(this['_getDomElement']('namedConverterRow')['style']['display']='none');const j=this[A(0x212)]('historicBtn');if(i?.[A(0x1df)]===![])j['style']['display']='none';else i?.['historicLabel']&&(j['textContent']=i['historicLabel']);}['ready'](){const B=y;this[B(0x226)](),this['_assignEvents'](),this['_signalListContainer']=this['_getDomElement'](B(0x1f7)),this[B(0x1e5)]=this[B(0x212)](B(0x1ff)),this[B(0x212)]('helpBtn')[B(0x1d1)]=()=>this['_showHelp']();if(BindingsEditor['namedConverters'][B(0x230)]===0x0)this[B(0x212)](B(0x1e7))[B(0x231)]['display']='none';this['twoWayPossible']=![];if(this[B(0x220)]==BindingTarget[B(0x224)]||this[B(0x220)]==BindingTarget[B(0x206)])this[B(0x232)]=!![];if(this['_binding']){this[B(0x1d5)]=this[B(0x1f0)][B(0x1ce)]==BindingMode[B(0x1d5)],this[B(0x21a)]=this['_binding'][B(0x21a)],this['writeBackSignal']=this['_binding'][B(0x21b)],this[B(0x1f2)]=this['_binding']['expressionTwoWay'],this['historic']=this['_binding']['historic'],this[B(0x1c9)]=this['_binding'][B(0x1c9)];if(this[B(0x1f0)][B(0x1c7)])this[B(0x1da)]=this['_binding'][B(0x1c7)]['join'](';');if(this['_binding'][B(0x228)]){if(typeof this[B(0x1f0)][B(0x228)]==='string')this['convertersString']=this[B(0x1f0)]['converter'];else for(let d in this['_binding'][B(0x228)]){this[B(0x201)]['push']({'key':d,'value':this['_binding'][B(0x228)][d]});}}if(this['_binding']['changedEvents']&&this[B(0x1f0)][B(0x1c3)]['length'])this[B(0x202)]=this[B(0x1f0)]['changedEvents']['join'](';');}if(this[B(0x21a)]){let e=this['_getDomElement']('expression');this[B(0x21a)]['indexOf']('\x0a')>=0x0&&(e[B(0x231)][B(0x223)]=0x3*0x11+'px');}if(this[B(0x1f2)]){let f=this[B(0x212)]('expression2way');this[B(0x1f2)][B(0x22b)]('\x0a')>=0x0&&(f['style'][B(0x223)]=0x3*0x11+'px');}this['_signals']=this['_parseObjectNames'](this[B(0x1da)]);if(this[B(0x1d9)]['length']===0x0)this['_signals']['push']({'name':'','signal':''});this['_renderSignalList'](),this[B(0x1d6)](),this[B(0x209)]();}['_parseObjectNames'](c){const C=y;if(!c)return[];return c[C(0x207)](';')['filter'](d=>d['length']>0x0)[C(0x204)](d=>{const D=C,e=d[D(0x22b)](':');if(e>0x0)return{'name':d[D(0x233)](0x0,e),'signal':d['slice'](e+0x1)};return{'name':'','signal':d};});}[y(0x1f6)](){const E=y;return this['_signals'][E(0x204)](c=>c['name']?c[E(0x1ca)]+':'+c['signal']:c[E(0x22d)])[E(0x217)](';');}[y(0x1ef)](){const F=y,c=this[F(0x20d)];c['innerHTML']='',this['_signals'][F(0x1e1)]((d,e)=>{const G=F,f=document['createElement'](G(0x1bf));f[G(0x22e)]=G(0x20e);const g=document['createElement'](G(0x1c8));g['className']=G(0x1db),g['placeholder']='__'+e,g[G(0x235)]=d[G(0x1ca)],g[G(0x1e4)]='variable\x20name\x20used\x20in\x20the\x20formula\x20(defaults\x20to\x20__'+e+'\x20if\x20empty)',g[G(0x20c)]=()=>{const H=G;this['_signals'][e]['name']=g[H(0x235)],this['_syncSignals']();};const h=document['createElement']('input');h[G(0x22e)]='signal-path-input',h[G(0x235)]=d[G(0x22d)],h[G(0x1fc)]=G(0x1f8),h[G(0x1e4)]=G(0x229),h[G(0x20c)]=()=>{const I=G;this['_signals'][e]['signal']=h[I(0x235)],this['_syncSignals']();};const j=document[G(0x1e8)]('button');j[G(0x22e)]='signal-icon-btn',j['title']=G(0x213);const k=document['createElement']('img');k['src']=assetsPath+G(0x234),k['style'][G(0x1ea)]=G(0x216),j[G(0x1e3)](k),j[G(0x1d1)]=()=>{const J=G;this['_signals'][J(0x1cb)](e+0x1,0x0,{...this[J(0x1d9)][e]}),this[J(0x215)](),this[J(0x1ef)]();};const l=document['createElement'](G(0x22f));l[G(0x22e)]=G(0x20b),l[G(0x225)]=G(0x237),l['title']='Browse\x20signal',l[G(0x1d1)]=()=>this[G(0x1eb)](e,h);const m=document[G(0x1e8)](G(0x22f));m['className']='signal-icon-btn',m['title']=G(0x22a);const n=document['createElement']('img');n['src']=assetsPath+'icons/delete.svg',n['style']['cssText']=G(0x216),m[G(0x1e3)](n),m[G(0x1d1)]=()=>{const K=G;this['_signals'][K(0x1cb)](e,0x1),this['_syncSignals'](),this[K(0x1ef)]();},f[G(0x1e3)](g),f[G(0x1e3)](h),f[G(0x1e3)](l),f[G(0x1e3)](j),f['appendChild'](m),c['appendChild'](f);});}[y(0x215)](){const L=y;this[L(0x1da)]=this['_signalsToObjectNames'](),this['_bindingsRefresh']();}[y(0x1c1)](){const M=y;this['_signals'][M(0x1ed)]({'name':'','signal':''}),this[M(0x1ef)]();}async[y(0x1eb)](c,d){const N=y;let e=this['_shell'][N(0x1dd)]();e[N(0x1fa)](this[N(0x1d3)],this[N(0x208)],N(0x218)),e['title']='select\x20signal...';const f=new AbortController();e['objectDoubleclicked']['on'](()=>{const O=N;f[O(0x1e9)]();let h='';if(e['selectedObject']['specialType']==O(0x1ee))h='?';else e['selectedObject'][O(0x236)]==='property'&&(h='??');this[O(0x1d9)][c][O(0x22d)]=h+e['selectedObject']['fullName'],d['value']=this[O(0x1d9)][c][O(0x22d)],this[O(0x215)]();});let g=await this[N(0x1c2)][N(0x205)](e,{'x':0x64,'y':0x64,'width':0x190,'height':0x12c,'parent':this,'abortSignal':f['signal']});if(g){let h='';if(e['selectedObject']['specialType']==N(0x1ee))h='?';else e['selectedObject']['bindabletype']==='property'&&(h='??');this['_signals'][c][N(0x22d)]=h+e['selectedObject']['fullName'],d[N(0x235)]=this[N(0x1d9)][c][N(0x22d)],this[N(0x215)]();}}[y(0x1d6)](){const P=y,c=this['_converterListContainer'];c[P(0x227)]='';const d=this[P(0x1d2)]?.[P(0x1c6)]==='color'?P(0x1fb):'text';this['converters']['forEach']((e,f)=>{const Q=P,g=document['createElement'](Q(0x1bf));g[Q(0x22e)]=Q(0x20e);const h=document[Q(0x1e8)]('input');h['style'][Q(0x1ea)]='flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;',h['value']=e['key'],h[Q(0x1fc)]=Q(0x21f),h[Q(0x20c)]=()=>{const R=Q;this['converters'][f][R(0x1d0)]=h[R(0x235)];};const j=document['createElement']('input');j['type']=d,j['style']['cssText']='flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;',j[Q(0x235)]=e['value'],j['placeholder']='value',j[Q(0x20c)]=()=>{const S=Q;this[S(0x201)][f]['value']=j[S(0x235)];};const k=document[Q(0x1e8)]('button');k[Q(0x22e)]='signal-icon-btn',k['title']='Duplicate';const l=document[Q(0x1e8)]('img');l[Q(0x1c5)]=assetsPath+Q(0x234),l[Q(0x231)][Q(0x1ea)]=Q(0x216),k['appendChild'](l),k[Q(0x1d1)]=()=>{const T=Q;this['converters']['splice'](f+0x1,0x0,{...this[T(0x201)][f]}),this['_renderConverterList']();};const m=document[Q(0x1e8)](Q(0x22f));m['className']='signal-icon-btn',m[Q(0x1e4)]=Q(0x22a);const n=document['createElement'](Q(0x1cd));n['src']=assetsPath+'icons/delete.svg',n['style']['cssText']='width:12px;\x20height:12px;',m['appendChild'](n),m[Q(0x1d1)]=()=>{const U=Q;this[U(0x201)][U(0x1cb)](f,0x1),this['_renderConverterList']();},g['appendChild'](h),g['appendChild'](j),g['appendChild'](k),g['appendChild'](m),c[Q(0x1e3)](g);});}['_addConverter'](){const V=y;this['converters'][V(0x1ed)]({'key':'','value':''}),this['_renderConverterList']();}async['_selectNamedConverter'](){const W=y,c=BindingsEditor[W(0x22c)];if(c['length']===0x0)return;let d='',e=null;const f=document['createElement']('div');f[W(0x231)][W(0x1ea)]=W(0x1c4);const g=document[W(0x1e8)]('div');g[W(0x231)]['cssText']=W(0x1f3),g[W(0x225)]='Select\x20a\x20converter\x20and\x20confirm\x20with\x20OK.',f['appendChild'](g);const h=document[W(0x1e8)](W(0x1bf));h['style']['cssText']='flex:1;\x20overflow-y:auto;\x20padding:4px;',f[W(0x1e3)](h);const i=m=>{const X=W;m[X(0x231)][X(0x1cc)]='',m[X(0x231)]['borderLeftColor']=X(0x200);},j=(m,n)=>{const Y=W;if(e)i(e);e=m,m[Y(0x231)]['background']=Y(0x1d8),m['style'][Y(0x221)]=Y(0x214),d=n;};for(const m of c){const n=document['createElement'](W(0x1bf));n[W(0x231)][W(0x1ea)]=W(0x1cf);const o=document['createElement']('div');o[W(0x231)]['cssText']='font-family:monospace;\x20font-weight:bold;\x20color:#111;',o[W(0x225)]=m['name'],n[W(0x1e3)](o);if(m['description']){const p=document[W(0x1e8)]('div');p['style']['cssText']='color:#555;\x20font-size:11px;\x20margin-top:2px;',p[W(0x225)]=m['description'],n[W(0x1e3)](p);}if(m[W(0x228)]&&Object['keys'](m[W(0x228)])['length']>0x0){const q=document['createElement']('div');q[W(0x231)]['cssText']='display:grid;\x20grid-template-columns:max-content\x20max-content\x201fr;\x20gap:1px\x206px;\x20margin-top:4px;\x20padding:4px\x206px;\x20background:#f5f5f5;\x20border-radius:2px;\x20font-family:monospace;\x20font-size:11px;\x20color:#333;';for(const [r,s]of Object['entries'](m[W(0x228)])){const t=document['createElement']('span');t[W(0x231)]['cssText']='color:#555;\x20text-align:right;',t['textContent']=r;const u=document['createElement'](W(0x21c));u['style'][W(0x1ea)]='color:#aaa;',u[W(0x225)]='→';const w=document[W(0x1e8)](W(0x21c));w['style'][W(0x1ea)]='color:#0078d7;\x20font-weight:bold;',w['textContent']=String(s),q[W(0x1e3)](t),q[W(0x1e3)](u),q[W(0x1e3)](w);}n[W(0x1e3)](q);}n[W(0x210)]=()=>{const Z=W;if(n!==e)n[Z(0x231)][Z(0x1cc)]=Z(0x1e2);},n[W(0x1dc)]=()=>{if(n!==e)n['style']['background']='';},n[W(0x1d1)]=()=>j(n,m[W(0x1ca)]),h['appendChild'](n);}const l=await this['_shell'][W(0x205)](f,{'x':0x64,'y':0x64,'width':0x140,'height':0x12c,'parent':this});l&&d&&(this['convertersString']=d,this['_getDomElement']('namedConverterInput')['value']=d,this[W(0x1e6)]());}['_refresh'](){requestAnimationFrame(()=>{const a0=b;this[a0(0x1e6)]();});}async[y(0x1df)](){const a1=y;let c=new BindingsEditorHistoric(this[a1(0x211)]);const d=new AbortController();c[a1(0x1e4)]=a1(0x1f5)+this[a1(0x1d2)]['name'];let e=await this['_shell']['openConfirmation'](c,{'x':0x64,'y':0x64,'width':0x1a4,'height':0x1fe,'parent':this,'abortSignal':d['signal'],'disableResize':!![],'cancelText':'Remove'});!e?this['historic']=null:this[a1(0x211)]=c[a1(0x211)],this[a1(0x1e6)]();}['_showHelp'](){const a2=y,c=document['createElement'](a2(0x1f1));c[a2(0x1f4)]=BindingsEditor['helpSections']['length']>0x0?bindingsEditorHelpHtml[a2(0x1de)]('</div>\x0a</body>',BindingsEditor[a2(0x21d)][a2(0x217)]('')+'</div>\x0a</body>'):bindingsEditorHelpHtml,c[a2(0x231)][a2(0x1ea)]='width:100%;\x20height:100%;\x20border:none;\x20display:block;',this['_shell']['openModal'](c,{'title':'Bindings\x20Editor\x20Help','parent':this,'x':-0x294,'y':-0x50,'width':0x276,'height':0x244});}}customElements[y(0x1e0)](BindingsEditor['is'],BindingsEditor);
const y=b;(function(c,d){const x=b,e=c();while(!![]){try{const f=parseInt(x(0xc1))/0x1+parseInt(x(0x69))/0x2*(-parseInt(x(0xbe))/0x3)+-parseInt(x(0x65))/0x4*(parseInt(x(0xa7))/0x5)+parseInt(x(0xd4))/0x6+-parseInt(x(0x86))/0x7*(-parseInt(x(0xbf))/0x8)+parseInt(x(0x98))/0x9+-parseInt(x(0x82))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4f1b9));function b(c,d){c=c-0x65;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,html,css}from'@node-projects/base-custom-webcomponent';import{BindingMode,BindingTarget,assetsPath}from'@gokturk413/web-component-designer';import{BindingsEditorHistoric}from'./BindingsEditorHistoric.js';import{bindingsEditorHelpHtml}from'./BindingsEditorHelp.js';function a(){const a2=['title','#e8f4fd','bindabletype','historicLabel','_bindingTarget','src','424416OuVykn','key','onclick','Select\x20a\x20converter\x20and\x20confirm\x20with\x20OK.','_parseObjectNames','_renderConverterList','changedEvents','20UZvKgr','splice','value','namedConverters','9150XtkzOA','borderLeftColor','input','attribute','#f5f5f5','push','_refresh','abort','display','signal','style','_getDomElement','signal-icon-btn','_showHelp','_bindingsParse','namedConverterInput','invert','button','_bindingsRefresh','_shell','length','signalProperty','indexOf','signal-name-input','expression2way','5135530wHYpOF','background','icons/delete.svg','Duplicate','3878oGSLMB','className','signal\x20path','div','Remove','img','_property','historic','textContent','signal-path-input','_instanceServiceContainer','signal-row','specialType','fullName','bindableObjectNames','color:#555;\x20text-align:right;','converterListContainer','convertersString','4659714IHlReD','forEach','_syncSignals','appendChild','_signalListContainer','placeholder','signalListContainer','variable\x20name\x20used\x20in\x20the\x20formula\x20(defaults\x20to\x20__','_converterListContainer','_addConverter','converter','converters','expression','expressionTwoWay','width:12px;\x20height:12px;','626125SjMbVR','replace','_assignEvents','map','cssText','selectedObject','_selectForRow','_signalsToObjectNames','define','_binding','twoWayPossible','twoWay','slice','property','color','fromEntries','objectNames','events','span','node-projects-visualization-bindings-editor','icons/copy.svg','createElement','height','162oPEpaj','7312RPVLKb','innerHTML','615915VsGsEF','mode','writeBackSignal','name','_serviceContainer','openConfirmation','_signals','filter','Edit\x20historic\x20binding\x20to:\x20','_addSignal','_renderSignalList','oninput','flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;'];a=function(){return a2;};return a();}export class BindingsEditor extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
        }`;static ['is']=y(0xba);static ['properties']={'twoWayPossible':Boolean,'twoWay':Boolean,'expression':String,'events':String,'invert':Boolean,'historic':Object};['twoWayPossible']=![];[y(0xb2)]=![];[y(0xa4)]='';['writeBackSignal']='';[y(0xa5)]='';['historic'];['objectNames']='';[y(0xb8)]='';[y(0x79)]=![];[y(0xa3)]=[];static [y(0x68)]=[];static ['helpSections']=[];['convertersString'];get[y(0xa2)](){const z=y;if(this['convertersString'])return this['convertersString'];if(this[z(0xa3)][z(0x7d)]>0x0)return Object[z(0xb6)](this[z(0xa3)]['map'](d=>[d[z(0xd5)],d[z(0x67)]]));return undefined;}[y(0x8c)];['_binding'];['_bindingTarget'];['_serviceContainer'];['_instanceServiceContainer'];[y(0x7c)];[y(0xc7)]=[];['_signalListContainer'];[y(0xa0)];constructor(c,d,e,f,g,h,i={}){const A=y;super(),super['_restoreCachedInititalValues'](),this[A(0x8c)]=c,this[A(0xb0)]=d,this['_bindingTarget']=e,this[A(0xc5)]=f,this[A(0x90)]=g,this['_shell']=h;i?.[A(0x68)]===![]&&(this[A(0x74)]('namedConverterRow')[A(0x73)][A(0x71)]='none');const j=this[A(0x74)]('historicBtn');if(i?.['showHistoric']===![])j['style']['display']='none';else i?.['historicLabel']&&(j['textContent']=i[A(0xd1)]);}['ready'](){const B=y;this['_parseAttributesToProperties'](),this[B(0xa9)](),this['_signalListContainer']=this['_getDomElement'](B(0x9e)),this[B(0xa0)]=this['_getDomElement'](B(0x96)),this['_getDomElement']('helpBtn')[B(0xd6)]=()=>this[B(0x76)]();if(BindingsEditor[B(0x68)]['length']===0x0)this[B(0x74)]('namedConverterBrowse')['style'][B(0x71)]='none';this[B(0xb1)]=![];if(this[B(0xd2)]==BindingTarget[B(0xb4)]||this['_bindingTarget']==BindingTarget[B(0x6c)])this['twoWayPossible']=!![];if(this['_binding']){this[B(0xb2)]=this['_binding'][B(0xc2)]==BindingMode[B(0xb2)],this[B(0xa4)]=this['_binding']['expression'],this['writeBackSignal']=this['_binding'][B(0xc3)],this[B(0xa5)]=this[B(0xb0)][B(0xa5)],this['historic']=this[B(0xb0)][B(0x8d)],this[B(0x79)]=this[B(0xb0)]['invert'];if(this['_binding'][B(0x94)])this[B(0xb7)]=this['_binding']['bindableObjectNames']['join'](';');if(this['_binding']['converter']){if(typeof this['_binding']['converter']==='string')this[B(0x97)]=this['_binding'][B(0xa2)];else for(let d in this['_binding']['converter']){this['converters']['push']({'key':d,'value':this['_binding'][B(0xa2)][d]});}}if(this[B(0xb0)][B(0xda)]&&this['_binding'][B(0xda)]['length'])this[B(0xb8)]=this['_binding']['changedEvents']['join'](';');}if(this[B(0xa4)]){let e=this[B(0x74)]('expression');this[B(0xa4)][B(0x7f)]('\x0a')>=0x0&&(e['style'][B(0xbd)]=0x3*0x11+'px');}if(this[B(0xa5)]){let f=this[B(0x74)](B(0x81));this[B(0xa5)]['indexOf']('\x0a')>=0x0&&(f[B(0x73)][B(0xbd)]=0x3*0x11+'px');}this['_signals']=this['_parseObjectNames'](this[B(0xb7)]);if(this['_signals']['length']===0x0)this['_signals'][B(0x6e)]({'name':'','signal':''});this['_renderSignalList'](),this['_renderConverterList'](),this[B(0x77)]();}[y(0xd8)](c){const C=y;if(!c)return[];return c['split'](';')[C(0xc8)](d=>d['length']>0x0)[C(0xaa)](d=>{const D=C,e=d['indexOf'](':');if(e>0x0)return{'name':d[D(0xb3)](0x0,e),'signal':d[D(0xb3)](e+0x1)};return{'name':'','signal':d};});}[y(0xae)](){const E=y;return this[E(0xc7)]['map'](c=>c[E(0xc4)]?c['name']+':'+c['signal']:c[E(0x72)])['join'](';');}[y(0xcb)](){const F=y,c=this[F(0x9c)];c[F(0xc0)]='',this['_signals'][F(0x99)]((d,e)=>{const G=F,f=document[G(0xbc)](G(0x89));f['className']='signal-row';const g=document[G(0xbc)](G(0x6b));g[G(0x87)]=G(0x80),g[G(0x9d)]='__'+e,g['value']=d[G(0xc4)],g[G(0xce)]=G(0x9f)+e+'\x20if\x20empty)',g['oninput']=()=>{const H=G;this['_signals'][e][H(0xc4)]=g[H(0x67)],this['_syncSignals']();};const h=document[G(0xbc)]('input');h[G(0x87)]=G(0x8f),h['value']=d[G(0x72)],h[G(0x9d)]=G(0x88),h[G(0xce)]='signal\x20path\x20(prefix:\x20?\x20=\x20signal\x20name\x20in\x20screen\x20property,\x20??\x20=\x20screen\x20property\x20value,\x20?$\x20=\x20signal\x20object\x20in\x20screen\x20property,\x20?@\x20=\x20screen\x20attribute,\x20#\x20=\x20signal\x20name\x20in\x20target\x20property,\x20##\x20=\x20target\x20property\x20value,\x20#$\x20=\x20signal\x20object\x20in\x20target\x20property,\x20#@\x20=\x20target\x20attribute)',h[G(0xcc)]=()=>{const I=G;this[I(0xc7)][e]['signal']=h[I(0x67)],this['_syncSignals']();};const j=document['createElement'](G(0x7a));j['className']='signal-icon-btn',j['title']=G(0x85);const k=document[G(0xbc)](G(0x8b));k[G(0xd3)]=assetsPath+G(0xbb),k['style']['cssText']=G(0xa6),j[G(0x9b)](k),j['onclick']=()=>{const J=G;this[J(0xc7)][J(0x66)](e+0x1,0x0,{...this[J(0xc7)][e]}),this[J(0x9a)](),this[J(0xcb)]();};const l=document[G(0xbc)]('button');l['className']='signal-select-btn',l[G(0x8e)]='...',l['title']='Browse\x20signal',l[G(0xd6)]=()=>this[G(0xad)](e,h);const m=document[G(0xbc)](G(0x7a));m['className']=G(0x75),m['title']=G(0x8a);const n=document[G(0xbc)]('img');n[G(0xd3)]=assetsPath+'icons/delete.svg',n[G(0x73)]['cssText']=G(0xa6),m[G(0x9b)](n),m[G(0xd6)]=()=>{this['_signals']['splice'](e,0x1),this['_syncSignals'](),this['_renderSignalList']();},f[G(0x9b)](g),f['appendChild'](h),f[G(0x9b)](l),f['appendChild'](j),f[G(0x9b)](m),c['appendChild'](f);});}['_syncSignals'](){const K=y;this['objectNames']=this[K(0xae)](),this[K(0x7b)]();}[y(0xca)](){const L=y;this['_signals']['push']({'name':'','signal':''}),this[L(0xcb)]();}async['_selectForRow'](c,d){const M=y;let e=this[M(0x7c)]['createBindableObjectBrowser']();e['initialize'](this[M(0xc5)],this['_instanceServiceContainer'],'binding'),e['title']='select\x20signal...';const f=new AbortController();e['objectDoubleclicked']['on'](()=>{const N=M;f[N(0x70)]();let h='';if(e[N(0xac)]['specialType']==N(0x7e))h='?';else e['selectedObject'][N(0xd0)]===N(0xb4)&&(h='??');this[N(0xc7)][c][N(0x72)]=h+e['selectedObject'][N(0x93)],d['value']=this[N(0xc7)][c]['signal'],this[N(0x9a)]();});let g=await this['_shell']['openConfirmation'](e,{'x':0x64,'y':0x64,'width':0x190,'height':0x12c,'parent':this,'abortSignal':f[M(0x72)]});if(g){let h='';if(e['selectedObject'][M(0x92)]==M(0x7e))h='?';else e[M(0xac)][M(0xd0)]==='property'&&(h='??');this[M(0xc7)][c]['signal']=h+e[M(0xac)]['fullName'],d['value']=this[M(0xc7)][c][M(0x72)],this['_syncSignals']();}}[y(0xd9)](){const O=y,c=this[O(0xa0)];c['innerHTML']='';const d=this['_property']?.['type']===O(0xb5)?'color':'text';this['converters']['forEach']((e,f)=>{const P=O,g=document[P(0xbc)]('div');g[P(0x87)]=P(0x91);const h=document[P(0xbc)](P(0x6b));h['style']['cssText']='flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;',h['value']=e[P(0xd5)],h[P(0x9d)]='condition',h[P(0xcc)]=()=>{const Q=P;this['converters'][f][Q(0xd5)]=h[Q(0x67)];};const j=document[P(0xbc)]('input');j['type']=d,j['style']['cssText']=P(0xcd),j['value']=e['value'],j['placeholder']='value',j[P(0xcc)]=()=>{const R=P;this[R(0xa3)][f][R(0x67)]=j['value'];};const k=document[P(0xbc)](P(0x7a));k['className']='signal-icon-btn',k[P(0xce)]=P(0x85);const l=document['createElement']('img');l[P(0xd3)]=assetsPath+P(0xbb),l[P(0x73)]['cssText']='width:12px;\x20height:12px;',k['appendChild'](l),k['onclick']=()=>{const S=P;this['converters'][S(0x66)](f+0x1,0x0,{...this['converters'][f]}),this[S(0xd9)]();};const m=document['createElement']('button');m['className']=P(0x75),m[P(0xce)]=P(0x8a);const n=document['createElement']('img');n[P(0xd3)]=assetsPath+P(0x84),n['style']['cssText']='width:12px;\x20height:12px;',m['appendChild'](n),m[P(0xd6)]=()=>{const T=P;this['converters'][T(0x66)](f,0x1),this['_renderConverterList']();},g['appendChild'](h),g[P(0x9b)](j),g[P(0x9b)](k),g['appendChild'](m),c['appendChild'](g);});}[y(0xa1)](){const U=y;this['converters'][U(0x6e)]({'key':'','value':''}),this[U(0xd9)]();}async['_selectNamedConverter'](){const V=y,c=BindingsEditor[V(0x68)];if(c[V(0x7d)]===0x0)return;let d='',e=null;const f=document['createElement']('div');f[V(0x73)][V(0xab)]='display:flex;\x20flex-direction:column;\x20height:100%;\x20box-sizing:border-box;\x20font-size:12px;';const g=document['createElement']('div');g[V(0x73)]['cssText']='padding:6px\x208px\x204px;\x20color:#666;\x20font-size:11px;\x20border-bottom:1px\x20solid\x20#e0e0e0;\x20flex-shrink:0;',g[V(0x8e)]=V(0xd7),f[V(0x9b)](g);const h=document[V(0xbc)](V(0x89));h[V(0x73)][V(0xab)]='flex:1;\x20overflow-y:auto;\x20padding:4px;',f['appendChild'](h);const i=m=>{const W=V;m[W(0x73)][W(0x83)]='',m['style'][W(0x6a)]='transparent';},j=(m,n)=>{const X=V;if(e)i(e);e=m,m[X(0x73)][X(0x83)]=X(0xcf),m['style']['borderLeftColor']='#0078d7',d=n;};for(const m of c){const n=document[V(0xbc)]('div');n['style'][V(0xab)]='padding:5px\x206px\x205px\x209px;\x20cursor:pointer;\x20border-radius:3px;\x20border-left:3px\x20solid\x20transparent;\x20margin-bottom:2px;';const o=document['createElement'](V(0x89));o['style']['cssText']='font-family:monospace;\x20font-weight:bold;\x20color:#111;',o['textContent']=m[V(0xc4)],n['appendChild'](o);if(m['description']){const p=document['createElement'](V(0x89));p[V(0x73)][V(0xab)]='color:#555;\x20font-size:11px;\x20margin-top:2px;',p[V(0x8e)]=m['description'],n['appendChild'](p);}if(m['converter']&&Object['keys'](m['converter'])[V(0x7d)]>0x0){const q=document[V(0xbc)]('div');q[V(0x73)]['cssText']='display:grid;\x20grid-template-columns:max-content\x20max-content\x201fr;\x20gap:1px\x206px;\x20margin-top:4px;\x20padding:4px\x206px;\x20background:#f5f5f5;\x20border-radius:2px;\x20font-family:monospace;\x20font-size:11px;\x20color:#333;';for(const [r,s]of Object['entries'](m['converter'])){const t=document[V(0xbc)](V(0xb9));t[V(0x73)]['cssText']=V(0x95),t[V(0x8e)]=r;const u=document['createElement'](V(0xb9));u[V(0x73)][V(0xab)]='color:#aaa;',u['textContent']='→';const w=document['createElement']('span');w['style']['cssText']='color:#0078d7;\x20font-weight:bold;',w['textContent']=String(s),q['appendChild'](t),q['appendChild'](u),q[V(0x9b)](w);}n['appendChild'](q);}n['onmouseenter']=()=>{const Y=V;if(n!==e)n['style']['background']=Y(0x6d);},n['onmouseleave']=()=>{const Z=V;if(n!==e)n[Z(0x73)]['background']='';},n['onclick']=()=>j(n,m[V(0xc4)]),h['appendChild'](n);}const l=await this['_shell'][V(0xc6)](f,{'x':0x64,'y':0x64,'width':0x140,'height':0x12c,'parent':this});l&&d&&(this['convertersString']=d,this['_getDomElement'](V(0x78))['value']=d,this[V(0x7b)]());}[y(0x6f)](){requestAnimationFrame(()=>{this['_bindingsRefresh']();});}async['showHistoric'](){const a0=y;let c=new BindingsEditorHistoric(this['historic']);const d=new AbortController();c[a0(0xce)]=a0(0xc9)+this[a0(0x8c)]['name'];let e=await this[a0(0x7c)]['openConfirmation'](c,{'x':0x64,'y':0x64,'width':0x1a4,'height':0x1fe,'parent':this,'abortSignal':d[a0(0x72)],'disableResize':!![],'cancelText':a0(0x8a)});!e?this[a0(0x8d)]=null:this[a0(0x8d)]=c['historic'],this[a0(0x7b)]();}['_showHelp'](){const a1=y,c=document['createElement']('iframe');c['srcdoc']=BindingsEditor['helpSections'][a1(0x7d)]>0x0?bindingsEditorHelpHtml[a1(0xa8)]('</div>\x0a</body>',BindingsEditor['helpSections']['join']('')+'</div>\x0a</body>'):bindingsEditorHelpHtml,c[a1(0x73)][a1(0xab)]='width:100%;\x20height:100%;\x20border:none;\x20display:block;',this['_shell']['openModal'](c,{'title':'Bindings\x20Editor\x20Help','parent':this,'x':-0x294,'y':-0x50,'width':0x276,'height':0x244});}}customElements[y(0xaf)](BindingsEditor['is'],BindingsEditor);
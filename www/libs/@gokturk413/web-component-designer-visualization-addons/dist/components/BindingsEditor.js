const y=b;(function(c,d){const x=b,e=c();while(!![]){try{const f=-parseInt(x(0xf9))/0x1*(-parseInt(x(0xf5))/0x2)+parseInt(x(0xb5))/0x3*(-parseInt(x(0xb7))/0x4)+-parseInt(x(0xd9))/0x5+parseInt(x(0xd1))/0x6+parseInt(x(0xa8))/0x7*(parseInt(x(0xfc))/0x8)+-parseInt(x(0xd3))/0x9*(-parseInt(x(0xe2))/0xa)+parseInt(x(0xb3))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xca3ae));function b(c,d){c=c-0x8e;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,html,css}from'@node-projects/base-custom-webcomponent';import{BindingMode,BindingTarget,assetsPath}from'@gokturk413/web-component-designer';import{BindingsEditorHistoric}from'./BindingsEditorHistoric.js';function a(){const a0=['Remove','4043Yregmw','Select\x20a\x20converter\x20and\x20confirm\x20with\x20OK.','appendChild','291936LAaeSX','invert','_instanceServiceContainer','signal\x20path','title','flex:1;\x20overflow-y:auto;\x20padding:4px;','span','helpSections','objectDoubleclicked','namedConverterRow','_bindingTarget','twoWay','historicBtn','oninput','div','type','value','_signalsToObjectNames','events','_parseAttributesToProperties','_restoreCachedInititalValues','img','bindabletype','fullName','signal-select-btn','height','specialType','_selectForRow','signalListContainer','background','color','_showHelp','join','width:100%;\x20height:100%;\x20border:none;\x20display:block;','button','_signals','_addConverter','font-family:monospace;\x20font-weight:bold;\x20color:#111;','textContent','variable\x20name\x20used\x20in\x20the\x20formula\x20(defaults\x20to\x20__','splice','twoWayPossible','98UcdlPl','signalProperty','abort','srcdoc','_getDomElement','description','property','signal-path-input','icons/copy.svg','flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;','className','12796267mGQLcn','objectNames','4014915IlDYoB','name','4rIVkiE','namedConverters','define','expressionTwoWay','_shell','_renderSignalList','padding:5px\x206px\x205px\x209px;\x20cursor:pointer;\x20border-radius:3px;\x20border-left:3px\x20solid\x20transparent;\x20margin-bottom:2px;','_converterListContainer','historic','cssText','_property','changedEvents','style','createBindableObjectBrowser','createElement','</div>\x0a</body>','Browse\x20signal','signal','_parseObjectNames','placeholder','filter','map','slice','bindableObjectNames','signal\x20path\x20(prefix:\x20?\x20=\x20signal\x20name\x20in\x20screen\x20property,\x20??\x20=\x20screen\x20property\x20value,\x20?$\x20=\x20signal\x20object\x20in\x20screen\x20property,\x20?@\x20=\x20screen\x20attribute,\x20#\x20=\x20signal\x20name\x20in\x20target\x20property,\x20##\x20=\x20target\x20property\x20value,\x20#$\x20=\x20signal\x20object\x20in\x20target\x20property,\x20#@\x20=\x20target\x20attribute)','input','1059276mOUOBo','historicLabel','315VzltvF','signal-icon-btn','showHistoric','length','display','\x20if\x20empty)','4362180ioJTDs','innerHTML','_bindingsRefresh','_renderConverterList','_serviceContainer','_syncSignals','borderLeftColor','#e8f4fd','onmouseleave','1070dophdS','none','key','indexOf','icons/delete.svg','select\x20signal...','push','display:grid;\x20grid-template-columns:max-content\x20max-content\x201fr;\x20gap:1px\x206px;\x20margin-top:4px;\x20padding:4px\x206px;\x20background:#f5f5f5;\x20border-radius:2px;\x20font-family:monospace;\x20font-size:11px;\x20color:#333;','_signalListContainer','iframe','selectedObject','converters','#f5f5f5','convertersString','expression','_binding','onclick','converter','signal-row','586UBbTuA','split','width:12px;\x20height:12px;'];a=function(){return a0;};return a();}import{bindingsEditorHelpHtml}from'./BindingsEditorHelp.js';export class BindingsEditor extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
        }`;static ['is']='node-projects-visualization-bindings-editor';static ['properties']={'twoWayPossible':Boolean,'twoWay':Boolean,'expression':String,'events':String,'invert':Boolean,'historic':Object};['twoWayPossible']=![];[y(0x107)]=![];[y(0xf0)]='';['writeBackSignal']='';[y(0xba)]='';[y(0xbf)];['objectNames']='';[y(0x90)]='';[y(0xfd)]=![];['converters']=[];static ['namedConverters']=[];static [y(0x103)]=[];['convertersString'];get[y(0xf3)](){const z=y;if(this[z(0xef)])return this['convertersString'];if(this['converters']['length']>0x0)return Object['fromEntries'](this[z(0xed)]['map'](d=>[d['key'],d[z(0x8e)]]));return undefined;}[y(0xc1)];[y(0xf1)];['_bindingTarget'];['_serviceContainer'];[y(0xfe)];[y(0xbb)];[y(0xa1)]=[];[y(0xea)];['_converterListContainer'];constructor(c,d,e,f,g,h,i={}){const A=y;super(),super[A(0x92)](),this[A(0xc1)]=c,this[A(0xf1)]=d,this[A(0x106)]=e,this[A(0xdd)]=f,this[A(0xfe)]=g,this['_shell']=h;i?.['namedConverters']===![]&&(this[A(0xac)](A(0x105))['style'][A(0xd7)]='none');const j=this[A(0xac)](A(0x108));if(i?.[A(0xd5)]===![])j[A(0xc3)]['display']='none';else i?.[A(0xd2)]&&(j[A(0xa4)]=i[A(0xd2)]);}['ready'](){const B=y;this[B(0x91)](),this['_assignEvents'](),this['_signalListContainer']=this['_getDomElement'](B(0x9a)),this['_converterListContainer']=this[B(0xac)]('converterListContainer'),this[B(0xac)]('helpBtn')[B(0xf2)]=()=>this[B(0x9d)]();if(BindingsEditor[B(0xb8)][B(0xd6)]===0x0)this[B(0xac)]('namedConverterBrowse')['style'][B(0xd7)]=B(0xe3);this[B(0xa7)]=![];if(this[B(0x106)]==BindingTarget[B(0xae)]||this[B(0x106)]==BindingTarget['attribute'])this[B(0xa7)]=!![];if(this[B(0xf1)]){this[B(0x107)]=this['_binding']['mode']==BindingMode[B(0x107)],this['expression']=this[B(0xf1)]['expression'],this['writeBackSignal']=this[B(0xf1)]['writeBackSignal'],this['expressionTwoWay']=this['_binding']['expressionTwoWay'],this[B(0xbf)]=this['_binding']['historic'],this[B(0xfd)]=this['_binding']['invert'];if(this[B(0xf1)][B(0xce)])this[B(0xb4)]=this[B(0xf1)]['bindableObjectNames'][B(0x9e)](';');if(this[B(0xf1)][B(0xf3)]){if(typeof this['_binding']['converter']==='string')this[B(0xef)]=this[B(0xf1)]['converter'];else for(let d in this['_binding']['converter']){this['converters'][B(0xe8)]({'key':d,'value':this['_binding']['converter'][d]});}}if(this[B(0xf1)][B(0xc2)]&&this['_binding'][B(0xc2)]['length'])this[B(0x90)]=this['_binding']['changedEvents']['join'](';');}if(this['expression']){let e=this[B(0xac)]('expression');this['expression']['indexOf']('\x0a')>=0x0&&(e['style'][B(0x97)]=0x3*0x11+'px');}if(this['expressionTwoWay']){let f=this['_getDomElement']('expression2way');this['expressionTwoWay']['indexOf']('\x0a')>=0x0&&(f[B(0xc3)][B(0x97)]=0x3*0x11+'px');}this[B(0xa1)]=this[B(0xc9)](this[B(0xb4)]);if(this[B(0xa1)]['length']===0x0)this['_signals'][B(0xe8)]({'name':'','signal':''});this[B(0xbc)](),this['_renderConverterList'](),this['_bindingsParse']();}[y(0xc9)](c){const C=y;if(!c)return[];return c[C(0xf6)](';')[C(0xcb)](d=>d['length']>0x0)[C(0xcc)](d=>{const D=C,e=d[D(0xe5)](':');if(e>0x0)return{'name':d[D(0xcd)](0x0,e),'signal':d[D(0xcd)](e+0x1)};return{'name':'','signal':d};});}[y(0x8f)](){const E=y;return this[E(0xa1)][E(0xcc)](c=>c['name']?c['name']+':'+c[E(0xc8)]:c['signal'])[E(0x9e)](';');}['_renderSignalList'](){const F=y,c=this[F(0xea)];c[F(0xda)]='',this['_signals']['forEach']((d,e)=>{const G=F,f=document['createElement']('div');f['className']=G(0xf4);const g=document['createElement'](G(0xd0));g['className']='signal-name-input',g[G(0xca)]='__'+e,g[G(0x8e)]=d[G(0xb6)],g['title']=G(0xa5)+e+G(0xd8),g[G(0x109)]=()=>{this['_signals'][e]['name']=g['value'],this['_syncSignals']();};const h=document['createElement'](G(0xd0));h[G(0xb2)]=G(0xaf),h['value']=d[G(0xc8)],h[G(0xca)]=G(0xff),h['title']=G(0xcf),h['oninput']=()=>{this['_signals'][e]['signal']=h['value'],this['_syncSignals']();};const j=document['createElement'](G(0xa0));j[G(0xb2)]='signal-icon-btn',j['title']='Duplicate';const k=document['createElement']('img');k['src']=assetsPath+G(0xb0),k[G(0xc3)]['cssText']='width:12px;\x20height:12px;',j[G(0xfb)](k),j['onclick']=()=>{const H=G;this[H(0xa1)]['splice'](e+0x1,0x0,{...this[H(0xa1)][e]}),this[H(0xde)](),this[H(0xbc)]();};const l=document[G(0xc5)](G(0xa0));l[G(0xb2)]=G(0x96),l['textContent']='...',l[G(0x100)]=G(0xc7),l[G(0xf2)]=()=>this[G(0x99)](e,h);const m=document['createElement']('button');m['className']='signal-icon-btn',m['title']='Remove';const n=document['createElement'](G(0x93));n['src']=assetsPath+'icons/delete.svg',n[G(0xc3)]['cssText']=G(0xf7),m[G(0xfb)](n),m[G(0xf2)]=()=>{this['_signals']['splice'](e,0x1),this['_syncSignals'](),this['_renderSignalList']();},f[G(0xfb)](g),f['appendChild'](h),f['appendChild'](l),f['appendChild'](j),f[G(0xfb)](m),c[G(0xfb)](f);});}[y(0xde)](){const I=y;this[I(0xb4)]=this['_signalsToObjectNames'](),this['_bindingsRefresh']();}['_addSignal'](){const J=y;this['_signals']['push']({'name':'','signal':''}),this[J(0xbc)]();}async[y(0x99)](c,d){const K=y;let e=this[K(0xbb)][K(0xc4)]();e['initialize'](this[K(0xdd)],this[K(0xfe)],'binding'),e['title']=K(0xe7);const f=new AbortController();e[K(0x104)]['on'](()=>{const L=K;f[L(0xaa)]();let h='';if(e[L(0xec)]['specialType']=='signalProperty')h='?';else e[L(0xec)]['bindabletype']==='property'&&(h='??');this['_signals'][c][L(0xc8)]=h+e['selectedObject']['fullName'],d['value']=this['_signals'][c]['signal'],this['_syncSignals']();});let g=await this[K(0xbb)]['openConfirmation'](e,{'x':0x64,'y':0x64,'width':0x190,'height':0x12c,'parent':this,'abortSignal':f[K(0xc8)]});if(g){let h='';if(e['selectedObject'][K(0x98)]==K(0xa9))h='?';else e['selectedObject'][K(0x94)]===K(0xae)&&(h='??');this['_signals'][c][K(0xc8)]=h+e['selectedObject'][K(0x95)],d[K(0x8e)]=this['_signals'][c][K(0xc8)],this[K(0xde)]();}}[y(0xdc)](){const M=y,c=this[M(0xbe)];c['innerHTML']='';const d=this[M(0xc1)]?.[M(0x10b)]==='color'?M(0x9c):'text';this[M(0xed)]['forEach']((e,f)=>{const N=M,g=document[N(0xc5)](N(0x10a));g[N(0xb2)]=N(0xf4);const h=document['createElement'](N(0xd0));h[N(0xc3)]['cssText']='flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;',h[N(0x8e)]=e[N(0xe4)],h['placeholder']='condition',h[N(0x109)]=()=>{const O=N;this[O(0xed)][f][O(0xe4)]=h['value'];};const j=document[N(0xc5)](N(0xd0));j[N(0x10b)]=d,j['style']['cssText']=N(0xb1),j['value']=e['value'],j['placeholder']=N(0x8e),j['oninput']=()=>{const P=N;this['converters'][f][P(0x8e)]=j['value'];};const k=document[N(0xc5)](N(0xa0));k['className']=N(0xd4),k[N(0x100)]='Duplicate';const l=document[N(0xc5)]('img');l['src']=assetsPath+'icons/copy.svg',l['style'][N(0xc0)]='width:12px;\x20height:12px;',k[N(0xfb)](l),k['onclick']=()=>{const Q=N;this['converters']['splice'](f+0x1,0x0,{...this['converters'][f]}),this[Q(0xdc)]();};const m=document[N(0xc5)]('button');m['className']='signal-icon-btn',m[N(0x100)]=N(0xf8);const n=document[N(0xc5)](N(0x93));n['src']=assetsPath+N(0xe6),n[N(0xc3)]['cssText']='width:12px;\x20height:12px;',m[N(0xfb)](n),m[N(0xf2)]=()=>{const R=N;this['converters'][R(0xa6)](f,0x1),this['_renderConverterList']();},g['appendChild'](h),g[N(0xfb)](j),g[N(0xfb)](k),g[N(0xfb)](m),c[N(0xfb)](g);});}[y(0xa2)](){const S=y;this[S(0xed)]['push']({'key':'','value':''}),this[S(0xdc)]();}async['_selectNamedConverter'](){const T=y,c=BindingsEditor['namedConverters'];if(c['length']===0x0)return;let d='',e=null;const f=document[T(0xc5)]('div');f['style'][T(0xc0)]='display:flex;\x20flex-direction:column;\x20height:100%;\x20box-sizing:border-box;\x20font-size:12px;';const g=document['createElement'](T(0x10a));g['style'][T(0xc0)]='padding:6px\x208px\x204px;\x20color:#666;\x20font-size:11px;\x20border-bottom:1px\x20solid\x20#e0e0e0;\x20flex-shrink:0;',g[T(0xa4)]=T(0xfa),f[T(0xfb)](g);const h=document[T(0xc5)](T(0x10a));h[T(0xc3)]['cssText']=T(0x101),f[T(0xfb)](h);const i=m=>{const U=T;m['style']['background']='',m[U(0xc3)]['borderLeftColor']='transparent';},j=(m,n)=>{const V=T;if(e)i(e);e=m,m[V(0xc3)]['background']=V(0xe0),m['style'][V(0xdf)]='#0078d7',d=n;};for(const m of c){const n=document[T(0xc5)]('div');n[T(0xc3)]['cssText']=T(0xbd);const o=document[T(0xc5)]('div');o[T(0xc3)][T(0xc0)]=T(0xa3),o[T(0xa4)]=m[T(0xb6)],n[T(0xfb)](o);if(m['description']){const p=document[T(0xc5)]('div');p['style']['cssText']='color:#555;\x20font-size:11px;\x20margin-top:2px;',p[T(0xa4)]=m[T(0xad)],n['appendChild'](p);}if(m[T(0xf3)]&&Object['keys'](m[T(0xf3)])['length']>0x0){const q=document[T(0xc5)](T(0x10a));q['style'][T(0xc0)]=T(0xe9);for(const [r,s]of Object['entries'](m[T(0xf3)])){const t=document[T(0xc5)](T(0x102));t[T(0xc3)][T(0xc0)]='color:#555;\x20text-align:right;',t['textContent']=r;const u=document[T(0xc5)](T(0x102));u[T(0xc3)]['cssText']='color:#aaa;',u['textContent']='→';const w=document['createElement'](T(0x102));w[T(0xc3)]['cssText']='color:#0078d7;\x20font-weight:bold;',w[T(0xa4)]=String(s),q[T(0xfb)](t),q['appendChild'](u),q[T(0xfb)](w);}n['appendChild'](q);}n['onmouseenter']=()=>{const W=T;if(n!==e)n[W(0xc3)][W(0x9b)]=W(0xee);},n[T(0xe1)]=()=>{const X=T;if(n!==e)n[X(0xc3)]['background']='';},n[T(0xf2)]=()=>j(n,m['name']),h[T(0xfb)](n);}const l=await this[T(0xbb)]['openConfirmation'](f,{'x':0x64,'y':0x64,'width':0x140,'height':0x12c,'parent':this});l&&d&&(this['convertersString']=d,this['_getDomElement']('namedConverterInput')[T(0x8e)]=d,this['_bindingsRefresh']());}['_refresh'](){requestAnimationFrame(()=>{this['_bindingsRefresh']();});}async['showHistoric'](){const Y=y;let c=new BindingsEditorHistoric(this['historic']);const d=new AbortController();c[Y(0x100)]='Edit\x20historic\x20binding\x20to:\x20'+this[Y(0xc1)][Y(0xb6)];let e=await this['_shell']['openConfirmation'](c,{'x':0x64,'y':0x64,'width':0x1a4,'height':0x1fe,'parent':this,'abortSignal':d['signal'],'disableResize':!![],'cancelText':'Remove'});!e?this['historic']=null:this[Y(0xbf)]=c['historic'],this[Y(0xdb)]();}[y(0x9d)](){const Z=y,c=document['createElement'](Z(0xeb));c[Z(0xab)]=BindingsEditor['helpSections']['length']>0x0?bindingsEditorHelpHtml['replace'](Z(0xc6),BindingsEditor[Z(0x103)][Z(0x9e)]('')+Z(0xc6)):bindingsEditorHelpHtml,c['style'][Z(0xc0)]=Z(0x9f),this[Z(0xbb)]['openModal'](c,{'title':'Bindings\x20Editor\x20Help','parent':this,'x':-0x294,'y':-0x50,'width':0x276,'height':0x244});}}customElements[y(0xb9)](BindingsEditor['is'],BindingsEditor);
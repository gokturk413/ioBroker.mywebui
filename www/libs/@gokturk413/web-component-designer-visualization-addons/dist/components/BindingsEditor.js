const y=b;function a(){const a1=['none','invert','133468snKAzO','_signalListContainer','twoWay','title','_bindingTarget','binding','splice','button','_addConverter','condition','signal','color:#aaa;','appendChild','icons/delete.svg','push','text','_binding','fromEntries','signalProperty','bindableObjectNames','fullName','_serviceContainer','namedConverterInput','property','changedEvents','#f5f5f5','properties','icons/copy.svg','_getDomElement','div','_property','Duplicate','key','327522ISwPdu','slice','events','twoWayPossible','map','style','14130594lIUICY','oninput','padding:6px\x208px\x204px;\x20color:#666;\x20font-size:11px;\x20border-bottom:1px\x20solid\x20#e0e0e0;\x20flex-shrink:0;','2687943zBWCJo','showHistoric','abort','historicLabel','convertersString','srcdoc','_addSignal','height','_converterListContainer','join','createBindableObjectBrowser','onclick','keys','_renderSignalList','historic','3777992UEwKxZ','converter','_renderConverterList','_signalsToObjectNames','display:flex;\x20flex-direction:column;\x20height:100%;\x20box-sizing:border-box;\x20font-size:12px;','signal-icon-btn','1956532jKDiRT','_shell','color:#555;\x20font-size:11px;\x20margin-top:2px;','</div>\x0a</body>','attribute','14xZKltK','_parseObjectNames','iframe','signal-row','openModal','namedConverterRow','cssText','onmouseleave','textContent','font-family:monospace;\x20font-weight:bold;\x20color:#111;','_signals','expression2way','width:12px;\x20height:12px;','signal\x20path\x20(prefix:\x20?\x20=\x20signal\x20name\x20in\x20screen\x20property,\x20??\x20=\x20screen\x20property\x20value,\x20?$\x20=\x20signal\x20object\x20in\x20screen\x20property,\x20?@\x20=\x20screen\x20attribute,\x20#\x20=\x20signal\x20name\x20in\x20target\x20property,\x20##\x20=\x20target\x20property\x20value,\x20#$\x20=\x20signal\x20object\x20in\x20target\x20property,\x20#@\x20=\x20target\x20attribute)','namedConverterBrowse','_selectForRow','length','...','placeholder','select\x20signal...','display','background','openConfirmation','5uQXyRm','flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;','Remove','signal-name-input','_showHelp','_bindingsParse','padding:5px\x206px\x205px\x209px;\x20cursor:pointer;\x20border-radius:3px;\x20border-left:3px\x20solid\x20transparent;\x20margin-bottom:2px;','createElement','\x20if\x20empty)','forEach','objectNames','selectedObject','objectDoubleclicked','_syncSignals','_instanceServiceContainer','historicBtn','helpSections','type','indexOf','img','signalListContainer','className','input','variable\x20name\x20used\x20in\x20the\x20formula\x20(defaults\x20to\x20__','value','borderLeftColor','span','converters','expression','_bindingsRefresh','innerHTML','src','expressionTwoWay','name','492934GYEstg','writeBackSignal'];a=function(){return a1;};return a();}(function(c,d){const x=b,e=c();while(!![]){try{const f=-parseInt(x(0x114))/0x1+-parseInt(x(0x118))/0x2+parseInt(x(0x142))/0x3+parseInt(x(0x157))/0x4*(-parseInt(x(0xf2))/0x5)+parseInt(x(0x139))/0x6+-parseInt(x(0xdb))/0x7*(parseInt(x(0x151))/0x8)+parseInt(x(0x13f))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x80be7));import{BaseCustomWebComponentConstructorAppend,html,css}from'@node-projects/base-custom-webcomponent';import{BindingMode,BindingTarget,assetsPath}from'@gokturk413/web-component-designer';import{BindingsEditorHistoric}from'./BindingsEditorHistoric.js';function b(c,d){c=c-0xda;const e=a();let f=e[c];return f;}import{bindingsEditorHelpHtml}from'./BindingsEditorHelp.js';export class BindingsEditor extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
        }`;static ['is']='node-projects-visualization-bindings-editor';static [y(0x132)]={'twoWayPossible':Boolean,'twoWay':Boolean,'expression':String,'events':String,'invert':Boolean,'historic':Object};[y(0x13c)]=![];['twoWay']=![];['expression']='';[y(0x115)]='';[y(0x112)]='';[y(0x150)];[y(0xfc)]='';[y(0x13b)]='';['invert']=![];['converters']=[];static ['namedConverters']=[];static ['helpSections']=[];[y(0x146)];get['converter'](){const z=y;if(this['convertersString'])return this[z(0x146)];if(this[z(0x10d)]['length']>0x0)return Object[z(0x129)](this['converters']['map'](d=>[d[z(0x138)],d[z(0x10a)]]));return undefined;}[y(0x136)];['_binding'];[y(0x11c)];[y(0x12d)];['_instanceServiceContainer'];['_shell'];[y(0xe5)]=[];['_signalListContainer'];['_converterListContainer'];constructor(c,d,e,f,g,h,i={}){const A=y;super(),super['_restoreCachedInititalValues'](),this[A(0x136)]=c,this[A(0x128)]=d,this['_bindingTarget']=e,this[A(0x12d)]=f,this[A(0x100)]=g,this[A(0x158)]=h;i?.['namedConverters']===![]&&(this['_getDomElement'](A(0xe0))[A(0x13e)]['display']=A(0x116));const j=this['_getDomElement'](A(0x101));if(i?.['showHistoric']===![])j['style'][A(0xef)]=A(0x116);else i?.['historicLabel']&&(j[A(0xe3)]=i[A(0x145)]);}['ready'](){const B=y;this['_parseAttributesToProperties'](),this['_assignEvents'](),this['_signalListContainer']=this[B(0x134)](B(0x106)),this['_converterListContainer']=this['_getDomElement']('converterListContainer'),this[B(0x134)]('helpBtn')['onclick']=()=>this[B(0xf6)]();if(BindingsEditor['namedConverters']['length']===0x0)this[B(0x134)](B(0xe9))['style'][B(0xef)]='none';this[B(0x13c)]=![];if(this['_bindingTarget']==BindingTarget[B(0x12f)]||this['_bindingTarget']==BindingTarget[B(0xda)])this['twoWayPossible']=!![];if(this[B(0x128)]){this[B(0x11a)]=this['_binding']['mode']==BindingMode[B(0x11a)],this[B(0x10e)]=this[B(0x128)]['expression'],this[B(0x115)]=this[B(0x128)][B(0x115)],this[B(0x112)]=this[B(0x128)]['expressionTwoWay'],this['historic']=this['_binding'][B(0x150)],this[B(0x117)]=this['_binding']['invert'];if(this['_binding'][B(0x12b)])this[B(0xfc)]=this['_binding'][B(0x12b)]['join'](';');if(this['_binding'][B(0x152)]){if(typeof this['_binding'][B(0x152)]==='string')this['convertersString']=this[B(0x128)][B(0x152)];else for(let d in this[B(0x128)][B(0x152)]){this[B(0x10d)]['push']({'key':d,'value':this[B(0x128)][B(0x152)][d]});}}if(this[B(0x128)]['changedEvents']&&this['_binding'][B(0x130)][B(0xeb)])this[B(0x13b)]=this[B(0x128)]['changedEvents'][B(0x14b)](';');}if(this[B(0x10e)]){let e=this[B(0x134)](B(0x10e));this[B(0x10e)]['indexOf']('\x0a')>=0x0&&(e['style']['height']=0x3*0x11+'px');}if(this[B(0x112)]){let f=this[B(0x134)](B(0xe6));this[B(0x112)][B(0x104)]('\x0a')>=0x0&&(f['style'][B(0x149)]=0x3*0x11+'px');}this['_signals']=this[B(0xdc)](this[B(0xfc)]);if(this[B(0xe5)][B(0xeb)]===0x0)this['_signals'][B(0x126)]({'name':'','signal':''});this[B(0x14f)](),this['_renderConverterList'](),this[B(0xf7)]();}[y(0xdc)](c){if(!c)return[];return c['split'](';')['filter'](d=>d['length']>0x0)['map'](d=>{const C=b,e=d[C(0x104)](':');if(e>0x0)return{'name':d[C(0x13a)](0x0,e),'signal':d['slice'](e+0x1)};return{'name':'','signal':d};});}[y(0x154)](){const D=y;return this['_signals'][D(0x13d)](c=>c['name']?c[D(0x113)]+':'+c[D(0x122)]:c['signal'])[D(0x14b)](';');}[y(0x14f)](){const E=y,c=this[E(0x119)];c[E(0x110)]='',this[E(0xe5)][E(0xfb)]((d,e)=>{const F=E,f=document[F(0xf9)](F(0x135));f[F(0x107)]='signal-row';const g=document['createElement'](F(0x108));g[F(0x107)]=F(0xf5),g[F(0xed)]='__'+e,g['value']=d[F(0x113)],g[F(0x11b)]=F(0x109)+e+F(0xfa),g['oninput']=()=>{const G=F;this[G(0xe5)][e][G(0x113)]=g['value'],this['_syncSignals']();};const h=document['createElement'](F(0x108));h['className']='signal-path-input',h['value']=d['signal'],h['placeholder']='signal\x20path',h[F(0x11b)]=F(0xe8),h['oninput']=()=>{const H=F;this['_signals'][e]['signal']=h[H(0x10a)],this[H(0xff)]();};const j=document['createElement'](F(0x11f));j[F(0x107)]=F(0x156),j[F(0x11b)]=F(0x137);const k=document['createElement']('img');k['src']=assetsPath+F(0x133),k['style'][F(0xe1)]=F(0xe7),j['appendChild'](k),j[F(0x14d)]=()=>{const I=F;this[I(0xe5)][I(0x11e)](e+0x1,0x0,{...this[I(0xe5)][e]}),this['_syncSignals'](),this[I(0x14f)]();};const l=document['createElement'](F(0x11f));l[F(0x107)]='signal-select-btn',l[F(0xe3)]=F(0xec),l['title']='Browse\x20signal',l['onclick']=()=>this['_selectForRow'](e,h);const m=document[F(0xf9)](F(0x11f));m['className']='signal-icon-btn',m['title']=F(0xf4);const n=document[F(0xf9)](F(0x105));n['src']=assetsPath+F(0x125),n[F(0x13e)][F(0xe1)]=F(0xe7),m[F(0x124)](n),m['onclick']=()=>{const J=F;this[J(0xe5)][J(0x11e)](e,0x1),this[J(0xff)](),this['_renderSignalList']();},f[F(0x124)](g),f['appendChild'](h),f['appendChild'](l),f[F(0x124)](j),f['appendChild'](m),c['appendChild'](f);});}[y(0xff)](){const K=y;this[K(0xfc)]=this['_signalsToObjectNames'](),this['_bindingsRefresh']();}[y(0x148)](){const L=y;this[L(0xe5)][L(0x126)]({'name':'','signal':''}),this[L(0x14f)]();}async[y(0xea)](c,d){const M=y;let e=this['_shell'][M(0x14c)]();e['initialize'](this[M(0x12d)],this[M(0x100)],M(0x11d)),e[M(0x11b)]=M(0xee);const f=new AbortController();e[M(0xfe)]['on'](()=>{const N=M;f[N(0x144)]();let h='';if(e[N(0xfd)]['specialType']=='signalProperty')h='?';else e[N(0xfd)]['bindabletype']===N(0x12f)&&(h='??');this['_signals'][c]['signal']=h+e[N(0xfd)][N(0x12c)],d[N(0x10a)]=this['_signals'][c]['signal'],this[N(0xff)]();});let g=await this['_shell']['openConfirmation'](e,{'x':0x64,'y':0x64,'width':0x190,'height':0x12c,'parent':this,'abortSignal':f['signal']});if(g){let h='';if(e[M(0xfd)]['specialType']==M(0x12a))h='?';else e[M(0xfd)]['bindabletype']===M(0x12f)&&(h='??');this[M(0xe5)][c][M(0x122)]=h+e[M(0xfd)][M(0x12c)],d[M(0x10a)]=this[M(0xe5)][c][M(0x122)],this['_syncSignals']();}}[y(0x153)](){const O=y,c=this[O(0x14a)];c['innerHTML']='';const d=this['_property']?.[O(0x103)]==='color'?'color':O(0x127);this[O(0x10d)][O(0xfb)]((e,f)=>{const P=O,g=document[P(0xf9)]('div');g[P(0x107)]=P(0xde);const h=document['createElement'](P(0x108));h[P(0x13e)]['cssText']=P(0xf3),h[P(0x10a)]=e[P(0x138)],h['placeholder']=P(0x121),h[P(0x140)]=()=>{const Q=P;this['converters'][f][Q(0x138)]=h[Q(0x10a)];};const j=document['createElement'](P(0x108));j[P(0x103)]=d,j[P(0x13e)]['cssText']=P(0xf3),j['value']=e[P(0x10a)],j[P(0xed)]=P(0x10a),j['oninput']=()=>{const R=P;this[R(0x10d)][f][R(0x10a)]=j['value'];};const k=document['createElement']('button');k[P(0x107)]='signal-icon-btn',k[P(0x11b)]=P(0x137);const l=document['createElement'](P(0x105));l['src']=assetsPath+'icons/copy.svg',l[P(0x13e)][P(0xe1)]='width:12px;\x20height:12px;',k['appendChild'](l),k['onclick']=()=>{const S=P;this[S(0x10d)][S(0x11e)](f+0x1,0x0,{...this[S(0x10d)][f]}),this[S(0x153)]();};const m=document[P(0xf9)]('button');m[P(0x107)]='signal-icon-btn',m['title']=P(0xf4);const n=document['createElement'](P(0x105));n[P(0x111)]=assetsPath+P(0x125),n['style']['cssText']='width:12px;\x20height:12px;',m[P(0x124)](n),m[P(0x14d)]=()=>{const T=P;this[T(0x10d)]['splice'](f,0x1),this['_renderConverterList']();},g['appendChild'](h),g[P(0x124)](j),g[P(0x124)](k),g[P(0x124)](m),c[P(0x124)](g);});}[y(0x120)](){const U=y;this[U(0x10d)]['push']({'key':'','value':''}),this['_renderConverterList']();}async['_selectNamedConverter'](){const V=y,c=BindingsEditor['namedConverters'];if(c['length']===0x0)return;let d='',e=null;const f=document['createElement']('div');f[V(0x13e)]['cssText']=V(0x155);const g=document['createElement']('div');g['style']['cssText']=V(0x141),g['textContent']='Select\x20a\x20converter\x20and\x20confirm\x20with\x20OK.',f[V(0x124)](g);const h=document['createElement'](V(0x135));h[V(0x13e)][V(0xe1)]='flex:1;\x20overflow-y:auto;\x20padding:4px;',f[V(0x124)](h);const i=m=>{m['style']['background']='',m['style']['borderLeftColor']='transparent';},j=(m,n)=>{const W=V;if(e)i(e);e=m,m[W(0x13e)][W(0xf0)]='#e8f4fd',m[W(0x13e)][W(0x10b)]='#0078d7',d=n;};for(const m of c){const n=document['createElement']('div');n[V(0x13e)][V(0xe1)]=V(0xf8);const o=document['createElement'](V(0x135));o['style']['cssText']=V(0xe4),o['textContent']=m['name'],n['appendChild'](o);if(m['description']){const p=document[V(0xf9)](V(0x135));p['style']['cssText']=V(0x159),p[V(0xe3)]=m['description'],n['appendChild'](p);}if(m['converter']&&Object[V(0x14e)](m['converter'])['length']>0x0){const q=document['createElement']('div');q[V(0x13e)]['cssText']='display:grid;\x20grid-template-columns:max-content\x20max-content\x201fr;\x20gap:1px\x206px;\x20margin-top:4px;\x20padding:4px\x206px;\x20background:#f5f5f5;\x20border-radius:2px;\x20font-family:monospace;\x20font-size:11px;\x20color:#333;';for(const [r,s]of Object['entries'](m[V(0x152)])){const t=document['createElement']('span');t['style']['cssText']='color:#555;\x20text-align:right;',t[V(0xe3)]=r;const u=document[V(0xf9)]('span');u[V(0x13e)][V(0xe1)]=V(0x123),u[V(0xe3)]='→';const w=document[V(0xf9)](V(0x10c));w[V(0x13e)]['cssText']='color:#0078d7;\x20font-weight:bold;',w['textContent']=String(s),q[V(0x124)](t),q['appendChild'](u),q['appendChild'](w);}n['appendChild'](q);}n['onmouseenter']=()=>{const X=V;if(n!==e)n[X(0x13e)][X(0xf0)]=X(0x131);},n[V(0xe2)]=()=>{const Y=V;if(n!==e)n[Y(0x13e)]['background']='';},n[V(0x14d)]=()=>j(n,m['name']),h['appendChild'](n);}const l=await this['_shell'][V(0xf1)](f,{'x':0x64,'y':0x64,'width':0x140,'height':0x12c,'parent':this});l&&d&&(this['convertersString']=d,this[V(0x134)](V(0x12e))['value']=d,this[V(0x10f)]());}['_refresh'](){requestAnimationFrame(()=>{this['_bindingsRefresh']();});}async[y(0x143)](){const Z=y;let c=new BindingsEditorHistoric(this['historic']);const d=new AbortController();c['title']='Edit\x20historic\x20binding\x20to:\x20'+this[Z(0x136)]['name'];let e=await this[Z(0x158)]['openConfirmation'](c,{'x':0x64,'y':0x64,'width':0x1a4,'height':0x1fe,'parent':this,'abortSignal':d[Z(0x122)],'disableResize':!![],'cancelText':'Remove'});!e?this['historic']=null:this[Z(0x150)]=c['historic'],this['_bindingsRefresh']();}[y(0xf6)](){const a0=y,c=document['createElement'](a0(0xdd));c[a0(0x147)]=BindingsEditor['helpSections'][a0(0xeb)]>0x0?bindingsEditorHelpHtml['replace'](a0(0x15a),BindingsEditor[a0(0x102)][a0(0x14b)]('')+a0(0x15a)):bindingsEditorHelpHtml,c[a0(0x13e)][a0(0xe1)]='width:100%;\x20height:100%;\x20border:none;\x20display:block;',this[a0(0x158)][a0(0xdf)](c,{'title':'Bindings\x20Editor\x20Help','parent':this,'x':-0x294,'y':-0x50,'width':0x276,'height':0x244});}}customElements['define'](BindingsEditor['is'],BindingsEditor);
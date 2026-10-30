const y=b;(function(c,d){const x=b,e=c();while(!![]){try{const f=-parseInt(x(0x11e))/0x1+-parseInt(x(0x15f))/0x2+parseInt(x(0x122))/0x3*(-parseInt(x(0x141))/0x4)+parseInt(x(0x110))/0x5*(parseInt(x(0x12d))/0x6)+-parseInt(x(0x162))/0x7+parseInt(x(0x119))/0x8*(-parseInt(x(0x131))/0x9)+parseInt(x(0x148))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x95d9f));import{BaseCustomWebComponentConstructorAppend,html,css}from'@node-projects/base-custom-webcomponent';function a(){const a2=['signal','historicBtn','_instanceServiceContainer','_converterListContainer','_bindingsParse','namedConverters','textContent','4440YLRPMc','style','color:#aaa;','_signalListContainer','className','_selectForRow','div','43623010mzTdhC','invert','signalListContainer','twoWay','properties','key','value','slice','onclick','#f5f5f5','name','button','height','width:12px;\x20height:12px;','selectedObject','#e8f4fd','span','font-family:monospace;\x20font-weight:bold;\x20color:#111;','join','replace','none','color','_selectNamedConverter','1397212GJyuZj','_bindingTarget','</div>\x0a</body>','7195650AIVrmW','entries','converter','_shell','signal-icon-btn','Browse\x20signal','_showHelp','_signalsToObjectNames','specialType','oninput','objectNames','flex:1;\x20overflow-y:auto;\x20padding:4px;','placeholder','iframe','_getDomElement','push','type','converters','historic','forEach','namedConverterRow','Duplicate','display','expression','flex:1\x201\x20auto;\x20height:22px;\x20box-sizing:border-box;','signalProperty','color:#0078d7;\x20font-weight:bold;','events','twoWayPossible','createElement','\x20if\x20empty)','innerHTML','splice','fullName','signal\x20path\x20(prefix:\x20?\x20=\x20signal\x20name\x20in\x20screen\x20property,\x20??\x20=\x20screen\x20property\x20value,\x20?$\x20=\x20signal\x20object\x20in\x20screen\x20property,\x20?@\x20=\x20screen\x20attribute,\x20#\x20=\x20signal\x20name\x20in\x20target\x20property,\x20##\x20=\x20target\x20property\x20value,\x20#$\x20=\x20signal\x20object\x20in\x20target\x20property,\x20#@\x20=\x20target\x20attribute)','appendChild','filter','55980HacQMX','split','_signals','map','_addSignal','onmouseleave','convertersString','keys','helpSections','40IFPxOl','_serviceContainer','changedEvents','signal-row','condition','878145IYBabJ','_binding','property','cssText','1521trxtBv','_bindingsRefresh','color:#555;\x20font-size:11px;\x20margin-top:2px;','_renderSignalList','openConfirmation','define','signal\x20path','img','writeBackSignal','_syncSignals','_property','6EIaXTB','abort','src','...','1066023hjjWAP','length','icons/delete.svg','_assignEvents','_renderConverterList','signal-path-input','bindableObjectNames','title','input'];a=function(){return a2;};return a();}import{BindingMode,BindingTarget,assetsPath}from'@gokturk413/web-component-designer';function b(c,d){c=c-0xf2;const e=a();let f=e[c];return f;}import{BindingsEditorHistoric}from'./BindingsEditorHistoric.js';import{bindingsEditorHelpHtml}from'./BindingsEditorHelp.js';export class BindingsEditor extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
        }`;static ['is']='node-projects-visualization-bindings-editor';static [y(0x14c)]={'twoWayPossible':Boolean,'twoWay':Boolean,'expression':String,'events':String,'invert':Boolean,'historic':Object};['twoWayPossible']=![];[y(0x14b)]=![];[y(0x102)]='';[y(0x12a)]='';['expressionTwoWay']='';[y(0xfd)];['objectNames']='';['events']='';[y(0x149)]=![];['converters']=[];static ['namedConverters']=[];static [y(0x118)]=[];[y(0x116)];get['converter'](){const z=y;if(this[z(0x116)])return this[z(0x116)];if(this[z(0xfc)]['length']>0x0)return Object['fromEntries'](this['converters'][z(0x113)](d=>[d['key'],d[z(0x14e)]]));return undefined;}['_property'];['_binding'];[y(0x160)];['_serviceContainer'];[y(0x13c)];[y(0x165)];['_signals']=[];[y(0x144)];[y(0x13d)];constructor(c,d,e,f,g,h,i={}){const A=y;super(),super['_restoreCachedInititalValues'](),this['_property']=c,this[A(0x11f)]=d,this['_bindingTarget']=e,this[A(0x11a)]=f,this[A(0x13c)]=g,this[A(0x165)]=h;i?.[A(0x13f)]===![]&&(this['_getDomElement'](A(0xff))[A(0x142)]['display']='none');const j=this[A(0xf9)](A(0x13b));if(i?.['showHistoric']===![])j['style'][A(0x101)]='none';else i?.['historicLabel']&&(j[A(0x140)]=i['historicLabel']);}['ready'](){const B=y;this['_parseAttributesToProperties'](),this[B(0x134)](),this['_signalListContainer']=this['_getDomElement'](B(0x14a)),this[B(0x13d)]=this[B(0xf9)]('converterListContainer'),this[B(0xf9)]('helpBtn')[B(0x150)]=()=>this[B(0x168)]();if(BindingsEditor['namedConverters']['length']===0x0)this[B(0xf9)]('namedConverterBrowse')[B(0x142)]['display']=B(0x15c);this['twoWayPossible']=![];if(this[B(0x160)]==BindingTarget[B(0x120)]||this['_bindingTarget']==BindingTarget['attribute'])this[B(0x107)]=!![];if(this['_binding']){this['twoWay']=this['_binding']['mode']==BindingMode[B(0x14b)],this['expression']=this['_binding'][B(0x102)],this[B(0x12a)]=this['_binding'][B(0x12a)],this['expressionTwoWay']=this['_binding']['expressionTwoWay'],this[B(0xfd)]=this['_binding']['historic'],this[B(0x149)]=this[B(0x11f)]['invert'];if(this[B(0x11f)][B(0x137)])this[B(0xf5)]=this['_binding'][B(0x137)]['join'](';');if(this[B(0x11f)][B(0x164)]){if(typeof this[B(0x11f)]['converter']==='string')this['convertersString']=this[B(0x11f)][B(0x164)];else for(let d in this['_binding'][B(0x164)]){this['converters'][B(0xfa)]({'key':d,'value':this['_binding'][B(0x164)][d]});}}if(this['_binding']['changedEvents']&&this['_binding']['changedEvents']['length'])this[B(0x106)]=this[B(0x11f)][B(0x11b)]['join'](';');}if(this['expression']){let e=this[B(0xf9)](B(0x102));this[B(0x102)]['indexOf']('\x0a')>=0x0&&(e['style'][B(0x154)]=0x3*0x11+'px');}if(this['expressionTwoWay']){let f=this[B(0xf9)]('expression2way');this['expressionTwoWay']['indexOf']('\x0a')>=0x0&&(f[B(0x142)]['height']=0x3*0x11+'px');}this['_signals']=this['_parseObjectNames'](this[B(0xf5)]);if(this['_signals'][B(0x132)]===0x0)this[B(0x112)][B(0xfa)]({'name':'','signal':''});this[B(0x125)](),this[B(0x135)](),this[B(0x13e)]();}['_parseObjectNames'](c){const C=y;if(!c)return[];return c[C(0x111)](';')[C(0x10f)](d=>d[C(0x132)]>0x0)['map'](d=>{const D=C,e=d['indexOf'](':');if(e>0x0)return{'name':d[D(0x14f)](0x0,e),'signal':d[D(0x14f)](e+0x1)};return{'name':'','signal':d};});}['_signalsToObjectNames'](){const E=y;return this['_signals']['map'](c=>c[E(0x152)]?c[E(0x152)]+':'+c[E(0x13a)]:c[E(0x13a)])['join'](';');}[y(0x125)](){const F=y,c=this[F(0x144)];c['innerHTML']='',this['_signals'][F(0xfe)]((d,e)=>{const G=F,f=document['createElement']('div');f['className']=G(0x11c);const g=document[G(0x108)]('input');g[G(0x145)]='signal-name-input',g['placeholder']='__'+e,g[G(0x14e)]=d['name'],g['title']='variable\x20name\x20used\x20in\x20the\x20formula\x20(defaults\x20to\x20__'+e+G(0x109),g[G(0xf4)]=()=>{const H=G;this['_signals'][e][H(0x152)]=g[H(0x14e)],this['_syncSignals']();};const h=document['createElement'](G(0x139));h['className']=G(0x136),h[G(0x14e)]=d['signal'],h['placeholder']=G(0x128),h[G(0x138)]=G(0x10d),h[G(0xf4)]=()=>{const I=G;this['_signals'][e]['signal']=h[I(0x14e)],this[I(0x12b)]();};const j=document['createElement'](G(0x153));j['className']=G(0x166),j['title']=G(0x100);const k=document[G(0x108)]('img');k[G(0x12f)]=assetsPath+'icons/copy.svg',k['style']['cssText']='width:12px;\x20height:12px;',j['appendChild'](k),j[G(0x150)]=()=>{const J=G;this['_signals']['splice'](e+0x1,0x0,{...this[J(0x112)][e]}),this['_syncSignals'](),this['_renderSignalList']();};const l=document['createElement'](G(0x153));l['className']='signal-select-btn',l['textContent']=G(0x130),l['title']=G(0x167),l['onclick']=()=>this[G(0x146)](e,h);const m=document['createElement']('button');m['className']='signal-icon-btn',m[G(0x138)]='Remove';const n=document[G(0x108)](G(0x129));n[G(0x12f)]=assetsPath+G(0x133),n[G(0x142)][G(0x121)]=G(0x155),m['appendChild'](n),m['onclick']=()=>{this['_signals']['splice'](e,0x1),this['_syncSignals'](),this['_renderSignalList']();},f[G(0x10e)](g),f['appendChild'](h),f['appendChild'](l),f['appendChild'](j),f['appendChild'](m),c['appendChild'](f);});}[y(0x12b)](){const K=y;this['objectNames']=this[K(0xf2)](),this[K(0x123)]();}[y(0x114)](){const L=y;this['_signals'][L(0xfa)]({'name':'','signal':''}),this[L(0x125)]();}async['_selectForRow'](c,d){const M=y;let e=this[M(0x165)]['createBindableObjectBrowser']();e['initialize'](this[M(0x11a)],this[M(0x13c)],'binding'),e[M(0x138)]='select\x20signal...';const f=new AbortController();e['objectDoubleclicked']['on'](()=>{const N=M;f[N(0x12e)]();let h='';if(e[N(0x156)][N(0xf3)]=='signalProperty')h='?';else e['selectedObject']['bindabletype']==='property'&&(h='??');this['_signals'][c]['signal']=h+e['selectedObject']['fullName'],d[N(0x14e)]=this['_signals'][c]['signal'],this[N(0x12b)]();});let g=await this['_shell'][M(0x126)](e,{'x':0x64,'y':0x64,'width':0x190,'height':0x12c,'parent':this,'abortSignal':f[M(0x13a)]});if(g){let h='';if(e['selectedObject'][M(0xf3)]==M(0x104))h='?';else e['selectedObject']['bindabletype']===M(0x120)&&(h='??');this['_signals'][c]['signal']=h+e['selectedObject'][M(0x10c)],d[M(0x14e)]=this[M(0x112)][c]['signal'],this['_syncSignals']();}}['_renderConverterList'](){const O=y,c=this[O(0x13d)];c[O(0x10a)]='';const d=this[O(0x12c)]?.[O(0xfb)]===O(0x15d)?O(0x15d):'text';this[O(0xfc)][O(0xfe)]((e,f)=>{const P=O,g=document['createElement'](P(0x147));g[P(0x145)]=P(0x11c);const h=document[P(0x108)](P(0x139));h['style']['cssText']=P(0x103),h[P(0x14e)]=e[P(0x14d)],h['placeholder']=P(0x11d),h['oninput']=()=>{const Q=P;this['converters'][f]['key']=h[Q(0x14e)];};const j=document['createElement']('input');j['type']=d,j[P(0x142)][P(0x121)]=P(0x103),j['value']=e['value'],j[P(0xf7)]='value',j[P(0xf4)]=()=>{const R=P;this['converters'][f]['value']=j[R(0x14e)];};const k=document['createElement'](P(0x153));k[P(0x145)]=P(0x166),k[P(0x138)]='Duplicate';const l=document[P(0x108)]('img');l[P(0x12f)]=assetsPath+'icons/copy.svg',l[P(0x142)][P(0x121)]='width:12px;\x20height:12px;',k[P(0x10e)](l),k[P(0x150)]=()=>{const S=P;this[S(0xfc)][S(0x10b)](f+0x1,0x0,{...this[S(0xfc)][f]}),this[S(0x135)]();};const m=document[P(0x108)]('button');m['className']=P(0x166),m[P(0x138)]='Remove';const n=document[P(0x108)](P(0x129));n[P(0x12f)]=assetsPath+P(0x133),n['style']['cssText']=P(0x155),m['appendChild'](n),m[P(0x150)]=()=>{const T=P;this[T(0xfc)]['splice'](f,0x1),this[T(0x135)]();},g['appendChild'](h),g[P(0x10e)](j),g['appendChild'](k),g[P(0x10e)](m),c['appendChild'](g);});}['_addConverter'](){const U=y;this[U(0xfc)][U(0xfa)]({'key':'','value':''}),this[U(0x135)]();}async[y(0x15e)](){const V=y,c=BindingsEditor['namedConverters'];if(c[V(0x132)]===0x0)return;let d='',e=null;const f=document[V(0x108)](V(0x147));f[V(0x142)][V(0x121)]='display:flex;\x20flex-direction:column;\x20height:100%;\x20box-sizing:border-box;\x20font-size:12px;';const g=document['createElement']('div');g[V(0x142)]['cssText']='padding:6px\x208px\x204px;\x20color:#666;\x20font-size:11px;\x20border-bottom:1px\x20solid\x20#e0e0e0;\x20flex-shrink:0;',g['textContent']='Select\x20a\x20converter\x20and\x20confirm\x20with\x20OK.',f[V(0x10e)](g);const h=document['createElement'](V(0x147));h[V(0x142)][V(0x121)]=V(0xf6),f[V(0x10e)](h);const i=m=>{const W=V;m[W(0x142)]['background']='',m['style']['borderLeftColor']='transparent';},j=(m,n)=>{const X=V;if(e)i(e);e=m,m[X(0x142)]['background']=X(0x157),m[X(0x142)]['borderLeftColor']='#0078d7',d=n;};for(const m of c){const n=document['createElement'](V(0x147));n[V(0x142)]['cssText']='padding:5px\x206px\x205px\x209px;\x20cursor:pointer;\x20border-radius:3px;\x20border-left:3px\x20solid\x20transparent;\x20margin-bottom:2px;';const o=document['createElement'](V(0x147));o['style']['cssText']=V(0x159),o['textContent']=m['name'],n['appendChild'](o);if(m['description']){const p=document[V(0x108)]('div');p[V(0x142)][V(0x121)]=V(0x124),p['textContent']=m['description'],n[V(0x10e)](p);}if(m[V(0x164)]&&Object[V(0x117)](m['converter'])[V(0x132)]>0x0){const q=document['createElement']('div');q[V(0x142)]['cssText']='display:grid;\x20grid-template-columns:max-content\x20max-content\x201fr;\x20gap:1px\x206px;\x20margin-top:4px;\x20padding:4px\x206px;\x20background:#f5f5f5;\x20border-radius:2px;\x20font-family:monospace;\x20font-size:11px;\x20color:#333;';for(const [r,s]of Object[V(0x163)](m['converter'])){const t=document['createElement'](V(0x158));t[V(0x142)][V(0x121)]='color:#555;\x20text-align:right;',t['textContent']=r;const u=document[V(0x108)](V(0x158));u['style']['cssText']=V(0x143),u[V(0x140)]='→';const w=document['createElement']('span');w[V(0x142)][V(0x121)]=V(0x105),w['textContent']=String(s),q[V(0x10e)](t),q['appendChild'](u),q['appendChild'](w);}n['appendChild'](q);}n['onmouseenter']=()=>{const Y=V;if(n!==e)n['style']['background']=Y(0x151);},n[V(0x115)]=()=>{const Z=V;if(n!==e)n[Z(0x142)]['background']='';},n[V(0x150)]=()=>j(n,m['name']),h['appendChild'](n);}const l=await this[V(0x165)]['openConfirmation'](f,{'x':0x64,'y':0x64,'width':0x140,'height':0x12c,'parent':this});l&&d&&(this['convertersString']=d,this[V(0xf9)]('namedConverterInput')['value']=d,this[V(0x123)]());}['_refresh'](){requestAnimationFrame(()=>{this['_bindingsRefresh']();});}async['showHistoric'](){const a0=y;let c=new BindingsEditorHistoric(this[a0(0xfd)]);const d=new AbortController();c[a0(0x138)]='Edit\x20historic\x20binding\x20to:\x20'+this['_property']['name'];let e=await this['_shell']['openConfirmation'](c,{'x':0x64,'y':0x64,'width':0x1a4,'height':0x1fe,'parent':this,'abortSignal':d[a0(0x13a)],'disableResize':!![],'cancelText':'Remove'});!e?this[a0(0xfd)]=null:this['historic']=c['historic'],this[a0(0x123)]();}[y(0x168)](){const a1=y,c=document['createElement'](a1(0xf8));c['srcdoc']=BindingsEditor[a1(0x118)]['length']>0x0?bindingsEditorHelpHtml[a1(0x15b)](a1(0x161),BindingsEditor[a1(0x118)][a1(0x15a)]('')+a1(0x161)):bindingsEditorHelpHtml,c['style'][a1(0x121)]='width:100%;\x20height:100%;\x20border:none;\x20display:block;',this['_shell']['openModal'](c,{'title':'Bindings\x20Editor\x20Help','parent':this,'x':-0x294,'y':-0x50,'width':0x276,'height':0x244});}}customElements[y(0x127)](BindingsEditor['is'],BindingsEditor);
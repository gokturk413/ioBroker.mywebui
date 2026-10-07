function a(){const M=['def','group-rows','boolean','_bindingsRefresh','_createPropRow','changed','_renderList','defaultInternal','style','substring','refresh','checked','appendChild','11562782gAmnNh','prop-row','string','set','date','_propList','get','title','2600808AJFltm','none','internal','number','propertiesObj','object','87585lhjlxo','setProperties','has','option','text','selected','length','getProperties','push','div','add','[\x22a\x22,\x20\x22b\x22]','properties','value','checkbox','8IKERdu','delete','textContent','default','splice','values','click','_bindingsParse','name','enum','createElement','1544248lyVUpx','type','addProp','down','className','iobroker-webui-control-properties-editor','parse','change','display','76nOlZUN','input','1510504bKqxAZ','screen','4828500GaCkqW','5793723hgkuXH','addEventListener'];a=function(){return M;};return a();}const v=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=parseInt(t(0xdf))/0x1+-parseInt(t(0xea))/0x2+parseInt(t(0xc5))/0x3*(parseInt(t(0xe8))/0x4)+-parseInt(t(0xec))/0x5+-parseInt(t(0xbf))/0x6+parseInt(t(0xb7))/0x7*(parseInt(t(0xd4))/0x8)+-parseInt(t(0xed))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe8924));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';const notAllowedChars='!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^';function b(c,d){c=c-0xac;const e=a();let f=e[c];return f;}export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
    :host {
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        height: 100%;
        padding: 5px;
        box-sizing: border-box;
        gap: 2px;
        font-size: 10px;
    }
    .header-row {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 15px 30px 10px 10px;
        gap: 2px;
        flex-shrink: 0;
    }
    .header-row div {
        font-size: 10px;
    }
    .prop-row {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 15px 30px 10px 10px;
        gap: 2px;
    }
    .group-header {
        display: flex;
        align-items: center;
        gap: 3px;
        background: #1e2d3d;
        color: #7c9cbf;
        font-weight: bold;
        cursor: pointer;
        padding: 3px 6px;
        margin-top: 4px;
        user-select: none;
        font-size: 13px;
        border-left: 2px solid #3e6db4;
    }
    .group-header:hover {
        background: #162433;
    }
    .group-rows {
        padding-left: 6px;
    }
    input {
        width: 100%;
        box-sizing: border-box;
    }
    button {
        padding: 0;
    }
    .btn-row {
        display: flex;
        gap: 2px;
        margin-top: 2px;
        flex-shrink: 0;
    }
    .btn-row button {
        flex: 1;
    }`;static ['template']=html`
        <div class="header-row">
            <div>name</div>
            <div>type</div>
            <div title="default">def.</div>
            <div title="internal">int</div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div id="prop-list"></div>
        <div class="btn-row" css:display="[[this.properties ? 'flex' : 'none']]">
            <button @click="addProp">add...</button>
            <button @click="addEnumProp">add enum...</button>
        </div>`;constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const u=b;this[u(0xdb)](),this['_assignEvents'](),this[u(0xbc)]=this['_getDomElement']('prop-list');}[v(0xd1)];['propertiesObj'];[v(0xb1)];['_collapsedGroups']=new Set();['_propList'];[v(0xc6)](c){const w=v;this[w(0xc3)]=c;if(c){this['properties']=[];for(let d in c){let e=c[d];this['properties']['push']({'name':d,'type':e[w(0xe0)],'values':JSON['stringify'](e['values']),'def':e[w(0xd7)],'internal':e['internal']});}}else this['properties']=null;this[w(0xad)](),this[w(0xb0)]();}[v(0xb4)](){const x=v;this['_bindingsRefresh'](),this[x(0xb0)]();}[v(0xe1)](){const y=v;let c={'name':'','type':y(0xb9)};if(this[y(0xb1)])c[y(0xc1)]=!![];this[y(0xd1)][y(0xcd)](c),this[y(0xad)](),this['_renderList']();}['addEnumProp'](){const z=v;let c={'name':'','type':'enum','values':z(0xd0)};if(this[z(0xb1)])c[z(0xc1)]=!![];this['properties'][z(0xcd)](c),this['_bindingsRefresh'](),this['_renderList']();}['removeProp'](c){const A=v;this[A(0xd1)][A(0xd8)](c,0x1),this['_renderList'](),this['changed']();}['up'](c){const B=v;if(c>0x0){const d=this['properties'][c];this['properties'][B(0xd8)](c,0x1),this[B(0xd1)]['splice'](--c,0x0,d),this['_renderList'](),this[B(0xaf)]();}}[v(0xe2)](c){const C=v;if(c<this['properties']['length']-0x1){const d=this['properties'][c];this['properties']['splice'](c,0x1),this[C(0xd1)][C(0xd8)](++c,0x0,d),this[C(0xb0)](),this[C(0xaf)]();}}['_renderList'](){const D=v;if(!this[D(0xbc)])return;this['_propList']['innerHTML']='';if(!this[D(0xd1)])return;const c=new Map(),d=[];for(let e=0x0;e<this[D(0xd1)][D(0xcb)];e++){const f=this[D(0xd1)][e],g=f['name']?f['name']['indexOf']('_'):-0x1;if(g>0x0){const h=f[D(0xdc)][D(0xb3)](0x0,g);if(!c[D(0xc7)](h))c[D(0xba)](h,[]);c[D(0xbd)](h)[D(0xcd)]({'item':f,'index':e});}else d[D(0xcd)]({'item':f,'index':e});}for(const {item:j,index:k}of d){this['_propList'][D(0xb6)](this[D(0xae)](j,k));}for(const [l,m]of c){const n=this['_collapsedGroups']['has'](l),o=document['createElement']('div'),p=document['createElement']('div');p[D(0xe3)]='group-header',p[D(0xd6)]=(n?'▸\x20':'▾\x20')+l,p['title']=l,p['onclick']=()=>{const E=D;if(this['_collapsedGroups'][E(0xc7)](l))this['_collapsedGroups'][E(0xd5)](l);else this['_collapsedGroups'][E(0xcf)](l);this[E(0xb0)]();},o[D(0xb6)](p);if(!n){const q=document[D(0xde)](D(0xce));q[D(0xe3)]=D(0xf0);for(const {item:r,index:s}of m){q['appendChild'](this[D(0xae)](r,s));}o[D(0xb6)](q);}this[D(0xbc)][D(0xb6)](o);}}['_createPropRow'](c,d){const F=v,e=document['createElement'](F(0xce));e['className']=F(0xb8);const f=document[F(0xde)](F(0xe9));f['value']=c[F(0xdc)]??'',f[F(0xee)](F(0xe9),()=>{const G=F;c[G(0xdc)]=f['value'],this[G(0xaf)]();}),f['addEventListener']('blur',()=>{this['_renderList']();}),e[F(0xb6)](f);const g=document['createElement']('select');g[F(0xb2)]['display']=c[F(0xe0)]==='enum'?F(0xc0):'';for(const n of[F(0xb9),'boolean',F(0xc2),'color',F(0xbb),'signal',F(0xeb),F(0xc4)]){const o=document['createElement'](F(0xc8));o['value']=n,o['textContent']=n;if(c['type']===n)o[F(0xca)]=!![];g[F(0xb6)](o);}const h=document[F(0xde)](F(0xe9));h[F(0xb2)][F(0xe7)]=c[F(0xe0)]===F(0xdd)?'':'none',h['value']=c['values']??'',h[F(0xee)]('input',()=>{const H=F;c['values']=h[H(0xd2)],this['changed']();}),g[F(0xee)](F(0xe6),()=>{const I=F;c[I(0xe0)]=g[I(0xd2)],g['style'][I(0xe7)]=c[I(0xe0)]==='enum'?'none':'',h['style'][I(0xe7)]=c['type']==='enum'?'':'none',this['changed']();}),e['appendChild'](g),e[F(0xb6)](h);const i=document[F(0xde)](F(0xe9));i[F(0xe0)]=F(0xc9),i['title']=F(0xd7),i[F(0xd2)]=c['def']??'',i[F(0xee)](F(0xe9),()=>{const J=F;c['def']=i['value'],this[J(0xaf)]();}),e[F(0xb6)](i);const j=document['createElement']('input');j['type']=F(0xd3),j[F(0xb2)]['margin']='0',j[F(0xbe)]='internal',j['checked']=!!c[F(0xc1)],j['addEventListener'](F(0xe6),()=>{const K=F;c[K(0xc1)]=j[K(0xb5)],this['changed']();}),e[F(0xb6)](j);const k=document[F(0xde)]('button');k['textContent']='del',k[F(0xee)](F(0xda),()=>this['removeProp'](d)),e[F(0xb6)](k);const l=document['createElement']('button');l[F(0xd6)]='↑',l[F(0xee)](F(0xda),()=>this['up'](d)),e[F(0xb6)](l);const m=document[F(0xde)]('button');return m['textContent']='↓',m['addEventListener'](F(0xda),()=>this[F(0xe2)](d)),e[F(0xb6)](m),e;}['changed'](){const L=v;if(this['propertiesObj'])for(let d in this['propertiesObj']){delete this['propertiesObj'][d];}for(let e of this[L(0xd1)]){if(e['name']){for(let g of notAllowedChars)e[L(0xdc)]=e[L(0xdc)]['replaceAll'](g,'');e['name']=e['name'][0x0]['toLowerCase']()+e[L(0xdc)][L(0xb3)](0x1);let f={'type':e['type']};if(e[L(0xef)]){if(e[L(0xe0)]=='number')f['default']=parseFloat(e[L(0xef)]);else{if(e[L(0xe0)]==L(0xac))f[L(0xd7)]=e[L(0xef)]=='true';else f['default']=e['def'];}}if(e[L(0xc1)])f[L(0xc1)]=!![];e[L(0xe0)]==L(0xdd)&&(f[L(0xd9)]=JSON[L(0xe5)](e[L(0xd9)])),this['propertiesObj'][e['name']]=f;}}}[v(0xcc)](){return this['changed'](),this['propertiesObj']?{...this['propertiesObj']}:{};}}customElements['define'](v(0xe4),IobrokerWebuiControlPropertiesEditor);
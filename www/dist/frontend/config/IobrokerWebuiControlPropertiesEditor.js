const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=-parseInt(t(0x207))/0x1*(parseInt(t(0x204))/0x2)+-parseInt(t(0x1e8))/0x3*(parseInt(t(0x1f8))/0x4)+parseInt(t(0x1dc))/0x5+-parseInt(t(0x1df))/0x6+-parseInt(t(0x1e4))/0x7+parseInt(t(0x1d5))/0x8*(-parseInt(t(0x1f4))/0x9)+parseInt(t(0x1fa))/0xa*(parseInt(t(0x1fd))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x59607));function a(){const P=['appendChild','_restoreCachedInititalValues','has','push','42561WmBiJL','button','get','replaceAll','180wicAGN','title','20eQeUSl','delete','input','12210902AWfrvp','down','signal','define','removeProp','checked','_propList','75798uKwXqg','screen','splice','15XGygJK','default','parse','changed','_renderList','text','div','style','prop-row','boolean','className','_bindingsRefresh','object','addProp','values','change','920KUxkME','def','defaultInternal','number','createElement','_createPropRow','internal','291070bTbVeQ','stringify','value','3771228ftSCyU','onclick','click','enum','type','66346dvPUMD','substring','_collapsedGroups','properties','10797fcCFkX','addEventListener','template','textContent','propertiesObj','innerHTML','none','name'];a=function(){return P;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';const notAllowedChars='!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^';export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static [u(0x20e)]=css`
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
    }`;static [u(0x1ea)]=html`
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
        </div>`;constructor(){const v=u;super(),this[v(0x1f1)]();}['ready'](){const w=u;this['_bindingsParse'](),this['_assignEvents'](),this[w(0x203)]=this['_getDomElement']('prop-list');}[u(0x1e7)];[u(0x1ec)];[u(0x1d7)];[u(0x1e6)]=new Set();['_propList'];['setProperties'](c){const x=u;this['propertiesObj']=c;if(c){this[x(0x1e7)]=[];for(let d in c){let e=c[d];this['properties']['push']({'name':d,'type':e['type'],'values':JSON[x(0x1dd)](e[x(0x1d3)]),'def':e['default'],'internal':e['internal']});}}else this['properties']=null;this['_bindingsRefresh'](),this['_renderList']();}['refresh'](){const y=u;this[y(0x212)](),this['_renderList']();}[u(0x1d2)](){const z=u;let c={'name':'','type':'string'};if(this[z(0x1d7)])c['internal']=!![];this['properties'][z(0x1f3)](c),this['_bindingsRefresh'](),this['_renderList']();}['addEnumProp'](){const A=u;let c={'name':'','type':A(0x1e2),'values':'[\x22a\x22,\x20\x22b\x22]'};if(this['defaultInternal'])c['internal']=!![];this['properties'][A(0x1f3)](c),this[A(0x212)](),this['_renderList']();}['removeProp'](c){const B=u;this['properties'][B(0x206)](c,0x1),this[B(0x20b)](),this['changed']();}['up'](c){const C=u;if(c>0x0){const d=this['properties'][c];this[C(0x1e7)][C(0x206)](c,0x1),this[C(0x1e7)]['splice'](--c,0x0,d),this[C(0x20b)](),this[C(0x20a)]();}}['down'](c){const D=u;if(c<this[D(0x1e7)]['length']-0x1){const d=this['properties'][c];this[D(0x1e7)]['splice'](c,0x1),this[D(0x1e7)]['splice'](++c,0x0,d),this[D(0x20b)](),this[D(0x20a)]();}}['_renderList'](){const E=u;if(!this['_propList'])return;this[E(0x203)][E(0x1ed)]='';if(!this[E(0x1e7)])return;const c=new Map(),d=[];for(let e=0x0;e<this['properties']['length'];e++){const f=this[E(0x1e7)][e],g=f['name']?f['name']['indexOf']('_'):-0x1;if(g>0x0){const h=f['name'][E(0x1e5)](0x0,g);if(!c[E(0x1f2)](h))c['set'](h,[]);c[E(0x1f6)](h)['push']({'item':f,'index':e});}else d[E(0x1f3)]({'item':f,'index':e});}for(const {item:j,index:k}of d){this['_propList']['appendChild'](this[E(0x1da)](j,k));}for(const [l,m]of c){const n=this[E(0x1e6)][E(0x1f2)](l),o=document[E(0x1d9)](E(0x20d)),p=document['createElement'](E(0x20d));p[E(0x211)]='group-header',p[E(0x1eb)]=(n?'▸\x20':'▾\x20')+l,p[E(0x1f9)]=l,p[E(0x1e0)]=()=>{const F=E;if(this[F(0x1e6)]['has'](l))this[F(0x1e6)][F(0x1fb)](l);else this[F(0x1e6)]['add'](l);this[F(0x20b)]();},o[E(0x1f0)](p);if(!n){const q=document[E(0x1d9)]('div');q['className']='group-rows';for(const {item:r,index:s}of m){q[E(0x1f0)](this[E(0x1da)](r,s));}o['appendChild'](q);}this[E(0x203)][E(0x1f0)](o);}}[u(0x1da)](c,d){const G=u,e=document['createElement'](G(0x20d));e[G(0x211)]=G(0x20f);const f=document[G(0x1d9)]('input');f[G(0x1de)]=c['name']??'',f['addEventListener'](G(0x1fc),()=>{const H=G;c[H(0x1ef)]=f['value'],this[H(0x20a)]();}),f[G(0x1e9)]('blur',()=>{const I=G;this[I(0x20b)]();}),e['appendChild'](f);const g=document[G(0x1d9)]('select');g['style']['display']=c[G(0x1e3)]==='enum'?'none':'';for(const n of['string',G(0x210),'number','color','date',G(0x1ff),G(0x205),G(0x1d1)]){const o=document[G(0x1d9)]('option');o['value']=n,o['textContent']=n;if(c[G(0x1e3)]===n)o['selected']=!![];g[G(0x1f0)](o);}const h=document[G(0x1d9)]('input');h['style']['display']=c[G(0x1e3)]==='enum'?'':G(0x1ee),h['value']=c['values']??'',h['addEventListener']('input',()=>{const J=G;c[J(0x1d3)]=h['value'],this['changed']();}),g['addEventListener'](G(0x1d4),()=>{const K=G;c[K(0x1e3)]=g['value'],g['style']['display']=c[K(0x1e3)]===K(0x1e2)?K(0x1ee):'',h[K(0x20e)]['display']=c['type']===K(0x1e2)?'':K(0x1ee),this['changed']();}),e[G(0x1f0)](g),e['appendChild'](h);const i=document['createElement'](G(0x1fc));i['type']=G(0x20c),i['title']='default',i[G(0x1de)]=c[G(0x1d6)]??'',i[G(0x1e9)](G(0x1fc),()=>{const L=G;c['def']=i[L(0x1de)],this[L(0x20a)]();}),e[G(0x1f0)](i);const j=document[G(0x1d9)]('input');j['type']='checkbox',j['style']['margin']='0',j['title']='internal',j[G(0x202)]=!!c[G(0x1db)],j[G(0x1e9)]('change',()=>{const M=G;c[M(0x1db)]=j['checked'],this['changed']();}),e['appendChild'](j);const k=document['createElement'](G(0x1f5));k['textContent']='del',k[G(0x1e9)]('click',()=>this[G(0x201)](d)),e[G(0x1f0)](k);const l=document[G(0x1d9)]('button');l['textContent']='↑',l['addEventListener'](G(0x1e1),()=>this['up'](d)),e[G(0x1f0)](l);const m=document['createElement']('button');return m['textContent']='↓',m['addEventListener']('click',()=>this[G(0x1fe)](d)),e['appendChild'](m),e;}['changed'](){const N=u;if(this['propertiesObj'])for(let d in this[N(0x1ec)]){delete this[N(0x1ec)][d];}for(let e of this[N(0x1e7)]){if(e[N(0x1ef)]){for(let g of notAllowedChars)e['name']=e[N(0x1ef)][N(0x1f7)](g,'');e['name']=e['name'][0x0]['toLowerCase']()+e['name'][N(0x1e5)](0x1);let f={'type':e['type']};if(e['def']){if(e[N(0x1e3)]==N(0x1d8))f[N(0x208)]=parseFloat(e[N(0x1d6)]);else{if(e[N(0x1e3)]==N(0x210))f['default']=e[N(0x1d6)]=='true';else f['default']=e[N(0x1d6)];}}if(e[N(0x1db)])f['internal']=!![];e['type']==N(0x1e2)&&(f[N(0x1d3)]=JSON[N(0x209)](e[N(0x1d3)])),this['propertiesObj'][e['name']]=f;}}}['getProperties'](){const O=u;return this[O(0x20a)](),this[O(0x1ec)]?{...this[O(0x1ec)]}:{};}}function b(c,d){c=c-0x1d1;const e=a();let f=e[c];return f;}customElements[u(0x200)]('iobroker-webui-control-properties-editor',IobrokerWebuiControlPropertiesEditor);
const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=parseInt(t(0x196))/0x1+-parseInt(t(0x1b8))/0x2*(parseInt(t(0x1b4))/0x3)+-parseInt(t(0x190))/0x4*(parseInt(t(0x1c4))/0x5)+parseInt(t(0x19a))/0x6*(parseInt(t(0x1b3))/0x7)+-parseInt(t(0x19d))/0x8+-parseInt(t(0x1bf))/0x9*(-parseInt(t(0x1a3))/0xa)+parseInt(t(0x1a7))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa1015));function b(c,d){c=c-0x17c;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';const notAllowedChars='!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^';export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    }`;static [u(0x183)]=html`
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
        </div>`;constructor(){const v=u;super(),this[v(0x19f)]();}['ready'](){const w=u;this[w(0x17f)](),this['_assignEvents'](),this[w(0x1a5)]=this['_getDomElement']('prop-list');}[u(0x1aa)];['propertiesObj'];[u(0x1a9)];[u(0x1c3)]=new Set();[u(0x1a5)];[u(0x1bd)](c){const x=u;this[x(0x17c)]=c;if(c){this[x(0x1aa)]=[];for(let d in c){let e=c[d];this['properties']['push']({'name':d,'type':e['type'],'values':JSON[x(0x1af)](e[x(0x197)]),'def':e[x(0x184)],'internal':e[x(0x1a2)]});}}else this['properties']=null;this[x(0x19b)](),this['_renderList']();}['refresh'](){const y=u;this[y(0x19b)](),this['_renderList']();}['addProp'](){const z=u;let c={'name':'','type':z(0x1ab)};if(this[z(0x1a9)])c[z(0x1a2)]=!![];this[z(0x1aa)]['push'](c),this[z(0x19b)](),this['_renderList']();}[u(0x1b9)](){const A=u;let c={'name':'','type':'enum','values':'[\x22a\x22,\x20\x22b\x22]'};if(this['defaultInternal'])c[A(0x1a2)]=!![];this[A(0x1aa)][A(0x1bb)](c),this[A(0x19b)](),this['_renderList']();}[u(0x1c2)](c){const B=u;this[B(0x1aa)][B(0x1b7)](c,0x1),this[B(0x1ba)](),this['changed']();}['up'](c){const C=u;if(c>0x0){const d=this['properties'][c];this['properties']['splice'](c,0x1),this[C(0x1aa)]['splice'](--c,0x0,d),this['_renderList'](),this[C(0x1c5)]();}}['down'](c){const D=u;if(c<this['properties'][D(0x1c8)]-0x1){const d=this['properties'][c];this['properties'][D(0x1b7)](c,0x1),this[D(0x1aa)][D(0x1b7)](++c,0x0,d),this[D(0x1ba)](),this['changed']();}}[u(0x1ba)](){const E=u;if(!this['_propList'])return;this['_propList']['innerHTML']='';if(!this['properties'])return;const c=new Map(),d=[];for(let e=0x0;e<this['properties']['length'];e++){const f=this[E(0x1aa)][e],g=f['name']?f['name']['indexOf']('_'):-0x1;if(g>0x0){const h=f[E(0x1a4)][E(0x1c6)](0x0,g);if(!c[E(0x192)](h))c[E(0x1b2)](h,[]);c['get'](h)[E(0x1bb)]({'item':f,'index':e});}else d['push']({'item':f,'index':e});}for(const {item:j,index:k}of d){this[E(0x1a5)]['appendChild'](this['_createPropRow'](j,k));}for(const [l,m]of c){const n=this['_collapsedGroups']['has'](l),o=document[E(0x180)]('div'),p=document['createElement']('div');p['className']=E(0x1a8),p[E(0x188)]=(n?'▸\x20':'▾\x20')+l,p[E(0x17e)]=l,p[E(0x185)]=()=>{const F=E;if(this['_collapsedGroups']['has'](l))this[F(0x1c3)]['delete'](l);else this['_collapsedGroups'][F(0x1a0)](l);this['_renderList']();},o['appendChild'](p);if(!n){const q=document[E(0x180)](E(0x18e));q[E(0x195)]='group-rows';for(const {item:r,index:s}of m){q[E(0x1b1)](this[E(0x199)](r,s));}o[E(0x1b1)](q);}this[E(0x1a5)][E(0x1b1)](o);}}['_createPropRow'](c,d){const G=u,e=document[G(0x180)](G(0x18e));e[G(0x195)]=G(0x187);const f=document[G(0x180)](G(0x18c));f['value']=c[G(0x1a4)]??'',f['addEventListener'](G(0x18c),()=>{c['name']=f['value'],this['changed']();}),f[G(0x18a)]('blur',()=>{const H=G;this[H(0x1ba)]();}),e[G(0x1b1)](f);const g=document[G(0x180)](G(0x18f));g[G(0x1ad)][G(0x17d)]=c[G(0x191)]==='enum'?'none':'';for(const n of[G(0x1ab),'boolean',G(0x194),G(0x1c7),'date',G(0x181),G(0x1bc),G(0x182)]){const o=document['createElement'](G(0x1c0));o['value']=n,o[G(0x188)]=n;if(c[G(0x191)]===n)o[G(0x19e)]=!![];g[G(0x1b1)](o);}const h=document['createElement']('input');h[G(0x1ad)]['display']=c['type']==='enum'?'':G(0x1a1),h[G(0x19c)]=c[G(0x197)]??'',h[G(0x18a)]('input',()=>{const I=G;c[I(0x197)]=h[I(0x19c)],this['changed']();}),g[G(0x18a)](G(0x18d),()=>{const J=G;c[J(0x191)]=g[J(0x19c)],g['style'][J(0x17d)]=c[J(0x191)]===J(0x193)?J(0x1a1):'',h['style']['display']=c[J(0x191)]==='enum'?'':J(0x1a1),this[J(0x1c5)]();}),e['appendChild'](g),e['appendChild'](h);const i=document[G(0x180)](G(0x18c));i['type']=G(0x18b),i[G(0x17e)]=G(0x184),i['value']=c[G(0x1b5)]??'',i['addEventListener'](G(0x18c),()=>{const K=G;c[K(0x1b5)]=i['value'],this[K(0x1c5)]();}),e[G(0x1b1)](i);const j=document['createElement']('input');j['type']=G(0x198),j['style'][G(0x1b0)]='0',j[G(0x17e)]='internal',j['checked']=!!c[G(0x1a2)],j[G(0x18a)]('change',()=>{const L=G;c['internal']=j[L(0x186)],this['changed']();}),e['appendChild'](j);const k=document['createElement'](G(0x1b6));k[G(0x188)]=G(0x1a6),k['addEventListener']('click',()=>this['removeProp'](d)),e[G(0x1b1)](k);const l=document[G(0x180)]('button');l['textContent']='↑',l[G(0x18a)]('click',()=>this['up'](d)),e[G(0x1b1)](l);const m=document['createElement'](G(0x1b6));return m[G(0x188)]='↓',m[G(0x18a)]('click',()=>this['down'](d)),e[G(0x1b1)](m),e;}[u(0x1c5)](){const M=u;if(this['propertiesObj'])for(let d in this[M(0x17c)]){delete this[M(0x17c)][d];}for(let e of this['properties']){if(e[M(0x1a4)]){for(let g of notAllowedChars)e[M(0x1a4)]=e['name']['replaceAll'](g,'');e['name']=e['name'][0x0][M(0x1c1)]()+e[M(0x1a4)][M(0x1c6)](0x1);let f={'type':e['type']};if(e[M(0x1b5)]){if(e[M(0x191)]=='number')f['default']=parseFloat(e['def']);else{if(e['type']==M(0x1ae))f[M(0x184)]=e['def']=='true';else f[M(0x184)]=e['def'];}}if(e['internal'])f['internal']=!![];e['type']=='enum'&&(f[M(0x197)]=JSON['parse'](e['values'])),this[M(0x17c)][e['name']]=f;}}}[u(0x189)](){const N=u;return this['changed'](),this[N(0x17c)]?{...this[N(0x17c)]}:{};}}function a(){const O=['display','title','_bindingsParse','createElement','signal','object','template','default','onclick','checked','prop-row','textContent','getProperties','addEventListener','text','input','change','div','select','4SkAibq','type','has','enum','number','className','1192568DtLOhB','values','checkbox','_createPropRow','2322534oUIdsr','_bindingsRefresh','value','9074096RXxAyi','selected','_restoreCachedInititalValues','add','none','internal','1874780DgechH','name','_propList','del','1531695JVvtmz','group-header','defaultInternal','properties','string','iobroker-webui-control-properties-editor','style','boolean','stringify','margin','appendChild','set','14PFSrYV','15wDmQym','def','button','splice','90686OESDzu','addEnumProp','_renderList','push','screen','setProperties','define','18hThmwu','option','toLowerCase','removeProp','_collapsedGroups','2302465ahDImj','changed','substring','color','length','propertiesObj'];a=function(){return O;};return a();}customElements[u(0x1be)](u(0x1ac),IobrokerWebuiControlPropertiesEditor);
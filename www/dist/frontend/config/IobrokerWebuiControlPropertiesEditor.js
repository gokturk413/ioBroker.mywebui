const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=parseInt(t(0x1d6))/0x1*(-parseInt(t(0x1d8))/0x2)+parseInt(t(0x214))/0x3+parseInt(t(0x208))/0x4*(parseInt(t(0x1e8))/0x5)+-parseInt(t(0x1ec))/0x6*(parseInt(t(0x1f6))/0x7)+parseInt(t(0x20f))/0x8+parseInt(t(0x1e4))/0x9*(-parseInt(t(0x1e9))/0xa)+parseInt(t(0x1f7))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x1e1ba));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';const notAllowedChars=u(0x207);export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static [u(0x1e3)]=css`
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
    }`;static [u(0x1eb)]=html`
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
        </div>`;constructor(){super(),this['_restoreCachedInititalValues']();}[u(0x1d9)](){const v=u;this['_bindingsParse'](),this[v(0x219)](),this[v(0x201)]=this['_getDomElement'](v(0x211));}['properties'];[u(0x1e1)];[u(0x217)];['_collapsedGroups']=new Set();['_propList'];[u(0x1de)](c){const w=u;this['propertiesObj']=c;if(c){this['properties']=[];for(let d in c){let e=c[d];this['properties']['push']({'name':d,'type':e['type'],'values':JSON['stringify'](e[w(0x212)]),'def':e[w(0x1ee)],'internal':e[w(0x1f1)]});}}else this['properties']=null;this['_bindingsRefresh'](),this['_renderList']();}[u(0x1f0)](){const x=u;this[x(0x21b)](),this['_renderList']();}['addProp'](){const y=u;let c={'name':'','type':'string'};if(this['defaultInternal'])c[y(0x1f1)]=!![];this['properties']['push'](c),this['_bindingsRefresh'](),this[y(0x1ea)]();}[u(0x205)](){const z=u;let c={'name':'','type':z(0x1fa),'values':'[\x22a\x22,\x20\x22b\x22]'};if(this[z(0x217)])c[z(0x1f1)]=!![];this[z(0x203)]['push'](c),this[z(0x21b)](),this[z(0x1ea)]();}['removeProp'](c){const A=u;this[A(0x203)][A(0x206)](c,0x1),this[A(0x1ea)](),this[A(0x1fc)]();}['up'](c){const B=u;if(c>0x0){const d=this[B(0x203)][c];this['properties'][B(0x206)](c,0x1),this['properties'][B(0x206)](--c,0x0,d),this[B(0x1ea)](),this[B(0x1fc)]();}}['down'](c){const C=u;if(c<this[C(0x203)]['length']-0x1){const d=this[C(0x203)][c];this['properties']['splice'](c,0x1),this[C(0x203)]['splice'](++c,0x0,d),this['_renderList'](),this[C(0x1fc)]();}}['_renderList'](){const D=u;if(!this['_propList'])return;this[D(0x201)][D(0x1d5)]='';if(!this['properties'])return;const c=new Map(),d=[];for(let e=0x0;e<this['properties'][D(0x204)];e++){const f=this['properties'][e],g=f['name']?f['name']['indexOf']('_'):-0x1;if(g>0x0){const h=f[D(0x1e7)][D(0x1dd)](0x0,g);if(!c[D(0x202)](h))c[D(0x20b)](h,[]);c[D(0x1f3)](h)['push']({'item':f,'index':e});}else d[D(0x20e)]({'item':f,'index':e});}for(const {item:j,index:k}of d){this['_propList']['appendChild'](this[D(0x20d)](j,k));}for(const [l,m]of c){const n=this['_collapsedGroups']['has'](l),o=document[D(0x1f9)]('div'),p=document[D(0x1f9)](D(0x210));p['className']='group-header',p['textContent']=(n?'▸\x20':'▾\x20')+l,p['title']=l,p['onclick']=()=>{const E=D;if(this[E(0x1e5)]['has'](l))this['_collapsedGroups']['delete'](l);else this[E(0x1e5)]['add'](l);this[E(0x1ea)]();},o['appendChild'](p);if(!n){const q=document[D(0x1f9)]('div');q['className']=D(0x20a);for(const {item:r,index:s}of m){q['appendChild'](this['_createPropRow'](r,s));}o[D(0x209)](q);}this['_propList']['appendChild'](o);}}[u(0x20d)](c,d){const F=u,e=document['createElement']('div');e[F(0x1fe)]=F(0x1fb);const f=document[F(0x1f9)]('input');f[F(0x1f5)]=c['name']??'',f[F(0x200)](F(0x1f2),()=>{const G=F;c[G(0x1e7)]=f['value'],this[G(0x1fc)]();}),f['addEventListener']('blur',()=>{this['_renderList']();}),e[F(0x209)](f);const g=document['createElement'](F(0x21c));g[F(0x1e3)]['display']=c['type']===F(0x1fa)?F(0x1e0):'';for(const n of[F(0x1d7),'boolean',F(0x213),F(0x1e6),'date',F(0x1ed),'screen','object']){const o=document['createElement'](F(0x1db));o['value']=n,o['textContent']=n;if(c['type']===n)o['selected']=!![];g['appendChild'](o);}const h=document['createElement']('input');h[F(0x1e3)]['display']=c['type']==='enum'?'':'none',h[F(0x1f5)]=c['values']??'',h[F(0x200)](F(0x1f2),()=>{const H=F;c['values']=h[H(0x1f5)],this['changed']();}),g['addEventListener'](F(0x216),()=>{const I=F;c[I(0x1ef)]=g['value'],g['style']['display']=c['type']==='enum'?I(0x1e0):'',h['style']['display']=c[I(0x1ef)]==='enum'?'':I(0x1e0),this[I(0x1fc)]();}),e[F(0x209)](g),e[F(0x209)](h);const i=document[F(0x1f9)]('input');i['type']='text',i[F(0x1f8)]='default',i[F(0x1f5)]=c[F(0x20c)]??'',i['addEventListener'](F(0x1f2),()=>{const J=F;c[J(0x20c)]=i['value'],this['changed']();}),e[F(0x209)](i);const j=document[F(0x1f9)]('input');j[F(0x1ef)]=F(0x1fd),j['style'][F(0x1f4)]='0',j['title']=F(0x1f1),j[F(0x1ff)]=!!c['internal'],j['addEventListener'](F(0x216),()=>{const K=F;c[K(0x1f1)]=j['checked'],this['changed']();}),e[F(0x209)](j);const k=document['createElement'](F(0x1df));k[F(0x1e2)]=F(0x1da),k['addEventListener']('click',()=>this['removeProp'](d)),e[F(0x209)](k);const l=document[F(0x1f9)]('button');l['textContent']='↑',l['addEventListener'](F(0x215),()=>this['up'](d)),e[F(0x209)](l);const m=document[F(0x1f9)]('button');return m[F(0x1e2)]='↓',m['addEventListener'](F(0x215),()=>this[F(0x218)](d)),e[F(0x209)](m),e;}[u(0x1fc)](){const L=u;if(this['propertiesObj'])for(let d in this['propertiesObj']){delete this['propertiesObj'][d];}for(let e of this[L(0x203)]){if(e[L(0x1e7)]){for(let g of notAllowedChars)e['name']=e[L(0x1e7)]['replaceAll'](g,'');e['name']=e['name'][0x0]['toLowerCase']()+e['name'][L(0x1dd)](0x1);let f={'type':e['type']};if(e['def']){if(e['type']==L(0x213))f[L(0x1ee)]=parseFloat(e[L(0x20c)]);else{if(e[L(0x1ef)]=='boolean')f[L(0x1ee)]=e['def']==L(0x1dc);else f[L(0x1ee)]=e['def'];}}if(e[L(0x1f1)])f[L(0x1f1)]=!![];e['type']==L(0x1fa)&&(f['values']=JSON['parse'](e[L(0x212)])),this[L(0x1e1)][e['name']]=f;}}}['getProperties'](){const M=u;return this[M(0x1fc)](),this['propertiesObj']?{...this[M(0x1e1)]}:{};}}customElements[u(0x21a)]('iobroker-webui-control-properties-editor',IobrokerWebuiControlPropertiesEditor);function b(c,d){c=c-0x1d5;const e=a();let f=e[c];return f;}function a(){const N=['title','createElement','enum','prop-row','changed','checkbox','className','checked','addEventListener','_propList','has','properties','length','addEnumProp','splice','!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^','16zwMUXW','appendChild','group-rows','set','def','_createPropRow','push','289024ZCmAwZ','div','prop-list','values','number','540030RXZVGM','click','change','defaultInternal','down','_assignEvents','define','_bindingsRefresh','select','innerHTML','1EpyaFp','string','278162eLHEIT','ready','del','option','true','substring','setProperties','button','none','propertiesObj','textContent','style','9vAqLnB','_collapsedGroups','color','name','64535GrAvWz','1813760JVinLO','_renderList','template','479802mEfUYC','signal','default','type','refresh','internal','input','get','margin','value','21bMhmJb','4575054naObDj'];a=function(){return N;};return a();}
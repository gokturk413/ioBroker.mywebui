const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=-parseInt(t(0x1a8))/0x1+-parseInt(t(0x199))/0x2+-parseInt(t(0x18e))/0x3+-parseInt(t(0x1c6))/0x4*(parseInt(t(0x18b))/0x5)+parseInt(t(0x1ae))/0x6+parseInt(t(0x1b2))/0x7*(-parseInt(t(0x198))/0x8)+-parseInt(t(0x192))/0x9*(-parseInt(t(0x1aa))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x442c0));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';function a(){const N=['777048TRDBWs','none','createElement','removeProp','addEventListener','type','_propList','getProperties','5qqOBtq','value','setProperties','1388451zKIquD','def','_createPropRow','properties','117YdkuoC','changed','_getDomElement','color','has','splice','491240MzzaYD','1013750pMFEHV','change','_collapsedGroups','iobroker-webui-control-properties-editor','innerHTML','propertiesObj','parse','option','length','del','_bindingsRefresh','screen','textContent','values','boolean','410033XvJlUZ','style','1338790BSypPf','className','appendChild','enum','2150472IvRsrO','replaceAll','push','indexOf','28zxQXOg','text','name','default','number','input','div','click','delete','button','stringify','internal','display','prop-row','[\x22a\x22,\x20\x22b\x22]','_renderList','select','title','toLowerCase','defaultInternal'];a=function(){return N;};return a();}function b(c,d){c=c-0x186;const e=a();let f=e[c];return f;}const notAllowedChars='!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^';export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static [u(0x1a9)]=css`
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
        </div>`;constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const v=u;this['_bindingsParse'](),this['_assignEvents'](),this[v(0x189)]=this[v(0x194)]('prop-list');}['properties'];['propertiesObj'];['defaultInternal'];[u(0x19b)]=new Set();[u(0x189)];[u(0x18d)](c){const w=u;this[w(0x19e)]=c;if(c){this[w(0x191)]=[];for(let d in c){let e=c[d];this['properties']['push']({'name':d,'type':e['type'],'values':JSON[w(0x1bc)](e[w(0x1a6)]),'def':e['default'],'internal':e[w(0x1bd)]});}}else this[w(0x191)]=null;this['_bindingsRefresh'](),this['_renderList']();}['refresh'](){const x=u;this[x(0x1a3)](),this[x(0x1c1)]();}['addProp'](){const y=u;let c={'name':'','type':'string'};if(this['defaultInternal'])c['internal']=!![];this[y(0x191)][y(0x1b0)](c),this[y(0x1a3)](),this[y(0x1c1)]();}['addEnumProp'](){const z=u;let c={'name':'','type':z(0x1ad),'values':z(0x1c0)};if(this[z(0x1c5)])c[z(0x1bd)]=!![];this['properties']['push'](c),this[z(0x1a3)](),this['_renderList']();}[u(0x186)](c){const A=u;this['properties'][A(0x197)](c,0x1),this['_renderList'](),this[A(0x193)]();}['up'](c){const B=u;if(c>0x0){const d=this['properties'][c];this[B(0x191)][B(0x197)](c,0x1),this['properties']['splice'](--c,0x0,d),this['_renderList'](),this[B(0x193)]();}}['down'](c){const C=u;if(c<this['properties'][C(0x1a1)]-0x1){const d=this[C(0x191)][c];this[C(0x191)][C(0x197)](c,0x1),this[C(0x191)]['splice'](++c,0x0,d),this['_renderList'](),this[C(0x193)]();}}['_renderList'](){const D=u;if(!this[D(0x189)])return;this[D(0x189)][D(0x19d)]='';if(!this[D(0x191)])return;const c=new Map(),d=[];for(let e=0x0;e<this[D(0x191)][D(0x1a1)];e++){const f=this[D(0x191)][e],g=f[D(0x1b4)]?f['name'][D(0x1b1)]('_'):-0x1;if(g>0x0){const h=f['name']['substring'](0x0,g);if(!c['has'](h))c['set'](h,[]);c['get'](h)['push']({'item':f,'index':e});}else d[D(0x1b0)]({'item':f,'index':e});}for(const {item:j,index:k}of d){this['_propList'][D(0x1ac)](this[D(0x190)](j,k));}for(const [l,m]of c){const n=this['_collapsedGroups'][D(0x196)](l),o=document['createElement']('div'),p=document[D(0x1c8)](D(0x1b8));p['className']='group-header',p['textContent']=(n?'▸\x20':'▾\x20')+l,p['title']=l,p['onclick']=()=>{const E=D;if(this[E(0x19b)]['has'](l))this[E(0x19b)][E(0x1ba)](l);else this['_collapsedGroups']['add'](l);this[E(0x1c1)]();},o['appendChild'](p);if(!n){const q=document['createElement'](D(0x1b8));q[D(0x1ab)]='group-rows';for(const {item:r,index:s}of m){q['appendChild'](this['_createPropRow'](r,s));}o['appendChild'](q);}this['_propList']['appendChild'](o);}}['_createPropRow'](c,d){const F=u,e=document['createElement']('div');e['className']=F(0x1bf);const f=document['createElement'](F(0x1b7));f['value']=c[F(0x1b4)]??'',f[F(0x187)](F(0x1b7),()=>{const G=F;c[G(0x1b4)]=f['value'],this['changed']();}),f[F(0x187)]('blur',()=>{const H=F;this[H(0x1c1)]();}),e[F(0x1ac)](f);const g=document[F(0x1c8)](F(0x1c2));g[F(0x1a9)]['display']=c['type']==='enum'?'none':'';for(const n of['string','boolean','number',F(0x195),'date','signal',F(0x1a4),'object']){const o=document[F(0x1c8)](F(0x1a0));o['value']=n,o['textContent']=n;if(c[F(0x188)]===n)o['selected']=!![];g['appendChild'](o);}const h=document[F(0x1c8)]('input');h[F(0x1a9)][F(0x1be)]=c[F(0x188)]==='enum'?'':'none',h['value']=c['values']??'',h[F(0x187)](F(0x1b7),()=>{const I=F;c['values']=h['value'],this[I(0x193)]();}),g[F(0x187)]('change',()=>{const J=F;c[J(0x188)]=g[J(0x18c)],g[J(0x1a9)][J(0x1be)]=c[J(0x188)]===J(0x1ad)?'none':'',h[J(0x1a9)][J(0x1be)]=c['type']==='enum'?'':J(0x1c7),this[J(0x193)]();}),e[F(0x1ac)](g),e['appendChild'](h);const i=document['createElement'](F(0x1b7));i[F(0x188)]=F(0x1b3),i[F(0x1c3)]='default',i[F(0x18c)]=c[F(0x18f)]??'',i[F(0x187)]('input',()=>{c['def']=i['value'],this['changed']();}),e[F(0x1ac)](i);const j=document[F(0x1c8)](F(0x1b7));j['type']='checkbox',j[F(0x1a9)]['margin']='0',j['title']='internal',j['checked']=!!c[F(0x1bd)],j[F(0x187)](F(0x19a),()=>{const K=F;c[K(0x1bd)]=j['checked'],this['changed']();}),e[F(0x1ac)](j);const k=document[F(0x1c8)](F(0x1bb));k[F(0x1a5)]=F(0x1a2),k[F(0x187)](F(0x1b9),()=>this['removeProp'](d)),e['appendChild'](k);const l=document['createElement'](F(0x1bb));l[F(0x1a5)]='↑',l[F(0x187)](F(0x1b9),()=>this['up'](d)),e['appendChild'](l);const m=document['createElement']('button');return m['textContent']='↓',m[F(0x187)]('click',()=>this['down'](d)),e[F(0x1ac)](m),e;}[u(0x193)](){const L=u;if(this['propertiesObj'])for(let d in this[L(0x19e)]){delete this['propertiesObj'][d];}for(let e of this['properties']){if(e[L(0x1b4)]){for(let g of notAllowedChars)e[L(0x1b4)]=e[L(0x1b4)][L(0x1af)](g,'');e['name']=e['name'][0x0][L(0x1c4)]()+e['name']['substring'](0x1);let f={'type':e['type']};if(e[L(0x18f)]){if(e[L(0x188)]==L(0x1b6))f['default']=parseFloat(e[L(0x18f)]);else{if(e[L(0x188)]==L(0x1a7))f[L(0x1b5)]=e[L(0x18f)]=='true';else f['default']=e['def'];}}if(e['internal'])f['internal']=!![];e[L(0x188)]==L(0x1ad)&&(f[L(0x1a6)]=JSON[L(0x19f)](e['values'])),this[L(0x19e)][e[L(0x1b4)]]=f;}}}[u(0x18a)](){const M=u;return this['changed'](),this[M(0x19e)]?{...this[M(0x19e)]}:{};}}customElements['define'](u(0x19c),IobrokerWebuiControlPropertiesEditor);
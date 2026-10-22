function a(){const P=['getProperties','object','_collapsedGroups','addProp','parse','none','properties','_renderList','button','replaceAll','number','define','boolean','option','push','enum','value','del','84406hdtGUg','175626EpAhQN','substring','addEventListener','appendChild','_bindingsRefresh','click','color','21vwZXBa','373338LTPSsi','values','56522qMMEcE','_propList','8LSGztL','down','iobroker-webui-control-properties-editor','_restoreCachedInititalValues','div','defaultInternal','propertiesObj','_createPropRow','className','type','textContent','refresh','removeProp','prop-list','internal','checked','changed','!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^','screen','217152faasED','addEnumProp','def','checkbox','display','input','get','default','name','222892GrVwTw','innerHTML','splice','add','indexOf','selected','prop-row','string','11FOuMUD','style','change','10PfQcwn','title','createElement','1944970QEMDDb','has','stringify','delete'];a=function(){return P;};return a();}const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=parseInt(t(0x1ff))/0x1+parseInt(t(0x1bd))/0x2+parseInt(t(0x1d2))/0x3+parseInt(t(0x1db))/0x4*(parseInt(t(0x1e6))/0x5)+-parseInt(t(0x200))/0x6*(-parseInt(t(0x207))/0x7)+-parseInt(t(0x1bf))/0x8*(parseInt(t(0x208))/0x9)+parseInt(t(0x1e9))/0xa*(-parseInt(t(0x1e3))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2436b));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';function b(c,d){c=c-0x1bc;const e=a();let f=e[c];return f;}const notAllowedChars=u(0x1d0);export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static [u(0x1e4)]=css`
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
        </div>`;constructor(){const v=u;super(),this[v(0x1c2)]();}['ready'](){const w=u;this['_bindingsParse'](),this['_assignEvents'](),this['_propList']=this['_getDomElement'](w(0x1cc));}['properties'];[u(0x1c5)];['defaultInternal'];['_collapsedGroups']=new Set();[u(0x1be)];['setProperties'](c){const x=u;this[x(0x1c5)]=c;if(c){this['properties']=[];for(let d in c){let e=c[d];this[x(0x1f3)][x(0x1fb)]({'name':d,'type':e['type'],'values':JSON[x(0x1eb)](e[x(0x1bc)]),'def':e[x(0x1d9)],'internal':e['internal']});}}else this['properties']=null;this['_bindingsRefresh'](),this['_renderList']();}[u(0x1ca)](){const y=u;this[y(0x204)](),this['_renderList']();}[u(0x1f0)](){const z=u;let c={'name':'','type':z(0x1e2)};if(this[z(0x1c4)])c['internal']=!![];this[z(0x1f3)][z(0x1fb)](c),this['_bindingsRefresh'](),this[z(0x1f4)]();}[u(0x1d3)](){const A=u;let c={'name':'','type':'enum','values':'[\x22a\x22,\x20\x22b\x22]'};if(this[A(0x1c4)])c['internal']=!![];this['properties'][A(0x1fb)](c),this['_bindingsRefresh'](),this[A(0x1f4)]();}['removeProp'](c){const B=u;this['properties']['splice'](c,0x1),this[B(0x1f4)](),this['changed']();}['up'](c){const C=u;if(c>0x0){const d=this['properties'][c];this['properties'][C(0x1dd)](c,0x1),this['properties'][C(0x1dd)](--c,0x0,d),this['_renderList'](),this[C(0x1cf)]();}}[u(0x1c0)](c){const D=u;if(c<this['properties']['length']-0x1){const d=this['properties'][c];this[D(0x1f3)][D(0x1dd)](c,0x1),this['properties'][D(0x1dd)](++c,0x0,d),this['_renderList'](),this[D(0x1cf)]();}}['_renderList'](){const E=u;if(!this['_propList'])return;this['_propList'][E(0x1dc)]='';if(!this['properties'])return;const c=new Map(),d=[];for(let e=0x0;e<this[E(0x1f3)]['length'];e++){const f=this[E(0x1f3)][e],g=f['name']?f[E(0x1da)][E(0x1df)]('_'):-0x1;if(g>0x0){const h=f[E(0x1da)]['substring'](0x0,g);if(!c[E(0x1ea)](h))c['set'](h,[]);c[E(0x1d8)](h)['push']({'item':f,'index':e});}else d['push']({'item':f,'index':e});}for(const {item:j,index:k}of d){this['_propList']['appendChild'](this['_createPropRow'](j,k));}for(const [l,m]of c){const n=this[E(0x1ef)][E(0x1ea)](l),o=document['createElement']('div'),p=document[E(0x1e8)](E(0x1c3));p[E(0x1c7)]='group-header',p[E(0x1c9)]=(n?'▸\x20':'▾\x20')+l,p[E(0x1e7)]=l,p['onclick']=()=>{const F=E;if(this['_collapsedGroups'][F(0x1ea)](l))this['_collapsedGroups'][F(0x1ec)](l);else this[F(0x1ef)][F(0x1de)](l);this[F(0x1f4)]();},o['appendChild'](p);if(!n){const q=document[E(0x1e8)](E(0x1c3));q[E(0x1c7)]='group-rows';for(const {item:r,index:s}of m){q[E(0x203)](this[E(0x1c6)](r,s));}o['appendChild'](q);}this[E(0x1be)][E(0x203)](o);}}[u(0x1c6)](c,d){const G=u,e=document['createElement']('div');e[G(0x1c7)]=G(0x1e1);const f=document[G(0x1e8)](G(0x1d7));f['value']=c['name']??'',f[G(0x202)]('input',()=>{const H=G;c['name']=f[H(0x1fd)],this['changed']();}),f[G(0x202)]('blur',()=>{const I=G;this[I(0x1f4)]();}),e[G(0x203)](f);const g=document['createElement']('select');g[G(0x1e4)]['display']=c[G(0x1c8)]==='enum'?G(0x1f2):'';for(const n of[G(0x1e2),G(0x1f9),G(0x1f7),G(0x206),'date','signal',G(0x1d1),G(0x1ee)]){const o=document['createElement'](G(0x1fa));o['value']=n,o['textContent']=n;if(c['type']===n)o[G(0x1e0)]=!![];g['appendChild'](o);}const h=document['createElement']('input');h['style'][G(0x1d6)]=c[G(0x1c8)]==='enum'?'':'none',h[G(0x1fd)]=c['values']??'',h['addEventListener'](G(0x1d7),()=>{const J=G;c['values']=h[J(0x1fd)],this['changed']();}),g[G(0x202)](G(0x1e5),()=>{const K=G;c[K(0x1c8)]=g[K(0x1fd)],g[K(0x1e4)]['display']=c[K(0x1c8)]==='enum'?'none':'',h['style']['display']=c['type']==='enum'?'':'none',this[K(0x1cf)]();}),e['appendChild'](g),e['appendChild'](h);const i=document['createElement'](G(0x1d7));i['type']='text',i['title']='default',i['value']=c['def']??'',i['addEventListener']('input',()=>{const L=G;c[L(0x1d4)]=i['value'],this[L(0x1cf)]();}),e['appendChild'](i);const j=document['createElement'](G(0x1d7));j['type']=G(0x1d5),j[G(0x1e4)]['margin']='0',j[G(0x1e7)]='internal',j[G(0x1ce)]=!!c['internal'],j[G(0x202)]('change',()=>{const M=G;c['internal']=j['checked'],this[M(0x1cf)]();}),e['appendChild'](j);const k=document['createElement']('button');k['textContent']=G(0x1fe),k['addEventListener']('click',()=>this[G(0x1cb)](d)),e['appendChild'](k);const l=document['createElement']('button');l[G(0x1c9)]='↑',l[G(0x202)](G(0x205),()=>this['up'](d)),e[G(0x203)](l);const m=document[G(0x1e8)](G(0x1f5));return m['textContent']='↓',m[G(0x202)](G(0x205),()=>this['down'](d)),e[G(0x203)](m),e;}['changed'](){const N=u;if(this['propertiesObj'])for(let d in this[N(0x1c5)]){delete this[N(0x1c5)][d];}for(let e of this['properties']){if(e['name']){for(let g of notAllowedChars)e[N(0x1da)]=e[N(0x1da)][N(0x1f6)](g,'');e['name']=e['name'][0x0]['toLowerCase']()+e[N(0x1da)][N(0x201)](0x1);let f={'type':e[N(0x1c8)]};if(e['def']){if(e['type']==N(0x1f7))f['default']=parseFloat(e[N(0x1d4)]);else{if(e['type']==N(0x1f9))f['default']=e['def']=='true';else f[N(0x1d9)]=e['def'];}}if(e[N(0x1cd)])f[N(0x1cd)]=!![];e['type']==N(0x1fc)&&(f[N(0x1bc)]=JSON[N(0x1f1)](e['values'])),this[N(0x1c5)][e['name']]=f;}}}[u(0x1ed)](){const O=u;return this['changed'](),this[O(0x1c5)]?{...this['propertiesObj']}:{};}}customElements[u(0x1f8)](u(0x1c1),IobrokerWebuiControlPropertiesEditor);
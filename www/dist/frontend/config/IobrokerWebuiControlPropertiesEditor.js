const u=b;function a(){const O=['def','type','816456TYidbI','values','checked','object','margin','display','enum','title','defaultInternal','11871880qXxSkJ','group-header','168640PDygkz','properties','85550DxpMZx','100308dCQOyS','_propList','84YoAlkl','del','get','none','template','propertiesObj','ready','refresh','string','_createPropRow','stringify','option','input','[\x22a\x22,\x20\x22b\x22]','toLowerCase','21ukBcqo','parse','change','textContent','value','9251328cEQzEZ','9619146HjSDdU','button','screen','11jnQDVK','addEventListener','createElement','internal','_collapsedGroups','innerHTML','_bindingsParse','number','prop-list','click','indexOf','date','style','default','has','text','div','name','_renderList','changed','splice','_bindingsRefresh','set','appendChild','className'];a=function(){return O;};return a();}(function(c,d){const t=b,e=c();while(!![]){try{const f=-parseInt(t(0x1b0))/0x1*(-parseInt(t(0x1d6))/0x2)+-parseInt(t(0x1d9))/0x3+parseInt(t(0x1db))/0x4*(-parseInt(t(0x1d8))/0x5)+-parseInt(t(0x1ef))/0x6+parseInt(t(0x1ea))/0x7*(-parseInt(t(0x1cb))/0x8)+parseInt(t(0x1f0))/0x9+parseInt(t(0x1d4))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe6269));function b(c,d){c=c-0x1af;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';const notAllowedChars='!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^';export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static [u(0x1bc)]=css`
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
    }`;static [u(0x1df)]=html`
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
        </div>`;constructor(){super(),this['_restoreCachedInititalValues']();}[u(0x1e1)](){const v=u;this[v(0x1b6)](),this['_assignEvents'](),this['_propList']=this['_getDomElement'](v(0x1b8));}[u(0x1d7)];[u(0x1e0)];[u(0x1d3)];[u(0x1b4)]=new Set();[u(0x1da)];['setProperties'](c){const w=u;this[w(0x1e0)]=c;if(c){this[w(0x1d7)]=[];for(let d in c){let e=c[d];this[w(0x1d7)]['push']({'name':d,'type':e['type'],'values':JSON[w(0x1e5)](e[w(0x1cc)]),'def':e[w(0x1bd)],'internal':e['internal']});}}else this['properties']=null;this['_bindingsRefresh'](),this[w(0x1c2)]();}[u(0x1e2)](){const x=u;this[x(0x1c5)](),this[x(0x1c2)]();}['addProp'](){const y=u;let c={'name':'','type':y(0x1e3)};if(this['defaultInternal'])c['internal']=!![];this[y(0x1d7)]['push'](c),this['_bindingsRefresh'](),this['_renderList']();}['addEnumProp'](){const z=u;let c={'name':'','type':'enum','values':z(0x1e8)};if(this[z(0x1d3)])c[z(0x1b3)]=!![];this[z(0x1d7)]['push'](c),this['_bindingsRefresh'](),this[z(0x1c2)]();}['removeProp'](c){const A=u;this['properties'][A(0x1c4)](c,0x1),this['_renderList'](),this['changed']();}['up'](c){const B=u;if(c>0x0){const d=this['properties'][c];this[B(0x1d7)]['splice'](c,0x1),this['properties'][B(0x1c4)](--c,0x0,d),this[B(0x1c2)](),this['changed']();}}['down'](c){const C=u;if(c<this['properties']['length']-0x1){const d=this['properties'][c];this['properties']['splice'](c,0x1),this[C(0x1d7)]['splice'](++c,0x0,d),this[C(0x1c2)](),this[C(0x1c3)]();}}['_renderList'](){const D=u;if(!this['_propList'])return;this['_propList'][D(0x1b5)]='';if(!this['properties'])return;const c=new Map(),d=[];for(let e=0x0;e<this['properties']['length'];e++){const f=this['properties'][e],g=f['name']?f['name'][D(0x1ba)]('_'):-0x1;if(g>0x0){const h=f[D(0x1c1)]['substring'](0x0,g);if(!c['has'](h))c[D(0x1c6)](h,[]);c[D(0x1dd)](h)['push']({'item':f,'index':e});}else d['push']({'item':f,'index':e});}for(const {item:j,index:k}of d){this[D(0x1da)][D(0x1c7)](this['_createPropRow'](j,k));}for(const [l,m]of c){const n=this[D(0x1b4)][D(0x1be)](l),o=document[D(0x1b2)]('div'),p=document[D(0x1b2)](D(0x1c0));p[D(0x1c8)]=D(0x1d5),p['textContent']=(n?'▸\x20':'▾\x20')+l,p['title']=l,p['onclick']=()=>{const E=D;if(this[E(0x1b4)][E(0x1be)](l))this['_collapsedGroups']['delete'](l);else this['_collapsedGroups']['add'](l);this[E(0x1c2)]();},o['appendChild'](p);if(!n){const q=document['createElement'](D(0x1c0));q[D(0x1c8)]='group-rows';for(const {item:r,index:s}of m){q['appendChild'](this['_createPropRow'](r,s));}o['appendChild'](q);}this['_propList']['appendChild'](o);}}[u(0x1e4)](c,d){const F=u,e=document['createElement'](F(0x1c0));e[F(0x1c8)]='prop-row';const f=document[F(0x1b2)]('input');f['value']=c[F(0x1c1)]??'',f[F(0x1b1)]('input',()=>{const G=F;c[G(0x1c1)]=f['value'],this['changed']();}),f['addEventListener']('blur',()=>{const H=F;this[H(0x1c2)]();}),e[F(0x1c7)](f);const g=document['createElement']('select');g[F(0x1bc)]['display']=c[F(0x1ca)]===F(0x1d1)?'none':'';for(const n of[F(0x1e3),'boolean',F(0x1b7),'color',F(0x1bb),'signal',F(0x1af),F(0x1ce)]){const o=document[F(0x1b2)](F(0x1e6));o[F(0x1ee)]=n,o[F(0x1ed)]=n;if(c['type']===n)o['selected']=!![];g[F(0x1c7)](o);}const h=document['createElement'](F(0x1e7));h['style'][F(0x1d0)]=c['type']===F(0x1d1)?'':'none',h[F(0x1ee)]=c['values']??'',h[F(0x1b1)](F(0x1e7),()=>{const I=F;c['values']=h[I(0x1ee)],this['changed']();}),g[F(0x1b1)](F(0x1ec),()=>{const J=F;c[J(0x1ca)]=g['value'],g['style']['display']=c['type']==='enum'?'none':'',h[J(0x1bc)][J(0x1d0)]=c[J(0x1ca)]===J(0x1d1)?'':J(0x1de),this[J(0x1c3)]();}),e[F(0x1c7)](g),e['appendChild'](h);const i=document[F(0x1b2)]('input');i[F(0x1ca)]=F(0x1bf),i[F(0x1d2)]='default',i['value']=c['def']??'',i['addEventListener'](F(0x1e7),()=>{const K=F;c[K(0x1c9)]=i['value'],this['changed']();}),e['appendChild'](i);const j=document[F(0x1b2)]('input');j['type']='checkbox',j[F(0x1bc)][F(0x1cf)]='0',j['title']='internal',j[F(0x1cd)]=!!c[F(0x1b3)],j[F(0x1b1)]('change',()=>{const L=F;c[L(0x1b3)]=j[L(0x1cd)],this['changed']();}),e['appendChild'](j);const k=document['createElement'](F(0x1f1));k[F(0x1ed)]=F(0x1dc),k['addEventListener'](F(0x1b9),()=>this['removeProp'](d)),e['appendChild'](k);const l=document['createElement'](F(0x1f1));l[F(0x1ed)]='↑',l[F(0x1b1)](F(0x1b9),()=>this['up'](d)),e['appendChild'](l);const m=document['createElement'](F(0x1f1));return m[F(0x1ed)]='↓',m['addEventListener']('click',()=>this['down'](d)),e[F(0x1c7)](m),e;}['changed'](){const M=u;if(this['propertiesObj'])for(let d in this[M(0x1e0)]){delete this[M(0x1e0)][d];}for(let e of this[M(0x1d7)]){if(e['name']){for(let g of notAllowedChars)e[M(0x1c1)]=e['name']['replaceAll'](g,'');e['name']=e['name'][0x0][M(0x1e9)]()+e['name']['substring'](0x1);let f={'type':e[M(0x1ca)]};if(e[M(0x1c9)]){if(e['type']==M(0x1b7))f[M(0x1bd)]=parseFloat(e[M(0x1c9)]);else{if(e['type']=='boolean')f['default']=e[M(0x1c9)]=='true';else f['default']=e[M(0x1c9)];}}if(e[M(0x1b3)])f['internal']=!![];e[M(0x1ca)]==M(0x1d1)&&(f[M(0x1cc)]=JSON[M(0x1eb)](e[M(0x1cc)])),this[M(0x1e0)][e['name']]=f;}}}['getProperties'](){const N=u;return this['changed'](),this[N(0x1e0)]?{...this['propertiesObj']}:{};}}customElements['define']('iobroker-webui-control-properties-editor',IobrokerWebuiControlPropertiesEditor);
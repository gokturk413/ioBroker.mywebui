const u=b;function b(c,d){c=c-0x1ec;const e=a();let f=e[c];return f;}(function(c,d){const t=b,e=c();while(!![]){try{const f=-parseInt(t(0x207))/0x1*(parseInt(t(0x20d))/0x2)+parseInt(t(0x227))/0x3*(-parseInt(t(0x205))/0x4)+-parseInt(t(0x221))/0x5+-parseInt(t(0x215))/0x6+parseInt(t(0x1fd))/0x7+-parseInt(t(0x206))/0x8+parseInt(t(0x1fa))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x1e133));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';const notAllowedChars='!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^';function a(){const N=['createElement','propertiesObj','def','string','4957389nMvSXP','style','value','938763ZxvceC','button','textContent','_renderList','[\x22a\x22,\x20\x22b\x22]','replaceAll','_createPropRow','iobroker-webui-control-properties-editor','8UpvBux','203656JhAnRC','53041abZKPs','_bindingsParse','date','values','change','default','8qWKmuM','number','boolean','checked','splice','enum','del','stringify','1077186KilHwc','push','getProperties','setProperties','select','group-rows','parse','changed','template','addEventListener','input','removeProp','592375ecfTQr','click','has','onclick','appendChild','text','39174RHPNmd','blur','group-header','internal','properties','name','_propList','type','defaultInternal','title','_bindingsRefresh','prop-list','_collapsedGroups','indexOf','get','define','div','screen'];a=function(){return N;};return a();}export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static [u(0x1fb)]=css`
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
    }`;static [u(0x21d)]=html`
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
        </div>`;constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const v=u;this[v(0x208)](),this['_assignEvents'](),this[v(0x22d)]=this['_getDomElement'](v(0x1ef));}[u(0x22b)];['propertiesObj'];['defaultInternal'];['_collapsedGroups']=new Set();[u(0x22d)];[u(0x218)](c){const w=u;this[w(0x1f7)]=c;if(c){this['properties']=[];for(let d in c){let e=c[d];this['properties']['push']({'name':d,'type':e[w(0x22e)],'values':JSON[w(0x214)](e[w(0x20a)]),'def':e[w(0x20c)],'internal':e[w(0x22a)]});}}else this['properties']=null;this[w(0x1ee)](),this['_renderList']();}['refresh'](){const x=u;this[x(0x1ee)](),this[x(0x200)]();}['addProp'](){const y=u;let c={'name':'','type':y(0x1f9)};if(this[y(0x1ec)])c['internal']=!![];this['properties']['push'](c),this[y(0x1ee)](),this[y(0x200)]();}['addEnumProp'](){const z=u;let c={'name':'','type':z(0x212),'values':z(0x201)};if(this[z(0x1ec)])c['internal']=!![];this['properties'][z(0x216)](c),this[z(0x1ee)](),this['_renderList']();}[u(0x220)](c){const A=u;this[A(0x22b)]['splice'](c,0x1),this[A(0x200)](),this[A(0x21c)]();}['up'](c){const B=u;if(c>0x0){const d=this['properties'][c];this[B(0x22b)]['splice'](c,0x1),this['properties']['splice'](--c,0x0,d),this['_renderList'](),this[B(0x21c)]();}}['down'](c){const C=u;if(c<this['properties']['length']-0x1){const d=this[C(0x22b)][c];this['properties'][C(0x211)](c,0x1),this[C(0x22b)][C(0x211)](++c,0x0,d),this['_renderList'](),this[C(0x21c)]();}}['_renderList'](){const D=u;if(!this[D(0x22d)])return;this[D(0x22d)]['innerHTML']='';if(!this['properties'])return;const c=new Map(),d=[];for(let e=0x0;e<this[D(0x22b)]['length'];e++){const f=this[D(0x22b)][e],g=f['name']?f[D(0x22c)][D(0x1f1)]('_'):-0x1;if(g>0x0){const h=f[D(0x22c)]['substring'](0x0,g);if(!c['has'](h))c['set'](h,[]);c[D(0x1f2)](h)['push']({'item':f,'index':e});}else d[D(0x216)]({'item':f,'index':e});}for(const {item:j,index:k}of d){this['_propList']['appendChild'](this[D(0x203)](j,k));}for(const [l,m]of c){const n=this['_collapsedGroups'][D(0x223)](l),o=document[D(0x1f6)](D(0x1f4)),p=document['createElement'](D(0x1f4));p['className']=D(0x229),p[D(0x1ff)]=(n?'▸\x20':'▾\x20')+l,p[D(0x1ed)]=l,p[D(0x224)]=()=>{const E=D;if(this['_collapsedGroups'][E(0x223)](l))this[E(0x1f0)]['delete'](l);else this['_collapsedGroups']['add'](l);this[E(0x200)]();},o['appendChild'](p);if(!n){const q=document[D(0x1f6)](D(0x1f4));q['className']=D(0x21a);for(const {item:r,index:s}of m){q['appendChild'](this[D(0x203)](r,s));}o['appendChild'](q);}this['_propList'][D(0x225)](o);}}['_createPropRow'](c,d){const F=u,e=document['createElement']('div');e['className']='prop-row';const f=document[F(0x1f6)]('input');f['value']=c[F(0x22c)]??'',f['addEventListener']('input',()=>{const G=F;c['name']=f['value'],this[G(0x21c)]();}),f['addEventListener'](F(0x228),()=>{this['_renderList']();}),e[F(0x225)](f);const g=document[F(0x1f6)](F(0x219));g['style']['display']=c[F(0x22e)]===F(0x212)?'none':'';for(const n of['string',F(0x20f),F(0x20e),'color',F(0x209),'signal',F(0x1f5),'object']){const o=document['createElement']('option');o['value']=n,o[F(0x1ff)]=n;if(c[F(0x22e)]===n)o['selected']=!![];g['appendChild'](o);}const h=document['createElement'](F(0x21f));h[F(0x1fb)]['display']=c[F(0x22e)]===F(0x212)?'':'none',h['value']=c[F(0x20a)]??'',h['addEventListener']('input',()=>{const H=F;c[H(0x20a)]=h[H(0x1fc)],this[H(0x21c)]();}),g['addEventListener']('change',()=>{const I=F;c[I(0x22e)]=g['value'],g[I(0x1fb)]['display']=c[I(0x22e)]==='enum'?'none':'',h[I(0x1fb)]['display']=c['type']==='enum'?'':'none',this['changed']();}),e[F(0x225)](g),e['appendChild'](h);const i=document[F(0x1f6)]('input');i[F(0x22e)]=F(0x226),i['title']='default',i[F(0x1fc)]=c['def']??'',i[F(0x21e)](F(0x21f),()=>{const J=F;c[J(0x1f8)]=i[J(0x1fc)],this[J(0x21c)]();}),e[F(0x225)](i);const j=document[F(0x1f6)](F(0x21f));j['type']='checkbox',j['style']['margin']='0',j['title']='internal',j[F(0x210)]=!!c[F(0x22a)],j['addEventListener'](F(0x20b),()=>{const K=F;c[K(0x22a)]=j[K(0x210)],this[K(0x21c)]();}),e[F(0x225)](j);const k=document['createElement']('button');k[F(0x1ff)]=F(0x213),k[F(0x21e)](F(0x222),()=>this['removeProp'](d)),e[F(0x225)](k);const l=document['createElement']('button');l['textContent']='↑',l[F(0x21e)](F(0x222),()=>this['up'](d)),e[F(0x225)](l);const m=document[F(0x1f6)](F(0x1fe));return m['textContent']='↓',m['addEventListener'](F(0x222),()=>this['down'](d)),e['appendChild'](m),e;}['changed'](){const L=u;if(this['propertiesObj'])for(let d in this[L(0x1f7)]){delete this[L(0x1f7)][d];}for(let e of this['properties']){if(e[L(0x22c)]){for(let g of notAllowedChars)e[L(0x22c)]=e[L(0x22c)][L(0x202)](g,'');e[L(0x22c)]=e['name'][0x0]['toLowerCase']()+e['name']['substring'](0x1);let f={'type':e[L(0x22e)]};if(e['def']){if(e[L(0x22e)]=='number')f['default']=parseFloat(e[L(0x1f8)]);else{if(e[L(0x22e)]==L(0x20f))f[L(0x20c)]=e['def']=='true';else f['default']=e[L(0x1f8)];}}if(e['internal'])f['internal']=!![];e[L(0x22e)]=='enum'&&(f[L(0x20a)]=JSON[L(0x21b)](e[L(0x20a)])),this[L(0x1f7)][e[L(0x22c)]]=f;}}}[u(0x217)](){const M=u;return this['changed'](),this['propertiesObj']?{...this[M(0x1f7)]}:{};}}customElements[u(0x1f3)](u(0x204),IobrokerWebuiControlPropertiesEditor);
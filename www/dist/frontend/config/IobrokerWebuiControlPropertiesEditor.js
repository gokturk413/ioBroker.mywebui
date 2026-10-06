const u=b;function a(){const M=['_bindingsRefresh','changed','[\x22a\x22,\x20\x22b\x22]','boolean','setProperties','prop-row','addEventListener','3602210kzspDE','ready','_renderList','template','type','_propList','get','_collapsedGroups','_assignEvents','6700779wQwHIM','6ZiUUAl','group-header','display','1abZDRr','defaultInternal','none','732114cXsyYs','getProperties','def','add','appendChild','replaceAll','parse','5255640npXkoH','name','1244872iAzVoI','enum','1278977GMbHjZ','properties','splice','checked','click','value','onclick','string','iobroker-webui-control-properties-editor','className','change','date','699120BTFLLp','div','number','internal','select','style','object','push','stringify','_createPropRow','substring','values','has','length','input','down','button','checkbox','propertiesObj','indexOf','innerHTML','textContent','createElement','default'];a=function(){return M;};return a();}function b(c,d){c=c-0x1f1;const e=a();let f=e[c];return f;}(function(c,d){const t=b,e=c();while(!![]){try{const f=parseInt(t(0x236))/0x1*(parseInt(t(0x1fc))/0x2)+parseInt(t(0x1f3))/0x3+parseInt(t(0x20a))/0x4+-parseInt(t(0x229))/0x5+parseInt(t(0x233))/0x6*(parseInt(t(0x1fe))/0x7)+parseInt(t(0x1fa))/0x8+-parseInt(t(0x232))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x658cb));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';const notAllowedChars='!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^';export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static [u(0x20f)]=css`
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
    }`;static [u(0x22c)]=html`
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
        </div>`;constructor(){super(),this['_restoreCachedInititalValues']();}[u(0x22a)](){const v=u;this['_bindingsParse'](),this[v(0x231)](),this['_propList']=this['_getDomElement']('prop-list');}['properties'];[u(0x21c)];['defaultInternal'];[u(0x230)]=new Set();[u(0x22e)];[u(0x226)](c){const w=u;this[w(0x21c)]=c;if(c){this[w(0x1ff)]=[];for(let d in c){let e=c[d];this[w(0x1ff)]['push']({'name':d,'type':e['type'],'values':JSON[w(0x212)](e[w(0x215)]),'def':e['default'],'internal':e[w(0x20d)]});}}else this[w(0x1ff)]=null;this['_bindingsRefresh'](),this['_renderList']();}['refresh'](){this['_bindingsRefresh'](),this['_renderList']();}['addProp'](){const x=u;let c={'name':'','type':x(0x205)};if(this['defaultInternal'])c['internal']=!![];this[x(0x1ff)][x(0x211)](c),this['_bindingsRefresh'](),this[x(0x22b)]();}['addEnumProp'](){const y=u;let c={'name':'','type':y(0x1fd),'values':y(0x224)};if(this[y(0x1f1)])c[y(0x20d)]=!![];this['properties']['push'](c),this[y(0x222)](),this['_renderList']();}['removeProp'](c){const z=u;this[z(0x1ff)]['splice'](c,0x1),this['_renderList'](),this[z(0x223)]();}['up'](c){const A=u;if(c>0x0){const d=this['properties'][c];this[A(0x1ff)][A(0x200)](c,0x1),this[A(0x1ff)]['splice'](--c,0x0,d),this[A(0x22b)](),this[A(0x223)]();}}[u(0x219)](c){const B=u;if(c<this['properties'][B(0x217)]-0x1){const d=this['properties'][c];this['properties']['splice'](c,0x1),this[B(0x1ff)]['splice'](++c,0x0,d),this['_renderList'](),this['changed']();}}[u(0x22b)](){const C=u;if(!this['_propList'])return;this[C(0x22e)][C(0x21e)]='';if(!this['properties'])return;const c=new Map(),d=[];for(let e=0x0;e<this[C(0x1ff)]['length'];e++){const f=this[C(0x1ff)][e],g=f['name']?f['name'][C(0x21d)]('_'):-0x1;if(g>0x0){const h=f[C(0x1fb)][C(0x214)](0x0,g);if(!c[C(0x216)](h))c['set'](h,[]);c[C(0x22f)](h)[C(0x211)]({'item':f,'index':e});}else d['push']({'item':f,'index':e});}for(const {item:j,index:k}of d){this[C(0x22e)][C(0x1f7)](this[C(0x213)](j,k));}for(const [l,m]of c){const n=this[C(0x230)][C(0x216)](l),o=document['createElement']('div'),p=document[C(0x220)](C(0x20b));p[C(0x207)]=C(0x234),p['textContent']=(n?'▸\x20':'▾\x20')+l,p['title']=l,p[C(0x204)]=()=>{const D=C;if(this[D(0x230)]['has'](l))this[D(0x230)]['delete'](l);else this[D(0x230)][D(0x1f6)](l);this[D(0x22b)]();},o[C(0x1f7)](p);if(!n){const q=document[C(0x220)](C(0x20b));q[C(0x207)]='group-rows';for(const {item:r,index:s}of m){q['appendChild'](this['_createPropRow'](r,s));}o['appendChild'](q);}this['_propList']['appendChild'](o);}}[u(0x213)](c,d){const E=u,e=document[E(0x220)](E(0x20b));e['className']=E(0x227);const f=document[E(0x220)]('input');f[E(0x203)]=c[E(0x1fb)]??'',f['addEventListener']('input',()=>{const F=E;c[F(0x1fb)]=f[F(0x203)],this[F(0x223)]();}),f['addEventListener']('blur',()=>{this['_renderList']();}),e['appendChild'](f);const g=document['createElement'](E(0x20e));g['style'][E(0x235)]=c[E(0x22d)]===E(0x1fd)?'none':'';for(const n of[E(0x205),'boolean',E(0x20c),'color',E(0x209),'signal','screen',E(0x210)]){const o=document[E(0x220)]('option');o['value']=n,o['textContent']=n;if(c[E(0x22d)]===n)o['selected']=!![];g['appendChild'](o);}const h=document['createElement'](E(0x218));h[E(0x20f)]['display']=c[E(0x22d)]===E(0x1fd)?'':E(0x1f2),h['value']=c['values']??'',h['addEventListener'](E(0x218),()=>{const G=E;c['values']=h[G(0x203)],this['changed']();}),g['addEventListener'](E(0x208),()=>{const H=E;c['type']=g['value'],g['style']['display']=c[H(0x22d)]===H(0x1fd)?'none':'',h[H(0x20f)][H(0x235)]=c[H(0x22d)]==='enum'?'':H(0x1f2),this['changed']();}),e['appendChild'](g),e[E(0x1f7)](h);const i=document[E(0x220)]('input');i[E(0x22d)]='text',i['title']=E(0x221),i[E(0x203)]=c['def']??'',i[E(0x228)]('input',()=>{const I=E;c[I(0x1f5)]=i[I(0x203)],this['changed']();}),e['appendChild'](i);const j=document['createElement']('input');j[E(0x22d)]=E(0x21b),j['style']['margin']='0',j['title']=E(0x20d),j['checked']=!!c[E(0x20d)],j['addEventListener'](E(0x208),()=>{const J=E;c['internal']=j[J(0x201)],this['changed']();}),e[E(0x1f7)](j);const k=document['createElement']('button');k['textContent']='del',k['addEventListener'](E(0x202),()=>this['removeProp'](d)),e[E(0x1f7)](k);const l=document[E(0x220)](E(0x21a));l[E(0x21f)]='↑',l[E(0x228)](E(0x202),()=>this['up'](d)),e['appendChild'](l);const m=document[E(0x220)]('button');return m[E(0x21f)]='↓',m['addEventListener']('click',()=>this[E(0x219)](d)),e[E(0x1f7)](m),e;}['changed'](){const K=u;if(this['propertiesObj'])for(let d in this[K(0x21c)]){delete this['propertiesObj'][d];}for(let e of this[K(0x1ff)]){if(e['name']){for(let g of notAllowedChars)e[K(0x1fb)]=e[K(0x1fb)][K(0x1f8)](g,'');e[K(0x1fb)]=e[K(0x1fb)][0x0]['toLowerCase']()+e[K(0x1fb)][K(0x214)](0x1);let f={'type':e['type']};if(e[K(0x1f5)]){if(e['type']==K(0x20c))f['default']=parseFloat(e['def']);else{if(e[K(0x22d)]==K(0x225))f[K(0x221)]=e[K(0x1f5)]=='true';else f['default']=e['def'];}}if(e[K(0x20d)])f['internal']=!![];e['type']==K(0x1fd)&&(f['values']=JSON[K(0x1f9)](e[K(0x215)])),this['propertiesObj'][e['name']]=f;}}}[u(0x1f4)](){const L=u;return this[L(0x223)](),this['propertiesObj']?{...this[L(0x21c)]}:{};}}customElements['define'](u(0x206),IobrokerWebuiControlPropertiesEditor);
const u=b;function a(){const M=['change','960lFdhgw','_assignEvents','propertiesObj','name','group-header','className','checked','!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^','title','121400hARvVW','value','903MxQCtQ','none','set','button','properties','_collapsedGroups','color','def','2956Nfprjr','parse','_bindingsRefresh','default','splice','signal','898PNPIif','154HkOMTM','internal','addEventListener','define','62433DwwsTZ','enum','length','prop-row','type','35mpQmQc','values','refresh','addEnumProp','template','createElement','changed','removeProp','15pXkRet','defaultInternal','string','_propList','input','click','blur','123ZOosKx','number','option','112962XwdyUK','appendChild','get','_renderList','textContent','has','setProperties','getProperties','iobroker-webui-control-properties-editor','352644gVRnJc','12387635tzTVMI','style','push'];a=function(){return M;};return a();}(function(c,d){const t=b,e=c();while(!![]){try{const f=-parseInt(t(0xd5))/0x1*(-parseInt(t(0xe3))/0x2)+-parseInt(t(0xb9))/0x3*(parseInt(t(0xdd))/0x4)+parseInt(t(0xb2))/0x5*(-parseInt(t(0xbc))/0x6)+parseInt(t(0xed))/0x7*(-parseInt(t(0xd3))/0x8)+parseInt(t(0xe8))/0x9*(parseInt(t(0xca))/0xa)+-parseInt(t(0xe4))/0xb*(-parseInt(t(0xc5))/0xc)+-parseInt(t(0xc6))/0xd;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x59aa3));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';const notAllowedChars=u(0xd1);function b(c,d){c=c-0xb2;const e=a();let f=e[c];return f;}export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static [u(0xc7)]=css`
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
    }`;static [u(0xf1)]=html`
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
        </div>`;constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const v=u;this['_bindingsParse'](),this[v(0xcb)](),this['_propList']=this['_getDomElement']('prop-list');}['properties'];[u(0xcc)];['defaultInternal'];['_collapsedGroups']=new Set();['_propList'];[u(0xc2)](c){const w=u;this['propertiesObj']=c;if(c){this[w(0xd9)]=[];for(let d in c){let e=c[d];this[w(0xd9)][w(0xc8)]({'name':d,'type':e['type'],'values':JSON['stringify'](e['values']),'def':e[w(0xe0)],'internal':e['internal']});}}else this['properties']=null;this['_bindingsRefresh'](),this[w(0xbf)]();}[u(0xef)](){const x=u;this[x(0xdf)](),this['_renderList']();}['addProp'](){const y=u;let c={'name':'','type':'string'};if(this['defaultInternal'])c['internal']=!![];this[y(0xd9)]['push'](c),this['_bindingsRefresh'](),this[y(0xbf)]();}[u(0xf0)](){const z=u;let c={'name':'','type':'enum','values':'[\x22a\x22,\x20\x22b\x22]'};if(this[z(0xb3)])c[z(0xe5)]=!![];this[z(0xd9)]['push'](c),this['_bindingsRefresh'](),this['_renderList']();}[u(0xf4)](c){const A=u;this[A(0xd9)]['splice'](c,0x1),this['_renderList'](),this['changed']();}['up'](c){const B=u;if(c>0x0){const d=this['properties'][c];this['properties'][B(0xe1)](c,0x1),this[B(0xd9)]['splice'](--c,0x0,d),this['_renderList'](),this[B(0xf3)]();}}['down'](c){const C=u;if(c<this['properties'][C(0xea)]-0x1){const d=this['properties'][c];this[C(0xd9)][C(0xe1)](c,0x1),this['properties']['splice'](++c,0x0,d),this['_renderList'](),this[C(0xf3)]();}}[u(0xbf)](){const D=u;if(!this[D(0xb5)])return;this['_propList']['innerHTML']='';if(!this[D(0xd9)])return;const c=new Map(),d=[];for(let e=0x0;e<this[D(0xd9)][D(0xea)];e++){const f=this[D(0xd9)][e],g=f['name']?f[D(0xcd)]['indexOf']('_'):-0x1;if(g>0x0){const h=f[D(0xcd)]['substring'](0x0,g);if(!c[D(0xc1)](h))c[D(0xd7)](h,[]);c[D(0xbe)](h)['push']({'item':f,'index':e});}else d['push']({'item':f,'index':e});}for(const {item:j,index:k}of d){this[D(0xb5)]['appendChild'](this['_createPropRow'](j,k));}for(const [l,m]of c){const n=this['_collapsedGroups'][D(0xc1)](l),o=document['createElement']('div'),p=document['createElement']('div');p[D(0xcf)]=D(0xce),p['textContent']=(n?'▸\x20':'▾\x20')+l,p[D(0xd2)]=l,p['onclick']=()=>{const E=D;if(this[E(0xda)][E(0xc1)](l))this['_collapsedGroups']['delete'](l);else this['_collapsedGroups']['add'](l);this[E(0xbf)]();},o[D(0xbd)](p);if(!n){const q=document[D(0xf2)]('div');q[D(0xcf)]='group-rows';for(const {item:r,index:s}of m){q['appendChild'](this['_createPropRow'](r,s));}o['appendChild'](q);}this['_propList'][D(0xbd)](o);}}['_createPropRow'](c,d){const F=u,e=document[F(0xf2)]('div');e[F(0xcf)]=F(0xeb);const f=document[F(0xf2)](F(0xb6));f[F(0xd4)]=c[F(0xcd)]??'',f[F(0xe6)](F(0xb6),()=>{const G=F;c['name']=f[G(0xd4)],this[G(0xf3)]();}),f['addEventListener'](F(0xb8),()=>{const H=F;this[H(0xbf)]();}),e['appendChild'](f);const g=document['createElement']('select');g['style']['display']=c[F(0xec)]===F(0xe9)?F(0xd6):'';for(const n of[F(0xb4),'boolean',F(0xba),F(0xdb),'date',F(0xe2),'screen','object']){const o=document['createElement'](F(0xbb));o[F(0xd4)]=n,o[F(0xc0)]=n;if(c[F(0xec)]===n)o['selected']=!![];g[F(0xbd)](o);}const h=document[F(0xf2)](F(0xb6));h['style']['display']=c[F(0xec)]==='enum'?'':F(0xd6),h[F(0xd4)]=c['values']??'',h[F(0xe6)]('input',()=>{c['values']=h['value'],this['changed']();}),g[F(0xe6)](F(0xc9),()=>{const I=F;c[I(0xec)]=g['value'],g[I(0xc7)]['display']=c['type']===I(0xe9)?I(0xd6):'',h[I(0xc7)]['display']=c[I(0xec)]==='enum'?'':I(0xd6),this['changed']();}),e[F(0xbd)](g),e['appendChild'](h);const i=document[F(0xf2)]('input');i['type']='text',i[F(0xd2)]='default',i[F(0xd4)]=c[F(0xdc)]??'',i[F(0xe6)](F(0xb6),()=>{const J=F;c['def']=i[J(0xd4)],this[J(0xf3)]();}),e['appendChild'](i);const j=document[F(0xf2)]('input');j[F(0xec)]='checkbox',j[F(0xc7)]['margin']='0',j['title']='internal',j[F(0xd0)]=!!c[F(0xe5)],j[F(0xe6)](F(0xc9),()=>{const K=F;c[K(0xe5)]=j[K(0xd0)],this[K(0xf3)]();}),e[F(0xbd)](j);const k=document['createElement']('button');k[F(0xc0)]='del',k[F(0xe6)]('click',()=>this[F(0xf4)](d)),e[F(0xbd)](k);const l=document['createElement'](F(0xd8));l[F(0xc0)]='↑',l[F(0xe6)](F(0xb7),()=>this['up'](d)),e[F(0xbd)](l);const m=document['createElement']('button');return m[F(0xc0)]='↓',m['addEventListener'](F(0xb7),()=>this['down'](d)),e['appendChild'](m),e;}[u(0xf3)](){const L=u;if(this['propertiesObj'])for(let d in this[L(0xcc)]){delete this[L(0xcc)][d];}for(let e of this['properties']){if(e['name']){for(let g of notAllowedChars)e[L(0xcd)]=e[L(0xcd)]['replaceAll'](g,'');e['name']=e[L(0xcd)][0x0]['toLowerCase']()+e['name']['substring'](0x1);let f={'type':e[L(0xec)]};if(e[L(0xdc)]){if(e['type']==L(0xba))f['default']=parseFloat(e[L(0xdc)]);else{if(e[L(0xec)]=='boolean')f['default']=e[L(0xdc)]=='true';else f[L(0xe0)]=e[L(0xdc)];}}if(e[L(0xe5)])f[L(0xe5)]=!![];e[L(0xec)]=='enum'&&(f[L(0xee)]=JSON[L(0xde)](e['values'])),this['propertiesObj'][e[L(0xcd)]]=f;}}}[u(0xc3)](){return this['changed'](),this['propertiesObj']?{...this['propertiesObj']}:{};}}customElements[u(0xe7)](u(0xc4),IobrokerWebuiControlPropertiesEditor);
const u=b;function a(){const L=['true','266223WxFhis','properties','18CrNift','define','defaultInternal','2ZwYwQq','option','none','_bindingsRefresh','internal','type','replaceAll','length','margin','get','click','2217798iTZbsf','color','propertiesObj','substring','changed','div','enum','down','addEnumProp','default','iobroker-webui-control-properties-editor','def','number','2193630VYJwMR','_createPropRow','onclick','2818977sfzSkl','createElement','selected','38870NQDSMX','style','!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^','template','value','_restoreCachedInititalValues','select','date','16Lgefpd','_bindingsParse','_collapsedGroups','input','setProperties','button','textContent','_propList','display','prop-row','name','appendChild','ready','refresh','has','values','push','addProp','screen','removeProp','set','172819EnKPfs','12760jLiftX','toLowerCase','addEventListener','_renderList','string','boolean','splice','title'];a=function(){return L;};return a();}(function(c,d){const t=b,e=c();while(!![]){try{const f=-parseInt(t(0xc7))/0x1+parseInt(t(0xd6))/0x2*(parseInt(t(0xd1))/0x3)+parseInt(t(0xb2))/0x4*(parseInt(t(0xaa))/0x5)+-parseInt(t(0xe1))/0x6+parseInt(t(0xf1))/0x7+-parseInt(t(0xc8))/0x8*(-parseInt(t(0xd3))/0x9)+parseInt(t(0xee))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x31799));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';function b(c,d){c=c-0xa9;const e=a();let f=e[c];return f;}const notAllowedChars=u(0xac);export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    }`;static [u(0xad)]=html`
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
        </div>`;constructor(){const v=u;super(),this[v(0xaf)]();}[u(0xbe)](){const w=u;this[w(0xb3)](),this['_assignEvents'](),this[w(0xb9)]=this['_getDomElement']('prop-list');}['properties'];[u(0xe3)];['defaultInternal'];[u(0xb4)]=new Set();['_propList'];[u(0xb6)](c){const x=u;this['propertiesObj']=c;if(c){this[x(0xd2)]=[];for(let d in c){let e=c[d];this['properties'][x(0xc2)]({'name':d,'type':e[x(0xdb)],'values':JSON['stringify'](e[x(0xc1)]),'def':e[x(0xea)],'internal':e['internal']});}}else this['properties']=null;this[x(0xd9)](),this['_renderList']();}[u(0xbf)](){const y=u;this[y(0xd9)](),this[y(0xcb)]();}[u(0xc3)](){const z=u;let c={'name':'','type':z(0xcc)};if(this['defaultInternal'])c['internal']=!![];this[z(0xd2)]['push'](c),this['_bindingsRefresh'](),this[z(0xcb)]();}[u(0xe9)](){const A=u;let c={'name':'','type':'enum','values':'[\x22a\x22,\x20\x22b\x22]'};if(this[A(0xd5)])c[A(0xda)]=!![];this[A(0xd2)][A(0xc2)](c),this[A(0xd9)](),this[A(0xcb)]();}[u(0xc5)](c){this['properties']['splice'](c,0x1),this['_renderList'](),this['changed']();}['up'](c){const B=u;if(c>0x0){const d=this[B(0xd2)][c];this['properties'][B(0xce)](c,0x1),this['properties'][B(0xce)](--c,0x0,d),this[B(0xcb)](),this['changed']();}}[u(0xe8)](c){const C=u;if(c<this[C(0xd2)][C(0xdd)]-0x1){const d=this['properties'][c];this[C(0xd2)]['splice'](c,0x1),this['properties'][C(0xce)](++c,0x0,d),this[C(0xcb)](),this[C(0xe5)]();}}[u(0xcb)](){const D=u;if(!this['_propList'])return;this[D(0xb9)]['innerHTML']='';if(!this[D(0xd2)])return;const c=new Map(),d=[];for(let e=0x0;e<this['properties']['length'];e++){const f=this[D(0xd2)][e],g=f['name']?f['name']['indexOf']('_'):-0x1;if(g>0x0){const h=f[D(0xbc)]['substring'](0x0,g);if(!c[D(0xc0)](h))c[D(0xc6)](h,[]);c[D(0xdf)](h)['push']({'item':f,'index':e});}else d[D(0xc2)]({'item':f,'index':e});}for(const {item:j,index:k}of d){this[D(0xb9)][D(0xbd)](this['_createPropRow'](j,k));}for(const [l,m]of c){const n=this['_collapsedGroups']['has'](l),o=document['createElement'](D(0xe6)),p=document['createElement']('div');p['className']='group-header',p[D(0xb8)]=(n?'▸\x20':'▾\x20')+l,p[D(0xcf)]=l,p[D(0xf0)]=()=>{const E=D;if(this[E(0xb4)]['has'](l))this['_collapsedGroups']['delete'](l);else this['_collapsedGroups']['add'](l);this[E(0xcb)]();},o['appendChild'](p);if(!n){const q=document['createElement']('div');q['className']='group-rows';for(const {item:r,index:s}of m){q[D(0xbd)](this[D(0xef)](r,s));}o['appendChild'](q);}this['_propList']['appendChild'](o);}}['_createPropRow'](c,d){const F=u,e=document[F(0xf2)](F(0xe6));e['className']=F(0xbb);const f=document[F(0xf2)]('input');f['value']=c['name']??'',f[F(0xca)](F(0xb5),()=>{const G=F;c['name']=f[G(0xae)],this['changed']();}),f[F(0xca)]('blur',()=>{this['_renderList']();}),e[F(0xbd)](f);const g=document[F(0xf2)](F(0xb0));g['style'][F(0xba)]=c[F(0xdb)]==='enum'?F(0xd8):'';for(const n of['string',F(0xcd),F(0xed),F(0xe2),F(0xb1),'signal',F(0xc4),'object']){const o=document[F(0xf2)](F(0xd7));o['value']=n,o['textContent']=n;if(c[F(0xdb)]===n)o[F(0xa9)]=!![];g[F(0xbd)](o);}const h=document['createElement']('input');h[F(0xab)][F(0xba)]=c['type']===F(0xe7)?'':F(0xd8),h[F(0xae)]=c[F(0xc1)]??'',h[F(0xca)](F(0xb5),()=>{const H=F;c[H(0xc1)]=h[H(0xae)],this['changed']();}),g['addEventListener']('change',()=>{const I=F;c[I(0xdb)]=g['value'],g['style']['display']=c['type']===I(0xe7)?I(0xd8):'',h[I(0xab)]['display']=c[I(0xdb)]==='enum'?'':I(0xd8),this['changed']();}),e['appendChild'](g),e[F(0xbd)](h);const i=document['createElement']('input');i[F(0xdb)]='text',i[F(0xcf)]=F(0xea),i['value']=c['def']??'',i['addEventListener'](F(0xb5),()=>{const J=F;c[J(0xec)]=i[J(0xae)],this['changed']();}),e[F(0xbd)](i);const j=document['createElement'](F(0xb5));j[F(0xdb)]='checkbox',j[F(0xab)][F(0xde)]='0',j[F(0xcf)]=F(0xda),j['checked']=!!c[F(0xda)],j['addEventListener']('change',()=>{c['internal']=j['checked'],this['changed']();}),e[F(0xbd)](j);const k=document['createElement'](F(0xb7));k['textContent']='del',k['addEventListener']('click',()=>this[F(0xc5)](d)),e['appendChild'](k);const l=document[F(0xf2)](F(0xb7));l['textContent']='↑',l['addEventListener']('click',()=>this['up'](d)),e[F(0xbd)](l);const m=document[F(0xf2)]('button');return m['textContent']='↓',m[F(0xca)](F(0xe0),()=>this['down'](d)),e['appendChild'](m),e;}[u(0xe5)](){const K=u;if(this['propertiesObj'])for(let d in this['propertiesObj']){delete this[K(0xe3)][d];}for(let e of this[K(0xd2)]){if(e[K(0xbc)]){for(let g of notAllowedChars)e['name']=e[K(0xbc)][K(0xdc)](g,'');e[K(0xbc)]=e['name'][0x0][K(0xc9)]()+e[K(0xbc)][K(0xe4)](0x1);let f={'type':e[K(0xdb)]};if(e['def']){if(e[K(0xdb)]==K(0xed))f['default']=parseFloat(e['def']);else{if(e['type']=='boolean')f['default']=e['def']==K(0xd0);else f['default']=e['def'];}}if(e['internal'])f[K(0xda)]=!![];e['type']==K(0xe7)&&(f[K(0xc1)]=JSON['parse'](e[K(0xc1)])),this['propertiesObj'][e[K(0xbc)]]=f;}}}['getProperties'](){return this['changed'](),this['propertiesObj']?{...this['propertiesObj']}:{};}}customElements[u(0xd4)](u(0xeb),IobrokerWebuiControlPropertiesEditor);
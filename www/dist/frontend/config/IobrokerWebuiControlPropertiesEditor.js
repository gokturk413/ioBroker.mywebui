const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=-parseInt(t(0xfb))/0x1*(-parseInt(t(0xdc))/0x2)+parseInt(t(0xcd))/0x3+-parseInt(t(0xe8))/0x4*(-parseInt(t(0xd1))/0x5)+-parseInt(t(0xca))/0x6*(-parseInt(t(0xed))/0x7)+parseInt(t(0xe9))/0x8*(-parseInt(t(0x10a))/0x9)+-parseInt(t(0xc8))/0xa+-parseInt(t(0x105))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xccba1));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';const notAllowedChars='!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^';function b(c,d){c=c-0xc3;const e=a();let f=e[c];return f;}export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static [u(0x100)]=css`
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
        </div>`;constructor(){super(),this['_restoreCachedInititalValues']();}[u(0xf4)](){const v=u;this['_bindingsParse'](),this[v(0xef)](),this['_propList']=this[v(0xe5)]('prop-list');}['properties'];[u(0xd0)];[u(0xff)];[u(0xf7)]=new Set();['_propList'];['setProperties'](c){const w=u;this['propertiesObj']=c;if(c){this[w(0x107)]=[];for(let d in c){let e=c[d];this['properties'][w(0xe0)]({'name':d,'type':e[w(0xec)],'values':JSON['stringify'](e['values']),'def':e[w(0x109)],'internal':e[w(0xc4)]});}}else this[w(0x107)]=null;this[w(0xf6)](),this['_renderList']();}[u(0x103)](){const x=u;this[x(0xf6)](),this[x(0xde)]();}['addProp'](){const y=u;let c={'name':'','type':y(0xe4)};if(this['defaultInternal'])c['internal']=!![];this[y(0x107)][y(0xe0)](c),this[y(0xf6)](),this['_renderList']();}['addEnumProp'](){const z=u;let c={'name':'','type':z(0xcf),'values':'[\x22a\x22,\x20\x22b\x22]'};if(this[z(0xff)])c[z(0xc4)]=!![];this['properties']['push'](c),this[z(0xf6)](),this[z(0xde)]();}['removeProp'](c){const A=u;this[A(0x107)][A(0xfc)](c,0x1),this['_renderList'](),this[A(0xd9)]();}['up'](c){const B=u;if(c>0x0){const d=this['properties'][c];this['properties']['splice'](c,0x1),this[B(0x107)][B(0xfc)](--c,0x0,d),this['_renderList'](),this['changed']();}}[u(0x102)](c){const C=u;if(c<this['properties'][C(0xd7)]-0x1){const d=this['properties'][c];this['properties']['splice'](c,0x1),this[C(0x107)]['splice'](++c,0x0,d),this['_renderList'](),this[C(0xd9)]();}}['_renderList'](){const D=u;if(!this[D(0xda)])return;this['_propList']['innerHTML']='';if(!this[D(0x107)])return;const c=new Map(),d=[];for(let e=0x0;e<this['properties']['length'];e++){const f=this['properties'][e],g=f[D(0xfe)]?f['name'][D(0xd3)]('_'):-0x1;if(g>0x0){const h=f[D(0xfe)][D(0xe2)](0x0,g);if(!c[D(0xcb)](h))c[D(0xfa)](h,[]);c['get'](h)[D(0xe0)]({'item':f,'index':e});}else d['push']({'item':f,'index':e});}for(const {item:j,index:k}of d){this['_propList']['appendChild'](this['_createPropRow'](j,k));}for(const [l,m]of c){const n=this['_collapsedGroups']['has'](l),o=document['createElement'](D(0xcc)),p=document['createElement']('div');p[D(0xc9)]='group-header',p['textContent']=(n?'▸\x20':'▾\x20')+l,p[D(0xc7)]=l,p['onclick']=()=>{const E=D;if(this[E(0xf7)]['has'](l))this['_collapsedGroups'][E(0xc6)](l);else this['_collapsedGroups']['add'](l);this['_renderList']();},o[D(0xf9)](p);if(!n){const q=document[D(0xd8)](D(0xcc));q[D(0xc9)]='group-rows';for(const {item:r,index:s}of m){q[D(0xf9)](this[D(0xdb)](r,s));}o['appendChild'](q);}this[D(0xda)]['appendChild'](o);}}[u(0xdb)](c,d){const F=u,e=document[F(0xd8)](F(0xcc));e['className']=F(0xf2);const f=document[F(0xd8)](F(0xf8));f['value']=c['name']??'',f['addEventListener']('input',()=>{c['name']=f['value'],this['changed']();}),f['addEventListener']('blur',()=>{this['_renderList']();}),e[F(0xf9)](f);const g=document[F(0xd8)]('select');g['style'][F(0xf5)]=c['type']==='enum'?F(0x101):'';for(const n of[F(0xe4),F(0xdf),'number',F(0xce),'date','signal',F(0xd5),F(0xc5)]){const o=document['createElement'](F(0xea));o[F(0xdd)]=n,o[F(0xeb)]=n;if(c[F(0xec)]===n)o['selected']=!![];g['appendChild'](o);}const h=document[F(0xd8)]('input');h[F(0x100)]['display']=c[F(0xec)]==='enum'?'':'none',h['value']=c['values']??'',h[F(0xd6)](F(0xf8),()=>{const G=F;c['values']=h[G(0xdd)],this['changed']();}),g[F(0xd6)](F(0x106),()=>{const H=F;c[H(0xec)]=g[H(0xdd)],g[H(0x100)][H(0xf5)]=c[H(0xec)]===H(0xcf)?'none':'',h[H(0x100)]['display']=c['type']===H(0xcf)?'':H(0x101),this['changed']();}),e['appendChild'](g),e['appendChild'](h);const i=document[F(0xd8)](F(0xf8));i[F(0xec)]=F(0xc3),i['title']='default',i[F(0xdd)]=c['def']??'',i['addEventListener']('input',()=>{const I=F;c[I(0xe3)]=i[I(0xdd)],this[I(0xd9)]();}),e['appendChild'](i);const j=document['createElement'](F(0xf8));j[F(0xec)]='checkbox',j[F(0x100)]['margin']='0',j[F(0xc7)]='internal',j['checked']=!!c[F(0xc4)],j['addEventListener']('change',()=>{const J=F;c[J(0xc4)]=j[J(0xf0)],this['changed']();}),e['appendChild'](j);const k=document['createElement']('button');k[F(0xeb)]='del',k['addEventListener']('click',()=>this[F(0xd4)](d)),e['appendChild'](k);const l=document['createElement']('button');l['textContent']='↑',l[F(0xd6)]('click',()=>this['up'](d)),e[F(0xf9)](l);const m=document['createElement'](F(0xe6));return m['textContent']='↓',m[F(0xd6)](F(0xfd),()=>this[F(0x102)](d)),e['appendChild'](m),e;}['changed'](){const K=u;if(this[K(0xd0)])for(let d in this[K(0xd0)]){delete this['propertiesObj'][d];}for(let e of this[K(0x107)]){if(e['name']){for(let g of notAllowedChars)e['name']=e['name'][K(0xd2)](g,'');e[K(0xfe)]=e['name'][0x0]['toLowerCase']()+e[K(0xfe)][K(0xe2)](0x1);let f={'type':e['type']};if(e['def']){if(e[K(0xec)]==K(0x108))f['default']=parseFloat(e[K(0xe3)]);else{if(e[K(0xec)]=='boolean')f[K(0x109)]=e['def']==K(0xee);else f['default']=e[K(0xe3)];}}if(e[K(0xc4)])f[K(0xc4)]=!![];e[K(0xec)]=='enum'&&(f['values']=JSON[K(0x104)](e[K(0xf3)])),this[K(0xd0)][e[K(0xfe)]]=f;}}}[u(0xe7)](){const L=u;return this['changed'](),this['propertiesObj']?{...this[L(0xd0)]}:{};}}customElements[u(0xe1)]('iobroker-webui-control-properties-editor',IobrokerWebuiControlPropertiesEditor);function a(){const M=['textContent','type','111706JbrTtz','true','_assignEvents','checked','template','prop-row','values','ready','display','_bindingsRefresh','_collapsedGroups','input','appendChild','set','884761dmvTmZ','splice','click','name','defaultInternal','style','none','down','refresh','parse','2439448ruzajn','change','properties','number','default','9WUEQnH','text','internal','object','delete','title','14583230RKtXfL','className','498ztKoSn','has','div','2628618ySXTpH','color','enum','propertiesObj','2309975ZIxnkD','replaceAll','indexOf','removeProp','screen','addEventListener','length','createElement','changed','_propList','_createPropRow','2AfJBLE','value','_renderList','boolean','push','define','substring','def','string','_getDomElement','button','getProperties','4bhPODM','8230592INUSCQ','option'];a=function(){return M;};return a();}
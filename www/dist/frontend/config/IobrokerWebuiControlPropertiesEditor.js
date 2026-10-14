const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=-parseInt(t(0xe1))/0x1+-parseInt(t(0x119))/0x2+-parseInt(t(0xef))/0x3+-parseInt(t(0x10a))/0x4+-parseInt(t(0x100))/0x5+parseInt(t(0x10e))/0x6*(parseInt(t(0xfb))/0x7)+parseInt(t(0xe0))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x1d73b));function b(c,d){c=c-0xde;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';const notAllowedChars=u(0x101);export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static [u(0xe2)]=css`
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
    }`;static [u(0x116)]=html`
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
        </div>`;constructor(){const v=u;super(),this[v(0xe9)]();}['ready'](){const w=u;this['_bindingsParse'](),this['_assignEvents'](),this['_propList']=this['_getDomElement'](w(0x107));}['properties'];[u(0xfa)];['defaultInternal'];['_collapsedGroups']=new Set();['_propList'];[u(0x10d)](c){const x=u;this[x(0xfa)]=c;if(c){this['properties']=[];for(let d in c){let e=c[d];this[x(0xe4)]['push']({'name':d,'type':e['type'],'values':JSON['stringify'](e[x(0x103)]),'def':e[x(0xf6)],'internal':e['internal']});}}else this['properties']=null;this['_bindingsRefresh'](),this['_renderList']();}['refresh'](){const y=u;this[y(0xec)](),this[y(0x10f)]();}['addProp'](){const z=u;let c={'name':'','type':'string'};if(this[z(0xf5)])c['internal']=!![];this['properties'][z(0xf9)](c),this['_bindingsRefresh'](),this['_renderList']();}['addEnumProp'](){const A=u;let c={'name':'','type':'enum','values':'[\x22a\x22,\x20\x22b\x22]'};if(this['defaultInternal'])c[A(0x111)]=!![];this['properties']['push'](c),this['_bindingsRefresh'](),this[A(0x10f)]();}['removeProp'](c){const B=u;this[B(0xe4)][B(0x104)](c,0x1),this['_renderList'](),this['changed']();}['up'](c){const C=u;if(c>0x0){const d=this[C(0xe4)][c];this['properties'][C(0x104)](c,0x1),this['properties']['splice'](--c,0x0,d),this['_renderList'](),this[C(0x11a)]();}}[u(0x11c)](c){const D=u;if(c<this[D(0xe4)]['length']-0x1){const d=this[D(0xe4)][c];this[D(0xe4)][D(0x104)](c,0x1),this['properties']['splice'](++c,0x0,d),this[D(0x10f)](),this[D(0x11a)]();}}[u(0x10f)](){const E=u;if(!this['_propList'])return;this[E(0xf1)][E(0x113)]='';if(!this['properties'])return;const c=new Map(),d=[];for(let e=0x0;e<this[E(0xe4)]['length'];e++){const f=this['properties'][e],g=f['name']?f[E(0x109)]['indexOf']('_'):-0x1;if(g>0x0){const h=f['name']['substring'](0x0,g);if(!c[E(0x10c)](h))c[E(0x118)](h,[]);c[E(0x108)](h)['push']({'item':f,'index':e});}else d[E(0xf9)]({'item':f,'index':e});}for(const {item:j,index:k}of d){this['_propList']['appendChild'](this[E(0x106)](j,k));}for(const [l,m]of c){const n=this['_collapsedGroups'][E(0x10c)](l),o=document[E(0x102)](E(0xe8)),p=document['createElement'](E(0xe8));p['className']='group-header',p['textContent']=(n?'▸\x20':'▾\x20')+l,p[E(0xf3)]=l,p[E(0x10b)]=()=>{const F=E;if(this[F(0x105)][F(0x10c)](l))this[F(0x105)][F(0x115)](l);else this[F(0x105)]['add'](l);this['_renderList']();},o[E(0x11b)](p);if(!n){const q=document['createElement'](E(0xe8));q[E(0xfc)]=E(0xeb);for(const {item:r,index:s}of m){q['appendChild'](this['_createPropRow'](r,s));}o[E(0x11b)](q);}this['_propList']['appendChild'](o);}}['_createPropRow'](c,d){const G=u,e=document[G(0x102)](G(0xe8));e[G(0xfc)]=G(0xfe);const f=document[G(0x102)]('input');f['value']=c['name']??'',f['addEventListener']('input',()=>{const H=G;c['name']=f[H(0xe7)],this[H(0x11a)]();}),f['addEventListener']('blur',()=>{const I=G;this[I(0x10f)]();}),e[G(0x11b)](f);const g=document['createElement'](G(0xfd));g['style']['display']=c['type']==='enum'?'none':'';for(const n of[G(0xf0),'boolean','number',G(0xdf),G(0xf2),'signal','screen','object']){const o=document['createElement'](G(0xed));o['value']=n,o['textContent']=n;if(c['type']===n)o['selected']=!![];g['appendChild'](o);}const h=document[G(0x102)](G(0xf7));h['style'][G(0xe6)]=c[G(0xe3)]===G(0xf8)?'':G(0x110),h['value']=c['values']??'',h['addEventListener'](G(0xf7),()=>{const J=G;c['values']=h['value'],this[J(0x11a)]();}),g['addEventListener'](G(0x112),()=>{const K=G;c[K(0xe3)]=g['value'],g[K(0xe2)][K(0xe6)]=c['type']===K(0xf8)?K(0x110):'',h[K(0xe2)][K(0xe6)]=c['type']==='enum'?'':K(0x110),this['changed']();}),e[G(0x11b)](g),e['appendChild'](h);const i=document['createElement'](G(0xf7));i['type']='text',i['title']=G(0xf6),i[G(0xe7)]=c[G(0xe5)]??'',i['addEventListener']('input',()=>{const L=G;c['def']=i[L(0xe7)],this['changed']();}),e['appendChild'](i);const j=document['createElement']('input');j['type']='checkbox',j['style']['margin']='0',j['title']=G(0x111),j[G(0xea)]=!!c['internal'],j['addEventListener'](G(0x112),()=>{const M=G;c[M(0x111)]=j['checked'],this[M(0x11a)]();}),e[G(0x11b)](j);const k=document[G(0x102)]('button');k['textContent']='del',k[G(0xee)]('click',()=>this['removeProp'](d)),e[G(0x11b)](k);const l=document['createElement'](G(0xde));l['textContent']='↑',l['addEventListener'](G(0x114),()=>this['up'](d)),e['appendChild'](l);const m=document['createElement'](G(0xde));return m['textContent']='↓',m['addEventListener'](G(0x114),()=>this['down'](d)),e[G(0x11b)](m),e;}[u(0x11a)](){const N=u;if(this[N(0xfa)])for(let d in this[N(0xfa)]){delete this['propertiesObj'][d];}for(let e of this[N(0xe4)]){if(e[N(0x109)]){for(let g of notAllowedChars)e['name']=e[N(0x109)]['replaceAll'](g,'');e[N(0x109)]=e[N(0x109)][0x0]['toLowerCase']()+e[N(0x109)][N(0xff)](0x1);let f={'type':e['type']};if(e['def']){if(e['type']=='number')f['default']=parseFloat(e[N(0xe5)]);else{if(e[N(0xe3)]=='boolean')f[N(0xf6)]=e['def']=='true';else f['default']=e['def'];}}if(e['internal'])f['internal']=!![];e[N(0xe3)]==N(0xf8)&&(f['values']=JSON['parse'](e[N(0x103)])),this[N(0xfa)][e[N(0x109)]]=f;}}}['getProperties'](){const O=u;return this[O(0x11a)](),this['propertiesObj']?{...this['propertiesObj']}:{};}}function a(){const P=['prop-row','substring','780565QRJQFQ','!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^','createElement','values','splice','_collapsedGroups','_createPropRow','prop-list','get','name','255884lVyTtN','onclick','has','setProperties','426FFLWCs','_renderList','none','internal','change','innerHTML','click','delete','template','iobroker-webui-control-properties-editor','set','260752ObScEY','changed','appendChild','down','button','color','3663032BnAnzw','80532CKGImi','style','type','properties','def','display','value','div','_restoreCachedInititalValues','checked','group-rows','_bindingsRefresh','option','addEventListener','180540bdfgld','string','_propList','date','title','define','defaultInternal','default','input','enum','push','propertiesObj','15176upkmPg','className','select'];a=function(){return P;};return a();}customElements[u(0xf4)](u(0x117),IobrokerWebuiControlPropertiesEditor);
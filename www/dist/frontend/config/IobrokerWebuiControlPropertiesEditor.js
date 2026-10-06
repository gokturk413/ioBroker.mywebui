function b(c,d){c=c-0x179;const e=a();let f=e[c];return f;}const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=-parseInt(t(0x194))/0x1*(-parseInt(t(0x17d))/0x2)+parseInt(t(0x189))/0x3+-parseInt(t(0x1b2))/0x4*(parseInt(t(0x190))/0x5)+parseInt(t(0x1a4))/0x6*(parseInt(t(0x19a))/0x7)+-parseInt(t(0x180))/0x8+-parseInt(t(0x18e))/0x9+-parseInt(t(0x1b7))/0xa*(-parseInt(t(0x1a5))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x40199));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';const notAllowedChars='!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^';export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    }`;static [u(0x1bd)]=html`
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
        </div>`;constructor(){const v=u;super(),this[v(0x198)]();}[u(0x181)](){const w=u;this[w(0x17c)](),this['_assignEvents'](),this['_propList']=this['_getDomElement'](w(0x191));}[u(0x19b)];[u(0x195)];[u(0x18b)];[u(0x1b1)]=new Set();[u(0x1b6)];[u(0x1a1)](c){const x=u;this[x(0x195)]=c;if(c){this['properties']=[];for(let d in c){let e=c[d];this['properties']['push']({'name':d,'type':e[x(0x17b)],'values':JSON['stringify'](e['values']),'def':e[x(0x1ac)],'internal':e['internal']});}}else this[x(0x19b)]=null;this['_bindingsRefresh'](),this['_renderList']();}['refresh'](){const y=u;this[y(0x179)](),this['_renderList']();}[u(0x193)](){const z=u;let c={'name':'','type':'string'};if(this['defaultInternal'])c['internal']=!![];this['properties'][z(0x1b5)](c),this['_bindingsRefresh'](),this[z(0x1ab)]();}[u(0x1c2)](){const A=u;let c={'name':'','type':'enum','values':'[\x22a\x22,\x20\x22b\x22]'};if(this['defaultInternal'])c[A(0x1c0)]=!![];this[A(0x19b)][A(0x1b5)](c),this[A(0x179)](),this['_renderList']();}[u(0x1ae)](c){const B=u;this['properties']['splice'](c,0x1),this[B(0x1ab)](),this['changed']();}['up'](c){const C=u;if(c>0x0){const d=this['properties'][c];this[C(0x19b)][C(0x19d)](c,0x1),this[C(0x19b)]['splice'](--c,0x0,d),this['_renderList'](),this['changed']();}}['down'](c){const D=u;if(c<this['properties'][D(0x17e)]-0x1){const d=this[D(0x19b)][c];this['properties']['splice'](c,0x1),this[D(0x19b)]['splice'](++c,0x0,d),this[D(0x1ab)](),this[D(0x182)]();}}[u(0x1ab)](){const E=u;if(!this[E(0x1b6)])return;this['_propList'][E(0x1be)]='';if(!this[E(0x19b)])return;const c=new Map(),d=[];for(let e=0x0;e<this[E(0x19b)][E(0x17e)];e++){const f=this[E(0x19b)][e],g=f[E(0x19f)]?f[E(0x19f)]['indexOf']('_'):-0x1;if(g>0x0){const h=f['name']['substring'](0x0,g);if(!c['has'](h))c[E(0x1a2)](h,[]);c[E(0x188)](h)['push']({'item':f,'index':e});}else d[E(0x1b5)]({'item':f,'index':e});}for(const {item:j,index:k}of d){this['_propList'][E(0x192)](this[E(0x1aa)](j,k));}for(const [l,m]of c){const n=this['_collapsedGroups']['has'](l),o=document['createElement'](E(0x185)),p=document[E(0x183)](E(0x185));p[E(0x1b3)]='group-header',p[E(0x1a7)]=(n?'▸\x20':'▾\x20')+l,p[E(0x199)]=l,p[E(0x1a0)]=()=>{const F=E;if(this[F(0x1b1)]['has'](l))this[F(0x1b1)][F(0x19c)](l);else this['_collapsedGroups']['add'](l);this[F(0x1ab)]();},o[E(0x192)](p);if(!n){const q=document['createElement']('div');q['className']=E(0x18a);for(const {item:r,index:s}of m){q['appendChild'](this[E(0x1aa)](r,s));}o[E(0x192)](q);}this[E(0x1b6)][E(0x192)](o);}}['_createPropRow'](c,d){const G=u,e=document['createElement'](G(0x185));e['className']=G(0x17f);const f=document[G(0x183)]('input');f[G(0x1b4)]=c['name']??'',f[G(0x1a3)](G(0x1b9),()=>{c['name']=f['value'],this['changed']();}),f[G(0x1a3)](G(0x184),()=>{this['_renderList']();}),e[G(0x192)](f);const g=document[G(0x183)]('select');g['style']['display']=c[G(0x17b)]==='enum'?G(0x1af):'';for(const n of['string',G(0x1a6),G(0x1c1),G(0x1ad),G(0x1b8),G(0x1b0),'screen','object']){const o=document[G(0x183)](G(0x1ba));o['value']=n,o[G(0x1a7)]=n;if(c['type']===n)o['selected']=!![];g['appendChild'](o);}const h=document[G(0x183)]('input');h['style'][G(0x18f)]=c['type']===G(0x196)?'':G(0x1af),h['value']=c['values']??'',h['addEventListener']('input',()=>{const H=G;c[H(0x1bb)]=h['value'],this[H(0x182)]();}),g[G(0x1a3)]('change',()=>{const I=G;c[I(0x17b)]=g[I(0x1b4)],g[I(0x18d)]['display']=c['type']===I(0x196)?I(0x1af):'',h[I(0x18d)][I(0x18f)]=c['type']===I(0x196)?'':'none',this[I(0x182)]();}),e['appendChild'](g),e[G(0x192)](h);const i=document[G(0x183)]('input');i[G(0x17b)]=G(0x1bc),i[G(0x199)]='default',i['value']=c[G(0x187)]??'',i['addEventListener']('input',()=>{const J=G;c['def']=i['value'],this[J(0x182)]();}),e[G(0x192)](i);const j=document[G(0x183)](G(0x1b9));j['type']='checkbox',j[G(0x18d)]['margin']='0',j[G(0x199)]=G(0x1c0),j['checked']=!!c['internal'],j[G(0x1a3)]('change',()=>{const K=G;c[K(0x1c0)]=j[K(0x19e)],this['changed']();}),e['appendChild'](j);const k=document[G(0x183)]('button');k[G(0x1a7)]='del',k[G(0x1a3)](G(0x18c),()=>this['removeProp'](d)),e[G(0x192)](k);const l=document[G(0x183)](G(0x1a8));l[G(0x1a7)]='↑',l['addEventListener']('click',()=>this['up'](d)),e[G(0x192)](l);const m=document['createElement'](G(0x1a8));return m['textContent']='↓',m['addEventListener']('click',()=>this['down'](d)),e[G(0x192)](m),e;}[u(0x182)](){const L=u;if(this['propertiesObj'])for(let d in this[L(0x195)]){delete this[L(0x195)][d];}for(let e of this[L(0x19b)]){if(e[L(0x19f)]){for(let g of notAllowedChars)e['name']=e[L(0x19f)]['replaceAll'](g,'');e[L(0x19f)]=e['name'][0x0]['toLowerCase']()+e['name']['substring'](0x1);let f={'type':e['type']};if(e['def']){if(e['type']==L(0x1c1))f[L(0x1ac)]=parseFloat(e[L(0x187)]);else{if(e[L(0x17b)]==L(0x1a6))f[L(0x1ac)]=e['def']==L(0x197);else f[L(0x1ac)]=e['def'];}}if(e[L(0x1c0)])f['internal']=!![];e['type']==L(0x196)&&(f[L(0x1bb)]=JSON[L(0x1a9)](e[L(0x1bb)])),this[L(0x195)][e[L(0x19f)]]=f;}}}[u(0x186)](){const M=u;return this[M(0x182)](),this['propertiesObj']?{...this[M(0x195)]}:{};}}function a(){const N=['setProperties','set','addEventListener','6FjriNG','4730FqyGYO','boolean','textContent','button','parse','_createPropRow','_renderList','default','color','removeProp','none','signal','_collapsedGroups','570508LZDJdo','className','value','push','_propList','7630BdiSss','date','input','option','values','text','template','innerHTML','iobroker-webui-control-properties-editor','internal','number','addEnumProp','_bindingsRefresh','define','type','_bindingsParse','1810zEsGDC','length','prop-row','2829360QCIQfy','ready','changed','createElement','blur','div','getProperties','def','get','1105506MKpVrD','group-rows','defaultInternal','click','style','4647204ZyniFC','display','5wCCQBt','prop-list','appendChild','addProp','181TNFiSP','propertiesObj','enum','true','_restoreCachedInititalValues','title','2903663FNqPed','properties','delete','splice','checked','name','onclick'];a=function(){return N;};return a();}customElements[u(0x17a)](u(0x1bf),IobrokerWebuiControlPropertiesEditor);
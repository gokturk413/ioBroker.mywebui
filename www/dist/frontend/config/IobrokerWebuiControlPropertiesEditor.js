const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=parseInt(t(0x1bf))/0x1*(-parseInt(t(0x1bc))/0x2)+parseInt(t(0x195))/0x3*(parseInt(t(0x197))/0x4)+-parseInt(t(0x1af))/0x5+parseInt(t(0x1b6))/0x6*(-parseInt(t(0x183))/0x7)+parseInt(t(0x190))/0x8*(-parseInt(t(0x1ab))/0x9)+parseInt(t(0x182))/0xa*(parseInt(t(0x1b8))/0xb)+parseInt(t(0x185))/0xc*(parseInt(t(0x198))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x67636));function b(c,d){c=c-0x17f;const e=a();let f=e[c];return f;}function a(){const N=['number','margin','string','push','112dVKhwo','substring','div','_getDomElement','get','1125429zxwCYK','delete','4UncqBl','1401283jQAkKR','template','splice','_renderList','boolean','display','type','none','appendChild','date','indexOf','option','style','value','add','down','input','internal','change','532611DQIQut','def','_bindingsRefresh','checked','143190DaiUcZ','signal','_propList','className','createElement','_collapsedGroups','properties','10452cYPfZc','color','2365tTQmjs','addEventListener','_createPropRow','refresh','12ohaVLZ','propertiesObj','replaceAll','103039delISW','enum','values','name','group-rows','button','title','setProperties','7720WGplGn','175eYyFAy','_bindingsParse','156HKnZQG','define','selected','changed','innerHTML','textContent','defaultInternal'];a=function(){return N;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';const notAllowedChars='!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^';export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static [u(0x1a4)]=css`
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
    }`;static [u(0x199)]=html`
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
        </div>`;constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const v=u;this[v(0x184)](),this['_assignEvents'](),this[v(0x1b1)]=this[v(0x193)]('prop-list');}['properties'];['propertiesObj'];[u(0x18b)];[u(0x1b4)]=new Set();['_propList'];[u(0x181)](c){const w=u;this['propertiesObj']=c;if(c){this[w(0x1b5)]=[];for(let d in c){let e=c[d];this[w(0x1b5)]['push']({'name':d,'type':e[w(0x19e)],'values':JSON['stringify'](e['values']),'def':e['default'],'internal':e[w(0x1a9)]});}}else this[w(0x1b5)]=null;this[w(0x1ad)](),this[w(0x19b)]();}[u(0x1bb)](){const x=u;this['_bindingsRefresh'](),this[x(0x19b)]();}['addProp'](){const y=u;let c={'name':'','type':y(0x18e)};if(this['defaultInternal'])c['internal']=!![];this[y(0x1b5)][y(0x18f)](c),this['_bindingsRefresh'](),this['_renderList']();}['addEnumProp'](){const z=u;let c={'name':'','type':'enum','values':'[\x22a\x22,\x20\x22b\x22]'};if(this[z(0x18b)])c['internal']=!![];this['properties']['push'](c),this[z(0x1ad)](),this[z(0x19b)]();}['removeProp'](c){const A=u;this['properties'][A(0x19a)](c,0x1),this[A(0x19b)](),this['changed']();}['up'](c){const B=u;if(c>0x0){const d=this[B(0x1b5)][c];this['properties']['splice'](c,0x1),this['properties']['splice'](--c,0x0,d),this['_renderList'](),this[B(0x188)]();}}['down'](c){const C=u;if(c<this[C(0x1b5)]['length']-0x1){const d=this['properties'][c];this[C(0x1b5)]['splice'](c,0x1),this[C(0x1b5)]['splice'](++c,0x0,d),this[C(0x19b)](),this[C(0x188)]();}}[u(0x19b)](){const D=u;if(!this['_propList'])return;this[D(0x1b1)][D(0x189)]='';if(!this[D(0x1b5)])return;const c=new Map(),d=[];for(let e=0x0;e<this[D(0x1b5)]['length'];e++){const f=this[D(0x1b5)][e],g=f['name']?f['name'][D(0x1a2)]('_'):-0x1;if(g>0x0){const h=f['name'][D(0x191)](0x0,g);if(!c['has'](h))c['set'](h,[]);c[D(0x194)](h)[D(0x18f)]({'item':f,'index':e});}else d[D(0x18f)]({'item':f,'index':e});}for(const {item:j,index:k}of d){this['_propList'][D(0x1a0)](this['_createPropRow'](j,k));}for(const [l,m]of c){const n=this['_collapsedGroups']['has'](l),o=document[D(0x1b3)]('div'),p=document['createElement'](D(0x192));p[D(0x1b2)]='group-header',p[D(0x18a)]=(n?'▸\x20':'▾\x20')+l,p['title']=l,p['onclick']=()=>{const E=D;if(this['_collapsedGroups']['has'](l))this['_collapsedGroups'][E(0x196)](l);else this[E(0x1b4)][E(0x1a6)](l);this[E(0x19b)]();},o['appendChild'](p);if(!n){const q=document['createElement'](D(0x192));q[D(0x1b2)]=D(0x1c3);for(const {item:r,index:s}of m){q[D(0x1a0)](this['_createPropRow'](r,s));}o[D(0x1a0)](q);}this[D(0x1b1)][D(0x1a0)](o);}}[u(0x1ba)](c,d){const F=u,e=document['createElement'](F(0x192));e['className']='prop-row';const f=document[F(0x1b3)](F(0x1a8));f['value']=c['name']??'',f[F(0x1b9)](F(0x1a8),()=>{const G=F;c[G(0x1c2)]=f['value'],this['changed']();}),f['addEventListener']('blur',()=>{this['_renderList']();}),e['appendChild'](f);const g=document[F(0x1b3)]('select');g[F(0x1a4)][F(0x19d)]=c[F(0x19e)]===F(0x1c0)?F(0x19f):'';for(const n of[F(0x18e),'boolean','number',F(0x1b7),F(0x1a1),F(0x1b0),'screen','object']){const o=document['createElement'](F(0x1a3));o['value']=n,o['textContent']=n;if(c[F(0x19e)]===n)o[F(0x187)]=!![];g[F(0x1a0)](o);}const h=document['createElement']('input');h['style'][F(0x19d)]=c[F(0x19e)]==='enum'?'':F(0x19f),h[F(0x1a5)]=c[F(0x1c1)]??'',h['addEventListener']('input',()=>{const H=F;c[H(0x1c1)]=h['value'],this['changed']();}),g[F(0x1b9)]('change',()=>{const I=F;c['type']=g[I(0x1a5)],g['style']['display']=c[I(0x19e)]==='enum'?I(0x19f):'',h['style'][I(0x19d)]=c[I(0x19e)]==='enum'?'':I(0x19f),this[I(0x188)]();}),e['appendChild'](g),e['appendChild'](h);const i=document['createElement']('input');i[F(0x19e)]='text',i[F(0x180)]='default',i['value']=c[F(0x1ac)]??'',i['addEventListener'](F(0x1a8),()=>{const J=F;c['def']=i[J(0x1a5)],this[J(0x188)]();}),e[F(0x1a0)](i);const j=document[F(0x1b3)]('input');j[F(0x19e)]='checkbox',j[F(0x1a4)][F(0x18d)]='0',j[F(0x180)]='internal',j[F(0x1ae)]=!!c[F(0x1a9)],j[F(0x1b9)](F(0x1aa),()=>{const K=F;c[K(0x1a9)]=j[K(0x1ae)],this[K(0x188)]();}),e['appendChild'](j);const k=document[F(0x1b3)](F(0x17f));k[F(0x18a)]='del',k['addEventListener']('click',()=>this['removeProp'](d)),e['appendChild'](k);const l=document['createElement'](F(0x17f));l[F(0x18a)]='↑',l['addEventListener']('click',()=>this['up'](d)),e['appendChild'](l);const m=document[F(0x1b3)](F(0x17f));return m['textContent']='↓',m['addEventListener']('click',()=>this[F(0x1a7)](d)),e['appendChild'](m),e;}[u(0x188)](){const L=u;if(this[L(0x1bd)])for(let d in this[L(0x1bd)]){delete this[L(0x1bd)][d];}for(let e of this['properties']){if(e['name']){for(let g of notAllowedChars)e['name']=e[L(0x1c2)][L(0x1be)](g,'');e['name']=e['name'][0x0]['toLowerCase']()+e[L(0x1c2)][L(0x191)](0x1);let f={'type':e['type']};if(e['def']){if(e['type']==L(0x18c))f['default']=parseFloat(e[L(0x1ac)]);else{if(e[L(0x19e)]==L(0x19c))f['default']=e['def']=='true';else f['default']=e[L(0x1ac)];}}if(e['internal'])f['internal']=!![];e['type']=='enum'&&(f[L(0x1c1)]=JSON['parse'](e['values'])),this[L(0x1bd)][e[L(0x1c2)]]=f;}}}['getProperties'](){const M=u;return this[M(0x188)](),this[M(0x1bd)]?{...this['propertiesObj']}:{};}}customElements[u(0x186)]('iobroker-webui-control-properties-editor',IobrokerWebuiControlPropertiesEditor);
const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=parseInt(t(0x195))/0x1+-parseInt(t(0x187))/0x2+parseInt(t(0x18a))/0x3+parseInt(t(0x16e))/0x4+parseInt(t(0x17f))/0x5*(-parseInt(t(0x197))/0x6)+parseInt(t(0x18f))/0x7*(-parseInt(t(0x1a6))/0x8)+parseInt(t(0x175))/0x9*(parseInt(t(0x16f))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc6c29));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';function a(){const N=['appendChild','createElement','enum','removeProp','internal','_collapsedGroups','setProperties','1669540AuPOxZ','properties','has','4547865pKHtAB','input','push','checked','type','8989309dSstbC','changed','_bindingsRefresh','_renderList','value','default','649672wgHmdz','div','2131392mkciPC','title','def','_getDomElement','string','none','number','delete','button','change','splice','down','_propList','parse','textContent','8zQVUQA','innerHTML','className','defaultInternal','name','addProp','click','3608804JNfwHi','10sWxAIo','_bindingsParse','group-header','get','propertiesObj','template','5181426qcpKFy','_assignEvents','display','_createPropRow','blur','addEventListener','length','values','boolean','signal','10cZLBZM'];a=function(){return N;};return a();}function b(c,d){c=c-0x16b;const e=a();let f=e[c];return f;}const notAllowedChars='!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^';export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    }`;static [u(0x174)]=html`
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
        </div>`;constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const v=u;this[v(0x170)](),this[v(0x176)](),this[v(0x1a3)]=this[v(0x19a)]('prop-list');}[u(0x188)];[u(0x173)];[u(0x1a9)];['_collapsedGroups']=new Set();['_propList'];[u(0x186)](c){const w=u;this[w(0x173)]=c;if(c){this['properties']=[];for(let d in c){let e=c[d];this['properties'][w(0x18c)]({'name':d,'type':e[w(0x18e)],'values':JSON['stringify'](e[w(0x17c)]),'def':e['default'],'internal':e[w(0x184)]});}}else this['properties']=null;this[w(0x191)](),this[w(0x192)]();}['refresh'](){const x=u;this[x(0x191)](),this['_renderList']();}[u(0x16c)](){const y=u;let c={'name':'','type':'string'};if(this[y(0x1a9)])c[y(0x184)]=!![];this[y(0x188)]['push'](c),this['_bindingsRefresh'](),this[y(0x192)]();}['addEnumProp'](){const z=u;let c={'name':'','type':'enum','values':'[\x22a\x22,\x20\x22b\x22]'};if(this['defaultInternal'])c['internal']=!![];this[z(0x188)][z(0x18c)](c),this[z(0x191)](),this[z(0x192)]();}[u(0x183)](c){const A=u;this[A(0x188)][A(0x1a1)](c,0x1),this[A(0x192)](),this[A(0x190)]();}['up'](c){const B=u;if(c>0x0){const d=this['properties'][c];this[B(0x188)][B(0x1a1)](c,0x1),this[B(0x188)]['splice'](--c,0x0,d),this['_renderList'](),this['changed']();}}[u(0x1a2)](c){const C=u;if(c<this['properties'][C(0x17b)]-0x1){const d=this['properties'][c];this[C(0x188)][C(0x1a1)](c,0x1),this['properties']['splice'](++c,0x0,d),this['_renderList'](),this['changed']();}}[u(0x192)](){const D=u;if(!this[D(0x1a3)])return;this['_propList'][D(0x1a7)]='';if(!this[D(0x188)])return;const c=new Map(),d=[];for(let e=0x0;e<this[D(0x188)]['length'];e++){const f=this['properties'][e],g=f['name']?f[D(0x16b)]['indexOf']('_'):-0x1;if(g>0x0){const h=f[D(0x16b)]['substring'](0x0,g);if(!c[D(0x189)](h))c['set'](h,[]);c[D(0x172)](h)['push']({'item':f,'index':e});}else d[D(0x18c)]({'item':f,'index':e});}for(const {item:j,index:k}of d){this[D(0x1a3)][D(0x180)](this[D(0x178)](j,k));}for(const [l,m]of c){const n=this['_collapsedGroups'][D(0x189)](l),o=document[D(0x181)]('div'),p=document['createElement'](D(0x196));p['className']=D(0x171),p['textContent']=(n?'▸\x20':'▾\x20')+l,p['title']=l,p['onclick']=()=>{const E=D;if(this['_collapsedGroups'][E(0x189)](l))this[E(0x185)][E(0x19e)](l);else this[E(0x185)]['add'](l);this[E(0x192)]();},o[D(0x180)](p);if(!n){const q=document['createElement'](D(0x196));q[D(0x1a8)]='group-rows';for(const {item:r,index:s}of m){q['appendChild'](this['_createPropRow'](r,s));}o[D(0x180)](q);}this[D(0x1a3)][D(0x180)](o);}}['_createPropRow'](c,d){const F=u,e=document[F(0x181)]('div');e[F(0x1a8)]='prop-row';const f=document[F(0x181)]('input');f['value']=c[F(0x16b)]??'',f[F(0x17a)]('input',()=>{const G=F;c[G(0x16b)]=f[G(0x193)],this['changed']();}),f[F(0x17a)](F(0x179),()=>{this['_renderList']();}),e[F(0x180)](f);const g=document[F(0x181)]('select');g['style']['display']=c['type']===F(0x182)?F(0x19c):'';for(const n of[F(0x19b),F(0x17d),'number','color','date',F(0x17e),'screen','object']){const o=document[F(0x181)]('option');o['value']=n,o['textContent']=n;if(c[F(0x18e)]===n)o['selected']=!![];g['appendChild'](o);}const h=document['createElement']('input');h['style'][F(0x177)]=c['type']===F(0x182)?'':F(0x19c),h['value']=c['values']??'',h[F(0x17a)]('input',()=>{const H=F;c[H(0x17c)]=h['value'],this[H(0x190)]();}),g['addEventListener'](F(0x1a0),()=>{const I=F;c['type']=g['value'],g['style'][I(0x177)]=c[I(0x18e)]==='enum'?I(0x19c):'',h['style']['display']=c['type']==='enum'?'':I(0x19c),this[I(0x190)]();}),e['appendChild'](g),e['appendChild'](h);const i=document[F(0x181)](F(0x18b));i[F(0x18e)]='text',i['title']='default',i[F(0x193)]=c[F(0x199)]??'',i['addEventListener']('input',()=>{const J=F;c['def']=i[J(0x193)],this[J(0x190)]();}),e['appendChild'](i);const j=document['createElement']('input');j[F(0x18e)]='checkbox',j['style']['margin']='0',j[F(0x198)]='internal',j[F(0x18d)]=!!c[F(0x184)],j[F(0x17a)]('change',()=>{const K=F;c['internal']=j[K(0x18d)],this[K(0x190)]();}),e[F(0x180)](j);const k=document['createElement'](F(0x19f));k['textContent']='del',k['addEventListener']('click',()=>this[F(0x183)](d)),e['appendChild'](k);const l=document[F(0x181)](F(0x19f));l['textContent']='↑',l[F(0x17a)](F(0x16d),()=>this['up'](d)),e['appendChild'](l);const m=document[F(0x181)](F(0x19f));return m[F(0x1a5)]='↓',m['addEventListener'](F(0x16d),()=>this['down'](d)),e[F(0x180)](m),e;}['changed'](){const L=u;if(this[L(0x173)])for(let d in this[L(0x173)]){delete this['propertiesObj'][d];}for(let e of this['properties']){if(e['name']){for(let g of notAllowedChars)e[L(0x16b)]=e[L(0x16b)]['replaceAll'](g,'');e[L(0x16b)]=e['name'][0x0]['toLowerCase']()+e['name']['substring'](0x1);let f={'type':e[L(0x18e)]};if(e[L(0x199)]){if(e[L(0x18e)]==L(0x19d))f[L(0x194)]=parseFloat(e[L(0x199)]);else{if(e['type']==L(0x17d))f[L(0x194)]=e[L(0x199)]=='true';else f[L(0x194)]=e['def'];}}if(e[L(0x184)])f[L(0x184)]=!![];e['type']=='enum'&&(f['values']=JSON[L(0x1a4)](e[L(0x17c)])),this[L(0x173)][e['name']]=f;}}}['getProperties'](){const M=u;return this['changed'](),this[M(0x173)]?{...this['propertiesObj']}:{};}}customElements['define']('iobroker-webui-control-properties-editor',IobrokerWebuiControlPropertiesEditor);
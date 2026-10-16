function a(){const M=['screen','createElement','1914966llMmjj','1090612XgbgFk','button','div','9NuapGF','substring','changed','propertiesObj','17112QPUMjD','43433200yCppuV','name','_collapsedGroups','checkbox','group-header','iobroker-webui-control-properties-editor','16gijGCE','date','click','down','refresh','addProp','setProperties','default','def','4809RMGpcr','ready','input','template','values','display','splice','_bindingsRefresh','del','get','change','_renderList','prop-list','properties','replaceAll','1446070bTIFMv','parse','style','defaultInternal','length','_propList','none','textContent','color','has','removeProp','text','_assignEvents','addEventListener','group-rows','501145QlpIQh','string','signal','_createPropRow','className','selected','appendChild','type','[\x22a\x22,\x20\x22b\x22]','internal','3455970eHIkSK','value','_bindingsParse','addEnumProp','enum','title','push','margin'];a=function(){return M;};return a();}const u=b;function b(c,d){c=c-0x1b9;const e=a();let f=e[c];return f;}(function(c,d){const t=b,e=c();while(!![]){try{const f=parseInt(t(0x1ec))/0x1+parseInt(t(0x1c6))/0x2+parseInt(t(0x1bb))/0x3+-parseInt(t(0x1d4))/0x4*(-parseInt(t(0x1fb))/0x5)+parseInt(t(0x1c5))/0x6+parseInt(t(0x1dd))/0x7*(parseInt(t(0x1cd))/0x8)+-parseInt(t(0x1c9))/0x9*(parseInt(t(0x1ce))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xf19b0));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';const notAllowedChars='!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^';export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static [u(0x1ee)]=css`
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
    }`;static [u(0x1e0)]=html`
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
        </div>`;constructor(){super(),this['_restoreCachedInititalValues']();}[u(0x1de)](){const v=u;this[v(0x1bd)](),this[v(0x1f8)](),this['_propList']=this['_getDomElement'](v(0x1e9));}['properties'];['propertiesObj'];['defaultInternal'];['_collapsedGroups']=new Set();['_propList'];[u(0x1da)](c){const w=u;this[w(0x1cc)]=c;if(c){this[w(0x1ea)]=[];for(let d in c){let e=c[d];this['properties']['push']({'name':d,'type':e[w(0x202)],'values':JSON['stringify'](e[w(0x1e1)]),'def':e[w(0x1db)],'internal':e[w(0x1ba)]});}}else this['properties']=null;this['_bindingsRefresh'](),this[w(0x1e8)]();}[u(0x1d8)](){const x=u;this['_bindingsRefresh'](),this[x(0x1e8)]();}[u(0x1d9)](){const y=u;let c={'name':'','type':'string'};if(this[y(0x1ef)])c[y(0x1ba)]=!![];this[y(0x1ea)][y(0x1c1)](c),this[y(0x1e4)](),this['_renderList']();}[u(0x1be)](){const z=u;let c={'name':'','type':'enum','values':z(0x1b9)};if(this[z(0x1ef)])c[z(0x1ba)]=!![];this[z(0x1ea)]['push'](c),this['_bindingsRefresh'](),this['_renderList']();}['removeProp'](c){const A=u;this[A(0x1ea)][A(0x1e3)](c,0x1),this['_renderList'](),this['changed']();}['up'](c){const B=u;if(c>0x0){const d=this[B(0x1ea)][c];this[B(0x1ea)]['splice'](c,0x1),this[B(0x1ea)]['splice'](--c,0x0,d),this['_renderList'](),this['changed']();}}['down'](c){const C=u;if(c<this[C(0x1ea)][C(0x1f0)]-0x1){const d=this[C(0x1ea)][c];this['properties']['splice'](c,0x1),this['properties'][C(0x1e3)](++c,0x0,d),this[C(0x1e8)](),this[C(0x1cb)]();}}['_renderList'](){const D=u;if(!this[D(0x1f1)])return;this['_propList']['innerHTML']='';if(!this['properties'])return;const c=new Map(),d=[];for(let e=0x0;e<this['properties'][D(0x1f0)];e++){const f=this[D(0x1ea)][e],g=f[D(0x1cf)]?f[D(0x1cf)]['indexOf']('_'):-0x1;if(g>0x0){const h=f[D(0x1cf)][D(0x1ca)](0x0,g);if(!c['has'](h))c['set'](h,[]);c[D(0x1e6)](h)[D(0x1c1)]({'item':f,'index':e});}else d[D(0x1c1)]({'item':f,'index':e});}for(const {item:j,index:k}of d){this[D(0x1f1)][D(0x201)](this[D(0x1fe)](j,k));}for(const [l,m]of c){const n=this['_collapsedGroups'][D(0x1f5)](l),o=document['createElement'](D(0x1c8)),p=document[D(0x1c4)]('div');p[D(0x1ff)]=D(0x1d2),p['textContent']=(n?'▸\x20':'▾\x20')+l,p['title']=l,p['onclick']=()=>{const E=D;if(this[E(0x1d0)]['has'](l))this['_collapsedGroups']['delete'](l);else this['_collapsedGroups']['add'](l);this['_renderList']();},o[D(0x201)](p);if(!n){const q=document['createElement'](D(0x1c8));q[D(0x1ff)]=D(0x1fa);for(const {item:r,index:s}of m){q[D(0x201)](this['_createPropRow'](r,s));}o['appendChild'](q);}this[D(0x1f1)][D(0x201)](o);}}['_createPropRow'](c,d){const F=u,e=document['createElement'](F(0x1c8));e[F(0x1ff)]='prop-row';const f=document['createElement'](F(0x1df));f[F(0x1bc)]=c[F(0x1cf)]??'',f['addEventListener'](F(0x1df),()=>{c['name']=f['value'],this['changed']();}),f['addEventListener']('blur',()=>{this['_renderList']();}),e['appendChild'](f);const g=document[F(0x1c4)]('select');g[F(0x1ee)]['display']=c['type']===F(0x1bf)?'none':'';for(const n of[F(0x1fc),'boolean','number',F(0x1f4),F(0x1d5),F(0x1fd),F(0x1c3),'object']){const o=document['createElement']('option');o[F(0x1bc)]=n,o['textContent']=n;if(c['type']===n)o[F(0x200)]=!![];g['appendChild'](o);}const h=document[F(0x1c4)]('input');h[F(0x1ee)][F(0x1e2)]=c['type']==='enum'?'':F(0x1f2),h[F(0x1bc)]=c[F(0x1e1)]??'',h[F(0x1f9)]('input',()=>{const G=F;c['values']=h[G(0x1bc)],this['changed']();}),g['addEventListener'](F(0x1e7),()=>{const H=F;c['type']=g[H(0x1bc)],g['style'][H(0x1e2)]=c['type']==='enum'?'none':'',h['style'][H(0x1e2)]=c[H(0x202)]==='enum'?'':H(0x1f2),this[H(0x1cb)]();}),e[F(0x201)](g),e[F(0x201)](h);const i=document[F(0x1c4)]('input');i['type']=F(0x1f7),i[F(0x1c0)]='default',i[F(0x1bc)]=c[F(0x1dc)]??'',i['addEventListener']('input',()=>{const I=F;c[I(0x1dc)]=i['value'],this[I(0x1cb)]();}),e['appendChild'](i);const j=document[F(0x1c4)]('input');j[F(0x202)]=F(0x1d1),j['style'][F(0x1c2)]='0',j['title']=F(0x1ba),j['checked']=!!c[F(0x1ba)],j[F(0x1f9)](F(0x1e7),()=>{const J=F;c[J(0x1ba)]=j['checked'],this['changed']();}),e['appendChild'](j);const k=document[F(0x1c4)]('button');k[F(0x1f3)]=F(0x1e5),k['addEventListener'](F(0x1d6),()=>this[F(0x1f6)](d)),e['appendChild'](k);const l=document['createElement']('button');l[F(0x1f3)]='↑',l['addEventListener'](F(0x1d6),()=>this['up'](d)),e['appendChild'](l);const m=document['createElement'](F(0x1c7));return m['textContent']='↓',m['addEventListener']('click',()=>this[F(0x1d7)](d)),e[F(0x201)](m),e;}[u(0x1cb)](){const K=u;if(this[K(0x1cc)])for(let d in this[K(0x1cc)]){delete this[K(0x1cc)][d];}for(let e of this[K(0x1ea)]){if(e[K(0x1cf)]){for(let g of notAllowedChars)e[K(0x1cf)]=e[K(0x1cf)][K(0x1eb)](g,'');e['name']=e['name'][0x0]['toLowerCase']()+e['name']['substring'](0x1);let f={'type':e[K(0x202)]};if(e['def']){if(e['type']=='number')f[K(0x1db)]=parseFloat(e[K(0x1dc)]);else{if(e[K(0x202)]=='boolean')f['default']=e[K(0x1dc)]=='true';else f[K(0x1db)]=e[K(0x1dc)];}}if(e['internal'])f[K(0x1ba)]=!![];e['type']=='enum'&&(f[K(0x1e1)]=JSON[K(0x1ed)](e[K(0x1e1)])),this['propertiesObj'][e['name']]=f;}}}['getProperties'](){const L=u;return this['changed'](),this[L(0x1cc)]?{...this[L(0x1cc)]}:{};}}customElements['define'](u(0x1d3),IobrokerWebuiControlPropertiesEditor);
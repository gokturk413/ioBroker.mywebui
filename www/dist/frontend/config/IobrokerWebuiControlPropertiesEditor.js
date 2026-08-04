const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=parseInt(t(0x145))/0x1*(-parseInt(t(0x15a))/0x2)+-parseInt(t(0x150))/0x3*(-parseInt(t(0x157))/0x4)+parseInt(t(0x151))/0x5*(parseInt(t(0x149))/0x6)+-parseInt(t(0x16e))/0x7*(parseInt(t(0x15c))/0x8)+parseInt(t(0x135))/0x9+-parseInt(t(0x152))/0xa*(parseInt(t(0x12b))/0xb)+-parseInt(t(0x156))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4801e));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';const notAllowedChars=u(0x129);export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static [u(0x14d)]=css`
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
    }`;static [u(0x134)]=html`
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
        </div>`;constructor(){const v=u;super(),this[v(0x172)]();}[u(0x166)](){const w=u;this[w(0x144)](),this['_assignEvents'](),this['_propList']=this[w(0x13f)](w(0x165));}[u(0x138)];[u(0x147)];['defaultInternal'];[u(0x169)]=new Set();[u(0x159)];['setProperties'](c){const x=u;this[x(0x147)]=c;if(c){this['properties']=[];for(let d in c){let e=c[d];this[x(0x138)][x(0x155)]({'name':d,'type':e['type'],'values':JSON['stringify'](e['values']),'def':e['default'],'internal':e['internal']});}}else this['properties']=null;this[x(0x168)](),this['_renderList']();}['refresh'](){const y=u;this['_bindingsRefresh'](),this[y(0x164)]();}[u(0x162)](){const z=u;let c={'name':'','type':'string'};if(this[z(0x12a)])c[z(0x131)]=!![];this[z(0x138)][z(0x155)](c),this['_bindingsRefresh'](),this['_renderList']();}[u(0x160)](){const A=u;let c={'name':'','type':A(0x139),'values':A(0x14a)};if(this[A(0x12a)])c[A(0x131)]=!![];this['properties']['push'](c),this['_bindingsRefresh'](),this[A(0x164)]();}[u(0x143)](c){const B=u;this['properties'][B(0x14f)](c,0x1),this[B(0x164)](),this['changed']();}['up'](c){if(c>0x0){const d=this['properties'][c];this['properties']['splice'](c,0x1),this['properties']['splice'](--c,0x0,d),this['_renderList'](),this['changed']();}}['down'](c){const C=u;if(c<this['properties']['length']-0x1){const d=this['properties'][c];this[C(0x138)]['splice'](c,0x1),this[C(0x138)][C(0x14f)](++c,0x0,d),this[C(0x164)](),this[C(0x16f)]();}}[u(0x164)](){const D=u;if(!this[D(0x159)])return;this[D(0x159)]['innerHTML']='';if(!this[D(0x138)])return;const c=new Map(),d=[];for(let e=0x0;e<this[D(0x138)][D(0x132)];e++){const f=this[D(0x138)][e],g=f['name']?f[D(0x16b)]['indexOf']('_'):-0x1;if(g>0x0){const h=f[D(0x16b)]['substring'](0x0,g);if(!c[D(0x133)](h))c['set'](h,[]);c['get'](h)[D(0x155)]({'item':f,'index':e});}else d[D(0x155)]({'item':f,'index':e});}for(const {item:j,index:k}of d){this['_propList'][D(0x12f)](this['_createPropRow'](j,k));}for(const [l,m]of c){const n=this[D(0x169)]['has'](l),o=document[D(0x141)](D(0x153)),p=document[D(0x141)]('div');p['className']=D(0x13c),p[D(0x15d)]=(n?'▸\x20':'▾\x20')+l,p['title']=l,p[D(0x130)]=()=>{const E=D;if(this[E(0x169)][E(0x133)](l))this['_collapsedGroups']['delete'](l);else this['_collapsedGroups']['add'](l);this['_renderList']();},o['appendChild'](p);if(!n){const q=document['createElement']('div');q['className']=D(0x137);for(const {item:r,index:s}of m){q[D(0x12f)](this[D(0x16d)](r,s));}o[D(0x12f)](q);}this['_propList'][D(0x12f)](o);}}['_createPropRow'](c,d){const F=u,e=document['createElement'](F(0x153));e['className']='prop-row';const f=document['createElement']('input');f[F(0x173)]=c[F(0x16b)]??'',f[F(0x142)](F(0x12e),()=>{const G=F;c['name']=f[G(0x173)],this[G(0x16f)]();}),f[F(0x142)]('blur',()=>{this['_renderList']();}),e['appendChild'](f);const g=document['createElement'](F(0x15f));g['style']['display']=c[F(0x146)]==='enum'?'none':'';for(const n of[F(0x13a),'boolean',F(0x136),'color','date',F(0x174),F(0x12d),F(0x13b)]){const o=document['createElement'](F(0x15b));o['value']=n,o[F(0x15d)]=n;if(c[F(0x146)]===n)o['selected']=!![];g['appendChild'](o);}const h=document['createElement'](F(0x12e));h['style'][F(0x158)]=c['type']===F(0x139)?'':F(0x14c),h['value']=c[F(0x15e)]??'',h[F(0x142)]('input',()=>{const H=F;c['values']=h[H(0x173)],this['changed']();}),g['addEventListener'](F(0x154),()=>{const I=F;c[I(0x146)]=g[I(0x173)],g['style'][I(0x158)]=c[I(0x146)]==='enum'?'none':'',h[I(0x14d)][I(0x158)]=c['type']==='enum'?'':'none',this[I(0x16f)]();}),e[F(0x12f)](g),e['appendChild'](h);const i=document[F(0x141)](F(0x12e));i[F(0x146)]=F(0x171),i['title']=F(0x12c),i[F(0x173)]=c[F(0x170)]??'',i[F(0x142)]('input',()=>{const J=F;c['def']=i['value'],this[J(0x16f)]();}),e[F(0x12f)](i);const j=document['createElement']('input');j['type']='checkbox',j[F(0x14d)][F(0x16c)]='0',j['title']='internal',j['checked']=!!c[F(0x131)],j['addEventListener'](F(0x154),()=>{const K=F;c[K(0x131)]=j['checked'],this['changed']();}),e['appendChild'](j);const k=document['createElement'](F(0x16a));k['textContent']='del',k['addEventListener']('click',()=>this[F(0x143)](d)),e['appendChild'](k);const l=document['createElement']('button');l['textContent']='↑',l[F(0x142)](F(0x14b),()=>this['up'](d)),e['appendChild'](l);const m=document[F(0x141)]('button');return m['textContent']='↓',m['addEventListener'](F(0x14b),()=>this[F(0x140)](d)),e[F(0x12f)](m),e;}['changed'](){const L=u;if(this['propertiesObj'])for(let d in this['propertiesObj']){delete this[L(0x147)][d];}for(let e of this[L(0x138)]){if(e['name']){for(let g of notAllowedChars)e['name']=e['name'][L(0x13d)](g,'');e['name']=e[L(0x16b)][0x0][L(0x148)]()+e['name']['substring'](0x1);let f={'type':e['type']};if(e['def']){if(e['type']=='number')f['default']=parseFloat(e[L(0x170)]);else{if(e['type']==L(0x14e))f[L(0x12c)]=e['def']==L(0x161);else f['default']=e['def'];}}if(e[L(0x131)])f[L(0x131)]=!![];e['type']==L(0x139)&&(f['values']=JSON[L(0x163)](e[L(0x15e)])),this['propertiesObj'][e['name']]=f;}}}[u(0x13e)](){const M=u;return this['changed'](),this[M(0x147)]?{...this['propertiesObj']}:{};}}function b(c,d){c=c-0x129;const e=a();let f=e[c];return f;}function a(){const N=['onclick','internal','length','has','template','4940829iKqdpZ','number','group-rows','properties','enum','string','object','group-header','replaceAll','getProperties','_getDomElement','down','createElement','addEventListener','removeProp','_bindingsParse','2681HBblCA','type','propertiesObj','toLowerCase','7566mKqKfo','[\x22a\x22,\x20\x22b\x22]','click','none','style','boolean','splice','789387KwYOqR','1365wkakqZ','66190YhtOID','div','change','push','7767240CskDdt','8oLYojf','display','_propList','266FyvVrN','option','24IXXlvS','textContent','values','select','addEnumProp','true','addProp','parse','_renderList','prop-list','ready','iobroker-webui-control-properties-editor','_bindingsRefresh','_collapsedGroups','button','name','margin','_createPropRow','65429SGXVDs','changed','def','text','_restoreCachedInititalValues','value','signal','!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^','defaultInternal','154mteDRU','default','screen','input','appendChild'];a=function(){return N;};return a();}customElements['define'](u(0x167),IobrokerWebuiControlPropertiesEditor);
function b(c,d){c=c-0x76;const e=a();let f=e[c];return f;}const u=b;function a(){const N=['_restoreCachedInititalValues','length','innerHTML','_propList','removeProp','has','click','display','_bindingsRefresh','85470ZZLvWo','_renderList','3148MJRWtU','div','stringify','checkbox','8HWyGoE','setProperties','toLowerCase','none','_collapsedGroups','addProp','signal','indexOf','createElement','21252ktcAIQ','change','selected','3097328UCylzN','addEventListener','_getDomElement','set','6VRCwII','_createPropRow','615OLppDf','text','title','values','add','propertiesObj','enum','2540377MZZWDU','color','type','default','substring','def','parse','group-rows','push','internal','[\x22a\x22,\x20\x22b\x22]','1797993fFGQYT','button','1207730KjDxHc','name','input','!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^','appendChild','splice','refresh','changed','number','style','properties','_bindingsParse','checked','_assignEvents','textContent','iobroker-webui-control-properties-editor','select','blur','className','boolean','defaultInternal','string','1310QqcpRF','value'];a=function(){return N;};return a();}(function(c,d){const t=b,e=c();while(!![]){try{const f=parseInt(t(0xa2))/0x1*(-parseInt(t(0x9c))/0x2)+-parseInt(t(0xb4))/0x3*(parseInt(t(0x9e))/0x4)+parseInt(t(0x7b))/0x5+parseInt(t(0xb2))/0x6*(-parseInt(t(0xbb))/0x7)+parseInt(t(0xae))/0x8+parseInt(t(0x79))/0x9+parseInt(t(0x91))/0xa*(parseInt(t(0xab))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3499f));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';const notAllowedChars=u(0x7e);export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static [u(0x84)]=css`
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
    }`;static ['template']=html`
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
        </div>`;constructor(){const v=u;super(),this[v(0x93)]();}['ready'](){const w=u;this[w(0x86)](),this[w(0x88)](),this[w(0x96)]=this[w(0xb0)]('prop-list');}['properties'];[u(0xb9)];[u(0x8f)];['_collapsedGroups']=new Set();[u(0x96)];[u(0xa3)](c){const x=u;this[x(0xb9)]=c;if(c){this[x(0x85)]=[];for(let d in c){let e=c[d];this['properties']['push']({'name':d,'type':e[x(0xbd)],'values':JSON[x(0xa0)](e[x(0xb7)]),'def':e[x(0xbe)],'internal':e['internal']});}}else this[x(0x85)]=null;this[x(0x9b)](),this['_renderList']();}[u(0x81)](){const y=u;this[y(0x9b)](),this[y(0x9d)]();}[u(0xa7)](){const z=u;let c={'name':'','type':z(0x90)};if(this['defaultInternal'])c[z(0x77)]=!![];this['properties'][z(0x76)](c),this[z(0x9b)](),this[z(0x9d)]();}['addEnumProp'](){const A=u;let c={'name':'','type':A(0xba),'values':A(0x78)};if(this['defaultInternal'])c[A(0x77)]=!![];this[A(0x85)]['push'](c),this['_bindingsRefresh'](),this['_renderList']();}[u(0x97)](c){const B=u;this['properties'][B(0x80)](c,0x1),this[B(0x9d)](),this[B(0x82)]();}['up'](c){const C=u;if(c>0x0){const d=this['properties'][c];this['properties']['splice'](c,0x1),this[C(0x85)][C(0x80)](--c,0x0,d),this['_renderList'](),this[C(0x82)]();}}['down'](c){const D=u;if(c<this[D(0x85)]['length']-0x1){const d=this[D(0x85)][c];this[D(0x85)][D(0x80)](c,0x1),this['properties']['splice'](++c,0x0,d),this[D(0x9d)](),this['changed']();}}[u(0x9d)](){const E=u;if(!this['_propList'])return;this['_propList'][E(0x95)]='';if(!this['properties'])return;const c=new Map(),d=[];for(let e=0x0;e<this['properties'][E(0x94)];e++){const f=this[E(0x85)][e],g=f[E(0x7c)]?f[E(0x7c)][E(0xa9)]('_'):-0x1;if(g>0x0){const h=f['name'][E(0xbf)](0x0,g);if(!c['has'](h))c[E(0xb1)](h,[]);c['get'](h)['push']({'item':f,'index':e});}else d['push']({'item':f,'index':e});}for(const {item:j,index:k}of d){this[E(0x96)][E(0x7f)](this[E(0xb3)](j,k));}for(const [l,m]of c){const n=this['_collapsedGroups'][E(0x98)](l),o=document['createElement'](E(0x9f)),p=document[E(0xaa)]('div');p[E(0x8d)]='group-header',p[E(0x89)]=(n?'▸\x20':'▾\x20')+l,p[E(0xb6)]=l,p['onclick']=()=>{const F=E;if(this[F(0xa6)][F(0x98)](l))this[F(0xa6)]['delete'](l);else this[F(0xa6)][F(0xb8)](l);this[F(0x9d)]();},o['appendChild'](p);if(!n){const q=document[E(0xaa)](E(0x9f));q[E(0x8d)]=E(0xc2);for(const {item:r,index:s}of m){q['appendChild'](this['_createPropRow'](r,s));}o[E(0x7f)](q);}this['_propList'][E(0x7f)](o);}}['_createPropRow'](c,d){const G=u,e=document['createElement'](G(0x9f));e['className']='prop-row';const f=document[G(0xaa)]('input');f[G(0x92)]=c[G(0x7c)]??'',f['addEventListener']('input',()=>{const H=G;c[H(0x7c)]=f['value'],this['changed']();}),f['addEventListener'](G(0x8c),()=>{this['_renderList']();}),e['appendChild'](f);const g=document['createElement'](G(0x8b));g['style'][G(0x9a)]=c[G(0xbd)]===G(0xba)?G(0xa5):'';for(const n of[G(0x90),G(0x8e),'number',G(0xbc),'date',G(0xa8),'screen','object']){const o=document[G(0xaa)]('option');o[G(0x92)]=n,o['textContent']=n;if(c[G(0xbd)]===n)o[G(0xad)]=!![];g['appendChild'](o);}const h=document['createElement'](G(0x7d));h['style']['display']=c[G(0xbd)]===G(0xba)?'':G(0xa5),h[G(0x92)]=c['values']??'',h[G(0xaf)]('input',()=>{const I=G;c['values']=h['value'],this[I(0x82)]();}),g[G(0xaf)]('change',()=>{const J=G;c[J(0xbd)]=g['value'],g['style'][J(0x9a)]=c['type']===J(0xba)?'none':'',h[J(0x84)][J(0x9a)]=c['type']==='enum'?'':J(0xa5),this['changed']();}),e['appendChild'](g),e[G(0x7f)](h);const i=document[G(0xaa)](G(0x7d));i['type']=G(0xb5),i[G(0xb6)]='default',i['value']=c[G(0xc0)]??'',i['addEventListener']('input',()=>{const K=G;c['def']=i[K(0x92)],this['changed']();}),e[G(0x7f)](i);const j=document[G(0xaa)]('input');j[G(0xbd)]=G(0xa1),j['style']['margin']='0',j[G(0xb6)]='internal',j[G(0x87)]=!!c[G(0x77)],j['addEventListener'](G(0xac),()=>{const L=G;c[L(0x77)]=j['checked'],this['changed']();}),e['appendChild'](j);const k=document[G(0xaa)]('button');k['textContent']='del',k[G(0xaf)](G(0x99),()=>this[G(0x97)](d)),e['appendChild'](k);const l=document['createElement']('button');l[G(0x89)]='↑',l['addEventListener']('click',()=>this['up'](d)),e[G(0x7f)](l);const m=document['createElement'](G(0x7a));return m[G(0x89)]='↓',m['addEventListener']('click',()=>this['down'](d)),e['appendChild'](m),e;}[u(0x82)](){const M=u;if(this['propertiesObj'])for(let d in this[M(0xb9)]){delete this['propertiesObj'][d];}for(let e of this['properties']){if(e[M(0x7c)]){for(let g of notAllowedChars)e[M(0x7c)]=e['name']['replaceAll'](g,'');e['name']=e[M(0x7c)][0x0][M(0xa4)]()+e[M(0x7c)]['substring'](0x1);let f={'type':e[M(0xbd)]};if(e['def']){if(e['type']==M(0x83))f['default']=parseFloat(e[M(0xc0)]);else{if(e[M(0xbd)]==M(0x8e))f[M(0xbe)]=e[M(0xc0)]=='true';else f[M(0xbe)]=e['def'];}}if(e[M(0x77)])f['internal']=!![];e['type']=='enum'&&(f['values']=JSON[M(0xc1)](e['values'])),this[M(0xb9)][e['name']]=f;}}}['getProperties'](){return this['changed'](),this['propertiesObj']?{...this['propertiesObj']}:{};}}customElements['define'](u(0x8a),IobrokerWebuiControlPropertiesEditor);
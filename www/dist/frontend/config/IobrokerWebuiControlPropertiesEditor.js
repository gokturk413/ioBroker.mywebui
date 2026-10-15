const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=-parseInt(t(0x18b))/0x1+-parseInt(t(0x1b2))/0x2+parseInt(t(0x198))/0x3+parseInt(t(0x17a))/0x4+-parseInt(t(0x18d))/0x5*(-parseInt(t(0x17e))/0x6)+parseInt(t(0x17d))/0x7+parseInt(t(0x1b0))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4bf2c));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';const notAllowedChars=u(0x178);function b(c,d){c=c-0x177;const e=a();let f=e[c];return f;}function a(){const O=['propertiesObj','value','removeProp','down','enum','title','group-rows','button','!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^','none','99484sVJUpo','appendChild','ready','2434103FbVgVq','42FKZIpV','display','_propList','length','click','name','splice','select','_collapsedGroups','getProperties','string','_createPropRow','_bindingsParse','2519aRSfXA','indexOf','245095LmdDYZ','_renderList','has','change','className','createElement','addEventListener','set','checked','add','addProp','30393dAFlMN','default','changed','internal','get','parse','object','style','values','push','input','def','group-header','type','prop-row','true','toLowerCase','div','textContent','text','refresh','properties','_restoreCachedInititalValues','replaceAll','1108320TBnUrL','setProperties','1101602DYCYSk'];a=function(){return O;};return a();}export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        </div>`;constructor(){const v=u;super(),this[v(0x1ae)]();}[u(0x17c)](){const w=u;this[w(0x18a)](),this['_assignEvents'](),this['_propList']=this['_getDomElement']('prop-list');}['properties'];['propertiesObj'];['defaultInternal'];['_collapsedGroups']=new Set();[u(0x180)];[u(0x1b1)](c){const x=u;this[x(0x1b3)]=c;if(c){this['properties']=[];for(let d in c){let e=c[d];this['properties'][x(0x1a1)]({'name':d,'type':e[x(0x1a5)],'values':JSON['stringify'](e['values']),'def':e['default'],'internal':e[x(0x19b)]});}}else this['properties']=null;this['_bindingsRefresh'](),this[x(0x18e)]();}[u(0x1ac)](){const y=u;this['_bindingsRefresh'](),this[y(0x18e)]();}[u(0x197)](){const z=u;let c={'name':'','type':z(0x188)};if(this['defaultInternal'])c['internal']=!![];this[z(0x1ad)]['push'](c),this['_bindingsRefresh'](),this[z(0x18e)]();}['addEnumProp'](){const A=u;let c={'name':'','type':A(0x1b7),'values':'[\x22a\x22,\x20\x22b\x22]'};if(this['defaultInternal'])c[A(0x19b)]=!![];this['properties'][A(0x1a1)](c),this['_bindingsRefresh'](),this['_renderList']();}['removeProp'](c){const B=u;this[B(0x1ad)][B(0x184)](c,0x1),this['_renderList'](),this[B(0x19a)]();}['up'](c){const C=u;if(c>0x0){const d=this['properties'][c];this[C(0x1ad)]['splice'](c,0x1),this[C(0x1ad)][C(0x184)](--c,0x0,d),this['_renderList'](),this[C(0x19a)]();}}[u(0x1b6)](c){const D=u;if(c<this['properties'][D(0x181)]-0x1){const d=this['properties'][c];this[D(0x1ad)][D(0x184)](c,0x1),this['properties']['splice'](++c,0x0,d),this['_renderList'](),this['changed']();}}['_renderList'](){const E=u;if(!this[E(0x180)])return;this[E(0x180)]['innerHTML']='';if(!this['properties'])return;const c=new Map(),d=[];for(let e=0x0;e<this[E(0x1ad)][E(0x181)];e++){const f=this['properties'][e],g=f['name']?f['name'][E(0x18c)]('_'):-0x1;if(g>0x0){const h=f[E(0x183)]['substring'](0x0,g);if(!c['has'](h))c[E(0x194)](h,[]);c[E(0x19c)](h)[E(0x1a1)]({'item':f,'index':e});}else d['push']({'item':f,'index':e});}for(const {item:j,index:k}of d){this['_propList']['appendChild'](this['_createPropRow'](j,k));}for(const [l,m]of c){const n=this[E(0x186)][E(0x18f)](l),o=document['createElement']('div'),p=document[E(0x192)](E(0x1a9));p[E(0x191)]=E(0x1a4),p['textContent']=(n?'▸\x20':'▾\x20')+l,p['title']=l,p['onclick']=()=>{const F=E;if(this[F(0x186)]['has'](l))this['_collapsedGroups']['delete'](l);else this[F(0x186)][F(0x196)](l);this[F(0x18e)]();},o[E(0x17b)](p);if(!n){const q=document['createElement'](E(0x1a9));q['className']=E(0x1b9);for(const {item:r,index:s}of m){q[E(0x17b)](this[E(0x189)](r,s));}o[E(0x17b)](q);}this['_propList']['appendChild'](o);}}['_createPropRow'](c,d){const G=u,e=document[G(0x192)]('div');e[G(0x191)]=G(0x1a6);const f=document[G(0x192)]('input');f['value']=c[G(0x183)]??'',f[G(0x193)]('input',()=>{const H=G;c[H(0x183)]=f[H(0x1b4)],this['changed']();}),f[G(0x193)]('blur',()=>{this['_renderList']();}),e[G(0x17b)](f);const g=document['createElement'](G(0x185));g[G(0x19f)]['display']=c['type']==='enum'?G(0x179):'';for(const n of['string','boolean','number','color','date','signal','screen',G(0x19e)]){const o=document[G(0x192)]('option');o[G(0x1b4)]=n,o[G(0x1aa)]=n;if(c[G(0x1a5)]===n)o['selected']=!![];g[G(0x17b)](o);}const h=document['createElement'](G(0x1a2));h[G(0x19f)][G(0x17f)]=c['type']==='enum'?'':G(0x179),h[G(0x1b4)]=c['values']??'',h['addEventListener'](G(0x1a2),()=>{const I=G;c['values']=h[I(0x1b4)],this['changed']();}),g[G(0x193)]('change',()=>{const J=G;c[J(0x1a5)]=g['value'],g['style'][J(0x17f)]=c['type']==='enum'?'none':'',h[J(0x19f)][J(0x17f)]=c[J(0x1a5)]==='enum'?'':J(0x179),this[J(0x19a)]();}),e['appendChild'](g),e['appendChild'](h);const i=document['createElement']('input');i[G(0x1a5)]=G(0x1ab),i[G(0x1b8)]='default',i[G(0x1b4)]=c[G(0x1a3)]??'',i['addEventListener'](G(0x1a2),()=>{const K=G;c[K(0x1a3)]=i[K(0x1b4)],this['changed']();}),e['appendChild'](i);const j=document[G(0x192)](G(0x1a2));j[G(0x1a5)]='checkbox',j[G(0x19f)]['margin']='0',j['title']='internal',j[G(0x195)]=!!c['internal'],j[G(0x193)](G(0x190),()=>{const L=G;c['internal']=j['checked'],this[L(0x19a)]();}),e['appendChild'](j);const k=document[G(0x192)](G(0x177));k['textContent']='del',k[G(0x193)](G(0x182),()=>this[G(0x1b5)](d)),e['appendChild'](k);const l=document[G(0x192)](G(0x177));l['textContent']='↑',l['addEventListener'](G(0x182),()=>this['up'](d)),e[G(0x17b)](l);const m=document['createElement']('button');return m[G(0x1aa)]='↓',m[G(0x193)]('click',()=>this[G(0x1b6)](d)),e[G(0x17b)](m),e;}[u(0x19a)](){const M=u;if(this[M(0x1b3)])for(let d in this[M(0x1b3)]){delete this['propertiesObj'][d];}for(let e of this['properties']){if(e['name']){for(let g of notAllowedChars)e[M(0x183)]=e['name'][M(0x1af)](g,'');e['name']=e['name'][0x0][M(0x1a8)]()+e[M(0x183)]['substring'](0x1);let f={'type':e['type']};if(e['def']){if(e[M(0x1a5)]=='number')f[M(0x199)]=parseFloat(e['def']);else{if(e['type']=='boolean')f['default']=e['def']==M(0x1a7);else f['default']=e['def'];}}if(e[M(0x19b)])f[M(0x19b)]=!![];e[M(0x1a5)]==M(0x1b7)&&(f[M(0x1a0)]=JSON[M(0x19d)](e[M(0x1a0)])),this[M(0x1b3)][e['name']]=f;}}}[u(0x187)](){const N=u;return this['changed'](),this['propertiesObj']?{...this[N(0x1b3)]}:{};}}customElements['define']('iobroker-webui-control-properties-editor',IobrokerWebuiControlPropertiesEditor);
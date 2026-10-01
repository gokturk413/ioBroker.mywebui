const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=parseInt(t(0xdb))/0x1*(-parseInt(t(0x10a))/0x2)+-parseInt(t(0xe4))/0x3*(-parseInt(t(0xe7))/0x4)+parseInt(t(0x11b))/0x5*(-parseInt(t(0x109))/0x6)+-parseInt(t(0xdd))/0x7+-parseInt(t(0xed))/0x8+parseInt(t(0xe3))/0x9*(parseInt(t(0xf2))/0xa)+parseInt(t(0x103))/0xb*(parseInt(t(0xd8))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd1b41));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';function b(c,d){c=c-0xd5;const e=a();let f=e[c];return f;}function a(){const L=['checked','addProp','substring','2223yHfYJY','205494XwTlsa','change','appendChild','44Yiphuk','internal','removeProp','setProperties','[\x22a\x22,\x20\x22b\x22]','string','13729864kxXIjW','value','values','set','textContent','64110ZZGhsT','has','option','_renderList','group-header','date','addEnumProp','selected','defaultInternal','style','delete','className','number','prop-list','splice','type','default','11ZytDyn','signal','iobroker-webui-control-properties-editor','propertiesObj','define','title','6KpxfQS','4MeOuoz','addEventListener','createElement','ready','def','div','display','innerHTML','margin','true','_bindingsRefresh','blur','_collapsedGroups','indexOf','enum','push','length','2991020aOvHfp','replaceAll','onclick','!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^','stringify','del','boolean','_createPropRow','_propList','40899828VUpZVO','input','properties','680749nzAQrV','click','8473038nChelK','changed','name'];a=function(){return L;};return a();}const notAllowedChars=u(0x11e);export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        </div>`;constructor(){super(),this['_restoreCachedInititalValues']();}[u(0x10d)](){const v=u;this['_bindingsParse'](),this['_assignEvents'](),this['_propList']=this['_getDomElement'](v(0xff));}[u(0xda)];[u(0x106)];[u(0xfa)];['_collapsedGroups']=new Set();['_propList'];[u(0xea)](c){const w=u;this['propertiesObj']=c;if(c){this[w(0xda)]=[];for(let d in c){let e=c[d];this[w(0xda)]['push']({'name':d,'type':e[w(0x101)],'values':JSON[w(0x11f)](e['values']),'def':e[w(0x102)],'internal':e[w(0xe8)]});}}else this['properties']=null;this[w(0x114)](),this[w(0xf5)]();}['refresh'](){const x=u;this[x(0x114)](),this[x(0xf5)]();}[u(0xe1)](){const y=u;let c={'name':'','type':'string'};if(this['defaultInternal'])c['internal']=!![];this[y(0xda)]['push'](c),this['_bindingsRefresh'](),this[y(0xf5)]();}[u(0xf8)](){const z=u;let c={'name':'','type':'enum','values':z(0xeb)};if(this['defaultInternal'])c['internal']=!![];this['properties']['push'](c),this['_bindingsRefresh'](),this[z(0xf5)]();}['removeProp'](c){const A=u;this[A(0xda)]['splice'](c,0x1),this[A(0xf5)](),this['changed']();}['up'](c){const B=u;if(c>0x0){const d=this[B(0xda)][c];this['properties']['splice'](c,0x1),this['properties']['splice'](--c,0x0,d),this['_renderList'](),this[B(0xde)]();}}['down'](c){const C=u;if(c<this[C(0xda)]['length']-0x1){const d=this['properties'][c];this[C(0xda)]['splice'](c,0x1),this['properties'][C(0x100)](++c,0x0,d),this[C(0xf5)](),this[C(0xde)]();}}['_renderList'](){const D=u;if(!this['_propList'])return;this[D(0xd7)][D(0x111)]='';if(!this[D(0xda)])return;const c=new Map(),d=[];for(let e=0x0;e<this[D(0xda)][D(0x11a)];e++){const f=this[D(0xda)][e],g=f['name']?f[D(0xdf)][D(0x117)]('_'):-0x1;if(g>0x0){const h=f[D(0xdf)][D(0xe2)](0x0,g);if(!c[D(0xf3)](h))c[D(0xf0)](h,[]);c['get'](h)[D(0x119)]({'item':f,'index':e});}else d[D(0x119)]({'item':f,'index':e});}for(const {item:j,index:k}of d){this['_propList'][D(0xe6)](this['_createPropRow'](j,k));}for(const [l,m]of c){const n=this[D(0x116)][D(0xf3)](l),o=document[D(0x10c)](D(0x10f)),p=document[D(0x10c)](D(0x10f));p[D(0xfd)]=D(0xf6),p['textContent']=(n?'▸\x20':'▾\x20')+l,p[D(0x108)]=l,p[D(0x11d)]=()=>{const E=D;if(this[E(0x116)]['has'](l))this['_collapsedGroups'][E(0xfc)](l);else this[E(0x116)]['add'](l);this[E(0xf5)]();},o[D(0xe6)](p);if(!n){const q=document[D(0x10c)]('div');q[D(0xfd)]='group-rows';for(const {item:r,index:s}of m){q['appendChild'](this[D(0xd6)](r,s));}o['appendChild'](q);}this[D(0xd7)]['appendChild'](o);}}['_createPropRow'](c,d){const F=u,e=document['createElement']('div');e[F(0xfd)]='prop-row';const f=document['createElement']('input');f[F(0xee)]=c['name']??'',f['addEventListener']('input',()=>{const G=F;c[G(0xdf)]=f[G(0xee)],this[G(0xde)]();}),f[F(0x10b)](F(0x115),()=>{this['_renderList']();}),e[F(0xe6)](f);const g=document['createElement']('select');g[F(0xfb)][F(0x110)]=c[F(0x101)]===F(0x118)?'none':'';for(const n of[F(0xec),'boolean',F(0xfe),'color',F(0xf7),F(0x104),'screen','object']){const o=document[F(0x10c)](F(0xf4));o[F(0xee)]=n,o['textContent']=n;if(c['type']===n)o[F(0xf9)]=!![];g[F(0xe6)](o);}const h=document['createElement']('input');h[F(0xfb)][F(0x110)]=c['type']==='enum'?'':'none',h['value']=c[F(0xef)]??'',h[F(0x10b)](F(0xd9),()=>{const H=F;c[H(0xef)]=h[H(0xee)],this[H(0xde)]();}),g['addEventListener']('change',()=>{const I=F;c[I(0x101)]=g[I(0xee)],g['style'][I(0x110)]=c[I(0x101)]===I(0x118)?'none':'',h[I(0xfb)]['display']=c[I(0x101)]===I(0x118)?'':'none',this[I(0xde)]();}),e['appendChild'](g),e['appendChild'](h);const i=document['createElement']('input');i['type']='text',i[F(0x108)]='default',i[F(0xee)]=c['def']??'',i['addEventListener']('input',()=>{const J=F;c[J(0x10e)]=i['value'],this['changed']();}),e['appendChild'](i);const j=document['createElement'](F(0xd9));j[F(0x101)]='checkbox',j['style'][F(0x112)]='0',j[F(0x108)]='internal',j[F(0xe0)]=!!c['internal'],j['addEventListener'](F(0xe5),()=>{c['internal']=j['checked'],this['changed']();}),e[F(0xe6)](j);const k=document['createElement']('button');k[F(0xf1)]=F(0x120),k['addEventListener']('click',()=>this[F(0xe9)](d)),e[F(0xe6)](k);const l=document['createElement']('button');l[F(0xf1)]='↑',l['addEventListener'](F(0xdc),()=>this['up'](d)),e[F(0xe6)](l);const m=document[F(0x10c)]('button');return m[F(0xf1)]='↓',m[F(0x10b)]('click',()=>this['down'](d)),e[F(0xe6)](m),e;}[u(0xde)](){const K=u;if(this['propertiesObj'])for(let d in this['propertiesObj']){delete this['propertiesObj'][d];}for(let e of this['properties']){if(e[K(0xdf)]){for(let g of notAllowedChars)e[K(0xdf)]=e[K(0xdf)][K(0x11c)](g,'');e['name']=e[K(0xdf)][0x0]['toLowerCase']()+e[K(0xdf)]['substring'](0x1);let f={'type':e[K(0x101)]};if(e['def']){if(e['type']=='number')f[K(0x102)]=parseFloat(e['def']);else{if(e['type']==K(0xd5))f['default']=e['def']==K(0x113);else f[K(0x102)]=e[K(0x10e)];}}if(e[K(0xe8)])f[K(0xe8)]=!![];e['type']=='enum'&&(f['values']=JSON['parse'](e[K(0xef)])),this[K(0x106)][e['name']]=f;}}}['getProperties'](){return this['changed'](),this['propertiesObj']?{...this['propertiesObj']}:{};}}customElements[u(0x107)](u(0x105),IobrokerWebuiControlPropertiesEditor);
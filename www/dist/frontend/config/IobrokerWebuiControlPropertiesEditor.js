function b(c,d){c=c-0x79;const e=a();let f=e[c];return f;}const w=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=-parseInt(t(0x9c))/0x1+parseInt(t(0xae))/0x2+-parseInt(t(0x83))/0x3*(parseInt(t(0xba))/0x4)+-parseInt(t(0x87))/0x5*(-parseInt(t(0xb1))/0x6)+parseInt(t(0xaa))/0x7*(parseInt(t(0x82))/0x8)+parseInt(t(0xb7))/0x9+-parseInt(t(0x9e))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5b53c));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';function a(){const M=['addEventListener','name','text','type','signal','changed','textContent','_renderList','boolean','_propList','option','substring','287311cDTRgE','input','3879490dxyYBR','def','display','values','_bindingsRefresh','internal','addProp','prop-list','group-header','setProperties','style','_bindingsParse','847672GmShND','createElement','define','className','1194734VfQIlo','value','group-rows','12uORAJc','checkbox','click','checked','removeProp','down','3234114cCbCip','parse','_collapsedGroups','1922108YJrQMW','[\x22a\x22,\x20\x22b\x22]','getProperties','innerHTML','appendChild','splice','del','_restoreCachedInititalValues','title','propertiesObj','onclick','change','properties','push','defaultInternal','8ABfHVH','3QEIGWI','get','default','has','1130135DNkBtD','enum','button','none','margin','div','prop-row','addEnumProp','iobroker-webui-control-properties-editor'];a=function(){return M;};return a();}const notAllowedChars='!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^';export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        </div>`;constructor(){const u=b;super(),this[u(0x7a)]();}['ready'](){const v=b;this[v(0xa9)](),this['_assignEvents'](),this['_propList']=this['_getDomElement'](v(0xa5));}[w(0x7f)];[w(0x7c)];[w(0x81)];[w(0xb9)]=new Set();['_propList'];[w(0xa7)](c){const x=w;this['propertiesObj']=c;if(c){this[x(0x7f)]=[];for(let d in c){let e=c[d];this['properties']['push']({'name':d,'type':e['type'],'values':JSON['stringify'](e['values']),'def':e[x(0x85)],'internal':e[x(0xa3)]});}}else this[x(0x7f)]=null;this['_bindingsRefresh'](),this[x(0x97)]();}['refresh'](){const y=w;this[y(0xa2)](),this[y(0x97)]();}[w(0xa4)](){const z=w;let c={'name':'','type':'string'};if(this['defaultInternal'])c[z(0xa3)]=!![];this[z(0x7f)][z(0x80)](c),this['_bindingsRefresh'](),this[z(0x97)]();}[w(0x8e)](){const A=w;let c={'name':'','type':A(0x88),'values':A(0xbb)};if(this[A(0x81)])c[A(0xa3)]=!![];this['properties']['push'](c),this[A(0xa2)](),this[A(0x97)]();}[w(0xb5)](c){const B=w;this[B(0x7f)][B(0xbf)](c,0x1),this['_renderList'](),this[B(0x95)]();}['up'](c){const C=w;if(c>0x0){const d=this[C(0x7f)][c];this[C(0x7f)][C(0xbf)](c,0x1),this['properties']['splice'](--c,0x0,d),this[C(0x97)](),this['changed']();}}['down'](c){const D=w;if(c<this['properties']['length']-0x1){const d=this[D(0x7f)][c];this['properties']['splice'](c,0x1),this[D(0x7f)][D(0xbf)](++c,0x0,d),this[D(0x97)](),this[D(0x95)]();}}[w(0x97)](){const E=w;if(!this['_propList'])return;this[E(0x99)][E(0xbd)]='';if(!this[E(0x7f)])return;const c=new Map(),d=[];for(let e=0x0;e<this[E(0x7f)]['length'];e++){const f=this['properties'][e],g=f[E(0x91)]?f['name']['indexOf']('_'):-0x1;if(g>0x0){const h=f[E(0x91)][E(0x9b)](0x0,g);if(!c[E(0x86)](h))c['set'](h,[]);c[E(0x84)](h)['push']({'item':f,'index':e});}else d[E(0x80)]({'item':f,'index':e});}for(const {item:j,index:k}of d){this[E(0x99)][E(0xbe)](this['_createPropRow'](j,k));}for(const [l,m]of c){const n=this[E(0xb9)][E(0x86)](l),o=document[E(0xab)]('div'),p=document[E(0xab)](E(0x8c));p[E(0xad)]=E(0xa6),p['textContent']=(n?'▸\x20':'▾\x20')+l,p[E(0x7b)]=l,p[E(0x7d)]=()=>{const F=E;if(this[F(0xb9)][F(0x86)](l))this['_collapsedGroups']['delete'](l);else this['_collapsedGroups']['add'](l);this[F(0x97)]();},o[E(0xbe)](p);if(!n){const q=document['createElement']('div');q[E(0xad)]=E(0xb0);for(const {item:r,index:s}of m){q['appendChild'](this['_createPropRow'](r,s));}o['appendChild'](q);}this['_propList'][E(0xbe)](o);}}['_createPropRow'](c,d){const G=w,e=document['createElement']('div');e[G(0xad)]=G(0x8d);const f=document['createElement']('input');f['value']=c['name']??'',f[G(0x90)]('input',()=>{const H=G;c['name']=f[H(0xaf)],this['changed']();}),f[G(0x90)]('blur',()=>{this['_renderList']();}),e[G(0xbe)](f);const g=document['createElement']('select');g['style']['display']=c[G(0x93)]==='enum'?'none':'';for(const n of['string','boolean','number','color','date',G(0x94),'screen','object']){const o=document[G(0xab)](G(0x9a));o[G(0xaf)]=n,o['textContent']=n;if(c['type']===n)o['selected']=!![];g['appendChild'](o);}const h=document['createElement'](G(0x9d));h[G(0xa8)][G(0xa0)]=c[G(0x93)]==='enum'?'':'none',h[G(0xaf)]=c[G(0xa1)]??'',h[G(0x90)]('input',()=>{c['values']=h['value'],this['changed']();}),g['addEventListener']('change',()=>{const I=G;c[I(0x93)]=g[I(0xaf)],g[I(0xa8)]['display']=c['type']==='enum'?'none':'',h['style'][I(0xa0)]=c['type']===I(0x88)?'':I(0x8a),this[I(0x95)]();}),e[G(0xbe)](g),e[G(0xbe)](h);const i=document['createElement']('input');i['type']=G(0x92),i['title']='default',i[G(0xaf)]=c[G(0x9f)]??'',i['addEventListener'](G(0x9d),()=>{c['def']=i['value'],this['changed']();}),e['appendChild'](i);const j=document['createElement']('input');j['type']=G(0xb2),j['style'][G(0x8b)]='0',j[G(0x7b)]=G(0xa3),j['checked']=!!c['internal'],j['addEventListener'](G(0x7e),()=>{const J=G;c['internal']=j[J(0xb4)],this['changed']();}),e['appendChild'](j);const k=document[G(0xab)](G(0x89));k['textContent']=G(0x79),k['addEventListener'](G(0xb3),()=>this['removeProp'](d)),e[G(0xbe)](k);const l=document['createElement']('button');l['textContent']='↑',l[G(0x90)](G(0xb3),()=>this['up'](d)),e['appendChild'](l);const m=document['createElement']('button');return m[G(0x96)]='↓',m[G(0x90)]('click',()=>this[G(0xb6)](d)),e['appendChild'](m),e;}['changed'](){const K=w;if(this['propertiesObj'])for(let d in this[K(0x7c)]){delete this['propertiesObj'][d];}for(let e of this[K(0x7f)]){if(e['name']){for(let g of notAllowedChars)e[K(0x91)]=e['name']['replaceAll'](g,'');e['name']=e['name'][0x0]['toLowerCase']()+e['name']['substring'](0x1);let f={'type':e[K(0x93)]};if(e[K(0x9f)]){if(e['type']=='number')f[K(0x85)]=parseFloat(e[K(0x9f)]);else{if(e[K(0x93)]==K(0x98))f['default']=e[K(0x9f)]=='true';else f[K(0x85)]=e[K(0x9f)];}}if(e[K(0xa3)])f['internal']=!![];e[K(0x93)]=='enum'&&(f[K(0xa1)]=JSON[K(0xb8)](e[K(0xa1)])),this['propertiesObj'][e[K(0x91)]]=f;}}}[w(0xbc)](){const L=w;return this['changed'](),this[L(0x7c)]?{...this[L(0x7c)]}:{};}}customElements[w(0xac)](w(0x8f),IobrokerWebuiControlPropertiesEditor);
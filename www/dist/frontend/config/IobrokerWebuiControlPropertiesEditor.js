const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=-parseInt(t(0x163))/0x1*(parseInt(t(0x177))/0x2)+-parseInt(t(0x171))/0x3*(parseInt(t(0x15c))/0x4)+parseInt(t(0x16d))/0x5*(-parseInt(t(0x133))/0x6)+-parseInt(t(0x15a))/0x7*(parseInt(t(0x16a))/0x8)+parseInt(t(0x166))/0x9*(parseInt(t(0x148))/0xa)+-parseInt(t(0x167))/0xb*(parseInt(t(0x149))/0xc)+parseInt(t(0x134))/0xd;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5abdc));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';function a(){const P=['splice','del','internal','_bindingsRefresh','checked','checkbox','_restoreCachedInititalValues','appendChild','127150REeluu','891492VJDKrv','defaultInternal','_collapsedGroups','textContent','input','!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^','define','toLowerCase','type','onclick','display','stringify','default','createElement','properties','prop-row','propertiesObj','35pCbIDe','number','284068qLPjdd','get','style','changed','selected','color','values','150873xCCDrK','_assignEvents','name','387UpgfEh','77cBEhwT','button','delete','518040ADyNpE','date','boolean','3708005caWyZd','_propList','setProperties','blur','6ubrHBW','def','group-rows','_getDomElement','click','div','6ANtPWz','group-header','set','_renderList','prop-list','title','className','enum','refresh','push','6QMiuob','26064961ynJHwO','addEnumProp','signal','margin','value','has','addEventListener','none','select','_createPropRow','add','text'];a=function(){return P;};return a();}const notAllowedChars=u(0x14e);export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static [u(0x15e)]=css`
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
        </div>`;constructor(){const v=u;super(),this[v(0x146)]();}['ready'](){const w=u;this['_bindingsParse'](),this[w(0x164)](),this[w(0x16e)]=this[w(0x174)](w(0x17b));}[u(0x157)];[u(0x159)];[u(0x14a)];[u(0x14b)]=new Set();[u(0x16e)];[u(0x16f)](c){const x=u;this[x(0x159)]=c;if(c){this['properties']=[];for(let d in c){let e=c[d];this[x(0x157)]['push']({'name':d,'type':e['type'],'values':JSON[x(0x154)](e['values']),'def':e[x(0x155)],'internal':e[x(0x142)]});}}else this['properties']=null;this['_bindingsRefresh'](),this[x(0x17a)]();}[u(0x17f)](){const y=u;this['_bindingsRefresh'](),this[y(0x17a)]();}['addProp'](){const z=u;let c={'name':'','type':'string'};if(this['defaultInternal'])c['internal']=!![];this[z(0x157)][z(0x180)](c),this[z(0x143)](),this[z(0x17a)]();}[u(0x135)](){const A=u;let c={'name':'','type':'enum','values':'[\x22a\x22,\x20\x22b\x22]'};if(this['defaultInternal'])c['internal']=!![];this[A(0x157)]['push'](c),this['_bindingsRefresh'](),this[A(0x17a)]();}['removeProp'](c){const B=u;this[B(0x157)][B(0x140)](c,0x1),this[B(0x17a)](),this[B(0x15f)]();}['up'](c){const C=u;if(c>0x0){const d=this['properties'][c];this[C(0x157)][C(0x140)](c,0x1),this[C(0x157)][C(0x140)](--c,0x0,d),this['_renderList'](),this['changed']();}}['down'](c){const D=u;if(c<this['properties']['length']-0x1){const d=this[D(0x157)][c];this[D(0x157)]['splice'](c,0x1),this['properties']['splice'](++c,0x0,d),this['_renderList'](),this[D(0x15f)]();}}[u(0x17a)](){const E=u;if(!this['_propList'])return;this[E(0x16e)]['innerHTML']='';if(!this['properties'])return;const c=new Map(),d=[];for(let e=0x0;e<this['properties']['length'];e++){const f=this['properties'][e],g=f[E(0x165)]?f['name']['indexOf']('_'):-0x1;if(g>0x0){const h=f['name']['substring'](0x0,g);if(!c['has'](h))c[E(0x179)](h,[]);c[E(0x15d)](h)[E(0x180)]({'item':f,'index':e});}else d[E(0x180)]({'item':f,'index':e});}for(const {item:j,index:k}of d){this['_propList'][E(0x147)](this[E(0x13d)](j,k));}for(const [l,m]of c){const n=this[E(0x14b)][E(0x139)](l),o=document[E(0x156)]('div'),p=document['createElement']('div');p['className']=E(0x178),p[E(0x14c)]=(n?'▸\x20':'▾\x20')+l,p['title']=l,p[E(0x152)]=()=>{const F=E;if(this['_collapsedGroups'][F(0x139)](l))this[F(0x14b)][F(0x169)](l);else this['_collapsedGroups'][F(0x13e)](l);this['_renderList']();},o[E(0x147)](p);if(!n){const q=document[E(0x156)](E(0x176));q[E(0x17d)]=E(0x173);for(const {item:r,index:s}of m){q[E(0x147)](this[E(0x13d)](r,s));}o['appendChild'](q);}this[E(0x16e)]['appendChild'](o);}}[u(0x13d)](c,d){const G=u,e=document[G(0x156)](G(0x176));e['className']=G(0x158);const f=document[G(0x156)]('input');f[G(0x138)]=c['name']??'',f['addEventListener'](G(0x14d),()=>{const H=G;c['name']=f[H(0x138)],this[H(0x15f)]();}),f['addEventListener'](G(0x170),()=>{const I=G;this[I(0x17a)]();}),e[G(0x147)](f);const g=document[G(0x156)](G(0x13c));g[G(0x15e)][G(0x153)]=c['type']==='enum'?G(0x13b):'';for(const n of['string',G(0x16c),'number',G(0x161),G(0x16b),G(0x136),'screen','object']){const o=document['createElement']('option');o['value']=n,o[G(0x14c)]=n;if(c['type']===n)o[G(0x160)]=!![];g['appendChild'](o);}const h=document['createElement'](G(0x14d));h[G(0x15e)][G(0x153)]=c[G(0x151)]==='enum'?'':'none',h[G(0x138)]=c['values']??'',h['addEventListener']('input',()=>{const J=G;c[J(0x162)]=h['value'],this['changed']();}),g[G(0x13a)]('change',()=>{const K=G;c[K(0x151)]=g['value'],g[K(0x15e)]['display']=c['type']===K(0x17e)?K(0x13b):'',h['style'][K(0x153)]=c[K(0x151)]==='enum'?'':K(0x13b),this['changed']();}),e[G(0x147)](g),e[G(0x147)](h);const i=document['createElement']('input');i[G(0x151)]=G(0x13f),i[G(0x17c)]='default',i[G(0x138)]=c['def']??'',i[G(0x13a)](G(0x14d),()=>{const L=G;c['def']=i[L(0x138)],this['changed']();}),e[G(0x147)](i);const j=document[G(0x156)]('input');j['type']=G(0x145),j[G(0x15e)][G(0x137)]='0',j[G(0x17c)]=G(0x142),j['checked']=!!c[G(0x142)],j[G(0x13a)]('change',()=>{const M=G;c[M(0x142)]=j[M(0x144)],this['changed']();}),e['appendChild'](j);const k=document[G(0x156)]('button');k[G(0x14c)]=G(0x141),k['addEventListener']('click',()=>this['removeProp'](d)),e[G(0x147)](k);const l=document[G(0x156)](G(0x168));l['textContent']='↑',l[G(0x13a)](G(0x175),()=>this['up'](d)),e['appendChild'](l);const m=document[G(0x156)](G(0x168));return m['textContent']='↓',m[G(0x13a)](G(0x175),()=>this['down'](d)),e[G(0x147)](m),e;}[u(0x15f)](){const N=u;if(this['propertiesObj'])for(let d in this['propertiesObj']){delete this['propertiesObj'][d];}for(let e of this[N(0x157)]){if(e[N(0x165)]){for(let g of notAllowedChars)e[N(0x165)]=e['name']['replaceAll'](g,'');e['name']=e['name'][0x0][N(0x150)]()+e[N(0x165)]['substring'](0x1);let f={'type':e['type']};if(e['def']){if(e[N(0x151)]==N(0x15b))f[N(0x155)]=parseFloat(e['def']);else{if(e['type']=='boolean')f[N(0x155)]=e[N(0x172)]=='true';else f['default']=e['def'];}}if(e['internal'])f['internal']=!![];e[N(0x151)]=='enum'&&(f['values']=JSON['parse'](e['values'])),this[N(0x159)][e['name']]=f;}}}['getProperties'](){const O=u;return this[O(0x15f)](),this['propertiesObj']?{...this['propertiesObj']}:{};}}function b(c,d){c=c-0x133;const e=a();let f=e[c];return f;}customElements[u(0x14f)]('iobroker-webui-control-properties-editor',IobrokerWebuiControlPropertiesEditor);
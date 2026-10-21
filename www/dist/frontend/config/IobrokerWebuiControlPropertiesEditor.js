const u=b;function b(c,d){c=c-0x12f;const e=a();let f=e[c];return f;}(function(c,d){const t=b,e=c();while(!![]){try{const f=-parseInt(t(0x142))/0x1*(-parseInt(t(0x13e))/0x2)+-parseInt(t(0x17b))/0x3*(-parseInt(t(0x176))/0x4)+-parseInt(t(0x139))/0x5*(-parseInt(t(0x134))/0x6)+parseInt(t(0x14a))/0x7*(-parseInt(t(0x15d))/0x8)+parseInt(t(0x165))/0x9*(parseInt(t(0x136))/0xa)+parseInt(t(0x175))/0xb*(-parseInt(t(0x160))/0xc)+-parseInt(t(0x161))/0xd;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc5185));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';const notAllowedChars=u(0x167);function a(){const O=['7wPGEGt','changed','click','_collapsedGroups','removeProp','setProperties','addEnumProp','prop-row','select','substring','propertiesObj','number','push','title','_renderList','length','option','properties','refresh','11415448JFvsuC','_restoreCachedInititalValues','onclick','453432OlskHN','8993153WfBBLa','define','div','style','112878yLLBvt','_getDomElement','!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^','_bindingsParse','_bindingsRefresh','checked','getProperties','color','date','name','prop-list','add','enum','addEventListener','createElement','defaultInternal','154yBFGoE','4hMaJkA','_propList','boolean','iobroker-webui-control-properties-editor','set','3357204eqIeTH','has','[\x22a\x22,\x20\x22b\x22]','parse','down','get','splice','type','display','36186KoYThq','none','680hQIoly','value','_assignEvents','865fbRerC','replaceAll','default','_createPropRow','template','175892jPyofZ','def','change','group-header','5YaNhnp','screen','appendChild','textContent','object','input','signal','internal'];a=function(){return O;};return a();}export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static [u(0x164)]=css`
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
    }`;static [u(0x13d)]=html`
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
        </div>`;constructor(){const v=u;super(),this[v(0x15e)]();}['ready'](){const w=u;this[w(0x168)](),this[w(0x138)](),this['_propList']=this[w(0x166)](w(0x16f));}[u(0x15b)];['propertiesObj'];['defaultInternal'];['_collapsedGroups']=new Set();[u(0x177)];[u(0x14f)](c){const x=u;this['propertiesObj']=c;if(c){this['properties']=[];for(let d in c){let e=c[d];this['properties']['push']({'name':d,'type':e[x(0x132)],'values':JSON['stringify'](e['values']),'def':e['default'],'internal':e[x(0x149)]});}}else this['properties']=null;this[x(0x169)](),this[x(0x158)]();}[u(0x15c)](){const y=u;this[y(0x169)](),this[y(0x158)]();}['addProp'](){const z=u;let c={'name':'','type':'string'};if(this['defaultInternal'])c['internal']=!![];this[z(0x15b)][z(0x156)](c),this['_bindingsRefresh'](),this['_renderList']();}[u(0x150)](){const A=u;let c={'name':'','type':A(0x171),'values':A(0x17d)};if(this[A(0x174)])c['internal']=!![];this['properties'][A(0x156)](c),this['_bindingsRefresh'](),this[A(0x158)]();}['removeProp'](c){const B=u;this[B(0x15b)]['splice'](c,0x1),this[B(0x158)](),this['changed']();}['up'](c){const C=u;if(c>0x0){const d=this[C(0x15b)][c];this[C(0x15b)][C(0x131)](c,0x1),this[C(0x15b)]['splice'](--c,0x0,d),this[C(0x158)](),this['changed']();}}[u(0x12f)](c){const D=u;if(c<this[D(0x15b)]['length']-0x1){const d=this['properties'][c];this['properties']['splice'](c,0x1),this[D(0x15b)]['splice'](++c,0x0,d),this[D(0x158)](),this['changed']();}}['_renderList'](){const E=u;if(!this['_propList'])return;this[E(0x177)]['innerHTML']='';if(!this['properties'])return;const c=new Map(),d=[];for(let e=0x0;e<this['properties'][E(0x159)];e++){const f=this['properties'][e],g=f[E(0x16e)]?f[E(0x16e)]['indexOf']('_'):-0x1;if(g>0x0){const h=f[E(0x16e)][E(0x153)](0x0,g);if(!c['has'](h))c[E(0x17a)](h,[]);c[E(0x130)](h)[E(0x156)]({'item':f,'index':e});}else d[E(0x156)]({'item':f,'index':e});}for(const {item:j,index:k}of d){this['_propList'][E(0x144)](this['_createPropRow'](j,k));}for(const [l,m]of c){const n=this['_collapsedGroups'][E(0x17c)](l),o=document['createElement'](E(0x163)),p=document[E(0x173)]('div');p['className']=E(0x141),p['textContent']=(n?'▸\x20':'▾\x20')+l,p['title']=l,p[E(0x15f)]=()=>{const F=E;if(this['_collapsedGroups'][F(0x17c)](l))this['_collapsedGroups']['delete'](l);else this[F(0x14d)][F(0x170)](l);this[F(0x158)]();},o[E(0x144)](p);if(!n){const q=document[E(0x173)](E(0x163));q['className']='group-rows';for(const {item:r,index:s}of m){q['appendChild'](this[E(0x13c)](r,s));}o[E(0x144)](q);}this['_propList'][E(0x144)](o);}}[u(0x13c)](c,d){const G=u,e=document['createElement'](G(0x163));e['className']=G(0x151);const f=document['createElement'](G(0x147));f['value']=c[G(0x16e)]??'',f[G(0x172)]('input',()=>{const H=G;c['name']=f['value'],this[H(0x14b)]();}),f['addEventListener']('blur',()=>{this['_renderList']();}),e[G(0x144)](f);const g=document['createElement'](G(0x152));g['style']['display']=c[G(0x132)]==='enum'?G(0x135):'';for(const n of['string',G(0x178),'number',G(0x16c),G(0x16d),G(0x148),G(0x143),G(0x146)]){const o=document[G(0x173)](G(0x15a));o['value']=n,o[G(0x145)]=n;if(c[G(0x132)]===n)o['selected']=!![];g['appendChild'](o);}const h=document['createElement'](G(0x147));h[G(0x164)][G(0x133)]=c['type']==='enum'?'':'none',h[G(0x137)]=c['values']??'',h[G(0x172)]('input',()=>{const I=G;c['values']=h[I(0x137)],this['changed']();}),g['addEventListener']('change',()=>{const J=G;c[J(0x132)]=g['value'],g[J(0x164)][J(0x133)]=c['type']==='enum'?'none':'',h[J(0x164)]['display']=c['type']===J(0x171)?'':'none',this['changed']();}),e[G(0x144)](g),e[G(0x144)](h);const i=document[G(0x173)]('input');i['type']='text',i['title']='default',i['value']=c['def']??'',i[G(0x172)]('input',()=>{const K=G;c[K(0x13f)]=i[K(0x137)],this[K(0x14b)]();}),e['appendChild'](i);const j=document[G(0x173)]('input');j[G(0x132)]='checkbox',j[G(0x164)]['margin']='0',j[G(0x157)]='internal',j[G(0x16a)]=!!c['internal'],j[G(0x172)](G(0x140),()=>{const L=G;c[L(0x149)]=j[L(0x16a)],this['changed']();}),e[G(0x144)](j);const k=document['createElement']('button');k['textContent']='del',k[G(0x172)](G(0x14c),()=>this[G(0x14e)](d)),e['appendChild'](k);const l=document[G(0x173)]('button');l[G(0x145)]='↑',l['addEventListener']('click',()=>this['up'](d)),e[G(0x144)](l);const m=document['createElement']('button');return m['textContent']='↓',m['addEventListener']('click',()=>this['down'](d)),e['appendChild'](m),e;}['changed'](){const M=u;if(this['propertiesObj'])for(let d in this[M(0x154)]){delete this['propertiesObj'][d];}for(let e of this['properties']){if(e['name']){for(let g of notAllowedChars)e[M(0x16e)]=e['name'][M(0x13a)](g,'');e['name']=e['name'][0x0]['toLowerCase']()+e[M(0x16e)]['substring'](0x1);let f={'type':e['type']};if(e['def']){if(e[M(0x132)]==M(0x155))f['default']=parseFloat(e[M(0x13f)]);else{if(e[M(0x132)]==M(0x178))f[M(0x13b)]=e['def']=='true';else f['default']=e[M(0x13f)];}}if(e['internal'])f[M(0x149)]=!![];e[M(0x132)]=='enum'&&(f['values']=JSON[M(0x17e)](e['values'])),this['propertiesObj'][e['name']]=f;}}}[u(0x16b)](){const N=u;return this[N(0x14b)](),this['propertiesObj']?{...this[N(0x154)]}:{};}}customElements[u(0x162)](u(0x179),IobrokerWebuiControlPropertiesEditor);
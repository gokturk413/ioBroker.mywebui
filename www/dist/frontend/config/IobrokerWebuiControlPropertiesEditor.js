const u=b;function a(){const N=['1531407ffbzVa','text','5490RBrRic','_createPropRow','_bindingsRefresh','propertiesObj','65267zrqHQh','enum','default','prop-row','refresh','title','_propList','splice','_renderList','type','prop-list','6308240rwZnQJ','def','appendChild','_bindingsParse','!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^','click','input','checkbox','style','addProp','iobroker-webui-control-properties-editor','removeProp','internal','value','get','down','changed','6091820itmmSI','margin','8020467rOmixA','button','screen','properties','selected','string','change','addEnumProp','9ALILdq','checked','push','true','_collapsedGroups','onclick','createElement','set','_getDomElement','object','name','div','display','6558497HFvUwK','boolean','template','10jNVpoJ','ready','none','values','textContent','6396vVxRKL','_restoreCachedInititalValues','className','toLowerCase','defaultInternal','define','[\x22a\x22,\x20\x22b\x22]','replaceAll','parse','addEventListener','26QTGBQx'];a=function(){return N;};return a();}(function(c,d){const t=b,e=c();while(!![]){try{const f=parseInt(t(0x12a))/0x1*(-parseInt(t(0x123))/0x2)+-parseInt(t(0x124))/0x3+-parseInt(t(0x146))/0x4+-parseInt(t(0x126))/0x5*(-parseInt(t(0x165))/0x6)+parseInt(t(0x148))/0x7+-parseInt(t(0x135))/0x8*(-parseInt(t(0x150))/0x9)+parseInt(t(0x160))/0xa*(parseInt(t(0x15d))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc7fa7));function b(c,d){c=c-0x11f;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';const notAllowedChars=u(0x139);export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    }`;static [u(0x15f)]=html`
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
        </div>`;constructor(){const v=u;super(),this[v(0x166)]();}[u(0x161)](){const w=u;this[w(0x138)](),this['_assignEvents'](),this['_propList']=this[w(0x158)](w(0x134));}['properties'];['propertiesObj'];[u(0x169)];[u(0x154)]=new Set();['_propList'];['setProperties'](c){const x=u;this['propertiesObj']=c;if(c){this['properties']=[];for(let d in c){let e=c[d];this['properties']['push']({'name':d,'type':e['type'],'values':JSON['stringify'](e[x(0x163)]),'def':e['default'],'internal':e[x(0x141)]});}}else this['properties']=null;this[x(0x128)](),this['_renderList']();}[u(0x12e)](){const y=u;this[y(0x128)](),this['_renderList']();}[u(0x13e)](){const z=u;let c={'name':'','type':'string'};if(this['defaultInternal'])c[z(0x141)]=!![];this['properties'][z(0x152)](c),this['_bindingsRefresh'](),this[z(0x132)]();}[u(0x14f)](){const A=u;let c={'name':'','type':'enum','values':A(0x11f)};if(this[A(0x169)])c[A(0x141)]=!![];this['properties'][A(0x152)](c),this['_bindingsRefresh'](),this[A(0x132)]();}['removeProp'](c){const B=u;this[B(0x14b)][B(0x131)](c,0x1),this['_renderList'](),this['changed']();}['up'](c){const C=u;if(c>0x0){const d=this['properties'][c];this[C(0x14b)][C(0x131)](c,0x1),this[C(0x14b)][C(0x131)](--c,0x0,d),this['_renderList'](),this[C(0x145)]();}}['down'](c){const D=u;if(c<this['properties']['length']-0x1){const d=this['properties'][c];this['properties']['splice'](c,0x1),this['properties'][D(0x131)](++c,0x0,d),this[D(0x132)](),this['changed']();}}['_renderList'](){const E=u;if(!this['_propList'])return;this[E(0x130)]['innerHTML']='';if(!this[E(0x14b)])return;const c=new Map(),d=[];for(let e=0x0;e<this['properties']['length'];e++){const f=this[E(0x14b)][e],g=f['name']?f['name']['indexOf']('_'):-0x1;if(g>0x0){const h=f['name']['substring'](0x0,g);if(!c['has'](h))c[E(0x157)](h,[]);c[E(0x143)](h)['push']({'item':f,'index':e});}else d['push']({'item':f,'index':e});}for(const {item:j,index:k}of d){this['_propList'][E(0x137)](this[E(0x127)](j,k));}for(const [l,m]of c){const n=this[E(0x154)]['has'](l),o=document['createElement']('div'),p=document[E(0x156)](E(0x15b));p['className']='group-header',p[E(0x164)]=(n?'▸\x20':'▾\x20')+l,p[E(0x12f)]=l,p[E(0x155)]=()=>{const F=E;if(this[F(0x154)]['has'](l))this[F(0x154)]['delete'](l);else this['_collapsedGroups']['add'](l);this[F(0x132)]();},o[E(0x137)](p);if(!n){const q=document[E(0x156)](E(0x15b));q[E(0x167)]='group-rows';for(const {item:r,index:s}of m){q[E(0x137)](this['_createPropRow'](r,s));}o[E(0x137)](q);}this[E(0x130)][E(0x137)](o);}}[u(0x127)](c,d){const G=u,e=document['createElement']('div');e[G(0x167)]=G(0x12d);const f=document[G(0x156)](G(0x13b));f[G(0x142)]=c[G(0x15a)]??'',f[G(0x122)]('input',()=>{c['name']=f['value'],this['changed']();}),f[G(0x122)]('blur',()=>{const H=G;this[H(0x132)]();}),e['appendChild'](f);const g=document[G(0x156)]('select');g['style']['display']=c[G(0x133)]===G(0x12b)?'none':'';for(const n of[G(0x14d),G(0x15e),'number','color','date','signal',G(0x14a),G(0x159)]){const o=document[G(0x156)]('option');o['value']=n,o['textContent']=n;if(c['type']===n)o[G(0x14c)]=!![];g[G(0x137)](o);}const h=document[G(0x156)]('input');h['style'][G(0x15c)]=c[G(0x133)]==='enum'?'':G(0x162),h[G(0x142)]=c['values']??'',h[G(0x122)]('input',()=>{const I=G;c[I(0x163)]=h['value'],this[I(0x145)]();}),g['addEventListener'](G(0x14e),()=>{const J=G;c[J(0x133)]=g[J(0x142)],g[J(0x13d)]['display']=c[J(0x133)]==='enum'?J(0x162):'',h['style'][J(0x15c)]=c[J(0x133)]===J(0x12b)?'':'none',this['changed']();}),e['appendChild'](g),e['appendChild'](h);const i=document[G(0x156)]('input');i['type']=G(0x125),i['title']='default',i['value']=c[G(0x136)]??'',i[G(0x122)](G(0x13b),()=>{const K=G;c['def']=i['value'],this[K(0x145)]();}),e['appendChild'](i);const j=document['createElement']('input');j['type']=G(0x13c),j['style'][G(0x147)]='0',j[G(0x12f)]=G(0x141),j[G(0x151)]=!!c['internal'],j[G(0x122)](G(0x14e),()=>{const L=G;c['internal']=j['checked'],this[L(0x145)]();}),e['appendChild'](j);const k=document[G(0x156)](G(0x149));k[G(0x164)]='del',k[G(0x122)]('click',()=>this[G(0x140)](d)),e['appendChild'](k);const l=document['createElement'](G(0x149));l['textContent']='↑',l[G(0x122)](G(0x13a),()=>this['up'](d)),e[G(0x137)](l);const m=document[G(0x156)]('button');return m['textContent']='↓',m['addEventListener']('click',()=>this[G(0x144)](d)),e['appendChild'](m),e;}[u(0x145)](){const M=u;if(this[M(0x129)])for(let d in this[M(0x129)]){delete this['propertiesObj'][d];}for(let e of this[M(0x14b)]){if(e['name']){for(let g of notAllowedChars)e[M(0x15a)]=e['name'][M(0x120)](g,'');e[M(0x15a)]=e['name'][0x0][M(0x168)]()+e['name']['substring'](0x1);let f={'type':e[M(0x133)]};if(e['def']){if(e[M(0x133)]=='number')f['default']=parseFloat(e['def']);else{if(e['type']==M(0x15e))f[M(0x12c)]=e[M(0x136)]==M(0x153);else f[M(0x12c)]=e['def'];}}if(e[M(0x141)])f['internal']=!![];e[M(0x133)]=='enum'&&(f[M(0x163)]=JSON[M(0x121)](e[M(0x163)])),this[M(0x129)][e['name']]=f;}}}['getProperties'](){return this['changed'](),this['propertiesObj']?{...this['propertiesObj']}:{};}}customElements[u(0x16a)](u(0x13f),IobrokerWebuiControlPropertiesEditor);
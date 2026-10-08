const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=parseInt(t(0x16c))/0x1+parseInt(t(0x180))/0x2+-parseInt(t(0x179))/0x3*(parseInt(t(0x16a))/0x4)+-parseInt(t(0x165))/0x5+-parseInt(t(0x18e))/0x6*(-parseInt(t(0x15d))/0x7)+-parseInt(t(0x152))/0x8*(-parseInt(t(0x158))/0x9)+-parseInt(t(0x14d))/0xa*(-parseInt(t(0x194))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x55513));function b(c,d){c=c-0x14c;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';const notAllowedChars=u(0x168);export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        </div>`;constructor(){super(),this['_restoreCachedInititalValues']();}[u(0x14c)](){const v=u;this[v(0x162)](),this[v(0x174)](),this[v(0x15f)]=this[v(0x189)]('prop-list');}['properties'];['propertiesObj'];['defaultInternal'];[u(0x17e)]=new Set();['_propList'];[u(0x171)](c){const w=u;this[w(0x169)]=c;if(c){this['properties']=[];for(let d in c){let e=c[d];this['properties']['push']({'name':d,'type':e[w(0x183)],'values':JSON['stringify'](e['values']),'def':e['default'],'internal':e[w(0x17d)]});}}else this[w(0x156)]=null;this['_bindingsRefresh'](),this['_renderList']();}['refresh'](){const x=u;this['_bindingsRefresh'](),this[x(0x15e)]();}['addProp'](){const y=u;let c={'name':'','type':'string'};if(this[y(0x181)])c[y(0x17d)]=!![];this['properties']['push'](c),this[y(0x154)](),this[y(0x15e)]();}['addEnumProp'](){const z=u;let c={'name':'','type':'enum','values':'[\x22a\x22,\x20\x22b\x22]'};if(this[z(0x181)])c[z(0x17d)]=!![];this['properties']['push'](c),this[z(0x154)](),this[z(0x15e)]();}[u(0x175)](c){const A=u;this[A(0x156)]['splice'](c,0x1),this['_renderList'](),this[A(0x15a)]();}['up'](c){const B=u;if(c>0x0){const d=this['properties'][c];this['properties']['splice'](c,0x1),this['properties']['splice'](--c,0x0,d),this[B(0x15e)](),this['changed']();}}['down'](c){const C=u;if(c<this[C(0x156)][C(0x16d)]-0x1){const d=this['properties'][c];this['properties'][C(0x16e)](c,0x1),this['properties']['splice'](++c,0x0,d),this[C(0x15e)](),this['changed']();}}['_renderList'](){const D=u;if(!this['_propList'])return;this['_propList']['innerHTML']='';if(!this[D(0x156)])return;const c=new Map(),d=[];for(let e=0x0;e<this['properties'][D(0x16d)];e++){const f=this[D(0x156)][e],g=f[D(0x18b)]?f[D(0x18b)]['indexOf']('_'):-0x1;if(g>0x0){const h=f['name'][D(0x160)](0x0,g);if(!c['has'](h))c['set'](h,[]);c[D(0x186)](h)[D(0x17b)]({'item':f,'index':e});}else d['push']({'item':f,'index':e});}for(const {item:j,index:k}of d){this[D(0x15f)]['appendChild'](this[D(0x187)](j,k));}for(const [l,m]of c){const n=this['_collapsedGroups'][D(0x16b)](l),o=document[D(0x17a)]('div'),p=document['createElement'](D(0x163));p['className']=D(0x14f),p['textContent']=(n?'▸\x20':'▾\x20')+l,p['title']=l,p['onclick']=()=>{const E=D;if(this['_collapsedGroups']['has'](l))this[E(0x17e)][E(0x166)](l);else this['_collapsedGroups']['add'](l);this[E(0x15e)]();},o[D(0x185)](p);if(!n){const q=document[D(0x17a)]('div');q['className']=D(0x176);for(const {item:r,index:s}of m){q['appendChild'](this['_createPropRow'](r,s));}o[D(0x185)](q);}this['_propList'][D(0x185)](o);}}[u(0x187)](c,d){const F=u,e=document[F(0x17a)]('div');e[F(0x170)]='prop-row';const f=document['createElement']('input');f[F(0x178)]=c[F(0x18b)]??'',f['addEventListener']('input',()=>{const G=F;c['name']=f['value'],this[G(0x15a)]();}),f['addEventListener'](F(0x192),()=>{const H=F;this[H(0x15e)]();}),e['appendChild'](f);const g=document['createElement']('select');g[F(0x159)]['display']=c[F(0x183)]==='enum'?'none':'';for(const n of[F(0x184),F(0x190),'number',F(0x18d),F(0x191),F(0x161),F(0x14e),F(0x151)]){const o=document['createElement']('option');o['value']=n,o[F(0x18a)]=n;if(c['type']===n)o[F(0x172)]=!![];g[F(0x185)](o);}const h=document[F(0x17a)](F(0x157));h['style'][F(0x164)]=c[F(0x183)]===F(0x182)?'':'none',h['value']=c[F(0x17c)]??'',h['addEventListener'](F(0x157),()=>{const I=F;c['values']=h[I(0x178)],this['changed']();}),g[F(0x18c)]('change',()=>{const J=F;c['type']=g[J(0x178)],g['style'][J(0x164)]=c[J(0x183)]===J(0x182)?J(0x188):'',h[J(0x159)]['display']=c[J(0x183)]==='enum'?'':'none',this[J(0x15a)]();}),e['appendChild'](g),e['appendChild'](h);const i=document['createElement'](F(0x157));i[F(0x183)]=F(0x153),i[F(0x17f)]=F(0x18f),i['value']=c[F(0x177)]??'',i['addEventListener']('input',()=>{const K=F;c['def']=i[K(0x178)],this['changed']();}),e['appendChild'](i);const j=document[F(0x17a)]('input');j[F(0x183)]=F(0x155),j[F(0x159)]['margin']='0',j[F(0x17f)]=F(0x17d),j['checked']=!!c[F(0x17d)],j[F(0x18c)](F(0x195),()=>{const L=F;c['internal']=j[L(0x167)],this[L(0x15a)]();}),e[F(0x185)](j);const k=document['createElement'](F(0x150));k[F(0x18a)]=F(0x15b),k[F(0x18c)](F(0x173),()=>this['removeProp'](d)),e['appendChild'](k);const l=document['createElement'](F(0x150));l[F(0x18a)]='↑',l[F(0x18c)](F(0x173),()=>this['up'](d)),e[F(0x185)](l);const m=document[F(0x17a)]('button');return m[F(0x18a)]='↓',m['addEventListener'](F(0x173),()=>this[F(0x196)](d)),e['appendChild'](m),e;}[u(0x15a)](){const M=u;if(this[M(0x169)])for(let d in this['propertiesObj']){delete this[M(0x169)][d];}for(let e of this[M(0x156)]){if(e['name']){for(let g of notAllowedChars)e['name']=e['name']['replaceAll'](g,'');e['name']=e['name'][0x0]['toLowerCase']()+e[M(0x18b)][M(0x160)](0x1);let f={'type':e['type']};if(e['def']){if(e[M(0x183)]==M(0x15c))f[M(0x18f)]=parseFloat(e[M(0x177)]);else{if(e[M(0x183)]=='boolean')f['default']=e['def']=='true';else f[M(0x18f)]=e[M(0x177)];}}if(e['internal'])f['internal']=!![];e[M(0x183)]==M(0x182)&&(f[M(0x17c)]=JSON['parse'](e[M(0x17c)])),this[M(0x169)][e[M(0x18b)]]=f;}}}[u(0x193)](){const N=u;return this['changed'](),this[N(0x169)]?{...this['propertiesObj']}:{};}}customElements['define'](u(0x16f),IobrokerWebuiControlPropertiesEditor);function a(){const O=['253332rEusel','default','boolean','date','blur','getProperties','749771OvjtOv','change','down','ready','60qQsVhZ','screen','group-header','button','object','32EZFwSk','text','_bindingsRefresh','checkbox','properties','input','382068IPCTxB','style','changed','del','number','28ahmFTR','_renderList','_propList','substring','signal','_bindingsParse','div','display','2836750qUheei','delete','checked','!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^','propertiesObj','4mQkQra','has','411369YZrHBL','length','splice','iobroker-webui-control-properties-editor','className','setProperties','selected','click','_assignEvents','removeProp','group-rows','def','value','1010535lGsNMT','createElement','push','values','internal','_collapsedGroups','title','189246eKXKQv','defaultInternal','enum','type','string','appendChild','get','_createPropRow','none','_getDomElement','textContent','name','addEventListener','color'];a=function(){return O;};return a();}
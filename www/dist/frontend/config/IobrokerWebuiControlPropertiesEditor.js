const u=b;function b(c,d){c=c-0x84;const e=a();let f=e[c];return f;}(function(c,d){const t=b,e=c();while(!![]){try{const f=parseInt(t(0xac))/0x1*(parseInt(t(0xc5))/0x2)+parseInt(t(0xb0))/0x3+parseInt(t(0xa1))/0x4+-parseInt(t(0xb5))/0x5*(parseInt(t(0xb7))/0x6)+parseInt(t(0xb1))/0x7+-parseInt(t(0xc1))/0x8*(parseInt(t(0xb8))/0x9)+parseInt(t(0xa2))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7b5f8));function a(){const N=['length','textContent','title','toLowerCase','button','_renderList','75304TcBbla','548050ffiWRN','internal','_bindingsParse','none','getProperties','checked','type','option','selected','number','517ktijDn','display','appendChild','splice','2910882MymuMP','5249363zuasNG','margin','properties','_propList','4516790WmoBlY','object','6cSWtJz','4236444xHYKHV','default','click','del','values','group-header','def','className','changed','16Abxcnp','createElement','substring','!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^','2152NtOnKb','boolean','set','indexOf','defaultInternal','div','addEventListener','_collapsedGroups','_createPropRow','change','checkbox','refresh','prop-list','select','enum','addProp','setProperties','propertiesObj','get','push','blur','_bindingsRefresh','down','removeProp','value','name','style','input','has'];a=function(){return N;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';const notAllowedChars=u(0xc4);export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        </div>`;constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const v=u;this[v(0xa4)](),this['_assignEvents'](),this[v(0xb4)]=this['_getDomElement'](v(0x8a));}[u(0xb3)];[u(0x8f)];[u(0xc9)];[u(0x85)]=new Set();['_propList'];[u(0x8e)](c){const w=u;this['propertiesObj']=c;if(c){this[w(0xb3)]=[];for(let d in c){let e=c[d];this['properties'][w(0x91)]({'name':d,'type':e['type'],'values':JSON['stringify'](e['values']),'def':e[w(0xb9)],'internal':e[w(0xa3)]});}}else this[w(0xb3)]=null;this[w(0x93)](),this[w(0xa0)]();}[u(0x89)](){const x=u;this[x(0x93)](),this[x(0xa0)]();}[u(0x8d)](){const y=u;let c={'name':'','type':'string'};if(this['defaultInternal'])c[y(0xa3)]=!![];this['properties'][y(0x91)](c),this['_bindingsRefresh'](),this['_renderList']();}['addEnumProp'](){const z=u;let c={'name':'','type':'enum','values':'[\x22a\x22,\x20\x22b\x22]'};if(this['defaultInternal'])c[z(0xa3)]=!![];this['properties']['push'](c),this[z(0x93)](),this['_renderList']();}['removeProp'](c){const A=u;this[A(0xb3)][A(0xaf)](c,0x1),this[A(0xa0)](),this[A(0xc0)]();}['up'](c){const B=u;if(c>0x0){const d=this['properties'][c];this['properties'][B(0xaf)](c,0x1),this['properties'][B(0xaf)](--c,0x0,d),this['_renderList'](),this['changed']();}}[u(0x94)](c){const C=u;if(c<this[C(0xb3)][C(0x9b)]-0x1){const d=this['properties'][c];this['properties']['splice'](c,0x1),this[C(0xb3)][C(0xaf)](++c,0x0,d),this[C(0xa0)](),this['changed']();}}[u(0xa0)](){const D=u;if(!this[D(0xb4)])return;this['_propList']['innerHTML']='';if(!this[D(0xb3)])return;const c=new Map(),d=[];for(let e=0x0;e<this['properties']['length'];e++){const f=this['properties'][e],g=f['name']?f[D(0x97)][D(0xc8)]('_'):-0x1;if(g>0x0){const h=f[D(0x97)][D(0xc3)](0x0,g);if(!c['has'](h))c[D(0xc7)](h,[]);c[D(0x90)](h)['push']({'item':f,'index':e});}else d['push']({'item':f,'index':e});}for(const {item:j,index:k}of d){this[D(0xb4)][D(0xae)](this['_createPropRow'](j,k));}for(const [l,m]of c){const n=this[D(0x85)][D(0x9a)](l),o=document[D(0xc2)](D(0xca)),p=document['createElement'](D(0xca));p[D(0xbf)]=D(0xbd),p[D(0x9c)]=(n?'▸\x20':'▾\x20')+l,p[D(0x9d)]=l,p['onclick']=()=>{const E=D;if(this[E(0x85)][E(0x9a)](l))this['_collapsedGroups']['delete'](l);else this[E(0x85)]['add'](l);this[E(0xa0)]();},o['appendChild'](p);if(!n){const q=document['createElement']('div');q['className']='group-rows';for(const {item:r,index:s}of m){q['appendChild'](this['_createPropRow'](r,s));}o[D(0xae)](q);}this[D(0xb4)]['appendChild'](o);}}[u(0x86)](c,d){const F=u,e=document[F(0xc2)](F(0xca));e['className']='prop-row';const f=document[F(0xc2)]('input');f[F(0x96)]=c['name']??'',f['addEventListener']('input',()=>{const G=F;c['name']=f['value'],this[G(0xc0)]();}),f['addEventListener'](F(0x92),()=>{const H=F;this[H(0xa0)]();}),e[F(0xae)](f);const g=document[F(0xc2)](F(0x8b));g['style'][F(0xad)]=c['type']===F(0x8c)?'none':'';for(const n of['string','boolean','number','color','date','signal','screen',F(0xb6)]){const o=document[F(0xc2)](F(0xa9));o[F(0x96)]=n,o['textContent']=n;if(c[F(0xa8)]===n)o[F(0xaa)]=!![];g['appendChild'](o);}const h=document[F(0xc2)](F(0x99));h[F(0x98)][F(0xad)]=c[F(0xa8)]===F(0x8c)?'':'none',h['value']=c['values']??'',h[F(0x84)](F(0x99),()=>{const I=F;c[I(0xbc)]=h['value'],this['changed']();}),g['addEventListener'](F(0x87),()=>{const J=F;c['type']=g['value'],g[J(0x98)][J(0xad)]=c['type']==='enum'?J(0xa5):'',h[J(0x98)][J(0xad)]=c['type']==='enum'?'':J(0xa5),this[J(0xc0)]();}),e['appendChild'](g),e['appendChild'](h);const i=document['createElement'](F(0x99));i[F(0xa8)]='text',i[F(0x9d)]='default',i[F(0x96)]=c['def']??'',i['addEventListener']('input',()=>{const K=F;c[K(0xbe)]=i['value'],this['changed']();}),e['appendChild'](i);const j=document[F(0xc2)](F(0x99));j['type']=F(0x88),j[F(0x98)][F(0xb2)]='0',j[F(0x9d)]='internal',j[F(0xa7)]=!!c[F(0xa3)],j[F(0x84)]('change',()=>{c['internal']=j['checked'],this['changed']();}),e[F(0xae)](j);const k=document['createElement'](F(0x9f));k[F(0x9c)]=F(0xbb),k['addEventListener'](F(0xba),()=>this[F(0x95)](d)),e['appendChild'](k);const l=document['createElement'](F(0x9f));l[F(0x9c)]='↑',l['addEventListener'](F(0xba),()=>this['up'](d)),e['appendChild'](l);const m=document['createElement']('button');return m['textContent']='↓',m[F(0x84)]('click',()=>this['down'](d)),e[F(0xae)](m),e;}['changed'](){const L=u;if(this[L(0x8f)])for(let d in this['propertiesObj']){delete this[L(0x8f)][d];}for(let e of this['properties']){if(e[L(0x97)]){for(let g of notAllowedChars)e[L(0x97)]=e[L(0x97)]['replaceAll'](g,'');e[L(0x97)]=e[L(0x97)][0x0][L(0x9e)]()+e[L(0x97)]['substring'](0x1);let f={'type':e[L(0xa8)]};if(e[L(0xbe)]){if(e[L(0xa8)]==L(0xab))f[L(0xb9)]=parseFloat(e[L(0xbe)]);else{if(e['type']==L(0xc6))f['default']=e[L(0xbe)]=='true';else f[L(0xb9)]=e[L(0xbe)];}}if(e['internal'])f['internal']=!![];e['type']=='enum'&&(f['values']=JSON['parse'](e['values'])),this[L(0x8f)][e[L(0x97)]]=f;}}}[u(0xa6)](){const M=u;return this[M(0xc0)](),this[M(0x8f)]?{...this[M(0x8f)]}:{};}}customElements['define']('iobroker-webui-control-properties-editor',IobrokerWebuiControlPropertiesEditor);
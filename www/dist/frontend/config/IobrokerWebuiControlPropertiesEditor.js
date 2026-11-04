function b(c,d){c=c-0xb0;const e=a();let f=e[c];return f;}const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=parseInt(t(0xbf))/0x1+-parseInt(t(0xcf))/0x2*(parseInt(t(0xd3))/0x3)+-parseInt(t(0xd5))/0x4*(-parseInt(t(0xb5))/0x5)+parseInt(t(0xda))/0x6*(-parseInt(t(0xbd))/0x7)+parseInt(t(0xde))/0x8+parseInt(t(0xd1))/0x9+-parseInt(t(0xf5))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x732b8));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';function a(){const N=['checkbox','appendChild','_bindingsRefresh','prop-list','group-header','46aZGjuZ','screen','4893678qpkpQf','title','88089MbGqYd','_renderList','1387896MSJkps','def','addEventListener','getProperties','signal','716934YUjKAx','string','div','prop-row','4028984OpbkkU','name','number','blur','color','propertiesObj','length','createElement','setProperties','internal','boolean','addProp','selected','checked','value','down','changed','removeProp','textContent','addEnumProp','innerHTML','del','has','13032150WyBsAC','_propList','style','add','_collapsedGroups','true','default','enum','click','10FcSiSD','text','type','display','none','values','option','properties','7eIfiBE','margin','828476IicZFW','defaultInternal','className','button','input','ready','select','_createPropRow','toLowerCase','splice','change'];a=function(){return N;};return a();}const notAllowedChars='!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^';export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static [u(0xf7)]=css`
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
        </div>`;constructor(){super(),this['_restoreCachedInititalValues']();}[u(0xc4)](){const v=u;this['_bindingsParse'](),this['_assignEvents'](),this['_propList']=this['_getDomElement'](v(0xcd));}['properties'];['propertiesObj'];['defaultInternal'];[u(0xb0)]=new Set();[u(0xf6)];[u(0xe6)](c){const w=u;this['propertiesObj']=c;if(c){this[w(0xbc)]=[];for(let d in c){let e=c[d];this['properties']['push']({'name':d,'type':e[w(0xb7)],'values':JSON['stringify'](e[w(0xba)]),'def':e['default'],'internal':e[w(0xe7)]});}}else this[w(0xbc)]=null;this['_bindingsRefresh'](),this[w(0xd4)]();}['refresh'](){const x=u;this['_bindingsRefresh'](),this[x(0xd4)]();}[u(0xe9)](){const y=u;let c={'name':'','type':y(0xdb)};if(this[y(0xc0)])c['internal']=!![];this[y(0xbc)]['push'](c),this[y(0xcc)](),this['_renderList']();}[u(0xf1)](){const z=u;let c={'name':'','type':z(0xb3),'values':'[\x22a\x22,\x20\x22b\x22]'};if(this['defaultInternal'])c[z(0xe7)]=!![];this['properties']['push'](c),this[z(0xcc)](),this['_renderList']();}['removeProp'](c){const A=u;this['properties']['splice'](c,0x1),this[A(0xd4)](),this['changed']();}['up'](c){const B=u;if(c>0x0){const d=this['properties'][c];this[B(0xbc)]['splice'](c,0x1),this['properties'][B(0xc8)](--c,0x0,d),this['_renderList'](),this[B(0xee)]();}}[u(0xed)](c){const C=u;if(c<this[C(0xbc)][C(0xe4)]-0x1){const d=this[C(0xbc)][c];this['properties']['splice'](c,0x1),this[C(0xbc)][C(0xc8)](++c,0x0,d),this['_renderList'](),this[C(0xee)]();}}[u(0xd4)](){const D=u;if(!this['_propList'])return;this[D(0xf6)][D(0xf2)]='';if(!this[D(0xbc)])return;const c=new Map(),d=[];for(let e=0x0;e<this['properties'][D(0xe4)];e++){const f=this[D(0xbc)][e],g=f['name']?f['name']['indexOf']('_'):-0x1;if(g>0x0){const h=f[D(0xdf)]['substring'](0x0,g);if(!c['has'](h))c['set'](h,[]);c['get'](h)['push']({'item':f,'index':e});}else d['push']({'item':f,'index':e});}for(const {item:j,index:k}of d){this['_propList']['appendChild'](this['_createPropRow'](j,k));}for(const [l,m]of c){const n=this[D(0xb0)]['has'](l),o=document[D(0xe5)]('div'),p=document['createElement'](D(0xdc));p['className']=D(0xce),p[D(0xf0)]=(n?'▸\x20':'▾\x20')+l,p[D(0xd2)]=l,p['onclick']=()=>{const E=D;if(this[E(0xb0)][E(0xf4)](l))this['_collapsedGroups']['delete'](l);else this[E(0xb0)][E(0xf8)](l);this[E(0xd4)]();},o[D(0xcb)](p);if(!n){const q=document['createElement']('div');q['className']='group-rows';for(const {item:r,index:s}of m){q[D(0xcb)](this[D(0xc6)](r,s));}o[D(0xcb)](q);}this['_propList'][D(0xcb)](o);}}['_createPropRow'](c,d){const F=u,e=document[F(0xe5)]('div');e[F(0xc1)]=F(0xdd);const f=document['createElement']('input');f['value']=c['name']??'',f['addEventListener']('input',()=>{const G=F;c[G(0xdf)]=f['value'],this[G(0xee)]();}),f['addEventListener'](F(0xe1),()=>{this['_renderList']();}),e[F(0xcb)](f);const g=document[F(0xe5)](F(0xc5));g[F(0xf7)][F(0xb8)]=c[F(0xb7)]===F(0xb3)?F(0xb9):'';for(const n of[F(0xdb),F(0xe8),F(0xe0),F(0xe2),'date',F(0xd9),F(0xd0),'object']){const o=document['createElement'](F(0xbb));o[F(0xec)]=n,o['textContent']=n;if(c[F(0xb7)]===n)o[F(0xea)]=!![];g['appendChild'](o);}const h=document['createElement'](F(0xc3));h[F(0xf7)][F(0xb8)]=c[F(0xb7)]===F(0xb3)?'':'none',h[F(0xec)]=c['values']??'',h[F(0xd7)]('input',()=>{const H=F;c[H(0xba)]=h['value'],this['changed']();}),g[F(0xd7)]('change',()=>{const I=F;c[I(0xb7)]=g[I(0xec)],g[I(0xf7)]['display']=c['type']===I(0xb3)?I(0xb9):'',h[I(0xf7)]['display']=c[I(0xb7)]===I(0xb3)?'':'none',this['changed']();}),e['appendChild'](g),e['appendChild'](h);const i=document[F(0xe5)](F(0xc3));i[F(0xb7)]=F(0xb6),i[F(0xd2)]='default',i[F(0xec)]=c[F(0xd6)]??'',i['addEventListener'](F(0xc3),()=>{const J=F;c[J(0xd6)]=i[J(0xec)],this['changed']();}),e[F(0xcb)](i);const j=document[F(0xe5)](F(0xc3));j[F(0xb7)]=F(0xca),j[F(0xf7)][F(0xbe)]='0',j['title']='internal',j['checked']=!!c[F(0xe7)],j[F(0xd7)](F(0xc9),()=>{const K=F;c[K(0xe7)]=j[K(0xeb)],this['changed']();}),e['appendChild'](j);const k=document['createElement'](F(0xc2));k['textContent']=F(0xf3),k[F(0xd7)]('click',()=>this[F(0xef)](d)),e[F(0xcb)](k);const l=document['createElement'](F(0xc2));l[F(0xf0)]='↑',l['addEventListener'](F(0xb4),()=>this['up'](d)),e['appendChild'](l);const m=document[F(0xe5)](F(0xc2));return m[F(0xf0)]='↓',m['addEventListener'](F(0xb4),()=>this[F(0xed)](d)),e[F(0xcb)](m),e;}['changed'](){const L=u;if(this[L(0xe3)])for(let d in this['propertiesObj']){delete this['propertiesObj'][d];}for(let e of this['properties']){if(e['name']){for(let g of notAllowedChars)e['name']=e['name']['replaceAll'](g,'');e['name']=e[L(0xdf)][0x0][L(0xc7)]()+e['name']['substring'](0x1);let f={'type':e['type']};if(e[L(0xd6)]){if(e['type']=='number')f[L(0xb2)]=parseFloat(e[L(0xd6)]);else{if(e['type']=='boolean')f['default']=e[L(0xd6)]==L(0xb1);else f['default']=e[L(0xd6)];}}if(e['internal'])f['internal']=!![];e['type']=='enum'&&(f['values']=JSON['parse'](e[L(0xba)])),this['propertiesObj'][e['name']]=f;}}}[u(0xd8)](){const M=u;return this[M(0xee)](),this['propertiesObj']?{...this[M(0xe3)]}:{};}}customElements['define']('iobroker-webui-control-properties-editor',IobrokerWebuiControlPropertiesEditor);
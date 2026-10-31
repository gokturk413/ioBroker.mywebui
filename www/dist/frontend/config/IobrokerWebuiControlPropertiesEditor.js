const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=parseInt(t(0xf5))/0x1+parseInt(t(0x10e))/0x2*(parseInt(t(0xfc))/0x3)+parseInt(t(0xe4))/0x4*(parseInt(t(0xfa))/0x5)+parseInt(t(0x119))/0x6+-parseInt(t(0x111))/0x7+parseInt(t(0x100))/0x8+parseInt(t(0x112))/0x9*(-parseInt(t(0xf0))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x85de4));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';const notAllowedChars='!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^';function b(c,d){c=c-0xdb;const e=a();let f=e[c];return f;}function a(){const P=['screen','toLowerCase','button','1530wtkAue','has','defaultInternal','checkbox','boolean','23960JsBbvV','createElement','className','def','_propList','5152405VYEepa','addEnumProp','14757DXzztS','set','none','_bindingsRefresh','2569280sIKqlg','ready','true','get','group-rows','changed','addProp','push','del','addEventListener','substring','properties','object','display','106EqiZHL','group-header','propertiesObj','7262892rsoNbh','10737sysMXw','type','style','indexOf','default','textContent','div','792606iIbets','signal','input','_collapsedGroups','appendChild','internal','iobroker-webui-control-properties-editor','select','_renderList','_assignEvents','name','4zLKrnI','_restoreCachedInititalValues','string','checked','stringify','onclick','splice','enum','value'];a=function(){return P;};return a();}export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static [u(0x114)]=css`
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
        </div>`;constructor(){const v=u;super(),this[v(0xe5)]();}[u(0x101)](){const w=u;this['_bindingsParse'](),this[w(0xe2)](),this['_propList']=this['_getDomElement']('prop-list');}[u(0x10b)];[u(0x110)];['defaultInternal'];[u(0xdc)]=new Set();['_propList'];['setProperties'](c){const x=u;this[x(0x110)]=c;if(c){this['properties']=[];for(let d in c){let e=c[d];this['properties']['push']({'name':d,'type':e['type'],'values':JSON[x(0xe8)](e['values']),'def':e[x(0x116)],'internal':e[x(0xde)]});}}else this['properties']=null;this[x(0xff)](),this['_renderList']();}['refresh'](){const y=u;this['_bindingsRefresh'](),this[y(0xe1)]();}[u(0x106)](){const z=u;let c={'name':'','type':z(0xe6)};if(this['defaultInternal'])c['internal']=!![];this[z(0x10b)][z(0x107)](c),this[z(0xff)](),this[z(0xe1)]();}[u(0xfb)](){const A=u;let c={'name':'','type':A(0xeb),'values':'[\x22a\x22,\x20\x22b\x22]'};if(this[A(0xf2)])c['internal']=!![];this['properties']['push'](c),this[A(0xff)](),this[A(0xe1)]();}['removeProp'](c){const B=u;this['properties'][B(0xea)](c,0x1),this['_renderList'](),this['changed']();}['up'](c){const C=u;if(c>0x0){const d=this[C(0x10b)][c];this['properties'][C(0xea)](c,0x1),this[C(0x10b)][C(0xea)](--c,0x0,d),this[C(0xe1)](),this['changed']();}}['down'](c){const D=u;if(c<this[D(0x10b)]['length']-0x1){const d=this['properties'][c];this[D(0x10b)][D(0xea)](c,0x1),this['properties'][D(0xea)](++c,0x0,d),this[D(0xe1)](),this['changed']();}}[u(0xe1)](){const E=u;if(!this[E(0xf9)])return;this['_propList']['innerHTML']='';if(!this[E(0x10b)])return;const c=new Map(),d=[];for(let e=0x0;e<this[E(0x10b)]['length'];e++){const f=this['properties'][e],g=f[E(0xe3)]?f[E(0xe3)][E(0x115)]('_'):-0x1;if(g>0x0){const h=f[E(0xe3)][E(0x10a)](0x0,g);if(!c[E(0xf1)](h))c[E(0xfd)](h,[]);c[E(0x103)](h)['push']({'item':f,'index':e});}else d[E(0x107)]({'item':f,'index':e});}for(const {item:j,index:k}of d){this[E(0xf9)]['appendChild'](this['_createPropRow'](j,k));}for(const [l,m]of c){const n=this[E(0xdc)]['has'](l),o=document['createElement'](E(0x118)),p=document[E(0xf6)](E(0x118));p[E(0xf7)]=E(0x10f),p['textContent']=(n?'▸\x20':'▾\x20')+l,p['title']=l,p[E(0xe9)]=()=>{const F=E;if(this['_collapsedGroups']['has'](l))this['_collapsedGroups']['delete'](l);else this[F(0xdc)]['add'](l);this['_renderList']();},o['appendChild'](p);if(!n){const q=document[E(0xf6)](E(0x118));q['className']=E(0x104);for(const {item:r,index:s}of m){q[E(0xdd)](this['_createPropRow'](r,s));}o[E(0xdd)](q);}this[E(0xf9)][E(0xdd)](o);}}['_createPropRow'](c,d){const G=u,e=document['createElement']('div');e['className']='prop-row';const f=document['createElement']('input');f[G(0xec)]=c['name']??'',f[G(0x109)](G(0xdb),()=>{const H=G;c['name']=f[H(0xec)],this['changed']();}),f['addEventListener']('blur',()=>{const I=G;this[I(0xe1)]();}),e['appendChild'](f);const g=document[G(0xf6)](G(0xe0));g[G(0x114)][G(0x10d)]=c[G(0x113)]===G(0xeb)?G(0xfe):'';for(const n of[G(0xe6),G(0xf4),'number','color','date',G(0x11a),G(0xed),G(0x10c)]){const o=document['createElement']('option');o[G(0xec)]=n,o['textContent']=n;if(c[G(0x113)]===n)o['selected']=!![];g[G(0xdd)](o);}const h=document[G(0xf6)](G(0xdb));h[G(0x114)][G(0x10d)]=c['type']===G(0xeb)?'':'none',h['value']=c['values']??'',h['addEventListener']('input',()=>{const J=G;c['values']=h[J(0xec)],this[J(0x105)]();}),g['addEventListener']('change',()=>{const K=G;c['type']=g['value'],g[K(0x114)]['display']=c[K(0x113)]===K(0xeb)?K(0xfe):'',h['style'][K(0x10d)]=c['type']===K(0xeb)?'':K(0xfe),this['changed']();}),e[G(0xdd)](g),e[G(0xdd)](h);const i=document[G(0xf6)]('input');i['type']='text',i['title']='default',i[G(0xec)]=c['def']??'',i['addEventListener'](G(0xdb),()=>{const L=G;c['def']=i[L(0xec)],this[L(0x105)]();}),e[G(0xdd)](i);const j=document[G(0xf6)]('input');j[G(0x113)]=G(0xf3),j[G(0x114)]['margin']='0',j['title']=G(0xde),j[G(0xe7)]=!!c['internal'],j['addEventListener']('change',()=>{const M=G;c[M(0xde)]=j['checked'],this['changed']();}),e['appendChild'](j);const k=document['createElement'](G(0xef));k['textContent']=G(0x108),k[G(0x109)]('click',()=>this['removeProp'](d)),e['appendChild'](k);const l=document[G(0xf6)](G(0xef));l[G(0x117)]='↑',l['addEventListener']('click',()=>this['up'](d)),e['appendChild'](l);const m=document['createElement']('button');return m[G(0x117)]='↓',m[G(0x109)]('click',()=>this['down'](d)),e['appendChild'](m),e;}['changed'](){const N=u;if(this[N(0x110)])for(let d in this['propertiesObj']){delete this['propertiesObj'][d];}for(let e of this['properties']){if(e[N(0xe3)]){for(let g of notAllowedChars)e['name']=e[N(0xe3)]['replaceAll'](g,'');e[N(0xe3)]=e['name'][0x0][N(0xee)]()+e[N(0xe3)]['substring'](0x1);let f={'type':e['type']};if(e[N(0xf8)]){if(e[N(0x113)]=='number')f['default']=parseFloat(e['def']);else{if(e['type']==N(0xf4))f[N(0x116)]=e[N(0xf8)]==N(0x102);else f['default']=e['def'];}}if(e[N(0xde)])f['internal']=!![];e[N(0x113)]=='enum'&&(f['values']=JSON['parse'](e['values'])),this[N(0x110)][e[N(0xe3)]]=f;}}}['getProperties'](){const O=u;return this['changed'](),this['propertiesObj']?{...this[O(0x110)]}:{};}}customElements['define'](u(0xdf),IobrokerWebuiControlPropertiesEditor);
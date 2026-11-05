function b(c,d){c=c-0xdb;const e=a();let f=e[c];return f;}const u=b;function a(){const N=['getProperties','4ivOYfE','template','className','properties','has','appendChild','377027lHXqls','color','prop-list','type','1053125fJTMVB','boolean','blur','default','style','select','value','replaceAll','innerHTML','substring','_assignEvents','push','enum','input','propertiesObj','click','createElement','title','add','changed','toLowerCase','date','option','splice','_propList','none','_bindingsRefresh','checked','_renderList','removeProp','string','group-rows','onclick','object','_collapsedGroups','8lVDzxB','[\x22a\x22,\x20\x22b\x22]','values','4149090svlHei','_restoreCachedInititalValues','selected','display','iobroker-webui-control-properties-editor','36644zOzKeJ','addProp','name','refresh','_createPropRow','190149ZfqlJV','parse','screen','182512ppWVbY','internal','ready','div','def','change','del','set','group-header','1163274ggUFkF','prop-row','addEventListener','textContent','button'];a=function(){return N;};return a();}(function(c,d){const t=b,e=c();while(!![]){try{const f=-parseInt(t(0x11d))/0x1+-parseInt(t(0x125))/0x2+-parseInt(t(0x122))/0x3*(parseInt(t(0xe8))/0x4)+-parseInt(t(0xf2))/0x5+parseInt(t(0xe2))/0x6+parseInt(t(0xee))/0x7*(-parseInt(t(0x115))/0x8)+parseInt(t(0x118))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x309d0));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';const notAllowedChars='!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^';export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    }`;static [u(0xe9)]=html`
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
        </div>`;constructor(){const v=u;super(),this[v(0x119)]();}[u(0xdb)](){const w=u;this['_bindingsParse'](),this[w(0xfc)](),this[w(0x10a)]=this['_getDomElement'](w(0xf0));}[u(0xeb)];[u(0x100)];['defaultInternal'];[u(0x114)]=new Set();[u(0x10a)];['setProperties'](c){const x=u;this['propertiesObj']=c;if(c){this['properties']=[];for(let d in c){let e=c[d];this[x(0xeb)][x(0xfd)]({'name':d,'type':e[x(0xf1)],'values':JSON['stringify'](e['values']),'def':e[x(0xf5)],'internal':e['internal']});}}else this[x(0xeb)]=null;this[x(0x10c)](),this[x(0x10e)]();}[u(0x120)](){const y=u;this['_bindingsRefresh'](),this[y(0x10e)]();}[u(0x11e)](){const z=u;let c={'name':'','type':z(0x110)};if(this['defaultInternal'])c['internal']=!![];this['properties']['push'](c),this[z(0x10c)](),this['_renderList']();}['addEnumProp'](){const A=u;let c={'name':'','type':'enum','values':A(0x116)};if(this['defaultInternal'])c[A(0x126)]=!![];this['properties'][A(0xfd)](c),this['_bindingsRefresh'](),this[A(0x10e)]();}[u(0x10f)](c){const B=u;this['properties']['splice'](c,0x1),this[B(0x10e)](),this['changed']();}['up'](c){const C=u;if(c>0x0){const d=this[C(0xeb)][c];this['properties']['splice'](c,0x1),this['properties'][C(0x109)](--c,0x0,d),this[C(0x10e)](),this['changed']();}}['down'](c){const D=u;if(c<this['properties']['length']-0x1){const d=this['properties'][c];this[D(0xeb)][D(0x109)](c,0x1),this['properties'][D(0x109)](++c,0x0,d),this[D(0x10e)](),this['changed']();}}[u(0x10e)](){const E=u;if(!this['_propList'])return;this['_propList'][E(0xfa)]='';if(!this[E(0xeb)])return;const c=new Map(),d=[];for(let e=0x0;e<this[E(0xeb)]['length'];e++){const f=this['properties'][e],g=f['name']?f[E(0x11f)]['indexOf']('_'):-0x1;if(g>0x0){const h=f[E(0x11f)][E(0xfb)](0x0,g);if(!c['has'](h))c[E(0xe0)](h,[]);c['get'](h)['push']({'item':f,'index':e});}else d[E(0xfd)]({'item':f,'index':e});}for(const {item:j,index:k}of d){this['_propList']['appendChild'](this[E(0x121)](j,k));}for(const [l,m]of c){const n=this['_collapsedGroups'][E(0xec)](l),o=document[E(0x102)](E(0xdc)),p=document['createElement'](E(0xdc));p[E(0xea)]=E(0xe1),p[E(0xe5)]=(n?'▸\x20':'▾\x20')+l,p[E(0x103)]=l,p[E(0x112)]=()=>{const F=E;if(this['_collapsedGroups'][F(0xec)](l))this[F(0x114)]['delete'](l);else this['_collapsedGroups'][F(0x104)](l);this[F(0x10e)]();},o[E(0xed)](p);if(!n){const q=document[E(0x102)](E(0xdc));q['className']=E(0x111);for(const {item:r,index:s}of m){q['appendChild'](this[E(0x121)](r,s));}o[E(0xed)](q);}this[E(0x10a)][E(0xed)](o);}}[u(0x121)](c,d){const G=u,e=document[G(0x102)]('div');e['className']=G(0xe3);const f=document[G(0x102)](G(0xff));f['value']=c['name']??'',f['addEventListener'](G(0xff),()=>{c['name']=f['value'],this['changed']();}),f['addEventListener'](G(0xf4),()=>{this['_renderList']();}),e['appendChild'](f);const g=document['createElement'](G(0xf7));g['style'][G(0x11b)]=c['type']==='enum'?G(0x10b):'';for(const n of['string',G(0xf3),'number',G(0xef),G(0x107),'signal',G(0x124),G(0x113)]){const o=document['createElement'](G(0x108));o[G(0xf8)]=n,o['textContent']=n;if(c[G(0xf1)]===n)o[G(0x11a)]=!![];g[G(0xed)](o);}const h=document['createElement'](G(0xff));h['style'][G(0x11b)]=c[G(0xf1)]==='enum'?'':'none',h[G(0xf8)]=c[G(0x117)]??'',h['addEventListener']('input',()=>{const H=G;c['values']=h[H(0xf8)],this[H(0x105)]();}),g['addEventListener'](G(0xde),()=>{const I=G;c[I(0xf1)]=g['value'],g['style'][I(0x11b)]=c[I(0xf1)]==='enum'?I(0x10b):'',h[I(0xf6)][I(0x11b)]=c['type']===I(0xfe)?'':'none',this['changed']();}),e['appendChild'](g),e['appendChild'](h);const i=document[G(0x102)](G(0xff));i['type']='text',i[G(0x103)]='default',i[G(0xf8)]=c[G(0xdd)]??'',i['addEventListener']('input',()=>{const J=G;c[J(0xdd)]=i['value'],this[J(0x105)]();}),e['appendChild'](i);const j=document[G(0x102)](G(0xff));j[G(0xf1)]='checkbox',j[G(0xf6)]['margin']='0',j[G(0x103)]=G(0x126),j[G(0x10d)]=!!c['internal'],j[G(0xe4)](G(0xde),()=>{const K=G;c['internal']=j[K(0x10d)],this['changed']();}),e[G(0xed)](j);const k=document['createElement'](G(0xe6));k[G(0xe5)]=G(0xdf),k['addEventListener'](G(0x101),()=>this[G(0x10f)](d)),e['appendChild'](k);const l=document[G(0x102)](G(0xe6));l['textContent']='↑',l['addEventListener'](G(0x101),()=>this['up'](d)),e[G(0xed)](l);const m=document[G(0x102)]('button');return m[G(0xe5)]='↓',m[G(0xe4)](G(0x101),()=>this['down'](d)),e[G(0xed)](m),e;}[u(0x105)](){const L=u;if(this[L(0x100)])for(let d in this[L(0x100)]){delete this['propertiesObj'][d];}for(let e of this[L(0xeb)]){if(e[L(0x11f)]){for(let g of notAllowedChars)e[L(0x11f)]=e[L(0x11f)][L(0xf9)](g,'');e['name']=e['name'][0x0][L(0x106)]()+e[L(0x11f)]['substring'](0x1);let f={'type':e[L(0xf1)]};if(e[L(0xdd)]){if(e['type']=='number')f['default']=parseFloat(e[L(0xdd)]);else{if(e[L(0xf1)]==L(0xf3))f['default']=e[L(0xdd)]=='true';else f[L(0xf5)]=e['def'];}}if(e[L(0x126)])f['internal']=!![];e[L(0xf1)]=='enum'&&(f[L(0x117)]=JSON[L(0x123)](e[L(0x117)])),this['propertiesObj'][e['name']]=f;}}}[u(0xe7)](){const M=u;return this[M(0x105)](),this['propertiesObj']?{...this['propertiesObj']}:{};}}customElements['define'](u(0x11c),IobrokerWebuiControlPropertiesEditor);
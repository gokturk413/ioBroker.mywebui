const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=parseInt(t(0xf5))/0x1+parseInt(t(0xd1))/0x2+parseInt(t(0xd4))/0x3*(-parseInt(t(0xea))/0x4)+parseInt(t(0xfa))/0x5*(parseInt(t(0xd8))/0x6)+parseInt(t(0xd3))/0x7*(-parseInt(t(0xf6))/0x8)+-parseInt(t(0xf3))/0x9+-parseInt(t(0xd6))/0xa*(-parseInt(t(0x10d))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x47ffd));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';const notAllowedChars=u(0x10f);function b(c,d){c=c-0xd1;const e=a();let f=e[c];return f;}export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static [u(0xd2)]=css`
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
    }`;static [u(0xeb)]=html`
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
        </div>`;constructor(){const v=u;super(),this[v(0xe0)]();}[u(0xe7)](){const w=u;this['_bindingsParse'](),this[w(0xfb)](),this[w(0x111)]=this[w(0x101)](w(0x10b));}['properties'];[u(0xe8)];['defaultInternal'];[u(0xe1)]=new Set();['_propList'];['setProperties'](c){const x=u;this['propertiesObj']=c;if(c){this['properties']=[];for(let d in c){let e=c[d];this[x(0xf1)]['push']({'name':d,'type':e[x(0x109)],'values':JSON[x(0xdb)](e['values']),'def':e['default'],'internal':e[x(0xfd)]});}}else this['properties']=null;this[x(0xe6)](),this[x(0xdc)]();}[u(0x10e)](){const y=u;this[y(0xe6)](),this[y(0xdc)]();}['addProp'](){const z=u;let c={'name':'','type':'string'};if(this['defaultInternal'])c[z(0xfd)]=!![];this['properties']['push'](c),this['_bindingsRefresh'](),this['_renderList']();}[u(0xda)](){const A=u;let c={'name':'','type':'enum','values':A(0xde)};if(this['defaultInternal'])c[A(0xfd)]=!![];this[A(0xf1)][A(0xfc)](c),this[A(0xe6)](),this['_renderList']();}['removeProp'](c){const B=u;this['properties'][B(0x10a)](c,0x1),this['_renderList'](),this[B(0xec)]();}['up'](c){const C=u;if(c>0x0){const d=this[C(0xf1)][c];this[C(0xf1)][C(0x10a)](c,0x1),this[C(0xf1)]['splice'](--c,0x0,d),this[C(0xdc)](),this[C(0xec)]();}}['down'](c){const D=u;if(c<this['properties']['length']-0x1){const d=this[D(0xf1)][c];this[D(0xf1)]['splice'](c,0x1),this['properties']['splice'](++c,0x0,d),this[D(0xdc)](),this['changed']();}}['_renderList'](){const E=u;if(!this['_propList'])return;this['_propList']['innerHTML']='';if(!this['properties'])return;const c=new Map(),d=[];for(let e=0x0;e<this['properties'][E(0xd9)];e++){const f=this[E(0xf1)][e],g=f['name']?f[E(0xdd)]['indexOf']('_'):-0x1;if(g>0x0){const h=f['name']['substring'](0x0,g);if(!c['has'](h))c[E(0xf0)](h,[]);c[E(0xd5)](h)[E(0xfc)]({'item':f,'index':e});}else d[E(0xfc)]({'item':f,'index':e});}for(const {item:j,index:k}of d){this['_propList'][E(0xd7)](this[E(0xe4)](j,k));}for(const [l,m]of c){const n=this[E(0xe1)][E(0xf9)](l),o=document['createElement'](E(0x10c)),p=document['createElement'](E(0x10c));p['className']=E(0x110),p[E(0xdf)]=(n?'▸\x20':'▾\x20')+l,p['title']=l,p['onclick']=()=>{const F=E;if(this[F(0xe1)][F(0xf9)](l))this['_collapsedGroups'][F(0xf4)](l);else this['_collapsedGroups'][F(0xef)](l);this['_renderList']();},o['appendChild'](p);if(!n){const q=document[E(0x113)](E(0x10c));q['className']='group-rows';for(const {item:r,index:s}of m){q['appendChild'](this['_createPropRow'](r,s));}o[E(0xd7)](q);}this['_propList']['appendChild'](o);}}['_createPropRow'](c,d){const G=u,e=document[G(0x113)]('div');e[G(0x116)]='prop-row';const f=document[G(0x113)](G(0xf8));f['value']=c[G(0xdd)]??'',f['addEventListener'](G(0xf8),()=>{const H=G;c['name']=f[H(0x104)],this[H(0xec)]();}),f['addEventListener']('blur',()=>{this['_renderList']();}),e['appendChild'](f);const g=document[G(0x113)]('select');g[G(0xd2)][G(0xe9)]=c[G(0x109)]===G(0x108)?'none':'';for(const n of[G(0xe3),G(0xed),G(0x102),'color','date','signal',G(0x105),'object']){const o=document['createElement']('option');o[G(0x104)]=n,o['textContent']=n;if(c['type']===n)o['selected']=!![];g[G(0xd7)](o);}const h=document['createElement']('input');h['style'][G(0xe9)]=c['type']==='enum'?'':G(0x106),h[G(0x104)]=c[G(0xee)]??'',h['addEventListener']('input',()=>{c['values']=h['value'],this['changed']();}),g[G(0xfe)](G(0xf7),()=>{const I=G;c[I(0x109)]=g[I(0x104)],g[I(0xd2)][I(0xe9)]=c['type']==='enum'?I(0x106):'',h['style'][I(0xe9)]=c[I(0x109)]==='enum'?'':'none',this['changed']();}),e['appendChild'](g),e['appendChild'](h);const i=document[G(0x113)](G(0xf8));i['type']='text',i[G(0x107)]='default',i['value']=c[G(0x112)]??'',i['addEventListener']('input',()=>{const J=G;c['def']=i[J(0x104)],this['changed']();}),e[G(0xd7)](i);const j=document['createElement'](G(0xf8));j['type']='checkbox',j[G(0xd2)]['margin']='0',j[G(0x107)]='internal',j['checked']=!!c['internal'],j['addEventListener'](G(0xf7),()=>{const K=G;c[K(0xfd)]=j[K(0xf2)],this['changed']();}),e['appendChild'](j);const k=document[G(0x113)](G(0xe2));k[G(0xdf)]=G(0x115),k[G(0xfe)](G(0x114),()=>this['removeProp'](d)),e['appendChild'](k);const l=document[G(0x113)]('button');l[G(0xdf)]='↑',l[G(0xfe)](G(0x114),()=>this['up'](d)),e[G(0xd7)](l);const m=document[G(0x113)]('button');return m[G(0xdf)]='↓',m[G(0xfe)]('click',()=>this['down'](d)),e['appendChild'](m),e;}['changed'](){const L=u;if(this[L(0xe8)])for(let d in this[L(0xe8)]){delete this['propertiesObj'][d];}for(let e of this['properties']){if(e['name']){for(let g of notAllowedChars)e['name']=e['name'][L(0xff)](g,'');e[L(0xdd)]=e['name'][0x0]['toLowerCase']()+e[L(0xdd)]['substring'](0x1);let f={'type':e[L(0x109)]};if(e['def']){if(e[L(0x109)]=='number')f['default']=parseFloat(e['def']);else{if(e[L(0x109)]==L(0xed))f[L(0x103)]=e[L(0x112)]=='true';else f['default']=e['def'];}}if(e[L(0xfd)])f[L(0xfd)]=!![];e['type']=='enum'&&(f['values']=JSON['parse'](e['values'])),this[L(0xe8)][e[L(0xdd)]]=f;}}}[u(0x100)](){const M=u;return this[M(0xec)](),this['propertiesObj']?{...this[M(0xe8)]}:{};}}customElements['define'](u(0xe5),IobrokerWebuiControlPropertiesEditor);function a(){const N=['958990Krzfmr','style','563962uhxhVF','1560qPTwOU','get','260IungWQ','appendChild','1956esxvrx','length','addEnumProp','stringify','_renderList','name','[\x22a\x22,\x20\x22b\x22]','textContent','_restoreCachedInititalValues','_collapsedGroups','button','string','_createPropRow','iobroker-webui-control-properties-editor','_bindingsRefresh','ready','propertiesObj','display','1220InEvgO','template','changed','boolean','values','add','set','properties','checked','2202813QXSUSt','delete','5477NLIoin','40DhVbBk','change','input','has','3455niLgRY','_assignEvents','push','internal','addEventListener','replaceAll','getProperties','_getDomElement','number','default','value','screen','none','title','enum','type','splice','prop-list','div','165363xmosJl','refresh','!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^','group-header','_propList','def','createElement','click','del','className'];a=function(){return N;};return a();}
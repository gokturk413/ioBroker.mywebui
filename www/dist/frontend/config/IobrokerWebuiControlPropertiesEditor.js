const w=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=parseInt(t(0x1f1))/0x1+-parseInt(t(0x21e))/0x2*(-parseInt(t(0x223))/0x3)+-parseInt(t(0x204))/0x4*(parseInt(t(0x212))/0x5)+-parseInt(t(0x1ff))/0x6+-parseInt(t(0x20c))/0x7*(parseInt(t(0x1f2))/0x8)+parseInt(t(0x208))/0x9*(-parseInt(t(0x206))/0xa)+parseInt(t(0x21c))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x1a1eb));function b(c,d){c=c-0x1ed;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';function a(){const O=['signal','123996VnCYjT','151672nmobVC','text','def','prop-row','select','_collapsedGroups','title','enum','group-rows','input','removeProp','name','delete','299688OdFwCY','button','onclick','default','true','77668GLeZBi','values','100qZtUXd','value','182772VQxYuj','checkbox','substring','boolean','56hkWRDz','createElement','none','_renderList','_propList','div','25rcaQhs','object','checked','_createPropRow','_restoreCachedInititalValues','type','date','appendChild','internal','define','4349796sqqdiV','innerHTML','8934mpYrji','click','margin','changed','textContent','60lzpAUl','option','add','stringify','push','addEventListener','splice','propertiesObj','del','className','change','properties','has','setProperties','group-header','[\x22a\x22,\x20\x22b\x22]'];a=function(){return O;};return a();}const notAllowedChars='!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^';export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        </div>`;constructor(){const u=b;super(),this[u(0x216)]();}['ready'](){const v=b;this['_bindingsParse'](),this['_assignEvents'](),this[v(0x210)]=this['_getDomElement']('prop-list');}[w(0x22e)];['propertiesObj'];['defaultInternal'];['_collapsedGroups']=new Set();['_propList'];[w(0x1ed)](c){const x=w;this['propertiesObj']=c;if(c){this['properties']=[];for(let d in c){let e=c[d];this['properties']['push']({'name':d,'type':e[x(0x217)],'values':JSON[x(0x226)](e[x(0x205)]),'def':e['default'],'internal':e[x(0x21a)]});}}else this[x(0x22e)]=null;this['_bindingsRefresh'](),this[x(0x20f)]();}['refresh'](){const y=w;this['_bindingsRefresh'](),this[y(0x20f)]();}['addProp'](){const z=w;let c={'name':'','type':'string'};if(this['defaultInternal'])c['internal']=!![];this['properties'][z(0x227)](c),this['_bindingsRefresh'](),this['_renderList']();}['addEnumProp'](){const A=w;let c={'name':'','type':'enum','values':A(0x1ef)};if(this['defaultInternal'])c['internal']=!![];this[A(0x22e)]['push'](c),this['_bindingsRefresh'](),this['_renderList']();}['removeProp'](c){const B=w;this[B(0x22e)]['splice'](c,0x1),this['_renderList'](),this['changed']();}['up'](c){const C=w;if(c>0x0){const d=this['properties'][c];this[C(0x22e)][C(0x229)](c,0x1),this['properties']['splice'](--c,0x0,d),this['_renderList'](),this[C(0x221)]();}}['down'](c){const D=w;if(c<this['properties']['length']-0x1){const d=this[D(0x22e)][c];this[D(0x22e)]['splice'](c,0x1),this['properties'][D(0x229)](++c,0x0,d),this['_renderList'](),this[D(0x221)]();}}[w(0x20f)](){const E=w;if(!this[E(0x210)])return;this[E(0x210)][E(0x21d)]='';if(!this[E(0x22e)])return;const c=new Map(),d=[];for(let e=0x0;e<this['properties']['length'];e++){const f=this[E(0x22e)][e],g=f['name']?f['name']['indexOf']('_'):-0x1;if(g>0x0){const h=f[E(0x1fd)]['substring'](0x0,g);if(!c['has'](h))c['set'](h,[]);c['get'](h)[E(0x227)]({'item':f,'index':e});}else d[E(0x227)]({'item':f,'index':e});}for(const {item:j,index:k}of d){this['_propList'][E(0x219)](this['_createPropRow'](j,k));}for(const [l,m]of c){const n=this['_collapsedGroups'][E(0x22f)](l),o=document[E(0x20d)](E(0x211)),p=document[E(0x20d)]('div');p[E(0x22c)]=E(0x1ee),p[E(0x222)]=(n?'▸\x20':'▾\x20')+l,p[E(0x1f8)]=l,p[E(0x201)]=()=>{const F=E;if(this[F(0x1f7)][F(0x22f)](l))this['_collapsedGroups'][F(0x1fe)](l);else this['_collapsedGroups'][F(0x225)](l);this[F(0x20f)]();},o[E(0x219)](p);if(!n){const q=document[E(0x20d)](E(0x211));q[E(0x22c)]=E(0x1fa);for(const {item:r,index:s}of m){q['appendChild'](this['_createPropRow'](r,s));}o['appendChild'](q);}this[E(0x210)][E(0x219)](o);}}[w(0x215)](c,d){const G=w,e=document['createElement'](G(0x211));e['className']=G(0x1f5);const f=document['createElement']('input');f['value']=c[G(0x1fd)]??'',f[G(0x228)](G(0x1fb),()=>{const H=G;c[H(0x1fd)]=f[H(0x207)],this['changed']();}),f[G(0x228)]('blur',()=>{this['_renderList']();}),e['appendChild'](f);const g=document['createElement'](G(0x1f6));g['style']['display']=c[G(0x217)]===G(0x1f9)?'none':'';for(const n of['string',G(0x20b),'number','color',G(0x218),G(0x1f0),'screen',G(0x213)]){const o=document[G(0x20d)](G(0x224));o[G(0x207)]=n,o[G(0x222)]=n;if(c['type']===n)o['selected']=!![];g[G(0x219)](o);}const h=document['createElement']('input');h['style']['display']=c['type']===G(0x1f9)?'':G(0x20e),h['value']=c['values']??'',h['addEventListener'](G(0x1fb),()=>{const I=G;c[I(0x205)]=h[I(0x207)],this['changed']();}),g['addEventListener']('change',()=>{const J=G;c['type']=g['value'],g['style']['display']=c[J(0x217)]==='enum'?'none':'',h['style']['display']=c[J(0x217)]==='enum'?'':'none',this[J(0x221)]();}),e[G(0x219)](g),e[G(0x219)](h);const i=document[G(0x20d)]('input');i[G(0x217)]=G(0x1f3),i[G(0x1f8)]=G(0x202),i[G(0x207)]=c['def']??'',i[G(0x228)]('input',()=>{const K=G;c[K(0x1f4)]=i[K(0x207)],this[K(0x221)]();}),e['appendChild'](i);const j=document[G(0x20d)]('input');j['type']=G(0x209),j['style'][G(0x220)]='0',j['title']=G(0x21a),j['checked']=!!c['internal'],j['addEventListener'](G(0x22d),()=>{const L=G;c[L(0x21a)]=j[L(0x214)],this['changed']();}),e['appendChild'](j);const k=document['createElement']('button');k['textContent']=G(0x22b),k['addEventListener'](G(0x21f),()=>this[G(0x1fc)](d)),e['appendChild'](k);const l=document['createElement'](G(0x200));l['textContent']='↑',l[G(0x228)]('click',()=>this['up'](d)),e['appendChild'](l);const m=document['createElement'](G(0x200));return m[G(0x222)]='↓',m[G(0x228)]('click',()=>this['down'](d)),e['appendChild'](m),e;}['changed'](){const M=w;if(this['propertiesObj'])for(let d in this[M(0x22a)]){delete this['propertiesObj'][d];}for(let e of this[M(0x22e)]){if(e['name']){for(let g of notAllowedChars)e['name']=e['name']['replaceAll'](g,'');e[M(0x1fd)]=e[M(0x1fd)][0x0]['toLowerCase']()+e['name'][M(0x20a)](0x1);let f={'type':e[M(0x217)]};if(e['def']){if(e[M(0x217)]=='number')f[M(0x202)]=parseFloat(e['def']);else{if(e[M(0x217)]==M(0x20b))f[M(0x202)]=e['def']==M(0x203);else f['default']=e[M(0x1f4)];}}if(e['internal'])f[M(0x21a)]=!![];e[M(0x217)]==M(0x1f9)&&(f['values']=JSON['parse'](e[M(0x205)])),this[M(0x22a)][e['name']]=f;}}}['getProperties'](){const N=w;return this['changed'](),this[N(0x22a)]?{...this[N(0x22a)]}:{};}}customElements[w(0x21b)]('iobroker-webui-control-properties-editor',IobrokerWebuiControlPropertiesEditor);
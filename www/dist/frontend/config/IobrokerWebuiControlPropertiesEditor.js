const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=parseInt(t(0xc9))/0x1+-parseInt(t(0xa7))/0x2+parseInt(t(0xc5))/0x3*(-parseInt(t(0xb1))/0x4)+-parseInt(t(0xd7))/0x5+-parseInt(t(0xb2))/0x6*(-parseInt(t(0xdc))/0x7)+-parseInt(t(0xa5))/0x8*(-parseInt(t(0xb0))/0x9)+-parseInt(t(0xdf))/0xa*(parseInt(t(0xea))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9a313));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';const notAllowedChars=u(0xb5);export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        </div>`;constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const v=u;this['_bindingsParse'](),this[v(0xac)](),this[v(0xb4)]=this[v(0xc6)]('prop-list');}[u(0xda)];[u(0xd3)];['defaultInternal'];[u(0xc8)]=new Set();[u(0xb4)];['setProperties'](c){const w=u;this[w(0xd3)]=c;if(c){this['properties']=[];for(let d in c){let e=c[d];this[w(0xda)][w(0xaa)]({'name':d,'type':e['type'],'values':JSON['stringify'](e['values']),'def':e[w(0xd9)],'internal':e['internal']});}}else this[w(0xda)]=null;this[w(0xcc)](),this[w(0xad)]();}[u(0xc1)](){const x=u;this[x(0xcc)](),this['_renderList']();}[u(0xcd)](){const y=u;let c={'name':'','type':y(0xe1)};if(this['defaultInternal'])c[y(0xc0)]=!![];this[y(0xda)]['push'](c),this[y(0xcc)](),this[y(0xad)]();}[u(0xbb)](){const z=u;let c={'name':'','type':z(0xb9),'values':z(0xb7)};if(this[z(0xbd)])c[z(0xc0)]=!![];this['properties'][z(0xaa)](c),this[z(0xcc)](),this['_renderList']();}[u(0xcb)](c){const A=u;this[A(0xda)][A(0xe4)](c,0x1),this[A(0xad)](),this[A(0xe6)]();}['up'](c){const B=u;if(c>0x0){const d=this[B(0xda)][c];this['properties']['splice'](c,0x1),this[B(0xda)]['splice'](--c,0x0,d),this['_renderList'](),this[B(0xe6)]();}}[u(0xe0)](c){const C=u;if(c<this['properties'][C(0xb3)]-0x1){const d=this['properties'][c];this[C(0xda)][C(0xe4)](c,0x1),this['properties']['splice'](++c,0x0,d),this['_renderList'](),this['changed']();}}['_renderList'](){const D=u;if(!this[D(0xb4)])return;this[D(0xb4)][D(0xec)]='';if(!this[D(0xda)])return;const c=new Map(),d=[];for(let e=0x0;e<this['properties'][D(0xb3)];e++){const f=this[D(0xda)][e],g=f[D(0xc4)]?f[D(0xc4)][D(0xd8)]('_'):-0x1;if(g>0x0){const h=f['name'][D(0xce)](0x0,g);if(!c[D(0xe8)](h))c['set'](h,[]);c[D(0xe3)](h)[D(0xaa)]({'item':f,'index':e});}else d[D(0xaa)]({'item':f,'index':e});}for(const {item:j,index:k}of d){this['_propList'][D(0xaf)](this[D(0xbe)](j,k));}for(const [l,m]of c){const n=this['_collapsedGroups']['has'](l),o=document[D(0xdd)](D(0xd5)),p=document[D(0xdd)](D(0xd5));p['className']='group-header',p[D(0xd6)]=(n?'▸\x20':'▾\x20')+l,p[D(0xba)]=l,p['onclick']=()=>{const E=D;if(this[E(0xc8)][E(0xe8)](l))this['_collapsedGroups']['delete'](l);else this[E(0xc8)]['add'](l);this['_renderList']();},o[D(0xaf)](p);if(!n){const q=document[D(0xdd)](D(0xd5));q['className']='group-rows';for(const {item:r,index:s}of m){q[D(0xaf)](this[D(0xbe)](r,s));}o[D(0xaf)](q);}this[D(0xb4)]['appendChild'](o);}}['_createPropRow'](c,d){const F=u,e=document['createElement'](F(0xd5));e[F(0xde)]='prop-row';const f=document['createElement']('input');f['value']=c[F(0xc4)]??'',f[F(0xc7)](F(0xeb),()=>{const G=F;c[G(0xc4)]=f[G(0xbc)],this[G(0xe6)]();}),f[F(0xc7)]('blur',()=>{this['_renderList']();}),e[F(0xaf)](f);const g=document[F(0xdd)]('select');g[F(0xd0)][F(0xe7)]=c[F(0xdb)]===F(0xb9)?'none':'';for(const n of['string',F(0xb6),F(0xa8),F(0xd1),'date',F(0xc3),F(0xe5),'object']){const o=document['createElement']('option');o['value']=n,o['textContent']=n;if(c['type']===n)o[F(0xe9)]=!![];g['appendChild'](o);}const h=document['createElement']('input');h['style'][F(0xe7)]=c['type']==='enum'?'':F(0xae),h['value']=c['values']??'',h['addEventListener']('input',()=>{const H=F;c['values']=h[H(0xbc)],this['changed']();}),g[F(0xc7)](F(0xd2),()=>{const I=F;c['type']=g['value'],g['style']['display']=c['type']===I(0xb9)?'none':'',h[I(0xd0)][I(0xe7)]=c[I(0xdb)]===I(0xb9)?'':'none',this[I(0xe6)]();}),e[F(0xaf)](g),e['appendChild'](h);const i=document[F(0xdd)](F(0xeb));i['type']=F(0xab),i[F(0xba)]='default',i['value']=c['def']??'',i[F(0xc7)](F(0xeb),()=>{const J=F;c['def']=i[J(0xbc)],this[J(0xe6)]();}),e[F(0xaf)](i);const j=document['createElement'](F(0xeb));j['type']='checkbox',j[F(0xd0)][F(0xbf)]='0',j['title']='internal',j['checked']=!!c['internal'],j[F(0xc7)]('change',()=>{const K=F;c['internal']=j[K(0xa6)],this[K(0xe6)]();}),e['appendChild'](j);const k=document['createElement']('button');k['textContent']=F(0xd4),k[F(0xc7)](F(0xca),()=>this['removeProp'](d)),e[F(0xaf)](k);const l=document['createElement']('button');l['textContent']='↑',l['addEventListener']('click',()=>this['up'](d)),e['appendChild'](l);const m=document[F(0xdd)]('button');return m[F(0xd6)]='↓',m['addEventListener'](F(0xca),()=>this[F(0xe0)](d)),e['appendChild'](m),e;}[u(0xe6)](){const L=u;if(this[L(0xd3)])for(let d in this[L(0xd3)]){delete this['propertiesObj'][d];}for(let e of this['properties']){if(e['name']){for(let g of notAllowedChars)e[L(0xc4)]=e['name'][L(0xb8)](g,'');e[L(0xc4)]=e['name'][0x0]['toLowerCase']()+e['name'][L(0xce)](0x1);let f={'type':e['type']};if(e['def']){if(e['type']=='number')f[L(0xd9)]=parseFloat(e[L(0xa9)]);else{if(e['type']==L(0xb6))f[L(0xd9)]=e[L(0xa9)]=='true';else f[L(0xd9)]=e[L(0xa9)];}}if(e[L(0xc0)])f['internal']=!![];e[L(0xdb)]=='enum'&&(f[L(0xcf)]=JSON[L(0xe2)](e['values'])),this['propertiesObj'][e['name']]=f;}}}['getProperties'](){const M=u;return this[M(0xe6)](),this[M(0xd3)]?{...this['propertiesObj']}:{};}}customElements['define'](u(0xc2),IobrokerWebuiControlPropertiesEditor);function b(c,d){c=c-0xa5;const e=a();let f=e[c];return f;}function a(){const N=['values','style','color','change','propertiesObj','del','div','textContent','1476195dWTvGB','indexOf','default','properties','type','49KqHKGX','createElement','className','80OohIUt','down','string','parse','get','splice','screen','changed','display','has','selected','130383NMPGRd','input','innerHTML','40Vqrjno','checked','1157382aXbPxn','number','def','push','text','_assignEvents','_renderList','none','appendChild','1798326xpEFRC','4CNnoTA','422658fEpsYb','length','_propList','!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^','boolean','[\x22a\x22,\x20\x22b\x22]','replaceAll','enum','title','addEnumProp','value','defaultInternal','_createPropRow','margin','internal','refresh','iobroker-webui-control-properties-editor','signal','name','163926ONYRCG','_getDomElement','addEventListener','_collapsedGroups','162796HozNqF','click','removeProp','_bindingsRefresh','addProp','substring'];a=function(){return N;};return a();}
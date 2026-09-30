function a(){const O=['length','4874RFWMpX','checked','204523DYTmpA','ready','className','changed','342tQhCHY','display','default','title','48lBFkoR','2940jZEEUj','style','130056FxYLzu','removeProp','stringify','textContent','addProp','object','_renderList','addEventListener','splice','has','5363700XoTYbS','_propList','value','_collapsedGroups','toLowerCase','refresh','770749HJtXju','option','template','propertiesObj','setProperties','input','7132RHpTIH','properties','defaultInternal','63TinnKm','def','del','appendChild','_assignEvents','checkbox','replaceAll','225eiYmTQ','enum','click','5739875mNztrM','none','type','internal','boolean','button','screen','createElement','values','push','define','string','!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^','_getDomElement','indexOf','add','selected','div','onclick','name','_bindingsRefresh','_createPropRow','change'];a=function(){return O;};return a();}function b(c,d){c=c-0xe6;const e=a();let f=e[c];return f;}const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=-parseInt(t(0x103))/0x1*(parseInt(t(0xfd))/0x2)+-parseInt(t(0x123))/0x3*(parseInt(t(0x120))/0x4)+-parseInt(t(0x12d))/0x5+parseInt(t(0x107))/0x6*(-parseInt(t(0x11a))/0x7)+parseInt(t(0x10a))/0x8*(-parseInt(t(0x12a))/0x9)+-parseInt(t(0x114))/0xa+-parseInt(t(0xff))/0xb*(-parseInt(t(0x108))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xae03a));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';const notAllowedChars=u(0xf1);export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static [u(0x109)]=css`
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
    }`;static [u(0x11c)]=html`
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
        </div>`;constructor(){super(),this['_restoreCachedInititalValues']();}[u(0x100)](){const v=u;this['_bindingsParse'](),this[v(0x127)](),this[v(0x115)]=this[v(0xf2)]('prop-list');}['properties'];[u(0x11d)];[u(0x122)];['_collapsedGroups']=new Set();[u(0x115)];[u(0x11e)](c){const w=u;this['propertiesObj']=c;if(c){this['properties']=[];for(let d in c){let e=c[d];this[w(0x121)][w(0xee)]({'name':d,'type':e[w(0xe7)],'values':JSON[w(0x10c)](e[w(0xed)]),'def':e['default'],'internal':e[w(0xe8)]});}}else this[w(0x121)]=null;this['_bindingsRefresh'](),this[w(0x110)]();}[u(0x119)](){const x=u;this[x(0xf9)](),this['_renderList']();}[u(0x10e)](){const y=u;let c={'name':'','type':y(0xf0)};if(this[y(0x122)])c['internal']=!![];this[y(0x121)][y(0xee)](c),this[y(0xf9)](),this['_renderList']();}['addEnumProp'](){const z=u;let c={'name':'','type':z(0x12b),'values':'[\x22a\x22,\x20\x22b\x22]'};if(this[z(0x122)])c['internal']=!![];this[z(0x121)][z(0xee)](c),this['_bindingsRefresh'](),this['_renderList']();}[u(0x10b)](c){const A=u;this[A(0x121)]['splice'](c,0x1),this['_renderList'](),this['changed']();}['up'](c){const B=u;if(c>0x0){const d=this['properties'][c];this['properties'][B(0x112)](c,0x1),this[B(0x121)][B(0x112)](--c,0x0,d),this[B(0x110)](),this[B(0x102)]();}}['down'](c){const C=u;if(c<this['properties']['length']-0x1){const d=this['properties'][c];this['properties'][C(0x112)](c,0x1),this['properties']['splice'](++c,0x0,d),this[C(0x110)](),this['changed']();}}[u(0x110)](){const D=u;if(!this[D(0x115)])return;this['_propList']['innerHTML']='';if(!this[D(0x121)])return;const c=new Map(),d=[];for(let e=0x0;e<this['properties'][D(0xfc)];e++){const f=this['properties'][e],g=f['name']?f['name'][D(0xf3)]('_'):-0x1;if(g>0x0){const h=f['name']['substring'](0x0,g);if(!c[D(0x113)](h))c['set'](h,[]);c['get'](h)['push']({'item':f,'index':e});}else d['push']({'item':f,'index':e});}for(const {item:j,index:k}of d){this[D(0x115)][D(0x126)](this['_createPropRow'](j,k));}for(const [l,m]of c){const n=this[D(0x117)][D(0x113)](l),o=document[D(0xec)]('div'),p=document['createElement']('div');p['className']='group-header',p[D(0x10d)]=(n?'▸\x20':'▾\x20')+l,p[D(0x106)]=l,p[D(0xf7)]=()=>{const E=D;if(this['_collapsedGroups']['has'](l))this['_collapsedGroups']['delete'](l);else this['_collapsedGroups'][E(0xf4)](l);this[E(0x110)]();},o[D(0x126)](p);if(!n){const q=document['createElement'](D(0xf6));q['className']='group-rows';for(const {item:r,index:s}of m){q[D(0x126)](this[D(0xfa)](r,s));}o[D(0x126)](q);}this[D(0x115)][D(0x126)](o);}}['_createPropRow'](c,d){const F=u,e=document[F(0xec)]('div');e[F(0x101)]='prop-row';const f=document['createElement'](F(0x11f));f['value']=c[F(0xf8)]??'',f[F(0x111)](F(0x11f),()=>{const G=F;c['name']=f[G(0x116)],this['changed']();}),f['addEventListener']('blur',()=>{const H=F;this[H(0x110)]();}),e[F(0x126)](f);const g=document['createElement']('select');g['style'][F(0x104)]=c[F(0xe7)]==='enum'?'none':'';for(const n of[F(0xf0),'boolean','number','color','date','signal',F(0xeb),F(0x10f)]){const o=document['createElement'](F(0x11b));o[F(0x116)]=n,o['textContent']=n;if(c[F(0xe7)]===n)o[F(0xf5)]=!![];g['appendChild'](o);}const h=document['createElement']('input');h[F(0x109)][F(0x104)]=c['type']==='enum'?'':F(0xe6),h[F(0x116)]=c[F(0xed)]??'',h['addEventListener'](F(0x11f),()=>{const I=F;c[I(0xed)]=h[I(0x116)],this['changed']();}),g['addEventListener']('change',()=>{const J=F;c['type']=g[J(0x116)],g[J(0x109)][J(0x104)]=c[J(0xe7)]==='enum'?'none':'',h[J(0x109)][J(0x104)]=c[J(0xe7)]===J(0x12b)?'':'none',this[J(0x102)]();}),e[F(0x126)](g),e[F(0x126)](h);const i=document[F(0xec)](F(0x11f));i['type']='text',i['title']=F(0x105),i[F(0x116)]=c['def']??'',i['addEventListener'](F(0x11f),()=>{const K=F;c[K(0x124)]=i[K(0x116)],this[K(0x102)]();}),e['appendChild'](i);const j=document[F(0xec)](F(0x11f));j[F(0xe7)]=F(0x128),j['style']['margin']='0',j['title']=F(0xe8),j[F(0xfe)]=!!c[F(0xe8)],j[F(0x111)](F(0xfb),()=>{const L=F;c[L(0xe8)]=j[L(0xfe)],this['changed']();}),e['appendChild'](j);const k=document[F(0xec)](F(0xea));k['textContent']=F(0x125),k[F(0x111)]('click',()=>this['removeProp'](d)),e['appendChild'](k);const l=document['createElement'](F(0xea));l[F(0x10d)]='↑',l[F(0x111)](F(0x12c),()=>this['up'](d)),e['appendChild'](l);const m=document[F(0xec)]('button');return m[F(0x10d)]='↓',m['addEventListener'](F(0x12c),()=>this['down'](d)),e[F(0x126)](m),e;}['changed'](){const M=u;if(this['propertiesObj'])for(let d in this[M(0x11d)]){delete this['propertiesObj'][d];}for(let e of this[M(0x121)]){if(e[M(0xf8)]){for(let g of notAllowedChars)e['name']=e[M(0xf8)][M(0x129)](g,'');e[M(0xf8)]=e[M(0xf8)][0x0][M(0x118)]()+e[M(0xf8)]['substring'](0x1);let f={'type':e['type']};if(e[M(0x124)]){if(e[M(0xe7)]=='number')f[M(0x105)]=parseFloat(e['def']);else{if(e[M(0xe7)]==M(0xe9))f['default']=e[M(0x124)]=='true';else f['default']=e[M(0x124)];}}if(e[M(0xe8)])f['internal']=!![];e[M(0xe7)]=='enum'&&(f['values']=JSON['parse'](e['values'])),this[M(0x11d)][e['name']]=f;}}}['getProperties'](){const N=u;return this['changed'](),this['propertiesObj']?{...this[N(0x11d)]}:{};}}customElements[u(0xef)]('iobroker-webui-control-properties-editor',IobrokerWebuiControlPropertiesEditor);
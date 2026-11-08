const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=parseInt(t(0xc0))/0x1*(parseInt(t(0x97))/0x2)+-parseInt(t(0xb5))/0x3+parseInt(t(0x8b))/0x4*(-parseInt(t(0xb2))/0x5)+-parseInt(t(0xae))/0x6+parseInt(t(0x95))/0x7*(-parseInt(t(0x82))/0x8)+-parseInt(t(0xaf))/0x9*(parseInt(t(0x96))/0xa)+parseInt(t(0x85))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x21ec5));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';const notAllowedChars='!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^';export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static [u(0xbc)]=css`
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
        </div>`;constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const v=u;this['_bindingsParse'](),this[v(0xa1)](),this[v(0xab)]=this[v(0xbe)](v(0xc1));}['properties'];[u(0xb8)];['defaultInternal'];['_collapsedGroups']=new Set();[u(0xab)];['setProperties'](c){const w=u;this[w(0xb8)]=c;if(c){this['properties']=[];for(let d in c){let e=c[d];this[w(0x9b)][w(0xc3)]({'name':d,'type':e['type'],'values':JSON['stringify'](e[w(0xa3)]),'def':e['default'],'internal':e['internal']});}}else this['properties']=null;this[w(0xaa)](),this[w(0xba)]();}[u(0xa2)](){const x=u;this[x(0xaa)](),this['_renderList']();}[u(0xb6)](){const y=u;let c={'name':'','type':y(0x99)};if(this['defaultInternal'])c['internal']=!![];this[y(0x9b)][y(0xc3)](c),this[y(0xaa)](),this[y(0xba)]();}[u(0xa4)](){const z=u;let c={'name':'','type':'enum','values':'[\x22a\x22,\x20\x22b\x22]'};if(this[z(0x9e)])c['internal']=!![];this[z(0x9b)]['push'](c),this['_bindingsRefresh'](),this[z(0xba)]();}['removeProp'](c){const A=u;this['properties']['splice'](c,0x1),this['_renderList'](),this[A(0xad)]();}['up'](c){const B=u;if(c>0x0){const d=this[B(0x9b)][c];this[B(0x9b)][B(0x88)](c,0x1),this[B(0x9b)][B(0x88)](--c,0x0,d),this[B(0xba)](),this[B(0xad)]();}}['down'](c){const C=u;if(c<this[C(0x9b)][C(0x94)]-0x1){const d=this[C(0x9b)][c];this[C(0x9b)][C(0x88)](c,0x1),this['properties'][C(0x88)](++c,0x0,d),this[C(0xba)](),this[C(0xad)]();}}[u(0xba)](){const D=u;if(!this['_propList'])return;this[D(0xab)]['innerHTML']='';if(!this[D(0x9b)])return;const c=new Map(),d=[];for(let e=0x0;e<this[D(0x9b)][D(0x94)];e++){const f=this[D(0x9b)][e],g=f[D(0x9f)]?f[D(0x9f)]['indexOf']('_'):-0x1;if(g>0x0){const h=f[D(0x9f)]['substring'](0x0,g);if(!c[D(0x81)](h))c[D(0x86)](h,[]);c[D(0xa8)](h)[D(0xc3)]({'item':f,'index':e});}else d['push']({'item':f,'index':e});}for(const {item:j,index:k}of d){this['_propList']['appendChild'](this['_createPropRow'](j,k));}for(const [l,m]of c){const n=this['_collapsedGroups'][D(0x81)](l),o=document['createElement']('div'),p=document[D(0xb9)](D(0x92));p['className']=D(0x8a),p['textContent']=(n?'▸\x20':'▾\x20')+l,p['title']=l,p[D(0xbf)]=()=>{const E=D;if(this[E(0xa5)]['has'](l))this[E(0xa5)][E(0x83)](l);else this[E(0xa5)][E(0x84)](l);this['_renderList']();},o['appendChild'](p);if(!n){const q=document[D(0xb9)]('div');q['className']='group-rows';for(const {item:r,index:s}of m){q[D(0x9d)](this['_createPropRow'](r,s));}o[D(0x9d)](q);}this[D(0xab)][D(0x9d)](o);}}['_createPropRow'](c,d){const F=u,e=document['createElement'](F(0x92));e[F(0xc4)]='prop-row';const f=document['createElement'](F(0xb3));f['value']=c[F(0x9f)]??'',f[F(0x8d)](F(0xb3),()=>{const G=F;c[G(0x9f)]=f[G(0xb4)],this['changed']();}),f['addEventListener'](F(0xbb),()=>{const H=F;this[H(0xba)]();}),e['appendChild'](f);const g=document['createElement']('select');g[F(0xbc)][F(0x8e)]=c[F(0xa6)]==='enum'?'none':'';for(const n of['string','boolean',F(0x98),F(0xac),F(0x90),'signal',F(0xb7),'object']){const o=document['createElement'](F(0xa7));o[F(0xb4)]=n,o['textContent']=n;if(c['type']===n)o['selected']=!![];g[F(0x9d)](o);}const h=document['createElement']('input');h['style'][F(0x8e)]=c[F(0xa6)]===F(0xbd)?'':'none',h[F(0xb4)]=c['values']??'',h[F(0x8d)]('input',()=>{const I=F;c[I(0xa3)]=h[I(0xb4)],this['changed']();}),g['addEventListener']('change',()=>{const J=F;c[J(0xa6)]=g['value'],g[J(0xbc)][J(0x8e)]=c[J(0xa6)]===J(0xbd)?J(0x87):'',h[J(0xbc)]['display']=c['type']==='enum'?'':J(0x87),this['changed']();}),e[F(0x9d)](g),e['appendChild'](h);const i=document['createElement'](F(0xb3));i[F(0xa6)]=F(0xc2),i[F(0x8f)]='default',i['value']=c[F(0x89)]??'',i[F(0x8d)]('input',()=>{const K=F;c['def']=i['value'],this[K(0xad)]();}),e['appendChild'](i);const j=document[F(0xb9)]('input');j['type']='checkbox',j['style'][F(0xb0)]='0',j[F(0x8f)]='internal',j['checked']=!!c['internal'],j['addEventListener']('change',()=>{const L=F;c[L(0xa0)]=j[L(0xb1)],this['changed']();}),e['appendChild'](j);const k=document['createElement']('button');k[F(0x8c)]=F(0xa9),k[F(0x8d)]('click',()=>this['removeProp'](d)),e['appendChild'](k);const l=document['createElement']('button');l['textContent']='↑',l['addEventListener'](F(0x80),()=>this['up'](d)),e['appendChild'](l);const m=document[F(0xb9)](F(0x9c));return m['textContent']='↓',m[F(0x8d)]('click',()=>this['down'](d)),e[F(0x9d)](m),e;}[u(0xad)](){const M=u;if(this[M(0xb8)])for(let d in this[M(0xb8)]){delete this[M(0xb8)][d];}for(let e of this[M(0x9b)]){if(e[M(0x9f)]){for(let g of notAllowedChars)e['name']=e['name'][M(0x93)](g,'');e['name']=e['name'][0x0]['toLowerCase']()+e['name'][M(0x9a)](0x1);let f={'type':e[M(0xa6)]};if(e[M(0x89)]){if(e['type']==M(0x98))f[M(0xc5)]=parseFloat(e['def']);else{if(e['type']=='boolean')f[M(0xc5)]=e['def']=='true';else f['default']=e['def'];}}if(e[M(0xa0)])f[M(0xa0)]=!![];e['type']==M(0xbd)&&(f['values']=JSON[M(0x91)](e['values'])),this['propertiesObj'][e[M(0x9f)]]=f;}}}['getProperties'](){const N=u;return this[N(0xad)](),this[N(0xb8)]?{...this[N(0xb8)]}:{};}}function b(c,d){c=c-0x80;const e=a();let f=e[c];return f;}function a(){const O=['has','1576BDHRfJ','delete','add','8546362TKFlFV','set','none','splice','def','group-header','4BXzHsi','textContent','addEventListener','display','title','date','parse','div','replaceAll','length','9121RqiBHJ','203090WtpRMu','2YHdmyF','number','string','substring','properties','button','appendChild','defaultInternal','name','internal','_assignEvents','refresh','values','addEnumProp','_collapsedGroups','type','option','get','del','_bindingsRefresh','_propList','color','changed','582462sXwhKc','99ftMTir','margin','checked','1073285ydNedZ','input','value','236934zYVnMZ','addProp','screen','propertiesObj','createElement','_renderList','blur','style','enum','_getDomElement','onclick','232809MMcTqP','prop-list','text','push','className','default','click'];a=function(){return O;};return a();}customElements['define']('iobroker-webui-control-properties-editor',IobrokerWebuiControlPropertiesEditor);
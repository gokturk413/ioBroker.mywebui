const u=b;function a(){const O=['selected','length','enum','number','_collapsedGroups','_propList','1650366wpFkFd','2837844zSNVvR','name','add','click','parse','def','addEventListener','removeProp','changed','_getDomElement','none','checked','set','define','_assignEvents','template','_createPropRow','get','textContent','className','8019431uTuipn','object','has','createElement','stringify','internal','defaultInternal','down','push','delete','_renderList','132FsepNa','input','setProperties','screen','_bindingsRefresh','3442842KCjCil','div','16126XRZIrb','type','properties','text','40084784zOEWgE','style','!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^','date','blur','values','change','display','value','button','color','string','splice','propertiesObj','7707070oFTXar','default','appendChild'];a=function(){return O;};return a();}function b(c,d){c=c-0x18f;const e=a();let f=e[c];return f;}(function(c,d){const t=b,e=c();while(!![]){try{const f=parseInt(t(0x190))/0x1*(parseInt(t(0x1cb))/0x2)+parseInt(t(0x1d0))/0x3+parseInt(t(0x1ac))/0x4+parseInt(t(0x1a2))/0x5+parseInt(t(0x1ab))/0x6+parseInt(t(0x1c0))/0x7+-parseInt(t(0x194))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd51c5));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';const notAllowedChars=u(0x196);export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static [u(0x195)]=css`
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
    }`;static [u(0x1bb)]=html`
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
        </div>`;constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const v=u;this['_bindingsParse'](),this[v(0x1ba)](),this[v(0x1aa)]=this[v(0x1b5)]('prop-list');}[u(0x192)];[u(0x1a1)];['defaultInternal'];[u(0x1a9)]=new Set();[u(0x1aa)];[u(0x1cd)](c){const w=u;this[w(0x1a1)]=c;if(c){this[w(0x192)]=[];for(let d in c){let e=c[d];this[w(0x192)][w(0x1c8)]({'name':d,'type':e['type'],'values':JSON[w(0x1c4)](e['values']),'def':e[w(0x1a3)],'internal':e[w(0x1c5)]});}}else this['properties']=null;this['_bindingsRefresh'](),this[w(0x1ca)]();}['refresh'](){const x=u;this[x(0x1cf)](),this[x(0x1ca)]();}['addProp'](){const y=u;let c={'name':'','type':'string'};if(this[y(0x1c6)])c['internal']=!![];this[y(0x192)][y(0x1c8)](c),this['_bindingsRefresh'](),this['_renderList']();}['addEnumProp'](){const z=u;let c={'name':'','type':z(0x1a7),'values':'[\x22a\x22,\x20\x22b\x22]'};if(this[z(0x1c6)])c[z(0x1c5)]=!![];this['properties']['push'](c),this[z(0x1cf)](),this['_renderList']();}['removeProp'](c){const A=u;this['properties'][A(0x1a0)](c,0x1),this[A(0x1ca)](),this[A(0x1b4)]();}['up'](c){const B=u;if(c>0x0){const d=this[B(0x192)][c];this[B(0x192)][B(0x1a0)](c,0x1),this[B(0x192)][B(0x1a0)](--c,0x0,d),this[B(0x1ca)](),this['changed']();}}['down'](c){const C=u;if(c<this[C(0x192)][C(0x1a6)]-0x1){const d=this[C(0x192)][c];this['properties']['splice'](c,0x1),this[C(0x192)]['splice'](++c,0x0,d),this[C(0x1ca)](),this[C(0x1b4)]();}}[u(0x1ca)](){const D=u;if(!this['_propList'])return;this['_propList']['innerHTML']='';if(!this['properties'])return;const c=new Map(),d=[];for(let e=0x0;e<this['properties']['length'];e++){const f=this[D(0x192)][e],g=f['name']?f['name']['indexOf']('_'):-0x1;if(g>0x0){const h=f['name']['substring'](0x0,g);if(!c[D(0x1c2)](h))c[D(0x1b8)](h,[]);c[D(0x1bd)](h)['push']({'item':f,'index':e});}else d[D(0x1c8)]({'item':f,'index':e});}for(const {item:j,index:k}of d){this[D(0x1aa)]['appendChild'](this['_createPropRow'](j,k));}for(const [l,m]of c){const n=this[D(0x1a9)][D(0x1c2)](l),o=document['createElement']('div'),p=document[D(0x1c3)]('div');p[D(0x1bf)]='group-header',p['textContent']=(n?'▸\x20':'▾\x20')+l,p['title']=l,p['onclick']=()=>{const E=D;if(this['_collapsedGroups'][E(0x1c2)](l))this[E(0x1a9)][E(0x1c9)](l);else this['_collapsedGroups'][E(0x1ae)](l);this['_renderList']();},o[D(0x1a4)](p);if(!n){const q=document['createElement']('div');q[D(0x1bf)]='group-rows';for(const {item:r,index:s}of m){q['appendChild'](this['_createPropRow'](r,s));}o[D(0x1a4)](q);}this['_propList']['appendChild'](o);}}[u(0x1bc)](c,d){const F=u,e=document['createElement'](F(0x18f));e['className']='prop-row';const f=document['createElement'](F(0x1cc));f['value']=c[F(0x1ad)]??'',f['addEventListener'](F(0x1cc),()=>{const G=F;c['name']=f[G(0x19c)],this[G(0x1b4)]();}),f[F(0x1b2)](F(0x198),()=>{const H=F;this[H(0x1ca)]();}),e['appendChild'](f);const g=document['createElement']('select');g[F(0x195)][F(0x19b)]=c[F(0x191)]==='enum'?'none':'';for(const n of[F(0x19f),'boolean','number',F(0x19e),F(0x197),'signal',F(0x1ce),F(0x1c1)]){const o=document['createElement']('option');o['value']=n,o[F(0x1be)]=n;if(c['type']===n)o[F(0x1a5)]=!![];g['appendChild'](o);}const h=document[F(0x1c3)](F(0x1cc));h[F(0x195)][F(0x19b)]=c['type']===F(0x1a7)?'':'none',h[F(0x19c)]=c[F(0x199)]??'',h[F(0x1b2)]('input',()=>{const I=F;c[I(0x199)]=h[I(0x19c)],this[I(0x1b4)]();}),g[F(0x1b2)](F(0x19a),()=>{const J=F;c['type']=g['value'],g['style']['display']=c['type']==='enum'?J(0x1b6):'',h[J(0x195)]['display']=c[J(0x191)]==='enum'?'':'none',this['changed']();}),e[F(0x1a4)](g),e['appendChild'](h);const i=document[F(0x1c3)](F(0x1cc));i['type']=F(0x193),i['title']=F(0x1a3),i['value']=c[F(0x1b1)]??'',i[F(0x1b2)](F(0x1cc),()=>{const K=F;c[K(0x1b1)]=i[K(0x19c)],this['changed']();}),e[F(0x1a4)](i);const j=document['createElement'](F(0x1cc));j['type']='checkbox',j['style']['margin']='0',j['title']='internal',j[F(0x1b7)]=!!c['internal'],j[F(0x1b2)](F(0x19a),()=>{const L=F;c[L(0x1c5)]=j['checked'],this['changed']();}),e['appendChild'](j);const k=document[F(0x1c3)](F(0x19d));k['textContent']='del',k['addEventListener'](F(0x1af),()=>this[F(0x1b3)](d)),e['appendChild'](k);const l=document[F(0x1c3)]('button');l['textContent']='↑',l[F(0x1b2)]('click',()=>this['up'](d)),e[F(0x1a4)](l);const m=document[F(0x1c3)]('button');return m[F(0x1be)]='↓',m[F(0x1b2)](F(0x1af),()=>this[F(0x1c7)](d)),e['appendChild'](m),e;}['changed'](){const M=u;if(this[M(0x1a1)])for(let d in this[M(0x1a1)]){delete this['propertiesObj'][d];}for(let e of this['properties']){if(e['name']){for(let g of notAllowedChars)e['name']=e['name']['replaceAll'](g,'');e[M(0x1ad)]=e[M(0x1ad)][0x0]['toLowerCase']()+e['name']['substring'](0x1);let f={'type':e[M(0x191)]};if(e['def']){if(e['type']==M(0x1a8))f['default']=parseFloat(e[M(0x1b1)]);else{if(e[M(0x191)]=='boolean')f['default']=e['def']=='true';else f['default']=e['def'];}}if(e[M(0x1c5)])f['internal']=!![];e[M(0x191)]=='enum'&&(f['values']=JSON[M(0x1b0)](e['values'])),this['propertiesObj'][e['name']]=f;}}}['getProperties'](){const N=u;return this[N(0x1b4)](),this['propertiesObj']?{...this[N(0x1a1)]}:{};}}customElements[u(0x1b9)]('iobroker-webui-control-properties-editor',IobrokerWebuiControlPropertiesEditor);
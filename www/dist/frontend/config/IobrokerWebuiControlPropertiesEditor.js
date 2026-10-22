const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=-parseInt(t(0x8a))/0x1*(parseInt(t(0x9a))/0x2)+parseInt(t(0xba))/0x3*(parseInt(t(0xc1))/0x4)+-parseInt(t(0xc2))/0x5*(parseInt(t(0x96))/0x6)+-parseInt(t(0x8c))/0x7+parseInt(t(0x98))/0x8+parseInt(t(0xb5))/0x9+parseInt(t(0xc3))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4f3a8));function a(){const M=['textContent','del','number','display','addEventListener','[\x22a\x22,\x20\x22b\x22]','401496nkgaqo','addProp','4087968HYRDDB','string','10jimfFC','stringify','propertiesObj','indexOf','splice','value','createElement','checked','_propList','innerHTML','enum','addEnumProp','changed','_bindingsRefresh','def','values','true','group-header','title','down','screen','_createPropRow','_collapsedGroups','properties','className','_renderList','date','2437146KLoxKT','input','type','default','defaultInternal','375gdzTkG','has','select','div','delete','name','internal','17116Yoiscb','35XWUXap','5007620QCYkZD','appendChild','getProperties','add','_bindingsParse','button','setProperties','click','change','none','replaceAll','85354QsZmhz','toLowerCase','4184075VGAbyG','length','substring','style'];a=function(){return M;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';const notAllowedChars='!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^';function b(c,d){c=c-0x80;const e=a();let f=e[c];return f;}export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static [u(0x8f)]=css`
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
        </div>`;constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const v=u;this[v(0x83)](),this['_assignEvents'](),this['_propList']=this['_getDomElement']('prop-list');}[u(0xb1)];[u(0x9c)];[u(0xb9)];[u(0xb0)]=new Set();['_propList'];[u(0x85)](c){const w=u;this[w(0x9c)]=c;if(c){this['properties']=[];for(let d in c){let e=c[d];this['properties']['push']({'name':d,'type':e['type'],'values':JSON[w(0x9b)](e['values']),'def':e['default'],'internal':e['internal']});}}else this[w(0xb1)]=null;this['_bindingsRefresh'](),this['_renderList']();}['refresh'](){const x=u;this[x(0xa7)](),this[x(0xb3)]();}[u(0x97)](){const y=u;let c={'name':'','type':'string'};if(this[y(0xb9)])c[y(0xc0)]=!![];this['properties']['push'](c),this[y(0xa7)](),this[y(0xb3)]();}[u(0xa5)](){const z=u;let c={'name':'','type':'enum','values':z(0x95)};if(this[z(0xb9)])c[z(0xc0)]=!![];this['properties']['push'](c),this[z(0xa7)](),this['_renderList']();}['removeProp'](c){const A=u;this['properties']['splice'](c,0x1),this['_renderList'](),this[A(0xa6)]();}['up'](c){const B=u;if(c>0x0){const d=this['properties'][c];this[B(0xb1)]['splice'](c,0x1),this[B(0xb1)][B(0x9e)](--c,0x0,d),this[B(0xb3)](),this[B(0xa6)]();}}[u(0xad)](c){const C=u;if(c<this[C(0xb1)]['length']-0x1){const d=this['properties'][c];this['properties'][C(0x9e)](c,0x1),this['properties'][C(0x9e)](++c,0x0,d),this[C(0xb3)](),this[C(0xa6)]();}}[u(0xb3)](){const D=u;if(!this[D(0xa2)])return;this[D(0xa2)][D(0xa3)]='';if(!this[D(0xb1)])return;const c=new Map(),d=[];for(let e=0x0;e<this[D(0xb1)][D(0x8d)];e++){const f=this['properties'][e],g=f[D(0xbf)]?f[D(0xbf)][D(0x9d)]('_'):-0x1;if(g>0x0){const h=f['name']['substring'](0x0,g);if(!c['has'](h))c['set'](h,[]);c['get'](h)['push']({'item':f,'index':e});}else d['push']({'item':f,'index':e});}for(const {item:j,index:k}of d){this['_propList'][D(0x80)](this['_createPropRow'](j,k));}for(const [l,m]of c){const n=this['_collapsedGroups'][D(0xbb)](l),o=document['createElement'](D(0xbd)),p=document['createElement']('div');p[D(0xb2)]=D(0xab),p['textContent']=(n?'▸\x20':'▾\x20')+l,p['title']=l,p['onclick']=()=>{const E=D;if(this['_collapsedGroups'][E(0xbb)](l))this[E(0xb0)][E(0xbe)](l);else this[E(0xb0)][E(0x82)](l);this[E(0xb3)]();},o[D(0x80)](p);if(!n){const q=document['createElement']('div');q['className']='group-rows';for(const {item:r,index:s}of m){q['appendChild'](this[D(0xaf)](r,s));}o[D(0x80)](q);}this['_propList']['appendChild'](o);}}[u(0xaf)](c,d){const F=u,e=document['createElement']('div');e['className']='prop-row';const f=document['createElement'](F(0xb6));f['value']=c[F(0xbf)]??'',f[F(0x94)]('input',()=>{c['name']=f['value'],this['changed']();}),f['addEventListener']('blur',()=>{this['_renderList']();}),e['appendChild'](f);const g=document['createElement'](F(0xbc));g['style'][F(0x93)]=c[F(0xb7)]===F(0xa4)?'none':'';for(const n of[F(0x99),'boolean',F(0x92),'color',F(0xb4),'signal',F(0xae),'object']){const o=document['createElement']('option');o[F(0x9f)]=n,o['textContent']=n;if(c[F(0xb7)]===n)o['selected']=!![];g[F(0x80)](o);}const h=document[F(0xa0)]('input');h[F(0x8f)][F(0x93)]=c[F(0xb7)]===F(0xa4)?'':F(0x88),h['value']=c['values']??'',h['addEventListener'](F(0xb6),()=>{const G=F;c[G(0xa9)]=h[G(0x9f)],this['changed']();}),g[F(0x94)](F(0x87),()=>{const H=F;c['type']=g['value'],g[H(0x8f)][H(0x93)]=c['type']===H(0xa4)?H(0x88):'',h[H(0x8f)]['display']=c[H(0xb7)]==='enum'?'':'none',this[H(0xa6)]();}),e[F(0x80)](g),e[F(0x80)](h);const i=document['createElement'](F(0xb6));i['type']='text',i['title']='default',i[F(0x9f)]=c[F(0xa8)]??'',i['addEventListener'](F(0xb6),()=>{const I=F;c[I(0xa8)]=i['value'],this['changed']();}),e['appendChild'](i);const j=document[F(0xa0)]('input');j[F(0xb7)]='checkbox',j[F(0x8f)]['margin']='0',j[F(0xac)]='internal',j[F(0xa1)]=!!c['internal'],j[F(0x94)](F(0x87),()=>{const J=F;c[J(0xc0)]=j[J(0xa1)],this['changed']();}),e['appendChild'](j);const k=document['createElement']('button');k[F(0x90)]=F(0x91),k[F(0x94)]('click',()=>this['removeProp'](d)),e[F(0x80)](k);const l=document[F(0xa0)](F(0x84));l['textContent']='↑',l[F(0x94)]('click',()=>this['up'](d)),e[F(0x80)](l);const m=document['createElement']('button');return m['textContent']='↓',m['addEventListener'](F(0x86),()=>this['down'](d)),e['appendChild'](m),e;}[u(0xa6)](){const K=u;if(this[K(0x9c)])for(let d in this[K(0x9c)]){delete this['propertiesObj'][d];}for(let e of this[K(0xb1)]){if(e[K(0xbf)]){for(let g of notAllowedChars)e[K(0xbf)]=e['name'][K(0x89)](g,'');e['name']=e[K(0xbf)][0x0][K(0x8b)]()+e[K(0xbf)][K(0x8e)](0x1);let f={'type':e[K(0xb7)]};if(e['def']){if(e[K(0xb7)]==K(0x92))f['default']=parseFloat(e[K(0xa8)]);else{if(e[K(0xb7)]=='boolean')f[K(0xb8)]=e['def']==K(0xaa);else f['default']=e[K(0xa8)];}}if(e[K(0xc0)])f[K(0xc0)]=!![];e[K(0xb7)]==K(0xa4)&&(f[K(0xa9)]=JSON['parse'](e[K(0xa9)])),this[K(0x9c)][e[K(0xbf)]]=f;}}}[u(0x81)](){const L=u;return this[L(0xa6)](),this[L(0x9c)]?{...this[L(0x9c)]}:{};}}customElements['define']('iobroker-webui-control-properties-editor',IobrokerWebuiControlPropertiesEditor);
const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=-parseInt(t(0x92))/0x1+parseInt(t(0x87))/0x2+parseInt(t(0xb4))/0x3+parseInt(t(0x9f))/0x4*(parseInt(t(0x97))/0x5)+-parseInt(t(0x7d))/0x6*(-parseInt(t(0xa3))/0x7)+parseInt(t(0x82))/0x8*(-parseInt(t(0x7c))/0x9)+-parseInt(t(0x80))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x51e84));function b(c,d){c=c-0x71;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';const notAllowedChars=u(0xb5);export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        </div>`;constructor(){const v=u;super(),this[v(0x89)]();}[u(0xab)](){const w=u;this[w(0x9a)](),this[w(0x93)](),this[w(0x74)]=this[w(0xa9)]('prop-list');}['properties'];[u(0x99)];[u(0xaf)];[u(0x7f)]=new Set();[u(0x74)];[u(0x7e)](c){const x=u;this[x(0x99)]=c;if(c){this[x(0x84)]=[];for(let d in c){let e=c[d];this['properties']['push']({'name':d,'type':e['type'],'values':JSON[x(0x7b)](e['values']),'def':e['default'],'internal':e['internal']});}}else this['properties']=null;this['_bindingsRefresh'](),this['_renderList']();}['refresh'](){this['_bindingsRefresh'](),this['_renderList']();}[u(0xa8)](){const y=u;let c={'name':'','type':'string'};if(this[y(0xaf)])c[y(0xae)]=!![];this[y(0x84)]['push'](c),this['_bindingsRefresh'](),this['_renderList']();}['addEnumProp'](){const z=u;let c={'name':'','type':z(0x8d),'values':z(0x7a)};if(this['defaultInternal'])c[z(0xae)]=!![];this['properties']['push'](c),this['_bindingsRefresh'](),this[z(0x91)]();}[u(0x79)](c){const A=u;this[A(0x84)]['splice'](c,0x1),this[A(0x91)](),this['changed']();}['up'](c){const B=u;if(c>0x0){const d=this['properties'][c];this['properties'][B(0x75)](c,0x1),this[B(0x84)]['splice'](--c,0x0,d),this[B(0x91)](),this[B(0x9c)]();}}[u(0x76)](c){const C=u;if(c<this[C(0x84)]['length']-0x1){const d=this[C(0x84)][c];this[C(0x84)]['splice'](c,0x1),this[C(0x84)][C(0x75)](++c,0x0,d),this[C(0x91)](),this['changed']();}}['_renderList'](){const D=u;if(!this['_propList'])return;this['_propList']['innerHTML']='';if(!this['properties'])return;const c=new Map(),d=[];for(let e=0x0;e<this['properties']['length'];e++){const f=this[D(0x84)][e],g=f[D(0xb0)]?f['name']['indexOf']('_'):-0x1;if(g>0x0){const h=f['name'][D(0x81)](0x0,g);if(!c['has'](h))c[D(0x83)](h,[]);c['get'](h)['push']({'item':f,'index':e});}else d['push']({'item':f,'index':e});}for(const {item:j,index:k}of d){this['_propList'][D(0xa6)](this['_createPropRow'](j,k));}for(const [l,m]of c){const n=this[D(0x7f)][D(0x73)](l),o=document['createElement'](D(0x77)),p=document['createElement']('div');p[D(0x78)]=D(0x9e),p[D(0x72)]=(n?'▸\x20':'▾\x20')+l,p['title']=l,p[D(0x94)]=()=>{const E=D;if(this[E(0x7f)]['has'](l))this[E(0x7f)]['delete'](l);else this['_collapsedGroups'][E(0x90)](l);this[E(0x91)]();},o[D(0xa6)](p);if(!n){const q=document[D(0xaa)]('div');q['className']='group-rows';for(const {item:r,index:s}of m){q['appendChild'](this['_createPropRow'](r,s));}o['appendChild'](q);}this[D(0x74)][D(0xa6)](o);}}[u(0x98)](c,d){const F=u,e=document['createElement'](F(0x77));e['className']='prop-row';const f=document['createElement'](F(0x88));f[F(0xb3)]=c[F(0xb0)]??'',f['addEventListener'](F(0x88),()=>{const G=F;c[G(0xb0)]=f['value'],this['changed']();}),f['addEventListener']('blur',()=>{const H=F;this[H(0x91)]();}),e[F(0xa6)](f);const g=document['createElement']('select');g[F(0x71)][F(0xa1)]=c['type']===F(0x8d)?'none':'';for(const n of['string','boolean','number','color','date','signal','screen',F(0xac)]){const o=document[F(0xaa)](F(0xad));o['value']=n,o[F(0x72)]=n;if(c[F(0x8a)]===n)o[F(0x85)]=!![];g['appendChild'](o);}const h=document[F(0xaa)](F(0x88));h['style']['display']=c['type']==='enum'?'':'none',h['value']=c[F(0xa5)]??'',h['addEventListener']('input',()=>{const I=F;c[I(0xa5)]=h[I(0xb3)],this[I(0x9c)]();}),g[F(0x8b)]('change',()=>{const J=F;c['type']=g['value'],g['style'][J(0xa1)]=c['type']==='enum'?J(0x9b):'',h[J(0x71)]['display']=c['type']==='enum'?'':J(0x9b),this['changed']();}),e[F(0xa6)](g),e['appendChild'](h);const i=document[F(0xaa)](F(0x88));i['type']='text',i['title']=F(0xa0),i['value']=c['def']??'',i[F(0x8b)]('input',()=>{const K=F;c['def']=i[K(0xb3)],this[K(0x9c)]();}),e['appendChild'](i);const j=document[F(0xaa)](F(0x88));j[F(0x8a)]=F(0x8c),j['style'][F(0x95)]='0',j['title']=F(0xae),j[F(0x8f)]=!!c['internal'],j[F(0x8b)]('change',()=>{c['internal']=j['checked'],this['changed']();}),e[F(0xa6)](j);const k=document[F(0xaa)]('button');k['textContent']=F(0x9d),k[F(0x8b)](F(0x8e),()=>this['removeProp'](d)),e[F(0xa6)](k);const l=document[F(0xaa)](F(0xb2));l[F(0x72)]='↑',l[F(0x8b)]('click',()=>this['up'](d)),e['appendChild'](l);const m=document[F(0xaa)]('button');return m[F(0x72)]='↓',m['addEventListener']('click',()=>this[F(0x76)](d)),e[F(0xa6)](m),e;}[u(0x9c)](){const L=u;if(this['propertiesObj'])for(let d in this[L(0x99)]){delete this['propertiesObj'][d];}for(let e of this[L(0x84)]){if(e['name']){for(let g of notAllowedChars)e[L(0xb0)]=e[L(0xb0)]['replaceAll'](g,'');e['name']=e[L(0xb0)][0x0]['toLowerCase']()+e['name']['substring'](0x1);let f={'type':e['type']};if(e[L(0xb1)]){if(e['type']==L(0xa7))f[L(0xa0)]=parseFloat(e[L(0xb1)]);else{if(e['type']=='boolean')f[L(0xa0)]=e[L(0xb1)]==L(0x86);else f['default']=e[L(0xb1)];}}if(e[L(0xae)])f['internal']=!![];e[L(0x8a)]==L(0x8d)&&(f[L(0xa5)]=JSON['parse'](e[L(0xa5)])),this[L(0x99)][e['name']]=f;}}}[u(0xa4)](){const M=u;return this['changed'](),this['propertiesObj']?{...this[M(0x99)]}:{};}}function a(){const N=['addEventListener','checkbox','enum','click','checked','add','_renderList','272049qsiOlO','_assignEvents','onclick','margin','define','1345YQlrMC','_createPropRow','propertiesObj','_bindingsParse','none','changed','del','group-header','5356uDCrCy','default','display','iobroker-webui-control-properties-editor','1439963Paosnz','getProperties','values','appendChild','number','addProp','_getDomElement','createElement','ready','object','option','internal','defaultInternal','name','def','button','value','1618404srTDSS','!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^','style','textContent','has','_propList','splice','down','div','className','removeProp','[\x22a\x22,\x20\x22b\x22]','stringify','358785TahnGd','18MUeMVo','setProperties','_collapsedGroups','9704150ABDBZW','substring','104GcTgoi','set','properties','selected','true','1158830BTqFQH','input','_restoreCachedInititalValues','type'];a=function(){return N;};return a();}customElements[u(0x96)](u(0xa2),IobrokerWebuiControlPropertiesEditor);
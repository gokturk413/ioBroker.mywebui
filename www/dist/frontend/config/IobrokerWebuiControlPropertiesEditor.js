function a(){const N=['select','refresh','1590519tvzijp','textContent','_bindingsParse','className','set','_restoreCachedInititalValues','_propList','157893lufnXG','prop-row','def','display','addProp','iobroker-webui-control-properties-editor','input','defaultInternal','change','click','onclick','string','option','2876628emMTVU','push','propertiesObj','_createPropRow','25457607ESQBNe','button','splice','div','checkbox','has','3681640OOktxu','template','575547aNTDfO','removeProp','_renderList','boolean','value','_bindingsRefresh','addEventListener','none','object','name','4FMHpwe','2287488iWhRpk','internal','stringify','group-header','parse','margin','selected','down','ready','6whXWfg','add','signal','delete','_collapsedGroups','properties','appendChild','replaceAll','del','type','substring','default','enum','style','blur','length','values','createElement','changed','indexOf'];a=function(){return N;};return a();}const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=-parseInt(t(0x148))/0x1*(parseInt(t(0x12b))/0x2)+-parseInt(t(0x161))/0x3*(parseInt(t(0x121))/0x4)+-parseInt(t(0x15f))/0x5+-parseInt(t(0x155))/0x6+-parseInt(t(0x141))/0x7+-parseInt(t(0x122))/0x8+parseInt(t(0x159))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6a000));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';const notAllowedChars='!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^';export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static [u(0x138)]=css`
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
    }`;static [u(0x160)]=html`
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
        </div>`;constructor(){const v=u;super(),this[v(0x146)]();}[u(0x12a)](){const w=u;this[w(0x143)](),this['_assignEvents'](),this['_propList']=this['_getDomElement']('prop-list');}['properties'];[u(0x157)];[u(0x14f)];[u(0x12f)]=new Set();['_propList'];['setProperties'](c){const x=u;this[x(0x157)]=c;if(c){this['properties']=[];for(let d in c){let e=c[d];this['properties']['push']({'name':d,'type':e[x(0x134)],'values':JSON[x(0x124)](e[x(0x13b)]),'def':e[x(0x136)],'internal':e[x(0x123)]});}}else this[x(0x130)]=null;this[x(0x166)](),this['_renderList']();}[u(0x140)](){this['_bindingsRefresh'](),this['_renderList']();}[u(0x14c)](){const y=u;let c={'name':'','type':y(0x153)};if(this['defaultInternal'])c[y(0x123)]=!![];this[y(0x130)][y(0x156)](c),this[y(0x166)](),this[y(0x163)]();}['addEnumProp'](){const z=u;let c={'name':'','type':'enum','values':'[\x22a\x22,\x20\x22b\x22]'};if(this[z(0x14f)])c['internal']=!![];this[z(0x130)][z(0x156)](c),this['_bindingsRefresh'](),this['_renderList']();}[u(0x162)](c){const A=u;this['properties']['splice'](c,0x1),this[A(0x163)](),this['changed']();}['up'](c){const B=u;if(c>0x0){const d=this[B(0x130)][c];this[B(0x130)][B(0x15b)](c,0x1),this[B(0x130)]['splice'](--c,0x0,d),this[B(0x163)](),this['changed']();}}[u(0x129)](c){const C=u;if(c<this['properties'][C(0x13a)]-0x1){const d=this[C(0x130)][c];this['properties']['splice'](c,0x1),this['properties'][C(0x15b)](++c,0x0,d),this['_renderList'](),this['changed']();}}['_renderList'](){const D=u;if(!this[D(0x147)])return;this['_propList']['innerHTML']='';if(!this['properties'])return;const c=new Map(),d=[];for(let e=0x0;e<this[D(0x130)]['length'];e++){const f=this[D(0x130)][e],g=f[D(0x120)]?f['name'][D(0x13e)]('_'):-0x1;if(g>0x0){const h=f['name'][D(0x135)](0x0,g);if(!c['has'](h))c[D(0x145)](h,[]);c['get'](h)[D(0x156)]({'item':f,'index':e});}else d[D(0x156)]({'item':f,'index':e});}for(const {item:j,index:k}of d){this[D(0x147)]['appendChild'](this['_createPropRow'](j,k));}for(const [l,m]of c){const n=this[D(0x12f)][D(0x15e)](l),o=document['createElement']('div'),p=document[D(0x13c)](D(0x15c));p[D(0x144)]=D(0x125),p[D(0x142)]=(n?'▸\x20':'▾\x20')+l,p['title']=l,p[D(0x152)]=()=>{const E=D;if(this[E(0x12f)][E(0x15e)](l))this['_collapsedGroups'][E(0x12e)](l);else this[E(0x12f)][E(0x12c)](l);this['_renderList']();},o['appendChild'](p);if(!n){const q=document[D(0x13c)]('div');q['className']='group-rows';for(const {item:r,index:s}of m){q[D(0x131)](this[D(0x158)](r,s));}o[D(0x131)](q);}this['_propList']['appendChild'](o);}}['_createPropRow'](c,d){const F=u,e=document[F(0x13c)]('div');e['className']=F(0x149);const f=document[F(0x13c)]('input');f[F(0x165)]=c[F(0x120)]??'',f['addEventListener']('input',()=>{c['name']=f['value'],this['changed']();}),f[F(0x167)](F(0x139),()=>{const G=F;this[G(0x163)]();}),e['appendChild'](f);const g=document['createElement'](F(0x13f));g['style']['display']=c[F(0x134)]==='enum'?F(0x168):'';for(const n of['string',F(0x164),'number','color','date',F(0x12d),'screen',F(0x11f)]){const o=document['createElement'](F(0x154));o[F(0x165)]=n,o['textContent']=n;if(c[F(0x134)]===n)o[F(0x128)]=!![];g['appendChild'](o);}const h=document['createElement']('input');h[F(0x138)]['display']=c[F(0x134)]===F(0x137)?'':F(0x168),h['value']=c[F(0x13b)]??'',h[F(0x167)]('input',()=>{const H=F;c[H(0x13b)]=h[H(0x165)],this[H(0x13d)]();}),g['addEventListener']('change',()=>{const I=F;c['type']=g[I(0x165)],g[I(0x138)]['display']=c[I(0x134)]===I(0x137)?'none':'',h[I(0x138)][I(0x14b)]=c['type']===I(0x137)?'':I(0x168),this[I(0x13d)]();}),e[F(0x131)](g),e['appendChild'](h);const i=document['createElement'](F(0x14e));i['type']='text',i['title']=F(0x136),i[F(0x165)]=c[F(0x14a)]??'',i['addEventListener'](F(0x14e),()=>{const J=F;c['def']=i[J(0x165)],this[J(0x13d)]();}),e[F(0x131)](i);const j=document['createElement']('input');j[F(0x134)]=F(0x15d),j['style'][F(0x127)]='0',j['title']='internal',j['checked']=!!c['internal'],j['addEventListener'](F(0x150),()=>{const K=F;c['internal']=j['checked'],this[K(0x13d)]();}),e['appendChild'](j);const k=document['createElement']('button');k['textContent']=F(0x133),k['addEventListener'](F(0x151),()=>this['removeProp'](d)),e[F(0x131)](k);const l=document['createElement'](F(0x15a));l['textContent']='↑',l[F(0x167)](F(0x151),()=>this['up'](d)),e[F(0x131)](l);const m=document[F(0x13c)](F(0x15a));return m['textContent']='↓',m[F(0x167)]('click',()=>this[F(0x129)](d)),e['appendChild'](m),e;}[u(0x13d)](){const L=u;if(this['propertiesObj'])for(let d in this['propertiesObj']){delete this['propertiesObj'][d];}for(let e of this[L(0x130)]){if(e[L(0x120)]){for(let g of notAllowedChars)e['name']=e['name'][L(0x132)](g,'');e['name']=e[L(0x120)][0x0]['toLowerCase']()+e[L(0x120)]['substring'](0x1);let f={'type':e['type']};if(e['def']){if(e[L(0x134)]=='number')f['default']=parseFloat(e[L(0x14a)]);else{if(e[L(0x134)]=='boolean')f[L(0x136)]=e['def']=='true';else f[L(0x136)]=e[L(0x14a)];}}if(e['internal'])f['internal']=!![];e['type']==L(0x137)&&(f['values']=JSON[L(0x126)](e['values'])),this['propertiesObj'][e[L(0x120)]]=f;}}}['getProperties'](){const M=u;return this[M(0x13d)](),this[M(0x157)]?{...this['propertiesObj']}:{};}}function b(c,d){c=c-0x11f;const e=a();let f=e[c];return f;}customElements['define'](u(0x14d),IobrokerWebuiControlPropertiesEditor);
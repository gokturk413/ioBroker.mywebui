const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=-parseInt(t(0xde))/0x1*(-parseInt(t(0xe0))/0x2)+parseInt(t(0xc8))/0x3+-parseInt(t(0xd1))/0x4*(-parseInt(t(0xdd))/0x5)+-parseInt(t(0xe4))/0x6+parseInt(t(0xef))/0x7+parseInt(t(0xd5))/0x8+-parseInt(t(0xc5))/0x9*(parseInt(t(0xd3))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9decc));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';function b(c,d){c=c-0xba;const e=a();let f=e[c];return f;}const notAllowedChars=u(0xda);export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static [u(0xc2)]=css`
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
    }`;static [u(0xf8)]=html`
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
        </div>`;constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const v=u;this[v(0xbc)](),this['_assignEvents'](),this[v(0xd2)]=this['_getDomElement']('prop-list');}['properties'];['propertiesObj'];['defaultInternal'];[u(0xd7)]=new Set();[u(0xd2)];[u(0xd9)](c){const w=u;this['propertiesObj']=c;if(c){this['properties']=[];for(let d in c){let e=c[d];this[w(0xf4)]['push']({'name':d,'type':e['type'],'values':JSON[w(0xe2)](e[w(0xc1)]),'def':e['default'],'internal':e['internal']});}}else this[w(0xf4)]=null;this['_bindingsRefresh'](),this[w(0xf7)]();}[u(0xf5)](){this['_bindingsRefresh'](),this['_renderList']();}['addProp'](){const x=u;let c={'name':'','type':'string'};if(this['defaultInternal'])c[x(0xcc)]=!![];this[x(0xf4)]['push'](c),this['_bindingsRefresh'](),this[x(0xf7)]();}['addEnumProp'](){const y=u;let c={'name':'','type':'enum','values':'[\x22a\x22,\x20\x22b\x22]'};if(this[y(0xfd)])c['internal']=!![];this['properties']['push'](c),this[y(0xc0)](),this['_renderList']();}['removeProp'](c){const z=u;this['properties'][z(0xcb)](c,0x1),this['_renderList'](),this['changed']();}['up'](c){const A=u;if(c>0x0){const d=this['properties'][c];this['properties'][A(0xcb)](c,0x1),this[A(0xf4)][A(0xcb)](--c,0x0,d),this[A(0xf7)](),this[A(0xf3)]();}}[u(0xe3)](c){const B=u;if(c<this['properties']['length']-0x1){const d=this['properties'][c];this[B(0xf4)]['splice'](c,0x1),this[B(0xf4)]['splice'](++c,0x0,d),this['_renderList'](),this[B(0xf3)]();}}[u(0xf7)](){const C=u;if(!this['_propList'])return;this[C(0xd2)][C(0xf1)]='';if(!this['properties'])return;const c=new Map(),d=[];for(let e=0x0;e<this['properties']['length'];e++){const f=this[C(0xf4)][e],g=f['name']?f[C(0xeb)][C(0xcf)]('_'):-0x1;if(g>0x0){const h=f['name'][C(0xdb)](0x0,g);if(!c[C(0xc4)](h))c[C(0xfe)](h,[]);c[C(0xe1)](h)[C(0xca)]({'item':f,'index':e});}else d['push']({'item':f,'index':e});}for(const {item:j,index:k}of d){this[C(0xd2)]['appendChild'](this[C(0xdf)](j,k));}for(const [l,m]of c){const n=this[C(0xd7)][C(0xc4)](l),o=document[C(0xf2)]('div'),p=document['createElement']('div');p[C(0xed)]=C(0xec),p['textContent']=(n?'▸\x20':'▾\x20')+l,p['title']=l,p['onclick']=()=>{const D=C;if(this[D(0xd7)]['has'](l))this[D(0xd7)][D(0xe6)](l);else this[D(0xd7)]['add'](l);this['_renderList']();},o[C(0xf0)](p);if(!n){const q=document[C(0xf2)]('div');q['className']='group-rows';for(const {item:r,index:s}of m){q[C(0xf0)](this['_createPropRow'](r,s));}o[C(0xf0)](q);}this['_propList']['appendChild'](o);}}['_createPropRow'](c,d){const E=u,e=document[E(0xf2)]('div');e[E(0xed)]=E(0xbf);const f=document[E(0xf2)](E(0xbe));f[E(0xe7)]=c[E(0xeb)]??'',f['addEventListener']('input',()=>{const F=E;c['name']=f[F(0xe7)],this['changed']();}),f['addEventListener'](E(0xd0),()=>{const G=E;this[G(0xf7)]();}),e['appendChild'](f);const g=document[E(0xf2)](E(0xce));g['style'][E(0xfa)]=c['type']===E(0xd8)?E(0xfb):'';for(const n of['string','boolean',E(0xfc),'color',E(0xd4),'signal','screen',E(0xd6)]){const o=document[E(0xf2)](E(0xbb));o['value']=n,o[E(0xea)]=n;if(c[E(0xe9)]===n)o['selected']=!![];g['appendChild'](o);}const h=document['createElement'](E(0xbe));h['style']['display']=c['type']===E(0xd8)?'':'none',h['value']=c[E(0xc1)]??'',h['addEventListener'](E(0xbe),()=>{const H=E;c['values']=h['value'],this[H(0xf3)]();}),g[E(0xe5)](E(0xe8),()=>{const I=E;c[I(0xe9)]=g[I(0xe7)],g['style']['display']=c[I(0xe9)]==='enum'?I(0xfb):'',h[I(0xc2)][I(0xfa)]=c['type']===I(0xd8)?'':'none',this[I(0xf3)]();}),e['appendChild'](g),e['appendChild'](h);const i=document[E(0xf2)](E(0xbe));i[E(0xe9)]='text',i['title']='default',i['value']=c['def']??'',i[E(0xe5)](E(0xbe),()=>{const J=E;c['def']=i[J(0xe7)],this[J(0xf3)]();}),e[E(0xf0)](i);const j=document[E(0xf2)](E(0xbe));j['type']='checkbox',j['style']['margin']='0',j[E(0xf6)]='internal',j['checked']=!!c[E(0xcc)],j['addEventListener'](E(0xe8),()=>{const K=E;c['internal']=j['checked'],this[K(0xf3)]();}),e[E(0xf0)](j);const k=document['createElement']('button');k[E(0xea)]=E(0xc7),k['addEventListener'](E(0xee),()=>this[E(0xba)](d)),e['appendChild'](k);const l=document['createElement']('button');l['textContent']='↑',l['addEventListener'](E(0xee),()=>this['up'](d)),e[E(0xf0)](l);const m=document['createElement'](E(0xbd));return m['textContent']='↓',m['addEventListener'](E(0xee),()=>this[E(0xe3)](d)),e['appendChild'](m),e;}['changed'](){const L=u;if(this[L(0xc9)])for(let d in this[L(0xc9)]){delete this[L(0xc9)][d];}for(let e of this['properties']){if(e['name']){for(let g of notAllowedChars)e[L(0xeb)]=e['name'][L(0xcd)](g,'');e[L(0xeb)]=e['name'][0x0][L(0xff)]()+e['name'][L(0xdb)](0x1);let f={'type':e['type']};if(e['def']){if(e[L(0xe9)]==L(0xfc))f[L(0xdc)]=parseFloat(e[L(0xf9)]);else{if(e[L(0xe9)]=='boolean')f['default']=e['def']==L(0xc6);else f[L(0xdc)]=e[L(0xf9)];}}if(e[L(0xcc)])f[L(0xcc)]=!![];e[L(0xe9)]==L(0xd8)&&(f['values']=JSON['parse'](e[L(0xc1)])),this[L(0xc9)][e[L(0xeb)]]=f;}}}[u(0xc3)](){const M=u;return this[M(0xf3)](),this[M(0xc9)]?{...this[M(0xc9)]}:{};}}customElements['define']('iobroker-webui-control-properties-editor',IobrokerWebuiControlPropertiesEditor);function a(){const N=['!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^','substring','default','37255JPdTwh','62896gbOIkN','_createPropRow','2DlavpT','get','stringify','down','7442418VnEgEr','addEventListener','delete','value','change','type','textContent','name','group-header','className','click','7739396wIIIPE','appendChild','innerHTML','createElement','changed','properties','refresh','title','_renderList','template','def','display','none','number','defaultInternal','set','toLowerCase','removeProp','option','_bindingsParse','button','input','prop-row','_bindingsRefresh','values','style','getProperties','has','279XSRunZ','true','del','2205030WGeQXc','propertiesObj','push','splice','internal','replaceAll','select','indexOf','blur','332AXdaQl','_propList','614320MkbPbi','date','10157504pwfWnL','object','_collapsedGroups','enum','setProperties'];a=function(){return N;};return a();}
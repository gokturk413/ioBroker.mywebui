const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=-parseInt(t(0xb7))/0x1+parseInt(t(0x9f))/0x2+parseInt(t(0xaf))/0x3+-parseInt(t(0xa9))/0x4*(parseInt(t(0xb5))/0x5)+parseInt(t(0x87))/0x6+-parseInt(t(0x98))/0x7*(-parseInt(t(0x86))/0x8)+parseInt(t(0xa8))/0x9*(-parseInt(t(0x93))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x7bd9e));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';function b(c,d){c=c-0x7d;const e=a();let f=e[c];return f;}function a(){const K=['_assignEvents','default','113336zhKBYX','979836TIfJKN','div','checked','[\x22a\x22,\x20\x22b\x22]','indexOf','style','set','createElement','none','blur','boolean','splice','12786810fqAgQf','_createPropRow','number','def','changed','371NXzOrE','properties','title','_collapsedGroups','_propList','name','appendChild','1198540RbLoyk','has','push','input','_bindingsRefresh','object','propertiesObj','textContent','parse','9JvInry','212MZRIZQ','color','text','down','removeProp','prop-row','1983180wfUjfJ','getProperties','button','addEventListener','date','group-rows','35215CsgMon','signal','15233UekXrt','true','selected','iobroker-webui-control-properties-editor','enum','className','ready','group-header','_renderList','values','delete','value','internal','type','substring','add','margin','display'];a=function(){return K;};return a();}const notAllowedChars='!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^';export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static [u(0x8c)]=css`
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
        </div>`;constructor(){super(),this['_restoreCachedInititalValues']();}[u(0xbd)](){const v=u;this['_bindingsParse'](),this[v(0x84)](),this[v(0x9c)]=this['_getDomElement']('prop-list');}['properties'];[u(0xa5)];['defaultInternal'];[u(0x9b)]=new Set();[u(0x9c)];['setProperties'](c){const w=u;this[w(0xa5)]=c;if(c){this[w(0x99)]=[];for(let d in c){let e=c[d];this[w(0x99)][w(0xa1)]({'name':d,'type':e['type'],'values':JSON['stringify'](e[w(0xc0)]),'def':e[w(0x85)],'internal':e['internal']});}}else this[w(0x99)]=null;this[w(0xa3)](),this[w(0xbf)]();}['refresh'](){this['_bindingsRefresh'](),this['_renderList']();}['addProp'](){const x=u;let c={'name':'','type':'string'};if(this['defaultInternal'])c[x(0x7e)]=!![];this[x(0x99)][x(0xa1)](c),this['_bindingsRefresh'](),this[x(0xbf)]();}['addEnumProp'](){const y=u;let c={'name':'','type':y(0xbb),'values':y(0x8a)};if(this['defaultInternal'])c[y(0x7e)]=!![];this['properties']['push'](c),this['_bindingsRefresh'](),this['_renderList']();}['removeProp'](c){const z=u;this[z(0x99)]['splice'](c,0x1),this['_renderList'](),this['changed']();}['up'](c){const A=u;if(c>0x0){const d=this['properties'][c];this[A(0x99)]['splice'](c,0x1),this['properties']['splice'](--c,0x0,d),this['_renderList'](),this['changed']();}}['down'](c){const B=u;if(c<this[B(0x99)]['length']-0x1){const d=this['properties'][c];this[B(0x99)][B(0x92)](c,0x1),this[B(0x99)][B(0x92)](++c,0x0,d),this['_renderList'](),this[B(0x97)]();}}[u(0xbf)](){const C=u;if(!this[C(0x9c)])return;this[C(0x9c)]['innerHTML']='';if(!this['properties'])return;const c=new Map(),d=[];for(let e=0x0;e<this['properties']['length'];e++){const f=this['properties'][e],g=f['name']?f[C(0x9d)][C(0x8b)]('_'):-0x1;if(g>0x0){const h=f[C(0x9d)][C(0x80)](0x0,g);if(!c[C(0xa0)](h))c[C(0x8d)](h,[]);c['get'](h)[C(0xa1)]({'item':f,'index':e});}else d['push']({'item':f,'index':e});}for(const {item:j,index:k}of d){this[C(0x9c)][C(0x9e)](this['_createPropRow'](j,k));}for(const [l,m]of c){const n=this['_collapsedGroups']['has'](l),o=document['createElement']('div'),p=document['createElement']('div');p['className']=C(0xbe),p['textContent']=(n?'▸\x20':'▾\x20')+l,p['title']=l,p['onclick']=()=>{const D=C;if(this[D(0x9b)][D(0xa0)](l))this[D(0x9b)][D(0xc1)](l);else this['_collapsedGroups'][D(0x81)](l);this['_renderList']();},o[C(0x9e)](p);if(!n){const q=document[C(0x8e)](C(0x88));q['className']=C(0xb4);for(const {item:r,index:s}of m){q['appendChild'](this[C(0x94)](r,s));}o[C(0x9e)](q);}this['_propList'][C(0x9e)](o);}}[u(0x94)](c,d){const E=u,e=document[E(0x8e)]('div');e[E(0xbc)]=E(0xae);const f=document['createElement']('input');f['value']=c[E(0x9d)]??'',f['addEventListener'](E(0xa2),()=>{c['name']=f['value'],this['changed']();}),f[E(0xb2)](E(0x90),()=>{const F=E;this[F(0xbf)]();}),e[E(0x9e)](f);const g=document[E(0x8e)]('select');g['style'][E(0x83)]=c[E(0x7f)]==='enum'?E(0x8f):'';for(const n of['string',E(0x91),E(0x95),E(0xaa),E(0xb3),E(0xb6),'screen',E(0xa4)]){const o=document[E(0x8e)]('option');o[E(0x7d)]=n,o['textContent']=n;if(c['type']===n)o[E(0xb9)]=!![];g['appendChild'](o);}const h=document[E(0x8e)](E(0xa2));h[E(0x8c)]['display']=c['type']===E(0xbb)?'':'none',h[E(0x7d)]=c['values']??'',h[E(0xb2)](E(0xa2),()=>{const G=E;c[G(0xc0)]=h['value'],this[G(0x97)]();}),g[E(0xb2)]('change',()=>{const H=E;c['type']=g['value'],g['style']['display']=c['type']===H(0xbb)?H(0x8f):'',h[H(0x8c)][H(0x83)]=c['type']===H(0xbb)?'':'none',this['changed']();}),e['appendChild'](g),e['appendChild'](h);const i=document['createElement'](E(0xa2));i['type']=E(0xab),i[E(0x9a)]='default',i[E(0x7d)]=c['def']??'',i[E(0xb2)]('input',()=>{c['def']=i['value'],this['changed']();}),e[E(0x9e)](i);const j=document['createElement'](E(0xa2));j['type']='checkbox',j['style'][E(0x82)]='0',j['title']=E(0x7e),j[E(0x89)]=!!c['internal'],j['addEventListener']('change',()=>{const I=E;c[I(0x7e)]=j['checked'],this[I(0x97)]();}),e['appendChild'](j);const k=document['createElement'](E(0xb1));k['textContent']='del',k['addEventListener']('click',()=>this[E(0xad)](d)),e[E(0x9e)](k);const l=document[E(0x8e)]('button');l['textContent']='↑',l['addEventListener']('click',()=>this['up'](d)),e['appendChild'](l);const m=document[E(0x8e)](E(0xb1));return m[E(0xa6)]='↓',m['addEventListener']('click',()=>this[E(0xac)](d)),e[E(0x9e)](m),e;}['changed'](){const J=u;if(this['propertiesObj'])for(let d in this[J(0xa5)]){delete this[J(0xa5)][d];}for(let e of this['properties']){if(e[J(0x9d)]){for(let g of notAllowedChars)e['name']=e[J(0x9d)]['replaceAll'](g,'');e[J(0x9d)]=e[J(0x9d)][0x0]['toLowerCase']()+e['name']['substring'](0x1);let f={'type':e[J(0x7f)]};if(e[J(0x96)]){if(e['type']==J(0x95))f[J(0x85)]=parseFloat(e['def']);else{if(e[J(0x7f)]=='boolean')f['default']=e['def']==J(0xb8);else f[J(0x85)]=e[J(0x96)];}}if(e['internal'])f[J(0x7e)]=!![];e[J(0x7f)]=='enum'&&(f['values']=JSON[J(0xa7)](e['values'])),this['propertiesObj'][e['name']]=f;}}}[u(0xb0)](){return this['changed'](),this['propertiesObj']?{...this['propertiesObj']}:{};}}customElements['define'](u(0xba),IobrokerWebuiControlPropertiesEditor);
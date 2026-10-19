const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=parseInt(t(0x194))/0x1*(-parseInt(t(0x167))/0x2)+-parseInt(t(0x177))/0x3*(parseInt(t(0x19c))/0x4)+-parseInt(t(0x166))/0x5+-parseInt(t(0x16c))/0x6+parseInt(t(0x17b))/0x7+parseInt(t(0x183))/0x8+parseInt(t(0x181))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9b70f));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';function a(){const O=['createElement','substring','button','selected','title','select','push','24963wPEMug','appendChild','addEventListener','define','3261321uWJIos','setProperties','length','def','true','getProperties','28735893pxoQnO','checked','2759768AkmXUH','_collapsedGroups','default','values','_renderList','_propList','down','properties','ready','addEnumProp','className','splice','div','internal','propertiesObj','_restoreCachedInititalValues','_bindingsRefresh','68819cQqyJK','input','_createPropRow','changed','number','_bindingsParse','type','boolean','204AtJQor','addProp','has','none','enum','style','name','defaultInternal','group-rows','string','delete','4554085zwtlqE','26eLfKkJ','display','textContent','value','!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^','6823374GPADqr','_assignEvents','screen','option'];a=function(){return O;};return a();}function b(c,d){c=c-0x165;const e=a();let f=e[c];return f;}const notAllowedChars=u(0x16b);export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        </div>`;constructor(){const v=u;super(),this[v(0x192)]();}[u(0x18b)](){const w=u;this[w(0x199)](),this[w(0x16d)](),this['_propList']=this['_getDomElement']('prop-list');}[u(0x18a)];['propertiesObj'];[u(0x1a3)];[u(0x184)]=new Set();[u(0x188)];[u(0x17c)](c){const x=u;this[x(0x191)]=c;if(c){this['properties']=[];for(let d in c){let e=c[d];this[x(0x18a)]['push']({'name':d,'type':e['type'],'values':JSON['stringify'](e[x(0x186)]),'def':e[x(0x185)],'internal':e['internal']});}}else this['properties']=null;this['_bindingsRefresh'](),this['_renderList']();}['refresh'](){const y=u;this[y(0x193)](),this['_renderList']();}[u(0x19d)](){const z=u;let c={'name':'','type':z(0x1a5)};if(this[z(0x1a3)])c['internal']=!![];this['properties'][z(0x176)](c),this[z(0x193)](),this['_renderList']();}[u(0x18c)](){const A=u;let c={'name':'','type':A(0x1a0),'values':'[\x22a\x22,\x20\x22b\x22]'};if(this[A(0x1a3)])c[A(0x190)]=!![];this[A(0x18a)][A(0x176)](c),this[A(0x193)](),this['_renderList']();}['removeProp'](c){const B=u;this['properties'][B(0x18e)](c,0x1),this[B(0x187)](),this[B(0x197)]();}['up'](c){const C=u;if(c>0x0){const d=this[C(0x18a)][c];this[C(0x18a)][C(0x18e)](c,0x1),this[C(0x18a)]['splice'](--c,0x0,d),this['_renderList'](),this[C(0x197)]();}}['down'](c){const D=u;if(c<this['properties']['length']-0x1){const d=this['properties'][c];this[D(0x18a)]['splice'](c,0x1),this['properties'][D(0x18e)](++c,0x0,d),this[D(0x187)](),this['changed']();}}['_renderList'](){const E=u;if(!this[E(0x188)])return;this['_propList']['innerHTML']='';if(!this[E(0x18a)])return;const c=new Map(),d=[];for(let e=0x0;e<this[E(0x18a)][E(0x17d)];e++){const f=this['properties'][e],g=f['name']?f[E(0x1a2)]['indexOf']('_'):-0x1;if(g>0x0){const h=f[E(0x1a2)][E(0x171)](0x0,g);if(!c['has'](h))c['set'](h,[]);c['get'](h)[E(0x176)]({'item':f,'index':e});}else d['push']({'item':f,'index':e});}for(const {item:j,index:k}of d){this[E(0x188)][E(0x178)](this[E(0x196)](j,k));}for(const [l,m]of c){const n=this[E(0x184)][E(0x19e)](l),o=document[E(0x170)]('div'),p=document['createElement']('div');p[E(0x18d)]='group-header',p[E(0x169)]=(n?'▸\x20':'▾\x20')+l,p[E(0x174)]=l,p['onclick']=()=>{const F=E;if(this[F(0x184)]['has'](l))this[F(0x184)][F(0x165)](l);else this['_collapsedGroups']['add'](l);this['_renderList']();},o[E(0x178)](p);if(!n){const q=document['createElement']('div');q[E(0x18d)]=E(0x1a4);for(const {item:r,index:s}of m){q[E(0x178)](this['_createPropRow'](r,s));}o['appendChild'](q);}this['_propList'][E(0x178)](o);}}['_createPropRow'](c,d){const G=u,e=document[G(0x170)](G(0x18f));e[G(0x18d)]='prop-row';const f=document['createElement'](G(0x195));f[G(0x16a)]=c[G(0x1a2)]??'',f[G(0x179)]('input',()=>{const H=G;c['name']=f['value'],this[H(0x197)]();}),f['addEventListener']('blur',()=>{this['_renderList']();}),e[G(0x178)](f);const g=document['createElement'](G(0x175));g[G(0x1a1)][G(0x168)]=c[G(0x19a)]==='enum'?'none':'';for(const n of['string',G(0x19b),G(0x198),'color','date','signal',G(0x16e),'object']){const o=document['createElement'](G(0x16f));o[G(0x16a)]=n,o[G(0x169)]=n;if(c['type']===n)o[G(0x173)]=!![];g[G(0x178)](o);}const h=document[G(0x170)](G(0x195));h['style']['display']=c['type']==='enum'?'':G(0x19f),h['value']=c[G(0x186)]??'',h['addEventListener']('input',()=>{const I=G;c[I(0x186)]=h['value'],this[I(0x197)]();}),g['addEventListener']('change',()=>{const J=G;c[J(0x19a)]=g[J(0x16a)],g['style'][J(0x168)]=c['type']==='enum'?'none':'',h['style'][J(0x168)]=c['type']==='enum'?'':J(0x19f),this['changed']();}),e[G(0x178)](g),e[G(0x178)](h);const i=document[G(0x170)](G(0x195));i[G(0x19a)]='text',i['title']=G(0x185),i['value']=c['def']??'',i[G(0x179)]('input',()=>{const K=G;c['def']=i[K(0x16a)],this['changed']();}),e['appendChild'](i);const j=document['createElement']('input');j[G(0x19a)]='checkbox',j[G(0x1a1)]['margin']='0',j['title']=G(0x190),j[G(0x182)]=!!c['internal'],j['addEventListener']('change',()=>{const L=G;c[L(0x190)]=j[L(0x182)],this['changed']();}),e[G(0x178)](j);const k=document['createElement']('button');k['textContent']='del',k['addEventListener']('click',()=>this['removeProp'](d)),e['appendChild'](k);const l=document[G(0x170)](G(0x172));l['textContent']='↑',l['addEventListener']('click',()=>this['up'](d)),e['appendChild'](l);const m=document['createElement']('button');return m['textContent']='↓',m[G(0x179)]('click',()=>this[G(0x189)](d)),e[G(0x178)](m),e;}[u(0x197)](){const M=u;if(this[M(0x191)])for(let d in this['propertiesObj']){delete this['propertiesObj'][d];}for(let e of this['properties']){if(e[M(0x1a2)]){for(let g of notAllowedChars)e[M(0x1a2)]=e['name']['replaceAll'](g,'');e[M(0x1a2)]=e['name'][0x0]['toLowerCase']()+e['name']['substring'](0x1);let f={'type':e[M(0x19a)]};if(e[M(0x17e)]){if(e[M(0x19a)]=='number')f[M(0x185)]=parseFloat(e[M(0x17e)]);else{if(e['type']==M(0x19b))f[M(0x185)]=e[M(0x17e)]==M(0x17f);else f['default']=e[M(0x17e)];}}if(e[M(0x190)])f['internal']=!![];e[M(0x19a)]=='enum'&&(f[M(0x186)]=JSON['parse'](e['values'])),this[M(0x191)][e[M(0x1a2)]]=f;}}}[u(0x180)](){const N=u;return this['changed'](),this['propertiesObj']?{...this[N(0x191)]}:{};}}customElements[u(0x17a)]('iobroker-webui-control-properties-editor',IobrokerWebuiControlPropertiesEditor);
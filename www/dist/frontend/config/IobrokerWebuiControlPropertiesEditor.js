function b(c,d){c=c-0x11b;const e=a();let f=e[c];return f;}const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=parseInt(t(0x14f))/0x1*(-parseInt(t(0x13b))/0x2)+-parseInt(t(0x160))/0x3+parseInt(t(0x135))/0x4+-parseInt(t(0x155))/0x5*(-parseInt(t(0x14c))/0x6)+-parseInt(t(0x137))/0x7*(parseInt(t(0x13d))/0x8)+parseInt(t(0x129))/0x9+parseInt(t(0x140))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xbe274));function a(){const O=['_collapsedGroups','createElement','true','push','value','none','304338dvgtxW','splice','substring','1DQLDAf','getProperties','change','stringify','defaultInternal','length','25EylhGh','!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^','delete','className','set','ready','_restoreCachedInititalValues','button','_bindingsParse','select','removeProp','4495443geriPy','def','values','iobroker-webui-control-properties-editor','appendChild','_assignEvents','_renderList','display','textContent','_getDomElement','string','down','name','changed','date','prop-list','propertiesObj','626337nXTdsp','_propList','default','option','properties','enum','refresh','type','div','define','addEventListener','replaceAll','6210396tHrcjs','group-rows','2093VTyUHj','checked','parse','_createPropRow','2588702IQgHmD','group-header','34632epJFlT','color','style','29902640LSABps','add','title','internal','has','input'];a=function(){return O;};return a();}import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';const notAllowedChars=u(0x156);export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static [u(0x13f)]=css`
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
        </div>`;constructor(){const v=u;super(),this[v(0x15b)]();}[u(0x15a)](){const w=u;this[w(0x15d)](),this[w(0x11d)](),this[w(0x12a)]=this[w(0x121)](w(0x127));}['properties'];['propertiesObj'];[u(0x153)];['_collapsedGroups']=new Set();['_propList'];['setProperties'](c){const x=u;this[x(0x128)]=c;if(c){this['properties']=[];for(let d in c){let e=c[d];this[x(0x12d)]['push']({'name':d,'type':e['type'],'values':JSON[x(0x152)](e[x(0x162)]),'def':e[x(0x12b)],'internal':e['internal']});}}else this[x(0x12d)]=null;this['_bindingsRefresh'](),this[x(0x11e)]();}[u(0x12f)](){const y=u;this['_bindingsRefresh'](),this[y(0x11e)]();}['addProp'](){const z=u;let c={'name':'','type':'string'};if(this['defaultInternal'])c['internal']=!![];this[z(0x12d)][z(0x149)](c),this['_bindingsRefresh'](),this[z(0x11e)]();}['addEnumProp'](){const A=u;let c={'name':'','type':'enum','values':'[\x22a\x22,\x20\x22b\x22]'};if(this['defaultInternal'])c[A(0x143)]=!![];this['properties']['push'](c),this['_bindingsRefresh'](),this['_renderList']();}[u(0x15f)](c){const B=u;this[B(0x12d)][B(0x14d)](c,0x1),this[B(0x11e)](),this['changed']();}['up'](c){const C=u;if(c>0x0){const d=this['properties'][c];this[C(0x12d)]['splice'](c,0x1),this[C(0x12d)][C(0x14d)](--c,0x0,d),this['_renderList'](),this['changed']();}}[u(0x123)](c){const D=u;if(c<this['properties'][D(0x154)]-0x1){const d=this['properties'][c];this['properties'][D(0x14d)](c,0x1),this['properties']['splice'](++c,0x0,d),this[D(0x11e)](),this[D(0x125)]();}}['_renderList'](){const E=u;if(!this['_propList'])return;this['_propList']['innerHTML']='';if(!this['properties'])return;const c=new Map(),d=[];for(let e=0x0;e<this[E(0x12d)][E(0x154)];e++){const f=this['properties'][e],g=f['name']?f['name']['indexOf']('_'):-0x1;if(g>0x0){const h=f[E(0x124)][E(0x14e)](0x0,g);if(!c[E(0x144)](h))c[E(0x159)](h,[]);c['get'](h)[E(0x149)]({'item':f,'index':e});}else d[E(0x149)]({'item':f,'index':e});}for(const {item:j,index:k}of d){this[E(0x12a)]['appendChild'](this[E(0x13a)](j,k));}for(const [l,m]of c){const n=this['_collapsedGroups'][E(0x144)](l),o=document['createElement']('div'),p=document['createElement'](E(0x131));p[E(0x158)]=E(0x13c),p[E(0x120)]=(n?'▸\x20':'▾\x20')+l,p[E(0x142)]=l,p['onclick']=()=>{const F=E;if(this['_collapsedGroups'][F(0x144)](l))this[F(0x146)][F(0x157)](l);else this[F(0x146)][F(0x141)](l);this['_renderList']();},o[E(0x11c)](p);if(!n){const q=document['createElement']('div');q['className']=E(0x136);for(const {item:r,index:s}of m){q['appendChild'](this[E(0x13a)](r,s));}o['appendChild'](q);}this['_propList']['appendChild'](o);}}[u(0x13a)](c,d){const G=u,e=document[G(0x147)]('div');e[G(0x158)]='prop-row';const f=document[G(0x147)](G(0x145));f['value']=c['name']??'',f['addEventListener'](G(0x145),()=>{const H=G;c['name']=f[H(0x14a)],this['changed']();}),f[G(0x133)]('blur',()=>{const I=G;this[I(0x11e)]();}),e[G(0x11c)](f);const g=document['createElement'](G(0x15e));g['style'][G(0x11f)]=c['type']==='enum'?G(0x14b):'';for(const n of[G(0x122),'boolean','number',G(0x13e),G(0x126),'signal','screen','object']){const o=document['createElement'](G(0x12c));o[G(0x14a)]=n,o['textContent']=n;if(c[G(0x130)]===n)o['selected']=!![];g[G(0x11c)](o);}const h=document[G(0x147)](G(0x145));h['style'][G(0x11f)]=c['type']==='enum'?'':G(0x14b),h[G(0x14a)]=c[G(0x162)]??'',h['addEventListener'](G(0x145),()=>{const J=G;c['values']=h['value'],this[J(0x125)]();}),g['addEventListener'](G(0x151),()=>{const K=G;c[K(0x130)]=g[K(0x14a)],g[K(0x13f)]['display']=c[K(0x130)]===K(0x12e)?'none':'',h[K(0x13f)][K(0x11f)]=c[K(0x130)]==='enum'?'':'none',this[K(0x125)]();}),e[G(0x11c)](g),e['appendChild'](h);const i=document['createElement'](G(0x145));i['type']='text',i['title']='default',i['value']=c[G(0x161)]??'',i[G(0x133)]('input',()=>{c['def']=i['value'],this['changed']();}),e['appendChild'](i);const j=document['createElement'](G(0x145));j['type']='checkbox',j['style']['margin']='0',j[G(0x142)]='internal',j[G(0x138)]=!!c[G(0x143)],j['addEventListener'](G(0x151),()=>{const L=G;c['internal']=j[L(0x138)],this['changed']();}),e['appendChild'](j);const k=document['createElement']('button');k['textContent']='del',k[G(0x133)]('click',()=>this[G(0x15f)](d)),e['appendChild'](k);const l=document[G(0x147)](G(0x15c));l[G(0x120)]='↑',l[G(0x133)]('click',()=>this['up'](d)),e[G(0x11c)](l);const m=document[G(0x147)]('button');return m[G(0x120)]='↓',m['addEventListener']('click',()=>this[G(0x123)](d)),e[G(0x11c)](m),e;}['changed'](){const M=u;if(this[M(0x128)])for(let d in this['propertiesObj']){delete this[M(0x128)][d];}for(let e of this['properties']){if(e['name']){for(let g of notAllowedChars)e['name']=e[M(0x124)][M(0x134)](g,'');e[M(0x124)]=e[M(0x124)][0x0]['toLowerCase']()+e['name']['substring'](0x1);let f={'type':e[M(0x130)]};if(e[M(0x161)]){if(e['type']=='number')f['default']=parseFloat(e['def']);else{if(e[M(0x130)]=='boolean')f['default']=e[M(0x161)]==M(0x148);else f[M(0x12b)]=e['def'];}}if(e['internal'])f['internal']=!![];e['type']=='enum'&&(f[M(0x162)]=JSON[M(0x139)](e['values'])),this['propertiesObj'][e[M(0x124)]]=f;}}}[u(0x150)](){const N=u;return this['changed'](),this[N(0x128)]?{...this['propertiesObj']}:{};}}customElements[u(0x132)](u(0x11b),IobrokerWebuiControlPropertiesEditor);
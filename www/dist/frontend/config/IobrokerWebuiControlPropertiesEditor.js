const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=parseInt(t(0x1b6))/0x1+-parseInt(t(0x19b))/0x2+parseInt(t(0x1cf))/0x3*(-parseInt(t(0x1a1))/0x4)+-parseInt(t(0x1c1))/0x5*(-parseInt(t(0x197))/0x6)+parseInt(t(0x1b0))/0x7+-parseInt(t(0x1aa))/0x8*(parseInt(t(0x1c3))/0x9)+parseInt(t(0x1a3))/0xa*(parseInt(t(0x1a8))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x39194));function a(){const M=['_propList','delete','style','changed','createElement','name','splice','defaultInternal','295nxVHMl','textContent','484866fXiTIy','def','_bindingsRefresh','click','margin','get','className','signal','add','input','propertiesObj','none','93IfscZE','values','div','group-header','change','_bindingsParse','setProperties','select','_renderList','screen','down','type','indexOf','enum','color','22812mdcjfW','[\x22a\x22,\x20\x22b\x22]','prop-row','substring','196612cDtLKr','internal','addEventListener','properties','_collapsedGroups','push','58832sZGnia','addProp','2690iQThGC','appendChild','button','value','removeProp','6853fMeByb','set','8VuWDVZ','innerHTML','number','prop-list','iobroker-webui-control-properties-editor','_assignEvents','2552060uhjTPR','title','boolean','date','default','_createPropRow','85519aitNer','text','true'];a=function(){return M;};return a();}function b(c,d){c=c-0x18c;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';const notAllowedChars='!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^';export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static [u(0x1bb)]=css`
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
        </div>`;constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const v=u;this[v(0x18d)](),this[v(0x1af)](),this['_propList']=this['_getDomElement'](v(0x1ad));}[u(0x19e)];[u(0x1cd)];[u(0x1c0)];[u(0x19f)]=new Set();[u(0x1b9)];[u(0x18e)](c){const w=u;this['propertiesObj']=c;if(c){this['properties']=[];for(let d in c){let e=c[d];this['properties'][w(0x1a0)]({'name':d,'type':e[w(0x193)],'values':JSON['stringify'](e['values']),'def':e[w(0x1b4)],'internal':e['internal']});}}else this['properties']=null;this['_bindingsRefresh'](),this['_renderList']();}['refresh'](){const x=u;this[x(0x1c5)](),this['_renderList']();}[u(0x1a2)](){const y=u;let c={'name':'','type':'string'};if(this[y(0x1c0)])c['internal']=!![];this[y(0x19e)][y(0x1a0)](c),this['_bindingsRefresh'](),this['_renderList']();}['addEnumProp'](){const z=u;let c={'name':'','type':z(0x195),'values':z(0x198)};if(this['defaultInternal'])c['internal']=!![];this[z(0x19e)]['push'](c),this['_bindingsRefresh'](),this[z(0x190)]();}[u(0x1a7)](c){const A=u;this[A(0x19e)]['splice'](c,0x1),this['_renderList'](),this['changed']();}['up'](c){const B=u;if(c>0x0){const d=this[B(0x19e)][c];this[B(0x19e)]['splice'](c,0x1),this[B(0x19e)][B(0x1bf)](--c,0x0,d),this['_renderList'](),this['changed']();}}[u(0x192)](c){const C=u;if(c<this['properties']['length']-0x1){const d=this[C(0x19e)][c];this['properties'][C(0x1bf)](c,0x1),this[C(0x19e)]['splice'](++c,0x0,d),this['_renderList'](),this['changed']();}}['_renderList'](){const D=u;if(!this['_propList'])return;this[D(0x1b9)][D(0x1ab)]='';if(!this['properties'])return;const c=new Map(),d=[];for(let e=0x0;e<this[D(0x19e)]['length'];e++){const f=this['properties'][e],g=f['name']?f['name'][D(0x194)]('_'):-0x1;if(g>0x0){const h=f['name'][D(0x19a)](0x0,g);if(!c['has'](h))c[D(0x1a9)](h,[]);c[D(0x1c8)](h)['push']({'item':f,'index':e});}else d[D(0x1a0)]({'item':f,'index':e});}for(const {item:j,index:k}of d){this[D(0x1b9)][D(0x1a4)](this[D(0x1b5)](j,k));}for(const [l,m]of c){const n=this[D(0x19f)]['has'](l),o=document['createElement']('div'),p=document[D(0x1bd)](D(0x1d1));p[D(0x1c9)]=D(0x1d2),p[D(0x1c2)]=(n?'▸\x20':'▾\x20')+l,p[D(0x1b1)]=l,p['onclick']=()=>{const E=D;if(this['_collapsedGroups']['has'](l))this[E(0x19f)][E(0x1ba)](l);else this['_collapsedGroups'][E(0x1cb)](l);this['_renderList']();},o['appendChild'](p);if(!n){const q=document['createElement'](D(0x1d1));q['className']='group-rows';for(const {item:r,index:s}of m){q['appendChild'](this['_createPropRow'](r,s));}o['appendChild'](q);}this[D(0x1b9)][D(0x1a4)](o);}}[u(0x1b5)](c,d){const F=u,e=document['createElement']('div');e[F(0x1c9)]=F(0x199);const f=document[F(0x1bd)](F(0x1cc));f[F(0x1a6)]=c[F(0x1be)]??'',f['addEventListener']('input',()=>{const G=F;c['name']=f['value'],this[G(0x1bc)]();}),f[F(0x19d)]('blur',()=>{this['_renderList']();}),e['appendChild'](f);const g=document[F(0x1bd)](F(0x18f));g['style']['display']=c[F(0x193)]===F(0x195)?F(0x1ce):'';for(const n of['string','boolean',F(0x1ac),F(0x196),F(0x1b3),F(0x1ca),F(0x191),'object']){const o=document['createElement']('option');o['value']=n,o[F(0x1c2)]=n;if(c[F(0x193)]===n)o['selected']=!![];g['appendChild'](o);}const h=document[F(0x1bd)]('input');h[F(0x1bb)]['display']=c[F(0x193)]==='enum'?'':F(0x1ce),h[F(0x1a6)]=c['values']??'',h['addEventListener']('input',()=>{const H=F;c[H(0x1d0)]=h[H(0x1a6)],this[H(0x1bc)]();}),g['addEventListener'](F(0x18c),()=>{const I=F;c['type']=g['value'],g['style']['display']=c['type']===I(0x195)?I(0x1ce):'',h['style']['display']=c['type']===I(0x195)?'':I(0x1ce),this['changed']();}),e[F(0x1a4)](g),e['appendChild'](h);const i=document[F(0x1bd)](F(0x1cc));i['type']=F(0x1b7),i['title']='default',i['value']=c[F(0x1c4)]??'',i['addEventListener']('input',()=>{const J=F;c[J(0x1c4)]=i['value'],this[J(0x1bc)]();}),e[F(0x1a4)](i);const j=document[F(0x1bd)]('input');j[F(0x193)]='checkbox',j['style'][F(0x1c7)]='0',j[F(0x1b1)]='internal',j['checked']=!!c[F(0x19c)],j['addEventListener'](F(0x18c),()=>{c['internal']=j['checked'],this['changed']();}),e['appendChild'](j);const k=document[F(0x1bd)](F(0x1a5));k[F(0x1c2)]='del',k[F(0x19d)](F(0x1c6),()=>this['removeProp'](d)),e['appendChild'](k);const l=document[F(0x1bd)]('button');l[F(0x1c2)]='↑',l[F(0x19d)]('click',()=>this['up'](d)),e['appendChild'](l);const m=document[F(0x1bd)](F(0x1a5));return m['textContent']='↓',m[F(0x19d)](F(0x1c6),()=>this['down'](d)),e['appendChild'](m),e;}['changed'](){const K=u;if(this[K(0x1cd)])for(let d in this['propertiesObj']){delete this['propertiesObj'][d];}for(let e of this['properties']){if(e[K(0x1be)]){for(let g of notAllowedChars)e[K(0x1be)]=e[K(0x1be)]['replaceAll'](g,'');e[K(0x1be)]=e['name'][0x0]['toLowerCase']()+e['name'][K(0x19a)](0x1);let f={'type':e['type']};if(e[K(0x1c4)]){if(e[K(0x193)]==K(0x1ac))f['default']=parseFloat(e[K(0x1c4)]);else{if(e[K(0x193)]==K(0x1b2))f['default']=e['def']==K(0x1b8);else f[K(0x1b4)]=e['def'];}}if(e['internal'])f['internal']=!![];e[K(0x193)]=='enum'&&(f['values']=JSON['parse'](e['values'])),this[K(0x1cd)][e[K(0x1be)]]=f;}}}['getProperties'](){const L=u;return this[L(0x1bc)](),this[L(0x1cd)]?{...this['propertiesObj']}:{};}}customElements['define'](u(0x1ae),IobrokerWebuiControlPropertiesEditor);
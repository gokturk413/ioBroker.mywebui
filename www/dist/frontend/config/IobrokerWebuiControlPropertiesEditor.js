const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=parseInt(t(0x18e))/0x1*(parseInt(t(0x199))/0x2)+-parseInt(t(0x172))/0x3+parseInt(t(0x175))/0x4*(-parseInt(t(0x15c))/0x5)+parseInt(t(0x16c))/0x6*(-parseInt(t(0x179))/0x7)+-parseInt(t(0x163))/0x8*(parseInt(t(0x191))/0x9)+-parseInt(t(0x167))/0xa*(parseInt(t(0x184))/0xb)+parseInt(t(0x16d))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9fd23));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';function b(c,d){c=c-0x154;const e=a();let f=e[c];return f;}function a(){const N=['41664720yYFYzZ','select','type','style','values','2806692fKVPqK','className','splice','12DaMRvg','change','appendChild','properties','24388ZsIYkB','name','selected','def','_bindingsRefresh','replaceAll','!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^','get','define','createElement','_propList','11KIqlJo','changed','down','default','innerHTML','internal','_renderList','title','defaultInternal','push','2wDcLIt','margin','refresh','10084689GjJYwW','boolean','date','delete','toLowerCase','none','substring','checkbox','1034206IQtUME','option','_collapsedGroups','value','checked','group-rows','click','_assignEvents','enum','propertiesObj','textContent','removeProp','_createPropRow','addEventListener','255045wjynLJ','display','div','set','del','iobroker-webui-control-properties-editor','add','8UTHgzO','button','has','setProperties','8551430rPIERB','indexOf','input','group-header','_getDomElement','1356HfwOBG'];a=function(){return N;};return a();}const notAllowedChars=u(0x17f);export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static [u(0x170)]=css`
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
        </div>`;constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const v=u;this['_bindingsParse'](),this[v(0x155)](),this['_propList']=this[v(0x16b)]('prop-list');}[u(0x178)];['propertiesObj'];['defaultInternal'];['_collapsedGroups']=new Set();['_propList'];[u(0x166)](c){const w=u;this['propertiesObj']=c;if(c){this[w(0x178)]=[];for(let d in c){let e=c[d];this[w(0x178)][w(0x18d)]({'name':d,'type':e['type'],'values':JSON['stringify'](e[w(0x171)]),'def':e[w(0x187)],'internal':e['internal']});}}else this[w(0x178)]=null;this[w(0x17d)](),this['_renderList']();}[u(0x190)](){const x=u;this[x(0x17d)](),this['_renderList']();}['addProp'](){const y=u;let c={'name':'','type':'string'};if(this[y(0x18c)])c[y(0x189)]=!![];this['properties'][y(0x18d)](c),this[y(0x17d)](),this['_renderList']();}['addEnumProp'](){const z=u;let c={'name':'','type':z(0x156),'values':'[\x22a\x22,\x20\x22b\x22]'};if(this[z(0x18c)])c['internal']=!![];this['properties']['push'](c),this[z(0x17d)](),this['_renderList']();}[u(0x159)](c){const A=u;this['properties'][A(0x174)](c,0x1),this[A(0x18a)](),this[A(0x185)]();}['up'](c){const B=u;if(c>0x0){const d=this['properties'][c];this['properties']['splice'](c,0x1),this[B(0x178)]['splice'](--c,0x0,d),this[B(0x18a)](),this[B(0x185)]();}}['down'](c){const C=u;if(c<this[C(0x178)]['length']-0x1){const d=this[C(0x178)][c];this['properties'][C(0x174)](c,0x1),this[C(0x178)]['splice'](++c,0x0,d),this[C(0x18a)](),this[C(0x185)]();}}['_renderList'](){const D=u;if(!this[D(0x183)])return;this[D(0x183)][D(0x188)]='';if(!this[D(0x178)])return;const c=new Map(),d=[];for(let e=0x0;e<this['properties']['length'];e++){const f=this['properties'][e],g=f['name']?f[D(0x17a)][D(0x168)]('_'):-0x1;if(g>0x0){const h=f['name'][D(0x197)](0x0,g);if(!c[D(0x165)](h))c[D(0x15f)](h,[]);c[D(0x180)](h)[D(0x18d)]({'item':f,'index':e});}else d[D(0x18d)]({'item':f,'index':e});}for(const {item:j,index:k}of d){this['_propList']['appendChild'](this[D(0x15a)](j,k));}for(const [l,m]of c){const n=this[D(0x19b)][D(0x165)](l),o=document['createElement']('div'),p=document['createElement'](D(0x15e));p[D(0x173)]=D(0x16a),p['textContent']=(n?'▸\x20':'▾\x20')+l,p[D(0x18b)]=l,p['onclick']=()=>{const E=D;if(this['_collapsedGroups'][E(0x165)](l))this['_collapsedGroups'][E(0x194)](l);else this[E(0x19b)][E(0x162)](l);this[E(0x18a)]();},o['appendChild'](p);if(!n){const q=document[D(0x182)]('div');q['className']=D(0x19e);for(const {item:r,index:s}of m){q['appendChild'](this['_createPropRow'](r,s));}o['appendChild'](q);}this[D(0x183)]['appendChild'](o);}}[u(0x15a)](c,d){const F=u,e=document[F(0x182)]('div');e['className']='prop-row';const f=document[F(0x182)](F(0x169));f['value']=c['name']??'',f[F(0x15b)]('input',()=>{const G=F;c[G(0x17a)]=f['value'],this[G(0x185)]();}),f[F(0x15b)]('blur',()=>{this['_renderList']();}),e['appendChild'](f);const g=document[F(0x182)](F(0x16e));g[F(0x170)]['display']=c['type']==='enum'?F(0x196):'';for(const n of['string',F(0x192),'number','color',F(0x193),'signal','screen','object']){const o=document['createElement'](F(0x19a));o[F(0x19c)]=n,o['textContent']=n;if(c[F(0x16f)]===n)o[F(0x17b)]=!![];g[F(0x177)](o);}const h=document['createElement'](F(0x169));h[F(0x170)]['display']=c['type']==='enum'?'':F(0x196),h['value']=c['values']??'',h[F(0x15b)]('input',()=>{const H=F;c[H(0x171)]=h[H(0x19c)],this['changed']();}),g[F(0x15b)]('change',()=>{const I=F;c['type']=g[I(0x19c)],g[I(0x170)]['display']=c['type']===I(0x156)?I(0x196):'',h['style'][I(0x15d)]=c['type']===I(0x156)?'':'none',this[I(0x185)]();}),e['appendChild'](g),e['appendChild'](h);const i=document['createElement'](F(0x169));i[F(0x16f)]='text',i['title']='default',i[F(0x19c)]=c[F(0x17c)]??'',i['addEventListener'](F(0x169),()=>{const J=F;c[J(0x17c)]=i['value'],this[J(0x185)]();}),e[F(0x177)](i);const j=document['createElement'](F(0x169));j['type']=F(0x198),j[F(0x170)][F(0x18f)]='0',j[F(0x18b)]=F(0x189),j[F(0x19d)]=!!c['internal'],j['addEventListener'](F(0x176),()=>{const K=F;c[K(0x189)]=j['checked'],this['changed']();}),e['appendChild'](j);const k=document['createElement'](F(0x164));k[F(0x158)]=F(0x160),k['addEventListener']('click',()=>this[F(0x159)](d)),e['appendChild'](k);const l=document[F(0x182)]('button');l['textContent']='↑',l[F(0x15b)]('click',()=>this['up'](d)),e['appendChild'](l);const m=document[F(0x182)]('button');return m['textContent']='↓',m[F(0x15b)](F(0x154),()=>this[F(0x186)](d)),e[F(0x177)](m),e;}['changed'](){const L=u;if(this[L(0x157)])for(let d in this[L(0x157)]){delete this[L(0x157)][d];}for(let e of this[L(0x178)]){if(e['name']){for(let g of notAllowedChars)e['name']=e[L(0x17a)][L(0x17e)](g,'');e[L(0x17a)]=e[L(0x17a)][0x0][L(0x195)]()+e['name']['substring'](0x1);let f={'type':e[L(0x16f)]};if(e[L(0x17c)]){if(e['type']=='number')f[L(0x187)]=parseFloat(e[L(0x17c)]);else{if(e['type']==L(0x192))f['default']=e['def']=='true';else f[L(0x187)]=e[L(0x17c)];}}if(e[L(0x189)])f[L(0x189)]=!![];e['type']=='enum'&&(f[L(0x171)]=JSON['parse'](e[L(0x171)])),this['propertiesObj'][e['name']]=f;}}}['getProperties'](){const M=u;return this[M(0x185)](),this[M(0x157)]?{...this['propertiesObj']}:{};}}customElements[u(0x181)](u(0x161),IobrokerWebuiControlPropertiesEditor);
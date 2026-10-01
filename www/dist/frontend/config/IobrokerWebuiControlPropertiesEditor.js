const u=b;(function(c,d){const t=b,e=c();while(!![]){try{const f=parseInt(t(0x1f7))/0x1+parseInt(t(0x1f2))/0x2*(-parseInt(t(0x1f8))/0x3)+parseInt(t(0x1f5))/0x4*(parseInt(t(0x21a))/0x5)+-parseInt(t(0x221))/0x6+-parseInt(t(0x206))/0x7*(-parseInt(t(0x20e))/0x8)+parseInt(t(0x22a))/0x9*(-parseInt(t(0x203))/0xa)+parseInt(t(0x20c))/0xb*(parseInt(t(0x225))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2612a));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';function b(c,d){c=c-0x1f0;const e=a();let f=e[c];return f;}const notAllowedChars='!\x22§$%&/()=?`´-:.,;<>|\x5c\x27#+*°^';export class IobrokerWebuiControlPropertiesEditor extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
    }`;static [u(0x20f)]=html`
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
        </div>`;constructor(){super(),this['_restoreCachedInititalValues']();}['ready'](){const v=u;this[v(0x1fa)](),this[v(0x1f9)](),this[v(0x229)]=this[v(0x214)]('prop-list');}['properties'];[u(0x227)];[u(0x211)];['_collapsedGroups']=new Set();['_propList'];['setProperties'](c){const w=u;this['propertiesObj']=c;if(c){this[w(0x210)]=[];for(let d in c){let e=c[d];this[w(0x210)][w(0x223)]({'name':d,'type':e['type'],'values':JSON[w(0x212)](e['values']),'def':e[w(0x216)],'internal':e['internal']});}}else this['properties']=null;this['_bindingsRefresh'](),this[w(0x224)]();}['refresh'](){const x=u;this['_bindingsRefresh'](),this[x(0x224)]();}['addProp'](){const y=u;let c={'name':'','type':'string'};if(this[y(0x211)])c['internal']=!![];this['properties'][y(0x223)](c),this['_bindingsRefresh'](),this[y(0x224)]();}[u(0x204)](){const z=u;let c={'name':'','type':z(0x200),'values':z(0x217)};if(this[z(0x211)])c[z(0x220)]=!![];this['properties'][z(0x223)](c),this[z(0x20b)](),this[z(0x224)]();}['removeProp'](c){const A=u;this[A(0x210)][A(0x237)](c,0x1),this['_renderList'](),this[A(0x232)]();}['up'](c){const B=u;if(c>0x0){const d=this[B(0x210)][c];this['properties'][B(0x237)](c,0x1),this[B(0x210)]['splice'](--c,0x0,d),this['_renderList'](),this['changed']();}}['down'](c){const C=u;if(c<this['properties']['length']-0x1){const d=this[C(0x210)][c];this['properties']['splice'](c,0x1),this['properties']['splice'](++c,0x0,d),this[C(0x224)](),this['changed']();}}['_renderList'](){const D=u;if(!this['_propList'])return;this[D(0x229)]['innerHTML']='';if(!this[D(0x210)])return;const c=new Map(),d=[];for(let e=0x0;e<this['properties']['length'];e++){const f=this[D(0x210)][e],g=f[D(0x235)]?f['name'][D(0x1ff)]('_'):-0x1;if(g>0x0){const h=f['name']['substring'](0x0,g);if(!c['has'](h))c[D(0x22c)](h,[]);c[D(0x205)](h)['push']({'item':f,'index':e});}else d['push']({'item':f,'index':e});}for(const {item:j,index:k}of d){this[D(0x229)][D(0x1f3)](this['_createPropRow'](j,k));}for(const [l,m]of c){const n=this['_collapsedGroups'][D(0x21d)](l),o=document[D(0x228)](D(0x201)),p=document['createElement'](D(0x201));p['className']=D(0x208),p[D(0x21b)]=(n?'▸\x20':'▾\x20')+l,p[D(0x231)]=l,p['onclick']=()=>{const E=D;if(this[E(0x207)]['has'](l))this[E(0x207)]['delete'](l);else this['_collapsedGroups']['add'](l);this['_renderList']();},o['appendChild'](p);if(!n){const q=document['createElement'](D(0x201));q['className']=D(0x1f1);for(const {item:r,index:s}of m){q['appendChild'](this[D(0x222)](r,s));}o['appendChild'](q);}this[D(0x229)][D(0x1f3)](o);}}[u(0x222)](c,d){const F=u,e=document[F(0x228)]('div');e[F(0x1f6)]='prop-row';const f=document[F(0x228)](F(0x230));f['value']=c['name']??'',f['addEventListener'](F(0x230),()=>{const G=F;c['name']=f[G(0x215)],this[G(0x232)]();}),f['addEventListener']('blur',()=>{this['_renderList']();}),e[F(0x1f3)](f);const g=document[F(0x228)](F(0x234));g[F(0x21f)][F(0x22d)]=c['type']===F(0x200)?F(0x1f0):'';for(const n of[F(0x20a),'boolean','number',F(0x226),'date','signal',F(0x202),F(0x1fc)]){const o=document[F(0x228)](F(0x20d));o[F(0x215)]=n,o['textContent']=n;if(c['type']===n)o[F(0x22e)]=!![];g['appendChild'](o);}const h=document[F(0x228)](F(0x230));h['style']['display']=c[F(0x1fe)]==='enum'?'':'none',h[F(0x215)]=c[F(0x1fb)]??'',h['addEventListener']('input',()=>{c['values']=h['value'],this['changed']();}),g[F(0x22f)]('change',()=>{const H=F;c['type']=g[H(0x215)],g[H(0x21f)]['display']=c[H(0x1fe)]===H(0x200)?H(0x1f0):'',h[H(0x21f)]['display']=c[H(0x1fe)]===H(0x200)?'':H(0x1f0),this[H(0x232)]();}),e[F(0x1f3)](g),e['appendChild'](h);const i=document['createElement']('input');i[F(0x1fe)]=F(0x233),i['title']=F(0x216),i['value']=c[F(0x21c)]??'',i['addEventListener']('input',()=>{const I=F;c[I(0x21c)]=i[I(0x215)],this['changed']();}),e[F(0x1f3)](i);const j=document['createElement']('input');j['type']='checkbox',j['style'][F(0x209)]='0',j[F(0x231)]='internal',j[F(0x236)]=!!c['internal'],j[F(0x22f)]('change',()=>{const J=F;c[J(0x220)]=j[J(0x236)],this[J(0x232)]();}),e['appendChild'](j);const k=document[F(0x228)](F(0x219));k['textContent']=F(0x22b),k[F(0x22f)]('click',()=>this[F(0x21e)](d)),e[F(0x1f3)](k);const l=document['createElement'](F(0x219));l[F(0x21b)]='↑',l[F(0x22f)]('click',()=>this['up'](d)),e[F(0x1f3)](l);const m=document[F(0x228)]('button');return m['textContent']='↓',m[F(0x22f)](F(0x1f4),()=>this['down'](d)),e['appendChild'](m),e;}['changed'](){const K=u;if(this[K(0x227)])for(let d in this[K(0x227)]){delete this['propertiesObj'][d];}for(let e of this['properties']){if(e[K(0x235)]){for(let g of notAllowedChars)e['name']=e['name']['replaceAll'](g,'');e[K(0x235)]=e[K(0x235)][0x0]['toLowerCase']()+e['name']['substring'](0x1);let f={'type':e['type']};if(e[K(0x21c)]){if(e[K(0x1fe)]==K(0x218))f['default']=parseFloat(e['def']);else{if(e[K(0x1fe)]=='boolean')f[K(0x216)]=e['def']=='true';else f[K(0x216)]=e[K(0x21c)];}}if(e[K(0x220)])f[K(0x220)]=!![];e['type']==K(0x200)&&(f['values']=JSON[K(0x213)](e[K(0x1fb)])),this[K(0x227)][e[K(0x235)]]=f;}}}['getProperties'](){const L=u;return this['changed'](),this[L(0x227)]?{...this[L(0x227)]}:{};}}function a(){const M=['type','indexOf','enum','div','screen','10GmDUFT','addEnumProp','get','1181957iSOUzc','_collapsedGroups','group-header','margin','string','_bindingsRefresh','44gGsWOK','option','8hApqNr','template','properties','defaultInternal','stringify','parse','_getDomElement','value','default','[\x22a\x22,\x20\x22b\x22]','number','button','883255rUQLGz','textContent','def','has','removeProp','style','internal','276870tGObBW','_createPropRow','push','_renderList','428904DGHVSA','color','propertiesObj','createElement','_propList','2791089rVkdXT','del','set','display','selected','addEventListener','input','title','changed','text','select','name','checked','splice','none','group-rows','42098mOXqXC','appendChild','click','4ZQpZRF','className','150036XkBjwf','18frQMDr','_assignEvents','_bindingsParse','values','object','iobroker-webui-control-properties-editor'];a=function(){return M;};return a();}customElements['define'](u(0x1fd),IobrokerWebuiControlPropertiesEditor);
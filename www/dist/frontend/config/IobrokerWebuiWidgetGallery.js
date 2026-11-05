const s=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=-parseInt(r(0x1c9))/0x1*(-parseInt(r(0x171))/0x2)+parseInt(r(0x187))/0x3*(parseInt(r(0x190))/0x4)+-parseInt(r(0x18a))/0x5+-parseInt(r(0x16f))/0x6+-parseInt(r(0x185))/0x7+parseInt(r(0x19d))/0x8+-parseInt(r(0x1d5))/0x9*(-parseInt(r(0x1a6))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x407a8));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';function a(){const O=['pop','map','open','global:','disconnect','name','<svg\x20class=\x22ico\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x221.8\x22\x20aria-hidden=\x22true\x22><path\x20d=\x22M3\x207a2\x202\x200\x200\x201\x202-2h4l2\x202h8a2\x202\x200\x200\x201\x202\x202v8a2\x202\x200\x200\x201-2\x202H5a2\x202\x200\x200\x201-2-2z\x22/></svg>','_grid','1212606mESYBp','card-title','_controlLevel','onclick','effectAllowed','elementDef','function','path','hidden','dataset','innerText','activate','querySelectorAll','_head','_seq','1710696mqWwcp','filter','2yDvZav','.ct','400px','_folderElement','sort','folders','createElement','tool','<div\x20class=\x22empty\x22>empty</div>','style','innerHTML','title','appendChild','designerTools','folder-body','global','load','_instantiated','split','head','3102414bNFiWU','_market','174yliYSE','serviceContainer','300px','649005bYJwaK','_renderNode','setData','summary','dir','defaultContent','14332OYexsk','card-preview','showTab','_renderCards','npm','project','showForSource','warn','control','_resetGrid','_openFolders','_pressTab','toggle','1258704dJjzsr','tag','target','Global\x20controls','getGlobalObjectNames','get','stringify','globalContext','<svg\x20class=\x22chev\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222.2\x22\x20aria-hidden=\x22true\x22><path\x20d=\x22m9\x206\x206\x206-6\x206\x22/></svg>','20TcMuUv','delete','div','span','substring','3dcontrol','textContent','\x20controls','className','items','querySelector','button','_showControls','single','galleryType','iobroker-webui-3dscreen-viewer','getElements','unobserve','_getDomElement','push','draggable','getGlobalSubFolders','_renderLevel','folder','slice','getSubFolders','length','project:','all','_instantiate','gallery:\x20listing\x20controls','market','append','add','_showItems','487603TjJDDU','_tabs','tab','_item'];a=function(){return O;};return a();}import{iobrokerHandler}from'../common/IobrokerHandler.js';function b(c,d){c=c-0x167;const e=a();let f=e[c];return f;}import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';import'./MarketplacePanel.js';import{galleryTree}from'./GalleryTree.js';export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static [s(0x17a)]=css`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            box-sizing: border-box;
            overflow: hidden;
            position: relative;
            /* adaptive neon palette - matches the solution explorer; resolves per
               active theme via inherited color-scheme (light -> daylight glass) */
            --neo-cyan: light-dark(#0b84c4, #2ed6ff);
            --neo-purple: light-dark(#7b46d6, #a06bff);
            --neo-text: light-dark(#1c2740, #dce7ff);
            --neo-text-dim: light-dark(#5a6b8c, #8fa3cc);
            background:
                radial-gradient(ellipse 120% 60% at 20% -10%, light-dark(rgba(120, 90, 230, 0.10), rgba(110, 70, 220, 0.22)), transparent 60%),
                radial-gradient(ellipse 100% 50% at 100% 110%, light-dark(rgba(0, 150, 255, 0.07), rgba(0, 150, 255, 0.16)), transparent 60%),
                linear-gradient(165deg, light-dark(#f5f8fd, #0b1228) 0%, light-dark(#eef3fb, #111a3a) 55%, light-dark(#e8eef8, #151d45) 100%);
            color: var(--neo-text);
            font-family: 'Segoe UI', Roboto, sans-serif;
        }

        #head {
            flex-shrink: 0;
            padding: 8px 12px;
            font-size: 15px;
            font-weight: 600;
            color: var(--neo-text);
            text-shadow: 0 0 10px rgba(46, 214, 255, 0.4);
            border-bottom: 1px solid light-dark(rgba(40, 128, 235, 0.22), rgba(80, 190, 255, 0.25));
            background: light-dark(rgba(255, 255, 255, 0.6), rgba(22, 34, 76, 0.45));
            backdrop-filter: blur(6px);
        }

        /* fixed standard card size: as many cards per row as fit, the rest
           wraps to the next row, the grid scrolls vertically */
        #grid {
            flex: 1;
            padding: 12px;
            overflow-y: auto;
            overflow-x: hidden;
            box-sizing: border-box;
            min-height: 0;
        }
        .cards {
            display: grid;
            grid-template-columns: repeat(auto-fill, 220px);
            grid-auto-rows: 186px;
            justify-content: start;
            align-content: start;
            gap: 12px;
        }
        .cards:not(:empty) { margin-bottom: 12px; }

        /* controls keep their folders, like the project tree (Kamran 2026-11-04) */
        details.folder { margin: 0 0 6px; }
        details.folder > summary {
            list-style: none;
            display: flex;
            align-items: center;
            gap: 6px;
            height: 30px;
            padding: 0 8px;
            border-radius: 8px;
            cursor: pointer;
            user-select: none;
            font-size: 13px;
            font-weight: 600;
            color: var(--neo-text);
            border: 1px solid light-dark(rgba(40, 128, 235, 0.2), rgba(80, 190, 255, 0.2));
            background: light-dark(rgba(255, 255, 255, 0.55), rgba(22, 34, 76, 0.4));
        }
        details.folder > summary::-webkit-details-marker { display: none; }
        details.folder > summary:hover { border-color: rgba(46, 214, 255, 0.6); }
        details.folder > summary:focus-visible { outline: 2px solid var(--neo-cyan); outline-offset: 1px; }
        details.folder > summary .chev { width: 14px; height: 14px; flex-shrink: 0; transition: transform .15s; color: var(--neo-cyan); }
        details.folder[open] > summary .chev { transform: rotate(90deg); }
        details.folder > summary .ico { width: 16px; height: 16px; flex-shrink: 0; color: var(--neo-purple); }
        details.folder > summary .nm { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        details.folder > summary .ct { font-weight: 500; font-size: 11.5px; color: var(--neo-text-dim); }
        .folder-body {
            margin: 8px 0 4px 7px;
            padding-left: 10px;
            border-left: 1px solid light-dark(rgba(40, 128, 235, 0.25), rgba(80, 190, 255, 0.25));
        }

        #grid::-webkit-scrollbar {
            width: 8px;
        }

        #grid::-webkit-scrollbar-thumb {
            background: rgba(80, 190, 255, 0.25);
            border-radius: 4px;
        }

        .card {
            display: flex;
            flex-direction: column;
            width: 220px;
            height: 186px;
            box-sizing: border-box;
            border: 1px solid light-dark(rgba(40, 128, 235, 0.25), rgba(80, 190, 255, 0.3));
            border-radius: 12px;
            background: light-dark(rgba(255, 255, 255, 0.78), rgba(22, 34, 76, 0.55));
            box-shadow: 0 0 12px rgba(46, 214, 255, 0.1), inset 0 0 16px rgba(46, 214, 255, 0.04);
            overflow: hidden;
            cursor: grab;
            transition: box-shadow 0.15s, border-color 0.15s, transform 0.15s;
        }

        .card:hover {
            border-color: rgba(46, 214, 255, 0.7);
            box-shadow: 0 0 18px rgba(46, 214, 255, 0.35);
            transform: translateY(-2px);
        }

        .card-title {
            flex-shrink: 0;
            padding: 6px 10px;
            font-size: 13px;
            font-weight: 600;
            color: var(--neo-text);
            border-bottom: 1px solid rgba(80, 190, 255, 0.2);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .card-preview {
            position: relative;
            flex: 1;
            min-height: 0;
            overflow: hidden;
            background: light-dark(rgba(245, 248, 253, 0.6), rgba(10, 18, 45, 0.45));
            pointer-events: none;
        }

        .card-preview > * {
            position: absolute;
            inset: 6px;
            width: calc(100% - 12px);
            height: calc(100% - 12px);
        }

        .empty {
            padding: 20px;
            color: var(--neo-text-dim);
            font-size: 13px;
        }

        /* Project · Global · Marketplace (the mockup of 2026-11-04) */
        #tabs {
            flex-shrink: 0;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 3px;
            margin: 8px 12px 0;
            padding: 3px;
            border-radius: 8px;
            border: 1px solid light-dark(rgba(40, 128, 235, 0.25), rgba(80, 190, 255, 0.3));
            background: light-dark(rgba(255, 255, 255, 0.6), rgba(10, 18, 45, 0.5));
        }
        #tabs button {
            height: 28px;
            border: 0;
            border-radius: 6px;
            background: transparent;
            color: var(--neo-text);
            font: inherit;
            font-size: 12.5px;
            cursor: pointer;
        }
        #tabs button[aria-pressed="true"] {
            background: var(--highlight-pink, #e91e63);
            color: #fff;
            font-weight: 600;
        }
        [hidden] { display: none !important; }`;static ['template']=html`
        <div id="tabs" role="group" aria-label="Gallery source">
            <button type="button" data-tab="project" aria-pressed="false">Project</button>
            <button type="button" data-tab="global" aria-pressed="false">Global</button>
            <button type="button" data-tab="market" aria-pressed="false">Marketplace</button>
        </div>
        <div id="head">gallery</div>
        <div id="grid"><div class="empty">Choose Project, Global or Marketplace above, or a controls folder or a package in the tree.</div></div>
        <iobroker-webui-marketplace id="market" hidden></iobroker-webui-marketplace>`;[s(0x188)];#observer;[s(0x16e)]=0x0;['_openFolders']=new Set();constructor(){const t=s;super(),this['_head']=this['_getDomElement'](t(0x184)),this['_grid']=this[t(0x1b8)]('grid'),this['_market']=this[t(0x1b8)]('market'),this['_tabs']=this[t(0x1b8)]('tabs');for(const c of this['_tabs'][t(0x16c)](t(0x1b1)))c['onclick']=()=>this[t(0x192)](c[t(0x169)][t(0x1cb)]);}['_pressTab'](c){const u=s;for(const e of this[u(0x1ca)][u(0x16c)]('button'))e['setAttribute']('aria-pressed',String(e['dataset'][u(0x1cb)]===c));const d=c==='market';this[u(0x186)]['hidden']=!d,this['_grid'][u(0x168)]=d,this['_head'][u(0x168)]=d;}async[s(0x192)](c){const v=s,d=++this['_seq'];this[v(0x19b)](c);if(c===v(0x1c5)){this[v(0x186)][v(0x16b)]();return;}const e=c===v(0x180);await this['_showControls'](d,e?v(0x1a0):'Project\x20controls',e,'',e?'global':v(0x195));}async['_showControls'](c,d,e,f,g){const w=s,h=await this['_controlLevel'](e,f);if(c!==this['_seq'])return;this['_head'][w(0x16a)]=d+'\x20('+[h['folders'][w(0x1c0)]?h[w(0x176)]['length']+'\x20folders':'',h[w(0x1af)][w(0x1c0)]?h['items']['length']+w(0x1ad):''][w(0x170)](Boolean)['join'](',\x20')+')',this[w(0x199)]();if(!h['folders']['length']&&!h[w(0x1af)][w(0x1c0)]){this[w(0x1d4)][w(0x17b)]='<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>';return;}this['_renderLevel'](h,this[w(0x1d4)],g,e);}async['_controlLevel'](c,f){const x=s,g=f?'/'+String(f)['replace'](/^\/+|\/+$/g,''):undefined;let h=[],i=[];try{[h,i]=c?await Promise['all']([iobrokerHandler[x(0x1bb)]('control',g),iobrokerHandler[x(0x1a1)](x(0x198),g)]):await Promise[x(0x1c2)]([iobrokerHandler[x(0x1bf)](x(0x198),g),iobrokerHandler['getObjectNames']('control',g)]);}catch(l){console[x(0x197)](x(0x1c4),l);}const j=g?g[x(0x1aa)](0x1)+'/':'',k=(m,n)=>String(m)['localeCompare'](String(n));return{'folders':(h??[])[x(0x1be)]()['sort'](k)[x(0x1ce)](m=>({'name':m,'dir':j+m})),'items':(i??[])[x(0x1be)]()[x(0x175)](k)['map'](m=>{const o=j+m,p=getCustomControlName(o);return{'name':m,'tag':p,'elementDef':{'tag':p},'load':async()=>{const y=b;if(customElements['get'](p))return;const q=c?await iobrokerHandler['getGlobalObject']('control',o):await iobrokerHandler['getCustomControl'](o);if(q&&!customElements[y(0x1a2)](p))generateCustomControl(o,q);}};})};}[s(0x1bc)](c,d,e,g){const z=s;for(const h of c['folders']){const i=this['_folderElement'](h['name'],e+'/'+h['dir']),j=i['querySelector']('.folder-body'),k=i[z(0x1b0)](z(0x172));let l=![];const m=async()=>{const A=z;if(l)return;l=!![],j['innerHTML']='<div\x20class=\x22empty\x22>…</div>';const n=await this[A(0x1d7)](g,h[A(0x18e)]);j['innerHTML']='',k[A(0x1ac)]=String(n['folders'][A(0x1c0)]+n[A(0x1af)][A(0x1c0)]);if(!n['folders']['length']&&!n['items']['length'])j['innerHTML']=A(0x179);else this['_renderLevel'](n,j,e,g);};if(i[z(0x1cf)])m();i['addEventListener'](z(0x19c),()=>{const B=z;if(i['open'])this[B(0x19a)]['add'](e+'/'+h[B(0x18e)]),m();else this['_openFolders'][B(0x1a7)](e+'/'+h['dir']);}),d[z(0x17d)](i);}this['_renderCards'](c['items'],d);}[s(0x174)](c,d){const C=s,e=document[C(0x177)]('details');e['className']=C(0x1bd),e[C(0x1cf)]=this['_openFolders']['has'](d);const f=document[C(0x177)](C(0x18d));f['innerHTML']=C(0x1a5)+C(0x1d3);const g=document['createElement'](C(0x1a9));g[C(0x1ae)]='nm',g['textContent']=c;const h=document['createElement'](C(0x1a9));h['className']='ct',f[C(0x1c6)](g,h),e[C(0x17d)](f);const i=document['createElement']('div');return i[C(0x1ae)]=C(0x17f),e['appendChild'](i),e;}async[s(0x196)](c,d){const D=s,f=++this[D(0x16e)];this[D(0x19b)](c?.[D(0x1b4)]===D(0x198)?c[D(0x180)]?'global':'project':null);let g=[];try{if(c['galleryType']==='control')return this[D(0x1b2)](f,d,!!c['global'],c['dir']||'',(c[D(0x180)]?D(0x1d0):D(0x1c1))+(c[D(0x18e)]||''));else{if(c['galleryType']===D(0x1ab)){if(c['single']){const h=String(c[D(0x1b3)])['replace'](/^\//,''),i={'scene-name':h,'scene-type':D(0x1ab)};if(c[D(0x180)])i['scene-scope']=D(0x180);g=[{'name':h[D(0x183)]('/')[D(0x1cd)](),'tag':D(0x1b5),'elementDef':{'tag':D(0x1b5),'defaultAttributes':i,'defaultWidth':D(0x173),'defaultHeight':D(0x189)}}];}}else{if(c['galleryType']===D(0x194)){const j=await c['service'][D(0x1b6)](),k=new Set();for(const l of j){if(!l['tag']||k['has'](l[D(0x19e)]))continue;k['add'](l['tag']),g[D(0x1b9)]({'name':l[D(0x1d2)]??l[D(0x19e)],'tag':l['tag'],'elementDef':l});}}}}}catch(m){console['warn']('gallery:\x20error\x20loading\x20items',m);}if(f!==this['_seq'])return;this[D(0x1c8)](d,g,c?.['galleryType']==='control'?(c['global']?D(0x1d0):'project:')+(c['dir']||''):D(0x194));}['_showItems'](c,d,e=''){const E=s;this[E(0x16d)][E(0x16a)]=c+'\x20('+d[E(0x1c0)]+')',this[E(0x199)]();if(!d['length']){this[E(0x1d4)]['innerHTML']='<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>';return;}this[E(0x18b)](galleryTree(d[E(0x1ce)](f=>f['path']?f:{...f,'path':String(f['name']??'')['replace'](/\//g,'∕')})),this['_grid'],e);}[s(0x199)](){const F=s;this.#observer?.[F(0x1d1)](),this[F(0x1d4)]['innerHTML']='',this.#observer=new IntersectionObserver(c=>{const G=F;for(const d of c){d['isIntersecting']&&!d[G(0x19f)]['_instantiated']&&(d[G(0x19f)][G(0x182)]=!![],this[G(0x1c3)](d['target']),this.#observer[G(0x1b7)](d[G(0x19f)]));}},{'root':this['_grid'],'threshold':0.05});}[s(0x18b)](c,d,e){const H=s;for(const g of c['folders']){const h=e+'/'+g[H(0x167)],i=this[H(0x174)](g[H(0x1d2)],h);i[H(0x1b0)]('.ct')['textContent']=String(g['count']);const j=i['querySelector']('.folder-body');let k=![];const l=()=>{const I=H;!k&&(k=!![],this[I(0x18b)](g,j,e));};if(i['open'])l();i['addEventListener']('toggle',()=>{const J=H;if(i['open'])this[J(0x19a)][J(0x1c7)](h),l();else this[J(0x19a)]['delete'](h);}),d['appendChild'](i);}this[H(0x193)](c['items'],d);}[s(0x193)](c,d){const K=s,e=document['createElement']('div');e[K(0x1ae)]='cards',d[K(0x17d)](e);for(const f of c){const g=document[K(0x177)]('div');g['className']='card',g[K(0x17c)]=f['tag'];const h=document[K(0x177)]('div');h['className']=K(0x1d6),h[K(0x1ac)]=f['name'];const i=document['createElement'](K(0x1a8));i['className']=K(0x191),i[K(0x1cc)]=f,g[K(0x17d)](h),g[K(0x17d)](i),g[K(0x1ba)]=!![],g['ondragstart']=j=>{const L=K;j['dataTransfer'][L(0x18c)](dragDropFormatNameElementDefinition,JSON[L(0x1a3)](f[L(0x1da)])),j['dataTransfer'][L(0x1d9)]='all',j['dataTransfer']['dropEffect']='copy';},g[K(0x1d8)]=()=>{const M=K;try{const j=this[M(0x188)]??window['appShell'][M(0x188)];let k=j[M(0x17e)][M(0x1a2)](f[M(0x1da)][M(0x178)]??NamedTools['DrawElementTool']);if(typeof k==M(0x1db))k=new k(f['elementDef']);j[M(0x1a4)][M(0x178)]=k;}catch(l){}},e['appendChild'](g),this.#observer['observe'](i);}}async['_instantiate'](c){const N=s,d=c['_item'];try{if(d['load'])await d[N(0x181)]();if(!d[N(0x19e)])return;if(d[N(0x19e)]['includes']('-')&&!customElements['get'](d['tag']))return;const f=document['createElement'](d[N(0x19e)]);if(d[N(0x1da)]?.['defaultAttributes'])for(const g in d['elementDef']['defaultAttributes']){try{f['setAttribute'](g,d[N(0x1da)]['defaultAttributes'][g]);}catch(h){}}if(d['elementDef']?.[N(0x18f)])f[N(0x1ac)]=d['elementDef'][N(0x18f)];else{if(!d[N(0x19e)]['includes']('-')&&!f['childNodes']['length'])f['textContent']=d['tag'];}c['appendChild'](f);}catch(i){console['warn']('gallery:\x20could\x20not\x20render',d[N(0x19e)],i);}}}customElements['define']('iobroker-webui-widget-gallery',IobrokerWebuiWidgetGallery);
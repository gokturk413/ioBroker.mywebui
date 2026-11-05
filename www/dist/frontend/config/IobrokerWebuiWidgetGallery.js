function b(c,d){c=c-0x18f;const e=a();let f=e[c];return f;}const s=b;function a(){const O=['_seq','createElement','querySelector','5mavKrF','Global\x20controls','push','button','replace','activate','_renderCards','className','project:','8vfqPUc','items','innerHTML','684xvHMht','\x20controls','_showItems','_grid','1173579hSoKHd','dir','appShell','_tabs','2734GRUfTL','galleryType','13559EoeSLI','ondragstart','target','5803767EvBEJD','_controlLevel','sort','_instantiated','append','showTab','template','getGlobalSubFolders','27292aEQCFP','folders','<div\x20class=\x22empty\x22>…</div>','global:','market','get','<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>','_showControls','open','gallery:\x20error\x20loading\x20items','27554904qsYRNQ','_openFolders','<div\x20class=\x22empty\x22>empty</div>','split','card-title','includes','folder-body','name','project','.folder-body','filter','dataset','stringify','gallery:\x20could\x20not\x20render','_getDomElement','define','_pressTab','warn','scene-scope','\x20folders','defaultAttributes','_folderElement','toggle','delete','npm','859242WrtFpH','querySelectorAll','map','has','_resetGrid','aria-pressed','_instantiate','cards','control','global','elementDef','getCustomControl','title','function','load','appendChild','serviceContainer','innerText','_market','add','<svg\x20class=\x22chev\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222.2\x22\x20aria-hidden=\x22true\x22><path\x20d=\x22m9\x206\x206\x206-6\x206\x22/></svg>','gallery:\x20listing\x20controls','copy','pop','_head','tab','getObjectNames','getGlobalObjectNames','count','282ejXKEk','tag','showForSource','dataTransfer','disconnect','textContent','designerTools','length','iobroker-webui-widget-gallery','span','.ct','Project\x20controls','_renderLevel','110HokVUx','_renderNode','div','hidden','tool','getSubFolders'];a=function(){return O;};return a();}(function(c,d){const r=b,e=c();while(!![]){try{const f=parseInt(r(0x193))/0x1+parseInt(r(0x1da))/0x2*(parseInt(r(0x1b0))/0x3)+parseInt(r(0x1e7))/0x4*(-parseInt(r(0x1c6))/0x5)+-parseInt(r(0x1d2))/0x6*(-parseInt(r(0x1dc))/0x7)+-parseInt(r(0x1cf))/0x8*(-parseInt(r(0x1df))/0x9)+-parseInt(r(0x1bd))/0xa*(-parseInt(r(0x1d6))/0xb)+-parseInt(r(0x1f1))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb0bdf));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';import'./MarketplacePanel.js';import{galleryTree}from'./GalleryTree.js';export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        [hidden] { display: none !important; }`;static [s(0x1e5)]=html`
        <div id="tabs" role="group" aria-label="Gallery source">
            <button type="button" data-tab="project" aria-pressed="false">Project</button>
            <button type="button" data-tab="global" aria-pressed="false">Global</button>
            <button type="button" data-tab="market" aria-pressed="false">Marketplace</button>
        </div>
        <div id="head">gallery</div>
        <div id="grid"><div class="empty">Choose Project, Global or Marketplace above, or a controls folder or a package in the tree.</div></div>
        <iobroker-webui-marketplace id="market" hidden></iobroker-webui-marketplace>`;['serviceContainer'];#observer;[s(0x1c3)]=0x0;[s(0x1f2)]=new Set();constructor(){const t=s;super(),this['_head']=this[t(0x1ff)]('head'),this[t(0x1d5)]=this['_getDomElement']('grid'),this[t(0x1a5)]=this[t(0x1ff)](t(0x1eb)),this[t(0x1d9)]=this['_getDomElement']('tabs');for(const c of this['_tabs'][t(0x194)](t(0x1c9)))c['onclick']=()=>this[t(0x1e4)](c[t(0x1fc)][t(0x1ac)]);}[s(0x201)](c){const u=s;for(const e of this['_tabs'][u(0x194)](u(0x1c9)))e['setAttribute'](u(0x198),String(e[u(0x1fc)]['tab']===c));const d=c===u(0x1eb);this['_market']['hidden']=!d,this[u(0x1d5)]['hidden']=d,this[u(0x1ab)][u(0x1c0)]=d;}async[s(0x1e4)](c){const v=s,d=++this['_seq'];this['_pressTab'](c);if(c===v(0x1eb)){this[v(0x1a5)][v(0x1cb)]();return;}const e=c==='global';await this['_showControls'](d,e?v(0x1c7):v(0x1bb),e,'',e?'global':v(0x1f9));}async['_showControls'](c,d,e,f,g){const w=s,h=await this[w(0x1e0)](e,f);if(c!==this['_seq'])return;this['_head'][w(0x1a4)]=d+'\x20('+[h[w(0x1e8)][w(0x1b7)]?h[w(0x1e8)]['length']+w(0x204):'',h[w(0x1d0)]['length']?h['items']['length']+w(0x1d3):''][w(0x1fb)](Boolean)['join'](',\x20')+')',this[w(0x197)]();if(!h[w(0x1e8)][w(0x1b7)]&&!h['items']['length']){this[w(0x1d5)]['innerHTML']=w(0x1ed);return;}this[w(0x1bc)](h,this['_grid'],g,e);}async[s(0x1e0)](c,f){const x=s,g=f?'/'+String(f)[x(0x1ca)](/^\/+|\/+$/g,''):undefined;let h=[],i=[];try{[h,i]=c?await Promise['all']([iobrokerHandler[x(0x1e6)](x(0x19b),g),iobrokerHandler[x(0x1ae)](x(0x19b),g)]):await Promise['all']([iobrokerHandler[x(0x1c2)](x(0x19b),g),iobrokerHandler[x(0x1ad)]('control',g)]);}catch(l){console[x(0x202)](x(0x1a8),l);}const j=g?g['substring'](0x1)+'/':'',k=(m,n)=>String(m)['localeCompare'](String(n));return{'folders':(h??[])['slice']()['sort'](k)[x(0x195)](m=>({'name':m,'dir':j+m})),'items':(i??[])['slice']()[x(0x1e1)](k)['map'](m=>{const o=j+m,p=getCustomControlName(o);return{'name':m,'tag':p,'elementDef':{'tag':p},'load':async()=>{const y=b;if(customElements[y(0x1ec)](p))return;const q=c?await iobrokerHandler['getGlobalObject']('control',o):await iobrokerHandler[y(0x19e)](o);if(q&&!customElements[y(0x1ec)](p))generateCustomControl(o,q);}};})};}[s(0x1bc)](c,d,e,g){const z=s;for(const h of c['folders']){const i=this[z(0x18f)](h[z(0x1f8)],e+'/'+h[z(0x1d7)]),j=i['querySelector'](z(0x1fa)),k=i['querySelector'](z(0x1ba));let l=![];const m=async()=>{const A=z;if(l)return;l=!![],j['innerHTML']=A(0x1e9);const n=await this['_controlLevel'](g,h[A(0x1d7)]);j['innerHTML']='',k['textContent']=String(n['folders'][A(0x1b7)]+n['items']['length']);if(!n[A(0x1e8)][A(0x1b7)]&&!n[A(0x1d0)]['length'])j['innerHTML']=A(0x1f3);else this[A(0x1bc)](n,j,e,g);};if(i['open'])m();i['addEventListener'](z(0x190),()=>{const B=z;if(i['open'])this['_openFolders'][B(0x1a6)](e+'/'+h['dir']),m();else this[B(0x1f2)][B(0x191)](e+'/'+h[B(0x1d7)]);}),d['appendChild'](i);}this[z(0x1cc)](c['items'],d);}[s(0x18f)](c,d){const C=s,e=document['createElement']('details');e['className']='folder',e[C(0x1ef)]=this['_openFolders'][C(0x196)](d);const f=document['createElement']('summary');f[C(0x1d1)]=C(0x1a7)+'<svg\x20class=\x22ico\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x221.8\x22\x20aria-hidden=\x22true\x22><path\x20d=\x22M3\x207a2\x202\x200\x200\x201\x202-2h4l2\x202h8a2\x202\x200\x200\x201\x202\x202v8a2\x202\x200\x200\x201-2\x202H5a2\x202\x200\x200\x201-2-2z\x22/></svg>';const g=document['createElement'](C(0x1b9));g['className']='nm',g['textContent']=c;const h=document['createElement'](C(0x1b9));h[C(0x1cd)]='ct',f[C(0x1e3)](g,h),e['appendChild'](f);const i=document['createElement']('div');return i['className']=C(0x1f7),e[C(0x1a2)](i),e;}async[s(0x1b2)](c,d){const D=s,f=++this[D(0x1c3)];this[D(0x201)](c?.[D(0x1db)]==='control'?c[D(0x19c)]?D(0x19c):D(0x1f9):null);let g=[];try{if(c['galleryType']==='control')return this[D(0x1ee)](f,d,!!c['global'],c['dir']||'',(c[D(0x19c)]?'global:':D(0x1ce))+(c[D(0x1d7)]||''));else{if(c[D(0x1db)]==='3dcontrol'){if(c['single']){const h=String(c['single'])[D(0x1ca)](/^\//,''),i={'scene-name':h,'scene-type':'3dcontrol'};if(c[D(0x19c)])i[D(0x203)]='global';g=[{'name':h[D(0x1f4)]('/')[D(0x1aa)](),'tag':'iobroker-webui-3dscreen-viewer','elementDef':{'tag':'iobroker-webui-3dscreen-viewer','defaultAttributes':i,'defaultWidth':'400px','defaultHeight':'300px'}}];}}else{if(c['galleryType']===D(0x192)){const j=await c['service']['getElements'](),k=new Set();for(const l of j){if(!l[D(0x1b1)]||k[D(0x196)](l[D(0x1b1)]))continue;k['add'](l['tag']),g[D(0x1c8)]({'name':l['name']??l['tag'],'tag':l[D(0x1b1)],'elementDef':l});}}}}}catch(m){console['warn'](D(0x1f0),m);}if(f!==this[D(0x1c3)])return;this[D(0x1d4)](d,g,c?.[D(0x1db)]==='control'?(c['global']?D(0x1ea):'project:')+(c['dir']||''):D(0x192));}['_showItems'](c,d,e=''){const E=s;this[E(0x1ab)]['innerText']=c+'\x20('+d[E(0x1b7)]+')',this['_resetGrid']();if(!d[E(0x1b7)]){this[E(0x1d5)][E(0x1d1)]=E(0x1ed);return;}this['_renderNode'](galleryTree(d['map'](f=>f['path']?f:{...f,'path':String(f[E(0x1f8)]??'')[E(0x1ca)](/\//g,'∕')})),this[E(0x1d5)],e);}['_resetGrid'](){const F=s;this.#observer?.[F(0x1b4)](),this['_grid'][F(0x1d1)]='',this.#observer=new IntersectionObserver(c=>{const G=F;for(const d of c){d['isIntersecting']&&!d[G(0x1de)][G(0x1e2)]&&(d[G(0x1de)]['_instantiated']=!![],this['_instantiate'](d['target']),this.#observer['unobserve'](d[G(0x1de)]));}},{'root':this[F(0x1d5)],'threshold':0.05});}[s(0x1be)](c,d,e){const H=s;for(const g of c['folders']){const h=e+'/'+g['path'],i=this[H(0x18f)](g[H(0x1f8)],h);i[H(0x1c5)](H(0x1ba))[H(0x1b5)]=String(g[H(0x1af)]);const j=i['querySelector']('.folder-body');let k=![];const l=()=>{const I=H;!k&&(k=!![],this[I(0x1be)](g,j,e));};if(i['open'])l();i['addEventListener']('toggle',()=>{const J=H;if(i['open'])this[J(0x1f2)]['add'](h),l();else this['_openFolders']['delete'](h);}),d[H(0x1a2)](i);}this[H(0x1cc)](c['items'],d);}[s(0x1cc)](c,d){const K=s,e=document['createElement'](K(0x1bf));e[K(0x1cd)]=K(0x19a),d['appendChild'](e);for(const f of c){const g=document['createElement']('div');g['className']='card',g[K(0x19f)]=f[K(0x1b1)];const h=document[K(0x1c4)](K(0x1bf));h[K(0x1cd)]=K(0x1f5),h['textContent']=f[K(0x1f8)];const i=document['createElement'](K(0x1bf));i['className']='card-preview',i['_item']=f,g['appendChild'](h),g[K(0x1a2)](i),g['draggable']=!![],g[K(0x1dd)]=j=>{const L=K;j[L(0x1b3)]['setData'](dragDropFormatNameElementDefinition,JSON[L(0x1fd)](f[L(0x19d)])),j['dataTransfer']['effectAllowed']='all',j['dataTransfer']['dropEffect']=L(0x1a9);},g['onclick']=()=>{const M=K;try{const j=this[M(0x1a3)]??window[M(0x1d8)][M(0x1a3)];let k=j[M(0x1b6)]['get'](f[M(0x19d)][M(0x1c1)]??NamedTools['DrawElementTool']);if(typeof k==M(0x1a0))k=new k(f[M(0x19d)]);j['globalContext']['tool']=k;}catch(l){}},e[K(0x1a2)](g),this.#observer['observe'](i);}}async[s(0x199)](c){const N=s,d=c['_item'];try{if(d[N(0x1a1)])await d['load']();if(!d[N(0x1b1)])return;if(d[N(0x1b1)][N(0x1f6)]('-')&&!customElements['get'](d[N(0x1b1)]))return;const f=document['createElement'](d['tag']);if(d['elementDef']?.[N(0x205)])for(const g in d[N(0x19d)]['defaultAttributes']){try{f['setAttribute'](g,d['elementDef']['defaultAttributes'][g]);}catch(h){}}if(d[N(0x19d)]?.['defaultContent'])f['textContent']=d['elementDef']['defaultContent'];else{if(!d['tag']['includes']('-')&&!f['childNodes'][N(0x1b7)])f[N(0x1b5)]=d['tag'];}c['appendChild'](f);}catch(i){console[N(0x202)](N(0x1fe),d['tag'],i);}}}customElements[s(0x200)](s(0x1b8),IobrokerWebuiWidgetGallery);
const s=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=parseInt(r(0x1c7))/0x1+parseInt(r(0x1d3))/0x2+-parseInt(r(0x16e))/0x3*(parseInt(r(0x1a0))/0x4)+parseInt(r(0x194))/0x5+-parseInt(r(0x199))/0x6*(parseInt(r(0x16d))/0x7)+-parseInt(r(0x179))/0x8+parseInt(r(0x1c9))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x43a26));function b(c,d){c=c-0x169;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';function a(){const O=['203304NCzHJQ','toggle','galleryType','includes','createElement','3437DGrVaf','21gmczsm','elementDef','gallery:\x20could\x20not\x20render','_seq','_showControls','appendChild','getElements','300px','get','appShell','_renderNode','3509216jmwKuq','button','scene-scope','getObjectNames','_tabs','substring','_grid','_head','push','cards','tag','effectAllowed','card-preview','title','<svg\x20class=\x22ico\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x221.8\x22\x20aria-hidden=\x22true\x22><path\x20d=\x22M3\x207a2\x202\x200\x200\x201\x202-2h4l2\x202h8a2\x202\x200\x200\x201\x202\x202v8a2\x202\x200\x200\x201-2\x202H5a2\x202\x200\x200\x201-2-2z\x22/></svg>','load','items','_item','sort','market','global:','onclick','observe','path','3dcontrol','div','warn','1473750rBQZRw','_showItems','iobroker-webui-3dscreen-viewer','global','_market','3918WeMlMe','getGlobalObject','Global\x20controls','single','folders','_renderLevel','stringify','53248OkvbGK','map','name','gallery:\x20listing\x20controls','addEventListener','_folderElement','summary','card','project:','querySelector','project','target','disconnect','all','npm','isIntersecting','folder-body','.folder-body','tabs','defaultAttributes','textContent','_openFolders','folder','dir','append','childNodes','className','length','<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>','slice','innerHTML','control','getSubFolders','tool','style','gallery:\x20error\x20loading\x20items','open','replace','hidden','320320gaaGLx','dataTransfer','3714903RncMbA','_instantiate','defaultContent','<svg\x20class=\x22chev\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222.2\x22\x20aria-hidden=\x22true\x22><path\x20d=\x22m9\x206\x206\x206-6\x206\x22/></svg>','copy','querySelectorAll','innerText','_controlLevel','define','span'];a=function(){return O;};return a();}import{iobrokerHandler}from'../common/IobrokerHandler.js';import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';import'./MarketplacePanel.js';import{galleryTree}from'./GalleryTree.js';export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static [s(0x1c2)]=css`
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
        <iobroker-webui-marketplace id="market" hidden></iobroker-webui-marketplace>`;['serviceContainer'];#observer;[s(0x171)]=0x0;['_openFolders']=new Set();constructor(){const t=s;super(),this['_head']=this['_getDomElement']('head'),this['_grid']=this['_getDomElement']('grid'),this[t(0x198)]=this['_getDomElement'](t(0x18c)),this[t(0x17d)]=this['_getDomElement'](t(0x1b2));for(const c of this[t(0x17d)][t(0x1ce)]('button'))c[t(0x18e)]=()=>this['showTab'](c['dataset']['tab']);}['_pressTab'](c){const u=s;for(const e of this['_tabs'][u(0x1ce)](u(0x17a)))e['setAttribute']('aria-pressed',String(e['dataset']['tab']===c));const d=c===u(0x18c);this['_market']['hidden']=!d,this['_grid'][u(0x1c6)]=d,this['_head'][u(0x1c6)]=d;}async['showTab'](c){const v=s,d=++this['_seq'];this['_pressTab'](c);if(c==='market'){this[v(0x198)]['activate']();return;}const e=c===v(0x197);await this[v(0x172)](d,e?v(0x19b):'Project\x20controls',e,'',e?v(0x197):'project');}async['_showControls'](c,d,e,f,g){const w=s,h=await this['_controlLevel'](e,f);if(c!==this[w(0x171)])return;this[w(0x180)][w(0x1cf)]=d+'\x20('+[h[w(0x19d)]['length']?h[w(0x19d)]['length']+'\x20folders':'',h['items']['length']?h['items']['length']+'\x20controls':'']['filter'](Boolean)['join'](',\x20')+')',this['_resetGrid']();if(!h['folders']['length']&&!h[w(0x189)]['length']){this[w(0x17f)][w(0x1be)]=w(0x1bc);return;}this[w(0x19e)](h,this[w(0x17f)],g,e);}async[s(0x1d0)](c,f){const x=s,g=f?'/'+String(f)[x(0x1c5)](/^\/+|\/+$/g,''):undefined;let h=[],i=[];try{[h,i]=c?await Promise['all']([iobrokerHandler['getGlobalSubFolders']('control',g),iobrokerHandler['getGlobalObjectNames'](x(0x1bf),g)]):await Promise['all']([iobrokerHandler[x(0x1c0)]('control',g),iobrokerHandler[x(0x17c)]('control',g)]);}catch(l){console[x(0x193)](x(0x1a3),l);}const j=g?g[x(0x17e)](0x1)+'/':'',k=(m,n)=>String(m)['localeCompare'](String(n));return{'folders':(h??[])[x(0x1bd)]()[x(0x18b)](k)[x(0x1a1)](m=>({'name':m,'dir':j+m})),'items':(i??[])['slice']()[x(0x18b)](k)['map'](m=>{const o=j+m,p=getCustomControlName(o);return{'name':m,'tag':p,'elementDef':{'tag':p},'load':async()=>{const y=b;if(customElements['get'](p))return;const q=c?await iobrokerHandler[y(0x19a)](y(0x1bf),o):await iobrokerHandler['getCustomControl'](o);if(q&&!customElements['get'](p))generateCustomControl(o,q);}};})};}[s(0x19e)](c,d,e,g){const z=s;for(const h of c[z(0x19d)]){const i=this['_folderElement'](h['name'],e+'/'+h[z(0x1b7)]),j=i['querySelector'](z(0x1b1)),k=i[z(0x1a9)]('.ct');let l=![];const m=async()=>{const A=z;if(l)return;l=!![],j['innerHTML']='<div\x20class=\x22empty\x22>…</div>';const n=await this[A(0x1d0)](g,h[A(0x1b7)]);j[A(0x1be)]='',k[A(0x1b4)]=String(n[A(0x19d)]['length']+n['items']['length']);if(!n['folders'][A(0x1bb)]&&!n['items']['length'])j[A(0x1be)]='<div\x20class=\x22empty\x22>empty</div>';else this[A(0x19e)](n,j,e,g);};if(i[z(0x1c4)])m();i[z(0x1a4)](z(0x169),()=>{const B=z;if(i[B(0x1c4)])this[B(0x1b5)]['add'](e+'/'+h[B(0x1b7)]),m();else this['_openFolders']['delete'](e+'/'+h['dir']);}),d['appendChild'](i);}this['_renderCards'](c['items'],d);}['_folderElement'](c,d){const C=s,e=document[C(0x16c)]('details');e['className']=C(0x1b6),e[C(0x1c4)]=this[C(0x1b5)]['has'](d);const f=document[C(0x16c)](C(0x1a6));f['innerHTML']=C(0x1cc)+C(0x187);const g=document['createElement']('span');g[C(0x1ba)]='nm',g['textContent']=c;const h=document[C(0x16c)](C(0x1d2));h['className']='ct',f[C(0x1b8)](g,h),e['appendChild'](f);const i=document['createElement'](C(0x192));return i[C(0x1ba)]=C(0x1b0),e['appendChild'](i),e;}async['showForSource'](c,d){const D=s,f=++this['_seq'];this['_pressTab'](c?.['galleryType']==='control'?c[D(0x197)]?'global':D(0x1aa):null);let g=[];try{if(c[D(0x16a)]===D(0x1bf))return this['_showControls'](f,d,!!c[D(0x197)],c['dir']||'',(c['global']?D(0x18d):D(0x1a8))+(c['dir']||''));else{if(c[D(0x16a)]===D(0x191)){if(c['single']){const h=String(c[D(0x19c)])['replace'](/^\//,''),i={'scene-name':h,'scene-type':D(0x191)};if(c['global'])i[D(0x17b)]=D(0x197);g=[{'name':h['split']('/')['pop'](),'tag':D(0x196),'elementDef':{'tag':'iobroker-webui-3dscreen-viewer','defaultAttributes':i,'defaultWidth':'400px','defaultHeight':D(0x175)}}];}}else{if(c[D(0x16a)]===D(0x1ae)){const j=await c['service'][D(0x174)](),k=new Set();for(const l of j){if(!l[D(0x183)]||k['has'](l['tag']))continue;k['add'](l[D(0x183)]),g[D(0x181)]({'name':l[D(0x1a2)]??l[D(0x183)],'tag':l[D(0x183)],'elementDef':l});}}}}}catch(m){console[D(0x193)](D(0x1c3),m);}if(f!==this['_seq'])return;this['_showItems'](d,g,c?.[D(0x16a)]==='control'?(c['global']?D(0x18d):D(0x1a8))+(c['dir']||''):D(0x1ae));}[s(0x195)](c,d,e=''){const E=s;this[E(0x180)][E(0x1cf)]=c+'\x20('+d['length']+')',this['_resetGrid']();if(!d[E(0x1bb)]){this['_grid'][E(0x1be)]='<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>';return;}this['_renderNode'](galleryTree(d['map'](f=>f[E(0x190)]?f:{...f,'path':String(f['name']??'')[E(0x1c5)](/\//g,'∕')})),this['_grid'],e);}['_resetGrid'](){const F=s;this.#observer?.[F(0x1ac)](),this[F(0x17f)][F(0x1be)]='',this.#observer=new IntersectionObserver(c=>{const G=F;for(const d of c){d[G(0x1af)]&&!d['target']['_instantiated']&&(d[G(0x1ab)]['_instantiated']=!![],this['_instantiate'](d['target']),this.#observer['unobserve'](d['target']));}},{'root':this['_grid'],'threshold':0.05});}['_renderNode'](c,d,e){const H=s;for(const g of c[H(0x19d)]){const h=e+'/'+g[H(0x190)],i=this[H(0x1a5)](g[H(0x1a2)],h);i['querySelector']('.ct')['textContent']=String(g['count']);const j=i['querySelector'](H(0x1b1));let k=![];const l=()=>{const I=H;!k&&(k=!![],this[I(0x178)](g,j,e));};if(i[H(0x1c4)])l();i[H(0x1a4)](H(0x169),()=>{const J=H;if(i['open'])this[J(0x1b5)]['add'](h),l();else this['_openFolders']['delete'](h);}),d['appendChild'](i);}this['_renderCards'](c[H(0x189)],d);}['_renderCards'](c,d){const K=s,e=document[K(0x16c)]('div');e[K(0x1ba)]=K(0x182),d['appendChild'](e);for(const f of c){const g=document[K(0x16c)](K(0x192));g[K(0x1ba)]=K(0x1a7),g[K(0x186)]=f[K(0x183)];const h=document['createElement'](K(0x192));h[K(0x1ba)]='card-title',h['textContent']=f[K(0x1a2)];const i=document[K(0x16c)]('div');i['className']=K(0x185),i['_item']=f,g[K(0x173)](h),g[K(0x173)](i),g['draggable']=!![],g['ondragstart']=j=>{const L=K;j['dataTransfer']['setData'](dragDropFormatNameElementDefinition,JSON[L(0x19f)](f[L(0x16f)])),j[L(0x1c8)][L(0x184)]=L(0x1ad),j[L(0x1c8)]['dropEffect']=L(0x1cd);},g[K(0x18e)]=()=>{const M=K;try{const j=this['serviceContainer']??window[M(0x177)]['serviceContainer'];let k=j['designerTools'][M(0x176)](f[M(0x16f)][M(0x1c1)]??NamedTools['DrawElementTool']);if(typeof k=='function')k=new k(f['elementDef']);j['globalContext']['tool']=k;}catch(l){}},e['appendChild'](g),this.#observer[K(0x18f)](i);}}async[s(0x1ca)](c){const N=s,d=c[N(0x18a)];try{if(d[N(0x188)])await d[N(0x188)]();if(!d[N(0x183)])return;if(d[N(0x183)][N(0x16b)]('-')&&!customElements[N(0x176)](d[N(0x183)]))return;const f=document[N(0x16c)](d[N(0x183)]);if(d[N(0x16f)]?.['defaultAttributes'])for(const g in d[N(0x16f)]['defaultAttributes']){try{f['setAttribute'](g,d['elementDef'][N(0x1b3)][g]);}catch(h){}}if(d['elementDef']?.[N(0x1cb)])f[N(0x1b4)]=d[N(0x16f)]['defaultContent'];else{if(!d[N(0x183)][N(0x16b)]('-')&&!f[N(0x1b9)]['length'])f[N(0x1b4)]=d[N(0x183)];}c[N(0x173)](f);}catch(i){console['warn'](N(0x170),d['tag'],i);}}}customElements[s(0x1d1)]('iobroker-webui-widget-gallery',IobrokerWebuiWidgetGallery);
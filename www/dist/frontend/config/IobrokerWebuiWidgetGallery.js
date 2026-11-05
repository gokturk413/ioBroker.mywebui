function b(c,d){c=c-0xd6;const e=a();let f=e[c];return f;}const s=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=parseInt(r(0x10d))/0x1*(parseInt(r(0xdf))/0x2)+-parseInt(r(0x11f))/0x3+-parseInt(r(0xe3))/0x4*(parseInt(r(0x11d))/0x5)+parseInt(r(0x136))/0x6+-parseInt(r(0xf2))/0x7+parseInt(r(0xd8))/0x8+-parseInt(r(0x117))/0x9*(parseInt(r(0x12d))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x18de6));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';import'./MarketplacePanel.js';import{galleryTree}from'./GalleryTree.js';function a(){const N=['tool','.folder-body','appShell','items','getElements','innerHTML','count','10gqGMbw','className','_folderElement','getGlobalObjectNames','dir','name','control','warn','ondragstart','1137240JdQacY','get','defaultAttributes','all','gallery:\x20could\x20not\x20render','_resetGrid','tab','map','_market','defaultContent','tag','aria-pressed','localeCompare','_seq','scene-scope','_renderLevel','target','global','_tabs','_renderCards','66808IcPPKB','elementDef','appendChild','3dcontrol','hidden','childNodes','length','2ISXEMT','_grid','head','effectAllowed','6516lxZiDN','dropEffect','_renderNode','folders','serviceContainer','textContent','querySelector','card-preview','createElement','activate','_getDomElement','_openFolders','_item','observe','slice','782271iosJDR','_showItems','globalContext','path','open','setAttribute','<div\x20class=\x22empty\x22>empty</div>','_showControls','sort','global:','getSubFolders','galleryType','includes','card','npm','project','<svg\x20class=\x22chev\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222.2\x22\x20aria-hidden=\x22true\x22><path\x20d=\x22m9\x206\x206\x206-6\x206\x22/></svg>','<svg\x20class=\x22ico\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x221.8\x22\x20aria-hidden=\x22true\x22><path\x20d=\x22M3\x207a2\x202\x200\x200\x201\x202-2h4l2\x202h8a2\x202\x200\x200\x201\x202\x202v8a2\x202\x200\x200\x201-2\x202H5a2\x202\x200\x200\x201-2-2z\x22/></svg>','stringify','Global\x20controls','\x20controls','addEventListener','_controlLevel','button','setData','_head','querySelectorAll','118581nPDcgD','_pressTab','toggle','dataset','300px','div','innerText','replace','add','grid','113121PqIPbw','_instantiate','iobroker-webui-3dscreen-viewer','dataTransfer','getGlobalObject','<div\x20class=\x22empty\x22>…</div>','70qZQMTc','_instantiated','202446BeTSAv','market','span','tabs','delete','load','folder-body'];a=function(){return N;};return a();}export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        <iobroker-webui-marketplace id="market" hidden></iobroker-webui-marketplace>`;[s(0xe7)];#observer;['_seq']=0x0;[s(0xee)]=new Set();constructor(){const t=s;super(),this[t(0x10b)]=this[t(0xed)](t(0xe1)),this[t(0xe0)]=this['_getDomElement'](t(0x116)),this[t(0x13e)]=this['_getDomElement']('market'),this[t(0xd6)]=this[t(0xed)](t(0x122));for(const c of this['_tabs'][t(0x10c)](t(0x109)))c['onclick']=()=>this['showTab'](c['dataset']['tab']);}['_pressTab'](c){const u=s;for(const e of this['_tabs']['querySelectorAll']('button'))e[u(0xf7)](u(0x141),String(e[u(0x110)][u(0x13c)]===c));const d=c===u(0x120);this[u(0x13e)][u(0xdc)]=!d,this[u(0xe0)]['hidden']=d,this['_head']['hidden']=d;}async['showTab'](c){const v=s,d=++this[v(0x143)];this['_pressTab'](c);if(c===v(0x120)){this[v(0x13e)][v(0xec)]();return;}const e=c==='global';await this['_showControls'](d,e?v(0x105):'Project\x20controls',e,'',e?'global':'project');}async[s(0xf9)](c,d,e,f,g){const w=s,h=await this[w(0x108)](e,f);if(c!==this['_seq'])return;this[w(0x10b)]['innerText']=d+'\x20('+[h[w(0xe6)][w(0xde)]?h[w(0xe6)]['length']+'\x20folders':'',h['items']['length']?h[w(0x129)]['length']+w(0x106):'']['filter'](Boolean)['join'](',\x20')+')',this['_resetGrid']();if(!h[w(0xe6)]['length']&&!h[w(0x129)][w(0xde)]){this['_grid']['innerHTML']='<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>';return;}this[w(0x145)](h,this['_grid'],g,e);}async[s(0x108)](c,f){const x=s,g=f?'/'+String(f)[x(0x114)](/^\/+|\/+$/g,''):undefined;let h=[],i=[];try{[h,i]=c?await Promise['all']([iobrokerHandler['getGlobalSubFolders'](x(0x133),g),iobrokerHandler[x(0x130)](x(0x133),g)]):await Promise[x(0x139)]([iobrokerHandler[x(0xfc)]('control',g),iobrokerHandler['getObjectNames'](x(0x133),g)]);}catch(l){console['warn']('gallery:\x20listing\x20controls',l);}const j=g?g['substring'](0x1)+'/':'',k=(m,n)=>String(m)[x(0x142)](String(n));return{'folders':(h??[])[x(0xf1)]()['sort'](k)[x(0x13d)](m=>({'name':m,'dir':j+m})),'items':(i??[])[x(0xf1)]()[x(0xfa)](k)['map'](m=>{const o=j+m,p=getCustomControlName(o);return{'name':m,'tag':p,'elementDef':{'tag':p},'load':async()=>{const y=b;if(customElements[y(0x137)](p))return;const q=c?await iobrokerHandler[y(0x11b)]('control',o):await iobrokerHandler['getCustomControl'](o);if(q&&!customElements['get'](p))generateCustomControl(o,q);}};})};}[s(0x145)](c,d,e,g){const z=s;for(const h of c[z(0xe6)]){const i=this['_folderElement'](h['name'],e+'/'+h['dir']),j=i['querySelector'](z(0x127)),k=i['querySelector']('.ct');let l=![];const m=async()=>{const A=z;if(l)return;l=!![],j['innerHTML']=A(0x11c);const n=await this[A(0x108)](g,h[A(0x131)]);j[A(0x12b)]='',k[A(0xe8)]=String(n['folders']['length']+n[A(0x129)][A(0xde)]);if(!n['folders']['length']&&!n['items'][A(0xde)])j['innerHTML']=A(0xf8);else this[A(0x145)](n,j,e,g);};if(i[z(0xf6)])m();i[z(0x107)](z(0x10f),()=>{const B=z;if(i['open'])this[B(0xee)][B(0x115)](e+'/'+h[B(0x131)]),m();else this['_openFolders'][B(0x123)](e+'/'+h['dir']);}),d[z(0xda)](i);}this['_renderCards'](c['items'],d);}[s(0x12f)](c,d){const C=s,e=document[C(0xeb)]('details');e['className']='folder',e['open']=this[C(0xee)]['has'](d);const f=document['createElement']('summary');f[C(0x12b)]=C(0x102)+C(0x103);const g=document[C(0xeb)]('span');g['className']='nm',g['textContent']=c;const h=document['createElement'](C(0x121));h['className']='ct',f['append'](g,h),e[C(0xda)](f);const i=document['createElement']('div');return i[C(0x12e)]=C(0x125),e['appendChild'](i),e;}async['showForSource'](c,d){const D=s,f=++this[D(0x143)];this[D(0x10e)](c?.[D(0xfd)]===D(0x133)?c[D(0x147)]?'global':D(0x101):null);let g=[];try{if(c['galleryType']==='control')return this['_showControls'](f,d,!!c['global'],c['dir']||'',(c[D(0x147)]?D(0xfb):'project:')+(c[D(0x131)]||''));else{if(c['galleryType']===D(0xdb)){if(c['single']){const h=String(c['single'])[D(0x114)](/^\//,''),i={'scene-name':h,'scene-type':D(0xdb)};if(c['global'])i[D(0x144)]=D(0x147);g=[{'name':h['split']('/')['pop'](),'tag':D(0x119),'elementDef':{'tag':'iobroker-webui-3dscreen-viewer','defaultAttributes':i,'defaultWidth':'400px','defaultHeight':D(0x111)}}];}}else{if(c[D(0xfd)]==='npm'){const j=await c['service'][D(0x12a)](),k=new Set();for(const l of j){if(!l['tag']||k['has'](l[D(0x140)]))continue;k[D(0x115)](l[D(0x140)]),g['push']({'name':l[D(0x132)]??l['tag'],'tag':l['tag'],'elementDef':l});}}}}}catch(m){console[D(0x134)]('gallery:\x20error\x20loading\x20items',m);}if(f!==this[D(0x143)])return;this[D(0xf3)](d,g,c?.[D(0xfd)]===D(0x133)?(c['global']?D(0xfb):'project:')+(c[D(0x131)]||''):D(0x100));}[s(0xf3)](c,d,e=''){const E=s;this[E(0x10b)][E(0x113)]=c+'\x20('+d['length']+')',this['_resetGrid']();if(!d[E(0xde)]){this['_grid'][E(0x12b)]='<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>';return;}this['_renderNode'](galleryTree(d[E(0x13d)](f=>f[E(0xf5)]?f:{...f,'path':String(f['name']??'')[E(0x114)](/\//g,'∕')})),this['_grid'],e);}[s(0x13b)](){this.#observer?.['disconnect'](),this['_grid']['innerHTML']='',this.#observer=new IntersectionObserver(c=>{const F=b;for(const d of c){d['isIntersecting']&&!d[F(0x146)][F(0x11e)]&&(d['target']['_instantiated']=!![],this['_instantiate'](d['target']),this.#observer['unobserve'](d['target']));}},{'root':this['_grid'],'threshold':0.05});}['_renderNode'](c,d,e){const G=s;for(const g of c[G(0xe6)]){const h=e+'/'+g['path'],i=this['_folderElement'](g['name'],h);i[G(0xe9)]('.ct')['textContent']=String(g[G(0x12c)]);const j=i['querySelector']('.folder-body');let k=![];const l=()=>{const H=G;!k&&(k=!![],this[H(0xe5)](g,j,e));};if(i[G(0xf6)])l();i['addEventListener'](G(0x10f),()=>{const I=G;if(i[I(0xf6)])this['_openFolders']['add'](h),l();else this['_openFolders']['delete'](h);}),d['appendChild'](i);}this[G(0xd7)](c[G(0x129)],d);}['_renderCards'](c,d){const J=s,e=document[J(0xeb)]('div');e['className']='cards',d['appendChild'](e);for(const f of c){const g=document['createElement'](J(0x112));g['className']=J(0xff),g['title']=f[J(0x140)];const h=document[J(0xeb)]('div');h[J(0x12e)]='card-title',h['textContent']=f['name'];const i=document['createElement'](J(0x112));i[J(0x12e)]=J(0xea),i['_item']=f,g[J(0xda)](h),g[J(0xda)](i),g['draggable']=!![],g[J(0x135)]=j=>{const K=J;j['dataTransfer'][K(0x10a)](dragDropFormatNameElementDefinition,JSON[K(0x104)](f['elementDef'])),j[K(0x11a)][K(0xe2)]=K(0x139),j[K(0x11a)][K(0xe4)]='copy';},g['onclick']=()=>{const L=J;try{const j=this[L(0xe7)]??window[L(0x128)][L(0xe7)];let k=j['designerTools']['get'](f[L(0xd9)][L(0x126)]??NamedTools['DrawElementTool']);if(typeof k=='function')k=new k(f[L(0xd9)]);j[L(0xf4)][L(0x126)]=k;}catch(l){}},e['appendChild'](g),this.#observer[J(0xf0)](i);}}async[s(0x118)](c){const M=s,d=c[M(0xef)];try{if(d['load'])await d[M(0x124)]();if(!d[M(0x140)])return;if(d['tag']['includes']('-')&&!customElements['get'](d[M(0x140)]))return;const f=document[M(0xeb)](d[M(0x140)]);if(d['elementDef']?.[M(0x138)])for(const g in d['elementDef']['defaultAttributes']){try{f[M(0xf7)](g,d['elementDef']['defaultAttributes'][g]);}catch(h){}}if(d['elementDef']?.[M(0x13f)])f[M(0xe8)]=d[M(0xd9)][M(0x13f)];else{if(!d[M(0x140)][M(0xfe)]('-')&&!f[M(0xdd)][M(0xde)])f[M(0xe8)]=d[M(0x140)];}c[M(0xda)](f);}catch(i){console['warn'](M(0x13a),d[M(0x140)],i);}}}customElements['define']('iobroker-webui-widget-gallery',IobrokerWebuiWidgetGallery);
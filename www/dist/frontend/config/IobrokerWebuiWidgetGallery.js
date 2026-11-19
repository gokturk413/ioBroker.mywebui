const s=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=-parseInt(r(0x175))/0x1+-parseInt(r(0x176))/0x2*(parseInt(r(0x14a))/0x3)+parseInt(r(0x166))/0x4*(parseInt(r(0xdb))/0x5)+-parseInt(r(0xda))/0x6*(parseInt(r(0x108))/0x7)+parseInt(r(0x102))/0x8+-parseInt(r(0x130))/0x9+-parseInt(r(0xde))/0xa*(-parseInt(r(0x16f))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6821a));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{ContextMenu,dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';function b(c,d){c=c-0xd6;const e=a();let f=e[c];return f;}function a(){const Y=['_showSymbolCode','function','1723515Chgthk','tag','has','get','\x20symbols)','alt','_renderNode','card-preview','catch','all','addEventListener','grid','_market','_folderElement','elementDef','npm','_tabs','Global\x20controls','style','querySelector','showTab','iobroker-webui-3dscreen-viewer','symbols/','control','_getDomElement','writeText','toggle','includes','12ZnDImA','\x20controls','replace','map','data','symbolCodeName','tabs','remove','_symbolItem','512809PcGRgc','stopPropagation','appendChild','name','.folder-body','copy','549355pRDotp','2dSxsJe','preview','setAttribute','<svg\x20class=\x22ico\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x221.8\x22\x20aria-hidden=\x22true\x22><path\x20d=\x22M3\x207a2\x202\x200\x200\x201\x202-2h4l2\x202h8a2\x202\x200\x200\x201\x202\x202v8a2\x202\x200\x200\x201-2\x202H5a2\x202\x200\x200\x201-2-2z\x22/></svg>','summary','dataTransfer','.ct','169854UjXLeR','1325410mXUVwO','_updateCounts','add','260nNGAhV','<div\x20class=\x22empty\x22>no\x20symbols\x20yet:\x20upload\x20SVG\x20files</div>','activate','tool','\x27?\x20Screens\x20that\x20already\x20use\x20it\x20keep\x20their\x20copy.','push','getAllNames','serviceContainer','_renderCards','clipboard','_seq','Upload\x20SVG…','length','single','symbols','observe','_renderLevel','_showControls','join','dir','slice','appShell','symbolCodeCopy','unobserve','Marketplace\x20packages\x20(by\x20GitHub\x20owner)','Delete\x20from\x20the\x20global\x20symbols','trim','message','tab','added','warn','global','cannot\x20read\x20this\x20category:\x20','upload\x20failed:\x20','_countsBusy','onclick','3377208wzxunK','title','showModal','pop','text','400px','189vjMxvd','project:','gallery:\x20error\x20loading\x20items','_head','global:','dataset','Project\x20controls','_uploadSymbols','template','symbolCodeClose','split','target','_controlLevel','open','card','3dcontrol','effectAllowed','textContent','symbol','getSubFolders','service','<div\x20class=\x22empty\x22>…</div>','Show\x20SVG\x20code','market','\x20categories,\x20','aria-pressed','_pressTab','img','_resetGrid','_item','getGlobalSubFolders','globalContext','defaultAttributes','createElement','_showSymbols','div','refused','_grid','\x27.\x0aUpload\x20them\x20only\x20if\x20you\x20have\x20the\x20right\x20to\x20use\x20them\x20on\x20this\x20system.\x20Upload?','iobroker-webui-widget-gallery','1032894sMNzQS','symbolCodeText','menu','innerText','src','upload','sort','load','dropEffect','button','hidden','_openFolders','innerHTML','value','showForSource','ondragstart','className','<svg\x20class=\x22chev\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222.2\x22\x20aria-hidden=\x22true\x22><path\x20d=\x22m9\x206\x206\x206-6\x206\x22/></svg>','close','folders','galleryType','delete','filter','items'];a=function(){return Y;};return a();}import{iobrokerHandler}from'../common/IobrokerHandler.js';import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';import'./MarketplacePanel.js';import{galleryTree}from'./GalleryTree.js';import{openFileDialog}from'../helper/Helper.js';import{previewDataUrl,symbolElementDef}from'../common/SymbolPack.js';import{hasOwnerMark,symbolStore}from'./SymbolStore.js';export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static [s(0x15c)]=css`
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

        .card-preview > img.symbol { object-fit: contain; }
        #head button.upload {
            margin-left: 8px;
            padding: 2px 8px;
            font: inherit;
            color: inherit;
            background: transparent;
            border: 1px solid currentColor;
            border-radius: 4px;
            cursor: pointer;
        }
        #symbolCode { width: min(720px, 80vw); color: var(--ui-text, #e2e6ec); background: var(--ui-surface, #252b38); border: 1px solid var(--ui-border, #3b4250); border-radius: 8px; }
        #symbolCode::backdrop { background: rgba(0, 0, 0, .45); }
        #symbolCode textarea { display: block; box-sizing: border-box; width: 100%; height: 50vh; font: 12px Consolas, monospace; color: inherit; background: var(--ui-input, #3a3f4b); border: 1px solid var(--ui-border, #3b4250); }
        #symbolCode .row { display: flex; gap: 8px; justify-content: flex-end; margin-top: 8px; }

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
        [hidden] { display: none !important; }`;static [s(0x110)]=html`
        <div id="tabs" role="group" aria-label="Gallery source">
            <button type="button" data-tab="project" aria-pressed="false">Project</button>
            <button type="button" data-tab="global" aria-pressed="false">Global</button>
            <button type="button" data-tab="symbols" aria-pressed="false">Symbols</button>
            <button type="button" data-tab="market" aria-pressed="false">Marketplace</button>
        </div>
        <div id="head">gallery</div>
        <div id="grid"><div class="empty">Choose Project, Global or Marketplace above, or a controls folder or a package in the tree.</div></div>
        <iobroker-webui-marketplace id="market" hidden></iobroker-webui-marketplace>
        <dialog id="symbolCode"><div id="symbolCodeName"></div><textarea id="symbolCodeText" readonly spellcheck="false"></textarea><div class="row"><button type="button" id="symbolCodeCopy">Copy</button><button type="button" id="symbolCodeClose">Close</button></div></dialog>`;['serviceContainer'];#observer;[s(0xe8)]=0x0;[s(0x13b)]=new Set();constructor(){const t=s;super(),this['_head']=this['_getDomElement']('head'),this[t(0x12d)]=this[t(0x162)](t(0x155)),this['_market']=this[t(0x162)](t(0x11f)),this[t(0x15a)]=this['_getDomElement'](t(0x16c));for(const c of this['_tabs']['querySelectorAll'](t(0x139)))c['onclick']=()=>this['showTab'](c[t(0x10d)]['tab']);}['_pressTab'](c){const u=s;for(const e of this['_tabs']['querySelectorAll']('button'))e[u(0x178)](u(0x121),String(e[u(0x10d)]['tab']===c));const d=c==='market';this['_market'][u(0x13a)]=!d,this[u(0x12d)][u(0x13a)]=d,this[u(0x10b)][u(0x13a)]=d;}async[s(0x15e)](c){const v=s,d=++this['_seq'];this[v(0x122)](c),this[v(0xdc)]();if(c==='market'){this[v(0x156)][v(0xe0)]();return;}if(c===v(0xec)){await this['_showSymbols'](d);return;}const e=c==='global';await this['_showControls'](d,e?v(0x15b):v(0x10e),e,'',e?'global':'project');}async['_showControls'](c,d,e,f,g){const w=s,h=await this[w(0x114)](e,f);if(c!==this['_seq'])return;this[w(0x10b)]['innerText']=d+'\x20('+[h['folders'][w(0xea)]?h['folders']['length']+'\x20folders':'',h[w(0x147)][w(0xea)]?h['items']['length']+w(0x167):''][w(0x146)](Boolean)[w(0xf0)](',\x20')+')',this[w(0x124)]();if(!h['folders'][w(0xea)]&&!h[w(0x147)]['length']){this['_grid'][w(0x13c)]='<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>';return;}this[w(0xee)](h,this[w(0x12d)],g,e);}async['_updateCounts'](){const x=s;if(this['_countsBusy'])return;this['_countsBusy']=!![];try{const [c,d]=await Promise[x(0x153)]([iobrokerHandler[x(0xe4)]('control')[x(0x152)](()=>[]),iobrokerHandler['getAllGlobalNames'](x(0x161))['catch'](()=>[])]),e=g=>g[x(0x169)](h=>String(h)['replace'](/^\//,''))['filter'](h=>!h['startsWith']('market/')),f={'project':'Project\x20·\x20'+e(c)['length'],'global':'Global\x20·\x20'+e(d)[x(0xea)]};for(const g of this[x(0x15a)]['querySelectorAll']('button'))if(f[g['dataset'][x(0xfa)]])g[x(0x119)]=f[g[x(0x10d)][x(0xfa)]];}finally{this[x(0x100)]=![];}}async[s(0x114)](c,f){const y=s,g=f?'/'+String(f)['replace'](/^\/+|\/+$/g,''):undefined;let h=[],i=[];try{[h,i]=c?await Promise[y(0x153)]([iobrokerHandler[y(0x126)](y(0x161),g),iobrokerHandler['getGlobalObjectNames'](y(0x161),g)]):await Promise['all']([iobrokerHandler[y(0x11b)]('control',g),iobrokerHandler['getObjectNames'](y(0x161),g)]);}catch(l){console[y(0xfc)]('gallery:\x20listing\x20controls',l);}const j=g?g['substring'](0x1)+'/':'',k=(m,n)=>String(m)['localeCompare'](String(n));return{'folders':(h??[])[y(0xf2)]()[y(0x136)]((m,n)=>(m==='market'&&!j)-(n==='market'&&!j)||k(m,n))[y(0x169)](m=>({'name':m===y(0x11f)&&!j?y(0xf6):m,'dir':j+m})),'items':(i??[])['slice']()['sort'](k)[y(0x169)](m=>{const o=j+m,p=getCustomControlName(o);return{'name':m,'tag':p,'elementDef':{'tag':p},'load':async()=>{const z=b;if(customElements[z(0x14d)](p))return;const q=c?await iobrokerHandler['getGlobalObject'](z(0x161),o):await iobrokerHandler['getCustomControl'](o);if(q&&!customElements['get'](p))generateCustomControl(o,q);}};})};}['_renderLevel'](c,d,e,g){const A=s;for(const h of c['folders']){const i=this['_folderElement'](h['name'],e+'/'+h['dir']),j=i[A(0x15d)]('.folder-body'),k=i['querySelector']('.ct');let l=![];const m=async()=>{const B=A;if(l)return;l=!![],j['innerHTML']=B(0x11d);const n=await this[B(0x114)](g,h[B(0xf1)]);j[B(0x13c)]='',k[B(0x119)]=String(n[B(0x143)]['length']+n[B(0x147)][B(0xea)]);if(!n['folders'][B(0xea)]&&!n['items'][B(0xea)])j[B(0x13c)]='<div\x20class=\x22empty\x22>empty</div>';else this[B(0xee)](n,j,e,g);};if(i[A(0x115)])m();i['addEventListener'](A(0x164),()=>{const C=A;if(i['open'])this['_openFolders'][C(0xdd)](e+'/'+h[C(0xf1)]),m();else this['_openFolders']['delete'](e+'/'+h['dir']);}),d['appendChild'](i);}this['_renderCards'](c[A(0x147)],d);}[s(0x157)](c,d){const D=s,e=document[D(0x129)]('details');e[D(0x140)]='folder',e[D(0x115)]=this[D(0x13b)][D(0x14c)](d);const f=document[D(0x129)](D(0xd7));f[D(0x13c)]=D(0x141)+D(0xd6);const g=document[D(0x129)]('span');g[D(0x140)]='nm',g['textContent']=c;const h=document[D(0x129)]('span');h['className']='ct',f['append'](g,h),e[D(0x171)](f);const i=document['createElement'](D(0x12b));return i['className']='folder-body',e[D(0x171)](i),e;}async[s(0x12a)](d){const E=s,e=await symbolStore['categories'](!![]);if(d!==this['_seq'])return;const f=e['reduce']((h,i)=>h+(i['count']||0x0),0x0);this[E(0x10b)]['innerText']='Symbols\x20('+e[E(0xea)]+E(0x120)+f+E(0x14e);const g=document[E(0x129)](E(0x139));g['type']='button',g[E(0x140)]=E(0x135),g['textContent']=E(0xe9),g[E(0x101)]=()=>this[E(0x10f)](),this['_head']['appendChild'](g),this['_resetGrid']();if(!e['length']){this['_grid'][E(0x13c)]=E(0xdf);return;}for(const h of e){const i=E(0x160)+h['id'],j=this['_folderElement'](h['name'],i);j[E(0x103)]=h['source']??'',j[E(0x15d)](E(0xd9))['textContent']=String(h['count']??'');const k=j['querySelector'](E(0x173));let l=![];const m=async()=>{const F=E;if(l)return;l=!![],k[F(0x13c)]='<div\x20class=\x22empty\x22>…</div>';try{const n=await symbolStore[F(0xec)](h['id']);k['innerHTML']='',this[F(0xe6)](n[F(0x169)](o=>this[F(0x16e)](h['id'],o)),k);}catch(o){l=![],k['innerHTML']='';const p=document[F(0x129)](F(0x12b));p[F(0x140)]='empty',p[F(0x119)]=F(0xfe)+(o?.[F(0xf9)]??o),k[F(0x171)](p);}};if(j[E(0x115)])m();j[E(0x154)](E(0x164),()=>{const G=E;if(j['open'])this['_openFolders'][G(0xdd)](i),m();else this['_openFolders'][G(0x145)](i);}),this[E(0x12d)][E(0x171)](j);}}[s(0x16e)](c,d){const I=s;return{'name':d['n'],'tag':d['n'],'elementDef':symbolElementDef(d),'preview':e=>{const H=b,f=document[H(0x129)](H(0x123));f[H(0x140)]=H(0x11a),f[H(0x14f)]=d['n'],f[H(0x134)]=previewDataUrl(d),e['appendChild'](f);},'menu':e=>ContextMenu['show']([{'title':I(0x11e),'action':()=>this[I(0x148)](d)},{'title':'Copy\x20SVG\x20code','action':()=>navigator[I(0xe7)]?.['writeText'](d['s'])},{'title':I(0xf7),'action':async()=>{const J=I;if(!confirm('Delete\x20the\x20symbol\x20\x27'+d['n']+J(0xe2)))return;await symbolStore[J(0x16d)](c,d['n']),await this[J(0x15e)](J(0xec));}}],e)};}['_showSymbolCode'](c){const K=s,d=this[K(0x162)]('symbolCode');this[K(0x162)](K(0x16b))['textContent']=c['n'],this['_getDomElement'](K(0x131))[K(0x13d)]=c['s'],this['_getDomElement'](K(0xf4))[K(0x101)]=()=>navigator[K(0xe7)]?.[K(0x163)](c['s']),this['_getDomElement'](K(0x111))[K(0x101)]=()=>d[K(0x142)](),d[K(0x104)]();}async['_uploadSymbols'](){const L=s,c=await openFileDialog('.svg',!![],'file');if(!c?.['length'])return;const d=await symbolStore['categories'](),f=prompt('Category\x20(existing\x20or\x20new):\x0a'+d[L(0x169)](i=>i[L(0x172)])['join'](',\x20'),d[0x0]?.['name']??'');if(!f?.['trim']())return;const g=await Promise[L(0x153)](c[L(0x169)](async i=>({'name':i[L(0x172)],'text':await i[L(0x16a)][L(0x106)]()}))),h=g[L(0x146)](i=>hasOwnerMark(i[L(0x106)]))[L(0x169)](i=>i['name']);if(h['length']&&!confirm(h['length']+'\x20of\x20these\x20files\x20name\x20a\x20copyright\x20owner,\x20for\x20example\x20\x27'+h[0x0]+L(0x12e)))return;try{const i=await symbolStore[L(0x135)](f[L(0xf8)](),g);alert(i[L(0xfb)]['length']+'\x20symbols\x20added\x20to\x20'+f[L(0xf8)]()+(i[L(0x12c)]['length']?'\x0a\x0aRefused:\x0a'+i[L(0x12c)][L(0xf2)](0x0,0xf)[L(0x169)](j=>j['name']+':\x20'+j['reason'])[L(0xf0)]('\x0a'):''));}catch(j){alert(L(0xff)+(j?.['message']??j));}await this['showTab'](L(0xec));}async[s(0x13e)](c,d){const M=s,f=++this[M(0xe8)];this['_pressTab'](c?.[M(0x144)]==='control'?c[M(0xfd)]?'global':'project':null);let g=[];try{if(c['galleryType']==='control')return this[M(0xef)](f,d,!!c[M(0xfd)],c['dir']||'',(c['global']?M(0x10c):'project:')+(c[M(0xf1)]||''));else{if(c[M(0x144)]===M(0x117)){if(c[M(0xeb)]){const h=String(c[M(0xeb)])[M(0x168)](/^\//,''),i={'scene-name':h,'scene-type':'3dcontrol'};if(c['global'])i['scene-scope']=M(0xfd);g=[{'name':h[M(0x112)]('/')[M(0x105)](),'tag':M(0x15f),'elementDef':{'tag':'iobroker-webui-3dscreen-viewer','defaultAttributes':i,'defaultWidth':M(0x107),'defaultHeight':'300px'}}];}}else{if(c[M(0x144)]===M(0x159)){const j=await c[M(0x11c)]['getElements'](),k=new Set();for(const l of j){if(!l['tag']||k[M(0x14c)](l[M(0x14b)]))continue;k[M(0xdd)](l['tag']),g[M(0xe3)]({'name':l[M(0x172)]??l[M(0x14b)],'tag':l['tag'],'elementDef':l});}}}}}catch(m){console[M(0xfc)](M(0x10a),m);}if(f!==this[M(0xe8)])return;this['_showItems'](d,g,c?.[M(0x144)]==='control'?(c['global']?M(0x10c):M(0x109))+(c['dir']||''):'npm');}['_showItems'](c,d,e=''){const N=s;this['_head'][N(0x133)]=c+'\x20('+d[N(0xea)]+')',this[N(0x124)]();if(!d[N(0xea)]){this['_grid'][N(0x13c)]='<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>';return;}this['_renderNode'](galleryTree(d['map'](f=>f['path']?f:{...f,'path':String(f['name']??'')['replace'](/\//g,'∕')})),this['_grid'],e);}['_resetGrid'](){const O=s;this.#observer?.['disconnect'](),this['_grid'][O(0x13c)]='',this.#observer=new IntersectionObserver(c=>{const P=O;for(const d of c){d['isIntersecting']&&!d['target']['_instantiated']&&(d['target']['_instantiated']=!![],this['_instantiate'](d['target']),this.#observer[P(0xf5)](d[P(0x113)]));}},{'root':this[O(0x12d)],'threshold':0.05});}['_renderNode'](c,d,e){const Q=s;for(const g of c['folders']){const h=e+'/'+g['path'],i=this['_folderElement'](g[Q(0x172)],h);i['querySelector'](Q(0xd9))['textContent']=String(g['count']);const j=i['querySelector'](Q(0x173));let k=![];const l=()=>{const R=Q;!k&&(k=!![],this[R(0x150)](g,j,e));};if(i['open'])l();i[Q(0x154)](Q(0x164),()=>{const S=Q;if(i['open'])this['_openFolders']['add'](h),l();else this[S(0x13b)][S(0x145)](h);}),d['appendChild'](i);}this['_renderCards'](c['items'],d);}['_renderCards'](c,d){const T=s,e=document['createElement'](T(0x12b));e['className']='cards',d[T(0x171)](e);for(const f of c){const g=document[T(0x129)]('div');g[T(0x140)]=T(0x116),g[T(0x103)]=f[T(0x14b)];const h=document[T(0x129)](T(0x12b));h['className']='card-title',h['textContent']=f[T(0x172)];const i=document['createElement'](T(0x12b));i['className']=T(0x151),i[T(0x125)]=f,g[T(0x171)](h),g['appendChild'](i),g['draggable']=!![],g[T(0x13f)]=j=>{const U=T;j['dataTransfer']['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](f[U(0x158)])),j[U(0xd8)][U(0x118)]='all',j['dataTransfer'][U(0x138)]=U(0x174);},g[T(0x101)]=()=>{const V=T;try{const j=this[V(0xe5)]??window[V(0xf3)][V(0xe5)];let k=j['designerTools']['get'](f[V(0x158)][V(0xe1)]??NamedTools['DrawElementTool']);if(typeof k==V(0x149))k=new k(f[V(0x158)]);j[V(0x127)]['tool']=k;}catch(l){}};if(f[T(0x132)])g['oncontextmenu']=j=>{const W=T;j['preventDefault'](),j[W(0x170)](),f['menu'](j);};e[T(0x171)](g),this.#observer[T(0xed)](i);}}async['_instantiate'](c){const X=s,d=c['_item'];if(d['preview']){d[X(0x177)](c);return;}try{if(d['load'])await d[X(0x137)]();if(!d['tag'])return;if(d[X(0x14b)]['includes']('-')&&!customElements[X(0x14d)](d[X(0x14b)]))return;const f=document[X(0x129)](d[X(0x14b)]);if(d[X(0x158)]?.[X(0x128)])for(const g in d[X(0x158)][X(0x128)]){try{f['setAttribute'](g,d['elementDef']['defaultAttributes'][g]);}catch(h){}}if(d[X(0x158)]?.['defaultContent'])f['textContent']=d[X(0x158)]['defaultContent'];else{if(!d[X(0x14b)][X(0x165)]('-')&&!f['childNodes']['length'])f['textContent']=d[X(0x14b)];}c[X(0x171)](f);}catch(i){console['warn']('gallery:\x20could\x20not\x20render',d[X(0x14b)],i);}}}customElements['define'](s(0x12f),IobrokerWebuiWidgetGallery);
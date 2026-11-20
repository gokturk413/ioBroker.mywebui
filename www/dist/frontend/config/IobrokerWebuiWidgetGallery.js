const s=b;function a(){const X=['catch','_resetGrid','_instantiate','value','_item','2109804wsxBZh','folder-body','symbol','substring','textContent','warn','<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>','button','count','push','getGlobalObjectNames','7LWbaSi','Marketplace\x20packages\x20(by\x20GitHub\x20owner)','filter','symbols','innerText','ondragstart','\x20symbols)','<div\x20class=\x22empty\x22>empty</div>','dataTransfer','span','\x20folders','market/','text','addEventListener','oncontextmenu','361250BoeDss','type','isIntersecting','_tabs','toggle','2agjOis','_market','querySelector','8gXsYFT','Delete\x20the\x20symbol\x20\x27','control','_showItems','Copy\x20SVG\x20code','className','showForSource','getElements','Global\x20·\x20','_folderElement','Symbols\x20(','sort','hidden','.svg','has','head','galleryType','project','src','_countsBusy','tool','symbolCodeText','pop','symbolCodeCopy','\x20controls','_seq','defaultContent','appendChild','designerTools','observe','3610776pPBAud','Category\x20(existing\x20or\x20new):\x0a','market','folders','_openFolders','281084iSQJct','getGlobalObject','childNodes','aria-pressed','path','.folder-body','_uploadSymbols','join','refused','dir','activate','added','_showSymbols','_instantiated','source','open','target','upload','<svg\x20class=\x22chev\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222.2\x22\x20aria-hidden=\x22true\x22><path\x20d=\x22m9\x206\x206\x206-6\x206\x22/></svg>','split','tab','file','load','onclick','reason','_getDomElement','upload\x20failed:\x20','replace','getAllNames','_renderCards','300px','map','createElement','get','6481650jTYuEm','_showControls','localeCompare','items','_symbolItem','_renderLevel','_head','innerHTML','disconnect','global:','defaultAttributes','symbolCode','_grid','div','setAttribute','menu','stringify','length','close','_controlLevel','delete','_showSymbolCode','npm','tag','2030715ByFxdF','symbols/','clipboard','getAllGlobalNames','serviceContainer','preventDefault','name','effectAllowed','getSubFolders','folder','trim','2983032EGcyIG','elementDef','all','reduce','_pressTab','3dcontrol','single','.ct','cannot\x20read\x20this\x20category:\x20','alt','showTab','template','service','iobroker-webui-3dscreen-viewer','global','categories'];a=function(){return X;};return a();}function b(c,d){c=c-0x16d;const e=a();let f=e[c];return f;}(function(c,d){const r=b,e=c();while(!![]){try{const f=parseInt(r(0x1cc))/0x1*(parseInt(r(0x1a6))/0x2)+-parseInt(r(0x206))/0x3+parseInt(r(0x187))/0x4+-parseInt(r(0x1a1))/0x5+parseInt(r(0x1c7))/0x6*(parseInt(r(0x192))/0x7)+parseInt(r(0x1a9))/0x8*(parseInt(r(0x172))/0x9)+-parseInt(r(0x1ee))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5418b));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{ContextMenu,dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';import'./MarketplacePanel.js';import{galleryTree}from'./GalleryTree.js';import{openFileDialog}from'../helper/Helper.js';import{previewDataUrl,symbolElementDef}from'../common/SymbolPack.js';import{hasOwnerMark,symbolStore}from'./SymbolStore.js';export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        [hidden] { display: none !important; }`;static [s(0x17d)]=html`
        <div id="tabs" role="group" aria-label="Gallery source">
            <button type="button" data-tab="project" aria-pressed="false">Project</button>
            <button type="button" data-tab="global" aria-pressed="false">Global</button>
            <button type="button" data-tab="symbols" aria-pressed="false">Symbols</button>
            <button type="button" data-tab="market" aria-pressed="false">Marketplace</button>
        </div>
        <div id="head">gallery</div>
        <div id="grid"><div class="empty">Choose Project, Global or Marketplace above, or a controls folder or a package in the tree.</div></div>
        <iobroker-webui-marketplace id="market" hidden></iobroker-webui-marketplace>
        <dialog id="symbolCode"><div id="symbolCodeName"></div><textarea id="symbolCodeText" readonly spellcheck="false"></textarea><div class="row"><button type="button" id="symbolCodeCopy">Copy</button><button type="button" id="symbolCodeClose">Close</button></div></dialog>`;['serviceContainer'];#observer;[s(0x1c2)]=0x0;[s(0x1cb)]=new Set();constructor(){const t=s;super(),this['_head']=this[t(0x1e5)](t(0x1b8)),this[t(0x1fa)]=this[t(0x1e5)]('grid'),this[t(0x1a7)]=this['_getDomElement'](t(0x1c9)),this[t(0x1a4)]=this[t(0x1e5)]('tabs');for(const c of this['_tabs']['querySelectorAll'](t(0x18e)))c['onclick']=()=>this[t(0x17c)](c['dataset'][t(0x1e0)]);}[s(0x176)](c){const u=s;for(const e of this[u(0x1a4)]['querySelectorAll']('button'))e[u(0x1fc)](u(0x1cf),String(e['dataset']['tab']===c));const d=c===u(0x1c9);this[u(0x1a7)][u(0x1b5)]=!d,this['_grid']['hidden']=d,this[u(0x1f4)][u(0x1b5)]=d;}async['showTab'](c){const v=s,d=++this['_seq'];this['_pressTab'](c),this['_updateCounts']();if(c==='market'){this['_market'][v(0x1d6)]();return;}if(c===v(0x195)){await this[v(0x1d8)](d);return;}const e=c===v(0x180);await this['_showControls'](d,e?'Global\x20controls':'Project\x20controls',e,'',e?'global':v(0x1ba));}async[s(0x1ef)](c,d,e,f,g){const w=s,h=await this['_controlLevel'](e,f);if(c!==this['_seq'])return;this['_head'][w(0x196)]=d+'\x20('+[h[w(0x1ca)][w(0x1ff)]?h[w(0x1ca)]['length']+w(0x19c):'',h['items'][w(0x1ff)]?h['items'][w(0x1ff)]+w(0x1c1):''][w(0x194)](Boolean)['join'](',\x20')+')',this[w(0x183)]();if(!h['folders'][w(0x1ff)]&&!h[w(0x1f1)]['length']){this[w(0x1fa)][w(0x1f5)]=w(0x18d);return;}this[w(0x1f3)](h,this['_grid'],g,e);}async['_updateCounts'](){const x=s;if(this['_countsBusy'])return;this['_countsBusy']=!![];try{const [c,d]=await Promise[x(0x174)]([iobrokerHandler[x(0x1e8)]('control')[x(0x182)](()=>[]),iobrokerHandler[x(0x209)]('control')[x(0x182)](()=>[])]),e=g=>g['map'](h=>String(h)['replace'](/^\//,''))[x(0x194)](h=>!h['startsWith'](x(0x19d))),f={'project':'Project\x20·\x20'+e(c)['length'],'global':x(0x1b1)+e(d)[x(0x1ff)]};for(const g of this[x(0x1a4)]['querySelectorAll']('button'))if(f[g['dataset'][x(0x1e0)]])g['textContent']=f[g['dataset'][x(0x1e0)]];}finally{this[x(0x1bc)]=![];}}async['_controlLevel'](c,f){const y=s,g=f?'/'+String(f)[y(0x1e7)](/^\/+|\/+$/g,''):undefined;let h=[],i=[];try{[h,i]=c?await Promise['all']([iobrokerHandler['getGlobalSubFolders']('control',g),iobrokerHandler[y(0x191)](y(0x1ab),g)]):await Promise['all']([iobrokerHandler[y(0x16f)](y(0x1ab),g),iobrokerHandler['getObjectNames']('control',g)]);}catch(l){console['warn']('gallery:\x20listing\x20controls',l);}const j=g?g[y(0x18a)](0x1)+'/':'',k=(m,n)=>String(m)[y(0x1f0)](String(n));return{'folders':(h??[])['slice']()['sort']((m,n)=>(m===y(0x1c9)&&!j)-(n==='market'&&!j)||k(m,n))['map'](m=>({'name':m===y(0x1c9)&&!j?y(0x193):m,'dir':j+m})),'items':(i??[])['slice']()[y(0x1b4)](k)['map'](m=>{const o=j+m,p=getCustomControlName(o);return{'name':m,'tag':p,'elementDef':{'tag':p},'load':async()=>{const z=b;if(customElements[z(0x1ed)](p))return;const q=c?await iobrokerHandler[z(0x1cd)]('control',o):await iobrokerHandler['getCustomControl'](o);if(q&&!customElements[z(0x1ed)](p))generateCustomControl(o,q);}};})};}[s(0x1f3)](c,d,e,g){const A=s;for(const h of c[A(0x1ca)]){const i=this['_folderElement'](h[A(0x16d)],e+'/'+h[A(0x1d5)]),j=i[A(0x1a8)]('.folder-body'),k=i['querySelector']('.ct');let l=![];const m=async()=>{const B=A;if(l)return;l=!![],j['innerHTML']='<div\x20class=\x22empty\x22>…</div>';const n=await this[B(0x201)](g,h['dir']);j[B(0x1f5)]='',k['textContent']=String(n['folders']['length']+n['items']['length']);if(!n['folders']['length']&&!n['items']['length'])j[B(0x1f5)]=B(0x199);else this['_renderLevel'](n,j,e,g);};if(i['open'])m();i[A(0x19f)]('toggle',()=>{const C=A;if(i['open'])this[C(0x1cb)]['add'](e+'/'+h['dir']),m();else this[C(0x1cb)]['delete'](e+'/'+h['dir']);}),d['appendChild'](i);}this[A(0x1e9)](c['items'],d);}[s(0x1b2)](c,d){const D=s,e=document['createElement']('details');e[D(0x1ae)]=D(0x170),e[D(0x1db)]=this[D(0x1cb)][D(0x1b7)](d);const f=document['createElement']('summary');f['innerHTML']=D(0x1de)+'<svg\x20class=\x22ico\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x221.8\x22\x20aria-hidden=\x22true\x22><path\x20d=\x22M3\x207a2\x202\x200\x200\x201\x202-2h4l2\x202h8a2\x202\x200\x200\x201\x202\x202v8a2\x202\x200\x200\x201-2\x202H5a2\x202\x200\x200\x201-2-2z\x22/></svg>';const g=document['createElement']('span');g['className']='nm',g['textContent']=c;const h=document[D(0x1ec)](D(0x19b));h[D(0x1ae)]='ct',f['append'](g,h),e[D(0x1c4)](f);const i=document['createElement']('div');return i[D(0x1ae)]=D(0x188),e['appendChild'](i),e;}async['_showSymbols'](d){const E=s,e=await symbolStore[E(0x181)](!![]);if(d!==this[E(0x1c2)])return;const f=e[E(0x175)]((h,i)=>h+(i[E(0x18f)]||0x0),0x0);this['_head']['innerText']=E(0x1b3)+e['length']+'\x20categories,\x20'+f+E(0x198);const g=document['createElement']('button');g[E(0x1a2)]='button',g['className']=E(0x1dd),g[E(0x18b)]='Upload\x20SVG…',g['onclick']=()=>this['_uploadSymbols'](),this['_head']['appendChild'](g),this['_resetGrid']();if(!e['length']){this[E(0x1fa)]['innerHTML']='<div\x20class=\x22empty\x22>no\x20symbols\x20yet:\x20upload\x20SVG\x20files</div>';return;}for(const h of e){const i=E(0x207)+h['id'],j=this[E(0x1b2)](h['name'],i);j['title']=h[E(0x1da)]??'',j['querySelector'](E(0x179))[E(0x18b)]=String(h['count']??'');const k=j[E(0x1a8)]('.folder-body');let l=![];const m=async()=>{const F=E;if(l)return;l=!![],k[F(0x1f5)]='<div\x20class=\x22empty\x22>…</div>';try{const n=await symbolStore[F(0x195)](h['id']);k['innerHTML']='',this['_renderCards'](n[F(0x1eb)](o=>this[F(0x1f2)](h['id'],o)),k);}catch(o){l=![],k['innerHTML']='';const p=document[F(0x1ec)](F(0x1fb));p[F(0x1ae)]='empty',p[F(0x18b)]=F(0x17a)+(o?.['message']??o),k['appendChild'](p);}};if(j[E(0x1db)])m();j['addEventListener']('toggle',()=>{const G=E;if(j[G(0x1db)])this['_openFolders']['add'](i),m();else this['_openFolders']['delete'](i);}),this[E(0x1fa)][E(0x1c4)](j);}}['_symbolItem'](c,d){const I=s;return{'name':d['n'],'tag':d['n'],'elementDef':symbolElementDef(d),'preview':e=>{const H=b,f=document['createElement']('img');f[H(0x1ae)]=H(0x189),f[H(0x17b)]=d['n'],f[H(0x1bb)]=previewDataUrl(d),e['appendChild'](f);},'menu':e=>ContextMenu['show']([{'title':'Show\x20SVG\x20code','action':()=>this[I(0x203)](d)},{'title':I(0x1ad),'action':()=>navigator[I(0x208)]?.['writeText'](d['s'])},{'title':'Delete\x20from\x20the\x20global\x20symbols','action':async()=>{const J=I;if(!confirm(J(0x1aa)+d['n']+'\x27?\x20Screens\x20that\x20already\x20use\x20it\x20keep\x20their\x20copy.'))return;await symbolStore['remove'](c,d['n']),await this[J(0x17c)](J(0x195));}}],e)};}[s(0x203)](c){const K=s,d=this[K(0x1e5)](K(0x1f9));this[K(0x1e5)]('symbolCodeName')[K(0x18b)]=c['n'],this['_getDomElement'](K(0x1be))[K(0x185)]=c['s'],this['_getDomElement'](K(0x1c0))['onclick']=()=>navigator['clipboard']?.['writeText'](c['s']),this[K(0x1e5)]('symbolCodeClose')['onclick']=()=>d[K(0x200)](),d['showModal']();}async[s(0x1d2)](){const L=s,c=await openFileDialog(L(0x1b6),!![],L(0x1e1));if(!c?.[L(0x1ff)])return;const d=await symbolStore['categories'](),f=prompt(L(0x1c8)+d[L(0x1eb)](i=>i['name'])[L(0x1d3)](',\x20'),d[0x0]?.[L(0x16d)]??'');if(!f?.[L(0x171)]())return;const g=await Promise['all'](c[L(0x1eb)](async i=>({'name':i['name'],'text':await i['data']['text']()}))),h=g['filter'](i=>hasOwnerMark(i[L(0x19e)]))['map'](i=>i['name']);if(h[L(0x1ff)]&&!confirm(h[L(0x1ff)]+'\x20of\x20these\x20files\x20name\x20a\x20copyright\x20owner,\x20for\x20example\x20\x27'+h[0x0]+'\x27.\x0aUpload\x20them\x20only\x20if\x20you\x20have\x20the\x20right\x20to\x20use\x20them\x20on\x20this\x20system.\x20Upload?'))return;try{const i=await symbolStore[L(0x1dd)](f[L(0x171)](),g);alert(i[L(0x1d7)][L(0x1ff)]+'\x20symbols\x20added\x20to\x20'+f['trim']()+(i[L(0x1d4)]['length']?'\x0a\x0aRefused:\x0a'+i[L(0x1d4)]['slice'](0x0,0xf)['map'](j=>j['name']+':\x20'+j[L(0x1e4)])['join']('\x0a'):''));}catch(j){alert(L(0x1e6)+(j?.['message']??j));}await this[L(0x17c)]('symbols');}async[s(0x1af)](c,d){const M=s,f=++this['_seq'];this[M(0x176)](c?.[M(0x1b9)]==='control'?c[M(0x180)]?M(0x180):'project':null);let g=[];try{if(c['galleryType']===M(0x1ab))return this['_showControls'](f,d,!!c['global'],c['dir']||'',(c['global']?'global:':'project:')+(c['dir']||''));else{if(c['galleryType']==='3dcontrol'){if(c['single']){const h=String(c[M(0x178)])[M(0x1e7)](/^\//,''),i={'scene-name':h,'scene-type':M(0x177)};if(c['global'])i['scene-scope']=M(0x180);g=[{'name':h[M(0x1df)]('/')[M(0x1bf)](),'tag':M(0x17f),'elementDef':{'tag':M(0x17f),'defaultAttributes':i,'defaultWidth':'400px','defaultHeight':M(0x1ea)}}];}}else{if(c[M(0x1b9)]===M(0x204)){const j=await c[M(0x17e)][M(0x1b0)](),k=new Set();for(const l of j){if(!l['tag']||k[M(0x1b7)](l[M(0x205)]))continue;k['add'](l[M(0x205)]),g[M(0x190)]({'name':l[M(0x16d)]??l[M(0x205)],'tag':l[M(0x205)],'elementDef':l});}}}}}catch(m){console[M(0x18c)]('gallery:\x20error\x20loading\x20items',m);}if(f!==this[M(0x1c2)])return;this['_showItems'](d,g,c?.[M(0x1b9)]==='control'?(c[M(0x180)]?M(0x1f7):'project:')+(c[M(0x1d5)]||''):'npm');}[s(0x1ac)](c,d,e=''){const N=s;this['_head']['innerText']=c+'\x20('+d[N(0x1ff)]+')',this[N(0x183)]();if(!d['length']){this[N(0x1fa)]['innerHTML']='<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>';return;}this['_renderNode'](galleryTree(d[N(0x1eb)](f=>f[N(0x1d0)]?f:{...f,'path':String(f[N(0x16d)]??'')[N(0x1e7)](/\//g,'∕')})),this['_grid'],e);}['_resetGrid'](){const O=s;this.#observer?.[O(0x1f6)](),this[O(0x1fa)][O(0x1f5)]='',this.#observer=new IntersectionObserver(c=>{const P=O;for(const d of c){d[P(0x1a3)]&&!d[P(0x1dc)][P(0x1d9)]&&(d[P(0x1dc)]['_instantiated']=!![],this[P(0x184)](d['target']),this.#observer['unobserve'](d['target']));}},{'root':this[O(0x1fa)],'threshold':0.05});}['_renderNode'](c,d,e){const Q=s;for(const g of c['folders']){const h=e+'/'+g['path'],i=this['_folderElement'](g['name'],h);i['querySelector']('.ct')['textContent']=String(g['count']);const j=i[Q(0x1a8)](Q(0x1d1));let k=![];const l=()=>{!k&&(k=!![],this['_renderNode'](g,j,e));};if(i[Q(0x1db)])l();i[Q(0x19f)](Q(0x1a5),()=>{const R=Q;if(i['open'])this['_openFolders']['add'](h),l();else this[R(0x1cb)][R(0x202)](h);}),d[Q(0x1c4)](i);}this[Q(0x1e9)](c[Q(0x1f1)],d);}['_renderCards'](c,d){const S=s,e=document[S(0x1ec)](S(0x1fb));e['className']='cards',d[S(0x1c4)](e);for(const f of c){const g=document['createElement'](S(0x1fb));g['className']='card',g['title']=f[S(0x205)];const h=document[S(0x1ec)](S(0x1fb));h[S(0x1ae)]='card-title',h[S(0x18b)]=f['name'];const i=document[S(0x1ec)](S(0x1fb));i[S(0x1ae)]='card-preview',i[S(0x186)]=f,g[S(0x1c4)](h),g[S(0x1c4)](i),g['draggable']=!![],g[S(0x197)]=j=>{const T=S;j[T(0x19a)]['setData'](dragDropFormatNameElementDefinition,JSON[T(0x1fe)](f['elementDef'])),j[T(0x19a)][T(0x16e)]='all',j['dataTransfer']['dropEffect']='copy';},g[S(0x1e3)]=()=>{const U=S;try{const j=this[U(0x20a)]??window['appShell']['serviceContainer'];let k=j[U(0x1c5)][U(0x1ed)](f['elementDef'][U(0x1bd)]??NamedTools['DrawElementTool']);if(typeof k=='function')k=new k(f[U(0x173)]);j['globalContext']['tool']=k;}catch(l){}};if(f[S(0x1fd)])g[S(0x1a0)]=j=>{const V=S;j[V(0x20b)](),j['stopPropagation'](),f[V(0x1fd)](j);};e[S(0x1c4)](g),this.#observer[S(0x1c6)](i);}}async[s(0x184)](c){const W=s,d=c[W(0x186)];if(d['preview']){d['preview'](c);return;}try{if(d['load'])await d[W(0x1e2)]();if(!d['tag'])return;if(d['tag']['includes']('-')&&!customElements[W(0x1ed)](d['tag']))return;const f=document[W(0x1ec)](d['tag']);if(d[W(0x173)]?.['defaultAttributes'])for(const g in d['elementDef'][W(0x1f8)]){try{f[W(0x1fc)](g,d[W(0x173)][W(0x1f8)][g]);}catch(h){}}if(d[W(0x173)]?.[W(0x1c3)])f['textContent']=d['elementDef'][W(0x1c3)];else{if(!d['tag']['includes']('-')&&!f[W(0x1ce)]['length'])f[W(0x18b)]=d['tag'];}c[W(0x1c4)](f);}catch(i){console[W(0x18c)]('gallery:\x20could\x20not\x20render',d['tag'],i);}}}customElements['define']('iobroker-webui-widget-gallery',IobrokerWebuiWidgetGallery);
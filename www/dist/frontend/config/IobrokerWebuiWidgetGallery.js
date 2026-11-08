const s=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=parseInt(r(0x126))/0x1+parseInt(r(0x13c))/0x2+parseInt(r(0x189))/0x3+-parseInt(r(0x11f))/0x4+-parseInt(r(0x14e))/0x5+parseInt(r(0x16a))/0x6+-parseInt(r(0x1b4))/0x7*(-parseInt(r(0x141))/0x8);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x33bcc));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{ContextMenu,dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';import'./MarketplacePanel.js';import{galleryTree}from'./GalleryTree.js';import{openFileDialog}from'../helper/Helper.js';function a(){const W=['market','replace','Project\x20controls','button','added','Show\x20SVG\x20code','_uploadSymbols','getGlobalObjectNames','appendChild','text','div','Global\x20·\x20','project','\x20symbols\x20added\x20to\x20','dataTransfer','symbols','getAllGlobalNames','3dcontrol','126462PbXABZ','target','_tabs','globalContext','slice','32Wdnlro','cards','head','aria-pressed','refused','symbolCodeClose','npm','getGlobalSubFolders','remove','title','grid','<div\x20class=\x22empty\x22>…</div>','folders','1547850csryHR','tool','append','childNodes','elementDef','_grid','symbols/','filter','\x20folders','textContent','delete','className','toggle','_getDomElement','upload','trim','querySelector','_controlLevel','menu','createElement','summary','symbolCodeText','.ct','_head','Marketplace\x20packages\x20(by\x20GitHub\x20owner)','type','tag','_countsBusy','1014270lbkuTs','single','\x27?\x20Screens\x20that\x20already\x20use\x20it\x20keep\x20their\x20copy.','setAttribute','preview','innerHTML','close','_seq','_pressTab','addEventListener','path','card-title','getSubFolders','\x27.\x0aUpload\x20them\x20only\x20if\x20you\x20have\x20the\x20right\x20to\x20use\x20them\x20on\x20this\x20system.\x20Upload?','_instantiate','style','writeText','count','Copy\x20SVG\x20code','draggable','<div\x20class=\x22empty\x22>no\x20symbols\x20yet:\x20upload\x20SVG\x20files</div>','join','items','_showControls','categories','load','isIntersecting','empty','folder-body','upload\x20failed:\x20','.folder-body','997635nJzbga','name','warn','get','hidden','img','_renderCards','querySelectorAll','onclick','.svg','showTab','dir','add','_item','src','show','stopPropagation','value','_folderElement','open','has','sort','clipboard','source','_openFolders','map','serviceContainer','_renderLevel','alt','control','global','400px','folder','_symbolItem','stringify','length','Symbols\x20(','global:','span','defaultAttributes','<svg\x20class=\x22ico\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x221.8\x22\x20aria-hidden=\x22true\x22><path\x20d=\x22M3\x207a2\x202\x200\x200\x201\x202-2h4l2\x202h8a2\x202\x200\x200\x201\x202\x202v8a2\x202\x200\x200\x201-2\x202H5a2\x202\x200\x200\x201-2-2z\x22/></svg>','tabs','gallery:\x20error\x20loading\x20items','54803WMDhYY','_renderNode','tab','Global\x20controls','all','_updateCounts','data','_market','1249596DIzoXp','pop','innerText','galleryType','_resetGrid','details','setData','237748sbEnTe','oncontextmenu','dataset','startsWith'];a=function(){return W;};return a();}import{previewDataUrl,symbolElementDef}from'../common/SymbolPack.js';function b(c,d){c=c-0x11b;const e=a();let f=e[c];return f;}import{hasOwnerMark,symbolStore}from'./SymbolStore.js';export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static [s(0x179)]=css`
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
        [hidden] { display: none !important; }`;static ['template']=html`
        <div id="tabs" role="group" aria-label="Gallery source">
            <button type="button" data-tab="project" aria-pressed="false">Project</button>
            <button type="button" data-tab="global" aria-pressed="false">Global</button>
            <button type="button" data-tab="symbols" aria-pressed="false">Symbols</button>
            <button type="button" data-tab="market" aria-pressed="false">Marketplace</button>
        </div>
        <div id="head">gallery</div>
        <div id="grid"><div class="empty">Choose Project, Global or Marketplace above, or a controls folder or a package in the tree.</div></div>
        <iobroker-webui-marketplace id="market" hidden></iobroker-webui-marketplace>
        <dialog id="symbolCode"><div id="symbolCodeName"></div><textarea id="symbolCodeText" readonly spellcheck="false"></textarea><div class="row"><button type="button" id="symbolCodeCopy">Copy</button><button type="button" id="symbolCodeClose">Close</button></div></dialog>`;['serviceContainer'];#observer;[s(0x171)]=0x0;['_openFolders']=new Set();constructor(){const t=s;super(),this['_head']=this['_getDomElement'](t(0x143)),this[t(0x153)]=this[t(0x15b)](t(0x14b)),this['_market']=this['_getDomElement']('market'),this['_tabs']=this[t(0x15b)](t(0x1b2));for(const c of this['_tabs']['querySelectorAll'](t(0x12d)))c['onclick']=()=>this[t(0x193)](c[t(0x128)][t(0x1b6)]);}[s(0x172)](c){const u=s;for(const e of this[u(0x13e)][u(0x190)](u(0x12d)))e[u(0x16d)](u(0x144),String(e['dataset']['tab']===c));const d=c==='market';this['_market'][u(0x18d)]=!d,this['_grid'][u(0x18d)]=d,this[u(0x165)][u(0x18d)]=d;}async[s(0x193)](c){const v=s,d=++this['_seq'];this['_pressTab'](c),this['_updateCounts']();if(c===v(0x12a)){this[v(0x11e)]['activate']();return;}if(c===v(0x139)){await this['_showSymbols'](d);return;}const e=c===v(0x1a7);await this[v(0x181)](d,e?v(0x1b7):v(0x12c),e,'',e?v(0x1a7):'project');}async[s(0x181)](c,d,e,f,g){const w=s,h=await this[w(0x15f)](e,f);if(c!==this[w(0x171)])return;this[w(0x165)][w(0x121)]=d+'\x20('+[h[w(0x14d)][w(0x1ac)]?h['folders'][w(0x1ac)]+w(0x156):'',h[w(0x180)][w(0x1ac)]?h[w(0x180)][w(0x1ac)]+'\x20controls':''][w(0x155)](Boolean)['join'](',\x20')+')',this[w(0x123)]();if(!h['folders'][w(0x1ac)]&&!h[w(0x180)][w(0x1ac)]){this['_grid']['innerHTML']='<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>';return;}this[w(0x1a4)](h,this['_grid'],g,e);}async[s(0x11c)](){const x=s;if(this['_countsBusy'])return;this['_countsBusy']=!![];try{const [c,d]=await Promise['all']([iobrokerHandler['getAllNames']('control')['catch'](()=>[]),iobrokerHandler[x(0x13a)]('control')['catch'](()=>[])]),e=g=>g[x(0x1a2)](h=>String(h)['replace'](/^\//,''))[x(0x155)](h=>!h[x(0x129)]('market/')),f={'project':'Project\x20·\x20'+e(c)[x(0x1ac)],'global':x(0x135)+e(d)['length']};for(const g of this[x(0x13e)]['querySelectorAll']('button'))if(f[g[x(0x128)][x(0x1b6)]])g[x(0x157)]=f[g['dataset']['tab']];}finally{this[x(0x169)]=![];}}async['_controlLevel'](c,f){const y=s,g=f?'/'+String(f)[y(0x12b)](/^\/+|\/+$/g,''):undefined;let h=[],i=[];try{[h,i]=c?await Promise[y(0x11b)]([iobrokerHandler[y(0x148)]('control',g),iobrokerHandler[y(0x131)]('control',g)]):await Promise['all']([iobrokerHandler[y(0x176)]('control',g),iobrokerHandler['getObjectNames'](y(0x1a6),g)]);}catch(l){console[y(0x18b)]('gallery:\x20listing\x20controls',l);}const j=g?g['substring'](0x1)+'/':'',k=(m,n)=>String(m)['localeCompare'](String(n));return{'folders':(h??[])['slice']()['sort']((m,n)=>(m==='market'&&!j)-(n==='market'&&!j)||k(m,n))['map'](m=>({'name':m===y(0x12a)&&!j?y(0x166):m,'dir':j+m})),'items':(i??[])[y(0x140)]()[y(0x19e)](k)['map'](m=>{const o=j+m,p=getCustomControlName(o);return{'name':m,'tag':p,'elementDef':{'tag':p},'load':async()=>{if(customElements['get'](p))return;const q=c?await iobrokerHandler['getGlobalObject']('control',o):await iobrokerHandler['getCustomControl'](o);if(q&&!customElements['get'](p))generateCustomControl(o,q);}};})};}[s(0x1a4)](c,d,e,g){const z=s;for(const h of c[z(0x14d)]){const i=this['_folderElement'](h['name'],e+'/'+h[z(0x194)]),j=i['querySelector'](z(0x188)),k=i[z(0x15e)]('.ct');let l=![];const m=async()=>{const A=z;if(l)return;l=!![],j['innerHTML']=A(0x14c);const n=await this[A(0x15f)](g,h[A(0x194)]);j[A(0x16f)]='',k['textContent']=String(n['folders'][A(0x1ac)]+n['items'][A(0x1ac)]);if(!n[A(0x14d)][A(0x1ac)]&&!n[A(0x180)][A(0x1ac)])j['innerHTML']='<div\x20class=\x22empty\x22>empty</div>';else this[A(0x1a4)](n,j,e,g);};if(i['open'])m();i[z(0x173)](z(0x15a),()=>{const B=z;if(i[B(0x19c)])this['_openFolders'][B(0x195)](e+'/'+h['dir']),m();else this['_openFolders'][B(0x158)](e+'/'+h['dir']);}),d['appendChild'](i);}this[z(0x18f)](c[z(0x180)],d);}[s(0x19b)](c,d){const C=s,e=document[C(0x161)](C(0x124));e[C(0x159)]=C(0x1a9),e['open']=this[C(0x1a1)][C(0x19d)](d);const f=document['createElement'](C(0x162));f['innerHTML']='<svg\x20class=\x22chev\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222.2\x22\x20aria-hidden=\x22true\x22><path\x20d=\x22m9\x206\x206\x206-6\x206\x22/></svg>'+C(0x1b1);const g=document[C(0x161)]('span');g['className']='nm',g['textContent']=c;const h=document[C(0x161)](C(0x1af));h['className']='ct',f[C(0x150)](g,h),e['appendChild'](f);const i=document[C(0x161)]('div');return i['className']=C(0x186),e[C(0x132)](i),e;}async['_showSymbols'](d){const D=s,e=await symbolStore['categories'](!![]);if(d!==this['_seq'])return;const f=e['reduce']((h,i)=>h+(i['count']||0x0),0x0);this['_head'][D(0x121)]=D(0x1ad)+e['length']+'\x20categories,\x20'+f+'\x20symbols)';const g=document[D(0x161)]('button');g[D(0x167)]='button',g[D(0x159)]=D(0x15c),g[D(0x157)]='Upload\x20SVG…',g[D(0x191)]=()=>this['_uploadSymbols'](),this['_head']['appendChild'](g),this[D(0x123)]();if(!e[D(0x1ac)]){this['_grid'][D(0x16f)]=D(0x17e);return;}for(const h of e){const i=D(0x154)+h['id'],j=this['_folderElement'](h[D(0x18a)],i);j['title']=h[D(0x1a0)]??'',j['querySelector']('.ct')['textContent']=String(h[D(0x17b)]??'');const k=j[D(0x15e)]('.folder-body');let l=![];const m=async()=>{const E=D;if(l)return;l=!![],k['innerHTML']=E(0x14c);try{const n=await symbolStore['symbols'](h['id']);k['innerHTML']='',this[E(0x18f)](n[E(0x1a2)](o=>this['_symbolItem'](h['id'],o)),k);}catch(o){l=![],k['innerHTML']='';const p=document[E(0x161)]('div');p['className']=E(0x185),p['textContent']='cannot\x20read\x20this\x20category:\x20'+(o?.['message']??o),k[E(0x132)](p);}};if(j[D(0x19c)])m();j['addEventListener'](D(0x15a),()=>{const F=D;if(j[F(0x19c)])this['_openFolders'][F(0x195)](i),m();else this['_openFolders'][F(0x158)](i);}),this[D(0x153)][D(0x132)](j);}}[s(0x1aa)](c,d){const H=s;return{'name':d['n'],'tag':d['n'],'elementDef':symbolElementDef(d),'preview':e=>{const G=b,f=document[G(0x161)](G(0x18e));f['className']='symbol',f[G(0x1a5)]=d['n'],f[G(0x197)]=previewDataUrl(d),e['appendChild'](f);},'menu':e=>ContextMenu[H(0x198)]([{'title':H(0x12f),'action':()=>this['_showSymbolCode'](d)},{'title':H(0x17c),'action':()=>navigator[H(0x19f)]?.[H(0x17a)](d['s'])},{'title':'Delete\x20from\x20the\x20global\x20symbols','action':async()=>{const I=H;if(!confirm('Delete\x20the\x20symbol\x20\x27'+d['n']+I(0x16c)))return;await symbolStore[I(0x149)](c,d['n']),await this['showTab']('symbols');}}],e)};}['_showSymbolCode'](c){const J=s,d=this['_getDomElement']('symbolCode');this[J(0x15b)]('symbolCodeName')['textContent']=c['n'],this['_getDomElement'](J(0x163))[J(0x19a)]=c['s'],this['_getDomElement']('symbolCodeCopy')['onclick']=()=>navigator['clipboard']?.[J(0x17a)](c['s']),this['_getDomElement'](J(0x146))[J(0x191)]=()=>d[J(0x170)](),d['showModal']();}async[s(0x130)](){const K=s,c=await openFileDialog(K(0x192),!![],'file');if(!c?.['length'])return;const d=await symbolStore[K(0x182)](),f=prompt('Category\x20(existing\x20or\x20new):\x0a'+d['map'](i=>i['name'])[K(0x17f)](',\x20'),d[0x0]?.[K(0x18a)]??'');if(!f?.['trim']())return;const g=await Promise['all'](c['map'](async i=>({'name':i[K(0x18a)],'text':await i[K(0x11d)][K(0x133)]()}))),h=g['filter'](i=>hasOwnerMark(i['text']))['map'](i=>i['name']);if(h['length']&&!confirm(h[K(0x1ac)]+'\x20of\x20these\x20files\x20name\x20a\x20copyright\x20owner,\x20for\x20example\x20\x27'+h[0x0]+K(0x177)))return;try{const i=await symbolStore['upload'](f[K(0x15d)](),g);alert(i[K(0x12e)]['length']+K(0x137)+f['trim']()+(i[K(0x145)]['length']?'\x0a\x0aRefused:\x0a'+i['refused']['slice'](0x0,0xf)[K(0x1a2)](j=>j['name']+':\x20'+j['reason'])[K(0x17f)]('\x0a'):''));}catch(j){alert(K(0x187)+(j?.['message']??j));}await this['showTab'](K(0x139));}async['showForSource'](c,d){const L=s,f=++this['_seq'];this[L(0x172)](c?.[L(0x122)]==='control'?c['global']?'global':L(0x136):null);let g=[];try{if(c[L(0x122)]==='control')return this[L(0x181)](f,d,!!c['global'],c[L(0x194)]||'',(c[L(0x1a7)]?L(0x1ae):'project:')+(c['dir']||''));else{if(c[L(0x122)]===L(0x13b)){if(c[L(0x16b)]){const h=String(c[L(0x16b)])[L(0x12b)](/^\//,''),i={'scene-name':h,'scene-type':'3dcontrol'};if(c['global'])i['scene-scope']='global';g=[{'name':h['split']('/')[L(0x120)](),'tag':'iobroker-webui-3dscreen-viewer','elementDef':{'tag':'iobroker-webui-3dscreen-viewer','defaultAttributes':i,'defaultWidth':L(0x1a8),'defaultHeight':'300px'}}];}}else{if(c[L(0x122)]==='npm'){const j=await c['service']['getElements'](),k=new Set();for(const l of j){if(!l['tag']||k['has'](l[L(0x168)]))continue;k['add'](l['tag']),g['push']({'name':l['name']??l['tag'],'tag':l[L(0x168)],'elementDef':l});}}}}}catch(m){console['warn'](L(0x1b3),m);}if(f!==this[L(0x171)])return;this['_showItems'](d,g,c?.['galleryType']===L(0x1a6)?(c['global']?'global:':'project:')+(c[L(0x194)]||''):L(0x147));}['_showItems'](c,d,e=''){const M=s;this['_head'][M(0x121)]=c+'\x20('+d['length']+')',this['_resetGrid']();if(!d[M(0x1ac)]){this['_grid']['innerHTML']='<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>';return;}this[M(0x1b5)](galleryTree(d['map'](f=>f[M(0x174)]?f:{...f,'path':String(f[M(0x18a)]??'')['replace'](/\//g,'∕')})),this[M(0x153)],e);}['_resetGrid'](){const N=s;this.#observer?.['disconnect'](),this['_grid'][N(0x16f)]='',this.#observer=new IntersectionObserver(c=>{const O=N;for(const d of c){d[O(0x184)]&&!d[O(0x13d)]['_instantiated']&&(d[O(0x13d)]['_instantiated']=!![],this[O(0x178)](d['target']),this.#observer['unobserve'](d['target']));}},{'root':this[N(0x153)],'threshold':0.05});}[s(0x1b5)](c,d,e){const P=s;for(const g of c[P(0x14d)]){const h=e+'/'+g[P(0x174)],i=this[P(0x19b)](g['name'],h);i['querySelector'](P(0x164))['textContent']=String(g[P(0x17b)]);const j=i[P(0x15e)](P(0x188));let k=![];const l=()=>{!k&&(k=!![],this['_renderNode'](g,j,e));};if(i[P(0x19c)])l();i[P(0x173)]('toggle',()=>{const Q=P;if(i[Q(0x19c)])this[Q(0x1a1)]['add'](h),l();else this['_openFolders']['delete'](h);}),d[P(0x132)](i);}this['_renderCards'](c[P(0x180)],d);}['_renderCards'](c,d){const R=s,e=document['createElement']('div');e['className']=R(0x142),d['appendChild'](e);for(const f of c){const g=document[R(0x161)]('div');g[R(0x159)]='card',g[R(0x14a)]=f['tag'];const h=document[R(0x161)]('div');h[R(0x159)]=R(0x175),h['textContent']=f['name'];const i=document['createElement'](R(0x134));i['className']='card-preview',i[R(0x196)]=f,g[R(0x132)](h),g['appendChild'](i),g[R(0x17d)]=!![],g['ondragstart']=j=>{const S=R;j[S(0x138)][S(0x125)](dragDropFormatNameElementDefinition,JSON[S(0x1ab)](f['elementDef'])),j['dataTransfer']['effectAllowed']=S(0x11b),j['dataTransfer']['dropEffect']='copy';},g['onclick']=()=>{const T=R;try{const j=this[T(0x1a3)]??window['appShell']['serviceContainer'];let k=j['designerTools'][T(0x18c)](f[T(0x152)][T(0x14f)]??NamedTools['DrawElementTool']);if(typeof k=='function')k=new k(f['elementDef']);j[T(0x13f)][T(0x14f)]=k;}catch(l){}};if(f['menu'])g[R(0x127)]=j=>{const U=R;j['preventDefault'](),j[U(0x199)](),f[U(0x160)](j);};e[R(0x132)](g),this.#observer['observe'](i);}}async['_instantiate'](c){const V=s,d=c[V(0x196)];if(d[V(0x16e)]){d[V(0x16e)](c);return;}try{if(d['load'])await d[V(0x183)]();if(!d[V(0x168)])return;if(d['tag']['includes']('-')&&!customElements[V(0x18c)](d['tag']))return;const f=document[V(0x161)](d[V(0x168)]);if(d['elementDef']?.['defaultAttributes'])for(const g in d['elementDef'][V(0x1b0)]){try{f[V(0x16d)](g,d[V(0x152)]['defaultAttributes'][g]);}catch(h){}}if(d[V(0x152)]?.['defaultContent'])f['textContent']=d[V(0x152)]['defaultContent'];else{if(!d['tag']['includes']('-')&&!f[V(0x151)][V(0x1ac)])f[V(0x157)]=d[V(0x168)];}c[V(0x132)](f);}catch(i){console['warn']('gallery:\x20could\x20not\x20render',d[V(0x168)],i);}}}customElements['define']('iobroker-webui-widget-gallery',IobrokerWebuiWidgetGallery);
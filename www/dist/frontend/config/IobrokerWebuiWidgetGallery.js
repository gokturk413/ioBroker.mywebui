const s=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=-parseInt(r(0xf5))/0x1*(-parseInt(r(0x12c))/0x2)+parseInt(r(0xef))/0x3+parseInt(r(0x151))/0x4+-parseInt(r(0x11d))/0x5+-parseInt(r(0xf8))/0x6*(-parseInt(r(0x103))/0x7)+-parseInt(r(0x120))/0x8+-parseInt(r(0x15d))/0x9*(parseInt(r(0x150))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xf39b2));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{ContextMenu,dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';function a(){const Y=['.svg','details','single','Show\x20SVG\x20code','split','_seq','623412jgcZsg','designerTools','remove','load','symbols','dataTransfer','src','createElement','Global\x20·\x20','template','grid','add','appShell','_showSymbols','card-preview','writeText','reduce','upload','pop','innerHTML','menu','Delete\x20the\x20symbol\x20\x27','_showSymbolCode','file','_renderCards','unobserve','slice','gallery:\x20error\x20loading\x20items','refused','\x27.\x0aUpload\x20them\x20only\x20if\x20you\x20have\x20the\x20right\x20to\x20use\x20them\x20on\x20this\x20system.\x20Upload?','summary','addEventListener','\x20categories,\x20','text','appendChild','gallery:\x20could\x20not\x20render','dataset','global','_showItems','5171364WapLMV','_tabs','serviceContainer','items','copy','getGlobalSubFolders','2206tfpjpR','_instantiated','activate','6iVclox','replace','getSubFolders','galleryType','get','_openFolders','added','symbolCodeCopy','symbols/','querySelector','textContent','7691796dqDGdn','cannot\x20read\x20this\x20category:\x20','delete','card','folders','querySelectorAll','\x20controls','startsWith','join','warn','Symbols\x20(','_uploadSymbols','defaultContent','iobroker-webui-widget-gallery','tab','symbolCodeClose','_countsBusy','tag','_pressTab','hidden','className','_renderLevel','tool','div','market','img','6941875rbQJdB','data','iobroker-webui-3dscreen-viewer','9569608WkgcEO','trim','button','effectAllowed','path','target','preventDefault','\x27?\x20Screens\x20that\x20already\x20use\x20it\x20keep\x20their\x20copy.','<div\x20class=\x22empty\x22>…</div>','sort','_grid','aria-pressed','1342VBdlhL','\x20folders','name','toggle','dir','_updateCounts','oncontextmenu','_market','onclick','setData','project','childNodes','npm','filter','value','_controlLevel','service','open','folder-body','_getDomElement','<div\x20class=\x22empty\x22>no\x20symbols\x20yet:\x20upload\x20SVG\x20files</div>','Project\x20·\x20','_showControls','upload\x20failed:\x20','_head','Marketplace\x20packages\x20(by\x20GitHub\x20owner)','map','preview','elementDef','\x20symbols)','tabs','categories','_instantiate','getObjectNames','control','defaultAttributes','310QqxSeC','5707408NmRmRK','market/','length','_renderNode','_item','\x0a\x0aRefused:\x0a'];a=function(){return Y;};return a();}import{iobrokerHandler}from'../common/IobrokerHandler.js';import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';import'./MarketplacePanel.js';import{galleryTree}from'./GalleryTree.js';import{openFileDialog}from'../helper/Helper.js';import{previewDataUrl,symbolElementDef}from'../common/SymbolPack.js';import{hasOwnerMark,symbolStore}from'./SymbolStore.js';export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        [hidden] { display: none !important; }`;static [s(0x166)]=html`
        <div id="tabs" role="group" aria-label="Gallery source">
            <button type="button" data-tab="project" aria-pressed="false">Project</button>
            <button type="button" data-tab="global" aria-pressed="false">Global</button>
            <button type="button" data-tab="symbols" aria-pressed="false">Symbols</button>
            <button type="button" data-tab="market" aria-pressed="false">Marketplace</button>
        </div>
        <div id="head">gallery</div>
        <div id="grid"><div class="empty">Choose Project, Global or Marketplace above, or a controls folder or a package in the tree.</div></div>
        <iobroker-webui-marketplace id="market" hidden></iobroker-webui-marketplace>
        <dialog id="symbolCode"><div id="symbolCodeName"></div><textarea id="symbolCodeText" readonly spellcheck="false"></textarea><div class="row"><button type="button" id="symbolCodeCopy">Copy</button><button type="button" id="symbolCodeClose">Close</button></div></dialog>`;['serviceContainer'];#observer;[s(0x15c)]=0x0;[s(0xfd)]=new Set();constructor(){const t=s;super(),this['_head']=this[t(0x13f)]('head'),this[t(0x12a)]=this['_getDomElement'](t(0x167)),this[t(0x133)]=this['_getDomElement'](t(0x11b)),this['_tabs']=this['_getDomElement'](t(0x14a));for(const c of this[t(0xf0)]['querySelectorAll']('button'))c[t(0x134)]=()=>this['showTab'](c['dataset']['tab']);}['_pressTab'](c){const u=s;for(const e of this[u(0xf0)]['querySelectorAll']('button'))e['setAttribute'](u(0x12b),String(e[u(0xec)][u(0x111)]===c));const d=c===u(0x11b);this['_market']['hidden']=!d,this['_grid'][u(0x116)]=d,this[u(0x144)][u(0x116)]=d;}async['showTab'](c){const v=s,d=++this['_seq'];this[v(0x115)](c),this['_updateCounts']();if(c==='market'){this[v(0x133)][v(0xf7)]();return;}if(c==='symbols'){await this[v(0x16a)](d);return;}const e=c===v(0xed);await this[v(0x142)](d,e?'Global\x20controls':'Project\x20controls',e,'',e?v(0xed):v(0x136));}async[s(0x142)](c,d,e,f,g){const w=s,h=await this[w(0x13b)](e,f);if(c!==this['_seq'])return;this['_head']['innerText']=d+'\x20('+[h['folders'][w(0x153)]?h[w(0x107)]['length']+w(0x12d):'',h[w(0xf2)]['length']?h[w(0xf2)]['length']+w(0x109):'']['filter'](Boolean)[w(0x10b)](',\x20')+')',this['_resetGrid']();if(!h['folders'][w(0x153)]&&!h[w(0xf2)]['length']){this[w(0x12a)][w(0x170)]='<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>';return;}this[w(0x118)](h,this['_grid'],g,e);}async[s(0x131)](){const x=s;if(this[x(0x113)])return;this['_countsBusy']=!![];try{const [c,d]=await Promise['all']([iobrokerHandler['getAllNames'](x(0x14e))['catch'](()=>[]),iobrokerHandler['getAllGlobalNames'](x(0x14e))['catch'](()=>[])]),e=g=>g['map'](h=>String(h)[x(0xf9)](/^\//,''))['filter'](h=>!h[x(0x10a)](x(0x152))),f={'project':x(0x141)+e(c)[x(0x153)],'global':x(0x165)+e(d)[x(0x153)]};for(const g of this[x(0xf0)][x(0x108)](x(0x122)))if(f[g[x(0xec)][x(0x111)]])g['textContent']=f[g[x(0xec)]['tab']];}finally{this[x(0x113)]=![];}}async[s(0x13b)](c,f){const y=s,g=f?'/'+String(f)['replace'](/^\/+|\/+$/g,''):undefined;let h=[],i=[];try{[h,i]=c?await Promise['all']([iobrokerHandler[y(0xf4)](y(0x14e),g),iobrokerHandler['getGlobalObjectNames']('control',g)]):await Promise['all']([iobrokerHandler[y(0xfa)]('control',g),iobrokerHandler[y(0x14d)]('control',g)]);}catch(l){console[y(0x10c)]('gallery:\x20listing\x20controls',l);}const j=g?g['substring'](0x1)+'/':'',k=(m,n)=>String(m)['localeCompare'](String(n));return{'folders':(h??[])[y(0xe2)]()[y(0x129)]((m,n)=>(m===y(0x11b)&&!j)-(n==='market'&&!j)||k(m,n))[y(0x146)](m=>({'name':m==='market'&&!j?y(0x145):m,'dir':j+m})),'items':(i??[])[y(0xe2)]()['sort'](k)['map'](m=>{const o=j+m,p=getCustomControlName(o);return{'name':m,'tag':p,'elementDef':{'tag':p},'load':async()=>{const z=b;if(customElements['get'](p))return;const q=c?await iobrokerHandler['getGlobalObject'](z(0x14e),o):await iobrokerHandler['getCustomControl'](o);if(q&&!customElements['get'](p))generateCustomControl(o,q);}};})};}['_renderLevel'](c,d,e,g){const A=s;for(const h of c['folders']){const i=this['_folderElement'](h['name'],e+'/'+h[A(0x130)]),j=i['querySelector']('.folder-body'),k=i[A(0x101)]('.ct');let l=![];const m=async()=>{const B=A;if(l)return;l=!![],j[B(0x170)]=B(0x128);const n=await this['_controlLevel'](g,h[B(0x130)]);j['innerHTML']='',k['textContent']=String(n[B(0x107)][B(0x153)]+n[B(0xf2)][B(0x153)]);if(!n['folders'][B(0x153)]&&!n[B(0xf2)]['length'])j['innerHTML']='<div\x20class=\x22empty\x22>empty</div>';else this[B(0x118)](n,j,e,g);};if(i[A(0x13d)])m();i[A(0xe7)](A(0x12f),()=>{const C=A;if(i['open'])this[C(0xfd)]['add'](e+'/'+h['dir']),m();else this[C(0xfd)]['delete'](e+'/'+h['dir']);}),d[A(0xea)](i);}this['_renderCards'](c['items'],d);}['_folderElement'](c,d){const D=s,e=document[D(0x164)](D(0x158));e['className']='folder',e['open']=this[D(0xfd)]['has'](d);const f=document[D(0x164)](D(0xe6));f['innerHTML']='<svg\x20class=\x22chev\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222.2\x22\x20aria-hidden=\x22true\x22><path\x20d=\x22m9\x206\x206\x206-6\x206\x22/></svg>'+'<svg\x20class=\x22ico\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x221.8\x22\x20aria-hidden=\x22true\x22><path\x20d=\x22M3\x207a2\x202\x200\x200\x201\x202-2h4l2\x202h8a2\x202\x200\x200\x201\x202\x202v8a2\x202\x200\x200\x201-2\x202H5a2\x202\x200\x200\x201-2-2z\x22/></svg>';const g=document[D(0x164)]('span');g['className']='nm',g[D(0x102)]=c;const h=document[D(0x164)]('span');h[D(0x117)]='ct',f['append'](g,h),e[D(0xea)](f);const i=document[D(0x164)]('div');return i[D(0x117)]=D(0x13e),e[D(0xea)](i),e;}async[s(0x16a)](d){const E=s,e=await symbolStore[E(0x14b)](!![]);if(d!==this[E(0x15c)])return;const f=e[E(0x16d)]((h,i)=>h+(i['count']||0x0),0x0);this['_head']['innerText']=E(0x10d)+e['length']+E(0xe8)+f+E(0x149);const g=document[E(0x164)]('button');g['type']='button',g['className']=E(0x16e),g['textContent']='Upload\x20SVG…',g[E(0x134)]=()=>this[E(0x10e)](),this[E(0x144)][E(0xea)](g),this['_resetGrid']();if(!e[E(0x153)]){this['_grid']['innerHTML']=E(0x140);return;}for(const h of e){const i=E(0x100)+h['id'],j=this['_folderElement'](h[E(0x12e)],i);j['title']=h['source']??'',j[E(0x101)]('.ct')['textContent']=String(h['count']??'');const k=j['querySelector']('.folder-body');let l=![];const m=async()=>{const F=E;if(l)return;l=!![],k['innerHTML']='<div\x20class=\x22empty\x22>…</div>';try{const n=await symbolStore[F(0x161)](h['id']);k['innerHTML']='',this['_renderCards'](n[F(0x146)](o=>this['_symbolItem'](h['id'],o)),k);}catch(o){l=![],k[F(0x170)]='';const p=document['createElement']('div');p[F(0x117)]='empty',p[F(0x102)]=F(0x104)+(o?.['message']??o),k['appendChild'](p);}};if(j[E(0x13d)])m();j['addEventListener']('toggle',()=>{const G=E;if(j[G(0x13d)])this['_openFolders'][G(0x168)](i),m();else this['_openFolders'][G(0x105)](i);}),this['_grid'][E(0xea)](j);}}['_symbolItem'](c,d){const I=s;return{'name':d['n'],'tag':d['n'],'elementDef':symbolElementDef(d),'preview':e=>{const H=b,f=document[H(0x164)](H(0x11c));f[H(0x117)]='symbol',f['alt']=d['n'],f[H(0x163)]=previewDataUrl(d),e['appendChild'](f);},'menu':e=>ContextMenu['show']([{'title':I(0x15a),'action':()=>this[I(0x173)](d)},{'title':'Copy\x20SVG\x20code','action':()=>navigator['clipboard']?.['writeText'](d['s'])},{'title':'Delete\x20from\x20the\x20global\x20symbols','action':async()=>{const J=I;if(!confirm(J(0x172)+d['n']+J(0x127)))return;await symbolStore[J(0x15f)](c,d['n']),await this['showTab']('symbols');}}],e)};}['_showSymbolCode'](c){const K=s,d=this[K(0x13f)]('symbolCode');this['_getDomElement']('symbolCodeName')[K(0x102)]=c['n'],this[K(0x13f)]('symbolCodeText')[K(0x13a)]=c['s'],this[K(0x13f)](K(0xff))['onclick']=()=>navigator['clipboard']?.[K(0x16c)](c['s']),this['_getDomElement'](K(0x112))[K(0x134)]=()=>d['close'](),d['showModal']();}async[s(0x10e)](){const L=s,c=await openFileDialog(L(0x157),!![],L(0xdf));if(!c?.['length'])return;const d=await symbolStore['categories'](),f=prompt('Category\x20(existing\x20or\x20new):\x0a'+d['map'](i=>i['name'])['join'](',\x20'),d[0x0]?.['name']??'');if(!f?.['trim']())return;const g=await Promise['all'](c['map'](async i=>({'name':i[L(0x12e)],'text':await i[L(0x11e)][L(0xe9)]()}))),h=g[L(0x139)](i=>hasOwnerMark(i['text']))['map'](i=>i[L(0x12e)]);if(h['length']&&!confirm(h['length']+'\x20of\x20these\x20files\x20name\x20a\x20copyright\x20owner,\x20for\x20example\x20\x27'+h[0x0]+L(0xe5)))return;try{const i=await symbolStore['upload'](f[L(0x121)](),g);alert(i[L(0xfe)]['length']+'\x20symbols\x20added\x20to\x20'+f[L(0x121)]()+(i['refused'][L(0x153)]?L(0x156)+i[L(0xe4)][L(0xe2)](0x0,0xf)['map'](j=>j[L(0x12e)]+':\x20'+j['reason'])[L(0x10b)]('\x0a'):''));}catch(j){alert(L(0x143)+(j?.['message']??j));}await this['showTab']('symbols');}async['showForSource'](c,d){const M=s,f=++this['_seq'];this['_pressTab'](c?.['galleryType']==='control'?c[M(0xed)]?'global':M(0x136):null);let g=[];try{if(c[M(0xfb)]==='control')return this['_showControls'](f,d,!!c[M(0xed)],c['dir']||'',(c[M(0xed)]?'global:':'project:')+(c['dir']||''));else{if(c['galleryType']==='3dcontrol'){if(c[M(0x159)]){const h=String(c[M(0x159)])[M(0xf9)](/^\//,''),i={'scene-name':h,'scene-type':'3dcontrol'};if(c['global'])i['scene-scope']=M(0xed);g=[{'name':h[M(0x15b)]('/')[M(0x16f)](),'tag':M(0x11f),'elementDef':{'tag':M(0x11f),'defaultAttributes':i,'defaultWidth':'400px','defaultHeight':'300px'}}];}}else{if(c['galleryType']===M(0x138)){const j=await c[M(0x13c)]['getElements'](),k=new Set();for(const l of j){if(!l['tag']||k['has'](l[M(0x114)]))continue;k['add'](l['tag']),g['push']({'name':l[M(0x12e)]??l[M(0x114)],'tag':l[M(0x114)],'elementDef':l});}}}}}catch(m){console['warn'](M(0xe3),m);}if(f!==this[M(0x15c)])return;this[M(0xee)](d,g,c?.['galleryType']==='control'?(c[M(0xed)]?'global:':'project:')+(c[M(0x130)]||''):M(0x138));}[s(0xee)](c,d,e=''){const N=s;this[N(0x144)]['innerText']=c+'\x20('+d['length']+')',this['_resetGrid']();if(!d['length']){this['_grid']['innerHTML']='<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>';return;}this['_renderNode'](galleryTree(d['map'](f=>f[N(0x124)]?f:{...f,'path':String(f[N(0x12e)]??'')['replace'](/\//g,'∕')})),this['_grid'],e);}['_resetGrid'](){const O=s;this.#observer?.['disconnect'](),this['_grid'][O(0x170)]='',this.#observer=new IntersectionObserver(c=>{const P=O;for(const d of c){d['isIntersecting']&&!d[P(0x125)][P(0xf6)]&&(d[P(0x125)][P(0xf6)]=!![],this[P(0x14c)](d[P(0x125)]),this.#observer[P(0xe1)](d[P(0x125)]));}},{'root':this['_grid'],'threshold':0.05});}['_renderNode'](c,d,e){const Q=s;for(const g of c[Q(0x107)]){const h=e+'/'+g['path'],i=this['_folderElement'](g['name'],h);i[Q(0x101)]('.ct')['textContent']=String(g['count']);const j=i['querySelector']('.folder-body');let k=![];const l=()=>{const R=Q;!k&&(k=!![],this[R(0x154)](g,j,e));};if(i['open'])l();i[Q(0xe7)]('toggle',()=>{const S=Q;if(i[S(0x13d)])this['_openFolders']['add'](h),l();else this[S(0xfd)][S(0x105)](h);}),d['appendChild'](i);}this[Q(0xe0)](c['items'],d);}[s(0xe0)](c,d){const T=s,e=document['createElement'](T(0x11a));e['className']='cards',d['appendChild'](e);for(const f of c){const g=document['createElement'](T(0x11a));g['className']=T(0x106),g['title']=f[T(0x114)];const h=document['createElement'](T(0x11a));h['className']='card-title',h[T(0x102)]=f['name'];const i=document['createElement'](T(0x11a));i['className']=T(0x16b),i[T(0x155)]=f,g[T(0xea)](h),g[T(0xea)](i),g['draggable']=!![],g['ondragstart']=j=>{const U=T;j[U(0x162)][U(0x135)](dragDropFormatNameElementDefinition,JSON['stringify'](f[U(0x148)])),j['dataTransfer'][U(0x123)]='all',j[U(0x162)]['dropEffect']=U(0xf3);},g[T(0x134)]=()=>{const V=T;try{const j=this[V(0xf1)]??window[V(0x169)]['serviceContainer'];let k=j[V(0x15e)][V(0xfc)](f[V(0x148)][V(0x119)]??NamedTools['DrawElementTool']);if(typeof k=='function')k=new k(f[V(0x148)]);j['globalContext']['tool']=k;}catch(l){}};if(f[T(0x171)])g[T(0x132)]=j=>{const W=T;j[W(0x126)](),j['stopPropagation'](),f[W(0x171)](j);};e['appendChild'](g),this.#observer['observe'](i);}}async['_instantiate'](c){const X=s,d=c[X(0x155)];if(d[X(0x147)]){d['preview'](c);return;}try{if(d[X(0x160)])await d['load']();if(!d[X(0x114)])return;if(d['tag']['includes']('-')&&!customElements['get'](d[X(0x114)]))return;const f=document['createElement'](d['tag']);if(d['elementDef']?.[X(0x14f)])for(const g in d[X(0x148)][X(0x14f)]){try{f['setAttribute'](g,d['elementDef'][X(0x14f)][g]);}catch(h){}}if(d['elementDef']?.['defaultContent'])f['textContent']=d['elementDef'][X(0x10f)];else{if(!d[X(0x114)]['includes']('-')&&!f[X(0x137)][X(0x153)])f['textContent']=d['tag'];}c['appendChild'](f);}catch(i){console[X(0x10c)](X(0xeb),d['tag'],i);}}}function b(c,d){c=c-0xdf;const e=a();let f=e[c];return f;}customElements['define'](s(0x110),IobrokerWebuiWidgetGallery);
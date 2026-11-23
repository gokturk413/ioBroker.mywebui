const s=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=parseInt(r(0xd9))/0x1*(-parseInt(r(0xc6))/0x2)+-parseInt(r(0xa4))/0x3+parseInt(r(0x78))/0x4*(-parseInt(r(0xba))/0x5)+-parseInt(r(0xf0))/0x6*(-parseInt(r(0x9d))/0x7)+-parseInt(r(0xdf))/0x8+parseInt(r(0xe0))/0x9+parseInt(r(0xb4))/0xa*(parseInt(r(0x84))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc89db));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';function a(){const W=['span','dir','get','includes','_head','_resetGrid','\x20symbols)','folder','_pressTab','categories','show','name','innerText','oncontextmenu','querySelector','all','_market','open','dropEffect','_tabs','npm','Global\x20·\x20','upload\x20failed:\x20','title','warn','file','createElement','getElements','_showSymbolCode','cards','symbol','source','showTab','Project\x20·\x20','getSubFolders','disconnect','391536EPRIGa','add','single','_openFolders','activate','dataset','appShell','<svg\x20class=\x22ico\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x221.8\x22\x20aria-hidden=\x22true\x22><path\x20d=\x22M3\x207a2\x202\x200\x200\x201\x202-2h4l2\x202h8a2\x202\x200\x200\x201\x202\x202v8a2\x202\x200\x200\x201-2\x202H5a2\x202\x200\x200\x201-2-2z\x22/></svg>','setAttribute','_grid','Project\x20controls','appendChild','11KDDynw','<div\x20class=\x22empty\x22>…</div>','\x0a\x0aRefused:\x0a','substring','symbolCodeClose','localeCompare','empty','_updateCounts','symbolCodeCopy','_renderNode','draggable','globalContext','_showControls','defaultAttributes','_uploadSymbols','showForSource','elementDef','upload','aria-pressed','tool','symbols','_instantiate','Marketplace\x20packages\x20(by\x20GitHub\x20owner)','galleryType','getAllGlobalNames','291886iINvmp','src','_renderCards','button','DrawElementTool','scene-scope','getAllNames','4092621KVDsRB','Delete\x20from\x20the\x20global\x20symbols','preview','addEventListener','symbolCodeText','details','refused','iobroker-webui-3dscreen-viewer','type','toggle','_renderLevel','innerHTML','className','.ct','\x20of\x20these\x20files\x20name\x20a\x20copyright\x20owner,\x20for\x20example\x20\x27','\x27.\x0aUpload\x20them\x20only\x20if\x20you\x20have\x20the\x20right\x20to\x20use\x20them\x20on\x20this\x20system.\x20Upload?','29524090SnofmB','reason','_showItems','symbolCodeName','filter','_getDomElement','45CLpJvz','global:','gallery:\x20could\x20not\x20render','300px','<div\x20class=\x22empty\x22>no\x20symbols\x20yet:\x20upload\x20SVG\x20files</div>','_controlLevel','childNodes','_seq','load','slice','message','clipboard','6sDRxUG','join','close','length','sort','card-title','Show\x20SVG\x20code','startsWith','tab','hidden','onclick','div','folders','_countsBusy','serviceContainer','dataTransfer','menu','_instantiated','tag','182078LZrjao','map','textContent','count','.folder-body','project:','1948376YdhyhQ','5136066vbagaJ','replace','Category\x20(existing\x20or\x20new):\x0a','3dcontrol','_showSymbols','define','market','_folderElement','control','\x27?\x20Screens\x20that\x20already\x20use\x20it\x20keep\x20their\x20copy.','_symbolItem','items','\x20folders','querySelectorAll','target','global','48FxwtUg','push','Global\x20controls'];a=function(){return W;};return a();}function b(c,d){c=c-0x72;const e=a();let f=e[c];return f;}import{ContextMenu,dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';import'./MarketplacePanel.js';import{galleryTree}from'./GalleryTree.js';import{openFileDialog}from'../helper/Helper.js';import{previewDataUrl,symbolElementDef}from'../common/SymbolPack.js';import{hasOwnerMark,symbolStore}from'./SymbolStore.js';export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        <dialog id="symbolCode"><div id="symbolCodeName"></div><textarea id="symbolCodeText" readonly spellcheck="false"></textarea><div class="row"><button type="button" id="symbolCodeCopy">Copy</button><button type="button" id="symbolCodeClose">Close</button></div></dialog>`;['serviceContainer'];#observer;[s(0xc1)]=0x0;['_openFolders']=new Set();constructor(){const t=s;super(),this[t(0xf7)]=this['_getDomElement']('head'),this['_grid']=this['_getDomElement']('grid'),this[t(0x103)]=this['_getDomElement']('market'),this[t(0x106)]=this[t(0xb9)]('tabs');for(const c of this['_tabs'][t(0xed)]('button'))c[t(0xd0)]=()=>this['showTab'](c['dataset']['tab']);}['_pressTab'](c){const u=s;for(const e of this['_tabs'][u(0xed)](u(0xa0)))e['setAttribute'](u(0x96),String(e['dataset']['tab']===c));const d=c==='market';this['_market']['hidden']=!d,this['_grid'][u(0xcf)]=d,this[u(0xf7)][u(0xcf)]=d;}async[s(0x74)](c){const v=s,d=++this[v(0xc1)];this[v(0xfb)](c),this[v(0x8b)]();if(c===v(0xe6)){this['_market'][v(0x7c)]();return;}if(c===v(0x98)){await this[v(0xe4)](d);return;}const e=c===v(0xef);await this['_showControls'](d,e?v(0xf2):v(0x82),e,'',e?'global':'project');}async[s(0x90)](c,d,e,f,g){const w=s,h=await this['_controlLevel'](e,f);if(c!==this['_seq'])return;this['_head']['innerText']=d+'\x20('+[h[w(0xd2)][w(0xc9)]?h[w(0xd2)][w(0xc9)]+w(0xec):'',h['items']['length']?h[w(0xeb)][w(0xc9)]+'\x20controls':'']['filter'](Boolean)['join'](',\x20')+')',this['_resetGrid']();if(!h[w(0xd2)][w(0xc9)]&&!h[w(0xeb)][w(0xc9)]){this[w(0x81)]['innerHTML']='<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>';return;}this[w(0xae)](h,this[w(0x81)],g,e);}async[s(0x8b)](){const x=s;if(this[x(0xd3)])return;this[x(0xd3)]=!![];try{const [c,d]=await Promise['all']([iobrokerHandler[x(0xa3)](x(0xe8))['catch'](()=>[]),iobrokerHandler[x(0x9c)]('control')['catch'](()=>[])]),e=g=>g[x(0xda)](h=>String(h)['replace'](/^\//,''))['filter'](h=>!h[x(0xcd)]('market/')),f={'project':x(0x75)+e(c)[x(0xc9)],'global':x(0x108)+e(d)['length']};for(const g of this['_tabs'][x(0xed)]('button'))if(f[g['dataset'][x(0xce)]])g['textContent']=f[g[x(0x7d)]['tab']];}finally{this[x(0xd3)]=![];}}async[s(0xbf)](c,f){const y=s,g=f?'/'+String(f)['replace'](/^\/+|\/+$/g,''):undefined;let h=[],i=[];try{[h,i]=c?await Promise[y(0x102)]([iobrokerHandler['getGlobalSubFolders'](y(0xe8),g),iobrokerHandler['getGlobalObjectNames'](y(0xe8),g)]):await Promise['all']([iobrokerHandler[y(0x76)](y(0xe8),g),iobrokerHandler['getObjectNames']('control',g)]);}catch(l){console['warn']('gallery:\x20listing\x20controls',l);}const j=g?g[y(0x87)](0x1)+'/':'',k=(m,n)=>String(m)[y(0x89)](String(n));return{'folders':(h??[])[y(0xc3)]()[y(0xca)]((m,n)=>(m===y(0xe6)&&!j)-(n==='market'&&!j)||k(m,n))[y(0xda)](m=>({'name':m===y(0xe6)&&!j?y(0x9a):m,'dir':j+m})),'items':(i??[])[y(0xc3)]()[y(0xca)](k)['map'](m=>{const o=j+m,p=getCustomControlName(o);return{'name':m,'tag':p,'elementDef':{'tag':p},'load':async()=>{const z=b;if(customElements[z(0xf5)](p))return;const q=c?await iobrokerHandler['getGlobalObject']('control',o):await iobrokerHandler['getCustomControl'](o);if(q&&!customElements[z(0xf5)](p))generateCustomControl(o,q);}};})};}['_renderLevel'](c,d,e,g){const A=s;for(const h of c['folders']){const i=this[A(0xe7)](h['name'],e+'/'+h['dir']),j=i['querySelector']('.folder-body'),k=i[A(0x101)]('.ct');let l=![];const m=async()=>{const B=A;if(l)return;l=!![],j['innerHTML']='<div\x20class=\x22empty\x22>…</div>';const n=await this[B(0xbf)](g,h['dir']);j['innerHTML']='',k[B(0xdb)]=String(n['folders'][B(0xc9)]+n[B(0xeb)]['length']);if(!n['folders'][B(0xc9)]&&!n[B(0xeb)]['length'])j['innerHTML']='<div\x20class=\x22empty\x22>empty</div>';else this['_renderLevel'](n,j,e,g);};if(i[A(0x104)])m();i[A(0xa7)]('toggle',()=>{const C=A;if(i[C(0x104)])this[C(0x7b)]['add'](e+'/'+h[C(0xf4)]),m();else this['_openFolders']['delete'](e+'/'+h[C(0xf4)]);}),d['appendChild'](i);}this[A(0x9f)](c['items'],d);}[s(0xe7)](c,d){const D=s,e=document['createElement'](D(0xa9));e[D(0xb0)]=D(0xfa),e['open']=this[D(0x7b)]['has'](d);const f=document['createElement']('summary');f[D(0xaf)]='<svg\x20class=\x22chev\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222.2\x22\x20aria-hidden=\x22true\x22><path\x20d=\x22m9\x206\x206\x206-6\x206\x22/></svg>'+D(0x7f);const g=document['createElement']('span');g[D(0xb0)]='nm',g['textContent']=c;const h=document[D(0x10d)](D(0xf3));h[D(0xb0)]='ct',f['append'](g,h),e[D(0x83)](f);const i=document[D(0x10d)](D(0xd1));return i['className']='folder-body',e['appendChild'](i),e;}async['_showSymbols'](d){const E=s,e=await symbolStore[E(0xfc)](!![]);if(d!==this['_seq'])return;const f=e['reduce']((h,i)=>h+(i[E(0xdc)]||0x0),0x0);this['_head'][E(0xff)]='Symbols\x20('+e[E(0xc9)]+'\x20categories,\x20'+f+E(0xf9);const g=document[E(0x10d)](E(0xa0));g[E(0xac)]='button',g[E(0xb0)]=E(0x95),g['textContent']='Upload\x20SVG…',g[E(0xd0)]=()=>this['_uploadSymbols'](),this[E(0xf7)]['appendChild'](g),this[E(0xf8)]();if(!e['length']){this['_grid']['innerHTML']=E(0xbe);return;}for(const h of e){const i='symbols/'+h['id'],j=this[E(0xe7)](h['name'],i);j[E(0x10a)]=h[E(0x73)]??'',j[E(0x101)](E(0xb1))['textContent']=String(h['count']??'');const k=j['querySelector'](E(0xdd));let l=![];const m=async()=>{const F=E;if(l)return;l=!![],k['innerHTML']=F(0x85);try{const n=await symbolStore[F(0x98)](h['id']);k['innerHTML']='',this['_renderCards'](n[F(0xda)](o=>this['_symbolItem'](h['id'],o)),k);}catch(o){l=![],k['innerHTML']='';const p=document[F(0x10d)](F(0xd1));p[F(0xb0)]=F(0x8a),p['textContent']='cannot\x20read\x20this\x20category:\x20'+(o?.[F(0xc4)]??o),k[F(0x83)](p);}};if(j['open'])m();j[E(0xa7)](E(0xad),()=>{if(j['open'])this['_openFolders']['add'](i),m();else this['_openFolders']['delete'](i);}),this['_grid'][E(0x83)](j);}}[s(0xea)](c,d){const H=s;return{'name':d['n'],'tag':d['n'],'elementDef':symbolElementDef(d),'preview':e=>{const G=b,f=document[G(0x10d)]('img');f['className']=G(0x72),f['alt']=d['n'],f[G(0x9e)]=previewDataUrl(d),e['appendChild'](f);},'menu':e=>ContextMenu[H(0xfd)]([{'title':H(0xcc),'action':()=>this[H(0x10f)](d)},{'title':'Copy\x20SVG\x20code','action':()=>navigator[H(0xc5)]?.['writeText'](d['s'])},{'title':H(0xa5),'action':async()=>{const I=H;if(!confirm('Delete\x20the\x20symbol\x20\x27'+d['n']+I(0xe9)))return;await symbolStore['remove'](c,d['n']),await this['showTab'](I(0x98));}}],e)};}[s(0x10f)](c){const J=s,d=this[J(0xb9)]('symbolCode');this[J(0xb9)](J(0xb7))[J(0xdb)]=c['n'],this[J(0xb9)](J(0xa8))['value']=c['s'],this[J(0xb9)](J(0x8c))[J(0xd0)]=()=>navigator[J(0xc5)]?.['writeText'](c['s']),this['_getDomElement'](J(0x88))[J(0xd0)]=()=>d[J(0xc8)](),d['showModal']();}async[s(0x92)](){const K=s,c=await openFileDialog('.svg',!![],K(0x10c));if(!c?.['length'])return;const d=await symbolStore[K(0xfc)](),f=prompt(K(0xe2)+d['map'](i=>i['name'])['join'](',\x20'),d[0x0]?.['name']??'');if(!f?.['trim']())return;const g=await Promise[K(0x102)](c[K(0xda)](async i=>({'name':i['name'],'text':await i['data']['text']()}))),h=g[K(0xb8)](i=>hasOwnerMark(i['text']))[K(0xda)](i=>i['name']);if(h[K(0xc9)]&&!confirm(h['length']+K(0xb2)+h[0x0]+K(0xb3)))return;try{const i=await symbolStore[K(0x95)](f['trim'](),g);alert(i['added'][K(0xc9)]+'\x20symbols\x20added\x20to\x20'+f['trim']()+(i[K(0xaa)][K(0xc9)]?K(0x86)+i[K(0xaa)][K(0xc3)](0x0,0xf)['map'](j=>j['name']+':\x20'+j[K(0xb5)])[K(0xc7)]('\x0a'):''));}catch(j){alert(K(0x109)+(j?.[K(0xc4)]??j));}await this[K(0x74)]('symbols');}async[s(0x93)](c,d){const L=s,f=++this[L(0xc1)];this['_pressTab'](c?.[L(0x9b)]===L(0xe8)?c[L(0xef)]?'global':'project':null);let g=[];try{if(c[L(0x9b)]===L(0xe8))return this['_showControls'](f,d,!!c[L(0xef)],c['dir']||'',(c[L(0xef)]?L(0xbb):L(0xde))+(c[L(0xf4)]||''));else{if(c[L(0x9b)]==='3dcontrol'){if(c[L(0x7a)]){const h=String(c['single'])['replace'](/^\//,''),i={'scene-name':h,'scene-type':L(0xe3)};if(c[L(0xef)])i[L(0xa2)]=L(0xef);g=[{'name':h['split']('/')['pop'](),'tag':L(0xab),'elementDef':{'tag':L(0xab),'defaultAttributes':i,'defaultWidth':'400px','defaultHeight':L(0xbd)}}];}}else{if(c['galleryType']===L(0x107)){const j=await c['service'][L(0x10e)](),k=new Set();for(const l of j){if(!l['tag']||k['has'](l['tag']))continue;k['add'](l[L(0xd8)]),g[L(0xf1)]({'name':l[L(0xfe)]??l['tag'],'tag':l['tag'],'elementDef':l});}}}}}catch(m){console[L(0x10b)]('gallery:\x20error\x20loading\x20items',m);}if(f!==this['_seq'])return;this['_showItems'](d,g,c?.['galleryType']===L(0xe8)?(c[L(0xef)]?'global:':'project:')+(c[L(0xf4)]||''):L(0x107));}[s(0xb6)](c,d,e=''){const M=s;this['_head'][M(0xff)]=c+'\x20('+d[M(0xc9)]+')',this['_resetGrid']();if(!d['length']){this['_grid'][M(0xaf)]='<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>';return;}this['_renderNode'](galleryTree(d[M(0xda)](f=>f['path']?f:{...f,'path':String(f[M(0xfe)]??'')[M(0xe1)](/\//g,'∕')})),this[M(0x81)],e);}['_resetGrid'](){const N=s;this.#observer?.[N(0x77)](),this['_grid']['innerHTML']='',this.#observer=new IntersectionObserver(c=>{const O=N;for(const d of c){d['isIntersecting']&&!d['target']['_instantiated']&&(d['target'][O(0xd7)]=!![],this[O(0x99)](d[O(0xee)]),this.#observer['unobserve'](d[O(0xee)]));}},{'root':this['_grid'],'threshold':0.05});}[s(0x8d)](c,d,e){const P=s;for(const g of c['folders']){const h=e+'/'+g['path'],i=this[P(0xe7)](g['name'],h);i['querySelector']('.ct')[P(0xdb)]=String(g[P(0xdc)]);const j=i['querySelector'](P(0xdd));let k=![];const l=()=>{!k&&(k=!![],this['_renderNode'](g,j,e));};if(i[P(0x104)])l();i['addEventListener']('toggle',()=>{const Q=P;if(i['open'])this[Q(0x7b)][Q(0x79)](h),l();else this['_openFolders']['delete'](h);}),d[P(0x83)](i);}this['_renderCards'](c['items'],d);}[s(0x9f)](c,d){const R=s,e=document[R(0x10d)](R(0xd1));e['className']=R(0x110),d[R(0x83)](e);for(const f of c){const g=document['createElement'](R(0xd1));g[R(0xb0)]='card',g['title']=f['tag'];const h=document[R(0x10d)]('div');h['className']=R(0xcb),h['textContent']=f['name'];const i=document['createElement'](R(0xd1));i[R(0xb0)]='card-preview',i['_item']=f,g['appendChild'](h),g['appendChild'](i),g[R(0x8e)]=!![],g['ondragstart']=j=>{const S=R;j[S(0xd5)]['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](f[S(0x94)])),j['dataTransfer']['effectAllowed']=S(0x102),j[S(0xd5)][S(0x105)]='copy';},g[R(0xd0)]=()=>{const T=R;try{const j=this[T(0xd4)]??window[T(0x7e)][T(0xd4)];let k=j['designerTools']['get'](f[T(0x94)]['tool']??NamedTools[T(0xa1)]);if(typeof k=='function')k=new k(f['elementDef']);j[T(0x8f)][T(0x97)]=k;}catch(l){}};if(f['menu'])g[R(0x100)]=j=>{const U=R;j['preventDefault'](),j['stopPropagation'](),f[U(0xd6)](j);};e[R(0x83)](g),this.#observer['observe'](i);}}async['_instantiate'](c){const V=s,d=c['_item'];if(d['preview']){d[V(0xa6)](c);return;}try{if(d[V(0xc2)])await d['load']();if(!d['tag'])return;if(d['tag'][V(0xf6)]('-')&&!customElements['get'](d[V(0xd8)]))return;const f=document[V(0x10d)](d['tag']);if(d['elementDef']?.[V(0x91)])for(const g in d[V(0x94)][V(0x91)]){try{f[V(0x80)](g,d['elementDef'][V(0x91)][g]);}catch(h){}}if(d['elementDef']?.['defaultContent'])f['textContent']=d[V(0x94)]['defaultContent'];else{if(!d['tag'][V(0xf6)]('-')&&!f[V(0xc0)][V(0xc9)])f['textContent']=d['tag'];}c[V(0x83)](f);}catch(i){console[V(0x10b)](V(0xbc),d['tag'],i);}}}customElements[s(0xe5)]('iobroker-webui-widget-gallery',IobrokerWebuiWidgetGallery);
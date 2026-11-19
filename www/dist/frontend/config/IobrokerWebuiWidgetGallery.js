const s=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=-parseInt(r(0x239))/0x1*(parseInt(r(0x260))/0x2)+-parseInt(r(0x262))/0x3+parseInt(r(0x26c))/0x4+parseInt(r(0x23d))/0x5*(parseInt(r(0x266))/0x6)+parseInt(r(0x23e))/0x7*(-parseInt(r(0x267))/0x8)+-parseInt(r(0x1f1))/0x9*(parseInt(r(0x248))/0xa)+parseInt(r(0x21b))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc6fac));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{ContextMenu,dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';function b(c,d){c=c-0x1cb;const e=a();let f=e[c];return f;}import{iobrokerHandler}from'../common/IobrokerHandler.js';import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';import'./MarketplacePanel.js';function a(){const X=['_countsBusy','includes','_renderLevel','scene-scope','copy','text','slice','Symbols\x20(','pop','symbol','setAttribute','global:','_getDomElement','querySelector','className','all','title','_head','preview','folders','_seq','count','21970421sOHcKF','3dcontrol','\x20symbols)','value','createElement','tool','_grid','menu','symbolCodeClose','\x20categories,\x20','market/','_symbolItem','upload\x20failed:\x20','_uploadSymbols','showModal','open','empty','startsWith','catch','join','symbols','dataset','tab','add','<svg\x20class=\x22chev\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222.2\x22\x20aria-hidden=\x22true\x22><path\x20d=\x22m9\x206\x206\x206-6\x206\x22/></svg>','gallery:\x20error\x20loading\x20items','refused','hidden','clipboard','categories','1129263plQEDw','tabs','market','div','353795uBSNtv','742VbBWpG','_showItems','_instantiated','project:','galleryType','service','activate','innerHTML','toggle','map','50jSWRnp','style','close','iobroker-webui-3dscreen-viewer','load','single','.svg','elementDef','tag','substring','Global\x20·\x20','path','_showSymbolCode','_showControls','control','project','defaultContent','span','<div\x20class=\x22empty\x22>no\x20symbols\x20yet:\x20upload\x20SVG\x20files</div>','length','_item','\x20of\x20these\x20files\x20name\x20a\x20copyright\x20owner,\x20for\x20example\x20\x27','.ct','_instantiate','2zLcYph','gallery:\x20could\x20not\x20render','1994598dDrtut','file','setData','has','78kfILAu','34072rDZXgL','addEventListener','isIntersecting','Category\x20(existing\x20or\x20new):\x0a','card-title','1939080youBRq','warn','cannot\x20read\x20this\x20category:\x20','sort','getCustomControl','onclick','getGlobalSubFolders','npm','reduce','trim','getGlobalObjectNames','symbolCodeText','replace','button','<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>','innerText','textContent','show','get','showTab','_showSymbols','_tabs','appendChild','_renderNode','disconnect','symbolCodeCopy','dir','preventDefault','delete','remove','.folder-body','card-preview','target','_openFolders','_folderElement','message','300px','_updateCounts','define','614421DBLhZX','items','name','getElements','global','gallery:\x20listing\x20controls','added','head','Project\x20controls','getAllNames','_pressTab','source','symbolCodeName','folder','src','draggable','querySelectorAll','Delete\x20from\x20the\x20global\x20symbols','details','serviceContainer'];a=function(){return X;};return a();}import{galleryTree}from'./GalleryTree.js';import{openFileDialog}from'../helper/Helper.js';import{previewDataUrl,symbolElementDef}from'../common/SymbolPack.js';import{hasOwnerMark,symbolStore}from'./SymbolStore.js';export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static [s(0x249)]=css`
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
        <dialog id="symbolCode"><div id="symbolCodeName"></div><textarea id="symbolCodeText" readonly spellcheck="false"></textarea><div class="row"><button type="button" id="symbolCodeCopy">Copy</button><button type="button" id="symbolCodeClose">Close</button></div></dialog>`;[s(0x204)];#observer;['_seq']=0x0;['_openFolders']=new Set();constructor(){const t=s;super(),this['_head']=this['_getDomElement'](t(0x1f8)),this[t(0x221)]=this['_getDomElement']('grid'),this['_market']=this['_getDomElement']('market'),this['_tabs']=this[t(0x211)](t(0x23a));for(const c of this['_tabs']['querySelectorAll'](t(0x1d7)))c['onclick']=()=>this[t(0x1dd)](c[t(0x230)]['tab']);}[s(0x1fb)](c){const u=s;for(const e of this[u(0x1df)][u(0x201)]('button'))e[u(0x20f)]('aria-pressed',String(e[u(0x230)][u(0x231)]===c));const d=c===u(0x23b);this['_market']['hidden']=!d,this['_grid'][u(0x236)]=d,this['_head'][u(0x236)]=d;}async['showTab'](c){const v=s,d=++this['_seq'];this[v(0x1fb)](c),this[v(0x1ef)]();if(c===v(0x23b)){this['_market'][v(0x244)]();return;}if(c===v(0x22f)){await this[v(0x1de)](d);return;}const e=c==='global';await this['_showControls'](d,e?'Global\x20controls':v(0x1f9),e,'',e?'global':v(0x257));}async['_showControls'](c,d,e,f,g){const w=s,h=await this['_controlLevel'](e,f);if(c!==this[w(0x219)])return;this['_head'][w(0x1d9)]=d+'\x20('+[h['folders'][w(0x25b)]?h['folders']['length']+'\x20folders':'',h['items'][w(0x25b)]?h['items']['length']+'\x20controls':'']['filter'](Boolean)['join'](',\x20')+')',this['_resetGrid']();if(!h['folders'][w(0x25b)]&&!h['items']['length']){this['_grid'][w(0x245)]=w(0x1d8);return;}this[w(0x207)](h,this['_grid'],g,e);}async['_updateCounts'](){const x=s;if(this['_countsBusy'])return;this['_countsBusy']=!![];try{const [c,d]=await Promise['all']([iobrokerHandler[x(0x1fa)](x(0x256))[x(0x22d)](()=>[]),iobrokerHandler['getAllGlobalNames']('control')['catch'](()=>[])]),e=g=>g['map'](h=>String(h)[x(0x1d6)](/^\//,''))['filter'](h=>!h[x(0x22c)](x(0x225))),f={'project':'Project\x20·\x20'+e(c)['length'],'global':x(0x252)+e(d)['length']};for(const g of this[x(0x1df)][x(0x201)]('button'))if(f[g['dataset']['tab']])g[x(0x1da)]=f[g[x(0x230)]['tab']];}finally{this[x(0x205)]=![];}}async['_controlLevel'](c,f){const y=s,g=f?'/'+String(f)[y(0x1d6)](/^\/+|\/+$/g,''):undefined;let h=[],i=[];try{[h,i]=c?await Promise['all']([iobrokerHandler[y(0x1d0)]('control',g),iobrokerHandler[y(0x1d4)](y(0x256),g)]):await Promise['all']([iobrokerHandler['getSubFolders'](y(0x256),g),iobrokerHandler['getObjectNames']('control',g)]);}catch(l){console[y(0x1cb)](y(0x1f6),l);}const j=g?g[y(0x251)](0x1)+'/':'',k=(m,n)=>String(m)['localeCompare'](String(n));return{'folders':(h??[])['slice']()[y(0x1cd)]((m,n)=>(m===y(0x23b)&&!j)-(n===y(0x23b)&&!j)||k(m,n))[y(0x247)](m=>({'name':m==='market'&&!j?'Marketplace\x20packages\x20(by\x20GitHub\x20owner)':m,'dir':j+m})),'items':(i??[])['slice']()['sort'](k)[y(0x247)](m=>{const o=j+m,p=getCustomControlName(o);return{'name':m,'tag':p,'elementDef':{'tag':p},'load':async()=>{const z=b;if(customElements['get'](p))return;const q=c?await iobrokerHandler['getGlobalObject'](z(0x256),o):await iobrokerHandler[z(0x1ce)](o);if(q&&!customElements[z(0x1dc)](p))generateCustomControl(o,q);}};})};}['_renderLevel'](c,d,e,g){const A=s;for(const h of c['folders']){const i=this['_folderElement'](h['name'],e+'/'+h[A(0x1e4)]),j=i[A(0x212)]('.folder-body'),k=i['querySelector']('.ct');let l=![];const m=async()=>{const B=A;if(l)return;l=!![],j['innerHTML']='<div\x20class=\x22empty\x22>…</div>';const n=await this['_controlLevel'](g,h['dir']);j[B(0x245)]='',k['textContent']=String(n[B(0x218)]['length']+n[B(0x1f2)]['length']);if(!n[B(0x218)][B(0x25b)]&&!n['items'][B(0x25b)])j[B(0x245)]='<div\x20class=\x22empty\x22>empty</div>';else this['_renderLevel'](n,j,e,g);};if(i[A(0x22a)])m();i['addEventListener'](A(0x246),()=>{const C=A;if(i[C(0x22a)])this[C(0x1eb)][C(0x232)](e+'/'+h[C(0x1e4)]),m();else this[C(0x1eb)]['delete'](e+'/'+h[C(0x1e4)]);}),d['appendChild'](i);}this['_renderCards'](c[A(0x1f2)],d);}[s(0x1ec)](c,d){const D=s,e=document['createElement'](D(0x203));e['className']=D(0x1fe),e[D(0x22a)]=this[D(0x1eb)][D(0x265)](d);const f=document['createElement']('summary');f[D(0x245)]=D(0x233)+'<svg\x20class=\x22ico\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x221.8\x22\x20aria-hidden=\x22true\x22><path\x20d=\x22M3\x207a2\x202\x200\x200\x201\x202-2h4l2\x202h8a2\x202\x200\x200\x201\x202\x202v8a2\x202\x200\x200\x201-2\x202H5a2\x202\x200\x200\x201-2-2z\x22/></svg>';const g=document[D(0x21f)](D(0x259));g['className']='nm',g[D(0x1da)]=c;const h=document['createElement'](D(0x259));h['className']='ct',f['append'](g,h),e[D(0x1e0)](f);const i=document[D(0x21f)](D(0x23c));return i['className']='folder-body',e['appendChild'](i),e;}async[s(0x1de)](d){const E=s,e=await symbolStore[E(0x238)](!![]);if(d!==this[E(0x219)])return;const f=e[E(0x1d2)]((h,i)=>h+(i['count']||0x0),0x0);this[E(0x216)]['innerText']=E(0x20c)+e['length']+E(0x224)+f+E(0x21d);const g=document['createElement'](E(0x1d7));g['type']='button',g[E(0x213)]='upload',g['textContent']='Upload\x20SVG…',g['onclick']=()=>this[E(0x228)](),this[E(0x216)][E(0x1e0)](g),this['_resetGrid']();if(!e[E(0x25b)]){this[E(0x221)][E(0x245)]=E(0x25a);return;}for(const h of e){const i='symbols/'+h['id'],j=this['_folderElement'](h[E(0x1f3)],i);j[E(0x215)]=h[E(0x1fc)]??'',j[E(0x212)](E(0x25e))[E(0x1da)]=String(h[E(0x21a)]??'');const k=j['querySelector']('.folder-body');let l=![];const m=async()=>{const F=E;if(l)return;l=!![],k[F(0x245)]='<div\x20class=\x22empty\x22>…</div>';try{const n=await symbolStore[F(0x22f)](h['id']);k[F(0x245)]='',this['_renderCards'](n['map'](o=>this['_symbolItem'](h['id'],o)),k);}catch(o){l=![],k['innerHTML']='';const p=document[F(0x21f)](F(0x23c));p[F(0x213)]=F(0x22b),p[F(0x1da)]=F(0x1cc)+(o?.[F(0x1ed)]??o),k['appendChild'](p);}};if(j['open'])m();j[E(0x268)]('toggle',()=>{const G=E;if(j['open'])this['_openFolders']['add'](i),m();else this['_openFolders'][G(0x1e6)](i);}),this[E(0x221)][E(0x1e0)](j);}}[s(0x226)](c,d){const I=s;return{'name':d['n'],'tag':d['n'],'elementDef':symbolElementDef(d),'preview':e=>{const H=b,f=document['createElement']('img');f['className']=H(0x20e),f['alt']=d['n'],f[H(0x1ff)]=previewDataUrl(d),e['appendChild'](f);},'menu':e=>ContextMenu[I(0x1db)]([{'title':'Show\x20SVG\x20code','action':()=>this[I(0x254)](d)},{'title':'Copy\x20SVG\x20code','action':()=>navigator[I(0x237)]?.['writeText'](d['s'])},{'title':I(0x202),'action':async()=>{const J=I;if(!confirm('Delete\x20the\x20symbol\x20\x27'+d['n']+'\x27?\x20Screens\x20that\x20already\x20use\x20it\x20keep\x20their\x20copy.'))return;await symbolStore[J(0x1e7)](c,d['n']),await this[J(0x1dd)]('symbols');}}],e)};}['_showSymbolCode'](c){const K=s,d=this['_getDomElement']('symbolCode');this[K(0x211)](K(0x1fd))[K(0x1da)]=c['n'],this[K(0x211)](K(0x1d5))[K(0x21e)]=c['s'],this[K(0x211)](K(0x1e3))[K(0x1cf)]=()=>navigator[K(0x237)]?.['writeText'](c['s']),this[K(0x211)](K(0x223))[K(0x1cf)]=()=>d[K(0x24a)](),d[K(0x229)]();}async[s(0x228)](){const L=s,c=await openFileDialog(L(0x24e),!![],L(0x263));if(!c?.['length'])return;const d=await symbolStore[L(0x238)](),f=prompt(L(0x26a)+d[L(0x247)](i=>i['name'])['join'](',\x20'),d[0x0]?.[L(0x1f3)]??'');if(!f?.['trim']())return;const g=await Promise[L(0x214)](c[L(0x247)](async i=>({'name':i[L(0x1f3)],'text':await i['data']['text']()}))),h=g['filter'](i=>hasOwnerMark(i[L(0x20a)]))['map'](i=>i['name']);if(h[L(0x25b)]&&!confirm(h[L(0x25b)]+L(0x25d)+h[0x0]+'\x27.\x0aUpload\x20them\x20only\x20if\x20you\x20have\x20the\x20right\x20to\x20use\x20them\x20on\x20this\x20system.\x20Upload?'))return;try{const i=await symbolStore['upload'](f[L(0x1d3)](),g);alert(i[L(0x1f7)]['length']+'\x20symbols\x20added\x20to\x20'+f['trim']()+(i[L(0x235)]['length']?'\x0a\x0aRefused:\x0a'+i['refused'][L(0x20b)](0x0,0xf)[L(0x247)](j=>j['name']+':\x20'+j['reason'])[L(0x22e)]('\x0a'):''));}catch(j){alert(L(0x227)+(j?.['message']??j));}await this['showTab']('symbols');}async['showForSource'](c,d){const M=s,f=++this['_seq'];this['_pressTab'](c?.[M(0x242)]===M(0x256)?c[M(0x1f5)]?'global':'project':null);let g=[];try{if(c['galleryType']==='control')return this[M(0x255)](f,d,!!c['global'],c['dir']||'',(c['global']?M(0x210):M(0x241))+(c[M(0x1e4)]||''));else{if(c['galleryType']==='3dcontrol'){if(c[M(0x24d)]){const h=String(c[M(0x24d)])[M(0x1d6)](/^\//,''),i={'scene-name':h,'scene-type':M(0x21c)};if(c['global'])i[M(0x208)]='global';g=[{'name':h['split']('/')[M(0x20d)](),'tag':'iobroker-webui-3dscreen-viewer','elementDef':{'tag':M(0x24b),'defaultAttributes':i,'defaultWidth':'400px','defaultHeight':M(0x1ee)}}];}}else{if(c[M(0x242)]==='npm'){const j=await c[M(0x243)][M(0x1f4)](),k=new Set();for(const l of j){if(!l[M(0x250)]||k['has'](l['tag']))continue;k[M(0x232)](l[M(0x250)]),g['push']({'name':l[M(0x1f3)]??l['tag'],'tag':l[M(0x250)],'elementDef':l});}}}}}catch(m){console['warn'](M(0x234),m);}if(f!==this['_seq'])return;this[M(0x23f)](d,g,c?.[M(0x242)]==='control'?(c['global']?M(0x210):'project:')+(c[M(0x1e4)]||''):M(0x1d1));}[s(0x23f)](c,d,e=''){const N=s;this[N(0x216)][N(0x1d9)]=c+'\x20('+d[N(0x25b)]+')',this['_resetGrid']();if(!d['length']){this[N(0x221)]['innerHTML']=N(0x1d8);return;}this[N(0x1e1)](galleryTree(d[N(0x247)](f=>f['path']?f:{...f,'path':String(f[N(0x1f3)]??'')['replace'](/\//g,'∕')})),this[N(0x221)],e);}['_resetGrid'](){const O=s;this.#observer?.[O(0x1e2)](),this['_grid'][O(0x245)]='',this.#observer=new IntersectionObserver(c=>{const P=O;for(const d of c){d[P(0x269)]&&!d['target'][P(0x240)]&&(d[P(0x1ea)][P(0x240)]=!![],this[P(0x25f)](d[P(0x1ea)]),this.#observer['unobserve'](d['target']));}},{'root':this[O(0x221)],'threshold':0.05});}['_renderNode'](c,d,e){const Q=s;for(const g of c['folders']){const h=e+'/'+g[Q(0x253)],i=this[Q(0x1ec)](g['name'],h);i['querySelector']('.ct')[Q(0x1da)]=String(g[Q(0x21a)]);const j=i['querySelector'](Q(0x1e8));let k=![];const l=()=>{!k&&(k=!![],this['_renderNode'](g,j,e));};if(i[Q(0x22a)])l();i['addEventListener'](Q(0x246),()=>{const R=Q;if(i['open'])this['_openFolders'][R(0x232)](h),l();else this[R(0x1eb)][R(0x1e6)](h);}),d[Q(0x1e0)](i);}this['_renderCards'](c['items'],d);}['_renderCards'](c,d){const S=s,e=document['createElement']('div');e['className']='cards',d['appendChild'](e);for(const f of c){const g=document['createElement'](S(0x23c));g['className']='card',g['title']=f[S(0x250)];const h=document['createElement']('div');h[S(0x213)]=S(0x26b),h['textContent']=f[S(0x1f3)];const i=document['createElement'](S(0x23c));i['className']=S(0x1e9),i[S(0x25c)]=f,g[S(0x1e0)](h),g['appendChild'](i),g[S(0x200)]=!![],g['ondragstart']=j=>{const T=S;j['dataTransfer'][T(0x264)](dragDropFormatNameElementDefinition,JSON['stringify'](f[T(0x24f)])),j['dataTransfer']['effectAllowed']='all',j['dataTransfer']['dropEffect']=T(0x209);},g[S(0x1cf)]=()=>{const U=S;try{const j=this[U(0x204)]??window['appShell']['serviceContainer'];let k=j['designerTools'][U(0x1dc)](f['elementDef'][U(0x220)]??NamedTools['DrawElementTool']);if(typeof k=='function')k=new k(f['elementDef']);j['globalContext']['tool']=k;}catch(l){}};if(f[S(0x222)])g['oncontextmenu']=j=>{const V=S;j[V(0x1e5)](),j['stopPropagation'](),f[V(0x222)](j);};e[S(0x1e0)](g),this.#observer['observe'](i);}}async[s(0x25f)](c){const W=s,d=c['_item'];if(d[W(0x217)]){d[W(0x217)](c);return;}try{if(d[W(0x24c)])await d[W(0x24c)]();if(!d['tag'])return;if(d[W(0x250)][W(0x206)]('-')&&!customElements[W(0x1dc)](d['tag']))return;const f=document['createElement'](d['tag']);if(d[W(0x24f)]?.['defaultAttributes'])for(const g in d[W(0x24f)]['defaultAttributes']){try{f[W(0x20f)](g,d[W(0x24f)]['defaultAttributes'][g]);}catch(h){}}if(d['elementDef']?.[W(0x258)])f[W(0x1da)]=d['elementDef']['defaultContent'];else{if(!d[W(0x250)][W(0x206)]('-')&&!f['childNodes']['length'])f['textContent']=d[W(0x250)];}c[W(0x1e0)](f);}catch(i){console[W(0x1cb)](W(0x261),d[W(0x250)],i);}}}customElements[s(0x1f0)]('iobroker-webui-widget-gallery',IobrokerWebuiWidgetGallery);
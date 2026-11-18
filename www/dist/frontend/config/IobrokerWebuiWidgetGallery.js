const s=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=parseInt(r(0x24c))/0x1+parseInt(r(0x1e7))/0x2*(-parseInt(r(0x1df))/0x3)+-parseInt(r(0x23b))/0x4+parseInt(r(0x22b))/0x5+parseInt(r(0x260))/0x6+-parseInt(r(0x229))/0x7*(parseInt(r(0x24b))/0x8)+-parseInt(r(0x1f9))/0x9*(parseInt(r(0x1f6))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x87b0e));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{ContextMenu,dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';import'./MarketplacePanel.js';function b(c,d){c=c-0x1d5;const e=a();let f=e[c];return f;}function a(){const X=['open','showTab','filter','1755672roaGda','70956nWuqen','Project\x20·\x20','tag','folder','push','dir','_countsBusy','split','oncontextmenu','_pressTab','.folder-body','service','observe','symbols','dropEffect','trim','_tabs','all','_instantiated','onclick','5062032sGftcC','card-preview','function','defaultContent','gallery:\x20listing\x20controls','load','preventDefault','setData','_renderCards','_resetGrid','path','appendChild','warn','writeText','showForSource','upload\x20failed:\x20','innerHTML','_showSymbols','9osNMzv','get','source','refused','symbol','target','DrawElementTool','getAllGlobalNames','3562YuJHxC','textContent','_item','galleryType','market','elementDef','added','sort','folder-body','text','control','toggle','delete','count','_renderLevel','10jSxirj','map','global','1498914kARLPg','includes','upload','_showItems','createElement','iobroker-webui-3dscreen-viewer','dataTransfer','cards','symbolCodeText','_folderElement','substring','_grid','folders','gallery:\x20error\x20loading\x20items','_uploadSymbols','getCustomControl','items','_showControls','_seq','\x20of\x20these\x20files\x20name\x20a\x20copyright\x20owner,\x20for\x20example\x20\x27','_instantiate','activate','tab','querySelectorAll','div','<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>','tabs','name','details','<svg\x20class=\x22chev\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222.2\x22\x20aria-hidden=\x22true\x22><path\x20d=\x22m9\x206\x206\x206-6\x206\x22/></svg>','400px','Upload\x20SVG…','_market','hidden','message','define','length','_getDomElement','Project\x20controls','template','addEventListener','className','querySelector','stopPropagation','slice','_openFolders','add','_head','7SEOyQF','<div\x20class=\x22empty\x22>no\x20symbols\x20yet:\x20upload\x20SVG\x20files</div>','1061055RwnEzP','clipboard','img','symbolCode','getGlobalObject','head','getElements','_symbolItem','value','Marketplace\x20packages\x20(by\x20GitHub\x20owner)','Show\x20SVG\x20code','join','_controlLevel','dataset','project','effectAllowed','718804vpZLaK','close','global:','data','project:','button','single','symbolCodeCopy','catch','_renderNode','replace','file','\x20symbols\x20added\x20to\x20'];a=function(){return X;};return a();}import{galleryTree}from'./GalleryTree.js';import{openFileDialog}from'../helper/Helper.js';import{previewDataUrl,symbolElementDef}from'../common/SymbolPack.js';import{hasOwnerMark,symbolStore}from'./SymbolStore.js';export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        [hidden] { display: none !important; }`;static [s(0x220)]=html`
        <div id="tabs" role="group" aria-label="Gallery source">
            <button type="button" data-tab="project" aria-pressed="false">Project</button>
            <button type="button" data-tab="global" aria-pressed="false">Global</button>
            <button type="button" data-tab="symbols" aria-pressed="false">Symbols</button>
            <button type="button" data-tab="market" aria-pressed="false">Marketplace</button>
        </div>
        <div id="head">gallery</div>
        <div id="grid"><div class="empty">Choose Project, Global or Marketplace above, or a controls folder or a package in the tree.</div></div>
        <iobroker-webui-marketplace id="market" hidden></iobroker-webui-marketplace>
        <dialog id="symbolCode"><div id="symbolCodeName"></div><textarea id="symbolCodeText" readonly spellcheck="false"></textarea><div class="row"><button type="button" id="symbolCodeCopy">Copy</button><button type="button" id="symbolCodeClose">Close</button></div></dialog>`;['serviceContainer'];#observer;['_seq']=0x0;['_openFolders']=new Set();constructor(){const t=s;super(),this[t(0x228)]=this[t(0x21e)](t(0x230)),this[t(0x204)]=this[t(0x21e)]('grid'),this['_market']=this['_getDomElement'](t(0x1eb)),this[t(0x25c)]=this['_getDomElement'](t(0x213));for(const c of this[t(0x25c)][t(0x210)](t(0x240)))c['onclick']=()=>this[t(0x249)](c['dataset']['tab']);}[s(0x255)](c){const u=s;for(const e of this['_tabs']['querySelectorAll']('button'))e['setAttribute']('aria-pressed',String(e['dataset']['tab']===c));const d=c==='market';this[u(0x219)]['hidden']=!d,this[u(0x204)]['hidden']=d,this[u(0x228)][u(0x21a)]=d;}async[s(0x249)](c){const v=s,d=++this[v(0x20b)];this['_pressTab'](c),this['_updateCounts']();if(c===v(0x1eb)){this[v(0x219)][v(0x20e)]();return;}if(c==='symbols'){await this[v(0x1de)](d);return;}const e=c===v(0x1f8);await this[v(0x20a)](d,e?'Global\x20controls':v(0x21f),e,'',e?v(0x1f8):v(0x239));}async[s(0x20a)](c,d,e,f,g){const w=s,h=await this['_controlLevel'](e,f);if(c!==this[w(0x20b)])return;this[w(0x228)]['innerText']=d+'\x20('+[h[w(0x205)]['length']?h['folders']['length']+'\x20folders':'',h[w(0x209)]['length']?h['items'][w(0x21d)]+'\x20controls':'']['filter'](Boolean)[w(0x236)](',\x20')+')',this['_resetGrid']();if(!h[w(0x205)]['length']&&!h[w(0x209)][w(0x21d)]){this['_grid'][w(0x1dd)]=w(0x212);return;}this[w(0x1f5)](h,this['_grid'],g,e);}async['_updateCounts'](){const x=s;if(this['_countsBusy'])return;this['_countsBusy']=!![];try{const [c,d]=await Promise[x(0x25d)]([iobrokerHandler['getAllNames']('control')[x(0x243)](()=>[]),iobrokerHandler[x(0x1e6)](x(0x1f1))[x(0x243)](()=>[])]),e=g=>g['map'](h=>String(h)[x(0x245)](/^\//,''))['filter'](h=>!h['startsWith']('market/')),f={'project':x(0x24d)+e(c)[x(0x21d)],'global':'Global\x20·\x20'+e(d)[x(0x21d)]};for(const g of this['_tabs']['querySelectorAll']('button'))if(f[g['dataset'][x(0x20f)]])g['textContent']=f[g[x(0x238)][x(0x20f)]];}finally{this[x(0x252)]=![];}}async[s(0x237)](c,f){const y=s,g=f?'/'+String(f)['replace'](/^\/+|\/+$/g,''):undefined;let h=[],i=[];try{[h,i]=c?await Promise['all']([iobrokerHandler['getGlobalSubFolders']('control',g),iobrokerHandler['getGlobalObjectNames'](y(0x1f1),g)]):await Promise[y(0x25d)]([iobrokerHandler['getSubFolders']('control',g),iobrokerHandler['getObjectNames']('control',g)]);}catch(l){console['warn'](y(0x264),l);}const j=g?g[y(0x203)](0x1)+'/':'',k=(m,n)=>String(m)['localeCompare'](String(n));return{'folders':(h??[])['slice']()['sort']((m,n)=>(m==='market'&&!j)-(n==='market'&&!j)||k(m,n))[y(0x1f7)](m=>({'name':m==='market'&&!j?y(0x234):m,'dir':j+m})),'items':(i??[])[y(0x225)]()[y(0x1ee)](k)[y(0x1f7)](m=>{const o=j+m,p=getCustomControlName(o);return{'name':m,'tag':p,'elementDef':{'tag':p},'load':async()=>{const z=b;if(customElements[z(0x1e0)](p))return;const q=c?await iobrokerHandler[z(0x22f)](z(0x1f1),o):await iobrokerHandler[z(0x208)](o);if(q&&!customElements[z(0x1e0)](p))generateCustomControl(o,q);}};})};}['_renderLevel'](c,d,e,g){const A=s;for(const h of c[A(0x205)]){const i=this[A(0x202)](h[A(0x214)],e+'/'+h[A(0x251)]),j=i['querySelector']('.folder-body'),k=i['querySelector']('.ct');let l=![];const m=async()=>{const B=A;if(l)return;l=!![],j[B(0x1dd)]='<div\x20class=\x22empty\x22>…</div>';const n=await this['_controlLevel'](g,h[B(0x251)]);j[B(0x1dd)]='',k['textContent']=String(n['folders']['length']+n['items'][B(0x21d)]);if(!n['folders'][B(0x21d)]&&!n[B(0x209)]['length'])j[B(0x1dd)]='<div\x20class=\x22empty\x22>empty</div>';else this['_renderLevel'](n,j,e,g);};if(i['open'])m();i[A(0x221)](A(0x1f2),()=>{const C=A;if(i['open'])this['_openFolders']['add'](e+'/'+h['dir']),m();else this[C(0x226)][C(0x1f3)](e+'/'+h[C(0x251)]);}),d['appendChild'](i);}this[A(0x1d5)](c[A(0x209)],d);}[s(0x202)](c,d){const D=s,e=document['createElement'](D(0x215));e['className']=D(0x24f),e['open']=this[D(0x226)]['has'](d);const f=document['createElement']('summary');f['innerHTML']=D(0x216)+'<svg\x20class=\x22ico\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x221.8\x22\x20aria-hidden=\x22true\x22><path\x20d=\x22M3\x207a2\x202\x200\x200\x201\x202-2h4l2\x202h8a2\x202\x200\x200\x201\x202\x202v8a2\x202\x200\x200\x201-2\x202H5a2\x202\x200\x200\x201-2-2z\x22/></svg>';const g=document[D(0x1fd)]('span');g['className']='nm',g['textContent']=c;const h=document['createElement']('span');h[D(0x222)]='ct',f['append'](g,h),e[D(0x1d8)](f);const i=document[D(0x1fd)]('div');return i[D(0x222)]=D(0x1ef),e[D(0x1d8)](i),e;}async[s(0x1de)](d){const E=s,e=await symbolStore['categories'](!![]);if(d!==this['_seq'])return;const f=e['reduce']((h,i)=>h+(i[E(0x1f4)]||0x0),0x0);this[E(0x228)]['innerText']='Symbols\x20('+e[E(0x21d)]+'\x20categories,\x20'+f+'\x20symbols)';const g=document['createElement']('button');g['type']='button',g['className']=E(0x1fb),g['textContent']=E(0x218),g['onclick']=()=>this[E(0x207)](),this['_head']['appendChild'](g),this[E(0x1d6)]();if(!e[E(0x21d)]){this[E(0x204)][E(0x1dd)]=E(0x22a);return;}for(const h of e){const i='symbols/'+h['id'],j=this['_folderElement'](h['name'],i);j['title']=h[E(0x1e1)]??'',j[E(0x223)]('.ct')['textContent']=String(h['count']??'');const k=j[E(0x223)](E(0x256));let l=![];const m=async()=>{const F=E;if(l)return;l=!![],k[F(0x1dd)]='<div\x20class=\x22empty\x22>…</div>';try{const n=await symbolStore[F(0x259)](h['id']);k['innerHTML']='',this[F(0x1d5)](n[F(0x1f7)](o=>this[F(0x232)](h['id'],o)),k);}catch(o){l=![],k['innerHTML']='';const p=document['createElement'](F(0x211));p[F(0x222)]='empty',p[F(0x1e8)]='cannot\x20read\x20this\x20category:\x20'+(o?.[F(0x21b)]??o),k[F(0x1d8)](p);}};if(j['open'])m();j[E(0x221)]('toggle',()=>{const G=E;if(j['open'])this['_openFolders'][G(0x227)](i),m();else this['_openFolders'][G(0x1f3)](i);}),this['_grid']['appendChild'](j);}}['_symbolItem'](c,d){const I=s;return{'name':d['n'],'tag':d['n'],'elementDef':symbolElementDef(d),'preview':e=>{const H=b,f=document['createElement'](H(0x22d));f[H(0x222)]=H(0x1e3),f['alt']=d['n'],f['src']=previewDataUrl(d),e['appendChild'](f);},'menu':e=>ContextMenu['show']([{'title':I(0x235),'action':()=>this['_showSymbolCode'](d)},{'title':'Copy\x20SVG\x20code','action':()=>navigator[I(0x22c)]?.['writeText'](d['s'])},{'title':'Delete\x20from\x20the\x20global\x20symbols','action':async()=>{const J=I;if(!confirm('Delete\x20the\x20symbol\x20\x27'+d['n']+'\x27?\x20Screens\x20that\x20already\x20use\x20it\x20keep\x20their\x20copy.'))return;await symbolStore['remove'](c,d['n']),await this[J(0x249)]('symbols');}}],e)};}['_showSymbolCode'](c){const K=s,d=this[K(0x21e)](K(0x22e));this['_getDomElement']('symbolCodeName')['textContent']=c['n'],this[K(0x21e)](K(0x201))[K(0x233)]=c['s'],this[K(0x21e)](K(0x242))[K(0x25f)]=()=>navigator['clipboard']?.[K(0x1da)](c['s']),this[K(0x21e)]('symbolCodeClose')['onclick']=()=>d[K(0x23c)](),d['showModal']();}async['_uploadSymbols'](){const L=s,c=await openFileDialog('.svg',!![],L(0x246));if(!c?.[L(0x21d)])return;const d=await symbolStore['categories'](),f=prompt('Category\x20(existing\x20or\x20new):\x0a'+d[L(0x1f7)](i=>i['name'])[L(0x236)](',\x20'),d[0x0]?.[L(0x214)]??'');if(!f?.['trim']())return;const g=await Promise[L(0x25d)](c['map'](async i=>({'name':i[L(0x214)],'text':await i[L(0x23e)][L(0x1f0)]()}))),h=g[L(0x24a)](i=>hasOwnerMark(i['text']))[L(0x1f7)](i=>i['name']);if(h[L(0x21d)]&&!confirm(h['length']+L(0x20c)+h[0x0]+'\x27.\x0aUpload\x20them\x20only\x20if\x20you\x20have\x20the\x20right\x20to\x20use\x20them\x20on\x20this\x20system.\x20Upload?'))return;try{const i=await symbolStore['upload'](f[L(0x25b)](),g);alert(i[L(0x1ed)]['length']+L(0x247)+f['trim']()+(i[L(0x1e2)][L(0x21d)]?'\x0a\x0aRefused:\x0a'+i['refused']['slice'](0x0,0xf)['map'](j=>j[L(0x214)]+':\x20'+j['reason'])[L(0x236)]('\x0a'):''));}catch(j){alert(L(0x1dc)+(j?.['message']??j));}await this['showTab']('symbols');}async[s(0x1db)](c,d){const M=s,f=++this[M(0x20b)];this['_pressTab'](c?.[M(0x1ea)]==='control'?c['global']?M(0x1f8):M(0x239):null);let g=[];try{if(c['galleryType']==='control')return this[M(0x20a)](f,d,!!c['global'],c['dir']||'',(c[M(0x1f8)]?M(0x23d):M(0x23f))+(c[M(0x251)]||''));else{if(c['galleryType']==='3dcontrol'){if(c[M(0x241)]){const h=String(c['single'])[M(0x245)](/^\//,''),i={'scene-name':h,'scene-type':'3dcontrol'};if(c[M(0x1f8)])i['scene-scope']='global';g=[{'name':h[M(0x253)]('/')['pop'](),'tag':M(0x1fe),'elementDef':{'tag':'iobroker-webui-3dscreen-viewer','defaultAttributes':i,'defaultWidth':M(0x217),'defaultHeight':'300px'}}];}}else{if(c['galleryType']==='npm'){const j=await c[M(0x257)][M(0x231)](),k=new Set();for(const l of j){if(!l[M(0x24e)]||k['has'](l[M(0x24e)]))continue;k[M(0x227)](l[M(0x24e)]),g[M(0x250)]({'name':l[M(0x214)]??l[M(0x24e)],'tag':l[M(0x24e)],'elementDef':l});}}}}}catch(m){console[M(0x1d9)](M(0x206),m);}if(f!==this['_seq'])return;this[M(0x1fc)](d,g,c?.[M(0x1ea)]===M(0x1f1)?(c['global']?'global:':M(0x23f))+(c['dir']||''):'npm');}[s(0x1fc)](c,d,e=''){const N=s;this['_head']['innerText']=c+'\x20('+d[N(0x21d)]+')',this[N(0x1d6)]();if(!d[N(0x21d)]){this[N(0x204)][N(0x1dd)]=N(0x212);return;}this[N(0x244)](galleryTree(d[N(0x1f7)](f=>f['path']?f:{...f,'path':String(f['name']??'')[N(0x245)](/\//g,'∕')})),this[N(0x204)],e);}['_resetGrid'](){this.#observer?.['disconnect'](),this['_grid']['innerHTML']='',this.#observer=new IntersectionObserver(c=>{const O=b;for(const d of c){d['isIntersecting']&&!d[O(0x1e4)][O(0x25e)]&&(d[O(0x1e4)][O(0x25e)]=!![],this[O(0x20d)](d['target']),this.#observer['unobserve'](d[O(0x1e4)]));}},{'root':this['_grid'],'threshold':0.05});}[s(0x244)](c,d,e){const P=s;for(const g of c[P(0x205)]){const h=e+'/'+g[P(0x1d7)],i=this['_folderElement'](g['name'],h);i[P(0x223)]('.ct')[P(0x1e8)]=String(g['count']);const j=i[P(0x223)](P(0x256));let k=![];const l=()=>{const Q=P;!k&&(k=!![],this[Q(0x244)](g,j,e));};if(i['open'])l();i[P(0x221)](P(0x1f2),()=>{const R=P;if(i[R(0x248)])this[R(0x226)]['add'](h),l();else this['_openFolders']['delete'](h);}),d['appendChild'](i);}this[P(0x1d5)](c['items'],d);}[s(0x1d5)](c,d){const S=s,e=document['createElement'](S(0x211));e[S(0x222)]=S(0x200),d['appendChild'](e);for(const f of c){const g=document['createElement']('div');g[S(0x222)]='card',g['title']=f[S(0x24e)];const h=document[S(0x1fd)](S(0x211));h['className']='card-title',h['textContent']=f['name'];const i=document[S(0x1fd)]('div');i[S(0x222)]=S(0x261),i[S(0x1e9)]=f,g[S(0x1d8)](h),g[S(0x1d8)](i),g['draggable']=!![],g['ondragstart']=j=>{const T=S;j['dataTransfer'][T(0x267)](dragDropFormatNameElementDefinition,JSON['stringify'](f[T(0x1ec)])),j[T(0x1ff)][T(0x23a)]='all',j['dataTransfer'][T(0x25a)]='copy';},g['onclick']=()=>{const U=S;try{const j=this['serviceContainer']??window['appShell']['serviceContainer'];let k=j['designerTools']['get'](f['elementDef']['tool']??NamedTools[U(0x1e5)]);if(typeof k==U(0x262))k=new k(f['elementDef']);j['globalContext']['tool']=k;}catch(l){}};if(f['menu'])g[S(0x254)]=j=>{const V=S;j[V(0x266)](),j[V(0x224)](),f['menu'](j);};e[S(0x1d8)](g),this.#observer[S(0x258)](i);}}async[s(0x20d)](c){const W=s,d=c[W(0x1e9)];if(d['preview']){d['preview'](c);return;}try{if(d[W(0x265)])await d[W(0x265)]();if(!d['tag'])return;if(d['tag'][W(0x1fa)]('-')&&!customElements['get'](d['tag']))return;const f=document[W(0x1fd)](d['tag']);if(d[W(0x1ec)]?.['defaultAttributes'])for(const g in d['elementDef']['defaultAttributes']){try{f['setAttribute'](g,d['elementDef']['defaultAttributes'][g]);}catch(h){}}if(d[W(0x1ec)]?.['defaultContent'])f['textContent']=d['elementDef'][W(0x263)];else{if(!d[W(0x24e)][W(0x1fa)]('-')&&!f['childNodes'][W(0x21d)])f['textContent']=d[W(0x24e)];}c[W(0x1d8)](f);}catch(i){console['warn']('gallery:\x20could\x20not\x20render',d[W(0x24e)],i);}}}customElements[s(0x21c)]('iobroker-webui-widget-gallery',IobrokerWebuiWidgetGallery);
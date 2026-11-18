const s=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=parseInt(r(0x21f))/0x1*(parseInt(r(0x218))/0x2)+parseInt(r(0x263))/0x3*(-parseInt(r(0x1eb))/0x4)+-parseInt(r(0x20a))/0x5+parseInt(r(0x1fe))/0x6+-parseInt(r(0x1f4))/0x7+-parseInt(r(0x1ff))/0x8*(parseInt(r(0x25c))/0x9)+parseInt(r(0x219))/0xa*(parseInt(r(0x22f))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x32fda));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{ContextMenu,dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';import'./MarketplacePanel.js';import{galleryTree}from'./GalleryTree.js';function b(c,d){c=c-0x1ea;const e=a();let f=e[c];return f;}import{openFileDialog}from'../helper/Helper.js';import{previewDataUrl,symbolElementDef}from'../common/SymbolPack.js';import{hasOwnerMark,symbolStore}from'./SymbolStore.js';function a(){const Y=['stopPropagation','\x20folders','split','map','1709255MlkJKN','Delete\x20from\x20the\x20global\x20symbols','items','.folder-body','reduce','value','galleryType','add','scene-scope','symbolCodeText','querySelectorAll','writeText','global','_showItems','237722AUwcht','70mzsiMv','path','localeCompare','defaultAttributes','npm','folder-body','1CAqJyx','\x20of\x20these\x20files\x20name\x20a\x20copyright\x20owner,\x20for\x20example\x20\x27','open','load','elementDef','addEventListener','pop','div','replace','_grid','iobroker-webui-3dscreen-viewer','categories','showTab','getGlobalSubFolders','symbols/','\x20controls','1060862QwptmV','preventDefault','join','tool','show','toggle','catch','has','append','dataTransfer','project','get','_resetGrid','_showSymbolCode','control','_renderCards','trim','card-preview','_getDomElement','<div\x20class=\x22empty\x22>…</div>','Project\x20controls','_head','count','.ct','folders','message','serviceContainer','slice','added','delete','preview','folder','Show\x20SVG\x20code','menu','length','symbol','textContent','getGlobalObjectNames','dataset','title','card-title','innerHTML','ondragstart','appendChild','single','1431wQdzNy','getElements','gallery:\x20error\x20loading\x20items','_showControls','_pressTab','effectAllowed','showModal','9YhLCts','setAttribute','querySelector','_openFolders','project:','tag','span','type','button','upload','innerText','Delete\x20the\x20symbol\x20\x27','_updateCounts','cards','defaultContent','isIntersecting','_seq','_tabs','dir','details','name','_uploadSymbols','text','_market','all','400px','gallery:\x20listing\x20controls','function','stringify','designerTools','_instantiate','remove','Upload\x20SVG…','tab','dropEffect','254948JrcfBk','_folderElement','warn','sort','symbols','template','createElement','<svg\x20class=\x22ico\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x221.8\x22\x20aria-hidden=\x22true\x22><path\x20d=\x22M3\x207a2\x202\x200\x200\x201\x202-2h4l2\x202h8a2\x202\x200\x200\x201\x202\x202v8a2\x202\x200\x200\x201-2\x202H5a2\x202\x200\x200\x201-2-2z\x22/></svg>','getObjectNames','991711CtamKJ','_countsBusy','_renderNode','Marketplace\x20packages\x20(by\x20GitHub\x20owner)','style','target','symbolCodeCopy','_symbolItem','market','\x0a\x0aRefused:\x0a','2156766FEjdPS','13576eunOsj','className','filter','onclick','_controlLevel','showForSource','activate'];a=function(){return Y;};return a();}export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static [s(0x1f8)]=css`
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
        [hidden] { display: none !important; }`;static [s(0x1f0)]=html`
        <div id="tabs" role="group" aria-label="Gallery source">
            <button type="button" data-tab="project" aria-pressed="false">Project</button>
            <button type="button" data-tab="global" aria-pressed="false">Global</button>
            <button type="button" data-tab="symbols" aria-pressed="false">Symbols</button>
            <button type="button" data-tab="market" aria-pressed="false">Marketplace</button>
        </div>
        <div id="head">gallery</div>
        <div id="grid"><div class="empty">Choose Project, Global or Marketplace above, or a controls folder or a package in the tree.</div></div>
        <iobroker-webui-marketplace id="market" hidden></iobroker-webui-marketplace>
        <dialog id="symbolCode"><div id="symbolCodeName"></div><textarea id="symbolCodeText" readonly spellcheck="false"></textarea><div class="row"><button type="button" id="symbolCodeCopy">Copy</button><button type="button" id="symbolCodeClose">Close</button></div></dialog>`;['serviceContainer'];#observer;['_seq']=0x0;[s(0x266)]=new Set();constructor(){const t=s;super(),this['_head']=this[t(0x241)]('head'),this['_grid']=this['_getDomElement']('grid'),this[t(0x27a)]=this['_getDomElement'](t(0x1fc)),this[t(0x274)]=this[t(0x241)]('tabs');for(const c of this[t(0x274)][t(0x214)]('button'))c[t(0x202)]=()=>this[t(0x22b)](c[t(0x255)][t(0x284)]);}[s(0x260)](c){const u=s;for(const e of this['_tabs']['querySelectorAll'](u(0x26b)))e[u(0x264)]('aria-pressed',String(e[u(0x255)]['tab']===c));const d=c===u(0x1fc);this[u(0x27a)]['hidden']=!d,this[u(0x228)]['hidden']=d,this['_head']['hidden']=d;}async['showTab'](c){const v=s,d=++this['_seq'];this['_pressTab'](c),this[v(0x26f)]();if(c===v(0x1fc)){this['_market'][v(0x205)]();return;}if(c==='symbols'){await this['_showSymbols'](d);return;}const e=c===v(0x216);await this['_showControls'](d,e?'Global\x20controls':v(0x243),e,'',e?'global':v(0x239));}async['_showControls'](c,d,e,f,g){const w=s,h=await this['_controlLevel'](e,f);if(c!==this[w(0x273)])return;this['_head']['innerText']=d+'\x20('+[h['folders'][w(0x251)]?h['folders'][w(0x251)]+w(0x207):'',h['items'][w(0x251)]?h[w(0x20c)][w(0x251)]+w(0x22e):''][w(0x201)](Boolean)[w(0x231)](',\x20')+')',this[w(0x23b)]();if(!h[w(0x247)][w(0x251)]&&!h[w(0x20c)][w(0x251)]){this[w(0x228)][w(0x258)]='<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>';return;}this['_renderLevel'](h,this['_grid'],g,e);}async[s(0x26f)](){const x=s;if(this[x(0x1f5)])return;this['_countsBusy']=!![];try{const [c,d]=await Promise['all']([iobrokerHandler['getAllNames'](x(0x23d))['catch'](()=>[]),iobrokerHandler['getAllGlobalNames'](x(0x23d))[x(0x235)](()=>[])]),e=g=>g['map'](h=>String(h)[x(0x227)](/^\//,''))[x(0x201)](h=>!h['startsWith']('market/')),f={'project':'Project\x20·\x20'+e(c)[x(0x251)],'global':'Global\x20·\x20'+e(d)[x(0x251)]};for(const g of this['_tabs'][x(0x214)](x(0x26b)))if(f[g['dataset']['tab']])g[x(0x253)]=f[g[x(0x255)]['tab']];}finally{this['_countsBusy']=![];}}async[s(0x203)](c,f){const y=s,g=f?'/'+String(f)[y(0x227)](/^\/+|\/+$/g,''):undefined;let h=[],i=[];try{[h,i]=c?await Promise[y(0x27b)]([iobrokerHandler[y(0x22c)]('control',g),iobrokerHandler[y(0x254)]('control',g)]):await Promise['all']([iobrokerHandler['getSubFolders']('control',g),iobrokerHandler[y(0x1f3)]('control',g)]);}catch(l){console['warn'](y(0x27d),l);}const j=g?g['substring'](0x1)+'/':'',k=(m,n)=>String(m)[y(0x21b)](String(n));return{'folders':(h??[])['slice']()[y(0x1ee)]((m,n)=>(m===y(0x1fc)&&!j)-(n===y(0x1fc)&&!j)||k(m,n))['map'](m=>({'name':m===y(0x1fc)&&!j?y(0x1f7):m,'dir':j+m})),'items':(i??[])[y(0x24a)]()[y(0x1ee)](k)['map'](m=>{const o=j+m,p=getCustomControlName(o);return{'name':m,'tag':p,'elementDef':{'tag':p},'load':async()=>{const z=b;if(customElements[z(0x23a)](p))return;const q=c?await iobrokerHandler['getGlobalObject']('control',o):await iobrokerHandler['getCustomControl'](o);if(q&&!customElements['get'](p))generateCustomControl(o,q);}};})};}['_renderLevel'](c,d,e,g){const A=s;for(const h of c[A(0x247)]){const i=this['_folderElement'](h['name'],e+'/'+h[A(0x275)]),j=i['querySelector']('.folder-body'),k=i['querySelector'](A(0x246));let l=![];const m=async()=>{const B=A;if(l)return;l=!![],j[B(0x258)]=B(0x242);const n=await this['_controlLevel'](g,h['dir']);j['innerHTML']='',k['textContent']=String(n['folders'][B(0x251)]+n[B(0x20c)]['length']);if(!n['folders'][B(0x251)]&&!n[B(0x20c)]['length'])j[B(0x258)]='<div\x20class=\x22empty\x22>empty</div>';else this['_renderLevel'](n,j,e,g);};if(i[A(0x221)])m();i[A(0x224)]('toggle',()=>{const C=A;if(i['open'])this[C(0x266)]['add'](e+'/'+h['dir']),m();else this['_openFolders'][C(0x24c)](e+'/'+h['dir']);}),d['appendChild'](i);}this['_renderCards'](c['items'],d);}[s(0x1ec)](c,d){const D=s,e=document['createElement'](D(0x276));e[D(0x200)]=D(0x24e),e['open']=this[D(0x266)][D(0x236)](d);const f=document[D(0x1f1)]('summary');f[D(0x258)]='<svg\x20class=\x22chev\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222.2\x22\x20aria-hidden=\x22true\x22><path\x20d=\x22m9\x206\x206\x206-6\x206\x22/></svg>'+D(0x1f2);const g=document['createElement'](D(0x269));g[D(0x200)]='nm',g['textContent']=c;const h=document[D(0x1f1)](D(0x269));h['className']='ct',f[D(0x237)](g,h),e['appendChild'](f);const i=document['createElement'](D(0x226));return i['className']=D(0x21e),e['appendChild'](i),e;}async['_showSymbols'](d){const E=s,e=await symbolStore[E(0x22a)](!![]);if(d!==this['_seq'])return;const f=e[E(0x20e)]((h,i)=>h+(i['count']||0x0),0x0);this[E(0x244)][E(0x26d)]='Symbols\x20('+e['length']+'\x20categories,\x20'+f+'\x20symbols)';const g=document[E(0x1f1)](E(0x26b));g[E(0x26a)]=E(0x26b),g['className']=E(0x26c),g[E(0x253)]=E(0x283),g['onclick']=()=>this['_uploadSymbols'](),this[E(0x244)]['appendChild'](g),this['_resetGrid']();if(!e['length']){this['_grid']['innerHTML']='<div\x20class=\x22empty\x22>no\x20symbols\x20yet:\x20upload\x20SVG\x20files</div>';return;}for(const h of e){const i=E(0x22d)+h['id'],j=this[E(0x1ec)](h['name'],i);j[E(0x256)]=h['source']??'',j['querySelector']('.ct')[E(0x253)]=String(h[E(0x245)]??'');const k=j[E(0x265)]('.folder-body');let l=![];const m=async()=>{const F=E;if(l)return;l=!![],k[F(0x258)]=F(0x242);try{const n=await symbolStore[F(0x1ef)](h['id']);k[F(0x258)]='',this[F(0x23e)](n[F(0x209)](o=>this['_symbolItem'](h['id'],o)),k);}catch(o){l=![],k[F(0x258)]='';const p=document[F(0x1f1)](F(0x226));p[F(0x200)]='empty',p['textContent']='cannot\x20read\x20this\x20category:\x20'+(o?.[F(0x248)]??o),k['appendChild'](p);}};if(j[E(0x221)])m();j[E(0x224)]('toggle',()=>{const G=E;if(j['open'])this['_openFolders'][G(0x211)](i),m();else this[G(0x266)][G(0x24c)](i);}),this[E(0x228)]['appendChild'](j);}}[s(0x1fb)](c,d){const I=s;return{'name':d['n'],'tag':d['n'],'elementDef':symbolElementDef(d),'preview':e=>{const H=b,f=document['createElement']('img');f['className']=H(0x252),f['alt']=d['n'],f['src']=previewDataUrl(d),e['appendChild'](f);},'menu':e=>ContextMenu[I(0x233)]([{'title':I(0x24f),'action':()=>this[I(0x23c)](d)},{'title':'Copy\x20SVG\x20code','action':()=>navigator['clipboard']?.['writeText'](d['s'])},{'title':I(0x20b),'action':async()=>{const J=I;if(!confirm(J(0x26e)+d['n']+'\x27?\x20Screens\x20that\x20already\x20use\x20it\x20keep\x20their\x20copy.'))return;await symbolStore[J(0x282)](c,d['n']),await this[J(0x22b)](J(0x1ef));}}],e)};}[s(0x23c)](c){const K=s,d=this['_getDomElement']('symbolCode');this['_getDomElement']('symbolCodeName')[K(0x253)]=c['n'],this[K(0x241)](K(0x213))[K(0x20f)]=c['s'],this[K(0x241)](K(0x1fa))['onclick']=()=>navigator['clipboard']?.[K(0x215)](c['s']),this[K(0x241)]('symbolCodeClose')['onclick']=()=>d['close'](),d[K(0x262)]();}async[s(0x278)](){const L=s,c=await openFileDialog('.svg',!![],'file');if(!c?.[L(0x251)])return;const d=await symbolStore[L(0x22a)](),f=prompt('Category\x20(existing\x20or\x20new):\x0a'+d['map'](i=>i[L(0x277)])[L(0x231)](',\x20'),d[0x0]?.['name']??'');if(!f?.['trim']())return;const g=await Promise[L(0x27b)](c[L(0x209)](async i=>({'name':i['name'],'text':await i['data'][L(0x279)]()}))),h=g['filter'](i=>hasOwnerMark(i['text']))[L(0x209)](i=>i[L(0x277)]);if(h['length']&&!confirm(h['length']+L(0x220)+h[0x0]+'\x27.\x0aUpload\x20them\x20only\x20if\x20you\x20have\x20the\x20right\x20to\x20use\x20them\x20on\x20this\x20system.\x20Upload?'))return;try{const i=await symbolStore['upload'](f['trim'](),g);alert(i[L(0x24b)]['length']+'\x20symbols\x20added\x20to\x20'+f[L(0x23f)]()+(i['refused']['length']?L(0x1fd)+i['refused'][L(0x24a)](0x0,0xf)['map'](j=>j['name']+':\x20'+j['reason'])['join']('\x0a'):''));}catch(j){alert('upload\x20failed:\x20'+(j?.[L(0x248)]??j));}await this['showTab'](L(0x1ef));}async[s(0x204)](c,d){const M=s,f=++this[M(0x273)];this[M(0x260)](c?.[M(0x210)]==='control'?c['global']?'global':'project':null);let g=[];try{if(c[M(0x210)]==='control')return this[M(0x25f)](f,d,!!c['global'],c[M(0x275)]||'',(c[M(0x216)]?'global:':M(0x267))+(c['dir']||''));else{if(c['galleryType']==='3dcontrol'){if(c[M(0x25b)]){const h=String(c[M(0x25b)])[M(0x227)](/^\//,''),i={'scene-name':h,'scene-type':'3dcontrol'};if(c[M(0x216)])i[M(0x212)]=M(0x216);g=[{'name':h[M(0x208)]('/')[M(0x225)](),'tag':M(0x229),'elementDef':{'tag':M(0x229),'defaultAttributes':i,'defaultWidth':M(0x27c),'defaultHeight':'300px'}}];}}else{if(c[M(0x210)]===M(0x21d)){const j=await c['service'][M(0x25d)](),k=new Set();for(const l of j){if(!l['tag']||k[M(0x236)](l['tag']))continue;k['add'](l[M(0x268)]),g['push']({'name':l[M(0x277)]??l['tag'],'tag':l[M(0x268)],'elementDef':l});}}}}}catch(m){console[M(0x1ed)](M(0x25e),m);}if(f!==this['_seq'])return;this[M(0x217)](d,g,c?.[M(0x210)]===M(0x23d)?(c['global']?'global:':M(0x267))+(c['dir']||''):'npm');}['_showItems'](c,d,e=''){const N=s;this[N(0x244)]['innerText']=c+'\x20('+d['length']+')',this['_resetGrid']();if(!d[N(0x251)]){this['_grid'][N(0x258)]='<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>';return;}this['_renderNode'](galleryTree(d['map'](f=>f['path']?f:{...f,'path':String(f['name']??'')['replace'](/\//g,'∕')})),this[N(0x228)],e);}['_resetGrid'](){const P=s;this.#observer?.['disconnect'](),this['_grid']['innerHTML']='',this.#observer=new IntersectionObserver(c=>{const O=b;for(const d of c){d[O(0x272)]&&!d[O(0x1f9)]['_instantiated']&&(d['target']['_instantiated']=!![],this[O(0x281)](d[O(0x1f9)]),this.#observer['unobserve'](d['target']));}},{'root':this[P(0x228)],'threshold':0.05});}[s(0x1f6)](c,d,e){const Q=s;for(const g of c[Q(0x247)]){const h=e+'/'+g[Q(0x21a)],i=this[Q(0x1ec)](g['name'],h);i['querySelector']('.ct')[Q(0x253)]=String(g['count']);const j=i[Q(0x265)](Q(0x20d));let k=![];const l=()=>{const R=Q;!k&&(k=!![],this[R(0x1f6)](g,j,e));};if(i['open'])l();i['addEventListener'](Q(0x234),()=>{const S=Q;if(i['open'])this['_openFolders'][S(0x211)](h),l();else this['_openFolders']['delete'](h);}),d['appendChild'](i);}this[Q(0x23e)](c[Q(0x20c)],d);}['_renderCards'](c,d){const T=s,e=document[T(0x1f1)](T(0x226));e[T(0x200)]=T(0x270),d['appendChild'](e);for(const f of c){const g=document[T(0x1f1)](T(0x226));g['className']='card',g[T(0x256)]=f[T(0x268)];const h=document['createElement'](T(0x226));h['className']=T(0x257),h[T(0x253)]=f[T(0x277)];const i=document['createElement']('div');i['className']=T(0x240),i['_item']=f,g[T(0x25a)](h),g[T(0x25a)](i),g['draggable']=!![],g[T(0x259)]=j=>{const U=T;j['dataTransfer']['setData'](dragDropFormatNameElementDefinition,JSON[U(0x27f)](f[U(0x223)])),j[U(0x238)][U(0x261)]=U(0x27b),j[U(0x238)][U(0x1ea)]='copy';},g['onclick']=()=>{const V=T;try{const j=this[V(0x249)]??window['appShell'][V(0x249)];let k=j[V(0x280)][V(0x23a)](f[V(0x223)][V(0x232)]??NamedTools['DrawElementTool']);if(typeof k==V(0x27e))k=new k(f[V(0x223)]);j['globalContext']['tool']=k;}catch(l){}};if(f['menu'])g['oncontextmenu']=j=>{const W=T;j[W(0x230)](),j[W(0x206)](),f[W(0x250)](j);};e['appendChild'](g),this.#observer['observe'](i);}}async['_instantiate'](c){const X=s,d=c['_item'];if(d['preview']){d[X(0x24d)](c);return;}try{if(d[X(0x222)])await d[X(0x222)]();if(!d[X(0x268)])return;if(d[X(0x268)]['includes']('-')&&!customElements['get'](d['tag']))return;const f=document[X(0x1f1)](d[X(0x268)]);if(d['elementDef']?.['defaultAttributes'])for(const g in d[X(0x223)][X(0x21c)]){try{f['setAttribute'](g,d['elementDef'][X(0x21c)][g]);}catch(h){}}if(d['elementDef']?.[X(0x271)])f[X(0x253)]=d[X(0x223)]['defaultContent'];else{if(!d[X(0x268)]['includes']('-')&&!f['childNodes']['length'])f['textContent']=d[X(0x268)];}c['appendChild'](f);}catch(i){console['warn']('gallery:\x20could\x20not\x20render',d['tag'],i);}}}customElements['define']('iobroker-webui-widget-gallery',IobrokerWebuiWidgetGallery);
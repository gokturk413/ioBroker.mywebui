function a(){const O=['defaultContent','folders','Marketplace\x20packages\x20(by\x20GitHub\x20owner)','div','open','getElements','341lgFZuG','join','stringify','_countsBusy','4037145tBcyBF','_openFolders','localeCompare','innerHTML','card-preview','2569406aRLins','_showControls','4diusIk','448013cJYuXm','_folderElement','_getDomElement','22182tOiPcp','tool','service','sort','galleryType','market','all','_instantiate','style','serviceContainer','get','DrawElementTool','add','1962GmSBpS','className','_head','project:','getAllNames','appendChild','23272BROtBM','effectAllowed','template','_resetGrid','3480XLKrqX','setAttribute','path','_renderLevel','onclick','19799hwsOoM','delete','addEventListener','global:','.folder-body','querySelector','warn','_pressTab','_showItems','_tabs','dir','tag','button','startsWith','iobroker-webui-widget-gallery','showTab','map','globalContext','textContent','855pzkbgV','toggle','innerText','getGlobalSubFolders','card-title','<svg\x20class=\x22ico\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x221.8\x22\x20aria-hidden=\x22true\x22><path\x20d=\x22M3\x207a2\x202\x200\x200\x201\x202-2h4l2\x202h8a2\x202\x200\x200\x201\x202\x202v8a2\x202\x200\x200\x201-2\x202H5a2\x202\x200\x200\x201-2-2z\x22/></svg>','iobroker-webui-3dscreen-viewer','observe','Project\x20controls','filter','400px','includes','catch','\x20controls','hidden','_renderCards','_grid','getGlobalObjectNames','project','Global\x20·\x20','dataset','control','elementDef','createElement','length','_controlLevel','_instantiated','replace','activate','\x20folders','_market','items','querySelectorAll','has','substring','4FzZiCq','416690qTOZWK','unobserve','defaultAttributes','global','target','.ct'];a=function(){return O;};return a();}const s=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=-parseInt(r(0x225))/0x1*(-parseInt(r(0x20c))/0x2)+parseInt(r(0x21d))/0x3*(-parseInt(r(0x224))/0x4)+-parseInt(r(0x1e9))/0x5*(-parseInt(r(0x228))/0x6)+parseInt(r(0x222))/0x7+-parseInt(r(0x23b))/0x8*(parseInt(r(0x235))/0x9)+parseInt(r(0x20d))/0xa*(parseInt(r(0x219))/0xb)+-parseInt(r(0x23f))/0xc*(parseInt(r(0x244))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xbae17));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';import'./MarketplacePanel.js';import{galleryTree}from'./GalleryTree.js';function b(c,d){c=c-0x1d8;const e=a();let f=e[c];return f;}export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static [s(0x230)]=css`
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
        [hidden] { display: none !important; }`;static [s(0x23d)]=html`
        <div id="tabs" role="group" aria-label="Gallery source">
            <button type="button" data-tab="project" aria-pressed="false">Project</button>
            <button type="button" data-tab="global" aria-pressed="false">Global</button>
            <button type="button" data-tab="market" aria-pressed="false">Marketplace</button>
        </div>
        <div id="head">gallery</div>
        <div id="grid"><div class="empty">Choose Project, Global or Marketplace above, or a controls folder or a package in the tree.</div></div>
        <iobroker-webui-marketplace id="market" hidden></iobroker-webui-marketplace>`;[s(0x231)];#observer;['_seq']=0x0;[s(0x21e)]=new Set();constructor(){const t=s;super(),this['_head']=this['_getDomElement']('head'),this['_grid']=this[t(0x227)]('grid'),this['_market']=this[t(0x227)](t(0x22d)),this['_tabs']=this['_getDomElement']('tabs');for(const c of this[t(0x1df)][t(0x209)]('button'))c[t(0x243)]=()=>this[t(0x1e5)](c['dataset']['tab']);}[s(0x1dd)](c){const u=s;for(const e of this[u(0x1df)]['querySelectorAll'](u(0x1e2)))e[u(0x240)]('aria-pressed',String(e[u(0x1fd)]['tab']===c));const d=c===u(0x22d);this[u(0x207)][u(0x1f7)]=!d,this['_grid']['hidden']=d,this[u(0x237)]['hidden']=d;}async[s(0x1e5)](c){const v=s,d=++this['_seq'];this['_pressTab'](c),this['_updateCounts']();if(c==='market'){this['_market'][v(0x205)]();return;}const e=c==='global';await this['_showControls'](d,e?'Global\x20controls':v(0x1f1),e,'',e?v(0x210):v(0x1fb));}async['_showControls'](c,d,e,f,g){const w=s,h=await this['_controlLevel'](e,f);if(c!==this['_seq'])return;this[w(0x237)]['innerText']=d+'\x20('+[h['folders']['length']?h['folders']['length']+w(0x206):'',h[w(0x208)]['length']?h[w(0x208)][w(0x201)]+w(0x1f6):'']['filter'](Boolean)[w(0x21a)](',\x20')+')',this['_resetGrid']();if(!h[w(0x214)][w(0x201)]&&!h['items'][w(0x201)]){this['_grid']['innerHTML']='<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>';return;}this[w(0x242)](h,this[w(0x1f9)],g,e);}async['_updateCounts'](){const x=s;if(this[x(0x21c)])return;this[x(0x21c)]=!![];try{const [c,d]=await Promise[x(0x22e)]([iobrokerHandler[x(0x239)](x(0x1fe))['catch'](()=>[]),iobrokerHandler['getAllGlobalNames']('control')[x(0x1f5)](()=>[])]),e=g=>g[x(0x1e6)](h=>String(h)['replace'](/^\//,''))[x(0x1f2)](h=>!h[x(0x1e3)]('market/')),f={'project':'Project\x20·\x20'+e(c)['length'],'global':x(0x1fc)+e(d)[x(0x201)]};for(const g of this[x(0x1df)][x(0x209)](x(0x1e2)))if(f[g['dataset']['tab']])g['textContent']=f[g[x(0x1fd)]['tab']];}finally{this[x(0x21c)]=![];}}async[s(0x202)](c,f){const y=s,g=f?'/'+String(f)[y(0x204)](/^\/+|\/+$/g,''):undefined;let h=[],i=[];try{[h,i]=c?await Promise['all']([iobrokerHandler[y(0x1ec)](y(0x1fe),g),iobrokerHandler[y(0x1fa)]('control',g)]):await Promise[y(0x22e)]([iobrokerHandler['getSubFolders']('control',g),iobrokerHandler['getObjectNames'](y(0x1fe),g)]);}catch(l){console['warn']('gallery:\x20listing\x20controls',l);}const j=g?g[y(0x20b)](0x1)+'/':'',k=(m,n)=>String(m)[y(0x21f)](String(n));return{'folders':(h??[])['slice']()[y(0x22b)]((m,n)=>(m===y(0x22d)&&!j)-(n==='market'&&!j)||k(m,n))['map'](m=>({'name':m===y(0x22d)&&!j?y(0x215):m,'dir':j+m})),'items':(i??[])['slice']()[y(0x22b)](k)[y(0x1e6)](m=>{const o=j+m,p=getCustomControlName(o);return{'name':m,'tag':p,'elementDef':{'tag':p},'load':async()=>{const z=b;if(customElements['get'](p))return;const q=c?await iobrokerHandler['getGlobalObject']('control',o):await iobrokerHandler['getCustomControl'](o);if(q&&!customElements[z(0x232)](p))generateCustomControl(o,q);}};})};}[s(0x242)](c,d,e,g){const A=s;for(const h of c[A(0x214)]){const i=this[A(0x226)](h['name'],e+'/'+h[A(0x1e0)]),j=i['querySelector'](A(0x1da)),k=i[A(0x1db)](A(0x212));let l=![];const m=async()=>{const B=A;if(l)return;l=!![],j[B(0x220)]='<div\x20class=\x22empty\x22>…</div>';const n=await this[B(0x202)](g,h['dir']);j[B(0x220)]='',k[B(0x1e8)]=String(n[B(0x214)][B(0x201)]+n['items'][B(0x201)]);if(!n['folders'][B(0x201)]&&!n[B(0x208)]['length'])j['innerHTML']='<div\x20class=\x22empty\x22>empty</div>';else this[B(0x242)](n,j,e,g);};if(i['open'])m();i[A(0x1d8)]('toggle',()=>{const C=A;if(i[C(0x217)])this['_openFolders'][C(0x234)](e+'/'+h['dir']),m();else this['_openFolders']['delete'](e+'/'+h['dir']);}),d[A(0x23a)](i);}this[A(0x1f8)](c[A(0x208)],d);}[s(0x226)](c,d){const D=s,e=document['createElement']('details');e['className']='folder',e['open']=this[D(0x21e)][D(0x20a)](d);const f=document[D(0x200)]('summary');f[D(0x220)]='<svg\x20class=\x22chev\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222.2\x22\x20aria-hidden=\x22true\x22><path\x20d=\x22m9\x206\x206\x206-6\x206\x22/></svg>'+D(0x1ee);const g=document[D(0x200)]('span');g['className']='nm',g[D(0x1e8)]=c;const h=document[D(0x200)]('span');h[D(0x236)]='ct',f['append'](g,h),e[D(0x23a)](f);const i=document[D(0x200)](D(0x216));return i[D(0x236)]='folder-body',e[D(0x23a)](i),e;}async['showForSource'](c,d){const E=s,f=++this['_seq'];this[E(0x1dd)](c?.[E(0x22c)]===E(0x1fe)?c[E(0x210)]?E(0x210):E(0x1fb):null);let g=[];try{if(c[E(0x22c)]===E(0x1fe))return this[E(0x223)](f,d,!!c[E(0x210)],c[E(0x1e0)]||'',(c[E(0x210)]?E(0x1d9):E(0x238))+(c[E(0x1e0)]||''));else{if(c['galleryType']==='3dcontrol'){if(c['single']){const h=String(c['single'])[E(0x204)](/^\//,''),i={'scene-name':h,'scene-type':'3dcontrol'};if(c['global'])i['scene-scope']=E(0x210);g=[{'name':h['split']('/')['pop'](),'tag':'iobroker-webui-3dscreen-viewer','elementDef':{'tag':E(0x1ef),'defaultAttributes':i,'defaultWidth':E(0x1f3),'defaultHeight':'300px'}}];}}else{if(c['galleryType']==='npm'){const j=await c[E(0x22a)][E(0x218)](),k=new Set();for(const l of j){if(!l['tag']||k[E(0x20a)](l[E(0x1e1)]))continue;k[E(0x234)](l['tag']),g['push']({'name':l['name']??l['tag'],'tag':l[E(0x1e1)],'elementDef':l});}}}}}catch(m){console[E(0x1dc)]('gallery:\x20error\x20loading\x20items',m);}if(f!==this['_seq'])return;this[E(0x1de)](d,g,c?.[E(0x22c)]===E(0x1fe)?(c[E(0x210)]?'global:':E(0x238))+(c['dir']||''):'npm');}[s(0x1de)](c,d,e=''){const F=s;this[F(0x237)][F(0x1eb)]=c+'\x20('+d['length']+')',this[F(0x23e)]();if(!d[F(0x201)]){this['_grid']['innerHTML']='<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>';return;}this['_renderNode'](galleryTree(d[F(0x1e6)](f=>f[F(0x241)]?f:{...f,'path':String(f['name']??'')['replace'](/\//g,'∕')})),this['_grid'],e);}[s(0x23e)](){const G=s;this.#observer?.['disconnect'](),this[G(0x1f9)]['innerHTML']='',this.#observer=new IntersectionObserver(c=>{const H=G;for(const d of c){d['isIntersecting']&&!d['target']['_instantiated']&&(d[H(0x211)][H(0x203)]=!![],this[H(0x22f)](d[H(0x211)]),this.#observer[H(0x20e)](d['target']));}},{'root':this['_grid'],'threshold':0.05});}['_renderNode'](c,d,e){const I=s;for(const g of c['folders']){const h=e+'/'+g[I(0x241)],i=this['_folderElement'](g['name'],h);i['querySelector']('.ct')[I(0x1e8)]=String(g['count']);const j=i['querySelector'](I(0x1da));let k=![];const l=()=>{!k&&(k=!![],this['_renderNode'](g,j,e));};if(i['open'])l();i['addEventListener'](I(0x1ea),()=>{const J=I;if(i[J(0x217)])this['_openFolders'][J(0x234)](h),l();else this['_openFolders'][J(0x245)](h);}),d['appendChild'](i);}this['_renderCards'](c['items'],d);}[s(0x1f8)](c,d){const K=s,e=document[K(0x200)](K(0x216));e[K(0x236)]='cards',d['appendChild'](e);for(const f of c){const g=document['createElement'](K(0x216));g[K(0x236)]='card',g['title']=f['tag'];const h=document[K(0x200)](K(0x216));h[K(0x236)]=K(0x1ed),h['textContent']=f['name'];const i=document[K(0x200)](K(0x216));i['className']=K(0x221),i['_item']=f,g[K(0x23a)](h),g['appendChild'](i),g['draggable']=!![],g['ondragstart']=j=>{const L=K;j['dataTransfer']['setData'](dragDropFormatNameElementDefinition,JSON[L(0x21b)](f[L(0x1ff)])),j['dataTransfer'][L(0x23c)]='all',j['dataTransfer']['dropEffect']='copy';},g['onclick']=()=>{const M=K;try{const j=this[M(0x231)]??window['appShell']['serviceContainer'];let k=j['designerTools'][M(0x232)](f[M(0x1ff)][M(0x229)]??NamedTools[M(0x233)]);if(typeof k=='function')k=new k(f[M(0x1ff)]);j[M(0x1e7)]['tool']=k;}catch(l){}},e['appendChild'](g),this.#observer[K(0x1f0)](i);}}async[s(0x22f)](c){const N=s,d=c['_item'];try{if(d['load'])await d['load']();if(!d['tag'])return;if(d['tag'][N(0x1f4)]('-')&&!customElements['get'](d['tag']))return;const f=document['createElement'](d[N(0x1e1)]);if(d['elementDef']?.['defaultAttributes'])for(const g in d['elementDef'][N(0x20f)]){try{f[N(0x240)](g,d[N(0x1ff)][N(0x20f)][g]);}catch(h){}}if(d[N(0x1ff)]?.[N(0x213)])f[N(0x1e8)]=d[N(0x1ff)]['defaultContent'];else{if(!d['tag']['includes']('-')&&!f['childNodes']['length'])f[N(0x1e8)]=d['tag'];}c['appendChild'](f);}catch(i){console[N(0x1dc)]('gallery:\x20could\x20not\x20render',d[N(0x1e1)],i);}}}customElements['define'](s(0x1e4),IobrokerWebuiWidgetGallery);
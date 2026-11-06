function b(c,d){c=c-0xcd;const e=a();let f=e[c];return f;}const s=b;(function(c,d){const r=b,e=c();while(!![]){try{const f=-parseInt(r(0x13a))/0x1*(-parseInt(r(0x123))/0x2)+parseInt(r(0xfc))/0x3*(-parseInt(r(0x10f))/0x4)+parseInt(r(0x10c))/0x5*(-parseInt(r(0x106))/0x6)+parseInt(r(0xf0))/0x7+parseInt(r(0x125))/0x8*(-parseInt(r(0x12a))/0x9)+parseInt(r(0xe0))/0xa+-parseInt(r(0xe7))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6a90e));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';import'./MarketplacePanel.js';import{galleryTree}from'./GalleryTree.js';export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        <iobroker-webui-marketplace id="market" hidden></iobroker-webui-marketplace>`;[s(0x10a)];#observer;[s(0xd4)]=0x0;[s(0x115)]=new Set();constructor(){const t=s;super(),this['_head']=this[t(0xf5)](t(0x136)),this[t(0x109)]=this['_getDomElement'](t(0x12f)),this[t(0x114)]=this['_getDomElement'](t(0x140)),this[t(0x10e)]=this[t(0xf5)]('tabs');for(const c of this[t(0x10e)]['querySelectorAll']('button'))c[t(0x138)]=()=>this[t(0x111)](c['dataset']['tab']);}['_pressTab'](c){const u=s;for(const e of this[u(0x10e)]['querySelectorAll'](u(0x11b)))e['setAttribute'](u(0x119),String(e[u(0xda)]['tab']===c));const d=c===u(0x140);this[u(0x114)][u(0x134)]=!d,this[u(0x109)][u(0x134)]=d,this['_head']['hidden']=d;}async['showTab'](c){const v=s,d=++this['_seq'];this[v(0x137)](c),this['_updateCounts']();if(c==='market'){this[v(0x114)]['activate']();return;}const e=c===v(0xde);await this[v(0xdf)](d,e?'Global\x20controls':'Project\x20controls',e,'',e?v(0xde):v(0xe5));}async[s(0xdf)](c,d,e,f,g){const w=s,h=await this[w(0xf4)](e,f);if(c!==this[w(0xd4)])return;this[w(0x127)]['innerText']=d+'\x20('+[h['folders'][w(0x13e)]?h['folders']['length']+w(0xfa):'',h[w(0xe8)]['length']?h['items']['length']+w(0x129):'']['filter'](Boolean)[w(0x13f)](',\x20')+')',this[w(0x10d)]();if(!h['folders'][w(0x13e)]&&!h['items'][w(0x13e)]){this[w(0x109)]['innerHTML']='<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>';return;}this[w(0x118)](h,this[w(0x109)],g,e);}async[s(0x128)](){const x=s;if(this['_countsBusy'])return;this[x(0x13d)]=!![];try{const [c,d]=await Promise[x(0x102)]([iobrokerHandler['getAllNames'](x(0xeb))[x(0xee)](()=>[]),iobrokerHandler['getAllGlobalNames']('control')[x(0xee)](()=>[])]),e=g=>g['map'](h=>String(h)['replace'](/^\//,''))['filter'](h=>!h['startsWith']('market/')),f={'project':'Project\x20·\x20'+e(c)[x(0x13e)],'global':x(0x121)+e(d)[x(0x13e)]};for(const g of this['_tabs'][x(0x117)](x(0x11b)))if(f[g[x(0xda)][x(0x110)]])g[x(0xd7)]=f[g[x(0xda)][x(0x110)]];}finally{this['_countsBusy']=![];}}async['_controlLevel'](c,f){const y=s,g=f?'/'+String(f)[y(0x112)](/^\/+|\/+$/g,''):undefined;let h=[],i=[];try{[h,i]=c?await Promise[y(0x102)]([iobrokerHandler[y(0xed)]('control',g),iobrokerHandler[y(0x12e)]('control',g)]):await Promise[y(0x102)]([iobrokerHandler['getSubFolders'](y(0xeb),g),iobrokerHandler[y(0xd0)]('control',g)]);}catch(l){console[y(0xe9)](y(0x11d),l);}const j=g?g[y(0x113)](0x1)+'/':'',k=(m,n)=>String(m)['localeCompare'](String(n));return{'folders':(h??[])[y(0x104)]()['sort']((m,n)=>(m==='market'&&!j)-(n===y(0x140)&&!j)||k(m,n))['map'](m=>({'name':m==='market'&&!j?y(0xec):m,'dir':j+m})),'items':(i??[])['slice']()[y(0x11a)](k)[y(0x12d)](m=>{const o=j+m,p=getCustomControlName(o);return{'name':m,'tag':p,'elementDef':{'tag':p},'load':async()=>{if(customElements['get'](p))return;const q=c?await iobrokerHandler['getGlobalObject']('control',o):await iobrokerHandler['getCustomControl'](o);if(q&&!customElements['get'](p))generateCustomControl(o,q);}};})};}['_renderLevel'](c,d,e,g){const z=s;for(const h of c['folders']){const i=this['_folderElement'](h[z(0xf2)],e+'/'+h[z(0xf1)]),j=i['querySelector'](z(0xce)),k=i[z(0xea)]('.ct');let l=![];const m=async()=>{const A=z;if(l)return;l=!![],j[A(0xd8)]='<div\x20class=\x22empty\x22>…</div>';const n=await this['_controlLevel'](g,h[A(0xf1)]);j['innerHTML']='',k['textContent']=String(n['folders']['length']+n['items']['length']);if(!n[A(0x105)][A(0x13e)]&&!n['items']['length'])j[A(0xd8)]='<div\x20class=\x22empty\x22>empty</div>';else this[A(0x118)](n,j,e,g);};if(i['open'])m();i['addEventListener']('toggle',()=>{const B=z;if(i[B(0x120)])this[B(0x115)][B(0x11e)](e+'/'+h[B(0xf1)]),m();else this['_openFolders'][B(0x13b)](e+'/'+h[B(0xf1)]);}),d[z(0x103)](i);}this['_renderCards'](c[z(0xe8)],d);}[s(0x101)](c,d){const C=s,e=document['createElement']('details');e[C(0x108)]='folder',e[C(0x120)]=this['_openFolders'][C(0x132)](d);const f=document[C(0xfe)]('summary');f[C(0xd8)]=C(0xe4)+'<svg\x20class=\x22ico\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x221.8\x22\x20aria-hidden=\x22true\x22><path\x20d=\x22M3\x207a2\x202\x200\x200\x201\x202-2h4l2\x202h8a2\x202\x200\x200\x201\x202\x202v8a2\x202\x200\x200\x201-2\x202H5a2\x202\x200\x200\x201-2-2z\x22/></svg>';const g=document[C(0xfe)](C(0xe3));g[C(0x108)]='nm',g[C(0xd7)]=c;const h=document[C(0xfe)]('span');h['className']='ct',f['append'](g,h),e['appendChild'](f);const i=document['createElement']('div');return i['className']=C(0xf8),e[C(0x103)](i),e;}async['showForSource'](c,d){const D=s,f=++this['_seq'];this['_pressTab'](c?.[D(0xdc)]==='control'?c['global']?'global':D(0xe5):null);let g=[];try{if(c[D(0xdc)]===D(0xeb))return this[D(0xdf)](f,d,!!c['global'],c['dir']||'',(c[D(0xde)]?D(0xfd):D(0x126))+(c['dir']||''));else{if(c['galleryType']==='3dcontrol'){if(c[D(0x107)]){const h=String(c['single'])['replace'](/^\//,''),i={'scene-name':h,'scene-type':'3dcontrol'};if(c[D(0xde)])i['scene-scope']=D(0xde);g=[{'name':h['split']('/')[D(0x12b)](),'tag':D(0xdb),'elementDef':{'tag':D(0xdb),'defaultAttributes':i,'defaultWidth':D(0xd5),'defaultHeight':D(0xf6)}}];}}else{if(c['galleryType']==='npm'){const j=await c[D(0xe6)]['getElements'](),k=new Set();for(const l of j){if(!l[D(0xe2)]||k[D(0x132)](l[D(0xe2)]))continue;k[D(0x11e)](l[D(0xe2)]),g['push']({'name':l[D(0xf2)]??l[D(0xe2)],'tag':l['tag'],'elementDef':l});}}}}}catch(m){console['warn']('gallery:\x20error\x20loading\x20items',m);}if(f!==this['_seq'])return;this['_showItems'](d,g,c?.['galleryType']===D(0xeb)?(c['global']?D(0xfd):D(0x126))+(c[D(0xf1)]||''):'npm');}['_showItems'](c,d,e=''){const E=s;this[E(0x127)][E(0x11f)]=c+'\x20('+d[E(0x13e)]+')',this['_resetGrid']();if(!d['length']){this['_grid']['innerHTML']=E(0x12c);return;}this[E(0x131)](galleryTree(d['map'](f=>f[E(0x135)]?f:{...f,'path':String(f[E(0xf2)]??'')['replace'](/\//g,'∕')})),this[E(0x109)],e);}[s(0x10d)](){const F=s;this.#observer?.['disconnect'](),this[F(0x109)][F(0xd8)]='',this.#observer=new IntersectionObserver(c=>{const G=F;for(const d of c){d['isIntersecting']&&!d[G(0xcd)]['_instantiated']&&(d[G(0xcd)][G(0xd9)]=!![],this['_instantiate'](d['target']),this.#observer['unobserve'](d['target']));}},{'root':this['_grid'],'threshold':0.05});}['_renderNode'](c,d,e){const H=s;for(const g of c['folders']){const h=e+'/'+g[H(0x135)],i=this[H(0x101)](g['name'],h);i[H(0xea)](H(0xd3))[H(0xd7)]=String(g['count']);const j=i['querySelector'](H(0xce));let k=![];const l=()=>{!k&&(k=!![],this['_renderNode'](g,j,e));};if(i['open'])l();i[H(0xff)](H(0xd2),()=>{const I=H;if(i[I(0x120)])this[I(0x115)][I(0x11e)](h),l();else this[I(0x115)]['delete'](h);}),d['appendChild'](i);}this[H(0xd1)](c[H(0xe8)],d);}[s(0xd1)](c,d){const J=s,e=document['createElement'](J(0x100));e['className']='cards',d[J(0x103)](e);for(const f of c){const g=document['createElement']('div');g['className']=J(0x139),g['title']=f[J(0xe2)];const h=document['createElement']('div');h['className']='card-title',h['textContent']=f[J(0xf2)];const i=document['createElement']('div');i['className']=J(0xf3),i['_item']=f,g['appendChild'](h),g['appendChild'](i),g[J(0xf7)]=!![],g['ondragstart']=j=>{const K=J;j[K(0x124)][K(0xdd)](dragDropFormatNameElementDefinition,JSON['stringify'](f['elementDef'])),j[K(0x124)][K(0x122)]=K(0x102),j[K(0x124)][K(0xf9)]='copy';},g[J(0x138)]=()=>{const L=J;try{const j=this[L(0x10a)]??window[L(0xef)]['serviceContainer'];let k=j[L(0x13c)]['get'](f['elementDef'][L(0xd6)]??NamedTools['DrawElementTool']);if(typeof k=='function')k=new k(f[L(0x10b)]);j['globalContext']['tool']=k;}catch(l){}},e[J(0x103)](g),this.#observer['observe'](i);}}async['_instantiate'](c){const M=s,d=c[M(0xfb)];try{if(d[M(0xcf)])await d['load']();if(!d['tag'])return;if(d['tag']['includes']('-')&&!customElements['get'](d['tag']))return;const f=document['createElement'](d[M(0xe2)]);if(d[M(0x10b)]?.[M(0x130)])for(const g in d[M(0x10b)]['defaultAttributes']){try{f[M(0x133)](g,d[M(0x10b)]['defaultAttributes'][g]);}catch(h){}}if(d[M(0x10b)]?.[M(0x11c)])f['textContent']=d[M(0x10b)]['defaultContent'];else{if(!d[M(0xe2)][M(0xe1)]('-')&&!f['childNodes']['length'])f[M(0xd7)]=d[M(0xe2)];}c['appendChild'](f);}catch(i){console['warn'](M(0x116),d['tag'],i);}}}function a(){const N=['.ct','_seq','400px','tool','textContent','innerHTML','_instantiated','dataset','iobroker-webui-3dscreen-viewer','galleryType','setData','global','_showControls','8390700VsPdvz','includes','tag','span','<svg\x20class=\x22chev\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222.2\x22\x20aria-hidden=\x22true\x22><path\x20d=\x22m9\x206\x206\x206-6\x206\x22/></svg>','project','service','5236440kwTaGF','items','warn','querySelector','control','Marketplace\x20packages\x20(by\x20GitHub\x20owner)','getGlobalSubFolders','catch','appShell','2375982uuiwPS','dir','name','card-preview','_controlLevel','_getDomElement','300px','draggable','folder-body','dropEffect','\x20folders','_item','18NKXLbN','global:','createElement','addEventListener','div','_folderElement','all','appendChild','slice','folders','786lGCEUz','single','className','_grid','serviceContainer','elementDef','175zSgSYE','_resetGrid','_tabs','205188YhJcxc','tab','showTab','replace','substring','_market','_openFolders','gallery:\x20could\x20not\x20render','querySelectorAll','_renderLevel','aria-pressed','sort','button','defaultContent','gallery:\x20listing\x20controls','add','innerText','open','Global\x20·\x20','effectAllowed','228146mIWlnI','dataTransfer','2824qmlvWP','project:','_head','_updateCounts','\x20controls','7542ICRxXi','pop','<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>','map','getGlobalObjectNames','grid','defaultAttributes','_renderNode','has','setAttribute','hidden','path','head','_pressTab','onclick','card','3RmGyUk','delete','designerTools','_countsBusy','length','join','market','target','.folder-body','load','getObjectNames','_renderCards','toggle'];a=function(){return N;};return a();}customElements['define']('iobroker-webui-widget-gallery',IobrokerWebuiWidgetGallery);
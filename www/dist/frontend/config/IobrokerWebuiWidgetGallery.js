const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x1fe))/0x1+-parseInt(n(0x1c5))/0x2+-parseInt(n(0x1c3))/0x3*(-parseInt(n(0x1d8))/0x4)+parseInt(n(0x1df))/0x5+parseInt(n(0x1eb))/0x6*(-parseInt(n(0x1fd))/0x7)+-parseInt(n(0x1c1))/0x8+-parseInt(n(0x1fa))/0x9*(-parseInt(n(0x1e6))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x25539));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';function b(c,d){c=c-0x1bf;const e=a();let f=e[c];return f;}import{dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';function a(){const x=['1283384tpflNI','name','22779EWQYqr','template','23106pMWZOg','warn','_item','dir','_head','unobserve','length','service','single','defaultAttributes','appShell','createElement','dropEffect','_instantiate','300px','tag','getElements','defaultContent','stringify','48aJWjZs','3dcontrol','effectAllowed','textContent','get','setData','replace','229500MLfbPk','head','iobroker-webui-widget-gallery','_grid','appendChild','<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>','innerText','870WMHbOU','elementDef','target','npm','serviceContainer','1801242fpVGIf','disconnect','gallery:\x20could\x20not\x20render','globalContext','className','style','map','function','push','_getDomElement','global','onclick','control','has','galleryType','27117ZbdDzd','tool','_showItems','7BSMncn','225925wScozi','title','dataTransfer','div'];a=function(){return x;};return a();}export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static [o(0x1f0)]=css`
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
            display: grid;
            grid-template-columns: repeat(auto-fill, 220px);
            grid-auto-rows: 186px;
            justify-content: start;
            align-content: start;
            gap: 12px;
            padding: 12px;
            overflow-y: auto;
            overflow-x: hidden;
            box-sizing: border-box;
            min-height: 0;
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
        }`;static [o(0x1c4)]=html`
        <div id="head">gallery</div>
        <div id="grid"><div class="empty">Select a controls folder or a package in the tree to see its widgets rendered live.</div></div>`;['serviceContainer'];#observer;constructor(){const p=o;super(),this['_head']=this[p(0x1f4)](p(0x1e0)),this['_grid']=this['_getDomElement']('grid');}async['showForSource'](c,d){const q=o;let f=[];try{if(c[q(0x1f9)]==='control'){const g=c['global']?await iobrokerHandler['getGlobalObjectNames'](q(0x1f7),c[q(0x1c8)]||undefined):await iobrokerHandler['getObjectNames'](q(0x1f7),c[q(0x1c8)]||undefined);f=await Promise['all'](g[q(0x1f1)](async h=>{const r=q,i=((c[r(0x1c8)]??'')+'/'+h)[r(0x1de)](/^\//,''),j=getCustomControlName(i);if(!customElements[r(0x1dc)](j))try{const k=c[r(0x1f5)]?await iobrokerHandler['getGlobalObject']('control',i):await iobrokerHandler['getCustomControl'](i);if(k)generateCustomControl(i,k);}catch(l){}return{'name':h,'tag':j,'elementDef':{'tag':j}};}));}else{if(c[q(0x1f9)]===q(0x1d9)){if(c['single']){const h=String(c[q(0x1cd)])['replace'](/^\//,''),i={'scene-name':h,'scene-type':q(0x1d9)};if(c['global'])i['scene-scope']=q(0x1f5);f=[{'name':h['split']('/')['pop'](),'tag':'iobroker-webui-3dscreen-viewer','elementDef':{'tag':'iobroker-webui-3dscreen-viewer','defaultAttributes':i,'defaultWidth':'400px','defaultHeight':q(0x1d3)}}];}}else{if(c['galleryType']===q(0x1e9)){const j=await c[q(0x1cc)][q(0x1d5)](),k=new Set();for(const l of j){if(!l['tag']||k[q(0x1f8)](l[q(0x1d4)]))continue;k['add'](l[q(0x1d4)]),f[q(0x1f3)]({'name':l['name']??l['tag'],'tag':l[q(0x1d4)],'elementDef':l});}}}}}catch(m){console[q(0x1c6)]('gallery:\x20error\x20loading\x20items',m);}this[q(0x1fc)](d,f);}[o(0x1fc)](c,d){const s=o;this[s(0x1c9)][s(0x1e5)]=c+'\x20('+d[s(0x1cb)]+')',this.#observer?.[s(0x1ec)](),this[s(0x1e2)]['innerHTML']='';if(!d[s(0x1cb)]){this[s(0x1e2)]['innerHTML']=s(0x1e4);return;}this.#observer=new IntersectionObserver(e=>{const t=s;for(const f of e){f['isIntersecting']&&!f[t(0x1e8)]['_instantiated']&&(f['target']['_instantiated']=!![],this['_instantiate'](f[t(0x1e8)]),this.#observer[t(0x1ca)](f['target']));}},{'root':this[s(0x1e2)],'threshold':0.05});for(const e of d){const f=document[s(0x1d0)]('div');f[s(0x1ef)]='card',f[s(0x1ff)]=e['tag'];const g=document[s(0x1d0)](s(0x1c0));g['className']='card-title',g[s(0x1db)]=e[s(0x1c2)];const h=document[s(0x1d0)]('div');h['className']='card-preview',h[s(0x1c7)]=e,f['appendChild'](g),f['appendChild'](h),f['draggable']=!![],f['ondragstart']=i=>{const u=s;i['dataTransfer'][u(0x1dd)](dragDropFormatNameElementDefinition,JSON[u(0x1d7)](e['elementDef'])),i['dataTransfer'][u(0x1da)]='all',i[u(0x1bf)][u(0x1d1)]='copy';},f[s(0x1f6)]=()=>{const v=s;try{const i=this['serviceContainer']??window[v(0x1cf)][v(0x1ea)];let j=i['designerTools'][v(0x1dc)](e['elementDef']['tool']??NamedTools['DrawElementTool']);if(typeof j==v(0x1f2))j=new j(e['elementDef']);i[v(0x1ee)][v(0x1fb)]=j;}catch(k){}},this['_grid'][s(0x1e3)](f),this.#observer['observe'](h);}}[o(0x1d2)](c){const w=o,d=c['_item'];try{if(!d['tag'])return;if(d[w(0x1d4)]['includes']('-')&&!customElements[w(0x1dc)](d[w(0x1d4)]))return;const f=document[w(0x1d0)](d[w(0x1d4)]);if(d['elementDef']?.['defaultAttributes'])for(const g in d['elementDef'][w(0x1ce)]){try{f['setAttribute'](g,d['elementDef']['defaultAttributes'][g]);}catch(h){}}if(d[w(0x1e7)]?.['defaultContent'])f[w(0x1db)]=d[w(0x1e7)][w(0x1d6)];else{if(!d[w(0x1d4)]['includes']('-')&&!f['childNodes']['length'])f[w(0x1db)]=d[w(0x1d4)];}c[w(0x1e3)](f);}catch(i){console['warn'](w(0x1ed),d['tag'],i);}}}customElements['define'](o(0x1e1),IobrokerWebuiWidgetGallery);
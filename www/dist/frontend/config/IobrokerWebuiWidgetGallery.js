const p=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0xa9))/0x1*(parseInt(n(0x89))/0x2)+parseInt(n(0x95))/0x3*(-parseInt(n(0x70))/0x4)+-parseInt(n(0x9a))/0x5+parseInt(n(0x9e))/0x6*(parseInt(n(0x6b))/0x7)+parseInt(n(0x7e))/0x8*(-parseInt(n(0x73))/0x9)+-parseInt(n(0x98))/0xa+-parseInt(n(0x8b))/0xb*(-parseInt(n(0xab))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x68024));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';function b(c,d){c=c-0x6a;const e=a();let f=e[c];return f;}function a(){const x=['gallery:\x20error\x20loading\x20items','define','iobroker-webui-3dscreen-viewer','iobroker-webui-widget-gallery','1875153EgeDsM','3dcontrol','add','4000400YApBba','onclick','2625885irULDv','dir','_instantiate','getGlobalObjectNames','880890EPPQBo','title','_head','defaultAttributes','textContent','tool','<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>','service','get','map','has','13624zyRLlL','dropEffect','36liIqXW','setData','innerText','_item','innerHTML','className','control','childNodes','28qIRqdJ','createElement','length','getObjectNames','appendChild','4cNFbIB','_showItems','_grid','50139ZgjtXI','pop','name','DrawElementTool','elementDef','ondragstart','warn','card','replace','globalContext','includes','24QJcikn','single','_getDomElement','scene-scope','galleryType','card-preview','serviceContainer','tag','split','all','getCustomControl','94XCPWoX','dataTransfer','7502253SHsSiH','div','showForSource','target','_instantiated','global'];a=function(){return x;};return a();}import{iobrokerHandler}from'../common/IobrokerHandler.js';import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static ['template']=html`
        <div id="head">gallery</div>
        <div id="grid"><div class="empty">Select a controls folder or a package in the tree to see its widgets rendered live.</div></div>`;['serviceContainer'];#observer;constructor(){const o=b;super(),this[o(0xa0)]=this[o(0x80)]('head'),this[o(0x72)]=this['_getDomElement']('grid');}async[p(0x8d)](c,d){const q=p;let f=[];try{if(c[q(0x82)]===q(0xb1)){const g=c['global']?await iobrokerHandler[q(0x9d)]('control',c['dir']||undefined):await iobrokerHandler[q(0x6e)]('control',c[q(0x9b)]||undefined);f=await Promise[q(0x87)](g[q(0xa7)](async h=>{const r=q,i=((c[r(0x9b)]??'')+'/'+h)['replace'](/^\//,''),j=getCustomControlName(i);if(!customElements['get'](j))try{const k=c[r(0x90)]?await iobrokerHandler['getGlobalObject']('control',i):await iobrokerHandler[r(0x88)](i);if(k)generateCustomControl(i,k);}catch(l){}return{'name':h,'tag':j,'elementDef':{'tag':j}};}));}else{if(c[q(0x82)]===q(0x96)){if(c[q(0x7f)]){const h=String(c['single'])[q(0x7b)](/^\//,''),i={'scene-name':h,'scene-type':q(0x96)};if(c[q(0x90)])i[q(0x81)]=q(0x90);f=[{'name':h[q(0x86)]('/')[q(0x74)](),'tag':q(0x93),'elementDef':{'tag':'iobroker-webui-3dscreen-viewer','defaultAttributes':i,'defaultWidth':'400px','defaultHeight':'300px'}}];}}else{if(c['galleryType']==='npm'){const j=await c[q(0xa5)]['getElements'](),k=new Set();for(const l of j){if(!l[q(0x85)]||k[q(0xa8)](l[q(0x85)]))continue;k[q(0x97)](l['tag']),f['push']({'name':l['name']??l['tag'],'tag':l[q(0x85)],'elementDef':l});}}}}}catch(m){console[q(0x79)](q(0x91),m);}this[q(0x71)](d,f);}['_showItems'](c,d){const s=p;this[s(0xa0)][s(0xad)]=c+'\x20('+d[s(0x6d)]+')',this.#observer?.['disconnect'](),this[s(0x72)]['innerHTML']='';if(!d['length']){this['_grid'][s(0xaf)]=s(0xa4);return;}this.#observer=new IntersectionObserver(e=>{const t=s;for(const f of e){f['isIntersecting']&&!f[t(0x8e)][t(0x8f)]&&(f[t(0x8e)][t(0x8f)]=!![],this['_instantiate'](f[t(0x8e)]),this.#observer['unobserve'](f['target']));}},{'root':this[s(0x72)],'threshold':0.05});for(const e of d){const f=document[s(0x6c)]('div');f[s(0xb0)]=s(0x7a),f[s(0x9f)]=e['tag'];const g=document['createElement'](s(0x8c));g['className']='card-title',g['textContent']=e[s(0x75)];const h=document[s(0x6c)](s(0x8c));h['className']=s(0x83),h[s(0xae)]=e,f['appendChild'](g),f[s(0x6f)](h),f['draggable']=!![],f[s(0x78)]=i=>{const u=s;i[u(0x8a)][u(0xac)](dragDropFormatNameElementDefinition,JSON['stringify'](e[u(0x77)])),i[u(0x8a)]['effectAllowed']='all',i['dataTransfer'][u(0xaa)]='copy';},f[s(0x99)]=()=>{const v=s;try{const i=this[v(0x84)]??window['appShell']['serviceContainer'];let j=i['designerTools'][v(0xa6)](e['elementDef'][v(0xa3)]??NamedTools[v(0x76)]);if(typeof j=='function')j=new j(e['elementDef']);i[v(0x7c)][v(0xa3)]=j;}catch(k){}},this[s(0x72)][s(0x6f)](f),this.#observer['observe'](h);}}[p(0x9c)](c){const w=p,d=c['_item'];try{if(!d['tag'])return;if(d[w(0x85)][w(0x7d)]('-')&&!customElements[w(0xa6)](d[w(0x85)]))return;const f=document[w(0x6c)](d['tag']);if(d[w(0x77)]?.[w(0xa1)])for(const g in d['elementDef']['defaultAttributes']){try{f['setAttribute'](g,d['elementDef']['defaultAttributes'][g]);}catch(h){}}if(d[w(0x77)]?.['defaultContent'])f[w(0xa2)]=d['elementDef']['defaultContent'];else{if(!d['tag'][w(0x7d)]('-')&&!f[w(0x6a)][w(0x6d)])f[w(0xa2)]=d[w(0x85)];}c[w(0x6f)](f);}catch(i){console['warn']('gallery:\x20could\x20not\x20render',d[w(0x85)],i);}}}customElements[p(0x92)](p(0x94),IobrokerWebuiWidgetGallery);
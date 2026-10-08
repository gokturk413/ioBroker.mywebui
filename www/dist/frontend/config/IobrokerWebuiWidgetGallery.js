function a(){const x=['1204696igjzJi','110JelqEO','global','warn','defaultAttributes','globalContext','getCustomControl','400px','27TTmtOZ','defaultContent','setAttribute','gallery:\x20error\x20loading\x20items','appendChild','291906qnObvJ','_head','1435834DMsKQM','single','elementDef','className','tool','182420eKmbMR','textContent','card','has','_getDomElement','_instantiated','showForSource','iobroker-webui-3dscreen-viewer','_grid','childNodes','3dcontrol','template','div','11382930XtcnsH','innerHTML','name','dataTransfer','_instantiate','grid','add','serviceContainer','createElement','all','65SMKBld','300px','target','head','galleryType','get','replace','style','3731356ShZpyW','tag','card-preview','3010236bcskgZ','3JXsayp','DrawElementTool','2fowAWY','copy','dir'];a=function(){return x;};return a();}const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0xe8))/0x1*(-parseInt(n(0xbe))/0x2)+-parseInt(n(0xe6))/0x3*(-parseInt(n(0xe2))/0x4)+-parseInt(n(0xda))/0x5*(parseInt(n(0xbc))/0x6)+-parseInt(n(0xc3))/0x7+parseInt(n(0xeb))/0x8*(parseInt(n(0xb7))/0x9)+parseInt(n(0xd0))/0xa+-parseInt(n(0xec))/0xb*(parseInt(n(0xe5))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc147a));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static [o(0xe1)]=css`
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
        }`;static [o(0xce)]=html`
        <div id="head">gallery</div>
        <div id="grid"><div class="empty">Select a controls folder or a package in the tree to see its widgets rendered live.</div></div>`;[o(0xd7)];#observer;constructor(){const p=o;super(),this['_head']=this['_getDomElement'](p(0xdd)),this['_grid']=this[p(0xc7)](p(0xd5));}async[o(0xc9)](c,d){const q=o;let f=[];try{if(c['galleryType']==='control'){const g=c[q(0xed)]?await iobrokerHandler['getGlobalObjectNames']('control',c[q(0xea)]||undefined):await iobrokerHandler['getObjectNames']('control',c[q(0xea)]||undefined);f=await Promise[q(0xd9)](g['map'](async h=>{const r=q,i=((c[r(0xea)]??'')+'/'+h)[r(0xe0)](/^\//,''),j=getCustomControlName(i);if(!customElements[r(0xdf)](j))try{const k=c['global']?await iobrokerHandler['getGlobalObject']('control',i):await iobrokerHandler[r(0xf1)](i);if(k)generateCustomControl(i,k);}catch(l){}return{'name':h,'tag':j,'elementDef':{'tag':j}};}));}else{if(c[q(0xde)]==='3dcontrol'){if(c[q(0xbf)]){const h=String(c['single'])[q(0xe0)](/^\//,''),i={'scene-name':h,'scene-type':q(0xcd)};if(c['global'])i['scene-scope']='global';f=[{'name':h['split']('/')['pop'](),'tag':q(0xca),'elementDef':{'tag':'iobroker-webui-3dscreen-viewer','defaultAttributes':i,'defaultWidth':q(0xb6),'defaultHeight':q(0xdb)}}];}}else{if(c['galleryType']==='npm'){const j=await c['service']['getElements'](),k=new Set();for(const l of j){if(!l[q(0xe3)]||k[q(0xc6)](l[q(0xe3)]))continue;k[q(0xd6)](l['tag']),f['push']({'name':l[q(0xd2)]??l[q(0xe3)],'tag':l[q(0xe3)],'elementDef':l});}}}}}catch(m){console[q(0xee)](q(0xba),m);}this['_showItems'](d,f);}['_showItems'](c,d){const s=o;this[s(0xbd)]['innerText']=c+'\x20('+d['length']+')',this.#observer?.['disconnect'](),this['_grid']['innerHTML']='';if(!d['length']){this['_grid'][s(0xd1)]='<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>';return;}this.#observer=new IntersectionObserver(e=>{const t=s;for(const f of e){f['isIntersecting']&&!f['target']['_instantiated']&&(f[t(0xdc)][t(0xc8)]=!![],this['_instantiate'](f['target']),this.#observer['unobserve'](f[t(0xdc)]));}},{'root':this[s(0xcb)],'threshold':0.05});for(const e of d){const f=document['createElement'](s(0xcf));f[s(0xc1)]=s(0xc5),f['title']=e['tag'];const g=document[s(0xd8)](s(0xcf));g['className']='card-title',g[s(0xc4)]=e['name'];const h=document['createElement'](s(0xcf));h['className']=s(0xe4),h['_item']=e,f[s(0xbb)](g),f['appendChild'](h),f['draggable']=!![],f['ondragstart']=i=>{const u=s;i[u(0xd3)]['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](e['elementDef'])),i[u(0xd3)]['effectAllowed']=u(0xd9),i['dataTransfer']['dropEffect']=u(0xe9);},f['onclick']=()=>{const v=s;try{const i=this['serviceContainer']??window['appShell'][v(0xd7)];let j=i['designerTools'][v(0xdf)](e['elementDef']['tool']??NamedTools[v(0xe7)]);if(typeof j=='function')j=new j(e[v(0xc0)]);i[v(0xf0)][v(0xc2)]=j;}catch(k){}},this['_grid'][s(0xbb)](f),this.#observer['observe'](h);}}[o(0xd4)](c){const w=o,d=c['_item'];try{if(!d['tag'])return;if(d[w(0xe3)]['includes']('-')&&!customElements['get'](d[w(0xe3)]))return;const f=document[w(0xd8)](d[w(0xe3)]);if(d[w(0xc0)]?.['defaultAttributes'])for(const g in d[w(0xc0)][w(0xef)]){try{f[w(0xb9)](g,d['elementDef'][w(0xef)][g]);}catch(h){}}if(d['elementDef']?.[w(0xb8)])f['textContent']=d['elementDef']['defaultContent'];else{if(!d[w(0xe3)]['includes']('-')&&!f[w(0xcc)]['length'])f[w(0xc4)]=d['tag'];}c['appendChild'](f);}catch(i){console[w(0xee)]('gallery:\x20could\x20not\x20render',d[w(0xe3)],i);}}}function b(c,d){c=c-0xb6;const e=a();let f=e[c];return f;}customElements['define']('iobroker-webui-widget-gallery',IobrokerWebuiWidgetGallery);
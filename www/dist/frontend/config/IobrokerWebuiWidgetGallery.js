const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x119))/0x1*(-parseInt(n(0x148))/0x2)+-parseInt(n(0x12f))/0x3*(parseInt(n(0x11d))/0x4)+parseInt(n(0x11a))/0x5*(-parseInt(n(0x13a))/0x6)+parseInt(n(0x10a))/0x7+-parseInt(n(0x141))/0x8+-parseInt(n(0x124))/0x9*(-parseInt(n(0x13f))/0xa)+parseInt(n(0x122))/0xb*(parseInt(n(0x132))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x764ca));function b(c,d){c=c-0x104;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';function a(){const x=['designerTools','disconnect','serviceContainer','target','_head','_item','tag','copy','appendChild','unobserve','elementDef','iobroker-webui-3dscreen-viewer','showForSource','334177aKmnoR','7715dEhheK','_instantiate','all','22760Najnzg','get','dropEffect','textContent','draggable','11yugQlh','defaultAttributes','9mUZoJC','createElement','single','getElements','getCustomControl','push','innerHTML','style','isIntersecting','3dcontrol','galleryType','345rwNUjv','400px','onclick','25816548TdOQNx','<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>','template','includes','getObjectNames','has','_showItems','dataTransfer','624jgpksr','ondragstart','length','tool','observe','271910DnkUth','defaultContent','3080872dMEzKT','scene-scope','map','div','control','getGlobalObject','grid','4oVJKWZ','setAttribute','global','name','setData','define','replace','1219883cQQjWp','add'];a=function(){return x;};return a();}import{dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static [o(0x12b)]=css`
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
        }`;static [o(0x134)]=html`
        <div id="head">gallery</div>
        <div id="grid"><div class="empty">Select a controls folder or a package in the tree to see its widgets rendered live.</div></div>`;[o(0x10e)];#observer;constructor(){const p=o;super(),this['_head']=this['_getDomElement']('head'),this['_grid']=this['_getDomElement'](p(0x147));}async[o(0x118)](c,d){const q=o;let f=[];try{if(c[q(0x12e)]==='control'){const g=c['global']?await iobrokerHandler['getGlobalObjectNames']('control',c['dir']||undefined):await iobrokerHandler[q(0x136)]('control',c['dir']||undefined);f=await Promise['all'](g[q(0x143)](async h=>{const r=q,i=((c['dir']??'')+'/'+h)[r(0x109)](/^\//,''),j=getCustomControlName(i);if(!customElements[r(0x11e)](j))try{const k=c['global']?await iobrokerHandler[r(0x146)](r(0x145),i):await iobrokerHandler[r(0x128)](i);if(k)generateCustomControl(i,k);}catch(l){}return{'name':h,'tag':j,'elementDef':{'tag':j}};}));}else{if(c[q(0x12e)]===q(0x12d)){if(c[q(0x126)]){const h=String(c['single'])[q(0x109)](/^\//,''),i={'scene-name':h,'scene-type':q(0x12d)};if(c[q(0x105)])i[q(0x142)]='global';f=[{'name':h['split']('/')['pop'](),'tag':'iobroker-webui-3dscreen-viewer','elementDef':{'tag':q(0x117),'defaultAttributes':i,'defaultWidth':q(0x130),'defaultHeight':'300px'}}];}}else{if(c[q(0x12e)]==='npm'){const j=await c['service'][q(0x127)](),k=new Set();for(const l of j){if(!l[q(0x112)]||k[q(0x137)](l['tag']))continue;k[q(0x10b)](l['tag']),f[q(0x129)]({'name':l[q(0x106)]??l['tag'],'tag':l[q(0x112)],'elementDef':l});}}}}}catch(m){console['warn']('gallery:\x20error\x20loading\x20items',m);}this[q(0x138)](d,f);}['_showItems'](c,d){const s=o;this[s(0x110)]['innerText']=c+'\x20('+d['length']+')',this.#observer?.[s(0x10d)](),this['_grid']['innerHTML']='';if(!d['length']){this['_grid'][s(0x12a)]=s(0x133);return;}this.#observer=new IntersectionObserver(e=>{const t=s;for(const f of e){f[t(0x12c)]&&!f[t(0x10f)]['_instantiated']&&(f['target']['_instantiated']=!![],this['_instantiate'](f['target']),this.#observer[t(0x115)](f[t(0x10f)]));}},{'root':this['_grid'],'threshold':0.05});for(const e of d){const f=document[s(0x125)](s(0x144));f['className']='card',f['title']=e[s(0x112)];const g=document[s(0x125)](s(0x144));g['className']='card-title',g[s(0x120)]=e['name'];const h=document[s(0x125)]('div');h['className']='card-preview',h['_item']=e,f['appendChild'](g),f['appendChild'](h),f[s(0x121)]=!![],f[s(0x13b)]=i=>{const u=s;i[u(0x139)][u(0x107)](dragDropFormatNameElementDefinition,JSON['stringify'](e[u(0x116)])),i['dataTransfer']['effectAllowed']=u(0x11c),i[u(0x139)][u(0x11f)]=u(0x113);},f[s(0x131)]=()=>{const v=s;try{const i=this['serviceContainer']??window['appShell'][v(0x10e)];let j=i[v(0x10c)]['get'](e['elementDef'][v(0x13d)]??NamedTools['DrawElementTool']);if(typeof j=='function')j=new j(e[v(0x116)]);i['globalContext']['tool']=j;}catch(k){}},this['_grid']['appendChild'](f),this.#observer[s(0x13e)](h);}}[o(0x11b)](c){const w=o,d=c[w(0x111)];try{if(!d['tag'])return;if(d['tag'][w(0x135)]('-')&&!customElements[w(0x11e)](d['tag']))return;const f=document[w(0x125)](d['tag']);if(d['elementDef']?.['defaultAttributes'])for(const g in d['elementDef'][w(0x123)]){try{f[w(0x104)](g,d[w(0x116)][w(0x123)][g]);}catch(h){}}if(d['elementDef']?.[w(0x140)])f['textContent']=d[w(0x116)][w(0x140)];else{if(!d[w(0x112)]['includes']('-')&&!f['childNodes'][w(0x13c)])f[w(0x120)]=d['tag'];}c[w(0x114)](f);}catch(i){console['warn']('gallery:\x20could\x20not\x20render',d['tag'],i);}}}customElements[o(0x108)]('iobroker-webui-widget-gallery',IobrokerWebuiWidgetGallery);
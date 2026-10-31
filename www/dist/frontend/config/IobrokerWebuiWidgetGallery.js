const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0xac))/0x1+parseInt(n(0xa8))/0x2+parseInt(n(0xb4))/0x3+-parseInt(n(0xc0))/0x4+-parseInt(n(0xd9))/0x5+-parseInt(n(0xa9))/0x6+-parseInt(n(0xb5))/0x7*(-parseInt(n(0xaf))/0x8);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4aa63));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';function a(){const x=['<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>','unobserve','scene-scope','control','827920ooEebQ','_item','_instantiated','card-title','disconnect','target','ondragstart','length','service','serviceContainer','_grid','galleryType','300px','function','568024dpvwLB','1621896jLUoPn','textContent','defaultContent','213433MUiNKf','_head','div','424fPmILk','all','_instantiate','_getDomElement','map','1374819baqtkP','45206focbpi','grid','warn','createElement','designerTools','gallery:\x20error\x20loading\x20items','appShell','dir','tag','dataTransfer','single','2225316DsUQFR','appendChild','getGlobalObject','title','onclick','replace','isIntersecting','name','400px','iobroker-webui-3dscreen-viewer','npm','innerHTML','getObjectNames','className','style','showForSource','defaultAttributes','elementDef','_showItems','includes','push'];a=function(){return x;};return a();}import{iobrokerHandler}from'../common/IobrokerHandler.js';function b(c,d){c=c-0x9b;const e=a();let f=e[c];return f;}import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static [o(0xce)]=css`
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
        <div id="grid"><div class="empty">Select a controls folder or a package in the tree to see its widgets rendered live.</div></div>`;['serviceContainer'];#observer;constructor(){const p=o;super(),this['_head']=this[p(0xb2)]('head'),this['_grid']=this['_getDomElement'](p(0xb6));}async[o(0xcf)](c,d){const q=o;let f=[];try{if(c[q(0xa5)]===q(0xd8)){const g=c['global']?await iobrokerHandler['getGlobalObjectNames']('control',c[q(0xbc)]||undefined):await iobrokerHandler[q(0xcc)]('control',c['dir']||undefined);f=await Promise[q(0xb0)](g[q(0xb3)](async h=>{const r=q,i=((c['dir']??'')+'/'+h)['replace'](/^\//,''),j=getCustomControlName(i);if(!customElements['get'](j))try{const k=c['global']?await iobrokerHandler[r(0xc2)](r(0xd8),i):await iobrokerHandler['getCustomControl'](i);if(k)generateCustomControl(i,k);}catch(l){}return{'name':h,'tag':j,'elementDef':{'tag':j}};}));}else{if(c['galleryType']==='3dcontrol'){if(c[q(0xbf)]){const h=String(c[q(0xbf)])[q(0xc5)](/^\//,''),i={'scene-name':h,'scene-type':'3dcontrol'};if(c['global'])i[q(0xd7)]='global';f=[{'name':h['split']('/')['pop'](),'tag':'iobroker-webui-3dscreen-viewer','elementDef':{'tag':q(0xc9),'defaultAttributes':i,'defaultWidth':q(0xc8),'defaultHeight':q(0xa6)}}];}}else{if(c['galleryType']===q(0xca)){const j=await c[q(0xa2)]['getElements'](),k=new Set();for(const l of j){if(!l['tag']||k['has'](l['tag']))continue;k['add'](l[q(0xbd)]),f[q(0xd4)]({'name':l[q(0xc7)]??l['tag'],'tag':l['tag'],'elementDef':l});}}}}}catch(m){console[q(0xb7)](q(0xba),m);}this[q(0xd2)](d,f);}['_showItems'](c,d){const s=o;this[s(0xad)]['innerText']=c+'\x20('+d[s(0xa1)]+')',this.#observer?.[s(0x9e)](),this['_grid']['innerHTML']='';if(!d[s(0xa1)]){this[s(0xa4)][s(0xcb)]=s(0xd5);return;}this.#observer=new IntersectionObserver(e=>{const t=s;for(const f of e){f[t(0xc6)]&&!f[t(0x9f)][t(0x9c)]&&(f['target'][t(0x9c)]=!![],this[t(0xb1)](f[t(0x9f)]),this.#observer[t(0xd6)](f['target']));}},{'root':this['_grid'],'threshold':0.05});for(const e of d){const f=document[s(0xb8)]('div');f[s(0xcd)]='card',f[s(0xc3)]=e['tag'];const g=document['createElement'](s(0xae));g[s(0xcd)]=s(0x9d),g['textContent']=e['name'];const h=document['createElement']('div');h['className']='card-preview',h[s(0x9b)]=e,f[s(0xc1)](g),f[s(0xc1)](h),f['draggable']=!![],f[s(0xa0)]=i=>{const u=s;i[u(0xbe)]['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](e[u(0xd1)])),i['dataTransfer']['effectAllowed']=u(0xb0),i['dataTransfer']['dropEffect']='copy';},f[s(0xc4)]=()=>{const v=s;try{const i=this['serviceContainer']??window[v(0xbb)][v(0xa3)];let j=i[v(0xb9)]['get'](e['elementDef']['tool']??NamedTools['DrawElementTool']);if(typeof j==v(0xa7))j=new j(e[v(0xd1)]);i['globalContext']['tool']=j;}catch(k){}},this[s(0xa4)][s(0xc1)](f),this.#observer['observe'](h);}}[o(0xb1)](c){const w=o,d=c[w(0x9b)];try{if(!d['tag'])return;if(d[w(0xbd)][w(0xd3)]('-')&&!customElements['get'](d['tag']))return;const f=document['createElement'](d[w(0xbd)]);if(d['elementDef']?.[w(0xd0)])for(const g in d['elementDef'][w(0xd0)]){try{f['setAttribute'](g,d['elementDef']['defaultAttributes'][g]);}catch(h){}}if(d[w(0xd1)]?.[w(0xab)])f[w(0xaa)]=d['elementDef']['defaultContent'];else{if(!d[w(0xbd)]['includes']('-')&&!f['childNodes'][w(0xa1)])f[w(0xaa)]=d[w(0xbd)];}c[w(0xc1)](f);}catch(i){console[w(0xb7)]('gallery:\x20could\x20not\x20render',d['tag'],i);}}}customElements['define']('iobroker-webui-widget-gallery',IobrokerWebuiWidgetGallery);
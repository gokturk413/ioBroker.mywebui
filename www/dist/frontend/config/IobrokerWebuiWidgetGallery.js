const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x15f))/0x1*(parseInt(n(0x165))/0x2)+-parseInt(n(0x16c))/0x3+parseInt(n(0x158))/0x4*(-parseInt(n(0x15a))/0x5)+-parseInt(n(0x16d))/0x6+parseInt(n(0x15c))/0x7+-parseInt(n(0x143))/0x8+parseInt(n(0x131))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x71617));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';function b(c,d){c=c-0x12e;const e=a();let f=e[c];return f;}import{iobrokerHandler}from'../common/IobrokerHandler.js';import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static [o(0x132)]=css`
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
        <div id="grid"><div class="empty">Select a controls folder or a package in the tree to see its widgets rendered live.</div></div>`;[o(0x130)];#observer;constructor(){const p=o;super(),this[p(0x157)]=this['_getDomElement'](p(0x164)),this[p(0x13d)]=this['_getDomElement']('grid');}async['showForSource'](c,d){const q=o;let f=[];try{if(c[q(0x13f)]===q(0x159)){const g=c[q(0x168)]?await iobrokerHandler[q(0x133)]('control',c[q(0x152)]||undefined):await iobrokerHandler['getObjectNames'](q(0x159),c['dir']||undefined);f=await Promise['all'](g[q(0x153)](async h=>{const r=q,i=((c['dir']??'')+'/'+h)['replace'](/^\//,''),j=getCustomControlName(i);if(!customElements['get'](j))try{const k=c[r(0x168)]?await iobrokerHandler[r(0x14e)]('control',i):await iobrokerHandler[r(0x137)](i);if(k)generateCustomControl(i,k);}catch(l){}return{'name':h,'tag':j,'elementDef':{'tag':j}};}));}else{if(c[q(0x13f)]===q(0x14c)){if(c['single']){const h=String(c['single'])['replace'](/^\//,''),i={'scene-name':h,'scene-type':q(0x14c)};if(c[q(0x168)])i[q(0x138)]='global';f=[{'name':h['split']('/')['pop'](),'tag':q(0x161),'elementDef':{'tag':q(0x161),'defaultAttributes':i,'defaultWidth':'400px','defaultHeight':'300px'}}];}}else{if(c['galleryType']===q(0x13a)){const j=await c[q(0x14a)][q(0x160)](),k=new Set();for(const l of j){if(!l[q(0x141)]||k['has'](l['tag']))continue;k[q(0x15b)](l['tag']),f['push']({'name':l[q(0x148)]??l['tag'],'tag':l[q(0x141)],'elementDef':l});}}}}}catch(m){console[q(0x12f)]('gallery:\x20error\x20loading\x20items',m);}this[q(0x16e)](d,f);}['_showItems'](c,d){const s=o;this[s(0x157)][s(0x15d)]=c+'\x20('+d[s(0x14d)]+')',this.#observer?.[s(0x151)](),this['_grid']['innerHTML']='';if(!d[s(0x14d)]){this[s(0x13d)][s(0x13b)]='<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>';return;}this.#observer=new IntersectionObserver(e=>{const t=s;for(const f of e){f[t(0x13c)]&&!f['target']['_instantiated']&&(f['target']['_instantiated']=!![],this['_instantiate'](f[t(0x169)]),this.#observer[t(0x15e)](f[t(0x169)]));}},{'root':this[s(0x13d)],'threshold':0.05});for(const e of d){const f=document[s(0x166)]('div');f['className']=s(0x134),f['title']=e[s(0x141)];const g=document[s(0x166)]('div');g['className']=s(0x146),g[s(0x136)]=e[s(0x148)];const h=document[s(0x166)]('div');h['className']=s(0x14b),h[s(0x135)]=e,f[s(0x149)](g),f['appendChild'](h),f['draggable']=!![],f['ondragstart']=i=>{const u=s;i[u(0x162)]['setData'](dragDropFormatNameElementDefinition,JSON[u(0x12e)](e[u(0x16a)])),i['dataTransfer']['effectAllowed']=u(0x13e),i[u(0x162)][u(0x14f)]=u(0x144);},f[s(0x142)]=()=>{const v=s;try{const i=this['serviceContainer']??window[v(0x150)][v(0x130)];let j=i[v(0x16b)][v(0x156)](e[v(0x16a)]['tool']??NamedTools[v(0x163)]);if(typeof j=='function')j=new j(e['elementDef']);i[v(0x154)][v(0x145)]=j;}catch(k){}},this[s(0x13d)][s(0x149)](f),this.#observer['observe'](h);}}['_instantiate'](c){const w=o,d=c['_item'];try{if(!d[w(0x141)])return;if(d['tag']['includes']('-')&&!customElements[w(0x156)](d[w(0x141)]))return;const f=document['createElement'](d[w(0x141)]);if(d[w(0x16a)]?.[w(0x147)])for(const g in d['elementDef'][w(0x147)]){try{f['setAttribute'](g,d[w(0x16a)][w(0x147)][g]);}catch(h){}}if(d[w(0x16a)]?.[w(0x140)])f['textContent']=d['elementDef'][w(0x140)];else{if(!d[w(0x141)]['includes']('-')&&!f[w(0x167)]['length'])f[w(0x136)]=d[w(0x141)];}c['appendChild'](f);}catch(i){console[w(0x12f)](w(0x139),d[w(0x141)],i);}}}function a(){const x=['getElements','iobroker-webui-3dscreen-viewer','dataTransfer','DrawElementTool','head','72242ZSUroG','createElement','childNodes','global','target','elementDef','designerTools','1623111LABFGy','878910RXYubT','_showItems','stringify','warn','serviceContainer','22145157obLDLj','style','getGlobalObjectNames','card','_item','textContent','getCustomControl','scene-scope','gallery:\x20could\x20not\x20render','npm','innerHTML','isIntersecting','_grid','all','galleryType','defaultContent','tag','onclick','6467136MSgJzg','copy','tool','card-title','defaultAttributes','name','appendChild','service','card-preview','3dcontrol','length','getGlobalObject','dropEffect','appShell','disconnect','dir','map','globalContext','define','get','_head','1159028Vuwshw','control','15KmQDTK','add','3847368ZJXXly','innerText','unobserve','5ZXSdHQ'];a=function(){return x;};return a();}customElements[o(0x155)]('iobroker-webui-widget-gallery',IobrokerWebuiWidgetGallery);
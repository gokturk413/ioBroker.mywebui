function a(){const x=['innerHTML','galleryType','281944ZoeLZu','service','getGlobalObjectNames','map','1167516ReRTPE','style','iobroker-webui-3dscreen-viewer','2556flwwOO','300px','includes','getElements','stringify','1461884JFSSOc','_instantiate','createElement','3LckbYR','isIntersecting','3dcontrol','4745hhbiPX','designerTools','564kHLbhZ','appendChild','dir','setData','global','target','serviceContainer','defaultAttributes','2995780yiteRS','_instantiated','5809220vdpWRW','_grid','div','warn','control','showForSource','DrawElementTool','11ESGoAm','gallery:\x20could\x20not\x20render','globalContext','22352gnPbrh','push','tag','dataTransfer','card-title','scene-scope','head','400px','add','ondragstart','elementDef','observe','dropEffect','defaultContent','setAttribute','className','length','get','_head'];a=function(){return x;};return a();}const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x196))/0x1+parseInt(n(0x1a2))/0x2+parseInt(n(0x1a5))/0x3*(-parseInt(n(0x1b2))/0x4)+-parseInt(n(0x1a8))/0x5*(-parseInt(n(0x1aa))/0x6)+-parseInt(n(0x19a))/0x7+parseInt(n(0x1be))/0x8*(parseInt(n(0x19d))/0x9)+parseInt(n(0x1b4))/0xa*(-parseInt(n(0x1bb))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x61655));function b(c,d){c=c-0x184;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static [o(0x19b)]=css`
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
        <div id="grid"><div class="empty">Select a controls folder or a package in the tree to see its widgets rendered live.</div></div>`;[o(0x1b0)];#observer;constructor(){const p=o;super(),this[p(0x193)]=this['_getDomElement'](p(0x187)),this[p(0x1b5)]=this['_getDomElement']('grid');}async[o(0x1b9)](c,d){const q=o;let f=[];try{if(c[q(0x195)]==='control'){const g=c['global']?await iobrokerHandler[q(0x198)](q(0x1b8),c['dir']||undefined):await iobrokerHandler['getObjectNames'](q(0x1b8),c['dir']||undefined);f=await Promise['all'](g[q(0x199)](async h=>{const r=q,i=((c[r(0x1ac)]??'')+'/'+h)['replace'](/^\//,''),j=getCustomControlName(i);if(!customElements['get'](j))try{const k=c['global']?await iobrokerHandler['getGlobalObject']('control',i):await iobrokerHandler['getCustomControl'](i);if(k)generateCustomControl(i,k);}catch(l){}return{'name':h,'tag':j,'elementDef':{'tag':j}};}));}else{if(c['galleryType']==='3dcontrol'){if(c['single']){const h=String(c['single'])['replace'](/^\//,''),i={'scene-name':h,'scene-type':q(0x1a7)};if(c['global'])i[q(0x186)]=q(0x1ae);f=[{'name':h['split']('/')['pop'](),'tag':q(0x19c),'elementDef':{'tag':'iobroker-webui-3dscreen-viewer','defaultAttributes':i,'defaultWidth':q(0x188),'defaultHeight':q(0x19e)}}];}}else{if(c['galleryType']==='npm'){const j=await c[q(0x197)][q(0x1a0)](),k=new Set();for(const l of j){if(!l[q(0x1c0)]||k['has'](l[q(0x1c0)]))continue;k[q(0x189)](l['tag']),f[q(0x1bf)]({'name':l['name']??l['tag'],'tag':l['tag'],'elementDef':l});}}}}}catch(m){console[q(0x1b7)]('gallery:\x20error\x20loading\x20items',m);}this['_showItems'](d,f);}['_showItems'](c,d){const s=o;this[s(0x193)]['innerText']=c+'\x20('+d['length']+')',this.#observer?.['disconnect'](),this['_grid']['innerHTML']='';if(!d[s(0x191)]){this[s(0x1b5)][s(0x194)]='<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>';return;}this.#observer=new IntersectionObserver(e=>{const t=s;for(const f of e){f[t(0x1a6)]&&!f[t(0x1af)][t(0x1b3)]&&(f['target'][t(0x1b3)]=!![],this['_instantiate'](f['target']),this.#observer['unobserve'](f[t(0x1af)]));}},{'root':this[s(0x1b5)],'threshold':0.05});for(const e of d){const f=document['createElement'](s(0x1b6));f[s(0x190)]='card',f['title']=e[s(0x1c0)];const g=document['createElement'](s(0x1b6));g[s(0x190)]=s(0x185),g['textContent']=e['name'];const h=document[s(0x1a4)](s(0x1b6));h['className']='card-preview',h['_item']=e,f[s(0x1ab)](g),f[s(0x1ab)](h),f['draggable']=!![],f[s(0x18a)]=i=>{const u=s;i[u(0x184)][u(0x1ad)](dragDropFormatNameElementDefinition,JSON[u(0x1a1)](e[u(0x18b)])),i[u(0x184)]['effectAllowed']='all',i['dataTransfer'][u(0x18d)]='copy';},f['onclick']=()=>{const v=s;try{const i=this['serviceContainer']??window['appShell'][v(0x1b0)];let j=i[v(0x1a9)][v(0x192)](e[v(0x18b)]['tool']??NamedTools[v(0x1ba)]);if(typeof j=='function')j=new j(e[v(0x18b)]);i[v(0x1bd)]['tool']=j;}catch(k){}},this[s(0x1b5)][s(0x1ab)](f),this.#observer[s(0x18c)](h);}}[o(0x1a3)](c){const w=o,d=c['_item'];try{if(!d['tag'])return;if(d[w(0x1c0)][w(0x19f)]('-')&&!customElements['get'](d['tag']))return;const f=document[w(0x1a4)](d['tag']);if(d['elementDef']?.['defaultAttributes'])for(const g in d['elementDef'][w(0x1b1)]){try{f[w(0x18f)](g,d['elementDef'][w(0x1b1)][g]);}catch(h){}}if(d[w(0x18b)]?.[w(0x18e)])f['textContent']=d['elementDef']['defaultContent'];else{if(!d[w(0x1c0)]['includes']('-')&&!f['childNodes']['length'])f['textContent']=d['tag'];}c[w(0x1ab)](f);}catch(i){console['warn'](w(0x1bc),d['tag'],i);}}}customElements['define']('iobroker-webui-widget-gallery',IobrokerWebuiWidgetGallery);
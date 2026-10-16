function a(){const x=['2190033qFYDAz','onclick','div','head','createElement','getGlobalObjectNames','498595NHwxjx','style','8585128ldttfb','defaultAttributes','gallery:\x20error\x20loading\x20items','dir','control','getObjectNames','className','length','2154740RRlwGD','setAttribute','includes','iobroker-webui-3dscreen-viewer','has','globalContext','showForSource','3379782gkMWsy','dataTransfer','<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>','tag','serviceContainer','ondragstart','400px','map','dropEffect','56HtQvmv','name','card','10EprfRe','innerHTML','textContent','getGlobalObject','single','target','40242267wFMzOw','elementDef','copy','appendChild','tool','1070119UPByiE','define','getElements','push','get','global','galleryType','card-title','scene-scope','7ZUIUKy','_getDomElement','3dcontrol','title','_head','template','_instantiated','_grid'];a=function(){return x;};return a();}const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x173))/0x1+-parseInt(n(0x194))/0x2+-parseInt(n(0x184))/0x3+parseInt(n(0x165))/0x4*(-parseInt(n(0x18a))/0x5)+-parseInt(n(0x19b))/0x6+-parseInt(n(0x17c))/0x7*(-parseInt(n(0x18c))/0x8)+-parseInt(n(0x16e))/0x9*(-parseInt(n(0x168))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xacc39));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static [o(0x18b)]=css`
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
        }`;static [o(0x181)]=html`
        <div id="head">gallery</div>
        <div id="grid"><div class="empty">Select a controls folder or a package in the tree to see its widgets rendered live.</div></div>`;['serviceContainer'];#observer;constructor(){const p=o;super(),this['_head']=this[p(0x17d)](p(0x187)),this['_grid']=this['_getDomElement']('grid');}async[o(0x19a)](c,d){const q=o;let f=[];try{if(c[q(0x179)]===q(0x190)){const g=c[q(0x178)]?await iobrokerHandler[q(0x189)](q(0x190),c[q(0x18f)]||undefined):await iobrokerHandler[q(0x191)]('control',c[q(0x18f)]||undefined);f=await Promise['all'](g[q(0x163)](async h=>{const r=q,i=((c['dir']??'')+'/'+h)['replace'](/^\//,''),j=getCustomControlName(i);if(!customElements[r(0x177)](j))try{const k=c[r(0x178)]?await iobrokerHandler[r(0x16b)]('control',i):await iobrokerHandler['getCustomControl'](i);if(k)generateCustomControl(i,k);}catch(l){}return{'name':h,'tag':j,'elementDef':{'tag':j}};}));}else{if(c[q(0x179)]===q(0x17e)){if(c[q(0x16c)]){const h=String(c[q(0x16c)])['replace'](/^\//,''),i={'scene-name':h,'scene-type':'3dcontrol'};if(c[q(0x178)])i[q(0x17b)]=q(0x178);f=[{'name':h['split']('/')['pop'](),'tag':q(0x197),'elementDef':{'tag':q(0x197),'defaultAttributes':i,'defaultWidth':q(0x162),'defaultHeight':'300px'}}];}}else{if(c['galleryType']==='npm'){const j=await c['service'][q(0x175)](),k=new Set();for(const l of j){if(!l[q(0x15f)]||k[q(0x198)](l['tag']))continue;k['add'](l[q(0x15f)]),f[q(0x176)]({'name':l[q(0x166)]??l['tag'],'tag':l[q(0x15f)],'elementDef':l});}}}}}catch(m){console['warn'](q(0x18e),m);}this['_showItems'](d,f);}['_showItems'](c,d){const s=o;this[s(0x180)]['innerText']=c+'\x20('+d['length']+')',this.#observer?.['disconnect'](),this[s(0x183)][s(0x169)]='';if(!d[s(0x193)]){this[s(0x183)]['innerHTML']=s(0x15e);return;}this.#observer=new IntersectionObserver(e=>{const t=s;for(const f of e){f['isIntersecting']&&!f[t(0x16d)][t(0x182)]&&(f['target']['_instantiated']=!![],this['_instantiate'](f[t(0x16d)]),this.#observer['unobserve'](f[t(0x16d)]));}},{'root':this['_grid'],'threshold':0.05});for(const e of d){const f=document[s(0x188)]('div');f[s(0x192)]=s(0x167),f[s(0x17f)]=e[s(0x15f)];const g=document['createElement'](s(0x186));g[s(0x192)]=s(0x17a),g[s(0x16a)]=e[s(0x166)];const h=document['createElement'](s(0x186));h[s(0x192)]='card-preview',h['_item']=e,f[s(0x171)](g),f['appendChild'](h),f['draggable']=!![],f[s(0x161)]=i=>{const u=s;i['dataTransfer']['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](e[u(0x16f)])),i[u(0x15d)]['effectAllowed']='all',i['dataTransfer'][u(0x164)]=u(0x170);},f[s(0x185)]=()=>{const v=s;try{const i=this[v(0x160)]??window['appShell']['serviceContainer'];let j=i['designerTools']['get'](e['elementDef'][v(0x172)]??NamedTools['DrawElementTool']);if(typeof j=='function')j=new j(e[v(0x16f)]);i[v(0x199)][v(0x172)]=j;}catch(k){}},this[s(0x183)]['appendChild'](f),this.#observer['observe'](h);}}['_instantiate'](c){const w=o,d=c['_item'];try{if(!d['tag'])return;if(d[w(0x15f)][w(0x196)]('-')&&!customElements['get'](d[w(0x15f)]))return;const f=document['createElement'](d[w(0x15f)]);if(d['elementDef']?.['defaultAttributes'])for(const g in d[w(0x16f)][w(0x18d)]){try{f[w(0x195)](g,d['elementDef'][w(0x18d)][g]);}catch(h){}}if(d[w(0x16f)]?.['defaultContent'])f['textContent']=d[w(0x16f)]['defaultContent'];else{if(!d[w(0x15f)]['includes']('-')&&!f['childNodes']['length'])f[w(0x16a)]=d[w(0x15f)];}c['appendChild'](f);}catch(i){console['warn']('gallery:\x20could\x20not\x20render',d[w(0x15f)],i);}}}function b(c,d){c=c-0x15d;const e=a();let f=e[c];return f;}customElements[o(0x174)]('iobroker-webui-widget-gallery',IobrokerWebuiWidgetGallery);
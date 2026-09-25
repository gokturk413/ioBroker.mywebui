const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x18d))/0x1*(-parseInt(n(0x186))/0x2)+parseInt(n(0x16e))/0x3+-parseInt(n(0x178))/0x4+-parseInt(n(0x175))/0x5*(parseInt(n(0x167))/0x6)+parseInt(n(0x181))/0x7*(-parseInt(n(0x189))/0x8)+-parseInt(n(0x163))/0x9+parseInt(n(0x18a))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5c52c));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';import{iobrokerHandler}from'../common/IobrokerHandler.js';function b(c,d){c=c-0x163;const e=a();let f=e[c];return f;}import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static [o(0x187)]=css`
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
        <div id="grid"><div class="empty">Select a controls folder or a package in the tree to see its widgets rendered live.</div></div>`;['serviceContainer'];#observer;constructor(){const p=o;super(),this[p(0x16f)]=this['_getDomElement'](p(0x180)),this[p(0x184)]=this[p(0x18c)](p(0x193));}async[o(0x19b)](c,d){const q=o;let f=[];try{if(c[q(0x192)]==='control'){const g=c['global']?await iobrokerHandler['getGlobalObjectNames']('control',c['dir']||undefined):await iobrokerHandler[q(0x19c)]('control',c[q(0x17b)]||undefined);f=await Promise['all'](g[q(0x182)](async h=>{const r=q,i=((c['dir']??'')+'/'+h)['replace'](/^\//,''),j=getCustomControlName(i);if(!customElements[r(0x18e)](j))try{const k=c[r(0x16c)]?await iobrokerHandler['getGlobalObject']('control',i):await iobrokerHandler[r(0x19f)](i);if(k)generateCustomControl(i,k);}catch(l){}return{'name':h,'tag':j,'elementDef':{'tag':j}};}));}else{if(c['galleryType']==='3dcontrol'){if(c['single']){const h=String(c[q(0x177)])[q(0x172)](/^\//,''),i={'scene-name':h,'scene-type':'3dcontrol'};if(c[q(0x16c)])i[q(0x179)]=q(0x16c);f=[{'name':h[q(0x169)]('/')['pop'](),'tag':q(0x1a0),'elementDef':{'tag':'iobroker-webui-3dscreen-viewer','defaultAttributes':i,'defaultWidth':'400px','defaultHeight':q(0x16b)}}];}}else{if(c['galleryType']==='npm'){const j=await c['service'][q(0x194)](),k=new Set();for(const l of j){if(!l[q(0x17a)]||k['has'](l['tag']))continue;k[q(0x176)](l[q(0x17a)]),f['push']({'name':l['name']??l['tag'],'tag':l[q(0x17a)],'elementDef':l});}}}}}catch(m){console[q(0x195)](q(0x16d),m);}this['_showItems'](d,f);}[o(0x171)](c,d){const s=o;this['_head'][s(0x174)]=c+'\x20('+d['length']+')',this.#observer?.[s(0x168)](),this[s(0x184)][s(0x19e)]='';if(!d['length']){this['_grid']['innerHTML']=s(0x166);return;}this.#observer=new IntersectionObserver(e=>{const t=s;for(const f of e){f['isIntersecting']&&!f[t(0x19d)]['_instantiated']&&(f['target'][t(0x18b)]=!![],this['_instantiate'](f['target']),this.#observer[t(0x17e)](f['target']));}},{'root':this[s(0x184)],'threshold':0.05});for(const e of d){const f=document[s(0x198)](s(0x17f));f['className']='card',f[s(0x185)]=e['tag'];const g=document['createElement'](s(0x17f));g['className']='card-title',g[s(0x164)]=e[s(0x170)];const h=document['createElement'](s(0x17f));h[s(0x17c)]='card-preview',h[s(0x190)]=e,f['appendChild'](g),f[s(0x191)](h),f['draggable']=!![],f[s(0x183)]=i=>{const u=s;i['dataTransfer']['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](e['elementDef'])),i['dataTransfer']['effectAllowed']=u(0x1a1),i['dataTransfer'][u(0x197)]='copy';},f['onclick']=()=>{const v=s;try{const i=this[v(0x199)]??window['appShell'][v(0x199)];let j=i[v(0x165)]['get'](e[v(0x17d)]['tool']??NamedTools['DrawElementTool']);if(typeof j=='function')j=new j(e[v(0x17d)]);i[v(0x196)][v(0x188)]=j;}catch(k){}},this[s(0x184)]['appendChild'](f),this.#observer['observe'](h);}}[o(0x18f)](c){const w=o,d=c[w(0x190)];try{if(!d[w(0x17a)])return;if(d['tag'][w(0x19a)]('-')&&!customElements[w(0x18e)](d[w(0x17a)]))return;const f=document[w(0x198)](d['tag']);if(d[w(0x17d)]?.['defaultAttributes'])for(const g in d[w(0x17d)][w(0x16a)]){try{f['setAttribute'](g,d[w(0x17d)]['defaultAttributes'][g]);}catch(h){}}if(d[w(0x17d)]?.['defaultContent'])f['textContent']=d['elementDef']['defaultContent'];else{if(!d['tag']['includes']('-')&&!f['childNodes'][w(0x173)])f['textContent']=d['tag'];}c[w(0x191)](f);}catch(i){console[w(0x195)]('gallery:\x20could\x20not\x20render',d['tag'],i);}}}customElements['define']('iobroker-webui-widget-gallery',IobrokerWebuiWidgetGallery);function a(){const x=['dropEffect','createElement','serviceContainer','includes','showForSource','getObjectNames','target','innerHTML','getCustomControl','iobroker-webui-3dscreen-viewer','all','2471598PnIzVK','textContent','designerTools','<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>','1400934rAIouY','disconnect','split','defaultAttributes','300px','global','gallery:\x20error\x20loading\x20items','2036880DzLQIR','_head','name','_showItems','replace','length','innerText','5GELVLP','add','single','2284888WetxeK','scene-scope','tag','dir','className','elementDef','unobserve','div','head','14882zOrMgP','map','ondragstart','_grid','title','122fMwSFK','style','tool','1352vLtpkX','7305870rdHrwN','_instantiated','_getDomElement','6676jQCRzo','get','_instantiate','_item','appendChild','galleryType','grid','getElements','warn','globalContext'];a=function(){return x;};return a();}
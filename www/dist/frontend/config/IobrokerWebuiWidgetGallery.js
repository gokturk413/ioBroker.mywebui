const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x146))/0x1+-parseInt(n(0x14a))/0x2+parseInt(n(0x156))/0x3+-parseInt(n(0x16c))/0x4*(parseInt(n(0x144))/0x5)+parseInt(n(0x159))/0x6*(parseInt(n(0x15e))/0x7)+-parseInt(n(0x154))/0x8*(-parseInt(n(0x160))/0x9)+-parseInt(n(0x17c))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x52df6));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';function a(){const x=['get','469032KpXIhq','split','replace','6dHVORz','all','card-preview','_item','unobserve','3581389YOAbWx','ondragstart','9qjaNNX','length','<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>','observe','_showItems','gallery:\x20could\x20not\x20render','dropEffect','npm','gallery:\x20error\x20loading\x20items','_head','innerHTML','warn','1310368trgjyi','div','has','_getDomElement','_instantiate','grid','tag','name','defaultAttributes','dataTransfer','showForSource','target','300px','draggable','pop','elementDef','2952180YlNmYz','innerText','stringify','getElements','setAttribute','dir','scene-scope','textContent','getCustomControl','_grid','control','title','add','5lzEKJV','template','279068PEiInM','iobroker-webui-3dscreen-viewer','tool','createElement','1180076XxxDGQ','card','single','defaultContent','style','_instantiated','className','includes','serviceContainer','global','4842040PRvNLt'];a=function(){return x;};return a();}import{iobrokerHandler}from'../common/IobrokerHandler.js';function b(c,d){c=c-0x138;const e=a();let f=e[c];return f;}import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static [o(0x14e)]=css`
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
        }`;static [o(0x145)]=html`
        <div id="head">gallery</div>
        <div id="grid"><div class="empty">Select a controls folder or a package in the tree to see its widgets rendered live.</div></div>`;[o(0x152)];#observer;constructor(){const p=o;super(),this[p(0x169)]=this['_getDomElement']('head'),this['_grid']=this[p(0x16f)](p(0x171));}async[o(0x176)](c,d){const q=o;let f=[];try{if(c['galleryType']==='control'){const g=c[q(0x153)]?await iobrokerHandler['getGlobalObjectNames'](q(0x141),c[q(0x13c)]||undefined):await iobrokerHandler['getObjectNames']('control',c[q(0x13c)]||undefined);f=await Promise[q(0x15a)](g['map'](async h=>{const r=q,i=((c[r(0x13c)]??'')+'/'+h)[r(0x158)](/^\//,''),j=getCustomControlName(i);if(!customElements['get'](j))try{const k=c[r(0x153)]?await iobrokerHandler['getGlobalObject']('control',i):await iobrokerHandler[r(0x13f)](i);if(k)generateCustomControl(i,k);}catch(l){}return{'name':h,'tag':j,'elementDef':{'tag':j}};}));}else{if(c['galleryType']==='3dcontrol'){if(c['single']){const h=String(c[q(0x14c)])[q(0x158)](/^\//,''),i={'scene-name':h,'scene-type':'3dcontrol'};if(c[q(0x153)])i[q(0x13d)]=q(0x153);f=[{'name':h[q(0x157)]('/')[q(0x17a)](),'tag':q(0x147),'elementDef':{'tag':q(0x147),'defaultAttributes':i,'defaultWidth':'400px','defaultHeight':q(0x178)}}];}}else{if(c['galleryType']===q(0x167)){const j=await c['service'][q(0x13a)](),k=new Set();for(const l of j){if(!l['tag']||k[q(0x16e)](l[q(0x172)]))continue;k[q(0x143)](l['tag']),f['push']({'name':l['name']??l['tag'],'tag':l[q(0x172)],'elementDef':l});}}}}}catch(m){console[q(0x16b)](q(0x168),m);}this[q(0x164)](d,f);}['_showItems'](c,d){const s=o;this[s(0x169)][s(0x138)]=c+'\x20('+d['length']+')',this.#observer?.['disconnect'](),this['_grid'][s(0x16a)]='';if(!d[s(0x161)]){this['_grid']['innerHTML']=s(0x162);return;}this.#observer=new IntersectionObserver(e=>{const t=s;for(const f of e){f['isIntersecting']&&!f[t(0x177)][t(0x14f)]&&(f[t(0x177)][t(0x14f)]=!![],this[t(0x170)](f['target']),this.#observer[t(0x15d)](f['target']));}},{'root':this[s(0x140)],'threshold':0.05});for(const e of d){const f=document[s(0x149)](s(0x16d));f['className']=s(0x14b),f[s(0x142)]=e['tag'];const g=document['createElement'](s(0x16d));g['className']='card-title',g['textContent']=e[s(0x173)];const h=document['createElement']('div');h[s(0x150)]=s(0x15b),h[s(0x15c)]=e,f['appendChild'](g),f['appendChild'](h),f[s(0x179)]=!![],f[s(0x15f)]=i=>{const u=s;i[u(0x175)]['setData'](dragDropFormatNameElementDefinition,JSON[u(0x139)](e[u(0x17b)])),i['dataTransfer']['effectAllowed']=u(0x15a),i['dataTransfer'][u(0x166)]='copy';},f['onclick']=()=>{const v=s;try{const i=this[v(0x152)]??window['appShell']['serviceContainer'];let j=i['designerTools'][v(0x155)](e[v(0x17b)][v(0x148)]??NamedTools['DrawElementTool']);if(typeof j=='function')j=new j(e[v(0x17b)]);i['globalContext'][v(0x148)]=j;}catch(k){}},this[s(0x140)]['appendChild'](f),this.#observer[s(0x163)](h);}}[o(0x170)](c){const w=o,d=c['_item'];try{if(!d['tag'])return;if(d[w(0x172)][w(0x151)]('-')&&!customElements['get'](d['tag']))return;const f=document[w(0x149)](d['tag']);if(d['elementDef']?.['defaultAttributes'])for(const g in d[w(0x17b)]['defaultAttributes']){try{f[w(0x13b)](g,d[w(0x17b)][w(0x174)][g]);}catch(h){}}if(d['elementDef']?.['defaultContent'])f['textContent']=d[w(0x17b)][w(0x14d)];else{if(!d['tag'][w(0x151)]('-')&&!f['childNodes']['length'])f[w(0x13e)]=d[w(0x172)];}c['appendChild'](f);}catch(i){console[w(0x16b)](w(0x165),d['tag'],i);}}}customElements['define']('iobroker-webui-widget-gallery',IobrokerWebuiWidgetGallery);
const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x172))/0x1*(parseInt(n(0x168))/0x2)+parseInt(n(0x162))/0x3+-parseInt(n(0x15c))/0x4+parseInt(n(0x13e))/0x5+-parseInt(n(0x13c))/0x6+parseInt(n(0x167))/0x7*(parseInt(n(0x141))/0x8)+-parseInt(n(0x134))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd56cb));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';import{iobrokerHandler}from'../common/IobrokerHandler.js';function b(c,d){c=c-0x134;const e=a();let f=e[c];return f;}import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [o(0x152)]=html`
        <div id="head">gallery</div>
        <div id="grid"><div class="empty">Select a controls folder or a package in the tree to see its widgets rendered live.</div></div>`;['serviceContainer'];#observer;constructor(){const p=o;super(),this[p(0x16b)]=this[p(0x173)]('head'),this[p(0x160)]=this['_getDomElement']('grid');}async[o(0x155)](c,d){const q=o;let f=[];try{if(c[q(0x14c)]==='control'){const g=c[q(0x14e)]?await iobrokerHandler[q(0x15b)](q(0x13d),c[q(0x16f)]||undefined):await iobrokerHandler['getObjectNames'](q(0x13d),c['dir']||undefined);f=await Promise['all'](g[q(0x178)](async h=>{const r=q,i=((c[r(0x16f)]??'')+'/'+h)[r(0x149)](/^\//,''),j=getCustomControlName(i);if(!customElements[r(0x143)](j))try{const k=c['global']?await iobrokerHandler[r(0x163)](r(0x13d),i):await iobrokerHandler['getCustomControl'](i);if(k)generateCustomControl(i,k);}catch(l){}return{'name':h,'tag':j,'elementDef':{'tag':j}};}));}else{if(c[q(0x14c)]===q(0x16c)){if(c['single']){const h=String(c[q(0x16d)])['replace'](/^\//,''),i={'scene-name':h,'scene-type':'3dcontrol'};if(c[q(0x14e)])i['scene-scope']='global';f=[{'name':h['split']('/')[q(0x171)](),'tag':q(0x17a),'elementDef':{'tag':q(0x17a),'defaultAttributes':i,'defaultWidth':q(0x165),'defaultHeight':q(0x144)}}];}}else{if(c['galleryType']==='npm'){const j=await c[q(0x13f)][q(0x166)](),k=new Set();for(const l of j){if(!l[q(0x154)]||k['has'](l[q(0x154)]))continue;k['add'](l['tag']),f['push']({'name':l[q(0x14f)]??l['tag'],'tag':l[q(0x154)],'elementDef':l});}}}}}catch(m){console[q(0x13b)](q(0x15d),m);}this['_showItems'](d,f);}['_showItems'](c,d){const s=o;this[s(0x16b)][s(0x13a)]=c+'\x20('+d['length']+')',this.#observer?.[s(0x14d)](),this[s(0x160)][s(0x15e)]='';if(!d[s(0x170)]){this['_grid'][s(0x15e)]='<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>';return;}this.#observer=new IntersectionObserver(e=>{const t=s;for(const f of e){f['isIntersecting']&&!f[t(0x174)]['_instantiated']&&(f[t(0x174)]['_instantiated']=!![],this['_instantiate'](f['target']),this.#observer[t(0x157)](f['target']));}},{'root':this[s(0x160)],'threshold':0.05});for(const e of d){const f=document[s(0x145)]('div');f[s(0x169)]=s(0x135),f[s(0x14a)]=e[s(0x154)];const g=document['createElement']('div');g[s(0x169)]=s(0x16e),g[s(0x140)]=e[s(0x14f)];const h=document[s(0x145)](s(0x139));h[s(0x169)]=s(0x161),h[s(0x17b)]=e,f[s(0x146)](g),f[s(0x146)](h),f[s(0x150)]=!![],f[s(0x179)]=i=>{const u=s;i[u(0x136)][u(0x151)](dragDropFormatNameElementDefinition,JSON[u(0x137)](e[u(0x158)])),i[u(0x136)][u(0x15a)]=u(0x16a),i['dataTransfer']['dropEffect']=u(0x147);},f['onclick']=()=>{const v=s;try{const i=this[v(0x138)]??window['appShell'][v(0x138)];let j=i[v(0x176)][v(0x143)](e['elementDef']['tool']??NamedTools[v(0x175)]);if(typeof j==v(0x159))j=new j(e[v(0x158)]);i['globalContext']['tool']=j;}catch(k){}},this[s(0x160)][s(0x146)](f),this.#observer[s(0x153)](h);}}['_instantiate'](c){const w=o,d=c['_item'];try{if(!d['tag'])return;if(d[w(0x154)][w(0x164)]('-')&&!customElements[w(0x143)](d[w(0x154)]))return;const f=document['createElement'](d['tag']);if(d[w(0x158)]?.[w(0x148)])for(const g in d[w(0x158)]['defaultAttributes']){try{f['setAttribute'](g,d['elementDef']['defaultAttributes'][g]);}catch(h){}}if(d[w(0x158)]?.['defaultContent'])f[w(0x140)]=d['elementDef'][w(0x156)];else{if(!d[w(0x154)]['includes']('-')&&!f[w(0x177)][w(0x170)])f[w(0x140)]=d[w(0x154)];}c[w(0x146)](f);}catch(i){console[w(0x13b)](w(0x14b),d['tag'],i);}}}customElements[o(0x142)](o(0x15f),IobrokerWebuiWidgetGallery);function a(){const x=['target','DrawElementTool','designerTools','childNodes','map','ondragstart','iobroker-webui-3dscreen-viewer','_item','5321295wyvOav','card','dataTransfer','stringify','serviceContainer','div','innerText','warn','3357612kWCsWE','control','1607005gkChUV','service','textContent','8BQGRxK','define','get','300px','createElement','appendChild','copy','defaultAttributes','replace','title','gallery:\x20could\x20not\x20render','galleryType','disconnect','global','name','draggable','setData','template','observe','tag','showForSource','defaultContent','unobserve','elementDef','function','effectAllowed','getGlobalObjectNames','4193736Gogjdq','gallery:\x20error\x20loading\x20items','innerHTML','iobroker-webui-widget-gallery','_grid','card-preview','2693535ORnaKY','getGlobalObject','includes','400px','getElements','9588901BaHwGj','2lAHoGb','className','all','_head','3dcontrol','single','card-title','dir','length','pop','484389XFioFY','_getDomElement'];a=function(){return x;};return a();}
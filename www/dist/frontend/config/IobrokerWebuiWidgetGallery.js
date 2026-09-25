const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x1dc))/0x1+parseInt(n(0x1e0))/0x2*(-parseInt(n(0x1be))/0x3)+-parseInt(n(0x1d6))/0x4+parseInt(n(0x1e1))/0x5*(-parseInt(n(0x1db))/0x6)+-parseInt(n(0x1d5))/0x7*(-parseInt(n(0x1c9))/0x8)+parseInt(n(0x1e2))/0x9*(-parseInt(n(0x1bb))/0xa)+parseInt(n(0x1cc))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x81e6b));function b(c,d){c=c-0x1a5;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';function a(){const x=['innerText','<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>','split','tool','8OrxBBx','control','includes','11750178ZYmsXf','_instantiate','function','showForSource','replace','_head','defaultAttributes','dropEffect','appShell','967281bsuCnf','394312sPNbXB','_showItems','single','createElement','_item','252834xPMmqP','15345EGEKYE','div','300px','textContent','20MdEHbr','5ERRalE','9JycnDh','ondragstart','galleryType','effectAllowed','onclick','warn','_getDomElement','head','setData','stringify','getCustomControl','tag','3dcontrol','target','service','defaultContent','gallery:\x20could\x20not\x20render','DrawElementTool','getGlobalObject','className','has','setAttribute','iobroker-webui-3dscreen-viewer','length','appendChild','scene-scope','3208840YSPeFl','dir','400px','68415RfWynS','_grid','define','serviceContainer','template','getGlobalObjectNames','elementDef'];a=function(){return x;};return a();}import{dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [o(0x1c2)]=html`
        <div id="head">gallery</div>
        <div id="grid"><div class="empty">Select a controls folder or a package in the tree to see its widgets rendered live.</div></div>`;['serviceContainer'];#observer;constructor(){const p=o;super(),this[p(0x1d1)]=this['_getDomElement'](p(0x1a8)),this['_grid']=this[p(0x1a7)]('grid');}async[o(0x1cf)](c,d){const q=o;let f=[];try{if(c[q(0x1e4)]===q(0x1ca)){const g=c['global']?await iobrokerHandler[q(0x1c3)](q(0x1ca),c[q(0x1bc)]||undefined):await iobrokerHandler['getObjectNames'](q(0x1ca),c['dir']||undefined);f=await Promise['all'](g['map'](async h=>{const r=q,i=((c['dir']??'')+'/'+h)[r(0x1d0)](/^\//,''),j=getCustomControlName(i);if(!customElements['get'](j))try{const k=c['global']?await iobrokerHandler[r(0x1b3)]('control',i):await iobrokerHandler[r(0x1ab)](i);if(k)generateCustomControl(i,k);}catch(l){}return{'name':h,'tag':j,'elementDef':{'tag':j}};}));}else{if(c['galleryType']==='3dcontrol'){if(c[q(0x1d8)]){const h=String(c[q(0x1d8)])['replace'](/^\//,''),i={'scene-name':h,'scene-type':q(0x1ad)};if(c['global'])i[q(0x1ba)]='global';f=[{'name':h[q(0x1c7)]('/')['pop'](),'tag':'iobroker-webui-3dscreen-viewer','elementDef':{'tag':q(0x1b7),'defaultAttributes':i,'defaultWidth':q(0x1bd),'defaultHeight':q(0x1de)}}];}}else{if(c['galleryType']==='npm'){const j=await c[q(0x1af)]['getElements'](),k=new Set();for(const l of j){if(!l[q(0x1ac)]||k[q(0x1b5)](l['tag']))continue;k['add'](l[q(0x1ac)]),f['push']({'name':l['name']??l['tag'],'tag':l['tag'],'elementDef':l});}}}}}catch(m){console[q(0x1a6)]('gallery:\x20error\x20loading\x20items',m);}this[q(0x1d7)](d,f);}[o(0x1d7)](c,d){const s=o;this['_head'][s(0x1c5)]=c+'\x20('+d[s(0x1b8)]+')',this.#observer?.['disconnect'](),this['_grid']['innerHTML']='';if(!d[s(0x1b8)]){this[s(0x1bf)]['innerHTML']=s(0x1c6);return;}this.#observer=new IntersectionObserver(e=>{const t=s;for(const f of e){f['isIntersecting']&&!f['target']['_instantiated']&&(f[t(0x1ae)]['_instantiated']=!![],this[t(0x1cd)](f[t(0x1ae)]),this.#observer['unobserve'](f['target']));}},{'root':this['_grid'],'threshold':0.05});for(const e of d){const f=document[s(0x1d9)]('div');f[s(0x1b4)]='card',f['title']=e['tag'];const g=document[s(0x1d9)](s(0x1dd));g['className']='card-title',g['textContent']=e['name'];const h=document[s(0x1d9)](s(0x1dd));h['className']='card-preview',h['_item']=e,f['appendChild'](g),f[s(0x1b9)](h),f['draggable']=!![],f[s(0x1e3)]=i=>{const u=s;i['dataTransfer'][u(0x1a9)](dragDropFormatNameElementDefinition,JSON[u(0x1aa)](e[u(0x1c4)])),i['dataTransfer'][u(0x1e5)]='all',i['dataTransfer'][u(0x1d3)]='copy';},f[s(0x1a5)]=()=>{const v=s;try{const i=this['serviceContainer']??window[v(0x1d4)][v(0x1c1)];let j=i['designerTools']['get'](e[v(0x1c4)][v(0x1c8)]??NamedTools[v(0x1b2)]);if(typeof j==v(0x1ce))j=new j(e['elementDef']);i['globalContext'][v(0x1c8)]=j;}catch(k){}},this[s(0x1bf)][s(0x1b9)](f),this.#observer['observe'](h);}}['_instantiate'](c){const w=o,d=c[w(0x1da)];try{if(!d['tag'])return;if(d[w(0x1ac)][w(0x1cb)]('-')&&!customElements['get'](d['tag']))return;const f=document[w(0x1d9)](d[w(0x1ac)]);if(d['elementDef']?.['defaultAttributes'])for(const g in d[w(0x1c4)][w(0x1d2)]){try{f[w(0x1b6)](g,d[w(0x1c4)]['defaultAttributes'][g]);}catch(h){}}if(d['elementDef']?.['defaultContent'])f[w(0x1df)]=d['elementDef'][w(0x1b0)];else{if(!d[w(0x1ac)]['includes']('-')&&!f['childNodes']['length'])f[w(0x1df)]=d[w(0x1ac)];}c[w(0x1b9)](f);}catch(i){console['warn'](w(0x1b1),d[w(0x1ac)],i);}}}customElements[o(0x1c0)]('iobroker-webui-widget-gallery',IobrokerWebuiWidgetGallery);
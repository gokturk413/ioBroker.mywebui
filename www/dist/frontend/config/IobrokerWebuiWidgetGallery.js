const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0xa2))/0x1*(-parseInt(n(0xb5))/0x2)+-parseInt(n(0xb4))/0x3*(-parseInt(n(0xc2))/0x4)+-parseInt(n(0xb7))/0x5*(parseInt(n(0xc3))/0x6)+parseInt(n(0xb8))/0x7+-parseInt(n(0xba))/0x8*(parseInt(n(0xcc))/0x9)+-parseInt(n(0xcd))/0xa*(parseInt(n(0x9f))/0xb)+parseInt(n(0xac))/0xc*(parseInt(n(0xb9))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc235e));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';function a(){const x=['global','draggable','replace','5663052Lzetnz','230vlJKjW','_showItems','_head','createElement','disconnect','template','target','control','innerHTML','scene-scope','grid','getElements','className','dataTransfer','includes','470987wQSamj','all','tag','14euVvAt','get','defaultContent','setAttribute','<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>','globalContext','serviceContainer','_item','textContent','title','6270684SHhvGd','name','card','card-preview','_instantiate','iobroker-webui-widget-gallery','appShell','tool','1950618muziXI','41172VkxqDd','defaultAttributes','1406390kokiJY','10061072rTAuJb','13qNXGqt','8bgybhp','elementDef','childNodes','function','copy','appendChild','_instantiated','isIntersecting','8PISVUY','12MiYZgM','galleryType','warn','dropEffect','length','card-title'];a=function(){return x;};return a();}import{iobrokerHandler}from'../common/IobrokerHandler.js';function b(c,d){c=c-0x9d;const e=a();let f=e[c];return f;}import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [o(0xd2)]=html`
        <div id="head">gallery</div>
        <div id="grid"><div class="empty">Select a controls folder or a package in the tree to see its widgets rendered live.</div></div>`;[o(0xa8)];#observer;constructor(){const p=o;super(),this[p(0xcf)]=this['_getDomElement']('head'),this['_grid']=this['_getDomElement'](p(0xd7));}async['showForSource'](c,d){const q=o;let f=[];try{if(c[q(0xc4)]==='control'){const g=c['global']?await iobrokerHandler['getGlobalObjectNames'](q(0xd4),c['dir']||undefined):await iobrokerHandler['getObjectNames'](q(0xd4),c['dir']||undefined);f=await Promise[q(0xa0)](g['map'](async h=>{const r=q,i=((c['dir']??'')+'/'+h)['replace'](/^\//,''),j=getCustomControlName(i);if(!customElements[r(0xa3)](j))try{const k=c[r(0xc9)]?await iobrokerHandler['getGlobalObject']('control',i):await iobrokerHandler['getCustomControl'](i);if(k)generateCustomControl(i,k);}catch(l){}return{'name':h,'tag':j,'elementDef':{'tag':j}};}));}else{if(c[q(0xc4)]==='3dcontrol'){if(c['single']){const h=String(c['single'])[q(0xcb)](/^\//,''),i={'scene-name':h,'scene-type':'3dcontrol'};if(c['global'])i[q(0xd6)]=q(0xc9);f=[{'name':h['split']('/')['pop'](),'tag':'iobroker-webui-3dscreen-viewer','elementDef':{'tag':'iobroker-webui-3dscreen-viewer','defaultAttributes':i,'defaultWidth':'400px','defaultHeight':'300px'}}];}}else{if(c[q(0xc4)]==='npm'){const j=await c['service'][q(0xd8)](),k=new Set();for(const l of j){if(!l['tag']||k['has'](l[q(0xa1)]))continue;k['add'](l[q(0xa1)]),f['push']({'name':l[q(0xad)]??l['tag'],'tag':l['tag'],'elementDef':l});}}}}}catch(m){console[q(0xc5)]('gallery:\x20error\x20loading\x20items',m);}this['_showItems'](d,f);}[o(0xce)](c,d){const s=o;this['_head']['innerText']=c+'\x20('+d['length']+')',this.#observer?.[s(0xd1)](),this['_grid'][s(0xd5)]='';if(!d[s(0xc7)]){this['_grid']['innerHTML']=s(0xa6);return;}this.#observer=new IntersectionObserver(e=>{const t=s;for(const f of e){f[t(0xc1)]&&!f[t(0xd3)]['_instantiated']&&(f['target'][t(0xc0)]=!![],this['_instantiate'](f[t(0xd3)]),this.#observer['unobserve'](f[t(0xd3)]));}},{'root':this['_grid'],'threshold':0.05});for(const e of d){const f=document[s(0xd0)]('div');f['className']=s(0xae),f[s(0xab)]=e[s(0xa1)];const g=document['createElement']('div');g[s(0xd9)]=s(0xc8),g[s(0xaa)]=e['name'];const h=document['createElement']('div');h['className']=s(0xaf),h['_item']=e,f['appendChild'](g),f[s(0xbf)](h),f[s(0xca)]=!![],f['ondragstart']=i=>{const u=s;i[u(0x9d)]['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](e[u(0xbb)])),i[u(0x9d)]['effectAllowed']=u(0xa0),i['dataTransfer'][u(0xc6)]=u(0xbe);},f['onclick']=()=>{const v=s;try{const i=this[v(0xa8)]??window[v(0xb2)][v(0xa8)];let j=i['designerTools']['get'](e['elementDef'][v(0xb3)]??NamedTools['DrawElementTool']);if(typeof j==v(0xbd))j=new j(e['elementDef']);i[v(0xa7)][v(0xb3)]=j;}catch(k){}},this['_grid']['appendChild'](f),this.#observer['observe'](h);}}[o(0xb0)](c){const w=o,d=c[w(0xa9)];try{if(!d[w(0xa1)])return;if(d['tag'][w(0x9e)]('-')&&!customElements['get'](d['tag']))return;const f=document['createElement'](d[w(0xa1)]);if(d['elementDef']?.[w(0xb6)])for(const g in d[w(0xbb)]['defaultAttributes']){try{f[w(0xa5)](g,d['elementDef']['defaultAttributes'][g]);}catch(h){}}if(d[w(0xbb)]?.[w(0xa4)])f[w(0xaa)]=d['elementDef']['defaultContent'];else{if(!d[w(0xa1)]['includes']('-')&&!f[w(0xbc)][w(0xc7)])f['textContent']=d['tag'];}c[w(0xbf)](f);}catch(i){console[w(0xc5)]('gallery:\x20could\x20not\x20render',d[w(0xa1)],i);}}}customElements['define'](o(0xb1),IobrokerWebuiWidgetGallery);
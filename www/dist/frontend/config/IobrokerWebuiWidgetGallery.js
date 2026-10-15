const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x131))/0x1*(-parseInt(n(0x110))/0x2)+parseInt(n(0x11a))/0x3+-parseInt(n(0xf8))/0x4+parseInt(n(0x129))/0x5*(parseInt(n(0x10d))/0x6)+-parseInt(n(0x12e))/0x7+parseInt(n(0x118))/0x8+parseInt(n(0x111))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8bbd5));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';function a(){const x=['length','effectAllowed','global','7471824NcByTy','gallery:\x20could\x20not\x20render','1041465PmVBES','appendChild','template','400px','iobroker-webui-3dscreen-viewer','single','getElements','name','tag','defaultContent','innerHTML','childNodes','dropEffect','_showItems','all','3258425hWHfRC','DrawElementTool','map','defaultAttributes','push','3480561EhXIsu','getGlobalObject','getObjectNames','42242JuxUKI','npm','has','card','_instantiate','655984REgkXC','textContent','designerTools','target','head','copy','warn','ondragstart','iobroker-webui-widget-gallery','dir','div','className','replace','appShell','draggable','setData','get','elementDef','serviceContainer','_item','card-title','6WtrOgb','_grid','control','52wZATRB','3591594LbJVBm','tool','includes','3dcontrol'];a=function(){return x;};return a();}import{iobrokerHandler}from'../common/IobrokerHandler.js';import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [o(0x11c)]=html`
        <div id="head">gallery</div>
        <div id="grid"><div class="empty">Select a controls folder or a package in the tree to see its widgets rendered live.</div></div>`;['serviceContainer'];#observer;constructor(){const p=o;super(),this['_head']=this['_getDomElement'](p(0xfc)),this[p(0x10e)]=this['_getDomElement']('grid');}async['showForSource'](c,d){const q=o;let f=[];try{if(c['galleryType']==='control'){const g=c['global']?await iobrokerHandler['getGlobalObjectNames'](q(0x10f),c['dir']||undefined):await iobrokerHandler[q(0x130)](q(0x10f),c[q(0x101)]||undefined);f=await Promise[q(0x128)](g[q(0x12b)](async h=>{const r=q,i=((c['dir']??'')+'/'+h)['replace'](/^\//,''),j=getCustomControlName(i);if(!customElements['get'](j))try{const k=c['global']?await iobrokerHandler[r(0x12f)](r(0x10f),i):await iobrokerHandler['getCustomControl'](i);if(k)generateCustomControl(i,k);}catch(l){}return{'name':h,'tag':j,'elementDef':{'tag':j}};}));}else{if(c['galleryType']===q(0x114)){if(c['single']){const h=String(c[q(0x11f)])[q(0x104)](/^\//,''),i={'scene-name':h,'scene-type':'3dcontrol'};if(c[q(0x117)])i['scene-scope']='global';f=[{'name':h['split']('/')['pop'](),'tag':q(0x11e),'elementDef':{'tag':'iobroker-webui-3dscreen-viewer','defaultAttributes':i,'defaultWidth':q(0x11d),'defaultHeight':'300px'}}];}}else{if(c['galleryType']===q(0x132)){const j=await c['service'][q(0x120)](),k=new Set();for(const l of j){if(!l[q(0x122)]||k[q(0x133)](l['tag']))continue;k['add'](l[q(0x122)]),f[q(0x12d)]({'name':l['name']??l['tag'],'tag':l[q(0x122)],'elementDef':l});}}}}}catch(m){console['warn']('gallery:\x20error\x20loading\x20items',m);}this['_showItems'](d,f);}[o(0x127)](c,d){const s=o;this['_head']['innerText']=c+'\x20('+d[s(0x115)]+')',this.#observer?.['disconnect'](),this[s(0x10e)][s(0x124)]='';if(!d['length']){this['_grid']['innerHTML']='<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>';return;}this.#observer=new IntersectionObserver(e=>{const t=s;for(const f of e){f['isIntersecting']&&!f['target']['_instantiated']&&(f['target']['_instantiated']=!![],this[t(0xf7)](f[t(0xfb)]),this.#observer['unobserve'](f['target']));}},{'root':this[s(0x10e)],'threshold':0.05});for(const e of d){const f=document['createElement']('div');f[s(0x103)]=s(0xf6),f['title']=e['tag'];const g=document['createElement'](s(0x102));g[s(0x103)]=s(0x10c),g[s(0xf9)]=e[s(0x121)];const h=document['createElement'](s(0x102));h[s(0x103)]='card-preview',h[s(0x10b)]=e,f[s(0x11b)](g),f['appendChild'](h),f[s(0x106)]=!![],f[s(0xff)]=i=>{const u=s;i['dataTransfer'][u(0x107)](dragDropFormatNameElementDefinition,JSON['stringify'](e['elementDef'])),i['dataTransfer'][u(0x116)]=u(0x128),i['dataTransfer'][u(0x126)]=u(0xfd);},f['onclick']=()=>{const v=s;try{const i=this['serviceContainer']??window[v(0x105)][v(0x10a)];let j=i[v(0xfa)]['get'](e[v(0x109)][v(0x112)]??NamedTools[v(0x12a)]);if(typeof j=='function')j=new j(e['elementDef']);i['globalContext'][v(0x112)]=j;}catch(k){}},this['_grid']['appendChild'](f),this.#observer['observe'](h);}}['_instantiate'](c){const w=o,d=c[w(0x10b)];try{if(!d['tag'])return;if(d['tag'][w(0x113)]('-')&&!customElements[w(0x108)](d['tag']))return;const f=document['createElement'](d[w(0x122)]);if(d[w(0x109)]?.['defaultAttributes'])for(const g in d['elementDef'][w(0x12c)]){try{f['setAttribute'](g,d['elementDef'][w(0x12c)][g]);}catch(h){}}if(d[w(0x109)]?.[w(0x123)])f[w(0xf9)]=d[w(0x109)][w(0x123)];else{if(!d[w(0x122)][w(0x113)]('-')&&!f[w(0x125)][w(0x115)])f['textContent']=d[w(0x122)];}c['appendChild'](f);}catch(i){console[w(0xfe)](w(0x119),d['tag'],i);}}}function b(c,d){c=c-0xf6;const e=a();let f=e[c];return f;}customElements['define'](o(0x100),IobrokerWebuiWidgetGallery);
const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x14a))/0x1+-parseInt(n(0x153))/0x2+-parseInt(n(0x137))/0x3+-parseInt(n(0x14b))/0x4*(-parseInt(n(0x16b))/0x5)+-parseInt(n(0x16d))/0x6*(parseInt(n(0x133))/0x7)+-parseInt(n(0x170))/0x8*(-parseInt(n(0x147))/0x9)+-parseInt(n(0x155))/0xa*(-parseInt(n(0x152))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x82df0));function b(c,d){c=c-0x12f;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';import{iobrokerHandler}from'../common/IobrokerHandler.js';function a(){const x=['DrawElementTool','createElement','getObjectNames','effectAllowed','_instantiate','isIntersecting','36VCAmXZ','includes','unobserve','191369JgSdFO','8pOAEzf','designerTools','map','head','defaultAttributes','setAttribute','name','26070QOCpzp','1785794fgrSyj','<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>','7200UnMqCP','innerText','defaultContent','getElements','getGlobalObjectNames','tag','3dcontrol','title','pop','single','dataTransfer','gallery:\x20could\x20not\x20render','npm','getGlobalObject','serviceContainer','_instantiated','iobroker-webui-3dscreen-viewer','dir','onclick','control','tool','warn','423345otbSHG','add','618cZlSwy','elementDef','length','1368576ZLRYEg','get','appendChild','observe','300px','className','target','52556eIKFMY','galleryType','appShell','_head','499164PlMhmp','innerHTML','scene-scope','_grid','split','global','copy','stringify','push','_showItems'];a=function(){return x;};return a();}import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        <div id="grid"><div class="empty">Select a controls folder or a package in the tree to see its widgets rendered live.</div></div>`;[o(0x163)];#observer;constructor(){const p=o;super(),this[p(0x136)]=this['_getDomElement'](p(0x14e)),this[p(0x13a)]=this['_getDomElement']('grid');}async['showForSource'](c,d){const q=o;let f=[];try{if(c[q(0x134)]===q(0x168)){const g=c['global']?await iobrokerHandler[q(0x159)]('control',c[q(0x166)]||undefined):await iobrokerHandler[q(0x143)](q(0x168),c['dir']||undefined);f=await Promise['all'](g[q(0x14d)](async h=>{const r=q,i=((c[r(0x166)]??'')+'/'+h)['replace'](/^\//,''),j=getCustomControlName(i);if(!customElements[r(0x171)](j))try{const k=c[r(0x13c)]?await iobrokerHandler[r(0x162)]('control',i):await iobrokerHandler['getCustomControl'](i);if(k)generateCustomControl(i,k);}catch(l){}return{'name':h,'tag':j,'elementDef':{'tag':j}};}));}else{if(c['galleryType']===q(0x15b)){if(c['single']){const h=String(c[q(0x15e)])['replace'](/^\//,''),i={'scene-name':h,'scene-type':'3dcontrol'};if(c['global'])i[q(0x139)]='global';f=[{'name':h[q(0x13b)]('/')[q(0x15d)](),'tag':q(0x165),'elementDef':{'tag':'iobroker-webui-3dscreen-viewer','defaultAttributes':i,'defaultWidth':'400px','defaultHeight':q(0x130)}}];}}else{if(c[q(0x134)]===q(0x161)){const j=await c['service'][q(0x158)](),k=new Set();for(const l of j){if(!l[q(0x15a)]||k['has'](l[q(0x15a)]))continue;k[q(0x16c)](l[q(0x15a)]),f[q(0x13f)]({'name':l['name']??l['tag'],'tag':l[q(0x15a)],'elementDef':l});}}}}}catch(m){console[q(0x16a)]('gallery:\x20error\x20loading\x20items',m);}this[q(0x140)](d,f);}[o(0x140)](c,d){const s=o;this['_head'][s(0x156)]=c+'\x20('+d[s(0x16f)]+')',this.#observer?.['disconnect'](),this['_grid'][s(0x138)]='';if(!d[s(0x16f)]){this[s(0x13a)]['innerHTML']=s(0x154);return;}this.#observer=new IntersectionObserver(e=>{const t=s;for(const f of e){f[t(0x146)]&&!f['target'][t(0x164)]&&(f[t(0x132)]['_instantiated']=!![],this['_instantiate'](f['target']),this.#observer[t(0x149)](f['target']));}},{'root':this[s(0x13a)],'threshold':0.05});for(const e of d){const f=document[s(0x142)]('div');f[s(0x131)]='card',f[s(0x15c)]=e['tag'];const g=document['createElement']('div');g['className']='card-title',g['textContent']=e[s(0x151)];const h=document['createElement']('div');h['className']='card-preview',h['_item']=e,f[s(0x172)](g),f[s(0x172)](h),f['draggable']=!![],f['ondragstart']=i=>{const u=s;i['dataTransfer']['setData'](dragDropFormatNameElementDefinition,JSON[u(0x13e)](e['elementDef'])),i['dataTransfer'][u(0x144)]='all',i[u(0x15f)]['dropEffect']=u(0x13d);},f[s(0x167)]=()=>{const v=s;try{const i=this['serviceContainer']??window[v(0x135)]['serviceContainer'];let j=i[v(0x14c)]['get'](e[v(0x16e)]['tool']??NamedTools[v(0x141)]);if(typeof j=='function')j=new j(e['elementDef']);i['globalContext'][v(0x169)]=j;}catch(k){}},this['_grid'][s(0x172)](f),this.#observer[s(0x12f)](h);}}[o(0x145)](c){const w=o,d=c['_item'];try{if(!d[w(0x15a)])return;if(d[w(0x15a)][w(0x148)]('-')&&!customElements[w(0x171)](d[w(0x15a)]))return;const f=document[w(0x142)](d['tag']);if(d[w(0x16e)]?.['defaultAttributes'])for(const g in d['elementDef'][w(0x14f)]){try{f[w(0x150)](g,d['elementDef']['defaultAttributes'][g]);}catch(h){}}if(d[w(0x16e)]?.['defaultContent'])f['textContent']=d['elementDef'][w(0x157)];else{if(!d['tag']['includes']('-')&&!f['childNodes']['length'])f['textContent']=d[w(0x15a)];}c[w(0x172)](f);}catch(i){console['warn'](w(0x160),d['tag'],i);}}}customElements['define']('iobroker-webui-widget-gallery',IobrokerWebuiWidgetGallery);
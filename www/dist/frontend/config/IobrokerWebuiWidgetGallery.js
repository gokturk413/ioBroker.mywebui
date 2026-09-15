function b(c,d){c=c-0x11c;const e=a();let f=e[c];return f;}const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x14b))/0x1+-parseInt(n(0x150))/0x2*(parseInt(n(0x153))/0x3)+parseInt(n(0x12c))/0x4+parseInt(n(0x132))/0x5*(-parseInt(n(0x148))/0x6)+parseInt(n(0x147))/0x7*(-parseInt(n(0x155))/0x8)+parseInt(n(0x13e))/0x9*(parseInt(n(0x11d))/0xa)+parseInt(n(0x131))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x57b81));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static [o(0x121)]=css`
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
        <div id="grid"><div class="empty">Select a controls folder or a package in the tree to see its widgets rendered live.</div></div>`;['serviceContainer'];#observer;constructor(){const p=o;super(),this[p(0x139)]=this[p(0x14d)]('head'),this[p(0x144)]=this['_getDomElement'](p(0x13d));}async[o(0x149)](c,d){const q=o;let f=[];try{if(c['galleryType']===q(0x159)){const g=c[q(0x129)]?await iobrokerHandler[q(0x124)]('control',c['dir']||undefined):await iobrokerHandler[q(0x151)](q(0x159),c['dir']||undefined);f=await Promise['all'](g['map'](async h=>{const r=q,i=((c[r(0x143)]??'')+'/'+h)[r(0x12a)](/^\//,''),j=getCustomControlName(i);if(!customElements[r(0x127)](j))try{const k=c[r(0x129)]?await iobrokerHandler[r(0x156)](r(0x159),i):await iobrokerHandler['getCustomControl'](i);if(k)generateCustomControl(i,k);}catch(l){}return{'name':h,'tag':j,'elementDef':{'tag':j}};}));}else{if(c[q(0x146)]===q(0x126)){if(c[q(0x145)]){const h=String(c[q(0x145)])['replace'](/^\//,''),i={'scene-name':h,'scene-type':q(0x126)};if(c[q(0x129)])i['scene-scope']='global';f=[{'name':h['split']('/')['pop'](),'tag':q(0x13f),'elementDef':{'tag':q(0x13f),'defaultAttributes':i,'defaultWidth':q(0x157),'defaultHeight':q(0x130)}}];}}else{if(c['galleryType']===q(0x14a)){const j=await c[q(0x12f)][q(0x134)](),k=new Set();for(const l of j){if(!l[q(0x12d)]||k[q(0x13a)](l[q(0x12d)]))continue;k[q(0x133)](l['tag']),f[q(0x11e)]({'name':l['name']??l[q(0x12d)],'tag':l['tag'],'elementDef':l});}}}}}catch(m){console['warn']('gallery:\x20error\x20loading\x20items',m);}this[q(0x136)](d,f);}['_showItems'](c,d){const s=o;this[s(0x139)]['innerText']=c+'\x20('+d[s(0x11c)]+')',this.#observer?.['disconnect'](),this[s(0x144)]['innerHTML']='';if(!d['length']){this['_grid']['innerHTML']=s(0x123);return;}this.#observer=new IntersectionObserver(e=>{const t=s;for(const f of e){f['isIntersecting']&&!f[t(0x140)][t(0x12e)]&&(f['target']['_instantiated']=!![],this['_instantiate'](f['target']),this.#observer[t(0x128)](f[t(0x140)]));}},{'root':this[s(0x144)],'threshold':0.05});for(const e of d){const f=document[s(0x158)](s(0x11f));f['className']='card',f['title']=e['tag'];const g=document[s(0x158)]('div');g[s(0x120)]='card-title',g[s(0x14e)]=e['name'];const h=document[s(0x158)](s(0x11f));h[s(0x120)]=s(0x13b),h['_item']=e,f[s(0x137)](g),f[s(0x137)](h),f['draggable']=!![],f[s(0x15a)]=i=>{const u=s;i[u(0x141)][u(0x13c)](dragDropFormatNameElementDefinition,JSON[u(0x142)](e[u(0x152)])),i['dataTransfer']['effectAllowed']='all',i[u(0x141)]['dropEffect']='copy';},f[s(0x154)]=()=>{const v=s;try{const i=this['serviceContainer']??window['appShell']['serviceContainer'];let j=i['designerTools']['get'](e[v(0x152)]['tool']??NamedTools['DrawElementTool']);if(typeof j=='function')j=new j(e['elementDef']);i[v(0x14f)]['tool']=j;}catch(k){}},this['_grid']['appendChild'](f),this.#observer['observe'](h);}}['_instantiate'](c){const w=o,d=c[w(0x125)];try{if(!d[w(0x12d)])return;if(d['tag']['includes']('-')&&!customElements['get'](d[w(0x12d)]))return;const f=document[w(0x158)](d['tag']);if(d['elementDef']?.[w(0x135)])for(const g in d['elementDef']['defaultAttributes']){try{f[w(0x122)](g,d['elementDef']['defaultAttributes'][g]);}catch(h){}}if(d[w(0x152)]?.[w(0x12b)])f['textContent']=d['elementDef'][w(0x12b)];else{if(!d[w(0x12d)]['includes']('-')&&!f[w(0x14c)][w(0x11c)])f[w(0x14e)]=d['tag'];}c['appendChild'](f);}catch(i){console['warn']('gallery:\x20could\x20not\x20render',d[w(0x12d)],i);}}}function a(){const x=['getElements','defaultAttributes','_showItems','appendChild','define','_head','has','card-preview','setData','grid','2763fgBjbT','iobroker-webui-3dscreen-viewer','target','dataTransfer','stringify','dir','_grid','single','galleryType','2254546CsmaVm','1266hYarKH','showForSource','npm','355883kZDmpN','childNodes','_getDomElement','textContent','globalContext','193574YHRvKB','getObjectNames','elementDef','9jbWpAg','onclick','16URkjnV','getGlobalObject','400px','createElement','control','ondragstart','length','16470bNjjWL','push','div','className','style','setAttribute','<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>','getGlobalObjectNames','_item','3dcontrol','get','unobserve','global','replace','defaultContent','1439352DRJdKB','tag','_instantiated','service','300px','14951255WjHxaW','13625nLsbPN','add'];a=function(){return x;};return a();}customElements[o(0x138)]('iobroker-webui-widget-gallery',IobrokerWebuiWidgetGallery);
const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x99))/0x1*(parseInt(n(0x98))/0x2)+-parseInt(n(0x96))/0x3+parseInt(n(0xa1))/0x4*(parseInt(n(0xc2))/0x5)+-parseInt(n(0xcc))/0x6+parseInt(n(0xa8))/0x7+-parseInt(n(0xa5))/0x8*(parseInt(n(0xaa))/0x9)+parseInt(n(0xb6))/0xa*(parseInt(n(0xa6))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x40df9));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';function a(){const w=['52DcgSLR','tag','iobroker-webui-widget-gallery','_grid','2734744DaQQbI','121lJJlZr','includes','319361CjPMvY','defaultAttributes','9aiyXHU','gallery:\x20could\x20not\x20render','has','copy','scene-scope','getGlobalObjectNames','name','_getDomElement','title','define','globalContext','galleryType','1260530BUNzyu','isIntersecting','DrawElementTool','3dcontrol','function','defaultContent','tool','card','_item','disconnect','innerText','length','123835TSOzrZ','all','service','appendChild','stringify','dataTransfer','innerHTML','showForSource','dir','global','2673930uPwvgP','elementDef','gallery:\x20error\x20loading\x20items','observe','control','createElement','push','designerTools','grid','split','childNodes','833865DpkxpU','_instantiated','282002CjULSy','3vOALhq','div','single','getElements','dropEffect','textContent','serviceContainer','target'];a=function(){return w;};return a();}import{dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';function b(c,d){c=c-0x91;const e=a();let f=e[c];return f;}export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        <div id="grid"><div class="empty">Select a controls folder or a package in the tree to see its widgets rendered live.</div></div>`;[o(0x9f)];#observer;constructor(){const p=o;super(),this['_head']=this[p(0xb1)]('head'),this['_grid']=this[p(0xb1)](p(0x93));}async[o(0xc9)](c,d){const q=o;let f=[];try{if(c[q(0xb5)]===q(0xd0)){const g=c[q(0xcb)]?await iobrokerHandler[q(0xaf)]('control',c['dir']||undefined):await iobrokerHandler['getObjectNames']('control',c[q(0xca)]||undefined);f=await Promise['all'](g['map'](async h=>{const i=((c['dir']??'')+'/'+h)['replace'](/^\//,''),j=getCustomControlName(i);if(!customElements['get'](j))try{const k=c['global']?await iobrokerHandler['getGlobalObject']('control',i):await iobrokerHandler['getCustomControl'](i);if(k)generateCustomControl(i,k);}catch(l){}return{'name':h,'tag':j,'elementDef':{'tag':j}};}));}else{if(c['galleryType']===q(0xb9)){if(c[q(0x9b)]){const h=String(c['single'])['replace'](/^\//,''),i={'scene-name':h,'scene-type':q(0xb9)};if(c[q(0xcb)])i[q(0xae)]='global';f=[{'name':h[q(0x94)]('/')['pop'](),'tag':'iobroker-webui-3dscreen-viewer','elementDef':{'tag':'iobroker-webui-3dscreen-viewer','defaultAttributes':i,'defaultWidth':'400px','defaultHeight':'300px'}}];}}else{if(c['galleryType']==='npm'){const j=await c[q(0xc4)][q(0x9c)](),k=new Set();for(const l of j){if(!l[q(0xa2)]||k[q(0xac)](l[q(0xa2)]))continue;k['add'](l['tag']),f[q(0x91)]({'name':l['name']??l[q(0xa2)],'tag':l[q(0xa2)],'elementDef':l});}}}}}catch(m){console['warn'](q(0xce),m);}this['_showItems'](d,f);}['_showItems'](c,d){const r=o;this['_head'][r(0xc0)]=c+'\x20('+d[r(0xc1)]+')',this.#observer?.[r(0xbf)](),this['_grid']['innerHTML']='';if(!d['length']){this[r(0xa4)][r(0xc8)]='<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>';return;}this.#observer=new IntersectionObserver(e=>{const s=r;for(const f of e){f[s(0xb7)]&&!f[s(0xa0)][s(0x97)]&&(f[s(0xa0)][s(0x97)]=!![],this['_instantiate'](f['target']),this.#observer['unobserve'](f[s(0xa0)]));}},{'root':this['_grid'],'threshold':0.05});for(const e of d){const f=document[r(0xd1)](r(0x9a));f['className']=r(0xbd),f[r(0xb2)]=e[r(0xa2)];const g=document[r(0xd1)]('div');g['className']='card-title',g[r(0x9e)]=e[r(0xb0)];const h=document['createElement'](r(0x9a));h['className']='card-preview',h[r(0xbe)]=e,f[r(0xc5)](g),f['appendChild'](h),f['draggable']=!![],f['ondragstart']=i=>{const t=r;i['dataTransfer']['setData'](dragDropFormatNameElementDefinition,JSON[t(0xc6)](e['elementDef'])),i['dataTransfer']['effectAllowed']=t(0xc3),i[t(0xc7)][t(0x9d)]=t(0xad);},f['onclick']=()=>{const u=r;try{const i=this[u(0x9f)]??window['appShell'][u(0x9f)];let j=i[u(0x92)]['get'](e[u(0xcd)][u(0xbc)]??NamedTools[u(0xb8)]);if(typeof j==u(0xba))j=new j(e['elementDef']);i[u(0xb4)][u(0xbc)]=j;}catch(k){}},this['_grid']['appendChild'](f),this.#observer[r(0xcf)](h);}}['_instantiate'](c){const v=o,d=c[v(0xbe)];try{if(!d[v(0xa2)])return;if(d['tag'][v(0xa7)]('-')&&!customElements['get'](d['tag']))return;const f=document[v(0xd1)](d['tag']);if(d['elementDef']?.[v(0xa9)])for(const g in d[v(0xcd)][v(0xa9)]){try{f['setAttribute'](g,d['elementDef']['defaultAttributes'][g]);}catch(h){}}if(d['elementDef']?.[v(0xbb)])f['textContent']=d[v(0xcd)][v(0xbb)];else{if(!d['tag'][v(0xa7)]('-')&&!f[v(0x95)][v(0xc1)])f[v(0x9e)]=d['tag'];}c['appendChild'](f);}catch(i){console['warn'](v(0xab),d['tag'],i);}}}customElements[o(0xb3)](o(0xa3),IobrokerWebuiWidgetGallery);
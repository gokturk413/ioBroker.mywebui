const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0xac))/0x1+parseInt(n(0xa7))/0x2+-parseInt(n(0xbf))/0x3+parseInt(n(0xd2))/0x4*(-parseInt(n(0xa9))/0x5)+-parseInt(n(0xe3))/0x6+parseInt(n(0xd1))/0x7*(-parseInt(n(0xaa))/0x8)+parseInt(n(0xd0))/0x9*(parseInt(n(0xc8))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x46792));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';function b(c,d){c=c-0xa6;const e=a();let f=e[c];return f;}function a(){const x=['div','warn','define','getCustomControl','copy','setData','head','elementDef','defaultAttributes','appShell','dir','textContent','1348371cslVYh','_instantiate','target','function','appendChild','grid','childNodes','has','serviceContainer','240wFBazH','push','innerHTML','title','card-preview','3dcontrol','createElement','innerText','589383Fgyfxc','100345blkAhg','55576FsuRRe','_instantiated','replace','dataTransfer','tag','global','isIntersecting','getGlobalObject','dropEffect','DrawElementTool','draggable','showForSource','split','300px','name','_showItems','gallery:\x20error\x20loading\x20items','1672008EVMXVT','pop','<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>','iobroker-webui-3dscreen-viewer','_item','globalContext','1048982GojPSl','effectAllowed','145jEEkUY','288lTrsQm','_grid','160410pCGVkM','galleryType','control','length','gallery:\x20could\x20not\x20render','className','stringify'];a=function(){return x;};return a();}import{dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        <div id="grid"><div class="empty">Select a controls folder or a package in the tree to see its widgets rendered live.</div></div>`;[o(0xc7)];#observer;constructor(){const p=o;super(),this['_head']=this['_getDomElement'](p(0xb9)),this['_grid']=this['_getDomElement'](p(0xc4));}async[o(0xdd)](c,d){const q=o;let f=[];try{if(c['galleryType']===q(0xae)){const g=c['global']?await iobrokerHandler['getGlobalObjectNames']('control',c['dir']||undefined):await iobrokerHandler['getObjectNames']('control',c[q(0xbd)]||undefined);f=await Promise['all'](g['map'](async h=>{const r=q,i=((c[r(0xbd)]??'')+'/'+h)['replace'](/^\//,''),j=getCustomControlName(i);if(!customElements['get'](j))try{const k=c[r(0xd7)]?await iobrokerHandler[r(0xd9)]('control',i):await iobrokerHandler[r(0xb6)](i);if(k)generateCustomControl(i,k);}catch(l){}return{'name':h,'tag':j,'elementDef':{'tag':j}};}));}else{if(c[q(0xad)]===q(0xcd)){if(c['single']){const h=String(c['single'])[q(0xd4)](/^\//,''),i={'scene-name':h,'scene-type':'3dcontrol'};if(c['global'])i['scene-scope']=q(0xd7);f=[{'name':h[q(0xde)]('/')[q(0xe4)](),'tag':q(0xe6),'elementDef':{'tag':q(0xe6),'defaultAttributes':i,'defaultWidth':'400px','defaultHeight':q(0xdf)}}];}}else{if(c[q(0xad)]==='npm'){const j=await c['service']['getElements'](),k=new Set();for(const l of j){if(!l['tag']||k[q(0xc6)](l['tag']))continue;k['add'](l[q(0xd6)]),f[q(0xc9)]({'name':l['name']??l['tag'],'tag':l['tag'],'elementDef':l});}}}}}catch(m){console[q(0xb4)](q(0xe2),m);}this[q(0xe1)](d,f);}[o(0xe1)](c,d){const s=o;this['_head'][s(0xcf)]=c+'\x20('+d['length']+')',this.#observer?.['disconnect'](),this['_grid'][s(0xca)]='';if(!d[s(0xaf)]){this['_grid'][s(0xca)]=s(0xe5);return;}this.#observer=new IntersectionObserver(e=>{const t=s;for(const f of e){f[t(0xd8)]&&!f[t(0xc1)][t(0xd3)]&&(f[t(0xc1)][t(0xd3)]=!![],this[t(0xc0)](f['target']),this.#observer['unobserve'](f['target']));}},{'root':this[s(0xab)],'threshold':0.05});for(const e of d){const f=document[s(0xce)]('div');f['className']='card',f[s(0xcb)]=e['tag'];const g=document['createElement']('div');g[s(0xb1)]='card-title',g['textContent']=e[s(0xe0)];const h=document[s(0xce)](s(0xb3));h[s(0xb1)]=s(0xcc),h[s(0xe7)]=e,f[s(0xc3)](g),f[s(0xc3)](h),f[s(0xdc)]=!![],f['ondragstart']=i=>{const u=s;i[u(0xd5)][u(0xb8)](dragDropFormatNameElementDefinition,JSON[u(0xb2)](e[u(0xba)])),i[u(0xd5)][u(0xa8)]='all',i[u(0xd5)][u(0xda)]=u(0xb7);},f['onclick']=()=>{const v=s;try{const i=this[v(0xc7)]??window[v(0xbc)]['serviceContainer'];let j=i['designerTools']['get'](e['elementDef']['tool']??NamedTools[v(0xdb)]);if(typeof j==v(0xc2))j=new j(e['elementDef']);i[v(0xa6)]['tool']=j;}catch(k){}},this[s(0xab)]['appendChild'](f),this.#observer['observe'](h);}}['_instantiate'](c){const w=o,d=c['_item'];try{if(!d['tag'])return;if(d[w(0xd6)]['includes']('-')&&!customElements['get'](d['tag']))return;const f=document['createElement'](d[w(0xd6)]);if(d['elementDef']?.[w(0xbb)])for(const g in d[w(0xba)][w(0xbb)]){try{f['setAttribute'](g,d['elementDef']['defaultAttributes'][g]);}catch(h){}}if(d['elementDef']?.['defaultContent'])f[w(0xbe)]=d['elementDef']['defaultContent'];else{if(!d['tag']['includes']('-')&&!f[w(0xc5)]['length'])f[w(0xbe)]=d[w(0xd6)];}c['appendChild'](f);}catch(i){console[w(0xb4)](w(0xb0),d['tag'],i);}}}customElements[o(0xb5)]('iobroker-webui-widget-gallery',IobrokerWebuiWidgetGallery);
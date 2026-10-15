function a(){const x=['_instantiated','childNodes','3dcontrol','single','innerText','serviceContainer','setAttribute','tag','createElement','<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>','elementDef','length','iobroker-webui-3dscreen-viewer','_getDomElement','1712MTBRUU','102822lKoFka','1099812iBZxua','head','dataTransfer','8UlYfeQ','stringify','unobserve','template','add','53440CJfita','780844OzXURV','getObjectNames','textContent','ondragstart','_showItems','tool','appShell','setData','iobroker-webui-widget-gallery','innerHTML','card-preview','has','_grid','className','target','appendChild','galleryType','disconnect','getGlobalObjectNames','replace','split','get','control','div','dropEffect','defaultAttributes','gallery:\x20error\x20loading\x20items','onclick','2810cLDEWE','designerTools','6288579jtjMIG','1020864UfJMSL','define','dir','_head','warn','card','global'];a=function(){return x;};return a();}function b(c,d){c=c-0x19f;const e=a();let f=e[c];return f;}const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x1b2))/0x1+-parseInt(n(0x1b1))/0x2+parseInt(n(0x1d1))/0x3+parseInt(n(0x1a7))/0x4*(parseInt(n(0x1ce))/0x5)+-parseInt(n(0x1a8))/0x6+-parseInt(n(0x1a9))/0x7+-parseInt(n(0x1ac))/0x8*(parseInt(n(0x1d0))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x70c8c));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [o(0x1af)]=html`
        <div id="head">gallery</div>
        <div id="grid"><div class="empty">Select a controls folder or a package in the tree to see its widgets rendered live.</div></div>`;['serviceContainer'];#observer;constructor(){const p=o;super(),this[p(0x1d4)]=this[p(0x1a6)](p(0x1aa)),this[p(0x1be)]=this[p(0x1a6)]('grid');}async['showForSource'](c,d){const q=o;let f=[];try{if(c['galleryType']===q(0x1c8)){const g=c[q(0x1d7)]?await iobrokerHandler[q(0x1c4)](q(0x1c8),c['dir']||undefined):await iobrokerHandler[q(0x1b3)](q(0x1c8),c['dir']||undefined);f=await Promise['all'](g['map'](async h=>{const r=q,i=((c[r(0x1d3)]??'')+'/'+h)[r(0x1c5)](/^\//,''),j=getCustomControlName(i);if(!customElements['get'](j))try{const k=c['global']?await iobrokerHandler['getGlobalObject']('control',i):await iobrokerHandler['getCustomControl'](i);if(k)generateCustomControl(i,k);}catch(l){}return{'name':h,'tag':j,'elementDef':{'tag':j}};}));}else{if(c[q(0x1c2)]===q(0x1da)){if(c['single']){const h=String(c[q(0x1db)])['replace'](/^\//,''),i={'scene-name':h,'scene-type':q(0x1da)};if(c['global'])i['scene-scope']='global';f=[{'name':h[q(0x1c6)]('/')['pop'](),'tag':q(0x1a5),'elementDef':{'tag':q(0x1a5),'defaultAttributes':i,'defaultWidth':'400px','defaultHeight':'300px'}}];}}else{if(c['galleryType']==='npm'){const j=await c['service']['getElements'](),k=new Set();for(const l of j){if(!l['tag']||k[q(0x1bd)](l['tag']))continue;k[q(0x1b0)](l[q(0x1a0)]),f['push']({'name':l['name']??l['tag'],'tag':l[q(0x1a0)],'elementDef':l});}}}}}catch(m){console[q(0x1d5)](q(0x1cc),m);}this[q(0x1b6)](d,f);}[o(0x1b6)](c,d){const s=o;this[s(0x1d4)][s(0x1dc)]=c+'\x20('+d['length']+')',this.#observer?.[s(0x1c3)](),this['_grid'][s(0x1bb)]='';if(!d[s(0x1a4)]){this[s(0x1be)]['innerHTML']=s(0x1a2);return;}this.#observer=new IntersectionObserver(e=>{const t=s;for(const f of e){f['isIntersecting']&&!f[t(0x1c0)]['_instantiated']&&(f['target'][t(0x1d8)]=!![],this['_instantiate'](f[t(0x1c0)]),this.#observer[t(0x1ae)](f['target']));}},{'root':this['_grid'],'threshold':0.05});for(const e of d){const f=document['createElement'](s(0x1c9));f[s(0x1bf)]=s(0x1d6),f['title']=e['tag'];const g=document[s(0x1a1)](s(0x1c9));g['className']='card-title',g[s(0x1b4)]=e['name'];const h=document[s(0x1a1)](s(0x1c9));h[s(0x1bf)]=s(0x1bc),h['_item']=e,f[s(0x1c1)](g),f[s(0x1c1)](h),f['draggable']=!![],f[s(0x1b5)]=i=>{const u=s;i['dataTransfer'][u(0x1b9)](dragDropFormatNameElementDefinition,JSON[u(0x1ad)](e['elementDef'])),i[u(0x1ab)]['effectAllowed']='all',i['dataTransfer'][u(0x1ca)]='copy';},f[s(0x1cd)]=()=>{const v=s;try{const i=this['serviceContainer']??window[v(0x1b8)][v(0x1dd)];let j=i[v(0x1cf)][v(0x1c7)](e['elementDef'][v(0x1b7)]??NamedTools['DrawElementTool']);if(typeof j=='function')j=new j(e['elementDef']);i['globalContext']['tool']=j;}catch(k){}},this['_grid'][s(0x1c1)](f),this.#observer['observe'](h);}}['_instantiate'](c){const w=o,d=c['_item'];try{if(!d['tag'])return;if(d[w(0x1a0)]['includes']('-')&&!customElements['get'](d[w(0x1a0)]))return;const f=document['createElement'](d['tag']);if(d['elementDef']?.[w(0x1cb)])for(const g in d['elementDef'][w(0x1cb)]){try{f[w(0x19f)](g,d[w(0x1a3)]['defaultAttributes'][g]);}catch(h){}}if(d['elementDef']?.['defaultContent'])f[w(0x1b4)]=d['elementDef']['defaultContent'];else{if(!d[w(0x1a0)]['includes']('-')&&!f[w(0x1d9)][w(0x1a4)])f[w(0x1b4)]=d['tag'];}c['appendChild'](f);}catch(i){console[w(0x1d5)]('gallery:\x20could\x20not\x20render',d['tag'],i);}}}customElements[o(0x1d2)](o(0x1ba),IobrokerWebuiWidgetGallery);
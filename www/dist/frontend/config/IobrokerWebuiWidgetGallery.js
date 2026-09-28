function a(){const x=['appendChild','400px','target','card-preview','26613ZUNiqh','map','control','length','disconnect','_showItems','globalContext','pop','_instantiated','5yneugG','2162226dqlkpz','getCustomControl','2054fhXUDO','template','global','defaultContent','686zESVQz','serviceContainer','effectAllowed','getElements','44680jHUHlj','30SmmlIM','textContent','title','replace','iobroker-webui-3dscreen-viewer','includes','15552bXGmEv','12ViQzLN','innerHTML','tool','all','361835yCoULm','_getDomElement','68702kFgVtN','tag','scene-scope','warn','unobserve','className','npm','930reQHmG','draggable','service','_grid','elementDef','getGlobalObjectNames','observe','dropEffect','dir','22104dTCttB','get','_head','single','dataTransfer','iobroker-webui-widget-gallery','define','3dcontrol','createElement','_instantiate','galleryType','style','grid','div','push'];a=function(){return x;};return a();}const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x1d1))/0x1*(-parseInt(n(0x1ea))/0x2)+-parseInt(n(0x1dd))/0x3*(-parseInt(n(0x1dc))/0x4)+parseInt(n(0x1e8))/0x5*(-parseInt(n(0x1e4))/0x6)+-parseInt(n(0x1d8))/0x7*(-parseInt(n(0x1e3))/0x8)+parseInt(n(0x1c8))/0x9*(-parseInt(n(0x1f1))/0xa)+parseInt(n(0x1d2))/0xb+parseInt(n(0x1fa))/0xc*(parseInt(n(0x1d4))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x306b4));function b(c,d){c=c-0x1c2;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static [o(0x205)]=css`
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
        }`;static [o(0x1d5)]=html`
        <div id="head">gallery</div>
        <div id="grid"><div class="empty">Select a controls folder or a package in the tree to see its widgets rendered live.</div></div>`;[o(0x1d9)];#observer;constructor(){const p=o;super(),this[p(0x1fc)]=this[p(0x1e9)]('head'),this[p(0x1f4)]=this[p(0x1e9)](p(0x206));}async['showForSource'](c,d){const q=o;let f=[];try{if(c[q(0x204)]===q(0x1ca)){const g=c['global']?await iobrokerHandler[q(0x1f6)]('control',c['dir']||undefined):await iobrokerHandler['getObjectNames']('control',c['dir']||undefined);f=await Promise[q(0x1e7)](g[q(0x1c9)](async h=>{const r=q,i=((c[r(0x1f9)]??'')+'/'+h)[r(0x1e0)](/^\//,''),j=getCustomControlName(i);if(!customElements['get'](j))try{const k=c['global']?await iobrokerHandler['getGlobalObject']('control',i):await iobrokerHandler[r(0x1d3)](i);if(k)generateCustomControl(i,k);}catch(l){}return{'name':h,'tag':j,'elementDef':{'tag':j}};}));}else{if(c['galleryType']===q(0x201)){if(c[q(0x1fd)]){const h=String(c[q(0x1fd)])[q(0x1e0)](/^\//,''),i={'scene-name':h,'scene-type':q(0x201)};if(c['global'])i[q(0x1ec)]=q(0x1d6);f=[{'name':h['split']('/')[q(0x1cf)](),'tag':q(0x1e1),'elementDef':{'tag':q(0x1e1),'defaultAttributes':i,'defaultWidth':q(0x1c5),'defaultHeight':'300px'}}];}}else{if(c[q(0x204)]===q(0x1f0)){const j=await c[q(0x1f3)][q(0x1db)](),k=new Set();for(const l of j){if(!l['tag']||k['has'](l[q(0x1eb)]))continue;k['add'](l[q(0x1eb)]),f[q(0x1c3)]({'name':l['name']??l['tag'],'tag':l['tag'],'elementDef':l});}}}}}catch(m){console['warn']('gallery:\x20error\x20loading\x20items',m);}this['_showItems'](d,f);}[o(0x1cd)](c,d){const s=o;this[s(0x1fc)]['innerText']=c+'\x20('+d['length']+')',this.#observer?.[s(0x1cc)](),this[s(0x1f4)]['innerHTML']='';if(!d[s(0x1cb)]){this[s(0x1f4)][s(0x1e5)]='<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>';return;}this.#observer=new IntersectionObserver(e=>{const t=s;for(const f of e){f['isIntersecting']&&!f[t(0x1c6)][t(0x1d0)]&&(f['target']['_instantiated']=!![],this['_instantiate'](f['target']),this.#observer[t(0x1ee)](f['target']));}},{'root':this['_grid'],'threshold':0.05});for(const e of d){const f=document[s(0x202)](s(0x1c2));f['className']='card',f[s(0x1df)]=e[s(0x1eb)];const g=document[s(0x202)](s(0x1c2));g['className']='card-title',g[s(0x1de)]=e['name'];const h=document[s(0x202)](s(0x1c2));h[s(0x1ef)]=s(0x1c7),h['_item']=e,f['appendChild'](g),f[s(0x1c4)](h),f[s(0x1f2)]=!![],f['ondragstart']=i=>{const u=s;i[u(0x1fe)]['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](e[u(0x1f5)])),i['dataTransfer'][u(0x1da)]='all',i['dataTransfer'][u(0x1f8)]='copy';},f['onclick']=()=>{const v=s;try{const i=this['serviceContainer']??window['appShell'][v(0x1d9)];let j=i['designerTools']['get'](e[v(0x1f5)][v(0x1e6)]??NamedTools['DrawElementTool']);if(typeof j=='function')j=new j(e[v(0x1f5)]);i[v(0x1ce)]['tool']=j;}catch(k){}},this[s(0x1f4)][s(0x1c4)](f),this.#observer[s(0x1f7)](h);}}[o(0x203)](c){const w=o,d=c['_item'];try{if(!d['tag'])return;if(d[w(0x1eb)]['includes']('-')&&!customElements[w(0x1fb)](d[w(0x1eb)]))return;const f=document[w(0x202)](d['tag']);if(d[w(0x1f5)]?.['defaultAttributes'])for(const g in d['elementDef']['defaultAttributes']){try{f['setAttribute'](g,d['elementDef']['defaultAttributes'][g]);}catch(h){}}if(d['elementDef']?.[w(0x1d7)])f['textContent']=d['elementDef'][w(0x1d7)];else{if(!d['tag'][w(0x1e2)]('-')&&!f['childNodes'][w(0x1cb)])f['textContent']=d[w(0x1eb)];}c['appendChild'](f);}catch(i){console[w(0x1ed)]('gallery:\x20could\x20not\x20render',d[w(0x1eb)],i);}}}customElements[o(0x200)](o(0x1ff),IobrokerWebuiWidgetGallery);
const p=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0xc4))/0x1+-parseInt(n(0xc5))/0x2+parseInt(n(0xe4))/0x3+parseInt(n(0xc2))/0x4+parseInt(n(0xcd))/0x5*(-parseInt(n(0xd0))/0x6)+-parseInt(n(0xb6))/0x7*(-parseInt(n(0xe5))/0x8)+parseInt(n(0xdc))/0x9*(parseInt(n(0xb5))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x37f2d));function b(c,d){c=c-0xb1;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';import{iobrokerHandler}from'../common/IobrokerHandler.js';function a(){const x=['getObjectNames','className','target','name','div','warn','10XTwhUJ','2723SCBMfG','dataTransfer','_showItems','innerText','defaultAttributes','npm','disconnect','get','control','globalContext','replace','galleryType','376592AUpETK','defaultContent','314081DtYwHs','804012HRCZeQ','showForSource','pop','<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>','innerHTML','_instantiated','all','scene-scope','5yJzFPT','getGlobalObjectNames','_item','597954doKWIX','3dcontrol','textContent','tag','isIntersecting','global','map','push','400px','length','createElement','tool','4375197gfvFGY','getCustomControl','DrawElementTool','_head','iobroker-webui-widget-gallery','getElements','card-preview','elementDef','1257351YGxzlK','936bbAIuq','serviceContainer','appendChild','dropEffect','single','_grid','service','title','_instantiate','iobroker-webui-3dscreen-viewer'];a=function(){return x;};return a();}import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        <div id="grid"><div class="empty">Select a controls folder or a package in the tree to see its widgets rendered live.</div></div>`;['serviceContainer'];#observer;constructor(){const o=b;super(),this[o(0xdf)]=this['_getDomElement']('head'),this[o(0xea)]=this['_getDomElement']('grid');}async[p(0xc6)](c,d){const q=p;let f=[];try{if(c['galleryType']===q(0xbe)){const g=c[q(0xd5)]?await iobrokerHandler[q(0xce)]('control',c['dir']||undefined):await iobrokerHandler[q(0xef)](q(0xbe),c['dir']||undefined);f=await Promise[q(0xcb)](g[q(0xd6)](async h=>{const r=q,i=((c['dir']??'')+'/'+h)[r(0xc0)](/^\//,''),j=getCustomControlName(i);if(!customElements['get'](j))try{const k=c[r(0xd5)]?await iobrokerHandler['getGlobalObject']('control',i):await iobrokerHandler[r(0xdd)](i);if(k)generateCustomControl(i,k);}catch(l){}return{'name':h,'tag':j,'elementDef':{'tag':j}};}));}else{if(c[q(0xc1)]==='3dcontrol'){if(c['single']){const h=String(c[q(0xe9)])[q(0xc0)](/^\//,''),i={'scene-name':h,'scene-type':q(0xd1)};if(c[q(0xd5)])i[q(0xcc)]='global';f=[{'name':h['split']('/')[q(0xc7)](),'tag':q(0xee),'elementDef':{'tag':q(0xee),'defaultAttributes':i,'defaultWidth':q(0xd8),'defaultHeight':'300px'}}];}}else{if(c['galleryType']===q(0xbb)){const j=await c[q(0xeb)][q(0xe1)](),k=new Set();for(const l of j){if(!l[q(0xd3)]||k['has'](l[q(0xd3)]))continue;k['add'](l['tag']),f[q(0xd7)]({'name':l[q(0xb2)]??l['tag'],'tag':l[q(0xd3)],'elementDef':l});}}}}}catch(m){console['warn']('gallery:\x20error\x20loading\x20items',m);}this[q(0xb8)](d,f);}['_showItems'](c,d){const s=p;this[s(0xdf)][s(0xb9)]=c+'\x20('+d['length']+')',this.#observer?.[s(0xbc)](),this['_grid'][s(0xc9)]='';if(!d['length']){this['_grid']['innerHTML']=s(0xc8);return;}this.#observer=new IntersectionObserver(e=>{const t=s;for(const f of e){f[t(0xd4)]&&!f[t(0xb1)]['_instantiated']&&(f[t(0xb1)][t(0xca)]=!![],this[t(0xed)](f['target']),this.#observer['unobserve'](f['target']));}},{'root':this['_grid'],'threshold':0.05});for(const e of d){const f=document['createElement'](s(0xb3));f['className']='card',f[s(0xec)]=e['tag'];const g=document[s(0xda)](s(0xb3));g[s(0xf0)]='card-title',g['textContent']=e[s(0xb2)];const h=document['createElement']('div');h[s(0xf0)]=s(0xe2),h['_item']=e,f['appendChild'](g),f[s(0xe7)](h),f['draggable']=!![],f['ondragstart']=i=>{const u=s;i['dataTransfer']['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](e['elementDef'])),i['dataTransfer']['effectAllowed']=u(0xcb),i[u(0xb7)][u(0xe8)]='copy';},f['onclick']=()=>{const v=s;try{const i=this['serviceContainer']??window['appShell'][v(0xe6)];let j=i['designerTools']['get'](e[v(0xe3)][v(0xdb)]??NamedTools[v(0xde)]);if(typeof j=='function')j=new j(e[v(0xe3)]);i[v(0xbf)]['tool']=j;}catch(k){}},this['_grid'][s(0xe7)](f),this.#observer['observe'](h);}}['_instantiate'](c){const w=p,d=c[w(0xcf)];try{if(!d[w(0xd3)])return;if(d[w(0xd3)]['includes']('-')&&!customElements[w(0xbd)](d[w(0xd3)]))return;const f=document['createElement'](d['tag']);if(d['elementDef']?.[w(0xba)])for(const g in d[w(0xe3)][w(0xba)]){try{f['setAttribute'](g,d['elementDef'][w(0xba)][g]);}catch(h){}}if(d[w(0xe3)]?.[w(0xc3)])f[w(0xd2)]=d['elementDef'][w(0xc3)];else{if(!d['tag']['includes']('-')&&!f['childNodes'][w(0xd9)])f['textContent']=d['tag'];}c[w(0xe7)](f);}catch(i){console[w(0xb4)]('gallery:\x20could\x20not\x20render',d[w(0xd3)],i);}}}customElements['define'](p(0xe0),IobrokerWebuiWidgetGallery);
function a(){const x=['getCustomControl','_grid','_item','global','stringify','tag','4FRvTse','8723820cOQcJF','159854zDoLYF','get','className','tool','style','_instantiate','length','getGlobalObject','service','setAttribute','appendChild','disconnect','1111220ILXVTE','269508uzVvOI','8cqZDvB','target','elementDef','includes','innerHTML','appShell','iobroker-webui-3dscreen-viewer','galleryType','_showItems','title','div','define','all','3733857iHpHbt','single','_getDomElement','innerText','control','serviceContainer','head','dir','warn','DrawElementTool','function','492LOdOJZ','_instantiated','13545jArbOO','childNodes','<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>','unobserve','11AlOQtm','gallery:\x20could\x20not\x20render','3dcontrol','createElement','observe','textContent','3423742JTlIrj'];a=function(){return x;};return a();}const o=b;function b(c,d){c=c-0x12b;const e=a();let f=e[c];return f;}(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x15b))/0x1*(-parseInt(n(0x159))/0x2)+parseInt(n(0x12d))/0x3+-parseInt(n(0x12c))/0x4+-parseInt(n(0x148))/0x5*(-parseInt(n(0x146))/0x6)+-parseInt(n(0x152))/0x7+parseInt(n(0x12e))/0x8*(-parseInt(n(0x13b))/0x9)+-parseInt(n(0x15a))/0xa*(-parseInt(n(0x14c))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4eae8));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static [o(0x15f)]=css`
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
        <div id="grid"><div class="empty">Select a controls folder or a package in the tree to see its widgets rendered live.</div></div>`;[o(0x140)];#observer;constructor(){const p=o;super(),this['_head']=this[p(0x13d)](p(0x141)),this['_grid']=this[p(0x13d)]('grid');}async['showForSource'](c,d){const q=o;let f=[];try{if(c['galleryType']==='control'){const g=c[q(0x156)]?await iobrokerHandler['getGlobalObjectNames'](q(0x13f),c[q(0x142)]||undefined):await iobrokerHandler['getObjectNames'](q(0x13f),c[q(0x142)]||undefined);f=await Promise[q(0x13a)](g['map'](async h=>{const r=q,i=((c[r(0x142)]??'')+'/'+h)['replace'](/^\//,''),j=getCustomControlName(i);if(!customElements['get'](j))try{const k=c[r(0x156)]?await iobrokerHandler[r(0x162)]('control',i):await iobrokerHandler[r(0x153)](i);if(k)generateCustomControl(i,k);}catch(l){}return{'name':h,'tag':j,'elementDef':{'tag':j}};}));}else{if(c['galleryType']===q(0x14e)){if(c['single']){const h=String(c[q(0x13c)])['replace'](/^\//,''),i={'scene-name':h,'scene-type':'3dcontrol'};if(c[q(0x156)])i['scene-scope']=q(0x156);f=[{'name':h['split']('/')['pop'](),'tag':q(0x134),'elementDef':{'tag':'iobroker-webui-3dscreen-viewer','defaultAttributes':i,'defaultWidth':'400px','defaultHeight':'300px'}}];}}else{if(c[q(0x135)]==='npm'){const j=await c[q(0x163)]['getElements'](),k=new Set();for(const l of j){if(!l['tag']||k['has'](l[q(0x158)]))continue;k['add'](l['tag']),f['push']({'name':l['name']??l[q(0x158)],'tag':l['tag'],'elementDef':l});}}}}}catch(m){console['warn']('gallery:\x20error\x20loading\x20items',m);}this['_showItems'](d,f);}[o(0x136)](c,d){const s=o;this['_head'][s(0x13e)]=c+'\x20('+d[s(0x161)]+')',this.#observer?.[s(0x12b)](),this['_grid'][s(0x132)]='';if(!d['length']){this['_grid']['innerHTML']=s(0x14a);return;}this.#observer=new IntersectionObserver(e=>{const t=s;for(const f of e){f['isIntersecting']&&!f[t(0x12f)][t(0x147)]&&(f[t(0x12f)]['_instantiated']=!![],this['_instantiate'](f['target']),this.#observer[t(0x14b)](f[t(0x12f)]));}},{'root':this[s(0x154)],'threshold':0.05});for(const e of d){const f=document['createElement']('div');f[s(0x15d)]='card',f[s(0x137)]=e['tag'];const g=document[s(0x14f)]('div');g['className']='card-title',g[s(0x151)]=e['name'];const h=document['createElement'](s(0x138));h['className']='card-preview',h[s(0x155)]=e,f[s(0x165)](g),f[s(0x165)](h),f['draggable']=!![],f['ondragstart']=i=>{const u=s;i['dataTransfer']['setData'](dragDropFormatNameElementDefinition,JSON[u(0x157)](e['elementDef'])),i['dataTransfer']['effectAllowed']=u(0x13a),i['dataTransfer']['dropEffect']='copy';},f['onclick']=()=>{const v=s;try{const i=this['serviceContainer']??window[v(0x133)][v(0x140)];let j=i['designerTools']['get'](e[v(0x130)][v(0x15e)]??NamedTools[v(0x144)]);if(typeof j==v(0x145))j=new j(e['elementDef']);i['globalContext']['tool']=j;}catch(k){}},this['_grid']['appendChild'](f),this.#observer[s(0x150)](h);}}[o(0x160)](c){const w=o,d=c['_item'];try{if(!d['tag'])return;if(d['tag'][w(0x131)]('-')&&!customElements[w(0x15c)](d['tag']))return;const f=document['createElement'](d[w(0x158)]);if(d['elementDef']?.['defaultAttributes'])for(const g in d['elementDef']['defaultAttributes']){try{f[w(0x164)](g,d['elementDef']['defaultAttributes'][g]);}catch(h){}}if(d['elementDef']?.['defaultContent'])f['textContent']=d[w(0x130)]['defaultContent'];else{if(!d[w(0x158)][w(0x131)]('-')&&!f[w(0x149)][w(0x161)])f['textContent']=d['tag'];}c['appendChild'](f);}catch(i){console[w(0x143)](w(0x14d),d['tag'],i);}}}customElements[o(0x139)]('iobroker-webui-widget-gallery',IobrokerWebuiWidgetGallery);
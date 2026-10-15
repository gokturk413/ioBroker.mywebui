const o=b;function a(){const x=['elementDef','DrawElementTool','244137TJZSSB','globalContext','3dcontrol','length','defaultAttributes','add','target','_grid','_getDomElement','service','65026jcPckh','draggable','name','copy','tool','global','unobserve','3574130eqEbet','getCustomControl','4uJEWYK','textContent','353130tkxAki','single','187sKFYHl','tag','_instantiated','all','2623314wrUaRU','iobroker-webui-widget-gallery','serviceContainer','card-preview','effectAllowed','10224mFHYZK','split','5GPsAFc','scene-scope','getGlobalObjectNames','template','_instantiate','gallery:\x20could\x20not\x20render','_head','innerHTML','includes','className','function','childNodes','replace','push','createElement','appendChild','get','galleryType','_showItems','iobroker-webui-3dscreen-viewer','map','_item','9XfrmhO','dir','observe','3704fmbGWK','dataTransfer','div'];a=function(){return x;};return a();}(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x212))/0x1+parseInt(n(0x1fc))/0x2+parseInt(n(0x1f2))/0x3*(parseInt(n(0x205))/0x4)+-parseInt(n(0x214))/0x5*(-parseInt(n(0x20d))/0x6)+-parseInt(n(0x203))/0x7+-parseInt(n(0x1ed))/0x8*(parseInt(n(0x1ea))/0x9)+-parseInt(n(0x207))/0xa*(-parseInt(n(0x209))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9ed6b));function b(c,d){c=c-0x1d6;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [o(0x1d7)]=html`
        <div id="head">gallery</div>
        <div id="grid"><div class="empty">Select a controls folder or a package in the tree to see its widgets rendered live.</div></div>`;['serviceContainer'];#observer;constructor(){const p=o;super(),this[p(0x1da)]=this['_getDomElement']('head'),this[p(0x1f9)]=this[p(0x1fa)]('grid');}async['showForSource'](c,d){const q=o;let f=[];try{if(c['galleryType']==='control'){const g=c[q(0x201)]?await iobrokerHandler[q(0x1d6)]('control',c[q(0x1eb)]||undefined):await iobrokerHandler['getObjectNames']('control',c['dir']||undefined);f=await Promise[q(0x20c)](g[q(0x1e8)](async h=>{const r=q,i=((c['dir']??'')+'/'+h)[r(0x1e0)](/^\//,''),j=getCustomControlName(i);if(!customElements['get'](j))try{const k=c['global']?await iobrokerHandler['getGlobalObject']('control',i):await iobrokerHandler[r(0x204)](i);if(k)generateCustomControl(i,k);}catch(l){}return{'name':h,'tag':j,'elementDef':{'tag':j}};}));}else{if(c[q(0x1e5)]===q(0x1f4)){if(c[q(0x208)]){const h=String(c['single'])['replace'](/^\//,''),i={'scene-name':h,'scene-type':'3dcontrol'};if(c['global'])i[q(0x215)]='global';f=[{'name':h[q(0x213)]('/')['pop'](),'tag':'iobroker-webui-3dscreen-viewer','elementDef':{'tag':q(0x1e7),'defaultAttributes':i,'defaultWidth':'400px','defaultHeight':'300px'}}];}}else{if(c[q(0x1e5)]==='npm'){const j=await c[q(0x1fb)]['getElements'](),k=new Set();for(const l of j){if(!l['tag']||k['has'](l['tag']))continue;k[q(0x1f7)](l[q(0x20a)]),f[q(0x1e1)]({'name':l['name']??l[q(0x20a)],'tag':l[q(0x20a)],'elementDef':l});}}}}}catch(m){console['warn']('gallery:\x20error\x20loading\x20items',m);}this['_showItems'](d,f);}[o(0x1e6)](c,d){const s=o;this[s(0x1da)]['innerText']=c+'\x20('+d['length']+')',this.#observer?.['disconnect'](),this['_grid'][s(0x1db)]='';if(!d[s(0x1f5)]){this[s(0x1f9)]['innerHTML']='<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>';return;}this.#observer=new IntersectionObserver(e=>{const t=s;for(const f of e){f['isIntersecting']&&!f[t(0x1f8)][t(0x20b)]&&(f['target'][t(0x20b)]=!![],this['_instantiate'](f['target']),this.#observer[t(0x202)](f[t(0x1f8)]));}},{'root':this['_grid'],'threshold':0.05});for(const e of d){const f=document[s(0x1e2)](s(0x1ef));f[s(0x1dd)]='card',f['title']=e[s(0x20a)];const g=document[s(0x1e2)]('div');g['className']='card-title',g[s(0x206)]=e[s(0x1fe)];const h=document[s(0x1e2)](s(0x1ef));h['className']=s(0x210),h[s(0x1e9)]=e,f['appendChild'](g),f[s(0x1e3)](h),f[s(0x1fd)]=!![],f['ondragstart']=i=>{const u=s;i[u(0x1ee)]['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](e[u(0x1f0)])),i['dataTransfer'][u(0x211)]='all',i[u(0x1ee)]['dropEffect']=u(0x1ff);},f['onclick']=()=>{const v=s;try{const i=this[v(0x20f)]??window['appShell']['serviceContainer'];let j=i['designerTools']['get'](e['elementDef'][v(0x200)]??NamedTools[v(0x1f1)]);if(typeof j==v(0x1de))j=new j(e[v(0x1f0)]);i[v(0x1f3)][v(0x200)]=j;}catch(k){}},this[s(0x1f9)][s(0x1e3)](f),this.#observer[s(0x1ec)](h);}}[o(0x1d8)](c){const w=o,d=c[w(0x1e9)];try{if(!d[w(0x20a)])return;if(d['tag'][w(0x1dc)]('-')&&!customElements[w(0x1e4)](d[w(0x20a)]))return;const f=document['createElement'](d['tag']);if(d[w(0x1f0)]?.[w(0x1f6)])for(const g in d[w(0x1f0)][w(0x1f6)]){try{f['setAttribute'](g,d[w(0x1f0)][w(0x1f6)][g]);}catch(h){}}if(d['elementDef']?.['defaultContent'])f[w(0x206)]=d[w(0x1f0)]['defaultContent'];else{if(!d['tag']['includes']('-')&&!f[w(0x1df)]['length'])f[w(0x206)]=d[w(0x20a)];}c[w(0x1e3)](f);}catch(i){console['warn'](w(0x1d9),d[w(0x20a)],i);}}}customElements['define'](o(0x20e),IobrokerWebuiWidgetGallery);
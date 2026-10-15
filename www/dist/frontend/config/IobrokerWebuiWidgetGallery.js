const o=b;function a(){const x=['defaultContent','childNodes','gallery:\x20error\x20loading\x20items','observe','_item','pop','card-preview','appShell','27900WobnVu','56uAffzC','name','7864703xTmdqL','3dcontrol','split','115wGrYxx','879AozNOT','target','defaultAttributes','all','className','global','draggable','designerTools','tag','style','289801cPwFSi','_grid','_getDomElement','5916lJOBIK','_instantiate','includes','<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>','galleryType','getGlobalObject','436600ByVmjT','innerHTML','textContent','createElement','dropEffect','head','2avAHJs','control','serviceContainer','length','isIntersecting','innerText','scene-scope','card','title','2700230rWSXuQ','getGlobalObjectNames','dir','map','getObjectNames','_head','push','service','get','elementDef','appendChild','dataTransfer','300px','102210yhboJf','iobroker-webui-widget-gallery','single'];a=function(){return x;};return a();}(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0x1fe))/0x1*(parseInt(n(0x20d))/0x2)+parseInt(n(0x1f4))/0x3*(-parseInt(n(0x201))/0x4)+-parseInt(n(0x1f3))/0x5*(-parseInt(n(0x223))/0x6)+parseInt(n(0x22f))/0x7*(parseInt(n(0x207))/0x8)+parseInt(n(0x22e))/0x9+parseInt(n(0x216))/0xa+-parseInt(n(0x1f0))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3b541));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static [o(0x1fd)]=css`
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
        <div id="grid"><div class="empty">Select a controls folder or a package in the tree to see its widgets rendered live.</div></div>`;[o(0x20f)];#observer;constructor(){const p=o;super(),this['_head']=this[p(0x200)](p(0x20c)),this['_grid']=this[p(0x200)]('grid');}async['showForSource'](c,d){const q=o;let f=[];try{if(c[q(0x205)]==='control'){const g=c[q(0x1f9)]?await iobrokerHandler[q(0x217)](q(0x20e),c[q(0x218)]||undefined):await iobrokerHandler[q(0x21a)]('control',c['dir']||undefined);f=await Promise['all'](g[q(0x219)](async h=>{const r=q,i=((c[r(0x218)]??'')+'/'+h)['replace'](/^\//,''),j=getCustomControlName(i);if(!customElements[r(0x21e)](j))try{const k=c[r(0x1f9)]?await iobrokerHandler[r(0x206)](r(0x20e),i):await iobrokerHandler['getCustomControl'](i);if(k)generateCustomControl(i,k);}catch(l){}return{'name':h,'tag':j,'elementDef':{'tag':j}};}));}else{if(c['galleryType']===q(0x1f1)){if(c['single']){const h=String(c[q(0x225)])['replace'](/^\//,''),i={'scene-name':h,'scene-type':'3dcontrol'};if(c['global'])i[q(0x213)]='global';f=[{'name':h[q(0x1f2)]('/')[q(0x22b)](),'tag':'iobroker-webui-3dscreen-viewer','elementDef':{'tag':'iobroker-webui-3dscreen-viewer','defaultAttributes':i,'defaultWidth':'400px','defaultHeight':q(0x222)}}];}}else{if(c[q(0x205)]==='npm'){const j=await c[q(0x21d)]['getElements'](),k=new Set();for(const l of j){if(!l[q(0x1fc)]||k['has'](l['tag']))continue;k['add'](l['tag']),f[q(0x21c)]({'name':l[q(0x1ef)]??l[q(0x1fc)],'tag':l[q(0x1fc)],'elementDef':l});}}}}}catch(m){console['warn'](q(0x228),m);}this['_showItems'](d,f);}['_showItems'](c,d){const s=o;this[s(0x21b)][s(0x212)]=c+'\x20('+d['length']+')',this.#observer?.['disconnect'](),this['_grid']['innerHTML']='';if(!d['length']){this[s(0x1ff)][s(0x208)]=s(0x204);return;}this.#observer=new IntersectionObserver(e=>{const t=s;for(const f of e){f[t(0x211)]&&!f['target']['_instantiated']&&(f[t(0x1f5)]['_instantiated']=!![],this['_instantiate'](f['target']),this.#observer['unobserve'](f['target']));}},{'root':this[s(0x1ff)],'threshold':0.05});for(const e of d){const f=document[s(0x20a)]('div');f['className']=s(0x214),f[s(0x215)]=e['tag'];const g=document['createElement']('div');g['className']='card-title',g[s(0x209)]=e['name'];const h=document['createElement']('div');h[s(0x1f8)]=s(0x22c),h[s(0x22a)]=e,f[s(0x220)](g),f[s(0x220)](h),f[s(0x1fa)]=!![],f['ondragstart']=i=>{const u=s;i['dataTransfer']['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](e['elementDef'])),i[u(0x221)]['effectAllowed']=u(0x1f7),i['dataTransfer'][u(0x20b)]='copy';},f['onclick']=()=>{const v=s;try{const i=this['serviceContainer']??window[v(0x22d)]['serviceContainer'];let j=i[v(0x1fb)][v(0x21e)](e[v(0x21f)]['tool']??NamedTools['DrawElementTool']);if(typeof j=='function')j=new j(e['elementDef']);i['globalContext']['tool']=j;}catch(k){}},this['_grid']['appendChild'](f),this.#observer[s(0x229)](h);}}[o(0x202)](c){const w=o,d=c['_item'];try{if(!d[w(0x1fc)])return;if(d['tag'][w(0x203)]('-')&&!customElements['get'](d['tag']))return;const f=document['createElement'](d[w(0x1fc)]);if(d[w(0x21f)]?.[w(0x1f6)])for(const g in d[w(0x21f)][w(0x1f6)]){try{f['setAttribute'](g,d[w(0x21f)][w(0x1f6)][g]);}catch(h){}}if(d[w(0x21f)]?.[w(0x226)])f[w(0x209)]=d['elementDef']['defaultContent'];else{if(!d[w(0x1fc)][w(0x203)]('-')&&!f[w(0x227)][w(0x210)])f['textContent']=d[w(0x1fc)];}c[w(0x220)](f);}catch(i){console['warn']('gallery:\x20could\x20not\x20render',d['tag'],i);}}}function b(c,d){c=c-0x1ef;const e=a();let f=e[c];return f;}customElements['define'](o(0x224),IobrokerWebuiWidgetGallery);
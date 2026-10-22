function b(c,d){c=c-0x1ca;const e=a();let f=e[c];return f;}const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x1ec))/0x1+-parseInt(n(0x1e0))/0x2*(parseInt(n(0x1f4))/0x3)+parseInt(n(0x1dd))/0x4*(parseInt(n(0x1d6))/0x5)+-parseInt(n(0x1e1))/0x6*(parseInt(n(0x1d4))/0x7)+parseInt(n(0x1ca))/0x8+parseInt(n(0x1eb))/0x9*(parseInt(n(0x1f8))/0xa)+parseInt(n(0x1e5))/0xb*(-parseInt(n(0x1d2))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd98aa));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';function a(){const x=['stringify','_head','400px','3111236rlztUH','innerText','serviceContainer','224330DBUhnd','2778sCLsLj','showForSource','length','iobroker-webui-widget-gallery','429OVILfy','disconnect','defaultAttributes','getObjectNames','_instantiate','galleryType','346401jKCmNi','1160033AgZmiR','defaultContent','isIntersecting','dir','global','createElement','unobserve','function','6KqJIXo','className','DrawElementTool','innerHTML','190CfSHQJ','name','target','_showItems','replace','single','setAttribute','control','includes','add','all','warn','_grid','card-preview','observe','designerTools','12203096qZVzBL','div','gallery:\x20error\x20loading\x20items','title','dropEffect','tag','has','onclick','47364yLqLfm','template','9149AGEGYg','_instantiated','5ZcJkrZ','elementDef','_item','ondragstart'];a=function(){return x;};return a();}import{iobrokerHandler}from'../common/IobrokerHandler.js';import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        }`;static [o(0x1d3)]=html`
        <div id="head">gallery</div>
        <div id="grid"><div class="empty">Select a controls folder or a package in the tree to see its widgets rendered live.</div></div>`;[o(0x1df)];#observer;constructor(){const p=o;super(),this['_head']=this['_getDomElement']('head'),this[p(0x204)]=this['_getDomElement']('grid');}async[o(0x1e2)](c,d){const q=o;let f=[];try{if(c[q(0x1ea)]==='control'){const g=c['global']?await iobrokerHandler['getGlobalObjectNames']('control',c['dir']||undefined):await iobrokerHandler[q(0x1e8)](q(0x1ff),c[q(0x1ef)]||undefined);f=await Promise['all'](g['map'](async h=>{const r=q,i=((c[r(0x1ef)]??'')+'/'+h)['replace'](/^\//,''),j=getCustomControlName(i);if(!customElements['get'](j))try{const k=c['global']?await iobrokerHandler['getGlobalObject'](r(0x1ff),i):await iobrokerHandler['getCustomControl'](i);if(k)generateCustomControl(i,k);}catch(l){}return{'name':h,'tag':j,'elementDef':{'tag':j}};}));}else{if(c['galleryType']==='3dcontrol'){if(c[q(0x1fd)]){const h=String(c['single'])[q(0x1fc)](/^\//,''),i={'scene-name':h,'scene-type':'3dcontrol'};if(c['global'])i['scene-scope']=q(0x1f0);f=[{'name':h['split']('/')['pop'](),'tag':'iobroker-webui-3dscreen-viewer','elementDef':{'tag':'iobroker-webui-3dscreen-viewer','defaultAttributes':i,'defaultWidth':q(0x1dc),'defaultHeight':'300px'}}];}}else{if(c[q(0x1ea)]==='npm'){const j=await c['service']['getElements'](),k=new Set();for(const l of j){if(!l['tag']||k[q(0x1d0)](l[q(0x1cf)]))continue;k[q(0x201)](l[q(0x1cf)]),f['push']({'name':l[q(0x1f9)]??l[q(0x1cf)],'tag':l[q(0x1cf)],'elementDef':l});}}}}}catch(m){console[q(0x203)](q(0x1cc),m);}this[q(0x1fb)](d,f);}[o(0x1fb)](c,d){const s=o;this[s(0x1db)][s(0x1de)]=c+'\x20('+d[s(0x1e3)]+')',this.#observer?.[s(0x1e6)](),this[s(0x204)][s(0x1f7)]='';if(!d['length']){this[s(0x204)]['innerHTML']='<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>';return;}this.#observer=new IntersectionObserver(e=>{const t=s;for(const f of e){f[t(0x1ee)]&&!f[t(0x1fa)][t(0x1d5)]&&(f[t(0x1fa)]['_instantiated']=!![],this['_instantiate'](f['target']),this.#observer[t(0x1f2)](f[t(0x1fa)]));}},{'root':this['_grid'],'threshold':0.05});for(const e of d){const f=document['createElement']('div');f['className']='card',f[s(0x1cd)]=e[s(0x1cf)];const g=document[s(0x1f1)]('div');g['className']='card-title',g['textContent']=e['name'];const h=document[s(0x1f1)](s(0x1cb));h[s(0x1f5)]=s(0x205),h[s(0x1d8)]=e,f['appendChild'](g),f['appendChild'](h),f['draggable']=!![],f[s(0x1d9)]=i=>{const u=s;i['dataTransfer']['setData'](dragDropFormatNameElementDefinition,JSON[u(0x1da)](e[u(0x1d7)])),i['dataTransfer']['effectAllowed']=u(0x202),i['dataTransfer'][u(0x1ce)]='copy';},f[s(0x1d1)]=()=>{const v=s;try{const i=this['serviceContainer']??window['appShell'][v(0x1df)];let j=i[v(0x207)]['get'](e[v(0x1d7)]['tool']??NamedTools[v(0x1f6)]);if(typeof j==v(0x1f3))j=new j(e['elementDef']);i['globalContext']['tool']=j;}catch(k){}},this['_grid']['appendChild'](f),this.#observer[s(0x206)](h);}}[o(0x1e9)](c){const w=o,d=c[w(0x1d8)];try{if(!d[w(0x1cf)])return;if(d[w(0x1cf)][w(0x200)]('-')&&!customElements['get'](d['tag']))return;const f=document['createElement'](d[w(0x1cf)]);if(d['elementDef']?.['defaultAttributes'])for(const g in d[w(0x1d7)][w(0x1e7)]){try{f[w(0x1fe)](g,d['elementDef']['defaultAttributes'][g]);}catch(h){}}if(d[w(0x1d7)]?.[w(0x1ed)])f['textContent']=d['elementDef']['defaultContent'];else{if(!d['tag']['includes']('-')&&!f['childNodes']['length'])f['textContent']=d[w(0x1cf)];}c['appendChild'](f);}catch(i){console[w(0x203)]('gallery:\x20could\x20not\x20render',d[w(0x1cf)],i);}}}customElements['define'](o(0x1e4),IobrokerWebuiWidgetGallery);
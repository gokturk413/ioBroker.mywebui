const p=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0x13b))/0x1*(-parseInt(n(0x160))/0x2)+parseInt(n(0x14e))/0x3*(-parseInt(n(0x145))/0x4)+-parseInt(n(0x149))/0x5*(parseInt(n(0x142))/0x6)+parseInt(n(0x15e))/0x7+parseInt(n(0x129))/0x8+-parseInt(n(0x151))/0x9+-parseInt(n(0x12a))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3a23f));function b(c,d){c=c-0x127;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static ['style']=css`
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
        <div id="grid"><div class="empty">Select a controls folder or a package in the tree to see its widgets rendered live.</div></div>`;['serviceContainer'];#observer;constructor(){const o=b;super(),this[o(0x138)]=this['_getDomElement']('head'),this['_grid']=this['_getDomElement']('grid');}async[p(0x144)](c,d){const q=p;let f=[];try{if(c['galleryType']==='control'){const g=c['global']?await iobrokerHandler['getGlobalObjectNames']('control',c['dir']||undefined):await iobrokerHandler['getObjectNames']('control',c[q(0x14b)]||undefined);f=await Promise['all'](g[q(0x13c)](async h=>{const r=q,i=((c[r(0x14b)]??'')+'/'+h)[r(0x150)](/^\//,''),j=getCustomControlName(i);if(!customElements['get'](j))try{const k=c[r(0x134)]?await iobrokerHandler['getGlobalObject'](r(0x12f),i):await iobrokerHandler[r(0x12d)](i);if(k)generateCustomControl(i,k);}catch(l){}return{'name':h,'tag':j,'elementDef':{'tag':j}};}));}else{if(c['galleryType']===q(0x14f)){if(c['single']){const h=String(c['single'])['replace'](/^\//,''),i={'scene-name':h,'scene-type':'3dcontrol'};if(c['global'])i['scene-scope']='global';f=[{'name':h[q(0x12b)]('/')['pop'](),'tag':'iobroker-webui-3dscreen-viewer','elementDef':{'tag':q(0x152),'defaultAttributes':i,'defaultWidth':'400px','defaultHeight':'300px'}}];}}else{if(c['galleryType']===q(0x15f)){const j=await c[q(0x14a)][q(0x140)](),k=new Set();for(const l of j){if(!l['tag']||k['has'](l['tag']))continue;k['add'](l['tag']),f['push']({'name':l['name']??l['tag'],'tag':l[q(0x13f)],'elementDef':l});}}}}}catch(m){console[q(0x13a)]('gallery:\x20error\x20loading\x20items',m);}this['_showItems'](d,f);}['_showItems'](c,d){const s=p;this[s(0x138)]['innerText']=c+'\x20('+d[s(0x14d)]+')',this.#observer?.[s(0x132)](),this['_grid'][s(0x141)]='';if(!d['length']){this[s(0x15b)]['innerHTML']='<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>';return;}this.#observer=new IntersectionObserver(e=>{const t=s;for(const f of e){f[t(0x15a)]&&!f[t(0x154)]['_instantiated']&&(f[t(0x154)][t(0x15c)]=!![],this[t(0x157)](f['target']),this.#observer['unobserve'](f['target']));}},{'root':this['_grid'],'threshold':0.05});for(const e of d){const f=document[s(0x135)]('div');f[s(0x15d)]='card',f['title']=e[s(0x13f)];const g=document['createElement'](s(0x131));g[s(0x15d)]='card-title',g[s(0x128)]=e[s(0x133)];const h=document['createElement']('div');h['className']=s(0x139),h[s(0x136)]=e,f[s(0x143)](g),f['appendChild'](h),f['draggable']=!![],f[s(0x158)]=i=>{const u=s;i['dataTransfer'][u(0x12e)](dragDropFormatNameElementDefinition,JSON[u(0x14c)](e[u(0x147)])),i[u(0x153)]['effectAllowed']='all',i[u(0x153)]['dropEffect']=u(0x148);},f['onclick']=()=>{const v=s;try{const i=this['serviceContainer']??window[v(0x130)]['serviceContainer'];let j=i[v(0x12c)]['get'](e['elementDef'][v(0x156)]??NamedTools[v(0x159)]);if(typeof j=='function')j=new j(e[v(0x147)]);i['globalContext']['tool']=j;}catch(k){}},this['_grid'][s(0x143)](f),this.#observer[s(0x155)](h);}}[p(0x157)](c){const w=p,d=c[w(0x136)];try{if(!d['tag'])return;if(d[w(0x13f)][w(0x137)]('-')&&!customElements[w(0x13e)](d[w(0x13f)]))return;const f=document['createElement'](d[w(0x13f)]);if(d['elementDef']?.[w(0x146)])for(const g in d[w(0x147)]['defaultAttributes']){try{f['setAttribute'](g,d[w(0x147)][w(0x146)][g]);}catch(h){}}if(d[w(0x147)]?.['defaultContent'])f[w(0x128)]=d['elementDef']['defaultContent'];else{if(!d[w(0x13f)]['includes']('-')&&!f[w(0x13d)][w(0x14d)])f[w(0x128)]=d['tag'];}c['appendChild'](f);}catch(i){console[w(0x13a)](w(0x127),d[w(0x13f)],i);}}}function a(){const x=['gallery:\x20could\x20not\x20render','textContent','2003192QfhiJZ','1346670XfPRLZ','split','designerTools','getCustomControl','setData','control','appShell','div','disconnect','name','global','createElement','_item','includes','_head','card-preview','warn','138789qhumdf','map','childNodes','get','tag','getElements','innerHTML','17502tyCjKd','appendChild','showForSource','1756WRhERE','defaultAttributes','elementDef','copy','85ojhvfk','service','dir','stringify','length','1665WGvXAD','3dcontrol','replace','2186082dQyVLL','iobroker-webui-3dscreen-viewer','dataTransfer','target','observe','tool','_instantiate','ondragstart','DrawElementTool','isIntersecting','_grid','_instantiated','className','1695232JIKedS','npm','6UjdgGc'];a=function(){return x;};return a();}customElements['define']('iobroker-webui-widget-gallery',IobrokerWebuiWidgetGallery);
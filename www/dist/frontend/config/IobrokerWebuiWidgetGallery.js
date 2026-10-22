const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=-parseInt(n(0xf2))/0x1*(-parseInt(n(0x113))/0x2)+parseInt(n(0xec))/0x3*(-parseInt(n(0x100))/0x4)+-parseInt(n(0x10a))/0x5*(parseInt(n(0xf7))/0x6)+parseInt(n(0x105))/0x7+parseInt(n(0xd9))/0x8*(-parseInt(n(0xe3))/0x9)+parseInt(n(0xe8))/0xa+parseInt(n(0xfc))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xdc0dd));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static [o(0x108)]=css`
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
        }`;static [o(0x103)]=html`
        <div id="head">gallery</div>
        <div id="grid"><div class="empty">Select a controls folder or a package in the tree to see its widgets rendered live.</div></div>`;['serviceContainer'];#observer;constructor(){const p=o;super(),this['_head']=this[p(0xff)](p(0xf0)),this[p(0x112)]=this[p(0xff)](p(0xdb));}async['showForSource'](c,d){const q=o;let f=[];try{if(c[q(0x109)]==='control'){const g=c[q(0xed)]?await iobrokerHandler['getGlobalObjectNames'](q(0xd5),c['dir']||undefined):await iobrokerHandler['getObjectNames']('control',c['dir']||undefined);f=await Promise[q(0xf6)](g[q(0xdf)](async h=>{const r=q,i=((c[r(0x111)]??'')+'/'+h)['replace'](/^\//,''),j=getCustomControlName(i);if(!customElements['get'](j))try{const k=c[r(0xed)]?await iobrokerHandler['getGlobalObject'](r(0xd5),i):await iobrokerHandler[r(0x10f)](i);if(k)generateCustomControl(i,k);}catch(l){}return{'name':h,'tag':j,'elementDef':{'tag':j}};}));}else{if(c['galleryType']===q(0x10d)){if(c[q(0x10b)]){const h=String(c[q(0x10b)])[q(0xf8)](/^\//,''),i={'scene-name':h,'scene-type':'3dcontrol'};if(c[q(0xed)])i[q(0xe5)]=q(0xed);f=[{'name':h['split']('/')[q(0xf3)](),'tag':q(0xe0),'elementDef':{'tag':q(0xe0),'defaultAttributes':i,'defaultWidth':q(0xef),'defaultHeight':'300px'}}];}}else{if(c['galleryType']==='npm'){const j=await c[q(0x107)][q(0xeb)](),k=new Set();for(const l of j){if(!l['tag']||k[q(0xe9)](l[q(0xde)]))continue;k['add'](l['tag']),f['push']({'name':l[q(0xe6)]??l['tag'],'tag':l[q(0xde)],'elementDef':l});}}}}}catch(m){console[q(0xf1)]('gallery:\x20error\x20loading\x20items',m);}this['_showItems'](d,f);}['_showItems'](c,d){const s=o;this['_head'][s(0xe2)]=c+'\x20('+d[s(0xd6)]+')',this.#observer?.['disconnect'](),this[s(0x112)]['innerHTML']='';if(!d['length']){this[s(0x112)]['innerHTML']='<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>';return;}this.#observer=new IntersectionObserver(e=>{const t=s;for(const f of e){f[t(0xea)]&&!f[t(0xd8)][t(0xe7)]&&(f['target'][t(0xe7)]=!![],this[t(0xdc)](f['target']),this.#observer[t(0x110)](f[t(0xd8)]));}},{'root':this[s(0x112)],'threshold':0.05});for(const e of d){const f=document['createElement'](s(0xf4));f['className']='card',f['title']=e['tag'];const g=document['createElement'](s(0xf4));g[s(0xd7)]=s(0x10c),g[s(0xf5)]=e[s(0xe6)];const h=document['createElement']('div');h[s(0xd7)]='card-preview',h[s(0xee)]=e,f['appendChild'](g),f[s(0xda)](h),f['draggable']=!![],f['ondragstart']=i=>{const u=s;i[u(0xfa)]['setData'](dragDropFormatNameElementDefinition,JSON[u(0xe1)](e['elementDef'])),i[u(0xfa)]['effectAllowed']=u(0xf6),i[u(0xfa)][u(0xdd)]='copy';},f['onclick']=()=>{const v=s;try{const i=this[v(0xf9)]??window[v(0x104)][v(0xf9)];let j=i['designerTools'][v(0x102)](e[v(0x10e)][v(0xe4)]??NamedTools[v(0xd4)]);if(typeof j=='function')j=new j(e['elementDef']);i['globalContext']['tool']=j;}catch(k){}},this['_grid']['appendChild'](f),this.#observer['observe'](h);}}[o(0xdc)](c){const w=o,d=c[w(0xee)];try{if(!d[w(0xde)])return;if(d['tag'][w(0x101)]('-')&&!customElements[w(0x102)](d['tag']))return;const f=document['createElement'](d['tag']);if(d[w(0x10e)]?.[w(0xfd)])for(const g in d[w(0x10e)]['defaultAttributes']){try{f['setAttribute'](g,d['elementDef'][w(0xfd)][g]);}catch(h){}}if(d[w(0x10e)]?.[w(0x106)])f['textContent']=d[w(0x10e)]['defaultContent'];else{if(!d['tag'][w(0x101)]('-')&&!f[w(0xfe)]['length'])f[w(0xf5)]=d['tag'];}c['appendChild'](f);}catch(i){console[w(0xf1)](w(0xfb),d['tag'],i);}}}function b(c,d){c=c-0xd4;const e=a();let f=e[c];return f;}customElements['define']('iobroker-webui-widget-gallery',IobrokerWebuiWidgetGallery);function a(){const x=['11081370hJQCgH','has','isIntersecting','getElements','795dCgVIW','global','_item','400px','head','warn','8857aLPjUe','pop','div','textContent','all','9030nLYsWJ','replace','serviceContainer','dataTransfer','gallery:\x20could\x20not\x20render','22650122lPpOow','defaultAttributes','childNodes','_getDomElement','12908dIHRcs','includes','get','template','appShell','3474373oInsZW','defaultContent','service','style','galleryType','3275NdwPFJ','single','card-title','3dcontrol','elementDef','getCustomControl','unobserve','dir','_grid','72zByDIZ','DrawElementTool','control','length','className','target','9921272UhdcYO','appendChild','grid','_instantiate','dropEffect','tag','map','iobroker-webui-3dscreen-viewer','stringify','innerText','9enTjUF','tool','scene-scope','name','_instantiated'];a=function(){return x;};return a();}
const o=b;(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0xe2))/0x1+-parseInt(n(0xea))/0x2*(-parseInt(n(0xb9))/0x3)+parseInt(n(0xdb))/0x4+parseInt(n(0xd1))/0x5*(-parseInt(n(0xef))/0x6)+-parseInt(n(0xf0))/0x7*(-parseInt(n(0xcf))/0x8)+-parseInt(n(0xd4))/0x9+-parseInt(n(0xe8))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xec84c));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';function a(){const x=['includes','template','DrawElementTool','copy','defaultContent','152sUFkGq','_head','1858190dhcfjl','warn','style','11918439dknqvZ','createElement','replace','innerHTML','function','galleryType','onclick','4625440nYZGjo','name','observe','add','_instantiate','400px','defaultAttributes','390619AavooT','card','pop','tag','className','iobroker-webui-3dscreen-viewer','12088860BlHhEy','serviceContainer','2bhiMEX','_showItems','<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>','has','all','6hfJFUq','231959DNTpaf','appendChild','tool','5090979YAMRHS','3dcontrol','elementDef','_instantiated','300px','get','control','single','showForSource','npm','_grid','dataTransfer','textContent','gallery:\x20error\x20loading\x20items','length','ondragstart','iobroker-webui-widget-gallery'];a=function(){return x;};return a();}import{dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static [o(0xd3)]=css`
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
        }`;static [o(0xcb)]=html`
        <div id="head">gallery</div>
        <div id="grid"><div class="empty">Select a controls folder or a package in the tree to see its widgets rendered live.</div></div>`;[o(0xe9)];#observer;constructor(){const p=o;super(),this[p(0xd0)]=this['_getDomElement']('head'),this['_grid']=this['_getDomElement']('grid');}async[o(0xc1)](c,d){const q=o;let f=[];try{if(c[q(0xd9)]==='control'){const g=c['global']?await iobrokerHandler['getGlobalObjectNames'](q(0xbf),c['dir']||undefined):await iobrokerHandler['getObjectNames'](q(0xbf),c['dir']||undefined);f=await Promise['all'](g['map'](async h=>{const r=q,i=((c['dir']??'')+'/'+h)[r(0xd6)](/^\//,''),j=getCustomControlName(i);if(!customElements[r(0xbe)](j))try{const k=c['global']?await iobrokerHandler['getGlobalObject']('control',i):await iobrokerHandler['getCustomControl'](i);if(k)generateCustomControl(i,k);}catch(l){}return{'name':h,'tag':j,'elementDef':{'tag':j}};}));}else{if(c['galleryType']===q(0xba)){if(c[q(0xc0)]){const h=String(c[q(0xc0)])['replace'](/^\//,''),i={'scene-name':h,'scene-type':'3dcontrol'};if(c['global'])i['scene-scope']='global';f=[{'name':h['split']('/')[q(0xe4)](),'tag':q(0xe7),'elementDef':{'tag':'iobroker-webui-3dscreen-viewer','defaultAttributes':i,'defaultWidth':q(0xe0),'defaultHeight':q(0xbd)}}];}}else{if(c[q(0xd9)]===q(0xc2)){const j=await c['service']['getElements'](),k=new Set();for(const l of j){if(!l['tag']||k[q(0xed)](l['tag']))continue;k[q(0xde)](l[q(0xe5)]),f['push']({'name':l[q(0xdc)]??l[q(0xe5)],'tag':l['tag'],'elementDef':l});}}}}}catch(m){console['warn'](q(0xc6),m);}this[q(0xeb)](d,f);}[o(0xeb)](c,d){const s=o;this[s(0xd0)]['innerText']=c+'\x20('+d['length']+')',this.#observer?.['disconnect'](),this[s(0xc3)][s(0xd7)]='';if(!d[s(0xc7)]){this['_grid']['innerHTML']=s(0xec);return;}this.#observer=new IntersectionObserver(e=>{const t=s;for(const f of e){f['isIntersecting']&&!f['target'][t(0xbc)]&&(f['target'][t(0xbc)]=!![],this[t(0xdf)](f['target']),this.#observer['unobserve'](f['target']));}},{'root':this[s(0xc3)],'threshold':0.05});for(const e of d){const f=document['createElement']('div');f['className']=s(0xe3),f['title']=e[s(0xe5)];const g=document['createElement']('div');g[s(0xe6)]='card-title',g['textContent']=e['name'];const h=document['createElement']('div');h['className']='card-preview',h['_item']=e,f[s(0xf1)](g),f['appendChild'](h),f['draggable']=!![],f[s(0xc8)]=i=>{const u=s;i['dataTransfer']['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](e[u(0xbb)])),i[u(0xc4)]['effectAllowed']=u(0xee),i['dataTransfer']['dropEffect']=u(0xcd);},f[s(0xda)]=()=>{const v=s;try{const i=this[v(0xe9)]??window['appShell'][v(0xe9)];let j=i['designerTools'][v(0xbe)](e[v(0xbb)]['tool']??NamedTools[v(0xcc)]);if(typeof j==v(0xd8))j=new j(e[v(0xbb)]);i['globalContext'][v(0xb8)]=j;}catch(k){}},this[s(0xc3)]['appendChild'](f),this.#observer[s(0xdd)](h);}}[o(0xdf)](c){const w=o,d=c['_item'];try{if(!d['tag'])return;if(d[w(0xe5)]['includes']('-')&&!customElements['get'](d[w(0xe5)]))return;const f=document[w(0xd5)](d['tag']);if(d[w(0xbb)]?.[w(0xe1)])for(const g in d['elementDef'][w(0xe1)]){try{f['setAttribute'](g,d[w(0xbb)]['defaultAttributes'][g]);}catch(h){}}if(d[w(0xbb)]?.[w(0xce)])f['textContent']=d['elementDef'][w(0xce)];else{if(!d[w(0xe5)][w(0xca)]('-')&&!f['childNodes'][w(0xc7)])f[w(0xc5)]=d['tag'];}c[w(0xf1)](f);}catch(i){console[w(0xd2)]('gallery:\x20could\x20not\x20render',d[w(0xe5)],i);}}}function b(c,d){c=c-0xb8;const e=a();let f=e[c];return f;}customElements['define'](o(0xc9),IobrokerWebuiWidgetGallery);
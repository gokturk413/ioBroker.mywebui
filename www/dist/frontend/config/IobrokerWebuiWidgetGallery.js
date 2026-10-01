function b(c,d){c=c-0x73;const e=a();let f=e[c];return f;}const o=b;function a(){const x=['add','dataTransfer','showForSource','1aOPfyI','card-preview','push','galleryType','global','innerText','defaultContent','title','globalContext','iobroker-webui-3dscreen-viewer','serviceContainer','all','childNodes','dir','3dcontrol','516635lnuzmv','define','div','stringify','dropEffect','style','draggable','elementDef','910511zVKakY','function','has','isIntersecting','getCustomControl','scene-scope','14851638AwpmBr','_showItems','tool','length','2789328QjBQeS','designerTools','_getDomElement','get','control','includes','textContent','1532064LUlzXm','npm','name','setData','target','getGlobalObject','template','tag','disconnect','className','_grid','_instantiate','751028XoKkmV','grid','30KLuFWD','single','gallery:\x20could\x20not\x20render','head','split','<div\x20class=\x22empty\x22>no\x20widgets\x20found</div>','6963224HfEDZz','defaultAttributes','DrawElementTool','_instantiated','getObjectNames','appendChild'];a=function(){return x;};return a();}(function(c,d){const n=b,e=c();while(!![]){try{const f=parseInt(n(0xb3))/0x1*(-parseInt(n(0x96))/0x2)+-parseInt(n(0x8f))/0x3+parseInt(n(0xa2))/0x4+-parseInt(n(0x7d))/0x5*(parseInt(n(0xa4))/0x6)+parseInt(n(0x85))/0x7+parseInt(n(0xaa))/0x8+parseInt(n(0x8b))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x98d34));import{BaseCustomWebComponentConstructorAppend,css,html}from'@gokturk413/base-custom-webcomponent';import{dragDropFormatNameElementDefinition,NamedTools}from'@gokturk413/web-component-designer';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{getCustomControlName,generateCustomControl}from'../runtime/CustomControls.js';export class IobrokerWebuiWidgetGallery extends BaseCustomWebComponentConstructorAppend{static [o(0x82)]=css`
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
        }`;static [o(0x9c)]=html`
        <div id="head">gallery</div>
        <div id="grid"><div class="empty">Select a controls folder or a package in the tree to see its widgets rendered live.</div></div>`;['serviceContainer'];#observer;constructor(){const p=o;super(),this['_head']=this[p(0x91)](p(0xa7)),this[p(0xa0)]=this[p(0x91)](p(0xa3));}async[o(0xb2)](c,d){const q=o;let f=[];try{if(c['galleryType']==='control'){const g=c['global']?await iobrokerHandler['getGlobalObjectNames'](q(0x93),c[q(0x7b)]||undefined):await iobrokerHandler[q(0xae)]('control',c[q(0x7b)]||undefined);f=await Promise[q(0x79)](g['map'](async h=>{const r=q,i=((c['dir']??'')+'/'+h)['replace'](/^\//,''),j=getCustomControlName(i);if(!customElements['get'](j))try{const k=c[r(0xb7)]?await iobrokerHandler[r(0x9b)]('control',i):await iobrokerHandler[r(0x89)](i);if(k)generateCustomControl(i,k);}catch(l){}return{'name':h,'tag':j,'elementDef':{'tag':j}};}));}else{if(c[q(0xb6)]===q(0x7c)){if(c[q(0xa5)]){const h=String(c['single'])['replace'](/^\//,''),i={'scene-name':h,'scene-type':'3dcontrol'};if(c[q(0xb7)])i[q(0x8a)]=q(0xb7);f=[{'name':h[q(0xa8)]('/')['pop'](),'tag':q(0x77),'elementDef':{'tag':q(0x77),'defaultAttributes':i,'defaultWidth':'400px','defaultHeight':'300px'}}];}}else{if(c[q(0xb6)]===q(0x97)){const j=await c['service']['getElements'](),k=new Set();for(const l of j){if(!l['tag']||k[q(0x87)](l['tag']))continue;k[q(0xb0)](l['tag']),f[q(0xb5)]({'name':l['name']??l[q(0x9d)],'tag':l[q(0x9d)],'elementDef':l});}}}}}catch(m){console['warn']('gallery:\x20error\x20loading\x20items',m);}this[q(0x8c)](d,f);}['_showItems'](c,d){const s=o;this['_head'][s(0x73)]=c+'\x20('+d['length']+')',this.#observer?.[s(0x9e)](),this['_grid']['innerHTML']='';if(!d[s(0x8e)]){this['_grid']['innerHTML']=s(0xa9);return;}this.#observer=new IntersectionObserver(e=>{const t=s;for(const f of e){f[t(0x88)]&&!f['target'][t(0xad)]&&(f[t(0x9a)][t(0xad)]=!![],this[t(0xa1)](f[t(0x9a)]),this.#observer['unobserve'](f['target']));}},{'root':this['_grid'],'threshold':0.05});for(const e of d){const f=document['createElement']('div');f[s(0x9f)]='card',f[s(0x75)]=e['tag'];const g=document['createElement'](s(0x7f));g[s(0x9f)]='card-title',g[s(0x95)]=e[s(0x98)];const h=document['createElement']('div');h[s(0x9f)]=s(0xb4),h['_item']=e,f['appendChild'](g),f['appendChild'](h),f[s(0x83)]=!![],f['ondragstart']=i=>{const u=s;i[u(0xb1)][u(0x99)](dragDropFormatNameElementDefinition,JSON[u(0x80)](e['elementDef'])),i[u(0xb1)]['effectAllowed']=u(0x79),i['dataTransfer'][u(0x81)]='copy';},f['onclick']=()=>{const v=s;try{const i=this['serviceContainer']??window['appShell'][v(0x78)];let j=i[v(0x90)]['get'](e[v(0x84)]['tool']??NamedTools[v(0xac)]);if(typeof j==v(0x86))j=new j(e['elementDef']);i[v(0x76)][v(0x8d)]=j;}catch(k){}},this['_grid'][s(0xaf)](f),this.#observer['observe'](h);}}[o(0xa1)](c){const w=o,d=c['_item'];try{if(!d['tag'])return;if(d[w(0x9d)][w(0x94)]('-')&&!customElements[w(0x92)](d['tag']))return;const f=document['createElement'](d[w(0x9d)]);if(d[w(0x84)]?.[w(0xab)])for(const g in d[w(0x84)]['defaultAttributes']){try{f['setAttribute'](g,d[w(0x84)][w(0xab)][g]);}catch(h){}}if(d[w(0x84)]?.[w(0x74)])f['textContent']=d[w(0x84)][w(0x74)];else{if(!d['tag'][w(0x94)]('-')&&!f[w(0x7a)]['length'])f['textContent']=d[w(0x9d)];}c[w(0xaf)](f);}catch(i){console['warn'](w(0xa6),d['tag'],i);}}}customElements[o(0x7e)]('iobroker-webui-widget-gallery',IobrokerWebuiWidgetGallery);
const l=b;function a(){const q=['1155498UjnOwE','height','settings','_root','130wDGXYk','stretch','1834226xviSUI','defaultHeight','match','root','244936lhoztW','createTextNode','dataTransfer','effectAllowed','defaultWidth','screenName','696NJPyom','1dkGYuh','270hUmrVy','_readFolder','name','16650843UPNZbo','getObjectNames','2448894dEByol','_filter','appendChild','iobroker-webui-screen-viewer','64260avlRKj','width','iobroker-webui-screens-view','332262aJKnGA','stretchWidth','createElement','fill'];a=function(){return q;};return a();}(function(c,d){const k=b,e=c();while(!![]){try{const f=-parseInt(k(0x189))/0x1*(parseInt(k(0x1a0))/0x2)+-parseInt(k(0x19a))/0x3+parseInt(k(0x1a4))/0x4*(-parseInt(k(0x19e))/0x5)+parseInt(k(0x18f))/0x6+parseInt(k(0x193))/0x7*(parseInt(k(0x188))/0x8)+-parseInt(k(0x196))/0x9*(-parseInt(k(0x18a))/0xa)+parseInt(k(0x18d))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc8ea1));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';import{ScreenViewer}from'../runtime/ScreenViewer.js';function b(c,d){c=c-0x186;const e=a();let f=e[c];return f;}export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
        <div id="root"></div>
    `;static ['style']=css`
        :host {
            box-sizing: border-box;
            background: rgb(44, 46, 53);
        }
        * {
            box-sizing: border-box;
        }
        
        #root {
            display: flex;
            flex-wrap: wrap;
            overflow-x: hidden;
            overflow-y: scroll;
            align-content: flex-start;
            gap: 15px;
            height: calc(100% - 20px);
            padding: 10px;
        }

        #root div {
            & iobroker-webui-screen-viewer {
                width: 200px;
                height: 100px;
                user-drag: none;
                overflow: hidden;
                border: 1px solid lightgray;
                pointer-events: none;
            }
            display: flex;
            flex-direction: column;
            align-items: center;
            color: var(--text-color, white);
            font-size: 10px;
            width: 200px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        `;static ['is']=l(0x195);static ['properties']={};['_root'];['_filter'];constructor(){const m=l;super(),super['_restoreCachedInititalValues'](),this[m(0x19d)]=this['_getDomElement'](m(0x1a3));}async['ready'](){const n=l;this['_parseAttributesToProperties'](),this['_assignEvents']();for await(const c of this['_readFolder']()){const d=document[n(0x198)]('div'),e=new ScreenViewer();e[n(0x19f)]=n(0x199);const g=await iobrokerHandler['getWebuiObject']('screen',c['name']);if(!g[n(0x19c)]?.[n(0x194)])e[n(0x197)]=0x780;if(!g['settings']?.['height'])e['stretchHeight']=0x438;e[n(0x187)]=c['name'],d['title']=c[n(0x18c)],d['draggable']=!![],d[n(0x191)](e),d['appendChild'](document[n(0x1a5)](c[n(0x18c)])),d['ondragstart']=async h=>{const o=n,i=c['name'],j={'tag':o(0x192),'defaultAttributes':{'screen-name':i},'defaultWidth':'300px','defaultHeight':'200px'};if(g?.['settings']?.['width'])j[o(0x186)]=g['settings']['width'];if(g?.[o(0x19c)]?.['height'])j[o(0x1a1)]=g['settings'][o(0x19b)];return h['dataTransfer']['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](j)),h[o(0x1a6)][o(0x1a7)]='all',h['dataTransfer']['dropEffect']='copy',!![];},this['_root'][n(0x191)](d);}}async*[l(0x18b)](c=''){const p=l,e=await iobrokerHandler[p(0x18e)]('screen',c);for(const h of e){if(this[p(0x190)]){if(!h[p(0x1a2)](this['_filter']))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler['getSubFolders']('screen',c);for(const i of g){yield*this['_readFolder'](c+'/'+i);}}}customElements['define'](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);
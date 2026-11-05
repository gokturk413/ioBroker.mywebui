const l=b;(function(c,d){const k=b,e=c();while(!![]){try{const f=-parseInt(k(0x1f5))/0x1*(parseInt(k(0x1db))/0x2)+parseInt(k(0x1e1))/0x3+parseInt(k(0x1eb))/0x4*(-parseInt(k(0x1e7))/0x5)+-parseInt(k(0x1ef))/0x6+parseInt(k(0x1e0))/0x7*(-parseInt(k(0x1f6))/0x8)+-parseInt(k(0x1da))/0x9+parseInt(k(0x1f4))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5e2ad));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';function a(){const q=['height','stretch','125937AjJXvy','938007CqmGHQ','div','_readFolder','iobroker-webui-screen-viewer','stretchHeight','appendChild','25705LlmigT','properties','root','settings','236qaUcGl','defaultWidth','name','match','1248582EJUQkh','title','_root','iobroker-webui-screens-view','copy','16059650keiooa','10475GHhmND','88NlbdwM','ready','dataTransfer','_getDomElement','template','screen','_restoreCachedInititalValues','setData','fill','stretchWidth','define','width','6563997PCuFiv','18aTqqjD','getSubFolders','ondragstart'];a=function(){return q;};return a();}import{ScreenViewer}from'../runtime/ScreenViewer.js';export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static [l(0x1fa)]=html`
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
        `;static ['is']=l(0x1f2);static [l(0x1e8)]={};['_root'];['_filter'];constructor(){const m=l;super(),super[m(0x1fc)](),this[m(0x1f1)]=this[m(0x1f9)](m(0x1e9));}async[l(0x1f7)](){const n=l;this['_parseAttributesToProperties'](),this['_assignEvents']();for await(const c of this['_readFolder']()){const d=document['createElement'](n(0x1e2)),e=new ScreenViewer();e[n(0x1df)]=n(0x1fe);const g=await iobrokerHandler['getWebuiObject'](n(0x1fb),c['name']);if(!g[n(0x1ea)]?.['width'])e[n(0x1ff)]=0x780;if(!g[n(0x1ea)]?.['height'])e[n(0x1e5)]=0x438;e['screenName']=c[n(0x1ed)],d[n(0x1f0)]=c['name'],d['draggable']=!![],d['appendChild'](e),d[n(0x1e6)](document['createTextNode'](c[n(0x1ed)])),d[n(0x1dd)]=async h=>{const o=n,i=c['name'],j={'tag':o(0x1e4),'defaultAttributes':{'screen-name':i},'defaultWidth':'300px','defaultHeight':'200px'};if(g?.['settings']?.[o(0x1d9)])j[o(0x1ec)]=g['settings'][o(0x1d9)];if(g?.['settings']?.[o(0x1de)])j['defaultHeight']=g[o(0x1ea)][o(0x1de)];return h['dataTransfer'][o(0x1fd)](dragDropFormatNameElementDefinition,JSON['stringify'](j)),h[o(0x1f8)]['effectAllowed']='all',h['dataTransfer']['dropEffect']=o(0x1f3),!![];},this[n(0x1f1)]['appendChild'](d);}}async*[l(0x1e3)](c=''){const p=l,e=await iobrokerHandler['getObjectNames']('screen',c);for(const h of e){if(this['_filter']){if(!h[p(0x1ee)](this['_filter']))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler[p(0x1dc)](p(0x1fb),c);for(const i of g){yield*this[p(0x1e3)](c+'/'+i);}}}function b(c,d){c=c-0x1d8;const e=a();let f=e[c];return f;}customElements[l(0x1d8)](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);
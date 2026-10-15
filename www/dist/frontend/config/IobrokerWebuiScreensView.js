function a(){const q=['stringify','name','250064ufiTRr','fill','_getDomElement','20AygiiY','_filter','11063016lOQXjj','screen','300888AlyOiC','getObjectNames','all','screenName','createTextNode','height','5047404YOpLcu','105RVBclW','match','4424835WxHriT','root','copy','_parseAttributesToProperties','defaultWidth','stretch','140838nzWMCj','126788JTXnar','settings','dataTransfer','_root','stretchHeight','_restoreCachedInititalValues','200px','iobroker-webui-screens-view','define','properties','effectAllowed','defaultHeight','appendChild','title','draggable','createElement'];a=function(){return q;};return a();}const l=b;(function(c,d){const k=b,e=c();while(!![]){try{const f=parseInt(k(0x97))/0x1+-parseInt(k(0xac))/0x2*(parseInt(k(0x96))/0x3)+parseInt(k(0xb0))/0x4+-parseInt(k(0x90))/0x5+parseInt(k(0x8d))/0x6+-parseInt(k(0x8e))/0x7*(parseInt(k(0xa9))/0x8)+parseInt(k(0xae))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6da93));function b(c,d){c=c-0x8d;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';import{ScreenViewer}from'../runtime/ScreenViewer.js';export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
        `;static ['is']=l(0x9e);static [l(0xa0)]={};['_root'];[l(0xad)];constructor(){const m=l;super(),super[m(0x9c)](),this[m(0x9a)]=this[m(0xab)](m(0x91));}async['ready'](){const n=l;this[n(0x93)](),this['_assignEvents']();for await(const c of this['_readFolder']()){const d=document[n(0xa6)]('div'),e=new ScreenViewer();e[n(0x95)]=n(0xaa);const g=await iobrokerHandler['getWebuiObject']('screen',c['name']);if(!g[n(0x98)]?.['width'])e['stretchWidth']=0x780;if(!g['settings']?.['height'])e[n(0x9b)]=0x438;e[n(0xb3)]=c['name'],d[n(0xa4)]=c[n(0xa8)],d[n(0xa5)]=!![],d['appendChild'](e),d['appendChild'](document[n(0xb4)](c['name'])),d['ondragstart']=async h=>{const o=n,i=c['name'],j={'tag':'iobroker-webui-screen-viewer','defaultAttributes':{'screen-name':i},'defaultWidth':'300px','defaultHeight':o(0x9d)};if(g?.['settings']?.['width'])j[o(0x94)]=g[o(0x98)]['width'];if(g?.['settings']?.[o(0xb5)])j[o(0xa2)]=g['settings'][o(0xb5)];return h[o(0x99)]['setData'](dragDropFormatNameElementDefinition,JSON[o(0xa7)](j)),h['dataTransfer'][o(0xa1)]=o(0xb2),h['dataTransfer']['dropEffect']=o(0x92),!![];},this['_root'][n(0xa3)](d);}}async*['_readFolder'](c=''){const p=l,e=await iobrokerHandler[p(0xb1)](p(0xaf),c);for(const h of e){if(this['_filter']){if(!h[p(0x8f)](this['_filter']))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler['getSubFolders'](p(0xaf),c);for(const i of g){yield*this['_readFolder'](c+'/'+i);}}}customElements[l(0x9f)](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);
const l=b;(function(c,d){const k=b,e=c();while(!![]){try{const f=parseInt(k(0xd8))/0x1*(parseInt(k(0xd9))/0x2)+parseInt(k(0xc6))/0x3+-parseInt(k(0xbf))/0x4+parseInt(k(0xbc))/0x5*(parseInt(k(0xc1))/0x6)+parseInt(k(0xcd))/0x7+-parseInt(k(0xd5))/0x8+-parseInt(k(0xc0))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe49b7));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';import{ScreenViewer}from'../runtime/ScreenViewer.js';export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static [l(0xd6)]=html`
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
        `;static ['is']=l(0xd1);static [l(0xc3)]={};[l(0xce)];[l(0xd3)];constructor(){const m=l;super(),super[m(0xd0)](),this['_root']=this[m(0xda)]('root');}async['ready'](){const n=l;this['_parseAttributesToProperties'](),this['_assignEvents']();for await(const c of this[n(0xc5)]()){const d=document['createElement']('div'),e=new ScreenViewer();e['stretch']=n(0xd7);const g=await iobrokerHandler[n(0xbb)]('screen',c['name']);if(!g[n(0xcf)]?.[n(0xd2)])e[n(0xbd)]=0x780;if(!g[n(0xcf)]?.[n(0xc9)])e['stretchHeight']=0x438;e[n(0xc4)]=c[n(0xcb)],d['title']=c[n(0xcb)],d['draggable']=!![],d[n(0xc7)](e),d['appendChild'](document['createTextNode'](c[n(0xcb)])),d[n(0xdc)]=async h=>{const o=n,i=c['name'],j={'tag':'iobroker-webui-screen-viewer','defaultAttributes':{'screen-name':i},'defaultWidth':o(0xc8),'defaultHeight':o(0xd4)};if(g?.['settings']?.['width'])j['defaultWidth']=g['settings']['width'];if(g?.['settings']?.['height'])j[o(0xc2)]=g[o(0xcf)]['height'];return h[o(0xca)]['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](j)),h['dataTransfer']['effectAllowed']='all',h[o(0xca)]['dropEffect']='copy',!![];},this[n(0xce)][n(0xc7)](d);}}async*['_readFolder'](c=''){const p=l,e=await iobrokerHandler[p(0xcc)](p(0xbe),c);for(const h of e){if(this[p(0xd3)]){if(!h[p(0xdb)](this['_filter']))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler['getSubFolders']('screen',c);for(const i of g){yield*this['_readFolder'](c+'/'+i);}}}function a(){const q=['2826905QlrfFp','stretchWidth','screen','1819596mUUafT','16105707CdPgZN','6dqgyTr','defaultHeight','properties','screenName','_readFolder','4543407jBqWyN','appendChild','300px','height','dataTransfer','name','getObjectNames','8850660QLIfwx','_root','settings','_restoreCachedInititalValues','iobroker-webui-screens-view','width','_filter','200px','1881056FCZWmr','template','fill','1wpyrmQ','143398HDxmEw','_getDomElement','match','ondragstart','getWebuiObject'];a=function(){return q;};return a();}function b(c,d){c=c-0xbb;const e=a();let f=e[c];return f;}customElements['define'](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);
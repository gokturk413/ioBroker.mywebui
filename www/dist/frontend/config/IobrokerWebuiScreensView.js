const l=b;(function(c,d){const k=b,e=c();while(!![]){try{const f=parseInt(k(0x188))/0x1+-parseInt(k(0x19f))/0x2*(-parseInt(k(0x1a7))/0x3)+parseInt(k(0x18f))/0x4*(-parseInt(k(0x19c))/0x5)+-parseInt(k(0x18e))/0x6+parseInt(k(0x191))/0x7+parseInt(k(0x18b))/0x8+-parseInt(k(0x18d))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb1b7a));function a(){const q=['_restoreCachedInititalValues','_root','createElement','getSubFolders','effectAllowed','defaultHeight','72801hLkylB','200px','getWebuiObject','stretchWidth','height','settings','screen','_assignEvents','stretchHeight','230463JmgJmz','draggable','iobroker-webui-screens-view','8098616VgDoRv','_getDomElement','10675359jCcqKn','220062LXcBWH','92ABpGLN','title','8143359eycjXn','dataTransfer','_readFolder','copy','ondragstart','appendChild','_filter','defaultWidth','width','match','name','120095UWNEai','define','div','8xhmAZM','dropEffect'];a=function(){return q;};return a();}import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';import{ScreenViewer}from'../runtime/ScreenViewer.js';function b(c,d){c=c-0x186;const e=a();let f=e[c];return f;}export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
        `;static ['is']=l(0x18a);static ['properties']={};['_root'];['_filter'];constructor(){const m=l;super(),super[m(0x1a1)](),this[m(0x1a2)]=this[m(0x18c)]('root');}async['ready'](){const n=l;this['_parseAttributesToProperties'](),this[n(0x186)]();for await(const c of this[n(0x193)]()){const d=document[n(0x1a3)](n(0x19e)),e=new ScreenViewer();e['stretch']='fill';const g=await iobrokerHandler[n(0x1a9)](n(0x1ad),c['name']);if(!g['settings']?.[n(0x199)])e[n(0x1aa)]=0x780;if(!g['settings']?.[n(0x1ab)])e[n(0x187)]=0x438;e['screenName']=c['name'],d[n(0x190)]=c['name'],d[n(0x189)]=!![],d['appendChild'](e),d[n(0x196)](document['createTextNode'](c['name'])),d[n(0x195)]=async h=>{const o=n,i=c[o(0x19b)],j={'tag':'iobroker-webui-screen-viewer','defaultAttributes':{'screen-name':i},'defaultWidth':'300px','defaultHeight':o(0x1a8)};if(g?.['settings']?.['width'])j[o(0x198)]=g['settings']['width'];if(g?.[o(0x1ac)]?.['height'])j[o(0x1a6)]=g['settings'][o(0x1ab)];return h[o(0x192)]['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](j)),h[o(0x192)][o(0x1a5)]='all',h[o(0x192)][o(0x1a0)]=o(0x194),!![];},this['_root']['appendChild'](d);}}async*[l(0x193)](c=''){const p=l,e=await iobrokerHandler['getObjectNames']('screen',c);for(const h of e){if(this['_filter']){if(!h[p(0x19a)](this[p(0x197)]))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler[p(0x1a4)](p(0x1ad),c);for(const i of g){yield*this['_readFolder'](c+'/'+i);}}}customElements[l(0x19d)](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);
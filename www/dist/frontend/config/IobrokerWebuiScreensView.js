const l=b;(function(c,d){const k=b,e=c();while(!![]){try{const f=parseInt(k(0x19e))/0x1+parseInt(k(0x192))/0x2+-parseInt(k(0x1a0))/0x3*(-parseInt(k(0x1a5))/0x4)+-parseInt(k(0x194))/0x5*(-parseInt(k(0x18e))/0x6)+-parseInt(k(0x19f))/0x7*(parseInt(k(0x197))/0x8)+parseInt(k(0x1a1))/0x9+-parseInt(k(0x19d))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x1b610));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';function a(){const q=['getWebuiObject','3972160LtZdrm','64512gPzmuw','154heTHnQ','3threuf','1298133gUjXOV','screen','createElement','name','105864LVnPTm','_getDomElement','_filter','height','_readFolder','iobroker-webui-screens-view','stretch','properties','appendChild','width','stretchHeight','_root','6kYuqbI','getObjectNames','screenName','fill','310490JHODxm','200px','1082130aRkvNj','dropEffect','dataTransfer','35464RQPGXs','settings','all','draggable','ondragstart'];a=function(){return q;};return a();}function b(c,d){c=c-0x184;const e=a();let f=e[c];return f;}import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';import{ScreenViewer}from'../runtime/ScreenViewer.js';export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
        `;static ['is']=l(0x187);static [l(0x189)]={};['_root'];['_filter'];constructor(){const m=l;super(),super['_restoreCachedInititalValues'](),this[m(0x18d)]=this[m(0x1a6)]('root');}async['ready'](){const n=l;this['_parseAttributesToProperties'](),this['_assignEvents']();for await(const c of this[n(0x186)]()){const d=document[n(0x1a3)]('div'),e=new ScreenViewer();e[n(0x188)]=n(0x191);const g=await iobrokerHandler[n(0x19c)](n(0x1a2),c[n(0x1a4)]);if(!g[n(0x198)]?.[n(0x18b)])e['stretchWidth']=0x780;if(!g['settings']?.[n(0x185)])e[n(0x18c)]=0x438;e[n(0x190)]=c[n(0x1a4)],d['title']=c[n(0x1a4)],d[n(0x19a)]=!![],d['appendChild'](e),d['appendChild'](document['createTextNode'](c['name'])),d[n(0x19b)]=async h=>{const o=n,i=c[o(0x1a4)],j={'tag':'iobroker-webui-screen-viewer','defaultAttributes':{'screen-name':i},'defaultWidth':'300px','defaultHeight':o(0x193)};if(g?.[o(0x198)]?.['width'])j['defaultWidth']=g['settings']['width'];if(g?.['settings']?.[o(0x185)])j['defaultHeight']=g[o(0x198)][o(0x185)];return h['dataTransfer']['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](j)),h[o(0x196)]['effectAllowed']=o(0x199),h['dataTransfer'][o(0x195)]='copy',!![];},this[n(0x18d)][n(0x18a)](d);}}async*['_readFolder'](c=''){const p=l,e=await iobrokerHandler[p(0x18f)](p(0x1a2),c);for(const h of e){if(this[p(0x184)]){if(!h['match'](this['_filter']))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler['getSubFolders'](p(0x1a2),c);for(const i of g){yield*this['_readFolder'](c+'/'+i);}}}customElements['define'](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);
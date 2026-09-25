function a(){const q=['2ZUNGTW','stringify','1604491qGLwDa','_root','root','_filter','_readFolder','height','76025TsMGRu','getWebuiObject','1801743bCUQoR','200px','screen','getObjectNames','72umlLoW','8756740nhNttk','getSubFolders','width','match','copy','draggable','iobroker-webui-screens-view','name','_restoreCachedInititalValues','_assignEvents','2769618MEDIzO','fill','9TJxBXv','dataTransfer','settings','1664773ierAcC','iobroker-webui-screen-viewer','effectAllowed','define','title','8VsSvZN','84tLCiYw','_parseAttributesToProperties','95512KakQHs','appendChild'];a=function(){return q;};return a();}function b(c,d){c=c-0xcc;const e=a();let f=e[c];return f;}const l=b;(function(c,d){const k=b,e=c();while(!![]){try{const f=-parseInt(k(0xcd))/0x1*(parseInt(k(0xf3))/0x2)+parseInt(k(0xd7))/0x3+-parseInt(k(0xf1))/0x4*(-parseInt(k(0xd5))/0x5)+-parseInt(k(0xe6))/0x6+-parseInt(k(0xcf))/0x7*(-parseInt(k(0xf0))/0x8)+parseInt(k(0xe8))/0x9*(parseInt(k(0xdc))/0xa)+parseInt(k(0xeb))/0xb*(-parseInt(k(0xdb))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x889f0));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';import{ScreenViewer}from'../runtime/ScreenViewer.js';export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
        `;static ['is']=l(0xe2);static ['properties']={};[l(0xd0)];[l(0xd2)];constructor(){const m=l;super(),super[m(0xe4)](),this[m(0xd0)]=this['_getDomElement'](m(0xd1));}async['ready'](){const n=l;this[n(0xf2)](),this[n(0xe5)]();for await(const c of this['_readFolder']()){const d=document['createElement']('div'),e=new ScreenViewer();e['stretch']=n(0xe7);const g=await iobrokerHandler[n(0xd6)]('screen',c['name']);if(!g['settings']?.['width'])e['stretchWidth']=0x780;if(!g['settings']?.[n(0xd4)])e['stretchHeight']=0x438;e['screenName']=c[n(0xe3)],d[n(0xef)]=c['name'],d[n(0xe1)]=!![],d['appendChild'](e),d[n(0xcc)](document['createTextNode'](c[n(0xe3)])),d['ondragstart']=async h=>{const o=n,i=c[o(0xe3)],j={'tag':o(0xec),'defaultAttributes':{'screen-name':i},'defaultWidth':'300px','defaultHeight':o(0xd8)};if(g?.[o(0xea)]?.['width'])j['defaultWidth']=g[o(0xea)][o(0xde)];if(g?.['settings']?.[o(0xd4)])j['defaultHeight']=g[o(0xea)][o(0xd4)];return h[o(0xe9)]['setData'](dragDropFormatNameElementDefinition,JSON[o(0xce)](j)),h['dataTransfer'][o(0xed)]='all',h['dataTransfer']['dropEffect']=o(0xe0),!![];},this[n(0xd0)]['appendChild'](d);}}async*['_readFolder'](c=''){const p=l,e=await iobrokerHandler[p(0xda)]('screen',c);for(const h of e){if(this[p(0xd2)]){if(!h[p(0xdf)](this[p(0xd2)]))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler[p(0xdd)](p(0xd9),c);for(const i of g){yield*this[p(0xd3)](c+'/'+i);}}}customElements[l(0xee)](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);
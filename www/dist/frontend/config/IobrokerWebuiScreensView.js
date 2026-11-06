const l=b;function a(){const q=['ready','name','_getDomElement','stringify','_restoreCachedInititalValues','effectAllowed','29OMiZaU','screenName','_parseAttributesToProperties','_root','style','title','3328816cPaIgu','50186DYesOq','1321695mhFCCX','height','match','6346529PxdFyl','dataTransfer','_filter','appendChild','4082040ksXUoO','createElement','iobroker-webui-screens-view','stretch','width','200px','_readFolder','422448lWTDHf','settings','copy','div','1679920lvLjjG'];a=function(){return q;};return a();}(function(c,d){const k=b,e=c();while(!![]){try{const f=-parseInt(k(0xfb))/0x1*(-parseInt(k(0xe1))/0x2)+-parseInt(k(0xf0))/0x3+-parseInt(k(0xe0))/0x4+parseInt(k(0xe2))/0x5+-parseInt(k(0xe9))/0x6+parseInt(k(0xe5))/0x7+parseInt(k(0xf4))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6f291));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';function b(c,d){c=c-0xe0;const e=a();let f=e[c];return f;}import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';import{ScreenViewer}from'../runtime/ScreenViewer.js';export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
        <div id="root"></div>
    `;static [l(0xff)]=css`
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
        `;static ['is']=l(0xeb);static ['properties']={};[l(0xfe)];['_filter'];constructor(){const m=l;super(),super[m(0xf9)](),this['_root']=this[m(0xf7)]('root');}async[l(0xf5)](){const n=l;this[n(0xfd)](),this['_assignEvents']();for await(const c of this[n(0xef)]()){const d=document[n(0xea)](n(0xf3)),e=new ScreenViewer();e[n(0xec)]='fill';const g=await iobrokerHandler['getWebuiObject']('screen',c['name']);if(!g[n(0xf1)]?.['width'])e['stretchWidth']=0x780;if(!g['settings']?.['height'])e['stretchHeight']=0x438;e[n(0xfc)]=c['name'],d[n(0x100)]=c[n(0xf6)],d['draggable']=!![],d[n(0xe8)](e),d['appendChild'](document['createTextNode'](c[n(0xf6)])),d['ondragstart']=async h=>{const o=n,i=c['name'],j={'tag':'iobroker-webui-screen-viewer','defaultAttributes':{'screen-name':i},'defaultWidth':'300px','defaultHeight':o(0xee)};if(g?.['settings']?.['width'])j['defaultWidth']=g[o(0xf1)][o(0xed)];if(g?.[o(0xf1)]?.[o(0xe3)])j['defaultHeight']=g['settings'][o(0xe3)];return h['dataTransfer']['setData'](dragDropFormatNameElementDefinition,JSON[o(0xf8)](j)),h[o(0xe6)][o(0xfa)]='all',h[o(0xe6)]['dropEffect']=o(0xf2),!![];},this[n(0xfe)]['appendChild'](d);}}async*[l(0xef)](c=''){const p=l,e=await iobrokerHandler['getObjectNames']('screen',c);for(const h of e){if(this[p(0xe7)]){if(!h[p(0xe4)](this[p(0xe7)]))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler['getSubFolders']('screen',c);for(const i of g){yield*this[p(0xef)](c+'/'+i);}}}customElements['define'](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);
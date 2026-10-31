function a(){const q=['_parseAttributesToProperties','effectAllowed','settings','9ZhrxIU','style','title','iobroker-webui-screen-viewer','176021RMgIuB','ready','match','200px','97374dSmwFa','ondragstart','_readFolder','stretchHeight','createElement','1709139IgVFdc','name','all','_root','5228470LneZbl','screenName','dataTransfer','_filter','14mryrNe','height','appendChild','draggable','4DnhyEb','117848kTRwyY','getObjectNames','3677420urANCL','2561418Wohqaz','fill','setData','screen'];a=function(){return q;};return a();}const l=b;(function(c,d){const k=b,e=c();while(!![]){try{const f=parseInt(k(0x1bf))/0x1+parseInt(k(0x1d8))/0x2+-parseInt(k(0x1c8))/0x3+parseInt(k(0x1d4))/0x4*(-parseInt(k(0x1d7))/0x5)+parseInt(k(0x1c3))/0x6*(parseInt(k(0x1d0))/0x7)+parseInt(k(0x1d5))/0x8*(-parseInt(k(0x1df))/0x9)+parseInt(k(0x1cc))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa8f8b));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';import{ScreenViewer}from'../runtime/ScreenViewer.js';export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
        <div id="root"></div>
    `;static [l(0x1e0)]=css`
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
        `;static ['is']='iobroker-webui-screens-view';static ['properties']={};['_root'];[l(0x1cf)];constructor(){const m=l;super(),super['_restoreCachedInititalValues'](),this[m(0x1cb)]=this['_getDomElement']('root');}async[l(0x1c0)](){const n=l;this[n(0x1dc)](),this['_assignEvents']();for await(const c of this[n(0x1c5)]()){const d=document[n(0x1c7)]('div'),e=new ScreenViewer();e['stretch']=n(0x1d9);const g=await iobrokerHandler['getWebuiObject'](n(0x1db),c['name']);if(!g[n(0x1de)]?.['width'])e['stretchWidth']=0x780;if(!g[n(0x1de)]?.[n(0x1d1)])e[n(0x1c6)]=0x438;e[n(0x1cd)]=c[n(0x1c9)],d[n(0x1bd)]=c['name'],d[n(0x1d3)]=!![],d[n(0x1d2)](e),d[n(0x1d2)](document['createTextNode'](c[n(0x1c9)])),d[n(0x1c4)]=async h=>{const o=n,i=c['name'],j={'tag':o(0x1be),'defaultAttributes':{'screen-name':i},'defaultWidth':'300px','defaultHeight':o(0x1c2)};if(g?.[o(0x1de)]?.['width'])j['defaultWidth']=g['settings']['width'];if(g?.[o(0x1de)]?.['height'])j['defaultHeight']=g[o(0x1de)]['height'];return h['dataTransfer'][o(0x1da)](dragDropFormatNameElementDefinition,JSON['stringify'](j)),h['dataTransfer'][o(0x1dd)]=o(0x1ca),h[o(0x1ce)]['dropEffect']='copy',!![];},this['_root']['appendChild'](d);}}async*['_readFolder'](c=''){const p=l,e=await iobrokerHandler[p(0x1d6)](p(0x1db),c);for(const h of e){if(this[p(0x1cf)]){if(!h[p(0x1c1)](this[p(0x1cf)]))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler['getSubFolders']('screen',c);for(const i of g){yield*this[p(0x1c5)](c+'/'+i);}}}function b(c,d){c=c-0x1bd;const e=a();let f=e[c];return f;}customElements['define'](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);
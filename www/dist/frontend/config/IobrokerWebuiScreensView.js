const l=b;(function(c,d){const k=b,e=c();while(!![]){try{const f=parseInt(k(0x1c7))/0x1*(parseInt(k(0x1d8))/0x2)+parseInt(k(0x1d1))/0x3+parseInt(k(0x1dc))/0x4*(-parseInt(k(0x1e4))/0x5)+parseInt(k(0x1c6))/0x6*(parseInt(k(0x1de))/0x7)+parseInt(k(0x1da))/0x8*(-parseInt(k(0x1c8))/0x9)+-parseInt(k(0x1d6))/0xa+-parseInt(k(0x1d9))/0xb*(-parseInt(k(0x1ea))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc8128));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';function b(c,d){c=c-0x1c5;const e=a();let f=e[c];return f;}import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';import{ScreenViewer}from'../runtime/ScreenViewer.js';function a(){const q=['_filter','2814411aZsEMS','_restoreCachedInititalValues','title','stretchHeight','defaultWidth','4753070OXhNmh','createTextNode','230sSTptr','40227TowgeA','54408rgHEwU','screen','16STLNKK','width','50211zefEle','_root','copy','createElement','settings','all','324355bTVjZb','stretchWidth','style','match','_readFolder','define','876OOwALq','iobroker-webui-screen-viewer','1332IUsGAJ','2614nwQctM','2043RiZsee','template','200px','height','dataTransfer','getObjectNames','appendChild','name'];a=function(){return q;};return a();}export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static [l(0x1c9)]=html`
        <div id="root"></div>
    `;static [l(0x1e6)]=css`
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
        `;static ['is']='iobroker-webui-screens-view';static ['properties']={};['_root'];['_filter'];constructor(){const m=l;super(),super[m(0x1d2)](),this['_root']=this['_getDomElement']('root');}async['ready'](){const n=l;this['_parseAttributesToProperties'](),this['_assignEvents']();for await(const c of this[n(0x1e8)]()){const d=document[n(0x1e1)]('div'),e=new ScreenViewer();e['stretch']='fill';const g=await iobrokerHandler['getWebuiObject']('screen',c['name']);if(!g[n(0x1e2)]?.[n(0x1dd)])e[n(0x1e5)]=0x780;if(!g[n(0x1e2)]?.['height'])e[n(0x1d4)]=0x438;e['screenName']=c['name'],d[n(0x1d3)]=c[n(0x1cf)],d['draggable']=!![],d['appendChild'](e),d[n(0x1ce)](document[n(0x1d7)](c[n(0x1cf)])),d['ondragstart']=async h=>{const o=n,i=c[o(0x1cf)],j={'tag':o(0x1c5),'defaultAttributes':{'screen-name':i},'defaultWidth':'300px','defaultHeight':o(0x1ca)};if(g?.[o(0x1e2)]?.[o(0x1dd)])j[o(0x1d5)]=g[o(0x1e2)]['width'];if(g?.['settings']?.[o(0x1cb)])j['defaultHeight']=g['settings'][o(0x1cb)];return h[o(0x1cc)]['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](j)),h['dataTransfer']['effectAllowed']=o(0x1e3),h[o(0x1cc)]['dropEffect']=o(0x1e0),!![];},this[n(0x1df)][n(0x1ce)](d);}}async*['_readFolder'](c=''){const p=l,e=await iobrokerHandler[p(0x1cd)](p(0x1db),c);for(const h of e){if(this[p(0x1d0)]){if(!h[p(0x1e7)](this[p(0x1d0)]))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler['getSubFolders'](p(0x1db),c);for(const i of g){yield*this[p(0x1e8)](c+'/'+i);}}}customElements[l(0x1e9)](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);
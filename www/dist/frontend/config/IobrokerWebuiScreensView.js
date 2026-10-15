const l=b;function a(){const q=['iobroker-webui-screen-viewer','draggable','settings','68MPMXkJ','height','name','appendChild','defaultWidth','1778163gnGBkB','6888376DfvGKZ','_getDomElement','750426GEopBT','root','match','_restoreCachedInititalValues','2281662UTYnEx','title','all','div','18TNRpfx','3635464oylMgE','2701865eoFPEc','width','template','dataTransfer','264681ZqoJcT','screen','_filter','300px','getObjectNames'];a=function(){return q;};return a();}(function(c,d){const k=b,e=c();while(!![]){try{const f=parseInt(k(0x16a))/0x1+parseInt(k(0x16d))/0x2+parseInt(k(0x17b))/0x3*(parseInt(k(0x165))/0x4)+-parseInt(k(0x177))/0x5*(parseInt(k(0x175))/0x6)+-parseInt(k(0x176))/0x7+-parseInt(k(0x16b))/0x8+parseInt(k(0x171))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xdd013));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';import{ScreenViewer}from'../runtime/ScreenViewer.js';function b(c,d){c=c-0x163;const e=a();let f=e[c];return f;}export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static [l(0x179)]=html`
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
        `;static ['is']='iobroker-webui-screens-view';static ['properties']={};['_root'];['_filter'];constructor(){const m=l;super(),super[m(0x170)](),this['_root']=this[m(0x16c)](m(0x16e));}async['ready'](){const n=l;this['_parseAttributesToProperties'](),this['_assignEvents']();for await(const c of this['_readFolder']()){const d=document['createElement'](n(0x174)),e=new ScreenViewer();e['stretch']='fill';const g=await iobrokerHandler['getWebuiObject'](n(0x17c),c[n(0x167)]);if(!g[n(0x164)]?.['width'])e['stretchWidth']=0x780;if(!g[n(0x164)]?.[n(0x166)])e['stretchHeight']=0x438;e['screenName']=c['name'],d[n(0x172)]=c[n(0x167)],d[n(0x163)]=!![],d[n(0x168)](e),d[n(0x168)](document['createTextNode'](c[n(0x167)])),d['ondragstart']=async h=>{const o=n,i=c['name'],j={'tag':o(0x180),'defaultAttributes':{'screen-name':i},'defaultWidth':o(0x17e),'defaultHeight':'200px'};if(g?.[o(0x164)]?.[o(0x178)])j[o(0x169)]=g['settings']['width'];if(g?.['settings']?.[o(0x166)])j['defaultHeight']=g[o(0x164)]['height'];return h[o(0x17a)]['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](j)),h[o(0x17a)]['effectAllowed']=o(0x173),h[o(0x17a)]['dropEffect']='copy',!![];},this['_root']['appendChild'](d);}}async*['_readFolder'](c=''){const p=l,e=await iobrokerHandler[p(0x17f)](p(0x17c),c);for(const h of e){if(this[p(0x17d)]){if(!h[p(0x16f)](this['_filter']))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler['getSubFolders']('screen',c);for(const i of g){yield*this['_readFolder'](c+'/'+i);}}}customElements['define'](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);
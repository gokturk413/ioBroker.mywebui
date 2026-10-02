const l=b;function b(c,d){c=c-0x12f;const e=a();let f=e[c];return f;}(function(c,d){const k=b,e=c();while(!![]){try{const f=parseInt(k(0x14e))/0x1+-parseInt(k(0x133))/0x2+parseInt(k(0x13e))/0x3+parseInt(k(0x14d))/0x4+parseInt(k(0x136))/0x5+parseInt(k(0x14f))/0x6+-parseInt(k(0x13a))/0x7;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x19be1));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';import{ScreenViewer}from'../runtime/ScreenViewer.js';export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static [l(0x14b)]=html`
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
        `;static ['is']='iobroker-webui-screens-view';static ['properties']={};[l(0x130)];[l(0x13b)];constructor(){const m=l;super(),super[m(0x137)](),this[m(0x130)]=this[m(0x131)](m(0x140));}async['ready'](){const n=l;this[n(0x134)](),this[n(0x141)]();for await(const c of this['_readFolder']()){const d=document['createElement'](n(0x144)),e=new ScreenViewer();e[n(0x132)]='fill';const g=await iobrokerHandler['getWebuiObject'](n(0x147),c[n(0x143)]);if(!g[n(0x14a)]?.[n(0x145)])e['stretchWidth']=0x780;if(!g[n(0x14a)]?.['height'])e['stretchHeight']=0x438;e[n(0x142)]=c[n(0x143)],d['title']=c['name'],d['draggable']=!![],d['appendChild'](e),d['appendChild'](document[n(0x139)](c[n(0x143)])),d['ondragstart']=async h=>{const o=n,i=c['name'],j={'tag':o(0x13d),'defaultAttributes':{'screen-name':i},'defaultWidth':o(0x149),'defaultHeight':'200px'};if(g?.['settings']?.[o(0x145)])j['defaultWidth']=g['settings']['width'];if(g?.['settings']?.['height'])j['defaultHeight']=g[o(0x14a)][o(0x146)];return h[o(0x135)]['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](j)),h['dataTransfer'][o(0x12f)]=o(0x13f),h[o(0x135)]['dropEffect']=o(0x14c),!![];},this['_root'][n(0x13c)](d);}}async*['_readFolder'](c=''){const p=l,e=await iobrokerHandler['getObjectNames']('screen',c);for(const h of e){if(this['_filter']){if(!h[p(0x138)](this['_filter']))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler['getSubFolders'](p(0x147),c);for(const i of g){yield*this['_readFolder'](c+'/'+i);}}}function a(){const q=['iobroker-webui-screen-viewer','14226oBgdGK','all','root','_assignEvents','screenName','name','div','width','height','screen','define','300px','settings','template','copy','64436YEUCsJ','9926gSSTXn','1094424mAviAw','effectAllowed','_root','_getDomElement','stretch','11194fVuCEg','_parseAttributesToProperties','dataTransfer','939120uFICgo','_restoreCachedInititalValues','match','createTextNode','2029769tavndA','_filter','appendChild'];a=function(){return q;};return a();}customElements[l(0x148)](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);
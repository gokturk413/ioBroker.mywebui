const l=b;(function(c,d){const k=b,e=c();while(!![]){try{const f=parseInt(k(0x104))/0x1+-parseInt(k(0x109))/0x2*(-parseInt(k(0x119))/0x3)+parseInt(k(0x10d))/0x4*(parseInt(k(0x103))/0x5)+-parseInt(k(0x111))/0x6*(-parseInt(k(0x10e))/0x7)+-parseInt(k(0x11a))/0x8*(parseInt(k(0x116))/0x9)+parseInt(k(0x121))/0xa+-parseInt(k(0x10a))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x718de));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';function b(c,d){c=c-0xfc;const e=a();let f=e[c];return f;}function a(){const p=['_readFolder','iobroker-webui-screen-viewer','3458880jcNNPf','defaultWidth','width','template','name','_root','define','stretch','20TDgtNX','549734SmiwSp','title','dataTransfer','setData','height','782YTzBBc','22912351phMNnc','defaultHeight','div','860612CSoDQe','1830178Rumkac','getSubFolders','createTextNode','18TYnSZQ','screen','iobroker-webui-screens-view','appendChild','ready','1071qdWqOk','dropEffect','stringify','6066ajqyPk','52648SMxkfY','_filter','stretchHeight','settings','effectAllowed'];a=function(){return p;};return a();}import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';import{ScreenViewer}from'../runtime/ScreenViewer.js';export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static [l(0xfe)]=html`
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
        `;static ['is']=l(0x113);static ['properties']={};[l(0x100)];['_filter'];constructor(){super(),super['_restoreCachedInititalValues'](),this['_root']=this['_getDomElement']('root');}async[l(0x115)](){const m=l;this['_parseAttributesToProperties'](),this['_assignEvents']();for await(const c of this['_readFolder']()){const d=document['createElement'](m(0x10c)),e=new ScreenViewer();e[m(0x102)]='fill';const g=await iobrokerHandler['getWebuiObject'](m(0x112),c['name']);if(!g[m(0x11d)]?.[m(0xfd)])e['stretchWidth']=0x780;if(!g['settings']?.[m(0x108)])e[m(0x11c)]=0x438;e['screenName']=c['name'],d[m(0x105)]=c['name'],d['draggable']=!![],d['appendChild'](e),d['appendChild'](document[m(0x110)](c['name'])),d['ondragstart']=async h=>{const n=m,i=c[n(0xff)],j={'tag':n(0x120),'defaultAttributes':{'screen-name':i},'defaultWidth':'300px','defaultHeight':'200px'};if(g?.['settings']?.['width'])j[n(0xfc)]=g[n(0x11d)][n(0xfd)];if(g?.['settings']?.['height'])j[n(0x10b)]=g[n(0x11d)][n(0x108)];return h[n(0x106)][n(0x107)](dragDropFormatNameElementDefinition,JSON[n(0x118)](j)),h['dataTransfer'][n(0x11e)]='all',h['dataTransfer'][n(0x117)]='copy',!![];},this[m(0x100)][m(0x114)](d);}}async*[l(0x11f)](c=''){const o=l,e=await iobrokerHandler['getObjectNames']('screen',c);for(const h of e){if(this[o(0x11b)]){if(!h['match'](this['_filter']))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler[o(0x10f)]('screen',c);for(const i of g){yield*this['_readFolder'](c+'/'+i);}}}customElements[l(0x101)](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);
function b(c,d){c=c-0xf8;const e=a();let f=e[c];return f;}function a(){const q=['width','stretchHeight','screen','draggable','appendChild','182788zxnuQY','height','6984vtszcr','stretch','define','_restoreCachedInititalValues','getSubFolders','ready','style','dataTransfer','getWebuiObject','2225LDeNXf','div','_root','template','title','settings','2952680xDKkXJ','all','dropEffect','3123126cdJLQB','162GMqIGP','name','_getDomElement','getObjectNames','539133ODZpea','iobroker-webui-screens-view','_readFolder','screenName','createElement','19364WmIKgM','_filter','229568VsjbFf'];a=function(){return q;};return a();}const l=b;(function(c,d){const k=b,e=c();while(!![]){try{const f=parseInt(k(0x109))/0x1+parseInt(k(0x10f))/0x2+parseInt(k(0xfe))/0x3*(parseInt(k(0x107))/0x4)+parseInt(k(0x11a))/0x5*(parseInt(k(0x111))/0x6)+-parseInt(k(0x102))/0x7+-parseInt(k(0xfa))/0x8+-parseInt(k(0xfd))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4b026));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';import{ScreenViewer}from'../runtime/ScreenViewer.js';export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static [l(0x11d)]=html`
        <div id="root"></div>
    `;static [l(0x117)]=css`
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
        `;static ['is']=l(0x103);static ['properties']={};['_root'];['_filter'];constructor(){const m=l;super(),super[m(0x114)](),this[m(0x11c)]=this[m(0x100)]('root');}async[l(0x116)](){const n=l;this['_parseAttributesToProperties'](),this['_assignEvents']();for await(const c of this[n(0x104)]()){const d=document[n(0x106)](n(0x11b)),e=new ScreenViewer();e[n(0x112)]='fill';const g=await iobrokerHandler[n(0x119)](n(0x10c),c['name']);if(!g['settings']?.[n(0x10a)])e['stretchWidth']=0x780;if(!g[n(0xf9)]?.[n(0x110)])e[n(0x10b)]=0x438;e[n(0x105)]=c['name'],d[n(0xf8)]=c[n(0xff)],d[n(0x10d)]=!![],d[n(0x10e)](e),d[n(0x10e)](document['createTextNode'](c[n(0xff)])),d['ondragstart']=async h=>{const o=n,i=c['name'],j={'tag':'iobroker-webui-screen-viewer','defaultAttributes':{'screen-name':i},'defaultWidth':'300px','defaultHeight':'200px'};if(g?.[o(0xf9)]?.['width'])j['defaultWidth']=g['settings'][o(0x10a)];if(g?.[o(0xf9)]?.['height'])j['defaultHeight']=g[o(0xf9)]['height'];return h[o(0x118)]['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](j)),h['dataTransfer']['effectAllowed']=o(0xfb),h['dataTransfer'][o(0xfc)]='copy',!![];},this[n(0x11c)][n(0x10e)](d);}}async*['_readFolder'](c=''){const p=l,e=await iobrokerHandler[p(0x101)]('screen',c);for(const h of e){if(this[p(0x108)]){if(!h['match'](this['_filter']))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler[p(0x115)](p(0x10c),c);for(const i of g){yield*this['_readFolder'](c+'/'+i);}}}customElements[l(0x113)](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);
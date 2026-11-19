function a(){const p=['_assignEvents','settings','height','properties','3cNyiwa','draggable','style','300px','2707032NTrdDk','getWebuiObject','defaultWidth','stretch','5862340eOCpco','createElement','_readFolder','screen','_filter','1307336cddZXk','959952iIpRCe','appendChild','18KQgOZD','265910iiJugZ','define','name','width','200px','6kndmhj','_root','ondragstart','dataTransfer','getObjectNames','template','819638MFrUQb','ready','createTextNode','1534175JcLnik','title','stringify'];a=function(){return p;};return a();}const l=b;function b(c,d){c=c-0x11d;const e=a();let f=e[c];return f;}(function(c,d){const k=b,e=c();while(!![]){try{const f=-parseInt(k(0x130))/0x1+parseInt(k(0x13b))/0x2+-parseInt(k(0x11f))/0x3*(parseInt(k(0x12c))/0x4)+-parseInt(k(0x13e))/0x5+-parseInt(k(0x135))/0x6*(parseInt(k(0x12d))/0x7)+-parseInt(k(0x123))/0x8+parseInt(k(0x12f))/0x9*(parseInt(k(0x127))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x32959));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';import{ScreenViewer}from'../runtime/ScreenViewer.js';export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static [l(0x13a)]=html`
        <div id="root"></div>
    `;static [l(0x121)]=css`
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
        `;static ['is']='iobroker-webui-screens-view';static [l(0x11e)]={};['_root'];[l(0x12b)];constructor(){super(),super['_restoreCachedInititalValues'](),this['_root']=this['_getDomElement']('root');}async[l(0x13c)](){const m=l;this['_parseAttributesToProperties'](),this[m(0x141)]();for await(const c of this['_readFolder']()){const d=document[m(0x128)]('div'),e=new ScreenViewer();e[m(0x126)]='fill';const g=await iobrokerHandler[m(0x124)]('screen',c['name']);if(!g[m(0x142)]?.[m(0x133)])e['stretchWidth']=0x780;if(!g[m(0x142)]?.['height'])e['stretchHeight']=0x438;e['screenName']=c['name'],d[m(0x13f)]=c['name'],d[m(0x120)]=!![],d[m(0x12e)](e),d[m(0x12e)](document[m(0x13d)](c[m(0x132)])),d[m(0x137)]=async h=>{const n=m,i=c[n(0x132)],j={'tag':'iobroker-webui-screen-viewer','defaultAttributes':{'screen-name':i},'defaultWidth':n(0x122),'defaultHeight':n(0x134)};if(g?.[n(0x142)]?.['width'])j[n(0x125)]=g[n(0x142)][n(0x133)];if(g?.[n(0x142)]?.[n(0x11d)])j['defaultHeight']=g['settings'][n(0x11d)];return h['dataTransfer']['setData'](dragDropFormatNameElementDefinition,JSON[n(0x140)](j)),h[n(0x138)]['effectAllowed']='all',h[n(0x138)]['dropEffect']='copy',!![];},this[m(0x136)]['appendChild'](d);}}async*['_readFolder'](c=''){const o=l,e=await iobrokerHandler[o(0x139)](o(0x12a),c);for(const h of e){if(this[o(0x12b)]){if(!h['match'](this['_filter']))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler['getSubFolders'](o(0x12a),c);for(const i of g){yield*this[o(0x129)](c+'/'+i);}}}customElements[l(0x131)](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);
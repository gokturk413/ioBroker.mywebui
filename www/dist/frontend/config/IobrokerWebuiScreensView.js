const l=b;(function(c,d){const k=b,e=c();while(!![]){try{const f=parseInt(k(0x125))/0x1*(-parseInt(k(0x11d))/0x2)+parseInt(k(0x121))/0x3*(-parseInt(k(0x13a))/0x4)+-parseInt(k(0x131))/0x5+-parseInt(k(0x126))/0x6+-parseInt(k(0x12f))/0x7+-parseInt(k(0x12e))/0x8*(parseInt(k(0x124))/0x9)+parseInt(k(0x134))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa30af));function b(c,d){c=c-0x11a;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';function a(){const q=['12kDiJqD','all','_assignEvents','screen','appendChild','dataTransfer','41480cAeBeM','title','_root','getSubFolders','977421mSvJzH','style','stretch','191790syUfpG','18MhTJHJ','4968834Xsyoen','height','width','root','_restoreCachedInititalValues','properties','name','stretchHeight','80GuQUWa','6236965wMWMwW','dropEffect','2728855Minwwb','_filter','300px','44965690XhmZlv','stringify','settings','_readFolder','createTextNode','div'];a=function(){return q;};return a();}import{ScreenViewer}from'../runtime/ScreenViewer.js';export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
        <div id="root"></div>
    `;static [l(0x122)]=css`
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
        `;static ['is']='iobroker-webui-screens-view';static [l(0x12b)]={};['_root'];[l(0x132)];constructor(){const m=l;super(),super[m(0x12a)](),this['_root']=this['_getDomElement'](m(0x129));}async['ready'](){const n=l;this['_parseAttributesToProperties'](),this[n(0x13c)]();for await(const c of this['_readFolder']()){const d=document['createElement'](n(0x139)),e=new ScreenViewer();e[n(0x123)]='fill';const g=await iobrokerHandler['getWebuiObject']('screen',c['name']);if(!g['settings']?.[n(0x128)])e['stretchWidth']=0x780;if(!g[n(0x136)]?.['height'])e[n(0x12d)]=0x438;e['screenName']=c[n(0x12c)],d[n(0x11e)]=c['name'],d['draggable']=!![],d[n(0x11b)](e),d[n(0x11b)](document[n(0x138)](c['name'])),d['ondragstart']=async h=>{const o=n,i=c['name'],j={'tag':'iobroker-webui-screen-viewer','defaultAttributes':{'screen-name':i},'defaultWidth':o(0x133),'defaultHeight':'200px'};if(g?.['settings']?.['width'])j['defaultWidth']=g[o(0x136)]['width'];if(g?.['settings']?.['height'])j['defaultHeight']=g['settings'][o(0x127)];return h['dataTransfer']['setData'](dragDropFormatNameElementDefinition,JSON[o(0x135)](j)),h[o(0x11c)]['effectAllowed']=o(0x13b),h['dataTransfer'][o(0x130)]='copy',!![];},this[n(0x11f)]['appendChild'](d);}}async*['_readFolder'](c=''){const p=l,e=await iobrokerHandler['getObjectNames'](p(0x11a),c);for(const h of e){if(this[p(0x132)]){if(!h['match'](this[p(0x132)]))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler[p(0x120)](p(0x11a),c);for(const i of g){yield*this[p(0x137)](c+'/'+i);}}}customElements['define'](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);
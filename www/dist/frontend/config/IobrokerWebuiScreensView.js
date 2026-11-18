const l=b;function a(){const q=['dropEffect','49287dZeKvo','_assignEvents','all','getSubFolders','settings','name','style','2373831Nirrjc','stretchWidth','height','defaultWidth','3460390jDRbVv','ready','defaultHeight','_filter','_readFolder','322773cDRHSx','template','882JwgCPW','_getDomElement','define','div','root','stringify','2205oJxCAG','dataTransfer','11lVjCsU','2172VDRoaq','width','729455YWeTQY','stretchHeight','20MPZqps','copy','36863400rMtcAg','_parseAttributesToProperties','8LzlyLR','_root'];a=function(){return q;};return a();}(function(c,d){const k=b,e=c();while(!![]){try{const f=parseInt(k(0x13e))/0x1+-parseInt(k(0x140))/0x2*(-parseInt(k(0x157))/0x3)+parseInt(k(0x13c))/0x4*(parseInt(k(0x15f))/0x5)+-parseInt(k(0x159))/0x6*(-parseInt(k(0x147))/0x7)+parseInt(k(0x144))/0x8*(parseInt(k(0x14e))/0x9)+parseInt(k(0x152))/0xa*(parseInt(k(0x161))/0xb)+-parseInt(k(0x142))/0xc;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x96ce7));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';import{ScreenViewer}from'../runtime/ScreenViewer.js';function b(c,d){c=c-0x13c;const e=a();let f=e[c];return f;}export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static [l(0x158)]=html`
        <div id="root"></div>
    `;static [l(0x14d)]=css`
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
        `;static ['is']='iobroker-webui-screens-view';static ['properties']={};[l(0x145)];['_filter'];constructor(){const m=l;super(),super['_restoreCachedInititalValues'](),this[m(0x145)]=this[m(0x15a)](m(0x15d));}async[l(0x153)](){const n=l;this[n(0x143)](),this[n(0x148)]();for await(const c of this[n(0x156)]()){const d=document['createElement'](n(0x15c)),e=new ScreenViewer();e['stretch']='fill';const g=await iobrokerHandler['getWebuiObject']('screen',c['name']);if(!g['settings']?.[n(0x13d)])e[n(0x14f)]=0x780;if(!g['settings']?.['height'])e[n(0x13f)]=0x438;e['screenName']=c[n(0x14c)],d['title']=c['name'],d['draggable']=!![],d['appendChild'](e),d['appendChild'](document['createTextNode'](c[n(0x14c)])),d['ondragstart']=async h=>{const o=n,i=c['name'],j={'tag':'iobroker-webui-screen-viewer','defaultAttributes':{'screen-name':i},'defaultWidth':'300px','defaultHeight':'200px'};if(g?.[o(0x14b)]?.['width'])j[o(0x151)]=g[o(0x14b)]['width'];if(g?.['settings']?.['height'])j[o(0x154)]=g[o(0x14b)][o(0x150)];return h[o(0x160)]['setData'](dragDropFormatNameElementDefinition,JSON[o(0x15e)](j)),h[o(0x160)]['effectAllowed']=o(0x149),h[o(0x160)][o(0x146)]=o(0x141),!![];},this[n(0x145)]['appendChild'](d);}}async*['_readFolder'](c=''){const p=l,e=await iobrokerHandler['getObjectNames']('screen',c);for(const h of e){if(this[p(0x155)]){if(!h['match'](this['_filter']))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler[p(0x14a)]('screen',c);for(const i of g){yield*this['_readFolder'](c+'/'+i);}}}customElements[l(0x15b)](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);
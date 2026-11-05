const l=b;(function(c,d){const k=b,e=c();while(!![]){try{const f=parseInt(k(0x12b))/0x1*(-parseInt(k(0x143))/0x2)+-parseInt(k(0x145))/0x3+-parseInt(k(0x136))/0x4*(-parseInt(k(0x131))/0x5)+parseInt(k(0x12d))/0x6*(parseInt(k(0x13a))/0x7)+parseInt(k(0x135))/0x8+parseInt(k(0x132))/0x9*(-parseInt(k(0x130))/0xa)+parseInt(k(0x127))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5dfe1));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';function a(){const q=['18OyzlcQ','all','template','26784JxBqjN','180eBcpvc','createElement','stretchHeight','div','2703659vwdjoI','defaultWidth','_root','_filter','iobroker-webui-screen-viewer','draggable','createTextNode','setData','define','328toAKnX','title','229320rMEICy','copy','_readFolder','appendChild','dataTransfer','_assignEvents','getObjectNames','stretchWidth','3304400pITBso','_restoreCachedInititalValues','name','properties','2052ONBJVu','screen','6OVMFSI','200px','width','3263970OnDbrr','84530KQbeBg'];a=function(){return q;};return a();}import{ScreenViewer}from'../runtime/ScreenViewer.js';function b(c,d){c=c-0x126;const e=a();let f=e[c];return f;}export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static [l(0x134)]=html`
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
        `;static ['is']='iobroker-webui-screens-view';static [l(0x12a)]={};[l(0x13c)];[l(0x13d)];constructor(){const m=l;super(),super[m(0x128)](),this['_root']=this['_getDomElement']('root');}async['ready'](){const n=l;this['_parseAttributesToProperties'](),this[n(0x14a)]();for await(const c of this[n(0x147)]()){const d=document[n(0x137)](n(0x139)),e=new ScreenViewer();e['stretch']='fill';const g=await iobrokerHandler['getWebuiObject']('screen',c['name']);if(!g['settings']?.[n(0x12f)])e[n(0x126)]=0x780;if(!g['settings']?.['height'])e[n(0x138)]=0x438;e['screenName']=c['name'],d[n(0x144)]=c['name'],d[n(0x13f)]=!![],d[n(0x148)](e),d['appendChild'](document[n(0x140)](c[n(0x129)])),d['ondragstart']=async h=>{const o=n,i=c['name'],j={'tag':o(0x13e),'defaultAttributes':{'screen-name':i},'defaultWidth':'300px','defaultHeight':o(0x12e)};if(g?.['settings']?.['width'])j[o(0x13b)]=g['settings']['width'];if(g?.['settings']?.['height'])j['defaultHeight']=g['settings']['height'];return h['dataTransfer'][o(0x141)](dragDropFormatNameElementDefinition,JSON['stringify'](j)),h['dataTransfer']['effectAllowed']=o(0x133),h[o(0x149)]['dropEffect']=o(0x146),!![];},this[n(0x13c)][n(0x148)](d);}}async*['_readFolder'](c=''){const p=l,e=await iobrokerHandler[p(0x14b)](p(0x12c),c);for(const h of e){if(this['_filter']){if(!h['match'](this['_filter']))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler['getSubFolders'](p(0x12c),c);for(const i of g){yield*this[p(0x147)](c+'/'+i);}}}customElements[l(0x142)](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);
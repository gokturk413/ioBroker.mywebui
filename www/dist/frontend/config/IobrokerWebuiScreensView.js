const l=b;(function(c,d){const k=b,e=c();while(!![]){try{const f=parseInt(k(0x121))/0x1+parseInt(k(0x12b))/0x2+parseInt(k(0x129))/0x3+-parseInt(k(0x12f))/0x4+parseInt(k(0x11e))/0x5*(parseInt(k(0x125))/0x6)+-parseInt(k(0x113))/0x7*(-parseInt(k(0x11a))/0x8)+parseInt(k(0x12a))/0x9*(-parseInt(k(0x11f))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x21c5b));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';function b(c,d){c=c-0x113;const e=a();let f=e[c];return f;}import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';function a(){const q=['root','name','30oTCRuh','_filter','defaultHeight','dataTransfer','32922SdbNLk','5148jIZpXt','59544ORLTKU','_parseAttributesToProperties','getSubFolders','ready','305696unHLOd','screen','defaultWidth','getWebuiObject','_restoreCachedInititalValues','637987wWjybe','copy','_readFolder','settings','stretchHeight','width','appendChild','8fizmBV','fill','height','300px','89560jHZtSb','1010wdwbru','ondragstart','51080SLeyJL','_assignEvents'];a=function(){return q;};return a();}import{ScreenViewer}from'../runtime/ScreenViewer.js';export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
        `;static ['is']='iobroker-webui-screens-view';static ['properties']={};['_root'];[l(0x126)];constructor(){const m=l;super(),super[m(0x133)](),this['_root']=this['_getDomElement'](m(0x123));}async[l(0x12e)](){const n=l;this[n(0x12c)](),this[n(0x122)]();for await(const c of this['_readFolder']()){const d=document['createElement']('div'),e=new ScreenViewer();e['stretch']=n(0x11b);const g=await iobrokerHandler[n(0x132)]('screen',c[n(0x124)]);if(!g['settings']?.[n(0x118)])e['stretchWidth']=0x780;if(!g[n(0x116)]?.['height'])e[n(0x117)]=0x438;e['screenName']=c[n(0x124)],d['title']=c[n(0x124)],d['draggable']=!![],d[n(0x119)](e),d['appendChild'](document['createTextNode'](c['name'])),d[n(0x120)]=async h=>{const o=n,i=c[o(0x124)],j={'tag':'iobroker-webui-screen-viewer','defaultAttributes':{'screen-name':i},'defaultWidth':o(0x11d),'defaultHeight':'200px'};if(g?.[o(0x116)]?.['width'])j[o(0x131)]=g[o(0x116)][o(0x118)];if(g?.[o(0x116)]?.['height'])j[o(0x127)]=g['settings'][o(0x11c)];return h['dataTransfer']['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](j)),h['dataTransfer']['effectAllowed']='all',h[o(0x128)]['dropEffect']=o(0x114),!![];},this['_root'][n(0x119)](d);}}async*[l(0x115)](c=''){const p=l,e=await iobrokerHandler['getObjectNames'](p(0x130),c);for(const h of e){if(this[p(0x126)]){if(!h['match'](this['_filter']))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler[p(0x12d)](p(0x130),c);for(const i of g){yield*this['_readFolder'](c+'/'+i);}}}customElements['define'](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);
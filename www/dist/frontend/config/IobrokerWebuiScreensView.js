const l=b;(function(c,d){const k=b,e=c();while(!![]){try{const f=-parseInt(k(0x192))/0x1*(-parseInt(k(0x17a))/0x2)+parseInt(k(0x182))/0x3+parseInt(k(0x195))/0x4*(parseInt(k(0x178))/0x5)+parseInt(k(0x18d))/0x6*(-parseInt(k(0x188))/0x7)+parseInt(k(0x193))/0x8+-parseInt(k(0x187))/0x9*(parseInt(k(0x184))/0xa)+parseInt(k(0x185))/0xb*(-parseInt(k(0x17f))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xbc008));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';function b(c,d){c=c-0x171;const e=a();let f=e[c];return f;}import{ScreenViewer}from'../runtime/ScreenViewer.js';export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
        `;static ['is']='iobroker-webui-screens-view';static ['properties']={};[l(0x196)];[l(0x190)];constructor(){const m=l;super(),super['_restoreCachedInititalValues'](),this[m(0x196)]=this[m(0x18c)](m(0x173));}async['ready'](){const n=l;this[n(0x186)](),this['_assignEvents']();for await(const c of this['_readFolder']()){const d=document['createElement'](n(0x183)),e=new ScreenViewer();e[n(0x174)]='fill';const g=await iobrokerHandler[n(0x171)](n(0x197),c[n(0x18a)]);if(!g[n(0x17b)]?.[n(0x172)])e[n(0x17c)]=0x780;if(!g['settings']?.[n(0x176)])e['stretchHeight']=0x438;e['screenName']=c[n(0x18a)],d[n(0x180)]=c[n(0x18a)],d['draggable']=!![],d[n(0x18f)](e),d[n(0x18f)](document[n(0x179)](c['name'])),d[n(0x18e)]=async h=>{const o=n,i=c['name'],j={'tag':o(0x17d),'defaultAttributes':{'screen-name':i},'defaultWidth':'300px','defaultHeight':o(0x191)};if(g?.['settings']?.['width'])j['defaultWidth']=g['settings']['width'];if(g?.['settings']?.['height'])j[o(0x17e)]=g['settings'][o(0x176)];return h['dataTransfer'][o(0x175)](dragDropFormatNameElementDefinition,JSON[o(0x194)](j)),h['dataTransfer']['effectAllowed']='all',h['dataTransfer'][o(0x18b)]='copy',!![];},this[n(0x196)][n(0x18f)](d);}}async*[l(0x181)](c=''){const p=l,e=await iobrokerHandler[p(0x177)](p(0x197),c);for(const h of e){if(this['_filter']){if(!h['match'](this['_filter']))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler[p(0x189)]('screen',c);for(const i of g){yield*this[p(0x181)](c+'/'+i);}}}customElements[l(0x198)](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);function a(){const q=['10eLKMJR','26037YMiCdX','_parseAttributesToProperties','13753683skzhRn','154MQqHvT','getSubFolders','name','dropEffect','_getDomElement','117462SQAFWj','ondragstart','appendChild','_filter','200px','22ESxCjC','10977320XrwTDU','stringify','830540WOnLHo','_root','screen','define','getWebuiObject','width','root','stretch','setData','height','getObjectNames','5cPCaJU','createTextNode','78250RAJJXh','settings','stretchWidth','iobroker-webui-screen-viewer','defaultHeight','5760hxdoEk','title','_readFolder','4273641KvQbyu','div'];a=function(){return q;};return a();}
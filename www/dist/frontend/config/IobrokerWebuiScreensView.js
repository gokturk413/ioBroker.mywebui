const l=b;function a(){const q=['stretch','11922sJpWeM','168385usPpcn','_readFolder','style','_assignEvents','appendChild','_getDomElement','iobroker-webui-screens-view','createElement','match','dataTransfer','490meuYNh','7236KWhtnP','ondragstart','settings','properties','200px','stringify','12zCaJHt','height','_filter','298160jCgPcR','1QaldBH','name','screenName','title','706977frfjOO','copy','400AsMZIn','width','1184806apXBHy','264JeUnqD','508183RDhMAU','14839PLoWww','div','20eNHQEM','_root','screen'];a=function(){return q;};return a();}function b(c,d){c=c-0x112;const e=a();let f=e[c];return f;}(function(c,d){const k=b,e=c();while(!![]){try{const f=parseInt(k(0x119))/0x1*(-parseInt(k(0x121))/0x2)+-parseInt(k(0x115))/0x3*(parseInt(k(0x118))/0x4)+-parseInt(k(0x11f))/0x5*(parseInt(k(0x12a))/0x6)+-parseInt(k(0x12b))/0x7*(-parseInt(k(0x122))/0x8)+-parseInt(k(0x11d))/0x9*(-parseInt(k(0x126))/0xa)+parseInt(k(0x124))/0xb*(-parseInt(k(0x136))/0xc)+parseInt(k(0x123))/0xd*(parseInt(k(0x135))/0xe);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x6f5c8));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';import{ScreenViewer}from'../runtime/ScreenViewer.js';export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
        <div id="root"></div>
    `;static [l(0x12d)]=css`
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
        `;static ['is']=l(0x131);static [l(0x112)]={};[l(0x127)];[l(0x117)];constructor(){const m=l;super(),super['_restoreCachedInititalValues'](),this[m(0x127)]=this[m(0x130)]('root');}async['ready'](){const n=l;this['_parseAttributesToProperties'](),this[n(0x12e)]();for await(const c of this[n(0x12c)]()){const d=document[n(0x132)](n(0x125)),e=new ScreenViewer();e[n(0x129)]='fill';const g=await iobrokerHandler['getWebuiObject'](n(0x128),c['name']);if(!g[n(0x138)]?.[n(0x120)])e['stretchWidth']=0x780;if(!g[n(0x138)]?.[n(0x116)])e['stretchHeight']=0x438;e[n(0x11b)]=c[n(0x11a)],d[n(0x11c)]=c['name'],d['draggable']=!![],d[n(0x12f)](e),d[n(0x12f)](document['createTextNode'](c[n(0x11a)])),d[n(0x137)]=async h=>{const o=n,i=c['name'],j={'tag':'iobroker-webui-screen-viewer','defaultAttributes':{'screen-name':i},'defaultWidth':'300px','defaultHeight':o(0x113)};if(g?.[o(0x138)]?.[o(0x120)])j['defaultWidth']=g['settings'][o(0x120)];if(g?.[o(0x138)]?.[o(0x116)])j['defaultHeight']=g[o(0x138)]['height'];return h[o(0x134)]['setData'](dragDropFormatNameElementDefinition,JSON[o(0x114)](j)),h[o(0x134)]['effectAllowed']='all',h['dataTransfer']['dropEffect']=o(0x11e),!![];},this[n(0x127)][n(0x12f)](d);}}async*['_readFolder'](c=''){const p=l,e=await iobrokerHandler['getObjectNames']('screen',c);for(const h of e){if(this['_filter']){if(!h[p(0x133)](this['_filter']))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler['getSubFolders'](p(0x128),c);for(const i of g){yield*this['_readFolder'](c+'/'+i);}}}customElements['define'](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);
const l=b;function a(){const q=['200744binkzi','15rmxzhU','ready','188TNaZFM','stretchWidth','define','getSubFolders','dropEffect','style','screen','name','3019530PJkzFs','_filter','iobroker-webui-screen-viewer','_root','stretchHeight','iobroker-webui-screens-view','28100DFlJOC','div','328878tFyVAA','createElement','dataTransfer','appendChild','182ErdaRo','root','588daPORz','300px','364091caGImF','getWebuiObject','419714GwYdJg','screenName','settings','all','63RPfwFg','match','1331420BxBjdj','width'];a=function(){return q;};return a();}(function(c,d){const k=b,e=c();while(!![]){try{const f=-parseInt(k(0x15d))/0x1+parseInt(k(0x15f))/0x2*(-parseInt(k(0x168))/0x3)+parseInt(k(0x16a))/0x4*(parseInt(k(0x178))/0x5)+parseInt(k(0x172))/0x6+parseInt(k(0x159))/0x7*(parseInt(k(0x167))/0x8)+-parseInt(k(0x163))/0x9*(parseInt(k(0x165))/0xa)+parseInt(k(0x17a))/0xb*(parseInt(k(0x15b))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x83b35));function b(c,d){c=c-0x158;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';import{ScreenViewer}from'../runtime/ScreenViewer.js';export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
        <div id="root"></div>
    `;static [l(0x16f)]=css`
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
        `;static ['is']=l(0x177);static ['properties']={};[l(0x175)];['_filter'];constructor(){const m=l;super(),super['_restoreCachedInititalValues'](),this['_root']=this['_getDomElement'](m(0x15a));}async[l(0x169)](){const n=l;this['_parseAttributesToProperties'](),this['_assignEvents']();for await(const c of this['_readFolder']()){const d=document[n(0x17b)](n(0x179)),e=new ScreenViewer();e['stretch']='fill';const g=await iobrokerHandler[n(0x15e)](n(0x170),c[n(0x171)]);if(!g['settings']?.[n(0x166)])e[n(0x16b)]=0x780;if(!g[n(0x161)]?.['height'])e[n(0x176)]=0x438;e[n(0x160)]=c['name'],d['title']=c['name'],d['draggable']=!![],d[n(0x158)](e),d[n(0x158)](document['createTextNode'](c[n(0x171)])),d['ondragstart']=async h=>{const o=n,i=c['name'],j={'tag':o(0x174),'defaultAttributes':{'screen-name':i},'defaultWidth':o(0x15c),'defaultHeight':'200px'};if(g?.['settings']?.[o(0x166)])j['defaultWidth']=g['settings'][o(0x166)];if(g?.['settings']?.['height'])j['defaultHeight']=g[o(0x161)]['height'];return h['dataTransfer']['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](j)),h[o(0x17c)]['effectAllowed']=o(0x162),h[o(0x17c)][o(0x16e)]='copy',!![];},this['_root'][n(0x158)](d);}}async*['_readFolder'](c=''){const p=l,e=await iobrokerHandler['getObjectNames']('screen',c);for(const h of e){if(this['_filter']){if(!h[p(0x164)](this[p(0x173)]))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler[p(0x16d)]('screen',c);for(const i of g){yield*this['_readFolder'](c+'/'+i);}}}customElements[l(0x16c)](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);
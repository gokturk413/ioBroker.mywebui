const l=b;function b(c,d){c=c-0x93;const e=a();let f=e[c];return f;}(function(c,d){const k=b,e=c();while(!![]){try{const f=-parseInt(k(0xb8))/0x1*(parseInt(k(0x96))/0x2)+parseInt(k(0xaa))/0x3*(parseInt(k(0xac))/0x4)+-parseInt(k(0xa9))/0x5+parseInt(k(0xb6))/0x6+parseInt(k(0x98))/0x7+parseInt(k(0xa8))/0x8+parseInt(k(0xb3))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd5a21));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';function a(){const q=['stretchHeight','name','7023024GxOVTC','6258915YHTtKG','3wotDmY','draggable','4810504mikSYk','settings','match','ondragstart','width','screenName','appendChild','9227493GzZeSe','_root','stretch','1053894ZEDGiS','effectAllowed','1YVhVpN','stretchWidth','_restoreCachedInititalValues','_filter','_readFolder','copy','2852236uAaiFT','getObjectNames','1900584beolQZ','all','height','style','defaultHeight','300px','root','iobroker-webui-screen-viewer','fill','screen','getSubFolders','title','200px','iobroker-webui-screens-view'];a=function(){return q;};return a();}import{ScreenViewer}from'../runtime/ScreenViewer.js';export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
        <div id="root"></div>
    `;static [l(0x9b)]=css`
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
        `;static ['is']=l(0xa5);static ['properties']={};['_root'];['_filter'];constructor(){const m=l;super(),super[m(0xba)](),this[m(0xb4)]=this['_getDomElement'](m(0x9e));}async['ready'](){const n=l;this['_parseAttributesToProperties'](),this['_assignEvents']();for await(const c of this[n(0x94)]()){const d=document['createElement']('div'),e=new ScreenViewer();e[n(0xb5)]=n(0xa0);const g=await iobrokerHandler['getWebuiObject']('screen',c['name']);if(!g['settings']?.[n(0xb0)])e[n(0xb9)]=0x780;if(!g['settings']?.[n(0x9a)])e[n(0xa6)]=0x438;e[n(0xb1)]=c['name'],d[n(0xa3)]=c[n(0xa7)],d[n(0xab)]=!![],d['appendChild'](e),d[n(0xb2)](document['createTextNode'](c['name'])),d[n(0xaf)]=async h=>{const o=n,i=c[o(0xa7)],j={'tag':o(0x9f),'defaultAttributes':{'screen-name':i},'defaultWidth':o(0x9d),'defaultHeight':o(0xa4)};if(g?.[o(0xad)]?.['width'])j['defaultWidth']=g[o(0xad)][o(0xb0)];if(g?.['settings']?.[o(0x9a)])j[o(0x9c)]=g[o(0xad)]['height'];return h['dataTransfer']['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](j)),h['dataTransfer'][o(0xb7)]=o(0x99),h['dataTransfer']['dropEffect']=o(0x95),!![];},this['_root']['appendChild'](d);}}async*[l(0x94)](c=''){const p=l,e=await iobrokerHandler[p(0x97)]('screen',c);for(const h of e){if(this[p(0x93)]){if(!h[p(0xae)](this['_filter']))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler[p(0xa2)](p(0xa1),c);for(const i of g){yield*this['_readFolder'](c+'/'+i);}}}customElements['define'](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);
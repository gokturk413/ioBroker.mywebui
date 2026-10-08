const l=b;function b(c,d){c=c-0xa8;const e=a();let f=e[c];return f;}function a(){const q=['_root','properties','_parseAttributesToProperties','screenName','_readFolder','6uvJGeN','screen','stretch','root','settings','_getDomElement','4ahOtcS','30246ziNjEB','300px','appendChild','_assignEvents','draggable','effectAllowed','ondragstart','all','8sZjuId','name','match','dataTransfer','2031920OOQHNf','title','style','width','69616CuSGUo','98972oJkJxm','fill','210TYVXxf','iobroker-webui-screen-viewer','createElement','93267XkUKNl','2073600NEzfot','1583729LntBog','_filter','dropEffect'];a=function(){return q;};return a();}(function(c,d){const k=b,e=c();while(!![]){try{const f=parseInt(k(0xc3))/0x1*(parseInt(k(0xae))/0x2)+parseInt(k(0xbd))/0x3*(-parseInt(k(0xad))/0x4)+-parseInt(k(0xb0))/0x5*(-parseInt(k(0xc4))/0x6)+parseInt(k(0xb5))/0x7+-parseInt(k(0xcc))/0x8*(parseInt(k(0xb3))/0x9)+-parseInt(k(0xb4))/0xa+-parseInt(k(0xa9))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x30806));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';import{ScreenViewer}from'../runtime/ScreenViewer.js';export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
        <div id="root"></div>
    `;static [l(0xab)]=css`
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
        `;static ['is']='iobroker-webui-screens-view';static [l(0xb9)]={};[l(0xb8)];['_filter'];constructor(){const m=l;super(),super['_restoreCachedInititalValues'](),this['_root']=this[m(0xc2)](m(0xc0));}async['ready'](){const n=l;this[n(0xba)](),this[n(0xc7)]();for await(const c of this[n(0xbc)]()){const d=document[n(0xb2)]('div'),e=new ScreenViewer();e[n(0xbf)]=n(0xaf);const g=await iobrokerHandler['getWebuiObject'](n(0xbe),c[n(0xcd)]);if(!g[n(0xc1)]?.[n(0xac)])e['stretchWidth']=0x780;if(!g[n(0xc1)]?.['height'])e['stretchHeight']=0x438;e[n(0xbb)]=c[n(0xcd)],d[n(0xaa)]=c[n(0xcd)],d[n(0xc8)]=!![],d['appendChild'](e),d[n(0xc6)](document['createTextNode'](c['name'])),d[n(0xca)]=async h=>{const o=n,i=c[o(0xcd)],j={'tag':o(0xb1),'defaultAttributes':{'screen-name':i},'defaultWidth':o(0xc5),'defaultHeight':'200px'};if(g?.['settings']?.[o(0xac)])j['defaultWidth']=g[o(0xc1)]['width'];if(g?.[o(0xc1)]?.['height'])j['defaultHeight']=g['settings']['height'];return h[o(0xa8)]['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](j)),h['dataTransfer'][o(0xc9)]=o(0xcb),h[o(0xa8)][o(0xb7)]='copy',!![];},this['_root'][n(0xc6)](d);}}async*[l(0xbc)](c=''){const p=l,e=await iobrokerHandler['getObjectNames']('screen',c);for(const h of e){if(this[p(0xb6)]){if(!h[p(0xce)](this['_filter']))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler['getSubFolders']('screen',c);for(const i of g){yield*this[p(0xbc)](c+'/'+i);}}}customElements['define'](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);
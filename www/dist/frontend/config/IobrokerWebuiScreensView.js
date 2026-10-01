const l=b;function b(c,d){c=c-0x1e3;const e=a();let f=e[c];return f;}(function(c,d){const k=b,e=c();while(!![]){try{const f=-parseInt(k(0x1f6))/0x1*(parseInt(k(0x1f5))/0x2)+-parseInt(k(0x206))/0x3*(-parseInt(k(0x1f0))/0x4)+-parseInt(k(0x1f4))/0x5*(-parseInt(k(0x1e8))/0x6)+-parseInt(k(0x1e5))/0x7*(parseInt(k(0x1f3))/0x8)+-parseInt(k(0x1e7))/0x9+parseInt(k(0x1ee))/0xa*(-parseInt(k(0x203))/0xb)+parseInt(k(0x1fa))/0xc*(parseInt(k(0x1f8))/0xd);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2d132));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';function a(){const q=['screen','552oOWUYx','name','_getDomElement','template','height','_filter','getObjectNames','_restoreCachedInititalValues','stretchHeight','11HaiSMW','createTextNode','getSubFolders','4167SRHaCm','defaultHeight','settings','77YamQzM','copy','2863215DqxLGK','2724USeDby','_readFolder','fill','stretch','200px','_root','901680OfLvgH','iobroker-webui-screen-viewer','664zjaezO','_parseAttributesToProperties','title','165944cTxrKW','1490bHvSCN','63284vQDfpd','11NyichU','appendChild','227019myIRlw'];a=function(){return q;};return a();}import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';import{ScreenViewer}from'../runtime/ScreenViewer.js';export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static [l(0x1fd)]=html`
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
        `;static ['is']='iobroker-webui-screens-view';static ['properties']={};[l(0x1ed)];['_filter'];constructor(){const m=l;super(),super[m(0x201)](),this[m(0x1ed)]=this[m(0x1fc)]('root');}async['ready'](){const n=l;this[n(0x1f1)](),this['_assignEvents']();for await(const c of this[n(0x1e9)]()){const d=document['createElement']('div'),e=new ScreenViewer();e[n(0x1eb)]=n(0x1ea);const g=await iobrokerHandler['getWebuiObject'](n(0x1f9),c['name']);if(!g['settings']?.['width'])e['stretchWidth']=0x780;if(!g['settings']?.['height'])e[n(0x202)]=0x438;e['screenName']=c['name'],d[n(0x1f2)]=c['name'],d['draggable']=!![],d[n(0x1f7)](e),d[n(0x1f7)](document[n(0x204)](c[n(0x1fb)])),d['ondragstart']=async h=>{const o=n,i=c['name'],j={'tag':o(0x1ef),'defaultAttributes':{'screen-name':i},'defaultWidth':'300px','defaultHeight':o(0x1ec)};if(g?.[o(0x1e4)]?.['width'])j['defaultWidth']=g['settings']['width'];if(g?.['settings']?.[o(0x1fe)])j[o(0x1e3)]=g['settings']['height'];return h['dataTransfer']['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](j)),h['dataTransfer']['effectAllowed']='all',h['dataTransfer']['dropEffect']=o(0x1e6),!![];},this[n(0x1ed)][n(0x1f7)](d);}}async*['_readFolder'](c=''){const p=l,e=await iobrokerHandler[p(0x200)](p(0x1f9),c);for(const h of e){if(this[p(0x1ff)]){if(!h['match'](this['_filter']))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler[p(0x205)]('screen',c);for(const i of g){yield*this[p(0x1e9)](c+'/'+i);}}}customElements['define'](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);
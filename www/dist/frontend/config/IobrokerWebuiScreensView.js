function b(c,d){c=c-0xd9;const e=a();let f=e[c];return f;}const l=b;(function(c,d){const k=b,e=c();while(!![]){try{const f=parseInt(k(0xeb))/0x1*(parseInt(k(0xf4))/0x2)+-parseInt(k(0xf1))/0x3+-parseInt(k(0xef))/0x4*(parseInt(k(0xe5))/0x5)+parseInt(k(0xf6))/0x6+parseInt(k(0xdc))/0x7+-parseInt(k(0xdb))/0x8+parseInt(k(0xe3))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x66822));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';import{ScreenViewer}from'../runtime/ScreenViewer.js';function a(){const q=['copy','style','stretchHeight','3036120zArjIq','2896180ILPwLH','dataTransfer','height','properties','effectAllowed','dropEffect','settings','3422520RaZwdR','stringify','1930kjBbhb','root','300px','getWebuiObject','_readFolder','200px','1gzknjM','screen','defaultWidth','getSubFolders','1268ZLlVlt','template','2124849ULPVbj','createTextNode','name','1280822tVzxrw','width','1173618EmGVhI','appendChild','_restoreCachedInititalValues','ready','iobroker-webui-screens-view','iobroker-webui-screen-viewer','stretchWidth'];a=function(){return q;};return a();}export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static [l(0xf0)]=html`
        <div id="root"></div>
    `;static [l(0xd9)]=css`
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
        `;static ['is']=l(0xfa);static [l(0xdf)]={};['_root'];['_filter'];constructor(){const m=l;super(),super[m(0xf8)](),this['_root']=this['_getDomElement'](m(0xe6));}async[l(0xf9)](){const n=l;this['_parseAttributesToProperties'](),this['_assignEvents']();for await(const c of this['_readFolder']()){const d=document['createElement']('div'),e=new ScreenViewer();e['stretch']='fill';const g=await iobrokerHandler[n(0xe8)]('screen',c['name']);if(!g[n(0xe2)]?.[n(0xf5)])e[n(0xfc)]=0x780;if(!g[n(0xe2)]?.[n(0xde)])e[n(0xda)]=0x438;e['screenName']=c['name'],d['title']=c[n(0xf3)],d['draggable']=!![],d[n(0xf7)](e),d[n(0xf7)](document[n(0xf2)](c['name'])),d['ondragstart']=async h=>{const o=n,i=c['name'],j={'tag':o(0xfb),'defaultAttributes':{'screen-name':i},'defaultWidth':o(0xe7),'defaultHeight':o(0xea)};if(g?.['settings']?.[o(0xf5)])j[o(0xed)]=g[o(0xe2)]['width'];if(g?.['settings']?.[o(0xde)])j['defaultHeight']=g[o(0xe2)][o(0xde)];return h[o(0xdd)]['setData'](dragDropFormatNameElementDefinition,JSON[o(0xe4)](j)),h[o(0xdd)][o(0xe0)]='all',h['dataTransfer'][o(0xe1)]=o(0xfd),!![];},this['_root'][n(0xf7)](d);}}async*[l(0xe9)](c=''){const p=l,e=await iobrokerHandler['getObjectNames']('screen',c);for(const h of e){if(this['_filter']){if(!h['match'](this['_filter']))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler[p(0xee)](p(0xec),c);for(const i of g){yield*this[p(0xe9)](c+'/'+i);}}}customElements['define'](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);
const l=b;(function(c,d){const k=b,e=c();while(!![]){try{const f=-parseInt(k(0x181))/0x1+-parseInt(k(0x187))/0x2+-parseInt(k(0x17d))/0x3+parseInt(k(0x18b))/0x4+parseInt(k(0x186))/0x5+-parseInt(k(0x196))/0x6+parseInt(k(0x190))/0x7*(parseInt(k(0x195))/0x8);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x30ee5));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';import{ScreenViewer}from'../runtime/ScreenViewer.js';export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
        `;static ['is']='iobroker-webui-screens-view';static ['properties']={};[l(0x185)];['_filter'];constructor(){const m=l;super(),super[m(0x18c)](),this['_root']=this[m(0x183)]('root');}async['ready'](){const n=l;this['_parseAttributesToProperties'](),this[n(0x18d)]();for await(const c of this['_readFolder']()){const d=document['createElement']('div'),e=new ScreenViewer();e[n(0x193)]='fill';const g=await iobrokerHandler['getWebuiObject']('screen',c['name']);if(!g[n(0x189)]?.[n(0x192)])e['stretchWidth']=0x780;if(!g[n(0x189)]?.['height'])e['stretchHeight']=0x438;e['screenName']=c['name'],d['title']=c['name'],d[n(0x180)]=!![],d['appendChild'](e),d['appendChild'](document[n(0x18a)](c['name'])),d['ondragstart']=async h=>{const o=n,i=c[o(0x191)],j={'tag':o(0x182),'defaultAttributes':{'screen-name':i},'defaultWidth':'300px','defaultHeight':o(0x198)};if(g?.[o(0x189)]?.[o(0x192)])j['defaultWidth']=g[o(0x189)]['width'];if(g?.[o(0x189)]?.[o(0x194)])j[o(0x18e)]=g['settings']['height'];return h[o(0x17f)]['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](j)),h[o(0x17f)][o(0x17e)]='all',h[o(0x17f)]['dropEffect']=o(0x18f),!![];},this[n(0x185)]['appendChild'](d);}}async*['_readFolder'](c=''){const p=l,e=await iobrokerHandler[p(0x197)](p(0x184),c);for(const h of e){if(this[p(0x188)]){if(!h['match'](this[p(0x188)]))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler['getSubFolders']('screen',c);for(const i of g){yield*this['_readFolder'](c+'/'+i);}}}function a(){const q=['_assignEvents','defaultHeight','copy','1380008TwFuQP','name','width','stretch','height','16nsJehu','668658DdlqOG','getObjectNames','200px','791322wpishB','effectAllowed','dataTransfer','draggable','254908CdBfPQ','iobroker-webui-screen-viewer','_getDomElement','screen','_root','1539050YjznHk','395168jPatFy','_filter','settings','createTextNode','1304128zCtvqR','_restoreCachedInititalValues'];a=function(){return q;};return a();}function b(c,d){c=c-0x17d;const e=a();let f=e[c];return f;}customElements['define'](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);
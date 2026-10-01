const l=b;(function(c,d){const k=b,e=c();while(!![]){try{const f=-parseInt(k(0x141))/0x1*(parseInt(k(0x128))/0x2)+parseInt(k(0x12a))/0x3*(parseInt(k(0x125))/0x4)+-parseInt(k(0x12b))/0x5+-parseInt(k(0x126))/0x6*(parseInt(k(0x11f))/0x7)+parseInt(k(0x137))/0x8+parseInt(k(0x13b))/0x9+-parseInt(k(0x138))/0xa*(-parseInt(k(0x135))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x24105));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';function b(c,d){c=c-0x11f;const e=a();let f=e[c];return f;}import{ScreenViewer}from'../runtime/ScreenViewer.js';function a(){const q=['setData','8PxXqIf','599166tQRevD','_assignEvents','12594ZmfNeU','ondragstart','94011RDkxBv','1302645iFgIat','dropEffect','height','createElement','stringify','200px','div','settings','dataTransfer','ready','22MzMzrr','defaultHeight','2294320CstKvR','2176570NyUkxU','iobroker-webui-screens-view','width','278919bCiroJ','name','_getDomElement','template','_filter','fill','33IGBewM','stretchHeight','effectAllowed','14aKmjye','300px','appendChild','_readFolder','_root'];a=function(){return q;};return a();}export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static [l(0x13e)]=html`
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
        `;static ['is']=l(0x139);static ['properties']={};[l(0x123)];['_filter'];constructor(){const m=l;super(),super['_restoreCachedInititalValues'](),this[m(0x123)]=this[m(0x13d)]('root');}async[l(0x134)](){const n=l;this['_parseAttributesToProperties'](),this[n(0x127)]();for await(const c of this[n(0x122)]()){const d=document[n(0x12e)](n(0x131)),e=new ScreenViewer();e['stretch']=n(0x140);const g=await iobrokerHandler['getWebuiObject']('screen',c[n(0x13c)]);if(!g['settings']?.[n(0x13a)])e['stretchWidth']=0x780;if(!g[n(0x132)]?.['height'])e[n(0x142)]=0x438;e['screenName']=c['name'],d['title']=c[n(0x13c)],d['draggable']=!![],d['appendChild'](e),d[n(0x121)](document['createTextNode'](c['name'])),d[n(0x129)]=async h=>{const o=n,i=c['name'],j={'tag':'iobroker-webui-screen-viewer','defaultAttributes':{'screen-name':i},'defaultWidth':o(0x120),'defaultHeight':o(0x130)};if(g?.['settings']?.['width'])j['defaultWidth']=g[o(0x132)][o(0x13a)];if(g?.[o(0x132)]?.['height'])j[o(0x136)]=g['settings'][o(0x12d)];return h['dataTransfer'][o(0x124)](dragDropFormatNameElementDefinition,JSON[o(0x12f)](j)),h[o(0x133)][o(0x143)]='all',h[o(0x133)][o(0x12c)]='copy',!![];},this[n(0x123)]['appendChild'](d);}}async*[l(0x122)](c=''){const p=l,e=await iobrokerHandler['getObjectNames']('screen',c);for(const h of e){if(this[p(0x13f)]){if(!h['match'](this['_filter']))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler['getSubFolders']('screen',c);for(const i of g){yield*this['_readFolder'](c+'/'+i);}}}customElements['define'](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);
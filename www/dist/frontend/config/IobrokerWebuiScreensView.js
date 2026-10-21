const l=b;(function(c,d){const k=b,e=c();while(!![]){try{const f=-parseInt(k(0xe8))/0x1+-parseInt(k(0xf7))/0x2+parseInt(k(0xee))/0x3*(parseInt(k(0x104))/0x4)+parseInt(k(0x100))/0x5*(parseInt(k(0xfe))/0x6)+-parseInt(k(0xfb))/0x7*(-parseInt(k(0xdc))/0x8)+-parseInt(k(0xed))/0x9*(parseInt(k(0xe9))/0xa)+-parseInt(k(0xe7))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x61fef));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';function a(){const q=['399LuRvCd','width','_parseAttributesToProperties','screen','fill','settings','_filter','_readFolder','stretchWidth','533884qpeGSx','match','_root','ondragstart','35bPiYuo','appendChild','draggable','310476QWHgcN','style','40hbungE','defaultHeight','stretch','200px','18088cELAwG','710984gxMyac','createElement','title','stringify','height','div','iobroker-webui-screens-view','_restoreCachedInititalValues','effectAllowed','name','dataTransfer','1264824PwCyQu','195018JPpSjY','4814240bnWIIX','getSubFolders','dropEffect','getObjectNames','9NHHCcR'];a=function(){return q;};return a();}import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';import{ScreenViewer}from'../runtime/ScreenViewer.js';export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
        <div id="root"></div>
    `;static [l(0xff)]=css`
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
        `;static ['is']=l(0xe2);static ['properties']={};[l(0xf9)];[l(0xf4)];constructor(){const m=l;super(),super[m(0xe3)](),this['_root']=this['_getDomElement']('root');}async['ready'](){const n=l;this[n(0xf0)](),this['_assignEvents']();for await(const c of this[n(0xf5)]()){const d=document[n(0xdd)](n(0xe1)),e=new ScreenViewer();e[n(0x102)]=n(0xf2);const g=await iobrokerHandler['getWebuiObject'](n(0xf1),c[n(0xe5)]);if(!g['settings']?.[n(0xef)])e[n(0xf6)]=0x780;if(!g['settings']?.['height'])e['stretchHeight']=0x438;e['screenName']=c['name'],d[n(0xde)]=c[n(0xe5)],d[n(0xfd)]=!![],d[n(0xfc)](e),d['appendChild'](document['createTextNode'](c['name'])),d[n(0xfa)]=async h=>{const o=n,i=c['name'],j={'tag':'iobroker-webui-screen-viewer','defaultAttributes':{'screen-name':i},'defaultWidth':'300px','defaultHeight':o(0x103)};if(g?.[o(0xf3)]?.[o(0xef)])j['defaultWidth']=g['settings'][o(0xef)];if(g?.['settings']?.[o(0xe0)])j[o(0x101)]=g['settings']['height'];return h[o(0xe6)]['setData'](dragDropFormatNameElementDefinition,JSON[o(0xdf)](j)),h['dataTransfer'][o(0xe4)]='all',h[o(0xe6)][o(0xeb)]='copy',!![];},this['_root']['appendChild'](d);}}async*[l(0xf5)](c=''){const p=l,e=await iobrokerHandler[p(0xec)](p(0xf1),c);for(const h of e){if(this['_filter']){if(!h[p(0xf8)](this[p(0xf4)]))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler[p(0xea)](p(0xf1),c);for(const i of g){yield*this['_readFolder'](c+'/'+i);}}}function b(c,d){c=c-0xdc;const e=a();let f=e[c];return f;}customElements['define'](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);
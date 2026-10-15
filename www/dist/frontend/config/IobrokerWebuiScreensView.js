const l=b;(function(c,d){const k=b,e=c();while(!![]){try{const f=parseInt(k(0xf0))/0x1*(parseInt(k(0x10b))/0x2)+parseInt(k(0x10f))/0x3+parseInt(k(0x101))/0x4*(-parseInt(k(0x103))/0x5)+parseInt(k(0x108))/0x6*(-parseInt(k(0xf6))/0x7)+parseInt(k(0xf5))/0x8+-parseInt(k(0xfe))/0x9+-parseInt(k(0xf8))/0xa*(-parseInt(k(0xf3))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe98d0));function b(c,d){c=c-0xf0;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';import{ScreenViewer}from'../runtime/ScreenViewer.js';export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static [l(0x110)]=html`
        <div id="root"></div>
    `;static [l(0xfd)]=css`
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
        `;static ['is']=l(0x107);static [l(0xff)]={};[l(0xf1)];['_filter'];constructor(){const m=l;super(),super[m(0x104)](),this['_root']=this[m(0x10d)](m(0xf9));}async['ready'](){const n=l;this[n(0x11c)](),this[n(0x100)]();for await(const c of this[n(0x11b)]()){const d=document[n(0x102)]('div'),e=new ScreenViewer();e['stretch']=n(0xfc);const g=await iobrokerHandler[n(0xfa)]('screen',c['name']);if(!g['settings']?.['width'])e[n(0x116)]=0x780;if(!g['settings']?.[n(0xf7)])e[n(0xfb)]=0x438;e[n(0x11a)]=c['name'],d['title']=c['name'],d[n(0x10e)]=!![],d['appendChild'](e),d[n(0x118)](document[n(0xf4)](c['name'])),d['ondragstart']=async h=>{const o=n,i=c[o(0x10a)],j={'tag':'iobroker-webui-screen-viewer','defaultAttributes':{'screen-name':i},'defaultWidth':o(0x105),'defaultHeight':o(0x109)};if(g?.[o(0x112)]?.['width'])j[o(0x113)]=g['settings'][o(0x117)];if(g?.[o(0x112)]?.['height'])j[o(0x115)]=g[o(0x112)][o(0xf7)];return h[o(0x11d)]['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](j)),h['dataTransfer']['effectAllowed']='all',h[o(0x11d)][o(0x119)]='copy',!![];},this[n(0xf1)][n(0x118)](d);}}async*[l(0x11b)](c=''){const p=l,e=await iobrokerHandler[p(0x114)](p(0xf2),c);for(const h of e){if(this[p(0x10c)]){if(!h[p(0x111)](this['_filter']))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler[p(0x106)]('screen',c);for(const i of g){yield*this['_readFolder'](c+'/'+i);}}}function a(){const q=['1CvoJrA','_root','screen','11uDAebS','createTextNode','10529600tIIyat','676207mVuPCn','height','16420590XyFjfQ','root','getWebuiObject','stretchHeight','fill','style','10563543zmFTHH','properties','_assignEvents','1312fAHlOv','createElement','4735sEmlgS','_restoreCachedInititalValues','300px','getSubFolders','iobroker-webui-screens-view','114dCcsew','200px','name','1637162TloqwG','_filter','_getDomElement','draggable','1498638RJQFke','template','match','settings','defaultWidth','getObjectNames','defaultHeight','stretchWidth','width','appendChild','dropEffect','screenName','_readFolder','_parseAttributesToProperties','dataTransfer'];a=function(){return q;};return a();}customElements['define'](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);
const l=b;(function(c,d){const k=b,e=c();while(!![]){try{const f=parseInt(k(0x11b))/0x1*(-parseInt(k(0x110))/0x2)+-parseInt(k(0x111))/0x3+-parseInt(k(0x119))/0x4*(parseInt(k(0x112))/0x5)+-parseInt(k(0x10a))/0x6+-parseInt(k(0x113))/0x7+-parseInt(k(0x122))/0x8+parseInt(k(0x115))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd5a03));function b(c,d){c=c-0x102;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';function a(){const q=['11721536qpIHGw','_restoreCachedInititalValues','_root','name','_filter','title','200px','ready','dropEffect','draggable','div','3659688urewQN','screen','setData','_getDomElement','_parseAttributesToProperties','height','785680qIndzD','444291FcFiRP','125DAdTkD','6932205cNRjcE','settings','50301252stBlgM','createElement','300px','ondragstart','177220QfFjaP','defaultHeight','1zKrmHx','dataTransfer','_readFolder','style','iobroker-webui-screens-view','appendChild','width'];a=function(){return q;};return a();}import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';import{ScreenViewer}from'../runtime/ScreenViewer.js';export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
        <div id="root"></div>
    `;static [l(0x11e)]=css`
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
        `;static ['is']=l(0x11f);static ['properties']={};['_root'];['_filter'];constructor(){const m=l;super(),super[m(0x123)](),this['_root']=this[m(0x10d)]('root');}async[l(0x106)](){const n=l;this[n(0x10e)](),this['_assignEvents']();for await(const c of this[n(0x11d)]()){const d=document[n(0x116)](n(0x109)),e=new ScreenViewer();e['stretch']='fill';const g=await iobrokerHandler['getWebuiObject'](n(0x10b),c['name']);if(!g['settings']?.['width'])e['stretchWidth']=0x780;if(!g['settings']?.['height'])e['stretchHeight']=0x438;e['screenName']=c[n(0x102)],d[n(0x104)]=c['name'],d[n(0x108)]=!![],d[n(0x120)](e),d['appendChild'](document['createTextNode'](c[n(0x102)])),d[n(0x118)]=async h=>{const o=n,i=c['name'],j={'tag':'iobroker-webui-screen-viewer','defaultAttributes':{'screen-name':i},'defaultWidth':o(0x117),'defaultHeight':o(0x105)};if(g?.['settings']?.['width'])j['defaultWidth']=g['settings'][o(0x121)];if(g?.[o(0x114)]?.['height'])j[o(0x11a)]=g[o(0x114)][o(0x10f)];return h['dataTransfer'][o(0x10c)](dragDropFormatNameElementDefinition,JSON['stringify'](j)),h['dataTransfer']['effectAllowed']='all',h[o(0x11c)][o(0x107)]='copy',!![];},this[n(0x124)][n(0x120)](d);}}async*[l(0x11d)](c=''){const p=l,e=await iobrokerHandler['getObjectNames'](p(0x10b),c);for(const h of e){if(this[p(0x103)]){if(!h['match'](this['_filter']))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler['getSubFolders']('screen',c);for(const i of g){yield*this[p(0x11d)](c+'/'+i);}}}customElements['define'](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);
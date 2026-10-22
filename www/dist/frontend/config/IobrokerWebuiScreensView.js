const l=b;(function(c,d){const k=b,e=c();while(!![]){try{const f=-parseInt(k(0x75))/0x1+-parseInt(k(0x70))/0x2*(parseInt(k(0x72))/0x3)+parseInt(k(0x88))/0x4*(parseInt(k(0x85))/0x5)+-parseInt(k(0x73))/0x6+parseInt(k(0x71))/0x7*(parseInt(k(0x7a))/0x8)+parseInt(k(0x82))/0x9+-parseInt(k(0x7d))/0xa*(-parseInt(k(0x77))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa9dd2));function a(){const q=['title','_readFolder','name','2Epdefi','7fetDsj','2777964AChdZR','3586074YKUtrW','effectAllowed','222836CDToOF','dataTransfer','11gBQzIA','appendChild','_parseAttributesToProperties','2403784AJAIUI','_root','200px','5285930TzWpSW','div','_filter','stretch','setData','3293190XMNPxf','template','screenName','5685lvBGnG','_getDomElement','settings','4388rnBmUb','screen','height','style','defaultHeight','width'];a=function(){return q;};return a();}import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';import{ScreenViewer}from'../runtime/ScreenViewer.js';export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static [l(0x83)]=html`
        <div id="root"></div>
    `;static [l(0x8b)]=css`
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
        `;static ['is']='iobroker-webui-screens-view';static ['properties']={};['_root'];['_filter'];constructor(){const m=l;super(),super['_restoreCachedInititalValues'](),this['_root']=this[m(0x86)]('root');}async['ready'](){const n=l;this[n(0x79)](),this['_assignEvents']();for await(const c of this[n(0x6e)]()){const d=document['createElement'](n(0x7e)),e=new ScreenViewer();e[n(0x80)]='fill';const g=await iobrokerHandler['getWebuiObject'](n(0x89),c[n(0x6f)]);if(!g['settings']?.[n(0x6c)])e['stretchWidth']=0x780;if(!g['settings']?.['height'])e['stretchHeight']=0x438;e[n(0x84)]=c[n(0x6f)],d[n(0x6d)]=c['name'],d['draggable']=!![],d[n(0x78)](e),d[n(0x78)](document['createTextNode'](c['name'])),d['ondragstart']=async h=>{const o=n,i=c[o(0x6f)],j={'tag':'iobroker-webui-screen-viewer','defaultAttributes':{'screen-name':i},'defaultWidth':'300px','defaultHeight':o(0x7c)};if(g?.['settings']?.[o(0x6c)])j['defaultWidth']=g[o(0x87)]['width'];if(g?.['settings']?.[o(0x8a)])j[o(0x6b)]=g[o(0x87)]['height'];return h['dataTransfer'][o(0x81)](dragDropFormatNameElementDefinition,JSON['stringify'](j)),h[o(0x76)][o(0x74)]='all',h[o(0x76)]['dropEffect']='copy',!![];},this[n(0x7b)][n(0x78)](d);}}async*[l(0x6e)](c=''){const p=l,e=await iobrokerHandler['getObjectNames'](p(0x89),c);for(const h of e){if(this[p(0x7f)]){if(!h['match'](this['_filter']))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler['getSubFolders'](p(0x89),c);for(const i of g){yield*this[p(0x6e)](c+'/'+i);}}}function b(c,d){c=c-0x6b;const e=a();let f=e[c];return f;}customElements['define'](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);
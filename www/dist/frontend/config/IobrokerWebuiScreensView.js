const l=b;(function(c,d){const k=b,e=c();while(!![]){try{const f=-parseInt(k(0xf8))/0x1+-parseInt(k(0x109))/0x2*(-parseInt(k(0x10f))/0x3)+-parseInt(k(0x10a))/0x4*(-parseInt(k(0x106))/0x5)+-parseInt(k(0xeb))/0x6+-parseInt(k(0xf2))/0x7*(-parseInt(k(0xef))/0x8)+parseInt(k(0x103))/0x9*(parseInt(k(0xf6))/0xa)+-parseInt(k(0x100))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x33a6e));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';function a(){const q=['326038gFAclt','6796bFuMfI','setData','200px','all','iobroker-webui-screen-viewer','3eUtNaD','div','stringify','_readFolder','title','defaultHeight','root','978078nEecPW','ondragstart','match','effectAllowed','628856ouJyCK','copy','dropEffect','7uAneCU','name','stretchHeight','appendChild','70DzhwPc','settings','139594hAFRgt','width','getWebuiObject','screen','iobroker-webui-screens-view','_assignEvents','screenName','_filter','2471964sltSHH','dataTransfer','template','392508AEWIMk','createTextNode','getSubFolders','565XBADYO','getObjectNames','height'];a=function(){return q;};return a();}import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';import{ScreenViewer}from'../runtime/ScreenViewer.js';function b(c,d){c=c-0xe7;const e=a();let f=e[c];return f;}export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static [l(0x102)]=html`
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
        `;static ['is']=l(0xfc);static ['properties']={};['_root'];[l(0xff)];constructor(){const m=l;super(),super['_restoreCachedInititalValues'](),this['_root']=this['_getDomElement'](m(0xea));}async['ready'](){const n=l;this['_parseAttributesToProperties'](),this[n(0xfd)]();for await(const c of this['_readFolder']()){const d=document['createElement'](n(0x110)),e=new ScreenViewer();e['stretch']='fill';const g=await iobrokerHandler[n(0xfa)](n(0xfb),c['name']);if(!g[n(0xf7)]?.['width'])e['stretchWidth']=0x780;if(!g[n(0xf7)]?.['height'])e[n(0xf4)]=0x438;e[n(0xfe)]=c['name'],d[n(0xe8)]=c['name'],d['draggable']=!![],d[n(0xf5)](e),d[n(0xf5)](document[n(0x104)](c[n(0xf3)])),d[n(0xec)]=async h=>{const o=n,i=c[o(0xf3)],j={'tag':o(0x10e),'defaultAttributes':{'screen-name':i},'defaultWidth':'300px','defaultHeight':o(0x10c)};if(g?.['settings']?.[o(0xf9)])j['defaultWidth']=g[o(0xf7)][o(0xf9)];if(g?.['settings']?.['height'])j[o(0xe9)]=g['settings'][o(0x108)];return h['dataTransfer'][o(0x10b)](dragDropFormatNameElementDefinition,JSON[o(0x111)](j)),h[o(0x101)][o(0xee)]=o(0x10d),h[o(0x101)][o(0xf1)]=o(0xf0),!![];},this['_root'][n(0xf5)](d);}}async*[l(0xe7)](c=''){const p=l,e=await iobrokerHandler[p(0x107)](p(0xfb),c);for(const h of e){if(this['_filter']){if(!h[p(0xed)](this[p(0xff)]))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler[p(0x105)](p(0xfb),c);for(const i of g){yield*this[p(0xe7)](c+'/'+i);}}}customElements['define'](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);
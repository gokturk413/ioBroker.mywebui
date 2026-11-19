const l=b;function b(c,d){c=c-0xf9;const e=a();let f=e[c];return f;}(function(c,d){const k=b,e=c();while(!![]){try{const f=-parseInt(k(0xfb))/0x1+-parseInt(k(0x107))/0x2+parseInt(k(0x10d))/0x3+-parseInt(k(0x106))/0x4+-parseInt(k(0x116))/0x5+-parseInt(k(0xfd))/0x6+parseInt(k(0xff))/0x7;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb7e9e));function a(){const q=['properties','6644915yzLTyn','all','_root','screen','200px','966345XiVTux','settings','722172FTDEJC','_restoreCachedInititalValues','32423804VRqBJp','width','dataTransfer','stringify','iobroker-webui-screens-view','stretchWidth','height','1818424iplKKX','2708624jrYwLv','defaultHeight','createTextNode','_assignEvents','iobroker-webui-screen-viewer','appendChild','1037838hjbkZj','style','title','_parseAttributesToProperties','_filter','getObjectNames','dropEffect','ondragstart'];a=function(){return q;};return a();}import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';import{ScreenViewer}from'../runtime/ScreenViewer.js';export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
        <div id="root"></div>
    `;static [l(0x10e)]=css`
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
        `;static ['is']=l(0x103);static [l(0x115)]={};['_root'];[l(0x111)];constructor(){const m=l;super(),super[m(0xfe)](),this[m(0x118)]=this['_getDomElement']('root');}async['ready'](){const n=l;this[n(0x110)](),this[n(0x10a)]();for await(const c of this['_readFolder']()){const d=document['createElement']('div'),e=new ScreenViewer();e['stretch']='fill';const g=await iobrokerHandler['getWebuiObject'](n(0xf9),c['name']);if(!g['settings']?.[n(0x100)])e[n(0x104)]=0x780;if(!g['settings']?.[n(0x105)])e['stretchHeight']=0x438;e['screenName']=c['name'],d[n(0x10f)]=c['name'],d['draggable']=!![],d[n(0x10c)](e),d[n(0x10c)](document[n(0x109)](c['name'])),d[n(0x114)]=async h=>{const o=n,i=c['name'],j={'tag':o(0x10b),'defaultAttributes':{'screen-name':i},'defaultWidth':'300px','defaultHeight':o(0xfa)};if(g?.[o(0xfc)]?.['width'])j['defaultWidth']=g['settings']['width'];if(g?.['settings']?.[o(0x105)])j[o(0x108)]=g[o(0xfc)]['height'];return h[o(0x101)]['setData'](dragDropFormatNameElementDefinition,JSON[o(0x102)](j)),h[o(0x101)]['effectAllowed']=o(0x117),h['dataTransfer'][o(0x113)]='copy',!![];},this['_root'][n(0x10c)](d);}}async*['_readFolder'](c=''){const p=l,e=await iobrokerHandler[p(0x112)](p(0xf9),c);for(const h of e){if(this['_filter']){if(!h['match'](this['_filter']))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler['getSubFolders']('screen',c);for(const i of g){yield*this['_readFolder'](c+'/'+i);}}}customElements['define'](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);
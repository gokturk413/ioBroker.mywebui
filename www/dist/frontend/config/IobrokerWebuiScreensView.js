const l=b;(function(c,d){const k=b,e=c();while(!![]){try{const f=-parseInt(k(0x18e))/0x1*(-parseInt(k(0x194))/0x2)+-parseInt(k(0x19b))/0x3+-parseInt(k(0x18f))/0x4*(-parseInt(k(0x18b))/0x5)+parseInt(k(0x1a9))/0x6+parseInt(k(0x190))/0x7+parseInt(k(0x187))/0x8*(-parseInt(k(0x189))/0x9)+-parseInt(k(0x186))/0xa*(parseInt(k(0x1a0))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x47414));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';function b(c,d){c=c-0x183;const e=a();let f=e[c];return f;}import{iobrokerHandler}from'../common/IobrokerHandler.js';function a(){const q=['createElement','_root','313244wszmGM','height','200px','_parseAttributesToProperties','root','fill','_readFolder','29154KDuibm','createTextNode','settings','name','_assignEvents','37620lwlnmx','ondragstart','defaultHeight','appendChild','width','300px','all','stretch','effectAllowed','3260232nwCovO','match','copy','stretchWidth','iobroker-webui-screen-viewer','_filter','dataTransfer','2840ETWTiq','104qMSPVx','draggable','173763dPGrQt','getSubFolders','10kptQjE','style','properties','3eLpSNx','486484xheqlF','1871583gqwViB','screen'];a=function(){return q;};return a();}import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';import{ScreenViewer}from'../runtime/ScreenViewer.js';export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
        <div id="root"></div>
    `;static [l(0x18c)]=css`
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
        `;static ['is']='iobroker-webui-screens-view';static [l(0x18d)]={};['_root'];['_filter'];constructor(){const m=l;super(),super['_restoreCachedInititalValues'](),this[m(0x193)]=this['_getDomElement'](m(0x198));}async['ready'](){const n=l;this[n(0x197)](),this[n(0x19f)]();for await(const c of this[n(0x19a)]()){const d=document[n(0x192)]('div'),e=new ScreenViewer();e[n(0x1a7)]=n(0x199);const g=await iobrokerHandler['getWebuiObject'](n(0x191),c[n(0x19e)]);if(!g[n(0x19d)]?.['width'])e[n(0x1ac)]=0x780;if(!g[n(0x19d)]?.[n(0x195)])e['stretchHeight']=0x438;e['screenName']=c['name'],d['title']=c[n(0x19e)],d[n(0x188)]=!![],d[n(0x1a3)](e),d[n(0x1a3)](document[n(0x19c)](c[n(0x19e)])),d[n(0x1a1)]=async h=>{const o=n,i=c['name'],j={'tag':o(0x183),'defaultAttributes':{'screen-name':i},'defaultWidth':o(0x1a5),'defaultHeight':o(0x196)};if(g?.[o(0x19d)]?.['width'])j['defaultWidth']=g[o(0x19d)][o(0x1a4)];if(g?.['settings']?.[o(0x195)])j[o(0x1a2)]=g['settings'][o(0x195)];return h[o(0x185)]['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](j)),h[o(0x185)][o(0x1a8)]=o(0x1a6),h[o(0x185)]['dropEffect']=o(0x1ab),!![];},this[n(0x193)]['appendChild'](d);}}async*[l(0x19a)](c=''){const p=l,e=await iobrokerHandler['getObjectNames'](p(0x191),c);for(const h of e){if(this[p(0x184)]){if(!h[p(0x1aa)](this[p(0x184)]))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler[p(0x18a)]('screen',c);for(const i of g){yield*this['_readFolder'](c+'/'+i);}}}customElements['define'](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);
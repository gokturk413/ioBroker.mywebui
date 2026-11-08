const l=b;function a(){const q=['ready','settings','300px','1450ritWsE','433874LYSzIO','_filter','screenName','6085728srENYv','getObjectNames','5921552LiNCqX','name','200px','appendChild','57586pIGhEV','stretch','createTextNode','_restoreCachedInititalValues','_readFolder','createElement','width','height','stretchHeight','_root','all','_getDomElement','3MjEkOj','125163UyvgaD','div','_parseAttributesToProperties','stretchWidth','415CbuFgR','screen','_assignEvents','draggable','getWebuiObject','effectAllowed','2011614dJUeiZ','properties','35276yKSvli','iobroker-webui-screen-viewer','dataTransfer','template','defaultWidth'];a=function(){return q;};return a();}(function(c,d){const k=b,e=c();while(!![]){try{const f=-parseInt(k(0x150))/0x1+-parseInt(k(0x159))/0x2*(-parseInt(k(0x13a))/0x3)+parseInt(k(0x147))/0x4*(-parseInt(k(0x13f))/0x5)+-parseInt(k(0x145))/0x6+parseInt(k(0x155))/0x7+-parseInt(k(0x153))/0x8+-parseInt(k(0x13b))/0x9*(-parseInt(k(0x14f))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x99aa0));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';function b(c,d){c=c-0x136;const e=a();let f=e[c];return f;}import{ScreenViewer}from'../runtime/ScreenViewer.js';export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static [l(0x14a)]=html`
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
        `;static ['is']='iobroker-webui-screens-view';static [l(0x146)]={};['_root'];['_filter'];constructor(){const m=l;super(),super[m(0x15c)](),this[m(0x137)]=this[m(0x139)]('root');}async[l(0x14c)](){const n=l;this[n(0x13d)](),this[n(0x141)]();for await(const c of this['_readFolder']()){const d=document[n(0x15e)](n(0x13c)),e=new ScreenViewer();e[n(0x15a)]='fill';const g=await iobrokerHandler[n(0x143)](n(0x140),c['name']);if(!g[n(0x14d)]?.[n(0x15f)])e[n(0x13e)]=0x780;if(!g[n(0x14d)]?.[n(0x160)])e[n(0x136)]=0x438;e[n(0x152)]=c['name'],d['title']=c['name'],d[n(0x142)]=!![],d['appendChild'](e),d[n(0x158)](document[n(0x15b)](c[n(0x156)])),d['ondragstart']=async h=>{const o=n,i=c['name'],j={'tag':o(0x148),'defaultAttributes':{'screen-name':i},'defaultWidth':o(0x14e),'defaultHeight':o(0x157)};if(g?.['settings']?.[o(0x15f)])j[o(0x14b)]=g['settings']['width'];if(g?.[o(0x14d)]?.[o(0x160)])j['defaultHeight']=g['settings'][o(0x160)];return h[o(0x149)]['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](j)),h[o(0x149)][o(0x144)]=o(0x138),h[o(0x149)]['dropEffect']='copy',!![];},this['_root']['appendChild'](d);}}async*[l(0x15d)](c=''){const p=l,e=await iobrokerHandler[p(0x154)]('screen',c);for(const h of e){if(this[p(0x151)]){if(!h['match'](this['_filter']))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler['getSubFolders'](p(0x140),c);for(const i of g){yield*this['_readFolder'](c+'/'+i);}}}customElements['define'](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);
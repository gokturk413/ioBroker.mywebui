const l=b;(function(c,d){const k=b,e=c();while(!![]){try{const f=parseInt(k(0x181))/0x1+-parseInt(k(0x19b))/0x2+parseInt(k(0x184))/0x3+parseInt(k(0x191))/0x4*(parseInt(k(0x18e))/0x5)+-parseInt(k(0x18d))/0x6*(-parseInt(k(0x177))/0x7)+parseInt(k(0x194))/0x8+-parseInt(k(0x192))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8f1c7));function b(c,d){c=c-0x173;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';function a(){const q=['screen','draggable','setData','574919TmYSxE','settings','height','916233cOGHXj','_parseAttributesToProperties','200px','_root','appendChild','div','createElement','stretchHeight','width','42dYqbCT','4390easkUm','copy','dropEffect','1328mxfkfM','7431786dGDkFR','stretch','2949568PiIaIj','fill','name','define','_restoreCachedInititalValues','root','style','856916URCLPo','_filter','dataTransfer','iobroker-webui-screens-view','template','299873RRcwtN','match','screenName','iobroker-webui-screen-viewer','getWebuiObject','_readFolder','_getDomElement'];a=function(){return q;};return a();}import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';import{ScreenViewer}from'../runtime/ScreenViewer.js';export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static [l(0x176)]=html`
        <div id="root"></div>
    `;static [l(0x19a)]=css`
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
        `;static ['is']=l(0x175);static ['properties']={};['_root'];['_filter'];constructor(){const m=l;super(),super[m(0x198)](),this[m(0x187)]=this[m(0x17d)](m(0x199));}async['ready'](){const n=l;this[n(0x185)](),this['_assignEvents']();for await(const c of this[n(0x17c)]()){const d=document[n(0x18a)](n(0x189)),e=new ScreenViewer();e[n(0x193)]=n(0x195);const g=await iobrokerHandler[n(0x17b)](n(0x17e),c['name']);if(!g[n(0x182)]?.[n(0x18c)])e['stretchWidth']=0x780;if(!g['settings']?.['height'])e[n(0x18b)]=0x438;e[n(0x179)]=c[n(0x196)],d['title']=c[n(0x196)],d[n(0x17f)]=!![],d['appendChild'](e),d['appendChild'](document['createTextNode'](c[n(0x196)])),d['ondragstart']=async h=>{const o=n,i=c['name'],j={'tag':o(0x17a),'defaultAttributes':{'screen-name':i},'defaultWidth':'300px','defaultHeight':o(0x186)};if(g?.[o(0x182)]?.[o(0x18c)])j['defaultWidth']=g[o(0x182)][o(0x18c)];if(g?.[o(0x182)]?.['height'])j['defaultHeight']=g['settings'][o(0x183)];return h['dataTransfer'][o(0x180)](dragDropFormatNameElementDefinition,JSON['stringify'](j)),h[o(0x174)]['effectAllowed']='all',h['dataTransfer'][o(0x190)]=o(0x18f),!![];},this[n(0x187)][n(0x188)](d);}}async*['_readFolder'](c=''){const p=l,e=await iobrokerHandler['getObjectNames'](p(0x17e),c);for(const h of e){if(this[p(0x173)]){if(!h[p(0x178)](this[p(0x173)]))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler['getSubFolders']('screen',c);for(const i of g){yield*this[p(0x17c)](c+'/'+i);}}}customElements[l(0x197)](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);
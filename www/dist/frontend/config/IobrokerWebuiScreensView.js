const l=b;(function(c,d){const k=b,e=c();while(!![]){try{const f=-parseInt(k(0x1cb))/0x1+parseInt(k(0x1db))/0x2+-parseInt(k(0x1ce))/0x3+parseInt(k(0x1d5))/0x4+-parseInt(k(0x1d1))/0x5*(-parseInt(k(0x1c6))/0x6)+parseInt(k(0x1ca))/0x7+parseInt(k(0x1c7))/0x8*(parseInt(k(0x1be))/0x9);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9db14));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';import{ScreenViewer}from'../runtime/ScreenViewer.js';export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
        `;static ['is']=l(0x1bd);static [l(0x1c4)]={};['_root'];[l(0x1bb)];constructor(){const m=l;super(),super[m(0x1c2)](),this['_root']=this['_getDomElement']('root');}async[l(0x1d6)](){const n=l;this['_parseAttributesToProperties'](),this[n(0x1c5)]();for await(const c of this[n(0x1c0)]()){const d=document[n(0x1ba)](n(0x1b9)),e=new ScreenViewer();e[n(0x1c3)]=n(0x1cd);const g=await iobrokerHandler[n(0x1b8)](n(0x1cc),c['name']);if(!g['settings']?.[n(0x1d8)])e[n(0x1c9)]=0x780;if(!g['settings']?.['height'])e[n(0x1d7)]=0x438;e[n(0x1bf)]=c['name'],d['title']=c['name'],d[n(0x1dc)]=!![],d['appendChild'](e),d[n(0x1d0)](document[n(0x1cf)](c['name'])),d[n(0x1bc)]=async h=>{const o=n,i=c[o(0x1d3)],j={'tag':'iobroker-webui-screen-viewer','defaultAttributes':{'screen-name':i},'defaultWidth':'300px','defaultHeight':'200px'};if(g?.[o(0x1c8)]?.['width'])j[o(0x1c1)]=g[o(0x1c8)][o(0x1d8)];if(g?.['settings']?.['height'])j['defaultHeight']=g['settings']['height'];return h[o(0x1da)]['setData'](dragDropFormatNameElementDefinition,JSON[o(0x1d2)](j)),h['dataTransfer']['effectAllowed']=o(0x1d9),h['dataTransfer']['dropEffect']='copy',!![];},this['_root']['appendChild'](d);}}async*[l(0x1c0)](c=''){const p=l,e=await iobrokerHandler['getObjectNames'](p(0x1cc),c);for(const h of e){if(this[p(0x1bb)]){if(!h['match'](this['_filter']))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler['getSubFolders'](p(0x1cc),c);for(const i of g){yield*this['_readFolder'](c+'/'+i);}}}function b(c,d){c=c-0x1b8;const e=a();let f=e[c];return f;}customElements[l(0x1d4)](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);function a(){const q=['stretchWidth','4668496oJTEiU','1274509pOoIEs','screen','fill','1822038SFkvMJ','createTextNode','appendChild','945bgIjTd','stringify','name','define','1038756ZQtLhp','ready','stretchHeight','width','all','dataTransfer','1095824dnrXLl','draggable','getWebuiObject','div','createElement','_filter','ondragstart','iobroker-webui-screens-view','25893eJyeTp','screenName','_readFolder','defaultWidth','_restoreCachedInititalValues','stretch','properties','_assignEvents','1926OAJtSq','2760HREedc','settings'];a=function(){return q;};return a();}
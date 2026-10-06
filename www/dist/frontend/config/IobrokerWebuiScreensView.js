const l=b;(function(c,d){const k=b,e=c();while(!![]){try{const f=parseInt(k(0x1ff))/0x1*(-parseInt(k(0x203))/0x2)+-parseInt(k(0x1f5))/0x3*(parseInt(k(0x1f2))/0x4)+parseInt(k(0x1f1))/0x5*(parseInt(k(0x1e5))/0x6)+-parseInt(k(0x206))/0x7+-parseInt(k(0x1f4))/0x8*(parseInt(k(0x207))/0x9)+parseInt(k(0x1fc))/0xa+-parseInt(k(0x1fa))/0xb*(-parseInt(k(0x1f7))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x588e3));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';import{ScreenViewer}from'../runtime/ScreenViewer.js';function b(c,d){c=c-0x1e3;const e=a();let f=e[c];return f;}export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
        <div id="root"></div>
    `;static [l(0x1e3)]=css`
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
        `;static ['is']=l(0x208);static ['properties']={};['_root'];['_filter'];constructor(){const m=l;super(),super[m(0x1f3)](),this['_root']=this[m(0x1fd)]('root');}async[l(0x202)](){const n=l;this['_parseAttributesToProperties'](),this[n(0x1ea)]();for await(const c of this[n(0x200)]()){const d=document['createElement']('div'),e=new ScreenViewer();e[n(0x1e6)]='fill';const g=await iobrokerHandler['getWebuiObject'](n(0x1e9),c['name']);if(!g[n(0x1ec)]?.[n(0x1ee)])e['stretchWidth']=0x780;if(!g['settings']?.[n(0x1e8)])e[n(0x1f6)]=0x438;e[n(0x1fb)]=c[n(0x201)],d[n(0x1ed)]=c['name'],d[n(0x1f0)]=!![],d['appendChild'](e),d[n(0x1eb)](document['createTextNode'](c[n(0x201)])),d[n(0x1f8)]=async h=>{const o=n,i=c['name'],j={'tag':'iobroker-webui-screen-viewer','defaultAttributes':{'screen-name':i},'defaultWidth':o(0x1f9),'defaultHeight':'200px'};if(g?.[o(0x1ec)]?.['width'])j[o(0x205)]=g['settings']['width'];if(g?.['settings']?.[o(0x1e8)])j['defaultHeight']=g[o(0x1ec)][o(0x1e8)];return h[o(0x1e4)][o(0x1e7)](dragDropFormatNameElementDefinition,JSON[o(0x204)](j)),h['dataTransfer']['effectAllowed']=o(0x1ef),h['dataTransfer']['dropEffect']=o(0x1fe),!![];},this['_root']['appendChild'](d);}}async*[l(0x200)](c=''){const p=l,e=await iobrokerHandler['getObjectNames']('screen',c);for(const h of e){if(this['_filter']){if(!h['match'](this['_filter']))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler['getSubFolders'](p(0x1e9),c);for(const i of g){yield*this['_readFolder'](c+'/'+i);}}}customElements['define'](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);function a(){const q=['20FHNIQK','_restoreCachedInititalValues','248wWvrdn','143151PSCCzo','stretchHeight','12yJMxIZ','ondragstart','300px','6871997butOZy','screenName','2946940NHcfnU','_getDomElement','copy','23ayzxWm','_readFolder','name','ready','30AgRvae','stringify','defaultWidth','2102380IfwlVc','160227gMYzdU','iobroker-webui-screens-view','style','dataTransfer','28890YEyMqS','stretch','setData','height','screen','_assignEvents','appendChild','settings','title','width','all','draggable','555thGcUm'];a=function(){return q;};return a();}
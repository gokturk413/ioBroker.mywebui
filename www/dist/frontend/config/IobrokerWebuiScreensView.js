const l=b;(function(c,d){const k=b,e=c();while(!![]){try{const f=-parseInt(k(0x1ae))/0x1*(parseInt(k(0x19f))/0x2)+-parseInt(k(0x1b5))/0x3*(parseInt(k(0x1b6))/0x4)+parseInt(k(0x1a2))/0x5+parseInt(k(0x1aa))/0x6*(-parseInt(k(0x1bd))/0x7)+parseInt(k(0x1b2))/0x8+parseInt(k(0x1ba))/0x9+parseInt(k(0x1ad))/0xa*(-parseInt(k(0x1b3))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x2d7f6));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';function b(c,d){c=c-0x19f;const e=a();let f=e[c];return f;}import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';import{ScreenViewer}from'../runtime/ScreenViewer.js';export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static [l(0x1ab)]=html`
        <div id="root"></div>
    `;static [l(0x1b0)]=css`
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
        `;static ['is']='iobroker-webui-screens-view';static ['properties']={};[l(0x1b9)];['_filter'];constructor(){const m=l;super(),super[m(0x1a0)](),this['_root']=this[m(0x1be)](m(0x1bc));}async['ready'](){const n=l;this['_parseAttributesToProperties'](),this[n(0x1a5)]();for await(const c of this[n(0x1a7)]()){const d=document['createElement'](n(0x1a4)),e=new ScreenViewer();e['stretch']='fill';const g=await iobrokerHandler[n(0x1c4)]('screen',c[n(0x1a1)]);if(!g[n(0x1b7)]?.[n(0x1af)])e[n(0x1b4)]=0x780;if(!g[n(0x1b7)]?.['height'])e['stretchHeight']=0x438;e[n(0x1bb)]=c[n(0x1a1)],d['title']=c['name'],d['draggable']=!![],d[n(0x1a9)](e),d[n(0x1a9)](document['createTextNode'](c['name'])),d['ondragstart']=async h=>{const o=n,i=c[o(0x1a1)],j={'tag':'iobroker-webui-screen-viewer','defaultAttributes':{'screen-name':i},'defaultWidth':o(0x1c0),'defaultHeight':'200px'};if(g?.[o(0x1b7)]?.[o(0x1af)])j['defaultWidth']=g[o(0x1b7)][o(0x1af)];if(g?.[o(0x1b7)]?.[o(0x1ac)])j[o(0x1b1)]=g[o(0x1b7)][o(0x1ac)];return h['dataTransfer'][o(0x1a3)](dragDropFormatNameElementDefinition,JSON['stringify'](j)),h[o(0x1a8)][o(0x1bf)]='all',h['dataTransfer'][o(0x1b8)]=o(0x1c3),!![];},this[n(0x1b9)][n(0x1a9)](d);}}async*['_readFolder'](c=''){const p=l,e=await iobrokerHandler[p(0x1a6)]('screen',c);for(const h of e){if(this['_filter']){if(!h[p(0x1c2)](this['_filter']))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler[p(0x1c1)]('screen',c);for(const i of g){yield*this['_readFolder'](c+'/'+i);}}}customElements['define'](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);function a(){const q=['130875JbgIZR','20DUIMzH','settings','dropEffect','_root','1696509cnmBak','screenName','root','28rDWExt','_getDomElement','effectAllowed','300px','getSubFolders','match','copy','getWebuiObject','20zjNIlr','_restoreCachedInititalValues','name','351010KtfmSR','setData','div','_assignEvents','getObjectNames','_readFolder','dataTransfer','appendChild','2382tKfLXC','template','height','10vRhqlg','3022wwJHAu','width','style','defaultHeight','2018432iYVAft','821876EkrnKH','stretchWidth'];a=function(){return q;};return a();}
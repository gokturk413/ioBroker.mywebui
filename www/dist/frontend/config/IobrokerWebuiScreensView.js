const o=b;(function(c,d){const k=b,e=c();while(!![]){try{const f=parseInt(k(0x139))/0x1+-parseInt(k(0x14c))/0x2*(parseInt(k(0x148))/0x3)+parseInt(k(0x152))/0x4+parseInt(k(0x13e))/0x5+-parseInt(k(0x141))/0x6+-parseInt(k(0x150))/0x7+parseInt(k(0x142))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe376e));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';function b(c,d){c=c-0x139;const e=a();let f=e[c];return f;}function a(){const q=['height','getSubFolders','setData','1169705rIaVhf','match','_parseAttributesToProperties','9946566zFpVFE','17508904GmldoC','width','screen','effectAllowed','createElement','_root','1265988VKaQAo','root','name','getObjectNames','6NfYXRs','200px','all','stretchWidth','2346218lziEoK','stretchHeight','3640520vEIvGp','dropEffect','appendChild','fill','stretch','_readFolder','defaultWidth','857933fFgCMs','settings'];a=function(){return q;};return a();}import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';import{ScreenViewer}from'../runtime/ScreenViewer.js';export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
        `;static ['is']='iobroker-webui-screens-view';static ['properties']={};['_root'];['_filter'];constructor(){const l=b;super(),super['_restoreCachedInititalValues'](),this['_root']=this['_getDomElement'](l(0x149));}async['ready'](){const m=b;this[m(0x140)](),this['_assignEvents']();for await(const c of this[m(0x157)]()){const d=document[m(0x146)]('div'),e=new ScreenViewer();e[m(0x156)]=m(0x155);const g=await iobrokerHandler['getWebuiObject'](m(0x144),c['name']);if(!g[m(0x13a)]?.[m(0x143)])e[m(0x14f)]=0x780;if(!g['settings']?.[m(0x13b)])e[m(0x151)]=0x438;e['screenName']=c['name'],d['title']=c[m(0x14a)],d['draggable']=!![],d[m(0x154)](e),d['appendChild'](document['createTextNode'](c['name'])),d['ondragstart']=async h=>{const n=m,i=c[n(0x14a)],j={'tag':'iobroker-webui-screen-viewer','defaultAttributes':{'screen-name':i},'defaultWidth':'300px','defaultHeight':n(0x14d)};if(g?.['settings']?.[n(0x143)])j[n(0x158)]=g['settings'][n(0x143)];if(g?.['settings']?.['height'])j['defaultHeight']=g['settings'][n(0x13b)];return h['dataTransfer'][n(0x13d)](dragDropFormatNameElementDefinition,JSON['stringify'](j)),h['dataTransfer'][n(0x145)]=n(0x14e),h['dataTransfer'][n(0x153)]='copy',!![];},this[m(0x147)][m(0x154)](d);}}async*[o(0x157)](c=''){const p=o,e=await iobrokerHandler[p(0x14b)]('screen',c);for(const h of e){if(this['_filter']){if(!h[p(0x13f)](this['_filter']))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler[p(0x13c)](p(0x144),c);for(const i of g){yield*this[p(0x157)](c+'/'+i);}}}customElements['define'](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);
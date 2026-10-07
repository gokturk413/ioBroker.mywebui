const l=b;function a(){const q=['46UDOqGE','7hQjMVo','_readFolder','name','screen','382896Przjnx','iobroker-webui-screens-view','root','all','appendChild','492810QrMNRQ','width','33234Ixttfe','createTextNode','_restoreCachedInititalValues','_parseAttributesToProperties','dataTransfer','838840apprYi','effectAllowed','stringify','getWebuiObject','117cdsqWk','275568HLdSpB','dropEffect','1382900qwSuao','_root','_filter','define','ready','setData','createElement','stretchHeight','getSubFolders','450024gNQPGf','settings'];a=function(){return q;};return a();}(function(c,d){const k=b,e=c();while(!![]){try{const f=-parseInt(k(0x76))/0x1+-parseInt(k(0x83))/0x2*(-parseInt(k(0x8f))/0x3)+-parseInt(k(0x94))/0x4+-parseInt(k(0x78))/0x5+parseInt(k(0x88))/0x6+parseInt(k(0x84))/0x7*(-parseInt(k(0x81))/0x8)+parseInt(k(0x75))/0x9*(parseInt(k(0x8d))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x22760));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';import{ScreenViewer}from'../runtime/ScreenViewer.js';function b(c,d){c=c-0x75;const e=a();let f=e[c];return f;}export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
        `;static ['is']=l(0x89);static ['properties']={};[l(0x79)];[l(0x7a)];constructor(){const m=l;super(),super[m(0x91)](),this['_root']=this['_getDomElement'](m(0x8a));}async[l(0x7c)](){const n=l;this[n(0x92)](),this['_assignEvents']();for await(const c of this[n(0x85)]()){const d=document[n(0x7e)]('div'),e=new ScreenViewer();e['stretch']='fill';const g=await iobrokerHandler[n(0x97)](n(0x87),c[n(0x86)]);if(!g[n(0x82)]?.[n(0x8e)])e['stretchWidth']=0x780;if(!g[n(0x82)]?.['height'])e[n(0x7f)]=0x438;e['screenName']=c[n(0x86)],d['title']=c[n(0x86)],d['draggable']=!![],d['appendChild'](e),d[n(0x8c)](document[n(0x90)](c[n(0x86)])),d['ondragstart']=async h=>{const o=n,i=c['name'],j={'tag':'iobroker-webui-screen-viewer','defaultAttributes':{'screen-name':i},'defaultWidth':'300px','defaultHeight':'200px'};if(g?.['settings']?.['width'])j['defaultWidth']=g['settings']['width'];if(g?.['settings']?.['height'])j['defaultHeight']=g['settings']['height'];return h['dataTransfer'][o(0x7d)](dragDropFormatNameElementDefinition,JSON[o(0x96)](j)),h[o(0x93)][o(0x95)]=o(0x8b),h[o(0x93)][o(0x77)]='copy',!![];},this[n(0x79)]['appendChild'](d);}}async*['_readFolder'](c=''){const p=l,e=await iobrokerHandler['getObjectNames'](p(0x87),c);for(const h of e){if(this['_filter']){if(!h['match'](this[p(0x7a)]))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler[p(0x80)](p(0x87),c);for(const i of g){yield*this[p(0x85)](c+'/'+i);}}}customElements[l(0x7b)](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);
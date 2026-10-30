const l=b;(function(c,d){const k=b,e=c();while(!![]){try{const f=parseInt(k(0x172))/0x1+-parseInt(k(0x169))/0x2*(-parseInt(k(0x16b))/0x3)+parseInt(k(0x174))/0x4*(parseInt(k(0x156))/0x5)+-parseInt(k(0x161))/0x6+-parseInt(k(0x16e))/0x7+parseInt(k(0x162))/0x8*(parseInt(k(0x160))/0x9)+-parseInt(k(0x16c))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x8be7e));function b(c,d){c=c-0x151;const e=a();let f=e[c];return f;}import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';function a(){const q=['_root','draggable','ondragstart','iobroker-webui-screen-viewer','setData','stretchWidth','190PgeUIZ','width','ready','copy','name','define','appendChild','300px','_parseAttributesToProperties','getObjectNames','241515hACVhu','434028cNXQpC','128evDaHX','_filter','_getDomElement','root','screen','height','dataTransfer','2062838CJjwNW','all','3CYKOgW','12675750SuNZQb','settings','7015057eTvJlz','screenName','template','effectAllowed','631069qaYtzo','title','86660NiopOE','200px'];a=function(){return q;};return a();}import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';import{ScreenViewer}from'../runtime/ScreenViewer.js';export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static [l(0x170)]=html`
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
        `;static ['is']='iobroker-webui-screens-view';static ['properties']={};['_root'];[l(0x163)];constructor(){const m=l;super(),super['_restoreCachedInititalValues'](),this[m(0x176)]=this[m(0x164)](m(0x165));}async[l(0x158)](){const n=l;this[n(0x15e)](),this['_assignEvents']();for await(const c of this['_readFolder']()){const d=document['createElement']('div'),e=new ScreenViewer();e['stretch']='fill';const g=await iobrokerHandler['getWebuiObject']('screen',c[n(0x15a)]);if(!g[n(0x16d)]?.[n(0x157)])e[n(0x155)]=0x780;if(!g[n(0x16d)]?.[n(0x167)])e['stretchHeight']=0x438;e[n(0x16f)]=c[n(0x15a)],d[n(0x173)]=c['name'],d[n(0x151)]=!![],d['appendChild'](e),d[n(0x15c)](document['createTextNode'](c[n(0x15a)])),d[n(0x152)]=async h=>{const o=n,i=c[o(0x15a)],j={'tag':o(0x153),'defaultAttributes':{'screen-name':i},'defaultWidth':o(0x15d),'defaultHeight':o(0x175)};if(g?.['settings']?.['width'])j['defaultWidth']=g['settings']['width'];if(g?.[o(0x16d)]?.[o(0x167)])j['defaultHeight']=g['settings'][o(0x167)];return h[o(0x168)][o(0x154)](dragDropFormatNameElementDefinition,JSON['stringify'](j)),h['dataTransfer'][o(0x171)]=o(0x16a),h['dataTransfer']['dropEffect']=o(0x159),!![];},this['_root'][n(0x15c)](d);}}async*['_readFolder'](c=''){const p=l,e=await iobrokerHandler[p(0x15f)](p(0x166),c);for(const h of e){if(this['_filter']){if(!h['match'](this['_filter']))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler['getSubFolders'](p(0x166),c);for(const i of g){yield*this['_readFolder'](c+'/'+i);}}}customElements[l(0x15b)](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);
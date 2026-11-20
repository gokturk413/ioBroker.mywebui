const l=b;function a(){const q=['stretchWidth','_filter','_assignEvents','4749684aTMKRT','_restoreCachedInititalValues','200px','iobroker-webui-screen-viewer','appendChild','createTextNode','300px','setData','11QVFoCa','title','240719IAlTBX','72RzGava','76055HdWwnR','846182oypBne','_root','_readFolder','copy','973ufvtJn','dataTransfer','stretchHeight','4896wXGXhm','height','name','1206RhjOnW','width','settings','3lIZpMK','match','26090yCszQG','draggable','screen','106938KIXfKE','effectAllowed'];a=function(){return q;};return a();}(function(c,d){const k=b,e=c();while(!![]){try{const f=parseInt(k(0x150))/0x1+parseInt(k(0x153))/0x2*(parseInt(k(0x160))/0x3)+parseInt(k(0x151))/0x4*(-parseInt(k(0x152))/0x5)+parseInt(k(0x165))/0x6+parseInt(k(0x157))/0x7*(-parseInt(k(0x15a))/0x8)+-parseInt(k(0x15d))/0x9*(-parseInt(k(0x162))/0xa)+-parseInt(k(0x14e))/0xb*(parseInt(k(0x146))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x43856));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';function b(c,d){c=c-0x144;const e=a();let f=e[c];return f;}import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';import{ScreenViewer}from'../runtime/ScreenViewer.js';export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
        `;static ['is']='iobroker-webui-screens-view';static ['properties']={};[l(0x154)];['_filter'];constructor(){const m=l;super(),super[m(0x147)](),this['_root']=this['_getDomElement']('root');}async['ready'](){const n=l;this['_parseAttributesToProperties'](),this[n(0x145)]();for await(const c of this['_readFolder']()){const d=document['createElement']('div'),e=new ScreenViewer();e['stretch']='fill';const g=await iobrokerHandler['getWebuiObject'](n(0x164),c['name']);if(!g['settings']?.[n(0x15e)])e[n(0x167)]=0x780;if(!g[n(0x15f)]?.[n(0x15b)])e[n(0x159)]=0x438;e['screenName']=c['name'],d[n(0x14f)]=c[n(0x15c)],d[n(0x163)]=!![],d['appendChild'](e),d[n(0x14a)](document[n(0x14b)](c['name'])),d['ondragstart']=async h=>{const o=n,i=c[o(0x15c)],j={'tag':o(0x149),'defaultAttributes':{'screen-name':i},'defaultWidth':o(0x14c),'defaultHeight':o(0x148)};if(g?.[o(0x15f)]?.[o(0x15e)])j['defaultWidth']=g['settings']['width'];if(g?.['settings']?.[o(0x15b)])j['defaultHeight']=g['settings'][o(0x15b)];return h['dataTransfer'][o(0x14d)](dragDropFormatNameElementDefinition,JSON['stringify'](j)),h[o(0x158)][o(0x166)]='all',h['dataTransfer']['dropEffect']=o(0x156),!![];},this[n(0x154)]['appendChild'](d);}}async*[l(0x155)](c=''){const p=l,e=await iobrokerHandler['getObjectNames']('screen',c);for(const h of e){if(this[p(0x144)]){if(!h[p(0x161)](this[p(0x144)]))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler['getSubFolders'](p(0x164),c);for(const i of g){yield*this['_readFolder'](c+'/'+i);}}}customElements['define'](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);
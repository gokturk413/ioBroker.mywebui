function a(){const q=['_restoreCachedInititalValues','width','appendChild','dataTransfer','146346dHtygp','match','properties','300px','165054AemBes','276339gsOySr','567655gYYNSS','iobroker-webui-screens-view','_getDomElement','2177920gALizj','height','646177oXSjsw','stringify','effectAllowed','getSubFolders','style','all','_filter','_readFolder','copy','_root','settings','root','529492fQFWtT','ready','title','40eDdeGB','screen','createTextNode','defaultHeight','200px','ondragstart'];a=function(){return q;};return a();}const l=b;(function(c,d){const k=b,e=c();while(!![]){try{const f=parseInt(k(0x147))/0x1+-parseInt(k(0x141))/0x2+-parseInt(k(0x146))/0x3+parseInt(k(0x158))/0x4+-parseInt(k(0x15b))/0x5*(parseInt(k(0x145))/0x6)+-parseInt(k(0x14c))/0x7+parseInt(k(0x14a))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x78c07));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';import{ScreenViewer}from'../runtime/ScreenViewer.js';export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
        <div id="root"></div>
    `;static [l(0x150)]=css`
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
        `;static ['is']=l(0x148);static [l(0x143)]={};[l(0x155)];[l(0x152)];constructor(){const m=l;super(),super[m(0x13d)](),this['_root']=this[m(0x149)](m(0x157));}async[l(0x159)](){const n=l;this['_parseAttributesToProperties'](),this['_assignEvents']();for await(const c of this['_readFolder']()){const d=document['createElement']('div'),e=new ScreenViewer();e['stretch']='fill';const g=await iobrokerHandler['getWebuiObject']('screen',c['name']);if(!g[n(0x156)]?.[n(0x13e)])e['stretchWidth']=0x780;if(!g['settings']?.[n(0x14b)])e['stretchHeight']=0x438;e['screenName']=c['name'],d[n(0x15a)]=c['name'],d['draggable']=!![],d[n(0x13f)](e),d[n(0x13f)](document[n(0x139)](c['name'])),d[n(0x13c)]=async h=>{const o=n,i=c['name'],j={'tag':'iobroker-webui-screen-viewer','defaultAttributes':{'screen-name':i},'defaultWidth':o(0x144),'defaultHeight':o(0x13b)};if(g?.['settings']?.['width'])j['defaultWidth']=g['settings']['width'];if(g?.[o(0x156)]?.[o(0x14b)])j[o(0x13a)]=g[o(0x156)]['height'];return h['dataTransfer']['setData'](dragDropFormatNameElementDefinition,JSON[o(0x14d)](j)),h[o(0x140)][o(0x14e)]=o(0x151),h['dataTransfer']['dropEffect']=o(0x154),!![];},this[n(0x155)]['appendChild'](d);}}async*[l(0x153)](c=''){const p=l,e=await iobrokerHandler['getObjectNames'](p(0x15c),c);for(const h of e){if(this['_filter']){if(!h[p(0x142)](this['_filter']))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler[p(0x14f)]('screen',c);for(const i of g){yield*this['_readFolder'](c+'/'+i);}}}function b(c,d){c=c-0x139;const e=a();let f=e[c];return f;}customElements['define'](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);
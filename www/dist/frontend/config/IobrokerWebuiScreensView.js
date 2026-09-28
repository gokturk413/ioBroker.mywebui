function b(c,d){c=c-0x137;const e=a();let f=e[c];return f;}function a(){const q=['dataTransfer','getSubFolders','_parseAttributesToProperties','11OoUzJk','settings','15cyOqNL','setData','stretchWidth','appendChild','title','ready','_restoreCachedInititalValues','all','defaultWidth','div','1134915LYaGiD','template','4393932iYfGJr','defaultHeight','screen','height','460562minhGL','effectAllowed','_filter','name','width','copy','19613844OwefyM','stringify','_root','311036LTHXFu','380905dVDSqQ','getWebuiObject','fill','iobroker-webui-screen-viewer','5Ypppmt','screenName','110JhscDP','514251mzenzg','8RqAlDu','_getDomElement','style'];a=function(){return q;};return a();}const l=b;(function(c,d){const k=b,e=c();while(!![]){try{const f=-parseInt(k(0x139))/0x1*(parseInt(k(0x155))/0x2)+parseInt(k(0x145))/0x3*(parseInt(k(0x15e))/0x4)+parseInt(k(0x14f))/0x5+-parseInt(k(0x151))/0x6+parseInt(k(0x15f))/0x7*(-parseInt(k(0x13d))/0x8)+-parseInt(k(0x13c))/0x9*(-parseInt(k(0x13b))/0xa)+-parseInt(k(0x143))/0xb*(-parseInt(k(0x15b))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xe5a6c));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition}from'@gokturk413/web-component-designer';import{ScreenViewer}from'../runtime/ScreenViewer.js';export class IobrokerWebuiScreensView extends BaseCustomWebComponentConstructorAppend{static [l(0x150)]=html`
        <div id="root"></div>
    `;static [l(0x13f)]=css`
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
        `;static ['is']='iobroker-webui-screens-view';static ['properties']={};[l(0x15d)];[l(0x157)];constructor(){const m=l;super(),super[m(0x14b)](),this['_root']=this[m(0x13e)]('root');}async[l(0x14a)](){const n=l;this[n(0x142)](),this['_assignEvents']();for await(const c of this['_readFolder']()){const d=document['createElement'](n(0x14e)),e=new ScreenViewer();e['stretch']=n(0x137);const g=await iobrokerHandler[n(0x160)]('screen',c[n(0x158)]);if(!g[n(0x144)]?.['width'])e[n(0x147)]=0x780;if(!g[n(0x144)]?.[n(0x154)])e['stretchHeight']=0x438;e[n(0x13a)]=c[n(0x158)],d[n(0x149)]=c['name'],d['draggable']=!![],d[n(0x148)](e),d['appendChild'](document['createTextNode'](c[n(0x158)])),d['ondragstart']=async h=>{const o=n,i=c['name'],j={'tag':o(0x138),'defaultAttributes':{'screen-name':i},'defaultWidth':'300px','defaultHeight':'200px'};if(g?.[o(0x144)]?.[o(0x159)])j[o(0x14d)]=g['settings']['width'];if(g?.[o(0x144)]?.[o(0x154)])j[o(0x152)]=g['settings']['height'];return h[o(0x140)][o(0x146)](dragDropFormatNameElementDefinition,JSON[o(0x15c)](j)),h[o(0x140)][o(0x156)]=o(0x14c),h[o(0x140)]['dropEffect']=o(0x15a),!![];},this[n(0x15d)]['appendChild'](d);}}async*['_readFolder'](c=''){const p=l,e=await iobrokerHandler['getObjectNames']('screen',c);for(const h of e){if(this['_filter']){if(!h['match'](this[p(0x157)]))continue;}yield{'name':(c?c+'/':'')+h};}const g=await iobrokerHandler[p(0x141)](p(0x153),c);for(const i of g){yield*this['_readFolder'](c+'/'+i);}}}customElements['define'](IobrokerWebuiScreensView['is'],IobrokerWebuiScreensView);
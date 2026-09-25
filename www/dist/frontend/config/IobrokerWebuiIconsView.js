const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x114))/0x1+parseInt(j(0x121))/0x2*(parseInt(j(0x119))/0x3)+parseInt(j(0x10a))/0x4+parseInt(j(0x10e))/0x5+parseInt(j(0x102))/0x6*(-parseInt(j(0x111))/0x7)+-parseInt(j(0x113))/0x8+parseInt(j(0x10d))/0x9*(parseInt(j(0x11a))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x902e0));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';function b(c,d){c=c-0x100;const e=a();let f=e[c];return f;}import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
        <div id="root"></div>
    `;static [k(0x112)]=css`
        :host {
            box-sizing: border-box;
            background: rgb(44, 46, 53);
        }
        
        #root {
            display: flex;
            flex-wrap: wrap;
            overflow-x: hidden;
            overflow-y: scroll;
            align-content: flex-start;
            gap: 5px;
            height: calc(100% - 20px);
            padding: 10px;
        }

        #root div {
            & img {
                width: 40px;
                height: 40px;
                user-drag: none;
            }
            display: flex;
            flex-direction: column;
            align-items: center;
            color: var(--text-color, white);
            font-size: 10px;
            width: 40px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        `;static ['is']='iobroker-webui-icons-view';static [k(0x109)]={};['_root'];['_filter'];constructor(){const l=k;super(),super['_restoreCachedInititalValues'](),this['_root']=this[l(0x108)](l(0x103));}async['ready'](){const m=k;this[m(0x118)](),this['_assignEvents']();for await(const c of this[m(0x110)]()){let d=c[m(0x10c)];;const e=document[m(0x10b)]('div'),g=document['createElement']('img');g['src']=d,g[m(0x104)]=![],e['title']=c[m(0x105)],e['draggable']=!![],e['appendChild'](g),e['appendChild'](document['createTextNode'](c[m(0x105)])),e['ondragstart']=h=>{const n=m,i={'tag':n(0x107),'defaultAttributes':{'src':d}};return h[n(0x122)]['effectAllowed']=n(0x120),h['dataTransfer'][n(0x11c)](n(0x11b),d),h[n(0x122)]['setData'](dragDropFormatNameElementDefinition,JSON['stringify'](i)),h[n(0x122)]['setData'](dragDropFormatNamePropertyGrid,JSON['stringify']({'type':'icon','text':d})),h[n(0x122)]['dropEffect']=n(0x11e),!![];},this[m(0x10f)]['appendChild'](e);}}async*[k(0x110)](){const c=await iobrokerHandler['getIconAdapterFoldernames']();for(const d of c){yield*this['_readFolder'](d,'');}}async*['_readFolder'](c,d){const o=k,e=await iobrokerHandler[o(0x11f)]['readDir'](c,d);for(const g of e){if(g[o(0x116)])yield*this['_readFolder'](c,d+'/'+g['file']);else{if(!g[o(0x106)][o(0x101)](o(0x100))){if(this[o(0x117)]){if(!g[o(0x106)]['match'](this['_filter']))continue;}const h=g['file'][o(0x11d)]('.'),i=g[o(0x106)][o(0x115)](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g['file']};}}}}}function a(){const p=['515493jTdUjS','substring','isDir','_filter','_parseAttributesToProperties','3XUMlxN','10nqSUpo','text/plain','setData','lastIndexOf','copy','connection','all','1278968sGoaww','dataTransfer','.html','endsWith','6EiYAnG','root','draggable','name','file','img','_getDomElement','properties','3017476OoPzpx','createElement','path','4674330TEDqJw','2881890elMQkS','_root','iconNames','6500459ZmEbLR','style','3639288BifItE'];a=function(){return p;};return a();}customElements['define'](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);
const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x1ce))/0x1*(-parseInt(j(0x1cf))/0x2)+parseInt(j(0x1dc))/0x3+parseInt(j(0x1dd))/0x4+-parseInt(j(0x1ca))/0x5*(parseInt(j(0x1d4))/0x6)+-parseInt(j(0x1de))/0x7*(parseInt(j(0x1e3))/0x8)+parseInt(j(0x1e4))/0x9+parseInt(j(0x1cb))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa1ef6));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';function b(c,d){c=c-0x1c2;const e=a();let f=e[c];return f;}import{iobrokerHandler}from'../common/IobrokerHandler.js';function a(){const p=['4174632naBBhY','7ivHVUx','dropEffect','_getDomElement','createElement','path','9960152tpwwuW','17388rYGZXr','src','dataTransfer','match','file','iobroker-webui-icons-view','stringify','icon','_filter','setData','2122115yoULvd','4707440hKsjDc','lastIndexOf','_readFolder','1dLdMhq','1755694zPXasB','_root','name','properties','draggable','18cefAst','endsWith','img','define','title','connection','appendChild','iconNames','2362179oxzMbA'];a=function(){return p;};return a();}import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
        <div id="root"></div>
    `;static ['style']=css`
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
        `;static ['is']=k(0x1c5);static [k(0x1d2)]={};[k(0x1d0)];[k(0x1c8)];constructor(){const l=k;super(),super['_restoreCachedInititalValues'](),this['_root']=this[l(0x1e0)]('root');}async['ready'](){const m=k;this['_parseAttributesToProperties'](),this['_assignEvents']();for await(const c of this[m(0x1db)]()){let d=c[m(0x1e2)];;const e=document[m(0x1e1)]('div'),g=document[m(0x1e1)](m(0x1d6));g[m(0x1e5)]=d,g[m(0x1d3)]=![],e[m(0x1d8)]=c['name'],e[m(0x1d3)]=!![],e[m(0x1da)](g),e[m(0x1da)](document['createTextNode'](c[m(0x1d1)])),e['ondragstart']=h=>{const n=m,i={'tag':'img','defaultAttributes':{'src':d}};return h[n(0x1c2)]['effectAllowed']='all',h['dataTransfer'][n(0x1c9)]('text/plain',d),h[n(0x1c2)][n(0x1c9)](dragDropFormatNameElementDefinition,JSON['stringify'](i)),h['dataTransfer']['setData'](dragDropFormatNamePropertyGrid,JSON[n(0x1c6)]({'type':n(0x1c7),'text':d})),h['dataTransfer'][n(0x1df)]='copy',!![];},this[m(0x1d0)]['appendChild'](e);}}async*[k(0x1db)](){const c=await iobrokerHandler['getIconAdapterFoldernames']();for(const d of c){yield*this['_readFolder'](d,'');}}async*['_readFolder'](c,d){const o=k,e=await iobrokerHandler[o(0x1d9)]['readDir'](c,d);for(const g of e){if(g['isDir'])yield*this[o(0x1cd)](c,d+'/'+g['file']);else{if(!g[o(0x1c4)][o(0x1d5)]('.html')){if(this['_filter']){if(!g[o(0x1c4)][o(0x1c3)](this[o(0x1c8)]))continue;}const h=g[o(0x1c4)][o(0x1cc)]('.'),i=g['file']['substring'](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g['file']};}}}}}customElements[k(0x1d7)](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);
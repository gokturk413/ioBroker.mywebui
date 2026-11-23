const k=b;(function(c,d){const j=b,e=c();while(!![]){try{const f=-parseInt(j(0x1cd))/0x1*(-parseInt(j(0x1e1))/0x2)+-parseInt(j(0x1ce))/0x3+-parseInt(j(0x1d4))/0x4*(-parseInt(j(0x1d6))/0x5)+parseInt(j(0x1da))/0x6+-parseInt(j(0x1c6))/0x7+parseInt(j(0x1d9))/0x8+-parseInt(j(0x1e2))/0x9*(parseInt(j(0x1c3))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x73a8c));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';function a(){const q=['substring','all','25166ixoBCF','4480335mTzPDb','iconNames','stringify','path','createTextNode','getIconAdapterFoldernames','_root','iobroker-webui-icons-view','10BEpXIi','_assignEvents','effectAllowed','1356558eoalhR','copy','setData','_getDomElement','properties','dataTransfer','endsWith','25gbisQu','1740186KhKZAB','ondragstart','_readFolder','dropEffect','.html','img','4XfDcuo','createElement','487130xgBNvQ','isDir','name','7214184olbgFH','2589822sJsDep','file','text/plain','_filter','appendChild'];a=function(){return q;};return a();}function b(c,d){c=c-0x1bf;const e=a();let f=e[c];return f;}export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static ['template']=html`
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
        `;static ['is']=k(0x1c2);static [k(0x1ca)]={};['_root'];[k(0x1dd)];constructor(){const l=k;super(),super['_restoreCachedInititalValues'](),this['_root']=this[l(0x1c9)]('root');}async['ready'](){const m=k;this['_parseAttributesToProperties'](),this[m(0x1c4)]();for await(const c of this[m(0x1e3)]()){let d=c[m(0x1e5)];;const e=document[m(0x1d5)]('div'),g=document[m(0x1d5)](m(0x1d3));g['src']=d,g['draggable']=![],e['title']=c['name'],e['draggable']=!![],e[m(0x1de)](g),e[m(0x1de)](document[m(0x1bf)](c[m(0x1d8)])),e[m(0x1cf)]=h=>{const n=m,i={'tag':'img','defaultAttributes':{'src':d}};return h['dataTransfer'][n(0x1c5)]=n(0x1e0),h['dataTransfer']['setData'](n(0x1dc),d),h['dataTransfer']['setData'](dragDropFormatNameElementDefinition,JSON[n(0x1e4)](i)),h['dataTransfer'][n(0x1c8)](dragDropFormatNamePropertyGrid,JSON[n(0x1e4)]({'type':'icon','text':d})),h[n(0x1cb)][n(0x1d1)]=n(0x1c7),!![];},this[m(0x1c1)]['appendChild'](e);}}async*[k(0x1e3)](){const o=k,c=await iobrokerHandler[o(0x1c0)]();for(const d of c){yield*this['_readFolder'](d,'');}}async*[k(0x1d0)](c,d){const p=k,e=await iobrokerHandler['connection']['readDir'](c,d);for(const g of e){if(g[p(0x1d7)])yield*this[p(0x1d0)](c,d+'/'+g['file']);else{if(!g[p(0x1db)][p(0x1cc)](p(0x1d2))){if(this['_filter']){if(!g['file']['match'](this[p(0x1dd)]))continue;}const h=g[p(0x1db)]['lastIndexOf']('.'),i=g['file'][p(0x1df)](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g['file']};}}}}}customElements['define'](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);
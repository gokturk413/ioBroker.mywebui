const k=b;function a(){const q=['name','icon','_readFolder','match','text/plain','properties','16wCyUfz','_assignEvents','setData','iobroker-webui-icons-view','file','img','getIconAdapterFoldernames','template','90FCUyYz','337910TQZChU','path','_filter','dataTransfer','17028HgHhsH','draggable','_getDomElement','title','_root','1498984cZYpgU','lastIndexOf','copy','14IwUZqC','9717ggyHXq','readDir','9394066KrObfb','ready','createElement','1662651xVpQTi','dropEffect','substring','all','.html','style','1187138BqjHaZ','div','10eaNpus','iconNames','appendChild'];a=function(){return q;};return a();}function b(c,d){c=c-0x1a0;const e=a();let f=e[c];return f;}(function(c,d){const j=b,e=c();while(!![]){try{const f=parseInt(j(0x1b7))/0x1+-parseInt(j(0x1ca))/0x2*(parseInt(j(0x1ac))/0x3)+-parseInt(j(0x1a8))/0x4*(-parseInt(j(0x1b9))/0x5)+-parseInt(j(0x1a3))/0x6*(parseInt(j(0x1ab))/0x7)+parseInt(j(0x1c2))/0x8*(-parseInt(j(0x1b1))/0x9)+parseInt(j(0x1cb))/0xa+-parseInt(j(0x1ae))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x91632));import{BaseCustomWebComponentConstructorAppend,html,css}from'@gokturk413/base-custom-webcomponent';import{iobrokerHandler}from'../common/IobrokerHandler.js';import{dragDropFormatNameElementDefinition,dragDropFormatNamePropertyGrid}from'@gokturk413/web-component-designer';export class IobrokerWebuiIconsView extends BaseCustomWebComponentConstructorAppend{static [k(0x1c9)]=html`
        <div id="root"></div>
    `;static [k(0x1b6)]=css`
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
        `;static ['is']=k(0x1c5);static [k(0x1c1)]={};[k(0x1a7)];[k(0x1a1)];constructor(){const l=k;super(),super['_restoreCachedInititalValues'](),this[l(0x1a7)]=this[l(0x1a5)]('root');}async[k(0x1af)](){const m=k;this['_parseAttributesToProperties'](),this[m(0x1c3)]();for await(const c of this[m(0x1ba)]()){let d=c[m(0x1a0)];;const e=document[m(0x1b0)](m(0x1b8)),g=document['createElement'](m(0x1c7));g['src']=d,g[m(0x1a4)]=![],e[m(0x1a6)]=c['name'],e['draggable']=!![],e[m(0x1bb)](g),e[m(0x1bb)](document['createTextNode'](c[m(0x1bc)])),e['ondragstart']=h=>{const n=m,i={'tag':n(0x1c7),'defaultAttributes':{'src':d}};return h[n(0x1a2)]['effectAllowed']=n(0x1b4),h[n(0x1a2)][n(0x1c4)](n(0x1c0),d),h[n(0x1a2)][n(0x1c4)](dragDropFormatNameElementDefinition,JSON['stringify'](i)),h[n(0x1a2)]['setData'](dragDropFormatNamePropertyGrid,JSON['stringify']({'type':n(0x1bd),'text':d})),h['dataTransfer'][n(0x1b2)]=n(0x1aa),!![];},this['_root']['appendChild'](e);}}async*['iconNames'](){const o=k,c=await iobrokerHandler[o(0x1c8)]();for(const d of c){yield*this['_readFolder'](d,'');}}async*[k(0x1be)](c,d){const p=k,e=await iobrokerHandler['connection'][p(0x1ad)](c,d);for(const g of e){if(g['isDir'])yield*this[p(0x1be)](c,d+'/'+g['file']);else{if(!g[p(0x1c6)]['endsWith'](p(0x1b5))){if(this['_filter']){if(!g['file'][p(0x1bf)](this['_filter']))continue;}const h=g['file'][p(0x1a9)]('.'),i=g['file'][p(0x1b3)](0x0,h);yield{'name':i,'path':'/'+c+d+'/'+g['file']};}}}}}customElements['define'](IobrokerWebuiIconsView['is'],IobrokerWebuiIconsView);